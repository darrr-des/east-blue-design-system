# workflows — building and rechecking a component's tabs

| Folder | Holds |
|---|---|
| [build/](build/README.md) | **Build** — writes a tab: a new component, or a section that doesn't exist yet |
| `review/` | **Review** — rechecks a tab that already exists, makes small fixes, and reports. The checks live here |

This README is shared by both: setup, house rules, reading Figma, the field map and the status vocabulary. The review guides:

| File | Trigger the reviewer types | Covers |
|---|---|---|
| [OVERVIEW-REVIEW-GUIDE.md](review/OVERVIEW-REVIEW-GUIDE.md) | `Component Review` | **Overview tab** — open issues, recommendations, DS Health, badges |
| [PLAYGROUND-REVIEW-GUIDE.md](review/PLAYGROUND-REVIEW-GUIDE.md) | `Playground Review` | **Playground tab** — drift, the checks, and the component findings for the Overview tab |
| [CODE-REVIEW-GUIDE.md](review/CODE-REVIEW-GUIDE.md) | `Code Review` * | **Code tab** — Installation, Property Mapping, Usage Snippets, Accessibility, Usage Guidelines, Scorecard, Variants Inventory |
| [CHANGELOG-REVIEW-GUIDE.md](review/CHANGELOG-REVIEW-GUIDE.md) | `Changelog Review` | **Changelog tab** — the component's audit trail |
| **README.md** (this file) | — | Shared by Build and Review: setup, house rules, reading Figma, field map, worklist |
| [FRAMEWORK-REFERENCE.md](review/FRAMEWORK-REFERENCE.md) | — | The page with real sample content: every section, its expected content, and the sixteen situations a reviewer meets |
| [FRAMEWORK-AUDIT.md](review/FRAMEWORK-AUDIT.md) | — | The audit, the thirteen decisions, the fix pass and what remains |

\* `/code-review` is also a built-in Claude Code command that reviews a git diff. If a run starts reviewing source code instead of the component's Code tab, type **`Code Tab Review`** instead.

The rules for writing a tab live **only** in its build guide; the checks live **only** in its review guide — one source per rule, no drift. This README holds what the runs share.

**The Style tab is retired as a review** (2026-09-30). A component not yet on the Playground still renders its old Style tab, but nothing reviews it; its next step is a `Playground Build`.

---

## How a review runs

Every review has the same four phases:

```
1 Intake      → AI asks for component name + Figma link
2 Baseline    → AI reads and reports the current state. Nothing changed yet.
3 Recheck     → AI compares the tab against Figma and the rules, and makes small fixes
4 Validate    → reviewer types `Validate` → AI reports Done / Partial / Missing / Broken
```

Each review guide lists the **small fixes** it may make. Anything bigger — a missing section, new content — is reported as a next step for that tab's build guide. Phase 4 **never edits content** — it reports, and the reviewer decides what gets fixed.

**Show and tell.** A fix is never reported as "updated" — it is reported as **previous → new**, with a Figma pointer (node ID + where to look: property panel, or Dev Mode → Code) on every changed row, so the reviewer can open the node and check the claim themselves.

**Order for a full recheck:** `Component Review` → `Playground Review` → `Code Review` → `Changelog Review`. For a new component, the same order with the build triggers: `Component Build` → `Playground Build` → `Code Build` → `Changelog Build`.

One component per run. One tab per run. If the component's DS verdict is `remove`, `consolidate` or `product-layer`, say so and stop — it has no Playground or Code tab.

---

## The two rules behind all of it

> **1. Document what Figma says. Never invent a value.**
>
> Alignment, padding, height, width, radius, gap, colour, text style — read off the component and reproduced exactly. Don't derive what you could read, don't translate Figma's answer into a tidier one, and don't fill a gap you couldn't read with a plausible substitute. If you can't read it, report it Missing with the reason.

> **2. Show only what is on the list. Delete everything else.**

Every section in every guide has a fixed content list. If something isn't on the list, it comes out — even if it's accurate, even if it took work to write. Consistency across 95 components is the point.

---

# Before you start

### 1. Set up

```bash
git checkout -b <your-name>-content       # your own branch, never main
cd astro-site && npm install
npm run dev                               # → http://localhost:4321
npm run cms                               # → http://127.0.0.1:4321/keystatic — the editing UI
```

Open two windows side by side: the component in Figma, and `http://localhost:4321/components/<slug>`.

