# Framework reference — the page, its expected content, and the situations a reviewer meets

> One component = one JSON file (`astro-site/src/content/components/<slug>.json`) = one page: a header and four tabs. The worked sample is **Generic Card**, re-read from Figma on 14 September 2026; every value below is the real one, including the blanks. The rules themselves live in the four guides; this file is the picture of them. Visual version: the "East Blue Assessment Framework" page.
>
> **Built version:** `/components/sample-component` — the whole framework rendered as one page on **sample data** (`sample-component.json` + `demos/sample-component.js`). A slug starting `sample-` is a reference page: it builds and renders like any component, stays out of the sidebar, search, the grid and the home count, and the sweep measures it apart and holds it to all 31 rules.

---

## 1. Header

| Part | Expected content | Sample (Generic Card) |
|---|---|---|
| Badges | DS verdict + native status | `Keep` · `Needs Refinement` |
| Name · description | What the component is, one line | A tappable content card — slotted leading icon, a heading with tag and badge, two label-and-description rows, and a slotted trailing chevron. |
| Verdict box | A direct title (verdict + reason) and at most two lines of text; box colour follows the verdict kind | "Fix — three findings to close" · "The icon container is not a Slot (C1), no loading state is built (C5), and the badge is drawn locally (C6)." |
| Family | `navGroup` for family members | Card |

Rules: `keep` only when all four traits pass · native status is the worst of C1–C6 · `remove` / `consolidate` / `product-layer` hide the Style and Code tabs.

## 2. Overview tab — six sections, this order

| # | Section | Expected content | Rule | Sample |
|---|---|---|---|---|
| 1 | In Context | A note of at most two lines on where it lives, over a **visual of the component on a real screen** (image, or the placeholder until a screenshot exists) | O7 lists components without a visual (45 today) | "Generic Card stacks vertically into a scrolling list — product catalogs, service menus, transaction history detail screens." |
| 2 | Live Preview | The component drawn by its demo script, one `Properties` panel with a control per variant property and boolean — no `Content` section, no text inputs, no slots | Every control changes the render; the preview draws in Proxima Soft / BarkAda, never the site font | State (Default, Disabled) · IconSize (XL … XXS) |
| 3 | DS Health | Exactly four traits, each `pass` / `partial` / `warn` / `fail` with one sentence of evidence | Verdict follows the traits; notes never contradict a resolved issue | Reusable pass · Self-contained pass · Consistent pass · Composable pass |
| 4 | Behavior | One row per interaction state: state · iOS · Android · driving property · note. Required for interactive components | N/A rows left out; a state Figma does not build says *Not built* and raises C5 | Default · Disabled · Skeleton · Pressed (Not built) |
| 5 | Issues — Open │ Resolved | Bold headline leading with the problem, one or two plain sentences, tag `C1`–`C6` with full name. Resolved say version + what changed | No C7 anywhere; `remove` has none (infobox instead); ask before filing an intentional choice | Open: none · Resolved: "Leading icon is a real Figma Slot." `C1` |
| 6 | Recommendations — Design │ Applied | Instructions, verb first, one of ten tags | Applied ones move to Applied with the version | (Button) "Document full-width (stretch) behavior." `Property` |

## 3. Style tab — `Examples`: one card per Figma property

Heading `Examples`. Every variant property and boolean gets one card in Figma's panel order; the card draws every value of its property, labelled, with the other properties in its panel, and carries only the sections that property changes. Sample Component: **Style**, **State**, **Size**, **hasBadge**. Slots and text properties get no card and no control. *(Decided 2026-09-14; the Generic Card sample below still shows the retired driving-property layout until its next Style Review.)*

**Source stamp** (written by every Style Review): `{ set: "5412:31504", variants: 18, read: "2026-09-14", tool: "talk-to-figma" }`. Rule S11 flags a Style tab whose stamp is missing or names another set than `meta.node` (77 today).

| Part | Expected content | Sample (Default card) |
|---|---|---|
| Header | Title = the property name + DES/DEV toggle | `State` |
| Preview + panel | Every value of the property drawn and labelled; panel = the other properties (names, order, values), slots and text properties excluded, booleans as toggles; empty list when nothing to control | Style · Size · hasBadge |
| Properties | One wrapping line: every property in panel order; the card's own property lists all its values, the rest follow the panel, text properties read `Text` | State Default · Pressed · Disabled · Style Filled · Size Medium |
| Spec table | Colors → Typography → Layout as row groups of one table with a column per example; only the sections the property changes; a value that does not change spans every column | Background #005CE5 │ #0047B3 │ #C2CFE5 |
| Colors | One row **per element**, never per state; state values as `variants` | Background #FFFFFF · Border #E5EBF4 · Preamble #005CE5 (Disabled #9BC5FD) · Tag #D61B2C · Title #0A2757 (#C2CFE5) · Label #90A8D0 (#C2CFE5) · Description #445C85 (#C2CFE5) · Badge background #E5F1FF (#C2C6CF) · Badge label #005CE5 (#FFFFFF) · Leading icon placeholder #D7E0EF (#9BC5FD) · Chevron #005CE5 (#9BC5FD) |
| Typography | **Style names only**, one row per text layer, every row `matched` | Title Primary/Headlines/Block · Preamble Primary/Label/Small · Label Secondary/Bold/Caption · Description Secondary/Bold/Caption |
| Layout | The eight keys: Height · Width · Radius · Padding H · Padding V · Gap · Border · Alignment | 148 · 360 · 0 · — · — · — · 1 · bottom · — |
| DEV code | SwiftUI + Compose component API, live on both tabs | `EBGenericCard("Heading Goes Here").ebPreamble("Blurb", tag: "Tag") … .ebIconSize(.xl)` |
| Colors table | One per component: Role │ Element │ Token │ Value | Default · Background · — · #FFFFFF … Skeleton · Placeholder bars · — · #EEF2F9 |

