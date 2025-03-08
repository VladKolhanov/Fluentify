import type { Decorator } from '@storybook/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import React from 'react'

export const withTheme: Decorator = (Story, context) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
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
