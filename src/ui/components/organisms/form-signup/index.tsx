'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useActionState } from 'react'
import { useForm } from 'react-hook-form'

import { createUserAction } from '@/shared/actions/users'
import { cn } from '@/shared/utils'
import {
	getUsersSchema,
	type SignupSchemaType,
} from '@/shared/validators/users'
import { Form } from '@/ui/components/atoms/form'
import { FormField } from '@/ui/components/molecules/form-field'
import { FormSubmitButton } from '@/ui/components/molecules/form-submit-button'
import { StatusAlert } from '@/ui/components/molecules/status-alert'

type Props = {
	className?: string
}

export const FormSignUp = ({ className }: Props) => {
	const [actionState, formAction] = useActionState(createUserAction, null)

	const tErrors = useTranslations('errorUsersSchema')
	const t = useTranslations('SignUpFormComponent')

	const form = useForm<SignupSchemaType>({
		resolver: zodResolver(getUsersSchema('signUpSchema', tErrors)),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
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
					action={formAction}
					className={cn(
						'grid gap-y-7 md:grid-cols-2 md:gap-x-6 lg:gap-x-12',
						className
					)}
				>
					<FormField<SignupSchemaType>
						className="col-span-2 md:col-span-1"
						name="firstName"
						label={t('firstName')}
						inputProps={{
							type: 'text',
							autoComplete: 'name',
							placeholder: 'John',
						}}
					/>

					<FormField<SignupSchemaType>
						className="col-span-2 md:col-span-1"
						name="lastName"
						label={t('lastName')}
						inputProps={{
							type: 'text',
							autoComplete: 'name',
							placeholder: 'Doe',
						}}
					/>

					<FormField<SignupSchemaType>
						className="col-span-2"
						name="email"
						label={t('email')}
						inputProps={{
							type: 'email',
							autoComplete: 'email',
							placeholder: 'name@example.com',
						}}
					/>

					<FormField<SignupSchemaType>
						className="col-span-2"
						name="password"
						label={t('password')}
						inputProps={{
							type: 'password',
							autoComplete: 'new-password',
						}}
					/>

					<FormField<SignupSchemaType>
						className="col-span-2"
						name="confirmPassword"
						label={t('confirmPassword')}
						inputProps={{
							type: 'password',
							autoComplete: 'new-password',
						}}
					/>

					<FormSubmitButton
						disabled={!form.formState.isValid}
						className="col-span-2 w-full cursor-pointer"
					>
						{t('sendForm')}
					</FormSubmitButton>
				</form>
			</Form>
		</>
	)
}
