# Changelog Review — command guide

> **Trigger:** the reviewer types `Changelog Review`
> **Second phase:** the reviewer types `Validate`
> **Scope:** the **Changelog tab only** — the component's audit trail.

**Run this last.** The Style and Code runs *produce* changes; this run *records* them. A component that got a Style Review and a Code Review has a changelog entry owed to it.

| Phase | Who acts | What happens |
|---|---|---|
| 1 · Intake | AI asks | Component name + Figma link |
| 2 · Evidence | AI | Gathers every change from four sources and prints them. Nothing changed yet. |
| 3 · Update | AI | Writes the entry to the rules in this file |
| 4 · Validate | Reviewer types `Validate` | AI re-runs every check and reports **Done / Partial / Missing / Broken** |

Related: [Overview](OVERVIEW-REVIEW-GUIDE.md) · [Style](STYLE-REVIEW-GUIDE.md) · [Code](CODE-REVIEW-GUIDE.md) · shared setup, house rules and pre-work in the [folder README](README.md).

---

> **Rule Zero — follow the Figma component.** Document what Figma says; never invent a value, a style, or a design. Don't derive what you could read, don't translate Figma's answer into a tidier one, and don't substitute a plausible value for one you couldn't read. If you can't read it, report it Missing with the reason. Full statement in the root `CLAUDE.md`.

# Phase 1 — Intake

On `Changelog Review`, the AI replies with exactly this form and waits:

```
Component Name:
Component Link:
Figma Channel:   (from the Cursor Talk To Figma plugin — blank if already joined)
```

---

# Phase 2 — Evidence gathering

> **Record everything.** The changelog is the component's audit trail. A change that happened and wasn't written down is a change nobody can find later.

The AI pulls from **four sources** and prints what each one turned up. Nothing is edited in this phase.

### Source 1 — the file's own history

```bash
git log --oneline -- astro-site/src/data/components/<slug>.ts
git diff HEAD~1 -- astro-site/src/data/components/<slug>.ts
git status --short                    # uncommitted work from this session
```

### Source 2 — the Overview tab

Anything that moved since the last entry:

- `overview.open` → `overview.resolved` — **each one owes a changelog row**
- `overview.recommendations` → `overview.appliedRecommendations` — **each one owes a row**
- `overview.traits` re-rated
- `meta.node` / `meta.figmaUrl` repointed → the component was rebuilt

### Source 3 — the live Figma component

Compare what's there now against what the data file says: variant count, property names and values, layer names, states, tokens, assets.

### Source 4 — this session's Style and Code runs

Doc work counts. Sections rewritten to the guides, snippets added, tables normalized — all of it is a patch entry.

### The six buckets

Walk all six before writing. If a bucket is empty, say so — but check it.

| Bucket | Examples |
|---|---|
| **Structure & layers** | Frames renamed, wrappers deleted, hierarchy flattened, layer added |
| **Properties & variants** | Property added / renamed / removed, values renamed, variant count changed |
| **States** | Pressed / disabled / loading added or fixed |
| **Tokens & color** | Hardcoded value bound to a token, token renamed, palette change |
| **Assets & icons** | Raster replaced with vector, boolean op flattened, icon swapped |
| **Content & slots** | Text layer added, slot introduced, default copy changed |
| **Documentation** | Sections rewritten to the guides, snippets added, tables normalized |

### Evidence report

```
Source 1 · git       — 2 commits since v1.4.0: alert description rebuild, 90-variant note
Source 2 · Overview  — 3 issues resolved (C1, C2, C3), 1 recommendation applied
Source 3 · Figma     — node changed 6663:9288 → 6663:104524; variants 30 → 90; Style axis added
Source 4 · this run  — Style tab rebuilt to 2 cards; Code tab property mapping regrouped

Buckets: Structure ✓ · Properties ✓ · States — none · Tokens ✓ · Assets — none · Content ✓ · Docs ✓
Proposed bump: 2.0.0 (major — rebuilt on a new node, variant matrix changed)
```

Then it proceeds to Phase 3.

---

# Phase 3 — Write the entry

## 3.1 Version numbering

| Bump | When |
|---|---|
| `initial` | First documented assessment of the component |
| **Patch** `x.y.Z` | Docs, copy, token values, snippet fixes — no Figma structure change |
| **Minor** `x.Y.0` | Variants / properties / states / slots added, issues resolved, non-breaking renames |
| **Major** `X.0.0` | Rebuilt on a new node, property schema changed, variant matrix changed, component split or merged |

When a run produces both — a Figma rebuild *and* a doc rewrite — they go in **one entry** at the higher bump, as separate rows.

## 3.2 Entry shape

Newest entry first in the array.

