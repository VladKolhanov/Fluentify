import { db } from '@/db'
import { users } from '@/db/schema'
import { type InsertUsersSchema } from '@/shared/validators/users'

export const getUserByEmail = async (email: InsertUsersSchema['email']) => {
	try {
		const user = await db.query.users.findFirst({
			where: (users, { eq }) => eq(users.email, email),
		})

		return user
	} catch (error) {
		console.error(error)
	}
}

export const getUserById = async (id: NonNullable<InsertUsersSchema['id']>) => {
	try {
		const user = await db.query.users.findFirst({
			where: (users, { eq }) => eq(users.id, id),
		})

		return user
	} catch (error) {
		console.error(error)
	}
}

export const createUser = async (data: InsertUsersSchema) => {
	try {
		const userId = await db
			.insert(users)
			.values(data)
			.returning({ id: users.id })

		return userId
	} catch (error) {
		console.error(error)
	}
}
