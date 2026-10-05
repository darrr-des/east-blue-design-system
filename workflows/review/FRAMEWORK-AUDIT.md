# Framework audit — the assessment as it stands, and what to trim

> **Date:** 13 September 2026 · **Branch:** `darrr-des` · **Measured over:** all 95 component data files
> **Re-run the numbers:** `cd astro-site && node scripts/audit/framework-sweep.mjs`

The site promises one assessment framework applied the same way to every component. Today the framework is written down in **six places**, they disagree or fall silent in **twenty-five places** (F1–F25 below), and **no component satisfies every rule the guides set** — the median component passes 20 of 28. This document does three things:

1. **States the framework as it exists** — every source, every tab, every fixed content list.
2. **Lists where the sources contradict each other** and where the data has drifted from them, with counts.
3. **Proposes the trimmed framework** — one fixed list per tab — and the decisions the owner must make before a sweep.

Sections 1–6 record the state found on 13 September 2026, before any change. Section 7 records the fix pass applied the same day.

---

# 1. The framework today

## 1.1 The six sources

| # | Source | What it governs | State |
|---|---|---|---|
| 1 | `eb-ds-assessment-guide.md` (rendered at `/eb-ds-assessment-guide`) | Methodology: 4 traits, 7 criteria, verdicts, native status, GCash patterns | Methodology half is current. The other half documents the **legacy HTML build** (`assessment-src/build.js`, a two-tab page) and a progress table marking every component "Re-assessing" |
| 2 | Root `CLAUDE.md` | Rule Zero, review triggers, data schema, Style/Code/Colors/Variants conventions, 9-point scoring, Pre-Delivery checklist | Carries **its own copy** of the Style-tab conventions, and they differ from the guides |
| 3 | `.claude/CLAUDE.md` (local, gitignored) | Same as root, plus the Figma write-with-permission rule | Missing Rule Zero and the review triggers; names `matchLayer().reason` where the code's field is `status` |
| 4 | `workflows/review/` — README + 4 guides | Per-tab rules, the 4-phase run, the Validate checks | The newest and most specific source. Three guides have a Validate phase; the Overview guide does not |
| 5 | `src/data/types.ts` | The schema every file must satisfy | Allows what the guides forbid (C7 tags, populated `codeConnect`, any section label, any colors-table columns) |
| 6 | `scripts/audit/*.mjs` | What is *measured* as complete | Three scripts, three answers: `audit-progress` counts 96 components, `quality-check` scores 7, the gaps report says 79 |

## 1.2 What the page renders, tab by tab

`[slug].astro` renders sections only when the data has them, so a missing section is invisible rather than flagged. This is the full list of what can appear.

| Tab | Section (in render order) | Data field | Guide that owns it |
|---|---|---|---|
| Header | Name · description · Figma link · DS verdict badge · Native status badge · verdict box | `meta.*` | Overview (badges only) |
| Overview | In Context | `overview.inContextNote / inContextHtml` | **none** |
| Overview | Live Preview | `overview.livePreviewHtml` | **none** (lint checks wrappers only) |
| Overview | DS Health | `overview.traits` | Overview |
| Overview | Behavior | `overview.behavior` | Overview ("update if changed") |
| Overview | Issues — Open │ Resolved | `overview.open / resolved` | Overview |
| Overview | Recommendations — Design │ Applied | `overview.recommendations / appliedRecommendations` | Overview |
| Style | Spec card × N (header · preview · panel · 4 sections · DEV code) | `style.specCards[]` | Style |
| Style | Colors table (one per card index) | `style.colorsTables[]` | Style |
| Code | Installation → Property Mapping → Usage Snippets → Accessibility → Usage Guidelines → Scorecard → Code Connect → Variants Inventory | `code.*` | Code |
| Changelog | Entries | `changelog[]` | Changelog |

## 1.3 The rules each guide sets (the fixed content lists)

**Overview** (`Component Review`): open issues C1–C6 with headline + body + tag; resolved issues; recommendations with one of 10 tags; applied recommendations; 4 traits re-rated; verdict badge (`keep` only when all four pass); nav dot; C7 skipped everywhere. No Validate phase, no check table.

