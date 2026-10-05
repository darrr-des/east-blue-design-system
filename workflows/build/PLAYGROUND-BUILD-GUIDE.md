# Playground Build — command guide

> **Trigger:** the reviewer types `Playground Build`
> **Last phase:** the reviewer types `Validate`
> **Scope:** the **Playground tab only** — generating it from Figma and passing the four checks.

| Phase | Who acts | What happens |
|---|---|---|
| 1 · Intake | AI asks | Component name + Figma link of the component set |
| 2 · Build | AI | Runs `playground:build` and reports what came back. Nothing is hand-written. |
| 3 · Check | AI | Looks at it against Figma, then runs the four checks |
| 4 · Validate | Reviewer types `Validate` | AI runs the 14 checks in [PLAYGROUND-REVIEW-GUIDE.md](../review/PLAYGROUND-REVIEW-GUIDE.md) |

Related: [Overview](OVERVIEW-BUILD-GUIDE.md) · [Code](CODE-BUILD-GUIDE.md) · [Changelog](CHANGELOG-BUILD-GUIDE.md) · rechecking an existing Playground: `Playground Review`. The scripts themselves: `astro-site/scripts/playground/`.

The Playground documents a component by **reading it and rendering it** — every variant, every layer, every bound token, straight from the Figma REST API. A component shows the Playground once its data file sets `style.playground: true`.

---

## 1. Intake

You need:

```
Component Name:
Component Link:   (the Figma URL of the COMPONENT SET, not one variant)
```

From the URL:

```
figma.com/design/:fileKey/:fileName?node-id=:nodeId
→ fileKey = :fileKey     nodeId = convert "-" to ":"      4915-25141 → 4915:25141
```

The link must point at the **component set**. A single variant builds a Playground with one variant in it and nobody notices until the inventory looks short.

## 2. Build

```bash
npm run playground:build -- <slug> <fileKey> <setId>
# e.g.  npm run playground:build -- test-toast pbxY8a2xcIfVZKxwnud9Xe 4915:25141
```

Writes `public/playground/<slug>.json`: every variant as a layer tree — geometry, auto layout, radius, paints, text, effects — with each bound variable resolved through `src/data/tokens.json`, and every piece of vector art exported from Figma as SVG.

**The file is a build artifact. Never hand-edit it.** `drift` re-hashes the payload and reports `edited` if you do, and the next build overwrites you.

It needs `FIGMA_ACCESS_TOKEN` in `astro-site/.env` (scope `file_content:read`). The token is never printed.

## 3. Look at it

```bash
npm run dev      # → http://localhost:4321/playground/<slug>
```

Check by eye, against Figma, before running anything:

- **Every variant is there**, and the property panel matches **a Figma instance's** panel for the same variant — variant properties, text properties, booleans (invisible to the Talk To Figma plugin but they come back over REST), and nothing the variant does not use.
- **Toggling a property reflows the component**, rather than leaving a hole or a clipped edge.
- **Empty slots** show Figma's pink `+` placeholder.
- **Icons are the real exported art**, not a box.

## 4. The gate — four checks, all must pass

```bash
npm run playground:checks     # smoke → reflow → a11y → fidelity
```

| Check | Script | What it proves | Typical runtime |
|---|---|---|---|
| **smoke** | `smoke.mjs` | Every control, every layer of every variant, both code languages — no page error, nothing clipped | ~4 min for 25 |
| **reflow** | `reflow.mjs` | Every variant × every combination of the set's booleans obeys Figma's auto-layout rules | ~6 min |
| **a11y** | `a11y.mjs` | Names, the WAI-ARIA tree pattern, focus ring, live region | ~3 min |
| **fidelity** | `fidelity.mjs` | Figma's PNG export vs the rendered Playground, pixel for pixel | ~15 min |

Run one component while iterating: `npm run playground:smoke -- <slug>`.

Every check exits 1 on a failure — until 2026-09-30 smoke, reflow and fidelity printed ✗ and still exited 0, so CI stayed green on a broken page.

**A check that passes on zero components is not a pass.** All three page harnesses exit 1 on an empty list — that guard exists because they once reported "all pages passed" after the data moved and they found nothing.

## 5. Reading a fidelity result

