/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
	STORYBOOK_CURRENT_LOCALE,
	STORYBOOK_CURRENT_TRANSLATIONS,
} from '../decorators/with-i18n'

export const getLocale = STORYBOOK_CURRENT_LOCALE

export const getTranslations = (key: string) => {
	const path = key.split('.')

	const translations = path.reduce((acc, value) => {
		// @ts-expect-error mock
		return acc[value]
	}, STORYBOOK_CURRENT_TRANSLATIONS)

	return (subKey: string) => {
		const subPath = subKey.split('.')

		const translation = subPath.reduce((acc, value) => {
			// @ts-expect-error mock
			return acc[value]
		}, translations)

		return translation
	}
}