**Style** (`Style Review`, 19 checks): one card per driving-property value (`Style` → `Type` → `Variant` → `Appearance` → first panel property); bare title; description `""`; preview server-rendered and checked against an export; panel mirrors the Figma property panel minus slots (`[]` when empty); exactly four sections **Properties → Colors → Typography → Layout**; Colors one row per element with `variants` for state; Typography style names only, every row `matched`; Layout **only** `Height · Width · Radius · Padding H · Padding V · Gap · Alignment`; colors table Role │ Element │ Token │ Value (interim: `columns: ["Token","Value"]`); DEV code live via `getSnippet`; preview in the component's own faces.

**Code** (`Code Review`, 14 checks): Installation with SPM + Gradle + Import on family coordinates, version `1.0.0` while planned; Property Mapping one prose row per property; Usage Snippets one per driving value; Accessibility with both platforms; ≤ 4 guideline pairs; Scorecard C1–C6 with C7 left untouched; Variants Inventory with total, multiplier, summary and breakdown; `codeConnect: []`.

**Changelog** (`Changelog Review`, 11 checks): newest first; semver; `Month YYYY`; header cites file + node; one row per change with a delta; every resolved issue and applied recommendation has a row; history never rewritten.

---

# 2. Where the sources contradict each other

Severity: **Blocker** — produces different results per component or actively misleads · **Drift** — two sources disagree, one is stale · **Gap** — no rule exists, so every reviewer decides alone.

### Blockers

| # | Finding | Source A | Source B | Measured |
|---|---|---|---|---|
| F1 | **Spec-section order is specified two ways.** | Root `CLAUDE.md` Card Anatomy: Properties + Colors, then **Layout + Typography** | Style guide §3.3: Properties → Colors → **Typography → Layout** | 105 cards use the CLAUDE.md order, 84 the guide order, 4 neither |
| F2 | **Colors table has three specs.** | `CLAUDE.md`: *Colors by State* with `Default │ Pressed │ Disabled`, or *by Appearance Mode* with a MODE column. `_helpers.ts`: three builder shapes (Stateless `['Default']`, Interactive, Multi-mode) | Style guide §3.5: `Role │ Element │ Token │ Value`, interim `["Token","Value"]` | **36 distinct column shapes** across the data. First table per component: 25 `Token│Value`, 20 `Default`, 12 `Value`, 5 `Default│Pressed│Disabled`, 4 none, 29 other. **25 distinct titles** |
| F3 | **Layout keys are specified two ways.** | `CLAUDE.md`: "include height, width, padding, radius, **border, icon sizes, slot dimensions**" | Style guide: only the seven keys, "no icon sizes, no slot dimensions" | 58 components have keys outside the seven. `Corner radius` (19) and `Border radius` (12) are the guide's `Radius` misspelled; `Border` (14), `Padding` unsplit (14), `Icon size` (9) |
| F4 | **C7 / Code Connect is handled four ways.** | Overview + Code guides: skip C7, `codeConnect: []`, scorecard C1–C6 | `CLAUDE.md` lists C7 as a valid tag and scores "Figma ↔ code mapping"; `quality-check.mjs` scores `codeConnect` rows ≥ 3 as **pass** — so emptying it, as the guide requires, lowers the score | 66 of 95 components carry an open C7 issue; **64 of the 67 are the identical sentence** "Code Connect mappings not registered." Site-wide, 67 of 96 open issues are this line. All 95 scorecards have a C7 row; 19 still have Code Connect rows |
| F5 | **Two scoring systems, neither measured.** | Guides: 19 + 14 + 11 checks, Done/Partial/Missing/Broken | `CLAUDE.md`: 9-point + 7-point Pre-Delivery, implemented in `quality-check.mjs` | `quality-check.mjs` cannot parse a file that references a const, so it silently scores **7 of 95** and reports "average 5.9/9". `audit-progress.mjs` counts **96** (it reads `_helpers.ts` as a component). `component-gaps-report.md` says 79 complete |
| F6 | **The Style guide forbids and prescribes deriving.** | Line 28: "Deriving what you could have read" is a failure; write what the panel says | Line 297: padding, gap and alignment are "not exposed — derive them from `absoluteBoundingBox`… say 'derived'" | Two rules for the same value in one guide |

### Drift

