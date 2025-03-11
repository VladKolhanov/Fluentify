import { screen } from '@testing-library/react'

import { renderWithWrapper } from '@/shared/utils/tests'

import { Button } from '.'

describe('Button', () => {
	it('Should correctly render a button element with all props if the "asChild" prop is not passed', () => {
		renderWithWrapper(
			<Button variant="outline" size="lg" className="check-props">
				Fluentify
			</Button>
		)

		const button = screen.getByRole('button')

		expect(button).toBeInTheDocument()
		expect(button).toHaveClass('check-props')
	})
	it('Should pass all props to the child component if the "asChild" prop is present', () => {
		renderWithWrapper(
			<Button variant="outline" size="lg" className="check-props" asChild>
				<p>Fluentify</p>
			</Button>
		)

		const paragraph = screen.getByRole('paragraph')

		expect(paragraph).toBeInTheDocument()
		expect(paragraph).toHaveClass('check-props')
	})
})
