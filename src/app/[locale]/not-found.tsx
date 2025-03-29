'use client'

import { useTranslations } from 'next-intl'

import { useRouter } from '@/i18n/navigation'
import { Routes } from '@/shared/constants/routes'
import { ThemeToggle } from '@/ui/components//molecules/theme-toggle'
import { Button } from '@/ui/components/atoms/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/ui/components/atoms/card'
import { LanguageToggle } from '@/ui/components/molecules/language-toggle'
import { Link } from '@/ui/components/molecules/link'
import { ArrowLeftIcon, FileQuestionIcon, HomeIcon } from '@/ui/icons'

export default function NotFound() {
	const router = useRouter()
	const t = useTranslations('NotFoundPage')

	return (
		<div className="grid place-items-center">
			<div className="absolute right-3 top-3 md:right-10 md:top-8 md:space-x-4">
				<ThemeToggle />
				<LanguageToggle />
			</div>
			<Link
				href={Routes.Home}
				variant="ghost"
				className="absolute left-3 top-3 text-xl md:left-10 md:top-8"
			>
				<HomeIcon />
				<span className="hidden sm:block">{t('homeLink')}</span>
			</Link>

			<main className="px-sm grid h-dvh place-items-center">
				<Card className="max-w-md">
					<CardHeader className="text-center">
						<FileQuestionIcon className="text-muted-foreground mx-auto mb-2 size-14 md:mb-4 md:size-20" />
						<CardTitle className="text-3xl">404</CardTitle>
						<CardDescription className="text-xl">
							{t('pageNotFound')}
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4 text-center">
						<p>{t('message')}</p>
						<p className="text-muted-foreground text-sm">{t('subMessage')}</p>
					</CardContent>
					<CardFooter className="flex-center">
						<Button className="w-3/4" onClick={() => router.back()}>
							<ArrowLeftIcon />
							{t('goBack')}
						</Button>
					</CardFooter>
				</Card>
			</main>
		</div>
	)
}
