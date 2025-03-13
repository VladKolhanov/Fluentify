import type { Decorator } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'
import React from 'react'

import enMessages from '@/messages/en.json'
import ukMessages from '@/messages/uk.json'
import {
	type AVAILABLE_LOCALES_TYPE,
	LOCALES_CONST,
} from '@/shared/constants/locales'

const messagesMap: Record<AVAILABLE_LOCALES_TYPE, typeof enMessages> = {
	[LOCALES_CONST.EN]: enMessages,
	[LOCALES_CONST.UK]: ukMessages,
}

export const withIntl: Decorator = (Story, context) => {
	const locale =
		(context.globals['locale'] as AVAILABLE_LOCALES_TYPE) || LOCALES_CONST.EN
	const messages = messagesMap[locale]

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<Story />
		</NextIntlClientProvider>
	)
}
