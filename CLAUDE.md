# CLAUDE.md — GCash Design System Assessment

Project rules and context for Claude Code sessions.

**IMPORTANT: This is a read-only assessment rulebook. Do NOT edit Figma components — even if issues are found, only document them in the report. All fixes must be done manually by the design team.**

---

## Project Overview

This is a **component assessment report** for the GCash Design System. It evaluates Figma components across two dimensions: **DS Health** (structure/quality) and **Native Mobile Readiness** (SwiftUI + Jetpack Compose handoff). The output is a static HTML site hosted on GitHub Pages.

---

## Figma Rule — Read-Only

- **NEVER** modify Figma components, layers, properties, or tokens — not even to fix issues
- **NEVER** use any Figma tool that writes, renames, resizes, or edits nodes
- **ONLY** use read-only Figma tools to inspect and document:
  - `mcp__figma__get_design_context` — code + screenshot + tokens
  - `mcp__figma__get_metadata` — structure overview, variant counts
  - `mcp__figma__get_screenshot` — visual confirmation
  - `mcp__figma__get_variable_defs` — token audit
- If an issue is found (e.g. wrong layer name, missing state), **document it as an open issue in the report** — do not attempt to fix it in Figma

---

## Repository Structure

```
east-blue-design-system/
├── report.html                    ← Built output (do not edit directly)
├── styles.css                     ← Built output (minified from assessment-src/styles.css)
├── eb-ds-assessment-guide.md   ← Assessment methodology + auto-synced progress tables
├── eb-ds-assessment-guide.html ← Standalone guide page (fully inlined CSS, edit directly)
├── CLAUDE.md                      ← This file (read-only assessment rulebook)
└── assessment-src/
    ├── shell.html                 ← Shared layout: sidebar, cover, criteria, JS
    ├── styles.css                 ← Source CSS (unminified) — edit this, not root styles.css
    ├── build.js                   ← Build script: assembles report.html + minifies CSS
    ├── sync-guide.js              ← Auto-updates eb-ds-assessment-guide.md from component metadata
    └── components/
        ├── accordion.html         ← One file per assessed component
        ├── button.html
        ├── checkbox.html
        └── ...
```

---

## Build Process

```bash
node assessment-src/build.js
```

1. Reads `shell.html` as the scaffold
2. Reads every `.html` in `components/` (alphabetical order)
3. Extracts 4 tagged blocks from each file: `@nav`, `@summary-card`, `@summary-row`, `@section`
4. Injects into shell at placeholder comments (`@@NAV_ITEMS@@`, `@@SUMMARY_CARDS@@`, etc.)
5. Minifies HTML + CSS, writes `report.html` and `styles.css` to repo root
6. Calls `sync-guide.js` to update the assessment guide markdown

**Always run the build after editing any `assessment-src/` file.**

---

## Component File Structure

Each component file in `assessment-src/components/` must contain these tagged blocks:

### Required Blocks

| Block | Purpose |
|---|---|
| `<!--@meta-start-->` ... `<!--@meta-end-->` | Machine-readable metadata (status, node, verdicts, variants, platforms, open issues) |
| `<!--@patterns-start-->` ... `<!--@patterns-end-->` | New anti-patterns discovered, format: `[C#] description` |
| `<!--@nav-start-->` ... `<!--@nav-end-->` | Sidebar nav button with SVG thumbnail |
| `<!--@summary-card-start-->` ... `<!--@summary-card-end-->` | Overview page summary card |
| `<!--@summary-row-start-->` ... `<!--@summary-row-end-->` | Summary table row |
| `<!--@section-start-->` ... `<!--@section-end-->` | Full assessment panel (tabs, traits, criteria, tokens, etc.) |

### Meta Block Fields

```
status: assessed | in-progress | re-assessing
node: [Figma nodeId, e.g. 16870:9288]
ds-verdict: keep | fix | refine | restructure | consolidate | product-layer | remove
native-status: ready | refine | rework | na
variants: [count]
ios: [native primitive]
android: [native primitive]
open-issues: [comma-separated criterion IDs, or "none"]
```

---

## Assessment Framework

### DS Health — 4 Traits

