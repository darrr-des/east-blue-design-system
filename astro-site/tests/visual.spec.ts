/**
 * Visual regression — every component spec card's preview (or, for a
 * component with the Playground on, every Playground variant) is screenshotted
 * and compared against a SELF-baseline captured from our own Chromium
 * rendering (stored in `tests/visual-baselines/`).
 *
 * Workflow:
 *   1. Open `tests/figma-reference/<slug>__<key>.png` next to the live page.
 *      Manually verify our rendering matches Figma.
 *   2. When happy, bake baseline:  `npm run test:visual:update`
 *   3. Future runs: `npm run test:visual` — fails on any pixel drift.
 *
 * The Figma exports are kept as a human-reviewed spec reference under
 * `tests/figma-reference/` but are not used by the test runner.
 *
 * On failure: Playwright auto-saves diff/actual/expected images under
 * `tests/.playwright-output/`.
 */
import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, '../src/content/components');
const PLAYGROUND_DIR = path.resolve(__dirname, '../public/playground');

/* Sanitize cardKey for filesystem (matches export-figma-baselines.mjs). */
function sanitize(s: string): string {
  return s
    .replace(/[^a-zA-Z0-9_.-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/* Discover cases from the component JSON (src/content/components). Reference
   (`sample-`) and trial (`test-`) pages are left out — they are not shipped
   components. A component with `style.playground: true` no longer renders its
   spec cards: its Playground variants are snapshotted instead. Spec cards with
   no `previewHtml` render nothing and are skipped. */
type Case = { slug: string; cardKey: string };
type PlaygroundCase = { slug: string; id: string; name: string };
function walk(o: unknown, cb: (o: Record<string, unknown>) => void): void {
  if (Array.isArray(o)) o.forEach((x) => walk(x, cb));
  else if (o && typeof o === 'object') {
    cb(o as Record<string, unknown>);
    Object.values(o).forEach((x) => walk(x, cb));
  }
}
function loadCases(): { cards: Case[]; playground: PlaygroundCase[] } {
  const cards: Case[] = [];
  const playground: PlaygroundCase[] = [];
  for (const file of fs.readdirSync(DATA_DIR)) {
    if (!file.endsWith('.json')) continue;
    const slug = file.replace(/\.json$/, '');
    if (/^(sample|test)-/.test(slug)) continue;
    const data = JSON.parse(fs.readFileSync(path.join(DATA_DIR, file), 'utf8'));
    /* Remove / consolidate / product-layer verdicts render no spec cards —
       the same `cardlessVerdict` the framework sweep uses. */
    const badges: string[] = (data.meta?.badges || []).map((b: { kind: string }) => b.kind);
    if (badges.some((k) => ['remove', 'consolidate', 'product-layer'].includes(k))) continue;
    if (data.style?.playground) {
      const pg = JSON.parse(fs.readFileSync(path.join(PLAYGROUND_DIR, `${slug}.json`), 'utf8'));
      for (const v of pg.variants) playground.push({ slug, id: v.id, name: v.name });
      continue;
    }
    walk(data, (o) => {
      if (typeof o.cardKey === 'string' && typeof o.previewHtml === 'string' && o.previewHtml.trim()) {
        cards.push({ slug, cardKey: o.cardKey });
      }
    });
  }
  return { cards, playground };
}

const { cards: CASES, playground: PLAYGROUND_CASES } = loadCases();

/* A suite that finds nothing is not a pass: the data moved once and this
   file reported "No tests found" instead of failing loudly. */
test('visual suite found its cases', () => {
  expect(CASES.length).toBeGreaterThan(0);
});

/* Playground variants, on the real component page — the tab boots hidden
   there, which is where the 0 × 0 layout bug lived. `?nochrome` hides the
   overlay, as in fidelity.mjs. */
for (const { slug, id, name } of PLAYGROUND_CASES) {
  test(`${slug} / playground / ${name}`, async ({ page }) => {
    await page.goto(`/components/${slug}?nochrome=1#v=${encodeURIComponent(id)}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.getByRole('tab', { name: 'Playground' }).click();
    const root = page.locator('.pg-canvas > .pg-n').first();
    await expect(root).toBeAttached();
    await expect(page.locator('.pg-layer[aria-level="1"] .pg-lname').first()).toHaveText(name);
    const shot = { maxDiffPixels: 0, threshold: 0, animations: 'disabled' as const };
    const file = [slug, 'playground', `${sanitize(name)}.png`];
    /* A component whose box is zero in one dimension still draws: Progress Bar is
       a 312 × 0 frame of stroked zero-height lines, so all of it is stroke spilling
       outside the box, and Playwright calls the element hidden. Clip the page to
       what the layers actually cover instead. Every other component keeps its
       element screenshot, so their baselines are untouched. */
    const box = await root.boundingBox();
    if (box && box.width > 0 && box.height > 0) {
      await expect(root).toHaveScreenshot(file, shot);
    } else {
      await root.scrollIntoViewIfNeeded();
      const clip = await root.evaluate((el) => {
        let l = Infinity, t = Infinity, r = -Infinity, b = -Infinity;
        for (const n of [el, ...el.querySelectorAll('*')]) {
          const x = n.getBoundingClientRect();
          if (!x.width && !x.height) continue;
          l = Math.min(l, x.left); t = Math.min(t, x.top); r = Math.max(r, x.right); b = Math.max(b, x.bottom);
        }
        return { x: Math.floor(l), y: Math.floor(t), width: Math.ceil(r - l), height: Math.ceil(b - t) };
      });
      expect(clip.width, 'drawn area').toBeGreaterThan(0);
      expect(clip.height, 'drawn area').toBeGreaterThan(0);
      await expect(page).toHaveScreenshot(file, { ...shot, clip });
    }
  });
}

for (const { slug, cardKey } of CASES) {
  const safeKey = sanitize(cardKey);

  test(`${slug} / ${cardKey}`, async ({ page }) => {
    await page.goto(`/components/${slug}`, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);

    /* Activate the Style tab — spec cards live there. */
    const styleTab = page.locator('.comp-tab[data-tab-id="style"]').first();
    if ((await styleTab.count()) > 0) {
      await styleTab.click();
      await page.waitForTimeout(150);
    }

    const wrapperId = `spec-card-${cardKey}`;
    const wrapper = page.locator(`[id="${wrapperId}"]`);
    if ((await wrapper.count()) === 0) {
      throw new Error(`Spec card wrapper not found: id="${wrapperId}" on /components/${slug}`);
    }

    /* The previewHtml renders into either `.spec-card-preview` (with
       demoControls) or `.spec-preview-body` (without). Screenshot just the
       rendered component (first child) to keep the snapshot tight. */
    const containers = ['.spec-card-preview', '.spec-preview-body'];
    let preview = null;
    for (const sel of containers) {
      const candidate = wrapper.locator(`${sel} > *`).first();
      if ((await candidate.count()) > 0) {
        preview = candidate;
        break;
      }
    }
    if (!preview) {
      throw new Error(`No preview content inside ${wrapperId}`);
    }

    /* Strict same-engine pixel diff. Array-form snapshot name → subdir
       layout: tests/visual-baselines/<slug>/<safeKey>.png. */
    await expect(preview).toHaveScreenshot([slug, `${safeKey}.png`], {
      maxDiffPixels: 0,
      threshold: 0,
      animations: 'disabled',
    });
  });
}
