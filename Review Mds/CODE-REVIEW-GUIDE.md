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

> **The tools only show you half the properties.** `get_node_info` returns variant properties (they're in each variant's node name) but not `componentPropertyDefinitions` — **boolean, instance-swap and text properties are invisible to it**. Read the Figma property panel itself and copy every row, or Property Mapping will be "complete" against a worksheet that is itself missing properties. Full note in `STYLE-REVIEW-GUIDE.md` Phase 2.

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

## 3.0 The three tiers — know what each section is made of

Every Code-tab section is one of three kinds of content. The tier decides what "correct" means and how the reviewer verifies it.

| Tier | Sections | What "correct" means | Where to check it in Figma |
|---|---|---|---|
| **1 · Read from Figma** | Property Mapping (Figma column) · Variants Inventory · Criteria Scorecard | Transcribed exactly — names, values, counts, spelled as the panel has them | Select the component set → right-side **property panel** and the variant grid |
| **2 · Designed API** | Property Mapping (SwiftUI + Compose columns) · Usage Snippets · Installation | Every parameter and enum case **traces 1:1 to a Figma property name and value**, follows the `EB{Component}` conventions, and matches the Style tab's DEV snippets | Compare each parameter to the property panel; for measurements and tokens, **Dev Mode → Code** on the node |
| **3 · Platform knowledge** | Accessibility · Usage Guidelines | Real iOS + Android APIs, both platforms answered; guidelines specific to this component | Not in Figma — platform documentation |

> **Figma's own Code panel is for cross-checking, never for copying.** Select the node → Dev Mode (the `</>` toggle) → **Code**, and pick SwiftUI or Compose. Use it to confirm property names, values, measurements and token bindings. Do **not** paste it into the docs — it describes how to *draw* the container, not how to *use* the component, and the house rules ban it.

## 3.1 Show and tell — how every change is reported

**Never report "updated." Report previous → new, with a Figma pointer on every row** so the reviewer can open the node and check the claim themselves.

For Property Mapping, the update report is this table:

| Figma Property | Previous mapping | New mapping | Check in Figma |
|---|---|---|---|
| Style — Card, Banner | one row per value: `Style=Card`, `Style=Banner` | `.ebStyle(.card / .banner)` · `style = EBAlertStyle.Card / Banner` | node `6663:104524` → property panel |
| hasActionButton — true, false | *(missing — not documented)* | trailing closure `{ EBTextButton(…) }` · `action = { … }` | node `6663:104524` → property panel toggles |

For Usage Snippets and Installation, show the previous block and the new block one after the other (or state *new — no previous version*), each labelled with the node the snippet was designed from.

Rules:

- **Every changed row appears** — including rows that were missing before (previous = *missing*) and rows removed (new = *removed*, with the reason).
- **The pointer is a node ID plus where to look**: `node 6663:104524 → property panel` for names and values, `node 6663:104538 → Dev Mode → Code` for measurements and tokens.
- **Unchanged rows are summarised in one line** ("5 rows unchanged"), not re-printed.
- Tier 2 rows must also state what they trace to: a snippet that uses `.controlSize(.large)` traces to `Size=Large` — if the reviewer can't find the property in the panel, the mapping is wrong.


## 3.2 Installation

SPM URL + Gradle dependency + the import lines, one block each — using the **canonical planned coordinates** every component shares. Never invent a new org, repo or artifact scheme per component:

| Block | Canonical form |
|---|---|
| SPM | `https://github.com/AY-Org/eb-ds-ios` |
| Gradle | `com.eastblue.ds:<artifact>:<version>` |
| Import | `import EastBlueDS` (SwiftUI) · `import com.eastblue.ds.<package>.*` (Compose) |

**How the slug becomes each identifier** — the three forms follow different language rules, so derive each one explicitly. For `bottom-sheet`:

| Position | Hyphen legal? | Rule | Result |
|---|---|---|---|
| Gradle `<artifact>` | ✅ yes — Maven convention | **The family's artifact** (decided 2026-09-04): `meta.navGroup` lowercased, spaces → hyphens. No family → the slug as-is | `date-picker-cell` → `com.eastblue.ds:date-picker:2.0.0` · `bottom-sheet` (no family) → `com.eastblue.ds:bottom-sheet:2.0.0` |
| Kotlin `<package>` | ❌ **no — will not compile** | **Domain-grouped** (decided 2026-09-02): the component's family — `meta.navGroup` lowercased, spaces and hyphens removed. No family → the slug, hyphens stripped | `date-picker-cell` → `com.eastblue.ds.datepicker` · `bottom-sheet` (no family) → `com.eastblue.ds.bottomsheet` |
| Type names | ❌ no | PascalCase per word | `EBBottomSheet`, `EBBottomSheetSize` |

