import { chromium } from 'playwright';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('http://localhost:4321/components/toggle-with-label', { waitUntil: 'networkidle' });
await page.waitForTimeout(300);
await page.evaluate(() => {
  const tab = [...document.querySelectorAll('.comp-tab, .comp-tab-btn')].find((b) => /style/i.test(b.textContent));
  if (tab) tab.click();
});
await page.waitForTimeout(300);

async function read(cardSelector, prop, val, rowKey) {
  return await page.evaluate(({cardSelector, prop, val, rowKey}) => {
    const card = document.querySelector(cardSelector);
    if (!card) return 'NO CARD';
    const sel = card.querySelector(`select[onchange*="${prop}"]`);
    if (sel) { sel.value = val; sel.dispatchEvent(new Event('change')); }
    const row = [...card.querySelectorAll('.spec-prop')].find((r) =>
      (r.querySelector('.spec-prop-key')?.textContent || '').trim() === rowKey);
    return row?.querySelector('.spec-prop-hex')?.textContent?.trim();
  }, {cardSelector, prop, val, rowKey});
}

const card = '[id="spec-card-proposed-—-trailing-placement-proposed"]';
console.log('selected=true:           Track =', await read(card, 'selected', 'true', 'Track'));
console.log('selected=false:          Track =', await read(card, 'selected', 'false', 'Track'));
console.log('selected=false+disabled: Track =', await read(card, 'state', 'disabled', 'Track'));
await page.evaluate(() => { const card = document.querySelector('[id="spec-card-proposed-—-trailing-placement-proposed"]'); card.querySelector('select[onchange*="state"]').value = 'default'; card.querySelector('select[onchange*="state"]').dispatchEvent(new Event('change')); });
console.log('selected=false+default:  Track =', await read(card, 'selected', 'false', 'Track'));
console.log('selected=true+disabled:  Track =', await read(card, 'state', 'disabled', 'Track'));
await browser.close();
