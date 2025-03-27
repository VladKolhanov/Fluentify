'use server'

import bcrypt from 'bcryptjs'
import { AuthError } from 'next-auth'
import { getTranslations } from 'next-intl/server'

import { createUser, getUserByEmail } from '@/db/queries/users'
import { DEFAULT_REDIRECT_PATH, Routes } from '@/shared/constants/routes'
import { signIn, signOut } from '@/shared/libs/auth'
import { generateActionState, parseFormData } from '@/shared/utils'
import { redirectWithLocale } from '@/shared/utils/server'
import { getUsersSchema } from '@/shared/validators/users'
import { type FormAction } from '@/types/app'

export const createUserAction: FormAction = async (_, formData) => {
	const t = await getTranslations('errorCreateUserAction')
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
		await redirectWithLocale(Routes.Dashboard)
	}

	return generateActionState('error', t('unknown'))
}

export const signinUserAction: FormAction = async (_, formData) => {
	const data = parseFormData(formData)
	let isSignInSuccess = false

	try {
		await signIn('credentials', {
			...data,
			redirect: false,
		})

		isSignInSuccess = true
	} catch (error) {
		const t = await getTranslations('errorSignIn')

		if (error instanceof AuthError) {
			switch (error.type) {
				case 'CredentialsSignin':
					return generateActionState('error', t('badData'))
				default:
					return generateActionState('error', t('unexpectedError'))
			}
		}
	}

	if (isSignInSuccess) {
		await redirectWithLocale(DEFAULT_REDIRECT_PATH)
	}

	return null
}

export const signoutUserAction = async () => {
	await signOut({ redirect: false })

	await redirectWithLocale(Routes.Home)
}
