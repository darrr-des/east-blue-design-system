/* Wave 1 smoke test — verify the 5 migrated demos still render their
   spec-card sections correctly and the modal pilot's Plan A still works. */
import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
const page = await ctx.newPage();

async function checkSpec(slug, expectedKeys) {
  await page.goto(`http://localhost:4321/components/${slug}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(300);
  await page.evaluate(() => {
    const tab = [...document.querySelectorAll('.comp-tab, .comp-tab-btn')].find((b) => /style/i.test(b.textContent));
    if (tab) tab.click();
  });
  await page.waitForTimeout(300);
  const result = await page.evaluate(() => {
    const props = [...document.querySelectorAll('.spec-card .spec-prop-key')].map((k) => k.textContent.trim());
    return { count: props.length, sample: props.slice(0, 20) };
  });
  const hasAll = expectedKeys.every((k) => result.sample.includes(k) || [...result.sample, ...result.sample.slice(20)].includes(k));
  console.log(`${slug}: ${result.count} prop rows · expected keys [${expectedKeys.join(', ')}] all present? ${hasAll}`);
  return hasAll;
}

let pass = true;
pass = await checkSpec('accordion', ['Surface', 'Border', 'Label']) && pass;
pass = await checkSpec('chip', ['Background', 'Label']) && pass;
pass = await checkSpec('alert', ['Background', 'Title']) && pass;
pass = await checkSpec('avatar', ['Background', 'Initials', 'Border']) && pass;
pass = await checkSpec('tooltip-blurred', ['Width', 'Padding', 'Border radius']) && pass;

/* Modal pilot Plan A retest */
await page.goto('http://localhost:4321/components/modal', { waitUntil: 'networkidle' });
await page.waitForTimeout(300);
await page.evaluate(() => {
  const tab = [...document.querySelectorAll('.comp-tab, .comp-tab-btn')].find((b) => /style/i.test(b.textContent));
  if (tab) tab.click();
});
await page.waitForTimeout(300);
/* Read default Height */
const before = await page.evaluate(() => {
  const card = document.querySelector('#spec-card-default');
  const heightRow = [...card.querySelectorAll('.spec-prop')].find((r) => /Height/i.test(r.textContent));
  return heightRow?.querySelector('.spec-prop-hex')?.textContent;
});
/* Flip cta to 2-vertical */
await page.evaluate(() => {
  const card = document.querySelector('#spec-card-default');
  const sel = card?.querySelector('select[onchange*="cta"]');
  if (sel) { sel.value = '2-vertical'; sel.dispatchEvent(new Event('change')); }
});
await page.waitForTimeout(300);
const after = await page.evaluate(() => {
  const card = document.querySelector('#spec-card-default');
  const heightRow = [...card.querySelectorAll('.spec-prop')].find((r) => /Height/i.test(r.textContent));
  return heightRow?.querySelector('.spec-prop-hex')?.textContent;
});
const pilotPass = before === '212' && after === '270';
console.log(`modal pilot: ${before} → ${after} (expected 212 → 270) ${pilotPass ? 'PASS' : 'FAIL'}`);
pass = pass && pilotPass;

await browser.close();
console.log(pass ? 'WAVE 1 SMOKE: ALL PASS' : 'WAVE 1 SMOKE: FAILURES');
process.exit(pass ? 0 : 1);
