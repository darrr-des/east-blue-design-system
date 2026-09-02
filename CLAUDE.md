# CLAUDE.md — East Blue Design System

Project rules and context for Claude Code sessions.

---

## Project Overview

East Blue is a **component assessment platform** for the GCash Design System. It evaluates Figma components across two dimensions:

- **DS Health** — structure, naming, reusability, consistency
- **Native Mobile Readiness** — SwiftUI + Jetpack Compose handoff readiness

The output is a **static Astro site** plus a **standalone Google OAuth backend** (`frost-auth`) that gates access. Both live in this monorepo.

Live: https://eb-ds.frostdesigngroup.com/

---

## Rule Zero — Follow the Figma component

**Document what Figma says. Never invent a value, a style, or a design.**

Every specification on a component page — alignment, padding, height, width, radius, gap, colour, font family, font weight, text style, variant name — is **read off the Figma component and reproduced exactly**. This applies to the spec rows, the colour tables, the code snippets, and the rendered preview alike.

You may not:

- **Derive what you could read.** Compute alignment from bounding boxes when the Figma panel states it.
- **Translate Figma's answer.** Write `360` when the panel says `Fill`.
- **Answer a different question.** Record the text-stack gap when the row asks for the container's gap.
- **Let the site's own styling stand in.** Render a preview in the documentation font instead of the component's `Proxima Soft` / `BarkAda`.
- **Substitute a plausible value** for one you could not read.

If a value cannot be read with the tools available, it is **not yours to guess** — leave it, and report it as Missing with the reason. A blank the designer fills in costs one message; a plausible wrong number ships to developers and is trusted.

The preview must match the component. Check it against `export_node_as_image`, not against the layer tree — a layer that exists is not necessarily drawn.

---

## Review Commands — trigger phrases

When the user types one of these phrases, open the matching guide and follow it exactly. Each guide runs in four phases: **intake → baseline → update → `Validate`**. The reviewer types `Validate` to start the validation pass, which reports every check as **Done / Partial / Missing / Broken** and never edits content.

| Trigger | Guide | Scope |
|---|---|---|
| `Component Review` | [Review Mds/OVERVIEW-REVIEW-GUIDE.md](Review%20Mds/OVERVIEW-REVIEW-GUIDE.md) | Overview tab — issues, recommendations, DS Health |
| `Style Review` | [Review Mds/STYLE-REVIEW-GUIDE.md](Review%20Mds/STYLE-REVIEW-GUIDE.md) | Style tab — spec cards, demo panel, four spec sections, colors table, DEV code |
| `Code Review` / `Code Tab Review` | [Review Mds/CODE-REVIEW-GUIDE.md](Review%20Mds/CODE-REVIEW-GUIDE.md) | Code tab — installation through variants inventory |
| `Changelog Review` | [Review Mds/CHANGELOG-REVIEW-GUIDE.md](Review%20Mds/CHANGELOG-REVIEW-GUIDE.md) | Changelog tab — the audit trail |

All four live in the **`Review Mds/`** folder. Shared setup, house rules, maintainer pre-work, field map, and the current gap worklist: [Review Mds/README.md](Review%20Mds/README.md).

- One component per run, one tab per run.
- `Code Review` is a plain-text trigger for the component's Code tab — not the built-in `/code-review` diff review. When ambiguous, ask.
- Full pass order: `Style Review` → `Code Review` → `Changelog Review`.

---

## Figma Rule — Read-Only

- **NEVER** modify Figma components, layers, properties, or tokens — not even to fix issues
- **NEVER** use any Figma tool that writes, renames, resizes, or edits nodes
- **ONLY** use read-only Figma tools to inspect and document:
  - `mcp__figma__get_design_context` — code + screenshot + tokens
  - `mcp__figma__get_metadata` — structure overview, variant counts
  - `mcp__figma__get_screenshot` — visual confirmation
  - `mcp__figma__get_variable_defs` — token audit
