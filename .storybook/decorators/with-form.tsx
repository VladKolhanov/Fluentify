import { zodResolver } from '@hookform/resolvers/zod'
import { type Decorator } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { wait } from '@/shared/utils'
import { Form } from '@/ui/components/atoms/form'

export const mockStorybookSchema = z.object({
	userName: z.string().min(1, 'field userName is required'),
})

export type MockStorybookSchemaType = z.infer<typeof mockStorybookSchema>

export const WithForm: Decorator = (Story) => {
	const form = useForm<MockStorybookSchemaType>({
		resolver: zodResolver(mockStorybookSchema),
		mode: 'onBlur',
		defaultValues: {
			userName: '',
		},
	})

	return (
		<Form {...form}>
			<form
				action={async () => {
					await wait(2000)
				}}
			>
				<Story />
			</form>
		</Form>
	)
}
