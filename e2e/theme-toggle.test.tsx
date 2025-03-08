import { expect, test } from '@playwright/test'

test.describe('theme toggle', () => {
	test('switches from light to dark', async ({ page }) => {
		await page.goto('/')

		const initialClass = await page.locator('html').getAttribute('class')

		await page.getByRole('button', { name: 'Toggle theme' }).click()
		await page.getByRole('menuitem', { name: 'dark' }).click()

		const newTheme = await page.evaluate(() => localStorage.getItem('theme'))
		expect(newTheme).toBe('dark')

		await expect(page.locator('html')).not.toHaveAttribute(
			'class',
			initialClass!
		)
	})
})
