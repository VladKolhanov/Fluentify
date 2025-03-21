import { pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core'

import { generateRandomUUID } from '@/shared/utils'

export const rolesEnum = pgEnum('roles', ['user', 'admin'])

export const users = pgTable('user', {
	id: text().primaryKey().$defaultFn(generateRandomUUID),
	firstName: text('first_name').notNull(),
	lastName: text('last_name').notNull(),
	email: text().unique().notNull(),
	password: text().notNull(),
	role: rolesEnum().default('user'),
	createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
	updatedAt: timestamp('updated_at', { mode: 'date' }),
})
