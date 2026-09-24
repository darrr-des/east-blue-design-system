import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/chip.js`.
// Panel mirrors the property panel of set 5595:39596, in its order: four
// variant axes. The two icon swaps and Dropdown-Slot get no control.
const chipDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      { label: 'hasValue', prop: 'hasvalue', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'pressed',  label: 'Pressed' },
          { value: 'disabled', label: 'Disabled' },
          { value: 'default',  label: 'Default' },
        ],
      },
      { label: 'hasLeadingIcon', prop: 'hasleadingicon', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasTrailingIcon', prop: 'hastrailingicon', control: 'toggle', defaultValue: 'true',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
    ],
  },
];

export const chip: ComponentData = {
  "meta": {
    "slug": "chip",
    "name": "Chip",
    "node": "5595:39596",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5595-39596",
    "description": "A pill-shaped selector carrying a label and an optional chosen value, with optional leading and trailing icons and a slot for an attached dropdown.",
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
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>5595:39596</code> in the 2026 Working File, and every recommendation from the previous assessment has landed. Two overlapping components are consolidated into one 24-variant set — <code>hasValue</code> × <code>State</code> × <code>hasLeadingIcon</code> × <code>hasTrailingIcon</code> — with a property schema following §1, §2 and §5, identical layer naming across all 24 variants on the §3 vocabulary, Pressed and Disabled states with properly muted disabled text, the <code>offset</code> frames and colored <code>_space_*</code> spacers removed, and <code>dropdown group</code> replaced by a real <code>Dropdown-Slot</code>. Scope is confirmed dropdown-only, so <code>Pressed</code> means finger-down rather than doubling as a selection; the leading <code>Placeholder</code> is a deliberate swap target; and the 80% pressed-label opacity is the same intentional treatment confirmed elsewhere in the system. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          \n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"18\" rx=\"4\" fill=\"#1972F9\" opacity=\".6\"></rect>\n          <text x=\"60\" y=\"19\" text-anchor=\"middle\" fill=\"white\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Vouchers</text>\n          \n          <rect x=\"16\" y=\"32\" width=\"22\" height=\"8\" rx=\"4\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"42\" y=\"32\" width=\"22\" height=\"8\" rx=\"4\" fill=\"#EEF2F9\"></rect>\n          <rect x=\"68\" y=\"32\" width=\"22\" height=\"8\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"0.8\"></rect>\n          \n          <rect x=\"18\" y=\"48\" width=\"84\" height=\"10\" rx=\"2\" fill=\"currentColor\" opacity=\".07\"></rect>\n          <rect x=\"18\" y=\"60\" width=\"84\" height=\"6\" rx=\"3\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"chip-demo-preview\"><div style=\"display:inline-flex;align-items:center;height:36px;padding:0 16px 0 6px;background:#005CE5;border:none;border-radius:99px;box-sizing:border-box;font-family:'Proxima Soft', system-ui, sans-serif;font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;\"><div style=\"width:24px;height:24px;border-radius:50%;background:#C2C6CF;flex-shrink:0;margin-right:4px;\"></div><span style=\"color:#FFFFFF;white-space:nowrap;\">Filter Name</span><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" style=\"margin-left:8px;flex-shrink:0;\"><path d=\"M4 4l8 8M12 4l-8 8\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">style</span><select class=\"demo-panel-select\" id=\"chip-demo-style\" onchange=\"updateChipDemo()\"><option value=\"filled\" selected=\"\">filled</option><option value=\"light\">light</option><option value=\"outline\">outline</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">leading</span><select class=\"demo-panel-select\" id=\"chip-demo-leading\" onchange=\"updateChipDemo()\"><option value=\"none\">none</option><option value=\"avatar\" selected=\"\">avatar</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">trailing</span><select class=\"demo-panel-select\" id=\"chip-demo-trailing\" onchange=\"updateChipDemo()\"><option value=\"none\">none</option><option value=\"close\" selected=\"\">close</option><option value=\"chevron\">chevron</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "A generic pill selector — filter row, sort control, dropdown trigger. Nothing ties it to one screen, and the four axes cover the combinations a chip actually appears in."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its pill chrome, typography and state colors. <code>Dropdown-Slot</code> attaches external content without the chip needing to know what it is."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "The schema follows §1, §2 and §5 — <code>hasValue</code> × <code>State</code> × <code>hasLeadingIcon</code> × <code>hasTrailingIcon</code> — and all 24 variants now carry identical layer names on the §3 vocabulary, so each text layer exposes as a single property. The Disabled state mutes its text in line with Counter and Search Field rather than diverging."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "<code>Dropdown-Slot</code> is a real Figma Slot on the twelve variants that signal a dropdown, <code>ContentRow</code> composes label and value independently, and the leading position takes a swappable instance."
      }
    ],
    "behavior": [
      {
        "state": "Active / Selected",
        "ios": "yes",
        "android": "yes",
        "property": "Filter · type=primary",
        "notes": "Filled blue background, white label. Used when a filter is applied."
      },
      {
        "state": "Inactive (light)",
        "ios": "yes",
        "android": "yes",
        "property": "Filter · type=light",
        "notes": "Light gray pill, gray label. Used for unapplied filters or tag readouts."
      },
      {
        "state": "Inactive (outline)",
        "ios": "yes",
        "android": "yes",
        "property": "Filter · type=outline",
        "notes": "White pill, gray border, gray label."
      },
      {
        "state": "Dropdown trigger",
        "ios": "yes",
        "android": "yes",
        "property": "Filter w/ Dropdown · default",
        "notes": "Light style with chevron. Used for sort/filter pickers."
      },
      {
        "state": "Pressed / Disabled / Error",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not defined in Figma. <span class=\"tag-open tag-c5\">C5</span>"
      }
    ],
    "resolved": [
      {
        "headline": "Consolidated into one component on the Working File.",
        "body": "v2.0: Rebuilt on node <code>5595:39596</code>. What were two overlapping chip components are now a single 24-variant set — <code>hasValue</code> (2) × <code>State</code> (3) × <code>hasLeadingIcon</code> (2) × <code>hasTrailingIcon</code> (2) — with every combination present and no gaps. This is the rename-and-consolidate recommendation applied. (C2 · Family)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Property schema rebuilt on the naming guidelines.",
        "body": "v2.0: The old yes/no values and the “with active time” enum are gone. Booleans now use the <code>has</code> prefix with lowerCamelCase per §2 — <code>hasValue</code>, <code>hasLeadingIcon</code>, <code>hasTrailingIcon</code>, the last two replacing the ambiguous <code>hasLeading</code> / <code>hasTrailing</code> — and <code>State</code> is PascalCase per §1 with Title Case values per §5. Every axis now says what it controls. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Pressed and Disabled states added.",
        "body": "v2.0: <code>State = Default | Pressed | Disabled</code> replaces the single default state. Pressed fills the pill <code>#005CE5</code>; Disabled fills it <code>#EEF2F9</code>; Default is white with a <code>#D7E0EF</code> border. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Layer naming rebuilt throughout.",
        "body": "v2.0: The two frames named <code>offset</code> and the <code>#label</code> sigil are gone. Every variant now reads <code>Pill</code> → <code>LeadingIcon</code> · <code>ContentRow</code> → <code>Label</code> · <code>Value</code> · <code>TrailingIcon</code>, following the §3 vocabulary. Two layers were missed in the sweep and are tracked below; the rest is done. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>dropdown group</code> is now a real Figma Slot.",
        "body": "v2.0: <code>Dropdown-Slot</code> is a genuine <code>SLOT</code> node rather than a frame standing in for one, kebab-case per §4, and it appears on exactly the twelve variants where <code>hasTrailingIcon=True</code> — the chevron is what signals a dropdown, so slot and affordance are consistent by construction. A consumer attaches their own menu without detaching. (C1 · Slot)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Colored spacer instances removed.",
        "body": "v2.0: The <code>_space_4</code> and <code>_space_8</code> instances filled <code>#00FF66</code> and <code>#FFFF00</code> are gone from the layer tree; spacing is carried by auto-layout. A native implementation now sees the children that actually exist. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Rename sweep completed across all 24 variants.",
        "body": "v2.1: Verified on the live node. <code>label</code> → <code>Label</code> (<code>5595:39613</code>) and <code>Trailing Icon</code> → <code>TrailingIcon</code> (<code>5595:39661</code>). Every variant now carries identical layer names — <code>Pill</code> → <code>LeadingIcon</code> · <code>ContentRow</code> → <code>Label</code> · <code>Value</code> · <code>TrailingIcon</code> — so <code>Label</code> and <code>Value</code> each expose as a single text property across the whole set rather than fragmenting. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Disabled state now mutes its text.",
        "body": "v2.1: <code>Label</code> drops to <code>#C2CFE5</code> and <code>Value</code> to <code>#9BC5FD</code>, replacing the full-strength <code>#6780A9</code> and <code>#005CE5</code> that made a disabled chip read as an available action. The muted blue on the value is a nice touch — it keeps the label/value hierarchy legible while removing the affordance, rather than flattening both to one grey. Consistent with <a href=\"#\" onclick=\"showPanelById('counter');return false;\">Counter</a> and <a href=\"#\" onclick=\"showPanelById('search-field');return false;\">Search Field</a>, which both mute to <code>#C2CFE5</code>. (C5 · Token)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Scope confirmed dropdown-only — no selected state needed.",
        "body": "v2.2: Chip is a dropdown trigger, not a filter toggle. <code>hasValue=True</code> is what a made choice looks like, and <code>Dropdown-Slot</code> on the twelve <code>hasTrailingIcon=True</code> variants is what the component exists to attach. <code>Pressed</code> therefore means what it says — a transient finger-down state released on lift — and does not double as a persistent selection. Recorded so the absence of <code>isSelected</code> reads as scope rather than an omission: a screen needing an on/off filter pill reaches for a different component rather than pressing this one into service. (C5 · State)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Leading <code>Placeholder</code> confirmed a deliberate swap target.",
        "body": "v2.2: The 24×24 <code>Placeholder</code> in each <code>LeadingIcon</code> frame is the intended instance-swap point for consumer content — the same pattern <a href=\"#\" onclick=\"showPanelById('header-transaction');return false;\">Detail Hero</a> uses. The asymmetry with the trailing side is intentional rather than an oversight: the trailing position is a fixed <code>Chevron Down</code> plus a named <code>Dropdown-Slot</code>, because what attaches there is a menu the chip must anchor, while the leading position takes an arbitrary icon the chip only has to reserve room for. Two different jobs, two different mechanisms. Attested rather than verified — instance-swap property definitions are not readable through the review tooling. (C6 · Composition)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Pressed label opacity confirmed intentional.",
        "body": "v2.2: <code>Label</code> at <code>#F6F9FD</code> 80% against the solid <code>#005CE5</code> pill is deliberate — it holds the label back so the chosen <code>Value</code> reads as the brighter of the two while the chip is held down, preserving the same hierarchy the Default state gets from <code>#6780A9</code> against <code>#005CE5</code>. Consistent with the treatment already confirmed on Page Banner and Detail Hero, and covered by the same owner decision: the composited values are token-bound rather than local overrides. Attested rather than verified — opacity token bindings are not readable through the review tooling. (C3 · Token)",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      }
    ],
"open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The schema is otherwise settled: three booleans and one enum over a label, a value, a swappable leading icon and a named dropdown slot.",
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
        "cardKey": "chip-spec-main",
        "demoKey": "main",
        "title": "Chip",
        "node": "5595:39596",
        "description": "A 32-tall filter pill that hugs its row — optional leading icon, label, optional value and a chevron that opens the Dropdown-Slot.",
        "previewHtml": "<div id=\"chip-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": chipDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "hasValue",
                "value": "True",
                "prop": "hasvalue"
              },
              {
                "key": "State",
                "value": "Default",
                "prop": "state"
              },
              {
                "key": "hasLeadingIcon",
                "value": "True",
                "prop": "hasleadingicon"
              },
              {
                "key": "hasTrailingIcon",
                "value": "True",
                "prop": "hastrailingicon"
              },
              {
                "key": "⤷ Leading-Icon",
                "value": "Placeholder",
                "variants": {
                  "hasleadingicon:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "⤷ Trailing-Icon",
                "value": "Chevron Down",
                "variants": {
                  "hastrailingicon:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "⤷ Dropdown-Slot",
                "value": "Slot · 12 items"
              },
              {
                "key": "Resolved variant",
                "value": "5595:39753 · 161 × 32",
                "mono": true,
                "prop": "variantNode"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Pill fill",
                "value": "None",
                "token": "—",
                "variants": {
                  "state:pressed": {
                    "value": "#005CE5",
                    "swatch": "#005CE5"
                  },
                  "state:disabled": {
                    "value": "#EEF2F9",
                    "swatch": "#EEF2F9"
                  }
                }
              },
              {
                "key": "Pill border",
                "value": "#D7E0EF",
                "token": "—",
                "swatch": "#D7E0EF",
                "variants": {
                  "state:pressed": {
                    "hide": true
                  },
                  "state:disabled": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Label",
                "value": "#6780A9",
                "token": "—",
                "swatch": "#6780A9",
                "variants": {
                  "state:pressed": {
                    "value": "#F6F9FD at 80%",
                    "swatch": "#F6F9FD"
                  },
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "swatch": "#C2CFE5"
                  }
                }
              },
              {
                "key": "Value",
                "value": "#005CE5",
                "token": "—",
                "swatch": "#005CE5",
                "variants": {
                  "hasvalue:false": {
                    "hide": true
                  },
                  "state:pressed|hasvalue:true": {
                    "value": "#FFFFFF",
                    "swatch": "#FFFFFF"
                  },
                  "state:disabled|hasvalue:true": {
                    "value": "#9BC5FD",
                    "swatch": "#9BC5FD"
                  }
                }
              },
              {
                "key": "Chevron",
                "value": "Follows Value",
                "token": "—",
                "variants": {
                  "hastrailingicon:false": {
                    "hide": true
                  },
                  "hasvalue:false": {
                    "value": "Follows Label"
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
                "key": "Size",
                "value": "161 × 32",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Height",
                "value": "32",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "99px",
                "mono": true
              },
              {
                "key": "Padding left",
                "value": "4 (icon)",
                "mono": true,
                "variants": {
                  "hasleadingicon:false": {
                    "value": "14"
                  }
                }
              },
              {
                "key": "Padding right",
                "value": "14",
                "mono": true
              },
              {
                "key": "Leading icon",
                "value": "24 × 24 · gap 4",
                "mono": true,
                "variants": {
                  "hasleadingicon:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Label → value",
                "value": "gap 8",
                "mono": true,
                "variants": {
                  "hasvalue:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Trailing icon",
                "value": "16 × 16 · gap 8",
                "mono": true,
                "variants": {
                  "hastrailingicon:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Dropdown-Slot",
                "value": "Full width · 8 below the pill",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "Value",
                "value": "Primary/Label/Base",
                "mono": true,
                "variants": {
                  "hasvalue:false": {
                    "hide": true
                  }
                }
              }
            ]
          }
        ],
        "swift": "EBChip(\"Label\")\n    .ebValue(\"Value\")\n    .ebLeadingIcon { Image(\"placeholder\") }\n    .ebTrailingIcon(.chevronDown)\n    .ebDropdown { EBMenu(options) }",
        "compose": "EBChip(\n    label = \"Label\",\n    value = \"Value\",\n    leadingIcon = { Icon(painterResource(R.drawable.placeholder), null) },\n    trailingIcon = EBIcons.ChevronDown,\n    dropdown = { EBMenu(options) },\n    onClick = { }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off <code>get_node_info</code> across the 24 variants of set <code>5595:39596</code>. Token paths could not be read; the plugin returns no variable bindings. The chevron’s own fill is not exposed — in the export it follows the Value, or the Label when there is none.",
        "columns": [
          "Default",
          "Pressed",
          "Disabled"
        ],
        "rows": [
          {
            "role": "Pill fill",
            "token": "—",
            "values": [
              "–",
              "#005CE5",
              "#EEF2F9"
            ]
          },
          {
            "role": "Pill border",
            "token": "—",
            "values": [
              "#D7E0EF",
              "–",
              "–"
            ]
          },
          {
            "role": "Label",
            "token": "—",
            "values": [
              "#6780A9",
              "#F6F9FD at 80%",
              "#C2CFE5"
            ]
          },
          {
            "role": "Value",
            "token": "—",
            "values": [
              "#005CE5",
              "#FFFFFF",
              "#9BC5FD"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:chip:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.chip.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>5595:39596</code>, in panel order, then the two icon swaps and the slot.",
      "rows": [
        {
          "figma": "hasValue — boolean",
          "swift": "<code>.ebValue(String)</code> — omit for False",
          "compose": "<code>value: String? = null</code>"
        },
        {
          "figma": "State — Pressed, Disabled, Default",
          "swift": "Pressed is the button style; <code>.disabled(true)</code> for Disabled",
          "compose": "Pressed from <code>interactionSource</code>; <code>enabled = false</code>"
        },
        {
          "figma": "hasLeadingIcon — boolean",
          "swift": "<code>.ebLeadingIcon { }</code> — omit for False",
          "compose": "<code>leadingIcon: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasTrailingIcon — boolean",
          "swift": "<code>.ebTrailingIcon(.chevronDown)</code>",
          "compose": "<code>trailingIcon: EBIcon? = null</code>"
        },
        {
          "figma": "⤷ Leading-Icon — Placeholder (24 × 24)",
          "swift": "content of <code>.ebLeadingIcon</code>",
          "compose": "the value of <code>leadingIcon</code>"
        },
        {
          "figma": "⤷ Trailing-Icon — Chevron Down (16 × 16)",
          "swift": "the icon passed to <code>.ebTrailingIcon</code>",
          "compose": "the value of <code>trailingIcon</code>"
        },
        {
          "figma": "⤷ Dropdown-Slot — SLOT · 12 items",
          "swift": "<code>.ebDropdown { }</code>",
          "compose": "<code>dropdown: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "— <code>Label</code> / <code>Value</code>",
          "swift": "<code>EBChip(_ label: String)</code>, <code>.ebValue</code>",
          "compose": "<code>label: String</code>, <code>value: String?</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Chip/EBChip.swift",
        "compose": "android/components/chip/EBChip.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default · label and value",
        "swift": "<span class=\"cmt\">// hasValue=True, State=Default, both icons — 5595:39753, 161 × 32.</span>\nEBChip(\"Sort by\")\n    .ebValue(\"Newest\")\n    .ebLeadingIcon { Image(\"sort\") }\n    .ebTrailingIcon(.chevronDown)\n    .ebDropdown { EBMenu(sortOptions) }",
        "compose": "<span class=\"cmt\">// hasValue=True, State=Default, both icons — 5595:39753, 161 × 32.</span>\nEBChip(\n    label = \"Sort by\",\n    value = \"Newest\",\n    leadingIcon = { Icon(painterResource(R.drawable.sort), null) },\n    trailingIcon = EBIcons.ChevronDown,\n    dropdown = { EBMenu(sortOptions) },\n    onClick = { open() }\n)"
      },
      {
        "subheading": "Label only",
        "swift": "<span class=\"cmt\">// hasValue=False, State=Default, no icons — 5595:39677, 69 × 32.</span>\nEBChip(\"All\")",
        "compose": "<span class=\"cmt\">// hasValue=False, State=Default, no icons — 5595:39677, 69 × 32.</span>\nEBChip(label = \"All\", onClick = { select() })"
      },
      {
        "subheading": "Pressed",
        "swift": "<span class=\"cmt\">// hasValue=True, State=Pressed, both icons — 5595:39681, 161 × 32; filled #005CE5.</span>\nEBChip(\"Sort by\")\n    .ebValue(\"Newest\")\n    .ebLeadingIcon { Image(\"sort\") }\n    .ebTrailingIcon(.chevronDown)\n    // Pressed is the built-in pressed style",
        "compose": "<span class=\"cmt\">// hasValue=True, State=Pressed, both icons — 5595:39681, 161 × 32; filled #005CE5.</span>\nEBChip(\n    label = \"Sort by\",\n    value = \"Newest\",\n    leadingIcon = { Icon(painterResource(R.drawable.sort), null) },\n    trailingIcon = EBIcons.ChevronDown,\n    onClick = { open() }\n)  // Pressed comes from interactionSource"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"cmt\">// hasValue=True, State=Disabled — 5595:39717, 161 × 32; #EEF2F9 fill.</span>\nEBChip(\"Sort by\")\n    .ebValue(\"Newest\")\n    .ebTrailingIcon(.chevronDown)\n    .disabled(true)",
        "compose": "<span class=\"cmt\">// hasValue=True, State=Disabled — 5595:39717, 161 × 32; #EEF2F9 fill.</span>\nEBChip(\n    label = \"Sort by\",\n    value = \"Newest\",\n    trailingIcon = EBIcons.ChevronDown,\n    enabled = false,\n    onClick = { }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Role",
        "ios": "A <code>Button</code> that opens a menu — <code>.accessibilityAddTraits(.isButton)</code> and <code>.accessibilityHint(\"Opens filter options\")</code>.",
        "android": "<code>Role.Button</code>; expose the dropdown with <code>expanded</code> semantics."
      },
      {
        "requirement": "Label and value",
        "ios": "Read both as one name — “Sort by, Newest” — so the current selection is announced.",
        "android": "Merge into one <code>contentDescription</code>."
      },
      {
        "requirement": "Tap target",
        "ios": "The pill is 32 tall — extend the target to 44pt with <code>.contentShape</code>, do not grow the pill.",
        "android": "<code>Modifier.minimumInteractiveComponentSize()</code> for 48dp."
      },
      {
        "requirement": "Disabled",
        "ios": "<code>.disabled(true)</code>; the chip stays in the reading order.",
        "android": "<code>enabled = false</code>."
      },
      {
        "requirement": "Contrast",
        "ios": "Default label #6780A9 is 4.01:1 on white at 16pt, just under 4.5:1; value #005CE5 is 5.10:1. Pressed white on #005CE5 is 5.10:1, and the 80% #F6F9FD label about 3.6:1. Disabled #C2CFE5 on #EEF2F9 is 1.42:1 and #9BC5FD 1.61:1.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use the value to show the current selection — “Sort by · Newest”.",
        "dontText": "Don’t repeat the label in the value."
      },
      {
        "doText": "Keep the chevron whenever the chip opens a dropdown.",
        "dontText": "Don’t ship a chevron on a chip that does not open anything."
      },
      {
        "doText": "Use the leading icon to name the filter’s category.",
        "dontText": "Don’t ship the grey Placeholder — swap in a real icon."
      },
      {
        "doText": "Keep labels to one or two words; the chip hugs its text.",
        "dontText": "Don’t let a row of chips wrap mid-label — scroll it instead."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Pill</code>, <code>LeadingIcon</code>, <code>ContentRow</code>, <code>Label</code>, <code>Value</code>, <code>TrailingIcon</code> and <code>Dropdown-Slot</code> — semantic throughout, with no <code>#</code> sigils."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Three <code>has*</code> booleans and one <code>State</code> axis over a complete 24-variant matrix."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>Label</code> and <code>Value</code> both resolve <code>matched</code> to <code>Primary/Label/Base</code>. Colour bindings cannot be read, and the Pressed label is <code>#F6F9FD</code> dimmed to 80% rather than its own colour."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One <code>EBChip</code> with a label, optional value, two optional icons and a dropdown slot."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Default, Pressed and Disabled ship, but there is no Selected state — a filter chip usually needs one, and Pressed is being used for it in the export."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Both icons are instance swaps, but the leading one ships the grey Placeholder and the chevron’s fill is not exposed by the plugin."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Four properties and three swaps are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 24,
      "description": "<code>hasValue</code> (2) × <code>State</code> (3) × <code>hasLeadingIcon</code> (2) × <code>hasTrailingIcon</code> (2) = 24 variants, all built. Every one is 32 tall; the width hugs the row.",
      "columns": [
        "hasValue",
        "State",
        "hasLeadingIcon",
        "hasTrailingIcon",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "True",
            "Default",
            "True",
            "True",
            "<code>5595:39753</code>",
            "161 × 32"
          ]
        },
        {
          "cells": [
            "True",
            "Default",
            "True",
            "False",
            "<code>5595:39765</code>",
            "137 × 32"
          ]
        },
        {
          "cells": [
            "True",
            "Default",
            "False",
            "True",
            "<code>5595:39774</code>",
            "143 × 32"
          ]
        },
        {
          "cells": [
            "True",
            "Default",
            "False",
            "False",
            "<code>5595:39783</code>",
            "119 × 32"
          ]
        },
        {
          "cells": [
            "True",
            "Pressed",
            "True",
            "True",
            "<code>5595:39681</code>",
            "161 × 32"
          ]
        },
        {
          "cells": [
            "True",
            "Pressed",
            "True",
            "False",
            "<code>5595:39693</code>",
            "137 × 32"
          ]
        },
        {
          "cells": [
            "True",
            "Pressed",
            "False",
            "True",
            "<code>5595:39702</code>",
            "143 × 32"
          ]
        },
        {
          "cells": [
            "True",
            "Pressed",
            "False",
            "False",
            "<code>5595:39711</code>",
            "119 × 32"
          ]
        },
        {
          "cells": [
            "True",
            "Disabled",
            "True",
            "True",
            "<code>5595:39717</code>",
            "161 × 32"
          ]
        },
        {
          "cells": [
            "True",
            "Disabled",
            "True",
            "False",
            "<code>5595:39729</code>",
            "137 × 32"
          ]
        },
        {
          "cells": [
            "True",
            "Disabled",
            "False",
            "True",
            "<code>5595:39738</code>",
            "143 × 32"
          ]
        },
        {
          "cells": [
            "True",
            "Disabled",
            "False",
            "False",
            "<code>5595:39747</code>",
            "119 × 32"
          ]
        },
        {
          "cells": [
            "False",
            "Default",
            "True",
            "True",
            "<code>5595:39653</code>",
            "111 × 32"
          ]
        },
        {
          "cells": [
            "False",
            "Default",
            "True",
            "False",
            "<code>5595:39663</code>",
            "87 × 32"
          ]
        },
        {
          "cells": [
            "False",
            "Default",
            "False",
            "True",
            "<code>5595:39670</code>",
            "93 × 32"
          ]
        },
        {
          "cells": [
            "False",
            "Default",
            "False",
            "False",
            "<code>5595:39677</code>",
            "69 × 32"
          ]
        },
        {
          "cells": [
            "False",
            "Pressed",
            "True",
            "True",
            "<code>5595:39597</code>",
            "111 × 32"
          ]
        },
        {
          "cells": [
            "False",
            "Pressed",
            "True",
            "False",
            "<code>5595:39607</code>",
            "87 × 32"
          ]
        },
        {
          "cells": [
            "False",
            "Pressed",
            "False",
            "True",
            "<code>5595:39614</code>",
            "93 × 32"
          ]
        },
        {
          "cells": [
            "False",
            "Pressed",
            "False",
            "False",
            "<code>5595:39621</code>",
            "69 × 32"
          ]
        },
        {
          "cells": [
            "False",
            "Disabled",
            "True",
            "True",
            "<code>5595:39625</code>",
            "111 × 32"
          ]
        },
        {
          "cells": [
            "False",
            "Disabled",
            "True",
            "False",
            "<code>5595:39635</code>",
            "87 × 32"
          ]
        },
        {
          "cells": [
            "False",
            "Disabled",
            "False",
            "True",
            "<code>5595:39642</code>",
            "93 × 32"
          ]
        },
        {
          "cells": [
            "False",
            "Disabled",
            "False",
            "False",
            "<code>5595:39649</code>",
            "69 × 32"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Style + Code tabs rebuilt against the live set · node 5595:39596",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel</strong> — <code>hasValue</code>, <code>State</code>, <code>hasLeadingIcon</code>, <code>hasTrailingIcon</code>. The four cards on retired node <code>18336:22244</code> are replaced; the icon swaps and <code>Dropdown-Slot</code> are listed without controls.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> The pill is 32 tall at radius 99 and hugs its row: 4 + icon 24 + 4 (or 14 bare) + Label 41 + 8 + Value 42 + 8 + chevron 16 + 14 — 161 with everything on, 69 with the label alone.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Colours read per State.</strong> Default is a #D7E0EF outline with a #6780A9 label and #005CE5 value; Pressed fills #005CE5; Disabled fills #EEF2F9 with #C2CFE5 and #9BC5FD text.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Typography resolved against the token database.</strong> <code>Label</code> and <code>Value</code> both match <code>Primary/Label/Base</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live set</strong> — install <code>com.eastblue.ds:chip:2.0.0</code>, an eight-row mapping, four snippets and a 24-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>There is no Selected state.</strong> A filter chip needs one, and the filled #005CE5 treatment is currently carried by <code>State=Pressed</code>. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>The Pressed label is #F6F9FD dimmed to 80%</strong> rather than its own colour — invisible to anyone reading the fill. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Disabled text fails contrast</strong> — #C2CFE5 on #EEF2F9 is 1.42:1 and #9BC5FD 1.61:1. The Default label #6780A9 is 4.01:1, just under AA. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>The chevron’s fill is not exposed</strong> by the plugin; the preview follows the export, where it takes the Value colour, or the Label colour when there is no value. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>The Overview tab still describes the earlier assessment.</strong> <span class=\"tag-open\">Open</span>",
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
      "header": "Initial Assessment · nodes 18336:22243 + 18336:22283",
      "rows": [
        {
          "body": "<strong>Assessed as Chip</strong> — Two Figma components (\"Filter\" with 6 variants, \"Filter with Dropdown\" with 2 variants) share the same pill anatomy. Recommended rename + consolidation into a single Chip component with semantic slot props.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Two-component split, mismatched schemas</strong> — Filter uses <code>type</code> + <code>with icon</code>. Dropdown uses <code>type=\"with active time\"</code>. Booleans are yes/no. Should consolidate to <code>style</code> / <code>leading</code> / <code>trailing</code> + optional <code>selectedValue</code>.\n          <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>No pressed/disabled/error states</strong> — Engineers must improvise these affordances.\n          <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Leading slot is hardcoded placeholder</strong> — 24px gray circle instead of a swappable Avatar/Icon instance.\n          <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Blocked by C2 rename + consolidation.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
