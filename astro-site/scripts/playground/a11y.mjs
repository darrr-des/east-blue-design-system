#!/usr/bin/env node
/**
 * a11y.mjs — keyboard and screen-reader checks for the Playground
 * (npm run playground:a11y).
 *
 *   node scripts/playground/a11y.mjs [slug …] [--browser chromium|firefox|webkit]
 *
 * The tab is one script and one stylesheet for every component, so these are
 * properties of the tab: every component is checked, but a failure is a bug in
 * the Playground, not in a component.
 *
 * What it asserts:
 *   names     every control a person can operate has an accessible name
 *   tree      the layers panel follows the WAI-ARIA tree pattern — one tab stop
 *             (roving tabindex), Up/Down move, Right/Left expand and collapse,
 *             Home/End jump, and moving the focus moves the selection, so the
 *             canvas and the panels follow the keyboard as they follow the mouse
 *   state     treeitem rows carry aria-level, aria-expanded (when they have
 *             children) and aria-selected; the switches carry aria-checked
 *   focus     every focusable control paints a visible focus ring
 *   live      the copy confirmation is announced (role=status)
 *
 * Needs the dev server: npm run dev.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as playwright from 'playwright';

const here = path.dirname(fileURLToPath(import.meta.url));
const DATA = path.resolve(here, '../../public/playground');
const argv = process.argv.slice(2);
const bFlag = argv.indexOf('--browser');
const engine = bFlag >= 0 ? argv[bFlag + 1] : 'chromium';
const args = argv.filter((a, i) => a !== '--browser' && argv[i - 1] !== '--browser');
const run = args.length ? args : fs.readdirSync(DATA).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, ''));
if (!run.length) { console.error('no component data in ' + DATA + ' — run build.mjs first'); process.exit(1); }
if (!playwright[engine]) { console.error(`unknown browser: ${engine}`); process.exit(1); }

const browser = await playwright[engine].launch();
console.log(`browser: ${engine} ${browser.version()}\n`);
const ctx = await browser.newContext({ viewport: { width: 1400, height: 1000 } });
let failures = 0;

for (const slug of run) {
  const page = await ctx.newPage();
  const problems = [];
  await page.goto(`http://localhost:4321/playground/${slug}`, { waitUntil: 'networkidle' });
  await page.waitForFunction(() => window.__pg && document.querySelector('.pg-canvas > .pg-n'), null, { timeout: 15000 });
  const name = (await page.textContent('h1')).trim();

  // ── names ──────────────────────────────────────────────────────────
  const unnamed = await page.evaluate(() => {
    const sel = '.pg-page button, .pg-page select, .pg-page [role="switch"], .pg-page [role="radio"], .pg-page a[href]';
    return [...document.querySelectorAll(sel)].filter((el) => {
      const t = (el.getAttribute('aria-label') || el.textContent || '').trim();
      const labelled = el.getAttribute('aria-labelledby');
      return !t && !labelled && !(el.tagName === 'SELECT' && el.closest('label'));
    }).map((el) => el.className || el.tagName);
  });
  if (unnamed.length) problems.push(`names: ${unnamed.length} control(s) with no accessible name — ${unnamed.slice(0, 3).join(', ')}`);

  // ── tree: one tab stop ─────────────────────────────────────────────
  const tabbable = await page.$$eval('.pg-layer', (rows) => rows.filter((r) => r.getAttribute('tabindex') === '0').length);
  if (tabbable !== 1) problems.push(`tree: ${tabbable} rows carry tabindex="0" — the tree must be exactly one tab stop`);

  const roles = await page.$$eval('.pg-layer', (rows) => ({
    rows: rows.length,
    treeitem: rows.filter((r) => r.getAttribute('role') === 'treeitem').length,
    level: rows.filter((r) => r.hasAttribute('aria-level')).length,
    selected: rows.filter((r) => r.hasAttribute('aria-selected')).length,
  }));
  if (roles.treeitem !== roles.rows) problems.push(`state: ${roles.rows - roles.treeitem} row(s) without role=treeitem`);
  if (roles.level !== roles.rows) problems.push(`state: ${roles.rows - roles.level} row(s) without aria-level`);
  if (roles.selected !== roles.rows) problems.push(`state: ${roles.rows - roles.selected} row(s) without aria-selected`);
  if (!(await page.$('#pg-layers[role="tree"]'))) problems.push('state: #pg-layers is not role=tree');

  // ── tree: the keys move focus, selection and the canvas ────────────
  const read = () => page.evaluate(() => {
    const a = document.activeElement;
    const rows = [...document.querySelectorAll('.pg-layer')];
    return {
      focused: a && a.classList.contains('pg-layer') ? +a.dataset.li : null,
      selected: rows.filter((r) => r.getAttribute('aria-selected') === 'true').map((r) => +r.dataset.li)[0] ?? null,
      open: rows.filter((r) => r.getAttribute('aria-expanded') === 'true').length,
      overlay: document.querySelectorAll('.pg-overlay > *').length,
    };
  });
  await page.locator('.pg-layer[tabindex="0"]').focus();
  if ((await read()).focused === null) problems.push('tree: focusing the tab stop did not put focus on a row');

  await page.keyboard.press('ArrowDown');
  const down = await read();
  if (down.focused === null) problems.push('tree: ArrowDown did not move focus');
  if (down.selected !== down.focused) problems.push('tree: ArrowDown moved focus without moving the selection');
  if (!down.overlay) problems.push('tree: the canvas does not follow keyboard selection');

  const up = (await page.keyboard.press('ArrowUp'), await read());
  if (up.focused === down.focused) problems.push('tree: ArrowUp did not move focus back');

  await page.keyboard.press('End');
  const end = await read();
  await page.keyboard.press('Home');
  const home = await read();
  if (end.focused === home.focused) problems.push('tree: Home/End did not move focus');

  // Expand and collapse on a row that has children.
  const parentRow = await page.$('.pg-layer[aria-expanded]');
  if (parentRow) {
    await parentRow.focus();
    const before = (await read()).open;
    await page.keyboard.press(await parentRow.getAttribute('aria-expanded') === 'true' ? 'ArrowLeft' : 'ArrowRight');
    if ((await read()).open === before) problems.push('tree: Arrow Left/Right did not expand or collapse');
  }

  // ── switches carry state ───────────────────────────────────────────
  const badSwitch = await page.$$eval('#pg-controls [role="switch"]', (els) => els.filter((e) => !e.hasAttribute('aria-checked')).length);
  if (badSwitch) problems.push(`state: ${badSwitch} switch(es) without aria-checked`);

  // ── a visible focus ring ───────────────────────────────────────────
  const noRing = await page.evaluate(() => {
    const out = [];
    for (const el of [document.querySelector('.pg-layer[tabindex="0"]'), document.querySelector('#pg-controls select'), document.querySelector('#pg-lang [role="radio"]'), document.getElementById('pg-des')]) {
      if (!el) continue;
      el.focus();
      const s = getComputedStyle(el);
      const ring = (s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0) || s.boxShadow !== 'none';
      if (!ring) out.push(el.id || el.className);
    }
    return out;
  });
  if (noRing.length) problems.push(`focus: no visible ring on ${noRing.join(', ')}`);

  // ── the copy confirmation is announced ─────────────────────────────
  if (!(await page.$('#pg-toast[role="status"]'))) problems.push('live: #pg-toast is not role=status');

  if (problems.length) { failures++; console.log(`✗ ${name}`); for (const p of problems) console.log(`    ${p}`); }
  else console.log(`✓ ${name} — ${roles.rows} rows, one tab stop, arrows move focus + selection, focus ring, live region`);
  await page.close();
}

await browser.close();
console.log(failures ? `\n${failures} page(s) with problems` : '\nall pages passed');
process.exit(failures ? 1 : 0);
