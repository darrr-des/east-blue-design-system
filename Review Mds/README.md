# Review Mds — component documentation workflows

One command guide per tab. Each guide is the complete, self-contained spec for reviewing and rewriting that tab of a component's page.

| File | Trigger the reviewer types | Covers |
|---|---|---|
| [OVERVIEW-REVIEW-GUIDE.md](OVERVIEW-REVIEW-GUIDE.md) | `Component Review` | **Overview tab** — open issues, recommendations, DS Health, badges |
| [STYLE-REVIEW-GUIDE.md](STYLE-REVIEW-GUIDE.md) | `Style Review` | **Style tab** — spec cards, demo panel, the four spec sections, colors table, DEV code |
| [CODE-REVIEW-GUIDE.md](CODE-REVIEW-GUIDE.md) | `Code Review` * | **Code tab** — Installation, Property Mapping, Usage Snippets, Accessibility, Usage Guidelines, Scorecard, Variants Inventory |
| [CHANGELOG-REVIEW-GUIDE.md](CHANGELOG-REVIEW-GUIDE.md) | `Changelog Review` | **Changelog tab** — the component's audit trail |
| **README.md** (this file) | — | Shared setup, house rules, maintainer pre-work, field map, current worklist |

\* `/code-review` is also a built-in Claude Code command that reviews a git diff. If a run starts reviewing source code instead of the component's Code tab, type **`Code Tab Review`** instead.

The rules for each tab live **only** in that tab's guide — one source per rule, no drift. This README holds what all four runs share.

---

## How a run works

Every command has the same four phases:

```
1 Intake      → AI asks for component name + Figma link
2 Baseline    → AI reads and reports the current state. Nothing changed yet.
3 Update      → AI rewrites that tab to the rules
4 Validate    → reviewer types `Validate` → AI reports Done / Partial / Missing / Broken
```

Phase 4 **never edits content** — it reports, and the reviewer decides what gets fixed.

**Show and tell.** An update is never reported as "updated" — it is reported as **previous → new**, with a Figma pointer (node ID + where to look: property panel, or Dev Mode → Code) on every changed row, so the reviewer can open the node and check the claim themselves.

**Recommended order for a full pass:** `Component Review` → `Style Review` → `Code Review` → `Changelog Review`. The first three produce the changes; the last records them.

One component per run. One tab per run.

---

## The two rules behind all of it

> **1. Document what Figma says. Never invent a value.**
>
> Alignment, padding, height, width, radius, gap, colour, text style — read off the component and reproduced exactly. Don't derive what you could read, don't translate Figma's answer into a tidier one, and don't fill a gap you couldn't read with a plausible substitute. If you can't read it, report it Missing with the reason.

> **2. Show only what is on the list. Delete everything else.**

Every section in every guide has a fixed content list. If something isn't on the list, it comes out — even if it's accurate, even if it took work to write. Consistency across 90 components is the point.

---

# Before you start

### 1. Set up

```bash
git checkout -b <your-name>-content       # your own branch, never main
cd astro-site && npm install
npm run dev                               # → http://localhost:4321
```

Open two windows side by side: the component in Figma, and `http://localhost:4321/components/<slug>`.

### 2. Know what you touch

| You edit | Path |
|---|---|
| Component content | `astro-site/src/data/components/<slug>.ts` |
| Live DEV code snippets | `astro-site/public/scripts/demos/<slug>.js` |

| You never edit | Why |
|---|---|
| `src/components/*.astro` | Shared renderers — maintainer only |
| `src/styles/global.css` | Shared stylesheet — maintainer only |
| `src/data/types.ts` | Shared schema — maintainer only |
| Anything in Figma | Read-only. Found a problem? File it as an Open Issue via `OVERVIEW-REVIEW-GUIDE.md` |

### 3. House rules

- **Never commit or push unless you're told to.** `main` auto-deploys to production.
- **Plain language.** Cut every word you can. One idea per sentence. No hedging.
- **Match the file's existing style.** Most data files use JSON-quoted keys (`"open": [`), a few use plain TS (`open: [`). Follow whatever the file already does.
- **Never scripted find-and-replace on string fields.** A mismatched quote silently corrupts the lines around it.
- **One component per run.** One tab per run.

---

# Pre-work — three renderer changes the maintainer ships first

Three items on the target spec need a change in a shared `.astro` file, not in your data file. Until they land, author your data the way the guides say — the data is forward-compatible and the migration is mechanical.

