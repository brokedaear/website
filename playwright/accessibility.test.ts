import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { fakePage } from './testVariables'

test('Homepage has no accessibility issues', async ({ page }) => {
  await page.goto('/')

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

  expect(accessibilityScanResults.violations).toHaveLength(0)
})

test('404 page has no accessibility issues', async ({ page }) => {
  await page.goto(fakePage)

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

  expect(accessibilityScanResults.violations).toHaveLength(0)
})
