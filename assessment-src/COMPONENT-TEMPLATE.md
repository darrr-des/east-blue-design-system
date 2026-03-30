# Component Assessment Template

Use this template when adding a new component to the assessment report.
Copy the structure below into a new `assessment-src/components/{name}.html` file.

---

## Required Tagged Blocks

Every component file must contain these 6 blocks in order:

```
<!--@meta-start-->  ...  <!--@meta-end-->
<!--@patterns-start-->  ...  <!--@patterns-end-->
<!--@nav-start-->  ...  <!--@nav-end-->
<!--@summary-card-start-->  ...  <!--@summary-card-end-->
<!--@summary-row-start-->  ...  <!--@summary-row-end-->
<!--@section-start-->  ...  <!--@section-end-->
```

---

## Meta Block

```
<!--@meta-start-->
status: assessed
node: {figma-node-id}
ds-verdict: keep | fix | refine | restructure
native-status: ready | refine | rework | na
variants: {count}
ios: {native primitive}
android: {native primitive}
open-issues: C7
<!--@meta-end-->
```

---

## Tab Structure

### Tab 1: Overview

Section order (top to bottom):

| # | Section | ID Pattern | Required | Notes |
|---|---------|------------|----------|-------|
| 1 | In Context | `{prefix}-context` | Yes | Placeholder SVG or real screenshot showing component in app context |
| 2 | Live Preview | `{prefix}-preview` | Yes | Interactive demo with property controls (dropdowns, toggles) |
| 3 | DS Health | `{prefix}-health` | Yes | 4 trait cards: Reusable, Self-contained, Consistent, Composable |
| 4 | Behavior | `{prefix}-behavior` | Yes | Table: State x iOS x Android x Figma Property x Notes |
| 5 | Resolved Issues | `{prefix}-resolved` | Yes | `<ul class="resolved-list">` with `<span class="tag-fixed">` badges |
| 6 | Open Issues | `{prefix}-open` | Yes | `<ul class="resolved-list">` (same class, different content) |
| 7 | Design Recommendations | `{prefix}-recommend` | Yes | `<ul class="recommend-list">` with `<span class="tag-recommend">` badges |

**Conditional elements:**
- **Verdict box** — visible when structural issues remain (non-C7 open issues). Remove the header badge, nav dot color, and verdict-inline box when only C7 remains.
- **Component link** — always present in `comp-name`, linking to the Figma component URL.

### Tab 2: Style

Section order per spec card (repeat for each style/type/state):

| # | Section | Required | Notes |
|---|---------|----------|-------|
| 1 | Header | Yes | Style name + Node ID copy button + DES/DEV toggle |
| 2 | Description | Yes | One-line summary of the style's purpose |
| 3 | **Interactive preview** | **MANDATORY** | `demo-layout` with `spec-card-preview` SVG + `demo-figma-panel` property controls. **Never skip this — every spec card must have a visual preview.** |
| 4 | Properties + Colors | Yes | Two-column: properties left, color table right |
| 5 | Layout + Typography | Yes | Two-column: layout specs left, typography right |
| 6 | Code snippet | Yes | SwiftUI/Compose toggle with component API usage |

**Spec card preview HTML pattern (MANDATORY for every spec card):**
```html
<div class="demo-layout">
  <div class="spec-card-preview" id="{prefix}-{state}-preview"><!-- filled by JS --></div>
  <div class="demo-figma-panel">
    <div class="demo-panel-section">
      <div class="demo-panel-heading">Properties</div>
      <div class="demo-panel-row">
        <span class="demo-panel-label">State</span>
        <span class="demo-panel-value">{State Name}</span>
      </div>
      <div class="demo-panel-row">
        <span class="demo-panel-label">{property}</span>
        <select class="demo-panel-select" onchange="update{Component}SpecCard('{state}', this.value)">
          <option value="...">...</option>
        </select>
      </div>
    </div>
  </div>
</div>
```

**JS pattern for spec card init (MANDATORY):**
```javascript
function update{Component}SpecCard(state, value) {
  var el = document.getElementById('{prefix}-' + state.toLowerCase() + '-preview');
  if (el) el.innerHTML = _{prefix}BuildSvg(state, value);
}
function _{prefix}InitSpecCards() {
  // Call for each state
  update{Component}SpecCard('default', '{defaultValue}');
  update{Component}SpecCard('active', '{defaultValue}');
  // ... etc
}
// Add _{prefix}InitSpecCards() to _{prefix}Init()
```

After all spec cards:

| # | Section | Notes |
|---|---------|-------|
| 7 | Colors Reference Table | Full color table — format depends on whether component uses appearance modes |

**Colors table format:**
- Without modes: `ROLE | TOKEN | DEFAULT | PRESSED | DISABLED`
- With modes: `MODE | ROLE | TOKEN | DEFAULT | PRESSED | DISABLED`
- Display-only (no states): `ROLE | TOKEN | VALUE`

### Tab 3: Code

Section order (top to bottom):