| Trait | What to check |
|---|---|
| Reusable | Works across multiple contexts — not tied to one screen |
| Self-contained | Carries its own styles, states, and logic |
| Consistent | Predictable naming, property types, state coverage |
| Composable | Nests inside other components, fits hierarchy |

### Trait Ratings (per-trait scores)

| Rating | CSS Class | Color | When to use |
|---|---|---|---|
| **Pass** | `pass` | Green | Fully met — ready for native handoff |
| **Partial** | `partial` | Blue | Mostly met with minor gaps (e.g. missing icon slots, but text variants work) |
| **Warn** | `warn` | Orange | Significant concerns that limit reuse or block handoff (e.g. naming issues, raster assets, hardcoded values) |
| **Fail** | `fail` | Red | Broken — blocks DS inclusion or native implementation (e.g. flattened icons, no separable layers) |

### DS Verdicts (overall DS Health outcome from all 4 traits)

| Verdict | Meaning |
|---|---|
| **Keep** | All 4 traits pass. Ship as-is. |
| **Fix** | Belongs in DS but has specific issues. Mostly pass/partial with a few warn. |
| **Restructure** | Needs significant property or architectural changes. Multiple warn/fail. |
| **Consolidate** | Merge into another component. |
| **Product Layer** | Too feature-specific for core DS. |
| **Remove** | Redundant, deprecated, or not a DS concern. |

### Native Readiness — 7 Criteria (C1–C7)

| ID | Criterion | Key checks |
|---|---|---|
| C1 | Layer Structure & Naming | Semantic names, no `Frame 42` or `Group 7` |
| C2 | Variant & Property Naming | Booleans as `true/false`, clean enums |
| C3 | Token Coverage | All values bound to design tokens |
| C4 | Native Mappability | Maps to native primitives, no web-only patterns |
| C5 | Interaction State Coverage | Default, pressed, focused, disabled states |
| C6 | Asset & Icon Quality | Vector instances, token-based coloring |
| C7 | Code Connect Linkability | Clean property names, 1:1 native param mapping |

### Native Status Levels (overall native readiness from C1–C7)

| Status | Badge Class | Meaning |
|---|---|---|
| **Ready** | `badge-ready` | Linkable as-is. Clean structure, maps well to native. |
| **Needs Refinement** | `badge-refine` | Minor issues to resolve before linking. |
| **Requires Rework** | `badge-rework` | Needs redesign before native translation. |
| **Not Applicable** | `badge-na` | Web-only or removed — skip native assessment. |
| **Fix** | `badge-fix` | Resolved via Figma. Residual items may remain. |
| **Not Mapped** | `badge-empty` | No Code Connect mappings registered. |

---

## CSS Rules

- **Source CSS**: Edit `assessment-src/styles.css` only. The root `styles.css` is generated.
- **`eb-ds-assessment-guide.html`**: Has fully inlined CSS. Changes to `assessment-src/styles.css` do NOT propagate — edit its `<style>` block directly.
- CSS custom properties are defined in `:root` (light) and `[data-theme="dark"]` (dark mode).
- The tab pill indicator uses `::before` with CSS custom properties `--pill-left` and `--pill-width`, animated via `transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1), width 0.28s cubic-bezier(0.4, 0, 0.2, 1)`.
- **Do not add `.comp-tabs::before` to the shared theme transition block** — it will override the pill animation.

---

## HTML/CSS Conventions

- No inline `style=` attributes — use CSS classes
- Badge sizes are normalized: `font-size: 12px; font-weight: 600; padding: 2px 8px; border-radius: 999px`
- Table header color is neutral dark (`--thead-fg: #3C4A5C` light / `#C8CDD5` dark), not blue
- Nav thumbnails use `width="36" height="36" viewBox="0 0 32 32"` for optical alignment with text
- Nav component items use `.nav-comp-body > .nav-comp-name` structure
- Inactive `.nav-comp-name` color matches `.nav-item`: `#666666`
- Use `resolved-list` for resolved issues, not individual `infobox-resolved` blocks
- Section headings: plain text, no `A./B./C.` prefixes
- Interaction States table omits N/A rows — use `table-footnote` if needed
- Keep copy concise and direct

---

## Assessment Workflow (Read-Only)

For each Figma component URL:

