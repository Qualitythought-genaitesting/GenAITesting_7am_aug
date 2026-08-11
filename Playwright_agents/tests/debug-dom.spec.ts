import { test } from '@playwright/test';

test('debug Drugs.com footer DOM in Chromium', async ({ page }) => {
  const response = await page.goto('https://www.drugs.com/');
  console.log('page.url', page.url());
  console.log('status', response?.status());
  const result = await page.evaluate(() => {
    const footer = document.querySelector('footer, [role="contentinfo"], #footer');
    const body = document.querySelector('body');
    const allLinks = Array.from(document.querySelectorAll('a')).map(a => ({ text: a.textContent?.trim(), href: a.getAttribute('href'), visible: !!(a.offsetWidth || a.offsetHeight) }));
    const support = Array.from(document.querySelectorAll('a[href="/support/"], a[href="/support"]')).map(a => ({ text: a.textContent?.trim(), visible: !!(a.offsetWidth || a.offsetHeight) }));
    return {
      readyState: document.readyState,
      footerExists: !!footer,
      footerTag: footer?.tagName,
      footerRole: footer?.getAttribute('role'),
      footerId: footer?.id,
      bodyHTMLLength: body?.innerHTML.length,
      bodyTextLength: body?.textContent?.length,
      footerText: footer?.textContent?.slice(0, 200),
      supportLinks: support,
      totalLinks: allLinks.length,
      sampleLinks: allLinks.slice(0, 20),
    };
  });
  console.log(JSON.stringify(result, null, 2));
});