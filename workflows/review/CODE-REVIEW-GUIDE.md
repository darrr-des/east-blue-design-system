# Code Review — command guide

> **Trigger:** the reviewer types `Code Review`
> **Last phase:** the reviewer types `Validate`
> **Scope:** the **Code tab only** — rechecking an existing Code tab against the live component and the rules.

> ⚠️ **Name clash.** `/code-review` is also a built-in Claude Code command that reviews a git diff. If a run starts reviewing source code instead of the component's Code tab, type **`Code Tab Review`** instead — same workflow, unambiguous trigger.

| Phase | Who acts | What happens |
|---|---|---|
| 1 · Intake | AI asks | Component name + Figma link |
| 2 · Baseline | AI | Reads the live component and the data file, prints the worksheet and the current Code tab. Nothing changed yet. |
| 3 · Recheck | AI | Compares each section against Figma and the rules, and makes the small fixes below |
| 4 · Validate | Reviewer types `Validate` | AI runs the 16 checks and reports **Done / Partial / Missing / Broken** |

Related: [Overview](OVERVIEW-REVIEW-GUIDE.md) · [Playground](PLAYGROUND-REVIEW-GUIDE.md) · [Changelog](CHANGELOG-REVIEW-GUIDE.md) · shared setup, house rules and reading Figma in the [folder README](../README.md).

**Writing the tab is a build, not a review.** The section rules — installation coordinates, mapping format, snippet API, accessibility, guidelines, scorecard, inventory — are in `Code Build`: [workflows/build/CODE-BUILD-GUIDE.md](../build/CODE-BUILD-GUIDE.md). This review checks against them.

### What a review may change — small fixes only

| May | May not — run `Code Build` instead |
|---|---|
| Correct a value that no longer matches Figma — a property name, a value list, the variant total, the multiplier | Write a section that is missing |
| Regroup Property Mapping into one row per property, prose in the Figma cell | Design a new API, or add a parameter the mapping doesn't have |
| Correct install coordinates to the family table, pin `1.0.0` | Write a new usage snippet |
| Remove a footnote under Installation or the scorecard | Rewrite Accessibility or Usage Guidelines |
| Re-run snippets through the tokenizer for `syn-*` spans; drop `syn-eq` | |
| Put the seven sections back in order | |
| Update a scorecard note so it agrees with the Overview tab | |

Every fix is reported **previous → new, with a Figma pointer** (Code Build §3.1).

---

> **Rule Zero — follow the Figma component.** Document what Figma says; never invent a value, a style, or a design. If you can't read it, report it Missing with the reason. Full statement in the root `CLAUDE.md`.

# Phase 1 — Intake

On `Code Review`, the AI replies with exactly this form and waits:

```
Component Name:
Component Link:
Figma Channel:   (from the Cursor Talk To Figma plugin — blank if already joined)
```

If the component's DS verdict is `remove`, `consolidate` or `product-layer`, say so and stop — it has no Code tab. If it has no Code tab yet, say so and stop — that is a `Code Build`.

---

# Phase 2 — Baseline

The AI reads `astro-site/src/content/components/<slug>.json` plus the live component, then prints:

### 2a. The property worksheet (from Figma)

The same table as Code Build Phase 2 — every property, its kind, its values, whether it's a slot — plus the **total variant count** and its multiplier. Read the Figma property panel itself: booleans, instance-swap and text properties are invisible to `get_node_info`.

### 2b. Current Code tab inventory

| Section | State today | Note |
|---|---|---|
| Installation | ❌ missing | no blocks |
| Property Mapping | ⚠️ 8 rows | all in `Type=Collapsed` form |
| Usage Snippets | ❌ missing | — |
| Accessibility | ✅ 5 rows | |
| Usage Guidelines | ❌ missing | — |
| Criteria Scorecard | ✅ 6 rows | C1–C6, no footnote |
| Variants Inventory | ✅ 90 total | summary + breakdown present |

Then it proceeds to Phase 3 without waiting.

---

# Phase 3 — Recheck

Compare each section against the worksheet and the Code Build rules:

- **Tier 1 · read from Figma** — Property Mapping's Figma column, Variants Inventory, Criteria Scorecard. Every name, value and count must match the worksheet exactly.
- **Tier 2 · designed API** — Property Mapping's SwiftUI and Compose columns, Usage Snippets, Installation. Every parameter traces 1:1 to a Figma property, and mapping and snippets use the same API.
- **Tier 3 · platform knowledge** — Accessibility and Usage Guidelines. Both platforms answered; guidelines specific to this component.

Make the small fixes in the table above, report each one previous → new, then run `cd astro-site && npm run build`. Anything on the "may not" list goes in the report as a `Code Build` next step.

---

# Phase 4 — `Validate`

The reviewer types `Validate`. The AI runs every check and reports. **No content is edited during validation** — findings go in the report, the reviewer decides what gets fixed.

## 4a. Commands

