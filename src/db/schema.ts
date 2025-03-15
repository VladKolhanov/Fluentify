import { pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'

import { generateRandomUUID } from '@/shared/utils'

export const rolesEnum = pgEnum('roles', ['user', 'admin'])

export const users = pgTable('user', {
	id: text().primaryKey().$defaultFn(generateRandomUUID),
	name: text().notNull(),
	email: text().unique().notNull(),
	password: text().notNull(),
	role: rolesEnum().default('user'),
	emailVerified: timestamp('email_verified', { mode: 'date' }),
	createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
	updatedAt: timestamp('updated_at', { mode: 'date' }),
})

export const insertUsersSchema = createInsertSchema(users)
export const selectUsersSchema = createSelectSchema(users)
