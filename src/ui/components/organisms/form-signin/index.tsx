'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useActionState } from 'react'
import { useForm } from 'react-hook-form'

import { signinUserAction } from '@/shared/actions/users'
import { cn } from '@/shared/utils'
import {
	getUsersSchema,
	type SigninSchemaType,
} from '@/shared/validators/users'
import { Form } from '@/ui/components/atoms/form'
import { FormField } from '@/ui/components/molecules/form-field'
import { FormSubmitButton } from '@/ui/components/molecules/form-submit-button'
import { StatusAlert } from '@/ui/components/molecules/status-alert'

type Props = {
	className?: string
}

export const FormSignIn = ({ className }: Props) => {
	const [actionState, formAction] = useActionState(signinUserAction, null)
	const tErrors = useTranslations('errorUsersSchema')
	const t = useTranslations('SignInFormComponent')

	const form = useForm<SigninSchemaType>({
		resolver: zodResolver(getUsersSchema('signInSchema', tErrors)),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onBlur',
	})

	return (
		<>
			{actionState && (
				<StatusAlert
					status={actionState.status}
					message={actionState.message}
				/>
			)}

			<Form {...form}>
				<form
					className={cn('grid gap-y-7 md:gap-x-6 lg:gap-x-12', className)}
					action={formAction}
				>
					<FormField<SigninSchemaType>
						name="email"
						label={t('email')}
						inputProps={{
							type: 'email',
							autoComplete: 'email',
							placeholder: 'name@example.com',
						}}
					/>

					<FormField<SigninSchemaType>
						name="password"
						label={t('password')}
						inputProps={{
							type: 'password',
							autoComplete: 'current-password',
						}}
					/>

					<FormSubmitButton
						disabled={!form.formState.isValid}
						className="w-full cursor-pointer"
					>
						{t('sendForm')}
					</FormSubmitButton>
				</form>
			</Form>
		</>
	)
}
