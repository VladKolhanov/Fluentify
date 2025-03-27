import { DrizzleAdapter } from '@auth/drizzle-adapter'
import bcrypt from 'bcryptjs'
import NextAuth, { type NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { db } from '@/db'
import { getUserByEmail, getUserById } from '@/db/queries/users'
import { type RolesType } from '@/shared/constants/roles'
import { Routes } from '@/shared/constants/routes'
import { getUsersSchema } from '@/shared/validators/users'

const config: NextAuthConfig = {
	session: { strategy: 'jwt' },
	pages: {
		signIn: Routes.SignIn,
		newUser: Routes.SignUp,
		error: Routes.AuthError,
	},
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
	callbacks: {
		signIn() {
			return true
		},

		async jwt({ token }) {
			if (!token.sub) return token

			const existingUser = await getUserById(token.sub)

			if (!existingUser) return token

			token['role'] = existingUser.role

			return token
		},

		session({ session, token }) {
			if (token.sub && session.user) {
				session.user.id = token.sub
			}

			if (token['role'] && session.user) {
				session.user.role = token['role'] as RolesType
			}

			return session
		},
	},
}

export const { handlers, auth, signIn, signOut } = NextAuth(config)
