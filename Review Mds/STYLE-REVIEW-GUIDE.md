# Style Review — command guide

> **Trigger:** the reviewer types `Style Review`
> **Second phase:** the reviewer types `Validate`
> **Scope:** the **Style tab only** — spec cards, demo panel, the four spec sections, the colors table, and the DEV code. Nothing else in the data file is touched.

| Phase | Who acts | What happens |
|---|---|---|
| 1 · Intake | AI asks | Component name + Figma link |
| 2 · Baseline | AI | Reads the data file, prints the current Style tab as tables. Nothing changed yet. |
| 3 · Update | AI | Rewrites the Style tab to the rules in this file |
| 4 · Validate | Reviewer types `Validate` | AI re-runs every check and reports **Done / Partial / Missing / Broken** |

Related: [Overview](OVERVIEW-REVIEW-GUIDE.md) · [Code](CODE-REVIEW-GUIDE.md) · [Changelog](CHANGELOG-REVIEW-GUIDE.md) · shared setup, house rules and pre-work in the [folder README](README.md).

---

# The rule that outranks everything else

> **Document what Figma says. Never invent a value.**

Every number, name and value on the Style tab — alignment, padding, height, width, radius, gap, colour, text style — is **read off the Figma component and reproduced exactly**. You do not round it, normalise it, translate it into what seems more sensible, or fill a gap with a plausible substitute.

Three ways this goes wrong, all seen on the Alert run:

| Failure | Example | Fix |
|---|---|---|
| **Deriving what you could have read** | Alignment written as `Leading · Top` from bounding-box maths; the Figma panel said **centre** | Read it off the panel |
| **Translating Figma's answer** | Width written as `360` when the panel says **Fill** (360 is just what it resolves to here) | Write `Fill · 360` |
| **Answering a different question** | `Gap: 2` — the title↔description spacing — when the container's gap is **Auto** | Record the container's value |
| **Letting the page's own styling stand in** | Preview text rendered in the site's body font because the rule said `font-family: inherit` | Set the component's real families — `Proxima Soft`, `BarkAda` — per text layer |

The preview is part of this. It must render in the component's **own font families and weights**, not the documentation site's. Both GCash faces ship in the repo (`public/fonts/ProximaSoft`, `public/fonts/BarkAda`) and are declared in `global.css` — reference them by family name and the weight the layer uses (`Proxima Soft` 700 for a Bold title, `BarkAda` 600 for a SemiBold description). Verify with `getComputedStyle`, not by eye: a missing face falls back silently and still looks plausible.

If a value cannot be read with the tools you have, it is **not yours to guess**. Leave it, and report it as Missing with the reason. A blank the designer fills in costs one message; a plausible wrong number ships to developers and is trusted.

**What the Talk To Figma plugin cannot return** — ask the designer, or use Dev Mode MCP when it's authorized:

- Text style names (shared-library styles return an opaque `textStyleId`)
- Auto-layout padding, gap and alignment (read them off the Figma panel instead)

---

# Phase 1 — Intake

On `Style Review`, the AI replies with exactly this form and waits:

```
Component Name:
Component Link:
Figma Channel:   (from the Cursor Talk To Figma plugin — blank if already joined)
```

- **Component Link** is the Figma URL. Node ID = the `node-id=X-Y` with the dash turned into a colon.
- **Figma Channel** is required the first time in a session. Reading the site only needs the data file; reading the *live component* needs the plugin channel.
- If the slug has no data file, say so and stop — creating a component from scratch is a different job.

---

# Phase 2 — Baseline report

The AI reads `astro-site/src/data/components/<slug>.ts` and the Figma component, then prints the current state. **Nothing is edited in this phase.**

### 2a. The property worksheet (from Figma)

| # | Property (exact Figma name) | Kind | Values (exact) | Slot? |
|---|---|---|---|---|
| 1 | `Type` | Variant | Neutral, Information, Warning, Error, Success | no |
| 2 | `Style` | Variant | Card, Banner | no |
| 3 | `Leading-Slot` | Instance swap | — | **yes** |

