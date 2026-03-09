# GCash Design System — Component Assessment Guide
## Combined DS Health + Native Mobile Readiness

This document is the unified assessment guide for evaluating GCash Design System components across two dimensions:
1. **DS Health** — Should this component exist in the core DS? Is it well-structured?
2. **Native Mobile Readiness** — Can it be implemented in SwiftUI and Jetpack Compose?

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
- File key: `HwWDwPit2xJjDH4zszOZ5o`
- URL: `https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2`

### 4. No other tools required
- No npm, no build tools, no local server
- Claude uses Figma MCP tools directly

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

## GCash-Specific Patterns to Check on Every Component

These issues have been confirmed to recur across the library. Check for all of them on every assessment.

### Known Anti-Patterns

**Naming & Property Issues (C2)**
- **`yes`/`no` boolean strings** — Boolean variant properties (e.g. `Full Width`, `leadingIcon`, `labelDescription`) are encoded as `yes`/`no` strings instead of `true`/`false`. Flag every occurrence under C2.
- **Mixed-case boolean strings** — The Alert component uses `yes` and `No` (inconsistent capitalisation) on the same boolean property. Watch for this pattern on new components.
- **Space-separated variant names** — Values like `with stroke` and `corner radius` are incompatible with Swift/Kotlin enum naming. Flag under C2.
- **Version numbers in variant names** — `transaction_v1`, `transaction_v2`, `Type=Version 2` are cleanup debt signals. Identify the actual difference between versions, keep the better one, flag for deletion.
- **`default` as a size name** — `size=default` is ambiguous. Should always be a named size (`small`, `medium`, `large`). Seen in Checkbox (With Label) and Contextual Help.
- **`type` encoding two unrelated concerns** — Some components (Button, Modal, Filter) use a single `type` property to encode both visual style and structural layout. These should be split into two separate properties.
- **`State` encoding style** — `State=Pill` (Countdown) is a layout style, not an interaction state. Flag any component where state values include visual style descriptors.

**Structural Issues (C1, C4)**
- **Generic internal layer names** — `shape_full`, `Placeholder`, `Vector`, `Ellipse`, `Frame 42` — flag under C1. Semantic names should be `icon-chevron`, `icon-leading`, `content-body`, etc.
- **Raw boolean operations as components** — The Nudges section contains coachmark and dimmer shapes built as Figma boolean operation nodes, not proper component sets. These cannot be instanced, overridden, or Code Connect linked. Requires full rebuild.
- **Sub-components not converted to variant properties** — e.g., `Button with Icon` is a separate component instead of `hasIcon=true` on the main Button. Any time you see `[Component Name] - with [Feature]` as a separate frame, it should likely be a property.
- **Baking content into the container** — Bottom Sheet family, Form Group `Type=Two Fields`, Carousel families all bake content decisions into the container. Content should be a composable slot, not a fixed variant.

**Token Issues (C3)**
- **Hardcoded `opacity` modifiers** — `opacity-80` and similar hardcoded opacity values seen on text layers. Should be a semantic token.
- **Generic depth token for shadows** — `Depth/D0` used for drop shadows instead of a component-specific semantic shadow token.
- **Raw pixel values as size names** — Card List uses `64, 52, 46, 40, 32, 24` as icon size values instead of named tokens (`large`, `medium`, `small`). Countdown has similar issues. All raw pixel size values should map to a named scale.

**Asset Issues (C6)**
- **Raster icon assets** — The Alert component's semantic type icons are raster images from Figma's CDN, not vector component instances. Any component using `imgShapeFull`, `imgVector`, `imgEllipse` in its generated code output is using raster assets. This is a hard C6 blocker.
- **How to spot raster icons in design context output:** Look for `const imgXxx = "https://www.figma.com/api/mcp/asset/..."` constants at the top of the generated code, then find where they are used as `<img src={imgXxx} />`. If a semantic icon (not a placeholder image) is an `<img>` tag, it is raster.

**State Coverage Issues (C5)**
- **Missing `disabled` state** — Checkbox, Amount Text Field, Search Field, Date Picker all have missing disabled variants. Check every component for disabled coverage.
- **Missing `indeterminate` state** — Checkbox is missing this. Check all selection-type components.
- **Missing `selected` / `active` state** — Filter chips have no selected state. Check all filter and toggle-style components.
- **Incomplete state matrix for sub-types** — Date Picker Item documents Range (Middle) but is missing Range Start and Range End. Check that all item types cover all relevant states, not just the most common one.

**Documentation Issues**
- **Empty screen context panels** — Several components (List, Progress Bar, Date Picker) have no screen context/usage examples. Flag as documentation gaps — not a technical blocker but a handoff risk.
- **Deprecated components still in templates** — `[DEPRECATED] Form Group V1` is still referenced in live template screens. Any deprecated component still appearing in templates must have its references cleaned up before deletion.

### Known Good Patterns — Do Not Re-Flag

- **Semantic color token naming** — The `main/{component}/color/{state}/{role}` pattern is consistent and excellent across the library.
- **Chevron icons** — Chevron Down, Chevron Up, Chevron Right are all confirmed vector component instances.
- **Spacing tokens** — `space/space-*` tokens are consistently applied across all assessed components.
- **Custom fonts** — `font-family/font-primary` (Proxima Soft) and `font-family/font-secondary` (BarkAda) require native app bundle verification. Flag this **once per session** as a standing action item for the engineer — do not repeat per component.

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
Score all 4 DS traits and all 7 native criteria. Assign DS Health verdict and Native Readiness status. List all issues with criterion references. Output findings in the report format.

