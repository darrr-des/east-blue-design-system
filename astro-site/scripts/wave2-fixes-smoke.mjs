/* Verify fixes: dropdown variant matrix, action-list-counter density, modal Button instance removed */
import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

async function flipPair(slug, cardSelector, prop1, val1, prop2, val2, rowKey, expect) {
  await page.goto(`http://localhost:4321/components/${slug}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  await page.evaluate(() => {
    const tab = [...document.querySelectorAll('.comp-tab, .comp-tab-btn')].find((b) => /style/i.test(b.textContent));
    if (tab) tab.click();
  });
  await page.waitForTimeout(300);
  const result = await page.evaluate(({cardSelector, prop1, val1, prop2, val2, rowKey}) => {
    const card = document.querySelector(cardSelector);
    if (!card) return 'NO CARD';
    const sel1 = card.querySelector(`select[onchange*="${prop1}"]`);
    const sel2 = card.querySelector(`select[onchange*="${prop2}"]`);
    if (sel1) { sel1.value = val1; sel1.dispatchEvent(new Event('change')); }
    if (sel2) { sel2.value = val2; sel2.dispatchEvent(new Event('change')); }
    const row = [...card.querySelectorAll('.spec-prop')].find((r) =>
      (r.querySelector('.spec-prop-key')?.textContent || '').trim() === rowKey);
    return row?.querySelector('.spec-prop-hex, .spec-prop-val')?.textContent?.trim();
  }, {cardSelector, prop1, val1, prop2, val2, rowKey});
  const passed = result === expect;
  console.log(`${slug} ${prop1}=${val1}+${prop2}=${val2} ${rowKey}: ${result} (expected ${expect}) ${passed ? 'PASS' : 'FAIL'}`);
  return passed;
}

let ok = true;
/* Dropdown text card: variant=Error, type=Collapsed → Border #F4C7C9 */
ok = await flipPair('dropdown', '#spec-card-dd-spec-text', 'variant', 'Error', 'type', 'Collapsed', 'Border', '#F4C7C9') && ok;
/* Dropdown text card: variant=Error, type=Expanded → Border #D61B2C */
ok = await flipPair('dropdown', '#spec-card-dd-spec-text', 'variant', 'Error', 'type', 'Expanded', 'Border', '#D61B2C') && ok;
/* Dropdown error card: variant=Text, type=Collapsed → Border #D7E0EF */
ok = await flipPair('dropdown', '#spec-card-dd-spec-error', 'variant', 'Text', 'type', 'Collapsed', 'Border', '#D7E0EF') && ok;
/* Dropdown error card: variant=Text, type=Expanded → Border #005CE5 */
ok = await flipPair('dropdown', '#spec-card-dd-spec-error', 'variant', 'Text', 'type', 'Expanded', 'Border', '#005CE5') && ok;

/* Action List Counter cd card: density=Expanded → Row height 64px, Padding V 15px */
async function flipOne(slug, cardSelector, prop, val, rowKey, expect) {
  await page.goto(`http://localhost:4321/components/${slug}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  await page.evaluate(() => {
    const tab = [...document.querySelectorAll('.comp-tab, .comp-tab-btn')].find((b) => /style/i.test(b.textContent));
    if (tab) tab.click();
  });
  await page.waitForTimeout(300);
  const result = await page.evaluate(({cardSelector, prop, val, rowKey}) => {
    const card = document.querySelector(cardSelector);
    if (!card) return 'NO CARD';
    const sel = card.querySelector(`select[onchange*="${prop}"]`);
    if (sel) { sel.value = val; sel.dispatchEvent(new Event('change')); }
    const row = [...card.querySelectorAll('.spec-prop')].find((r) =>
      (r.querySelector('.spec-prop-key')?.textContent || '').trim() === rowKey);
    return row?.querySelector('.spec-prop-val')?.textContent?.trim();
  }, {cardSelector, prop, val, rowKey});
  const passed = result === expect;
  console.log(`${slug} ${prop}=${val} ${rowKey}: ${result} (expected ${expect}) ${passed ? 'PASS' : 'FAIL'}`);
  return passed;
}
ok = await flipOne('action-list-counter', '[id="spec-card-compact-·-default-—-brand-label-+-filled-counter"]', 'density', 'Expanded', 'Row height', '64px') && ok;
ok = await flipOne('action-list-counter', '[id="spec-card-compact-·-default-—-brand-label-+-filled-counter"]', 'density', 'Expanded', 'Padding V', '15px') && ok;

/* Modal default card: 'CTA slot' row should be GONE */
await page.goto('http://localhost:4321/components/modal', { waitUntil: 'networkidle' });
await page.waitForTimeout(300);
const ctaSlotPresent = await page.evaluate(() => {
  const card = document.getElementById('spec-card-default');
  return [...(card?.querySelectorAll('.spec-prop-key') || [])]
    .some((k) => k.textContent.trim() === 'CTA slot');
});
console.log(`modal default 'CTA slot' row removed: ${!ctaSlotPresent ? 'PASS' : 'FAIL'}`);
ok = !ctaSlotPresent && ok;

await browser.close();
console.log(ok ? 'FIXES SMOKE: ALL PASS' : 'FIXES SMOKE: FAIL');
process.exit(ok ? 0 : 1);
