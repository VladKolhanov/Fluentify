import { render, type RenderOptions } from '@testing-library/react'
import { type ReactNode } from 'react'

import { I18nSyncProvider } from '@/providers/i18n-sync-provider'

type RenderOptionsWithoutWrapper = Omit<RenderOptions, 'wrapper'>

export const renderWithWrapper = (
	children: ReactNode,
	options?: RenderOptionsWithoutWrapper
) => {
	return render(children, {
		...options,
		wrapper: I18nSyncProvider,
	})
}
