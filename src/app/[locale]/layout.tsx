import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { I18nProvider } from '@/providers/i18n-provider'
import { hasLocale } from '@/shared/utils'
import { type LayoutProps } from '@/types/app'
import { breeSerif, lato } from '@/ui/fonts'

import '@/ui/styles/main.css'

export const metadata: Metadata = {
	title: { default: 'Fluentify', template: '%s | Fluentify' },
	description: 'English dictionary',
	metadataBase: new URL('http://localhost:3000'),
	applicationName: 'Fluentify',
	icons: '/favicon/favicon.svg',
}

export default async function RootLayout({ children, params }: LayoutProps) {
	const { locale } = await params

	if (typeof locale !== 'string' || !hasLocale(locale)) {
		notFound()
	}

	return (
		<html lang={locale}>
			<body className={`${breeSerif.variable} ${lato.variable} antialiased`}>
				<I18nProvider>{children}</I18nProvider>
			</body>
		</html>
	)
}