Content is one JSON file per component, `src/content/components/<slug>.json`, in the shape `keystatic.config.ts` defines (a mirror of `src/data/types.ts`). Edit it in the CMS (`npm run cms` — forms, no syntax to break) or directly; either way git records the change and `npm run check` gates it.

### 2. Know what you touch

| You edit | Path |
|---|---|
| Component content | `astro-site/src/content/components/<slug>.json` |
| Live DEV code snippets | `astro-site/public/scripts/demos/<slug>.js` |

| You never edit | Why |
|---|---|
| `src/components/*.astro` | Shared renderers — maintainer only |
| `src/styles/global.css` | Shared stylesheet — maintainer only |
| `src/data/types.ts` | Shared schema — maintainer only |
| Anything in Figma | Read-only. Found a problem? File it as an Open Issue via `Component Review` |

### 3. House rules

- **Never commit or push unless you're told to.** `main` auto-deploys to production.
- **Plain language.** Cut every word you can. One idea per sentence. No hedging.
- **One shape.** Every component is JSON in the CMS shape — optional fields are empty strings, empty lists or `auto`, never removed. The CMS keeps that shape for you; when editing by hand, keep it too.
- **Never scripted find-and-replace on string fields.** A mismatched quote silently corrupts the lines around it.
- **One component per run.** One tab per run. A `remove` / `consolidate` / `product-layer` component has no Playground or Code tab — say so and stop.

### 4. Reading Figma

| Item | Detail |
|---|---|
| **Connect** | Open the *Cursor Talk To Figma* plugin in Figma; it gives a channel code. Join it. |
| **Get the node** | From a Figma URL `…?node-id=X-Y`, the node ID is `X:Y` (dash → colon). |
| **Files** | Sticker Sheets v2 `HwWDwPit2xJjDH4zszOZ5o` — the canonical library the site points at. 2026 Working File `pbxY8a2xcIfVZKxwnud9Xe` — staging; components live here before being copied to Sticker Sheets. Note which file a URL is in. |

| Tool | Use |
|---|---|
| `get_node_info` (depth 1) | The variant matrix — property axes and variant names |
| `get_node_info` (depth 3–4) | A variant's internals — slots, layers, tokens |
| `export_node_as_image` | See it rendered |
| `scan_text_nodes` | Grab **all** text-node IDs in one call (avoids reading every variant) |

**"Node not found":**
- The old node was **deleted** because the component was rebuilt on a new node → get the new URL.
- The node is on a **different Figma page** than the one currently open → the plugin only reads the *active* page's subtree in full. Ask for the page to be opened, or for the node to be selected.

### 5. Editing Figma — only with permission

The committed root `CLAUDE.md` is the policy (read-only); a local `.claude/CLAUDE.md` may grant per-request write permission on the owner's machine only.

- **State the exact change before asking**: node ID, property, old → new.
- **Prefer the Figma property panel** for renaming a *variant property* or *text property* — one operation updates all variants and renames the actual property. Per-node `rename_node` only renames layer display names and **does not propagate** across variants.
- **When you must sweep** (`rename_node` per variant): each call returns the node's *previous* name — use that to catch a wrong ID. **Re-read the whole set afterward** to confirm no stray property value or conflicting variant was created.
- **Slots propagate; text nodes and instances do not.** Renaming a slot in one variant updates its siblings; renaming a `#text` node or an instance does not — you must do all of them.

---

# Reference

## Where each thing lives

| On the page | Data path | Renderer | Guide |
|---|---|---|---|
| Playground | `style.playground: true` + `public/playground/<slug>.json` (generated) | `Playground.astro` | Playground |
| Installation | `code.installation` | `Installation.astro` | Code |
| Property Mapping | `code.propertyMapping` | `PropertyMapping.astro` | Code |
| Usage Snippets | `code.usageSnippets` | `UsageSnippets.astro` | Code |
| Accessibility | `code.accessibility` | `AccessibilityTable.astro` | Code |
| Usage Guidelines | `code.usageGuidelines` | `UsageGuidelines.astro` | Code |
| Criteria Scorecard | `code.scorecard` | `CriteriaScorecard.astro` | Code |
| Variants Inventory | `code.variants` | `VariantsInventory.astro` | Code |
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

Used in `swift` / `compose` in a data file and any `<code>` in one. **Don't write these by hand** — the tokenizer in `public/scripts/assessment.js` (`window.highlightSyntax`) is the single source, and running code through it is what `K10` checks. These are the nine classes it emits:

