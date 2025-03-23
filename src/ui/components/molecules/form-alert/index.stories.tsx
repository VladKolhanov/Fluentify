import type { Meta, StoryObj } from '@storybook/react'

import { FormAlert } from '.'

type StatusType = React.ComponentProps<typeof FormAlert>['status'][]

const meta: Meta<typeof FormAlert> = {
	title: 'components/molecules/form-alert',
	component: FormAlert,
	tags: ['autodocs'],
	argTypes: {
		status: {
			control: 'select',
			options: ['success', 'error'] as StatusType,
			description: 'Determines the alert type (success or error).',
		},
		message: {
			control: 'text',
			description: 'The text message displayed inside the alert.',
			table: {
				type: { summary: 'string' },
			},
		},
	},
	args: {
		message: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
	},
}
export default meta
type Story = StoryObj<typeof FormAlert>

export const Success: Story = {
	args: {
		status: 'success',
	},
}

export const Error: Story = {
	args: {
		status: 'error',
	},
}
