# Overview Build — command guide

> **Trigger:** the reviewer types `Component Build`
> **Last phase:** the reviewer types `Validate`
> **Scope:** the **Overview tab only** — writing it: the verdict box, DS Health, behavior, open issues, recommendations, and the badges those drive.

| Phase | Who acts | What happens |
|---|---|---|
| 1 · Intake | AI asks | Component name + Figma link + channel |
| 2 · Read | AI | Reads the live component and, if one exists, the data file. Reports what it found. Nothing written yet. |
| 3 · Write | AI | Writes the Overview tab to the rules in this file |
| 4 · Validate | Reviewer types `Validate` | AI runs the 8 checks in [OVERVIEW-REVIEW-GUIDE.md](../review/OVERVIEW-REVIEW-GUIDE.md) |

Related: [Playground](PLAYGROUND-BUILD-GUIDE.md) · [Code](CODE-BUILD-GUIDE.md) · [Changelog](CHANGELOG-BUILD-GUIDE.md) · rechecking an existing Overview tab: `Component Review`. Shared setup, house rules and reading Figma: [workflows/README.md](../README.md). What traits, verdicts and C1–C6 mean: [eb-ds-assessment-guide.md](../../eb-ds-assessment-guide.md).

---

### What the Overview tab contains

Six sections, in this order. Anything else comes out.

0. **Header — the verdict box** (`meta.verdict`): a direct title that **opens with the verdict word** and gives the reason (`Fix — three findings to close`), then a text of **at most two lines** on the page — about 240 characters at the page's measure (sweep `M3`; the reference page sits at 163). It states the verdict, not the component's history: what is wrong now and what closing it takes. Anything longer belongs in Open Issues. The box colour follows the verdict kind — keep green, fix amber, restructure red, consolidate amber, product-layer and remove neutral — so a box that renders uncoloured is a wrong `kind`.
1. **In Context** — the component on a real screen: a note (`inContextNote`) of **at most two lines** over a visual (`inContextHtml`: an `<img>`, or the `.ctx-placeholder` pattern until a screenshot exists). The sweep's rule O7 lists components with no visual.
2. **Live Preview** — one `Properties` panel with a control per variant property and per boolean. **No `Content` section and no text inputs**: text properties and slots are not controls; the preview shows placeholder text.
3. **DS Health** — exactly four traits
4. **Behavior** — required for interactive components; omitted for display-only ones
5. **Issues** — Open │ Resolved
6. **Recommendations** — Design │ Applied

---

# How to write it — plain language, always

**This applies to everything: the tables in chat, the data file, and the rendered page.** Write so a design student understands it on first read. Say what's wrong, say what to do, stop.

### Swap the jargon

| Don't write | Write |
|---|---|
| axis / property axis | setting (a dropdown you pick from) |
| variant | version (one combination of settings) |
| slot | swappable area (a spot you drop your own content into) |
| instance | copy of another component |
| token | named color/size from the system |
| orthogonal | independent — changing one doesn't affect the other |
| parity | the same options on both sides |
| consolidate the family | merge the components into one |

### Rules

1. **Cut every word you can.** "The pending toast shows a flat gray circle instead of a spinning loader" beats "The Pending appearance ships a `Placeholder` instance wrapping an `icon-placeholder` rectangle rather than an animated spinner."
2. **Lead with the problem in the headline.** "The icon can't be swapped." not "Leading icon is a bare instance, not a slot."
3. **One idea per sentence.** Break up anything with a semicolon or a dash-clause pile-up.
4. **Say why it matters** when it isn't obvious — "so developers can wire them up directly."
5. **Name the blocker plainly.** "Blocked until the design system has a spinner component" — not "blocked on a DS spinner component existing."
6. **Recommendations are instructions.** Start with a verb: "Rename the duplicate layers." "Fill in the red version's gaps."
7. **Don't hedge.** If it might be intentional, say so in one clause and move on.

### What stays

- **Criterion tags (C1–C6)** — they're how the site groups findings.
- **Node IDs** — so the reviewer can jump straight to the layer in Figma.
- **Property and layer names in `<code>`** — the real names, spelled exactly as Figma has them.

---

# Phase 1 — Intake

On `Component Build`, the AI replies with exactly this form and waits:

