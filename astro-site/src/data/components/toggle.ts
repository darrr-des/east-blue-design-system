import type { ComponentData, DemoControlSection } from '../types';

const toggleDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'pressed', label: 'Pressed' },
          { value: 'disabled', label: 'Disabled' },
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
    ],
  },
];

export const toggle: ComponentData = {
  "meta": {
    "slug": "toggle",
    "name": "Toggle",
    "node": "26510:37625",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=26510-37625",
    "description": "A binary switch. 18 variants across <code>State</code> (Default / Pressed / Disabled) × <code>Size</code> (Large / Medium / Small) × <code>isSelected</code> (true / false). Vector track + thumb, all colors token-bound.",
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
      "title": "Rebuilt — normalized to the Selection Control schema",
      "text": "The rebuild added the Size axis (Large / Medium / Small), added interaction states, folded pressed into <code>State</code> (Default / Pressed / Disabled), and moved the booleans to lowercase <code>true</code>/<code>false</code>. Toggle now shares the same schema as Radio Button — <code>State</code> × <code>Size</code> × a selection boolean — and maps cleanly to native <code>Toggle</code> / <code>Switch</code>. Only Code Connect and the ARIA-role docs remain."
    }
  },
  "overview": {
    "inContextNote": "Toggle appears in settings rows, form opt-ins, and any control that flips a single boolean. Usually paired with a label (see Toggle - With Label).",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"toggle-demo-preview\"><span class=\"eb-preview eb-preview-toggle eb-preview-toggle--medium eb-preview-toggle--on eb-preview-toggle--interactive\" role=\"switch\" aria-checked=\"true\" tabindex=\"0\" onclick=\"_toggleFlip()\" onkeydown=\"if(event.key===' '||event.key==='Enter'){event.preventDefault();_toggleFlip();}\"><span class=\"eb-preview-toggle__knob\"></span></span></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties (today)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isActive</span><select id=\"toggle-ctrl-selected\" class=\"demo-panel-select\" onchange=\"_toggleUpdate()\"><option value=\"true\" selected=\"\">Yes</option><option value=\"false\">No</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"toggle-ctrl-state\" class=\"demo-panel-select\" onchange=\"_toggleUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"disabled\">Disabled</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Proposed (post-normalization)</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">size</span><select id=\"toggle-ctrl-size\" class=\"demo-panel-select\" onchange=\"_toggleUpdate()\"><option value=\"small\">small</option><option value=\"medium\" selected=\"\">medium</option><option value=\"large\">large</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Generic on/off switch usable anywhere a boolean needs a visual control."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its track, knob, colors, and shadow tokens."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Normalized to the shared Selection Control schema — <code>State</code> (Default / Pressed / Disabled) × <code>Size</code> × <code>isSelected</code> (<code>true</code>/<code>false</code>), matching Radio Button. Pressed is folded into <code>State</code> rather than a stray boolean, and Disabled correctly omits Pressed. It now shares the full schema with Checkbox and Radio Button, including the <code>isSelected</code> boolean name."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Drops into rows and forms, and Toggle - With Label now nests it as a real instance — so atom changes propagate to the labeled variant."
      }
    ],
    "behavior": [
      {
        "state": "Off / On",
        "ios": "yes",
        "android": "yes",
        "property": "isSelected=false / true",
        "notes": "Grey track + knob-left when off; brand <code>#005CE5</code> track + knob-right when on."
      },
      {
        "state": "Pressed",
        "ios": "yes",
        "android": "yes",
        "property": "State=Pressed",
        "notes": "Darker track for tap feedback. Composes with either isSelected. Derived at runtime on native, not a passed parameter."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Muted track/knob, tap blocked. Ships at both isSelected values; correctly has no Pressed pairing."
      },
      {
        "state": "Focused",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "N/A on mobile — touch has no focus ring."
      }
    ],
    "resolved": [
      {
        "body": "v2.0: Size axis added — <code>Large</code> / <code>Medium</code> / <code>Small</code> (48 / 40 / 32 wide), previously absent. (C2)"
      },
      {
        "body": "v2.0: Interaction states added — a <code>State</code> axis now covers Default / Pressed / Disabled where the old component had only on/off/disabled. (C5)"
      },
      {
        "body": "v2.1: Schema normalized to the Selection Control pattern — <code>isPressed</code> folded into <code>State</code> (Default / Pressed / Disabled, matching Radio Button), and the selection boolean moved from <code>isActive=Yes/No</code> to lowercase <code>isActive=true/false</code>. Disabled correctly omits Pressed. Same 18 variants, no illegal-combination gap. (C2)"
      },
      {
        "body": "v2.1: Divergence from the Checkbox / Radio Button schema closed on the structural axes — Toggle now shares <code>State</code> × <code>Size</code> × selection-boolean, so it maps to native <code>Toggle</code> / <code>Switch</code> the same way. (C2)"
      },
      {
        "body": "v2.2: Selection boolean renamed <code>isActive</code> → <code>isSelected</code> across all 18 variants — Toggle now uses the exact same name as Checkbox and Radio Button, so the three selection controls are fully interchangeable. (C2)"
      }
    ],
    "open": [
      {
        "headline": "ARIA role not documented.",
        "body": "The native switch role and the required-toggle error announcement are not annotated on the component, so engineers have no spec for the a11y wiring.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Schema is normalized and stable, so registration is unblocked — but the SwiftUI / Compose mappings are not yet wired and the native component does not exist. Snippets remain a Planned API.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Document the ARIA / switch role.",
        "body": "Spell out the native switch role and the required-toggle error announcement in the handoff spec.",
        "tag": "A11y"
      },
      {
        "headline": "Register Code Connect mapping to <code>EBToggle</code>.",
        "body": "Wire <code>State</code>, <code>Size</code>, and <code>isSelected</code> 1:1 to the SwiftUI <code>Toggle</code> / Compose <code>Switch</code> API.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Normalize to the Selection Control schema.",
        "body": "v2.1: Applied — <code>State</code> (Default / Pressed / Disabled) × <code>Size</code> × lowercase <code>isSelected</code>, matching Radio Button. Pressed folded into <code>State</code>; booleans lowercase.",
        "tag": "Property"
      },
      {
        "headline": "Add the Size axis.",
        "body": "v2.0: Applied — Large / Medium / Small.",
        "tag": "Property"
      },
      {
        "headline": "Add interaction states.",
        "body": "v2.0: Applied — Pressed and Disabled now ship as <code>State</code> values.",
        "tag": "State"
      },
      {
        "headline": "Promote Toggle - With Label to a real component.",
        "body": "v2.0: Applied — the labeled variant is now its own component that nests this Toggle as an instance (see the Toggle with Label assessment).",
        "tag": "Composition"
      },
      {
        "headline": "Rename <code>isActive</code> → <code>isSelected</code>.",
        "body": "v2.2: Applied — aligns the selection boolean with Checkbox and Radio Button across all 18 variants.",
        "tag": "Rename"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "toggle-spec-main",
        "demoKey": "main",
        "title": "Toggle",
        "node": "26510:37625",
        "description": "",
        "previewHtml": "<div id=\"toggle-spec-main\" class=\"spec-preview-body\"><svg width=\"156\" height=\"108\" viewBox=\"0 0 52 36\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><defs><filter id=\"tgshadow-large-off\" x=\"0\" y=\"0\" width=\"52\" height=\"36\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/><feMorphology radius=\"8\" operator=\"erode\" in=\"SourceAlpha\" result=\"shadow\"/><feOffset dy=\"8\"/><feGaussianBlur stdDeviation=\"6\"/><feComposite in2=\"hardAlpha\" operator=\"out\"/><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.00784314 0 0 0 0 0.054902 0 0 0 0 0.133333 0 0 0 0.16 0\"/><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"shadow\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"shadow\" result=\"shape\"/></filter></defs><rect x=\"2\" width=\"48\" height=\"24\" rx=\"12\" fill=\"#D7E0EF\"/><g filter=\"url(#tgshadow-large-off)\"><circle cx=\"14\" cy=\"12\" r=\"10\" fill=\"#FFFFFF\"/></g></svg></div>",
        "demoControls": toggleDemoControls,
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
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Track",
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
                "key": "Knob",
                "value": "#FFFFFF",
                "token": "—"
              },
              {
                "key": "Knob shadow",
                "value": "#020E22 @ 16%",
                "token": "—"
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Text layers",
                "value": "None — the control renders no text"
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
                  "size:medium": {
                    "value": "20px"
                  },
                  "size:small": {
                    "value": "16px"
                  }
                }
              },
              {
                "key": "Width",
                "value": "48px",
                "mono": true,
                "variants": {
                  "size:medium": {
                    "value": "40px"
                  },
                  "size:small": {
                    "value": "32px"
                  }
                }
              },
              {
                "key": "Radius",
                "value": "36px — clamps to a pill at 12px",
                "mono": true,
                "variants": {
                  "size:medium": {
                    "value": "36px — clamps to a pill at 10px"
                  },
                  "size:small": {
                    "value": "36px — clamps to a pill at 8px"
                  }
                }
              },
              {
                "key": "Padding H",
                "value": "2px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "2px",
                "mono": true
              },
              {
                "key": "Knob",
                "value": "20 × 20",
                "mono": true,
                "variants": {
                  "size:medium": {
                    "value": "16 × 16"
                  },
                  "size:small": {
                    "value": "12 × 12"
                  }
                }
              },
              {
                "key": "Travel",
                "value": "24px",
                "mono": true,
                "variants": {
                  "size:medium": {
                    "value": "20px"
                  },
                  "size:small": {
                    "value": "16px"
                  }
                }
              },
              {
                "key": "Shadow",
                "value": "y 8 · blur 12 · spread −8 · #020E22 @ 16%",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Leading — the knob rests at the left inset",
                "mono": true,
                "variants": {
                  "isSelected:true": {
                    "value": "Trailing — the knob rests at the right inset"
                  }
                }
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>isOn<span class=\"syn-punc\">: </span>$isOn<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span>controlSize<span class=\"syn-punc\">(.</span>large<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBToggle</span><span class=\"syn-punc\">(</span>\n    checked <span class=\"syn-eq\">=</span> false<span class=\"syn-punc\">,</span>\n    onCheckedChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> checked <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">},</span>\n    size <span class=\"syn-eq\">=</span> EBToggleSize<span class=\"syn-punc\">.</span>Large<span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> true\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State and isSelected",
        "description": "Read off <code>get_node_info</code> and <code>get_svg</code> on each variant of set <code>26510:37625</code>, and confirmed against <code>export_node_as_image</code>. Every value is size-invariant — only the geometry changes with <code>Size</code>. Token paths could not be read; the Talk To Figma plugin returns no variable bindings, so the previous record’s <code>toggle/color/*</code> paths are not carried forward on the rows whose hex they got wrong.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Track · isSelected = false",
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
            "role": "Track · isSelected = true",
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
            "role": "Knob",
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:toggle:2.2.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.toggle.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>26510:37625</code>. <code>State</code> is the only one that is not a parameter — Pressed is a gesture frame and Disabled is an environment flag, so neither is set on the toggle itself.",
      "rows": [
        {
          "figma": "State — Default, Pressed, Disabled",
          "swift": "<code>.disabled(true)</code> for Disabled; Pressed is the press gesture, not a parameter",
          "compose": "<code>enabled = false</code> for Disabled; Pressed comes from <code>interactionSource</code>"
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
          "figma": "— no Figma property (the change callback)",
          "swift": "the binding writes back — <code>$isOn</code>",
          "compose": "<code>onCheckedChange: (Boolean) -&gt; Unit</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Toggle/EBToggle.swift",
        "compose": "android/components/toggle/EBToggle.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "On and off",
        "swift": "<span class=\"cmt\">// isSelected is the binding. Track goes #D7E0EF → #005CE5</span>\n<span class=\"cmt\">// and the knob travels 24pt at Large.</span>\n<span class=\"typ\">EBToggle</span>(isOn: $notificationsOn)\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">large</span>)",
        "compose": "<span class=\"cmt\">// isSelected is `checked`. Track goes #D7E0EF → #005CE5</span>\n<span class=\"cmt\">// and the knob travels 24dp at Large.</span>\n<span class=\"typ\">EBToggle</span>(\n    checked = notificationsOn,\n    onCheckedChange = { notificationsOn = it },\n    size = <span class=\"typ\">EBToggleSize</span>.<span class=\"prp\">Large</span>\n)"
      },
      {
        "subheading": "Sizes",
        "swift": "<span class=\"cmt\">// 48×24, 40×20, 32×16 — the knob is always the track height</span>\n<span class=\"cmt\">// minus 4, inset 2 all round.</span>\n<span class=\"typ\">EBToggle</span>(isOn: $on).<span class=\"fn\">controlSize</span>(.<span class=\"prp\">large</span>)\n<span class=\"typ\">EBToggle</span>(isOn: $on).<span class=\"fn\">controlSize</span>(.<span class=\"prp\">regular</span>)\n<span class=\"typ\">EBToggle</span>(isOn: $on).<span class=\"fn\">controlSize</span>(.<span class=\"prp\">small</span>)",
        "compose": "<span class=\"cmt\">// 48×24, 40×20, 32×16 — the knob is always the track height</span>\n<span class=\"cmt\">// minus 4, inset 2 all round.</span>\n<span class=\"typ\">EBToggle</span>(checked = on, onCheckedChange = {}, size = <span class=\"typ\">EBToggleSize</span>.<span class=\"prp\">Large</span>)\n<span class=\"typ\">EBToggle</span>(checked = on, onCheckedChange = {}, size = <span class=\"typ\">EBToggleSize</span>.<span class=\"prp\">Medium</span>)\n<span class=\"typ\">EBToggle</span>(checked = on, onCheckedChange = {}, size = <span class=\"typ\">EBToggleSize</span>.<span class=\"prp\">Small</span>)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"cmt\">// Disabled keeps the white knob and mutes only the track —</span>\n<span class=\"cmt\">// #EEF2F9 when off, #9BC5FD when on.</span>\n<span class=\"typ\">EBToggle</span>(isOn: .constant(<span class=\"kw\">true</span>))\n    .<span class=\"fn\">controlSize</span>(.<span class=\"prp\">large</span>)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"cmt\">// Disabled keeps the white knob and mutes only the track —</span>\n<span class=\"cmt\">// #EEF2F9 when off, #9BC5FD when on.</span>\n<span class=\"typ\">EBToggle</span>(\n    checked = <span class=\"kw\">true</span>,\n    onCheckedChange = { },\n    enabled = <span class=\"kw\">false</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Switch role",
        "ios": "SwiftUI <code>Toggle</code> applies the <em>switch</em> trait automatically — VoiceOver says \"on/off\", not \"checked/unchecked\".",
        "android": "Material <code>Switch</code> applies <code>Role.Switch</code> semantics automatically."
      },
      {
        "requirement": "Label association",
        "ios": "The control carries no text. Pair it with a label and expose them as one element, or VoiceOver announces a switch with no subject.",
        "android": "Wrap the row in <code>Modifier.toggleable()</code> with the label inside, so the whole row is one target and one announcement."
      },
      {
        "requirement": "Minimum target",
        "ios": "The track is 24 / 20 / 16pt tall — every size is under the 44 × 44pt minimum. Pad the container; do not resize the track.",
        "android": "Same three heights, all under 48 × 48dp. Use <code>Modifier.minimumInteractiveComponentSize()</code>."
      },
      {
        "requirement": "State announcement",
        "ios": "VoiceOver announces \"On\" / \"Off\" as the value.",
        "android": "TalkBack announces \"On\" / \"Off\" as the state description."
      },
      {
        "requirement": "Disabled",
        "ios": "<code>.disabled(true)</code> blocks interaction; VoiceOver announces \"dimmed\".",
        "android": "<code>enabled = false</code> blocks click; TalkBack announces \"disabled\"."
      },
      {
        "requirement": "Focus — no Figma variant",
        "ios": "The set has no Focused state, so an iPad keyboard or Switch Control user gets no visible ring from the design. Supply the platform focus ring rather than inventing one.",
        "android": "Same — no Focused variant. Let the platform draw D-pad / keyboard focus; do not hand-roll it."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Toggle for a setting that applies immediately — notifications on, biometrics on. The change is the action.",
        "dontText": "Don’t use it for a choice that needs saving. A toggle with a Save button reads as already-applied; use a Checkbox in a form."
      },
      {
        "doText": "Match <code>Size</code> to the row it sits in — Large (48 × 24) for standalone settings rows, Small (32 × 16) for dense lists.",
        "dontText": "Don’t mix sizes down one settings screen. The knob travel changes with the size — 24 / 20 / 16 — so mixed rows read as misaligned."
      },
      {
        "doText": "Always pair it with a label naming what is being switched, and let the whole row be the target.",
        "dontText": "Don’t ship a bare toggle. It renders no text in any of the 18 variants, so on its own it announces a switch with no subject."
      },
      {
        "doText": "Disable the toggle when the setting is unavailable — the track mutes to <code>#EEF2F9</code> off or <code>#9BC5FD</code> on.",
        "dontText": "Don’t rely on the muted track alone to say why. The knob stays white in every state, so a disabled toggle still reads as interactive at a glance."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Two semantic layers per variant — <code>container</code> for the track and <code>ellipse</code> for the knob. Nothing generic, nothing left over."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "PascalCase variant properties with Title Case values, and the selection boolean takes the <code>is</code> prefix with lowercase <code>true</code>/<code>false</code>. The <code>Size</code> axis landed in v2.0 and <code>isActive</code> became <code>isSelected</code> in v2.2, so Toggle now matches Checkbox and Radio Button exactly."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Fills are consistent across all three sizes and the knob shadow is a single shared effect. But bindings cannot be read with the Talk To Figma plugin, and the paths the previous record asserted sat against three wrong hexes — the default-off track, the disabled-off track and the disabled knob — so nothing here is carried forward as verified."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps 1:1 to SwiftUI <code>Toggle</code> and Material <code>Switch</code>. <code>isSelected</code> is the binding, <code>Size</code> a control size, and <code>State</code> resolves from the gesture and the enabled flag."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default, Pressed and Disabled ship at all three sizes in both selections — the complete 18. Focused is absent by the same decision Radio Button took: not a state on touch. The Accessibility table says to use the platform ring where a keyboard is attached."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No icons. The track and knob are vector primitives — a rounded rect and an ellipse."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "No longer blocked — the schema normalization that blocked it finished in v2.2. No SwiftUI or Compose mappings are registered yet; the native library does not exist."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 18,
      "description": "<code>State</code> (3) × <code>Size</code> (3) × <code>isSelected</code> (2) = 18 variants. Complete matrix, no gaps. Track colour depends on <code>State</code> and <code>isSelected</code> only — it is identical across the three sizes, which change geometry alone.",
      "columns": [
        "State",
        "Size",
        "isSelected",
        "Node ID",
        "Track size",
        "Track fill"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "Large",
            "<code>false</code>",
            "<code>26510:37626</code>",
            "48 × 24",
            "#D7E0EF"
          ]
        },
        {
          "cells": [
            "Default",
            "Medium",
            "<code>false</code>",
            "<code>26510:37629</code>",
            "40 × 20",
            "#D7E0EF"
          ]
        },
        {
          "cells": [
            "Default",
            "Small",
            "<code>false</code>",
            "<code>26510:37632</code>",
            "32 × 16",
            "#D7E0EF"
          ]
        },
        {
          "cells": [
            "Pressed",
            "Large",
            "<code>false</code>",
            "<code>26510:37635</code>",
            "48 × 24",
            "#C2CFE5"
          ]
        },
        {
          "cells": [
            "Pressed",
            "Medium",
            "<code>false</code>",
            "<code>26510:37638</code>",
            "40 × 20",
            "#C2CFE5"
          ]
        },
        {
          "cells": [
            "Pressed",
            "Small",
            "<code>false</code>",
            "<code>26510:37641</code>",
            "32 × 16",
            "#C2CFE5"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Large",
            "<code>false</code>",
            "<code>26510:37662</code>",
            "48 × 24",
            "#EEF2F9"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Medium",
            "<code>false</code>",
            "<code>26510:37665</code>",
            "40 × 20",
            "#EEF2F9"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Small",
            "<code>false</code>",
            "<code>26510:37668</code>",
            "32 × 16",
            "#EEF2F9"
          ]
        },
        {
          "cells": [
            "Default",
            "Large",
            "<code>true</code>",
            "<code>26510:37644</code>",
            "48 × 24",
            "#005CE5"
          ]
        },
        {
          "cells": [
            "Default",
            "Medium",
            "<code>true</code>",
            "<code>26510:37647</code>",
            "40 × 20",
            "#005CE5"
          ]
        },
        {
          "cells": [
            "Default",
            "Small",
            "<code>true</code>",
            "<code>26510:37650</code>",
            "32 × 16",
            "#005CE5"
          ]
        },
        {
          "cells": [
            "Pressed",
            "Large",
            "<code>true</code>",
            "<code>26510:37653</code>",
            "48 × 24",
            "#2340A9"
          ]
        },
        {
          "cells": [
            "Pressed",
            "Medium",
            "<code>true</code>",
            "<code>26510:37656</code>",
            "40 × 20",
            "#2340A9"
          ]
        },
        {
          "cells": [
            "Pressed",
            "Small",
            "<code>true</code>",
            "<code>26510:37659</code>",
            "32 × 16",
            "#2340A9"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Large",
            "<code>true</code>",
            "<code>26510:37671</code>",
            "48 × 24",
            "#9BC5FD"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Medium",
            "<code>true</code>",
            "<code>26510:37674</code>",
            "40 × 20",
            "#9BC5FD"
          ]
        },
        {
          "cells": [
            "Disabled",
            "Small",
            "<code>true</code>",
            "<code>26510:37677</code>",
            "32 × 16",
            "#9BC5FD"
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
              "Pressed",
              "<code>false</code>",
              "3",
              "#C2CFE5"
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
              "Default",
              "<code>true</code>",
              "3",
              "#005CE5"
            ]
          },
          {
            "cells": [
              "Pressed",
              "<code>true</code>",
              "3",
              "#2340A9"
            ]
          },
          {
            "cells": [
              "Disabled",
              "<code>true</code>",
              "3",
              "#9BC5FD"
            ]
          }
        ]
      },
      "collapseLabel": "View full State × Size × isSelected breakdown (18 rows)"
    }
  },
  "changelog": [
    {
      "version": "2.2.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 26510:37625",
      "rows": [
        {
          "body": "<strong>Three track colours were wrong.</strong> Default-off was documented <code>#C2CFE5</code> — that is the <em>Pressed</em> value, and <code>#D7E0EF</code> appeared nowhere. Disabled-off was <code>#E5EBF4</code>, actually <code>#EEF2F9</code>. The knob was <code>#F6F9FD</code> when disabled; it is <code>#FFFFFF</code> in all 18 variants.",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>The Style tab documented four variants of eighteen.</strong> Four cards on retired <code>18482:*</code> nodes covered <code>State</code> Default/Disabled × on/off only — no <code>Pressed</code>, no <code>Size</code> axis, even though <code>meta.description</code> already named all three.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma axes.</strong> <code>State</code> · <code>Size</code> · <code>isSelected</code>, with every colour and dimension re-read from <code>26510:37625</code>. Reachable states equal built states: 18 of 18.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Per-size geometry recorded for the first time.</strong> Track 48 × 24 / 40 × 20 / 32 × 16, knob 20 / 16 / 12, inset 2 at every size, travel 24 / 20 / 16. The tab previously carried only the Large numbers.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The knob shadow is documented and reproduced.</strong> Figma applies erode 8 → offset y 8 → blur 12 → <code>#020E22</code> at 16% — a negative spread, which is why a 20px thumb throws such a tight shadow. The preview uses the same filter primitives rather than a CSS <code>drop-shadow</code>, which has no spread.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Property Mapping was a proposal, not a mapping.</strong> It listed \"(no size axis)\" against a Size axis that shipped in v2.0, and SwiftUI states — <code>Focused</code>, <code>Error</code> — that exist in neither Figma nor the component. Rewritten as one prose row per property in panel order.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Variants Inventory rebuilt.</strong> Four rows on <code>18482:*</code> with an <code>isActive</code> column and a note proposing \"30 variants\"; now 18 rows on <code>26510:37626</code>–<code>26510:37677</code> behind a six-row summary, each carrying its track size and fill.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard contradicted the resolved record on two criteria.</strong> C2 read \"Rename <code>isSelected</code> → <code>isSelected</code>, values Yes/No → true/false; add Size axis\" — a note that renames a thing to itself and asks for an axis that shipped. C5 read \"Missing Pressed, Focused, Error\". Both rescored Ready.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Installation and Usage were empty.</strong> No install blocks at all, no usage snippets, no usage guidelines. All three written; the Gradle artifact and Kotlin package derive from the <code>Toggle</code> family.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The accessibility touch-target row named one size.</strong> It said \"the 48×24 track alone is too small\"; all three tracks — 24, 20 and 16 tall — are under 44pt and 48dp. The Focused row now says the set has no Focused variant instead of implying one is coming.",
          "delta": {
            "kind": "resolved",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Token bindings unread.</strong> The Talk To Figma plugin returns no variable bindings, so all eight colour rows carry <code>—</code>. The previous <code>toggle/color/*</code> paths were not carried forward: three of them were asserted against hexes that turned out to be wrong.",
          "delta": {
            "kind": "open",
            "label": "C3 Open"
          }
        },
        {
          "body": "<strong>Every size is under the minimum touch target.</strong> 24 / 20 / 16pt against 44 × 44pt and 48 × 48dp. The control is meant to be padded, not resized — but nothing in Figma records the intended row height.",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>The <code>Size</code> panel order is unconfirmed.</strong> No property panel was supplied, so the order comes from the set’s own child order — Large, Medium, Small. Radio Button’s panel lists Small, Medium, Large, so one of the two is out of step.",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>v2.0.0, v2.1.0 and v2.2.0 have no changelog entries.</strong> The Overview tab records five resolutions under those versions — the Size axis, the interaction states, the Selection Control normalization, the Checkbox/Radio alignment, and <code>isActive</code> → <code>isSelected</code> — but the changelog jumps from 1.0.0 to here. Their dates are not recorded anywhere I can read, so they are not invented.",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The Overview panel still ships the pre-rebuild control set</strong> — <code>isActive</code> Yes/No, <code>State</code> Default/Disabled, and a size row headed \"Proposed (post-normalization)\". Size shipped in v2.0. Overview scope.",
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
      "header": "Initial Assessment · node 18482:36508",
      "rows": [
        {
          "body": "<strong>Verdict: Fix</strong> — Normalize to the shared Selection Control schema alongside Checkbox and Radio Button. <span class=\"tag-open tag-c2 tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>C2 — Property naming</strong> — Rename <code>isSelected</code> → <code>isSelected</code>; change values <code>Yes/No</code> → <code>true/false</code>. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C5 — States</strong> — Add Pressed, Focused, Error states. Add Small/Medium/Large size axis. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked until schema normalizes. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
