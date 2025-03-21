import { useTranslations } from 'next-intl'

import { Routes } from '@/shared/constants/routes'
import { Link } from '@/ui/components/molecules/link'
import { SeparatorWithLabel } from '@/ui/components/molecules/separator-with-label'
import { FormSignUp } from '@/ui/components/organisms/form-signup'

export default function SignUp() {
	const t = useTranslations('SignUpPage')

	return (
		<main className="px-sm h-6/7 w-full space-y-6 sm:w-3/5 md:h-2/3 md:w-3/5 lg:w-2/5">
			<hgroup className="text-center">
				<h1 className="text-2xl font-semibold tracking-tight">{t('title')}</h1>
				<p className="text-muted-foreground text-sm">{t('subtitle')}</p>
			</hgroup>

			<FormSignUp />

			<SeparatorWithLabel label={t('separator')} />

			{/* TODO: Add providers */}
			<section className="grid grid-cols-1 gap-4">
				<button>{t('googleProvider')}</button>
				<button>{t('facebookProvider')}</button>
			</section>

			<p className="text-muted-foreground md:text-md px-8 pb-6 text-center text-xl">
				{t('haveAccount')}{' '}
				<Link
					href={Routes.SignIn}
					asWrapper
					className="hover:text-primary underline underline-offset-4"
				>
					{t('signinLink')}
				</Link>
			</p>
		</main>
	)
}
