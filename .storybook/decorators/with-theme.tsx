import type { Decorator } from '@storybook/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import React from 'react'

export const WithTheme: Decorator = (Story, context) => {
	const newTheme = context.globals['theme'] as string

	return (
		<NextThemesProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
			forcedTheme={newTheme}
		>
			<Story />
		</NextThemesProvider>
	)
}