- If an issue is found (e.g. wrong layer name, missing state), **document it as an open issue in the component data** — do not attempt to fix it in Figma

---

## Repository Structure

```
east-blue-design-system/
├── astro-site/                       Static documentation site (Astro)
│   ├── src/
│   │   ├── pages/                    File-based routes
│   │   │   ├── index.astro           /                 (Overview / home)
│   │   │   ├── login.astro           /login            (Google sign-in)
│   │   │   ├── eb-ds-assessment-guide.astro
│   │   │   └── components/
│   │   │       ├── index.astro       /components       (grid)
│   │   │       └── [slug].astro      /components/<slug>
│   │   ├── components/               Astro components (Sidebar, AuthGate, SpecCard, …)
│   │   ├── layouts/                  Base (sidebar) + Standalone (login only)
│   │   ├── lib/auth.ts               Frontend auth client
│   │   ├── data/
│   │   │   ├── types.ts              ComponentData TypeScript schema
│   │   │   └── components/
│   │   │       ├── _index.ts         Manifest (auto-generated)
│   │   │       └── <slug>.ts         One per component (78 + cardless)
│   │   └── styles/global.css         Single stylesheet (light + dark)
│   ├── public/
│   │   ├── fonts/                    BarkAda + HeyMeow Rnd (variable WOFF/WOFF2)
│   │   ├── assets/                   Component preview images, demo PNGs
│   │   └── scripts/
│   │       ├── assessment.js         Shared client-side behavior
│   │       └── demos/<slug>.js       Per-component live preview JS
│   ├── scripts/
│   │   ├── audit/                    Coverage reports (run anytime)
│   │   ├── fills/                    Historical one-shot data fillers
│   │   └── utils/                    Reusable utilities
│   ├── astro.config.mjs
│   └── package.json
│
├── auth-backend/                     Standalone auth service (frost-auth)
│   ├── src/
│   │   ├── server.js                 Express app + boot
│   │   ├── auth.js                   POST /auth/google · GET /auth/me · POST /auth/logout
│   │   ├── middleware.js             JWT verification
│   │   └── google.js                 Google ID token verification + email allowlist
│   ├── .env.example
│   ├── README.md                     Setup + integration guide
│   └── package.json
│
├── Review Mds/                       Per-tab review command guides (trigger phrases above)
│   ├── README.md                     Shared setup, house rules, pre-work, field map, worklist
│   ├── OVERVIEW-REVIEW-GUIDE.md      `Component Review`
│   ├── STYLE-REVIEW-GUIDE.md         `Style Review`
│   ├── CODE-REVIEW-GUIDE.md          `Code Review`
│   └── CHANGELOG-REVIEW-GUIDE.md     `Changelog Review`
│
├── eb-ds-assessment-guide.md         Methodology — source of truth (rendered at /eb-ds-assessment-guide)
├── benchmark.html                    Component roster benchmark snapshot (legacy reference)
├── _archive_legacy_site/             Soft-archived legacy build (gitignored, local only)
├── CLAUDE.md                         This file
└── README.md                         Quick start
```

---

## Build Process

```bash
# Frontend
cd astro-site
npm install
npm run dev                           # → http://localhost:4321
npm run build                         # → astro-site/dist/

# Auth backend
cd auth-backend
npm install
npm run dev                           # → http://localhost:3001
```

Astro scans `src/pages/` and generates one HTML file per route. Component data is read at build time from `src/data/components/<slug>.ts` and rendered into per-component static pages via `[slug].astro`.

Run `node astro-site/scripts/audit/audit-progress.mjs` for live coverage stats.

---

## Component Data Structure

Each component lives in `astro-site/src/data/components/<slug>.ts` and exports a typed `ComponentData` object. The full schema is in `src/data/types.ts`.

### Top-level shape