| # | Finding | Source A | Source B | Measured |
|---|---|---|---|---|
| F7 | **Card header: README says shipped, code says not.** | README pre-work 1 + 2: node-copy button removed and description conditional, "✅ Shipped 2026-09-01" | `SpecCard.astro` on `main` and on this branch still renders `.spec-node-copy` and `<p class="spec-card-desc">` unconditionally | 51 components with `description: ""` render an empty paragraph; 44 still carry a description |
| F8 | **Typography rule contradicts itself inside `CLAUDE.md`.** | Card Anatomy item 5: "type spec right (DS text style ref **+ font/size/tracking/line-height**)" | Typography Section Rules, same file: "No Font, Size, Tracking or Line-height rows" | 16 components still have font rows; 20 have Typography rows with no style name; 5 have `—` rows |
| F9 | **Style guide check numbering.** | Heading "The 19 checks"; check 19 sits between 13 and 14; §4a calls the font check "check 18" | Report rules: "always all 18"; sample report has 18 rows | — |
| F10 | **Overview guide has no Validate phase.** | README: "Every command has the same four phases… reviewer types `Validate`" | Overview guide: steps 1–7, no check table, no Done/Partial/Missing/Broken | The tab with the verdict is the only one without a validation report |
| F11 | **Two Figma toolchains.** | `CLAUDE.md` + methodology: Dev Mode MCP (`get_design_context`, `get_metadata`, `get_screenshot`, `get_variable_defs`) | Guides: Talk To Figma plugin (`join_channel`, `get_node_info`, `export_node_as_image`, `scan_text_nodes`, `get_styled_text_segments`) | Reviewer reads two tool lists; each guide's limits ("the plugin can't return…") apply to only one |
| F12 | **Three Figma write policies.** | Root `CLAUDE.md`: never modify | `.claude/CLAUDE.md` + Overview guide: edit with per-request permission; Style/Code/Changelog guides: read-only | Both say which wins; a reviewer opening a guide still gets two answers |
| F13 | **Sidebar dot rule.** | Overview guide step 7: `rework/restructure/consolidate/remove/product-layer` → red, `fix/refine` → amber | `Sidebar.astro`: only `restructure` → red; `fix` or native `refine` → orange; `remove/consolidate/product-layer` → **grey** | Guide describes colours the site does not paint |
| F14 | **Component count.** | `CLAUDE.md` "78 + cardless" · `types.ts` "79" · README "90" and "95" · Code guide "74 + 21" | Actual data files: **95** | — |
| F15 | **Methodology guide documents a site that no longer exists.** | `eb-ds-assessment-guide.md`: `assessment-src/build.js`, two-tab Assessment/Changelog page, `<!--@meta-start-->` blocks, "Recommended: Claude Sonnet", progress table with all components "🔁 Re-assessing" and verdicts such as Banner = Restructure | Astro site, four tabs, `<slug>.ts`; data has **71 of 95 as `keep`** | This is the page linked as the source of truth |
| F16 | **Worklist numbers disagree.** | README: no Installation 38 · no Import 40 of 57 · old coordinates 21 | Code guide: no Import 68 of 91 · old coordinates 17 | Measured today: no Installation **29** · no Import **16 of 66** · old coordinates **1** (`tooltip`) |
| F17 | **`keep` rule not enforced.** | Overview guide: `keep` only when all four traits pass | Data | 7 `keep` components have a partial/warn trait: `ad-carousel`, `avatar`, `badge`, `checkbox`, `labeled-field`, `recipient-field`, `select-field` |
| F18 | **Install version.** | Code guide: pin `1.0.0` while planned | Data | 13 components on `2.0.0`, `2.1.1`, `2.0.5`, `2.2.1`, `1.1.3`, `2.0.1` |
| F19 | **Changelog hygiene.** | Changelog guide: `Month YYYY`, node in header, newest first, a row per resolved issue | Data | 10 bad dates (blank, `2026-05-19`, "March 2026 Fix"), 15 headers without a node, `avatar-group` not newest-first, **31 components** with resolved issues that have no changelog row |
| F20 | **`matchLayer` field name.** | Root `CLAUDE.md` + code: `.status` | `.claude/CLAUDE.md`: `.reason` (which is the prose sentence, not the enum) | — |
| F21 | **README open decision 6 is already closed.** | README: lint fails a card with `demoControls: []` — "relax the rule" | `preview-structure-lint.mjs` comment: "The empty array counts as present" | Listed as open, resolved in code |

### Gaps

