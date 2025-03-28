import type { Meta, StoryObj } from '@storybook/react'

import { StatusAlert } from '.'

type StatusType = React.ComponentProps<typeof StatusAlert>['status'][]

const meta: Meta<typeof StatusAlert> = {
	title: 'components/molecules/form-alert',
	component: StatusAlert,
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
type Story = StoryObj<typeof StatusAlert>

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
