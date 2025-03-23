import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: [
		'@storybook/addon-onboarding',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'storybook-addon-module-mock',
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	staticDirs: ['..\\public'],
	docs: {
		defaultName: 'Documentation',
	},
	features: {
		experimentalRSC: true,
	},
	webpackFinal: (config) => {
		config.module = config.module || {}
		config.module.rules = config.module.rules || []

		const imageRule = config.module.rules.find((rule) =>
			// @ts-ignore
			rule?.['test']?.test('.svg')
		)

		if (imageRule) {
			// @ts-ignore
			imageRule['exclude'] = /\.svg$/
		}

		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		})

		if (config.resolve) {
			config.resolve.alias = {
				...config.resolve.alias,
				'next-intl/server': path.resolve(
					import.meta.dirname,
					'mocks/next-intl-mock.ts'
				),
			}
		}

		return config
	},
}

export default config
