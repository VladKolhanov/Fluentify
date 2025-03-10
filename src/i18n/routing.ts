import { defineRouting } from 'next-intl/routing'

import {
	AVAILABLE_LOCALES_VALUES,
	DEFAULT_LOCALE,
} from '@/shared/constants/locales'

export const routing = defineRouting({
	locales: AVAILABLE_LOCALES_VALUES,
	defaultLocale: DEFAULT_LOCALE,
	localePrefix: 'as-needed',
	localeDetection: false,
})
