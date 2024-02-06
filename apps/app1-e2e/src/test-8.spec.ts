import { test, expect } from '@playwright/test';
import { waitRandom } from './utils';

test('has title', async ({ page }) => {
  await page.goto('/');

  await waitRandom(5000, 10000);

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});
