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

Rate each trait using one of four levels:

| Rating | CSS Class | Meaning |
|---|---|---|
| **Pass** | `pass` | Fully met. No issues — ready for native handoff. |
| **Partial** | `partial` | Mostly met with minor gaps. Functional but has specific limitations that should be addressed. |
| **Warn** | `warn` | Significant concerns that limit reuse or block reliable native handoff. |
| **Fail** | `fail` | Broken. Blocks DS inclusion or native implementation entirely. |

| Trait | What to check |
|---|---|
| **Reusable** | Works across multiple contexts and flows — not tied to one screen or feature. |
| **Self-contained** | Carries its own styles, states, and logic without external dependencies. |
| **Consistent** | Predictable behavior. Naming, property types, and state coverage align with the DS. |
| **Composable** | Nests inside other components and fits the existing hierarchy. |

### Verdicts

| Verdict | Meaning |
|---|---|
| **Keep** | All 4 traits pass. Ship as-is. |
| **Fix** | Belongs in DS but has specific issues to resolve. |
| **Restructure** | Needs significant property or architectural changes. |
| **Consolidate** | Merge into another component. |
| **Product Layer** | Too feature-specific for core DS. |
| **Remove** | Redundant, deprecated, or not a DS concern. |

---

## Native Mobile Readiness — 7 Criteria

The overall status is set by the **worst-scoring criterion**.

| ID | Criterion | What to check |
|----|---|---|
| **C1** | Layer Structure & Naming | Semantic names (`leading-icon`, `content`) — not Figma defaults (`Frame 42`, `Group 7`). Logical hierarchy. |
| **C2** | Variant & Property Naming | Booleans as `true`/`false`. Enums hyphenated. Clean, consistent conventions. |
| **C3** | Token Coverage | All color, spacing, typography, and radius values bound to tokens. No hardcoded values. |
| **C4** | Native Mappability | Maps to a native primitive (`DisclosureGroup`, `Button`, `List`). No web-only patterns. |
| **C5** | Interaction State Coverage | All expected states as variants — default, pressed, focused, disabled. |
| **C6** | Asset & Icon Quality | Vector component instances, not raster/PNG. Token-based coloring for native tinting. |
| **C7** | Code Connect Linkability | Proper component set. Property names map 1:1 to native parameters. |

### Status Levels

| Status | Meaning |
|---|---|
| **Ready** | Linkable as-is. Clean structure, maps well to native. |
| **Needs Refinement** | Minor issues to resolve before linking. |
| **Requires Rework** | Needs redesign before native translation. |
| **Not Applicable** | Web-only or removed — skip native assessment. |

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
gcash-design-system/
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
| C2 | Variant name spacing inconsistency — "initials - light" vs "dark-initials" (spaces around hyphen) | Avatar |
| C2 | Token name typo — "main/avatar/brand/intials" missing letter i (should be "initials") | Avatar |
| C3 | Border-radius hardcoded per size — not using radius tokens (45.213px, 24px, 16px, 12px, 10px) | Avatar |
| C6 | Raster backgrounds on 5 initials variants (40px, 64px, 90px) — should be simple vector circles | Avatar |
| C2 | No icon slot variants — missing leadingIcon, trailingIcon, and iconOnly button patterns | Button |
| C5 | No focus ring state; no loading state; Pressed documented as "Desktop only" — ambiguous for mobile | Button |
| C2 | Boolean property isChecked uses Yes/No instead of true/false — incompatible with Swift/Kotlin booleans | Checkbox |
| C5 | Only checked/unchecked states — missing disabled, pressed, focused, indeterminate, and error | Checkbox |
| C6 | Checkmark is a flattened boolean operation with no separable vector icon layer — blocks native tinting | Checkbox |
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
| Accordion | `16870:9288` | Ready | Needs Refinement | 🔁 Re-assessing | Open: C7 |
| Avatar | `17143:4488` | Fix | Needs Refinement | 🔁 Re-assessing | Open: C2, C3, C6, C7 |
| Button | `17104:184842` | Needs Refinement | Needs Refinement | 🔁 Re-assessing | — |
| Checkbox | `17143:2464` | Requires Rework | Requires Rework | 🔁 Re-assessing | Open: C6, C5, C2, C7 |
<!-- @@PROGRESS_TABLE_END@@ -->

### Open Issues

<!-- @@OPEN_ISSUES@@ -->
| Component | Criterion | Action | Status |
|---|---|---|---|
| Accordion | C7 | Create native component files and register Code Connect mappings via the Figma Code Connect CLI. | Open |
| Avatar | C2 | Rename `type=initials - light` to `type=initials-light` (remove spaces) for Swift/Kotlin enum compatibility. | Open |
| Avatar | C2 | Fix token typo: `main/avatar/brand/intials` → `main/avatar/brand/initials`. | Open |
| Avatar | C3 | Bind border-radius to a shared `radius/radius-round` token (or use 50%) instead of hardcoded per-size values. Tokenize border-width scale. | Open |
| Avatar | C6 | Replace raster backgrounds on 5 initials variants (dark 40px/64px, light 40px/64px/90px) with simple vector circles using `brand/bg` or `default/bg` token fills. | Open |
| Avatar | C7 | Create native component files and register Code Connect mappings via the Figma Code Connect CLI. | Open |
| Checkbox | C6 | Rebuild checked variants with a separable **vector checkmark icon** as a child component instance inside the container. Remove the flattened boolean operation. The checkmark must be independently tintable via the `selected/icon-check` token. | Open |
| Checkbox | C5 | Add **disabled**, **pressed**, **focused**, **indeterminate**, and **error** state variants across all 3 sizes. Define corresponding color tokens for each state. | Open |
| Checkbox | C2 | Convert `isChecked=Yes/No` to `isChecked=true/false`. Add `indeterminate` boolean property. | Open |
| Checkbox | C7 | Create native component files and register Code Connect mappings via the Figma Code Connect CLI. | Open |
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
