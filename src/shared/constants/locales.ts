export const LOCALES_CONST = {
	EN: 'en',
	UK: 'uk',
} as const

export const AVAILABLE_LOCALES_VALUES = Object.values(LOCALES_CONST)

export type AVAILABLE_LOCALES_TYPE =
	(typeof LOCALES_CONST)[keyof typeof LOCALES_CONST]

export const DEFAULT_LOCALE = LOCALES_CONST.EN
