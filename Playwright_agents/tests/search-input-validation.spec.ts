import { test, expect } from '@playwright/test';

test.describe('Drugs.com Search Input Validation', () => {
  test('Validate search input field and form accessibility', async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'Chromium sessions may be blocked by Drugs.com in this environment.');

    await page.goto('https://www.drugs.com/');

    const searchInput = page.locator('input[name="searchterm"]');
    await expect(searchInput).toBeVisible();
    await expect(searchInput).toHaveAttribute('placeholder', 'Enter a drug name, condition, pill imprint, etc.');
    await expect(searchInput).toHaveAttribute('name', 'searchterm');

    const searchForm = searchInput.locator('xpath=ancestor::form[1]');
    await expect(searchForm).toHaveAttribute('action', '/search.php');
    await expect(searchForm).toHaveAttribute('method', 'get');

    const searchButton = searchForm.locator('button[type="submit"], button:has-text("Search")');
    await expect(searchButton).toBeVisible();
    await expect(searchButton).toHaveText(/Search/i);
  });
});
