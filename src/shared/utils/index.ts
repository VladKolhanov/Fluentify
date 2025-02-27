import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { routing } from '@/i18n/routing'

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs))
}

export const hasLocale = (locale: string) => {
	return routing.locales.includes(locale)
}