| # | Finding | Measured |
|---|---|---|
| F22 | **The Overview tab has no fixed content list.** In Context, Live Preview, Behavior and the verdict box have no rule saying required or optional. | In Context on 41 of 95 · Behavior on 92 · verdict box on 89 (missing on `accordion`, `avatar`, `badge`, `button`, `checkbox`, `title-bar` — the most-visited pages) |
| F23 | **"May be cardless" is not a rule.** `remove` / `consolidate` / `product-layer` components may or may not have Style and Code tabs. | 12 of 17 have cards (up to 6 on `action-list-counter`), 5 do not. Audit counts both as complete; lint skips only the 5 |
| F24 | **Every audit script has its own parser.** Data files are 91 JSON-quoted and 4 plain-TS; each script regex-evals the export and special-cases the four. | Two of the three loaders silently skip or miscount files (F5) |
| F25 | **Plain-language rule bans the tag vocabulary.** The Overview guide says swap "slot", "token", "variant" for plain words; the canonical recommendation tags are `Slot`, `Token`, `Property`. | Minor, but a reviewer following the guide will rename tags |

---

# 3. Where the data drifts from the guides

Measured against the **guides** as written (source 4), because they are the newest source and what a reviewer runs. Where a decision in §4 picks the other spec, the affected row flips (F1, F2).

## 3.1 Rule by rule — components failing

| Code | Rule (tab) | Failing / 95 |
|---|---|---|
| S8 | Colors table in the interim `Token │ Value` shape (Style) | **67** |
| O4 | No open issue tagged C7 (Overview) | **66** |
| K1 | Installation complete: SPM + Gradle + Import, family coordinates, `1.0.0`, planned (Code) | **59** |
| S6 | Layout uses only the seven keys (Style) | **58** |
| K2 | Property Mapping grouped prose, no `=`, no `<code>` in the Figma cell (Code) | **53** |
| S3 | Card descriptions cleared (Style) | 44 |
| S5 | Four sections in guide order P → C → T → L (Style) | 44 |
| S7 | Typography is style names only: no font rows, no `—`, at least one resolved name (Style) | 35 |
| K5 | Usage Guidelines present, ≤ 4 pairs (Code) | 32 |
| L2 | Every resolved issue has a resolved changelog row (Changelog) | 31 |
| K3 | Usage Snippets present, component API (Code) | 30 |
| K8 | Variants total + multiplier + summary/collapse when > 10 (Code) | 30 |
| L1 | Entries dated `Month YYYY`, node in the header, newest first (Changelog) | 24 |
| K7 | Code Connect empty (Code) | 19 |
| S2 | Card titles are bare values (Style) | 16 |
| O2 | `keep` ⇒ all four traits pass (Overview) | 7 |
| M2 | Verdict box present (Header) | 6 |
| K4 | Accessibility answers both platforms (Code) | 6 |
| S9 | DEV code live — `getSnippet` defined (Style) | 3 (`alert`, `horizontal-voucher`, `vertical-voucher`) |
| O3 | Behavior table present (Overview) | 3 |
| O5 | Open items carry headline + tag (Overview) | 1 |
| M1 | DS verdict + native status badge pair (Header) | 0 |
| O1 | Four canonical traits (Overview) | 0 |
| O6 | Recommendation tags from the canonical ten (Overview) | 0 |
| S1 | Cards present, or cardless by verdict (Style) | 0 |
| S4 | `demoControls` declared on every card (Style) | 0 |
| S10 | DEV code non-empty and component API, not container code (Style) | 0 |
| K6 | Scorecard has C1–C6 (Code) | 0 |

## 3.2 How many rules each component passes (of 28)

| Passed | Components |
|---|---|
| 28 | **none** |
| 27 | 13 |
| 26 | 10 |
| 25 | 5 |
| 24 | 7 |
| 23 | 2 |
| 22 | 3 |
| 21 | 6 |
| 20 | 14 |
| 19 | 10 |
| 18 | 5 |
| 17 | 7 |
| 16 | 10 |
| 15 | 3 |

Median: **20 of 28**. The per-component matrix is in the script's `--json` output and in the published audit page.

## 3.3 Worth knowing before the sweep

- **The C7 purge is mechanical.** 64 identical open-issue lines, 95 scorecard rows, 19 `codeConnect` arrays. One pass, no Figma reading.
- **The `Radius` fix is mechanical.** 31 rows named `Corner radius` / `Border radius` are the guide's `Radius`.
- **DEV code is already live on 92 of 95.** The uncommitted work on this branch (20 demo scripts + `assessment.js`) closed most of the README's "25 frozen" gap; the README still says 25.
- **Plan A `variants` is in use on 63 components** — the README's "18 legacy demos rebuild sections with `innerHTML`" caveat measures **0** scripts today under a section-targeted check. The caveat in `types.ts` and `CLAUDE.md` is stale.
- **`tooltip` fails `npm run lint`** (two cards, no `previewHtml`) and is the one component still on `com.gcash.eastblue` coordinates.

