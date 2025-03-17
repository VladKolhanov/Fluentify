import type { Preview } from '@storybook/react'

import { DEFAULT_LOCALE, LOCALES_CONST } from '@/shared/constants/locales'

import { WithIntl } from './decorators/with-i18n'
import { WithTheme } from './decorators/with-theme'

import '@/ui/styles/main.css'

const preview: Preview = {
	globalTypes: {
		locale: {
			description: 'Internationalization locale',
			toolbar: {
				icon: 'globe',
				items: [
					{ value: LOCALES_CONST.EN, right: 'EN', title: 'English' },
					{ value: LOCALES_CONST.UK, right: 'UK', title: 'Ukrainian' },
				],
				dynamicTitle: true,
			},
		},
		theme: {
			description: 'Global theme for components',
			toolbar: {
				title: 'Theme',
				icon: 'circlehollow',
				items: ['light', 'dark'],
				dynamicTitle: true,
			},
		},
	},
	initialGlobals: {
		locale: DEFAULT_LOCALE,
		theme: 'system',
	},
	parameters: {
		layout: 'centered',
		nextjs: {
			appDirectory: true,
		},
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [WithIntl, WithTheme],
}

export default preview
