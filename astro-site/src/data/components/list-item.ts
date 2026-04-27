import type { ComponentData } from '../types';

export const listItem: ComponentData = {
  "meta": {
    "slug": "list-item",
    "name": "List Item",
    "node": "18482:34429",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-34429",
    "description": "A single row in a list: leading asset + body text. 3 variants by <code>level</code> (1, 2, 3) that control indent (0 / 16 / 32 px). Composes a <strong>List Item Asset</strong> instance for the leading marker.",
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
    "navGroup": "List",
    "verdict": {
      "kind": "fix",
      "title": "Adopt Figma Slots for the asset",
      "text": "The leading asset is today an instance-swap placeholder. Declare a named <code>asset</code> Slot so consumers can drop in any List Item Asset variant (or a custom 16 × 16 component) directly. Maps 1 : 1 to <code>@ViewBuilder</code> / <code>@Composable</code> slots for Code Connect. Also rename <code>level</code> to an integer or drop it in favor of nesting-based indent."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns. List Items compose into multi-line lists on terms pages, onboarding steps, and task checklists.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"108\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"20\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"34\" y=\"16\" width=\"132\" height=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"19\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Terms</text>\n          \n          <circle cx=\"46\" cy=\"38\" r=\"2.5\" fill=\"#90A8D0\"></circle>\n          <rect x=\"54\" y=\"35\" width=\"100\" height=\"6\" rx=\"1\" fill=\"#445C85\" opacity=\".55\"></rect>\n          <circle cx=\"46\" cy=\"54\" r=\"2.5\" fill=\"#90A8D0\"></circle>\n          <rect x=\"54\" y=\"51\" width=\"88\" height=\"6\" rx=\"1\" fill=\"#445C85\" opacity=\".55\"></rect>\n          <circle cx=\"62\" cy=\"70\" r=\"2.5\" fill=\"#90A8D0\"></circle>\n          <rect x=\"70\" y=\"67\" width=\"80\" height=\"6\" rx=\"1\" fill=\"#445C85\" opacity=\".55\"></rect>\n          <circle cx=\"78\" cy=\"86\" r=\"2.5\" fill=\"#90A8D0\"></circle>\n          <rect x=\"86\" y=\"83\" width=\"64\" height=\"6\" rx=\"1\" fill=\"#445C85\" opacity=\".55\"></rect>\n          <circle cx=\"46\" cy=\"102\" r=\"2.5\" fill=\"#90A8D0\"></circle>\n          <rect x=\"54\" y=\"99\" width=\"96\" height=\"6\" rx=\"1\" fill=\"#445C85\" opacity=\".55\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"li-demo-preview\"><div style=\"display:flex;gap:8px;align-items:flex-start;padding-left:0px;max-width:310px;\"><div style=\"padding-top:2px;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"8\" cy=\"8\" r=\"2.5\" fill=\"#90A8D0\"></circle></svg></div><div style=\"color:#445C85;font-family:'BarkAda', system-ui;font-weight:600;font-size:14px;line-height:20px;\">List body with level-1 style</div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">level</span><select class=\"demo-panel-select\" id=\"li-demo-level\" onchange=\"updateListItemDemo()\"><option value=\"1\" selected=\"\">1</option><option value=\"2\">2</option><option value=\"3\">3</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">asset</span><select class=\"demo-panel-select\" id=\"li-demo-asset\" onchange=\"updateListItemDemo()\"><option value=\"bullet\" selected=\"\">bullet</option><option value=\"check\">check</option><option value=\"check-positive\">check-positive</option><option value=\"pending\">pending</option><option value=\"pending-notice\">pending-notice</option><option value=\"numbered\">numbered</option><option value=\"custom\">custom</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used in terms, onboarding, checklists, step indicators. Handles 3 levels of nesting via indent."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries gap, indent, and typography bindings. Body text uses <code>Secondary/Bold/Base</code> (BarkAda Semibold 14/20)."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "<code>level</code> uses string values (<code>\"1\"/\"2\"/\"3\"</code>) instead of integers. Figma won't let you parameterize it either — each level is a separate variant. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Leading asset uses instance-swap (default is a gray placeholder circle). Moving to a Figma Slot gives a cleaner composition surface and a direct slot mapping for Code Connect. <span class=\"tag-open tag-c6\">C6</span>"
      }
    ],
    "behavior": [],
    "resolved": [],
    "open": [
      {
        "headline": "<code>level</code> property uses string values.",
        "body": "Should be an integer, or — ideally — dropped in favor of indent inferred from nesting depth inside the List container.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Leading asset is an instance-swap placeholder.",
        "body": "Adopt Figma Slots so the asset becomes a first-class slot mapping to <code>@ViewBuilder</code> (SwiftUI) / <code>@Composable</code> (Compose) via Code Connect.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until <code>level</code> rename and the asset-slot adoption land.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Adopt a Figma Slot for the asset",
        "body": "— declare a named <code>asset</code> slot that accepts any List Item Asset instance (or a bare 16 × 16 component). Native maps to <code>@ViewBuilder</code> (SwiftUI) / <code>@Composable</code> slot (Compose) — Code Connect reads it as a real slot parameter.",
        "tag": "Slot"
      },
      {
        "headline": "Rename or drop <code>level</code>",
        "body": "— if keeping the prop, change string values to integers. Better: drop the variant entirely and let indent come from nesting depth inside the List container.",
        "tag": "Rename"
      },
      {
        "headline": "Consider a Trailing slot",
        "body": "— product patterns often pair list items with trailing counters, badges, or chevrons. Adding a <code>trailing</code> slot future-proofs the component without creating variant explosion.",
        "tag": "Slot"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "level-1-—-no-indent",
        "title": "Level 1 — no indent",
        "node": "18482:34430",
        "description": "Base row. Asset + 270px body. No indent.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Level 1 — no indent",
                "mono": false
              },
              {
                "key": "Layout",
                "value": "icon-leading + label-right",
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
                "value": "48 / 56px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "24 × 24",
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
        "swift": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Item label\"</span><span class=\"syn-punc\">, </span>description<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Helper text\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Item label\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Helper text\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "level-2-—-16px-indent",
        "title": "Level 2 — 16px indent",
        "node": "18482:34433",
        "description": "Indented 16px. Body fills remaining width of the 294px container.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Level 2 — 16px indent",
                "mono": false
              },
              {
                "key": "Layout",
                "value": "icon-leading + label-right",
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
                "value": "48 / 56px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "24 × 24",
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
        "swift": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Item label\"</span><span class=\"syn-punc\">, </span>description<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Helper text\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Item label\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Helper text\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "level-3-—-32px-indent",
        "title": "Level 3 — 32px indent",
        "node": "18482:34436",
        "description": "Indented 32px. Deepest supported level.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "Level 3 — 32px indent",
                "mono": false
              },
              {
                "key": "Layout",
                "value": "icon-leading + label-right",
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
                "value": "48 / 56px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "24 × 24",
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
        "swift": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Item label\"</span><span class=\"syn-punc\">, </span>description<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Helper text\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Item label\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Helper text\"</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Body text",
            "token": "main/list-item/color/default/description",
            "values": [
              "#445C85"
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
            "role": "Asset → body gap",
            "token": "space/space-8",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Level 2 indent",
            "token": "space/space-16",
            "values": [
              "16px"
            ]
          },
          {
            "role": "Level 3 indent",
            "token": "space/space-32",
            "values": [
              "32px"
            ]
          },
          {
            "role": "Level 1 body width",
            "token": "—",
            "values": [
              "270px"
            ]
          },
          {
            "role": "Levels 2 + 3 container width",
            "token": "—",
            "values": [
              "294px"
            ]
          },
          {
            "role": "Body alignment",
            "token": "—",
            "values": [
              "items-start (asset top-aligned)"
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
            "role": "Body",
            "token": "Secondary/Bold/Base",
            "values": [
              "BarkAda Semibold · 14 / 20"
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
          "figma": "asset (Slot)",
          "swift": "@ViewBuilder leading",
          "compose": "leading: @Composable () -&gt; Unit"
        },
        {
          "figma": "level=1/2/3",
          "swift": "level: Int",
          "compose": "level: Int"
        },
        {
          "figma": "text content",
          "swift": "content: String",
          "compose": "content: String"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/List/EBListItem.swift",
        "compose": "android/components/list/EBListItem.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Default bullet</span>\n<span class=\"typ\">EBListItem</span>(<span class=\"str\">\"Transactions are reviewed within 24 hours.\"</span>) {\n    <span class=\"typ\">EBListMarker</span>(<span class=\"prp\">variant</span>: .<span class=\"prp\">bullet</span>)\n}\n\n<span class=\"cmt\">// Ordered with number</span>\n<span class=\"typ\">EBListItem</span>(<span class=\"str\">\"Enter your GCash PIN to continue.\"</span>) {\n    <span class=\"typ\">EBListMarker</span>(<span class=\"prp\">variant</span>: .<span class=\"prp\">numbered</span>, <span class=\"prp\">number</span>: <span class=\"kw\">1</span>)\n}\n.<span class=\"fn\">level</span>(<span class=\"kw\">2</span>)\n\n<span class=\"cmt\">// Custom asset via slot</span>\n<span class=\"typ\">EBListItem</span>(<span class=\"str\">\"Saved to Favorites\"</span>) {\n    <span class=\"typ\">Image</span>(systemName: <span class=\"str\">\"heart.fill\"</span>)\n        .<span class=\"fn\">foregroundStyle</span>(.<span class=\"prp\">red</span>)\n}",
        "compose": "<span class=\"cmt\">// Default bullet</span>\n<span class=\"typ\">EBListItem</span>(content = <span class=\"str\">\"Transactions are reviewed within 24 hours.\"</span>) {\n    <span class=\"typ\">EBListMarker</span>(variant = <span class=\"typ\">EBListMarker</span>.<span class=\"prp\">Bullet</span>)\n}\n\n<span class=\"cmt\">// Ordered with number, level 2</span>\n<span class=\"typ\">EBListItem</span>(\n    content = <span class=\"str\">\"Enter your GCash PIN to continue.\"</span>,\n    level = <span class=\"kw\">2</span>\n) {\n    <span class=\"typ\">EBListMarker</span>(variant = <span class=\"typ\">EBListMarker</span>.<span class=\"prp\">Numbered</span>, number = <span class=\"kw\">1</span>)\n}\n\n<span class=\"cmt\">// Custom asset via slot</span>\n<span class=\"typ\">EBListItem</span>(content = <span class=\"str\">\"Saved to Favorites\"</span>) {\n    <span class=\"typ\">Icon</span>(painterResource(R.drawable.heart), contentDescription = null, tint = <span class=\"typ\">Color</span>.<span class=\"prp\">Red</span>)\n}"
      }
    ],
    "accessibility": [
      {
        "requirement": "List container role",
        "ios": "Wrap List Items in a <code>List</code> for VoiceOver row semantics",
        "android": "Use <code>Modifier.semantics { collectionInfo = ... }</code> on parent"
      },
      {
        "requirement": "Marker semantics",
        "ios": "Decorative markers: <code>.accessibilityHidden(true)</code> on the asset",
        "android": "Same — <code>contentDescription = null</code>"
      },
      {
        "requirement": "Numbered lists",
        "ios": "Prepend number to the announced label, or use <code>.accessibilityValue</code>",
        "android": "Include number in <code>contentDescription</code>"
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Simple row: asset + body text."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>level</code> uses string values; consider dropping the prop entirely."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Body color, indent, gap tokens all bound."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "HStack / Row with slot."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Display-only; interaction lives on the consumer."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Instance-swap works; Figma Slot would be cleaner and map to native slot params."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Not mapped. Slot adoption improves mapping quality."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 3,
      "description": "",
      "columns": [
        "level",
        "Indent",
        "Width",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "0",
            "hug (body 270px)",
            "18482:34430"
          ]
        },
        {
          "cells": [
            "2",
            "16px",
            "294px",
            "18482:34433"
          ]
        },
        {
          "cells": [
            "3",
            "32px",
            "294px",
            "18482:34436"
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
      "header": "Initial Assessment · node 18482:34429",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 3 variants (level 1/2/3). Composes List Item Asset via instance swap. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong><code>level</code> uses string values</strong> — Should be integer or dropped in favor of nesting-based indent. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Asset is instance-swap</strong> — Adopt Figma Slots for first-class slot mapping. <span class=\"tag-open tag-c6\">Open</span>",
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
