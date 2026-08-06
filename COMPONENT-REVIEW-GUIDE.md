# Component Review Guide — East Blue Design System

A step-by-step guide for assessing a GCash DS component against its Figma source and updating its assessment on the site. Written for a reviewer picking this up fresh.

**How to use this guide:** the **Workflow** below is what you run, start to finish. The **Reference** section beneath it holds the details each step leans on — file keys, Figma tools, naming rules, criteria. Read the workflow first; dip into reference as needed.

### What a review produces

Each component has a data file at `astro-site/src/data/components/<slug>.ts` that renders its page at `/components/<slug>`. A review compares the **live Figma component** to the **documented assessment**, then updates the assessment so it reflects reality.

The output is an updated `<slug>.ts` — specifically its **Open Issues, Design Recommendations, DS Health, and menu badge** — plus a build that passes. Nothing is committed or deployed unless the owner explicitly says so.

---

# The Component Review workflow

## Step 1 — Trigger

The reviewer types:

```
Component Review
```

## Step 2 — The AI asks for the target

The AI replies with a short intake form:

```
Component Name:
Component Link:
Figma Channel:   (the code from the Cursor Talk To Figma plugin)
```

> **Figma Channel is required to validate.** Reading the assessment site only needs the data file, but *validating* against the live component needs a Figma connection. If the reviewer already joined a channel this session, they can leave it blank.

## Step 3 — The AI returns the current assessment as tables

The AI reads `astro-site/src/data/components/<slug>.ts` and prints the current Overview-tab items verbatim — nothing is validated yet, this is the baseline.

The site renders these as segmented tabs — **Open Issues │ Resolved** and **Design │ Applied**, each with a count (e.g. `Open Issues 1 · Resolved 9`). So the AI prints all four lists, giving the reviewer the full picture and the running counts. If a list is empty, it says so (`Resolved: none yet`).

**Open Issues** *(overview.open)*

| Open Issue Item | Verdict | Key Open Issue | Status | Solution |
|---|---|---|---|---|
| Short headline of the issue | Criterion tag (C1–C6) | The detail + rationale | `Open` | Recommended fix / design decision |

**Resolved Issues** *(overview.resolved)*

| Resolved Issue Item | Verdict | Status | How it was resolved |
|---|---|---|---|
| Short headline | Criterion tag (C1–C6) | `Resolved` | Version + what changed, e.g. `v2.0: rebuilt as vectors` |

**Design Recommendations** *(overview.recommendations)*

| Design Reco Item | Verdict | Status | Solution |
|---|---|---|---|
| Short headline of the reco | Reco tag (Rename / Property / Slot / State / Token / Asset / Composition / Family / A11y / Docs) | `Open` | Recommendation / how to apply |

**Applied Recommendations** *(overview.appliedRecommendations)*

| Applied Reco Item | Verdict | Status | What shipped |
|---|---|---|---|
| Short headline | Reco tag | `Applied` | `vX: Applied — …` |

- **Verdict** = the item's tag — the criterion (C1–C6) for an issue, the recommendation tag for a reco.
- **Status** starts as `Open` for every open row; it changes only after validation.
- **Code Connect (C7) items are omitted from these tables entirely** — see Step 5.

## Step 4 — Reviewer confirms, then validation begins

The reviewer confirms the list, and the AI validates each item against the live Figma component, **one at a time**, always responding in table form. Per item the AI must:

- Mark the **Status** — `Resolved` (cite the Figma evidence) · `Partial` (what's done vs left) · `Still Open` · `Intentional` (by design — dismiss, don't file).
- **Give a recommendation and help with the design decision** — not just a verdict. When something is a judgment call (merge vs keep, slot vs booleans, rename target), the AI proposes an option with rationale and asks, rather than assuming. Recurring lesson: several "issues" turn out to be intentional — *ask first.*
- The reviewer is free to respond however they like between items; the AI keeps the running table updated.

New findings surfaced during validation are added as extra rows, tagged the same way, and sorted into the four decision buckets (see *Reference → The four decision buckets*).