Keep Figma's panel order. Copy names and values character for character. This worksheet drives every later step — read Figma once, then work from the table.

> **The tools only show you half the properties.** `get_node_info` returns **variant** properties, because they're encoded in each variant's node name (`Type=Information, Style=Card, …`). It does **not** return `componentPropertyDefinitions`, so **boolean, instance-swap and text properties are invisible to it**. Alert has four booleans — `hasLeadingIcon`, `hasActionButton`, `hasTrailingIcon`, `hasAccentBorder` — that no amount of reading the node tree would have surfaced.
>
> **Read the Figma property panel itself** and copy every row into the worksheet, then check the count against what the tools returned. A hidden layer in the node tree usually means a boolean turns it on: Alert's leading slot and action button are hidden precisely because their booleans default to false.
>
> Defaults matter too, and the panel is the only place they're stated. Inferring a default from an export tells you what the component happens to render, not what the property is set to — have the designer confirm.

### 2b. Current spec cards

| Card | Title today | Panel controls | Sections today | DEV code |
|---|---|---|---|---|
| `alert-spec-banner` | "Banner" | Type | Properties, Colors, Layout, Typography | static |
| `alert-spec-card` | "Accent Card" | Type | Properties, Colors, Layout, Typography | static |

### 2c. Gap list

The AI states plainly what has to change, e.g.:

```
- Driving property is Style (Card, Banner) → 2 cards. Correct today.
- Both cards carry a description → clear to "".
- Typography has Font / Size rows → cut to text-style names only.
- Layout has "Right icon" and "Gap (icon ↔ content)" → not on the 7-key list.
- Colors table columns are Token | Value → remap to Role | Element | Token | Value.
- No getSnippet in demos/alert.js → DEV code is frozen.
```

Then it proceeds to Phase 3 without waiting. The reviewer can interrupt at any point.

---

# Phase 3 — Update the Style tab

## 3.1 One card per driving property value

Pick the **driving property** — first match down this list:

1. `Style`
2. `Type`
3. `Variant`
4. `Appearance`
5. **Otherwise:** the first property in Figma's property panel

Its values become the cards, in Figma's order. Every other property becomes a **panel control**, not another card. Never multiply cards by size or state.

**Title = the value, nothing else.** It renders as the `sub-heading toc-child` and feeds the on-page TOC, so it has to read as a label:

```ts
"title": "Banner"        // ✅
"title": "Accent Card"   // ✅

"title": "Compact · Default — brand label + filled Counter"  // ❌ describing, not labelling
"title": "State=Default"                                      // ❌ raw Figma syntax
"title": "Large · Filled"                                     // ❌ two properties in one title
```

**Check the preview against an export, not against the layer tree.** Run `export_node_as_image` on the default variant and compare it to the rendered preview side by side. A layer that exists in the tree is not necessarily drawn — Alert's leading slot and its action button are both present in every variant and hidden in all of them, and the old preview drew both. The tree tells you what exists; the export tells you what ships.

**Give the preview a server-rendered default.** `previewHtml` must contain the component's default state inside the host div, not an empty shell — the demo script overwrites it on load, but the static markup is what shows before JS runs, when JS fails, and when a viewer has a stale cached demo script:

```ts
"previewHtml": "<div id=\"alert-spec-card\"><div class=\"eb-preview-alert eb-preview-alert--information eb-preview-alert--card\">…</div></div>"
```

The host div's id must be the one the demo script targets (`<slug>-spec-<demoKey>`).

**Clear the header extras:**

```ts
"description": "",   // the card description is removed from the design
```

Keep `cardKey`, `demoKey`, and `node` — they're wiring, not content.

## 3.2 The demo panel mirrors the Figma property panel

> Same properties, same order, same labels, same values. The only thing left out is slots.

```ts
const alertDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      { label: 'Type', prop: 'type', defaultValue: 'information',
        options: [
          { value: 'neutral',     label: 'Neutral' },
          { value: 'information', label: 'Information' },
          { value: 'warning',     label: 'Warning' },
          { value: 'error',       label: 'Error' },
          { value: 'success',     label: 'Success' },
        ] },
    ],
  },
];
```

