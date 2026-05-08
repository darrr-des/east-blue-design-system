/* Wave 2 batch 1 smoke — verify tab-item + toggle Plan A actually patches. */
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
  /* Set initial value, then capture display, then flip, then capture display */
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
/* tab-item: selected:false → true, Border row #E5EBF4 → #005CE5 */
ok = await flipAndCheck(
  'tab-item',
  '#spec-card-ti-spec-vs',
  'selected',
  'false',
  'true',
  'Border',
  '#E5EBF4',
  '#005CE5',
) && ok;
/* toggle: state=Default isActive=No → Yes, Track #C2CFE5 → #005CE5 */
ok = await flipAndCheck(
  'toggle',
  '#spec-card-default-·-off',
  'isActive',
  'No',
  'Yes',
  'Track',
  '#C2CFE5',
  '#005CE5',
) && ok;

/* list-item: level=1 → 3, Indent 0px → 32px */
ok = await flipAndCheck(
  'list-item',
  '#spec-card-level-1-—-no-indent',
  'level',
  '1',
  '3',
  'Indent',
  '0px',
  '32px',
) && ok;

/* badge: state=Primary level=Heavy → state=Success, Background #005CE5 → #12AF80 */
ok = await flipAndCheck(
  'badge',
  '#spec-card-bd-spec-default',
  'state',
  'Primary',
  'Success',
  'Background',
  '#005CE5',
  '#12AF80',
) && ok;

/* amount-text-field: state=Filled → Error, Border #445C85 → #D61B2C */
ok = await flipAndCheck(
  'amount-text-field',
  '#spec-card-amt-spec-large-filled',
  'state',
  'Filled',
  'Error',
  'Border (underline)',
  '#445C85',
  '#D61B2C',
) && ok;

await browser.close();
console.log(ok ? 'BATCH 1 SMOKE: PASS' : 'BATCH 1 SMOKE: FAIL');
process.exit(ok ? 0 : 1);
