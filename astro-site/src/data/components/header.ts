import type { ComponentData, DemoControlSection } from '../types';

// Panel mirrors the property panel of set 4363:11467, in its order.
// Image-Slot is a SLOT, so it takes no control.
const sectionHeaderDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'TrailingMedia',
        prop: 'trailingmedia',
        defaultValue: 'none',
        options: [
          { value: 'none', label: 'None' },
          { value: 'link', label: 'Link' },
          { value: 'icon', label: 'Icon' },
          { value: 'edit', label: 'Edit' },
        ],
      },
      {
        label: 'hasLeadingMedia',
        prop: 'hasLeadingMedia',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasPreamble',
        prop: 'hasPreamble',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasDescription',
        prop: 'hasDescription',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasCounter',
        prop: 'hasCounter',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
    ],
  },
];

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/header.js`.

export const header: ComponentData = {
  "meta": {
    "slug": "header",
    "name": "Section Header",
    "node": "4363:11467",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4363-11467",
    "description": "A section-level heading row with preamble, title, counter, description, and optional leading and trailing media.",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "ready",
        "label": "Ready"
      }
    ],
    "navGroup": "Header",
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>4363:11467</code> in the 2026 Working File and renamed to <strong>Section Header</strong>. The 8-boolean matrix collapsed to <code>TrailingMedia</code> (4) × <code>hasLeadingMedia</code> (2) = 8 variants; property and layer naming follow the guidelines throughout, with text layers mapping onto §7 hierarchy as <code>Preamble → Title → Description</code>; and both media containers are now real Figma Slots. The nested <code>Counter</code> is the shared component as published, and the row is a static section label so interaction states are deliberately out of scope. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Section headers sit above grouped content — a list of transactions, a set of services, a carousel of offers — to label the section and optionally expose a trailing action.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"header-demo-preview\"><div class=\"eb-preview eb-preview-header\"><div class=\"eb-preview-header__content\"><p class=\"eb-preview-header__title\">Heading</p><p class=\"eb-preview-header__desc\">Description goes here</p></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">preamble</span><select id=\"header-ctrl-preamble\" class=\"demo-panel-select\" onchange=\"_headerUpdate()\"><option value=\"no\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><select id=\"header-ctrl-description\" class=\"demo-panel-select\" onchange=\"_headerUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">leading media</span><select id=\"header-ctrl-leading\" class=\"demo-panel-select\" onchange=\"_headerUpdate()\"><option value=\"none\" selected=\"\">none</option><option value=\"icon\">icon</option><option value=\"illustration\">illustration</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">trailing</span><select id=\"header-ctrl-trailing\" class=\"demo-panel-select\" onchange=\"_headerUpdate()\"><option value=\"none\" selected=\"\">none</option><option value=\"illustration\">illustration</option><option value=\"link\">link</option><option value=\"edit\">edit</option><option value=\"counter\">counter</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Works across many screen sections. <code>TrailingMedia</code> (4) × <code>hasLeadingMedia</code> (2) gives 8 variants with no invalid combinations — every one is a shape a real section actually takes."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its typography, spacing, and color tokens. No external state required."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Renamed to Section Header, freeing the shared prefix. <code>TrailingMedia</code> is PascalCase per §1, <code>hasLeadingMedia</code> uses <code>True | False</code> per §5, and the text layers map onto §7 hierarchy — <code>Preamble → Title → Description</code>."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Leading media is an <code>Image-Slot</code> and the trailing icon an <code>Icon-Slot</code>, both real Figma Slots; <code>Trailing Media</code> is an instance in every variant that has one; and the count comes from the shared <code>Counter</code> component rather than being drawn in place."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "16 variants",
        "notes": "The only state today — no pressed/disabled/focused."
      },
      {
        "state": "Trailing action pressed",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Link, edit, counter should be real Button/Link instances that carry their own pressed state."
      },
      {
        "state": "Disabled",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "Section headers are informational — no disabled variant needed."
      },
      {
        "state": "Focused (a11y)",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Focus lives on the trailing action, not the header itself."
      }
    ],
    "resolved": [
      {
        "headline": "Renamed to Section Header.",
        "body": "v2.0: Rebuilt on node <code>4363:11467</code> in the 2026 Working File and renamed from <code>Header</code> to <strong>Section Header</strong>, describing what it actually is — a section-level heading row, not a screen chrome bar. Frees the <em>Header</em> prefix that four structurally different components were sharing. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Eight boolean props collapsed to two.",
        "body": "v2.0: The 8-boolean matrix with 256 theoretical combinations and 16 built variants is now <code>TrailingMedia</code> (4) × <code>hasLeadingMedia</code> (2) = <strong>8 variants</strong>. Fewer than the three props recommended, and every combination is meaningful. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Property naming corrected.",
        "body": "v2.1: <code>hasTrailingMedia</code> → <code>TrailingMedia</code> — a four-value enum should not carry a boolean <code>has</code> prefix (§2) — and <code>hasLeadingMedia</code> values went <code>Yes | No</code> → <code>True | False</code>, which §5 lists explicitly under DON'T. The <code>has</code> prefix is correct on that one because it is a genuine boolean. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Layer naming completed.",
        "body": "v2.1–v2.2: Two frames both named <code>container</code> became <code>LeadingMedia</code> and <code>HeaderContent</code>; <code>#title</code> → <code>Preamble</code>, <code>#heading</code> → <code>Title</code>, <code>#description</code> → <code>Description</code>, <code>header-description</code> → <code>DescriptionRow</code>, <code>header-counter</code> → <code>CounterSlot</code>. The component-name prefixes are gone per §6, and the text layers now map exactly onto §7 content hierarchy: <code>Preamble → Title → Description</code>. Verified across all eight variants by full text scan. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Media containers converted to real Figma Slots.",
        "body": "v2.2: Leading media went from a <code>Placeholder</code> instance to an <code>Image-Slot</code> <code>SLOT</code> in all four <code>hasLeadingMedia=True</code> variants, and the trailing icon is now an <code>Icon-Slot</code> <code>SLOT</code> inside the <code>Trailing Media</code> instance. Teams can drop in real content without detaching. (C6 · Slot)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Trailing media made consistent across variants.",
        "body": "v2.2: <code>Trailing Media</code> is an INSTANCE in every variant that has one — the Icon variants previously used a plain FRAME — and the stray instance in <code>TrailingMedia=None, hasLeadingMedia=True</code> is gone, so both None variants now match. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Nested <code>Counter</code> confirmed correct.",
        "body": "v2.2: Closed by owner decision — the <code>Counter</code> instance points at the Counter component as published, and stays. The rebuilt copy at <code>4675:21497</code> is a working-file version rather than a replacement, so no swap is needed. Worth revisiting only if the two ever diverge in the published library. (C4 · Composition)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Interaction states ruled out of scope.",
        "body": "v2.2: Closed by owner decision — Section Header is not tappable. It is a static section label, so <code>Default | Pressed | Disabled</code> would describe interactions the component never has. Any tap target lives in the trailing media, and its states belong to that component. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Header-family restructure closed.",
        "body": "v2.3: Closed for this component. The restructure that mattered here is done — the base component is <strong>Section Header</strong>, which frees the <em>Header</em> prefix that four structurally different components were sharing, and its own naming, properties and layers all follow the guidelines. <em>Header - With Logo</em> has since been renamed <strong>Brand App Bar</strong> in Figma, confirming it stays a distinct component rather than merging into Title Bar. What remains is bookkeeping on two other pages rather than work on this one: the site still lists Brand App Bar under its old name, and <em>Detail Hero</em> still needs a call on whether it belongs in the family at all. Both are tracked on their own component pages. (Family)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The schema is clean and ready: one enum, one boolean, three text layers and two slots.",
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
        "cardKey": "sh-spec-main",
        "demoKey": "main",
        "title": "Section Header",
        "node": "4363:11467",
        "description": "",
        "previewHtml": "<div id=\"section-header-spec-main\" class=\"spec-preview-body\"><svg width=\"360\" height=\"100\" viewBox=\"0 0 360 100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0.5\" y=\"0.5\" width=\"359\" height=\"99\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\"/><text class=\"sh-proxima\" x=\"24\" y=\"27\" font-size=\"14\" font-weight=\"700\" fill=\"#005CE5\" dominant-baseline=\"central\">Preamble</text><text class=\"sh-proxima-title\" x=\"24\" y=\"49\" font-size=\"22\" font-weight=\"700\" fill=\"#0A2757\" dominant-baseline=\"central\">Heading</text><rect x=\"121\" y=\"37\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#EEF2F9\"/><text class=\"sh-proxima\" x=\"133\" y=\"49\" font-size=\"12\" font-weight=\"700\" fill=\"#6780A9\" text-anchor=\"middle\" dominant-baseline=\"central\">9</text><text class=\"sh-barkada\" x=\"24\" y=\"71\" font-size=\"12\" font-weight=\"600\" fill=\"#6780A9\" dominant-baseline=\"central\">Description goes here</text></svg></div>",
        "demoControls": sectionHeaderDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "TrailingMedia",
                "value": "None",
                "prop": "trailingmedia"
              },
              {
                "key": "hasLeadingMedia",
                "value": "False",
                "prop": "hasLeadingMedia"
              },
              {
                "key": "hasPreamble",
                "value": "True",
                "prop": "hasPreamble"
              },
              {
                "key": "hasDescription",
                "value": "True",
                "prop": "hasDescription"
              },
              {
                "key": "hasCounter",
                "value": "True",
                "prop": "hasCounter"
              },
              {
                "key": "Image-Slot (slot)",
                "value": "SLOT · 4 items — inside LeadingMedia",
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
                "token": "—"
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "token": "—"
              },
              {
                "key": "Preamble",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "hasPreamble:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Title",
                "value": "#0A2757",
                "token": "—"
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "token": "—",
                "variants": {
                  "hasDescription:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Counter background",
                "value": "#EEF2F9",
                "token": "—",
                "variants": {
                  "hasCounter:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Trailing media",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "trailingmedia:none": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Media placeholder",
                "value": "#D7E0EF",
                "token": "—"
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Preamble",
                "value": "Primary/Label/Small",
                "mono": true,
                "variants": {
                  "hasPreamble:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Title",
                "value": "Primary/Headlines/Section",
                "mono": true
              },
              {
                "key": "Description",
                "value": "Secondary/Bold/Caption",
                "mono": true,
                "variants": {
                  "hasDescription:false": {
                    "hide": true
                  }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "100px — fixed, all 8 variants",
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
                "value": "24px top · 16px bottom",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "16px between blocks · 2px Preamble → row",
                "mono": true
              },
              {
                "key": "Content",
                "value": "312px",
                "mono": true,
                "prop": "contentWidth",
                "variants": {
                  "trailingmedia:none|hasLeadingMedia:true": {
                    "value": "250px"
                  },
                  "trailingmedia:link|hasLeadingMedia:false": {
                    "value": "235px"
                  },
                  "trailingmedia:link|hasLeadingMedia:true": {
                    "value": "173px"
                  },
                  "trailingmedia:icon|hasLeadingMedia:false": {
                    "value": "264px"
                  },
                  "trailingmedia:icon|hasLeadingMedia:true": {
                    "value": "202px"
                  },
                  "trailingmedia:edit|hasLeadingMedia:false": {
                    "value": "184px"
                  },
                  "trailingmedia:edit|hasLeadingMedia:true": {
                    "value": "122px"
                  }
                }
              },
              {
                "key": "Leading media",
                "value": "46 × 46",
                "mono": true,
                "variants": {
                  "hasLeadingMedia:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Trailing media",
                "value": "—",
                "mono": true,
                "variants": {
                  "trailingmedia:link": {
                    "value": "61 × 22 — \"View All\""
                  },
                  "trailingmedia:icon": {
                    "value": "32 × 48 — Icon-Slot, 32 × 32 inside"
                  },
                  "trailingmedia:edit": {
                    "value": "112 × 24 — icon 24 + gap 4 + label"
                  }
                }
              },
              {
                "key": "Counter",
                "value": "24 × 24 · 12px after the title",
                "mono": true,
                "variants": {
                  "hasCounter:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Alignment",
                "value": "Leading · vertically centred — see the note below",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSectionHeader</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span>ebPreamble<span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Preamble\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span>ebDescription<span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Description goes here\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span>ebCounter<span class=\"syn-punc\">(</span>9<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSectionHeader</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Heading\"</span><span class=\"syn-punc\">,</span>\n    preamble <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Preamble\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description goes here\"</span><span class=\"syn-punc\">,</span>\n    counter <span class=\"syn-eq\">=</span> 9<span class=\"syn-punc\">,</span>\n    trailingMedia <span class=\"syn-eq\">=</span> EBTrailingMedia<span class=\"syn-punc\">.</span>None\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Element",
        "description": "Read off <code>get_node_info</code> on the variants of set <code>4363:11467</code>. None of these change with <code>TrailingMedia</code> or <code>hasLeadingMedia</code> — the two variant axes move geometry only. <strong>On vertical alignment:</strong> Figma top-anchors the leading media, the content stack and the trailing media at <code>y=24</code>, which leaves 24 above and 16 below a full 60-tall stack. The preview centres each block on the row axis instead — balanced at every boolean combination, and 4px lower than the component when everything is switched on. Both media placeholders are <code>#D7E0EF</code> fills inside slots, so what ships in production is the consumer’s. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Container",
            "token": "Surface",
            "values": [
              "—",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "Border · 1px",
            "values": [
              "—",
              "#E5EBF4"
            ]
          },
          {
            "role": "Content",
            "token": "Preamble",
            "values": [
              "—",
              "#005CE5"
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
            "token": "Description",
            "values": [
              "—",
              "#6780A9"
            ]
          },
          {
            "role": "Counter",
            "token": "Background",
            "values": [
              "—",
              "#EEF2F9"
            ]
          },
          {
            "role": "—",
            "token": "Value",
            "values": [
              "—",
              "#6780A9"
            ]
          },
          {
            "role": "Trailing",
            "token": "Link and Edit label · Edit icon",
            "values": [
              "—",
              "#005CE5"
            ]
          },
          {
            "role": "Slots",
            "token": "Leading and trailing placeholder",
            "values": [
              "—",
              "#D7E0EF"
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
      "description": "One row per property of set <code>4363:11467</code>, in panel order. <code>Image-Slot</code> is a SLOT, so it is absent from the Style tab’s demo panel but mapped here. The title text and the trailing action have no Figma property behind them.",
      "rows": [
        {
          "figma": "TrailingMedia — None, Link, Icon, Edit",
          "swift": "<code>.ebTrailingMedia(.none / .link / .icon / .edit)</code>",
          "compose": "<code>trailingMedia = EBTrailingMedia.None / Link / Icon / Edit</code>"
        },
        {
          "figma": "hasLeadingMedia — False, True",
          "swift": "presence of the <code>.ebLeadingMedia { }</code> closure",
          "compose": "<code>leadingMedia: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasPreamble — true, false",
          "swift": "<code>.ebPreamble(String)</code> — omit to hide",
          "compose": "<code>preamble: String? = null</code>"
        },
        {
          "figma": "hasDescription — true, false",
          "swift": "<code>.ebDescription(String)</code> — omit to hide",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "hasCounter — true, false",
          "swift": "<code>.ebCounter(Int)</code> — omit to hide",
          "compose": "<code>counter: Int? = null</code>"
        },
        {
          "figma": "Image-Slot (slot) — 4 items, inside LeadingMedia",
          "swift": "<code>.ebLeadingMedia { EBAvatar(user) }</code>",
          "compose": "<code>leadingMedia = { EBAvatar(user) }</code>"
        },
        {
          "figma": "— no Figma property (the title)",
          "swift": "<code>EBSectionHeader(\"Heading\")</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "— no Figma property (the Link and Edit action)",
          "swift": "<code>.onTrailingAction { }</code>",
          "compose": "<code>onTrailingAction: (() -&gt; Unit)? = null</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Header/EBSectionHeader.swift",
        "compose": "android/components/header/EBSectionHeader.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "None",
        "swift": "<span class=\"cmt\">// TrailingMedia = None — content runs the full 312.</span>\n<span class=\"typ\">EBSectionHeader</span>(<span class=\"str\">\"Heading\"</span>)\n    .<span class=\"fn\">ebPreamble</span>(<span class=\"str\">\"Preamble\"</span>)\n    .<span class=\"fn\">ebDescription</span>(<span class=\"str\">\"Description goes here\"</span>)\n    .<span class=\"fn\">ebCounter</span>(9)",
        "compose": "<span class=\"cmt\">// TrailingMedia = None — content runs the full 312.</span>\n<span class=\"typ\">EBSectionHeader</span>(\n    title = <span class=\"str\">\"Heading\"</span>,\n    preamble = <span class=\"str\">\"Preamble\"</span>,\n    description = <span class=\"str\">\"Description goes here\"</span>,\n    counter = 9,\n    trailingMedia = <span class=\"typ\">EBTrailingMedia</span>.<span class=\"prp\">None</span>\n)"
      },
      {
        "subheading": "Link",
        "swift": "<span class=\"cmt\">// TrailingMedia = Link — a 61 × 22 \"View All\" label; content narrows to 235.</span>\n<span class=\"typ\">EBSectionHeader</span>(<span class=\"str\">\"Heading\"</span>)\n    .<span class=\"fn\">ebPreamble</span>(<span class=\"str\">\"Preamble\"</span>)\n    .<span class=\"fn\">ebDescription</span>(<span class=\"str\">\"Description goes here\"</span>)\n    .<span class=\"fn\">ebCounter</span>(9)\n    .<span class=\"fn\">ebTrailingMedia</span>(.<span class=\"prp\">link</span>)\n    .<span class=\"fn\">onTrailingAction</span> { openDetails() }",
        "compose": "<span class=\"cmt\">// TrailingMedia = Link — a 61 × 22 \"View All\" label; content narrows to 235.</span>\n<span class=\"typ\">EBSectionHeader</span>(\n    title = <span class=\"str\">\"Heading\"</span>,\n    preamble = <span class=\"str\">\"Preamble\"</span>,\n    description = <span class=\"str\">\"Description goes here\"</span>,\n    counter = 9,\n    trailingMedia = <span class=\"typ\">EBTrailingMedia</span>.<span class=\"prp\">Link</span>,\n    onTrailingAction = { openDetails() }\n)"
      },
      {
        "subheading": "Icon",
        "swift": "<span class=\"cmt\">// TrailingMedia = Icon — a 32 × 48 Icon-Slot; content narrows to 264.</span>\n<span class=\"typ\">EBSectionHeader</span>(<span class=\"str\">\"Heading\"</span>)\n    .<span class=\"fn\">ebPreamble</span>(<span class=\"str\">\"Preamble\"</span>)\n    .<span class=\"fn\">ebDescription</span>(<span class=\"str\">\"Description goes here\"</span>)\n    .<span class=\"fn\">ebCounter</span>(9)\n    .<span class=\"fn\">ebTrailingMedia</span>(.<span class=\"prp\">icon</span>)",
        "compose": "<span class=\"cmt\">// TrailingMedia = Icon — a 32 × 48 Icon-Slot; content narrows to 264.</span>\n<span class=\"typ\">EBSectionHeader</span>(\n    title = <span class=\"str\">\"Heading\"</span>,\n    preamble = <span class=\"str\">\"Preamble\"</span>,\n    description = <span class=\"str\">\"Description goes here\"</span>,\n    counter = 9,\n    trailingMedia = <span class=\"typ\">EBTrailingMedia</span>.<span class=\"prp\">Icon</span>\n)"
      },
      {
        "subheading": "Edit",
        "swift": "<span class=\"cmt\">// TrailingMedia = Edit — 24px icon + \"Edit details\", 112 × 24; content narrows to 184.</span>\n<span class=\"typ\">EBSectionHeader</span>(<span class=\"str\">\"Heading\"</span>)\n    .<span class=\"fn\">ebPreamble</span>(<span class=\"str\">\"Preamble\"</span>)\n    .<span class=\"fn\">ebDescription</span>(<span class=\"str\">\"Description goes here\"</span>)\n    .<span class=\"fn\">ebCounter</span>(9)\n    .<span class=\"fn\">ebTrailingMedia</span>(.<span class=\"prp\">edit</span>)\n    .<span class=\"fn\">onTrailingAction</span> { openDetails() }",
        "compose": "<span class=\"cmt\">// TrailingMedia = Edit — 24px icon + \"Edit details\", 112 × 24; content narrows to 184.</span>\n<span class=\"typ\">EBSectionHeader</span>(\n    title = <span class=\"str\">\"Heading\"</span>,\n    preamble = <span class=\"str\">\"Preamble\"</span>,\n    description = <span class=\"str\">\"Description goes here\"</span>,\n    counter = 9,\n    trailingMedia = <span class=\"typ\">EBTrailingMedia</span>.<span class=\"prp\">Edit</span>,\n    onTrailingAction = { openDetails() }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Heading trait",
        "ios": "Apply <code>.accessibilityAddTraits(.isHeader)</code> to the title so rotor navigation lands on it.",
        "android": "Apply <code>Modifier.semantics { heading() }</code> to the title text."
      },
      {
        "requirement": "Reading order",
        "ios": "Preamble → Title → Counter → Description → trailing action. Group the text stack with <code>.accessibilityElement(children: .combine)</code> and keep the action separate.",
        "android": "Merge the text stack with <code>Modifier.semantics(mergeDescendants = true)</code>; the trailing action stays its own node."
      },
      {
        "requirement": "Counter announcement",
        "ios": "The 24px Counter is a number with no unit. Give it a label — \"9 items\" — rather than letting VoiceOver read \"9\".",
        "android": "Set <code>contentDescription</code> on the Counter; a bare numeral is ambiguous."
      },
      {
        "requirement": "Trailing action target",
        "ios": "Link is 61 × 22 and Edit is 112 × 24 — both under 44pt tall. Extend the hit area with <code>.contentShape</code>; the header itself is not tappable.",
        "android": "Both under 48dp. Use <code>Modifier.minimumInteractiveComponentSize()</code> on the action only."
      },
      {
        "requirement": "Leading and trailing media",
        "ios": "Slot content is decorative unless it carries meaning. Mark an avatar or icon <code>.accessibilityHidden(true)</code> when the title already names it.",
        "android": "<code>contentDescription = null</code> for decorative slot content."
      },
      {
        "requirement": "Dynamic Type / font scaling",
        "ios": "The title is 22pt and the preamble 14pt. The frame is a fixed 100pt in Figma — let it grow when type scales rather than clipping.",
        "android": "Use <code>sp</code> throughout and let the row height follow <code>fontScale</code>."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Section Header to open a group of related content — a list, a card stack, a form section.",
        "dontText": "Don’t use it as a page title. It is 100 tall with a 22pt title; screens take an app bar or a Page Banner."
      },
      {
        "doText": "Pick one trailing action per header — <code>Link</code> for “View All”, <code>Edit</code> to change the section, <code>Icon</code> for a status or visual.",
        "dontText": "Don’t stack actions. <code>TrailingMedia</code> is a single enum; there is no variant with two."
      },
      {
        "doText": "Keep the title to one line. Content narrows to 122 wide with both leading media and <code>Edit</code>.",
        "dontText": "Don’t pair a long title with <code>hasLeadingMedia</code> and <code>Edit</code> — the frame is a fixed 100 and nothing in the component handles a wrap."
      },
      {
        "doText": "Turn <code>hasCounter</code> on only when the number summarises what follows.",
        "dontText": "Don’t use the counter as a badge or status. It is a neutral <code>#EEF2F9</code> chip with no alert colour."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic throughout — <code>LeadingMedia</code>, <code>HeaderContent</code>, <code>Trailing Media</code>, and real <code>SLOT</code> nodes for media (v2.2). One quirk: <code>CounterSlot</code> holds the Title as well as the Counter, and <code>DescriptionRow</code> holds that row as well as the Description, so both names describe less than they contain."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>TrailingMedia</code> is a clean four-value enum (v2.1). But <code>hasLeadingMedia</code> is a <strong>variant</strong> with Title Case <code>False</code> / <code>True</code> values, while <code>hasPreamble</code>, <code>hasDescription</code> and <code>hasCounter</code> are <strong>boolean properties</strong>. Four booleans, two mechanisms, and the variant breaks the lowercase <code>true</code>/<code>false</code> convention."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All three text layers resolve <code>matched</code> — <code>Primary/Label/Small</code>, <code>Primary/Headlines/Section</code>, <code>Secondary/Bold/Caption</code> — so typography is verifiably bound. Colour bindings cannot be read with the Talk To Figma plugin; the Style tab’s token column is <code>—</code> rather than asserted."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A text stack with an optional leading slot and a single trailing enum — maps to one <code>EBSectionHeader</code> view and composable. Content width follows a clean rule, 312 less each media and its 16 gap, verified against three variants."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Closed by owner decision in v2.2 — the header is a static section label and is not tappable. The <code>Link</code> and <code>Edit</code> actions carry their own states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Leading media is an <code>Image-Slot</code> SLOT and trailing media an instance in every variant (v2.2). The Edit glyph is a <code>shape_full</code> BOOLEAN_OPERATION inside the shared icon, owned by the iconography team."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "No longer blocked — the property collapse it waited on landed in v2.0. No SwiftUI or Compose mappings are registered yet; the native library does not exist."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 8,
      "description": "<code>TrailingMedia</code> (4) × <code>hasLeadingMedia</code> (2) = 8 variants, a complete matrix. <code>hasPreamble</code>, <code>hasDescription</code> and <code>hasCounter</code> are boolean properties and <code>Image-Slot</code> is a SLOT — none add variants. Every variant is 360 × 100; only the content width moves.",
      "columns": [
        "TrailingMedia",
        "hasLeadingMedia",
        "Node ID",
        "Content width",
        "Trailing media"
      ],
      "rows": [
        {
          "cells": [
            "None",
            "<code>False</code>",
            "<code>4363:11464</code>",
            "312px",
            "—"
          ]
        },
        {
          "cells": [
            "None",
            "<code>True</code>",
            "<code>4368:11366</code>",
            "250px",
            "—"
          ]
        },
        {
          "cells": [
            "Link",
            "<code>False</code>",
            "<code>4363:11461</code>",
            "235px",
            "61 × 22"
          ]
        },
        {
          "cells": [
            "Link",
            "<code>True</code>",
            "<code>4363:11463</code>",
            "173px",
            "61 × 22"
          ]
        },
        {
          "cells": [
            "Icon",
            "<code>False</code>",
            "<code>4363:11465</code>",
            "264px",
            "32 × 48"
          ]
        },
        {
          "cells": [
            "Icon",
            "<code>True</code>",
            "<code>4363:11466</code>",
            "202px",
            "32 × 48"
          ]
        },
        {
          "cells": [
            "Edit",
            "<code>False</code>",
            "<code>4363:11459</code>",
            "184px",
            "112 × 24"
          ]
        },
        {
          "cells": [
            "Edit",
            "<code>True</code>",
            "<code>4363:11462</code>",
            "122px",
            "112 × 24"
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
      "header": "Style + Code tabs rebuilt against the live component · node 4363:11467",
      "rows": [
        {
          "body": "<strong>The Code tab still described the pre-v2.0 component.</strong> Property Mapping listed eight booleans — <code>preamble</code>, <code>icon</code>, <code>left illustration</code>, <code>right illustration</code>, <code>link</code>, <code>edit</code>, <code>counter</code> — and the Variants Inventory counted 16 built of 256. v2.0 collapsed all of it to <code>TrailingMedia</code> × <code>hasLeadingMedia</code>, 8 variants.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard contradicted the resolved record on five criteria.</strong> C1 asked for a rename to Section Header (done v2.0), C2 for the boolean collapse (v2.0), C4 for real trailing instances (v2.2), C5 for state coverage (ruled out of scope v2.2), C6 for vector slots (v2.2). Rescored C1, C3, C4 and C6 Ready and C5 Not Applicable.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel.</strong> Five cards on retired <code>18430:*</code> nodes, named for content combinations — <code>Title only</code>, <code>Full stack</code>, <code>Title + trailing link</code> — became one card carrying <code>TrailingMedia</code>, <code>hasLeadingMedia</code>, <code>hasPreamble</code>, <code>hasDescription</code> and <code>hasCounter</code>. <code>Image-Slot</code> is a static row, since a slot takes no control.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography resolved to style names.</strong> Preamble <code>Primary/Label/Small</code>, title <code>Primary/Headlines/Section</code>, description <code>Secondary/Bold/Caption</code> — all three <code>matched</code>, which is also the first verified evidence for C3.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>Content width documented as a rule.</strong> 312 less the leading media (46 + 16 gap) and the trailing media (its width + 16) — checked against three measured variants (202, 173, 184) and now a live Layout row and an Inventory column.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The preview centres content vertically; Figma does not.</strong> Figma top-anchors all three blocks at <code>y=24</code>, leaving 24 above and 16 below a full stack. Centred at the owner’s direction so boolean-off states stop reading top-heavy; the 4px difference is recorded on the Style tab.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Installation, Usage Snippets and Usage Guidelines were empty.</strong> All written — one snippet per <code>TrailingMedia</code> value — and the Gradle artifact and package derive from the <code>Header</code> family.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Spec rows no longer overlap.</strong> A long value ran under its key and a wrapped value floated its key between lines. Fixed site-wide in the row layout; verified across every component at four widths.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Four booleans, two mechanisms.</strong> <code>hasLeadingMedia</code> is a variant with Title Case <code>False</code> / <code>True</code> values; <code>hasPreamble</code>, <code>hasDescription</code> and <code>hasCounter</code> are boolean properties. The variant also breaks the lowercase <code>true</code>/<code>false</code> convention.",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Vertical padding is 24 above, 16 below.</strong> All three blocks are top-anchored in a fixed 100 frame. Setting the row’s counter-axis alignment to center would balance it and make the preview and the component agree.",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Two frames are named for less than they hold.</strong> <code>CounterSlot</code> contains the Title as well as the Counter; <code>DescriptionRow</code> contains that row as well as the Description.",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Trailing actions are under the minimum touch target.</strong> Link is 61 × 22 and Edit 112 × 24 — both under 44pt and 48dp tall.",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Colour bindings unread.</strong> The plugin returns no variable bindings, so the Style tab’s colour table carries <code>—</code> for every token path.",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>v2.0.0 through v2.3.0 have no changelog entries.</strong> The Overview tab records nine resolutions across those four versions, but the changelog jumps from 1.0.0 to here. Their dates are not recorded anywhere readable, so they are not invented.",
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
      "header": "Initial Assessment · node 18430:2919",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Rename to Section Header, collapse 8 boolean props into 3 slots (<code>preamble</code>, <code>leadingMedia</code>, <code>trailing</code>). <span class=\"tag-open tag-c1 tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>Family restructure plan</strong> — 4 \"Header*\" components should be renamed by role; \"With Logo\" merges into Title Bar; \"Transaction\" moves out of family. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>Trailing actions should be real components</strong> — Link/Edit/Counter should be Text Button / Icon Button / Badge instances, not drawn in-place. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked until property model collapses. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