| Rule | Detail |
|---|---|
| One row per Figma property | In Figma's panel order |
| `label` is Figma's name, verbatim | `Type`, `Size`, `HelperText` — not "type" or "Alert type" |
| `value` lowercase-kebab, `label` Figma's Title Case | `{ value: 'header-only', label: 'Header Only' }` |
| Skip slots | Instance-swap / node properties get no control |
| Skip the driving property | The card already *is* that value |
| Booleans use a toggle | `control: 'toggle'`, options `[{value:'false'},{value:'true'}]` — off first, on second |
| Text properties use an input | `class="demo-panel-select demo-panel-input"` (see `alert.ts`) |
| One control set per component | Define it once as a `const` and reuse it on every card |
| `defaultValue` = Figma's default variant | Not just the first option |

## 3.3 Exactly four spec sections

```
Properties → Colors → Typography → Layout
```

```ts
"sections": [
  { "label": "Properties", "slug": "props",   "rows": [ … ] },
  { "label": "Colors",     "slug": "colors",  "rows": [ … ] },
  { "label": "Typography", "slug": "typo",    "rows": [ … ] },
  { "label": "Layout",     "slug": "layout",  "rows": [ … ] }
]
```

Any other section is deleted. Any missing one is written.

**Properties** — one row per property from the worksheet, plus the driving property showing this card's value.

```ts
{ "key": "Style", "value": "Banner" },                     // the card's own value — static
{ "key": "Type",  "value": "Information", "prop": "type" }  // follows the panel
```

**Colors** — one row **per element**, never per state. Elements are the parts a developer paints: Background, Border, Title, Description, Icon, Accent.

```ts
{ "key": "Background", "value": "#E5F1FF", "token": "alert/color/information/bg" }
```

`value` starting with `#` renders the swatch dot automatically. If a color changes with a control, add `variants` (3.5) — don't add a row per state.

**Typography** — text style names only, one row per text layer.

```ts
{ "key": "Label",       "value": "Primary/Label/Large",   "mono": true },
{ "key": "Description", "value": "Secondary/Heavy/Large", "mono": true }
```

Delete `Font`, `Size`, `Tracking`, `Line-height`. They live in the text style; repeating them is what goes stale.

> **Reading limits — Talk To Figma plugin.** Two things the plugin cannot return, found on the Alert run:
>
> - **Text style names.** DS text styles come from a shared library, so `get_styled_text_segments` returns an opaque `textStyleId` (`S:4b55…`) and `get_styles` comes back empty. Ask the designer for the exact names — never infer one from the font and size.
> - **Auto-layout padding, gap and alignment.** Not exposed. Derive them from `absoluteBoundingBox` positions (child left minus parent left = padding left; gap between two stacked children = item spacing) and have the designer confirm. Say "derived" in the report.
>
> Figma Dev Mode MCP returns both directly — use it when it's authorized.

**Layout** — only these seven keys, in this order, all `"mono": true`. Omit one only when it genuinely doesn't apply.

| Key | Example |
|---|---|
| `Height` | `48px` or `Hug` |
| `Width` | `360px` or `Fill` |
| `Radius` | `4px` |
| `Padding H` | `16px` |
| `Padding V` | `12px` |
| `Gap` | `8px` |
| `Alignment` | `Center` / `Leading` / `Top` |

No icon sizes, no slot dimensions, no shadows.

## 3.4 Rows that follow the panel — `variants`

One row plus a variant map, keyed `"<prop>:<value>"`:

```ts
{ "key": "Background", "value": "#E5F1FF", "token": "alert/color/information/bg",
  "variants": {
    "type:neutral": { "value": "#F4F6FA", "token": "alert/color/neutral/bg" },
    "type:warning": { "value": "#FFF9EB", "token": "alert/color/warning/bg" },
    "type:error":   { "value": "#FEECEB", "token": "alert/color/error/bg" },
    "type:success": { "value": "#E4F7ED", "token": "alert/color/success/bg" }
  } }
```

