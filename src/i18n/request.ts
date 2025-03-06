import { type Formats } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

import { hasLocale } from '@/shared/utils'

import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
	let locale = await requestLocale

	if (!locale || !hasLocale(locale)) {
		locale = routing.defaultLocale
	}

	return {
		locale,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
		messages: (await import(`../../messages/${locale}.json`)).default,
	}
})

export const formats = {
	dateTime: {
		short: {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
		},
	},
	number: {
		precise: {
			maximumFractionDigits: 5,
		},
	},
	list: {
		enumeration: {
			style: 'long',
			type: 'conjunction',
		},
	},
} satisfies Formats