| # | Change | File | What you do in the meantime |
|---|---|---|---|
| 1 | ~~Remove the node-ID copy button (`.spec-node-copy`)~~ | `src/components/SpecCard.astro` | ✅ **Shipped 2026-09-01.** Keep `node` in the data — the schema still requires it |
| 2 | ~~Remove the card description (`.spec-card-desc`)~~ | `src/components/SpecCard.astro` | ✅ **Shipped 2026-09-01** as a conditional: set `"description": ""` and the element disappears. Unreviewed components keep theirs until reviewed |
| 3 | Colors table gains an **Element** column → `Role │ Element │ Token │ Value` | `src/components/ColorsTable.astro` + `ColorsTableRow` in `types.ts` | Author the interim shape in `STYLE-REVIEW-GUIDE.md` §3.5 — it maps one-for-one |

A validation check blocked on one of these is reported **Partial + Blocked**, never Broken.

---

# Reference

## Where each thing lives

| On the page | Data path | Renderer | Guide |
|---|---|---|---|
| Card title (`sub-heading toc-child`) | `style.specCards[].title` | `SpecCard.astro` | Style |
| Node copy button | `style.specCards[].node` | `SpecCard.astro` — *being removed* | Style |
| Card description | `style.specCards[].description` | `SpecCard.astro` — *being removed* | Style |
| Demo property panel | `style.specCards[].demoControls` | `SpecCard.astro` | Style |
| Four spec sections | `style.specCards[].sections` | `SpecCard.astro` | Style |
| Dynamic row values | `sections[].rows[].variants` | `assessment.js → _patchSpecCardRows` | Style |
| DEV code (fallback) | `style.specCards[].swift` / `.compose` | `SpecCard.astro` | Style |
| DEV code (live) | `getSnippet()` | `public/scripts/demos/<slug>.js` | Style |
| Colors table | `style.colorsTables[]` | `ColorsTable.astro` | Style |
| Installation | `code.installation` | `Installation.astro` | Code |
| Property Mapping | `code.propertyMapping` | `PropertyMapping.astro` | Code |
| Usage Snippets | `code.usageSnippets` | `UsageSnippets.astro` | Code |
| Accessibility | `code.accessibility` | `AccessibilityTable.astro` | Code |
| Usage Guidelines | `code.usageGuidelines` | `UsageGuidelines.astro` | Code |
| Criteria Scorecard | `code.scorecard` | `CriteriaScorecard.astro` | Code |
| Variants Inventory | `code.variants` | `VariantsInventory.astro` | Code |
| Code Connect | `code.codeConnect` | `CodeConnect.astro` — *set to `[]`* | Code |
| Changelog | `changelog[]` | `Changelog.astro` | Changelog |

## Validation status vocabulary

Every `Validate` report uses the same four:

| Status | Means |
|---|---|
| ✅ **Done** | Meets the rule |
| ⚠️ **Partial** | Started but incomplete — say what's left. Also used for anything blocked on maintainer pre-work |
| ❌ **Missing** | Not there at all |
| 🔴 **Broken** | Present but wrong — stale content, a failing build, a rewritten history entry, a check that couldn't be run |

Every report ends with a count line and a **Recommended next** line ordered by what unblocks the most.

## Syntax-highlight spans

Used in `swift` / `compose` fallback HTML and any `<code>` in a data file:

| Class | For |
|---|---|
| `syn-type` | Type names — `EBAlert`, `Image` |
| `syn-param` | Parameter labels — `type:`, `title =` |
| `syn-str` | String literals |
| `syn-kw` | Keywords — `null`, `true` |
| `syn-dot` | Enum cases — `.information` |
| `syn-fn` | Function / modifier names — `ebStyle` |
| `syn-punc` | Punctuation |
| `syn-eq` | `=` |
| `syn-cmt` | Comments |

## Reference components

| Look at | For |
|---|---|
| `alert.ts` | Driving property → cards, shared `demoControls`, `variants` on Colors rows |
| `counter.js` | The full dynamic-code contract (`_specCards` + `getSnippet` + `updateSpecCard`) |
| `modal.ts` | `variants` on a Layout row (the Plan A pilot) |
| `button.ts` | Variants Inventory with summary + full breakdown |

## Commands

```bash
cd astro-site
npm run build      # schema breakage — must pass before any hand-off
npm run lint       # preview structure + colors-table coverage
npm run dev        # → http://localhost:4321
```

---

# Current gaps — the team worklist

Measured across all 95 components.

### Style tab

