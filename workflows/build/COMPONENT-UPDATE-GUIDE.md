# Component Update — Playground, In Context and cleanup on one component

> **Trigger:** the reviewer types `Component Update`
> **Last phase:** the reviewer types `Validate`
> **Scope:** one component already on the site. It gets the **Playground** tab, its **In Context** screen, and the **sweep cleanup**. Nothing else.

This is the rollout the first 20 Core Components went through (Avatar → Segmented Control - Group, October 2026). The owner approves every result, so the run ends with a **report**, not with a merge.

| Phase | Who acts | What happens |
|---|---|---|
| 1 · Intake | AI asks | Component name — the AI finds the page and its Figma set |
| 2 · Check | AI | Is the Figma set live and healthy? Stops if not |
| 3 · Build | AI | Playground, In Context, cleanup — the steps below, in order |
| 4 · Validate | Reviewer types `Validate` | AI runs every check and writes the report |

Related: [Playground Build](PLAYGROUND-BUILD-GUIDE.md) (how the Playground works, the failure modes) · [Overview Build](OVERVIEW-BUILD-GUIDE.md) (the verdict box rule) · [Code Build](CODE-BUILD-GUIDE.md) (Code tab rules) · setup and house rules: [workflows/README.md](../README.md).

---

## Rule one — the owner decides, the reviewer reports

The reviewer's run makes **mechanical** changes only. Anything that changes what the page *says about the component* is reported to the owner and **not done**:

| Stop and ask the owner | Why |
|---|---|
| The page's node is gone, or the set is empty | The set moved — repointing `meta.node` is a decision |
| Figma has a duplicate variant, or reports 0 properties | A designer must fix Figma first |
| Changing a verdict (Fix → Keep, …), a trait rating, or a badge | An assessment, not a cleanup |
| Moving an open issue to Resolved, or filing a new one | Same |
| The Overview describes a component Figma no longer has | Needs a `Component Review` |
| Editing any past changelog entry | The changelog is the audit trail |
| Missing sections (no snippets, no guidelines, no Behavior table) | Needs a `Code Build` / `Component Build` |
| Renaming an API (`.info` → `.information`) | An API decision |
| An In Context frame that isn't 960 × 430, or no frame at all | The owner picks the screen |
| Any edit in Figma | Read-only, always |
| Fidelity between 1% and 3% | Accept only with the owner, reason recorded |

When the reviewer meets one, they write it under **Needs your decision** in the report and carry on with the rest.

---

## Phase 1 — Intake

The AI replies with exactly this and waits:

```
Component Update — which component?
Name or slug:
```

From the name, find the slug in `astro-site/src/content/components/` (Select Group is `dropdown-item-group`, Select is `dropdown`, Select Item is `dropdown-item`). Confirm the name, slug, file and node back to the reviewer.

## Phase 2 — Check the Figma set

```bash
cd astro-site
npm run update:check -- <slug>
```

