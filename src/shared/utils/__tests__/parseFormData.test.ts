import { parseFormData } from '../.'

describe('parseFormData', () => {
	it('Should correctly parse FormData into an object', () => {
		const formData = new FormData()
		formData.append('name', 'John')
		formData.append('age', '30')

		const result = parseFormData(formData)

		expect(result).toEqual({ name: 'John', age: '30' })
	})

	it('Should handle empty FormData', () => {
		const formData = new FormData()

		const result = parseFormData(formData)

		expect(result).toEqual({})
	})

	it('Should handle multiple values for the same key in FormData', () => {
		const formData = new FormData()
		formData.append('hobby', 'reading')
		formData.append('hobby', 'gaming')

		const result = parseFormData(formData)

		expect(result).toEqual({ hobby: 'gaming' })
	})
})
