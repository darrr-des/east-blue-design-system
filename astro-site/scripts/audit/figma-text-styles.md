# Figma Source-of-Truth Audit — All Components

**Source:** Sticker Sheet v2 (`HwWDwPit2xJjDH4zszOZ5o`)
**Method:** Per-component `mcp__ClaudeTalkToFigma__scan_text_nodes` against each component's `meta.node`
**Scope:** 79 components total (10 manually + 69 via agent batch)

> Roboto/Inter spec annotations and pure numeric spacer labels (e.g. "8", "12", "16") are filtered out.
> Where multiple sizes appear under the same role, those are size variants the component supports.

---

## Already audited & fixed (10)

### text-area
| Role | Family | Style | Size |
|---|---|---|---|
| #text-label | Proxima Soft | Semibold | 14 |

### callout
| Role | Family | Style | Size |
|---|---|---|---|
| #label (small) | Proxima Soft | Bold | 12 |
| #title | Proxima Soft | Bold | 16 |
| #subtext | BarkAda | SemiBold | 14 |

### date-picker
| Role | Family | Style | Size |
|---|---|---|---|
| #label (form group) | Proxima Soft | Semibold | 14 |
| #value (select field) | Proxima Soft | Semibold | 14 |
| Date numbers (1-31) | Proxima Soft | Semibold | 14 |
| Weekday headers (Su/M/T...) | Proxima Soft | Bold | 14 |
| #month-label | Proxima Soft | Bold | 18 |

### chat-field
| Role | Family | Style | Size |
|---|---|---|---|
| #text-label | Proxima Soft | Semibold | 16 |

### dropdown-item-group
| Role | Family | Style | Size |
|---|---|---|---|
| #value | Proxima Soft | Semibold | 18 |

### select-field
| Role | Family | Style | Size |
|---|---|---|---|
| #value | Proxima Soft | Semibold | 14 |

### accordion
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Bold | 16 |
| #desc | BarkAda | SemiBold | 14 |

### action-list
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Semibold | 16 |
| CTA #label | Proxima Soft | Semibold | 16 |

### action-list-counter
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Bold | 18 |
| Counter #value | Proxima Soft | Bold | 14 |

### action-list-description
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Semibold | 16 |
| #blurb | Proxima Soft | Semibold | 12 |
| CTA #label | Proxima Soft | Semibold | 16 |

---

## Remaining audit (69 components)

### ad-space — no body text

### alert
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 16 / 18 |
| #text | BarkAda | SemiBold | 12 |

### amount-text-field
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Semibold | 14 / 18 |
| #amount | Proxima Soft | Semibold | 53 |
| #amount | Proxima Soft | Bold | 35 |

### avatar-group
| Role | Family | Style | Size |
|---|---|---|---|
| #initials | Proxima Soft | Bold | 12 / 14 |

### avatar
| Role | Family | Style | Size |
|---|---|---|---|
| #initials | Proxima Soft | Bold | 10 / 12 / 14 / 18 / 22 / 31 / 35 |

### badge
| Role | Family | Style | Size |
|---|---|---|---|
| #label / label | Proxima Soft | Bold | 10 / 12 |
| #value | Proxima Soft | Bold | 10 / 12 |

### banner
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 12 / 18 |
| #blurb | BarkAda | SemiBold | 12 |
| #description | BarkAda | Bold | 14 |

### bottom-sheet
| Role | Family | Style | Size |
|---|---|---|---|
| #preamble | Proxima Soft | Bold | 14 |
| #header | Proxima Soft | Bold | 22 |
| #description | BarkAda | Medium | 14 |
| #label | Proxima Soft | Bold | 18 |

### button
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Bold | 12 / 14 / 16 / 18 |

### carousel-card
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 18 |
| #description | BarkAda | SemiBold | 12 |

### carousel-discount-card
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 14 |
| #price | Proxima Soft | Bold | 12 |
| #discount | Proxima Soft | Bold | 12 |

### carousel-item
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 18 |
| #description | BarkAda | SemiBold | 12 |

### checkbox — no body text

### chip
| Role | Family | Style | Size |
|---|---|---|---|
| #filter-name | Proxima Soft | Bold | 16 |

### counter
| Role | Family | Style | Size |
|---|---|---|---|
| #value | Proxima Soft | Bold | 14 |

### date-picker-group
| Role | Family | Style | Size |
|---|---|---|---|
| #month-label | Proxima Soft | Bold | 18 |
| #text (weekday) | Proxima Soft | Bold | 14 |
| #text (date) | Proxima Soft | Semibold | 14 |

### date-picker-item
| Role | Family | Style | Size |
|---|---|---|---|
| #text (header) | Proxima Soft | Bold | 14 |
| #text (date) | Proxima Soft | Semibold | 14 |

