import type { Meta, StoryObj } from '@storybook/react'

import {
	type MockStorybookSchemaType,
	WithForm,
} from '@/storybook/decorators/with-form'

import { FormField } from '.'

const meta: Meta<typeof FormField> = {
	title: 'components/molecules/form-field',
	component: FormField,
	tags: ['autodocs'],
	decorators: [WithForm],
	argTypes: {
		label: {
			control: 'text',
			description: 'Label text displayed near the input field.',
		},
		name: {
			control: 'text',
			description: 'Field name corresponding to the Drizzle schema',
		},
		inputProps: {
			control: 'object',
			description: 'Props passed directly to the input element',
		},
		className: {
			control: 'text',
		},
	},
}
export default meta
type Story = StoryObj<typeof FormField>

export const Primary: Story = {
	render: (args) => (
		<div className="rounded-2xl bg-black/30 px-4 py-6">
			<FormField<MockStorybookSchemaType> {...args} name="userName" />
		</div>
	),
	args: {
		label: 'User name',
		inputProps: { type: 'text', autoComplete: 'name' },
	},
}
