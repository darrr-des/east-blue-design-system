import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 1000 } });
const page = await ctx.newPage();
await page.goto('http://localhost:4321/components/modal', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
await page.evaluate(() => {
  const tab = [...document.querySelectorAll('.comp-tab, .comp-tab-btn')].find((b) => /style/i.test(b.textContent));
  if (tab) tab.click();
});
await page.waitForTimeout(400);
await page.evaluate(() => {
  const t = document.querySelector('.style-colors');
  if (t) t.scrollIntoView({ block: 'center' });
});
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/swatch-modal.png', fullPage: false });

/* Toast — multi-mode shape */
await page.goto('http://localhost:4321/components/toast', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
await page.evaluate(() => {
  const tab = [...document.querySelectorAll('.comp-tab, .comp-tab-btn')].find((b) => /style/i.test(b.textContent));
  if (tab) tab.click();
});
await page.waitForTimeout(400);
await page.evaluate(() => {
  const t = document.querySelector('.style-colors');
  if (t) t.scrollIntoView({ block: 'center' });
});
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/swatch-toast.png', fullPage: false });

await browser.close();
console.log('Wrote /tmp/swatch-modal.png and /tmp/swatch-toast.png');