---

# 4. The trimmed framework — proposal

One fixed list per tab. Anything not on the list is deleted, per README rule 2. Items marked **D#** need the owner's decision first (§5).

## 4.1 Header

| Item | Rule |
|---|---|
| Name · one-line description · Figma link | required |
| DS verdict badge | one of six; `keep` ⇔ all four traits `pass` |
| Native status badge | one of five (`empty` retired with C7) |
| Verdict box (`meta.verdict`) | required — one paragraph: what the verdict means for this component **(D11)** |
| `navGroup` | required for every family member; solo components omit |

## 4.2 Overview tab — five sections, this order

| # | Section | Rule |
|---|---|---|
| 1 | Live Preview | required; canonical `demo-layout` wrapper; controls mirror the Figma property panel |
| 2 | DS Health | exactly four traits, each with a one-sentence note |
| 3 | Behavior | required for interactive components; omitted for display-only, stated in the verdict box **(D6)** |
| 4 | Issues — Open │ Resolved | C1–C6 only; headline + body + tag; `remove` verdict → infobox only |
| 5 | Recommendations — Design │ Applied | ten tags |

Removed: **In Context** (41 of 95 filled; a screenshot slot with no rule) **(D6)** · **all C7 items** — replaced by one site-wide note that Code Connect is deferred until the native library exists **(D3)**.

Add: a Validate phase with a check table, like the other three guides **(F10)** — 8 checks: build · traits count · verdict ⇔ traits · badges match verdict · no C7 · every open item has headline + tag · every reco has a canonical tag · behavior present when interactive.

## 4.3 Style tab — one card per driving-property value

| Part | Rule |
|---|---|
| Title | the bare value |
| Header | title + DES/DEV toggle. Node stays in data, not rendered; description field removed from the schema **(D5)** |
| Preview | server-rendered default; verified against `export_node_as_image`; renders in the component's faces |
| Panel | mirrors the property panel minus slots; `[]` when nothing to control |
| Sections | exactly four: **Properties → Colors → Typography → Layout** **(D1)** |
| Properties | one row per property; driving property static |
| Colors | one row per element; `variants` for state / appearance; never a row per state |
| Typography | style names only; every row `matched`; anything else is `—` + a C3 issue |
| Layout | `Height · Width · Radius · Padding H · Padding V · Gap · Alignment` **(D4: add `Border`?)** |
| DEV code | live on both tabs via `getSnippet`; component API |
| Colors table | one per component: `Role │ Element │ Token │ Value` **(D2)** |

## 4.4 Code tab — seven sections, this order

Installation (planned · family coordinates · `1.0.0` · SPM + Gradle + Import) → Property Mapping (one prose row per property, slots and text marked) → Usage Snippets (one per driving value) → Accessibility (both platforms) → Usage Guidelines (1–4 pairs) → Scorecard **C1–C6** **(D3)** → Variants Inventory (total · multiplier · summary · breakdown). Code Connect: removed from the schema.

## 4.5 Changelog tab

Newest first · semver · `Month YYYY` · header cites file + node · one row per change with a delta · every resolved issue and applied recommendation has a row · history never edited. Backfill for the 31 components with unrecorded resolutions: one `patch` entry each, not one row per historical issue **(D13)**.

## 4.6 One validation, one measurement

- The guides' check tables are the **only** score. Retire the 9-point assessment, the Pre-Delivery checklist, `quality-check.mjs`, `component-gaps-report.md` **(D7)**.
- `scripts/audit/framework-sweep.mjs` measures the same rules the tables ask a human to check, over every file, with one parser. Run it in CI so drift is visible the day it happens.
- Every count in a doc is either generated or removed. README "Current gaps" becomes the script's output.

## 4.7 Delete list — what comes out of the docs

| File | Remove | Replace with |
|---|---|---|
| Root `CLAUDE.md` | Style Tab Spec Card Conventions · Variants Inventory Conventions · Color Table Conventions · Mobile Documentation 9-Point · Pre-Delivery Checklist · Stale Content Check | one line each pointing at the owning guide |
| `.claude/CLAUDE.md` | the duplicated body | Rule Zero + review triggers + the local Figma write rule, nothing else |
| `eb-ds-assessment-guide.md` | Dependencies · HTML Report Architecture · Assessment Workflow (legacy) · Output Format · Assessment Progress · Open Issues | keep traits, criteria, verdicts, C3/C5 refinements, GCash patterns; progress table generated from data or dropped **(D10)** |
| Style guide | check 19's position; the "derive from bounding boxes" clause **(D8)** | renumber 1–19 in order; unreadable = Missing |
| README | pre-work "shipped" claims; worklist counts; open decision 6 | actual code state; script output; mark 6 closed |
| `types.ts` | `CodeConnectRow`, `codeConnect`, `SpecCardData.description`, `C7` from `CriterionId` | — |