1. **`get_design_context`** — Primary tool. Returns code, screenshot, token usage, layer names
2. **`get_metadata`** — Node structure, variant counts, property names
3. **`get_variable_defs`** (optional) — Confirm token bindings, extract hex values
4. **Score** all 4 traits and 7 criteria
5. **Document all issues as open items** — do NOT fix them in Figma
6. **Create** `assessment-src/components/[name].html` with all tagged blocks
7. **Update** `shell.html` cover meta (Components count, Open Issues count)
8. **Build**: `node assessment-src/build.js`
9. **Verify** in browser, then commit and push

---

## Figma MCP Tools (Read-Only)

| Tool | When to use |
|---|---|
| `mcp__figma__get_design_context` | Primary — returns code + screenshot + tokens |
| `mcp__figma__get_metadata` | Structure overview, variant counting |
| `mcp__figma__get_screenshot` | Visual confirmation |
| `mcp__figma__get_variable_defs` | Token audit |

**All Figma write/edit operations are off-limits. Only use the read-only tools listed above.**

### URL Parsing

```
figma.com/design/:fileKey/:fileName?node-id=:nodeId
→ fileKey = :fileKey, nodeId = convert "-" to ":" in :nodeId
```

### Figma File

- **File**: GCash DS — Sticker Sheets v2
- **Key**: `HwWDwPit2xJjDH4zszOZ5o`

---

## Git & Deploy

- Branch: `main`
- Deploy: GitHub Pages (static, no framework)
- `.nojekyll` file present to skip Jekyll processing
- Always run `node assessment-src/build.js` before committing
- Commit generated files (`report.html`, `styles.css`, `eb-ds-assessment-guide.md`) alongside source changes

---

## Known Patterns (Do Not Flag)

- Semantic color token naming: `main/{component}/color/{state}/{role}`
- `space/space-*` tokens are consistent across components
- Chevron icons are confirmed vector instances
- Custom fonts (Proxima Soft, BarkAda) — flag once per session as a standing action item

---

## Assessed Components

| Component | Node | Variants | DS | Native | Open |
|---|---|---|---|---|---|
| Accordion | `16870:9288` | 6 | Keep | Refine | C7 |
| Avatar | `17143:4488` | 21 | Keep | Refine | C7 |
| Button | `17104:184842` | 60 | Keep | Refine | C7 |
| Checkbox | `17143:2464` | 33 | Keep | Refine | C7 |
| **Form Elements** | | | | | |
| Input Field | `17758:3687` | 8 | Keep | Refine | C7 |
| Labeled Field | `17758:3713` | 8 | Keep | Refine | C7 |
| Select Field | `17758:3786` | 8 | Keep | Refine | C7 |
| Recipient Field | `17758:3867` | 8 | Keep | Refine | C7 |

---

## Code Snippet Conventions

Component documentation has two places where SwiftUI/Compose code appears. Each serves a different audience and must use the correct code style.

### Style Tab — Per-Appearance Snippets

Show **component API usage** — the code a developer writes to USE the component. Short, focused on the specific appearance being documented.
```
// ✅ CORRECT — component API
EBButton("Save Changes")
    .ebAppearance(.filled)
    .controlSize(.large)

// ❌ WRONG — Figma Dev Mode container code
HStack(alignment: .center, spacing: Constants.spaceSpace0) { ... }
    .padding(Constants.spaceSpace16)
    .background(Constants.mainButtonPrimaryBrandEnabledBg)
    .cornerRadius(Constants.radiusRadiusPill)
```

Do not use Figma Dev Mode auto-generated code (HStack, padding, background, cornerRadius) in documentation snippets. That code describes how to DRAW the container — not how to USE the component. Developers consuming the DS never write container code; they call the component API.

### Code Tab — Full Reference

Shows the complete developer reference: installation, import, property mapping table (Figma → SwiftUI → Compose), usage snippets for ALL appearances, size mode mapping, accessibility requirements, and usage guidelines (do's/don'ts).

### Naming Pattern

Component API names follow the pattern `EB{ComponentName}`:
- `EBButton` / `EBOutlinedButton` / `EBTextButton`
- `EBAccordion`
- `EBAvatar`
- `EBCheckbox`

### Variant Mapping Pattern

