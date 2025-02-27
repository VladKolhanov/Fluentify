import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { type ReactNode } from 'react'

type Props = {
	children: ReactNode
}

export const I18nProvider = async ({ children }: Props) => {
	const messages = await getMessages()

	return (
		<NextIntlClientProvider messages={messages}>
			{children}
		</NextIntlClientProvider>
	)
}
