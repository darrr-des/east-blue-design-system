# CLAUDE.md — East Blue Design System

Project rules and context for Claude Code sessions. One rule lives in one place:

| File | Holds |
|---|---|
| `CLAUDE.md` (this file) | What every session needs |
| [eb-ds-assessment-guide.md](eb-ds-assessment-guide.md) | The method — traits, ratings, verdicts, criteria C1–C6, native status, GCash patterns |
| [workflows/](workflows/README.md) | Setup, house rules and reading Figma — shared by build and review |
| [workflows/build/](workflows/build/README.md) | Writing a tab — one build guide per tab |
| `workflows/review/` | Rechecking a tab — one review guide per tab, and the checks |

---

## Project Overview

East Blue is a **component assessment platform** for the GCash Design System. It evaluates Figma components on **DS Health** and **Native Mobile Readiness** (SwiftUI + Jetpack Compose handoff).

The output is a **static Astro site** plus a **standalone Google OAuth backend** (`frost-auth`) that gates access. Both live in this monorepo.

Live: https://eb-ds.frostdesigngroup.com/

---

## Rule Zero — Follow the Figma component

**Document what Figma says. Never invent a value, a style, or a design.**

Every specification on a component page — alignment, padding, height, width, radius, gap, colour, font family, font weight, text style, variant name — is **read off the Figma component and reproduced exactly**. This applies to the spec rows, the colour tables, the code snippets, and the rendered preview alike.

You may not:

- **Derive what you could read.** Compute alignment from bounding boxes when the Figma panel states it.
- **Translate Figma's answer.** Write `360` when the panel says `Fill`.
- **Answer a different question.** Record the text-stack gap when the row asks for the container's gap.
- **Let the site's own styling stand in.** Render a preview in the documentation font instead of the component's `Proxima Soft` / `BarkAda`.
- **Substitute a plausible value** for one you could not read.

If a value cannot be read with the tools available, it is **not yours to guess** — leave it, and report it as Missing with the reason. A blank the designer fills in costs one message; a plausible wrong number ships to developers and is trusted.

The preview must match the component. Check it against `export_node_as_image`, not against the layer tree — a layer that exists is not necessarily drawn.

---

## Commands — trigger phrases

When the user types one of these phrases, open the matching guide and follow it exactly. **Build** writes a tab (new component, missing section). **Review** rechecks a tab that exists, makes the small fixes its guide lists, and reports. Setup, house rules and order: [workflows/README.md](workflows/README.md).

| Tab | Build — write it | Review — recheck it |
|---|---|---|
| Overview | `Component Build` → [OVERVIEW-BUILD-GUIDE.md](workflows/build/OVERVIEW-BUILD-GUIDE.md) | `Component Review` → [OVERVIEW-REVIEW-GUIDE.md](workflows/review/OVERVIEW-REVIEW-GUIDE.md) |
| Playground | `Playground Build` → [PLAYGROUND-BUILD-GUIDE.md](workflows/build/PLAYGROUND-BUILD-GUIDE.md) | `Playground Review` → [PLAYGROUND-REVIEW-GUIDE.md](workflows/review/PLAYGROUND-REVIEW-GUIDE.md) |
| Code | `Code Build` → [CODE-BUILD-GUIDE.md](workflows/build/CODE-BUILD-GUIDE.md) | `Code Review` / `Code Tab Review` → [CODE-REVIEW-GUIDE.md](workflows/review/CODE-REVIEW-GUIDE.md) |
| Changelog | `Changelog Build` → [CHANGELOG-BUILD-GUIDE.md](workflows/build/CHANGELOG-BUILD-GUIDE.md) | `Changelog Review` → [CHANGELOG-REVIEW-GUIDE.md](workflows/review/CHANGELOG-REVIEW-GUIDE.md) |

`Code Review` is a plain-text trigger for the component's Code tab — not the built-in `/code-review` diff review. When ambiguous, ask. The Style tab is retired.

**`Component Update`** → [COMPONENT-UPDATE-GUIDE.md](workflows/build/COMPONENT-UPDATE-GUIDE.md) — the rollout for a component already on the site: Playground + In Context + sweep cleanup in one run, ending in a report for the owner. Mechanical changes only; every judgement call (verdicts, open issues, repointing a moved set, past changelog entries, API names) is reported, not made.

---

## Figma Rule — Read-Only

- **NEVER** modify Figma components, layers, properties, or tokens — not even to fix issues.
- **NEVER** use any Figma tool that writes, renames, resizes, or edits nodes.
- **ONLY** use read-only Figma tools to inspect and document.
- If an issue is found, **document it as an open issue in the component data** — do not fix it in Figma.

