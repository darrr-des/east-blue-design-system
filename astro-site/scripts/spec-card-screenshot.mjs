import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 } });
const page = await ctx.newPage();
await page.goto('http://localhost:4321/components/modal', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);

/* Activate Style tab. */
await page.evaluate(() => {
  const tab = [...document.querySelectorAll('.comp-tab, .comp-tab-btn')].find((b) => /style/i.test(b.textContent));
  if (tab) tab.click();
});
await page.waitForTimeout(400);

/* Scroll the first spec card into view. */
await page.evaluate(() => {
  const card = document.querySelector('.spec-card');
  if (card) card.scrollIntoView({ block: 'start' });
});
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/modal-spec-polished.png', fullPage: false });
await browser.close();
console.log('Wrote /tmp/modal-spec-polished.png');
