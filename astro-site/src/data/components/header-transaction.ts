import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/header-transaction.js`.
const headerTransactionDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'email',
        prop: 'email',
        defaultValue: 'no',
        options: [
          { value: 'no', label: 'no' },
          { value: 'yes', label: 'yes' },
        ],
      },
    ],
  },
];

export const headerTransaction: ComponentData = {
  "meta": {
    "slug": "header-transaction",
    "name": "Detail Hero",
    "node": "4368:12856",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4368-12856",
    "description": "A card hero introducing a transaction or recipient — avatar, title, separator, label-value row and description, on a brand or default surface.",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Header",
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>4368:12856</code> as <strong>Detail Hero</strong>, with <code>Surface = Brand | Default</code> and the <code>email = yes | no</code> boolean retired. Layer naming is complete across both variants — <code>Title</code>, <code>SenderDetails</code>, <code>Label</code>, <code>Value</code> and <code>Description</code>, every one matching between surfaces so each exposes as a single text property. The avatar placeholder is a deliberate swap target, the single metadata row is the intended scope, the spacer instances are a system-wide annotation convention, the typeface split against Page Banner is a decision rather than drift, and the hero is static by design. It stays filed with the header family because that is where designers look for it, even though by anatomy it is a card hero. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Detail Hero appears at the top of transaction detail screens and recipient profile cards — introducing the person or transaction below the app bar.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"header-transaction-demo-preview\"><div class=\"eb-preview eb-preview-header-tx\"><div class=\"eb-preview-header-tx__avatar\" aria-hidden=\"true\"></div><p class=\"eb-preview-header-tx__title\">Add Label Here</p><div class=\"eb-preview-header-tx__separator\"></div><p class=\"eb-preview-header-tx__desc\">Add description here.<br>Add description here.</p></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">email</span><select id=\"header-transaction-ctrl-email\" class=\"demo-panel-select\" onchange=\"_headerTransactionUpdate()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Works as a hero on any detail screen — transaction, recipient, merchant. Retiring the <code>email</code> boolean removed the transaction-specific coupling, and the single metadata row is confirmed as the intended scope rather than a limitation."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its typography, fills and separator. The <code>Placeholder</code> is a deliberate swap target for consumer content rather than an unfinished avatar, so nothing external is required to render."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Rehomed by name, aligned to the family <code>Surface</code> axis and brand fill, and renamed onto the §3 vocabulary — <code>Title</code> · <code>Label</code> · <code>Value</code> · <code>Description</code>, identical in both variants, with the duplicate <code>#text</code> and the legacy <code>#</code> prefix both gone."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Composes a swappable placeholder for consumer content and sits above the rows that carry the rest of a screen’s detail. Nothing is redrawn that the DS already provides."
      }
    ],
    "behavior": [
      {
        "state": "Default (Brand)",
        "ios": "yes",
        "android": "yes",
        "property": "Surface=Brand",
        "notes": "White title and description on the brand surface."
      },
      {
        "state": "Default (Default)",
        "ios": "yes",
        "android": "yes",
        "property": "Surface=Default",
        "notes": "Dark title and description on the default white surface."
      },
      {
        "state": "Pressed / Disabled",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Static — no interactive states."
      }
    ],
    "resolved": [
      {
        "headline": "Renamed to Detail Hero and moved out of the Header family.",
        "body": "v2.0: Rebuilt on node <code>4368:12856</code> in the 2026 Working File. The previous assessment’s central call — that this is not a header — is settled: it has no navigation role and no title-only scope, and its anatomy is a card hero (avatar, title, separator, label-value, description). The name now says so, which also frees it from being read as a sibling of the three components that genuinely are headers. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>Surface = Brand | Default</code> exposed.",
        "body": "v2.0: The same axis Page Banner and Brand App Bar landed on, so all three read consistently, and a detail hero on a settings screen can use the default surface instead of being forced onto brand blue. PascalCase per §1, Title Case values per §5, and the brand fill <code>#1972F9</code> matches Page Banner’s exactly. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>email = yes | no</code> boolean retired.",
        "body": "v2.0: The property that hardcoded one specific metadata field into the component’s schema is gone. The API no longer claims this component is about email addresses. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Separator alpha treatment settled.",
        "body": "v2.1: The separator is <code>#F6F9FD</code> at 24% on brand and <code>#E5EBF4</code> on default — the same treatment as Page Banner’s border, which the owner has confirmed as intentional and token-bound. Recorded here as covered by that decision rather than reopened per-component. (C3 · Token)",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Layer naming pass complete across both variants.",
        "body": "v2.2: Verified on the live node. <code>#title</code> → <code>Title</code>, <code>sender-details</code> → <code>SenderDetails</code>, the two siblings that both read <code>#text</code> → <code>Label</code> and <code>Value</code>, and <code>#description</code> → <code>Description</code> — the last of these landing in v2.3, which cleared the final cross-variant mismatch. Every text layer now carries the same name in <code>Surface=Brand</code> and <code>Surface=Default</code>, so each exposes as a single text property, and all four follow the §3 vocabulary. The legacy <code>#</code> prefix is gone from the component entirely. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Avatar placeholder confirmed intentional.",
        "body": "v2.2: The <code>Placeholder</code> instance is the deliberate swap target rather than an unfinished avatar — the consumer instance-swaps their own content into it, and the DS is not prescribing <strong>Avatar</strong> specifically, since a detail hero also fronts merchants and transactions that have a logo or an icon rather than a person. Attested rather than verified: instance-swap property definitions are not readable through the review tooling, so this is recorded on the owner’s confirmation. (C4 · Composition)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Single metadata row confirmed as the intended scope.",
        "body": "v2.2: <code>SenderDetails</code> holds one label-value pair by design. A detail hero introduces the subject of the screen; the full metadata list belongs to the rows below it, not to the hero. Confirmed by the owner rather than left as an implied limitation, so a consumer needing several rows knows to compose them beneath rather than to extend this component. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Spacer instances confirmed a deliberate convention.",
        "body": "v2.2: The <code>_space_8</code> / <code>_space_12</code> / <code>_space_16</code> instances are a system-wide spacing-annotation device, not layout elements left in by accident — the same pattern appears in Chip. Confirmed by the owner. Attested rather than verified: layer visibility flags are not readable through the review tooling, so the reviewer cannot see whether they render, only that they exist in the tree. (C1 · Docs)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Label-value typography confirmed intentional.",
        "body": "v2.2: The row is Proxima Soft 14 here where Page Banner’s equivalent is BarkAda 14. Confirmed by the owner as a deliberate difference rather than drift — the two components carry different weight in their screens, and the review flagged it as a type-system question rather than a defect. Recorded so the split reads as a decision to anyone comparing the two. (C3 · Token)",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Avatar is static — no pressed state needed.",
        "body": "v2.2: The hero is informational; nothing in it is tappable, so the absence of pressed and disabled coverage is correct rather than missing. Consistent with the rest of this family, where interaction lives in the surfaces below the hero. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Stays grouped with the header family in the docs.",
        "body": "v2.3: Detail Hero is a card hero rather than a header by anatomy, and the rename records that. It nonetheless stays filed alongside <a href=\"#\" onclick=\"showPanelById('header');return false;\">Section Header</a>, <a href=\"#\" onclick=\"showPanelById('header-centered');return false;\">Page Banner</a> and <a href=\"#\" onclick=\"showPanelById('header-with-logo');return false;\">Brand App Bar</a>, because that is where a designer looks for it — all four answer the question “what goes at the top of this screen?”, and splitting them across groups would hide the one comparison that matters. The naming distinction is carried by the component name, not by the filing. (Docs)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The schema is otherwise settled: a single <code>Surface</code> enum over a swap target, a title, one label-value pair and a description.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": []
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "no-email",
        "demoKey": "ht-no",
        "demoControls": headerTransactionDemoControls,
        "title": "No email",
        "node": "18430:2906",
        "description": "The minimal variant — avatar + title + divider + description. Used when the profile/transaction has no extra metadata to show.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-transaction-spec-1\"><div class=\"eb-preview eb-preview-header-tx\"><div class=\"eb-preview-header-tx__avatar\" aria-hidden=\"true\"></div><p class=\"eb-preview-header-tx__title\">Add Label Here</p><div class=\"eb-preview-header-tx__separator\"></div><p class=\"eb-preview-header-tx__desc\">Add description here.<br>Add description here.</p></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "email",
                "value": "no",
                "mono": true,
                "prop": "email"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "header/color/default/bg" },
              { "key": "Title", "value": "#0A2757", "token": "header/color/default/label-header" },
              { "key": "Description", "value": "#6780A9", "token": "header/color/default/description" },
              { "key": "Border", "value": "#E5EBF4", "token": "header/color/default/border" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
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
            "slug": "typo",
            "rows": [
              {
                "key": "Title",
                "value": "Heading/L · Proxima Soft Bold 22/26",
                "mono": true
              },
              {
                "key": "Description",
                "value": "Body/S · BarkAda Semibold 12/18",
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
        "demoKey": "ht-yes",
        "demoControls": headerTransactionDemoControls,
        "title": "With email row",
        "node": "18430:2898",
        "description": "Adds an inline <code>email: value</code> row between the divider and the description. Used on recipient profile cards.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-transaction-spec-2\"><div class=\"eb-preview eb-preview-header-tx\"><div class=\"eb-preview-header-tx__avatar\" aria-hidden=\"true\"></div><p class=\"eb-preview-header-tx__title\">Add Label Here</p><div class=\"eb-preview-header-tx__separator\"></div><p class=\"eb-preview-header-tx__meta\"><span class=\"eb-preview-header-tx__meta-key\">email:</span><span class=\"eb-preview-header-tx__meta-value\">email@gmail.com</span></p><p class=\"eb-preview-header-tx__desc\">Add description here.<br>Add description here.</p></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "email",
                "value": "yes",
                "mono": true,
                "prop": "email"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface bg", "value": "#0A2757", "token": "main/header/dark/bg" },
              { "key": "Title color", "value": "#FFFFFF", "token": "main/header/dark/title" },
              { "key": "Email color", "value": "#C2CFE5", "token": "main/header/dark/subtitle" },
              { "key": "Icon color", "value": "#FFFFFF", "token": "main/header/dark/icon" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
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
            "slug": "typo",
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
    colorsTables: [
      // Card 1 — No email row
      buildStatelessColorsTable({
        title: 'No Email — Colors',
        description: 'Transaction-screen header on brand surface, with avatar + title + description split by a divider.',
        rows: [
          { role: 'Surface bg',  token: 'main/header-transaction/bg',          value: '#1972F9' },
          { role: 'Title',       token: 'main/header-transaction/title',       value: '#FFFFFF' },
          { role: 'Description', token: 'main/header-transaction/description', value: '#FFFFFF @ 80%' },
          { role: 'Divider',     token: 'main/header-transaction/divider',     value: '#FFFFFF @ 24%' },
        ],
      }),
      // Card 2 — With email row
      buildStatelessColorsTable({
        title: 'With Email — Colors',
        description: 'Same brand surface as Card 1 plus a sender-details cluster (name + email) above the description.',
        rows: [
          { role: 'Surface bg',   token: 'main/header-transaction/bg',          value: '#1972F9' },
          { role: 'Title',        token: 'main/header-transaction/title',       value: '#FFFFFF' },
          { role: 'Sender label', token: 'main/header-transaction/sender',     value: '#FFFFFF' },
          { role: 'Sender email', token: 'main/header-transaction/email',      value: '#FFFFFF @ 80%' },
          { role: 'Description',  token: 'main/header-transaction/description', value: '#FFFFFF @ 80%' },
          { role: 'Divider',      token: 'main/header-transaction/divider',     value: '#FFFFFF @ 24%' },
        ],
      }),
    ],
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