```ts
export const button: ComponentData = {
  meta:      { slug, name, node, figmaUrl, description, badges, navGroup?, navIconSvg? },
  overview:  { inContextNote, livePreviewHtml, traits, behavior, resolved, open, recommendations },
  style:     { specCards, colorsTables? },
  code:      { installation, propertyMapping, usageSnippets, accessibility, usageGuidelines, scorecard, codeConnect, variants },
  changelog: [...]
};
```

### Meta — badge kinds

```
DSVerdict:    keep | fix | restructure | consolidate | product-layer | remove
NativeStatus: ready | refine | rework | na | fix | empty
```

### Authoring rules

- Touch only the `<slug>.ts` file — pages auto-rebuild via `[slug].astro`.
- Run the build after a data edit to verify no schema breakage.
- The audit script counts a component as **complete** when every spec card has the 4 required DES sections (Properties, Colors, Layout, Typography) AND non-empty SwiftUI + Compose snippets.
- Components with `dsVerdict ∈ {remove, consolidate, product-layer}` may be intentionally cardless — the audit treats them as complete.

---

## Authentication Architecture

A standalone Express service at `/auth-backend` issues JWTs after verifying Google ID tokens. The Astro site gates content via a small client-side AuthGate that hits `/auth/me` on every page load.

```
Browser                         /auth-backend                  Google
   │                                  │                            │
   │  GET / (any page)                │                            │
   ├─► AuthGate hides body ──────────►│                            │
   │                                  │ verify JWT (HS256)         │
   │  401 ──────────────────────────► /login                       │
   │                                  │                            │
   │  /login: GIS button click ──────────────────────────────────► │
   │                                  │  ID token (RS256)          │
   │  POST /auth/google ─────────────►│ verify with Google ◄───────┤
   │                                  │ check email allowlist      │
   │  ◄─ JWT (cookie + body) ─────────┤                            │
   │  redirect to /                   │                            │
```

**Session token (JWT) carries:** `googleId`, `email`, `name`, `picture`.

**Email-domain allowlist** is enforced server-side via `ALLOWED_DOMAINS` (`frostdesigngroup.com`, `gcash.com` by default).

**Frontend integration files:**
- `src/components/AuthGate.astro` — runs on every page
- `src/pages/login.astro` — Google Identity Services button
- `src/lib/auth.ts` — typed helpers
- Sidebar shows the signed-in user with a sign-out button

---

## Assessment Framework

### DS Health — 4 Traits

| Trait | What to check |
|---|---|
| Reusable | Works across multiple contexts — not tied to one screen |
| Self-contained | Carries its own styles, states, and logic |
| Consistent | Predictable naming, property types, state coverage |
| Composable | Nests inside other components, fits hierarchy |

### Trait Ratings

| Rating | CSS Class | When to use |
|---|---|---|
| **Pass** | `pass` | Fully met — ready for native handoff |
| **Partial** | `partial` | Mostly met with minor gaps |
| **Warn** | `warn` | Significant concerns that limit reuse or block handoff |
| **Fail** | `fail` | Broken — blocks DS inclusion or native implementation |

### DS Verdicts (overall outcome)

| Verdict | Meaning |
|---|---|
| **Keep** | All 4 traits pass. Ship as-is. |
| **Fix** | Belongs in DS but has specific issues. Mostly pass/partial with a few warn. |
| **Restructure** | Needs significant property or architectural changes. |
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

### Native Status Levels

| Status | Badge Class | Meaning |
|---|---|---|
| **Ready** | `badge-ready` | Linkable as-is. |
| **Needs Refinement** | `badge-refine` | Minor issues to resolve. |
| **Requires Rework** | `badge-rework` | Needs redesign. |
| **Not Applicable** | `badge-na` | Web-only or removed. |
| **Fix** | `badge-fix` | Resolved via Figma. |
| **Not Mapped** | `badge-empty` | No Code Connect mappings registered. |

---

## CSS Rules

