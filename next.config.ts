import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

import {
	AVAILABLE_LOCALES_VALUES,
	DEFAULT_LOCALE,
} from '@/shared/constants/locales'

const nextConfig: NextConfig = {
	locales: AVAILABLE_LOCALES_VALUES,
	defaultLocale: DEFAULT_LOCALE,
	localeDetection: false,

	webpack(config) {
		// @ts-ignore
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.('.svg')
		)

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
				use: ['@svgr/webpack'],
			}
		)

		fileLoaderRule.exclude = /\.svg$/i

		return config
	},
	experimental: {
		turbo: {
			rules: {
				'*.svg': {
					loaders: ['@svgr/webpack'],
					as: '*.js',
				},
			},
		},
	},
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