```
Component Name:
Component Link:
Figma Channel:   (the code from the Cursor Talk To Figma plugin — blank if already joined)
```

**New component (no data file yet):** create it in the CMS (Components → Create), or copy a sibling's JSON to `<slug>.json`. The site and the nav manifest pick up every file in the folder — nothing to register.

---

# Phase 2 — Read

Read the live component and report what it has: the property panel (every variant property, boolean, text property and slot — booleans are invisible to `get_node_info`, so read the panel itself), the variant count, the layer structure, token bindings, states and assets. If a data file exists, list what the Overview tab already says.

Sort every finding into one of the four decision buckets before writing it:

| Bucket | Meaning | Who acts |
|---|---|---|
| **Fix** | A rename/edit in Figma | Reviewer (with permission) or the designer |
| **Your decision** | Intentional-by-design vs a real gap | **Ask the designer — never assume** |
| **Delegated** | e.g. a `shape_full` BOOLEAN_OPERATION icon | Iconography team |
| **Blocked** | e.g. a pending toast waiting on a DS spinner component | Another component or team |

> Recurring lesson: don't file "intentional" choices as issues. Ask first. Several findings have turned out to be deliberate — a red-dot layer, a `Hover` state name, an always-on subtext, a slotted button.

When something is a judgment call (merge vs keep, slot vs booleans, rename target), propose an option with rationale and ask, rather than assuming.

---

# Phase 3 — Write the Overview tab

Write **only the Overview-tab content** of `<slug>.json`.

| Overview field | What to write |
|---|---|
| `overview.traits` | All four DS Health traits — Reusable · Self-contained · Consistent · Composable — each rated `pass` / `partial` / `warn` / `fail` |
| `overview.open` | One item per finding: **headline + body + tag** (`C1`–`C6`). No bare strings, no missing tags |
| `overview.recommendations` | One item per recommendation, tagged with one of the ten tags: Rename · Property · Slot · State · Token · Asset · Composition · Family · A11y · Docs |
| `overview.resolved` / `overview.appliedRecommendations` | Empty on a first build; they fill when a review moves items in |
| `overview.behavior` | **Required** when the component is interactive; **omitted** when it is display-only |
| `meta.verdict` | The verdict box, per section 0 above |
| `meta.node` · `meta.figmaUrl` · `meta.description` | Point at the component set you read |

**Nothing on Code Connect.** C7 does not exist on the page. If a finding is about Code Connect, do not file it.

**A `remove` verdict** gets no open issues and no recommendations — one infobox pointing to the canonical sibling.

## Make every badge, status, and indicator agree

This is where a page most often ends up contradicting itself:

