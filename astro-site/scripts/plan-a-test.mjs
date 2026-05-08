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

const baseline = await page.evaluate(() => {
  const card = document.querySelector('#spec-card-default');
  if (!card) return { error: 'no card' };
  const heightRow = [...card.querySelectorAll('.spec-prop')].find((r) => /Height/i.test(r.textContent));
  return {
    foundCard: !!card,
    heightDisplay: heightRow ? heightRow.querySelector('.spec-prop-hex')?.textContent : null,
    variantsAttr: heightRow ? heightRow.querySelector('[data-row-variants]')?.getAttribute('data-row-variants')?.slice(0, 100) : null,
    specCardsState: window._specCards ? JSON.stringify(window._specCards) : null,
  };
});
console.log('baseline:', JSON.stringify(baseline, null, 2));

/* Flip cta to 2-vertical via the demo control inside Card 1 */
await page.evaluate(() => {
  const card = document.querySelector('#spec-card-default');
  const sel = card?.querySelector('select[onchange*="cta"]');
  if (sel) {
    sel.value = '2-vertical';
    sel.dispatchEvent(new Event('change'));
  }
});
await page.waitForTimeout(400);

const after = await page.evaluate(() => {
  const card = document.querySelector('#spec-card-default');
  const heightRow = [...card.querySelectorAll('.spec-prop')].find((r) => /Height/i.test(r.textContent));
  return {
    heightDisplay: heightRow ? heightRow.querySelector('.spec-prop-hex')?.textContent : null,
    specCardsState: window._specCards ? JSON.stringify(window._specCards) : null,
  };
});
console.log('after cta=2-vertical:', JSON.stringify(after, null, 2));

await page.evaluate(() => {
  const card = document.querySelector('#spec-card-default');
  if (card) card.scrollIntoView({ block: 'start' });
});
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/plan-a-after.png' });

await browser.close();
console.log('Wrote /tmp/plan-a-after.png');
