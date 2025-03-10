import { useTranslations } from 'next-intl'

import { Routes } from '@/shared/constants/routes'
import { Button } from '@/ui/components/atoms/button'
import { Logo } from '@/ui/components/atoms/logo'
import { Separator } from '@/ui/components/atoms/separator'
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from '@/ui/components/atoms/sheet'
import { LanguageToggle } from '@/ui/components/molecules/language-toggle'
import { Link } from '@/ui/components/molecules/link'
import { ThemeToggle } from '@/ui/components/molecules/theme-toggle'
import { MenuIcon } from '@/ui/icons'

export const Header = () => {
	const t = useTranslations('HeaderComponent')

	return (
		<header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 grid grid-cols-[1fr_max-content_max-content_max-content] items-center justify-items-start gap-6 border-b px-6 backdrop-blur">
			<Link href={Routes.Home} asWrapper>
				<Logo />
			</Link>

			<ThemeToggle />
			<LanguageToggle />

			<nav className="hidden gap-4 md:flex">
				<Link href={Routes.SignIn} variant="outline">
					{t('signIn')}
				</Link>
				<Link href={Routes.SignUp}>{t('signUp')}</Link>
			</nav>

			<Sheet>
				<SheetTrigger asChild>
					<Button className="md:hidden" variant="ghost">
						<MenuIcon />
					</Button>
				</SheetTrigger>
				<SheetContent className="min-h-2/3" side="bottom">
					<SheetTitle className="sr-only">Menu</SheetTitle>

					<nav className="mt-8 flex flex-col items-center gap-4">
						{/* TODO: place for list navigation on home page section (Features, Prices ...) */}
						<ul>
							<li>A</li>
							<li>B</li>
							<li>C</li>
						</ul>
						{/* */}

						<Separator />

						<div className="grid w-full grid-cols-[.8fr] grid-rows-2 justify-center gap-2 sm:grid-cols-[.5fr]">
							<Link href={Routes.SignIn} variant="outline">
								{t('signIn')}
							</Link>
							<Link href={Routes.SignUp}>{t('signUp')}</Link>
						</div>
					</nav>
				</SheetContent>
			</Sheet>
		</header>
	)
}
