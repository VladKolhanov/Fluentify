import type { Meta, StoryObj } from '@storybook/react'

import { FormSignUp } from '.'

const meta: Meta<typeof FormSignUp> = {
	title: 'forms/signup',
	component: FormSignUp,
}

export default meta
type Story = StoryObj<typeof FormSignUp>

export const Primary: Story = {
	render: () => {
		return (
			<div className="space-y-6">
				<FormSignUp />
			</div>
		)
	},
}