---

## Assessment Output Format

For each component, produce a structured assessment with the following sections:

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

---

## Components Already Assessed

### From Native Mobile Readiness Assessment (HTML Report)

| Component | Node | DS Verdict | Native Status | Key Issue |
|---|---|---|---|---|
| Accordion | `16:3626` | Fix | Needs Refinement | Missing states, no expanded content panel, yes/no booleans |
| List – Label Only | `21:43425` | Fix | Needs Refinement | Space-separated variant names, no interaction states |
| Alert | `21:83699` | Fix | Requires Rework | Raster type icons, `showHeader` ghost prop, font size inconsistency |

### From DS Debloat Audit (this session, Accordion → Progress Bar)

| Component | Node | DS Verdict | Key Finding |
|---|---|---|---|
| Accordion | `16:3626` | Keep | Clean and lean |
| Action List | `21:43127` | Consolidate | 5 sub-components → 1 `List Item` with trailing slot |
| Ad Space | `21:28667` | Remove | Advertising infrastructure — not a DS component |
| Alert | `21:83699` | Fix | Remove `Default` type ambiguity, consolidate icon props |
| Avatar | `21:94765` | Fix | Naming inconsistency, incomplete size scale |
| Banner | `756:82673` | Restructure | CTA property architecture, remove left/right variant split |
| Badge | `21:111526` | Restructure | Rename `type` → `size`, separate color roles from semantic states |
| Breakdown (Inline Text) | `21:138492` | Fix | Name conflict — "Inline Text" vs "Breakdown" |
| Button | `21:164481` | Fix (critical) | Unify size naming, standardize appearances, merge with-Icon as property |
| Bottom Sheet family (6) | various | Consolidate | 6 components → 1 core `Bottom Sheet` + 2 content patterns |
| Card List | `23:86049` | Fix | Rename to Feature Card + Transaction Card, reduce icon sizes to 3-step scale |
| Carousel family (4) | various | Consolidate | 4 components → 2: `Carousel Card` + `Carousel Banner` |
| Chat Field | `2641:27109` | Evaluate | Evaluate core DS vs. product layer; fix naming and complete states |
| Checkbox | `23:153929` | Fix | Align size naming, add indeterminate + disabled states |
| Contextual Help | `23:179895` | Fix | Fix naming, complete variants, document vs. Alert |
| Countdown | `4076:9090` | Restructure | Separate State/Style properties; evaluate Full Container |
| Date Picker | `12812:45433` | Fix | Add Range items, range calendar variant, screen context |
| Filter | `23:183325` | Fix | Add `selected` state to chips, align naming with Button |
| Form Elements | `23:199646` | Fix + Consolidate | Merge Labeled Field into Input Field; restructure Form Group; delete deprecated V1 |
| Title Bar | `2641:30698` | Fix + Split | Split into `Title Bar` (nav) + `Page Header` (content); merge/remove header sub-types |
| List (Content List) | `10277:5439` | Fix | Rename to `Content List`, expose indicator type property |
| Message & Notification | `27:168909` | Restructure | Split into 3 sections: Feedback, OS Templates, Illustrations |
| Modal | `2647:22543` | Restructure | Split `type` into `content` + `cta`; retire `transaction_v1` |
| Visual Popup | `2647:22590` | Fix + Consolidate | Retire Version 2; consider merging with Modal into `Dialog` |
| Nudges | `2648:25708` | Fix (critical) | Convert raw boolean ops to proper components; consolidate 3 tooltips into 1 |
| Progress Bar | `27:64946` | Fix | Rebuild as fill rect; add status, size, label, indeterminate properties |

---

## Starting a New Session

Paste the following as your **first message** to Claude, along with this guide and the Figma node URL for the next component:

---

> I'm continuing a component assessment of the GCash Design System for both DS health (debloat audit) and native mobile readiness (SwiftUI + Jetpack Compose).
>
> I'm attaching:
> 1. The assessment guide (`gcash-ds-assessment-guide.md`) — it contains the full methodology, 4 DS traits, 7 native criteria, GCash-specific patterns to watch for, and the output format
> 2. (Optional) The current HTML report (`gcash-native-readiness-assessment.html`) if updating the native readiness report
>
> The next component to assess is: [PASTE FIGMA NODE URL HERE]
>
> Please:
> 1. Call `get_metadata` on the node to understand the variant structure
> 2. Call `get_screenshot` to see the visual layout
> 3. Call `get_design_context` with `disableCodeConnect=true`, `clientFrameworks="SwiftUI, Jetpack Compose"`, `clientLanguages="Swift, Kotlin"`
> 4. Call `get_variable_defs` to get all tokens
> 5. Score the component against all 4 DS traits and all 7 native criteria
> 6. Output the full assessment using the format in the guide
> 7. (If updating the HTML report) Update the sidebar, cover subtitle, summary grid, summary table, and add the full component section before the footer — then return the updated file

---

## Ownership

- DS debloat audit methodology: [DS team lead]
- Native mobile readiness methodology: [design engineering lead]
- HTML report file: [shared via your preferred channel]
- Figma file access: [Figma admin]
- Token naming questions: [design system owner]
