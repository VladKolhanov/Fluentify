import { getLocale } from 'next-intl/server'

import { redirect } from '@/i18n/navigation'
import { type AVAILABLE_LOCALES_TYPE } from '@/shared/constants/locales'

export const redirectWithLocale = async (
	href: string,
	forceLocale?: AVAILABLE_LOCALES_TYPE
) => {
	const locale = await getLocale()

	return redirect({ href, locale: forceLocale || locale })
}
