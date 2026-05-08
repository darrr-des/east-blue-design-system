/* Wave 2 batch 2 smoke — button, checkbox, dropdown, action-list flips. */
import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();

async function flipAndCheck(slug, cardSelector, propName, fromVal, toVal, rowKey, expectFromHex, expectToHex) {
  await page.goto(`http://localhost:4321/components/${slug}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  await page.evaluate(() => {
    const tab = [...document.querySelectorAll('.comp-tab, .comp-tab-btn')].find((b) => /style/i.test(b.textContent));
    if (tab) tab.click();
  });
  await page.waitForTimeout(300);
  const initial = await page.evaluate(({ cardSelector, propName, rowKey, fromVal }) => {
    const card = document.querySelector(cardSelector);
    const sel = card?.querySelector(`select[onchange*="${propName}"]`);
    if (sel) { sel.value = fromVal; sel.dispatchEvent(new Event('change')); }
    const row = [...(card?.querySelectorAll('.spec-prop') || [])].find((r) =>
      (r.querySelector('.spec-prop-key')?.textContent || '').trim() === rowKey);
    return row?.querySelector('.spec-prop-hex')?.textContent;
  }, { cardSelector, propName, rowKey, fromVal });
  const after = await page.evaluate(({ cardSelector, propName, rowKey, toVal }) => {
    const card = document.querySelector(cardSelector);
    const sel = card?.querySelector(`select[onchange*="${propName}"]`);
    if (sel) { sel.value = toVal; sel.dispatchEvent(new Event('change')); }
    const row = [...(card?.querySelectorAll('.spec-prop') || [])].find((r) =>
      (r.querySelector('.spec-prop-key')?.textContent || '').trim() === rowKey);
    return row?.querySelector('.spec-prop-hex')?.textContent;
  }, { cardSelector, propName, rowKey, toVal });
  const passed = initial === expectFromHex && after === expectToHex;
  console.log(`${slug}/${rowKey}: ${propName}=${fromVal}→${toVal} = ${initial} → ${after} (expected ${expectFromHex} → ${expectToHex}) ${passed ? 'PASS' : 'FAIL'}`);
  return passed;
}

let ok = true;
/* button filled card: appearance=default → destructive, Default bg #005CE5 → #D81E1E */
ok = await flipAndCheck(
  'button',
  '#spec-card-btn-spec-filled',
  'appearance',
  'default',
  'destructive',
  'Default bg',
  '#005CE5',
  '#D81E1E',
) && ok;

/* button outline card: appearance=default → destructive, Default border #005CE5 → #D81E1E */
ok = await flipAndCheck(
  'button',
  '#spec-card-btn-spec-outline',
  'appearance',
  'default',
  'destructive',
  'Default border',
  '#005CE5',
  '#D81E1E',
) && ok;

/* button text card: appearance=default → destructive, Default label #005CE5 → #D81E1E */
ok = await flipAndCheck(
  'button',
  '#spec-card-btn-spec-text',
  'appearance',
  'default',
  'destructive',
  'Default label',
  '#005CE5',
  '#D81E1E',
) && ok;

/* checkbox unchecked card: state=Default → Error, Border #D7E0EF → #D81E1E */
ok = await flipAndCheck(
  'checkbox',
  '#spec-card-cb-spec-unchecked',
  'state',
  'Default',
  'Error',
  'Border',
  '#D7E0EF',
  '#D81E1E',
) && ok;

/* checkbox checked card: state=Default → Pressed, Container bg #1972F9 → #0F57C8 */
ok = await flipAndCheck(
  'checkbox',
  '#spec-card-cb-spec-checked',
  'state',
  'Default',
  'Pressed',
  'Container bg',
  '#1972F9',
  '#0F57C8',
) && ok;

/* dropdown text card: type=Collapsed → Expanded, Border #D7E0EF → #005CE5 */
ok = await flipAndCheck(
  'dropdown',
  '#spec-card-dd-spec-text',
  'type',
  'Collapsed',
  'Expanded',
  'Border',
  '#D7E0EF',
  '#005CE5',
) && ok;

/* dropdown error card: type=Collapsed → Expanded, Border #F4C7C9 → #D61B2C */
ok = await flipAndCheck(
  'dropdown',
  '#spec-card-dd-spec-error',
  'type',
  'Collapsed',
  'Expanded',
  'Border',
  '#F4C7C9',
  '#D61B2C',
) && ok;

/* action-list base card: state=default → disabled, Label #0A2757 → #C2CFE5 */
ok = await flipAndCheck(
  'action-list',
  '[id="spec-card-list-—-icon-+-label-+-cta-+-chevron"]',
  'state',
  'default',
  'disabled',
  'Label',
  '#0A2757',
  '#C2CFE5',
) && ok;

await browser.close();
console.log(ok ? 'BATCH 2 SMOKE: PASS' : 'BATCH 2 SMOKE: FAIL');
process.exit(ok ? 0 : 1);
