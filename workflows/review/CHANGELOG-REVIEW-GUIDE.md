# Changelog Review — command guide

> **Trigger:** the reviewer types `Changelog Review`
> **Last phase:** the reviewer types `Validate`
> **Scope:** the **Changelog tab only** — rechecking the component's audit trail: is every change recorded, and is history intact?

| Phase | Who acts | What happens |
|---|---|---|
| 1 · Intake | AI asks | Component name + Figma link |
| 2 · Baseline | AI | Prints the existing entries and gathers the evidence. Nothing changed yet. |
| 3 · Recheck | AI | Compares the entries against the evidence, and makes the small fixes below |
| 4 · Validate | Reviewer types `Validate` | AI runs the 11 checks and reports **Done / Partial / Missing / Broken** |

Related: [Overview](OVERVIEW-REVIEW-GUIDE.md) · [Playground](PLAYGROUND-REVIEW-GUIDE.md) · [Code](CODE-REVIEW-GUIDE.md) · shared setup and house rules in the [folder README](../README.md).

**Writing an entry is a build, not a review.** The evidence sources, version numbering, entry shape and rules are in `Changelog Build`: [workflows/build/CHANGELOG-BUILD-GUIDE.md](../build/CHANGELOG-BUILD-GUIDE.md). This review checks against them.

### What a review may change — small fixes only

| May | May not — run `Changelog Build` instead |
|---|---|
| Record a missed change as **one new `patch` entry** under the backfill rule (Changelog Build §3.3) | Write the entry for this session's Overview, Playground or Code runs |
| Put entries back in newest-first order | Edit or delete a past entry's content |
| Restore a past entry that was edited to its committed version (`git show HEAD:…`) | |

---

# Phase 1 — Intake

On `Changelog Review`, the AI replies with exactly this form and waits:

```
Component Name:
Component Link:
Figma Channel:   (from the Cursor Talk To Figma plugin — blank if already joined)
```

---

# Phase 2 — Baseline

Print the existing entries — version, date, kind, header, row count — newest first. Then gather the evidence exactly as in Changelog Build Phase 2: the file's git history, the moves in the Overview tab, the live Figma component, and this session's runs, walked through all six buckets.

---

# Phase 3 — Recheck

Compare the entries against the evidence:

- Every resolved Overview issue and every applied recommendation has a row.
- Every Figma change the evidence found — new node, variant matrix, renames — is recorded, with the right bump.
- No past entry differs from its committed version.

Make the small fixes above, then run `cd astro-site && npm run build`. A change owed by this session's runs goes in the report as a `Changelog Build` next step.

---

# Phase 4 — `Validate`

The reviewer types `Validate`. The AI runs every check and reports. **No content is edited during validation.**

## 4a. Commands

```bash
cd astro-site && npm run build
git diff -- src/content/components/<slug>.json      # confirm older entries are untouched
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
| 11 | Doc work recorded | The Playground and Code runs appear as rows |

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
| 11 | Doc work recorded | ❌ Missing | Playground and Code rebuilds not mentioned |

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

- **Figma is read-only.** Problems found go to Open Issues via `Component Review`.
- **Changelog tab only.** Don't touch Overview, Playground, or Code in this run.
- **Never delete or edit a past entry.** Corrections are new entries — or a restore of the committed version.
- **Small fixes only.** Anything on the "may not" list is a `Changelog Build`.
- **Never commit or push** unless explicitly told. `main` auto-deploys to production.
- **One component per run.**