---

# 5. Decisions the owner must make

| # | Decision | Options | Recommendation |
|---|---|---|---|
| D1 | Spec-section order | A: P → C → **L → T** (`CLAUDE.md`, 105 cards) · B: P → C → **T → L** (guide, 84 cards) | **B.** The guides are what reviewers run; 46 reviewed components already follow it |
| D2 | Colors table shape | A: keep the three builder shapes · B: `Role │ Element │ Token │ Value` (ship the Element column) | **B.** One shape, one title per component; retire `_helpers.ts` builders or make them emit B |
| D3 | C7 / Code Connect | A: keep as a Blocked row everywhere · B: remove from open issues, scorecard and schema; one site-wide note | **B.** 70 % of the site's open-issue count is one deferred sentence |
| D4 | Layout keys | A: the seven · B: the seven + `Border` | **B.** 14 components read a border width off Figma; Rule Zero says don't drop a readable value |
| D5 | Card header | A: description conditional (README) · B: remove description + node button from renderer and schema | **B.** 51 files already carry `""`; a field that must be empty is a field that should not exist |
| D6 | Overview fixed list | In Context: require or remove · Behavior: require for interactive | **Remove In Context; require Behavior for interactive** |
| D7 | Scoring | A: keep 9-point + guides · B: guides only, one script | **B** |
| D8 | Unreadable values | A: "derive and say derived" · B: report Missing, ask the designer or use Dev Mode MCP | **B** — matches Rule Zero |
| D9 | Figma write policy | one sentence, in one file, linked from the rest | Root `CLAUDE.md` wording; the local override stays local |
| D10 | Methodology guide | A: rewrite the legacy half · B: cut it to methodology only | **B** |
| D11 | The 7 `keep` with non-pass traits | A: re-rate traits to `pass` · B: change verdict to `fix` | Per component — needs a look at each note |
| D12 | Cardless verdicts | A: `remove` / `consolidate` / `product-layer` components have no Style or Code tab · B: cards allowed | **A.** The infobox already points to the canonical sibling; 12 components' cards are dead weight |
| D13 | Changelog backfill | A: a row per historical resolved issue · B: one `patch` entry per component recording the backfill | **B** |

---

# 6. Order of work after the decisions

1. **Docs** — fold D1–D13 into the four guides; cut `CLAUDE.md` to pointers; cut the methodology guide; renumber the Style checks; add the Overview Validate table.
2. **Renderer + schema** — `SpecCard.astro` header, `ColorsTable.astro` Element column, `types.ts` removals, Sidebar comment matches the guide.
3. **Measurement** — `framework-sweep.mjs` in CI; delete the three superseded scripts and the stale report.
4. **Mechanical data passes** — C7 purge, `Radius` rename, descriptions, install version, Code Connect arrays, changelog dates. No Figma reading needed; one commit each.
5. **Per-component reviews** — Style → Code → Changelog in the guides' order, worst score first (the 3 at 15/28: `generic-card`, `generic-transaction-card`, `service-item`).

---

# 7. Fix pass — applied 13 September 2026

All thirteen decisions in §5 were applied as recommended. Everything below is on `darrr-des`, uncommitted.

## 7.1 Framework

| Area | Change |
|---|---|
| Schema (`types.ts`) | `C7` out of `CriterionId`; `empty` out of `NativeStatus`; `codeConnect`, `SpecCardData.description` and the four `inContext*` fields removed; `ColorsTableRow.element` added |
| Renderer | `SpecCard`: header is title + DES/DEV; `ColorsTable`: Role │ Element │ Token │ Value when rows carry `element`; `[slug].astro`: In Context gone, Style and Code tabs hidden for `remove` / `consolidate` / `product-layer`; `CriteriaScorecard`: C7 footnote; `CodeConnect.astro` deleted |
| Stylesheet | dead rules removed (`.spec-node-copy`, `.spec-card-desc`, `.badge-empty`, `.ctx-wrap`); `.eb-preview-alert` and `.eb-preview-ccard__title` name their faces instead of inheriting |
| Scripts | `quality-check.mjs`, `audit-honest.mjs`, `audit-dev-code.mjs`, `audit-spec-gaps.mjs`, `component-gaps-detail.mjs`, `audit.mjs`, `component-gaps-report.md`, `utils/migrate.mjs` and two `fills/*-context.mjs` deleted; `npm run audit` = `framework-sweep.mjs`; lint and progress scripts treat cardless verdicts as cardless |
| Docs | Root `CLAUDE.md` cut to rules + pointers; `.claude/CLAUDE.md` cut to the local Figma write override; methodology guide (`.md` and the rendered `.html`) cut to methodology, C7 marked deferred; the four guides and README rewritten to the decisions (Overview guide gained its `Validate` phase; Style checks renumbered 1–18) |

