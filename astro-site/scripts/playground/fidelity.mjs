#!/usr/bin/env node
/**
 * Playground fidelity check — Figma export vs the rendered Playground, pixel for pixel.
 *
 *   node scripts/playground/fidelity.mjs [slug …] [--max 8] [--out <dir>]
 *
 * For each variant: Figma's own PNG export (REST /images, 2×) against a 2× screenshot of
 * the Playground rendering that variant (/playground/<slug>#v=<id>), both over the
 * stage grey, compared pixel by pixel. Needs the dev server on :4321.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';
import pixelmatch from 'pixelmatch';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const args = process.argv.slice(2);
const flag = (n, d) => { const i = args.indexOf(`--${n}`); return i >= 0 ? args[i + 1] : d; };
const MAX = Number(flag('max', 8));
const OUT = flag('out', path.join(root, '.fidelity'));
const slugs = args.filter((a, i) => !a.startsWith('--') && !(i > 0 && args[i - 1].startsWith('--')));
// The layer data moved to public/playground (fetched at runtime, cached by the browser).
const DATA = path.resolve(here, '../../public/playground');
const all = fs.readdirSync(DATA).filter((f) => f.endsWith('.json')).map((f) => f.replace(/\.json$/, ''));

if (!all.length) { console.error('no component data in ' + DATA + ' — run build.mjs first'); process.exit(1); }
const run = slugs.length ? slugs : all;
fs.mkdirSync(OUT, { recursive: true });

const env = fs.readFileSync(path.join(root, '.env'), 'utf8');
const tok = (env.match(/^FIGMA_ACCESS_TOKEN\s*=\s*(.+)$/m)?.[1] ?? '').trim().replace(/^["']|["']$/g, '');
const api = async (url) => {
  const r = await fetch(`https://api.figma.com/v1${url}`, { headers: { 'X-Figma-Token': tok } });
  const j = await r.json();
  if (!r.ok || j.err) throw new Error(`Figma REST ${r.status}: ${j.err ?? j.message}`);
  return j;
};
const STAGE = { r: 0xf3, g: 0xf3, b: 0xf3 };
const SCALE = 2;

/** Spread the sample across the set: every Nth variant, up to MAX. */
const sample = (list) => (list.length <= MAX ? list : list.filter((_, i) => i % Math.ceil(list.length / MAX) === 0).slice(0, MAX));

/**
 * Figma's absoluteRenderBounds can be STALE, and then its PNG export is a short crop of the
 * real drawing — unusable as a reference. Seen on Slider: three variants carry the identical
 * Tooltip frame with the identical drop shadow, and Figma reports 59px tall for two of them
 * and 53px for the third. So derive the drawn rectangle from the geometry Figma still reports
 * correctly — each layer's box grown by its own visible shadows — and compare.
 */
function drawnBounds(node) {
  let box = null;
  const grow = (n) => {
    const b = n.absoluteBoundingBox;
    if (!b || n.visible === false) return;
    let [l, t, r, bo] = [0, 0, 0, 0];
    for (const e of n.effects ?? []) {
      if (e.visible === false || e.type !== 'DROP_SHADOW') continue;
      const reach = (e.spread ?? 0) + (e.radius ?? 0), o = e.offset ?? { x: 0, y: 0 };
      l = Math.max(l, reach - o.x); r = Math.max(r, reach + o.x);
      t = Math.max(t, reach - o.y); bo = Math.max(bo, reach + o.y);
    }
    const q = { x1: b.x - l, y1: b.y - t, x2: b.x + b.width + r, y2: b.y + b.height + bo };
    box = box ? { x1: Math.min(box.x1, q.x1), y1: Math.min(box.y1, q.y1), x2: Math.max(box.x2, q.x2), y2: Math.max(box.y2, q.y2) } : q;
    // A frame that clips its content bounds everything inside it, however far the children
    // reach — Ad Carousel's cards run well past its 360px edge and Figma is right to ignore
    // them. Descending past a clip is what made this check flag a sound export as short.
    if (n.clipsContent === true) return;
    for (const c of n.children ?? []) grow(c);
  };
  grow(node);
  return box;
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 1400 }, deviceScaleFactor: SCALE });
const errors = [];
page.on('pageerror', (e) => errors.push(e.message));
const summary = [];

