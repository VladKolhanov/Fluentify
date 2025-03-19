'use client'

import { useTranslations } from 'next-intl'
import { useFormStatus } from 'react-dom'

import { Button } from '@/ui/components/atoms/button'
import { LoaderCircleIcon } from '@/ui/icons'

type Props = React.ComponentProps<typeof Button>

export const FormSubmitButton = ({ children, ...props }: Props) => {
	const { pending } = useFormStatus()
	const t = useTranslations('FormSubmitButtonComponent')

	return (
		<Button disabled={pending} type="submit" {...props}>
			{pending ? (
				<>
					<LoaderCircleIcon className="animate-spin" /> {t('sending')}...
				</>
			) : (
				children
			)}
		</Button>
	)
}
