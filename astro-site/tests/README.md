# Visual regression — quick reference

Pixel-strict snapshot testing for every component spec card.
**Goal:** catch regressions before they ship; verify Figma fidelity manually via the side-by-side review tool.

See [.claude/plans/visual-regression-plan.md](../../.claude/plans/visual-regression-plan.md) for the full architecture.

---

## Daily workflow

### 1. Run the suite
```sh
npm run test:visual
```
Compares every component preview to its baseline in `tests/visual-baselines/`. **0 pixel diff allowed** — a passing run guarantees no visual drift.

### 2. Inspect failures
A failed run leaves diff/actual/expected images at:
```
tests/.playwright-output/<test-folder>/
```
Open the diff PNGs to see what changed.

### 3. Approve intentional changes
If the failure is intentional (you redesigned a component on purpose):
```sh
npm run test:visual:update
```
Replaces the baselines with the new render. **Review the new baselines in git diff before committing.**

### 4. Audit against Figma master
```sh
npm run review
open tests/.review/index.html
```
Side-by-side viewer pairing each Figma reference with our Chromium baseline. Use this to spot-check fidelity.

### 5. Refresh Figma references
After a Figma master change:
```sh
npm run baselines:refresh                 # all components
npm run baselines:refresh -- callout      # one
```
Re-fetches `tests/figma-reference/<slug>__<key>.png` from the Figma REST API.

### 6. Sync demo previews
After editing a `<slug>.js` demo:
```sh
npm run sync-previews -- <slug>
```
Rewrites `<slug>.ts` `livePreviewHtml` + `previewHtml` fields to match what JS renders. Single source of truth.

---

## Files

| Path | Purpose |
|---|---|
| `tests/visual.spec.ts` | The test runner — discovers spec cards from `<slug>.ts` files |
| `tests/component-slugs.ts` | Cached list of 79 component slugs |
| `tests/figma-reference/` | Figma API exports, **human review aid** (not used by the test) |
| `tests/visual-baselines/` | **Canonical baselines.** Locked Chromium renders. Git-tracked. |
| `tests/.diff/` | Failure artefacts (gitignored) |
| `tests/.playwright-output/` | Playwright failure traces (gitignored) |
| `tests/.review/` | Side-by-side review HTML (gitignored) |
| `playwright.config.ts` | Strict 0-pixel-diff config, viewport pinned, fonts.ready wait |
| `scripts/export-figma-baselines.mjs` | Figma REST API exporter (per spec card) |
| `scripts/sync-previews.mjs` | JS → static HTML sync via Playwright capture |
| `scripts/build-visual-review.mjs` | Generate side-by-side review page |

---

## What the test catches

✅ Color changes (e.g. `#005CE5` → `#0066FF`)
✅ Padding/margin drift > 1px
✅ Font weight or size changes
✅ Layout breaks (element repositioned, hidden, swapped)
✅ Border / shadow tweaks
✅ Icon swaps

## What it doesn't catch

❌ Cross-engine rendering nuance (Figma's renderer ≠ Chromium) — that's why baselines are self-rendered, not Figma exports
❌ Interactive state changes (hover, focus, pressed) — out of scope today
❌ Mobile responsive breakpoints — only desktop @1440 viewport baselined

---

## CI

`.github/workflows/visual-regression.yml` runs `npm run test:visual` on every push and PR. Failures upload diff artefacts as GitHub Action artifacts (7-day retention).
