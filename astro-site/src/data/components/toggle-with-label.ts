import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/toggle-with-label.js`.
const toggleWithLabelDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'disabled', label: 'Disabled' },
          { value: 'pressed', label: 'Pressed' },
        ],
      },
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'large',
        options: [
          { value: 'large', label: 'Large' },
          { value: 'medium', label: 'Medium' },
          { value: 'small', label: 'Small' },
        ],
      },
      {
        label: 'isSelected',
        prop: 'isSelected',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
      {
        label: 'hasSubtext',
        prop: 'hasSubtext',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
    ],
  },
];

export const toggleWithLabel: ComponentData = {
  "meta": {
    "slug": "toggle-with-label",
    "name": "Toggle - With Label",
    "node": "26510:37680",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=26510-37680",
    "description": "A toggle paired with a label and an optional subtext message, in a single row. 18 variants mirroring the Toggle atom — <code>State</code> (Default / Pressed / Disabled) × <code>Size</code> (Large / Medium / Small) × <code>isSelected</code> (true / false) — nesting the Toggle instance plus a <code>#label</code> and a composed <code>Subtext Message</code>.",
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
    "navGroup": "Toggle",
    "verdict": {
      "kind": "keep",
      "title": "Rebuilt — real component, in sync with the atom",
      "text": "Promoted from a static frame to a real component that nests the Toggle atom as an instance and adds a <code>#label</code> plus a composed <code>Subtext Message</code>. Schema mirrors the atom exactly — <code>State</code> (Default / Pressed / Disabled) × <code>Size</code> × lowercase <code>isSelected</code>. The one remaining item is the subtext: it is currently always present (showing error copy even at rest), and should become a show/hide boolean bound to the Subtext Message's visibility so it appears only when there is helper or error text."
    }
  },
  "overview": {
    "inContextNote": "Labeled toggle is the primary form of Toggle shown in product. Settings rows, feature opt-ins, biometric/notification preferences — nearly all consumer-facing toggles are labeled.",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "A real component now — full 18-variant property surface (<code>State</code> × <code>Size</code> × <code>isSelected</code>), with an editable <code>#label</code> and a composed Subtext Message. Drops into settings rows, form opt-ins, and list items without detaching."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own label typography and row layout, token-bound. The toggle and the subtext are both real instances, so their styling flows from the canonical components."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Schema mirrors the Toggle atom exactly and follows the Radio Button With Label pattern (real component, label + subtext). The one gap: the Subtext Message is always present rather than gated by a show/hide boolean, so a plain row renders error copy at rest. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Nests the canonical <code>Toggle</code> instance (atom changes propagate) and a <code>Subtext Message</code> instance for helper/error text. Both compose cleanly rather than being redrawn."
      }
    ],
    "behavior": [
      {
        "state": "Off / On",
        "ios": "yes",
        "android": "yes",
        "property": "isSelected=false / true",
        "notes": "Label left, nested Toggle right. The toggle reflects the row's isSelected."
      },
      {
        "state": "Pressed",
        "ios": "yes",
        "android": "yes",
        "property": "State=Pressed",
        "notes": "Pressed feedback on the toggle; the whole row is the intended tap target on native."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Toggle and label both mute. No Pressed pairing, matching the atom."
      },
      {
        "state": "Subtext / error message",
        "ios": "yes",
        "android": "yes",
        "property": "Subtext Message instance",
        "notes": "Helper or error text below the row via a composed Subtext Message. Currently always shown — should become a show/hide boolean so it appears only when needed."
      }
    ],
    "resolved": [
      {
        "body": "v2.0: Promoted from a static frame to a real component — it now has a full property surface (<code>State</code> × <code>Size</code> × <code>isSelected</code>) and an editable <code>#label</code>, so consumers no longer detach and rebuild. (C2)"
      },
      {
        "body": "v2.0: Composes the canonical Toggle as a real instance (linked to the local atom), so atom changes propagate to the labeled row. (C4)"
      },
      {
        "body": "v2.1: Schema aligned to the Toggle atom — <code>State</code> (Default / Pressed / Disabled) with pressed folded in, and lowercase <code>isSelected=true/false</code>. 18 variants, mirroring the atom. (C2)"
      },
      {
        "body": "v2.1: Helper / error text moved to a composed <code>Subtext Message</code> instance rather than a separate <code>hasErrorText</code> variant axis — fewer variants, and the message inherits the canonical component. (C2)"
      },
      {
        "body": "v2.1: The always-present <code>Subtext Message</code> confirmed <strong>intentional</strong> — reviewed and accepted as a standing part of the labeled row, not gated behind a boolean. (C2)"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Structure and schema are settled. Registration is unblocked but the SwiftUI / Compose mappings are not yet wired and the native component does not exist — snippets remain a Planned API.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Register Code Connect mapping to <code>EBToggleRow</code>.",
        "body": "Wire <code>State</code>, <code>Size</code>, and <code>isSelected</code> 1:1, forwarding them to the nested <code>EBToggle</code>, and expose the label + subtext as content.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Promote from frame to a real component.",
        "body": "v2.0: Applied — full 18-variant property set, editable label, nested Toggle instance.",
        "tag": "Composition"
      },
      {
        "headline": "Inherit Toggle state + size from the inner instance.",
        "body": "v2.1: Applied — <code>State</code> and <code>Size</code> mirror the atom and forward down to the nested Toggle.",
        "tag": "Property"
      },
      {
        "headline": "Add helper / error text.",
        "body": "v2.1: Applied via a composed <code>Subtext Message</code> instance rather than a variant axis (visibility gating still to add).",
        "tag": "Slot"
      }
    ],
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"toggle-with-label-demo-preview\"><div class=\"eb-preview eb-preview-setting-row\"><div class=\"eb-preview-setting-row__labels\"><div class=\"eb-preview-setting-row__label\"><span>Push notifications</span></div><div class=\"eb-preview-setting-row__desc\">Get alerts when money moves</div></div><span class=\"eb-preview eb-preview-toggle eb-preview-toggle--medium eb-preview-toggle--on eb-preview-toggle--interactive\" role=\"switch\" aria-checked=\"true\" tabindex=\"0\" onclick=\"event.stopPropagation();_twlFlip();\" onkeydown=\"if(event.key===' '||event.key==='Enter'){event.preventDefault();_twlFlip();}\"><span class=\"eb-preview-toggle__knob\"></span></span></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><input type=\"text\" id=\"toggle-with-label-ctrl-label\" class=\"demo-panel-select demo-panel-input\" value=\"Push notifications\" oninput=\"_toggleWithLabelUpdate()\" placeholder=\"Label text\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"toggle-with-label-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"Get alerts when money moves\" oninput=\"_toggleWithLabelUpdate()\" placeholder=\"Optional — leave empty to hide\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties (proposed)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isSelected</span><select id=\"toggle-with-label-ctrl-selected\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select id=\"toggle-with-label-ctrl-state\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"default\" selected=\"\">default</option><option value=\"disabled\">disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">placement</span><select id=\"toggle-with-label-ctrl-placement\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"trailing\" selected=\"\">trailing</option><option value=\"leading\">leading</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">required</span><select id=\"toggle-with-label-ctrl-required\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">helper</span><select id=\"toggle-with-label-ctrl-helper\" class=\"demo-panel-select\" onchange=\"_toggleWithLabelUpdate()\"><option value=\"none\" selected=\"\">none</option><option value=\"helper\">helper</option><option value=\"error\">error</option></select></div></div></div></div>"
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "twl-spec-main",
        "demoKey": "main",
        "title": "Toggle - With Label",
        "node": "26510:37680",
        "description": "",
        "previewHtml": "<div id=\"toggle-with-label-spec-main\" class=\"spec-preview-body\"><svg width=\"360\" height=\"72\" viewBox=\"0 0 180 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"twlshadow-large-off\" x=\"0\" y=\"0\" width=\"180\" height=\"36\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/><feMorphology radius=\"8\" operator=\"erode\" in=\"SourceAlpha\" result=\"shadow\"/><feOffset dy=\"8\"/><feGaussianBlur stdDeviation=\"6\"/><feComposite in2=\"hardAlpha\" operator=\"out\"/><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.00784314 0 0 0 0 0.054902 0 0 0 0 0.133333 0 0 0 0.16 0\"/><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"shadow\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"shadow\" result=\"shape\"/></filter></defs><text class=\"twl-label\" x=\"2\" y=\"12\" font-size=\"16\" font-weight=\"600\" fill=\"#445C85\" dominant-baseline=\"central\">Label</text><rect x=\"132\" width=\"48\" height=\"24\" rx=\"12\" fill=\"#D7E0EF\"/><g filter=\"url(#twlshadow-large-off)\"><circle cx=\"144\" cy=\"12\" r=\"10\" fill=\"#FFFFFF\"/></g></svg></div>",
        "demoControls": toggleWithLabelDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "State",
                "value": "Default",
                "prop": "state"
              },
              {
                "key": "Size",
                "value": "Large",
                "prop": "size"
              },
              {
                "key": "isSelected",
                "value": "false",
                "prop": "isSelected"
              },
              {
                "key": "hasSubtext",
                "value": "False",
                "prop": "hasSubtext"
              },
              {
                "key": "Nested instances",
                "value": "Toggle · 26510:37625 · Subtext Message · 11855:8764",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Label",
                "value": "#445C85",
                "token": "—"
              },
              {
                "key": "Toggle track",
                "value": "#D7E0EF",
                "token": "—",
                "variants": {
                  "state:pressed|isSelected:false": {
                    "value": "#C2CFE5"
                  },
                  "state:disabled|isSelected:false": {
                    "value": "#EEF2F9"
                  },
                  "state:default|isSelected:true": {
                    "value": "#005CE5"
                  },
                  "state:pressed|isSelected:true": {
                    "value": "#2340A9"
                  },
                  "state:disabled|isSelected:true": {
                    "value": "#9BC5FD"
                  }
                }
              },
              {
                "key": "Toggle knob",
                "value": "#FFFFFF",
                "token": "—"
              },
              {
                "key": "Knob shadow",
                "value": "#020E22 @ 16%",
                "token": "—"
              },
              {
                "key": "Subtext",
                "value": "#6780A9",
                "token": "—",
                "variants": {
                  "hasSubtext:false": {
                    "hide": true
                  }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label",
                "value": "Primary/Label/Light/Base",
                "mono": true,
                "variants": {
                  "size:small": {
                    "value": "Primary/Label/Light/Small"
                  }
                }
              },
              {
                "key": "Subtext",
                "value": "Secondary/Bold/Caption",
                "mono": true,
                "variants": {
                  "hasSubtext:false": {
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
                "value": "24px",
                "mono": true,
                "variants": {
                  "size:large|hasSubtext:true": {
                    "value": "46px — row 24 + subtext 22"
                  },
                  "size:medium": {
                    "value": "20px"
                  },
                  "size:medium|hasSubtext:true": {
                    "value": "42px — row 20 + subtext 22"
                  },
                  "size:small": {
                    "value": "16px"
                  },
                  "size:small|hasSubtext:true": {
                    "value": "38px — row 16 + subtext 22"
                  }
                }
              },
              {
                "key": "Width",
                "value": "180px",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "None on the row — the nested Toggle is a pill",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "0",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "0",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0 — the label frame fills to the toggle, and the subtext sits flush below the row",
                "mono": true
              },
              {
                "key": "Label frame",
                "value": "132 × 16",
                "mono": true,
                "variants": {
                  "size:medium": {
                    "value": "140 × 16"
                  },
                  "size:small": {
                    "value": "148 × 14"
                  }
                }
              },
              {
                "key": "Toggle",
                "value": "48 × 24",
                "mono": true,
                "variants": {
                  "size:medium": {
                    "value": "40 × 20"
                  },
                  "size:small": {
                    "value": "32 × 16"
                  }
                }
              },
              {
                "key": "Subtext",
                "value": "180 × 22 — text inset 2 left, 4 top; identical at every Size",
                "mono": true,
                "variants": {
                  "hasSubtext:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Alignment",
                "value": "Center — the label frame is centred in the row at every size",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggleRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>isOn<span class=\"syn-punc\">: </span>$isOn<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span>controlSize<span class=\"syn-punc\">(.</span>large<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToggleRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    checked <span class=\"syn-eq\">=</span> false<span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> checked <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">},</span>\n    size <span class=\"syn-eq\">=</span> EBToggleSize<span class=\"syn-punc\">.</span>Large<span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> true\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State and isSelected",
        "description": "The row owns one colour — the label. The track and knob belong to the nested <code>Toggle</code> (<code>26510:37625</code>) and are identical to the atom; the subtext belongs to a nested <code>Subtext Message</code>. <strong>The label is <code>#445C85</code> in all 18 variants — it does not mute when <code>State=Disabled</code>, and neither does the subtext.</strong> Token paths could not be read; the Talk To Figma plugin returns no variable bindings.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Row",
            "token": "#label · all 18 variants",
            "values": [
              "—",
              "#445C85"
            ]
          },
          {
            "role": "Toggle track · isSelected = false",
            "token": "Default",
            "values": [
              "—",
              "#D7E0EF"
            ]
          },
          {
            "role": "—",
            "token": "Pressed",
            "values": [
              "—",
              "#C2CFE5"
            ]
          },
          {
            "role": "—",
            "token": "Disabled",
            "values": [
              "—",
              "#EEF2F9"
            ]
          },
          {
            "role": "Toggle track · isSelected = true",
            "token": "Default",
            "values": [
              "—",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "Pressed",
            "values": [
              "—",
              "#2340A9"
            ]
          },
          {
            "role": "—",
            "token": "Disabled",
            "values": [
              "—",
              "#9BC5FD"
            ]
          },
          {
            "role": "Toggle knob",
            "token": "All 18 variants",
            "values": [
              "—",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "Shadow — y 8, blur 12, spread −8",
            "values": [
              "—",
              "#020E22 @ 16%"
            ]
          },
          {
            "role": "Subtext",
            "token": "#subtext · every State and Size",
            "values": [
              "—",
              "#6780A9"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:toggle:2.1.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.toggle.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths — the row ships in the same Toggle bundle as the atom."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>26510:37680</code>, in panel order. The nested <code>Toggle</code> is not exposed on the row, so nothing about the switch itself is reachable through this component.",
      "rows": [
        {
          "figma": "State — Default, Disabled, Pressed",
          "swift": "<code>.disabled(true)</code> for Disabled; Pressed is the press gesture on the row, not a parameter",
          "compose": "<code>enabled = false</code> for Disabled; Pressed comes from the row’s <code>interactionSource</code>"
        },
        {
          "figma": "Size — Large, Medium, Small",
          "swift": "<code>.controlSize(.large / .regular / .small)</code>",
          "compose": "<code>size = EBToggleSize.Large / Medium / Small</code>"
        },
        {
          "figma": "isSelected — false, true",
          "swift": "<code>isOn: Binding&lt;Bool&gt;</code>",
          "compose": "<code>checked: Boolean</code>"
        },
        {
          "figma": "hasSubtext — true, false",
          "swift": "<code>subtext: String?</code> — omit to hide",
          "compose": "<code>subtext: String? = null</code>"
        },
        {
          "figma": "— no Figma property (the row label)",
          "swift": "<code>EBToggleRow(\"Label\", …)</code>",
          "compose": "<code>label: String</code>"
        },
        {
          "figma": "— no Figma property (the change callback)",
          "swift": "the binding writes back — <code>$isOn</code>",
          "compose": "<code>onCheckedChange: (Boolean) -&gt; Unit</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Toggle/EBToggleRow.swift",
        "compose": "android/components/toggle/EBToggleRow.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Label and toggle",
        "swift": "<span class=\"cmt\">// hasSubtext = false — the row is 180 × 24 at Large.</span>\n<span class=\"cmt\">// The label frame fills to the switch, so the row is space-between.</span>\n<span class=\"typ\">EBToggleRow</span>(<span class=\"str\">\"Push notifications\"</span>, isOn: $notificationsOn)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">large</span>)",
        "compose": "<span class=\"cmt\">// hasSubtext = false — the row is 180 × 24 at Large.</span>\n<span class=\"cmt\">// The label frame fills to the switch, so the row is space-between.</span>\n<span class=\"typ\">EBToggleRow</span>(\n    label = <span class=\"str\">\"Push notifications\"</span>,\n    checked = notificationsOn,\n    onCheckedChange = { notificationsOn = it },\n    size = <span class=\"typ\">EBToggleSize</span>.<span class=\"prp\">Large</span>\n)"
      },
      {
        "subheading": "With subtext",
        "swift": "<span class=\"cmt\">// hasSubtext = true adds a 22pt Subtext Message flush below</span>\n<span class=\"cmt\">// the row — 24 becomes 46. The subtext does not change with</span>\n<span class=\"cmt\">// Size or State.</span>\n<span class=\"typ\">EBToggleRow</span>(<span class=\"str\">\"Push notifications\"</span>, isOn: $notificationsOn)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">large</span>)\n    .<span class=\"fn\">ebSubtext</span>(<span class=\"str\">\"You can change this later in Settings.\"</span>)",
        "compose": "<span class=\"cmt\">// hasSubtext = true adds a 22dp Subtext Message flush below</span>\n<span class=\"cmt\">// the row — 24 becomes 46. The subtext does not change with</span>\n<span class=\"cmt\">// Size or State.</span>\n<span class=\"typ\">EBToggleRow</span>(\n    label = <span class=\"str\">\"Push notifications\"</span>,\n    checked = notificationsOn,\n    onCheckedChange = { notificationsOn = it },\n    subtext = <span class=\"str\">\"You can change this later in Settings.\"</span>\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"cmt\">// Only the track mutes. The label stays #445C85 and the</span>\n<span class=\"cmt\">// subtext #6780A9, so dim the row yourself if the whole</span>\n<span class=\"cmt\">// setting is meant to read as unavailable.</span>\n<span class=\"typ\">EBToggleRow</span>(<span class=\"str\">\"Push notifications\"</span>, isOn: .constant(<span class=\"kw\">true</span>))\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"cmt\">// Only the track mutes. The label stays #445C85 and the</span>\n<span class=\"cmt\">// subtext #6780A9, so dim the row yourself if the whole</span>\n<span class=\"cmt\">// setting is meant to read as unavailable.</span>\n<span class=\"typ\">EBToggleRow</span>(\n    label = <span class=\"str\">\"Push notifications\"</span>,\n    checked = <span class=\"kw\">true</span>,\n    onCheckedChange = { },\n    enabled = <span class=\"kw\">false</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Label and switch are one element",
        "ios": "VoiceOver should say \"Push notifications, on\" in one utterance — combine the label and the toggle rather than exposing two elements.",
        "android": "Use <code>Modifier.toggleable</code> on the row so semantics merge into a single announcement."
      },
      {
        "requirement": "Whole row is the target",
        "ios": "Put the tap on the row, not the 48 × 24pt switch. Wrap in a <code>Button</code> or <code>.onTapGesture</code> that flips the binding.",
        "android": "<code>Modifier.toggleable</code> on the row gives the same target and the correct <code>Role.Switch</code>."
      },
      {
        "requirement": "Minimum target",
        "ios": "The row is 24 / 20 / 16pt tall — every size is under 44 × 44pt even with the whole row tappable. Pad the container.",
        "android": "Same three heights, all under 48 × 48dp. Use <code>Modifier.minimumInteractiveComponentSize()</code>."
      },
      {
        "requirement": "Subtext announcement",
        "ios": "When <code>hasSubtext</code> is on, expose the subtext as <code>.accessibilityHint</code> so it follows the label and state.",
        "android": "Merge it into the toggleable row’s semantics as a second line; do not leave it as a separate focusable node."
      },
      {
        "requirement": "Disabled",
        "ios": "<code>.disabled(true)</code> blocks interaction and VoiceOver announces \"dimmed\" — which the visuals do not, since only the track mutes.",
        "android": "<code>enabled = false</code> on the row; TalkBack announces \"disabled\"."
      },
      {
        "requirement": "Dynamic Type / font scaling",
        "ios": "The label is 16pt at Large and Medium and 14pt at Small; the subtext is 12pt. All must scale, and the row height has to grow with them.",
        "android": "Use <code>sp</code> throughout and let the 24 / 20 / 16dp row expand with <code>fontScale</code>."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use the row wherever a toggle needs naming — settings lists, opt-ins, permission screens. It bundles the label, the switch and an optional subtext at a fixed rhythm.",
        "dontText": "Don’t build your own label-plus-toggle row. The label frame fills to the switch, so a hand-rolled version drifts as soon as the label wraps."
      },
      {
        "doText": "Turn on <code>hasSubtext</code> for the consequence of the setting — \"You can change this later in Settings\". It adds 22 to the row height.",
        "dontText": "Don’t use the subtext for validation. It has one colour, <code>#6780A9</code>, at every State — there is no error treatment on this row."
      },
      {
        "doText": "Match <code>Size</code> to the density of the list — Large (24) for a standalone setting, Small (16) for a dense preferences screen.",
        "dontText": "Don’t expect the label to shrink between Large and Medium. Both use <code>Primary/Label/Light/Base</code> at 16 / 16; only Small steps down."
      },
      {
        "doText": "Dim the whole row yourself when a setting is unavailable, on top of <code>State=Disabled</code>.",
        "dontText": "Don’t rely on the component for that. Disabled mutes the track alone — the label stays <code>#445C85</code> and the subtext <code>#6780A9</code>, so the row still reads as live."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic throughout — a <code>container</code> holding a <code>label</code> frame with <code>#label</code> and a linked <code>Toggle</code> instance, plus a <code>Subtext Message</code> instance below. The static frame the 1.0.0 assessment found is gone (v2.0)."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Names are correct — PascalCase variants, <code>is</code> and <code>has</code> prefixes with lowercase values. But the two booleans are built differently: <code>isSelected</code> is a <strong>variant</strong> with <code>true</code>/<code>false</code> values while <code>hasSubtext</code> is a <strong>boolean property</strong>. Only one doubles the matrix. Segmented Control - Group has the same split."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Nothing but the track responds to <code>State</code> — the label holds <code>#445C85</code> and the subtext <code>#6780A9</code> through Disabled, so a disabled row has no muted text token to bind. Bindings themselves cannot be read with the Talk To Figma plugin."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A labelled row with an optional second line — <code>LabeledContent</code> around a <code>Toggle</code> on iOS, a <code>Row</code> with <code>Modifier.toggleable</code> on Compose. The \"cannot map a frame\" blocker from 1.0.0 is gone."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default, Disabled and Pressed at all three sizes in both selections — the complete 18, mirroring the Toggle atom exactly. Error is not a state on this row; the subtext carries no error treatment."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No assets. The only graphic is the nested Toggle, which owns its own track and knob."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "No longer blocked — the component exists as of v2.0 with a full property surface. No SwiftUI or Compose mappings are registered yet; the native library does not exist."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 18,
      "description": "<code>State</code> (3) × <code>Size</code> (3) × <code>isSelected</code> (2) = 18 variants, the same matrix as the Toggle atom. <code>hasSubtext</code> is a boolean property — it reveals the nested Subtext Message and adds 22 to the row height without adding a variant. Row width is 180 at every size; the track fill below belongs to the nested Toggle.",
      "columns": [
        "State",
        "Size",
        "isSelected",
        "Node ID",
        "Row size",
        "Track fill"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "Large",
            "<code>false</code>",
            "<code>26510:37681</code>",
            "180 × 24",
            "#D7E0EF"
          ]
        },
        {
          "cells": [
            "Default",
            "Medium",
            "<code>false</code>",
            "<code>26510:37685</code>",
            "180 × 20",
            "#D7E0EF"
          ]
        },
        {
          "cells": [
            "Default",
            "Small",
            "<code>false</code>",
            "<code>26510:37689</code>",
            "180 × 16",
            "#D7E0EF"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Large",
            "<code>false</code>",
            "<code>26510:37729</code>",
            "180 × 24",
            "#EEF2F9"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Medium",
            "<code>false</code>",
            "<code>26510:37733</code>",
            "180 × 20",
            "#EEF2F9"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Small",
            "<code>false</code>",
            "<code>26510:37737</code>",
            "180 × 16",
            "#EEF2F9"
          ]
        },
        {
          "cells": [
            "Pressed",
            "Large",
            "<code>false</code>",
            "<code>26510:37693</code>",
            "180 × 24",
            "#C2CFE5"
          ]
        },
        {
          "cells": [
            "Pressed",
            "Medium",
            "<code>false</code>",
            "<code>26510:37697</code>",
            "180 × 20",
            "#C2CFE5"
          ]
        },
        {
          "cells": [
            "Pressed",
            "Small",
            "<code>false</code>",
            "<code>26510:37701</code>",
            "180 × 16",
            "#C2CFE5"
          ]
        },
        {
          "cells": [
            "Default",
            "Large",
            "<code>true</code>",
            "<code>26510:37705</code>",
            "180 × 24",
            "#005CE5"
          ]
        },
        {
          "cells": [
            "Default",
            "Medium",
            "<code>true</code>",
            "<code>26510:37709</code>",
            "180 × 20",
            "#005CE5"
          ]
        },
        {
          "cells": [
            "Default",
            "Small",
            "<code>true</code>",
            "<code>26510:37713</code>",
            "180 × 16",
            "#005CE5"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Large",
            "<code>true</code>",
            "<code>26510:37741</code>",
            "180 × 24",
            "#9BC5FD"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Medium",
            "<code>true</code>",
            "<code>26510:37745</code>",
            "180 × 20",
            "#9BC5FD"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Small",
            "<code>true</code>",
            "<code>26510:37749</code>",
            "180 × 16",
            "#9BC5FD"
          ]
        },
        {
          "cells": [
            "Pressed",
            "Large",
            "<code>true</code>",
            "<code>26510:37717</code>",
            "180 × 24",
            "#2340A9"
          ]
        },
        {
          "cells": [
            "Pressed",
            "Medium",
            "<code>true</code>",
            "<code>26510:37721</code>",
            "180 × 20",
            "#2340A9"
          ]
        },
        {
          "cells": [
            "Pressed",
            "Small",
            "<code>true</code>",
            "<code>26510:37725</code>",
            "180 × 16",
            "#2340A9"
          ]
        }
      ],
      "summary": {
        "columns": [
          "State",
          "isSelected",
          "Count",
          "Track fill"
        ],
        "rows": [
          {
            "cells": [
              "Default",
              "<code>false</code>",
              "3",
              "#D7E0EF"
            ]
          },
          {
            "cells": [
              "Disabled",
              "<code>false</code>",
              "3",
              "#EEF2F9"
            ]
          },
          {
            "cells": [
              "Pressed",
              "<code>false</code>",
              "3",
              "#C2CFE5"
            ]
          },
          {
            "cells": [
              "Default",
              "<code>true</code>",
              "3",
              "#005CE5"
            ]
          },
          {
            "cells": [
              "Disabled",
              "<code>true</code>",
              "3",
              "#9BC5FD"
            ]
          },
          {
            "cells": [
              "Pressed",
              "<code>true</code>",
              "3",
              "#2340A9"
            ]
          }
        ]
      },
      "collapseLabel": "View full State × Size × isSelected breakdown (18 rows)"
    }
  },
  "changelog": [
    {
      "version": "2.1.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 26510:37680",
      "rows": [
        {
          "body": "<strong>The Code tab still described a layout frame.</strong> C1 read \"Not a component — just a layout frame\", C2 \"No properties\", C4 \"Cannot map a frame\", and the Variants Inventory listed a single <code>18482:36538</code> node. The component was promoted in v2.0 and has had a full property surface since.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel.</strong> Three cards — one on the retired node, two titled \"Proposed\" with empty <code>node</code> fields — replaced by a single card carrying <code>State</code> · <code>Size</code> · <code>isSelected</code> · <code>hasSubtext</code>.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>A <code>Placement</code> control was documented that Figma never had.</strong> The panel offered leading / trailing; the toggle is flush right in all 18 variants and there is no such axis. Property Mapping listed it too, along with <code>description</code>, <code>required</code>, <code>helper</code> and <code>error</code> — none of them properties of this set.",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong><code>hasSubtext</code> documented for the first time.</strong> The boolean defaults to <code>False</code> and reveals a nested Subtext Message — 180 × 22, flush below the row, taking the component from 24 / 20 / 16 to 46 / 42 / 38. It is now a panel control and drives the Height, Colors and Typography rows.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Variants Inventory rebuilt.</strong> One row for a \"layout frame\" plus a note proposing 40 variants; now 18 rows on <code>26510:37681</code>–<code>26510:37749</code> behind a six-row summary, each carrying its row size and the nested track fill.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Per-size geometry recorded.</strong> Row 180 × 24 / 20 / 16, label frame 132 / 140 / 148 wide, nested Toggle 48 × 24 / 40 × 20 / 32 × 16. Gap is 0 — the label frame fills to the toggle, so the row is space-between rather than a fixed gap.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography resolved to style names.</strong> <code>Primary/Label/Light/Base</code> at Large and Medium, <code>Primary/Label/Light/Small</code> at Small, and <code>Secondary/Bold/Caption</code> for the subtext — all <code>matched</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>Installation, Usage Snippets and Usage Guidelines were empty.</strong> Installation also carried <code>planned: false</code> with no blocks, so the Planned API badge never rendered. All written; the artifact and package derive from the <code>Toggle</code> family.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Accessibility rewritten against the real properties.</strong> Four of five rows covered <code>required</code>, <code>error</code> and <code>description</code>, none of which exist. Replaced with rows on the merged label-and-switch announcement, the row as the target, the subtext, and the fact that every size is under the minimum touch target.",
          "delta": {
            "kind": "resolved",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Scorecard rescored.</strong> C1, C4 and C5 move to Ready — the promotion, the mappability and the 18-variant matrix all landed in v2.0 and v2.1. C7’s note no longer says \"blocked until component exists\".",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The Subtext Message is not always present.</strong> A v2.1 note on the Overview tab records it as \"confirmed intentional — a standing part of the labeled row\". The panel shows <code>hasSubtext · False</code>: it is a boolean, off by default, and hidden in every variant as shipped.",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>It nests the retired Subtext Message.</strong> The child ids resolve to <code>11855:8765</code> — the old component, not the current <code>26715:17362</code>. Its anatomy confirms it: two bare <code>#subtext</code> text nodes, none of the <code>leading-icon</code> / <code>content</code> structure the current one has. Swapping it would also bring <code>Status</code>, <code>Size</code> and a leading icon.",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Nothing mutes when disabled.</strong> The label holds <code>#445C85</code> and the subtext <code>#6780A9</code> through <code>State=Disabled</code>; only the track drops. Radio Button – With Label mutes its label to <code>#C2CFE5</code>, so the two labelled controls disagree.",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>Two booleans, two mechanisms.</strong> <code>isSelected</code> is a variant with <code>true</code>/<code>false</code> values; <code>hasSubtext</code> is a boolean property. Both toggle one thing; only one doubles the variant count.",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>The default subtext copy is error phrasing.</strong> It reads \"Please Try Again\" in the default <code>#6780A9</code>, on a row with no error state and no error colour.",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Every size is under the minimum touch target.</strong> Rows of 24 / 20 / 16 against 44 × 44pt and 48 × 48dp, even with the whole row tappable.",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Token bindings unread</strong>, so all ten colour rows carry <code>—</code>. The plugin returns no variable bindings.",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>v2.0.0 and v2.1.0 have no changelog entries.</strong> The Overview tab records five resolutions under those versions — the promotion to a real component, the linked Toggle instance, the schema alignment, and the subtext decisions — but the changelog jumps from 1.0.0 to here. Their dates are not recorded anywhere I can read, so they are not invented.",
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
      "header": "Initial Assessment · node 18482:36538",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Not a real component. Promote to a proper component with label, description, helper/error, required marker, and leading/trailing placement. <span class=\"tag-open tag-c1 tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>Family alignment</strong> — Match Radio Button With Label's shape. Inherit Toggle's <code>isSelected</code>, <code>State</code>, <code>Size</code> from the inner Toggle instance. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked until component exists. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
