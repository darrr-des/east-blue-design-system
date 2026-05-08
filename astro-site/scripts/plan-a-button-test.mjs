import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 1100 } });
const page = await ctx.newPage();
await page.goto('http://localhost:4321/components/button', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);

await page.evaluate(() => {
  const tab = [...document.querySelectorAll('.comp-tab, .comp-tab-btn')].find((b) => /style/i.test(b.textContent));
  if (tab) tab.click();
});
await page.waitForTimeout(400);

async function snap(label) {
  return page.evaluate((label) => {
    const card = document.querySelector('#spec-card-btn-spec-filled');
    if (!card) return { label, error: 'no card' };
    const findRow = (k) => [...card.querySelectorAll('.spec-prop')].find((r) =>
      (r.querySelector('.spec-prop-key')?.textContent || '').trim() === k);
    const bg = findRow('Background');
    const lab = findRow('Label');
    const h = findRow('Height');
    const pH = findRow('Padding H');
    return {
      label,
      state: window._specCards?.filled?.state,
      appearance: window._specCards?.filled?.appearance,
      size: window._specCards?.filled?.size,
      bg: bg?.querySelector('.spec-prop-hex')?.textContent,
      bgSwatch: bg?.querySelector('.spec-swatch')?.style.background,
      label2: lab?.querySelector('.spec-prop-hex')?.textContent,
      height: h?.querySelector('.spec-prop-hex')?.textContent,
      padH: pH?.querySelector('.spec-prop-hex')?.textContent,
    };
  }, label);
}

console.log(await snap('initial'));

/* Pressed */
await page.evaluate(() => {
  const card = document.querySelector('#spec-card-btn-spec-filled');
  const sel = card?.querySelector('select[onchange*="state"]');
  if (sel) { sel.value = 'pressed'; sel.dispatchEvent(new Event('change')); }
});
await page.waitForTimeout(300);
console.log(await snap('after state=Pressed'));

/* Switch appearance to Destructive (state still Pressed) */
await page.evaluate(() => {
  const card = document.querySelector('#spec-card-btn-spec-filled');
  const sel = card?.querySelector('select[onchange*="appearance"]');
  if (sel) { sel.value = 'destructive'; sel.dispatchEvent(new Event('change')); }
});
await page.waitForTimeout(300);
console.log(await snap('after appearance=Destructive, state=Pressed'));

/* Switch to White appearance, Default state (label color should flip) */
await page.evaluate(() => {
  const card = document.querySelector('#spec-card-btn-spec-filled');
  const apr = card?.querySelector('select[onchange*="appearance"]');
  const st = card?.querySelector('select[onchange*="state"]');
  if (apr) { apr.value = 'white'; apr.dispatchEvent(new Event('change')); }
  if (st) { st.value = 'default'; st.dispatchEvent(new Event('change')); }
});
await page.waitForTimeout(300);
console.log(await snap('after appearance=White, state=Default'));

/* Size = Compact (height/padding should change) */
await page.evaluate(() => {
  const card = document.querySelector('#spec-card-btn-spec-filled');
  const sel = card?.querySelector('select[onchange*="size"]');
  if (sel) { sel.value = 'compact'; sel.dispatchEvent(new Event('change')); }
});
await page.waitForTimeout(300);
console.log(await snap('after size=Compact'));

await page.evaluate(() => {
  const card = document.querySelector('#spec-card-btn-spec-filled');
  if (card) card.scrollIntoView({ block: 'start' });
});
await page.waitForTimeout(300);
await page.screenshot({ path: '/tmp/plan-a-button.png' });
await browser.close();
console.log('Wrote /tmp/plan-a-button.png');