### dropdown-item
| Role | Family | Style | Size |
|---|---|---|---|
| #value (main) | Proxima Soft | Semibold | 18 |
| #value (badge) | Proxima Soft | Bold | 12 |
| #name | Proxima Soft | Semibold | 18 |

### dropdown
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Semibold | 14 |
| #value | Proxima Soft | Semibold | 14 / 18 |

### empty-state
| Role | Family | Style | Size |
|---|---|---|---|
| #heading | Proxima Soft | Bold | 18 |
| #header | Proxima Soft | Bold | 20 |
| #description | BarkAda | SemiBold | 12 |
| #label | Proxima Soft | Bold | 18 |

### footer
| Role | Family | Style | Size |
|---|---|---|---|
| #text | Proxima Soft | Bold | 12 |
| #label | BarkAda | SemiBold | 12 |
| #text | BarkAda | SemiBold | 12 |
| #description | BarkAda | SemiBold | 10 |

### generic-card
| Role | Family | Style | Size |
|---|---|---|---|
| #tag | Proxima Soft | Bold | 14 |
| #value | Proxima Soft | Bold | 12 |
| #name | Proxima Soft | Bold | 18 |
| #label | BarkAda | SemiBold | 12 |
| #description | BarkAda | SemiBold | 12 |
| #label | Proxima Soft | Bold | 12 |

### generic-transaction-card
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Semibold | 18 |
| #label (caption) | Proxima Soft | Bold | 12 |
| #date | BarkAda | SemiBold | 12 |
| #amount | Proxima Soft | Semibold | 18 |
| #initials | Proxima Soft | Bold | 14 |
| #description | BarkAda | SemiBold | 12 |

### header-centered
| Role | Family | Style | Size |
|---|---|---|---|
| #name / #biller-name | Proxima Soft | Bold | 22 |
| #label | Proxima Soft | Bold | 22 |
| #label / #value | BarkAda | SemiBold | 14 |

### header-transaction
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 22 |
| #description | BarkAda | SemiBold | 12 |
| #text | Proxima Soft | Semibold | 14 |
| #text | Proxima Soft | Bold | 14 |

### header-with-logo — no body text

### header
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 14 |
| #heading | Proxima Soft | Bold | 22 |
| #description | BarkAda | SemiBold | 12 |
| #label | Proxima Soft | Bold | 16 |
| #value | Proxima Soft | Bold | 14 |

### horizontal-voucher
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Bold | 14 |
| #value | Proxima Soft | Bold | 12 / 14 |
| title | Proxima Soft | Bold | 16 |
| #description | BarkAda | Medium | 12 |
| #value | BarkAda | Medium | 12 |
| blurb | BarkAda | Medium | 8 |

### inline-message
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 22 |
| #description | BarkAda | Medium | 14 |
| #name | Proxima Soft | Bold/Semibold | 16 |
| #label | BarkAda | SemiBold | 14 |
| #amount | Proxima Soft | Bold | 18 |

### inline-text
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Semibold | 16 |
| #amount | Proxima Soft | Semibold | 16 |
| #label (caption) | Proxima Soft | Bold | 12 |
| description / #text | BarkAda | SemiBold | 12 |

### input-field
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Semibold | 14 |

### labeled-field
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Semibold | 14 |
| #value | Proxima Soft | Semibold | 14 |

### list-item-asset
| Role | Family | Style | Size |
|---|---|---|---|
| 1. (numeral) | Proxima Soft | Semibold | 14 |
| number (badge) | Proxima Soft | Bold | 12 |

### list-item
| Role | Family | Style | Size |
|---|---|---|---|
| #label | BarkAda | SemiBold | 14 |

### list
| Role | Family | Style | Size |
|---|---|---|---|
| #label | BarkAda | SemiBold | 14 |

### menu-grid
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Bold | 12 |

### modal
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 22 |
| #heading | Proxima Soft | Semibold | 16 |
| #name / #text | Proxima Soft | Semibold | 14 |
| #label | Proxima Soft | Bold | 18 |
| #message | BarkAda | Medium | 14 |

### month-year-picker-item
| Role | Family | Style | Size |
|---|---|---|---|
| #text (header) | Proxima Soft | Bold | 14 |
| #text (date) | Proxima Soft | Semibold | 14 |

### onboarding-tooltip
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 18 |
| #message | BarkAda | SemiBold | 12 |

### overlay — no body text

### progress-bar — no body text

### radio-button-with-label
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Semibold | 14 / 16 |

### radio-button — no body text

### recipient-field
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Semibold | 12 |
| #value | Proxima Soft | Semibold | 14 |

### search-field
| Role | Family | Style | Size |
|---|---|---|---|
| #search | BarkAda | SemiBold | 14 |

### stepper-bullet — no body text (only spacer)

### stepper-circular
| Role | Family | Style | Size |
|---|---|---|---|
| #step | Proxima Soft | Bold | 18 |

### stepper-dash — no body text

