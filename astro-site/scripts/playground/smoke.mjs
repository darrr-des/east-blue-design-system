#!/usr/bin/env node
/**
 * Playground function check — SANDBOX TEST ONLY. Drives every control, layer and row on each
 * test page and reports anything that throws, renders nothing, or leaves a panel empty.
 *
 *   node scripts/playground/smoke.mjs [slug …]      (dev server on :4321)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as playwright from 'playwright';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2).filter((a, i, all) => a !== '--browser' && all[i - 1] !== '--browser');
// The layer data moved to public/playground (fetched at runtime, cached by the browser).
const DATA = path.resolve(here, '../../public/playground');
const run = args.length ? args : fs.readdirSync(DATA).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, ''));

if (!run.length) { console.error('no component data in ' + DATA + ' — run build.mjs first'); process.exit(1); }

// --browser chromium|firefox|webkit (webkit is Safari's engine). The Playground
// is one script and one stylesheet for every component, so a browser difference
// is a property of the tab, not of a component: one component proves the engine,
// the full run proves the components.
const bFlag = process.argv.indexOf('--browser');
const engine = bFlag >= 0 ? process.argv[bFlag + 1] : 'chromium';
if (!playwright[engine]) { console.error(`unknown browser: ${engine}`); process.exit(1); }
const browser = await playwright[engine].launch();
console.log(`browser: ${engine} ${browser.version()}`);
// Only Chromium knows the clipboard permissions; Firefox and WebKit reject the
// name outright. The copy buttons are still clicked everywhere — what cannot be
// asserted off-Chromium is the clipboard's contents.
const ctx = await browser.newContext({
  viewport: { width: 1200, height: 1400 },
  ...(engine === 'chromium' ? { permissions: ['clipboard-read', 'clipboard-write'] } : {}),
});
let failures = 0;

for (const slug of run) {
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  await page.goto(`http://localhost:4321/playground/${slug}`, { waitUntil: 'networkidle' });
  // The layer data is fetched on open, so 'networkidle' can land before the first
  // render: wait for the page's own hook and a drawn root.
  await page.waitForFunction(() => window.__pg && document.querySelector('.pg-canvas > .pg-n'), null, { timeout: 15000 });
  const name = await page.textContent('h1');
  const problems = [];
  const check = async (what) => {
    const s = await page.evaluate(() => ({
      canvas: !!document.querySelector('.pg-canvas > .pg-n'),
      none: !!document.querySelector('.pg-none'),
      layers: document.querySelectorAll('.pg-layer').length,
      layout: document.getElementById('pg-layout').children.length,
      code: document.getElementById('pg-code').textContent.length,
    }));
    if (!s.canvas || s.none) problems.push(`${what}: nothing rendered`);
    if (!s.layers) problems.push(`${what}: empty layer tree`);
    if (!s.layout) problems.push(`${what}: empty Layout`);
    if (!s.code) problems.push(`${what}: empty code`);
  };
  const counts = { variants: 0, layers: 0, rows: 0, code: 0 };

  // 1. Every control value, one at a time (select options, then each switch both ways).
  const selects = await page.$$eval('#pg-controls select', (ss) => ss.map((s) => ({ key: s.dataset.key, opts: [...s.options].map((o) => o.value) })));
  for (const s of selects) for (const o of s.opts) {
    await page.selectOption(`#pg-controls select[data-key="${s.key}"]`, o);
    counts.variants++; await check(`${s.key}=${o}`);
  }
  // Controls come and go with the variant (Figma lists only the properties it uses),
  // so re-read the switches after every click instead of holding stale keys.
  // A switch can appear only after another one flips (Counter's hasOverflow shows with
  // hasLimit off), so keep going until no untested switch or text field is left.
  const switchKeys = () => page.$$eval('#pg-controls .pg-switch', (bs) => bs.map((b) => b.dataset.key));
  const textKeys = () => page.$$eval('#pg-controls input.pg-text', (is) => is.map((i) => i.dataset.key));
  const tested = new Set();
  const flipped = [];
  for (let guard = 0; guard < 50; guard++) {
    const k = (await switchKeys()).find((x) => !tested.has(x));
    if (!k) break;
    tested.add(k);
    for (let i = 0; i < 2; i++) {
      const sw = page.locator(`#pg-controls .pg-switch[data-key="${k}"]`);
      if (!(await sw.count())) break;
      await sw.click();
      counts.variants++; await check(`${k} toggled`);
    }
    // Leave it flipped once more so the controls it reveals get their turn.
    await page.locator(`#pg-controls .pg-switch[data-key="${k}"]`).click();
    flipped.push(k);
  }
  const texts = new Set(await textKeys());
  for (const k of flipped.reverse()) {
    const sw = page.locator(`#pg-controls .pg-switch[data-key="${k}"]`);
    (await textKeys()).forEach((t) => texts.add(t));
    if (await sw.count()) await sw.click();
  }
  (await textKeys()).forEach((t) => texts.add(t));
  // Text properties: typing must reach every bound layer, and the layer must grow to fit.
  for (const k of texts) {
    if (!(await page.locator(`#pg-controls input.pg-text[data-key="${k}"]`).count())) {
      // Shown only in another variant — flip every switch to find it.
      for (const s of await switchKeys()) {
        await page.locator(`#pg-controls .pg-switch[data-key="${s}"]`).click();
        if (await page.locator(`#pg-controls input.pg-text[data-key="${k}"]`).count()) break;
      }
    }
    if (!(await page.locator(`#pg-controls input.pg-text[data-key="${k}"]`).count())) { problems.push(`text ${k}: control never shown`); continue; }
    const probe = 'Ab 1234567';
    await page.fill(`#pg-controls input.pg-text[data-key="${k}"]`, probe);
    const shown = await page.$eval('.pg-canvas > .pg-n', (e) => e.textContent);
    if (!shown.includes(probe)) problems.push(`text ${k}: typed value not rendered`);
    counts.variants++; await check(`${k} typed`);
  }

  // 2. Every layer of EVERY variant: open the whole tree, click each row, both code languages.
  await page.click('#pg-dev');
  const variants = await page.evaluate(() => window.__pg.variants());
  const variantIds = variants.map((v) => v.id);
  const variantNames = Object.fromEntries(variants.map((v) => [v.id, v.name]));
  for (const vid of variantIds) {
  await page.evaluate((id) => { location.hash = 'v=' + encodeURIComponent(id); }, vid);
  // Wait for the tree to actually show this variant rather than guessing at a delay: inside
  // the app shell the page is heavier and a fixed 30ms let us read the PREVIOUS variant's
  // rows, then click row ids that no longer existed.
  await page.waitForFunction(
    (name) => document.querySelector('.pg-layer[aria-level="1"] .pg-lname')?.textContent === name,
    variantNames[vid], { timeout: 5000 },
  ).catch(() => problems.push(`variant ${vid}: tree did not update`));
  // The tree redraws after each toggle: re-find the next closed branch every time.
  for (let guard = 0; guard < 500; guard++) {
    const next = page.locator('.pg-chev:not(.is-open)').first();
    if (!(await next.count())) break;
    await next.click();
  }
  const rows = await page.$$eval('.pg-layer', (rs) => rs.map((r) => r.dataset.li));
  for (const li of rows) {
    // Report a row that disappeared under us instead of blocking for the full click timeout.
    const row = page.locator(`.pg-layer[data-li="${li}"]`);
    if (!(await row.count())) { problems.push(`layer ${li}: row vanished from the tree`); continue; }
    // Click the NAME, not the row: rows are as wide as the widest row (611px for Ad Carousel)
    // inside a 260px panel, so a row's centre sits outside the visible area and Playwright
    // scrolls to reach it, landing on whatever ends up under that point — which toggled
    // branches shut and made later rows vanish.
    await row.locator('.pg-lname').click({ timeout: 5000 });
    counts.layers++; if (counts.layers % 100 === 0) process.stdout.write('.');
    for (const lang of ['compose', 'swift']) {
      await page.click(`[data-lang="${lang}"]`);
      const code = await page.textContent('#pg-code');
      if (!code.trim()) problems.push(`layer ${li} ${lang}: empty code`);
      if (/undefined|NaN|\[object/.test(code)) problems.push(`layer ${li} ${lang}: "${code.match(/undefined|NaN|\[object[^\]]*\]/)[0]}" in code`);
      counts.code++;
    }
    const layoutText = await page.textContent('#pg-layout-meta');
    if (/undefined|NaN/.test(layoutText)) problems.push(`layer ${li}: undefined/NaN in Layout`);
    // Overlays must be fully VISIBLE, not merely present. The overlay used to be a child of
    // the component root, so a root with Figma's "Clip content" on cut every label and line
    // outside the component's box — 5 of 25 components, Selection Card and Bottom Sheet in
    // every variant. fidelity.mjs runs with ?nochrome, so only this check can see it.
    const clipped = await page.evaluate(() => {
      const out = [];
      document.querySelectorAll('.pg-overlay > div').forEach((t) => {
        const tb = t.getBoundingClientRect();
        if (!tb.width && !tb.height) return;
        for (let a = t.parentElement; a && !a.classList.contains('pg-stage'); a = a.parentElement) {
          if (getComputedStyle(a).overflow === 'visible') continue;
          const ab = a.getBoundingClientRect();
          const o = Math.max(ab.left - tb.left, ab.top - tb.top, tb.right - ab.right, tb.bottom - ab.bottom);
          if (o > 0.5) { out.push(`${((t.textContent || '').trim() || t.className).slice(0, 22)} cut ${o.toFixed(1)}px by ${a.id || a.className}`); break; }
        }
      });
      return out;
    });
    clipped.forEach((c) => problems.push(`layer ${li}: overlay ${c}`));
  }
  }

  // 3. Typography and Colors rows at the root: hover each, click each colour.
  await page.click('#pg-stage', { position: { x: 12, y: 12 } });
  for (const sel of ['.pg-trow', '.pg-color']) {
    const n = await page.locator(sel).count();
    for (let i = 0; i < n; i++) {
      await page.locator(sel).nth(i).hover();
      const hl = await page.locator('.pg-ov-hl').count();
      if (!hl) problems.push(`${sel} row ${i}: hover highlights nothing`);
      counts.rows++;
    }
  }
  if (await page.locator('.pg-color').count()) { await page.locator('.pg-color').first().click(); }
  await page.click('#pg-copy');

  // 4. The real component page. There the Playground boots inside a HIDDEN tab, where every
  // layer measures 0 × 0 — Avatar and Avatar Group shipped locally with a "0 × 0" size tag
  // that the standalone page above can never show. Open the tab, select each top-level
  // layer, and read the size tag the user sees.
  const content = path.resolve(here, '../../src/content/components', slug + '.json');
  if (fs.existsSync(content) && JSON.parse(fs.readFileSync(content, 'utf8')).style?.playground) {
    await page.goto(`http://localhost:4321/components/${slug}`, { waitUntil: 'networkidle' });
    await page.getByRole('tab', { name: 'Playground' }).click();
    await page.waitForFunction(() => document.querySelector('.pg-canvas > .pg-n'), null, { timeout: 15000 });
    const top = await page.locator('.pg-layer[aria-level="1"], .pg-layer[aria-level="2"]').count();
    for (let i = 0; i < top; i++) {
      const row = page.locator('.pg-layer[aria-level="1"], .pg-layer[aria-level="2"]').nth(i);
      // A layer a boolean switches off (Toggle - With Label's Subtext Message, hasSubtext
      // false by default) really is 0 × 0 — only a layer that is shown can be wrong.
      if (await row.evaluate((r) => r.classList.contains('is-hidden'))) continue;
      await row.locator('.pg-lname').click();
      const size = (await page.locator('.pg-tag-size').first().textContent()) || '';
      if (/^0 × 0$/.test(size.trim())) problems.push(`component page: layer ${i} measures 0 × 0 (laid out while the tab was hidden)`);
    }
  }

  const ok = !problems.length && !errors.length;
  if (!ok) failures++;
  console.log(`\n${ok ? '✓' : '✗'} ${name} — ${counts.variants} control changes · ${variantIds.length} variants · ${counts.layers} layers · ${counts.code} code renders · ${counts.rows} row hovers`);
  [...new Set(problems)].slice(0, 12).forEach((p) => console.log('    ' + p));
  [...new Set(errors)].slice(0, 5).forEach((e) => console.log('    error: ' + e));
  await page.close();
}
await browser.close();
console.log(failures ? `\n${failures} page(s) with problems` : '\nall pages passed');
process.exit(failures ? 1 : 0);