| Result | Meaning |
|---|---|
| **≤ 1%** | Pass. Sub-pixel text rasterisation and antialiasing. |
| **1–3%** | Look at the side-by-side in `.fidelity/` before accepting. Usually a half-pixel border on a rounded corner, or an emoji glyph the browser draws differently. Accept only with a reason recorded. |
| **> 3%** | Fail. Something is structurally wrong. |
| **size gate** | Reported before the pixel score: our box vs Figma's, 0.6px. A structural miss — an 18px strip on a 360×288 card — only reads ~1% in pixels, so size is checked first. |
| **skipped** | Figma's own export contradicts the geometry Figma reports. Reported apart, never counted as a pass. |

Three sit between 1% and 3% today and are accepted by choice — **Ad Carousel** (an emoji glyph the browser rasterises differently), **Date Picker Cell**'s MonthYear "Today" variant (an uneven 2/1.5px border on a rounded corner), and **Segmented Control Button**, ~2.0–2.4% on every variant (accepted 2026-10-02: the segment is a fractional 90.67px wide, so its 1px right-side stroke straddles a pixel — Figma's export snaps it, the browser blends it across two). All are visually identical; the side-by-sides are in `.fidelity/`. Take the current figures from the check output, not from here — they move a little run to run.

## 6. Failure modes that produce a wrong page quietly

Every one of these was found by a check, not by eye. If a build looks off, start here.

| Symptom | Cause | Rule |
|---|---|---|
| A layer shows that Figma hides | A nested instance's own property was used to unhide it | Only the **set's own** properties may change visibility |
| Text wraps that shouldn't | `textAutoResize: WIDTH_AND_HEIGHT` rendered as wrapping | Auto-width text takes **Figma's stored width** — the browser measures the same string fractionally narrower, and it compounds through Hug parents |
| A frame collapses to zero | FILL on an axis the parent **HUGs** | Treat FILL as HUG on that axis |
| A shadow draws as a rectangular band | The frame has no fill, so Figma casts the shadow from the **rendered silhouette** | Fill-less frames use `filter: drop-shadow()`, not `box-shadow` |
| A variant reads as short in fidelity | Figma's `absoluteRenderBounds` can be **stale** | `drawnBounds()` derives the rect from each layer's box plus its own visible shadows — and **must not descend past `clipsContent: true`** |
| Labels cut off at the component edge | The overlay was appended inside a root with "Clip content" | The overlay belongs to the **canvas**, not the root |
| Two same-named siblings share tree state | The open/closed key was a path of names | Key by name **plus ordinal** among same-named siblings |
| Selecting a layer on the component page shows `0 × 0` and the outline in the corner | The Playground boots inside the **hidden** tab, where every layer measures 0 × 0; the standalone `/playground/<slug>` page never shows it | A `ResizeObserver` on `#pg-canvas` lays out again when the tab is shown. `smoke` opens the real component page for every opted-in component and fails on a `0 × 0` size tag |
| A property Figma shows is missing, or a switch does nothing | The build read only VARIANT and BOOLEAN properties, and listed every property on every variant | TEXT properties are read too (`textProp` on the bound layer), and each variant records the properties its layers `uses`; the panel shows only those, as Figma's instance panel does — Counter shows `Limit` with hasLimit on and `hasOverflow` with it off. `smoke` flips switches to reveal hidden controls and types into every text field |
| The tab is dead after a client-side navigation | Astro runs a given script **once per session** | Boot from `astro:page-load`, and mark `#pg-data` so a document boots exactly once |

## 7. Drift

```bash
npm run playground:drift -- <slug>          # compare against the Figma file version
npm run playground:drift -- <slug> --deep   # re-read the component and compare hashes
```

`--deep` re-reads into a temp directory and never writes to `public/playground`. What each state means, and what to do, is in `Playground Review`.

---

## 8. `Validate`

The reviewer types `Validate`. The AI runs **the 14 checks in [PLAYGROUND-REVIEW-GUIDE.md](../review/PLAYGROUND-REVIEW-GUIDE.md)** and reports in that guide's format.

---

# Guardrails

- **Never hand-edit `public/playground/<slug>.json`.** It is generated. Fix the builder or fix Figma.
- **Never write to Figma.** Read-only, like every other tab.
- **Never accept a check that ran on nothing.** An empty list is a failure, not a pass.
- **Findings about the component go to the Overview tab** as open issues, through `Component Review` — not into the Playground.
