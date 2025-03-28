import type { Decorator } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'
import React from 'react'

import enMessages from '@/messages/en.json'
import ukMessages from '@/messages/uk.json'
import {
	type AVAILABLE_LOCALES_TYPE,
	LOCALES_CONST,
} from '@/shared/constants/locales'

export let STORYBOOK_CURRENT_TRANSLATIONS: Messages
export let STORYBOOK_CURRENT_LOCALE: AVAILABLE_LOCALES_TYPE

type Messages = typeof enMessages

const messagesMap: Record<AVAILABLE_LOCALES_TYPE, Messages> = {
	[LOCALES_CONST.EN]: enMessages,
	[LOCALES_CONST.UK]: ukMessages,
}

export const WithIntl: Decorator = (Story, context) => {
	const STORYBOOK_CURRENT_LOCALE = context.globals[
		'locale'
	] as AVAILABLE_LOCALES_TYPE

	STORYBOOK_CURRENT_TRANSLATIONS = messagesMap[STORYBOOK_CURRENT_LOCALE]

	return (
		<NextIntlClientProvider
			locale={STORYBOOK_CURRENT_LOCALE}
			messages={STORYBOOK_CURRENT_TRANSLATIONS}
		>
			<Story />
		</NextIntlClientProvider>
	)
}
