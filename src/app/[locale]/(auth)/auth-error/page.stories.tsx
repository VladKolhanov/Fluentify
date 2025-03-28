import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AuthErrorEnum } from '@/shared/constants/auth-errors'

import AuthLayout from '../layout'
import AuthErrorPage from './page'

const meta: Meta<typeof AuthErrorPage> = {
	title: 'pages/auth/auth-error',
	component: AuthErrorPage,
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		searchParams: {
			control: 'select',
			options: Object.values(AuthErrorEnum),
			description:
				'Authentication error types returned by Auth.js during the sign-in process.',
		},
	},
}
export default meta
type Story = StoryObj<typeof AuthErrorPage>

export const Default: Story = {
	render: (args) => {
		const params = Promise.resolve(args.params)
		const searchParams = Promise.resolve({ error: args.searchParams })

		return (
			<AuthLayout params={Promise.resolve({})}>
				{/* @ts-expect-error searchParams must be awaited, but this approach ensures proper behavior in runtime */}
				<AuthErrorPage searchParams={searchParams} params={params} />
			</AuthLayout>
		)
	},
}
