import type { ComponentData } from '../types';

export const headerTransaction: ComponentData = {
  "meta": {
    "slug": "header-transaction",
    "name": "Header - Transaction",
    "node": "18430:2897",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18430-2897",
    "description": "A transaction-detail header with the merchant logo, transaction amount, and date.",
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
    "navGroup": "Header"
  },
  "overview": {
    "inContextNote": "Detail Hero appears at the top of transaction detail screens and recipient profile cards — introducing the person or transaction below the app bar.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"header-transaction-demo-preview\"><div class=\"eb-preview eb-preview-header-tx\"><div class=\"eb-preview-header-tx__avatar\" aria-hidden=\"true\"></div><p class=\"eb-preview-header-tx__title\">Add Label Here</p><div class=\"eb-preview-header-tx__separator\"></div><p class=\"eb-preview-header-tx__desc\">Add description here.<br>Add description here.</p></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">email</span><select id=\"header-transaction-ctrl-email\" class=\"demo-panel-select\" onchange=\"_headerTransactionUpdate()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Reusable as a hero block, but misfiled as a header and tightly coupled to transaction-specific copy (\"email:\"). Generic card hero should accept any label-value rows."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Avatar slot is a placeholder circle (not a real Avatar instance). Label-value row is drawn, not composed."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "\"Header\" prefix misleads — this solves a card-hero problem. Pattern should live with card/hero primitives."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Single <code>email</code> boolean can't extend to other metadata rows (phone, MCC, reference number). Needs a flexible rows slot."
      }
    ],
    "behavior": [
      {
        "state": "Default (no email)",
        "ios": "yes",
        "android": "yes",
        "property": "email=no",
        "notes": "Avatar + title + divider + description."
      },
      {
        "state": "With email",
        "ios": "yes",
        "android": "yes",
        "property": "email=yes",
        "notes": "Adds an inline <code>email: value</code> row above the description."
      },
      {
        "state": "Pressed / Disabled",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Static — no interactive states."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Misfiled as a header.",
        "body": "Anatomy is a card hero (avatar + title + divider + label-value + description). Rename to <strong>Detail Hero</strong> and move out of the Header family.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Avatar is a placeholder, not an instance.",
        "body": "Should accept a real Avatar instance (status ring, initials, image — all of which Avatar already supports).",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Label-value row is hardcoded to \"email:\".",
        "body": "A detail hero needs flexible metadata rows (phone, reference #, MCC, transaction ID). Replace the boolean with a rows slot or accept a Labeled Field instance.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Pressed state on avatar is not defined",
        "body": "— if the avatar is tappable (opens profile, edits photo), it needs state coverage.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "No Code Connect mapping.",
        "body": "Blocked on the Detail Hero rehome decision.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Rename to Detail Hero",
        "body": "and move out of the Header family. Rehome next to Visual Popup / card primitives.",
        "tag": "Rename"
      },
      {
        "headline": "Replace the avatar placeholder with a real Avatar instance.",
        "body": "Avatar already supports image, initials, and status ring — no reason to re-draw it here.",
        "tag": "Composition"
      },
      {
        "headline": "Replace <code>email=yes|no</code> with a flexible rows slot.",
        "body": "<code>metadata: [LabelValuePair]</code> lets consumers supply any number of rows (email, phone, reference, MCC). Each row could be a small inline-label component or a Labeled Field variant.",
        "tag": "Property"
      },
      {
        "headline": "Expose <code>surface = brand | default</code>",
        "body": "(same pattern as Page Banner). Detail heroes on settings screens may want the default surface.",
        "tag": "Property"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"#\" onclick=\"showPanelById('header');return false;\">Header</a>, <a href=\"#\" onclick=\"showPanelById('header-centered');return false;\">Header - Centered</a>, <a href=\"#\" onclick=\"showPanelById('header-with-logo');return false;\">Header - With Logo</a>.",
        "tag": "Family"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "no-email",
        "title": "No email",
        "node": "18430:2906",
        "description": "The minimal variant — avatar + title + divider + description. Used when the profile/transaction has no extra metadata to show.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-transaction-spec-1\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "email",
                "value": "no",
                "mono": true
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
                "value": "header/color/default/bg",
                "mono": true
              },
              {
                "key": "Title",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Title token",
                "value": "header/color/default/label-header",
                "mono": true
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Description token",
                "value": "header/color/default/description",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "header/color/default/border",
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
                "value": "220 (hug)",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "space/space-24",
                "mono": true
              },
              {
                "key": "Avatar size",
                "value": "48 × 48",
                "mono": true
              },
              {
                "key": "Gap (stacked)",
                "value": "space/space-12",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Title",
                "value": "Heading/L · BarkAda 20/26",
                "mono": true
              },
              {
                "key": "Description",
                "value": "Body/S · 13/18",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTransactionHeader</span><span class=\"syn-punc\">(</span>merchantLogo<span class=\"syn-punc\">: </span>logo<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebMerchantName</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"GCash\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebAmount</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"PHP 1,500.00\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDate</span><span class=\"syn-punc\">(</span>date<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionHeader</span><span class=\"syn-punc\">(</span>\n    merchantLogo <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ logo }</span><span class=\"syn-punc\">,</span>\n    merchantName <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"GCash\"</span><span class=\"syn-punc\">,</span>\n    amount <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 1,500.00\"</span><span class=\"syn-punc\">,</span>\n    date <span class=\"syn-eq\">=</span> date\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "with-email-row",
        "title": "With email row",
        "node": "18430:2898",
        "description": "Adds an inline <code>email: value</code> row between the divider and the description. Used on recipient profile cards.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-transaction-spec-2\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Has email",
                "value": "Yes",
                "mono": true
              },
              {
                "key": "Surface",
                "value": "Dark",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Surface bg",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Surface bg token",
                "value": "main/header/dark/bg",
                "mono": true
              },
              {
                "key": "Title color",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Title color token",
                "value": "main/header/dark/title",
                "mono": true
              },
              {
                "key": "Email color",
                "value": "#C2CFE5",
                "mono": true
              },
              {
                "key": "Email color token",
                "value": "main/header/dark/subtitle",
                "mono": true
              },
              {
                "key": "Icon color",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Icon color token",
                "value": "main/header/dark/icon",
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
                "key": "Padding (h)",
                "value": "16",
                "mono": true
              },
              {
                "key": "Padding (v)",
                "value": "16",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "12",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Title style",
                "value": "Heading/Small · Bold",
                "mono": true
              },
              {
                "key": "Email style",
                "value": "Caption/Regular",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTransactionHeader</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Send to bank\"</span><span class=\"syn-punc\">,</span>\n    email<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"user@example.com\"</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionHeader</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Send to bank\"</span><span class=\"syn-punc\">,</span>\n    email <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"user@example.com\"</span>\n<span class=\"syn-punc\">)</span>"
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
          "figma": "(placeholder)",
          "swift": "<code>avatar: Avatar</code> (instance)",
          "compose": "<code>avatar: EBAvatar</code>"
        },
        {
          "figma": "<code>email: boolean</code>",
          "swift": "<code>metadata: [LabelValuePair]</code>",
          "compose": "<code>metadata: [EBLabelValue]</code>"
        },
        {
          "figma": "(implicit)",
          "swift": "<code>description?: String</code>",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "(implicit brand)",
          "swift": "<code>surface: brand | default</code>",
          "compose": "<code>.ebSurface(.brand)</code> modifier"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Heading trait",
        "ios": "Apply to the title line.",
        "android": "<code>Modifier.semantics { heading() }</code> on the title."
      },
      {
        "requirement": "Avatar a11y",
        "ios": "If decorative, mark <code>.accessibilityHidden(true)</code>. If identifying, label with person's name.",
        "android": "Same — <code>contentDescription</code> empty when decorative, or person's name when identifying."
      },
      {
        "requirement": "Label-value pairs",
        "ios": "Group each pair with <code>.accessibilityElement(children: .combine)</code> so VoiceOver reads \"email, juan@gmail.com\" as one utterance.",
        "android": "Use <code>Modifier.semantics(mergeDescendants = true)</code> per row."
      },
      {
        "requirement": "Contrast on brand surface",
        "ios": "White text on #005CE5 = 8.5:1 ✓. Muted #C8D8F5 on #005CE5 = 2.1:1 — fails AA body text. Use only for secondary labels ≥14pt bold.",
        "android": "Same ratios — reserve muted color for label text, not body copy."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "\"Header - Transaction\" misfiled. Rename to <strong>Detail Hero</strong>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>email=yes|no</code> should become <code>metadata: [LabelValuePair]</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Surface, title, description tokens bound."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Avatar should be a real instance; metadata should be structured, not drawn."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Avatar pressed state not defined — needed if tappable."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Avatar is a drawn placeholder, not a vector Avatar instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on rehome + avatar-instance decisions."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 2,
      "description": "",
      "columns": [
        "#",
        "Node",
        "email",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>18430:2906</code>",
            "no",
            "360 × 220"
          ]
        },
        {
          "cells": [
            "2",
            "<code>18430:2898</code>",
            "yes",
            "360 × 191"
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
      "header": "Initial Assessment · node 18430:2897",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Not a header. Rename to <strong>Detail Hero</strong> and move out of the Header family. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>C2 — metadata rows</strong> — Replace <code>email=yes|no</code> with a flexible <code>metadata: [LabelValuePair]</code> slot. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Avatar instance</strong> — Replace drawn placeholder with a real Avatar instance. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — Avatar state</strong> — Define pressed/disabled for tappable avatar. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
