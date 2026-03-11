# GCash Design System — Component Assessment Guide
## Combined DS Health + Native Mobile Readiness

This document is the unified assessment guide for evaluating GCash Design System components across two dimensions:
1. **DS Health** — Should this component exist in the core DS? Is it well-structured?
2. **Native Mobile Readiness** — Can it be implemented in SwiftUI and Jetpack Compose?

Assessment results are published as a **modular HTML report** — each component lives in its own `.html` source file, and a build script assembles them into a single `index.html` with minified CSS. See the [HTML Report Architecture](#html-report-architecture) section for details.

Use this guide as your first-message context when starting a new Claude assessment session.

---

## Dependencies

### 1. Claude Access
- Recommended model: Claude Sonnet (most recent version)
- No special system prompt needed — paste this document as your first message context

### 2. Figma MCP Server (required)
- The assessment uses the **Figma MCP server** for direct file access
- Setup: [https://help.figma.com/hc/en-us/articles/32132100833559](https://help.figma.com/hc/en-us/articles/32132100833559)
- Authenticate via your own Figma account — minimum **viewer** access required
- ⚠️ Never paste your Figma Personal Access Token into the chat

### 3. Figma File
- **GCash Design System — Sticker Sheets v2**
- [Open in Figma](https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=16870-9381&t=HkaWvJ7nLoQVjegR-0)

### 4. Node.js (for building the HTML report)
- Required to run `node assessment-src/build.js`
- No additional npm packages needed — build script uses only `fs` and `path`
- Not required for assessment itself — only for assembling the final report

---

## What You Are Assessing

Every component is evaluated across **two phases**. Both must be completed for each component.

### Phase 1 — DS Health (Debloat Audit)
Is this component worth keeping in the core DS? Is it well-designed?

### Phase 2 — Native Mobile Readiness
Can this component be handed off to engineers for SwiftUI and Jetpack Compose implementation?

These are complementary but distinct. A component can pass Phase 1 (belongs in DS) but fail Phase 2 (raster icons, broken token coverage). Both must be assessed.

---

## Phase 1: DS Health — The 4 Traits

Every component is evaluated against these four traits. Rate each as ✅ Pass · ⚠️ Needs work · ❌ Fail.

| Trait | What to check |
|---|---|
| **Reusable** | Does this component work across multiple contexts and flows, not just one specific screen or feature? |
| **Self-contained** | Does it carry its own styles, states, and logic without depending on external setup? |
| **Consistent** | Does it behave predictably? Are naming conventions, property types, and state coverage aligned with the rest of the DS? |
| **Composable** | Can it be nested inside other components? Does it fit into the existing component hierarchy? |

### DS Health Verdicts

The overall DS Health verdict is determined by the combination of trait scores and structural findings.

| Verdict | Meaning |
|---|---|
| **Keep** | All 4 traits pass. Component belongs in core DS as-is. |
| **Fix** | Component belongs in core DS but has specific issues (missing states, naming problems, incomplete variants). |
| **Restructure** | Component belongs in core DS but needs significant property or architectural changes before it is usable. |
| **Consolidate** | Component should be merged into another component (reduce duplication). |
| **Product Layer** | Component is too feature-specific for core DS. Move to a product-layer pattern library. |
| **Remove** | Component is redundant, deprecated, or doesn't belong in a design system (e.g., OS-level UI, ad infrastructure). |

---

## Phase 2: Native Mobile Readiness — The 7 Criteria

Score each criterion independently. The overall component status is set by the **worst-scoring criterion** — one C6 failure makes the whole component "Requires Rework" even if every other criterion passes.

| ID | Criterion | What to check |
|----|---|---|
| **C1** | Layer Structure & Naming | Are layers named semantically (`leading-icon`, `content`, `trailing-icon`) not as Figma defaults (`Frame 42`, `Group 7`)? Is the hierarchy logical for native mapping? |
| **C2** | Variant & Property Naming | Are variant names clean and consistent? Are boolean properties `true`/`false` (not `yes`/`no`)? Are enum values hyphenated, not space-separated? |
| **C3** | Token Coverage | Are all colors, spacing, typography, and radius values bound to design tokens? No hardcoded values? |
| **C4** | Native Mappability | Does the component map to a standard native primitive (`DisclosureGroup`, `Button`, `List`, `AlertView`)? Are there web-only patterns with no native equivalent? |
| **C5** | Interaction State Coverage | Are all expected states present as variants: default, pressed, disabled, focused? Missing states force engineers to invent behavior. |
| **C6** | Asset & Icon Quality | Are icons **vector component instances** (not raster/PNG embeds or CDN image assets)? Are they colored with tokens so tinting works natively? |
| **C7** | Code Connect Linkability | Is the component a proper Figma component set? Are property names clean enough to map 1:1 to native parameters? Are Code Connect mappings registered? |

### Native Readiness Status Levels

| Status | Meaning |
|---|---|
| **Ready** | Clean structure, maps well to native, Code Connect linkable as-is |
| **Needs Refinement** | Minor naming, structural, or token issues to fix before linking |
| **Requires Rework** | Significant structural or design issues — needs redesign before native translation |
| **Not Applicable** | Web-only concept or removed-from-DS component — skip native assessment |

---

## Combined Status at a Glance

| DS Health Verdict | Native Status | Meaning |
|---|---|---|
| Keep | Ready | Ship it — component is clean and native-ready |
| Keep / Fix | Needs Refinement | Minor fixes needed, assign to DS team |
| Fix / Restructure | Requires Rework | Significant work before engineers can use it |
| Product Layer | Not Applicable | Move to product library, no native DS component needed |
| Remove / Consolidate | Not Applicable | Skip native assessment entirely |

---

## HTML Report Architecture

The assessment report is a modular, build-assembled static site hosted on GitHub Pages. Understanding the architecture is essential for adding new components.

### Repository Structure

```
gcash-design-system/
├── index.html                    ← Built output (do not edit directly)
├── styles.css                    ← Built output (minified)
├── README.md
└── assessment-src/
    ├── shell.html                ← Shared layout: sidebar, cover, criteria, legend, summary, JS
    ├── styles.css                ← Source CSS (unminified)
    ├── build.js                  ← Node.js build script
    └── components/
        ├── accordion.html        ← One file per component
        ├── alert.html
        ├── list-label-only.html
        └── ...
```

### How the Build Works

1. `build.js` reads `shell.html` as the page scaffold
2. It reads every `.html` file in `components/` (sorted alphabetically)
3. From each component file, it extracts **4 tagged blocks** using comment markers
4. It injects all blocks into the shell at the corresponding placeholder comments
5. It minifies both HTML and CSS, then writes `index.html` and `styles.css` to the repo root

### Building the Report

```bash
node assessment-src/build.js
```

Output shows each component processed plus size savings:
```
  + accordion.html
  + alert.html

Built → index.html
  HTML  Original:  48.2 KB
  HTML  Minified:  34.1 KB  (saved 29.3%) ✅
  CSS   Original:  12.7 KB
  CSS   Minified:   8.9 KB  (saved 29.9%) ✅
```

---

## GCash-Specific Patterns to Check on Every Component

These issue patterns have been confirmed to recur across the GCash DS library. Use them as a checklist during every assessment.

### Naming & Property Issues (C2)

Look for these naming anti-patterns on every component:

- **Boolean properties as strings** — Boolean variant properties should use `true`/`false`, not `yes`/`no` or any mixed-case variant. Flag every occurrence.
- **Space-separated variant names** — Values like `with stroke` or `corner radius` are incompatible with Swift/Kotlin enum naming. Names should be hyphenated or camelCase.
- **Version numbers in variant names** — Names like `transaction_v1`, `Type=Version 2` indicate cleanup debt. Identify what differs between versions, keep the better one, flag the rest for deletion.
- **Ambiguous size names** — `size=default` is unclear. Sizes should always use named values (`small`, `medium`, `large`).
- **Overloaded property keys** — A single `type` property encoding both visual style and structural layout should be split into two separate properties.
- **State values encoding style** — If a `State` property includes layout/style descriptors (e.g. `State=Pill`), those should be separated into their own property. State values should only describe interaction states.

### Structural Issues (C1, C4)

Look for these structural anti-patterns:

- **Generic layer names** — Any Figma-default name (`Frame 42`, `Group 7`, `Vector`, `Ellipse`, `Placeholder`) should be replaced with semantic names (`icon-leading`, `content-body`, `trailing-action`).
- **Non-component primitives** — Boolean operation nodes, flattened shapes, or bare groups used where a proper component set is expected. These cannot be instanced, overridden, or Code Connect linked.
- **Feature variants instead of properties** — A separate component like `[Component] - with [Feature]` should be a boolean property on the main component (e.g. `hasIcon=true`), not a standalone frame.
- **Baked-in content** — Components that hardcode specific content into fixed variants instead of providing composable slots. Content should be replaceable, not baked in.

### Token Issues (C3)

Look for these token anti-patterns:

- **Hardcoded opacity** — Values like `opacity-80` directly on layers instead of referencing a semantic opacity token.
- **Generic depth/shadow tokens** — A shared `Depth/D0` token for all shadows instead of component-specific semantic shadow tokens.
- **Raw pixel values as identifiers** — Size values expressed as raw numbers (e.g. `64`, `52`, `40`) instead of named scale tokens (`large`, `medium`, `small`).

### Asset Issues (C6)

Look for these asset anti-patterns:

- **Raster icons** — Any semantic icon rendered as a raster image from Figma's CDN rather than a vector component instance. This is a **hard C6 blocker** for native readiness.
- **How to detect:** In design context output, look for `const imgXxx = "https://www.figma.com/api/mcp/asset/..."` constants used as `<img src={imgXxx} />`. If a semantic icon (not a placeholder image) is an `<img>` tag, it is raster.

### State Coverage Issues (C5)

Check every component for these missing states:

- **Missing `disabled` state** — All interactive components need a disabled variant.
- **Missing `indeterminate` state** — Selection components (checkboxes, radio groups) should support indeterminate.
- **Missing `selected` / `active` state** — Filter chips, toggles, and tab-like components need a selected variant.
- **Incomplete state matrix** — If a component has sub-types, verify every sub-type covers all relevant states, not just the most common one.

### Documentation Issues

- **Empty screen context panels** — Components without usage examples in the Figma file. Flag as a documentation gap and handoff risk.
- **Deprecated components in live templates** — Any deprecated component still referenced in template screens must be cleaned up before deletion.

### Known Good Patterns — Do Not Re-Flag

These patterns are already confirmed as good across the library. Do not flag them as issues:

- **Semantic color token naming** — The `main/{component}/color/{state}/{role}` naming convention is consistent and well-structured.
- **Chevron icons** — Chevron Down, Up, and Right are confirmed vector component instances.
- **Spacing tokens** — `space/space-*` tokens are consistently applied.
- **Custom fonts** — `font-family/font-primary` (Proxima Soft) and `font-family/font-secondary` (BarkAda) require native app bundle verification. Flag this **once per session** as a standing action item — do not repeat per component.

### Discovered During Assessment

New patterns found during component assessments are automatically collected here. Each entry references the component where it was first observed and the criterion it affects.

<!-- @@DISCOVERED_PATTERNS@@ -->
| Criterion | Pattern | First Found In |
|---|---|---|
| C2 | Boolean variant properties using yes/no strings instead of true/false — found on leadingIcon and labelDescription properties | Accordion |
| C1 | Root container frames left as Figma default "Frame" instead of semantic name like "container" | Accordion |
| C1 | Leading icon instances named "Placeholder" instead of semantic "icon-leading" | Accordion |
| C4 | Expanded content panel (body/slot for revealed content) is absent — engineers must attach content outside the component | Accordion |
<!-- @@DISCOVERED_PATTERNS_END@@ -->

---

## Assessment Workflow (Step by Step)

For each new Figma node URL received:

### Step 1 — Get the metadata
```
Call: get_metadata(fileKey, nodeId)
```
Use to:
- Count total variants and sub-components
- Read all variant property names and values
- Immediately spot C2 issues (boolean strings, space-separated names, version numbers)
- Understand the layer hierarchy for C1

### Step 2 — Get the screenshot
```
Call: get_screenshot(fileKey, nodeId)
```
Use to:
- Visually confirm what the component looks like
- Identify visual patterns not obvious from metadata alone
- Spot missing states by looking at what's shown vs. what's absent

### Step 3 — Get full design context
```
Call: get_design_context(
  fileKey,
  nodeId,
  disableCodeConnect=true,
  clientFrameworks="SwiftUI, Jetpack Compose",
  clientLanguages="Swift, Kotlin"
)
```
Use to:
- Confirm layer naming in detail (C1)
- Identify token usage vs. hardcoded values (C3)
- Detect raster icons via `const imgXxx = "https://www.figma.com/api/mcp/asset/..."` (C6)
- Surface hidden props with no Figma variant backing (C2/C7)
- Assess layout structure for native mappability (C4)

### Step 4 — Get variable/token definitions
```
Call: get_variable_defs(fileKey, nodeId)
```
Use to:
- Confirm full token coverage (C3)
- Extract hex values for token tables in the report
- Identify missing semantic tokens (e.g. shadow using generic `Depth/D0`)

### Step 5 — Spot-check specific nodes (optional)
If you need to verify whether a specific icon or element is a vector component instance:
```
Call: get_metadata(fileKey, specificNodeId)
```
An `<instance>` result = vector component. Anything else that generates an `<img>` in step 3 = raster.

### Step 6 — Write the assessment
Score all 4 DS traits and all 7 native criteria. Assign DS Health verdict and Native Readiness status. List all issues with criterion references. Output findings in the **quick markdown summary** format first for review.

### Step 7 — Produce the HTML component file
Once the markdown assessment is confirmed, produce the HTML component file:
1. Create `assessment-src/components/[component-name].html` with all 4 tagged blocks
2. Use the template structure from the [Assessment Output Format](#assessment-output-format) section
3. Include the full section content: overview, Phase 1 traits, Phase 2 criteria, Code Connect readiness, design tokens, and action items
4. For post-fix components, include the changelog block between Overview and Phase 1

### Step 8 — Build and verify
```bash
node assessment-src/build.js
```
Open `index.html` in a browser to verify the component appears correctly in the sidebar, summary grid, summary table, and main content area. Commit and push to publish.

---

## Assessment Output Format

Each component assessment has **two deliverables**: a quick markdown summary (for chat/review) and an HTML component file (for the published report).

### A. Quick Markdown Summary (for chat)

Use this format for in-session review before producing the HTML file:

```markdown
## [Component Name] `nodeId`

**DS Health Verdict:** [Keep / Fix / Restructure / Consolidate / Product Layer / Remove]
**Native Readiness Status:** [Ready / Needs Refinement / Requires Rework / Not Applicable]

### Structure
[Brief description of sub-components and variant counts]

### Phase 1 — DS Health

| Trait | Rating | Notes |
|---|---|---|
| Reusable | ✅/⚠️/❌ | [note] |
| Self-contained | ✅/⚠️/❌ | [note] |
| Consistent | ✅/⚠️/❌ | [note] |
| Composable | ✅/⚠️/❌ | [note] |

**Issues:**
- [Issue with recommended fix]

### Phase 2 — Native Mobile Readiness

| Criterion | Status | Notes |
|---|---|---|
| C1 Layer Structure | [Pass/Flag/Fail] | [note] |
| C2 Variant Naming | [Pass/Flag/Fail] | [note] |
| C3 Token Coverage | [Pass/Flag/Fail] | [note] |
| C4 Native Mappability | [Pass/Flag/Fail] | [note] |
| C5 Interaction States | [Pass/Flag/Fail] | [note] |
| C6 Asset Quality | [Pass/Flag/Fail] | [note] |
| C7 Code Connect | [Pass/Flag/Fail] | [note] |

**Issues:**
- **[C2]** [Issue description]
- **[C6]** [Issue description]

### Action Items
| Priority | Owner | Action |
|---|---|---|
| High | DS Team | [action] |
| Medium | Engineering | [action] |
```

### B. HTML Component File (for the published report)

After the markdown review is confirmed, produce the HTML component file for `assessment-src/components/`. The file must contain all 4 tagged blocks.

**File naming convention:** lowercase, hyphenated — e.g. `accordion.html`, `list-label-only.html`, `bottom-sheet.html`

#### Template structure

```html
<!--
  [COMPONENT NAME] COMPONENT ASSESSMENT
  Edit this file to update the [Component Name] assessment.
  Run `node assessment-src/build.js` to regenerate index.html
-->

<!--@nav-start-->
<a class="nav-item" href="#[id]" onclick="setActive(this)">
  <span class="nav-icon nav-icon-[ready|refine|rework]"></span>
  [Component Name]
  <span class="nav-badge nav-badge-[ready|refine|rework]">[Badge Text]</span>
</a>
<!--@nav-end-->

<!--@summary-card-start-->
<a class="summary-card" href="#[id]">
  <div style="display:flex;align-items:center;justify-content:space-between">
    <div class="summary-card-name">[Component Name]</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end">
      <span class="badge badge-[ds-verdict]">[DS Verdict]</span>
      <span class="badge badge-[native-status]">[Native Status]</span>
    </div>
  </div>
  <div class="summary-card-finding">[One-line summary of key findings]</div>
</a>
<!--@summary-card-end-->

<!--@summary-row-start-->
<tr>
  <td><strong>[Component Name]</strong></td>
  <td><span class="badge badge-[ds-verdict]">[DS Verdict]</span></td>
  <td><span class="badge badge-[native-status]">[Native Status]</span></td>
  <td class="muted">[Variant count]</td>
  <td class="muted">[Key finding text]</td>
</tr>
<!--@summary-row-end-->

<!--@section-start-->
<div class="component-section" id="[id]">

  <!-- Component Header with dual status -->
  <div class="component-header">
    <div class="component-header-left">
      <div class="component-name">[Component Name]</div>
      <div class="component-meta">
        <span>Node: <code>[nodeId]</code></span>
        <span>Variants: [count]</span>
        <span>iOS: <code>[native primitive]</code></span>
        <span>Android: <code>[native primitive]</code></span>
      </div>
    </div>
    <div class="dual-status">
      <div class="dual-status-row">
        <span class="dual-status-label">DS Health</span>
        <span class="badge badge-[ds-verdict]">[DS Verdict]</span>
      </div>
      <div class="dual-status-row">
        <span class="dual-status-label">Native Status</span>
        <span class="badge badge-[native-status]">[Native Status]</span>
      </div>
    </div>
  </div>

  <!-- Overview -->
  <div class="section-heading">Overview</div>
  <p>[Component description]</p>

  <!-- Phase 1: DS Health — 4 Traits -->
  <div class="phase-divider">
    <div class="phase-divider-line"></div>
    <span class="phase-label phase-label-1">Phase 1 — DS Health</span>
    <div class="phase-divider-line"></div>
  </div>

  <div class="trait-grid">
    <div class="trait-card [pass|warn|fail]">
      <div class="trait-name">[check|cross|dash] Reusable</div>
      <div class="trait-note">[Assessment note]</div>
    </div>
    <!-- Repeat for: Self-contained, Consistent, Composable -->
  </div>

  <div class="verdict-banner">
    <div>
      <div class="verdict-banner-label">DS Health Verdict</div>
      <div class="verdict-banner-text">[Explanation of verdict]</div>
    </div>
    <span class="badge badge-[ds-verdict]">[DS Verdict]</span>
  </div>

  <!-- Phase 2: Native Mobile Readiness -->
  <div class="phase-divider">
    <div class="phase-divider-line"></div>
    <span class="phase-label phase-label-2">Phase 2 — Native Readiness</span>
    <div class="phase-divider-line"></div>
  </div>

  <!-- A. Assessment Table (C1–C7) -->
  <div class="sub-heading">A. Native Assessment</div>
  <!-- ... criteria table, findings, issues ... -->

  <!-- B. Code Connect Readiness -->
  <div class="sub-heading">B. Code Connect Readiness</div>
  <!-- ... readiness table, file paths, property mapping ... -->

  <!-- C. Design Token Coverage -->
  <div class="sub-heading">C. Design Token Coverage</div>
  <!-- ... token table ... -->

  <!-- Action Items -->
  <div class="section-heading" style="margin-top:36px">Action Items — [Component Name]</div>
  <!-- ... action item table ... -->

</div>
<!--@section-end-->
```

#### Post-fix (v2) components

For components that have been partially fixed via Figma MCP, add a **changelog block** between the Overview and Phase 1 sections:

```html
<div class="sub-heading" style="margin-top:24px">v2 Fix Changelog — March 2026</div>
<div class="changelog">
  <div class="changelog-header">Changes Applied via Figma MCP · node [nodeId]</div>
  <div class="changelog-row">
    <div class="changelog-icon">✅</div>
    <div class="changelog-body">
      <strong>[Change title]</strong> — [Description]. <span class="tag-fixed">Fixed</span>
    </div>
    <div class="score-delta">C1 ↑</div>
  </div>
  <div class="changelog-row">
    <div class="changelog-icon">⏳</div>
    <div class="changelog-body">
      <strong>[Open item]</strong> — [Description]. <span class="tag-open">Still Open</span>
    </div>
    <div class="score-delta score-delta-neutral">C5 Open</div>
  </div>
</div>
```

Also append a `v2 Post-Fix` tag to the component name in the header:
```html
<div class="component-name">[Name] <span style="font-size:12px;font-weight:500;color:#1A7A4A;background:#E6F4ED;padding:2px 8px;border-radius:4px;vertical-align:middle;margin-left:8px">v2 Post-Fix</span></div>
```

---

## Assessment Progress

This section tracks components currently being assessed and their status. Components are added here once assessment begins and moved to the HTML report once complete.

### Status Key

| Status | Meaning |
|---|---|
| 🟡 **In Progress** | Assessment is actively underway — findings are preliminary |
| 🟢 **Complete** | Assessment finalized and HTML component file produced |
| 🔁 **Re-assessing** | Previously assessed, now being re-evaluated after fixes |

### Current Assessments

<!-- @@PROGRESS_TABLE@@ -->
| Component | Node | DS Verdict | Native Status | Status | Notes |
|---|---|---|---|---|---|
| Accordion | `16870:9288` | Fix | Needs Refinement | 🔁 Re-assessing | Fixed: C1, C2, C5. Open: C4, C7 |
<!-- @@PROGRESS_TABLE_END@@ -->

### Open Issues Across All Components

<!-- @@OPEN_ISSUES@@ -->
| Component | Criterion | Action | Status |
|---|---|---|---|
| Accordion | C4 | Add the **expanded content panel** as a slot/placeholder in the expanded variant with padding, background token, and divider. | Open |
| Accordion | C7 | Create native component files and register Code Connect mappings via the Figma Code Connect CLI. | Open |
<!-- @@OPEN_ISSUES_END@@ -->

---

## Ownership

- DS debloat audit methodology: [DS team lead]
- Native mobile readiness methodology: [design engineering lead]
- HTML report architecture & build script: [DS team / design engineering]
- Component HTML files: Produced per-session, committed to `assessment-src/components/`
- Figma file access: [Figma admin]
- Token naming questions: [design system owner]
