import type { Meta, StoryObj } from '@storybook/react'

import { Link as LinkComponent } from '.'

type Variants = NonNullable<
	Extract<
		React.ComponentProps<typeof LinkComponent>,
		{ variant?: unknown }
	>['variant']
>

type Sizes = NonNullable<
	Extract<
		React.ComponentProps<typeof LinkComponent>,
		{ size?: unknown }
	>['size']
>

const meta: Meta<typeof LinkComponent> = {
	title: 'components/molecules/link',
	component: LinkComponent,
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
			if: { arg: 'asWrapper', truthy: false },
		},
		size: {
			control: 'select',
			options: ['default', 'sm', 'lg', 'icon'] as Sizes[],
			description: 'Controls the size of the link component.',
			if: { arg: 'asWrapper', truthy: false },
		},
		asWrapper: {
			control: 'boolean',
			description: 'Disable all styles to pass the component as a wrapper.',
		},
		href: {
			control: 'text',
		},
		children: {
			control: 'text',
		},
	},
	args: {
		variant: 'default',
		asWrapper: false,
		size: 'default',
		href: '/',
		children: 'Fluentify',
	},
}
export default meta
type Story = StoryObj<typeof LinkComponent>

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
