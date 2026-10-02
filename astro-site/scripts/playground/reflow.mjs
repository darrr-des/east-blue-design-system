#!/usr/bin/env node
/**
 * Playground reflow check — SANDBOX TEST ONLY. For every variant × every combination of the
 * component's own on/off properties, checks that each auto-layout frame obeys Figma's rules:
 *
 *   gap      in-flow siblings sit exactly `gap` apart along the axis (no overlap, no hole)
 *   inside   every in-flow child stays inside the frame's padding box
 *   hug      a Hug axis measures padding + content (+ gaps) — it grows and shrinks with it
 *
 *   node scripts/playground/reflow.mjs [slug …]      (dev server on :4321)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const here = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
// The layer data moved to public/playground (fetched at runtime, cached by the browser).
const DATA = path.resolve(here, '../../public/playground');
const run = args.length ? args : fs.readdirSync(DATA).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, ''));

if (!run.length) { console.error('no component data in ' + DATA + ' — run build.mjs first'); process.exit(1); }
const TOL = 0.75; // px — sub-pixel rounding between the browser and Figma's numbers

/** Figma's auto-layout rules, checked on one laid-out tree. */
function violations(layers) {
  const out = [];
  for (const F of layers) {
    if (!F.shown || !F.layout || F.text || F.graphic) continue;
    const L = F.layout;
    const horiz = L.mode === 'HORIZONTAL';
    const sw = F.strokesInLayout && F.strokeWeights ? F.strokeWeights : [0, 0, 0, 0];
    const [pt, pr, pb, pl] = L.padding.map((v, k) => v + sw[k]);
    const kids = layers.filter((c) => c.parent === F.i && c.shown && !c.absolute && (c.w > 0 || c.h > 0));
    if (!kids.length) continue;
    const start = (c) => (horiz ? c.x : c.y);
    const size = (c) => (horiz ? c.w : c.h);
    const cross = (c) => (horiz ? c.h : c.w);
    kids.sort((a, b) => start(a) - start(b));

    // gap
    if (L.primary !== 'SPACE_BETWEEN') {
      for (let k = 1; k < kids.length; k++) {
        const g = start(kids[k]) - (start(kids[k - 1]) + size(kids[k - 1]));
        if (Math.abs(g - L.gap) > TOL) out.push(`${F.name}: gap ${kids[k - 1].name} → ${kids[k].name} is ${g.toFixed(2)}, Figma says ${L.gap}`);
      }
    }
    // inside the padding box — only where the frame hugs that axis. A fixed-size frame whose
    // contents outgrow it overflows in Figma too, so that is not a layout error.
    const hugW = F.sizingH === 'HUG', hugH = F.sizingV === 'HUG';
    for (const c of kids) {
      const l = c.x - F.x, t = c.y - F.y, r = F.x + F.w - (c.x + c.w), b = F.y + F.h - (c.y + c.h);
      const outH = hugW && (l < pl - TOL || r < pr - TOL);
      const outV = hugH && (t < pt - TOL || b < pb - TOL);
      if (outH || outV)
        out.push(`${F.name}: ${c.name} spills outside the padding (${[t, r, b, l].map((v) => v.toFixed(1)).join('/')} vs ${[pt, pr, pb, pl].join('/')})`);
    }
    // hug — within any min/max size the frame carries in Figma
    const lim = F.limits || {};
    const clampW = (v) => Math.min(lim.maxWidth ?? Infinity, Math.max(lim.minWidth ?? 0, v));
    const clampH = (v) => Math.min(lim.maxHeight ?? Infinity, Math.max(lim.minHeight ?? 0, v));
    const clampMain = horiz ? clampW : clampH;
    const clampCross = horiz ? clampH : clampW;
    const mainHug = (horiz ? F.sizingH : F.sizingV) === 'HUG';
    const crossHug = (horiz ? F.sizingV : F.sizingH) === 'HUG';
    const gaps = L.primary === 'SPACE_BETWEEN' ? 0 : L.gap * (kids.length - 1);
    if (mainHug && !L.wrap) {
      const want = clampMain((horiz ? pl + pr : pt + pb) + kids.reduce((s, c) => s + size(c), 0) + gaps);
      if (Math.abs(size(F) - want) > TOL) out.push(`${F.name}: Hug ${horiz ? 'width' : 'height'} is ${size(F).toFixed(2)}, content needs ${want.toFixed(2)}`);
    }
    if (crossHug && !L.wrap) {
      const want = clampCross((horiz ? pt + pb : pl + pr) + Math.max(...kids.map(cross)));
      if (Math.abs(cross(F) - want) > TOL) out.push(`${F.name}: Hug ${horiz ? 'height' : 'width'} is ${cross(F).toFixed(2)}, content needs ${want.toFixed(2)}`);
    }
  }
  return out;
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 1200 } });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
let bad = 0;

for (const slug of run) {
  await page.goto('about:blank');
  await page.goto(`http://localhost:4321/playground/${slug}`, { waitUntil: 'networkidle' });
  // The layer data is fetched on open, so 'networkidle' can land before the first
  // render: wait for the page's own hook and a drawn root.
  await page.waitForFunction(() => window.__pg && document.querySelector('.pg-canvas > .pg-n'), null, { timeout: 15000 });
  await page.evaluate(() => document.fonts.ready);
  const name = await page.textContent('h1');
  const variants = await page.evaluate(() => window.__pg.variants().map((v) => v.id));
  const bools = await page.evaluate(() => window.__pg.booleans());
  const combos = [...Array(2 ** bools.length).keys()].map((m) => bools.map((_, k) => !!(m & (1 << k))));
  let checked = 0, frames = 0;
  const found = new Map();
  for (const vid of variants) {
    await page.evaluate((id) => { location.hash = 'v=' + encodeURIComponent(id); }, vid);
    for (const combo of combos) {
      await page.evaluate(([keys, vals]) => { keys.forEach((k, i) => window.__pg.set(k, vals[i])); }, [bools, combo]);
      const layers = await page.evaluate(() => window.__pg.layers());
      frames += layers.filter((l) => l.shown && l.layout).length;
      for (const v of violations(layers)) {
        const key = v.replace(/-?\d+\.\d+/g, '#');
        if (!found.has(key)) found.set(key, { v, where: `${vid} · ${bools.map((b, i) => b.replace(/#.*/, '') + '=' + combo[i]).join(', ') || 'no switches'}`, n: 0 });
        found.get(key).n++;
      }
      checked++;
    }
  }
  if (found.size) bad++;
  console.log(`${found.size ? '✗' : '✓'} ${name} — ${variants.length} variants × ${combos.length} switch combinations = ${checked} layouts · ${frames} auto-layout frames checked`);
  for (const f of [...found.values()].slice(0, 10)) console.log(`    ${f.v}  (×${f.n}, e.g. ${f.where})`);
}
await browser.close();
if (errors.length) console.log('page errors:', [...new Set(errors)]);
console.log(bad ? `\n${bad} component(s) break an auto-layout rule` : '\nevery layout obeys Figma\'s auto-layout rules');
process.exit(bad || errors.length ? 1 : 0);
