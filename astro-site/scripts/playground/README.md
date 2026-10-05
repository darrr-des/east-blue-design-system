# scripts/playground

The scripts that build and check a component's Playground. **How to build one, step by step:** `Playground Build` in `workflows/build/PLAYGROUND-BUILD-GUIDE.md`. **How to recheck one:** `Playground Review` in `workflows/review/PLAYGROUND-REVIEW-GUIDE.md`.

| Script | npm | Does |
|---|---|---|
| `build.mjs` | `playground:build -- <slug> <fileKey> <setId>` | Reads the component set over the Figma REST API and writes `public/playground/<slug>.json`. Needs `FIGMA_ACCESS_TOKEN` in `astro-site/.env` |
| `drift.mjs` | `playground:drift -- <slug> [--deep]` | Compares a build against Figma; `--deep` re-reads into a temp directory |
| `smoke.mjs` | `playground:smoke` | Every control, layer and code language renders — no error, nothing clipped |
| `reflow.mjs` | `playground:reflow` | Every variant × boolean combination obeys Figma's auto layout |
| `a11y.mjs` | `playground:a11y` | Names, WAI-ARIA tree pattern, focus ring, live region |
| `fidelity.mjs` | `playground:fidelity` | Figma PNG export vs the rendered Playground, pixel for pixel |

`npm run playground:checks` runs smoke → reflow → a11y → fidelity. Every check exits 1 on a failure, and on an empty list.
