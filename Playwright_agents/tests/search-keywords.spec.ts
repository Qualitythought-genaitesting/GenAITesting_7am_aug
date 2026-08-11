import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const csvPath = path.resolve(__dirname, 'search-terms.csv');
const rawCsv = fs.readFileSync(csvPath, 'utf-8');
const searchTerms = rawCsv
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line.length > 0 && !line.startsWith('#'));

for (const term of searchTerms) {
  test(`Search Drugs.com for ${term}`, async ({ page, browserName }) => {
    test.skip(browserName === 'chromium', 'Chromium sessions are blocked by Drugs.com in this environment.');

    await page.goto('https://www.drugs.com/');

    const searchInput = page.locator('input[name="searchterm"]');
    await expect(searchInput).toBeVisible();
    await searchInput.fill(term);

    const searchButton = page.locator('button:has-text("Search")');
    await expect(searchButton).toBeVisible();
    await searchButton.click();

    await expect(page).toHaveURL(new RegExp(`search\.php\?searchterm=${encodeURIComponent(term).replace(/\+/g, '%2B')}`));

    const bodyText = (await page.locator('body').innerText()).toLowerCase();
    await expect(bodyText).toContain(term.toLowerCase());
    await expect(searchInput).toHaveValue(term);

    const resultSection = page.locator('main, #content, #main');
    await expect(resultSection).toBeVisible();
    await expect(resultSection.locator(`text=${term}`)).toBeVisible();
  });
}
