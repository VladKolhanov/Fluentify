import type { Meta, StoryObj } from '@storybook/react'

import { Logo } from '.'

const meta: Meta<typeof Logo> = {
	title: 'components/atoms/logo',
	component: Logo,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Logo>

export const Primary: Story = {}
