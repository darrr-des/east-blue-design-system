import type { ComponentData } from '../types';

export const listItemAsset: ComponentData = {
  "meta": {
    "slug": "list-item-asset",
    "name": "List Item Asset",
    "node": "18482:34406",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-34406",
    "description": "A list-item variant with a leading asset slot — image, icon, or avatar — alongside the label.",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "List"
  },
  "overview": {
    "inContextNote": "List Item Asset appears inside List Items — see the List Item preview for the composed layout.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"lia-demo-preview\"><svg width=\"48\" height=\"48\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3 8l3 3 7-7\" stroke=\"#90A8D0\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Proposed API</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">variant</span><select class=\"demo-panel-select\" id=\"lia-demo-variant\" onchange=\"updateListItemAssetDemo()\"><option value=\"check\" selected=\"\">check</option><option value=\"check-positive\">check-positive</option><option value=\"pending\">pending</option><option value=\"pending-notice\">pending-notice</option><option value=\"bullet\">bullet</option><option value=\"hollow\">hollow</option><option value=\"square\">square</option><option value=\"numbered\">numbered</option><option value=\"custom\">custom (slot)</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Covers task lists, ordered/unordered lists, and custom-marker lists. Used across onboarding flows, terms pages, and step indicators."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "All colors, sizes, typography bound to tokens. 16 × 16 bounding box is fixed."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Three properties (<code>type</code>, <code>indicator</code>, <code>state</code>) that shouldn't multiply freely — most combinations are invalid. Creates phantom variants in Figma's variant picker. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "<code>indicator=Custom</code> exposes a gray circle <code>icon-placeholder</code> instead of a Figma Slot. Blocks product teams from dropping in custom 16 × 16 assets without local overrides. <span class=\"tag-open tag-c6\">C6</span>"
      }
    ],
    "behavior": [],
    "resolved": [],
    "open": [
      {
        "headline": "Variant matrix is entangled.",
        "body": "<code>type</code> × <code>indicator</code> × <code>state</code> = 72 theoretical combinations but only ~10 are valid. Flatten into one semantic <code>variant</code> enum to eliminate invalid combos.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Numbered indicator hardcodes \"1.\"",
        "body": "No way to pass the ordinal — numbered lists of 5 items all show \"1.\" in Figma. Expose a <code>number</code> text property.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "<code>indicator=Custom</code> is a hardcoded gray circle.",
        "body": "Should be a Figma Slot that accepts any 16×16 asset via instance swap.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until variant flatten and slot adoption land.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Flatten the variant matrix",
        "body": "— replace <code>type</code> + <code>indicator</code> + <code>state</code> with a single semantic <code>variant</code> enum: <code>check</code> / <code>check-positive</code> / <code>pending</code> / <code>pending-notice</code> / <code>bullet</code> / <code>hollow</code> / <code>square</code> / <code>numbered</code> / <code>custom</code>. ~9 real variants, no invalid combinations possible.",
        "tag": "Property"
      },
      {
        "headline": "Adopt a Figma Slot for <code>variant=custom</code>",
        "body": "— declare a named <code>asset</code> slot so product teams can drop in any 16 × 16 component instance without editing the master. Maps cleanly to a <code>@ViewBuilder</code> slot (SwiftUI) or <code>@Composable</code> slot (Compose) via Code Connect.",
        "tag": "Slot"
      },
      {
        "headline": "Parameterize the numbered indicator",
        "body": "— expose a <code>number</code> text property so ordered lists can show the actual ordinal. In Figma this is a text override; in native it's a <code>number: Int</code> param.",
        "tag": "Property"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "all-markers",
        "title": "All markers",
        "node": "",
        "description": "Row of all 9 markers at actual size. Left to right: check, check-positive, pending, pending-notice, bullet, hollow, square, numbered, custom (slot).",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "All markers",
                "mono": false
              },
              {
                "key": "Asset slot",
                "value": "Image / Icon / Avatar",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Icon",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "list-item/color/default/icon-item",
                "mono": true
              },
              {
                "key": "Description",
                "value": "#445C85",
                "mono": true
              },
              {
                "key": "Description token",
                "value": "list-item/color/default/description",
                "mono": true
              },
              {
                "key": "Surface",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Surface token",
                "value": "bg/color-bg-main",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Row height",
                "value": "64px",
                "mono": true
              },
              {
                "key": "Asset size",
                "value": "40 × 40",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Gap (asset ↔ label)",
                "value": "12px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Description style",
                "value": "Secondary/Bold/Base",
                "mono": true
              },
              {
                "key": "Description font",
                "value": "BarkAda Semibold · 14 / 20",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Item label\"</span><span class=\"syn-punc\">)</span> {\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"asset\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Item label\"</span><span class=\"syn-punc\">,</span>\n    leadingAsset <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>painterResource(R.drawable.asset)<span class=\"syn-punc\">, null) }</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Variant",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "check",
            "token": "icon",
            "values": [
              "main/list-item/color/default/icon-item",
              "#90A8D0"
            ]
          },
          {
            "role": "check-positive",
            "token": "icon",
            "values": [
              "main/list-item/color/positive/icon-item",
              "#27C990"
            ]
          },
          {
            "role": "pending",
            "token": "icon",
            "values": [
              "main/list-item/color/default/icon-item",
              "#90A8D0"
            ]
          },
          {
            "role": "pending-notice",
            "token": "icon",
            "values": [
              "main/list-item/color/notice/icon-item",
              "#CA970C"
            ]
          },
          {
            "role": "bullet / hollow / square",
            "token": "icon",
            "values": [
              "main/list-item/color/default/icon-item",
              "#90A8D0"
            ]
          },
          {
            "role": "numbered (bg)",
            "token": "container bg",
            "values": [
              "main/list-item/color/default/icon-bg",
              "#EEF2F9"
            ]
          },
          {
            "role": "numbered (label)",
            "token": "number text",
            "values": [
              "main/list-item/color/default/icon-item",
              "#90A8D0"
            ]
          },
          {
            "role": "custom",
            "token": "—",
            "values": [
              "(slot — inherits from provided asset)",
              "—"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Bounding box",
            "token": "—",
            "values": [
              "16 × 16"
            ]
          },
          {
            "role": "Check / Pending icon",
            "token": "—",
            "values": [
              "16 × 16 vector"
            ]
          },
          {
            "role": "Bullet / Hollow / Square size",
            "token": "—",
            "values": [
              "5 × 5"
            ]
          },
          {
            "role": "Numbered container radius",
            "token": "—",
            "values": [
              "16px (pill)"
            ]
          },
          {
            "role": "Numbered padding",
            "token": "—",
            "values": [
              "4L / 2R / 2v"
            ]
          },
          {
            "role": "Vertical padding (most variants)",
            "token": "space/space-2",
            "values": [
              "2px"
            ]
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Spec"
        ],
        "rows": [
          {
            "role": "numbered (pill)",
            "token": "Primary/Label/Fine",
            "values": [
              "HeyMeow Rnd Bold · 12 / 12 · +0.5"
            ]
          },
          {
            "role": "Ordered / Normal (legacy)",
            "token": "Primary/Label/Light/Small",
            "values": [
              "HeyMeow Rnd Semibold · 14 / 14 · +0.25"
            ]
          }
        ]
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:list:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "type × indicator × state",
          "swift": "variant (enum)",
          "compose": ".ebVariant(.check)"
        },
        {
          "figma": "— (hardcoded \"1.\")",
          "swift": "number: Int?",
          "compose": "number: Int?"
        },
        {
          "figma": "indicator=Custom placeholder",
          "swift": "Figma Slot → ViewBuilder / @Composable",
          "compose": "@ViewBuilder asset"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/List/EBListMarker.swift",
        "compose": "android/components/list/EBListMarker.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Standard variants</span>\n<span class=\"typ\">EBListMarker</span>(<span class=\"prp\">variant</span>: .<span class=\"prp\">check</span>)\n<span class=\"typ\">EBListMarker</span>(<span class=\"prp\">variant</span>: .<span class=\"prp\">checkPositive</span>)\n<span class=\"typ\">EBListMarker</span>(<span class=\"prp\">variant</span>: .<span class=\"prp\">pendingNotice</span>)\n\n<span class=\"cmt\">// Numbered</span>\n<span class=\"typ\">EBListMarker</span>(<span class=\"prp\">variant</span>: .<span class=\"prp\">numbered</span>, <span class=\"prp\">number</span>: <span class=\"kw\">1</span>)\n\n<span class=\"cmt\">// Custom — Figma Slot maps to @ViewBuilder</span>\n<span class=\"typ\">EBListMarker</span> {\n    <span class=\"typ\">Image</span>(systemName: <span class=\"str\">\"star.fill\"</span>)\n        .<span class=\"fn\">foregroundStyle</span>(.<span class=\"prp\">yellow</span>)\n}",
        "compose": "<span class=\"cmt\">// Standard variants</span>\n<span class=\"typ\">EBListMarker</span>(variant = <span class=\"typ\">EBListMarker</span>.<span class=\"prp\">Check</span>)\n<span class=\"typ\">EBListMarker</span>(variant = <span class=\"typ\">EBListMarker</span>.<span class=\"prp\">CheckPositive</span>)\n<span class=\"typ\">EBListMarker</span>(variant = <span class=\"typ\">EBListMarker</span>.<span class=\"prp\">PendingNotice</span>)\n\n<span class=\"cmt\">// Numbered</span>\n<span class=\"typ\">EBListMarker</span>(variant = <span class=\"typ\">EBListMarker</span>.<span class=\"prp\">Numbered</span>, number = <span class=\"kw\">1</span>)\n\n<span class=\"cmt\">// Custom — Figma Slot maps to @Composable slot</span>\n<span class=\"typ\">EBListMarker</span> {\n    <span class=\"typ\">Icon</span>(painterResource(R.drawable.star), contentDescription = null)\n}"
      }
    ],
    "accessibility": [],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic: <code>container</code>, <code>Pending</code>, <code>Checkmark</code>, <code>shape_full</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Three entangled axes; most combinations invalid. Flatten to single <code>variant</code> enum."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors, typography, spacing bound to tokens."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Custom atom on both platforms — straightforward render switch."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Numbered hardcodes \"1.\"; no per-item ordinal. Otherwise display-only."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>Custom</code> indicator is a gray circle; should be a Figma Slot."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Not mapped. Clean mapping lands after flatten + Slot adoption."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 10,
      "description": "After flatten + Slot adoption, these 10 collapse to 9 semantic variants + 1 custom slot — 0 invalid combinations possible.",
      "columns": [
        "type",
        "indicator",
        "state",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Placeholder",
            "Placeholder",
            "Default",
            "18482:34426"
          ]
        },
        {
          "cells": [
            "Unordered",
            "Pending",
            "Default",
            "18482:34407"
          ]
        },
        {
          "cells": [
            "Unordered",
            "Pending",
            "Notice",
            "18482:34409"
          ]
        },
        {
          "cells": [
            "Unordered",
            "Check",
            "Default",
            "18482:34411"
          ]
        },
        {
          "cells": [
            "Unordered",
            "Check",
            "Positive",
            "18482:34413"
          ]
        },
        {
          "cells": [
            "Unordered",
            "Bullet",
            "Default",
            "18482:34415"
          ]
        },
        {
          "cells": [
            "Unordered",
            "Hollow",
            "Default",
            "18482:34417"
          ]
        },
        {
          "cells": [
            "Unordered",
            "Square",
            "Default",
            "18482:34419"
          ]
        },
        {
          "cells": [
            "Ordered",
            "Custom",
            "Default",
            "18482:34423"
          ]
        },
        {
          "cells": [
            "Ordered",
            "Normal",
            "Default",
            "18482:34421"
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
      "header": "Initial Assessment · node 18482:34406",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 10 variants across entangled type × indicator × state. Recommended flatten + Figma Slot adoption. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Variant matrix entangled</strong> — 72 theoretical, ~10 valid. Flatten to one <code>variant</code> enum. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Numbered indicator hardcodes \"1.\"</strong> — Needs a <code>number</code> parameter. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Custom indicator is a placeholder</strong> — Should be a Figma Slot. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Not registered. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
