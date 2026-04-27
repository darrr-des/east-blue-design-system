# astro-site/scripts

Tooling for the Astro docs site. Three categories:

## `audit/` — run anytime to inspect coverage

| Script | Purpose |
|---|---|
| `audit.mjs` | High-level summary across all components |
| `audit-progress.mjs` | Per-section coverage report (Properties / Colors / Layout / Typography / swift / compose) |
| `audit-honest.mjs` | Per-component DES + DEV completion (a card only counts when both are populated) |
| `audit-spec-gaps.mjs` | Lists every spec card with missing DES sections |
| `audit-dev-code.mjs` | Lists every spec card with missing or stubby SwiftUI/Compose snippets |

Run from the repo root:
```bash
node astro-site/scripts/audit/audit-progress.mjs
```

## `fills/` — historical one-shot data fillers

These ran once to populate spec cards across batches of components (e.g. `fill-last-25.mjs` filled the final 23 cards on 2026-04-27). Kept for reference and reproducibility — re-running them on already-filled data is a no-op or overwrite.

## `utils/` — reusable helpers

| Script | Purpose |
|---|---|
| `migrate.mjs` | Original migration from the legacy `assessment-src/` HTML files into structured `src/data/components/<slug>.ts` |
| `snapshot-previews.mjs` | Captures live-preview HTML from the legacy site for offline use |
| `extract-demos.mjs` | Extracts demo JS payloads referenced by previews |
| `desc-inventory.mjs` | Inventories component descriptions for review |
