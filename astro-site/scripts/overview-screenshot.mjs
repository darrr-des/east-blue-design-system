import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
/* Scroll to the CTA at bottom. */
await page.evaluate(() => {
  const el = document.querySelector('.overview-cta');
  if (el) el.scrollIntoView({ block: 'center' });
});
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/overview-cta.png', fullPage: false });
await browser.close();
console.log('Wrote /tmp/overview-cta.png');
