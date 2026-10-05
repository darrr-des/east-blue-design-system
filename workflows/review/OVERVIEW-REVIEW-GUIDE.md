# Overview Review — command guide

> **Trigger:** the reviewer types `Component Review`
> **Last phase:** the reviewer types `Validate`
> **Scope:** the **Overview tab only** — rechecking an existing assessment against the live component: open issues, recommendations, DS Health, and the badges those drive.

| Phase | Who acts | What happens |
|---|---|---|
| 1 · Intake | AI asks | Component name + Figma link + channel |
| 2 · Baseline | AI | Reads the data file, prints the current Overview tab as tables. Nothing changed yet. |
| 3 · Recheck | AI | Checks each item against the live component, one at a time, and makes the small fixes below |
| 4 · Validate | Reviewer types `Validate` | AI runs the 8 checks and reports **Done / Partial / Missing / Broken** |

Related: [Playground](PLAYGROUND-REVIEW-GUIDE.md) · [Code](CODE-REVIEW-GUIDE.md) · [Changelog](CHANGELOG-REVIEW-GUIDE.md) · shared setup, house rules and reading Figma in the [folder README](../README.md).

**Writing the tab is a build, not a review.** A component with no Overview tab, or a section that has to be written from nothing, goes to `Component Build` — [workflows/build/OVERVIEW-BUILD-GUIDE.md](../build/OVERVIEW-BUILD-GUIDE.md). That guide holds the tab's content rules and the plain-language rules; everything this review writes follows them.

### What a review may change — small fixes only

| May | May not — run `Component Build` instead |
|---|---|
| Move a resolved issue to Resolved, an applied reco to Applied | Write the tab for a component that has none |
| Add a new finding as an open issue (headline + body + tag) | Write a missing section (Behavior, In Context, verdict box) from nothing |
| Re-rate a trait so it agrees with the issue lists | Re-assess the component from scratch |
| Correct the verdict, badges and nav dot so they agree | |
| Repoint `meta.node` / `meta.figmaUrl` when the component was rebuilt on a new node | |
| Delete a C7 item | |

---

# Phase 1 — Intake

On `Component Review`, the AI replies with exactly this form and waits:

```
Component Name:
Component Link:
Figma Channel:   (the code from the Cursor Talk To Figma plugin)
```

> **Figma Channel is required to recheck.** Reading the assessment only needs the data file, but checking it against the live component needs a Figma connection. If the reviewer already joined a channel this session, they can leave it blank.

If the component has no data file, say so and stop — that is a `Component Build`.

---

# Phase 2 — Baseline

The AI reads `astro-site/src/content/components/<slug>.json` and prints the current Overview-tab items verbatim — nothing is checked yet, this is the baseline.

The site renders these as segmented tabs — **Open Issues │ Resolved** and **Design │ Applied**, each with a count (e.g. `Open Issues 1 · Resolved 9`). So the AI prints all four lists, giving the reviewer the full picture and the running counts. If a list is empty, it says so (`Resolved: none yet`).

**Open Issues** *(overview.open)*

| Open Issue Item | Verdict | Key Open Issue | Status | Solution |
|---|---|---|---|---|
| Short headline of the issue | Criterion tag (C1–C6) | The detail + rationale | `Open` | Recommended fix / design decision |

**Resolved Issues** *(overview.resolved)*

| Resolved Issue Item | Verdict | Status | How it was resolved |
|---|---|---|---|
| Short headline | Criterion tag (C1–C6) | `Resolved` | Version + what changed, e.g. `v2.0: rebuilt as vectors` |

**Design Recommendations** *(overview.recommendations)*

| Design Reco Item | Verdict | Status | Solution |
|---|---|---|---|
| Short headline of the reco | Reco tag (Rename / Property / Slot / State / Token / Asset / Composition / Family / A11y / Docs) | `Open` | Recommendation / how to apply |

**Applied Recommendations** *(overview.appliedRecommendations)*

| Applied Reco Item | Verdict | Status | What shipped |
|---|---|---|---|
| Short headline | Reco tag | `Applied` | `vX: Applied — …` |

- **Verdict** = the item's tag — the criterion (C1–C6) for an issue, the recommendation tag for a reco.
- **Status** starts as `Open` for every open row; it changes only after the recheck.
- **No table has a C7 row** — C7 does not exist on the page.

---

# Phase 3 — Recheck

The reviewer confirms the list, and the AI checks each item against the live Figma component, **one at a time**, always responding in table form. Per item the AI must:

- Mark the **Status** — `Resolved` (cite the Figma evidence) · `Partial` (what's done vs left) · `Still Open` · `Intentional` (by design — dismiss, don't file).
- **Give a recommendation and help with the design decision** — not just a verdict. When something is a judgment call (merge vs keep, slot vs booleans, rename target), the AI proposes an option with rationale and asks, rather than assuming. Recurring lesson: several "issues" turn out to be intentional — *ask first.*
- The reviewer is free to respond however they like between items; the AI keeps the running table updated.

New findings surfaced during the recheck are added as extra rows, tagged the same way, and sorted into the four decision buckets (see the Build guide, Phase 2).

