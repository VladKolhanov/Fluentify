import React from 'react'
import { NextIntlClientProvider } from 'next-intl'
import type { Decorator } from '@storybook/react'

import enMessages from '@/messages/en.json'
import ukMessages from '@/messages/uk.json'
import { LocalesEnum } from '@/shared/constants/locales'

const messagesMap: Record<LocalesEnum, typeof enMessages> = {
	[LocalesEnum.EN]: enMessages,
	[LocalesEnum.UK]: ukMessages,
}

export const withIntl: Decorator = (Story, context) => {
	const locale = (context.globals['locale'] as LocalesEnum) || LocalesEnum.EN
	const messages = messagesMap[locale]

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<Story />
		</NextIntlClientProvider>
	)
}
