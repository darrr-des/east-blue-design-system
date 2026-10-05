# GCash Design System — Component Assessment Guide

Unified guide for evaluating GCash DS components across two dimensions: **DS Health** (structure and quality) and **Native Mobile Readiness** (SwiftUI + Jetpack Compose handoff).

Source file: [GCash DS — Sticker Sheets v2](https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=16870-9381) (read-only).

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

<table>
<thead><tr><th>Rating</th><th>When to use</th></tr></thead>
<tbody>
<tr><td><span class="badge badge-pass">Pass</span></td><td>Fully met. No issues — the trait is solid and ready for native handoff.</td></tr>
<tr><td><span class="badge badge-partial">Partial</span></td><td>Mostly met with minor gaps. The component is functional but has specific limitations that should be addressed (e.g. missing icon slots, but text variants work fine).</td></tr>
<tr><td><span class="badge badge-warn">Warn</span></td><td>Significant concerns that limit reuse or block reliable native handoff (e.g. naming inconsistencies, raster assets where vectors are expected, hardcoded values).</td></tr>
<tr><td><span class="badge badge-fail">Fail</span></td><td>Broken. The trait is fundamentally unmet — blocks DS inclusion or native implementation entirely (e.g. flattened icons that can't be tinted, no separable layers).</td></tr>
</tbody>
</table>

### How Trait Ratings differ from Verdicts

- **Trait Ratings** (Pass/Partial/Warn/Fail) = per-trait scores in the 4 Traits Scorecard
- **DS Verdicts** (Keep/Fix/Restructure...) = the overall DS Health outcome derived from all 4 traits combined
- **Native Status** (Ready/Needs Refinement/Requires Rework...) = overall native readiness derived from the 6 criteria (C1–C6)

---

## DS Health Verdicts

The overall DS Health verdict is based on the combination of all 4 trait ratings.

<table>
<thead><tr><th>Verdict</th><th>Meaning</th><th>When to assign</th></tr></thead>
<tbody>
<tr><td><span class="badge badge-keep">Keep</span></td><td>Ship as-is.</td><td>All 4 traits pass.</td></tr>
<tr><td><span class="badge badge-fix">Fix</span></td><td>Belongs in DS but has specific issues to resolve.</td><td>Mostly pass/partial with a few warn traits.</td></tr>
<tr><td><span class="badge badge-restructure">Restructure</span></td><td>Needs significant property or architectural changes.</td><td>Multiple warn/fail traits indicating structural problems.</td></tr>
<tr><td><span class="badge badge-consolidate">Consolidate</span></td><td>Merge into another component.</td><td>Overlaps with an existing component.</td></tr>
<tr><td><span class="badge badge-product-layer">Product Layer</span></td><td>Too feature-specific for core DS.</td><td>Tied to a single screen or product flow.</td></tr>
<tr><td><span class="badge badge-remove">Remove</span></td><td>Redundant, deprecated, or not a DS concern.</td><td>No longer needed or never belonged.</td></tr>
</tbody>
</table>

---

## Native Mobile Readiness — 6 Criteria

The overall native status is set by the **worst-scoring criterion**. One unresolved blocker can hold back the entire component.

| ID | Criterion | What to check |
|----|---|---|
| **C1** | Layer Structure & Naming | Semantic names (`leading-icon`, `content`) — not Figma defaults (`Frame 42`, `Group 7`). Logical hierarchy. |
| **C2** | Variant & Property Naming | Booleans as `true`/`false`. Enums hyphenated. Clean, consistent conventions. |
| **C3** | Token Coverage | All color, spacing, typography, and radius values bound to tokens. No hardcoded values. |
| **C4** | Native Mappability | Maps to a native primitive (`DisclosureGroup`, `Button`, `List`). No web-only patterns. |
| **C5** | Interaction State Coverage | All expected states as variants — default, pressed, focused, disabled. |
| **C6** | Asset & Icon Quality | Vector component instances, not raster/PNG. Token-based coloring for native tinting. |

A seventh criterion, C7 · Code Connect Linkability, is deferred until the native library ships. It is not scored and does not appear on component pages.

---

## Native Status Levels

The overall native readiness of a component, set by the worst of C1–C6.

<table>
<thead><tr><th>Status</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><span class="badge badge-ready">Ready</span></td><td>Ready as-is. Clean structure, maps well to native.</td></tr>
<tr><td><span class="badge badge-refine">Needs Refinement</span></td><td>Minor issues to resolve before handoff.</td></tr>
<tr><td><span class="badge badge-rework">Requires Rework</span></td><td>Needs redesign before native translation.</td></tr>
<tr><td><span class="badge badge-na">Not Applicable</span></td><td>Web-only or removed — skip native assessment.</td></tr>
<tr><td><span class="badge badge-fix">Fix</span></td><td>The component needs a fix to pass.</td></tr>
</tbody>
</table>

The sidebar dot follows the badges: red = `restructure` or native Requires Rework · orange = `fix` or native Needs Refinement · grey = `remove` / `consolidate` / `product-layer` · none = `keep` + Ready.

---

## Combined Status

<table>
<thead><tr><th>DS Health</th><th>Native Status</th><th>Meaning</th></tr></thead>
<tbody>
<tr><td><span class="badge badge-keep">Keep</span></td><td><span class="badge badge-ready">Ready</span></td><td>Ship it.</td></tr>
<tr><td><span class="badge badge-fix">Keep / Fix</span></td><td><span class="badge badge-refine">Needs Refinement</span></td><td>Minor fixes, assign to DS team.</td></tr>
<tr><td><span class="badge badge-restructure">Fix / Restructure</span></td><td><span class="badge badge-rework">Requires Rework</span></td><td>Significant work before handoff.</td></tr>
<tr><td><span class="badge badge-product-layer">Product Layer</span></td><td><span class="badge badge-na">Not Applicable</span></td><td>Move to product library.</td></tr>
<tr><td><span class="badge badge-remove">Remove / Consolidate</span></td><td><span class="badge badge-na">Not Applicable</span></td><td>Skip native assessment.</td></tr>
</tbody>
</table>

---

## Cross-Project Application — Rubric Notes

The 4 Traits and 6 Criteria are project-agnostic and transfer to components from any Figma file without modification. Only three inputs are project-specific *configuration*, not framework: the token naming convention (`main/{component}/…`), the standing font flags (Proxima Soft / BarkAda), and the Figma file key.

Two refinements surfaced when the framework was first run against a foreign file — a swipe-to-confirm CTA living in a screen-development file rather than a component library. Apply both when assessing components outside the GCash DS library.

### C3 — Separate "unbound tokens" from "not a DS file"

C3 (Token Coverage) assumes the file is a **token-backed component library**. Run against a **screen-development or prototyping file**, C3 will read Fail by default — every visual value is a raw literal because the file was never meant to be a token source.

Before scoring C3 Fail, check what the file's variable collections actually contain:

- **Design tokens** (color / spacing / radius / type) → score C3 normally against binding coverage.
- **Prototype state variables only** (e.g. `isSwiped`, `phone_number`, `amount_input`, `isHidden`) → the file is a *consumer* of a DS, not a *source*. Note this explicitly: "No design tokens in file — prototyping file, not a DS library source." The component still can't hand off without token binding, but the failure is a file-scope issue, not a component defect.

This distinction keeps a screen-dev component from reading as catastrophically broken when its only real C3 task is to adopt the upstream DS tokens.

### C5 — Add progress-range states for continuous / gesture components

C5 (Interaction State Coverage) is written for **discrete** states (default, pressed, focused, disabled). A **continuous or gesture-driven** component — swipe-to-confirm, slider, pull-to-refresh, drag handle — has no fixed state set; its defining behavior is the *progress between* its endpoints.

When the component is gesture-driven, score C5 against this expanded set instead of the discrete one:

- **Idle / start** — resting state before interaction.
- **In-progress (0–100%)** — the drag/scrub range, including a partial-then-released "snap back" path.
- **Threshold met / committed** — the success or completion end state.
- **Failure / cancelled** — interaction abandoned or rejected (often missing).
- **Disabled** — still required.

A two-variant set (e.g. `isSwiped = false | true`) cannot express a swipe and should score C5 Fail on coverage grounds, not pass just because both endpoints exist.

---

## GCash-Specific Patterns

Confirmed recurring patterns across the GCash DS. Use as a checklist during every assessment.

### Naming & Properties (C2)

The common naming problems are listed below. The full rules are on the Property Naming Guidelines page.

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

### Figma Modes vs Component Properties (C2)

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
- Mapping to the native API requires a Mode → API parameter translation that must be written manually
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

---

## Running an assessment

The process lives in the repo: writing a tab in `workflows/build/`, rechecking it in `workflows/review/`. This page defines what the scores mean.
