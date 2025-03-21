import { createInsertSchema } from 'drizzle-zod'
import { z } from 'zod'

import { users } from '@/db/schema'
import { type TranslationKeys } from '@/types/app'

export const getUsersSchema = <TSchema extends keyof typeof schemas>(
	schema: TSchema,
	t?: TranslationKeys<'errorUsersSchema'>
) => {
	const insertBaseSchema = createInsertSchema(users, {
		firstName: (schema) => schema.min(1, t?.('firstNameRequired')),
		lastName: (schema) => schema.min(1, t?.('lastNameRequired')),
		email: (schema) =>
			schema.email(t?.('emailInvalid')).min(1, t?.('emailRequired')),
		password: (schema) =>
			schema
				.min(8, t?.('passwordRequired'))
				.regex(/[A-Z]/, t?.('passwordUppercase'))
				.regex(/\d/, t?.('passwordNumber')),
	})

	const schemas = {
		insertUsersSchema: insertBaseSchema.extend({}),
		signInSchema: insertBaseSchema.pick({
			email: true,
			password: true,
		}),
		signUpSchema: insertBaseSchema
			.pick({
				firstName: true,
				lastName: true,
				email: true,
				password: true,
			})
			.extend({
				confirmPassword: z.string(),
			})
			.refine((data) => data.password === data.confirmPassword, {
				message: t?.('confirmPasswordNotMatch'),
				path: ['confirmPassword'],
			}),
	}

	return schemas[schema]
}

export type InsertUsersSchema = z.infer<
	ReturnType<typeof getUsersSchema<'insertUsersSchema'>>
>

export type SigninSchemaType = z.infer<
	ReturnType<typeof getUsersSchema<'signInSchema'>>
>

export type SignupSchemaType = z.infer<
	ReturnType<typeof getUsersSchema<'signUpSchema'>>
>
