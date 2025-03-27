import { type TranslationKeys } from '@/types/app'

export enum AuthErrorEnum {
	Configuration = 'Configuration',
	AccessDenied = 'AccessDenied',
	Verification = 'Verification',
	Default = 'Default',
	OAuthAccountNotLinked = 'OAuthAccountNotLinked',
}

export const getAuthError = (
	errorKey: AuthErrorEnum,
	t: TranslationKeys<'errorAuth'>
) => {
	const AuthErrorMap = {
		[AuthErrorEnum.Configuration]: {
			title: t?.('configuration.title'),
			description: t?.('configuration.description'),
		},
		[AuthErrorEnum.AccessDenied]: {
			title: t?.('accessDenied.title'),
			description: t?.('accessDenied.description'),
		},
		[AuthErrorEnum.Verification]: {
			title: t?.('verification.title'),
			description: t?.('verification.description'),
		},
		[AuthErrorEnum.OAuthAccountNotLinked]: {
			title: t?.('OAuthAccountNotLinked.title'),
			description: t?.('OAuthAccountNotLinked.description'),
		},
		[AuthErrorEnum.Default]: {
			title: t?.('default.title'),
			description: t?.('default.description'),
		},
	}

	return AuthErrorMap[errorKey] || AuthErrorMap[AuthErrorEnum.Default]
}
