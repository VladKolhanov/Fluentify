import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

import { AVAILABLE_LOCALES, DEFAULT_LOCALE } from '@/shared/constants/locales'

const nextConfig: NextConfig = {
	locales: AVAILABLE_LOCALES,
	defaultLocale: DEFAULT_LOCALE,
	localeDetection: false,
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