The four `—` Layout values and every `—` token are real: the plugin cannot read auto-layout padding, gap, alignment or variable bindings. They are reported Missing, never derived, never copied from the old node.

## 4. Code tab — seven sections, this order

| # | Section | Expected content | Sample |
|---|---|---|---|
| 1 | Installation | SPM + Gradle + Import from the family; `1.0.0`; Planned API badge | `com.eastblue.ds:card:1.0.0` · `import com.eastblue.ds.card.*` |
| 2 | Property Mapping | A description of at most two lines, then one prose row per property with all values → SwiftUI → Compose; slots `(slot)`, text `(text)` | (Date Picker Cell) Kind — Day, MonthYear → `kind: EBDatePickerCellKind` → `kind = EBDatePickerCellKind.Day / MonthYear` |
| 3 | Usage Snippets | One subheading per value of the Style tab's first card, SwiftUI + Compose in the same API as the DEV code | Filled · Outlined |
| 4 | Accessibility | One row per requirement, both platforms | Row as a button → Button with combined accessibilityLabel → `Modifier.clickable { onTap() }.semantics(mergeDescendants = true)` |
| 5 | Usage Guidelines | 1–4 Do/Don't pairs specific to the component | (Date Picker Cell) Do: use Prev-Next for adjacent-month days · Don't: use Disabled for them |
| 6 | Criteria Scorecard | Exactly C1–C6, status + note matching Overview; nothing under the table — no footnote | C1 Needs Refinement — `_space_40` spacer instance on 5412:31505 · C5 Ready — Default and Disabled confirmed as the intended coverage |
| 7 | Variants Inventory | Total = live Figma count, multiplier, grouped summary, breakdown with node ids in a labelled collapsible | Expected: 2 Status × 2 State × 6 IconSize, Skeleton without Disabled = 18 |

Generic Card's Property Mapping and Scorecard described the old numeric `iconSize` until the Code Review run of 14 September 2026 regrouped them on the live set — the stale content rule S11 exists to catch. The Style Review stamps `style.source`; the Code Review then reads the same set, so a Code tab is never older than its Style tab.

## 5. Changelog tab

Newest first · semver · `Month YYYY` · header names file + node · one row per change with a delta (`resolved` / `partial` / `open`) tied to a criterion · every resolved issue and applied recommendation has a row · doc rewrites are patch entries · history never edited · backfill = one patch entry per component.

Sample (Countdown Promo 1.0.2, September 2026, patch): header "The action-slot mapping gap is on the record — node 5630:36047", row "C4 was flagged with nothing behind it …" `C4 open`.

## 6. The situations a reviewer meets

| # | Situation | What the page shows · what you do | Live example |
|---|---|---|---|
| 1 | Everything passes | Keep · Ready; Resolved only; C1–C6 Ready | Date Picker Cell, Voucher Details |
| 2 | Belongs, has gaps | Fix · Needs Refinement; open C1–C6 issues; status = worst criterion | Badge (Fix · Ready) |
| 3 | Needs a rebuild | Restructure · Requires Rework; one holistic recommendation with the target schema | Banner |
| 4 | Being retired | Remove / Consolidate / Product Layer: no Style or Code tab, no issues, infobox names the sibling | List, Action List – with Counter |
| 5 | Rebuilt on a new node | Repoint `meta.node` + URL, re-read every tab, stamp `style.source`, major changelog entry; S11 flags it until then | Generic Card (18482:35807 → 5412:31504) |
| 6 | Family member | `navGroup` drives the artifact and package; members share scripts, review together | Card family → `com.eastblue.ds:card` |
| 7 | Value the tools cannot read | Write `—`, report Missing with the reason, ask or use the Dev Mode connector; never derive; S12 counts it | Generic Card padding, gap, alignment, tokens |
| 8 | Text layer not matching a DS style | `matched` earns the name; anything else is `—` + C3 open issue; never a font spec | Alert still has `Title font` rows |
| 9 | Styles change per size | Read every size; extra sizes in `variants`; family change across sizes = C2 | Alert Title: Headlines at Large, Label at Medium/Small |
| 10 | A Status value with no State axis | Card exposes only the axes it has; state stated as a fact | Generic Card Skeleton: IconSize only |
| 11 | Panel has booleans, text, slots | Read the panel; designer confirms defaults; slots out of the demo panel, in Property Mapping | Alert's four booleans |
| 12 | Tree and export disagree | The export is the truth; compare the preview to `export_node_as_image` | Carousel Item overlay order |
| 13 | Something wrong in Figma | Read-only: file a C1–C6 open issue; ask first, it may be intentional | Generic Card `IconContainert`, `_space_40` |
| 14 | Display-only component | No Behavior table (say so), no State control; C5 still scored | Header family |
| 15 | Resolved issues without rows | One `Documentation backfill` patch entry per component | Generic Card 1.0.1 |
| 16 | Nothing outstanding | Native status → Ready, sidebar dot clears | Eight components in the fix pass |

## 7. Vocabulary

- **DS verdict:** Keep · Fix · Restructure · Consolidate · Product Layer · Remove
- **Native status:** Ready · Needs Refinement · Requires Rework · Not Applicable · Fix
- **Trait ratings:** pass · partial · warn · fail
- **Criteria on a page:** C1–C6; C7 defined in the methodology and deferred
- **Recommendation tags:** Rename · Property · Slot · State · Token · Asset · Composition · Family · A11y · Docs
- **Validate statuses:** Done · Partial · Missing · Broken

Measured by `npm run audit` (31 rules); structural rules gated in CI, content rules reported.
