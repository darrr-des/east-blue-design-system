# GCash Design System — Component Assessment Guide

Unified guide for evaluating GCash DS components across two dimensions: **DS Health** (structure and quality) and **Native Mobile Readiness** (SwiftUI + Jetpack Compose handoff).

Use this as your first-message context when starting a new assessment session.

---

## Dependencies

| Dependency | Details |
|---|---|
| **Claude** | Recommended: Claude Sonnet (latest). Paste this document as context. |
| **Figma MCP** | Required for direct file access. [Setup guide](https://help.figma.com/hc/en-us/articles/32132100833559). Minimum viewer access. Never paste your token into chat. |
| **Figma File** | [GCash DS — Sticker Sheets v2](https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=16870-9381&t=HkaWvJ7nLoQVjegR-0) |
| **Node.js** | For `node assessment-src/build.js`. No npm packages needed. |

---

## What You Are Assessing

Every component is evaluated across two dimensions — both must be completed.

**DS Health** — Is this component worth keeping? Is it well-structured, reusable, and consistent?

**Native Mobile Readiness** — Can engineers implement it in SwiftUI and Jetpack Compose with the current Figma structure?

A component can pass DS Health but fail Native Readiness (e.g. raster icons, broken tokens). Both must be assessed.

---

## DS Health — The 4 Traits

Each component is scored on 4 traits. These measure whether the component belongs in the design system and how well it's built.

| Trait | What to check |
|---|---|
| **Reusable** | Works across multiple contexts and flows — not tied to one screen or feature. |
| **Self-contained** | Carries its own styles, states, and logic without external dependencies. |
| **Consistent** | Predictable behavior. Naming, property types, and state coverage align with the DS. |
| **Composable** | Nests inside other components and fits the existing hierarchy. |

---

## Trait Ratings — Pass / Partial / Warn / Fail

Each trait gets one of four ratings. These describe **how well the trait is met**, not the component's overall health.

| Rating | CSS Class | Color | When to use |
|---|---|---|---|
| **Pass** | `pass` | Green | Fully met. No issues — the trait is solid and ready for native handoff. |
| **Partial** | `partial` | Blue | Mostly met with minor gaps. The component is functional but has specific limitations that should be addressed (e.g. missing icon slots, but text variants work fine). |
| **Warn** | `warn` | Orange | Significant concerns that limit reuse or block reliable native handoff (e.g. naming inconsistencies, raster assets where vectors are expected, hardcoded values). |
| **Fail** | `fail` | Red | Broken. The trait is fundamentally unmet — blocks DS inclusion or native implementation entirely (e.g. flattened icons that can't be tinted, no separable layers). |

### How Trait Ratings differ from Verdicts

- **Trait Ratings** (Pass/Partial/Warn/Fail) = per-trait scores in the 4 Traits Scorecard
- **DS Verdicts** (Keep/Fix/Restructure...) = the overall DS Health outcome derived from all 4 traits combined
- **Native Status** (Ready/Needs Refinement/Requires Rework...) = overall native readiness derived from the 7 criteria (C1–C7)

---

## DS Health Verdicts

The overall DS Health verdict is based on the combination of all 4 trait ratings.

| Verdict | Meaning | When to assign |
|---|---|---|
| **Keep** | Ship as-is. | All 4 traits pass. |
| **Fix** | Belongs in DS but has specific issues to resolve. | Mostly pass/partial with a few warn traits. |
| **Restructure** | Needs significant property or architectural changes. | Multiple warn/fail traits indicating structural problems. |
| **Consolidate** | Merge into another component. | Overlaps with an existing component. |
| **Product Layer** | Too feature-specific for core DS. | Tied to a single screen or product flow. |
| **Remove** | Redundant, deprecated, or not a DS concern. | No longer needed or never belonged. |

---

## Native Mobile Readiness — 7 Criteria

The overall native status is set by the **worst-scoring criterion**. One unresolved blocker can hold back the entire component.

| ID | Criterion | What to check |
|----|---|---|
| **C1** | Layer Structure & Naming | Semantic names (`leading-icon`, `content`) — not Figma defaults (`Frame 42`, `Group 7`). Logical hierarchy. |
| **C2** | Variant & Property Naming | Booleans as `true`/`false`. Enums hyphenated. Clean, consistent conventions. |
| **C3** | Token Coverage | All color, spacing, typography, and radius values bound to tokens. No hardcoded values. |
| **C4** | Native Mappability | Maps to a native primitive (`DisclosureGroup`, `Button`, `List`). No web-only patterns. |
| **C5** | Interaction State Coverage | All expected states as variants — default, pressed, focused, disabled. |
| **C6** | Asset & Icon Quality | Vector component instances, not raster/PNG. Token-based coloring for native tinting. |
| **C7** | Code Connect Linkability | Proper component set. Property names map 1:1 to native parameters. |

---

## Native Status Levels

The overall native readiness of a component based on all 7 criteria.

| Status | Badge Class | Meaning |
|---|---|---|
| **Ready** | `badge-ready` | Linkable as-is. Clean structure, maps well to native. |
| **Needs Refinement** | `badge-refine` | Minor issues to resolve before linking. |
| **Requires Rework** | `badge-rework` | Needs redesign before native translation. |
| **Not Applicable** | `badge-na` | Web-only or removed — skip native assessment. |
| **Fix** | `badge-fix` | Resolved via Figma. Residual items may remain. |

---

## Combined Status

| DS Health | Native Status | Meaning |
|---|---|---|
| Keep | Ready | Ship it. |
| Keep / Fix | Needs Refinement | Minor fixes, assign to DS team. |
| Fix / Restructure | Requires Rework | Significant work before handoff. |
| Product Layer | Not Applicable | Move to product library. |
| Remove / Consolidate | Not Applicable | Skip native assessment. |

---

## HTML Report Architecture

The report is a modular, build-assembled static site on GitHub Pages.

### Repository Structure

```
east-blue-design-system/
├── index.html                    ← Built output (do not edit)
├── styles.css                    ← Built output (minified)
└── assessment-src/
    ├── shell.html                ← Shared layout: sidebar, cover, criteria, JS
    ├── styles.css                ← Source CSS (unminified)
    ├── build.js                  ← Build script
    └── components/
        ├── accordion.html        ← One file per component
        └── ...
```

### Build Process

1. `build.js` reads `shell.html` as the scaffold
2. Reads every `.html` in `components/` (alphabetical)
3. Extracts 4 tagged blocks from each file
4. Injects into the shell at placeholder comments
5. Minifies HTML + CSS, writes to repo root

```bash
node assessment-src/build.js
```

---

## GCash-Specific Patterns

Confirmed recurring patterns across the GCash DS. Use as a checklist during every assessment.

### Naming & Properties (C2)

- **Boolean properties as strings** — Should be `true`/`false`, not `yes`/`no`.
- **Space-separated variant names** — Incompatible with Swift/Kotlin enums. Use hyphenated or camelCase.
- **Version numbers in names** — `transaction_v1`, `Type=Version 2` indicate cleanup debt.
- **Ambiguous sizes** — `size=default` is unclear. Use named values (`small`, `medium`, `large`).
- **Overloaded property keys** — A single `type` encoding style and layout should be split.
- **State values encoding style** — `State=Pill` mixes concerns. Separate layout from interaction state.

### Structure (C1, C4)

- **Generic layer names** — `Frame 42`, `Group 7`, `Placeholder` should be semantic.
- **Non-component primitives** — Boolean ops, flattened shapes, or bare groups where component sets are expected.
- **Feature variants as separate components** — `[Component] - with [Feature]` should be a boolean property.
- **Baked-in content** — Hardcoded content instead of composable slots.

### Tokens (C3)

- **Hardcoded opacity** — Use semantic opacity tokens, not raw values on layers.
- **Generic shadows** — Shared `Depth/D0` instead of component-specific tokens.
- **Raw pixel identifiers** — Size `64` instead of named tokens like `large`.

### Assets (C6)

- **Raster icons** — Semantic icons as `<img src={imgXxx} />` from Figma CDN instead of vector instances. Hard C6 blocker.

### States (C5)

- **Missing `disabled`** — All interactive components need this.
- **Missing `indeterminate`** — Checkboxes and radio groups.
- **Missing `selected`/`active`** — Chips, toggles, tabs.
- **Incomplete state matrix** — Every sub-type should cover all relevant states.

### Figma Modes vs Component Properties (C2, C7)

**Figma Modes are invisible in developer handoff.** When a component uses Variable Collection Modes (e.g. Button's Appearance: Default / Destructive / White / Subtle), developers inspecting the component via Dev Mode or MCP see only the resolved CSS variable values — not the Mode itself.

Example — a developer inspecting a Destructive Button sees:
```
background: var(--main/button/primary/destructive/enabled/bg);
```

They do **not** see:
- That the Button supports 4 distinct appearances
- That "Appearance" is a Mode, not a component property
- How to switch between appearances in their native API

**Why this matters:**
- Code Connect mapping requires Mode → API parameter translation that must be written manually
- A developer missing this context would only implement one appearance and not realize others exist
- Mode swaps are invisible in variant grids, side-by-side comparisons, and component previews

**When to use Mode vs Property:**

| Use Mode when… | Use Property when… |
|---|---|
| Appearance swap is global (e.g. dark theme, brand skin) | Appearance is a per-instance choice (destructive action, emphasis level) |
| Variable reuse across many components matters more than variant explosion | Each appearance needs its own instance visible in the design |
| Developers will configure appearance at app/theme level | Developers will configure appearance inline per call site |

**Recommendation:** For component-level appearance variants (destructive, outline, text, subtle, etc.), prefer **component properties** over Modes. This makes the variant matrix explicit in Figma, visible in dev handoff, and directly mappable to native API parameters without manual translation.

**If Mode must stay:** Document the Mode → API mapping explicitly in the component's Code tab, including every Mode value and its corresponding SwiftUI modifier / Compose parameter. Without this doc, the appearance layer is silently lost in handoff.

### Documentation

- **Empty screen context panels** — Missing usage examples. Flag as handoff risk.
- **Deprecated components in live templates** — Must be cleaned up before deletion.

### Known Good Patterns — Do Not Flag

- Semantic color token naming: `main/{component}/color/{state}/{role}`
- Chevron icons are confirmed vector instances
- `space/space-*` tokens are consistent
- Custom fonts (Proxima Soft, BarkAda) — flag once per session as a standing action item

### Discovered During Assessment

<!-- @@DISCOVERED_PATTERNS@@ -->
| Criterion | Pattern | First Found In |
|---|---|---|
| C7 | Code Connect mappings not yet registered — no native component files linked via Code Connect CLI | Accordion |
| C1 | Variant sibling ("with Counter") duplicates the base transaction row — same 2 × 3 (density × state) matrix with a trailing Counter instance added. Should be a `trailing` slot on the base row, not a standalone component. | Action List Counter |
| C2 | `Density` (PascalCase) vs `state` (lowercase) — inconsistent casing on the same component. Base Transaction row has the same mismatch. | Action List Counter |
| C4 | Loading state still renders the trailing pill as a skeleton rectangle instead of omitting the Counter slot — the skeleton doesn't match what a real Counter occupies. | Action List Counter |
| C4 | Sibling component duplicates base List anatomy just to expose a second text line — native `ListItem.supportingContent` / SwiftUI `VStack` of primary + secondary labels handle this as one parameter | Action List Description |
| C5 | Description variant ships only 3 states (Default / Disabled / Loading) vs base List's 6 (adds Density axis) — diverging state coverage inside the same family | Action List Description |
| C1 | Leading asset is still a raw 32px circle placeholder (`icon-placeholder` fill `#c2c6cf`) — not a List Item Asset instance | Action List Description |
| C1 | Three sibling Figma components (List, List - with Counter, List - with Description) encode what should be one row with optional description + optional trailing counter slots. | Action List |
| C1 | Leading icon is a bare gray circle "Placeholder" layer (#C2C6CF) — no real icon content, same instance-swap placeholder anti-pattern as List Item. | Action List |
| C2 | `List` + `List - with Description` use Semibold 16 Neutral (#0A2757); `List - with Counter` uses Bold 18 Brand Blue (#005CE5). Same family, two different label typographies. | Action List |
| C2 | Hidden `Space2` / `Space16` spacer annotation nodes leak into the production component as rendered layers. | Action List |
| C5 | State enum is Default / Disabled / Loading — no Pressed state on a component whose primary purpose is tap navigation. | Action List |
| C1 | Component splintering by size family resolved — 3 separate components (banners, promos, heroes) collapsed into a single <code>Ad Space</code> with a 7-value <code>size</code> enum. | Ad Space |
| C2 | <code>hifi</code> / <code>midfi</code> fidelity axis eliminated — was a placeholder-authoring crutch masquerading as a variant. Loading state is now an orthogonal <code>isLoading</code> boolean; real media lives in a <code>content</code> slot. | Ad Space |
| C4 | <code>carousel=yes</code> pseudo-variant retired — carousel wrapping is a parent layout concern. Multiple <code>hero-md</code> Ad Spaces now compose inside the DS Carousel container, no dedicated "Ad Carousel" component. | Ad Space |
| C6 | Hardcoded rasters and "Replace this image" placeholder assets retired — <code>content</code> is a Figma Slot that accepts an AdMob view, an image, or an illustration. | Ad Space |
| C7 | Naming simplified for 1:1 native mapping — <code>banner-*</code> maps to AdMob primitives, <code>promo-*</code> / <code>hero-*</code> map to a custom <code>EBAdSpace</code> view on both platforms. | Ad Space |
| C2 | Four booleans use `yes`/`no` strings with inconsistent casing (`No` in one variant, `no`/`yes` elsewhere). | Alert |
| C2 | `Type=Default` is a neutral appearance mixed in with the semantic set (Information / Warning / Error / Success). | Alert |
| C1 | Two structurally different layouts (full-width banner vs bordered accent card) share one component — the axis that separates them is named `Full Width` which hides the real difference (border accent + action). | Alert |
| C6 | Left-icon slot is a 24 × 24 `icon-placeholder` circle, not a swappable Icon instance. | Alert |
| C6 | Peso Sign glyph imported as raster image (imgShapeFull) instead of vector instance of Peso Sign - Proxima icon | Amount Text Field |
| C5 | Amount entry component ships without Active (focused) or Disabled states — only Default / Filled / Error | Amount Text Field |
| C2 | Property renamed from "no. of initals" → "layout" with semantic values pair/trio/quad/overflow (RESOLVED — replaces "count" with numeric strings) | Avatar Group |
| C5 | Overflow variant layout=overflow added with "+N" badge in bottom-right slot (RESOLVED) | Avatar Group |
| C6 | Inner avatar children are hardcoded 24px containers — do not use Avatar component instances with size prop | Avatar Group |
| C2 | Token name typo "main/avatar/brand/intials" missing second letter i — should be "initials" (reopened on recheck) | Avatar |
| C3 | Border-radius bound to radius/radius-round (99999) — RESOLVED. Border-width still fixed per size (acceptable by design). | Avatar |
| C6 | Raster backgrounds on 5 initials variants replaced with vector ELLIPSE layers — RESOLVED | Avatar |
| C3 | Hardcoded opacity: 0.90 on Danger/Heavy and Disabled/Heavy Transaction variants — RESOLVED (set to 1 via plugin) | Badge |
| C2 | State property values renamed to match token semantic names (Info→Information, Success→Positive, Warning→Notice, Danger→Negative, Disabled→Muted) — RESOLVED across all 60 affected variants | Badge |
| C1 | Sparse cartesian variant axis — 5 boolean-ish axes (Property × position × with link × with button × with preamble × with icon) would yield 64 combinations; only 20 ship, with impossible states (e.g. `with link=yes` + `with button=yes`) excluded by authoring convention rather than by the schema. | Banner |
| C2 | Property names use spaces (`with link`, `with button`, `with preamble`, `with icon`) — not valid in any native codegen target. Should be camelCase (`hasLink`, `hasAction`, `hasPreamble`, `hasLeadingAsset`). | Banner |
| C2 | `Property` is a meta-name that conveys nothing — its values (`Within A Container` \| `Full Width`) describe a padding/container layout concern, not a semantic mode. | Banner |
| C4 | Image asset is an instance of a separate "Banner Asset Placeholder" component — there's no first-class Figma Slot, so product teams swap via instance-override rather than a declared slot API. | Banner |
| C4 | Chevron ships as a raster `shape_full` PNG glyph embedded in the `learn-more` sub-component — not a vector instance. | Banner |
| C5 | No pressed, focused, or disabled states are modeled; banners are tappable and need a pressed response. | Banner |
| C6 | `with icon=yes` variant renders a drawn grey circle placeholder instead of a swappable Icon / Avatar / Illustration instance. | Banner |
| C7 | Property names with spaces + five boolean-ish axes produce no usable 1:1 parameter surface for SwiftUI or Compose Code Connect. | Banner |
| C1 | Component name ("Bottom Drawer") and token namespace ("bottom-header") disagree — scope of the component is not the bottom sheet, it's the header-plus-body skeleton of a sheet. The actual sheet primitives (drag handle, detents, scrim, snap behaviour) are not present. | Bottom Sheet |
| C1 | Content region is modeled as 4 hardcoded decorative placeholder rectangles (UI Slot, SLOT 2, SLOT 3, SLOT 4) toggled by booleans — not Figma Slots. Designers cannot instance-swap content without detaching. | Bottom Sheet |
| C2 | The Alignment axis (Left Align vs Center Align) is not just a text-align switch — it silently adds a headerSlot on Center (used for progress bar / stepper) and removes the Close X. Two different component shapes collapsed into one enum. | Bottom Sheet |
| C4 | Close X icon is hardcoded to the Left Align variant only and absent from Center Align. Dismiss affordance should be a slot or modeled as a behaviour of the wrapping sheet, not baked-in asymmetrically per alignment. | Bottom Sheet |
| C4 | No drag handle node exists in the component — the sheet surface is drawn as a top-rounded rectangle with no grabber. Native presents this via platform APIs; if the Figma model pretends to ship the surface only (minus handle) it implies the wrong native mapping. | Bottom Sheet |
| C6 | Close icon (`shape_full`) is rendered from a remote raster asset (PNG URL from Figma CDN) rather than a vector Icon instance. | Bottom Sheet |
| C7 | Scope overlap with Modal (`18507:71705`) and Overlay (`47:329691`): three separately-maintained components share the "present a floating surface above a scrim" concern. Bottom Sheet needs to consume Overlay, not redeclare the surface. | Bottom Sheet |
| C1 | Component name "Contextual Help" is internal jargon — industry-standard term is "Callout" (Atlassian, GitHub, Notion, Stripe). Name doesn't describe shape or purpose at a glance. | Callout |
| C2 | Redundant axes: `label=yes/no` + `label size=small/default/no` encode the same information. When `label=no`, `label size` is forced to `no`. Three Cartesian cells (`no/small`, `no/default`) are invalid and unused. | Callout |
| C2 | `type=default \| information` is a two-value stub of a real intent enum. Real callouts need Info / Success / Warning / Error — the Figma set only ships Default (neutral) and Information (blue). | Callout |
| C4 | No leading icon slot on any variant. Every mature callout pattern (Material, HIG, GitHub, Notion) leads with an intent-bound icon; this one relies on colour alone — a known accessibility anti-pattern. | Callout |
| C5 | No Pressed / Hovered / Focused / Disabled states. Callouts often embed inline links or open a sheet — without interactive states, those affordances aren't expressible. | Callout |
| C2 | `type` enum conflates content variant (`default` / `with icon`) with loading state (`skeleton loader`) — skeleton should be an orthogonal `isLoading` boolean, not a peer value in a content enum. | Carousel Card |
| C6 | Banner uses a hardcoded `replace-this-asset` PNG plus a purple `#e6e1ef` `mix-blend-multiply` dimmer layer — both should resolve via an image slot and an optional tint token, not a static PNG. | Carousel Card |
| C6 | With-icon variant's round badge is a `#c2c6cf` filled circle (no instance swap) — blocks icon customization. | Carousel Card |
| C5 | No pressed/focused state — carousel cards are tappable and navigate somewhere, so they need at least pressed feedback. | Carousel Card |
| C7 | Family has 5 near-duplicate components (Carousel Card, Carousel - Discount Card, Carousel - Item, Carousel Item - Center, Carousel Item - Side) that should collapse to 1–2 canonical primitives. | Carousel Card |
| C1 | Layer names include `_space_12` spacer with `opacity:0` and hardcoded `#0500ff` fill — dev-mode artifact that should be a spacing token, not an invisible element. | Carousel Discount Card |
| C1 | `Asset Placeholder` and `replace-this-asset` layer names leak template authoring affordances into the shipped component. | Carousel Discount Card |
| C2 | `type` property conflates media layout (`default` / `with violator`) with loading state (`skeleton loader`) on a single axis — should split into `violator: bool` + `isLoading: bool`. | Carousel Discount Card |
| C4 | Perforated voucher edge is baked into the banner image — ties the component to voucher aesthetics and blocks reuse for non-voucher discount cards. | Carousel Discount Card |
| C6 | Banner image, `replace-this-asset`, and the perforate edge are all raster assets stitched with mask layers — fragile and non-tokenizable. | Carousel Discount Card |
| C7 | `violator` label text is hardcoded "New" — not parameterized as a prop. | Carousel Discount Card |
| C2 | Container boolean `active=yes/no` used to drive a nested child's focus state — pushes a private implementation detail into the parent API when the parent is really an arrangement of three siblings (leading icon, field, trailing icon) | Chat Field |
| C5 | Composer-as-container collapses the full field state matrix (Default/Active/Error/Disabled × isFilled) down to a single `active` boolean, silently dropping Error, Disabled, and isFilled coverage at the chat-field level | Chat Field |
| C6 | Raster PNG glyphs for both leading (plus/attach) and trailing (send) actions on a 32×32px surface where native would ship vector SF Symbols / Material icons | Chat Field |
| C2 | Boolean property "with icon" uses yes/no instead of true/false | Chip |
| C2 | Two separate components ("Filter" and "Filter with Dropdown") share the same pill anatomy and should consolidate into a single Chip with leading/trailing slot props | Chip |
| C6 | Leading slot uses a hardcoded 24px gray circle "icon-placeholder" instead of a swappable Avatar/Icon instance | Chip |
| C5 | No pressed / selected / disabled / error states defined across either component | Chip |
| C2 | `with limit` boolean property uses `yes`/`no` strings instead of `true`/`false`. | Counter |
| C2 | Count + limit values are hardcoded text ("0 / 10", "10 / 10") instead of parameterized — not usable for real counts. | Counter |
| C1 | Day-of-week layer names (`Sunday`, `Monday`...) used as semantic roles instead of index/role-based naming — shows through to handoff | Date Picker Group |
| C2 | `Type = Date \| Year \| Month` axis name is misleading — "Date" is actually the day grid view; native convention is `mode: day \| month \| year` | Date Picker Group |
| C4 | Year panel uses a fake `Scrollbar` overlay drawn as geometry instead of a scrollable container — handoff has no way to represent overflow/scroll state | Date Picker Group |
| C4 | Month variant has no Prev chevron (only Next), asymmetric from Date and Year which both have bidirectional navigation | Date Picker Group |
| C5 | No Selected, Pressed, Hover, Focus, Today, In-Range, Out-of-Range, or Disabled states on the grid cells — only a single "Today" ring and a "Prev/Next month" disabled day are present | Date Picker Group |
| C6 | Chevron glyphs exported as raster `shape_full` assets instead of vector icon instances | Date Picker Group |
| C6 | No explicit tokens for the picker surface itself (`main/date-picker/group/*`) — panel reuses `month-header` tokens as a proxy bg/border | Date Picker Group |
| C1 | Cell sibling pair (Date Picker - Item 32×32, Month and Year Picker - Item 100×32) duplicate the same selectable-cell primitive at different sizes — one unified Picker Cell with a `kind` axis would replace both | Date Picker Item |
| C2 | `Type = Default \| Today \| Selected \| Range (Middle) \| Prev/Next` mixes display roles (Default, Today, Prev/Next) with selection state (Selected, Range Middle) on a single axis | Date Picker Item |
| C2 | Variant name `Range (Middle)` uses parentheses/space in the value — rename to `range-middle` for clean code-connect output | Date Picker Item |
| C4 | Range highlight ends (`Range highlight end`, `Range highlight start`) are absolutely positioned siblings that overflow the cell by 28–34% — range continuity across cells is represented as per-cell decoration instead of row-level geometry | Date Picker Item |
| C5 | State axis is present but only Default and Today carry a Disabled variant — Selected, Range Middle, and Prev/Next have no Disabled form | Date Picker Item |
| C5 | No Pressed, Hover, or Focused states on any Type | Date Picker Item |
| C5 | Today + Selected is not a distinct variant — unclear which wins when today is also the selected date | Date Picker Item |
| C6 | Selected cell is a solid fill vs Today cell is a 1.5px ring — acceptable visually, but not tokenized as a shared "selection emphasis" pattern shared with Month/Year cells | Date Picker Item |
| C2 | State × isDisabled produces invalid combinations — Disabled is conceptually a state, not an orthogonal boolean, yielding 5 of 8 variants actually used | Date Picker |
| C6 | Calendar glyph exported as raster `shape_full` image rather than a vector icon instance | Date Picker |
| C4 | Popover (Date Picker - Group) is composed inline inside the trigger rather than being positioned as an overlay — blocks 1:1 native dialog mapping | Date Picker |
| C5 | Missing Error state despite living in a Select Field family where Error is canonical | Date Picker |
| C1 | Fixed composition of 8 DropdownItem instances — no slot or parameterization, last row is a detached frame instead of a component instance | Dropdown Item Group |
| C4 | Popover surface modeled as a standalone component, not composed via native Menu / DropdownMenu primitives | Dropdown Item Group |
| C2 | Enum value typo `disabeld` (should be `disabled`) — ships in the variant name and leaks into generated code | Dropdown Item |
| C6 | Raster PNG country flag (Philippines) embedded in `country` variant — not a vector asset | Dropdown Item |
| C5 | No explicit pressed/hover/focused states — only `selected` on/off plus a `disabled` variant | Dropdown Item |
| C4 | `disabeld` is modeled as a `type` value rather than an orthogonal `state`/`disabled` axis, colliding with content type | Dropdown Item |
| C5 | No disabled or pressed states — form dropdown missing standard interaction states | Dropdown |
| C2 | DropdownItem `selected` property uses yes/no string instead of true/false boolean | Dropdown |
| C2 | `color` property uses `white` / `grey blue` (with space) instead of `default` / `subtle` — doesn't match token naming (`main/empty-state/color/default/*` and `main/empty-state/color/subtle/*`) | Empty State |
| C2 | Two booleans named `header` and `header1` — impossible to tell apart from the property sheet. Also `topHeading` / `topDescription` vs bottom header = duplicate title+description surfaces | Empty State |
| C6 | Icon slot ships a hardcoded gray circle placeholder (`icon-placeholder`, #C2C6CF) — should be a swappable Icon slot | Empty State |
| C6 | Empty State Asset ships a flat colored rectangle — should be a Figma Slot for the real illustration | Empty State |
| C2 | Property names contain spaces ("gcash x partner", "grouped logos", "with partner") — invalid for code generation and Code Connect. | Footer |
| C2 | Six boolean-ish axes (description × label × gcash x partner × alignment × with partner × grouped logos) yield ~96 theoretical combos but only 7 are built — extreme sparse cartesian. | Footer |
| C6 | Partner logos (CIMB, Fuse, PDAX, Bayad) are baked in as raster `<img>` fills rather than slot-accepted Image instances. | Footer |
| C2 | `iconSize` uses 6 numeric values (64 / 52 / 46 / 40 / 32 / 24) — should collapse to 3–4 semantic sizes (XL / L / M / S). | Generic Card |
| C1 | Icon slot is a hardcoded placeholder circle, not an Avatar or Icon instance — blocks swappable composition. | Generic Card |
| C6 | Chevron is a raster image (<code>shape_full</code> PNG) rather than a vector glyph. | Generic Card |
| C1 | A single `type` enum hides 5 structurally different layouts (default / more information / with avatar / no amount / skeleton loader) — should be slot-based composition with a separate state axis. | Generic Transaction Card |
| C2 | `type=no amount` and `type=more information` describe what's missing or vague rather than the semantic role of each layout. | Generic Transaction Card |
| C2 | Label uses Proxima Soft Semibold (600) while Generic Card's heading uses Bold (700) — inconsistent title weight across the card family. | Generic Transaction Card |
| C2 | "type=dark\|light" property name describes appearance instead of semantic intent — convention is "surface" or "tone". | Header Centered |
| C4 | "Header - Transaction" is structurally a card hero (avatar + title + divider + label-value + description) misfiled as a header. Should live in the card-patterns family. | Header Transaction |
| C4 | A second app-bar component exists only to swap the title for a logo — should be a slot on the existing Title Bar instead of a sibling component. | Header With Logo |
| C1 | Four separate components all named "Header*" conflate 4 distinct semantic roles (section header, page banner, brand app bar, detail hero). | Header |
| C2 | 8 independent boolean props create 256 theoretical combos but only 16 are built — the boolean model lies. Trailing-slot booleans should collapse into a single enum slot. | Header |
| C1 | Two stacked discount Badge instances at the same anchor — the <code>Voucher Asset</code> image frame (5121:4534) contains two Badge instances (<code>I5121:4534;6983:110671</code> reading "10% off" and <code>I5121:4534;6983:110685</code> reading "35% off"), both absolutely positioned at the same top-right coordinates. Only one is ever visible at a time, but nothing in the property schema picks between them — the "10% off" badge layer is simply dead weight in the symbol. | Horizontal Voucher |
| C2 | Six booleans where most should be strings or a composable array — <code>amount</code>, <code>asset</code>, <code>badges</code>, <code>description</code>, <code>header</code>, <code>validityPeriod</code>. Every one controls visibility only; the strings ("Grab Food", "PHP 100.00", "PHP 150.00", validity date range) are all frozen inside the symbol. Consumers cannot render a real voucher without detaching. | Horizontal Voucher |
| C2 | Discount amount is baked into the image frame — "10% off" and "35% off" are hardcoded Badge label strings inside the Voucher Asset, not a property on the parent Horizontal Voucher. A voucher offering "BUY1 TAKE1" or "50% off" cannot be rendered without detaching. | Horizontal Voucher |
| C2 | Four hardcoded status badges in a single row — "Limited", "Expiring", "Hot", "Discounted" are baked inside the <code>badges</code> frame as fixed Badge instances. The <code>badges</code> boolean toggles the entire row on or off; there is no way to render just one or two badges, and no way to choose which badges apply. | Horizontal Voucher |
| C4 | Orientation is implicit in the component name, not a variant axis — Horizontal Voucher, Vertical Voucher (5119:1635), and Voucher Card Horizontal (5119:1786) are three separate components for what is a single component with an <code>orientation</code> axis. Changing orientation requires swapping the entire instance, not flipping a property. | Horizontal Voucher |
| C5 | No state axis — Voucher Card Horizontal ships Default/Limited/Expiring/Used/Expired with per-state background, label color, and badge treatment. Horizontal Voucher has no state concept at all; a used or expired horizontal voucher cannot be rendered in greyed-out treatment without detaching. | Horizontal Voucher |
| C6 | Image is a raster photograph baked into the frame — the hero image (<code>Paste Image Here</code> / <code>imgPasteImageHere</code>) is a 336×144 raster asset with the "GrabFood" wordmark burned into the pixels. Partner branding, ticket shape, and image content are all frozen. Should be an Image Slot that accepts any Voucher Asset variant. | Horizontal Voucher |
| C7 | No Code Connect target — the handoff API is <code>EBVoucherCard(orientation:, state:, title:, price:, originalPrice:, validity:, badges: [...], image: )</code>. A 6-boolean symbol with frozen strings, stacked discount badges, and a raster hero image has no 1:1 native analog. | Horizontal Voucher |
| C3 | `bg-subtle` token bakes in alpha (`rgba(246,249,253,0.24)`) — rendered color depends on whatever sits behind it | Inline Message |
| C6 | Illustrations (success / loading / error) are raster 3D renders — external assets that must be bundled with the native package | Inline Message |
| C6 | Loading state uses a Lottie animation (same asset-bundling pattern as Upload File) | Inline Message |
| C2 | `hasBodyContent` is a boolean, but body content isn't exposed as a slot — consumers can't override the list inside | Inline Message |
| C1 | A single `type` enum hides 5 structurally different trailing-content compositions (plain value / value + clipboard / badge / value + description / value + description + text-link) — should be orthogonal boolean slots (hasCopy, hasDescription, hasTextLink) with a unified trailing slot so Badge can be instance-swapped. | Inline Text |
| C2 | `type=with Clipboard` / `with Badge` / `with Description` / `with Text Link` mix two axes — "what sits in the trailing slot" (value / badge) and "what sits under the label" (description / text-link). A single enum conflates them. | Inline Text |
| C6 | Badge variant is drawn inline (hardcoded information/light fill, hardcoded "Label" text) instead of instance-swapped from the canonical Badge component — creates a parallel styling source of truth. | Inline Text |
| C6 | trailing-icon uses icon-placeholder RECTANGLE — not a swappable icon instance | Labeled Field |
| C2 | `type` × `indicator` axes are entangled — only ~10 of 72 theoretical combinations are valid | List Item Asset |
| C5 | Numbered indicator hardcodes "1." — no way to set per-item number | List Item Asset |
| C6 | `indicator=Custom` ships a gray circle placeholder instead of a swappable Icon slot | List Item Asset |
| C2 | `level` property uses string values ("1"/"2"/"3") — should be an integer or inferred from nesting depth | List Item |
| C6 | Leading asset is an instance-swap placeholder — adopting Figma Slots gives a cleaner native slot mapping | List Item |
| C2 | List is a layout frame with 8 hardcoded List Item instances — not a variant component. Should be removed or restructured into a real container. | List |
| C2 | Variant property values use pseudo-numeric strings ("by 4") instead of clean integer enums | Menu Grid |
| C5 | Service Item only defines `active` color tokens — no pressed/disabled state coverage | Menu Grid |
| C4 | Variant explosion (4 rows × 5 columns = 20) where two integer props would suffice on native | Menu Grid |
| C1 | Opacity-0 spacer frames (`_space_16`, `_space_12`) are used inside the modal body instead of auto-layout gap — creates invisible non-semantic layers that native translators can't map. | Modal |
| C2 | Axis values mix separator styles — `transaction_v1` / `transaction_v2` use snake_case, `2 - horizontal` / `1 - vertical` use space-dashed-space. Within a single property. | Modal |
| C4 | Two unrelated layouts (general-purpose dialog + transaction receipt) are compressed into one component via a `type` enum — transaction variants carry receipt-specific inner rows, copy-to-clipboard icon, and reference number slots that don't belong in a generic modal. | Modal |
| C6 | Transaction variant uses raster PNG assets for the copy-to-clipboard icon (`shape_half`, `shape_full`) instead of a vector icon instance. | Modal |
| C7 | Component duplicates scope with a separately-maintained Modal elsewhere in the file (node `47:329691` "Overlay" and generic popup container) — two sources of truth for the same concept. | Modal |
| C1 | Sibling cell pair (Date Picker - Item 32×32, Month and Year Picker - Item 100×32) duplicate the same selectable-cell primitive at different sizes — one unified Picker Cell with a `kind` axis would replace both | Month Year Picker Item |
| C1 | Inner frame is named `Month` regardless of whether the cell renders a month or year label — reused as the year cell too without renaming, meaning the layer name lies for half the instances | Month Year Picker Item |
| C2 | State axis is NARROWER than its sibling day cell — only `Type = Default \| Today \| Selected` with no Disabled, no Pressed, no Focused. Cells in the same family should share a consistent state shape, even if values differ | Month Year Picker Item |
| C3 | Cell reuses `main/date-picker/day/color/*` tokens for a non-day cell — the token scope is misleadingly named `day` while also being used for month and year cells. Either rename to `main/date-picker/cell/*` or split into `main/picker-cell/{day\|month\|year}/*` | Month Year Picker Item |
| C5 | No Disabled variant — unreachable when a parent disables the picker or blocks a date range | Month Year Picker Item |
| C5 | No Pressed, Hover, or Focused state variants | Month Year Picker Item |
| C5 | No Today + Selected variant — unclear which presentation wins when the current month/year is also the selected one | Month Year Picker Item |
| C6 | Today ring is 1px on this cell vs 1.5px on the sibling day cell — same visual pattern with different stroke weights across siblings | Month Year Picker Item |
| C1 | Component is named `Onboarding - Tooltip` but contains nothing onboarding-specific — no step indicator, no Next/Skip/Back CTAs, no progress dots. It is a plain header + description + close tip with a pointer. The "Onboarding" prefix misleads consumers into choosing it for walkthroughs it cannot support. | Onboarding Tooltip |
| C1 | Three Tooltip siblings exist (Tooltip V2, Onboarding - Tooltip, Tooltip Blurred and Transparent) that differ by pointer/placement axis more than by role — Onboarding-Tooltip is essentially Tooltip V2 minus the content axes. | Onboarding Tooltip |
| C2 | Pointer direction is one `pointer` enum here but 4 booleans in Tooltip V2 — inconsistent schema across sibling components that should already have been consolidated. | Onboarding Tooltip |
| C6 | Pointer triangle is flattened to 4 raster image fills (`imgPointer`, `imgPointer1`, `imgPointer2`, `imgPointer3`) — four rotated copies of what should be one vector shape. Same anti-pattern as Tooltip V2. | Onboarding Tooltip |
| C1 | Close `X` is a raw image asset (`imgShapeFull`) inside a generic "Close" frame rather than an instance of the DS's `icon/close`. | Onboarding Tooltip |
| C5 | No interaction states exposed (Pressed / Focused on close, Appearing / Dismissing lifecycle). | Onboarding Tooltip |
| C4 | Scrim-type components are fixed to sticker-sheet dimensions (360×640) instead of Fill parent — breaks drop-in composability. | Overlay |
| C2 | Token named *overlay-strong* implies a weak/standard counterpart, but only one strength is exposed as a component property. | Overlay |
| C2 | Progress encoded as discrete enum `percentage=0\|10\|…\|100` instead of a continuous numeric `progress: 0..1` — forces 11 variants for a single scalar. | Progress Bar |
| C6 | Track and fill rendered as raster `<img>` assets (back/front PNGs) instead of token-driven rectangles or vector strokes. Blocks theming and resolution independence. | Progress Bar |
| C5 | No indeterminate / buffered / success / error states modeled — only determinate fill in 10%-step jumps. | Progress Bar |
| C2 | `size` property encodes state — values include "default - error" and "large - error" (space-hyphen-space strings that mix size + state) | Radio Button With Label |
| C5 | No disabled / selected variants — only unselected state is documented across sizes | Radio Button With Label |
| C6 | Always instances the small radio — large label doesn't scale the radio accordingly | Radio Button With Label |
| C2 | `selected` property mixes selection state (unselected/selected) with modifiers (disabled/error) — should split into `selected: Bool` + `state: default/disabled/error` | Radio Button |
| C2 | `style` enum is conditional — only meaningful when selected, creating a sparse matrix with ~50% invalid combinations | Radio Button |
| C3 | Large radio is raster-baked — each variant exports the ring+dot as a pre-rendered SVG image instead of vector layers with token fills | Radio Button |
| C6 | Internal frame is named `.base/checkbox` — should be `.base/radio` | Radio Button |
| C5 | No pressed or focused states defined | Radio Button |
| C6 | Trailing icons use icon-placeholder RECTANGLE instead of swappable icon instances | Recipient Field |
| C5 | Search-specific text input exposing only Default/Filled — focused, error, and disabled states are absent, blocking 1:1 mapping to native search primitives. | Search Field |
| C6 | Search glyph rendered as a raster `img` (`shape_full`) rather than a vector instance — inconsistent with the confirmed-vector chevrons used elsewhere in Form Elements. | Search Field |
| C1 | Trailing slot contains an unresolved `Placeholder` wrapper with a raw `icon-placeholder` pink circle — shipping a DS component with placeholder layers still in the tree. | Search Field |
| C4 | Container uses `border-top + border-bottom` only (no left/right, `radius-0`) — diverges from every other Form Element sibling, which use a full rounded-rect stroke. | Search Field |
| C1 | Step count modeled as 3 sibling components (`Stepper - Bullet - 3 Steps`, `- 4 Steps`, `- 5 Steps`) instead of a single component with a `steps: Int` property. Same anti-pattern as Stepper - Circular (9 siblings). | Stepper Bullet |
| C6 | Each dot is rendered as a raster `<img>` ellipse — two PNGs per sibling (filled + track). Blocks theming and breaks at non-1x DPI; the dot is the easiest possible vector (an 8×8 filled circle). | Stepper Bullet |
| C2 | `highlighted = 1st \| 2nd \| ... \| Nth` variant axis encodes the current step as an ordinal enum, not an integer. Ordinal labels don't scale and collide with the scalar nature of "step N". | Stepper Bullet |
| C5 | No connector line / rail between dots — each dot is isolated. Users can't see direction of travel (how far between current and next) the way a line-connected bullet stepper normally shows. | Stepper Bullet |
| C1 | Step count modeled as 9 sibling components (`Stepper - Circular - 2 Steps` through `… - 10 Steps`) instead of a single component with a `steps: Int` (or `total: Int` + `current: Int`) parameter. 9x the maintenance for a scalar axis. | Stepper Circular |
| C6 | Each step circle renders its ring arc via a pre-baked raster `<img>` (one asset per step index) instead of a stroked SVG arc driven by progress math. Blocks theming, breaks at non-1x, and ships 10+ PNGs per Figma component. | Stepper Circular |
| C2 | `number=1\|2\|…\|10` variant axis encodes the hardcoded step count, not the current step. The "current step" concept is implicit in the variant name and not surfaced as a property. | Stepper Circular |
| C2 | Total step count encoded as 10 boolean `prop1Stepper…prop10Steppers` visibility props rather than a single scalar `total: Int`. Forces consumers to toggle 10 unrelated toggles to set "show 4 dashes". | Stepper Dash |
| C2 | Current step modeled as an ordinal enum (`highlighted = 1st \| 2nd \| … \| 10th`) instead of a numeric `current: Int`. Reads as a cardinal, not a ratio — blocks `current / total` math on the consumer side. | Stepper Dash |
| C1 | Inner dash layers labelled `1st`, `2nd`, …, `6th` with positions 7–10 all duplicated as `6th` (copy-paste bug). Inspector can't disambiguate which dash is which. | Stepper Dash |
| C1 | Layer named `shape_full` inside icon container — generic flattened name, suggests boolean-operation or raster shape rather than vector Icon instance | Subtext Message |
| C2 | Boolean property `leadingLabel` is misnamed: the "Label" text actually renders trailing in the layout. Naming contradicts rendered position and will mislead native param names. | Subtext Message |
| C4 | Anatomy diverges by variant: Primary has no icon slot, Success + Error hardcode specific icons (Checkmark / Close). Not a uniform slot contract. | Subtext Message |
| C2 | Boolean property `isActive?` has a `?` suffix and uses Yes/No values instead of `selected` with true/false | Tab Item |
| C2 | `hasLeadingIcon` boolean is wired only in horizontal orientation; vertical always renders an icon — inconsistent across orientations | Tab Item |
| C3 | Counter colors are hardcoded (bg #ECF1FA, label #0F3390) instead of tokens | Tab Item |
| C6 | Counter is drawn locally instead of instancing the canonical Badge component | Tab Item |
| C6 | Icon is a hardcoded gray circle `icon-placeholder` — should be a swappable Icon slot | Tab Item |
| C1 | Table - Scheduling is a third parallel Table-family record. Schema diverges again: a `type` enum gates a fixed number of nested detail row-pairs (none / 2 / 4) — different from Table's `type × no. of columns × icon` matrix and from Table - Transaction's peso-amount content row. | Table Scheduling |
| C2 | `type` values are natural-language strings (`"no display amount"`, `"2 amounts display"`, `"4 amounts display"`) embedding the count in a sentence — should be an integer `detailCount: 0 \| 2 \| 4` or a data-driven `details: [Pair]` array. | Table Scheduling |
| C4 | Scheduling is a list-of-payment-rows pattern, not a table. On mobile it maps to a list cell with a date header, a primary amount, and nested label/value pairs — native <code>List</code> / <code>LazyColumn</code> composed of <code>EBInlineText</code>, not a Table primitive. | Table Scheduling |
| C5 | No interaction states. A scheduled payment row is typically tappable (to view or edit the scheduled entry) and can be disabled (past / cancelled) — none of that coverage exists. | Table Scheduling |
| C6 | Peso prefix is the same raster <code>Peso Sign - Proxima</code> image fill as Table - Transaction. Compounds the raster-asset debt across the family. | Table Scheduling |
| C1 | Table - Transaction duplicates the Table family schema (type × no. of columns × icon) but only covers 2 and 3 column counts, and dedicates the content row to a peso-prefixed amount pattern — overlaps heavily with Generic Transaction Card and Inline Text. | Table Transaction |
| C2 | `no. of columns` reuses the same period-in-name string enum from Table; property is redundant when a data-driven columns array would encode count. | Table Transaction |
| C4 | The peso sign in the amount column is a raster `img` fill pulled from a Figma asset URL, not a Swift SF Symbol / Compose drawable — blocks native handoff. | Table Transaction |
| C5 | Content row has no interaction states; amount cells don't distinguish positive / negative / zero amounts despite this being a transaction surface. | Table Transaction |
| C6 | `Peso Sign - Proxima` ships as a raster asset in the generated code. On mobile, currency prefixes are text (`₱`) or a local vector, not a bitmap. | Table Transaction |
| C1 | Table is split into three component records (Table, Table - Item, Table - Label) but only the parent is consumed in screens — Item and Label exist as orphan sub-components that never get placed directly. | Table |
| C2 | `no. of columns` uses string values ("2"/"3"/"4") with a period in the property name — must be renamed to an integer `columnCount` or removed in favor of a data-driven API. | Table |
| C4 | "Table" is a desktop-web pattern. On mobile, tabular data is either a vertical stack of label/value pairs (Inline Text) or a horizontally-scrollable list — no native iOS/Android primitive matches the current layout. | Table |
| C5 | No interaction states (hover/pressed/selected) on rows. Pattern-level screens place Tables as static rows with no tap target. | Table |
| C6 | Header `icon=yes` variants render a raw `#C2C6CF` placeholder circle — not a real vector slot or instance-swap. Consumers have no documented way to set the icon. | Table |
| C2 | `tabsCount` is a variant property (2/3/4) — should be removed entirely, container should accept a list of Tab Items | Tabs |
| C2 | Figma component is named "Tab" (singular) — should be renamed "Tabs" (plural) to match native/industry conventions and disambiguate from the Tab Item atom | Tabs |
| C7 | Product composition disguised as a DS component — an instance of the canonical Accordion with a hardcoded title string and hardcoded body. No unique schema, tokens, or behavior. Should be documented as a usage example of the base Accordion, not shipped as its own component. | Terms Conditions Accordion |
| C4 | Desktop resize-handle glyph baked into mobile multi-line field — native platforms auto-grow, no user-facing resize affordance exists on iOS/Android | Text Area |
| C1 | Raster PNG resize-handle icon instead of vector — four PNG assets referenced (one per state) for a 12×12px glyph that is itself the wrong pattern for mobile | Text Area |
| C2 | Boolean properties use yes/no instead of true/false — blocks direct Swift Bool / Kotlin Boolean mapping | Title Bar |
| C6 | Trailing icon uses icon-placeholder RECTANGLE instead of swappable icon instance — blocks native icon slot | Title Bar |
| C1 | A separate component exists solely to add a button slot — action belongs on the base Toast as an optional prop, not a sibling component. | Toast With Button |
| C2 | `type` axis uses `default \| light` (no `error`, no `pending`) — same axis name as base Toast but a different, narrower value set. The shared concept "surface theme" is named inconsistently across siblings. | Toast With Button |
| C2 | `description=yes\|no` is a sizing + slot flag rolled into a string enum — should be `supportingText?: String` (an optional slot) and the padding change should follow from content presence, not a duplicate variant. | Toast With Button |
| C4 | Embeds the `.[DEPRECATED] Button - Small/XS` instance (node 21:164490, flagged for deletion) — blocks native implementation until the action surface is migrated to Button - XSmall. | Toast With Button |
| C6 | No leading icon axis — base Toast has `With Icon`, this sibling silently drops it. Consolidation loses a concept unless the merged component keeps the icon slot. | Toast With Button |
| C1 | Two Toast components (Toast + Toast - With Button) model the same primitive — action is an axis, not a separate component. | Toast |
| C2 | `theme` axis uses `default \| light \| dark` with `default` meaning "destructive" only on Error — the enum mixes a neutral appearance concept with a semantic status mode. | Toast |
| C2 | `Large Label` is a sizing axis phrased as a content flag — reads as "does it have a large label" not "size: small \| base". | Toast |
| C2 | Booleans use `yes/no` strings, blocking direct Swift `Bool` / Kotlin `Boolean` mapping. | Toast |
| C6 | Pending variants ship an `icon-placeholder` 16/24 px gray circle instead of a real spinner — no ProgressView / CircularProgressIndicator instance. | Toast |
| C5 | No auto-dismiss duration, no swipe-to-dismiss, no tap-to-dismiss annotated. | Toast |
| C1 | Toggle - With Label is a layout frame with a Toggle instance + text, not a real component. No property set, no variants — identical pattern to the (current) List and Tabs components flagged as layout-only. | Toggle With Label |
| C2 | Toggle uses `isActive = Yes \| No` while Checkbox uses `isSelected = true \| false`. Selection controls across the DS should share one property schema. | Toggle |
| C5 | Toggle exposes only Default + Disabled states — missing Pressed, Focused, and Error. | Toggle |
| C1 | A visual treatment ("Blurred and Transparent") is shipped as its own Figma component rather than as an `appearance` property on the canonical Tooltip. Native platforms model translucent surfaces via modifiers (`.ultraThinMaterial`, `Modifier.blur()`), not separate types. | Tooltip Blurred |
| C1 | Third of three Tooltip siblings in the DS — the primitive is fragmented by skin. | Tooltip Blurred |
| C4 | Backdrop-blur and translucency are platform material effects on iOS/Android, not discrete component shapes. Modelling them as their own component guarantees the Figma schema will never map cleanly to native. | Tooltip Blurred |
| C6 | Pointer triangle is a flattened raster (4 rotated image copies, one per edge) — identical anti-pattern to Tooltip V2. | Tooltip Blurred |
| C5 | No interaction states (Pressed / Focused / Dismissing). No dismiss affordance at all. | Tooltip Blurred |
| C2 | Component name contains a conjunction ("Blurred and Transparent") describing a visual effect rather than a role. | Tooltip Blurred |
| C2 | Component is named `Tooltip V2` — a version suffix inside a production DS component name implies a V1 that should have been deleted. No consumer should ever have to choose between versions. | Tooltip V2 |
| C2 | 4 independent booleans (`pointerTop`, `pointerRight`, `pointerBottom`, `pointerLeft`) model a single enum choice — nothing prevents a consumer from enabling all four pointers at once. | Tooltip V2 |
| C6 | Pointer triangle is flattened to a raster image fill (`imgPointer`, `imgPointer1`, `imgPointer2`, `imgPointer3`) rather than a vector shape — 4 rotated copies of what should be one vector. | Tooltip V2 |
| C6 | Leading icon is a flat `#C2C6CF` circle named "Placeholder" — same instance-swap anti-pattern as Action List / List Item. | Tooltip V2 |
| C1 | Close `X` is an image asset (`imgShapeFull`) inside a generic "Close" frame rather than a DS close-icon instance. | Tooltip V2 |
| C5 | No interaction states exposed (Pressed / Focused / Dismissing / Appearing). | Tooltip V2 |
| C2 | `hasLabel` boolean uses yes/no instead of true/false | Upload File |
| C2 | `state="Upload error"` contains a space — non-native enum value | Upload File |
| C2 | `state="Uploaded with thumbnail"` is orthogonal to the other states — should be a separate `hasThumbnail: Bool` | Upload File |
| C3 | All border tokens misspelled as `boder` — `main/upload-file/color/default/boder` and `main/upload-file/color/error/boder` | Upload File |
| C3 | Thumbnail placeholder bg is hardcoded `#0057E4` with 5% opacity baked in | Upload File |
| C6 | Thumbnail is a gray placeholder block instead of a Figma Slot for swappable preview | Upload File |
| C6 | Progress bar is a Lottie animation — external asset dependency, must be bundled with the native package | Upload File |
| C5 | No disabled, pressed, or focused states defined | Upload File |
| C1 | Two asset sizes bundled in one symbol — large (153h) and small (100h) Voucher Asset instances are both nested and toggled via <code>largeAsset</code> / <code>smallAsset</code> booleans. Nothing enforces mutual exclusion, so the default symbol renders both stacked (465h tall). Should be a single <code>assetSize</code> enum, not two booleans. | Vertical Voucher |
| C2 | Text content is hardcoded placeholder copy — title, description, PHP 100.00 price, PHP 150.00 strikethrough, and "Validity: Dec 25 2022 - Jan 5 2023" are all frozen strings. Consumers cannot set a voucher title, amount, or validity without detaching. | Vertical Voucher |
| C2 | Badges are hardcoded labels inside the symbol — "Limited", "Expiring", "Hot", "Discounted" are fixed across two fixed rows toggled via <code>prop1stRowBadges</code> / <code>prop2ndRowBadges</code>. Consumers cannot choose which badges to show; they can only turn row-1 or row-2 on/off as a unit. | Vertical Voucher |
| C7 | No Code Connect target — the handoff API should be <code>EBVoucherCard(orientation:, state:, title:, price:, originalPrice:, validity:, badges: [...], image: )</code>. Nothing in the current component maps 1:1 to that shape. 8 booleans with hardcoded content cannot link to a native component. | Vertical Voucher |
| C2 | Property `variant` is overloaded — encodes 4 trailing content types as one enum. Better as `trailingContent` with values none/badge/textLink/icon. | View Only Field |
| C2 | Property value `Size=Default` isn't a true size name — should be `Regular` for consistency with other components. | View Only Field |
| C6 | Checkmark uses raster IMG from Figma CDN instead of a vector icon instance. | View Only Field |
| C2 | Variant property values mix paradigms — "Default" / "2 CTA" / "Version 2" combine generic, count, and version naming | Visual Popup |
| C6 | Hero image is a flat raster placeholder with "Replace me" overlay instead of a swappable image slot | Visual Popup |
| C5 | No destructive/error/loading variant; close affordance only on Version 2 | Visual Popup |
| C2 | Illustration category promoted to a variant axis — <code>use case</code> has 10 values (restaurant, vacation, beverage, snack, fashion, party, meal, games, food, default). Every new voucher category forces a new component variant. Should be an instance-swapped image Slot, not a variant. | Voucher Asset |
| C2 | Fidelity axis <code>type=midfi\|hifi</code> — "mid-fidelity" placeholder vs "hi-fidelity" final artwork is an authoring concern (wireframe vs final), not a product axis. Same pattern retired on Ad Space; should be an orthogonal <code>isLoading</code> or a separate placeholder asset, not a variant value. | Voucher Asset |
| C4 | Cartesian is sparse — 10 use cases × 2 sizes × 2 orientations = 40 possible; only 20 shipped. Orientation=horizontal exists for <code>default</code> (midfi) and <code>food</code> (hifi) only; most use cases have no horizontal artwork. The matrix is not closed. | Voucher Asset |
| C6 | All artwork is raster image fill — no vector illustrations, no token-driven coloring. The "35% off" Badge is hardcoded inside the component, so the voucher amount is not a property. | Voucher Asset |
| C7 | Native mapping is not a component — the correct handoff for a category illustration is an asset catalog entry (<code>Image("voucher-restaurant-large")</code>), not a Code-Connected component. Only the ticket frame + badge overlay warrants a component. | Voucher Asset |
| C1 | Two parallel partner-image trees for the same frame — <code>voucher</code> (limited/expiring) and <code>Voucher Image V1</code> (used/expired) are two complete sibling subtrees inside the 96×111 partner-image frame, gated by the state enum. Layers differ only by background fill (<code>bg/color-bg-primary</code> #005CE5 vs <code>bg/color-bg-overlay-weak</code> rgba(2,14,34,0.24)) and mix-blend mode — should be a single subtree with state-driven tokens. | Voucher Card Horizontal |
| C2 | State enum drives four separate visual concerns at once — background (active vs greyed), label colors (default vs expired), badge style (information/heavy vs negative/heavy vs muted/light), and badge text ("Limited" / "Expiring" / "Used" / "Expired"). The badge text is derived from state but not independently addressable; a consumer cannot show "New" or "Featured" on a limited voucher. | Voucher Card Horizontal |
| C2 | Every piece of content is hardcoded — title "Buy Load Globe Go90", price "PHP 50.00", original price "PHP 90.00", validity "Validity: Dec 25 2022 - Jan 5 2023". Booleans <code>badge</code> and <code>crossedValue</code> only toggle visibility. No string properties. | Voucher Card Horizontal |
| C4 | Three components for one concept — this (5119:1786), Vertical Voucher (5119:1635), and Horizontal Voucher (5121:4533) are three parallel records of the same idea. This one carries the proper state coverage; the other two do not. Merge into one component with <code>orientation</code> + <code>state</code> axes. | Voucher Card Horizontal |
| C5 | "GET VOUCHER" CTA has no interactive state — it's a rotated text label inside the partner-image frame, not a Button instance. No pressed / focused / disabled state on the card or on the CTA. Vouchers are always tappable; the entire card should be the tap target and the CTA frame should be a Button if a secondary action is needed. | Voucher Card Horizontal |
| C6 | Partner logo is a raster image (GCash icon PNG) masked into the perforated ticket shape — <code>imgLogoNoText</code>, <code>imgGCashLogosV2RgbIconBwWhiteTransparent</code>, <code>imgPerforate</code>, <code>imgVoucherImageV1</code> are all raster assets. The logo cannot be swapped to a partner brand (Globe, Smart, GrabFood) without detaching. | Voucher Card Horizontal |
| C7 | Two-boolean + 4-enum surface does not map 1:1 to native. The proposed <code>EBVoucherCard(orientation:, state:, title:, price:, originalPrice:, validity:, logo:, onTap:)</code> shape cannot link until strings become properties and the logo becomes a slot. | Voucher Card Horizontal |
| C1 | Screen masquerading as a component — a 336×704 symbol with no variants, only four optional-content booleans (<code>accordion</code>, <code>badge</code>, <code>slashedAmount</code>, <code>tCWithTextLink</code>). It is a page-level composition, not a primitive. DS primitives are reusable across screens; this is one specific screen. | Voucher Details |
| C2 | Booleans named after internal layers — <code>accordion</code>, <code>badge</code>, <code>tCWithTextLink</code> toggle whether specific child instances render. They are not behavioral states, not semantic roles; they are "show this optional subtree" switches. True DS props describe intent (<code>hasLimitedBadge</code>, <code>hasOriginalPrice</code>) or are behavioral states, not child-node visibility. | Voucher Details |
| C2 | Mixed T&amp;C display patterns — the component ships both a <code>tCWithTextLink</code> plain-text section AND a <code>Terms &amp; Conditions Accordion</code> inside the same symbol, as two independent booleans. Any real voucher screen picks one or the other, never both. The combinatorial boolean surface is 2^4 = 16 states of which ~4 are legitimate. | Voucher Details |
| C4 | Native handoff is a Screen/View, not a Component — SwiftUI would model this as a scrollable <code>VoucherDetailsView</code> parent, not a single View with optional subviews. The merchant header, amount block, and accordion each map to their own primitives. | Voucher Details |
| C5 | No interaction states — voucher is interactive on mobile (tap to redeem, accordion expands, "See full promo mechanics" link), but the symbol ships only one visual state. Accordion expanded state leaks in only because the embedded accordion instance happens to be <code>expanded=yes</code>. | Voucher Details |
| C7 | Not linkable as a unit — Code Connect would have to map 4 booleans to a 4-argument native View, which defeats the point. The real DS-to-native contract is at the primitive level (Logo, Badge, Accordion, ListItem), not at the screen level. | Voucher Details |
<!-- @@DISCOVERED_PATTERNS_END@@ -->

---

## Assessment Workflow

For each Figma node URL received:

### 1. Get metadata
```
get_metadata(fileKey, nodeId)
```
Count variants, read property names/values, spot C2 issues, understand layer hierarchy.

### 2. Get screenshot
```
get_screenshot(fileKey, nodeId)
```
Visual confirmation. Identify missing states by what's absent.

### 3. Get design context
```
get_design_context(fileKey, nodeId, disableCodeConnect=true,
  clientFrameworks="SwiftUI, Jetpack Compose",
  clientLanguages="Swift, Kotlin")
```
Layer naming (C1), token usage (C3), raster icons (C6), layout structure (C4).

### 4. Get token definitions
```
get_variable_defs(fileKey, nodeId)
```
Confirm token coverage (C3), extract hex values for the report.

### 5. Spot-check nodes (optional)
```
get_metadata(fileKey, specificNodeId)
```
Verify if an element is a vector instance or raster.

### 6. Write the assessment
Score all 4 traits and 7 criteria. Assign verdicts. Output as markdown summary for review.

### 7. Produce the HTML file
Create `assessment-src/components/[name].html` with all 4 tagged blocks using the template below.

### 8. Build and verify
```bash
node assessment-src/build.js
```
Open in browser. Verify sidebar, summary, and content. Commit and push.

---

## Output Format

Two deliverables per component: markdown summary (for review) and HTML file (for the report).

### Markdown Summary

```markdown
## [Component Name] `nodeId`

**DS Health:** [Keep / Fix / Restructure / Consolidate / Product Layer / Remove]
**Native Status:** [Ready / Needs Refinement / Requires Rework / Not Applicable]

### Structure
[Brief description of sub-components and variant counts]

### DS Health

| Trait | Rating | Notes |
|---|---|---|
| Reusable | Pass/Warn/Fail | [note] |
| Self-contained | Pass/Warn/Fail | [note] |
| Consistent | Pass/Warn/Fail | [note] |
| Composable | Pass/Warn/Fail | [note] |

### Native Readiness

| ID | Criterion | Status | Notes |
|----|---|---|---|
| C1 | Layer Structure | Pass/Flag/Fail | [note] |
| C2 | Variant Naming | Pass/Flag/Fail | [note] |
| C3 | Token Coverage | Pass/Flag/Fail | [note] |
| C4 | Native Mappability | Pass/Flag/Fail | [note] |
| C5 | Interaction States | Pass/Flag/Fail | [note] |
| C6 | Asset Quality | Pass/Flag/Fail | [note] |
| C7 | Code Connect | Pass/Flag/Fail | [note] |

### Action Items
| # | Criterion | Action | Status |
|---|---|---|---|
| 1 | C7 | [action] | Open |
```

### HTML Component File

File naming: lowercase, hyphenated — `accordion.html`, `bottom-sheet.html`

Must contain 4 tagged blocks:

```html
<!--
  [COMPONENT NAME] COMPONENT ASSESSMENT
  Run `node assessment-src/build.js` to regenerate index.html
-->

<!--@meta-start-->
status: [complete|in-progress|re-assessing]
node: [nodeId]
ds-verdict: [keep|fix|restructure|consolidate|product-layer|remove]
native-status: [ready|refine|rework|na]
variants: [count]
ios: [native primitive]
android: [native primitive]
open-issues: [comma-separated criterion IDs or "none"]
<!--@meta-end-->

<!--@nav-start-->
<button class="nav-comp" id="nav-[id]" onclick="showPanel('[id]', this)">
  <div class="nav-comp-icon"><!-- Component SVG 32x32 --></div>
  <div class="nav-comp-body">
    <div class="nav-comp-name">[Component Name]</div>
  </div>
  <div class="nav-comp-status [refine|rework]"></div>
</button>
<!--@nav-end-->

<!--@summary-card-start-->
<div class="summary-card" onclick="showPanelById('[id]')">
  <div class="summary-card-row">
    <div class="summary-card-name">[Component Name]</div>
    <div class="summary-card-badges">
      <span class="badge badge-[ds-verdict]">[DS Verdict]</span>
      <span class="badge badge-[native-status]">[Native Status]</span>
    </div>
  </div>
  <div class="summary-card-finding">[One-line summary]</div>
</div>
<!--@summary-card-end-->

<!--@section-start-->
<div class="panel" id="panel-[id]">
  <div class="content-wrap">

    <button class="back-btn" onclick="showPanelById('overview')">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12 6 8l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      Overview
    </button>

    <div class="comp-header">
      <div class="comp-header-body">
        <div class="comp-name">
          [Component Name]
          <span class="badge badge-[ds-verdict]">[DS Verdict]</span>
          <span class="badge badge-[native-status]">[Native Status]</span>
        </div>
        <p class="comp-desc">[One-line component description]</p>
        <div class="comp-meta">
          <div class="cover-meta-item"><strong>Node:</strong> [nodeId]</div>
          <div class="cover-meta-item"><strong>Variants:</strong> [count]</div>
          <div class="cover-meta-item"><strong>iOS:</strong> [primitive]</div>
          <div class="cover-meta-item"><strong>Android:</strong> [primitive]</div>
        </div>
      </div>
    </div>

    <div data-tab-group="[id]-tabs">
    <div class="comp-tabs">
      <button class="comp-tab active" onclick="switchTab(this, 'assessment', '[id]-tabs')">Assessment</button>
      <button class="comp-tab" onclick="switchTab(this, 'changelog', '[id]-tabs')">Changelog</button>
    </div>

    <!-- Changelog tab -->
    <div class="comp-tab-content" data-tab="changelog">
      <!-- Changelog entries -->
    </div>

    <!-- Assessment tab -->
    <div class="comp-tab-content active" data-tab="assessment">

    <div class="section-heading">DS Health</div>

    <div class="verdict-card">
      <div class="verdict-card-title">[Verdict headline]</div>
      <div class="verdict-card-body"><strong>Verdict:</strong> [Summary]</div>
    </div>

    <div class="sub-heading">The 4 Traits — Scorecard</div>
    <div class="trait-grid">
      <div class="trait-card [pass|warn|fail]">
        <div class="trait-header">
          <div class="trait-name">[Trait]</div>
          <div class="trait-status">[Pass|Warn|Fail]</div>
        </div>
        <div class="trait-note">[Note]</div>
      </div>
      <!-- Repeat for all 4 traits -->
    </div>

    <!-- If resolved issues exist -->
    <div class="sub-heading">Resolved Issues</div>
    <ul class="resolved-list">
      <li>[Issue description] (C#)</li>
    </ul>

    <div class="section-heading" style="margin-top:48px">Native Mobile Readiness</div>

    <!-- Variants, Criteria Scorecard, Interaction States,
         What Works Well, Open Issues, Code Connect,
         Token Coverage, Action Items -->

    </div><!-- /assessment tab -->
    </div><!-- /tab group -->

  </div><!-- /content-wrap -->
</div><!-- /panel -->
<!--@section-end-->
```

Key conventions:
- Use `resolved-list` for fixed issues instead of individual `infobox-resolved` blocks
- Action Items table shows only open items
- Remove `A./B./C.` section prefixes — use plain sub-headings
- No inline `style=` attributes — use CSS classes
- Keep copy concise and direct
- Interaction States table omits N/A rows — add a `table-footnote` if needed

---

## Assessment Progress

<!-- @@PROGRESS_TABLE@@ -->
| Component | Node | DS Verdict | Native Status | Status | Notes |
|---|---|---|---|---|---|
| Accordion | `16870:9288` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Action List Counter | `18577:14637` | Consolidate | Requires Rework | 🔁 Re-assessing | — |
| Action List Description | `18577:14604` | Consolidate | Requires Rework | 🔁 Re-assessing | — |
| Action List | `18577:14545` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Ad Space | `18563:9789` | Keep | Ready | 🔁 Re-assessing | — |
| Alert | `18444:2012` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Amount Text Field | `152:48122` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Avatar Group | `18276:4554` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Avatar | `17143:4488` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Badge | `18482:28972` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Banner | `756:82673` | Restructure | Requires Rework | 🟡 In Progress | — |
| Bottom Sheet | `12817:43833` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Button | `17104:184842` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Callout | `23:179895` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Carousel Card | `23:121311` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Carousel Discount Card | `18543:2761` | Consolidate | Needs Refinement | 🔁 Re-assessing | — |
| Carousel Item | `—` | Consolidate | Requires Rework | 🔁 Re-assessing | — |
| Chat Field | `23:145915` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Checkbox | `17143:2464` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Chip | `18336:22243` | Restructure | Needs Refinement | 🔁 Re-assessing | — |
| Counter | `18482:71321` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Date Picker Group | `18431:2822` | Consolidate | Requires Rework | 🔁 Re-assessing | — |
| Date Picker Item | `12874:42180` | Consolidate | Requires Rework | 🔁 Re-assessing | — |
| Date Picker | `12879:49826` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Dropdown Item Group | `6383:3446` | Consolidate | Not Applicable | 🔁 Re-assessing | — |
| Dropdown Item | `18577:13033` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Dropdown | `18482:31910` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Empty State | `27:169325` | Restructure | Needs Refinement | 🔁 Re-assessing | — |
| Footer | `21:215190` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Generic Card | `18482:35806` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Generic Transaction Card | `18482:35753` | Restructure | Needs Refinement | 🔁 Re-assessing | — |
| Header Centered | `18430:2858` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Header Transaction | `18430:2897` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Header With Logo | `18430:2875` | Consolidate | Requires Rework | 🔁 Re-assessing | — |
| Header | `18430:2919` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Horizontal Voucher | `5121:4533` | Consolidate | Requires Rework | 🟡 In Progress | — |
| Inline Message | `27:168910` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Inline Text | `18652:71101` | Restructure | Needs Refinement | 🔁 Re-assessing | — |
| Input Field | `17758:3687` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Labeled Field | `17758:3713` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| List Item Asset | `18482:34406` | Restructure | Needs Refinement | 🔁 Re-assessing | — |
| List Item | `18482:34429` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| List | `18482:34737` | Remove | Not Applicable | 🔁 Re-assessing | — |
| Menu Grid | `18320:14332` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Modal | `18507:71705` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Month Year Picker Item | `18414:5854` | Consolidate | Requires Rework | 🔁 Re-assessing | — |
| Onboarding Tooltip | `51:17066` | Consolidate | Requires Rework | 🔁 Re-assessing | — |
| Overlay | `47:329691` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Progress Bar | `18577:13227` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Radio Button With Label | `18482:35673` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Radio Button | `18482:35698` | Restructure | Needs Refinement | 🔁 Re-assessing | — |
| Recipient Field | `17758:3867` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Search Field | `18577:14520` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Select Field | `17758:3786` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Stepper Bullet | `27:48287` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Stepper Circular | `27:47768` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Stepper Dash | `18649:5223` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Subtext Message | `18687:71133` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Tab Item | `18482:33262` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Table Scheduling | `47:324365` | Consolidate | Requires Rework | 🔁 Re-assessing | — |
| Table Transaction | `47:324709` | Consolidate | Requires Rework | 🔁 Re-assessing | — |
| Table | `47:326260` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Tabs | `18482:33249` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Terms Conditions Accordion | `5119:5447` | Remove | Not Applicable | 🔁 Re-assessing | — |
| Text Area | `3070:21245` | Consolidate | Requires Rework | 🔁 Re-assessing | — |
| Title Bar | `23:175148` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Toast With Button | `27:53205` | Consolidate | Requires Rework | 🔁 Re-assessing | — |
| Toast | `27:53135` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Toggle With Label | `18482:36538` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Toggle | `18482:36508` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Tooltip Blurred | `49:335349` | Consolidate | Requires Rework | 🔁 Re-assessing | — |
| Tooltip V2 | `70:14908` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Upload File | `18482:35064` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Vertical Voucher | `5119:1635` | Consolidate | Requires Rework | 🟡 In Progress | — |
| View Only Field | `18403:4520` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Visual Popup | `18477:23788` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Voucher Asset | `5119:1664` | Restructure | Requires Rework | 🟡 In Progress | — |
| Voucher Card Horizontal | `5119:1786` | Restructure | Requires Rework | 🟡 In Progress | — |
| Voucher Details | `5119:5368` | Product Layer | Not Applicable | 🟡 In Progress | — |
<!-- @@PROGRESS_TABLE_END@@ -->

### Open Issues

<!-- @@OPEN_ISSUES@@ -->
| Component | Criterion | Action | Status |
|---|---|---|---|
| — | — | No open issues | — |
<!-- @@OPEN_ISSUES_END@@ -->

---

## Ownership

| Role | Owner |
|---|---|
| DS debloat audit methodology | DS team lead |
| Native readiness methodology | Design engineering lead |
| HTML report & build script | DS team / design engineering |
| Component HTML files | Produced per-session |
| Figma file access | Figma admin |
| Token naming | Design system owner |
