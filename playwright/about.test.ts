import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('/about')
  await page.getByRole('heading', { name: 'ABOUT US' }).isVisible()
})
