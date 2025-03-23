'use server'

import bcrypt from 'bcryptjs'
import { getLocale, getTranslations } from 'next-intl/server'

import { createUser, getUserByEmail } from '@/db/queries/users'
import { redirect } from '@/i18n/navigation'
import { Routes } from '@/shared/constants/routes'
import { generateActionState, parseFormData } from '@/shared/utils'
import { getUsersSchema } from '@/shared/validators/users'

export const createUserAction = async (
	prevState: ReturnType<typeof generateActionState> | null,
	formData: FormData
) => {
	const t = await getTranslations('errorCreateUserAction')
	const locale = await getLocale()
	const rawFormData = parseFormData(formData)
	const schema = getUsersSchema('signUpSchema')

	const parsedFormData = schema.safeParse(rawFormData)

	if (!parsedFormData.success) {
		return generateActionState('error', t('invalidData'))
	}

	const { email, password, firstName, lastName } = parsedFormData.data

	const existingUser = await getUserByEmail(email)

	if (existingUser) {
		return generateActionState('error', t('emailExist'))
	}

	const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt())

	const userId = await createUser({
		firstName,
		lastName,
		email,
		password: hashedPassword,
	})

	if (userId) {
		redirect({ href: Routes.Dashboard, locale: locale })
	}

	return generateActionState('error', t('unknown'))
}