## 7.2 Data — one migration, verified

A brace-aware script edited all 95 files in place and a second script reloaded before/after with esbuild to prove only the intended paths changed.

| Pass | Files | Ops |
|---|---|---|
| Open issues tagged C7 removed (two real findings retagged C4) | 65 | 67 |
| Scorecard C7 rows removed · `codeConnect` removed | 95 | 190 |
| Card `description` fields removed | 95 | 202 |
| `inContext*` fields removed | 94 | 139 |
| Sections reordered to P → C → T → L | 44 | 107 |
| Installation regenerated on family coordinates, `1.0.0`, planned | 76 | 76 |
| Colors tables: interim shape → element shape · `Default` column → `Value` · 18 typography/layout tables misfiled as colors tables removed | 41 | 46 |
| Layout `Corner radius` / `Border radius` → `Radius` · `Border width` → `Border` | 40 | 76 |
| Typography font rows removed where a style name exists | 17 | 108 |
| Changelog dates fixed · backfill entries added | 33 | 35 |
| Verdicts: 7 `keep` → `fix`; 6 verdict boxes written; 1 `rework` box → `remove`; 8 native `refine` → `ready` where nothing is outstanding | 22 | 22 |

## 7.3 Measured before → after

`node scripts/audit/framework-sweep.mjs` — rules S3, S6, S8, K1, K6, K7 and L2 were redefined to the decided shapes, so this is not a like-for-like column.

| | Before | After |
|---|---|---|
| Fully compliant components | 0 | **20** |
| Median rules passed (of 28) | 20 | **25** |
| Rules with zero failures | 7 | **15** |
| Build · lint | build passes · lint 1 fail (`tooltip`) | build passes · lint 1 fail (`tooltip`, no previews) |

## 7.4 What remains — needs Figma reading, per component

| Rule | Failing | Why it cannot be scripted |
|---|---|---|
| S8 colors table shape | 55 | state / mode columns must be re-read per role and element |
| S6 eight Layout keys | 44 | unsplit `Padding`, icon sizes, field heights need the panel's values |
| K2 property mapping grouped prose | 40 | rows must be regrouped against the property worksheet |
| K8 variants summary | 25 | totals and multipliers come from the variant grid |
| S3 previews · S7 typography · S2 titles | 20 · 18 · 12 | previews, style names and driving values are read off the component |
| K3 snippets · K5 guidelines | 18 · 18 | designed API and platform content |
| L1 older changelog headers without a node | 16 | past entries are never rewritten |
| S5 stepper-bullet / stepper-dash sections · O3 segmented-control-group behavior · S9 alert live code | 2 · 1 · 0 | alert fixed; the other three need the component read |

Order: `Style Review` → `Code Review` → `Changelog Review`, worst score first.

## 7.5 QA — functional and design

**Functional QA** (`astro preview` + Playwright, every component page, every control on every card, DES/DEV on both languages, Code and Changelog tabs): 95 pages, 0 page errors after fixes. Found and fixed: four Overview live previews whose handlers named state objects the rebuilt demo scripts no longer defined (`amount-text-field`, `segmented-control-group`, `subtext-message`, `toggle-segmented-control`); Alert's spec cards keyed to a card that did not exist, and no live DEV code; two colors tables with a duplicated Token column (`badge`, `callout`); six preview roots drawing text in the site's heading font instead of the component's face. Not fixed, on purpose: `header-with-logo` draws its vector wordmark as text and `overlay`'s stage shows mock screen content — neither is a text layer of the component, so the face is not readable from Figma.

**Design QA** (Apple design skill, `.agents/skills/apple-design`; HIG foundations only; contrast computed from tokens and `getComputedStyle`): 6 Critical, 3 High, 4 Medium, 4 Low. All applied except the taste notes.

