import type { Meta, StoryObj } from '@storybook/react'

import NotFoundPage from './not-found'

const meta: Meta<typeof NotFoundPage> = {
	title: 'pages/not-found',
	component: NotFoundPage,
	parameters: {
		layout: 'fullscreen',
	},
}
export default meta
type Story = StoryObj<typeof NotFoundPage>

export const Default: Story = {}