### One artifact per family

**An artifact is a family, never a component.** Every member of a family ships in one Gradle artifact and one Kotlin package, both derived from the same `meta.navGroup`: `date-picker`, `date-picker-cell` and `date-picker-header` all install `com.eastblue.ds:date-picker` and import `com.eastblue.ds.datepicker.*`. A component with no `navGroup` is a family of one. Members can't be adopted individually — that is the trade-off, and it is accepted: a calendar cell is never added to an app without its calendar. What it buys: no split package (one artifact per package keeps R8 and JPMS quiet), one dependency line for the app team, and identical install blocks across a family, so "which artifact do I add?" has one answer.

**The lead is a class, not the artifact.** `com.eastblue.ds:date-picker` is the Date Picker *family*; the `date-picker` component is `EBDatePicker` inside it. Where a lead's slug equals its family key, the coordinates coincide by construction and always mean the family.

**`navGroup` is the family key, and the only one.** If an artifact reads wrong for its members — `select` for the three `dropdown-*` slugs — the fix is the `navGroup` on those components, never a per-component override in the install block.

Family → coordinates, read off `meta.navGroup` today (21 families covering 74 components; the 21 solo components use their slug):

| Family (`navGroup`) | Gradle artifact | Kotlin package | Members |
|---|---|---|---|
| Action List | `action-list` | `actionlist` | 3 |
| Ad Space | `ad-space` | `adspace` | 2 |
| Avatar | `avatar` | `avatar` | 2 |
| Card | `card` | `card` | 2 |
| Carousel | `carousel` | `carousel` | 2 |
| Chat | `chat` | `chat` | 1 |
| Countdown | `countdown` | `countdown` | 3 |
| Date Picker | `date-picker` | `datepicker` | 8 |
| Form Elements | `form-elements` | `form` † | 9 |
| Header | `header` | `header` | 5 |
| List | `list` | `list` | 3 |
| Modal | `modal` | `modal` | 3 |
| Radio | `radio` | `radio` | 2 |
| Select | `select` | `select` | 3 |
| Stepper | `stepper` | `stepper` | 3 |
| Table | `table` | `table` | 3 |
| Tabs | `tabs` | `tabs` | 2 |
| Toast | `toast` | `toast` | 2 |
| Toggle | `toggle` | `toggle` | 5 |
| Tooltip | `tooltip` | `tooltip` | 4 |
| Voucher | `voucher` | `voucher` | 7 |

† `form`, not `formelements` — the one grandfathered package, shipped on nine components before the rule existed. Everything else in the table is mechanical, and a family that gains a component gains no new coordinates.

SwiftUI is unaffected: `import EastBlueDS` is one module for the whole system, so a family has no iOS-side expression.

