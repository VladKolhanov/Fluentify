import { type Metadata } from 'next'
import { useTranslations } from 'next-intl'

import { Routes } from '@/shared/constants/routes'
import { Link } from '@/ui/components/molecules/link'
import { SeparatorWithLabel } from '@/ui/components/molecules/separator-with-label'
import { FormSignUp } from '@/ui/components/organisms/form-signup'

export const metadata: Metadata = {
	title: 'Sign Up',
}

export default function SignUp() {
	const t = useTranslations('SignUpPage')

	return (
		<main className="mt-[60px] space-y-6 md:mt-[100px]">
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
