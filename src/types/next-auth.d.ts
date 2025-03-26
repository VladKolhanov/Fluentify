import { type DefaultSession } from 'next-auth'

import { type RolesType } from '@/shared/constants/roles'

declare module 'next-auth' {
	interface Session {
		user: DefaultSession['user'] & {
			role: RolesType
		}
	}
}
