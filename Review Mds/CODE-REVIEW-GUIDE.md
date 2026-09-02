# Code Review — command guide

> **Trigger:** the reviewer types `Code Review`
> **Second phase:** the reviewer types `Validate`
> **Scope:** the **Code tab only** — Installation, Property Mapping, Usage Snippets, Accessibility, Usage Guidelines, Criteria Scorecard, Variants Inventory.

> ⚠️ **Name clash.** `/code-review` is also a built-in Claude Code command that reviews a git diff. If a run starts reviewing source code instead of the component's Code tab, type **`Code Tab Review`** instead — same workflow, unambiguous trigger.

| Phase | Who acts | What happens |
|---|---|---|
| 1 · Intake | AI asks | Component name + Figma link |
| 2 · Baseline | AI | Reads the data file, prints the current Code tab as tables. Nothing changed yet. |
| 3 · Update | AI | Rewrites all seven sections to the rules in this file |
| 4 · Validate | Reviewer types `Validate` | AI re-runs every check and reports **Done / Partial / Missing / Broken** |

Related: [Overview](OVERVIEW-REVIEW-GUIDE.md) · [Style](STYLE-REVIEW-GUIDE.md) · [Changelog](CHANGELOG-REVIEW-GUIDE.md) · shared setup, house rules and pre-work in the [folder README](README.md).

---

> **Rule Zero — follow the Figma component.** Document what Figma says; never invent a value, a style, or a design. Don't derive what you could read, don't translate Figma's answer into a tidier one, and don't substitute a plausible value for one you couldn't read. If you can't read it, report it Missing with the reason. Full statement in the root `CLAUDE.md`.

# Phase 1 — Intake

On `Code Review`, the AI replies with exactly this form and waits:

```
Component Name:
Component Link:
Figma Channel:   (from the Cursor Talk To Figma plugin — blank if already joined)
```

The Figma link matters here too: Property Mapping and Variants Inventory are only correct if they're read off the live component, not off the old documentation.

---

# Phase 2 — Baseline report

The AI reads `astro-site/src/data/components/<slug>.ts` plus the live component, then prints:

### 2a. The property worksheet (from Figma)

Same table as the Style run — every property, its kind, its values, and whether it's a slot. **Slots are included in Property Mapping** even though they're excluded from the demo panel.

| # | Property | Kind | Values | Slot? |
|---|---|---|---|---|
| 1 | `Type` | Variant | Neutral, Information, Warning, Error, Success | no |
| 2 | `Style` | Variant | Card, Banner | no |
| 3 | `Leading-Slot` | Instance swap | — | **yes** |

Also record the **total variant count** and the multiplier that produces it: `5 Type × 2 Style × 3 Content × 3 Size = 90`.

### 2b. Current Code tab inventory

| Section | State today | Note |
|---|---|---|
| Installation | ❌ missing | no blocks |
| Property Mapping | ⚠️ 8 rows | all in `Type=Collapsed` form |
| Usage Snippets | ❌ missing | — |
| Accessibility | ✅ 5 rows | |
| Usage Guidelines | ❌ missing | — |
| Criteria Scorecard | ✅ 7 rows | includes C7 |
| Variants Inventory | ✅ 90 total | summary + breakdown present |
| Code Connect | ⚠️ 4 rows | to be emptied |

Then it proceeds to Phase 3 without waiting.

---

# Phase 3 — Update the Code tab

Seven sections, in this order. **Code Connect is removed** — set `"codeConnect": []` and the section disappears from the page. C7 stays permanently blocked while there's no native library.

## 3.1 Installation

SPM URL + Gradle dependency + the import lines, one block each.

```ts
"installation": {
  "planned": true,
  "blocks": [
    { "label": "Swift Package Manager", "code": "<code>…</code>" },
    { "label": "Gradle", "code": "<code>…</code>" },
    { "label": "Import", "code": "<code>…</code>" }
  ]
}
```

`"planned": true` renders the **Planned API** badge — keep it true while the native components don't exist.

## 3.2 Property Mapping

**Plain text, grouped by property.** One row per property with all its values on that row — never one row per value, never `Prop=Value` syntax.

| Figma Property | SwiftUI | Compose |
|---|---|---|
| Style — Card, Banner | `.ebStyle(.card / .banner)` | `style = EBAlertStyle.Card / Banner` |
| Type — Neutral, Information, Warning, Error, Success | `type: .information` | `type = EBAlertType.Information` |
| Leading-Slot (slot) | `leadingIcon: Image?` | `leadingIcon: @Composable (() -> Unit)?` |

```ts
{ "figma": "Style — Card, Banner",
  "swift": "<code>.ebStyle(.card / .banner)</code>",
  "compose": "<code>style = EBAlertStyle.Card / Banner</code>" }
```

| Rule | Detail |
|---|---|
| Figma cell is **prose** | Property name, em dash, then the values. No `<code>`, no `=` |
| SwiftUI and Compose cells stay `<code>` | That's real code |
| One row per property | Matching the worksheet, in Figma's order |
| Slots included, marked `(slot)` | Even though they're not in the demo panel |
| Booleans read as booleans | `isDisabled — true, false` |

*Across the system, 164 rows in 44 components still use `Type=Collapsed` / `state = Default` form and need regrouping.*

## 3.3 Usage Snippets

One `subheading` per driving-property value — the same list as the Style tab's spec cards — each with SwiftUI and Compose.

Write **component API** code, never Figma Dev Mode container code:

```swift
EBAlert(type: .information, title: "…")        // ✅
    .ebStyle(.banner)

HStack(spacing: Constants.spaceSpace0) { … }    // ❌
```

Names follow `EB{ComponentName}`.

## 3.4 Accessibility

One row per requirement, with the iOS and Android answer. Cover at least:

