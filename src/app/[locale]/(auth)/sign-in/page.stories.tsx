import type { Meta, StoryObj } from '@storybook/react'

import AuthLayout from '../layout'
import SignInPage from './page'

const meta: Meta<typeof SignInPage> = {
	title: 'pages/auth/sign-in',
	component: SignInPage,
	parameters: {
		layout: 'fullscreen',
	},
}
export default meta
type Story = StoryObj<typeof SignInPage>

export const Default: Story = {
	render: () => (
		<AuthLayout params={Promise.resolve({})}>
			<SignInPage />
		</AuthLayout>
	),
}
