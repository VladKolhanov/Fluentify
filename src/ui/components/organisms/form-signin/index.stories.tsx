import type { Meta, StoryObj } from '@storybook/react'

import { FormSignIn } from '.'

const meta: Meta<typeof FormSignIn> = {
	title: 'forms/signin',
	component: FormSignIn,
}

export default meta
type Story = StoryObj<typeof FormSignIn>

export const Default: Story = {
	render: () => {
		return (
			<div className="space-y-6">
				<FormSignIn />
			</div>
		)
	},
}