- Source: edit `astro-site/src/styles/global.css` only — there is no separate generated stylesheet.
- CSS custom properties define light theme on `:root` and dark theme on `[data-theme="dark"]`.
- The tab pill indicator uses `::before` with `--pill-left` and `--pill-width`, animated via `transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1), width 0.28s cubic-bezier(0.4, 0, 0.2, 1)`.
- Do not add `.comp-tabs::before` to the shared theme transition block — it overrides the pill animation.

---

## HTML/CSS Conventions

- No inline `style=` attributes — use CSS classes (exception: `.ctx-placeholder` SVG patterns where the inline style is intrinsic to the placeholder).
- Badge sizes are normalized: `font-size: 12px; font-weight: 600; padding: 2px 8px; border-radius: 999px`.
- Table header color is neutral dark (`--thead-fg: #3C4A5C` light / `#C8CDD5` dark), not blue.
- Nav thumbnails use `width="36" height="36" viewBox="0 0 32 32"` for optical alignment with text.
- Use `resolved-list` for resolved issues, not individual `infobox-resolved` blocks.
- Section headings: plain text, no `A./B./C.` prefixes.
- Interaction States table omits N/A rows — use `table-footnote` if needed.
- Keep copy concise and direct.

---

## Open Issues & Design Recommendations — Format

Every component's **Open Issues** and **Design Recommendations** lists must follow the bold-headline + description + tag pattern:

```html
<li><span>
  <strong>Headline statement.</strong>
  Description with rationale and context.
  <span class="tag-open tag-c#">C# · Full Criterion Name</span>
</span></li>
```

In the data file:

```ts
open: [
  {
    headline: 'Headline statement.',
    body: 'Description with rationale and context.',
    tag: { criterion: 'C2', label: 'C2 · Variant & Property Naming' }
  }
]
```

### Open Issues tags

Always `tag-open tag-c#` + the full criterion name:

- `C1 · Layer Structure & Naming`
- `C2 · Variant & Property Naming`
- `C3 · Token Coverage`
- `C4 · Native Mappability`
- `C5 · Interaction State Coverage`
- `C6 · Asset & Icon Quality`
- `C7 · Code Connect Linkability`

### Design Recommendations tags — canonical 10-tag set

Use only these tags (class `tag-recommend`). No ad-hoc labels.

| Tag | When to use |
|---|---|
| **Rename** | Change a name or value (component, property, enum value, token) |
| **Property** | Reshape the property schema (collapse, split, add/remove props, change value types) |
| **Slot** | Adopt Figma Slots or add/fix a named content slot (leading, trailing, asset) |
| **State** | Add missing interaction states or state variants |
| **Token** | Create, rename, or fix a design token or token binding |
| **Asset** | Replace raster with vector, flatten a BOOLEAN_OPERATION, provide a vector icon/flag |
| **Composition** | Instance-swap to a canonical sibling, compose via existing DS components |
| **Family** | Cross-component decisions within a family (merge, split, consolidate, add a sibling) |
| **A11y** | Accessibility-specific recommendation |
| **Docs** | Documentation, annotation, or convention — no Figma change required |

### Holistic restructures

A multi-axis restructure belongs in a single **Design Recommendation** bullet — bold headline names the change, description summarizes the target schema and variant math. If the comparison is too big for one bullet, split into two bullets, don't promote to a separate section.

