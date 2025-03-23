import { generateActionState } from '..'

describe('generateActionState', () => {
	it('should generate action state with error status', () => {
		const result = generateActionState('error', 'test message')

		expect(result).toEqual({ status: 'error', message: 'test message' })
	})

	it('should include data when provided', () => {
		const data = { userId: 1, role: 'admin' }

		const result = generateActionState('success', 'test message', data)

		expect(result).toEqual({
			status: 'success',
			message: 'test message',
			data: data,
		})
	})

	it('should set data to undefined when not provided', () => {
		const result = generateActionState('error', 'test message')

		expect(result).toEqual({
			status: 'error',
			message: 'test message',
			data: undefined,
		})
	})
})
