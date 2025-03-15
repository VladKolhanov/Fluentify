import { DrizzleAdapter } from '@auth/drizzle-adapter'
import bcrypt from 'bcryptjs'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { db } from '@/db'
import { getUserByEmail } from '@/db/queries/users'
import { insertUsersSchema } from '@/db/schema'

export const { handlers, auth, signIn, signOut } = NextAuth({
	session: { strategy: 'jwt' },

	adapter: DrizzleAdapter(db),
	providers: [
		Credentials({
			async authorize(credentials) {
				const validatedFields = insertUsersSchema.safeParse(credentials)

				if (!validatedFields.success) return null

				const { email, password } = validatedFields.data

				const user = await getUserByEmail(email)

				if (!user) return null

				const isPasswordValid = await bcrypt.compare(password, user.password)

				if (!isPasswordValid) return null

				return {
					id: user.id,
					name: user.name,
					email: user.email,
					role: user.role,
				}
			},
		}),
	],
	callbacks: {},
})
