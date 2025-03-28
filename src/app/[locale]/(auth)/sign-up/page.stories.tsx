import type { Meta, StoryObj } from '@storybook/react'

import AuthLayout from '../layout'
import SignUpPage from './page'

const meta: Meta<typeof SignUpPage> = {
	title: 'pages/auth/sign-up',
	component: SignUpPage,
	parameters: {
		layout: 'fullscreen',
	},
}
export default meta
type Story = StoryObj<typeof SignUpPage>

export const Default: Story = {
	render: () => (
		<AuthLayout params={Promise.resolve({})}>
			<SignUpPage />
		</AuthLayout>
	),
}
