import { test, expect } from '@playwright/test';

test.describe('Drugs.com Core Functional Tests', () => {
  test('Validate footer and support links', async ({ page, browserName }) => {
    // Skip Chromium because Drugs.com returns a 403 for automated Chromium sessions.
    test.skip(browserName === 'chromium', 'Chromium is blocked by Drugs.com in this environment.');

    // 1. Navigate to https://www.drugs.com/.
    await page.goto('https://www.drugs.com/');

    // 2. Scroll to the bottom of the homepage to expose the footer section.
    const footer = page.locator('footer, [role="contentinfo"], #footer');
    await expect(footer).toHaveCount(1);
    await footer.scrollIntoViewIfNeeded();

    const helpCenterLink = footer.locator('a[href="/support/"], a[href="/support"]').filter({ hasText: /help/i }).first();
    await expect(helpCenterLink).toHaveCount(1);

    // 3. Verify the footer contains informational links and a visible Help & Support link.
    await expect(page.locator('a', { hasText: /about drugs\.com/i })).toBeVisible();
    await expect(page.locator('a', { hasText: /advertising policy/i })).toBeVisible();
    await expect(helpCenterLink).toBeAttached();

    // 4. Click the Help & Support link.
    await helpCenterLink.click({ force: true });

    // 5. Verify navigation begins to /support/ or a support page and loads support information.
    await expect(page).toHaveURL(/\/support\/?$/);
    await expect(page).toHaveTitle(/Support Center/i);
    await expect(page.locator('text=Contact us')).toBeVisible();
  });
});
