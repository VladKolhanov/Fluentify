import { expect, test } from '@playwright/test'

test.describe('language-toggle', () => {
	test('should toggle language from English to Ukrainian', async ({ page }) => {
		await page.goto('/')

		await page.getByRole('button', { name: 'Toggle language' }).click()
		await page.getByRole('menuitem', { name: 'Ukrainian' }).click()

		await expect(page).toHaveURL(/\/uk/)
	})
})
