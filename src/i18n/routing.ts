import { defineRouting } from 'next-intl/routing'

import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/shared/constants/locales'

export const routing = defineRouting({
	locales: AVAILABLE_LOCALES,
	defaultLocale: DEFAULT_LOCALE,
	localePrefix: 'as-needed',
	localeDetection: false,
})
