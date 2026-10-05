# Code Build — command guide

> **Trigger:** the reviewer types `Code Build`
> **Last phase:** the reviewer types `Validate`
> **Scope:** the **Code tab only** — writing it: Installation, Property Mapping, Usage Snippets, Accessibility, Usage Guidelines, Criteria Scorecard, Variants Inventory.

| Phase | Who acts | What happens |
|---|---|---|
| 1 · Intake | AI asks | Component name + Figma link |
| 2 · Read | AI | Reads the live component into the property worksheet. Nothing written yet. |
| 3 · Write | AI | Writes all seven sections to the rules in this file |
| 4 · Validate | Reviewer types `Validate` | AI runs the 16 checks in [CODE-REVIEW-GUIDE.md](../review/CODE-REVIEW-GUIDE.md) |

Related: [Overview](OVERVIEW-BUILD-GUIDE.md) · [Playground](PLAYGROUND-BUILD-GUIDE.md) · [Changelog](CHANGELOG-BUILD-GUIDE.md) · rechecking an existing Code tab: `Code Review`. Shared setup, house rules and reading Figma: [workflows/README.md](../README.md).

---

> **Rule Zero — follow the Figma component.** Document what Figma says; never invent a value, a style, or a design. If you can't read it, report it Missing with the reason. Full statement in the root `CLAUDE.md`.

# Phase 1 — Intake

On `Code Build`, the AI replies with exactly this form and waits:

```
Component Name:
Component Link:
Figma Channel:   (from the Cursor Talk To Figma plugin — blank if already joined)
```

The Figma link matters: Property Mapping and Variants Inventory are only correct if they're read off the live component, not off old documentation.

If the component's DS verdict is `remove`, `consolidate` or `product-layer`, say so and stop — it has no Code tab.

---

# Phase 2 — Read

The AI reads the live component and prints:

### The property worksheet (from Figma)

Every property, its kind, its values, and whether it's a slot. **Slots are included in Property Mapping.**

| # | Property | Kind | Values | Slot? |
|---|---|---|---|---|
| 1 | `Type` | Variant | Neutral, Information, Warning, Error, Success | no |
| 2 | `Style` | Variant | Card, Banner | no |
| 3 | `Leading-Slot` | Instance swap | — | **yes** |

Also record the **total variant count** and the multiplier that produces it: `5 Type × 2 Style × 3 Content × 3 Size = 90`.

> **The tools only show you half the properties.** `get_node_info` returns variant properties (they're in each variant's node name) but not `componentPropertyDefinitions` — **boolean, instance-swap and text properties are invisible to it**. Read the Figma property panel itself and copy every row, or Property Mapping will be "complete" against a worksheet that is itself missing properties. A hidden layer in the node tree usually means a boolean turns it on. Defaults are stated only in the panel — have the designer confirm them.

Then it proceeds to Phase 3 without waiting.

---

# Phase 3 — Write the Code tab

Seven sections, in this order. **Code Connect is not on the page** — `codeConnect` no longer exists in the schema or the data, and C7 is not scored.

## 3.0 The three tiers — know what each section is made of

Every Code-tab section is one of three kinds of content. The tier decides what "correct" means and how the reviewer verifies it.

| Tier | Sections | What "correct" means | Where to check it in Figma |
|---|---|---|---|
| **1 · Read from Figma** | Property Mapping (Figma column) · Variants Inventory · Criteria Scorecard | Transcribed exactly — names, values, counts, spelled as the panel has them | Select the component set → right-side **property panel** and the variant grid |
| **2 · Designed API** | Property Mapping (SwiftUI + Compose columns) · Usage Snippets · Installation | Every parameter and enum case **traces 1:1 to a Figma property name and value**, follows the `EB{Component}` conventions, and is the same API in Property Mapping and Usage Snippets | Compare each parameter to the property panel; for measurements and tokens, **Dev Mode → Code** on the node |
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
| Gradle `<artifact>` | ✅ yes — Maven convention | **The family's artifact** (decided 2026-09-04): `meta.navGroup` lowercased, spaces → hyphens. No family → the slug as-is | `date-picker-cell` → `com.eastblue.ds:date-picker:1.0.0` · `bottom-sheet` (no family) → `com.eastblue.ds:bottom-sheet:1.0.0` |
| Kotlin `<package>` | ❌ **no — will not compile** | **Domain-grouped** (decided 2026-09-02): the component's family — `meta.navGroup` lowercased, spaces and hyphens removed. No family → the slug, hyphens stripped | `date-picker-cell` → `com.eastblue.ds.datepicker` · `bottom-sheet` (no family) → `com.eastblue.ds.bottomsheet` |
| Type names | ❌ no | PascalCase per word | `EBBottomSheet`, `EBBottomSheetSize` |