| # | Section | ID Pattern | Notes |
|---|---------|------------|-------|
| 1 | Installation | `{prefix}-install` | SPM + Gradle + imports. Add `badge-planned` if unpublished |
| 2 | Property Mapping | `{prefix}-props` | Table: Figma Property → SwiftUI → Compose → Notes |
| 3 | Usage Snippets | `{prefix}-snippets` | Grouped by style/variant. SwiftUI/Compose toggle + Copy button |
| 4 | Accessibility | `{prefix}-a11y` | Table: Requirement × iOS × Android |
| 5 | Usage Guidelines | `{prefix}-guidelines` | Do/Don't pairs in `guideline-row` divs |
| 6 | Criteria Scorecard | `{prefix}-criteria` | C1-C7 table with status badges and notes |
| 7 | Code Connect | `{prefix}-cc` | Aspect-by-aspect readiness table |
| 8 | Variants Inventory | `{prefix}-variants` | Full table with variant dimensions and node IDs |

### Tab 4: Changelog

Structure (repeat per version, newest first):

```html
<div class="sub-heading">{version} — {month year} <span class="tab-version-badge {type}">{Type}</span></div>
<div class="changelog">
  <div class="changelog-header">{description} · node {nodeId}</div>
  <div class="changelog-row">
    <div class="changelog-body">
      <strong>{summary}</strong> — {details}
      <span class="tag-fixed">{status}</span>
    </div>
    <span class="changelog-delta delta-resolved">{criterion} {status}</span>
  </div>
</div>
```

Version badge types: `major` | `minor` | `patch` | `re-assessment` | `initial`

---

## Naming Conventions

### ID Prefixes

Each component uses a short prefix for all HTML IDs:

| Component | Prefix | Example |
|-----------|--------|---------|
| Accordion | `acc` | `acc-context`, `acc-health`, `acc-preview` |
| Button | `btn` | `btn-context`, `btn-health`, `btn-preview` |
| Checkbox | `cb` | `cb-context`, `cb-health`, `cb-preview` |
| Avatar | `ava` | `ava-context`, `ava-health`, `ava-preview` |
| Input Field | `inf` | `inf-context`, `inf-health`, `inf-preview` |
| Labeled Field | `lf` | `lf-context`, `lf-health`, `lf-preview` |
| Select Field | `sf` | `sf-context`, `sf-health`, `sf-preview` |
| Recipient Field | `rf` | `rf-context`, `rf-health`, `rf-preview` |

### Component API Names

Follow the `EB{ComponentName}` pattern:
- `EBButton`, `EBOutlinedButton`, `EBTextButton`
- `EBAccordion`
- `EBCheckbox`
- `EBAvatar`
- `EBInputField`
- `EBLabeledField`
- `EBSelectField`
- `EBRecipientField`

### File Paths (Planned)

```
ios/Components/{Name}/EB{Name}.swift
android/components/{name}/EB{Name}.kt
```

### Nav Groups

Some sub-components belong to a logical group (e.g. Input Field, Labeled Field, Select Field, and Recipient Field all belong to the "Form Elements" group). To declare this in a component file, wrap the group name in a `@nav-group` tag inside the `@nav` block:

```
<!--@nav-group-start-->Form Elements<!--@nav-group-end-->
```

When the build script encounters this tag, it groups the component under a shared heading in the sidebar navigation. Components without a `@nav-group` tag appear as standalone entries.

Each sub-component still has its own file (`input-field.html`, `labeled-field.html`, etc.) with all 6 required tagged blocks. The nav group tag is the only addition — everything else follows the standard component template.

---

## CSS Classes Reference

### Badges
- `badge-ready` — green, "Ready" / "Keep"
- `badge-refine` — amber, "Needs Refinement"
- `badge-rework` — red, "Requires Rework"
- `badge-fix` — amber, "Fix"
- `badge-planned` — gray, "Planned API"
- `badge-na` — gray, "N/A"

### Trait Cards
- `trait-card pass` — green
- `trait-card partial` — blue
- `trait-card warn` — amber
- `trait-card fail` — red

### Lists
- `resolved-list` — green checkmark prefix (resolved + open issues)
- `recommend-list` — blue arrow prefix (design recommendations)

### Tags
- `tag-fixed` — inline resolved badge (e.g. "C2 Fixed")
- `tag-recommend` — inline recommendation badge (e.g. "Suggested", "New Component", "Created")
- `tag-open` — inline open issue badge

---

## Checklist Before Submitting

- [ ] All 6 tagged blocks present
- [ ] Meta block fields complete
- [ ] All 4 tabs populated
- [ ] Overview: all 7 sections present (In Context → Design Recommendations)
- [ ] Style: EVERY spec card has interactive preview (demo-layout + spec-card-preview + demo-figma-panel)
- [ ] Style: spec cards have all 6 subsections + colors reference table
- [ ] Code: all 8 sections present (Installation → Variants Inventory)
- [ ] Changelog: at least 1.0.0 initial entry
- [ ] First section heading has `style="margin-top:0"`
- [ ] Component link in `comp-name` with correct Figma URL
- [ ] DS Health heading is just "DS Health" (no suffix)
- [ ] Code Connect heading is just "Code Connect" (no suffix)
- [ ] JS functions use component-specific namespace (`_{prefix}*`)
- [ ] Build succeeds: `node assessment-src/build.js`
