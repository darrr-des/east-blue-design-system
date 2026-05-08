import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();
await page.goto('http://localhost:4321/components/radio-button', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);

await page.evaluate(() => {
  const tab = [...document.querySelectorAll('.comp-tab, .comp-tab-btn')].find((b) => /style/i.test(b.textContent));
  if (tab) tab.click();
});
await page.waitForTimeout(400);
await page.evaluate(() => {
  const c = document.querySelector('.spec-card');
  if (c) c.scrollIntoView({ block: 'start' });
});
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/radio-spec-default.png', fullPage: false });

/* Flip the controls — should re-render the SVG */
await page.evaluate(() => {
  const selSelected = document.querySelector('select[onchange*="selected"]');
  if (selSelected) {
    selSelected.value = 'selected';
    selSelected.dispatchEvent(new Event('change'));
  }
});
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/radio-spec-selected.png', fullPage: false });

await browser.close();
console.log('Wrote /tmp/radio-spec-default.png and /tmp/radio-spec-selected.png');
