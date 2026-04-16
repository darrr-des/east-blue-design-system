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
| C2 | Four booleans use `yes`/`no` strings with inconsistent casing (`No` in one variant, `no`/`yes` elsewhere). | Alert |
| C2 | `Type=Default` is a neutral appearance mixed in with the semantic set (Information / Warning / Error / Success). | Alert |
| C1 | Two structurally different layouts (full-width banner vs bordered accent card) share one component — the axis that separates them is named `Full Width` which hides the real difference (border accent + action). | Alert |
| C6 | Left-icon slot is a 24 × 24 `icon-placeholder` circle, not a swappable Icon instance. | Alert |
| C2 | Property renamed from "no. of initals" → "layout" with semantic values pair/trio/quad/overflow (RESOLVED — replaces "count" with numeric strings) | Avatar Group |
| C5 | Overflow variant layout=overflow added with "+N" badge in bottom-right slot (RESOLVED) | Avatar Group |
| C6 | Inner avatar children are hardcoded 24px containers — do not use Avatar component instances with size prop | Avatar Group |
| C2 | Token name typo "main/avatar/brand/intials" missing second letter i — should be "initials" (reopened on recheck) | Avatar |
| C3 | Border-radius bound to radius/radius-round (99999) — RESOLVED. Border-width still fixed per size (acceptable by design). | Avatar |
| C6 | Raster backgrounds on 5 initials variants replaced with vector ELLIPSE layers — RESOLVED | Avatar |
| C3 | Hardcoded opacity: 0.90 on Danger/Heavy and Disabled/Heavy Transaction variants — RESOLVED (set to 1 via plugin) | Badge |
| C2 | State property values renamed to match token semantic names (Info→Information, Success→Positive, Warning→Notice, Danger→Negative, Disabled→Muted) — RESOLVED across all 60 affected variants | Badge |
| C2 | Boolean property "with icon" uses yes/no instead of true/false | Chip |
| C2 | Two separate components ("Filter" and "Filter with Dropdown") share the same pill anatomy and should consolidate into a single Chip with leading/trailing slot props | Chip |
| C6 | Leading slot uses a hardcoded 24px gray circle "icon-placeholder" instead of a swappable Avatar/Icon instance | Chip |
| C5 | No pressed / selected / disabled / error states defined across either component | Chip |
| C2 | `with limit` boolean property uses `yes`/`no` strings instead of `true`/`false`. | Counter |
| C2 | Count + limit values are hardcoded text ("0 / 10", "10 / 10") instead of parameterized — not usable for real counts. | Counter |
| C5 | No disabled or pressed states — form dropdown missing standard interaction states | Dropdown |
| C2 | DropdownItem `selected` property uses yes/no string instead of true/false boolean | Dropdown |
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
| C4 | Scrim-type components are fixed to sticker-sheet dimensions (360×640) instead of Fill parent — breaks drop-in composability. | Overlay |
| C2 | Token named *overlay-strong* implies a weak/standard counterpart, but only one strength is exposed as a component property. | Overlay |
| C2 | `size` property encodes state — values include "default - error" and "large - error" (space-hyphen-space strings that mix size + state) | Radio Button With Label |
| C5 | No disabled / selected variants — only unselected state is documented across sizes | Radio Button With Label |
| C6 | Always instances the small radio — large label doesn't scale the radio accordingly | Radio Button With Label |
| C2 | `selected` property mixes selection state (unselected/selected) with modifiers (disabled/error) — should split into `selected: Bool` + `state: default/disabled/error` | Radio Button |
| C2 | `style` enum is conditional — only meaningful when selected, creating a sparse matrix with ~50% invalid combinations | Radio Button |
| C3 | Large radio is raster-baked — each variant exports the ring+dot as a pre-rendered SVG image instead of vector layers with token fills | Radio Button |
| C6 | Internal frame is named `.base/checkbox` — should be `.base/radio` | Radio Button |
| C5 | No pressed or focused states defined | Radio Button |
| C6 | Trailing icons use icon-placeholder RECTANGLE instead of swappable icon instances | Recipient Field |
| C2 | Boolean property `isActive?` has a `?` suffix and uses Yes/No values instead of `selected` with true/false | Tab Item |
| C2 | `hasLeadingIcon` boolean is wired only in horizontal orientation; vertical always renders an icon — inconsistent across orientations | Tab Item |
| C3 | Counter colors are hardcoded (bg #ECF1FA, label #0F3390) instead of tokens | Tab Item |
| C6 | Counter is drawn locally instead of instancing the canonical Badge component | Tab Item |
| C6 | Icon is a hardcoded gray circle `icon-placeholder` — should be a swappable Icon slot | Tab Item |
| C2 | `tabsCount` is a variant property (2/3/4) — should be removed entirely, container should accept a list of Tab Items | Tabs |
| C2 | Figma component is named "Tab" (singular) — should be renamed "Tabs" (plural) to match native/industry conventions and disambiguate from the Tab Item atom | Tabs |
| C2 | Boolean properties use yes/no instead of true/false — blocks direct Swift Bool / Kotlin Boolean mapping | Title Bar |
| C6 | Trailing icon uses icon-placeholder RECTANGLE instead of swappable icon instance — blocks native icon slot | Title Bar |
| C1 | Toggle - With Label is a layout frame with a Toggle instance + text, not a real component. No property set, no variants — identical pattern to the (current) List and Tabs components flagged as layout-only. | Toggle With Label |
| C2 | Toggle uses `isActive = Yes \| No` while Checkbox uses `isSelected = true \| false`. Selection controls across the DS should share one property schema. | Toggle |
| C5 | Toggle exposes only Default + Disabled states — missing Pressed, Focused, and Error. | Toggle |
| C2 | `hasLabel` boolean uses yes/no instead of true/false | Upload File |
| C2 | `state="Upload error"` contains a space — non-native enum value | Upload File |
| C2 | `state="Uploaded with thumbnail"` is orthogonal to the other states — should be a separate `hasThumbnail: Bool` | Upload File |
| C3 | All border tokens misspelled as `boder` — `main/upload-file/color/default/boder` and `main/upload-file/color/error/boder` | Upload File |
| C3 | Thumbnail placeholder bg is hardcoded `#0057E4` with 5% opacity baked in | Upload File |
| C6 | Thumbnail is a gray placeholder block instead of a Figma Slot for swappable preview | Upload File |
| C6 | Progress bar is a Lottie animation — external asset dependency, must be bundled with the native package | Upload File |
| C5 | No disabled, pressed, or focused states defined | Upload File |
| C2 | Property `variant` is overloaded — encodes 4 trailing content types as one enum. Better as `trailingContent` with values none/badge/textLink/icon. | View Only Field |
| C2 | Property value `Size=Default` isn't a true size name — should be `Regular` for consistency with other components. | View Only Field |
| C6 | Checkmark uses raster IMG from Figma CDN instead of a vector icon instance. | View Only Field |
| C2 | Variant property values mix paradigms — "Default" / "2 CTA" / "Version 2" combine generic, count, and version naming | Visual Popup |
| C6 | Hero image is a flat raster placeholder with "Replace me" overlay instead of a swappable image slot | Visual Popup |
| C5 | No destructive/error/loading variant; close affordance only on Version 2 | Visual Popup |
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
| Alert | `18444:2012` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Avatar Group | `18276:4554` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Avatar | `17143:4488` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Badge | `21:111526` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Button | `17104:184842` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Checkbox | `17143:2464` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Chip | `18336:22243` | Restructure | Needs Refinement | 🔁 Re-assessing | — |
| Counter | `21:43333` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Dropdown | `23:199480` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Generic Card | `23:86050` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Generic Transaction Card | `23:86201` | Restructure | Needs Refinement | 🔁 Re-assessing | — |
| Header Centered | `18430:2858` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Header Transaction | `18430:2897` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Header With Logo | `18430:2875` | Consolidate | Requires Rework | 🔁 Re-assessing | — |
| Header | `18430:2919` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Input Field | `17758:3687` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Labeled Field | `17758:3713` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| List Item Asset | `10274:2658` | Restructure | Needs Refinement | 🔁 Re-assessing | — |
| List Item | `10277:2664` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| List | `10277:4586` | Remove | Not Applicable | 🔁 Re-assessing | — |
| Menu Grid | `18320:14332` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Overlay | `47:329691` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Radio Button With Label | `844:75143` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Radio Button | `844:75124` | Restructure | Needs Refinement | 🔁 Re-assessing | — |
| Recipient Field | `17758:3867` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Select Field | `17758:3786` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Tab Item | `27:89110` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Tabs | `27:89097` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Title Bar | `23:175148` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Toggle With Label | `27:30918` | Restructure | Requires Rework | 🔁 Re-assessing | — |
| Toggle | `27:30922` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| Upload File | `4068:4209` | Fix | Needs Refinement | 🔁 Re-assessing | — |
| View Only Field | `18403:4520` | Keep | Needs Refinement | 🔁 Re-assessing | — |
| Visual Popup | `30:81526` | Fix | Needs Refinement | 🔁 Re-assessing | — |
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
