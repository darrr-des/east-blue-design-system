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
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "<code>preamble: boolean</code>",
          "swift": "<code>preamble?: String</code>",
          "compose": "<code>preamble: String?</code>"
        },
        {
          "figma": "(implicit)",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code> (required)"
        },
        {
          "figma": "<code>description: boolean</code>",
          "swift": "<code>description?: String</code>",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "<code>icon</code> + <code>left illustration</code>",
          "swift": "<code>leadingMedia?: icon | illustration</code>",
          "compose": "<code>leadingMedia: EBLeadingMedia?</code>"
        },
        {
          "figma": "<code>right illustration</code> + <code>link</code> + <code>edit</code> + <code>counter</code>",
          "swift": "<code>trailing?: illustration | link | edit | counter</code>",
          "compose": "<code>trailing: EBHeaderTrailing?</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Heading trait",
        "ios": "Apply <code>.accessibilityAddTraits(.isHeader)</code> to the title.",
        "android": "Apply <code>Modifier.semantics { heading() }</code> to the title text."
      },
      {
        "requirement": "Trailing action label",
        "ios": "Link/Edit/Counter must each carry their own accessibility label. Counter should announce count (\"12 unread\").",
        "android": "Same — each trailing slot owns its own semantics."
      },
      {
        "requirement": "Minimum touch target",
        "ios": "Trailing interactive element must be ≥44×44pt.",
        "android": "Trailing interactive element must be ≥48×48dp."
      },
      {
        "requirement": "Reading order",
        "ios": "Preamble → Title → Description → Trailing. VoiceOver follows DOM order.",
        "android": "Same reading order — TalkBack follows composition order."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "\"Header\" prefix shared with 3 structurally different components. Rename to <strong>Section Header</strong>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "8 booleans → 3 props (<code>preamble</code>, <code>leadingMedia</code>, <code>trailing</code>). Drops 16 variants to ~6 canonical patterns."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Typography and color bound to DS tokens."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to a simple <code>EBSectionHeader</code> view/composable once slots collapse. Trailing actions should be real Button/Badge instances, not drawn."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Header itself is static; trailing actions inherit Button/Link state coverage once they become instances."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Confirm leading/trailing \"illustration\" slots accept vector instances (Avatar / Icon / custom). Placeholder circle suggests unverified."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Cannot map until property model collapses and trailing slots resolve to real components."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 16,
      "description": "Today: 8 independent boolean properties — <code>preamble</code>, <code>description</code>, <code>icon</code>, <code>left illustration</code>, <code>right illustration</code>, <code>link</code>, <code>edit</code>, <code>counter</code>. 2⁸ = <strong>256 theoretical combos</strong>, only <strong>16 built</strong> — most combinations are either invalid or unsupported.",
      "columns": [
        "Group",
        "Count",
        "Slots enabled"
      ],
      "rows": [
        {
          "cells": [
            "<strong>Text-only</strong>",
            "4",
            "preamble × description permutations"
          ]
        },
        {
          "cells": [
            "<strong>With right icon (top-aligned)</strong>",
            "4",
            "preamble × description × icon"
          ]
        },
        {
          "cells": [
            "<strong>With leading illustration</strong>",
            "2",
            "description × left illustration"
          ]
        },
        {
          "cells": [
            "<strong>With trailing illustration</strong>",
            "2",
            "description × right illustration"
          ]
        },
        {
          "cells": [
            "<strong>With link (View All)</strong>",
            "2",
            "description × link"
          ]
        },
        {
          "cells": [
            "<strong>With edit</strong>",
            "1",
            "edit only"
          ]
        },
        {
          "cells": [
            "<strong>With counter</strong>",
            "1",
            "counter only"
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
