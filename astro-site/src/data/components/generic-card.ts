import type { ComponentData } from '../types';

export const genericCard: ComponentData = {
  "meta": {
    "slug": "generic-card",
    "name": "Generic Card",
    "node": "18482:35806",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-35806",
    "description": "A generic surface card used to group content into a tappable unit — header, body slot, and optional footer.",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Card"
  },
  "overview": {
    "inContextNote": "Generic Card stacks vertically into a scrolling list — product catalogs, service menus, transaction history detail screens. Icon size tightens as the density of the list increases.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"gcard-demo-preview\"><div class=\"eb-preview eb-preview-gcard\"><div class=\"eb-preview-gcard__icon eb-preview-gcard__icon--64\"></div><div class=\"eb-preview-gcard__content\"><div class=\"eb-preview-gcard__subtitle\"><span class=\"eb-preview-gcard__blurb\">Blurb</span><span class=\"eb-preview-gcard__tag\">Tag</span></div><p class=\"eb-preview-gcard__heading\">Heading Goes Here</p><p class=\"eb-preview-gcard__desc-line eb-preview-gcard__desc-line--first\"><span class=\"eb-preview-gcard__desc-label\">Label:</span><span class=\"eb-preview-gcard__desc-value\">Description goes here</span></p><p class=\"eb-preview-gcard__desc-line\"><span class=\"eb-preview-gcard__desc-label\">Label:</span><span class=\"eb-preview-gcard__desc-value\">Description goes here</span></p><span class=\"eb-preview-gcard__badge\">Label</span></div><div class=\"eb-preview-gcard__chevron-wrap\"><svg class=\"eb-preview-gcard__chevron\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"M9 6l6 6-6 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">blurb</span><input type=\"text\" id=\"gcard-ctrl-blurb\" class=\"demo-panel-select demo-panel-input\" value=\"Blurb\" oninput=\"_gcardUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">tag</span><input type=\"text\" id=\"gcard-ctrl-tag\" class=\"demo-panel-select demo-panel-input\" value=\"Tag\" oninput=\"_gcardUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">heading</span><input type=\"text\" id=\"gcard-ctrl-heading\" class=\"demo-panel-select demo-panel-input\" value=\"Heading Goes Here\" oninput=\"_gcardUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"gcard-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"Description goes here\" oninput=\"_gcardUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">badge</span><input type=\"text\" id=\"gcard-ctrl-badge\" class=\"demo-panel-select demo-panel-input\" value=\"Label\" oninput=\"_gcardUpdate()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">iconSize</span><select id=\"gcard-ctrl-iconsize\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"64\" selected=\"\">64</option><option value=\"52\">52</option><option value=\"46\">46</option><option value=\"40\">40</option><option value=\"32\">32</option><option value=\"24\">24</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select id=\"gcard-ctrl-state\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"skeleton\">skeleton</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Slots</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasSubtitle</span><select id=\"gcard-ctrl-hassubtitle\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasBlurb</span><select id=\"gcard-ctrl-hasblurb\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasTag</span><select id=\"gcard-ctrl-hastag\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">has2ndDesc</span><select id=\"gcard-ctrl-has2desc\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasBadge</span><select id=\"gcard-ctrl-hasbadge\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasChevron</span><select id=\"gcard-ctrl-haschevron\" class=\"demo-panel-select\" onchange=\"_gcardUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Solid general-purpose list-row card. Works across catalogs, services, transaction history, and detail-screen rows."
      },
      {
        "name": "Self-contained",
        "rating": "partial",
        "note": "Owns colors, typography, spacing tokens. But the icon is drawn (placeholder circle) not instanced, and the chevron ships as a raster."
      },
      {
        "name": "Consistent",
        "rating": "partial",
        "note": "6 numeric <code>iconSize</code> values is a lot. Tag uses Badge (good) and bottom pill uses Badge (good) — composition is correct where it happens."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Stacks cleanly into a scrollable list. Skeleton state is a first-class variant — rare and worth highlighting as a DS convention."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "state=Default",
        "notes": "Normal row — all content visible, chevron shown when <code>hasChevron</code>."
      },
      {
        "state": "Skeleton (loading)",
        "ios": "yes",
        "android": "yes",
        "property": "state=skeleton",
        "notes": "Loading pattern — gray rounded placeholders where each content slot would render. Kudos for shipping this as a first-class variant."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Tappable row (has chevron) — needs a pressed state with background tint for tap feedback."
      },
      {
        "state": "Disabled",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "For temporarily-unavailable services (e.g. maintenance). Typically dimmed label + muted icon."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "<code>iconSize</code> uses 6 numeric values.",
        "body": "<code>64 / 52 / 46 / 40 / 32 / 24</code> is too granular — consumers can't tell when to pick 46 vs 40. Collapse to 3–4 semantic sizes (XL / L / M / S) with fixed pixel values behind the scenes.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Icon slot is a hardcoded placeholder circle.",
        "body": "Not an Avatar or Icon instance — blocks swappable composition. Designers can't drop in a brand icon, illustration, or Avatar without detaching.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Chevron is a raster image.",
        "body": "Ships as a PNG (<code>shape_full</code>) rather than a vector glyph — blurs at large render sizes and blocks token-based tinting.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No pressed / disabled states.",
        "body": "Has a chevron, so clearly tappable — but only Default + skeleton states are built. Pressed tint and disabled appearance are standard row affordances.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until iconSize collapse + icon-slot adoption land.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Collapse <code>iconSize</code> to semantic sizes.",
        "body": "<code>xl (64) / l (52) / m (40) / s (32)</code> — drops 6 numeric values to 4 meaningful ones. (46 and 24 can be retired or mapped to the nearest semantic size.) Matches how Avatar sizes are named elsewhere.",
        "tag": "Rename"
      },
      {
        "headline": "Replace the icon placeholder with a Figma Slot.",
        "body": "Accept an Avatar instance (for person/brand rows) or an Icon instance (for service rows). Native maps to <code>@ViewBuilder</code> (SwiftUI) or <code>@Composable</code> slot (Compose) via Code Connect.",
        "tag": "Slot"
      },
      {
        "headline": "Convert the chevron to a vector.",
        "body": "Replace the raster <code>shape_full</code> with a vector path — token-bindable color and crisp at any scale.",
        "tag": "Asset"
      },
      {
        "headline": "Add pressed + disabled states.",
        "body": "Pressed: subtle bg tint on the whole row. Disabled: muted label + icon opacity. Rows are tappable and need both.",
        "tag": "State"
      },
      {
        "headline": "Document the skeleton pattern as a DS convention.",
        "body": "Generic Card's skeleton variant is exactly the pattern other row/card components should follow. Call it out in the guidelines so the same loading treatment spreads consistently.",
        "tag": "Docs"
      },
      {
        "headline": "See sibling:",
        "body": "<a href=\"#\" onclick=\"showPanelById('generic-transaction-card');return false;\">Generic Transaction Card</a>. Similar \"card row\" primitive — the two could share a common schema once both are cleaned up.",
        "tag": "Family"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "default-—-iconsize=64",
        "title": "Default — iconSize=64",
        "node": "18482:35807",
        "description": "Full-featured row: icon + blurb with tag, heading, 2 description lines, bottom badge, chevron.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"gcard-spec-1\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "IconSize",
                "value": "64px",
                "mono": false
              },
              {
                "key": "Layout",
                "value": "icon-leading + content-right",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Default",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Surface",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface token",
                "value": "card-list/color/bg",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "card-list/color/border",
                "mono": true
              },
              {
                "key": "Title",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Title token",
                "value": "card-list/color/label-header",
                "mono": true
              },
              {
                "key": "Description",
                "value": "#445C85",
                "mono": true
              },
              {
                "key": "Description token",
                "value": "card-list/color/description",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "card-list/color/label",
                "mono": true
              },
              {
                "key": "Blurb",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Blurb token",
                "value": "card-list/color/label-blurb",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "card-list/color/icon",
                "mono": true
              },
              {
                "key": "Badge bg",
                "value": "#E5F1FF",
                "mono": true
              },
              {
                "key": "Badge bg token",
                "value": "badge/information/light/background",
                "mono": true
              },
              {
                "key": "Badge label",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Badge label token",
                "value": "badge/information/light/label",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width × Height",
                "value": "360 × 146",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "16 24 16 12",
                "mono": true
              },
              {
                "key": "Gap (icon ↔ content)",
                "value": "24",
                "mono": true
              },
              {
                "key": "Gap (content ↔ chevron)",
                "value": "24",
                "mono": true
              },
              {
                "key": "Bottom border",
                "value": "1 px",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "64 × 64",
                "mono": true
              },
              {
                "key": "Chevron size",
                "value": "32 × 32",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Heading",
                "value": "HeyMeow Rnd Bold · 18 / 23 · +0.25",
                "mono": true
              },
              {
                "key": "Blurb",
                "value": "HeyMeow Rnd Bold · 14 / 14 · +0.25",
                "mono": true
              },
              {
                "key": "Description",
                "value": "BarkAda Semibold · 12 / 18 · +0",
                "mono": true
              },
              {
                "key": "Tag label",
                "value": "HeyMeow Rnd Bold · 12 / 12 · +0.5",
                "mono": true
              },
              {
                "key": "Badge label",
                "value": "HeyMeow Rnd Bold · 12 / 12 · +0.5",
                "mono": true
              }
            ]
          },
          {
            "label": "Composed sub-components",
            "rows": [
              {
                "key": "Tag",
                "value": "Badge · Negative · Heavy",
                "mono": true
              },
              {
                "key": "Bottom pill",
                "value": "Badge · Information · Light",
                "mono": true
              },
              {
                "key": "Icon (today)",
                "value": "Drawn placeholder",
                "mono": false
              },
              {
                "key": "Icon (proposed)",
                "value": "Avatar / Icon slot",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCard</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Description body\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebIcon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"star.fill\"</span><span class=\"syn-punc\">))</span>\n    .<span class=\"syn-fn\">ebIconSize</span><span class=\"syn-punc\">(</span>64<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebBlurb</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Blurb\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCard</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description body\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Icons</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Filled</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Star</span><span class=\"syn-punc\">, null) }</span><span class=\"syn-punc\">,</span>\n    iconSize <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBIconSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Size64</span><span class=\"syn-punc\">,</span>\n    blurb <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Blurb\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "skeleton-—-loading-state",
        "title": "Skeleton — loading state",
        "node": "18482:35832",
        "description": "The loading pattern for the card. Every content slot becomes a rounded rectangle placeholder in neutral gray. Use while awaiting data.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"gcard-spec-2\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "State",
                "value": "Loading",
                "mono": true
              },
              {
                "key": "Has content",
                "value": "No",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Skeleton bg",
                "value": "#EEF2F9",
                "mono": true
              },
              {
                "key": "Skeleton bg token",
                "value": "main/skeleton/bg",
                "mono": true
              },
              {
                "key": "Surface bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface bg token",
                "value": "main/card/bg",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Min height",
                "value": "88",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "16",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "12",
                "mono": true
              },
              {
                "key": "Icon placeholder",
                "value": "64 × 64",
                "mono": true
              },
              {
                "key": "Bar 1 size",
                "value": "120 × 14",
                "mono": true
              },
              {
                "key": "Bar 2 size",
                "value": "180 × 10",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "N/A",
                "value": "No text in skeleton state",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBGenericCard</span><span class=\"syn-punc\">(</span>isLoading<span class=\"syn-punc\">: </span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBGenericCard</span><span class=\"syn-punc\">(</span>\n    isLoading <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": []
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "<code>iconSize: 64 | 52 | 46 | 40 | 32 | 24</code>",
          "swift": "<code>size: xl | l | m | s</code>",
          "compose": "<code>.controlSize(.large)</code> etc."
        },
        {
          "figma": "(drawn circle)",
          "swift": "<code>leadingMedia: Avatar | Icon</code> (slot)",
          "compose": "<code>leadingMedia: EBLeadingMedia?</code>"
        },
        {
          "figma": "(hardcoded text)",
          "swift": "<code>heading: String</code>",
          "compose": "<code>heading: String</code>"
        },
        {
          "figma": "<code>hasBlurb</code>",
          "swift": "<code>blurb?: String</code>",
          "compose": "<code>blurb: String?</code>"
        },
        {
          "figma": "<code>hasTag</code>",
          "swift": "<code>tag?: Badge</code> (instance)",
          "compose": "<code>tag: EBBadge?</code>"
        },
        {
          "figma": "<code>hasSubtitle</code>",
          "swift": "(derived: shown if <code>blurb</code> or <code>tag</code> present)",
          "compose": "—"
        },
        {
          "figma": "(hardcoded \"Description goes here\")",
          "swift": "<code>descriptions: [LabelValue]</code>",
          "compose": "<code>descriptions: [EBLabelValue]</code>"
        },
        {
          "figma": "<code>has2ndDescription</code>",
          "swift": "(derived: up to N rows rendered)",
          "compose": "—"
        },
        {
          "figma": "<code>hasBadge</code>",
          "swift": "<code>badge?: Badge</code> (instance)",
          "compose": "<code>badge: EBBadge?</code>"
        },
        {
          "figma": "<code>hasChevron</code>",
          "swift": "<code>showChevron: Bool = true</code>",
          "compose": "<code>showChevron: Bool = true</code>"
        },
        {
          "figma": "<code>state: Default | skeleton</code>",
          "swift": "<code>loading: Bool</code>",
          "compose": "<code>loading: Bool</code>"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>onTap?: () -&gt; Void</code>",
          "compose": "<code>onTap: (() -&gt; Void)?</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Row as a button",
        "ios": "Whole row wrapped in <code>Button</code> with combined <code>accessibilityLabel</code> (heading + blurb + tag).",
        "android": "<code>Modifier.clickable { onTap() }.semantics(mergeDescendants = true)</code> on the row."
      },
      {
        "requirement": "Combined announcement",
        "ios": "\"Send Money Abroad, PROMO, New, Free for first transfer, Same day, Recommended\" — VoiceOver reads top-to-bottom.",
        "android": "Same reading order — TalkBack follows composition."
      },
      {
        "requirement": "Loading state",
        "ios": "Announce \"Loading\" once on mount; suppress per-placeholder announcements.",
        "android": "Apply <code>contentDescription = \"Loading\"</code> to the skeleton container."
      },
      {
        "requirement": "Min touch target",
        "ios": "146 px row height ≫ 44 pt ✓",
        "android": "146 dp ≫ 48 dp ✓"
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Clean container / content / chevron hierarchy. Tag and bottom pill are Badge instances."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "6 numeric <code>iconSize</code> values — collapse to semantic scale."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to <code>main/card-list/color/*</code> + Badge tokens."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps cleanly to a row composable once icon slot + chevron are fixed."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default + skeleton built. Missing pressed + disabled for a tappable row."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Icon placeholder isn't an instance; chevron is a raster."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until iconSize rename and icon slot adoption land."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 12,
      "description": "<code>iconSize</code> (6) × <code>state</code> (2) = <strong>12 variants</strong>. The 6 boolean slot props (<code>hasBlurb</code>, <code>hasTag</code>, <code>hasSubtitle</code>, <code>has2ndDescription</code>, <code>hasBadge</code>, <code>hasChevron</code>) toggle content independently and don't multiply the variant count.",
      "columns": [
        "iconSize",
        "Default node",
        "Skeleton node",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "<strong>64</strong>",
            "<code>18482:35807</code>",
            "<code>18482:35832</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "<strong>52</strong>",
            "<code>18482:35843</code>",
            "<code>18482:35868</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "<strong>46</strong>",
            "<code>18482:35879</code>",
            "<code>18482:35904</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "<strong>40</strong>",
            "<code>18482:35915</code>",
            "<code>18482:35940</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "<strong>32</strong>",
            "<code>18482:35951</code>",
            "<code>18482:35976</code>",
            "360 × 146"
          ]
        },
        {
          "cells": [
            "<strong>24</strong>",
            "<code>18482:35987</code>",
            "<code>18482:36012</code>",
            "360 × 146"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18482:35806",
      "rows": [
        {
          "body": "<strong>Verdict: Fix</strong> — Collapse iconSize to semantic scale, swap icon placeholder for a slot, vectorize the chevron, add pressed state. <span class=\"tag-open tag-c2 tag-c5 tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>Skeleton pattern acknowledged</strong> — First-class loading variant is rare and valuable. Adopt this pattern across the card/row family. <span class=\"tag-fixed\">Noted</span>",
          "delta": {
            "kind": "resolved",
            "label": "Praise"
          }
        },
        {
          "body": "<strong>C2 — iconSize collapse</strong> — 6 numeric values → 4 semantic sizes (xl/l/m/s). <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C6 — Icon slot + vector chevron</strong> — Adopt Figma Slot for leading media; vectorize chevron. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C5 — Pressed / disabled</strong> — Tappable row needs both. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on above. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
