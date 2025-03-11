import type { Meta, StoryObj } from '@storybook/react'

import { LanguageToggle } from '.'

const meta: Meta<typeof LanguageToggle> = {
	title: 'components/molecules/language-toggle',
	component: LanguageToggle,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof LanguageToggle>

export const Primary: Story = {}
