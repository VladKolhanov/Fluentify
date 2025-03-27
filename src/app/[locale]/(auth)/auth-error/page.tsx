import { getTranslations } from 'next-intl/server'

import {
	type AuthErrorEnum,
	getAuthError,
} from '@/shared/constants/auth-errors'
import { Routes } from '@/shared/constants/routes'
import { type PageProps } from '@/types/app'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/ui/components/atoms/card'
import { FormAlert } from '@/ui/components/molecules/form-alert'
import { Link } from '@/ui/components/molecules/link'
import { ArrowLeftIcon } from '@/ui/icons'

type Props = PageProps<undefined, { error: AuthErrorEnum }>

export default async function AuthError({ searchParams }: Props) {
	const { error: errorKey } = await searchParams
	const t = await getTranslations('errorAuth')

	const error = getAuthError(errorKey, t)

	return (
		<main className="container relative flex h-screen w-screen flex-col items-center justify-center">
			<Card className="mx-auto w-full max-w-md">
				<CardHeader>
					<CardTitle className="text-center text-2xl">{error.title}</CardTitle>
					<CardDescription className="text-center">
						{t('card.description')}
					</CardDescription>
				</CardHeader>

				<CardContent className="space-y-4">
					<FormAlert status="error" message={error.description} />

					<p className="text-muted-foreground text-sm">{t('card.contactUs')}</p>
				</CardContent>

				<CardFooter>
					<Link href={Routes.SignIn} className="w-full">
						<ArrowLeftIcon className="mr-2" />
						{t('card.backToLogin')}
					</Link>
				</CardFooter>
			</Card>
		</main>
	)
}
