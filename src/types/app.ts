import { type useTranslations } from 'next-intl'
import { type getTranslations } from 'next-intl/server'

import type messages from '@/messages/en.json'
import { type generateActionState } from '@/shared/utils'

export type LayoutProps = Readonly<{
	children: React.ReactNode
	params: Promise<Record<string, string | string[]>>
}>

export type PageProps = {
	params: Promise<Record<string, string | string[]>>
	searchParams: Promise<Record<string, string | string[] | undefined>>
}

export type TranslationKeys<TKey extends keyof typeof messages> =
	| ReturnType<typeof useTranslations<TKey>>
	| Awaited<ReturnType<typeof getTranslations<TKey>>>

export type FormAction<T = ReturnType<typeof generateActionState>> = (
	prevState: T | null,
	formData: FormData
) => Promise<T | null>