## Step 5 — Skip all Code Connect items

**Every Code Connect / C7 item is skipped** — not validated, not counted, not updated. The native library doesn't exist yet, so C7 linkability is permanently `Blocked`. Leave any existing C7 entry untouched in the data file; just don't surface or action it.

## Step 6 — When validation is done, update ONLY the Overview tab

Update **only the Overview-tab content** of `<slug>.ts` — leave Style / Code / Changelog tabs alone (full re-assessment is deferred while the site redesign is pending):

| Overview field | Action |
|---|---|
| `overview.open` | **Move** resolved issues out (don't delete); keep genuinely-open ones |
| `overview.resolved` | Receive each fixed issue → **populates the Resolved tab** (body prefixed with version + criterion) |
| `overview.recommendations` | **Move** applied recos out; keep still-open ones |
| `overview.appliedRecommendations` | Receive each shipped reco → **populates the Applied tab** (body prefixed `vX: Applied — …`, keep its tag) |
| `overview.traits` | Re-rate DS Health — all four (Reusable · Self-contained · Consistent · Composable) |
| `overview.behavior` | Update if interaction/behavior changed |

**It's a move, not a delete.** A resolved issue leaves `overview.open` and lands in `overview.resolved`; an applied reco leaves `overview.recommendations` and lands in `overview.appliedRecommendations`. That's what drives the segmented **Open Issues │ Resolved** / **Design │ Applied** tab layout and its counts. Never drop an item on the floor — if it's done, it belongs in the resolved/applied tab as the audit trail.

When the component was rebuilt on a **new node**, also repoint the meta: `meta.node`, `meta.figmaUrl`, `meta.verdict`, `meta.description`.

> **The trap:** updating the issue lists but not DS Health makes the page contradict itself — Resolved says "rebuilt as vectors" while a trait still says "raster-baked." Keep them in sync.

## Step 7 — Make every badge, status, and indicator reflect reality

After the content update, verify the visual signals are consistent — this is where the page most often ends up self-contradicting:

- **DS verdict badge** (`meta.verdict`) — `keep` only when all four traits pass.
- **Sidebar nav dot** (`meta.badges`) — `rework/restructure/consolidate/remove/product-layer` → red · `fix/refine` → amber · `keep` alone → no dot. *(This lives in `meta`, not `overview`, but it's driven by the same verdict, so update it in the same pass.)*
- **Native status badge** — reflects the current native readiness, minus C7.
- No stale prose: if Resolved says "rebuilt as vectors," no trait may still say "raster-baked."

Then **build and verify**:

```bash
cd astro-site && npm run build
```

The build catches schema breakage; it does **not** catch stale prose — read the rendered page. For a live preview: `npm run dev` (site → `:4321`) plus the auth backend (`cd auth-backend && npm run dev` → `:4080`); sign in with Google to view gated pages.

> **Guardrails that always apply:** Figma is read-only by default — any edit needs per-request permission (see *Reference → Editing Figma safely*). Never commit or push unless explicitly told; `main` auto-deploys to production.

---

# Reference

## Setup & file keys

| Item | Detail |
|---|---|
| **Connect to Figma** | Open the *Cursor Talk To Figma* plugin in Figma; it gives a channel code. Join it. |
| **Get the node** | From a Figma URL `…?node-id=X-Y`, the node ID is `X:Y` (dash → colon). |
| **Sticker Sheets v2** | `HwWDwPit2xJjDH4zszOZ5o` — the canonical library the site points at. |
| **2026 Working File** | `pbxY8a2xcIfVZKxwnud9Xe` — staging; components live here before being copied to Sticker Sheets. Note which file a URL is in. |

**"Node not found" troubleshooting:**
- The old node was **deleted** because the component was rebuilt on a new node → get the new URL.
- The node is on a **different Figma page** than the one currently open → the plugin only reads the *active* page's subtree in full. Ask for the page to be opened, or for the node to be selected.

## Inspecting Figma (read-only)

| Tool | Use |
|---|---|
| `get_node_info` (depth 1) | The variant matrix — property axes and variant names |
| `get_node_info` (depth 3–4) | A variant's internals — slots, layers, tokens |
| `export_node_as_image` | See it rendered |
| `scan_text_nodes` | Grab **all** text-node IDs in one call (avoids reading every variant) |

## The four decision buckets

Every finding — documented or new — sorts into one of four buckets:

| Bucket | Meaning | Who acts |
|---|---|---|
| **Fix** | A rename/edit in Figma | Reviewer (with permission) or the designer |
| **Your decision** | Intentional-by-design vs a real gap | **Ask the designer — never assume** |
| **Delegated** | e.g. a `shape_full` BOOLEAN_OPERATION icon | Iconography team |
| **Blocked** | Code Connect registration | Native library (doesn't exist yet) |

> Recurring lesson: don't file "intentional" choices as issues. Ask first. Several findings have turned out to be deliberate — a red-dot layer, a `Hover` state name, an always-on subtext, a slotted button.

## Editing Figma safely (only with permission)

**Read-only is the default. Edits are allowed only after asking for, and receiving, permission — per request, never standing.** (This is the local `.claude/CLAUDE.md` rule; the committed root `CLAUDE.md` is stricter "never modify".)

- **State the exact change before asking**: node ID, property, old → new.
- **Prefer the Figma property panel** for renaming a *variant property* or *text property* — one operation updates all variants and renames the actual property. Per-node `rename_node` only renames layer display names and **does not propagate** across variants.
- **When you must sweep** (`rename_node` per variant): each call returns the node's *previous* name — use that to catch a wrong ID. **Re-read the whole set afterward** to confirm no stray property value or conflicting variant was created.
- **Slots propagate; text nodes and instances do not.** Renaming a slot in one variant updates its siblings; renaming a `#text` node or an instance does not — you must do all of them.

**Known risk:** a variant's property values *are* its node name, so changing a variant property is a `rename_node`. A typo silently creates a stray property or a conflicting variant — it does not throw. Always verify.

## Editing the data file

- **Key style.** Most data files use JSON-quoted keys (`"open": [`); a few older ones use plain TS object literals (`open: [`). Match the file's existing style when editing.
- **Single-value string fields** (`node`, `description`, headlines) — edit them directly, never with a scripted find-and-replace; a mismatched delimiter silently corrupts adjacent lines.
- **New component (no existing file):** create `<slug>.ts` with a full `ComponentData` (model it on a sibling), then register it in `_index.ts` — add the import and a `componentMap` entry. The nav manifest derives from `componentMap` automatically, so no manual manifest edit is needed.

## Property Naming Guidelines — the source of truth

**All naming follows the team's Property Naming Guidelines (Notion):**
https://almondine-lycra-2ad.notion.site/Property-Naming-Guidelines-39c2db45edd4801fa59dfda3a3ab3787

The site mirrors it at `/eb-property-naming-guidelines`. Enforce these when reviewing — a component that diverges is a **C2** (Variant & Property Naming) finding.

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

## Criteria reference (C1–C7)

| ID | Criterion | Note |
|---|---|---|
| C1 | Layer Structure & Naming | Semantic names, no `Frame 42` / `Group 7` |
| C2 | Variant & Property Naming | Follows the Property Naming Guidelines |
| C3 | Token Coverage | Values bound to design tokens |
| C4 | Native Mappability | Maps to native primitives, no web-only patterns |
| C5 | Interaction State Coverage | Default, pressed, focused, disabled |
| C6 | Asset & Icon Quality | Vector instances, token-based coloring |
| C7 | Code Connect Linkability | **Skipped** — native library doesn't exist yet |

## Git & tools

**Never commit or push unless explicitly told to.** `main` auto-deploys to production. All review work stays local and uncommitted until the owner says otherwise.

**Figma tools (read-only inspection):** `join_channel` · `get_node_info` · `get_selection` · `get_document_info` · `export_node_as_image` · `scan_text_nodes`. Write tools (`rename_node`, etc.) — only with per-request permission, per *Editing Figma safely* above.