| Class | For |
|---|---|
| `syn-type` | Type names — `EBAlert`, `Image`, `Modifier` |
| `syn-param` | Parameter labels — any identifier before `:` or `=` |
| `syn-str` | String literals |
| `syn-val` | Numbers and literal values — `16`, `true`, `false`, `null`, `nil` |
| `syn-kw` | Language keywords — `let`, `val`, `var`, `fun`, `struct`, `import`, `return` |
| `syn-dot` | Enum cases — `.information` |
| `syn-fn` | Function / modifier calls — `.ebStyle(` |
| `syn-punc` | Brackets and braces |
| `syn-cmt` | Comments |

> **`syn-eq` is retired.** The tokenizer never emits it, but 90 data files still carry it from the hand-written era. It styles nothing; `=` is now part of `syn-param`'s context. Drop it whenever you touch a file — `K10` fails any component that still has one.

## Reference components

| Look at | For |
|---|---|
| `sample-component.json` + `demos/sample-component.js` | The whole framework on one page, sample data — every field filled, 31/31 on the sweep; rendered at `/components/sample-component` (hidden from nav) |
| `avatar.json` + `public/playground/avatar.json` | The first component on the Playground |
| `button.json` | Variants Inventory with summary + full breakdown |
| `date-picker-cell.json` | Canonical Installation block — SPM + Gradle + Import on family coordinates |

## Commands

```bash
cd astro-site
npm run build      # schema breakage — must pass before any hand-off
npm run lint       # preview structure + colors-table coverage
npm run audit      # every component against every guide rule
npm run check      # build + structural gate + lint — what CI runs on every pull request
npm run dev        # → http://localhost:4321
```

---

# Current gaps — the team worklist

Run `node scripts/audit/framework-sweep.mjs` in `astro-site/` — it prints every gap per rule and, with `--matrix`, per component. Counts are not kept in this file.

---

# Decisions log

**Decided 2026-09-02** (raised by the first Code Review runs):

1. **Kotlin package scheme → domain-grouped.** Package = the component's family (`meta.navGroup`, lowercased, separators stripped); no family → hyphen-stripped slug. Gradle artifact IDs keep their hyphens. Full derivation table: `workflows/build/CODE-BUILD-GUIDE.md` §3.2.
2. **Cards with nothing to control declare `"demoControls": []`.** The empty array passes `npm run lint`; an absent field stays a gap. (Style tab — retired 2026-09-30.)
3. **`control: 'input'`** (text properties in spec-card panels) — approved in principle; lands after the maintainer reviews the `types.ts` + `SpecCard.astro` diff on the reviewer's branch.

**Decided 2026-09-04** (raised by Kurteous off the Date Picker, Ad Space and Carousel families):

4. **One Gradle artifact per family.** Option A over B: artifact and package both derive from `meta.navGroup` (`Date Picker` → `com.eastblue.ds:date-picker` + `com.eastblue.ds.datepicker`), no family → the slug. An artifact is a family, never a component, so the lead is a class inside it and nothing collides; members can't be adopted individually, and that is accepted. Family table and derivation: `workflows/build/CODE-BUILD-GUIDE.md` §3.2.

**Decided 2026-09-04** (raised by the Date Picker Code Review run):

5. **Artifact version is independent of the doc changelogs.** Every install block pins `1.0.0` while `"planned": true`; it moves only when a real library ships. Supersedes the family-version rule in item 4. Rule: `workflows/build/CODE-BUILD-GUIDE.md` §3.2.

**Decided 2026-09-30:**

6. **Style Review retired.** The Playground replaces the Style tab.
7. **Build and review split.** Writing a tab is a build (`workflows/build/`, triggers `Component Build` · `Playground Build` · `Code Build` · `Changelog Build`); rechecking is a review (`workflows/review/`). A review may make the small fixes its guide lists, and nothing else. The checks live only in the review guides.

**Decided 2026-09-13** — the thirteen framework decisions in `FRAMEWORK-AUDIT.md` §5 (section order, colors table, C7 removal, eight Layout keys, header, Overview list, one score, no deriving, write policy, methodology guide, keep rule, cardless tabs, changelog backfill).

# Open decisions

None open. Decisions 1–13 of 13 September 2026 are recorded in `FRAMEWORK-AUDIT.md` §5; the log above records the earlier ones.
