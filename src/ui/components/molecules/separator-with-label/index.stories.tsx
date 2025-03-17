import type { Meta, StoryObj } from '@storybook/react'

import { SeparatorWithLabel } from '.'

const meta: Meta<typeof SeparatorWithLabel> = {
	title: 'components/molecules/separator-with-label',
	component: SeparatorWithLabel,
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
		},
	},
}
export default meta
type Story = StoryObj<typeof SeparatorWithLabel>

export const Primary: Story = {
	render: (args) => (
		<div className="w-[40dvw]">
			<SeparatorWithLabel {...args} />
		</div>
	),
	args: {
		label: 'Fluentify',
	},
}
