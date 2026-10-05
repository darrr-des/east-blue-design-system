# astro-site/scripts

Tooling for the docs site. Every script reads the component JSON in `src/content/components/` through the same loader the site uses (`src/data/components/from-json.mjs`).

## `audit/` — measure, any time

| Script | npm | Purpose |
|---|---|---|
| `framework-sweep.mjs` | `npm run audit` · `audit:matrix` · `audit:gate` | Every component against every guide rule; `--gate` fails on the structural rules and is what CI runs |
| `preview-structure-lint.mjs` | `npm run lint:previews` | Overview preview wrappers and a server-rendered preview on every spec card |
| `colors-table-coverage.mjs` | `npm run lint:colors` | Which components have a colors table |
| `audit-progress.mjs` | `npm run audit:progress` | Spec-card completion by section |
| `preview-inventory.mjs` | — | One row per component with a rendering hint, for preview audits |

`npm run check` = build + `audit:gate` + lint. Run it before any hand-off.

## `playground/` — build and check a Playground

`build.mjs` · `drift.mjs` · `smoke.mjs` · `reflow.mjs` · `a11y.mjs` · `fidelity.mjs` — `npm run playground:*`. Script list: [playground/README.md](playground/README.md). How to build one: `Playground Build` in `workflows/build/PLAYGROUND-BUILD-GUIDE.md`.

## Root — maintenance

| Script | npm | Purpose |
|---|---|---|
| `sync-previews.mjs` | `npm run sync-previews` | Capture each component's JS-rendered preview and write it back into its JSON (dev server must be running) |
| `export-figma-baselines.mjs` | `npm run baselines:refresh` | Export Figma nodes for the visual-regression baselines |
| `build-visual-review.mjs` | `npm run review` | Assemble the visual review page |

Keep this folder to the scripts above. A one-off smoke test or screenshot capture belongs in a scratch directory, not here.
