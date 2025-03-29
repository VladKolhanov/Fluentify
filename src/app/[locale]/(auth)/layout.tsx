import { Routes } from '@/shared/constants/routes'
import { type LayoutProps } from '@/types/app'
import { LanguageToggle } from '@/ui/components/molecules/language-toggle'
import { Link } from '@/ui/components/molecules/link'
import { ThemeToggle } from '@/ui/components/molecules/theme-toggle'
import { HomeIcon } from '@/ui/icons'

export default function AuthLayout({ children }: LayoutProps) {
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
				<span className="hidden sm:block">Home</span>
			</Link>

			{children}
		</div>
	)
}