**Known migration debt** (each caught by check 3 on that component's run):

- **21 components** still on the old `com.gcash.eastblue` coordinates · **41 of 57** install blocks missing the Import line.
- **Nine install blocks on a non-family artifact.** The three Action List components on `:list` — that is the *List* family's artifact, so two families currently share one · `ad-carousel` on `:ad-carousel` and `upload-file` on `:upload-file` (per-component, predate this ruling) · `title-bar` on `:titlebar` (artifact IDs keep the hyphen) · `callout` on `:feedback` and `chat-field` on `:form-elements` (no such family for either) · `subtext-message` on `:form-elements` with no `navGroup` — it either joins Form Elements or moves to `:subtext-message`; the owner's call.
- **Four orphan imports.** `callout` on `.feedback.*`, `chat-field` importing both `.form.*` and `.chat.*` (its family is Chat), `subtext-message` on `.form.*`, `action-list-counter` on `.components.*`.

Validation reads accordingly: a hyphen inside a Kotlin package segment or type name is 🔴 Broken — it's invalid syntax; a hyphen in a Gradle artifact ID is **correct** and must not be flagged. A family member citing anything but its family's coordinates — `com.eastblue.ds:date-picker-cell`, or `:list` on an Action List component — is 🔴 Broken too: it names an artifact that will never exist, or another family's.

**`<version>` is the artifact's latest changelog version.** For a solo component that is its own changelog. For a family it is the **highest version across the members' changelogs** — one artifact has one version, and it moves whenever any member does. Date Picker is `2.0.0` (three members there, five at `1.0.0`), so every Date Picker install block cites `com.eastblue.ds:date-picker:2.0.0`, including `date-picker-header`'s at `1.0.0`. Read it off the data rather than by hand:

```bash
grep -lE "navGroup['\"]?: ?['\"]Date Picker['\"]" src/data/components/*.ts \
  | xargs grep -hoE -m1 "version['\"]?: ?['\"][0-9.]+" | grep -oE '[0-9.]+$' | sort -V | tail -1
```

Button currently ships `2.0.0` in its install blocks against a `4.1.0` changelog — that drift is exactly what this rule exists to catch.

```ts
"installation": {
  "planned": true,
  "blocks": [
    { "label": "iOS — Swift Package Manager", "code": "<code>…</code>" },
    { "label": "Android — Gradle (Kotlin DSL)", "code": "<code>…</code>" },
    { "label": "Import", "code": "<code>…</code>" }
  ]
}
```

`"planned": true` renders the **Planned API** badge — keep it true while the native components don't exist.

## 3.3 Property Mapping

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
| Text properties marked `(text)` | `Title (text)` → `title: String` · `title = "…"` |

*Across the system, 164 rows in 44 components still use `Type=Collapsed` / `state = Default` form and need regrouping.*

## 3.4 Usage Snippets

One `subheading` per driving-property value — the same list as the Style tab's spec cards — each with SwiftUI and Compose.

Write **component API** code, never Figma Dev Mode container code:

```swift
EBAlert(type: .information, title: "…")        // ✅
    .ebStyle(.banner)

HStack(spacing: Constants.spaceSpace0) { … }    // ❌
```

Names follow `EB{ComponentName}`.

## 3.5 Accessibility

One row per requirement, with the iOS and Android answer. Cover at least:

| Requirement | iOS | Android |
|---|---|---|
| Label | `.accessibilityLabel(_:)` | `contentDescription` |
| Role / trait | `.accessibilityAddTraits(.isButton)` | `Modifier.semantics { role = Role.Button }` |
| Minimum target | 44 × 44 pt | 48 × 48 dp |
| Dynamic type | Supported, scales to AX5 | `sp` units, scales with font scale |
| Announcement | `role="alert"` → assertive | `LiveRegionMode.Assertive` |

Answer for **both** platforms. A single-platform row is a Partial.

## 3.6 Usage Guidelines

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

## 3.7 Criteria Scorecard

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

## 3.8 Variants Inventory

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

## 3.9 Code Connect

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

## 4b. The 14 checks

| # | Check | How to tell it passed |
|---|---|---|
| 1 | Build passes | `npm run build` exits clean |
| 2 | Section order | Installation → Property Mapping → Usage Snippets → Accessibility → Usage Guidelines → Scorecard → Variants |
| 3 | Installation complete | SPM + Gradle + import, coordinates from the family table, version = the family's highest changelog, Planned API badge showing |
| 4 | Property Mapping is prose | No `=` in any Figma cell |
| 5 | Property Mapping is grouped | One row per property, all values on that row |
| 6 | Property Mapping is complete | Row count = worksheet property count, slots included |
| 7 | Usage Snippets cover every value | One subheading per driving-property value |
| 8 | Snippets are component API | No `HStack`/`Constants.` container code |
| 9 | Code tab matches the Style tab | Same API in both: names, parameters, enum cases — `EBAlert` here can't take `style:` if the DEV snippet uses `.ebStyle()` |
| 10 | Accessibility covers both platforms | No empty iOS or Android cell |
| 11 | Usage Guidelines ≤ 4, specific | Named property or number in each pair |
| 12 | Scorecard C1–C6 scored, notes match Overview | No contradiction with Open Issues |
| 13 | Variants total = Figma count | And the multiplier expression matches |
| 14 | Code Connect empty | Section absent from the page |

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
| 9  | Code ↔ Style tabs match | ✅ Done | same API surface |
| 10 | Accessibility both platforms | ❌ Missing | Announcement row has no Android value |
| 11 | Guidelines ≤ 4, specific | ✅ Done | 4 pairs |
| 12 | Scorecard C1–C6 | ✅ Done | matches Overview |
| 13 | Variants total | 🔴 Broken | data says 30, Figma has 90 — inventory predates the rebuild |
| 14 | Code Connect empty | ✅ Done | section gone |

**Result:** 10 done · 2 partial · 1 missing · 1 broken
**Blocked by pre-work:** none
**Recommended next:** rebuild the Variants Inventory off node 6663:104524 (check 13), then map the two slots (6)
```

Rules for the report:

- **All 14 rows, every time** — a passing check still gets a row.
- **Show and tell carries into validation**: a finding about changed content cites the previous value, the new value, and the Figma pointer (§3.1) — never just "mapping fixed".
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
