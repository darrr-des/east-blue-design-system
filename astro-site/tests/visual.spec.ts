/**
 * Visual regression — every component spec card's preview is screenshotted
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
const DATA_DIR = path.resolve(__dirname, '../src/data/components');

/* Sanitize cardKey for filesystem (matches export-figma-baselines.mjs). */
function sanitize(s: string): string {
  return s
    .replace(/[^a-zA-Z0-9_.-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

/* Discover (slug, cardKey) pairs from data files. Skip spec cards
   that have no `previewHtml` field — they render nothing. */
type Case = { slug: string; cardKey: string };
function loadCases(): Case[] {
  const out: Case[] = [];
  for (const file of fs.readdirSync(DATA_DIR)) {
    if (!file.endsWith('.ts') || file.startsWith('_')) continue;
    const text = fs.readFileSync(path.join(DATA_DIR, file), 'utf8');
    const slug = file.replace(/\.ts$/, '');
    /* Walk each cardKey occurrence and check whether its block contains a
       `previewHtml` field before the next `cardKey` (or end of array). */
    const cardKeyRe = /"cardKey"\s*:\s*"([^"]+)"/g;
    const matches = [...text.matchAll(cardKeyRe)];
    for (let i = 0; i < matches.length; i++) {
      const ck = matches[i];
      const nextStart = i + 1 < matches.length ? matches[i + 1].index : text.length;
      const blockEnd = nextStart != null ? nextStart : text.length;
      const block = text.slice(ck.index ?? 0, blockEnd);
      if (/"previewHtml"\s*:\s*"/.test(block)) {
        out.push({ slug, cardKey: ck[1] });
      }
    }
  }
  return out;
}

const CASES = loadCases();

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
