import type { Meta, StoryObj } from '@storybook/react'

import { WithForm } from '@/storybook/decorators/with-form'

import { FormSubmitButton } from '.'

const meta: Meta<typeof FormSubmitButton> = {
	title: 'components/molecules/form-submit-button',
	component: FormSubmitButton,
	tags: ['autodocs'],
	decorators: [WithForm],
	argTypes: {
		children: {
			control: 'text',
		},
		className: {
			control: 'text',
		},
	},
	args: {
		children: 'Submit',
	},
}
export default meta
type Story = StoryObj<typeof FormSubmitButton>

export const Default: Story = {
	args: {},
}