- Keys use the control's `prop` and option `value` **exactly** (lowercase).
- Compound keys join with `|`: `"style:card|state:pressed"`. Compound matches first, then each single key.
- Overridable: `value`, `token`, `mono`, `swatch`, plus `hide: true` to drop the row for that selection.
- The top-level `value` is the fallback — make it the default variant's value.

> **Known limitation.** ~18 older demo scripts rebuild the Colors / Layout / Typography sections with `innerHTML =` inside their own `updateSpecCard()`, which wipes `variants`. If rows don't update, delete that section-rebuild block from `public/scripts/demos/<slug>.js` — the schema does that job now.

## 3.5 Colors table

Target shape:

| ROLE | ELEMENT | TOKEN | VALUE |
|---|---|---|---|
| Information | Background | `main/alert/color/information/bg` | `#E5F1FF` |
| Information | Title | `main/alert/color/information/label-title` | `#072592` |
| Information | Description | `main/alert/color/information/description` | `#072592 @ 80%` |
| Warning | Background | `main/alert/color/warning/bg` | `#FFF9EB` |

- **ROLE** — the driving-property value this block belongs to.
- **ELEMENT** — Background, Border, Title, Description, Icon, Accent.
- **TOKEN** — full semantic path.
- **VALUE** — the hex. `#020E22 @ 56%` renders translucent; `–` renders no swatch.

Group by ROLE in card order. Every hex a developer needs must appear.

**Interim authoring shape** (until the Element column ships — see pre-work in `README.md`). It maps one-for-one onto the four columns:

```ts
"colorsTables": [{
  "title": "Colors by Type",
  "columns": ["Token", "Value"],
  "rows": [
    { "role": "Information", "token": "Background",
      "values": ["main/alert/color/information/bg", "#E5F1FF"] },
    { "role": "—",           "token": "Title",
      "values": ["main/alert/color/information/label-title", "#072592"] }
  ]
}]
```

Repeat ROLE on the first row of each group; use `—` for the rest.

## 3.6 DEV code — SwiftUI and Compose that follow the panel

Flip the card's DES/DEV toggle. Both tabs must **re-render when a control changes**. A static snippet is a fail.

**In the data file** — `swift` and `compose` hold the default-state snippet as syntax-highlighted HTML. It's the server-rendered fallback before JS boots.

Write **component API** code — what a developer types to *use* the component:

```swift
EBAlert(type: .information, title: "…")        // ✅ component API
    .ebStyle(.banner)

HStack(spacing: Constants.spaceSpace0) { … }    // ❌ Figma Dev Mode drawing code
    .background(Constants.mainAlertBg)
```

Names follow `EB{ComponentName}`.

**In `public/scripts/demos/<slug>.js`** — three pieces make it live. Copy the contract from `counter.js`:

```js
/* 1 — per-card state, one key per card's demoKey */
var _specCards = {
  banner: { type: 'information' },
  card:   { type: 'information' }
};
window._specCards = _specCards;

/* 2 — snippet builders reading that state */
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwift(cardKey, card) : buildCompose(cardKey, card);
}
window.getSnippet = getSnippet;

/* 3 — on every control change: repaint preview, spec rows, and code */
function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;

  /* … repaint the card preview … */

  var devView = document.querySelector('[data-view="' + cardKey + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && /swift/i.test(activeTab.textContent) ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + cardKey + '"]');
    if (codeEl) {
      var code = getSnippet(cardKey, lang, card);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (window.highlightSyntax) window.highlightSyntax(codeEl);
    }
  }
}
window.updateSpecCard = updateSpecCard;
```

- `getSnippet` returns **plain text** — `highlightSyntax()` colors it.
- `_specCards` keys must equal each card's `demoKey` (or `cardKey` when there's no `demoKey`).
- The SWIFTUI/COMPOSE tab switch calls `getSnippet` for you (`assessment.js → switchCodeTab`). Define it and both tabs go live.
- Call `updateSpecCard` once per card on init so the first paint matches the defaults.

---

# Phase 4 — `Validate`

