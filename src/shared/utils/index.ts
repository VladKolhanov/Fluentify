import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { routing } from '@/i18n/routing'

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}

export const hasLocale = (locale: string): boolean => {
	return routing.locales.includes(locale)
}

export const generateRandomUUID = (): string => {
	return crypto.randomUUID()
}

export const parseFormData = (formData: FormData) => {
	return Object.fromEntries(formData.entries())
}

export const generateActionState = (
	status: 'error' | 'success',
	message: string,
	data?: Record<string, unknown>
) => {
	return { [status]: message, data }
}