A local, gitignored `.claude/CLAUDE.md` may grant per-request write permission on the owner's machine only. This file is the shared policy.

### Figma toolchains

| Toolchain | Tools | When |
|---|---|---|
| Talk To Figma plugin (`mcp__ClaudeTalkToFigma__*`) | `join_channel` · `get_node_info` · `get_selection` · `export_node_as_image` · `scan_text_nodes` · `get_styled_text_segments` · `get_styles` · `get_variables` | The review guides. Needs the plugin's channel code. |
| Figma Dev Mode MCP (`mcp__figma__*`) | `get_design_context` · `get_metadata` · `get_screenshot` · `get_variable_defs` | Auto-layout padding, gap, alignment and Dev Mode code, when authorized. |

Neither toolchain returns a value you may derive: what the panel states and the tools cannot read is reported Missing.

### URL Parsing

```
figma.com/design/:fileKey/:fileName?node-id=:nodeId
→ fileKey = :fileKey, nodeId = convert "-" to ":" in :nodeId
```

**Files:** GCash DS — Sticker Sheets v2 `HwWDwPit2xJjDH4zszOZ5o` (canonical) · 2026 Working File `pbxY8a2xcIfVZKxwnud9Xe` (staging).

---

## Where things live

| Path | What |
|---|---|
| `astro-site/src/content/components/<slug>.json` | One file per component (95) — the source of truth. Shape defined by `keystatic.config.ts`, typed by `src/data/types.ts` |
| `astro-site/public/scripts/demos/<slug>.js` | Per-component live preview + DEV code (`getSnippet`) |
| `astro-site/src/data/` | `tokens.json` (generated — never hand-edit) · `typography.ts` (`matchLayer()`) · `colors.ts` (`matchPaint()`) |
| `astro-site/scripts/audit/` | `framework-sweep.mjs` (every component × every guide rule), `figma-verify.mjs`, the lints |
| `astro-site/scripts/playground/` | Playground build, drift and the four checks — run through `Playground Build` |
| `auth-backend/` | `frost-auth` — setup and East Blue integration in its [README](auth-backend/README.md) |

**Reference page.** `sample-component.json` is the framework rendered whole on sample data (`/components/sample-component`). A slug starting `sample-` builds like any component but stays out of the sidebar, search, the grid and the home count (`navManifest` in `_index.ts`), and the sweep measures it apart and holds it to all 31 rules. It is not a component: never cite its values, and never read Figma for it.

**Test page.** A slug starting `test-` is a real Figma read of a component outside the inventory — a trial run of the framework on an unfamiliar component. It builds and renders, stays out of the sidebar, search, the grid and the counts like a reference page, and the sweep reports it apart **without gating**: an unfinished trial must never fail the build. Rule Zero still applies to every value on it.

---

## Authoring rules

- In a review run, touch only `<slug>.json` and `demos/<slug>.js`. Never edit `src/components/*.astro`, `global.css`, `types.ts` or `keystatic.config.ts` in a review run. Maintainer CSS conventions are at the top of `global.css`.
- C7 · Code Connect Linkability is not scored until the native library ships: it appears nowhere on a page.
- A `remove` verdict gets no open issues and no recommendations — one infobox pointing to the canonical sibling.
- **The two kinds of code** (decided 2026-09-25). The **Code tab** answers "how do I use this component" and is always component API (`EB{ComponentName}`). The **Playground's Development mode** answers "how is this layer built" and is container code, because it follows the selected layer — it is the Figma Dev Mode view, inside the site. A reader is never shown container code where they expect a call to the library, and never shown `EBToast(…)` for a frame they selected inside it.

---

## Build, Lint, Measure

```bash
cd astro-site
npm install
npm run dev                           # → http://localhost:4321
npm run cms                           # → http://127.0.0.1:4321/keystatic — edit the JSON through forms (dev only)
npm run build                         # → astro-site/dist/ — must pass before any hand-off
npm run lint                          # preview structure + colors-table coverage + Playground lint
npm run audit                         # framework-sweep: components failing each guide rule
npm run audit:matrix                  # per-component pass/fail
npm run audit:gate                    # exit 1 if any component fails a structural rule
npm run check                         # build + gate + lint — CI runs this on every pull request

cd auth-backend && npm install && npm run dev   # → http://localhost:3001
```

---

## Git & Deploy

- Branch: `main`. Deploy: server pulls + rebuilds via `.github/workflows/main.yml` on push to `main`.
- Never commit or push unless explicitly told — `main` auto-deploys to production.
- Run `cd astro-site && npm run build` locally before pushing.