| Gap | Count | Notes |
|---|---|---|
| Cards carrying a description | 196 | All of them — clear to `""` |
| Colors tables in a non-standard shape | 176 across 71 components | Ten different column shapes today |
| Components with cards but no colors table | 23 | `ad-carousel`, `countdown*`, `date-picker*`, `dropdown*`, `list-item*`, `modal*`, `slider`, `voucher*` … |
| Components with frozen DEV code (no `getSnippet`) | 25 | `ad-carousel`, `ad-space`, `alert`, `countdown*`, `date-picker*`, `dropdown*`, `horizontal-voucher`, `list-item*`, `modal*`, `segmented-control-button`, `slider`, `vertical-voucher`, `voucher*` |
| Components with no demo controls on any card | 4 | `carousel-card`, `horizontal-voucher`, `segmented-control-button`, `vertical-voucher` |
| Cards with a non-standard section | 3 | `generic-card`, `generic-transaction-card` (Composed sub-components) · `progress-bar` (Properties (today)) |
| Cards missing a required section | 2 | `stepper-bullet`, `stepper-dash` — no Properties, no Typography |

### Code tab

| Gap | Count | Notes |
|---|---|---|
| Property-mapping rows in `Prop=Value` form | 164 across 44 components | Regroup one row per property |
| Components with no Usage Guidelines | 42 | Write up to four pairs |
| Components with no Installation | 38 | |
| Install blocks on the old `com.gcash.eastblue` coordinates | 21 | §3.2 canonical is `AY-Org/eb-ds-ios` + `com.eastblue.ds:<family>:<version>` |
| Install blocks with no Import line | 40 of 57 | |
| Install blocks on a non-family artifact or package | 9 artifacts · 4 imports | Decided — Decisions log 1 + 4; the list is in `CODE-REVIEW-GUIDE.md` §3.2 migration debt |
| Components with Code Connect still populated | 38 | Set to `[]` |
| Components with no Usage Snippets | 36 | |
| Components with no Accessibility rows | 6 | |

### Changelog tab

| State | Count |
|---|---|
| Exactly one entry | 70 |
| Two or more entries | 25 |
| No entries | 0 |

Most components will gain an entry from this content pass — the doc rewrite itself is a patch entry.

---

# Decisions log

**Decided 2026-09-02** (raised by the first Code Review runs):

1. **Kotlin package scheme → domain-grouped.** Package = the component's family (`meta.navGroup`, lowercased, separators stripped); no family → hyphen-stripped slug. Gradle artifact IDs keep their hyphens. Full derivation table: `CODE-REVIEW-GUIDE.md` §3.2.
2. **Cards with nothing to control declare `"demoControls": []`.** The empty array passes `npm run lint`; an absent field stays a gap. Rule: `STYLE-REVIEW-GUIDE.md` §3.2.
3. **`control: 'input'`** (text properties in spec-card panels) — approved in principle; lands after the maintainer reviews the `types.ts` + `SpecCard.astro` diff on the reviewer's branch.

**Decided 2026-09-04** (raised by Kurteous off the Date Picker, Ad Space and Carousel families):

4. **One Gradle artifact per family.** Option A over B: artifact and package both derive from `meta.navGroup` (`Date Picker` → `com.eastblue.ds:date-picker` + `com.eastblue.ds.datepicker`), no family → the slug. An artifact is a family, never a component, so the lead is a class inside it and nothing collides; members can't be adopted individually, and that is accepted. `<version>` of a family artifact is the highest changelog version across its members. Family table, derivation and the migration list: `CODE-REVIEW-GUIDE.md` §3.2.

# Open decisions

Raise these with the owner before a full sweep:

1. **Card title format** — the guides say the bare value (`Banner`). The alternative is `Style · Banner`, which is more self-explanatory but longer in the TOC.
2. **Scorecard C7** — kept as a Blocked row, or dropped along with Code Connect?
3. **Colors table per card vs per component** — one table per component is assumed; components with two unrelated color systems may need two.
4. **`node` and `description`** — stay required in the schema after the header change, or become optional?
5. ~~**Kotlin package scheme**~~ — ✅ **Decided.** Domain-grouped packages (Decisions log 1, 2026-09-02) and one artifact per family so artifact and package derive from the same `navGroup` (Decisions log 4, 2026-09-04). §3.2 now carries the family table.
6. **Lint fails a card that correctly has no controls** — `npm run lint` reports a "Style-tab demoControls gap" whenever a spec card has no `demoControls`. But `STYLE-REVIEW-GUIDE.md` §3.2 says to skip the driving property and skip slots, which legitimately leaves a card with none: Ad Space's **Receipt** has only `Variant` (driving) and `⤷ AssetSlot` (slot), and design confirmed that empty panel is intentional. The rule predates §3.2 and will now fire on every component reviewed to it. Relax the rule, or give the data an opt-out flag.
7. **`control: 'input'` on spec-card panels** — shipped 2026-09-02 so Figma text properties could be represented at all; `SpecCard.astro` previously branched only to a toggle or a select, so a text property rendered as an empty dropdown. Additive and opt-in, and `demo-panel-input` already existed in `global.css`. It touches two maintainer-only files (`src/data/types.ts`, `src/components/SpecCard.astro`) and needs the maintainer's sign-off or a revert.
