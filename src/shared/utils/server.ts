import { cookies } from 'next/headers'

import { DEFAULT_LOCALE } from '@/shared/constants/locales'

export const getLocaleFromCookies = async (): Promise<string> => {
	return (await cookies()).get('NEXT_LOCALE')?.value ?? DEFAULT_LOCALE
}
