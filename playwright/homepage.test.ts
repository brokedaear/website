import { test, expect } from '@playwright/test'

test('Homepage has title', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('heading', { name: 'BROKE DA EAR! AUDIO PLUGINS' })
  ).toBeVisible()
})

test('Homepage has contact info', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByText('Contact us at howzit@brokedaear.com')
  ).toBeVisible()
})

test('Homepage has logo image', async ({ page }) => {
  await page.goto('/')

  await expect(
    page.getByRole('img', { name: 'Broke da EAR! Logo' })
  ).toBeVisible()
})
