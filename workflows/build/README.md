# workflows/build — writing a component's tabs

One build guide per tab. A **build** writes a tab: the first assessment of a component, or a section that doesn't exist yet. Rechecking a tab that already exists is a **review** — see [workflows/review/](../README.md).

| File | Trigger the reviewer types | Writes |
|---|---|---|
| [OVERVIEW-BUILD-GUIDE.md](OVERVIEW-BUILD-GUIDE.md) | `Component Build` | **Overview tab** — verdict box, DS Health, behavior, issues, recommendations, badges |
| [PLAYGROUND-BUILD-GUIDE.md](PLAYGROUND-BUILD-GUIDE.md) | `Playground Build` | **Playground tab** — generated from Figma by `playground:build`, then the four checks |
| [CODE-BUILD-GUIDE.md](CODE-BUILD-GUIDE.md) | `Code Build` | **Code tab** — Installation through Variants Inventory |
| [CHANGELOG-BUILD-GUIDE.md](CHANGELOG-BUILD-GUIDE.md) | `Changelog Build` | **Changelog tab** — one new entry |

## Build or review?

| Situation | Run |
|---|---|
| New component, or a tab that was never written | **Build** |
| A section is missing, or needs new content (a new API, a new snippet, a new entry) | **Build** |
| The tab exists and you want to know if it's still right | **Review** |
| The review finds something stale or out of place | **Review** fixes it (small fixes only — each review guide lists them) |

## How a build runs

```
1 Intake    → AI asks for component name + Figma link
2 Read      → AI reads Figma (and the data file, if one exists) and reports what it found
3 Write     → AI writes the tab to the rules in the guide
4 Validate  → reviewer types `Validate` → AI runs that tab's checks from its review guide
```

The checks live **only** in the review guides, so a build and a review are measured by the same list.

**Order for a new component:** `Component Build` → `Playground Build` → `Code Build` → `Changelog Build`. The first three write the tabs; the last records them.

Shared setup, house rules, reading Figma and the status vocabulary: [workflows/README.md](../README.md). What the scores mean: [eb-ds-assessment-guide.md](../../eb-ds-assessment-guide.md).