| Figma Concept | SwiftUI Pattern | Compose Pattern |
|---|---|---|
| Appearance (enum) | `.ebAppearance(.filled)` modifier | Separate composable: `EBButton` / `EBOutlinedButton` / `EBTextButton` |
| Variant=Destructive | `role: .destructive` parameter | `colors = EBButtonDefaults.destructiveColors()` |
| Size modes | `.controlSize(.large / .regular / .small / .compact / .mini)` | `size = EBButtonSize.Large / Medium / Small / Compact / XSmall` |
| Boolean slots | Optional parameter: `leadingIcon: Image?` | Composable slot: `leadingIcon = { Icon(…) }` |
| Disabled state | `.disabled(true)` modifier | `enabled = false` parameter |

### Planned API Badge

If native components are not yet implemented, mark all code snippets with a `badge-planned` badge labeled "Planned API". This signals to developers that the API shape is final but the package is not yet published.

---

## Mobile Documentation Criteria — 9-Point Assessment

Use this checklist to evaluate every component's documentation before presenting to the user. Score each criterion as Pass, Partial, or Fail. Target: 9/9.

### Must-Haves (1–5)

| # | Criterion | Pass | Partial | Fail |
|---|---|---|---|---|
| 1 | **Live preview / playground** | Interactive preview with all property controls that update visually | Preview exists but missing controls for some properties | No interactive preview or static screenshot only |
| 2 | **Native install / import** | SPM URL + Gradle dependency + import statements. "Planned API" badge if unpublished | Only one platform shown | No install or import instructions |
| 3 | **SwiftUI & Compose code snippets** | All styles have SwiftUI + Compose snippets with Copy button. Must show component API (`EBButton("Label")`) — NOT container code (`HStack.padding.background`) | Some styles have snippets, others show placeholders | All blocks show `// Loading...` or container code |
| 4 | **Props / API table (native)** | Prominent table mapping every Figma property → SwiftUI + Compose equivalent | Table exists but buried or incomplete | No mapping table |
| 5 | **Variants & states (with code)** | Every style section in Style tab has SwiftUI/Compose component API snippet | Code tab has snippets but Style tab still shows placeholder text | No code paired with visual variants |

### Good-to-Haves (6–9)

| # | Criterion | Pass | Partial | Fail |
|---|---|---|---|---|
| 6 | **Native platform notes** | Accessibility table with iOS + Android columns (touch targets, focus rings, icon-only labels, destructive role, loading state) | Some notes but not structured or single-platform only | No platform-specific guidance |
| 7 | **Design token connection** | Each style/appearance shows token name + hex value + state (enabled/pressed/disabled). Per-mode color specs documented | Token names visible but hex breakdowns or per-mode specs missing | Only hex values with no token names |
| 8 | **Changelog / version history** | Semantic versioning, entries tied to C1–C7, status badges, Figma node IDs | History exists but no criterion linking | No changelog |
| 9 | **Figma ↔ code mapping** | Property mapping table matches current architecture, suggested file paths shown, Code Connect readiness table present | Mapping exists but references outdated architecture | No Code Connect mapping |

### Scoring Scale

| Score | Rating |
|---|---|
| 9/9 | Excellent — exceeds all top DS benchmarks |
| 7–8/9 | Strong — on par with Google Material 3 |
| 5–6/9 | Acceptable — gaps need addressing |
| 3–4/9 | Weak — significant documentation gaps |
| 0–2/9 | Not ready — fundamental sections missing |

### Stale Content Check

After any component restructure (variant count change, property renaming, architecture change), verify ALL of these reflect the current architecture:

- Verdict summary (variant count, property names)
- Interactive playground controls (match current properties)
- Style tab per-style code snippets (match current API)
- Code tab property mapping table (match current Figma properties)
- Code tab usage snippets (match current API)
- Criteria Scorecard notes (match current variant count and property names)
- Code Connect property mapping (match current architecture)
- Variants Inventory table (match current variant count and schema)
- Behavior table (match current states and properties)

If ANY section references an old architecture (wrong variant count, old property names, deprecated properties), mark it as stale and update before presenting.

### Workflow

1. After completing or updating any component documentation, run through all 9 criteria
2. Score each as Pass / Partial / Fail
3. Run the Stale Content Check if the component was restructured
4. Fix any Partial or Fail items before presenting
5. Report the final score (e.g. "Button: 7.5/9 — criteria #5 partial, #7 partial")