```bash
cd astro-site
npm run build                                    # schema breakage
grep -n '"figma"' src/content/components/<slug>.json  # scan for "=" in the Figma cell
```

Then open `http://localhost:4321/components/<slug>` on the Code tab and read every section.

## 4b. The 16 checks

| # | Check | How to tell it passed |
|---|---|---|
| 1 | Build passes | `npm run build` exits clean |
| 2 | Section order | Installation → Property Mapping → Usage Snippets → Accessibility → Usage Guidelines → Scorecard → Variants |
| 3 | Installation complete | SPM + Gradle + import, family coordinates, version 1.0.0, Planned API badge |
| 4 | Property Mapping is prose | No `=` in any Figma cell |
| 5 | Property Mapping is grouped | One row per property, all values on that row |
| 6 | Property Mapping is complete | Row count = worksheet property count, slots included |
| 7 | Usage Snippets cover the first property | One subheading per value of the first variant property in Figma's panel order |
| 8 | Snippets are component API | No `HStack`/`Constants.` container code |
| 9 | Mapping and snippets agree | Same API in both: names, parameters, enum cases — a snippet can't call `style:` if Property Mapping says `.ebStyle()` |
| 10 | Accessibility covers both platforms | No empty iOS or Android cell |
| 11 | Usage Guidelines ≤ 4, specific | Named property or number in each pair |
| 12 | Scorecard C1–C6 scored, notes match Overview | No contradiction with Open Issues |
| 13 | Variants total = Figma count | And the multiplier expression matches |
| 14 | No footnote under the scorecard | Nothing renders under the six rows — C7 is not mentioned on the page |
| 15 | No footnote under Installation | `installation.footnote` is `''` — the Planned API badge already says it (`K9`) |
| 16 | Usage Snippets are highlighted | Every `swift` / `compose` carries `syn-*` spans from the assessment.js tokenizer, none of them `syn-eq` (`K10`) |

## 4c. Report format

Status is one of **✅ Done · ⚠️ Partial · ❌ Missing · 🔴 Broken**.

```
## Code Review — Validation · Alert

| # | Check | Status | Detail |
|---|---|---|---|
| 1  | Build | ✅ Done | clean |
| 2  | Section order | ✅ Done | 7 sections, correct order |
| 3  | Installation | ⚠️ Partial | SPM + import present, Gradle block missing |
| 4  | Mapping is prose | ✅ Done | 0 rows contain "=" |
| 5  | Mapping is grouped | ✅ Done | 4 rows, one per property |
| 6  | Mapping complete | ⚠️ Partial | Leading-Slot and Trailing-Slot not mapped |
| 7  | Snippets per value | ✅ Done | Card + Banner |
| 8  | Component API code | ✅ Done | no Dev Mode code |
| 9  | Mapping ↔ snippets agree | ✅ Done | same API surface |
| 10 | Accessibility both platforms | ❌ Missing | Announcement row has no Android value |
| 11 | Guidelines ≤ 4, specific | ✅ Done | 4 pairs |
| 12 | Scorecard C1–C6 | ✅ Done | 6 rows, matches Overview |
| 13 | Variants total | 🔴 Broken | data says 30, Figma has 90 — inventory predates the rebuild |
| 14 | No scorecard footnote | ✅ Done | none |
| 15 | No Installation footnote | ❌ Missing | "Package not yet published…" duplicates the Planned API badge |
| 16 | Usage Snippets highlighted | ❌ Missing | both snippets are plain text; no `syn-*` spans |

**Result:** 10 done · 2 partial · 3 missing · 1 broken
**Blocked by pre-work:** none
**Recommended next:** correct the Variants Inventory off node 6663:104524 (check 13), then map the two slots (6)
```

Rules for the report:

- **All 16 rows, every time** — a passing check still gets a row.
- **Show and tell carries into validation**: a finding about changed content cites the previous value, the new value, and the Figma pointer (Code Build §3.1) — never just "mapping fixed".
- **Detail names the thing.** Which row, which property, which platform.
- **Stale ≠ missing.** Content that describes an older version of the component is 🔴 Broken, not Partial — it actively misleads.
- **Separate "blocked" from "failed."** Anything waiting on maintainer pre-work is Partial + listed under *Blocked*.
- **End with a next-action line** ordered by what unblocks the most.
- If a check can't be run, mark it 🔴 Broken and say why — never guess a pass.

---

# Guardrails

- **Figma is read-only.** The committed root `CLAUDE.md` is the policy; a local `.claude/CLAUDE.md` may grant per-request write permission on the owner's machine only. Problems found go to Open Issues via `Component Review`.
- **Code tab only.** Don't touch Overview, Playground, or Changelog in this run.
- **Small fixes only.** Anything on the "may not" list is a `Code Build`.
- **C7 / Code Connect is not on the page** — don't add a row, a tag, a footnote or a section for it.
- **Never commit or push** unless explicitly told. `main` auto-deploys to production.
- **One component per run.**
