'use client'

import { useLocale, useTranslations } from 'next-intl'

import { usePathname, useRouter } from '@/i18n/navigation'
import {
	type AVAILABLE_LOCALES_TYPE,
	LOCALES_CONST,
} from '@/shared/constants/locales'
import { Button } from '@/ui/components/atoms/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/ui/components/atoms/dropdown-menu'
import { UkraineFlagIcon, UnitedKingdomFlagIcon } from '@/ui/icons'

export const LanguageToggle = () => {
	const router = useRouter()
	const pathname = usePathname()
	const locale = useLocale()
	const t = useTranslations('LanguageToggleComponent')

	const handleClick = (locale: AVAILABLE_LOCALES_TYPE) => {
		router.push(pathname, { locale })
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					className="focus-visible:ring-0 focus-visible:ring-offset-0"
					variant="ghost"
					size="icon"
				>
					{locale === LOCALES_CONST.EN ? (
						<UnitedKingdomFlagIcon />
					) : (
						<UkraineFlagIcon />
					)}
					<span className="sr-only">Toggle language</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>{t('language')}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={() => handleClick(LOCALES_CONST.EN)}>
					<UnitedKingdomFlagIcon /> {t('english')}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleClick(LOCALES_CONST.UK)}>
					<UkraineFlagIcon /> {t('ukrainian')}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