```ts
{
  "version": "2.0.0",
  "date": "September 2026",
  "kind": "major",
  "kindLabel": "Major",
  "header": "Rebuilt in the 2026 Working File · node 6663:104524",
  "rows": [
    { "body": "<strong>Style axis added.</strong> Card and Banner are now one property on one component instead of two components. <code>Style=Card | Banner</code>.",
      "delta": { "kind": "resolved", "label": "C2 Resolved" } },
    { "body": "<strong>Container layers renamed.</strong> Three nested <code>container</code> frames became <code>AlertContainer</code> and <code>ContentRow</code>; the redundant middle wrapper was deleted.",
      "delta": { "kind": "resolved", "label": "C1 Resolved" } },
    { "body": "<strong>Style and Code tabs rebuilt to the content guides.</strong> Two spec cards, four spec sections, property mapping regrouped by property.",
      "delta": { "kind": "resolved", "label": "Docs" } }
  ]
}
```

| Field | Rule |
|---|---|
| `version` | Semver, per the table above |
| `date` | `Month YYYY` — never a relative date |
| `kind` / `kindLabel` | `major` / `minor` / `patch` / `initial` and its label |
| `header` | Names the source: the Figma file and the node ID |
| `rows[].body` | Bold headline, then one or two sentences. Property and layer names in `<code>` |
| `rows[].delta.kind` | `resolved` (done) · `partial` (half done — say what's left) · `open` (logged, not fixed) |
| `rows[].delta.label` | Ties to a criterion where one applies: `C1 Resolved`, `C3 Partial` |

## 3.3 Rules

- **One row per change.** Don't bundle three renames into one row because they happened together.
- **Every resolved Overview issue gets a row.** That cross-link is what stops the page contradicting itself.
- **Cite the node.** In the header, and in the row when a specific variant changed.
- **Never rewrite history.** Old entries stay byte-identical. A correction is a new patch entry, not an edit.
- **Plain language.** Say what changed and why it matters. Cut every word you can.

---

# Phase 4 — `Validate`

The reviewer types `Validate`. The AI runs every check and reports. **No content is edited during validation.**

## 4a. Commands

```bash
cd astro-site && npm run build
git diff -- src/data/components/<slug>.ts      # confirm older entries are untouched
```

Then open `http://localhost:4321/components/<slug>` on the Changelog tab.

## 4b. The 11 checks

| # | Check | How to tell it passed |
|---|---|---|
| 1 | Build passes | `npm run build` exits clean |
| 2 | Newest entry first | Array order is descending by version |
| 3 | Bump matches the change | Node change or matrix change ⇒ major |
| 4 | Date is `Month YYYY` | No relative dates, no day numbers |
| 5 | Header cites file + node | e.g. `2026 Working File · node 6663:104524` |
| 6 | Every resolved issue has a row | Count `overview.resolved` deltas against rows |
| 7 | Every applied recommendation has a row | Same, for `appliedRecommendations` |
| 8 | All six buckets were checked | Evidence line per bucket, "none" allowed |
| 9 | Delta kinds and labels valid | `resolved` / `partial` / `open`, criterion labels correct |
| 10 | History not rewritten | `git diff` shows no change to older entries |
| 11 | Doc work recorded | The Style and Code runs appear as rows |

## 4c. Report format

Status is one of **✅ Done · ⚠️ Partial · ❌ Missing · 🔴 Broken**.

```
## Changelog Review — Validation · Alert

| # | Check | Status | Detail |
|---|---|---|---|
| 1  | Build | ✅ Done | clean |
| 2  | Newest first | ✅ Done | 2.0.0 → 1.4.0 → 1.0.0 |
| 3  | Bump matches | ✅ Done | major — node + matrix changed |
| 4  | Date format | ✅ Done | September 2026 |
| 5  | Header cites node | ✅ Done | 2026 Working File · node 6663:104524 |
| 6  | Resolved issues covered | ⚠️ Partial | 3 resolved, 2 have rows — C3 token rebind not recorded |
| 7  | Applied recos covered | ✅ Done | 1 of 1 |
| 8  | Six buckets checked | ✅ Done | States and Assets returned none |
| 9  | Delta kinds valid | ✅ Done | 3 resolved |
| 10 | History intact | 🔴 Broken | v1.4.0 header was edited — restore it and add a patch entry instead |
| 11 | Doc work recorded | ❌ Missing | Style and Code rebuilds not mentioned |

**Result:** 8 done · 1 partial · 1 missing · 1 broken
**Blocked by pre-work:** none
**Recommended next:** restore v1.4.0 (check 10), add the C3 row (6), add the docs row (11)
```

Rules for the report:

- **All 11 rows, every time.**
- **A rewritten past entry is 🔴 Broken** — it destroys the audit trail.
- **Detail names the version and the row.**
- **End with a next-action line.**
- If a check can't be run, mark it 🔴 Broken and say why — never guess a pass.

---

# Guardrails

- **Figma is read-only.** Problems found go to Open Issues via `OVERVIEW-REVIEW-GUIDE.md`.
- **Changelog tab only.** Don't touch Overview, Style, or Code in this run.
- **Never delete or edit a past entry.** Corrections are new entries.
- **Never commit or push** unless explicitly told. `main` auto-deploys to production.
- **One component per run.**
