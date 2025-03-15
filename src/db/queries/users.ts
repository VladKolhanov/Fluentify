import { db } from '@/db'

export const getUserByEmail = async (email: string) => {
	try {
		const user = await db.query.users.findFirst({
			where: (users, { eq }) => eq(users.email, email),
		})

		return user
	} catch {
		// TODO: handle error
	}
}