---

## Style Tab Spec Card Conventions

The Button component's spec card is the baseline. Every component's Style tab spec cards must follow this structure.

### Card Anatomy (top to bottom)

1. **Header**: Style name · Node ID · DES/DEV toggle
2. **Description**: One-line summary of the style's purpose
3. **Interactive preview**: Component rendering with property controls on the right (dropdowns, toggles)
4. **Properties + Colors** (two-column row):
   - Left: PROPERTIES — current values of all Figma properties for this style
   - Right: COLORS — grouped by role, showing hex swatch + value for all states (Default/Pressed/Disabled), with full semantic token path below each hex value
5. **Layout + Typography** (two-column row):
   - Left: LAYOUT — all relevant dimension values (height, padding, radius, border, icon sizes)
   - Right: TYPOGRAPHY — DS text style reference name first, then individual font properties (font, size, tracking, line-height)

### Colors Section Rules

- Group by color role (bg, label, border, icon), not by state
- Show all states inline per role: Default value, Pressed value, Disabled value
- Each hex value must have a color swatch dot and the full semantic token path below it
- Format: `■ #005CE5` then below it `main/button/primary/brand/enabled/bg`
- If a role doesn't change across states (e.g. border), show one value with token path
- If the component has appearance modes, the Colors section updates dynamically when the mode dropdown changes

### Typography Section Rules

- First row: DS text style reference name (e.g. `Primary/Label/Large`) — this is the Figma text style bound to the text layer
- Following rows: individual properties (Font, Size, Tracking, Line-height)
- If the component has multiple text layers (e.g. Accordion has Label + Description), show a subsection per text layer, each with its own DS text style reference

### Layout Section Rules

- Show all relevant dimensions — don't truncate to match simpler components
- Include: height, width (if not fill), padding H/V, corner radius, border, icon sizes, slot dimensions
- Values match the current property selection in the interactive preview

---

## Color Table Conventions

Every component's Style tab must have a color reference table showing that all colors are bound to design tokens from the component variable collection. The table title and structure depend on whether the component uses appearance modes.

**Note: This convention is provisional.** It is based on the Button and Accordion assessments only. As more components are assessed, new patterns may emerge (e.g. components with nested variable collections, multi-layer token resolution, or hybrid mode/state structures) that require updates to this convention. Treat this as the current best practice, not a locked standard.

### Components WITHOUT appearance modes (e.g. Accordion)

Title: **"Colors by State"**

| ROLE | TOKEN | DEFAULT | PRESSED | DISABLED |
|---|---|---|---|---|
| Header bg | surface/default | #FFFFFF | – | – |
| Label | text/primary | #0A2757 | #0A2757 | – |

- No MODE column — the component has no variable modes
- TOKEN column shows the short token name inline per row
- List ALL color roles exhaustively
- Use "–" for non-applicable state/role combinations

### Components WITH appearance modes (e.g. Button)

Title: **"Colors by Appearance Mode"**

| MODE | ROLE | TOKEN | DEFAULT | PRESSED | DISABLED |
|---|---|---|---|---|---|
| Default | bg | primary/brand/{state}/bg | #005CE5 | #2340A9 | #9BC5FD |
| Default | label | primary/brand/{state}/label | #FFFFFF | #FFFFFF | #FFFFFF |
| Destructive | bg | primary/destructive/{state}/bg | #D81E1E | #B01818 | #F5A3A3 |

- MODE as the first column — one group per variable mode
- TOKEN column shows the short token name inline per row
- Group rows by mode: all Default roles first, then Destructive, then White, then Subtle
- List ALL color roles per mode exhaustively

### Rules for both formats

- TOKEN column is mandatory — every hex value must have its token name inline in the same row
- Do NOT put token names as badge pills at the bottom of the table — they belong inline per row
- Use "DEFAULT" not "ENABLED" for the default state column — matches Figma's State=Default
- Use "–" for non-applicable state/role combinations
- Every color the dev needs to implement must appear in the table — bg, label, border, icon, chevron, description, etc.
- The table proves that all colors are bound to design tokens from the component variable collection — no hardcoded values
