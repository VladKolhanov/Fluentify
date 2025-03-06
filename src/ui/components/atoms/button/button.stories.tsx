import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

type Variants = NonNullable<React.ComponentProps<typeof Button>['variant']>

type Sizes = NonNullable<React.ComponentProps<typeof Button>['size']>

const meta: Meta<typeof Button> = {
	title: 'components/atoms/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: [
				'default',
				'outline',
				'destructive',
				'secondary',
				'ghost',
				'link',
			] as Variants[],
			description: 'Defines the visual style of the link.',
		},
		size: {
			control: 'select',
			options: ['default', 'sm', 'lg', 'icon'] as Sizes[],
			description: 'Controls the size of the link component.',
		},
		asChild: {
			control: 'boolean',
		},
		children: {
			control: 'text',
		},
	},
	args: {
		variant: 'default',
		size: 'default',
		asChild: false,
		children: 'Fluentify',
	},
}
export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
	args: {
		variant: 'default',
	},
}

export const Secondary: Story = {
	args: {
		variant: 'secondary',
	},
}

export const Outline: Story = {
	args: {
		variant: 'outline',
	},
}

export const Destructive: Story = {
	args: {
		variant: 'destructive',
	},
}

export const Ghost: Story = {
	args: {
		variant: 'ghost',
	},
}

export const Link: Story = {
	args: {
		variant: 'link',
	},
}
