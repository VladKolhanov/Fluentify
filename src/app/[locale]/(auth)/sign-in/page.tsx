import { type Metadata } from 'next'
import { useTranslations } from 'next-intl'

import { SeparatorWithLabel } from '@/ui/components/molecules/separator-with-label'
import { FormSignIn } from '@/ui/components/organisms/form-signin'

export const metadata: Metadata = {
	title: 'Sign In',
}

export default function SignIn() {
	const t = useTranslations('SignInPage')

	return (
		<main className="mt-[60px] space-y-6 md:mt-[100px]">
			<hgroup className="text-center">
				<h1 className="text-2xl font-semibold tracking-tight">{t('title')}</h1>
				<p className="text-muted-foreground text-sm">{t('subtitle')}</p>
			</hgroup>

			<FormSignIn />

			<SeparatorWithLabel label={t('separator')} />

			<section className="grid grid-cols-1 gap-4">
				<button>{t('googleProvider')}</button>
				<button>{t('facebookProvider')}</button>
			</section>
		</main>
	)
}
