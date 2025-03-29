import { NextIntlClientProvider } from 'next-intl'
import { type ReactNode } from 'react'

import enMessages from '@/messages/en.json'

type Props = {
	children: ReactNode
}

export const I18nSyncProvider = ({ children }: Props) => {
	return (
		<NextIntlClientProvider locale="en" messages={enMessages}>
			{children}
		</NextIntlClientProvider>
	)
}