The reviewer types `Validate`. The AI runs every check below and reports. **No content is edited during validation** — findings go in the report, and the reviewer decides what gets fixed.

## 4a. Commands

```bash
cd astro-site
npm run build          # schema breakage
npm run lint           # preview structure + colors-table coverage
grep -c "getSnippet" public/scripts/demos/<slug>.js     # must be ≥ 1
```

Then open `http://localhost:4321/components/<slug>` and click **every** control on **every** card.

## 4b. The 14 checks

| # | Check | How to tell it passed |
|---|---|---|
| 1 | Build passes | `npm run build` exits clean |
| 2 | Lint passes | `npm run lint` exits clean |
| 3 | Card count = driving property values | 2 values → 2 cards |
| 4 | Card titles are bare values | No `·`, no `=`, no prose |
| 5 | Card descriptions cleared | Every `description` is `""` |
| 6 | Panel matches Figma | Same properties, order, labels, values |
| 7 | Slots excluded from the panel | No instance-swap control |
| 8 | Every control moves the preview | Click each option, watch the render |
| 9 | Exactly four sections, in order | Properties, Colors, Typography, Layout |
| 10 | Layout uses only the 7 keys | No icon sizes, no shadows |
| 11 | Typography is style names only | No Font / Size / Tracking / Line-height rows |
| 12 | Colors rows follow the controls | Switch a control — hex and token both change |
| 13 | Colors table is Role │ Element │ Token │ Value | Grouped by role, in card order |
| 14 | DEV code is live on both tabs | SwiftUI and Compose both change with the controls |

## 4c. Report format

The AI prints one table. Status is one of **✅ Done · ⚠️ Partial · ❌ Missing · 🔴 Broken**.

```
## Style Review — Validation · Alert

| # | Check | Status | Detail |
|---|---|---|---|
| 1  | Build | ✅ Done | clean |
| 2  | Lint | ✅ Done | clean |
| 3  | Card count | ✅ Done | 2 cards = Style (Card, Banner) |
| 4  | Card titles | ⚠️ Partial | "Banner" ok · "Accent Card · Large" still carries the size |
| 5  | Descriptions cleared | ✅ Done | both "" |
| 6  | Panel matches Figma | ❌ Missing | Figma has Content and Size; panel only has Type |
| 7  | Slots excluded | ✅ Done | Leading-Slot not in the panel |
| 8  | Controls move the preview | ✅ Done | 5 Type options verified |
| 9  | Four sections | ✅ Done | correct order |
| 10 | Layout 7 keys | ⚠️ Partial | "Right icon" and "Gap (icon ↔ content)" still present |
| 11 | Typography style names | ✅ Done | 2 rows |
| 12 | Colors follow controls | ✅ Done | 4 rows × 5 types |
| 13 | Colors table shape | ⚠️ Partial | authored in interim shape — waiting on the Element column |
| 14 | DEV code live | 🔴 Broken | no getSnippet in demos/alert.js — both tabs frozen |

**Result:** 9 done · 3 partial · 1 missing · 1 broken
**Blocked by pre-work:** check 13 (Element column not shipped yet)
**Recommended next:** add Content + Size controls (check 6), trim Layout (10), write getSnippet (14)
```

Rules for the report:

- **One row per check, always all 14** — a check that passed still gets a row.
- **Detail says what, not how much.** Name the card, the row, the property.
- **Separate "blocked" from "failed."** A check waiting on maintainer pre-work is Partial + listed under *Blocked*, never Broken.
- **End with a next-action line** ordered by what unblocks the most.
- If a check can't be run (dev server down, Figma channel not joined), mark it 🔴 Broken and say why — never guess a pass.

---

# Guardrails

- **Figma is read-only.** Found a problem in the component? File it as an Open Issue via `OVERVIEW-REVIEW-GUIDE.md` — don't fix it in Figma.
- **Style tab only.** Don't touch Overview, Code, or Changelog in this run. The Changelog entry for this work is written by `Changelog Review`.
- **Never commit or push** unless explicitly told. `main` auto-deploys to production.
- **One component per run.**