| Result | Do |
|---|---|
| `OK — ready to build` | Phase 3 |
| `STOP — verdict is remove / consolidate / product-layer` | Report and end. No Playground |
| `STOP — node … does not exist` or `the set is EMPTY` | Find an instance of the component (the Working File's **Pipeline [Core Components]** page has one for most) and run `npm run update:trace -- <fileKey> <instanceId>`. **Report** the set it finds. If the page's Code tab and changelog already describe that set, the owner will usually approve repointing `meta.node` + `meta.figmaUrl` — but ask |
| `STOP — duplicate variant` / `no properties` | Report the node IDs. A designer deletes the duplicate; then re-run |

## Phase 3 — Build

Run the steps in order. **Start the dev server in your own terminal first** and leave it open — a server started by Claude is stopped after about ten minutes and the checks then fail in confusing ways:

```bash
cd astro-site
ulimit -n 10240 && npm run dev        # wait for "Local http://localhost:4321/"
```

### 3.1 Playground

```bash
npm run playground:build -- <slug> <fileKey> <setId>
```

Then compare **the property panel with a Figma instance of the same variant**: every variant property, text property (`Count`, `Label`) and boolean, and **nothing the variant doesn't use** (Counter shows `Limit` only with hasLimit on). Then add `"playground": true` at the end of the page's `style` block.

### 3.2 In Context

The screens live on the Working File's **Pipeline [Core Components]** page as frames named `In Context - <Component>` (960 × 430).

```bash
npm run update:context -- <slug> <frameId>
```

Then **open the PNG and look at it.** Write `overview.inContextNote` (one sentence, at most two lines, starting "How the … appears in a real product screen —") and the `<img>` alt text **from what is on the screen** — the screen's title, the labels you can read. Never describe a screen you haven't looked at. One screen may serve two pages when it truly shows both (Radio Button and Radio Button with Label share one).

If the reviewer dropped their own PNG into `public/assets/previews/`, rename it to `<slug>-in-context.png` and use it the same way.

### 3.3 Cleanup — the sweep rules

```bash
npm run update:tidy -- <slug>          # K8, K9, K10 — mechanical
npm run audit:matrix | grep " <slug> "  # what is still failing
```

Then fix by hand only these:

| Rule | Fix |
|---|---|
| **M3** verdict box | Title starts with the verdict word (`Keep — …`, `Fix — …`). Text **≤ 240 characters**: what is true now and what closing it takes — not the history. **Every claim must match Figma today**: check it against the Playground data before keeping it |
| **K2** Property Mapping | Figma column in prose, one row per property: `State — Default, Pressed, Disabled`. No `=`, no `<code>`. Values exactly as Figma lists them. SwiftUI/Compose cells unchanged |
| **Code Connect** | It appears nowhere on a page. Remove it from the verdict, notes and scorecard (rephrase the sentence); delete a recommendation that is only "Register Code Connect". Never touch the changelog |
| **L1** changelog header with no node | Report it — editing a past entry needs the owner |

Everything else the matrix lists (O3, K3, K5, …) goes in the report as a next step.

## Phase 4 — Validate

On `Validate`, run everything and write the report. Run the checks **one component at a time** and **never while a build is writing data** (the dev server reloads and the checks time out):

```bash
for c in smoke reflow a11y fidelity; do node scripts/playground/$c.mjs <slug>; done
npm run check                                            # build + gate + lint
npx playwright test -g " <slug> / " --workers=1          # first run saves the baselines
npx playwright test -g " <slug> / " --workers=1          # second run must pass
npm run audit:matrix | grep " <slug> "
```

A check that fails once: run it again once. Fails twice → it's real, investigate (start with the failure modes in the [Playground Build guide](PLAYGROUND-BUILD-GUIDE.md#6-failure-modes-that-produce-a-wrong-page-quietly)).

### The report — always this shape

```
Component Update — <Name> (<slug>)

Figma      <file> · set <node> · <N> variants · properties: …
Playground smoke ✓ · reflow ✓ · a11y ✓ · fidelity <n>/<n> ≤ 1%  (worst x%)
Visual     <N> baselines saved and confirmed
Build      check ✓ (build · gate · lint)
Sweep      <before> → <after> / 39
In Context <frame name> (<node>) — <one line: what the screen shows>

Changed
- <field>: <previous> → <new>      (one line each)

Corrected against Figma
- <claim on the page> → <what Figma shows>, node <id>

Needs your decision
- <item> — <why it's yours> — <what I'd suggest>
```

## Phase 5 — Hand it over

Commit to **your own branch**, push it, open a PR to `main` (see [BRANCHING.md](../../BRANCHING.md)), and paste the report into the PR description. **Never push to `main`.** The owner reads the report, waits for CI, and merges.

---

## Traps we've already hit

| Symptom | Cause | Do |
|---|---|---|
| Checks time out or crash, pages "can't be reached" | The dev server died (too many open files, or Claude's session stopped it) | Run it in your own terminal with `ulimit -n 10240` |
| A check fails, then passes on re-run | The Mac is short on memory | Close other apps; re-run once |
| Every page shows `0 × 0` sizes | The Playground laid out while its tab was hidden | Already fixed; smoke catches it if it returns |
| Smoke flags `0 × 0` on one layer | That layer is hidden by a boolean that's off | Already skipped by smoke; a *visible* `0 × 0` is real |
| Visual says "hidden" on every variant | The component is zero-height (Progress Bar's stroked lines) | Already handled by the visual test |
| A few pixels differ on an icon | Chrome smooths SVG edges slightly differently run to run | Re-run once; report if it persists |
| Fidelity 1–3% on every variant | Usually a fractional width (Segmented Control Button is 90.67 px) | Show the side-by-side in `.fidelity/`; owner decides |
| The Overview argues against a design Figma no longer has | The component was rebuilt; only Code and Changelog were updated | Report — needs a `Component Review` |
| The page's node "does not exist" | The set moved to Sticker Sheets v2 | `update:trace`, then report |
