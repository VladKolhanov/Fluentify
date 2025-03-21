import { DrizzleAdapter } from '@auth/drizzle-adapter'
import bcrypt from 'bcryptjs'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { db } from '@/db'
import { getUserByEmail } from '@/db/queries/users'
import { getUsersSchema } from '@/shared/validators/users'

export const { handlers, auth, signIn, signOut } = NextAuth({
	session: { strategy: 'jwt' },

	adapter: DrizzleAdapter(db),
	providers: [
		Credentials({
			async authorize(credentials) {
				const schema = getUsersSchema('signInSchema')
				const validatedFields = schema.safeParse(credentials)

				if (!validatedFields.success) return null

				const { email, password } = validatedFields.data

				const user = await getUserByEmail(email)

				if (!user) return null

				const isPasswordValid = await bcrypt.compare(password, user.password)

				if (!isPasswordValid) return null

				return {
					id: user.id,
					firstName: user.firstName,
					lastName: user.lastName,
					email: user.email,
					role: user.role,
				}
			},
		}),
	],
	callbacks: {},
})
