import type { ComponentData } from '../types';

export const headerCentered: ComponentData = {
  "meta": {
    "slug": "header-centered",
    "name": "Header - Centered",
    "node": "18430:2858",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18430-2858",
    "description": "A header variant with the title centered, optional leading and trailing actions on either side.",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Header",
    "verdict": {
      "kind": "restructure",
      "title": "Restructure — rename and re-label the surface property",
      "text": "Rename to <strong>Page Banner</strong> — \"Header\" conflates with three structurally different components. Replace <code>type = dark | light</code> with <code>surface = brand | default</code> — the current name describes appearance, not semantic intent. See the <a href=\"/components/header\">Header family restructure</a> for the full plan."
    }
  },
  "overview": {
    "inContextNote": "Page Banner sits at the top of a screen, modal, or feature card — centered, taking full width, setting the title of the surface below it.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"header-centered-demo-preview\"><div class=\"eb-preview eb-preview-header-centered eb-preview-header-centered--dark\"><p class=\"eb-preview-header-centered__title\">Label</p><p class=\"eb-preview-header-centered__sublabel\"><span class=\"eb-preview-header-centered__sublabel-key\">Label:</span><span class=\"eb-preview-header-centered__sublabel-value\">&nbsp;Add Content</span></p></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select id=\"header-centered-ctrl-type\" class=\"demo-panel-select\" onchange=\"_headerCenteredUpdate()\"><option value=\"dark\" selected=\"\">dark</option><option value=\"light\">light</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><select id=\"header-centered-ctrl-desc\" class=\"demo-panel-select\" onchange=\"_headerCenteredUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Generic page banner, reusable anywhere a centered title is needed."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its typography, color tokens, and surface fill."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Shares \"Header\" prefix with 3 structurally different components. <code>type=dark|light</code> names appearance rather than semantic tone."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Drops into any screen, modal, or card as a page title."
      }
    ],
    "behavior": [
      {
        "state": "Default (brand)",
        "ios": "yes",
        "android": "yes",
        "property": "type=dark",
        "notes": "White text on brand-blue surface."
      },
      {
        "state": "Default (default)",
        "ios": "yes",
        "android": "yes",
        "property": "type=light",
        "notes": "Dark text on default surface."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Banner is informational — no pressed state."
      },
      {
        "state": "Disabled",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not interactive."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Rename to Page Banner.",
        "body": "\"Header\" prefix shared with 3 structurally different components.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Rename <code>type=dark|light</code> to <code>surface=brand|default</code>.",
        "body": "Current name describes appearance; convention is to name by semantic surface role.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No Code Connect mapping.",
        "body": "",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Rename to Page Banner.",
        "body": "Frees the \"Header\" namespace and signals semantic role clearly.",
        "tag": "Rename"
      },
      {
        "headline": "Use <code>surface = brand | default</code>",
        "body": "instead of <code>type = dark | light</code>. Matches how other DS components (Button appearance, Badge tone) describe surface variants.",
        "tag": "Property"
      },
      {
        "headline": "Optional: expose <code>alignment</code> prop",
        "body": "(center | leading) for teams that want a left-aligned variant without creating a new component.",
        "tag": "Property"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"#\" onclick=\"showPanelById('header');return false;\">Header</a>, <a href=\"#\" onclick=\"showPanelById('header-with-logo');return false;\">Header - With Logo</a>, <a href=\"#\" onclick=\"showPanelById('header-transaction');return false;\">Header - Transaction</a>.",
        "tag": "Family"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "dark-/-brand-surface",
        "title": "Dark / brand surface",
        "node": "18430:2859",
        "description": "White title on brand-blue surface. The \"hero\" variant — used for primary feature banners.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-centered-spec-1\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "type",
                "value": "dark",
                "mono": true
              },
              {
                "key": "description",
                "value": "yes",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Brand bg",
                "value": "#1972F9",
                "mono": true
              },
              {
                "key": "Brand bg token",
                "value": "header/color/brand/bg",
                "mono": true
              },
              {
                "key": "Brand title",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Brand title token",
                "value": "header/color/brand/label-header",
                "mono": true
              },
              {
                "key": "Brand preamble",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Brand preamble token",
                "value": "header/color/brand/label-preamble",
                "mono": true
              },
              {
                "key": "Brand label",
                "value": "#F6F9FDB8 (72% alpha)",
                "mono": true
              },
              {
                "key": "Brand label token",
                "value": "header/color/brand/label",
                "mono": true
              },
              {
                "key": "Brand border",
                "value": "#F6F9FD3D (24% alpha)",
                "mono": true
              },
              {
                "key": "Brand border token",
                "value": "header/color/brand/border",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "Fill",
                "mono": true
              },
              {
                "key": "Height",
                "value": "104 (hug)",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "space/space-24 space/space-16",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "space/space-4",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Title",
                "value": "Heading/L · BarkAda 18/24",
                "mono": true
              },
              {
                "key": "Description",
                "value": "Body/S · 12/16",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "center",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCenteredHeader</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Page title\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.brand</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Description body copy\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCenteredHeader</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Page title\"</span><span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBHeaderStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Brand</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description body copy\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "light-/-default-surface",
        "title": "Light / default surface",
        "node": "18430:2865",
        "description": "Dark title on default surface. Used for modal sheet titles and subdued banners.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-centered-spec-2\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Surface",
                "value": "Light",
                "mono": true
              },
              {
                "key": "Title alignment",
                "value": "Center",
                "mono": true
              },
              {
                "key": "Has back",
                "value": "Yes",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Surface bg",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface bg token",
                "value": "main/header/light/bg",
                "mono": true
              },
              {
                "key": "Title color",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Title color token",
                "value": "main/header/light/title",
                "mono": true
              },
              {
                "key": "Icon color",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Icon color token",
                "value": "main/header/light/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Height",
                "value": "56",
                "mono": true
              },
              {
                "key": "Padding (h)",
                "value": "16",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Title gap",
                "value": "8",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Style",
                "value": "Heading/Small · Bold",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft",
                "mono": true
              },
              {
                "key": "Size",
                "value": "18",
                "mono": true
              },
              {
                "key": "Line-height",
                "value": "24",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Account\"</span><span class=\"syn-punc\">,</span>\n    appearance<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>light<span class=\"syn-punc\">,</span>\n    centered<span class=\"syn-punc\">: </span><span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account\"</span><span class=\"syn-punc\">,</span>\n    appearance <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBHeaderAppearance</span><span class=\"syn-punc\">.</span>Light<span class=\"syn-punc\">,</span>\n    centered <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
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
          "figma": "(implicit)",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "<code>description: boolean</code>",
          "swift": "<code>description?: String</code>",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "<code>type: dark | light</code>",
          "swift": "<code>surface: brand | default</code>",
          "compose": "<code>.ebSurface(.brand)</code> modifier"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Heading trait",
        "ios": "<code>.accessibilityAddTraits(.isHeader)</code> on the title.",
        "android": "<code>Modifier.semantics { heading() }</code> on the title."
      },
      {
        "requirement": "Contrast",
        "ios": "Brand surface: white on #005CE5 = 8.5:1 ✓. Default surface: #0A2757 on #FFFFFF = 15.4:1 ✓.",
        "android": "Same contrast ratios apply."
      },
      {
        "requirement": "Screen reader order",
        "ios": "Title → Description. VoiceOver reads in DOM order.",
        "android": "Same — TalkBack follows composition order."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Rename to <strong>Page Banner</strong>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Rename <code>type=dark|light</code> → <code>surface=brand|default</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Surface and text tokens bound."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps cleanly to a <code>EBPageBanner</code> view/composable."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Static — no interactive states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No assets."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Trivial once renamed."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "<code>type</code> × <code>description</code> = <strong>4 variants</strong>.",
      "columns": [
        "#",
        "Node",
        "type",
        "description",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>18430:2859</code>",
            "dark",
            "yes",
            "360 × 104"
          ]
        },
        {
          "cells": [
            "2",
            "<code>18430:2865</code>",
            "light",
            "yes",
            "360 × 104"
          ]
        },
        {
          "cells": [
            "3",
            "<code>18430:2871</code>",
            "dark",
            "no",
            "360 × 84"
          ]
        },
        {
          "cells": [
            "4",
            "<code>18430:2873</code>",
            "light",
            "no",
            "360 × 84"
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
      "header": "Initial Assessment · node 18430:2858",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Rename to <strong>Page Banner</strong>. Swap <code>type=dark|light</code> for <code>surface=brand|default</code>. <span class=\"tag-open tag-c1 tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Naming"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Trivial mapping once renamed. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