### subtext-message
| Role | Family | Style | Size |
|---|---|---|---|
| #subtext | BarkAda | SemiBold | 10 / 12 |

### tab-item
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Bold | 16 / 18 |

### table-scheduling
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Semibold | 12 |
| #amount | Proxima Soft | Bold | 14 |
| #value | Proxima Soft | Semibold | 12 |

### table-transaction
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Semibold | 10 / 14 |
| #amount | Proxima Soft | Bold | 14 |

### table
| Role | Family | Style | Size |
|---|---|---|---|
| Type (heading) | Proxima Soft | Bold | 30 |
| #title | Proxima Soft | Semibold | 16 |
| #label | Proxima Soft | Bold | 12 / 14 / 18 |
| #label | Proxima Soft | Semibold | 12 |
| #description | BarkAda | SemiBold | 8 / 10 |
| #time (status bar) | SF Pro Text | Semibold | 15 |

### tabs
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Bold | 16 |

### terms-conditions-accordion
| Role | Family | Style | Size |
|---|---|---|---|
| #label (heading) | Proxima Soft | Bold | 16 |
| #label (body) | BarkAda | SemiBold | 14 |

### title-bar
| Role | Family | Style | Size |
|---|---|---|---|
| #time (status bar) | SF Pro Text | Semibold | 15 |
| #title | Proxima Soft | Semibold | 16 / 26 |
| #label | Proxima Soft | Semibold | 12 |
| leading-control | Proxima Soft | Semibold | 14 |

### toast-with-button
| Role | Family | Style | Size |
|---|---|---|---|
| #content | Proxima Soft | Bold | 14 |
| #content (caption) | BarkAda | Medium | 10 |
| #label | Proxima Soft | Bold | 14 |

### toast
| Role | Family | Style | Size |
|---|---|---|---|
| #content | Proxima Soft | Semibold | 12 / 14 |

### toggle-with-label
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Semibold | 16 |

### toggle — no body text

### tooltip-blurred
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 18 |
| #message | BarkAda | SemiBold | 12 |

### tooltip-v2
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 18 |
| #message | BarkAda | SemiBold | 12 |
| #label (footer) | Proxima Soft | Bold | 16 |

### upload-file
| Role | Family | Style | Size |
|---|---|---|---|
| #name / file-name / file-format | Proxima Soft | Semibold | 18 |
| #subtext | BarkAda | SemiBold | 12 |
| #label | Proxima Soft | Semibold | 14 |
| #label (caption) | BarkAda | SemiBold | 10 |

### vertical-voucher
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Bold | 14 |
| #value | Proxima Soft | Bold | 12 / 14 |
| title | Proxima Soft | Bold | 16 |
| #description | BarkAda | Medium | 12 |
| #value | BarkAda | Medium | 12 |
| blurb | BarkAda | Medium | 8 |

### view-only-field
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Semibold | 14 |
| #label (caption) | Proxima Soft | Bold | 12 |
| #label (body) | BarkAda | SemiBold | 12 |
| #text / #value | Proxima Soft | Semibold | 16 |
| #subtext | BarkAda | SemiBold | 10 / 12 |
| #blurb | Proxima Soft | Bold | 22 |

### visual-popup
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 22 |
| #message (body) | BarkAda | Medium | 14 |
| #message (caption) | Proxima Soft | Bold | 10 |
| #label | Proxima Soft | Bold | 18 |

### voucher-asset
| Role | Family | Style | Size |
|---|---|---|---|
| #label | Proxima Soft | Bold | 14 |

### voucher-card-horizontal
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 16 |
| #value | Proxima Soft | Bold | 14 |
| #value | Proxima Soft | Semibold | 14 |
| #validity | BarkAda | SemiBold | 10 |
| #label | Proxima Soft | Bold | 10 |

### voucher-details
| Role | Family | Style | Size |
|---|---|---|---|
| #title | Proxima Soft | Bold | 16 / 18 |
| #title | BarkAda | SemiBold | 14 |
| #value | BarkAda | SemiBold | 12 |
| #value | Proxima Soft | Bold | 12 / 16 |
| #value | Proxima Soft | Semibold | 16 |
| #label-date | Proxima Soft | Semibold | 14 |
| #message | BarkAda | SemiBold | 14 |
| #label | Proxima Soft | Bold | 16 |
| #label | BarkAda | SemiBold | 14 |

---

## Style → Weight cheat sheet

| Style | Numeric weight |
|---|---|
| Light | 300 |
| Regular | 400 |
| Medium | 500 |
| Semibold / SemiBold | 600 |
| Bold | 700 |

## Family → Web font

| Figma | Web (after Track 1) |
|---|---|
| Proxima Soft | `Proxima Soft` (loaded from `/fonts/ProximaSoft/`) |
| BarkAda | `BarkAda` (loaded from `/fonts/BarkAda/`) |
| HeyMeow Sft (MeowBark mode only) | not used on web |
