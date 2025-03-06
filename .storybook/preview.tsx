import type { Preview } from '@storybook/react'

import { DEFAULT_LOCALE, LocalesEnum } from '@/shared/constants/locales'

import { withIntl } from './decorators/with-i18n'

import '@/ui/styles/main.css'

const preview: Preview = {
	globalTypes: {
		locale: {
			description: 'Internationalization locale',
			toolbar: {
				icon: 'globe',
				items: [
					{ value: LocalesEnum.EN, right: 'EN', title: 'English' },
					{ value: LocalesEnum.UK, right: 'UK', title: 'Ukrainian' },
				],
				dynamicTitle: true,
			},
		},
	},
	initialGlobals: {
		locale: DEFAULT_LOCALE,
	},
	parameters: {
		layout: 'centered',
		controls: {
			expanded: true,
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [withIntl],
}

export default preview
