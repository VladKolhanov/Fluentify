import type { Meta, StoryObj } from '@storybook/react'
import { useTranslations } from 'next-intl'

import { WithForm } from '@/storybook/decorators/with-form'

import { FormSubmitButton } from '.'

const meta: Meta<typeof FormSubmitButton> = {
	title: 'components/molecules/form-submit-button',
	component: FormSubmitButton,
	decorators: [WithForm],
}
export default meta
type Story = StoryObj<typeof FormSubmitButton>

export const Default: Story = {
	render: () => {
		const RenderComponent = () => {
			const t = useTranslations('SignInFormComponent')

			return <FormSubmitButton>{t('sendForm')}</FormSubmitButton>
		}

		return <RenderComponent />
	},
}
