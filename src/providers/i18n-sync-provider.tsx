import { NextIntlClientProvider } from 'next-intl'
import { type ReactNode } from 'react'

type Props = {
	children: ReactNode
	locale?: string
	messages?: Record<string, string>
}

export const I18nSyncProvider = ({
	children,
	locale = 'en',
	messages = {},
}: Props) => {
	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			{children}
		</NextIntlClientProvider>
	)
}