| Requirement | iOS | Android |
|---|---|---|
| Label | `.accessibilityLabel(_:)` | `contentDescription` |
| Role / trait | `.accessibilityAddTraits(.isButton)` | `Modifier.semantics { role = Role.Button }` |
| Minimum target | 44 × 44 pt | 48 × 48 dp |
| Dynamic type | Supported, scales to AX5 | `sp` units, scales with font scale |
| Announcement | `role="alert"` → assertive | `LiveRegionMode.Assertive` |

Answer for **both** platforms. A single-platform row is a Partial.

## 3.5 Usage Guidelines

**Maximum four Do/Don't pairs.** Write them for *this* component — a guideline that would fit any component is filler.

```ts
"usageGuidelines": [
  { "doText": "Use Error for anything that blocks the user from continuing.",
    "dontText": "Don't use Error for a tip or a nice-to-know." },
  { "doText": "Keep the title to one line at 360px.",
    "dontText": "Don't put a full sentence in the title — that's what the description is for." }
]
```

Good pairs come from four places: **which variant to pick**, **how much content fits**, **what goes in the slots**, and **where the component belongs on screen**. Pick the four that matter most for this component.

*42 components have none today.*

## 3.6 Criteria Scorecard

One row per criterion, **C1–C6**, with a status badge and a one-line note tied to what you actually found in this run.

| ID | Criterion |
|---|---|
| C1 | Layer Structure & Naming |
| C2 | Variant & Property Naming |
| C3 | Token Coverage |
| C4 | Native Mappability |
| C5 | Interaction State Coverage |
| C6 | Asset & Icon Quality |

C7 (Code Connect Linkability) stays as-is — Blocked / Not Mapped. Don't action it, don't re-score it.

Notes must match the Overview tab. If the scorecard says "all tokens bound" while an Open Issue says otherwise, the page contradicts itself.

## 3.7 Variants Inventory

```ts
"variants": {
  "total": 90,
  "description": "5 Type × 2 Style × 3 Content × 3 Size = 90 variants",
  "summary": { "columns": [ … ], "rows": [ … ] },
  "columns": [ … ],
  "rows": [ … ],
  "collapseLabel": "View full Type × Style breakdown (90 rows)"
}
```

- `total` must equal the live Figma variant count.
- `description` is the multiplier expression.
- Grouped summary is always visible; the full breakdown goes in the `<details>`.
- **Node IDs belong in the full breakdown, never the summary.**
- The collapse label states the row count.
- ≤8 variants may use one flat table (omit `summary`).

## 3.8 Code Connect

```ts
"codeConnect": []
```

The section disappears. *38 components still have it populated.*

---

# Phase 4 — `Validate`

The reviewer types `Validate`. The AI runs every check and reports. **No content is edited during validation** — findings go in the report, the reviewer decides what gets fixed.

## 4a. Commands

```bash
cd astro-site
npm run build                                    # schema breakage
grep -n '"figma"' src/data/components/<slug>.ts  # scan for "=" in the Figma cell
```

Then open `http://localhost:4321/components/<slug>` on the Code tab and read every section.

## 4b. The 13 checks

| # | Check | How to tell it passed |
|---|---|---|
| 1 | Build passes | `npm run build` exits clean |
| 2 | Section order | Installation → Property Mapping → Usage Snippets → Accessibility → Usage Guidelines → Scorecard → Variants |
| 3 | Installation complete | SPM + Gradle + import, Planned API badge showing |
| 4 | Property Mapping is prose | No `=` in any Figma cell |
| 5 | Property Mapping is grouped | One row per property, all values on that row |
| 6 | Property Mapping is complete | Row count = worksheet property count, slots included |
| 7 | Usage Snippets cover every value | One subheading per driving-property value |
| 8 | Snippets are component API | No `HStack`/`Constants.` container code |
| 9 | Accessibility covers both platforms | No empty iOS or Android cell |
| 10 | Usage Guidelines ≤ 4, specific | Named property or number in each pair |
| 11 | Scorecard C1–C6 scored, notes match Overview | No contradiction with Open Issues |
| 12 | Variants total = Figma count | And the multiplier expression matches |
| 13 | Code Connect empty | Section absent from the page |

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
| 9  | Accessibility both platforms | ❌ Missing | Announcement row has no Android value |
| 10 | Guidelines ≤ 4, specific | ✅ Done | 4 pairs |
| 11 | Scorecard C1–C6 | ✅ Done | matches Overview |
| 12 | Variants total | 🔴 Broken | data says 30, Figma has 90 — inventory predates the rebuild |
| 13 | Code Connect empty | ✅ Done | section gone |

**Result:** 9 done · 2 partial · 1 missing · 1 broken
**Blocked by pre-work:** none
**Recommended next:** rebuild the Variants Inventory off node 6663:104524 (check 12), then map the two slots (6)
```

Rules for the report:

- **All 13 rows, every time** — a passing check still gets a row.
- **Detail names the thing.** Which row, which property, which platform.
- **Stale ≠ missing.** Content that describes an older version of the component is 🔴 Broken, not Partial — it actively misleads.
- **Separate "blocked" from "failed."** Anything waiting on maintainer pre-work is Partial + listed under *Blocked*.
- **End with a next-action line** ordered by what unblocks the most.
- If a check can't be run, mark it 🔴 Broken and say why — never guess a pass.

---

# Guardrails

- **Figma is read-only.** Problems found go to Open Issues via `OVERVIEW-REVIEW-GUIDE.md`.
- **Code tab only.** Don't touch Overview, Style, or Changelog in this run.
- **C7 / Code Connect is never actioned** — the native library doesn't exist yet.
- **Never commit or push** unless explicitly told. `main` auto-deploys to production.
- **One component per run.**
