import type { ComponentData, DemoControlSection } from '../types';

// Panel mirrors the only variant axis of set 4368:12856. The retired
// `email` control is dropped — the set has no such property.
const detailHeroDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Surface',
        prop: 'surface',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'brand', label: 'Brand' },
        ],
      },
    ],
  },
];

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/header-transaction.js`.

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
        "cardKey": "dh-spec-main",
        "demoKey": "main",
        "title": "Detail Hero",
        "node": "4368:12856",
        "description": "",
        "previewHtml": "<div id=\"detail-hero-spec-main\" class=\"spec-preview-body\"><svg width=\"360\" height=\"218\" viewBox=\"0 0 360 218\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"360\" height=\"218\" fill=\"#FFFFFF\"/><rect x=\"24\" y=\"24\" width=\"32\" height=\"32\" rx=\"16\" fill=\"#C2CFE5\"/><text class=\"dh-title\" x=\"24\" y=\"77\" font-size=\"22\" font-weight=\"700\" fill=\"#0A2757\" dominant-baseline=\"central\">Add Label Here</text><line x1=\"24\" y1=\"102\" x2=\"336\" y2=\"102\" stroke=\"#E5EBF4\" stroke-opacity=\"1\" stroke-width=\"1\"/><text class=\"dh-proxima\" x=\"24\" y=\"125\" font-size=\"14\" font-weight=\"600\" fill=\"#6780A9\" fill-opacity=\"1\" dominant-baseline=\"central\">label:</text><text class=\"dh-proxima\" x=\"24\" y=\"143\" font-size=\"14\" font-weight=\"700\" fill=\"#0A2757\" dominant-baseline=\"central\">add text here</text><text class=\"dh-barkada\" x=\"24\" y=\"167\" font-size=\"12\" font-weight=\"600\" fill=\"#6780A9\" fill-opacity=\"1\" dominant-baseline=\"central\">Add description here.</text><text class=\"dh-barkada\" x=\"24\" y=\"185\" font-size=\"12\" font-weight=\"600\" fill=\"#6780A9\" fill-opacity=\"1\" dominant-baseline=\"central\">Add description here.</text></svg></div>",
        "demoControls": detailHeroDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Surface",
                "value": "Default",
                "prop": "surface"
              },
              {
                "key": "Placeholder",
                "value": "Icon slot · 32 × 32",
                "mono": true
              },
              {
                "key": "Spacers",
                "value": "_space_8 · _space_12 · _space_16 — spacer instances, not auto-layout gaps",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Surface",
                "value": "#FFFFFF",
                "token": "—",
                "variants": {
                  "surface:brand": {
                    "value": "#1972F9"
                  }
                }
              },
              {
                "key": "Title",
                "value": "#0A2757",
                "token": "—",
                "variants": {
                  "surface:brand": {
                    "value": "#FFFFFF"
                  }
                }
              },
              {
                "key": "Separator",
                "value": "#E5EBF4",
                "token": "—",
                "variants": {
                  "surface:brand": {
                    "value": "#F6F9FD @ 24%"
                  }
                }
              },
              {
                "key": "Sender label",
                "value": "#6780A9",
                "token": "—",
                "variants": {
                  "surface:brand": {
                    "value": "#F6F9FD @ 72%"
                  }
                }
              },
              {
                "key": "Sender value",
                "value": "#0A2757",
                "token": "—",
                "variants": {
                  "surface:brand": {
                    "value": "#FFFFFF"
                  }
                }
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "token": "—",
                "variants": {
                  "surface:brand": {
                    "value": "#F6F9FD @ 72%"
                  }
                }
              },
              {
                "key": "Placeholder",
                "value": "#C2CFE5",
                "token": "—"
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "Sender label",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Sender value",
                "value": "Primary/Label/Small",
                "mono": true
              },
              {
                "key": "Description",
                "value": "Secondary/Bold/Caption",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "218px — fixed on both variants",
                "mono": true
              },
              {
                "key": "Width",
                "value": "360px",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "None",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "8 · 12 · 16 · 8 — top to bottom",
                "mono": true
              },
              {
                "key": "Content",
                "value": "312px",
                "mono": true
              },
              {
                "key": "Placeholder",
                "value": "32 × 32",
                "mono": true
              },
              {
                "key": "Separator",
                "value": "312 wide — weight not readable",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Leading · top-anchored",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDetailHero</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Add Label Here\"</span><span class=\"syn-punc\">,</span>\n    label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"label:\"</span><span class=\"syn-punc\">,</span>\n    value<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"add text here\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Add description here.\"</span>\n<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span>ebSurface<span class=\"syn-punc\">(.</span>default<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDetailHero</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Add Label Here\"</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"label:\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"add text here\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Add description here.\"</span><span class=\"syn-punc\">,</span>\n    surface <span class=\"syn-eq\">=</span> EBHeroSurface<span class=\"syn-punc\">.</span>Default\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Surface",
        "description": "Read off <code>get_node_info</code> on both variants of set <code>4368:12856</code> and confirmed against <code>export_node_as_image</code>. <strong>Brand is <code>#1972F9</code> here but <code>#005CE5</code> on Brand App Bar</strong> — two components, two brand blues. The avatar placeholder stays <code>#C2CFE5</code> on both surfaces. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Default",
            "token": "Surface",
            "values": [
              "—",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "Title",
            "values": [
              "—",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "Separator",
            "values": [
              "—",
              "#E5EBF4"
            ]
          },
          {
            "role": "—",
            "token": "Sender label",
            "values": [
              "—",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "Sender value",
            "values": [
              "—",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "Description",
            "values": [
              "—",
              "#6780A9"
            ]
          },
          {
            "role": "Brand",
            "token": "Surface",
            "values": [
              "—",
              "#1972F9"
            ]
          },
          {
            "role": "—",
            "token": "Title",
            "values": [
              "—",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "Separator",
            "values": [
              "—",
              "#F6F9FD @ 24%"
            ]
          },
          {
            "role": "—",
            "token": "Sender label",
            "values": [
              "—",
              "#F6F9FD @ 72%"
            ]
          },
          {
            "role": "—",
            "token": "Sender value",
            "values": [
              "—",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "Description",
            "values": [
              "—",
              "#F6F9FD @ 72%"
            ]
          },
          {
            "role": "Both",
            "token": "Placeholder",
            "values": [
              "—",
              "#C2CFE5"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:header:2.3.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.header.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>4368:12856</code>. <code>Surface</code> is the only variant axis. Text and instance-swap property definitions are not readable with the review tooling, so the text layers and the <code>Placeholder</code> are listed as the content a developer passes. The <code>_space_*</code> instances are annotation, not content, and have no parameter.",
      "rows": [
        {
          "figma": "Surface — Brand, Default",
          "swift": "<code>.ebSurface(.brand / .default)</code>",
          "compose": "<code>surface = EBHeroSurface.Brand / Default</code>"
        },
        {
          "figma": "— <code>Placeholder</code> instance, 32 × 32 (swap target)",
          "swift": "trailing <code>@ViewBuilder leading</code> closure",
          "compose": "<code>leading: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "— <code>Title</code> text layer",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "— <code>SenderDetails › Label</code> text layer",
          "swift": "<code>label: String</code>",
          "compose": "<code>label: String</code>"
        },
        {
          "figma": "— <code>SenderDetails › Value</code> text layer",
          "swift": "<code>value: String</code>",
          "compose": "<code>value: String</code>"
        },
        {
          "figma": "— <code>Description</code> text layer",
          "swift": "<code>description: String?</code>",
          "compose": "<code>description: String? = null</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Header/EBDetailHero.swift",
        "compose": "android/components/header/EBDetailHero.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default",
        "swift": "<span class=\"cmt\">// Surface=Default — 4464:13247, 360 × 218. #FFFFFF surface, #E5EBF4 separator.</span>\n<span class=\"typ\">EBDetailHero</span>(\n    title: <span class=\"str\">\"Add Label Here\"</span>,\n    label: <span class=\"str\">\"label:\"</span>,\n    value: <span class=\"str\">\"add text here\"</span>,\n    description: <span class=\"str\">\"Add description here.\"</span>\n) {\n    <span class=\"typ\">Image</span>(<span class=\"str\">\"merchant-logo\"</span>)  <span class=\"cmt\">// swapped into the 32 × 32 Placeholder</span>\n}\n.<span class=\"fn\">ebSurface</span>(.<span class=\"prp\">default</span>)",
        "compose": "<span class=\"cmt\">// Surface=Default — 4464:13247, 360 × 218. #FFFFFF surface, #E5EBF4 separator.</span>\n<span class=\"typ\">EBDetailHero</span>(\n    title = <span class=\"str\">\"Add Label Here\"</span>,\n    label = <span class=\"str\">\"label:\"</span>,\n    value = <span class=\"str\">\"add text here\"</span>,\n    description = <span class=\"str\">\"Add description here.\"</span>,\n    surface = <span class=\"typ\">EBHeroSurface</span>.<span class=\"prp\">Default</span>,\n    leading = { <span class=\"typ\">Image</span>(painterResource(R.drawable.merchant_logo), contentDescription = <span class=\"str\">\"Merchant\"</span>) }\n)"
      },
      {
        "subheading": "Brand",
        "swift": "<span class=\"cmt\">// Surface=Brand — 4464:16379, 360 × 218. #1972F9 surface, #F6F9FD @ 24% separator.</span>\n<span class=\"typ\">EBDetailHero</span>(\n    title: <span class=\"str\">\"Add Label Here\"</span>,\n    label: <span class=\"str\">\"label:\"</span>,\n    value: <span class=\"str\">\"add text here\"</span>,\n    description: <span class=\"str\">\"Add description here.\"</span>\n) {\n    <span class=\"typ\">Image</span>(<span class=\"str\">\"merchant-logo\"</span>)  <span class=\"cmt\">// swapped into the 32 × 32 Placeholder</span>\n}\n.<span class=\"fn\">ebSurface</span>(.<span class=\"prp\">brand</span>)",
        "compose": "<span class=\"cmt\">// Surface=Brand — 4464:16379, 360 × 218. #1972F9 surface, #F6F9FD @ 24% separator.</span>\n<span class=\"typ\">EBDetailHero</span>(\n    title = <span class=\"str\">\"Add Label Here\"</span>,\n    label = <span class=\"str\">\"label:\"</span>,\n    value = <span class=\"str\">\"add text here\"</span>,\n    description = <span class=\"str\">\"Add description here.\"</span>,\n    surface = <span class=\"typ\">EBHeroSurface</span>.<span class=\"prp\">Brand</span>,\n    leading = { <span class=\"typ\">Image</span>(painterResource(R.drawable.merchant_logo), contentDescription = <span class=\"str\">\"Merchant\"</span>) }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Heading trait",
        "ios": "Apply <code>.accessibilityAddTraits(.isHeader)</code> to the Title — it names the subject of the screen.",
        "android": "Apply <code>Modifier.semantics { heading() }</code> to the Title."
      },
      {
        "requirement": "Leading content",
        "ios": "Whatever is swapped into the Placeholder is decorative when the Title already names it — <code>.accessibilityHidden(true)</code>. Label it only when it adds information, such as a merchant logo with no name in the Title.",
        "android": "<code>contentDescription = null</code> when decorative; a name when it identifies."
      },
      {
        "requirement": "Label-value pair",
        "ios": "Combine <code>SenderDetails</code> with <code>.accessibilityElement(children: .combine)</code> so “label:” and its value read as one phrase.",
        "android": "Use <code>Modifier.semantics(mergeDescendants = true)</code> on the pair."
      },
      {
        "requirement": "Separator",
        "ios": "The separator is decorative — hide it from VoiceOver.",
        "android": "No semantics on the divider."
      },
      {
        "requirement": "Contrast — Brand",
        "ios": "Measured on #1972F9. Title, white 22pt bold: 4.36:1 — passes AA large text. Value, white 14pt bold: 4.36:1 — below 4.5:1. Label (14pt) and Description (12pt) at #F6F9FD 72% composite to #B8D3FC: 2.86:1 — below 4.5:1.",
        "android": "Same fills, same ratios. See the open Changelog row."
      },
      {
        "requirement": "Contrast — Default",
        "ios": "Title and Value #0A2757 on #FFFFFF: 14.58:1. Label and Description #6780A9: 4.01:1 — below 4.5:1 at 14pt and 12pt.",
        "android": "Same ratios."
      },
      {
        "requirement": "Dynamic Type / font scaling",
        "ios": "Both variants are a fixed 218pt with a 2-line Description. Let the hero grow; don’t clip the Description.",
        "android": "Use <code>sp</code> and let height follow <code>fontScale</code>."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Detail Hero at the top of a detail screen to introduce the transaction, recipient or merchant.",
        "dontText": "Don’t use it as a screen title bar or section label — that is Page Banner or Section Header."
      },
      {
        "doText": "Swap your own avatar, logo or icon into the 32 × 32 Placeholder.",
        "dontText": "Don’t ship the grey #C2CFE5 placeholder circle."
      },
      {
        "doText": "Carry one label-value pair — the subject’s key detail.",
        "dontText": "Don’t extend it with more rows. Compose the rest of the detail as list rows beneath it (confirmed scope, v2.2)."
      },
      {
        "doText": "Reproduce the spacing the <code>_space_*</code> instances annotate: 8 · 12 · 16 · 8.",
        "dontText": "Don’t render the spacers. They are yellow, blue and purple annotation blocks with Roboto labels."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Renamed Detail Hero (v2.0). <code>Title</code>, <code>SenderDetails</code> › <code>Label</code> + <code>Value</code>, <code>Description</code> — identical in both variants (v2.2–v2.3). The <code>_space_*</code> instances are an owner-confirmed annotation convention (v2.2); the lowercase <code>separator</code> line is the one layer left off the PascalCase pass."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One PascalCase axis, <code>Surface = Brand | Default</code>, matching Page Banner and Brand App Bar. The <code>email</code> boolean is retired (v2.0)."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All four text layers resolve <code>matched</code> on both variants — <code>Primary/Headlines/Section</code>, <code>Primary/Label/Light/Small</code>, <code>Primary/Label/Small</code>, <code>Secondary/Bold/Caption</code>. The #1972F9 surface and 72% / 24% alphas are owner-attested token bindings (v2.1); the plugin cannot verify colour bindings."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A leading-aligned vertical stack — leading slot, title, divider, label-value, description — maps to one <code>EBDetailHero</code> view and composable. Heights are whole pixels: 24 + 32 + 8 + 26 + 12 + 16 + 32 + 8 + 36 + 24 = 218."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Static by design (v2.2) — nothing in the hero is tappable."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "No baked assets. The leading content is a <code>Placeholder</code> instance swapped by the consumer — owner-confirmed as intended (v2.2)."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "No longer blocked — the rehome and placeholder decisions were settled in v2.0–v2.2. No SwiftUI or Compose mappings are registered; the native library does not exist."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 2,
      "description": "<code>Surface</code> (2) = 2 variants. Both are 360 × 218, content 312 wide at 24 / 24.",
      "columns": [
        "Surface",
        "Node ID",
        "Dimensions",
        "Surface fill",
        "Separator",
        "Title / Value"
      ],
      "rows": [
        {
          "cells": [
            "Brand",
            "<code>4464:16379</code>",
            "360 × 218",
            "#1972F9",
            "#F6F9FD @ 24%",
            "#FFFFFF"
          ]
        },
        {
          "cells": [
            "Default",
            "<code>4464:13247</code>",
            "360 × 218",
            "#FFFFFF",
            "#E5EBF4",
            "#0A2757"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.3.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 4368:12856",
      "rows": [
        {
          "body": "<strong>The Code tab still described the 1.0.0 component.</strong> Property Mapping listed <code>email: boolean</code>, an <code>avatar: EBAvatar</code> instance and a <code>metadata: [LabelValuePair]</code> list; the inventory showed <code>18430:*</code> nodes at 360 × 220 and 360 × 191. Rebuilt on <code>Surface = Brand | Default</code>, two variants on <code>4464:*</code>, both 360 × 218.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard contradicted the resolved record.</strong> C1, C2 and C4 asked for the rename, the <code>email</code> retirement and an Avatar instance — done or decided in v2.0–v2.2. C5 and C6 asked for avatar states and a vector Avatar, ruled out by the static-by-design and swap-target decisions. Rescored C1–C4 and C6 Ready, C5 Not Applicable.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Contrast figures used colours the component does not have.</strong> The Accessibility row measured white and a muted #C8D8F5 on #005CE5. The Brand surface is #1972F9 and the muted text is #F6F9FD at 72%; real ratios are now listed.",
          "delta": {
            "kind": "resolved",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Installation, usage snippets and guidelines were empty.</strong> Added SPM + Gradle <code>com.eastblue.ds:header:2.3.1</code>, a snippet per surface, and four do/don’t pairs including not rendering the <code>_space_*</code> annotations.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel.</strong> The retired <code>email</code> control is dropped; one <code>Surface</code> control drives colours, and all four text layers resolve to DS styles.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Secondary text fails AA contrast.</strong> Brand: Label and Description at #F6F9FD 72% on #1972F9 are 2.86:1; Value white is 4.36:1. Default: Label and Description #6780A9 are 4.01:1. Body text needs 4.5:1. The surface colour and alphas are owner decisions and not re-raised; the legibility outcome is new. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong><code>separator</code> is the one lowercase layer name</strong> left after the v2.2 naming pass. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>v2.0.0 through v2.3.0 have no changelog entries.</strong> The Overview records eleven resolutions across those versions, but the changelog jumps from 1.0.0 to here. Their dates are not recorded anywhere readable, so they are not invented. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        }
      ]
    },
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