**No footnote under the blocks** (sweep `K9`). `installation.planned: true` already renders the **Planned API** badge beside the heading, so a footnote saying the package is not published yet only repeats it. Leave `footnote` as `''`.

### One artifact per family

**An artifact is a family, never a component.** Every member of a family ships in one Gradle artifact and one Kotlin package, both derived from the same `meta.navGroup`: `date-picker`, `date-picker-cell` and `date-picker-header` all install `com.eastblue.ds:date-picker` and import `com.eastblue.ds.datepicker.*`. A component with no `navGroup` is a family of one. Members can't be adopted individually — that is the trade-off, and it is accepted: a calendar cell is never added to an app without its calendar. What it buys: no split package (one artifact per package keeps R8 and JPMS quiet), one dependency line for the app team, and identical install blocks across a family, so "which artifact do I add?" has one answer.

**The lead is a class, not the artifact.** `com.eastblue.ds:date-picker` is the Date Picker *family*; the `date-picker` component is `EBDatePicker` inside it. Where a lead's slug equals its family key, the coordinates coincide by construction and always mean the family.

**`navGroup` is the family key, and the only one.** If an artifact reads wrong for its members — `select` for the three `dropdown-*` slugs — the fix is the `navGroup` on those components, never a per-component override in the install block.

Family → coordinates, read off `meta.navGroup` today (21 families covering 74 of the 95 components; the 21 solo components use their slug):

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

Every install block is generated from the family table; a hand edit that diverges is 🔴 Broken.

Validation reads accordingly: a hyphen inside a Kotlin package segment or type name is 🔴 Broken — it's invalid syntax; a hyphen in a Gradle artifact ID is **correct** and must not be flagged. A family member citing anything but its family's coordinates — `com.eastblue.ds:date-picker-cell`, or `:list` on an Action List component — is 🔴 Broken too: it names an artifact that will never exist, or another family's.

**`<version>` is the library's release number, not the page's.** While `"planned": true`, every install block pins `1.0.0`, for solo components and family members alike. Page changelogs never drive it: a doc fix on `date-picker-cell` is not a release of `com.eastblue.ds:date-picker`. The number moves once, when a real library ships, and then the guide gets a rule for who re-pins a family. Button's `2.0.0` against a `4.1.0` changelog is the drift this rule ends: neither number is the library's, and the block should read `1.0.0`.

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
| Slots included, marked `(slot)` | Every slot gets its row |
| Booleans read as booleans | `isDisabled — true, false` |
| Text properties marked `(text)` | `Title (text)` → `title: String` · `title = "…"` |
| `description` is **at most two lines** on the page | Name the property kinds and stop: "Style, State and Size are variant properties; hasBadge is a boolean; Title is a text property; Icon-Slot is a Slot." |

## 3.4 Usage Snippets

One `subheading` per value of the first variant property in Figma's panel order (Sample Component: `Filled`, `Outlined`) — each the full call for that value, SwiftUI and Compose. A component with a single property gets one `Default` snippet.

Write **component API** code, never Figma Dev Mode container code:

```swift
EBAlert(type: .information, title: "…")        // ✅
    .ebStyle(.banner)

HStack(spacing: Constants.spaceSpace0) { … }    // ❌
```

Names follow `EB{ComponentName}`.

**Snippets carry their own syntax-highlight spans** (sweep `K10`). `UsageSnippets.astro` renders `swift` / `compose` through `set:html` and nothing highlights them on the client, so plain text renders as flat grey. The one source for the spans is the tokenizer in `public/scripts/assessment.js` — run the code through it rather than hand-writing `<span>`s, and never emit the retired `syn-eq` class.

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

## 3.7 Criteria Scorecard

Exactly six rows, **C1–C6**, each with a status badge and a one-line note tied to what you actually found in this run.

| ID | Criterion |
|---|---|
| C1 | Layer Structure & Naming |
| C2 | Variant & Property Naming |
| C3 | Token Coverage |
| C4 | Native Mappability |
| C5 | Interaction State Coverage |
| C6 | Asset & Icon Quality |

There is no C7 row and no footnote: Code Connect is not mentioned anywhere on the page until the native library ships.

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

---

# Phase 4 — `Validate`

The reviewer types `Validate`. The AI runs **the 16 checks in [CODE-REVIEW-GUIDE.md](../review/CODE-REVIEW-GUIDE.md)** and reports in that guide's format. No content is edited during validation.

---

# Guardrails

- **Figma is read-only.** The committed root `CLAUDE.md` is the policy; a local `.claude/CLAUDE.md` may grant per-request write permission on the owner's machine only. Problems found go to Open Issues via `Component Review`.
- **Code tab only.** Don't touch Overview, Playground, or Changelog in this run.
- **C7 / Code Connect is not on the page** — don't add a row, a tag, a footnote or a section for it.
- **Never commit or push** unless explicitly told. `main` auto-deploys to production.
- **One component per run.**