**Nothing on Code Connect.** If a finding is about Code Connect, do not file it. A C7 item found in the data file is deleted, not moved to Resolved.

## Apply the small fixes

When the recheck is done, update **only the Overview-tab content** of `<slug>.json`:

| Overview field | Action |
|---|---|
| `overview.open` | **Move** resolved issues out (don't delete); keep genuinely-open ones; add new findings |
| `overview.resolved` | Receive each fixed issue → **populates the Resolved tab** (body prefixed with version + criterion) |
| `overview.recommendations` | **Move** applied recos out; keep still-open ones |
| `overview.appliedRecommendations` | Receive each shipped reco → **populates the Applied tab** (body prefixed `vX: Applied — …`, keep its tag) |
| `overview.traits` | Re-rate any trait the moves changed — all four stay (Reusable · Self-contained · Consistent · Composable) |

**It's a move, not a delete.** A resolved issue leaves `overview.open` and lands in `overview.resolved`; an applied reco leaves `overview.recommendations` and lands in `overview.appliedRecommendations`. That's what drives the segmented **Open Issues │ Resolved** / **Design │ Applied** tab layout and its counts. Never drop an item on the floor — if it's done, it belongs in the resolved/applied tab as the audit trail.

When the component was rebuilt on a **new node**, also repoint the meta: `meta.node`, `meta.figmaUrl`, `meta.verdict`, `meta.description`.

> **The trap:** updating the issue lists but not DS Health makes the page contradict itself — Resolved says "rebuilt as vectors" while a trait still says "raster-baked." Keep them in sync.

Then make the verdict, native status badge and sidebar dot agree with the result — the rule is in the Build guide, *Make every badge, status, and indicator agree* — and **build and read the page**:

```bash
cd astro-site && npm run build
```

The build catches schema breakage; it does **not** catch stale prose — read the rendered page.

---

# Phase 4 — `Validate`

The reviewer types `Validate`. The AI runs every check below and reports. **No content is edited during validation** — findings go in the report, and the reviewer decides what gets fixed.

Run `cd astro-site && npm run build` first, then open `http://localhost:4321/components/<slug>` on the Overview tab.

### The 8 checks

| # | Check | How to tell it passed |
|---|---|---|
| 1 | Build passes | `npm run build` exits clean |
| 2 | Exactly four traits | Reusable · Self-contained · Consistent · Composable — nothing else |
| 3 | Verdict matches traits | `keep` only when all four traits pass |
| 4 | Badges and nav dot match the verdict | `meta.badges` and the sidebar dot follow the badge rule in the Build guide |
| 5 | No C7 anywhere | No open, resolved or scorecard item tagged C7 |
| 6 | Every open issue has headline + body + tag | No bare string, no missing tag |
| 7 | Every recommendation has one of the ten tags | Rename · Property · Slot · State · Token · Asset · Composition · Family · A11y · Docs |
| 8 | Behavior table present when the component is interactive | Omitted only for display-only components |

### Report format

Status is one of **✅ Done · ⚠️ Partial · ❌ Missing · 🔴 Broken**.

```
## Component Review — Validation · Alert

| # | Check | Status | Detail |
|---|---|---|---|
| 1 | Build | ✅ Done | clean |
| 2 | Four traits | ✅ Done | Reusable · Self-contained · Consistent · Composable |
| 3 | Verdict matches traits | 🔴 Broken | `keep` while Consistent is `partial` — re-rate, or change the verdict to `fix` |
| 4 | Badges + nav dot | ✅ Done | `keep` + `ready`, no dot — will change with check 3 |
| 5 | No C7 | 🔴 Broken | one open issue still reads "Code Connect mappings not registered" — delete it |
| 6 | Open issues complete | ⚠️ Partial | 2 of 3 carry a tag — "The icon can't be swapped" has none |
| 7 | Reco tags canonical | ✅ Done | 4 recos: Slot, Rename, State, Docs |
| 8 | Behavior present | ❌ Missing | Alert is interactive (action button) and has no `overview.behavior` — write it with `Component Build` |

**Result:** 4 done · 1 partial · 1 missing · 2 broken
**Recommended next:** delete the C7 line (check 5), settle the verdict (3), tag the untagged issue (6), write the Behavior table (8)
```

Rules for the report:

- **All 8 rows, every time** — a passing check still gets a row.
- **Detail names the thing.** Which trait, which issue, which badge.
- **Say which fix it needs** — a small fix this review can make, or a `Component Build`.
- **End with a next-action line** ordered by what unblocks the most.
- If a check can't be run (build fails, Figma channel not joined), mark it 🔴 Broken and say why — never guess a pass.

---

# Guardrails

- **Figma is read-only.** The committed root `CLAUDE.md` is the policy; a local `.claude/CLAUDE.md` may grant per-request write permission on the owner's machine only.
- **Overview tab only.** Don't touch Playground, Code, or Changelog in this run.
- **Small fixes only.** Anything on the "may not" list is a `Component Build`.
- **Never commit or push** unless explicitly told. `main` auto-deploys to production.
- **One component per run.**