- **DS verdict badge** (`meta.verdict`) — `keep` only when all four traits pass.
- **Sidebar nav dot** (`meta.badges`) — red = `restructure` · orange = `fix`, or native status `refine` / `rework` · grey = `remove` / `consolidate` / `product-layer` · no dot = `keep` + `ready`. *(This lives in `meta`, not `overview`, but it's driven by the same verdict, so write it in the same pass.)*
- **Native status badge** — reflects the current native readiness (worst of C1–C6).
- **No contradictions** — no trait may say the opposite of an open issue.

Then **build and read the page**:

```bash
cd astro-site && npm run build
```

The build catches schema breakage; it does **not** catch stale prose — read the rendered page at `http://localhost:4321/components/<slug>` (`npm run dev`, plus `cd auth-backend && npm run dev` for the sign-in gate, or `PUBLIC_AUTH_DISABLED=true`).

---

# Phase 4 — `Validate`

The reviewer types `Validate`. The AI runs **the 8 checks in [OVERVIEW-REVIEW-GUIDE.md](../review/OVERVIEW-REVIEW-GUIDE.md)** and reports in that guide's format. No content is edited during validation.

---

# Reference — Property Naming Guidelines

**All naming follows the team's Property Naming Guidelines (Notion):**
https://almondine-lycra-2ad.notion.site/Property-Naming-Guidelines-39c2db45edd4801fa59dfda3a3ab3787

The site mirrors it at `/eb-property-naming-guidelines`. A component that diverges is a **C2** (Variant & Property Naming) finding.

### Casing by property type

| Property type | Casing | Examples |
|---|---|---|
| **Variant / Standard** | **PascalCase** | `Variant`, `Size`, `State`, `Status`, `Appearance`, `Orientation`, `Placement`, `Density`, `HelperText`, `ErrorMessage`, `BadgeCount` |
| **Boolean** | **lowerCamelCase + verb prefix** | `isDisabled`, `isLoading`, `isSelected`, `hasLeadingIcon`, `hasBadge`, `canDismiss`, `shouldWrap` |
| **Text** | **PascalCase** | `Title`, `Label`, `Description`, `Value`, `Placeholder` |
| **Instance-swap / Node (slot)** | **PascalCase** | `LeadingIcon`, `Avatar`, `Illustration` |

> **Multi-word names are joined PascalCase, NOT spaced** — `HelperText`, `BadgeCount`, `LeadingContainer` — never `Helper Text` / `Badge Count` / `Leading Container`.

### Boolean verb prefixes

| Prefix | Purpose | Examples |
|---|---|---|
| `is` | current state / condition | `isDisabled`, `isLoading`, `isSelected` |
| `has` | presence of content / children | `hasLeadingIcon`, `hasBadge`, `hasFooter` |
| `can` | capability / permission | `canDrag`, `canDismiss`, `canResize` |
| `should` | configurable behavior | `shouldWrap`, `shouldAnimate`, `shouldCloseOnSelect` |

Use **positive** names (`isDisabled`, not `disable` / `notVisible` / `hideBadge`).

### Property values — Title Case, semantic, standardized

| Property | Standard values |
|---|---|
| Size | `XS · SM · MD · LG · XL` |
| Variant | `Primary · Secondary · Ghost` |
| **State** (interaction) | `Default · Hover · Pressed · Focused · Disabled` |
| **Status** (semantic) | `Success · Warning · Error · Pending` |
| Theme | `Light · Dark` |

- Booleans are `true` / `false` (not `Yes`/`No`).
- **Semantic, not appearance** — `Variant=Primary` not `=Blue`; `Status=Success` not `=Green`.

### Key principles

1. **Separate State from Status.** `State` = interaction (Default/Hover/Pressed/Disabled); `Status` = meaning (Success/Warning/Error). Never `State=Success`.
2. **Separate structure from content.** Structure = booleans (`hasHeader`); content = text properties (`Title`, `Description`).
3. **Generic, not component-specific.** `Label` / `Description` — never `PriceLabel` / `NavigationDescription`. The component supplies context.
4. **One responsibility per property.** No catch-all `Style` / `Configuration` / `Settings`.
5. **Consistent terminology** across the whole system (`HelperText` everywhere, not `SupportText` / `HintText`).
6. **Align with engineering** (`isDisabled` ↔ `isDisabled`, `Variant` ↔ `variant`).
7. **Readability** — `BadgeCount`, not `UserReferenceIdentifier`.

### Text content hierarchy

| Group | Order |
|---|---|
| Primary | `Preamble · Title · Subtitle · Blurb · Description` |
| Form | `Label · Placeholder · Value · HelperText · Hint · ErrorMessage` |
| Supporting | `SupportingText · Caption` |
| Metadata | `BadgeCount · Price · Date · ReferenceNumber` |

### Governance checklist (new property)

- [ ] Approved naming convention (casing + prefix)
- [ ] Not a duplicate of an existing property
- [ ] Single responsibility
- [ ] Semantic terminology
- [ ] Aligned with engineering where applicable
- [ ] Reusable across components
- [ ] Documented in the Property Catalog

**Anti-pattern to watch for:** many independent booleans (e.g. 7–8 `has*` toggles = 256 theoretical combos). Prefer collapsing to named **slots** + a content enum (how Empty State went from 7 booleans to a clean 2×2). Interaction states belong on one `State` axis, not a separate `isPressed` boolean.

---

# Guardrails

- **Figma is read-only.** Problems go in the component data as open issues, not fixes in Figma. The committed root `CLAUDE.md` is the policy; a local `.claude/CLAUDE.md` may grant per-request write permission on the owner's machine only.
- **Overview tab only.** Don't touch Playground, Code, or Changelog in this run.
- **Never commit or push** unless explicitly told. `main` auto-deploys to production.
- **One component per run.**