| Finding | Before | After |
|---|---|---|
| Table header text (light) | `#ADB2C2` on `#F5F6F9`, 1.96:1 | `#3C4A5C`, 8.35:1 — the value `CLAUDE.md` always specified |
| Muted text, dark (nav, panel labels, card descriptions, inactive tabs) | `#737373` on `#1C1C1C`, 3.59:1 | `#A3A3A3`, 7.30:1 |
| Alert preview text, dark | overridden to `#E4EAF3` on the Figma fill `#E5F1FF`, 1.06:1 | override removed; Figma's `#0A2757`, 12.74:1 |
| DES/DEV toggle | `<div onclick>`, mouse only, 10px labels | two `<button role="tab">`, 12px, focus ring; Enter opens the code view |
| Component tabs | no roles | `tablist` / `tab` / `aria-selected`; arrow keys, Home, End move between tabs |
| Bare links in dark | browser blue, 1.81:1 | `--accent`, 6.1:1 |
| Phone width (390px) | no navigation, tabs 489px wide in a 294px column, page scrolls sideways | topbar with hamburger opens the sidebar; tabs fit; `scrollWidth` = viewport |
| Spec-card keys | `#959CAB`, 2.76:1 | `--muted`, 5.14:1 |
| Component-card chips | white on `#12AF80` 2.81:1 / `#D97706` 3.19:1 | the badge pairs, ≥ 6.4:1 |
| Code blocks in dark | light surface and light palette inside a dark card | `--code-bg` / `--code-fg` and a dark syntax palette; light strings `#067A4A` 4.6:1 |
| Reduced motion | only the sidebar honoured it | tab pill, panel fade, theme eases and mode toggle all 0 ms |
| Select focus, control sizes, `--fg`, tab-bar shadow snap, guide eyebrow | — | 2px focus ring; 28px minimum hit height; `--fg` defined; shadow transitions; eyebrow on `--accent` |

## 7.6 Root causes closed — 14 September 2026

| Cause of inconsistent results | What now prevents it |
|---|---|
| Six documents defined the framework and disagreed | One source per rule since the fix pass; the methodology page now renders `eb-ds-assessment-guide.md` itself, and its HTML copy is deleted |
| Nothing measured the result | `npm run check` = build + `framework-sweep --gate` + lint. The gate fails on the 14 structural rules (M1, M2, O1, O2, O4, O5, O6, S1, S4, S10, K1, K6, K7, L2); content rules are reported |
| Pages kept an old Figma node's values after a rebuild | `style.source` (set id, variant count, read date, tool) is written by every Style Review. Rule S11 flags a Style tab whose stamp is missing or names another set than `meta.node`: 77 of 95 today — the true re-read backlog |
| Three authors, no gate before merge | `.github/workflows/check.yml` runs the check on every pull request and working-branch push |
| Tools read different things and gaps were derived | An unreadable value is written `—`, never derived; rule S12 counts `—` Layout rows and colors-table tokens per component so they stay visible (26 today) |

First component re-read under the closed loop: `generic-card` (set `5412:31504`, 19 → 24 of 30 rules; the rest are Code-tab content).

## 7.7 CMS on the same schema — 14 September 2026

Content moved from 95 TypeScript modules to `astro-site/src/content/components/<slug>.json`, one shape for every component (`keystatic.config.ts`, a field-for-field mirror of `types.ts`; optional fields are `''` / `[]` / `'auto'`, `variants` are arrays). `src/data/components/from-json.mjs` turns the JSON into `ComponentData` for the site and for every audit script, so there is one loader. The round trip was verified on all 95 files before the TypeScript was deleted; build, lint, gate and a browser QA pass on the JSON alone.

Editing: `npm run cms` mounts Keystatic (local storage) at `/keystatic` in the dev server; the production build stays static. Reviews still run the four commands; the CMS is the form over the same file.

## 7.8 D6 amended — In Context stays (14 September 2026)

The owner overruled the "remove In Context" half of D6: the section carries the component's visual context on a real screen and is kept. Restored the same day from the pre-migration snapshot: 89 notes and 41 visuals back in the JSON, the four `inContext*` fields back in `types.ts`, the CMS form, the loader and the page, `.ctx-wrap` back in the stylesheet. The Overview fixed list is now In Context → Live Preview → DS Health → Behavior → Issues → Recommendations, and rule O7 reports components with no In Context (content rule, not gated). The Behavior half of D6 stands.
