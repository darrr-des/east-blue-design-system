# CLAUDE.md — GCash Design System Assessment

Project rules and context for Claude Code sessions.

---

## Project Overview

This is a **component assessment report** for the GCash Design System. It evaluates Figma components across two dimensions: **DS Health** (structure/quality) and **Native Mobile Readiness** (SwiftUI + Jetpack Compose handoff). The output is a static HTML site hosted on GitHub Pages.

---

## Repository Structure

```
gcash-design-system/
├── report.html                    ← Built output (do not edit directly)
├── styles.css                     ← Built output (minified from assessment-src/styles.css)
├── gcash-ds-assessment-guide.md   ← Assessment methodology + auto-synced progress tables
├── gcash-ds-assessment-guide.html ← Standalone guide page (fully inlined CSS, edit directly)
├── CLAUDE.md                      ← This file
└── assessment-src/
    ├── shell.html                 ← Shared layout: sidebar, cover, criteria, JS
    ├── styles.css                 ← Source CSS (unminified) — edit this, not root styles.css
    ├── build.js                   ← Build script: assembles report.html + minifies CSS
    ├── sync-guide.js              ← Auto-updates gcash-ds-assessment-guide.md from component metadata
    └── components/
        ├── accordion.html         ← One file per assessed component
        ├── button.html
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

Rate each using one of four levels:

| Rating | CSS Class | Meaning |
|---|---|---|
| **Pass** | `pass` | Fully met — ready for native handoff |
| **Partial** | `partial` | Mostly met with minor gaps — functional but has specific limitations |
| **Warn** | `warn` | Significant concerns that limit reuse or block native handoff |
| **Fail** | `fail` | Broken — blocks DS inclusion or native implementation |

| Trait | What to check |
|---|---|
| Reusable | Works across multiple contexts — not tied to one screen |
| Self-contained | Carries its own styles, states, and logic |
| Consistent | Predictable naming, property types, state coverage |
| Composable | Nests inside other components, fits hierarchy |

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

### Badge Classes

| Class | Meaning |
|---|---|
| `badge-ready` | Ready / Pass |
| `badge-refine` | Needs Refinement |
| `badge-rework` | Requires Rework |
| `badge-na` | N/A |
| `badge-fix` | Fixed |
| `badge-empty` | Not Mapped |

---

## CSS Rules

- **Source CSS**: Edit `assessment-src/styles.css` only. The root `styles.css` is generated.
- **`gcash-ds-assessment-guide.html`**: Has fully inlined CSS. Changes to `assessment-src/styles.css` do NOT propagate — edit its `<style>` block directly.
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

## Assessment Workflow

For each Figma component URL:

1. **`get_design_context`** — Primary tool. Returns code, screenshot, token usage, layer names
2. **`get_metadata`** — Node structure, variant counts, property names
3. **`get_variable_defs`** (optional) — Confirm token bindings, extract hex values
4. **Score** all 4 traits and 7 criteria
5. **Create** `assessment-src/components/[name].html` with all tagged blocks
6. **Update** `shell.html` cover meta (Components count, Open Issues count)
7. **Build**: `node assessment-src/build.js`
8. **Verify** in browser, then commit and push

---

## Figma MCP Tools

| Tool | When to use |
|---|---|
| `mcp__figma__get_design_context` | Primary — returns code + screenshot + tokens |
| `mcp__figma__get_metadata` | Structure overview, variant counting |
| `mcp__figma__get_screenshot` | Visual confirmation |
| `mcp__figma__get_variable_defs` | Token audit |
| `mcp__ClaudeTalkToFigma__*` | Direct Figma edits (rename layers, set properties, etc.) — requires plugin connection via `join_channel` |

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
- Commit generated files (`report.html`, `styles.css`, `gcash-ds-assessment-guide.md`) alongside source changes

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
| Accordion | `16870:9288` | 6 | Ready | Refine | C7 |
| Button | `17104:184842` | 30 | Refine | Refine | C2, C5, C7 |
| Checkbox | `17143:2464` | 6 | Rework | Rework | C2, C5, C6, C7 |
| Avatar | `17143:4488` | 21 | Fix | Refine | C2, C3, C6, C7 |