The only exception is **family-level overviews** (e.g. Header's 4-component family), which live on the family's *lead* component.

### Remove verdict

Components marked `dsVerdict: 'remove'` get **no Open Issues** and **no Design Recommendations** — replace with a short infobox pointing to the canonical sibling.

---

## Assessment Workflow

For each Figma component URL:

1. **`get_design_context`** — Primary tool. Returns code, screenshot, token usage, layer names.
2. **`get_metadata`** — Node structure, variant counts, property names.
3. **`get_variable_defs`** (optional) — Confirm token bindings, extract hex values.
4. **Score** all 4 traits and 7 criteria.
5. **Document** all issues in `open` and ideas in `recommendations` — do NOT fix them in Figma.
6. **Edit** `astro-site/src/data/components/<slug>.ts` (create if new).
7. **Build**: `cd astro-site && npm run build`.
8. **Verify** at `http://localhost:4321/components/<slug>`, then commit and push.

The audit script (`scripts/audit/audit-progress.mjs`) is the source of truth for "is this complete?".

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
- Deploy: server pulls + rebuilds via `.github/workflows/main.yml` on push to `main`.
- Server runs nginx in front of `astro-site/dist/` (static) + `auth-backend` as a separate service on port 3001 reverse-proxied at `auth.frostdesigngroup.com`.
- Always run `cd astro-site && npm run build` locally before pushing significant data changes — catches schema breakage early.
- The dev server (`npm run dev`) hot-reloads on file changes.

---

## Known Patterns (Do Not Flag)

- Semantic color token naming: `main/{component}/color/{state}/{role}`
- `space/space-*` tokens are consistent across components
- Chevron icons are confirmed vector instances
- Custom fonts (Proxima Soft, BarkAda) — flag once per session as a standing action item

---

## Code Snippet Conventions

Component documentation has two places where SwiftUI/Compose code appears. Each serves a different audience and must use the correct code style.

### Style Tab — Per-Appearance Snippets

Show **component API usage** — the code a developer writes to USE the component. Short, focused on the specific appearance.

```swift
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

Do not use Figma Dev Mode auto-generated code in documentation snippets. That code describes how to DRAW the container — not how to USE the component.

### Code Tab — Full Reference

Shows the complete developer reference: installation, import, property mapping table (Figma → SwiftUI → Compose), usage snippets for ALL appearances, size mode mapping, accessibility requirements, and usage guidelines.

### Naming Pattern

Component API names follow `EB{ComponentName}`:
- `EBButton` / `EBOutlinedButton` / `EBTextButton`
- `EBAccordion`
- `EBAvatar`
- `EBCheckbox`

### Variant Mapping Pattern

| Figma Concept | SwiftUI Pattern | Compose Pattern |
|---|---|---|
| Appearance (enum) | `.ebAppearance(.filled)` modifier | Separate composable |
| Variant=Destructive | `role: .destructive` | `colors = EBButtonDefaults.destructiveColors()` |
| Size modes | `.controlSize(.large / .regular / .small / .compact / .mini)` | `size = EBButtonSize.Large / Medium / Small / Compact / XSmall` |
| Boolean slots | Optional parameter: `leadingIcon: Image?` | Composable slot: `leadingIcon = { Icon(…) }` |
| Disabled state | `.disabled(true)` modifier | `enabled = false` parameter |

### Planned API Badge

If native components are not yet implemented, mark all code snippets with a `badge-planned` badge labeled "Planned API".

---

## Mobile Documentation Criteria — 9-Point Assessment

Use this checklist to evaluate every component's documentation. Score each criterion as Pass, Partial, or Fail. Target: 9/9.

### Must-Haves (1–5)

| # | Criterion | Pass | Partial | Fail |
|---|---|---|---|---|
| 1 | **Live preview / playground** | Interactive preview with all property controls | Some controls missing | No interactive preview |
| 2 | **Native install / import** | SPM URL + Gradle dependency + import statements | Only one platform | None |
| 3 | **SwiftUI & Compose code snippets** | All styles have component-API snippets with Copy button | Some styles missing | All show `// Loading...` or container code |
| 4 | **Props / API table (native)** | Prominent table mapping every Figma property → native | Buried or incomplete | Missing |
| 5 | **Variants & states (with code)** | Every Style tab section has SwiftUI/Compose snippet | Code tab has snippets but Style tab still placeholder | None |

### Good-to-Haves (6–9)

| # | Criterion | Pass | Partial | Fail |
|---|---|---|---|---|
| 6 | **Native platform notes** | Accessibility table with iOS + Android columns | Single platform only | None |
| 7 | **Design token connection** | Token name + hex + state per appearance | Names visible but specs missing | Hex only |
| 8 | **Changelog / version history** | Semver, entries tied to C1–C7, status badges, node IDs | History exists but no criterion linking | None |
| 9 | **Figma ↔ code mapping** | Property mapping matches current architecture, file paths shown | Outdated architecture references | Missing |

### Scoring Scale

| Score | Rating |
|---|---|
| 9/9 | Excellent — exceeds top DS benchmarks |
| 7–8/9 | Strong — on par with Material 3 |
| 5–6/9 | Acceptable — gaps need addressing |
| 3–4/9 | Weak |
| 0–2/9 | Not ready |

### Stale Content Check

After any component restructure (variant count change, property renaming, architecture change), verify ALL of these reflect the current architecture:

- Verdict summary (variant count, property names)
- Interactive playground controls (match current properties)
- Style tab per-style code snippets (match current API)
- Code tab property mapping table
- Code tab usage snippets
- Criteria Scorecard notes
- Code Connect property mapping
- Variants Inventory table
- Behavior table

Mark any section referencing old architecture as stale and update before presenting.

### Workflow

1. After completing or updating any component documentation, run through all 9 criteria.
2. Score each as Pass / Partial / Fail.
3. Run the Stale Content Check if the component was restructured.
4. Fix any Partial or Fail items before presenting.
5. Report the final score (e.g. "Button: 7.5/9 — criteria #5 partial, #7 partial").

---

## Style Tab Spec Card Conventions

The Button component is the baseline. Every component's Style tab spec cards must follow this structure.

### Card Anatomy (top to bottom)

1. **Header**: Style name · Node ID · DES/DEV toggle
2. **Description**: One-line summary of the style's purpose
3. **Interactive preview**: Component rendering with property controls on the right
4. **Properties + Colors** (two-column row): properties left, colors right (token name + hex per state)
5. **Layout + Typography** (two-column row): dimensions left, type spec right (DS text style ref + font/size/tracking/line-height)

### Colors Section Rules

- Group by color role (bg, label, border, icon), not by state.
- Show all states inline per role: Default, Pressed, Disabled.
- Each hex value has a swatch dot and the full semantic token path.
- Format: `■ #005CE5` then `main/button/primary/brand/enabled/bg`.
- If a role doesn't change across states (e.g. border), show one value.
- If the component has appearance modes, the Colors section updates dynamically when the mode dropdown changes.

### Typography Section Rules

- First row: DS text style reference name (e.g. `Primary/Label/Large`).
- Following rows: Font, Size, Tracking, Line-height.
- Multiple text layers (e.g. Accordion's Label + Description) get a subsection per layer.

### Layout Section Rules

- Show all relevant dimensions.
- Include: height, width (if not fill), padding H/V, corner radius, border, icon sizes, slot dimensions.

### Dynamic rows (Plan A — `SpecRow.variants`)

Properties / Colors / Layout / Typography rows can react to the demo controls without component-specific JS. Use this when a row's value depends on the current demo selection.

**Schema** (full JSDoc at `src/data/types.ts:SpecRow.variants`):

```ts
{
  key: 'Height',
  value: '212',           // shown by default
  mono: true,
  variants: {
    'cta:2-vertical': { value: '270' },   // only when cta=2-vertical
    // 'appearance:destructive|state:pressed': { value: '#A41818', token: '...' },
  },
}
```

Key shape:
- Single prop: `"<prop>:<value>"` — e.g. `"cta:2-vertical"`
- Compound (joined with `|`): `"<p1>:<v1>|<p2>:<v2>"` — compound matched first, falls back to each single-prop key
- Values must match the demo-control option `value` exactly (lowercase: `"default"`, not `"Default"`)

What can be overridden: `value` · `token` · `mono` · `swatch`. Top-level row fields are the fallback when no variant matches.

**Wiring** (already shipped, lives in shared code):
- Renderer (`SpecCard.astro`) emits `data-row-card` + `data-row-variants` for any row with `variants`.
- Patcher (`assessment.js → _patchSpecCardRows`) wraps every component's `window.updateSpecCard()` and applies overrides on each control change.
- Per-card state lives on `window._specCards[<cardKey>]` (already maintained by every component's demo script).

**Caveat — legacy demos (18 components):** `button`, `accordion`, `dropdown`, `action-list*`, `badge`, `checkbox`, `chip`, `menu-grid`, `list-item`, `amount-text-field`, `alert`, `ad-space`, `avatar`, plus a few others rebuild their Colors / Layout / Typography sections via `innerHTML =` in their own `updateSpecCard`. Adding `variants` to those data files is **inert** until the demo JS is migrated to leave the schema-rendered HTML alone. Tracked as a follow-up.

**Working pilot:** `modal.ts` Card 1 (Default), Layout section's `Height` row collapses three static rows (`Height (cta=1)` / `(cta=2-h)` / `(cta=2-v)`) into one dynamic row with `cta:2-vertical → 270`.

---

## Variants Inventory Conventions

The Button component is the reference. Apply when inventory has >10 rows or a multi-axis matrix. Components with ≤8 variants may use a single flat table.

### Structure

1. **Heading**: `Variants Inventory (180 total)`
2. **Multiplier expression**: e.g. `3 Style × 5 Size × 3 State × 4 Icon Placement = 180 variants`.
3. **Grouped summary table** (always visible) — collapses one axis per row, with a Count column.
4. **Full breakdown** in `<details>` collapsible — labeled `View full {Axis} × {Axis} breakdown (N rows)`.

### Rules

- Node IDs belong in the **full breakdown**, not the summary.
- Summary groups by the highest-cardinality axis (usually Style or Type).
- Use `<details>` for native collapse — no JS required.
- The collapsible label must include the row count.

---

## Color Table Conventions

Every component's Style tab must have a color reference table proving all colors are bound to design tokens.

### Components WITHOUT appearance modes

Title: **"Colors by State"**

| ROLE | TOKEN | DEFAULT | PRESSED | DISABLED |
|---|---|---|---|---|
| Header bg | surface/default | #FFFFFF | – | – |
| Label | text/primary | #0A2757 | #0A2757 | – |

- No MODE column.
- TOKEN inline per row.
- Display-only components may use ROLE | TOKEN | VALUE columns.

### Components WITH appearance modes

Title: **"Colors by Appearance Mode"**

| MODE | ROLE | TOKEN | DEFAULT | PRESSED | DISABLED |
|---|---|---|---|---|---|
| Default | bg | primary/brand/{state}/bg | #005CE5 | #2340A9 | #9BC5FD |
| Default | label | primary/brand/{state}/label | #FFFFFF | #FFFFFF | #FFFFFF |
| Destructive | bg | primary/destructive/{state}/bg | #D81E1E | #B01818 | #F5A3A3 |

- MODE as the first column.
- Group rows by mode: Default → Destructive → White → Subtle.

### Rules for both formats

- TOKEN column is mandatory — every hex value has its token name inline.
- Use **DEFAULT** not **ENABLED** — matches Figma's `State=Default`.
- Use `–` for non-applicable state/role combinations.
- Every color the dev needs to implement must appear in the table.

---

## Pre-Delivery Checklist

Before presenting any link to the user, verify:

1. **Live preview demo** — all dropdowns/toggles work and update the preview
2. **Style tab spec cards** — preview + Figma panel render correctly, detail sections in proper 2-column grid
3. **JS functions** — every `onchange`/`onclick` in HTML has a matching function with correct signature
4. **Color map completeness** — all style × appearance × state combos mapped
5. **CSS classes** — every class referenced in HTML exists in the stylesheet
6. **Build succeeds** — `npx astro build` runs without errors
7. **No broken layouts** — grid sections have even count for 2-column layout, tables don't overflow

**DO NOT give the user a link until all 7 checks pass.**
