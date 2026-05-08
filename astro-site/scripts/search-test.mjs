import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await ctx.newPage();
await page.goto('http://localhost:4321/components/button', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);

/* Click search */
await page.click('.sidebar-search');
await page.waitForTimeout(400);

const modalState = await page.evaluate(() => {
  const overlay = document.querySelector('.sm-overlay');
  return {
    exists: !!overlay,
    hidden: overlay?.hasAttribute('hidden'),
    visible: overlay?.classList.contains('is-visible'),
    inputFocused: document.activeElement?.classList.contains('sm-input'),
  };
});
console.log('After clicking search:', modalState);
await page.screenshot({ path: '/tmp/search-modal-open.png' });
await browser.close();