for (const slug of run) {
  const data = JSON.parse(fs.readFileSync(path.join(DATA, `${slug}.json`), 'utf8'));
  const picks = sample(data.variants);
  const ids = picks.map((v) => v.id).join(',');
  // Full depth: a shallow read reports the drawn bounds without the children's shadows
  // (a toggle came back 48×24 while its PNG is 50×34), which would compare two different crops.
  const nodes = (await api(`/files/${data.meta.fileKey}/nodes?ids=${encodeURIComponent(ids)}`)).nodes;
  const imgs = (await api(`/images/${data.meta.fileKey}?ids=${encodeURIComponent(ids)}&format=png&scale=${SCALE}`)).images;
  console.log(`\n${data.meta.name} · ${picks.length} of ${data.variants.length} variants`);

  for (const v of picks) {
    const doc = nodes[v.id].document;
    const bb = doc.absoluteBoundingBox;
    const rb = doc.absoluteRenderBounds ?? bb;
    // Figma's PNG covers the render bounds (shadows included): shoot the same rectangle.
    const off = { l: bb.x - rb.x, t: bb.y - rb.y, w: rb.width, h: rb.height };
    // Reference sanity: is Figma's own crop big enough for what Figma says it draws?
    const dr = drawnBounds(doc);
    const short = dr && Math.max(rb.x - dr.x1, rb.y - dr.y1, dr.x2 - (rb.x + rb.width), dr.y2 - (rb.y + rb.height));
    if (short > 2) {
      console.log(`  ⚠ ${v.name} — Figma's export is a short crop of its own drawing ` +
        `(reports ${Math.round(rb.width)}×${Math.round(rb.height)}, its shadows need ` +
        `${Math.round(dr.x2 - dr.x1)}×${Math.round(dr.y2 - dr.y1)}); no usable reference, skipped`);
      summary.push({ slug, v: v.name, pct: 0, stale: true });
      continue;
    }

    const figPng = Buffer.from(await (await fetch(imgs[v.id])).arrayBuffer());
    // A hash-only change would not reload the page: start from a blank page every time.
    await page.goto('about:blank');
    await page.goto(`http://localhost:4321/playground/${slug}?nochrome=1#v=${encodeURIComponent(v.id)}`, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => window.__pg && document.querySelector('.pg-canvas > .pg-n'), null, { timeout: 15000 });
    const got = await page.evaluate(() => document.querySelector('.pg-layer[aria-level="1"] .pg-lname')?.textContent);
    if (got !== v.name) { console.log(`  ✗ wrong variant shown: ${got}`); summary.push({ slug, v: v.name, pct: 100 }); continue; }
    await page.evaluate(() => document.fonts.ready);
    await page.mouse.move(1, 1);
    const shown = await page.evaluate(() => document.querySelector('.pg-canvas > .pg-n') !== null);
    if (!shown) { console.log(`  ✗ ${v.name} — not rendered`); summary.push({ slug, v: v.name, pct: 100 }); continue; }
    const box = await page.locator('.pg-canvas > .pg-n').boundingBox();
    // Size first: a component that is not Figma's size is structurally wrong, however small
    // the pixel difference looks (a missing 18px strip on a 360×288 card is only ~1%).
    const dw = box.width - bb.width, dh = box.height - bb.height;
    if (Math.abs(dw) > 0.6 || Math.abs(dh) > 0.6) {
      console.log(`  ✗ ${v.name} — size ${box.width.toFixed(1)}×${box.height.toFixed(1)}, Figma says ${bb.width}×${bb.height}`);
      summary.push({ slug, v: v.name, pct: 100, size: `${box.width.toFixed(1)}×${box.height.toFixed(1)} vs ${bb.width}×${bb.height}` });
      continue;
    }
    const scrollY = await page.evaluate(() => scrollY);
    const oursPng = await page.screenshot({ fullPage: true, clip: { x: box.x - off.l, y: box.y + scrollY - off.t, width: off.w, height: off.h } });

    const W = Math.round(off.w * SCALE), Hh = Math.round(off.h * SCALE);
    const norm = (buf) => sharp(buf).flatten({ background: STAGE }).resize(W, Hh, { fit: 'fill' }).ensureAlpha().raw().toBuffer();
    const [a, b] = await Promise.all([norm(figPng), norm(oursPng)]);
    // Fractional sizes round differently in Figma's export and the screenshot: allow the two
    // images to sit up to 2 device pixels apart, and score the best alignment. A real
    // rendering difference does not disappear with a 1px shift; a rounding offset does.
    const shift = (buf, dx, dy) => {
      const out = Buffer.alloc(buf.length);
      for (let y = 0; y < Hh; y++) for (let x = 0; x < W; x++) {
        const sx = Math.min(W - 1, Math.max(0, x - dx)), sy = Math.min(Hh - 1, Math.max(0, y - dy));
        buf.copy(out, (y * W + x) * 4, (sy * W + sx) * 4, (sy * W + sx) * 4 + 4);
      }
      return out;
    };
    let diff = Buffer.alloc(W * Hh * 4), bad = Infinity, at = [0, 0];
    const search = (R) => {
      for (let dy = -R; dy <= R; dy++) for (let dx = -R; dx <= R; dx++) {
        if (Math.max(Math.abs(dx), Math.abs(dy)) < R && R > 2) continue; // only the new ring
        const d = Buffer.alloc(W * Hh * 4);
        const n = pixelmatch(a, dx || dy ? shift(b, dx, dy) : b, d, W, Hh, { threshold: 0.15 });
        if (n < bad) { bad = n; diff = d; at = [dx, dy]; }
      }
    };
    // Figma's PNG export can disagree with Figma's OWN absoluteRenderBounds: the Slider's
    // Default+tooltip variant reports 53px tall where its shadow needs 59, and exports the
    // content 2px off the rectangle it declares (its siblings, same tree, report 59 and export
    // true). Widen the search when a variant scores badly rather than blame the renderer —
    // the size gate above is what catches a real structural miss, and `at` prints the shift.
    search(2);
    for (let R = 3; R <= 6 && bad / (W * Hh) > 0.01; R++) search(R);
    const pct = Math.round((bad / (W * Hh)) * 10000) / 100;
    const mark = pct <= 1 ? '✓' : pct <= 3 ? '~' : '✗';
    console.log(`  ${mark} ${String(pct).padStart(5)}%  ${v.name}  (${Math.round(off.w)}×${Math.round(off.h)})${at[0] || at[1] ? `  aligned by ${at[0]},${at[1]} px` : ''}`);
    summary.push({ slug, v: v.name, pct });

    if (pct > 1) {
      const name = `${slug}__${v.id.replace(/[^0-9a-z]+/gi, '-')}`;
      const raw = (buf) => sharp(buf, { raw: { width: W, height: Hh, channels: 4 } }).png().toBuffer();
      const [fa, ob, df] = await Promise.all([raw(a), raw(b), raw(diff)]);
      await sharp({ create: { width: W * 3 + 40, height: Hh, channels: 4, background: '#FFFFFF' } })
        .composite([{ input: fa, left: 0, top: 0 }, { input: ob, left: W + 20, top: 0 }, { input: df, left: W * 2 + 40, top: 0 }])
        .png().toFile(path.join(OUT, `${name}.png`));
    }
  }
}
await browser.close();

const worst = summary.slice().sort((x, y) => y.pct - x.pct);
const scored = summary.filter((s) => !s.stale);
const stale = summary.length - scored.length;
console.log(`\n${scored.length} variants compared · ✓ ≤1%: ${scored.filter((s) => s.pct <= 1).length} · ~ ≤3%: ${scored.filter((s) => s.pct > 1 && s.pct <= 3).length} · ✗ >3%: ${scored.filter((s) => s.pct > 3).length}` +
  (stale ? ` · ⚠ ${stale} skipped (Figma's export unusable)` : ''));
if (errors.length) console.log('page errors:', [...new Set(errors)]);
console.log(`side-by-sides (Figma | Playground | diff) for anything over 1% → ${path.relative(root, OUT)}/`);
fs.writeFileSync(path.join(OUT, 'summary.json'), JSON.stringify(worst, null, 2));
// Exit 1 on a fail (> 3%, which includes a size-gate miss or a variant not rendered) or a page error.
process.exit(scored.some((s) => s.pct > 3) || errors.length ? 1 : 0);
