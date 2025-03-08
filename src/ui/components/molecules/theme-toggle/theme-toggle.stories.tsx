import type { Meta, StoryObj } from '@storybook/react'

import { ThemeToggle } from './theme-toggle'

const meta: Meta<typeof ThemeToggle> = {
	title: 'components/molecules/theme-toggle',
	component: ThemeToggle,
	tags: ['autodocs'],
	decorators: [
		(Story) => {
			return (
				<div className="rounded-2xl bg-black/30 p-4">
					<Story />
				</div>
			)
		},
	],
}

export default meta
type Story = StoryObj<typeof ThemeToggle>

export const Primary: Story = {}
