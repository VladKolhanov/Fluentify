import { type useTranslations } from 'next-intl'
import { type getTranslations } from 'next-intl/server'

import type messages from '@/messages/en.json'
import { type generateActionState } from '@/shared/utils'

export type LayoutProps = Readonly<{
	children: React.ReactNode
	params: Promise<Record<string, string | string[]>>
}>

export type PageProps<
	TParams extends Record<string, string | string[]> | undefined,
	TSearchParams extends Record<string, string | string[] | undefined>,
> = {
	params: Promise<TParams>
	searchParams: Promise<TSearchParams>
}

export type TranslationKeys<TKey extends keyof typeof messages> =
	| ReturnType<typeof useTranslations<TKey>>
	| Awaited<ReturnType<typeof getTranslations<TKey>>>

export type FormAction<T = ReturnType<typeof generateActionState>> = (
	prevState: T | null,
	formData: FormData
) => Promise<T | null>
