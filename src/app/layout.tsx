import type { Metadata } from 'next'

import { type LayoutProps } from '@/types/app'
import { breeSerif, lato } from '@/ui/fonts'

import '@/styles/main.css'

export const metadata: Metadata = {
	title: { default: 'Fluentify', template: '%s | Fluentify' },
	description: 'English dictionary',
	applicationName: 'Fluentify',
	icons: '/favicon/favicon.svg',
}

export default function RootLayout({ children }: LayoutProps) {
	return (
		<html lang="en">
			<body className={`${breeSerif.variable} ${lato.variable} antialiased`}>
				{children}
			</body>
		</html>
	)
}
