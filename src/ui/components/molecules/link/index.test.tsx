import { cleanup, screen } from '@testing-library/react'

import { Routes } from '@/shared/constants/routes'
import { renderWithWrapper } from '@/shared/utils/tests'

import { Link } from '.'

describe('Link', () => {
	afterEach(() => {
		cleanup()
	})

	it('Should render an <a> tag with the styles and behavior of the Button component when not using asWrapper', () => {
		renderWithWrapper(<Link href={Routes.Home}>Fluentify</Link>)

		const link = screen.getByRole('link')

		expect(link).toBeInTheDocument()
		expect(link).toHaveAttribute('data-slot')
		expect(link).toHaveAttribute('class')
	})

	it('Should render a plain <a> tag without additional styles when asWrapper is passed', () => {
		renderWithWrapper(
			<Link href={Routes.Home} asWrapper>
				Fluentify
			</Link>
		)

		const link = screen.getByRole('link')

		expect(link).toBeInTheDocument()
		expect(link).not.toHaveAttribute('data-slot')
		expect(link).not.toHaveAttribute('class')
	})
})
