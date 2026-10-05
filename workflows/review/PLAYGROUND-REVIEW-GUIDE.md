# Playground Review — command guide

> **Trigger:** the reviewer types `Playground Review`
> **Last phase:** the reviewer types `Validate`
> **Scope:** the **Playground tab only** — a Playground that already exists. Nothing else in the data file is touched.

| Phase | Who acts | What happens |
|---|---|---|
| 1 · Intake | AI asks | Component name + Figma link |
| 2 · Baseline | AI | Prints what was built and its drift state. Nothing changed yet. |
| 3 · Recheck | AI | Rebuilds when drift says so, and lists the component findings for the Overview tab |
| 4 · Validate | Reviewer types `Validate` | AI runs every check and reports **Done / Partial / Missing / Broken** |

Related: [Overview](OVERVIEW-REVIEW-GUIDE.md) · [Code](CODE-REVIEW-GUIDE.md) · [Changelog](CHANGELOG-REVIEW-GUIDE.md) · shared setup and house rules in the [folder README](../README.md). Building a Playground is not a review: `Playground Build` in [workflows/build/PLAYGROUND-BUILD-GUIDE.md](../build/PLAYGROUND-BUILD-GUIDE.md).

---

# Phase 1 — Intake

On `Playground Review`, the AI replies with exactly this form and waits:

```
Component Name:
Component Link:   (the Figma URL of the COMPONENT SET)
```

If `public/playground/<slug>.json` does not exist, say so and stop — that is a `Playground Build`.

---

# Phase 2 — Baseline

Read `public/playground/<slug>.json` and report, without changing anything:

| Field | From |
|---|---|
| Component + set id | `meta.name`, `meta.setId` |
| Variants built | `variants.length` |
| Properties | `properties` — name, kind, values |
| Built on | `meta.read` |
| Figma version at build | `meta.figma.version` / `lastModified` |
| Tokens source | `meta.tokens` |

Then run `npm run playground:drift -- <slug>` and report the state.

### What each drift state means

| State | Means | What you do |
|---|---|---|
| `current` | The re-read hashes the same, or the file has not moved | Nothing |
| `may-differ` | The Figma **file** moved; Figma has no per-node version, so any edit anywhere in a shared file trips this | Run `--deep`; on a live working file this is normal and means nothing on its own |
| `changed` | `--deep` re-read differs — the component really did change | Rebuild, then re-run the four checks and re-review |
| `edited` | The payload no longer matches `meta.hash` — someone hand-edited generated data | Rebuild. Never patch it back by hand |
| `unbuilt` | An older build with no provenance | Rebuild to gain it |

`--deep` re-reads each component into a temp directory and compares hashes. It is the only check that can say `current`, and it never writes to `public/playground`.

---

# Phase 3 — Recheck

1. **Rebuild when drift says so** (`changed`, `edited`, `unbuilt`), with `Playground Build`, then re-run the four checks. A rebuild is the only fix this review makes — the data is generated, so nothing is patched by hand.
2. **List the component findings.** The checks prove the Playground matches Figma. They cannot tell you the **component** is good. Structure and naming, property model, token coverage, states and assets are **open issues** on the Overview tab, tagged `C1`–`C6`, filed through `Component Review`. The Playground is where you **see** those problems; it is not where you record them.

A Playground review that produces no findings about the component has usually only checked the plumbing.

---

# Phase 4 — `Validate`

Phase 4 reports **Done / Partial / Missing / Broken** and edits nothing.

| # | Check | Passes when |
|---|---|---|
| 1 | Build is current | `drift` says `current`, or `may-differ` confirmed by `--deep` |
| 2 | Data is generated | `meta.hash` matches the payload — nothing hand-edited |
| 3 | Set is the whole set | Variant count equals Figma's, and the multiplier matches |
| 4 | Properties complete | Every property in Figma's panel is in `properties`, booleans included |
| 5 | smoke | All pages pass |
| 6 | reflow | Every layout obeys Figma's auto-layout rules |
| 7 | a11y | All pages pass |
| 8 | fidelity | Every variant ≤ 1%. 1–3% only with a recorded reason after looking at the side-by-side in `.fidelity/`. Over 3% fails. `skipped` is reported apart, never counted as a pass |
| 9 | Cross-browser | smoke passes on `chromium`, `firefox` and `webkit` |
| 10 | Tokens named | Every bound value resolves through `tokens.json`; unresolved is written `not bound`, never `—` or a plausible value. A token is never named by matching its hex |
| 11 | Wrong-family tokens raised | An icon on a `border/*` or `bg/*` token is an open issue — it draws correctly today and breaks when that token is retuned |
| 12 | Faces correct | `Primary/*` renders Proxima Soft, `Secondary/*` BarkAda — never the documentation font |
| 13 | Lint | `npm run lint:playground` clean |
| 14 | Build | `npm run check` exits 0 |

### Report format

```
Playground Review — Validation · Toast

| # | Check | State | Note |
|---|---|---|---|
| 1 | Build current | ✅ Done | drift: current, --deep re-read matches |
| 3 | Whole set | ✅ Done | 22 of 22; 3 × 2 × 2 × 2 × 2 × 2 = 96 possible, 22 authored |
| 8 | fidelity | ⚠️ Partial | 21 ≤1%, 1 at 1.4% — emoji glyph, accepted |
| 11 | Wrong-family tokens | 🔴 Broken | icon bound to border/color-border-primary-inverse |

**Result:** 11 done · 1 partial · 0 missing · 1 broken
**Recommended next:** raise the icon token binding as a C3 open issue on the Overview tab.
```

---

# Guardrails

- **Never hand-edit `public/playground/<slug>.json`.** It is generated. Fix the builder or fix Figma.
- **Never write to Figma.** Read-only, like every other tab.
- **Never accept a check that ran on nothing.** An empty list is a failure, not a pass.
- **Development mode shows container code by design.** It follows the selected layer; the Code tab shows component API. See "The two kinds of code" in the root `CLAUDE.md`.
