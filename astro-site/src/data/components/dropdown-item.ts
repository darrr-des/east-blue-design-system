import type { ComponentData, DemoControlSection } from '../types';

/* Demo controls for the Style tab's single spec card. Four axes, but the
   State × isSelected grid is deliberately sparse — see the resolved list. */
const selectItemControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        options: [
          { value: 'icon', label: 'Icon' },
          { value: 'pesosignvector', label: 'PesoSignVector' },
          { value: 'flag', label: 'Flag' },
          { value: 'pesosigntext', label: 'PesoSignText' }
        ],
        defaultValue: 'icon'
      },
      {
        label: 'Density',
        prop: 'density',
        options: [
          { value: 'compact', label: 'Compact' },
          { value: 'default', label: 'Default' },
          { value: 'comfortable', label: 'Comfortable' }
        ],
        defaultValue: 'compact'
      },
      {
        label: 'State',
        prop: 'state',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'pressed', label: 'Pressed' },
          { value: 'disabled', label: 'Disabled' }
        ],
        defaultValue: 'default'
      },
      {
        label: 'isSelected',
        prop: 'isselected',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ],
        defaultValue: 'false'
      }
    ]
  }
];

export const dropdownItem: ComponentData = {
  "meta": {
    "slug": "dropdown-item",
    "name": "Select Item",
    "node": "7947:111969",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=7947-111969",
    "description": "One selectable row inside a Select Group — a leading element, a label with optional supporting text, and an optional trailing badge.",
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
    "navGroup": "Select",
    "verdict": {
      "kind": "keep",
      "title": "Keep — every finding from the last assessment is closed",
      "text": "The previous pass left four things: an enum value spelled <code>disabeld</code>, a Country variant drawing its flag from a raster PNG, no pressed state at all, and Disabled modelled as a <code>type</code> value rather than a state. All four are fixed. Disabled and Pressed are now values on an orthogonal <code>State</code> axis, and the flag is a real vector instance from the Flags Library — the exported SVG is paths and masks with no image in it. This pass closed the value naming, so <code>Type</code> now reads <code>Icon</code>, <code>PesoSignVector</code>, <code>Flag</code> and <code>PesoSignText</code>. Nothing is outstanding on the component itself; Code Connect stays open because the native library does not exist yet."
    }
  },
  "overview": {
    "inContextNote": "Rows appear inside a Select Group, which is what a Select opens. On its own the row is never shown — the preview here is a single row at the size the group would give it.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"sitem-demo-preview\"><div class=\"eb-preview-sitem eb-preview-sitem--compact\"><span class=\"eb-preview-sitem__lead eb-preview-sitem__lead--icon\"></span><span class=\"eb-preview-sitem__content\"><span class=\"eb-preview-sitem__primary\">Text</span></span><span class=\"eb-preview-sitem__trail\"></span></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select id=\"sitem-ctrl-type\" class=\"demo-panel-select\" onchange=\"_sitemUpdate()\"><option value=\"icon\" selected=\"\">Icon</option><option value=\"pesosignvector\">PesoSignVector</option><option value=\"flag\">Flag</option><option value=\"pesosigntext\">PesoSignText</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Density</span><select id=\"sitem-ctrl-density\" class=\"demo-panel-select\" onchange=\"_sitemUpdate()\"><option value=\"compact\" selected=\"\">Compact</option><option value=\"default\">Default</option><option value=\"comfortable\">Comfortable</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"sitem-ctrl-state\" class=\"demo-panel-select\" onchange=\"_sitemUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"pressed\">Pressed</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isSelected</span><select id=\"sitem-ctrl-isselected\" class=\"demo-panel-select\" onchange=\"_sitemUpdate()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Supporting Text</span><select id=\"sitem-ctrl-supporting\" class=\"demo-panel-select\" onchange=\"_sitemUpdate()\"><option value=\"false\" selected=\"\">hidden</option><option value=\"true\">shown</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Badge</span><select id=\"sitem-ctrl-badge\" class=\"demo-panel-select\" onchange=\"_sitemUpdate()\"><option value=\"false\" selected=\"\">hidden</option><option value=\"true\">shown</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One row serving every Select in the product. Three densities cover compact pickers through to comfortable lists, and the four leading types cover the cases the product actually has."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its own height, padding, type and colour, with the leading, content and trailing pieces each coming from their own component rather than being drawn inline."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>State</code> is orthogonal to <code>Type</code> after the rebuild, the <code>disabeld</code> spelling is gone, and the multi-word values are joined — <code>PesoSignVector</code> and <code>PesoSignText</code>, matching the same values on <a href=\"/components/dropdown\">Select</a>."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Built to fill <a href=\"/components/dropdown-item-group\">Select Group</a>'s <code>⤷ SelectionSlot</code>. Leading, content and trailing are separate components, so the row composes rather than redrawing their internals."
      }
    ],
    "behavior": [
      {
        "state": "State=Default",
        "ios": "na",
        "android": "na",
        "property": "row #FFFFFF",
        "notes": "Label <code>#0A2757</code>. The row the group ships six of."
      },
      {
        "state": "State=Pressed",
        "ios": "na",
        "android": "na",
        "property": "row #F6F9FD",
        "notes": "The row tints; the label colour does not change."
      },
      {
        "state": "State=Disabled",
        "ios": "na",
        "android": "na",
        "property": "row #FFFFFF",
        "notes": "Label drops to <code>#C2CFE5</code>. The row keeps its white background rather than tinting."
      },
      {
        "state": "isSelected=true",
        "ios": "na",
        "android": "na",
        "property": "label #005CE5",
        "notes": "Label and leading icon turn brand blue. The row background stays white — selection is carried by colour, not by a fill."
      },
      {
        "state": "Density",
        "ios": "na",
        "android": "na",
        "property": "40 / 48 / 56",
        "notes": "Compact, Default and Comfortable change the row height and its vertical padding. The content block itself is the same in all three."
      },
      {
        "state": "Supporting Text",
        "ios": "na",
        "android": "na",
        "property": "hidden by default",
        "notes": "A second line under the label. The row hugs, so enabling it grows Comfortable from 56 to 60."
      }
    ],
    "resolved": [
      {
        "headline": "The disabeld typo is gone.",
        "body": "The old build shipped a misspelled enum value, and the documentation carried both <code>type:disabeld</code> and <code>type:disabled</code> keys defensively so the spec table would render either way. Disabled is now a value on the <code>State</code> axis, spelled correctly, and the defensive duplicate is no longer needed.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Disabled is a state, not a type.",
        "body": "It used to be a value on <code>type</code>, which meant a disabled row could not also be an icon row or a flag row — the two ideas were competing for one axis. <code>State = Default | Pressed | Disabled</code> is now orthogonal to <code>Type</code>, so every leading type has all three.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The flag is a real vector.",
        "body": "The Country variant drew its flag from a raster PNG. It is now a <code>Flags Library - 16px</code> instance — the exported SVG is paths, masks and a boolean operation with no <code>&lt;image&gt;</code> element anywhere in it, so it scales and recolours like every other asset in the system.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Pressed exists now.",
        "body": "There was no pressed treatment at all, on a row whose entire purpose is being tapped. Every Type and Density now has <code>State=Pressed</code>, tinting the row to <code>#F6F9FD</code>.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "The multi-word values are joined.",
        "body": "<code>Peso Sign</code> and <code>Text - Peso Sign</code> carried spaces and a hyphen separator. They are now <code>PesoSignVector</code> and <code>PesoSignText</code> — renamed for what they actually are rather than how they were first described, and matching the same two values on <a href=\"/components/dropdown\">Select</a>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The sparse State × isSelected grid is deliberate.",
        "body": "Four of the six combinations exist per Type and Density: Default with either <code>isSelected</code>, plus Pressed and Disabled unselected. Selected-and-pressed and selected-and-disabled are intentionally left out, which is why the set is 48 variants rather than 72.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Type stays a fixed enum rather than a slot.",
        "body": "All four values differ only in what sits in the 24 × 24 leading element, and that element is already an instance — so promoting it to a slot would collapse the set from 48 variants to 12 and let any future leading content in without a fifth value. Kept as an enum on purpose: fixed choices are easier for less experienced designers to use correctly than an open slot. Carried as a recommendation rather than a fault, for whenever flexibility matters more than guardrails.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native library does not exist yet, so there is nothing to map onto. The component side is ready: <code>Type</code>, <code>Density</code>, <code>State</code> and <code>isSelected</code> all map one to one now the multi-word values are joined.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Promote the leading element to a slot when guardrails matter less.",
        "body": "<code>Type</code> exists only to enumerate what goes in the 24 × 24 leading box, and that box is already an instance. Turning it into <code>⤷ LeadingSlot</code> would take the set from 48 variants to 12 and absorb any future leading content — a flag for a new market, a merchant logo, an avatar — without a fifth enum value. The trade is discoverability: a slot gives a designer no menu to pick from. Worth revisiting once the team is comfortable with the slot pattern, which is the same move that worked on <a href=\"/components/list-item-asset\">List Item - Asset</a>.",
        "tag": "Slot"
      },
      {
        "headline": "Mute Supporting Text in the disabled state.",
        "body": "Primary Text drops to <code>#C2CFE5</code> when the row is disabled, but Supporting Text stays at <code>#6780A9</code> in every state. In a disabled row that leaves the supporting line noticeably darker than the label it supports, which inverts their hierarchy. It only shows when Supporting Text is switched on, so this is latent rather than visible today.",
        "tag": "Token"
      },
      {
        "headline": "Check Supporting Text's contrast before shipping it.",
        "body": "<code>#6780A9</code> on white is 4.01:1. At 12px SemiBold that counts as normal text under WCAG, which needs 4.5:1 — so the supporting line falls just short. A step darker would clear it. Worth settling before the line is used, rather than after it appears in a screen.",
        "tag": "A11y"
      },
      {
        "headline": "Pass the icon-grid scaffolding upstream.",
        "body": "The leading icon instances nest a <code>Grid</code> template carrying <code>Guide lines</code>, <code>Keyshapes</code> and <code>Trim area</code>. They are hidden and do not render, so this is not a fault here, but they ship inside every instance and belong to the icon library rather than to this row.",
        "tag": "Docs"
      },
      {
        "headline": "Document when to use PesoSignVector versus PesoSignText.",
        "body": "The two render almost identically at 16px — one is a custom SVG drawn to match the font, the other is Proxima's own ₱ glyph. The distinction is real and deliberate, but a designer picking from a dropdown cannot see it. One sentence on the component saves a coin-flip.",
        "tag": "Docs"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"/components/dropdown-item-group\">Select Group</a> is the surface these rows fill, and <a href=\"/components/dropdown\">Select</a> is the control that opens it. <a href=\"/components/select-field\">Select Field</a> is the trigger, deliberately outside this family's scope.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Structure",
    "specCards": [
      {
        "cardKey": "sitem-spec-card-default",
        "demoKey": "default",
        "demoControls": selectItemControls,
        "title": "Select Item",
        "node": "7947:111969",
        "description": "Four axes, 48 variants. Leading, content and trailing are each their own component, so the row composes rather than drawing their internals.",
        "previewHtml": "<div id=\"sitem-spec-default\"><div class=\"eb-preview-sitem eb-preview-sitem--compact\"><span class=\"eb-preview-sitem__lead eb-preview-sitem__lead--icon\"></span><span class=\"eb-preview-sitem__content\"><span class=\"eb-preview-sitem__primary\">Text</span></span><span class=\"eb-preview-sitem__trail\"></span></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Icon", "prop": "type",
                "variants": {
                  "type:pesosignvector": { "value": "PesoSignVector — custom ₱ SVG" },
                  "type:flag": { "value": "Flag — Flags Library - 16px" },
                  "type:pesosigntext": { "value": "PesoSignText — Proxima's ₱ glyph" }
                }
              },
              { "key": "Density", "value": "Compact", "prop": "density",
                "variants": {
                  "density:default": { "value": "Default" },
                  "density:comfortable": { "value": "Comfortable" }
                }
              },
              { "key": "State", "value": "Default", "prop": "state",
                "variants": {
                  "state:pressed": { "value": "Pressed" },
                  "state:disabled": { "value": "Disabled" }
                }
              },
              { "key": "isSelected", "value": "false", "prop": "isselected",
                "variants": {
                  "isselected:true": { "value": "true" }
                }
              },
              { "key": "Leading Element", "value": "24 × 24 instance",
                "variants": {
                  "type:flag": { "value": "16 × 24 instance" }
                }
              },
              { "key": "Content Element", "value": "Primary Text · Supporting Text (hidden)" },
              { "key": "Trailing Element", "value": "Badge (hidden)" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Row", "value": "#FFFFFF", "token": "library variable · name pending Dev Mode read", "swatch": true,
                "variants": {
                  "state:pressed": { "value": "#F6F9FD" }
                }
              },
              { "key": "Primary Text", "value": "#0A2757", "token": "library variable · name pending Dev Mode read", "swatch": true,
                "variants": {
                  "state:disabled": { "value": "#C2CFE5" },
                  "isselected:true": { "value": "#005CE5" }
                }
              },
              { "key": "Supporting Text", "value": "#6780A9 — unchanged in every state", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Leading Element", "value": "follows the label colour", "token": "–" },
              { "key": "Badge", "value": "#E5F1FF bg · #005CE5 label", "token": "library variable · name pending Dev Mode read", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "320 — fills the group", "mono": true },
              { "key": "Height", "value": "40", "mono": true,
                "variants": {
                  "density:default": { "value": "48" },
                  "density:comfortable": { "value": "56" }
                }
              },
              { "key": "Height with Supporting Text", "value": "grows — the row hugs its content", "mono": true,
                "variants": {
                  "density:comfortable": { "value": "60" }
                }
              },
              { "key": "Side inset", "value": "12", "mono": true },
              { "key": "Leading Element", "value": "24 × 24", "mono": true,
                "variants": {
                  "type:flag": { "value": "16 × 24" }
                }
              },
              { "key": "Content Element", "value": "216 × 24", "mono": true },
              { "key": "Trailing Element", "value": "40 × 24", "mono": true },
              { "key": "Corner radius", "value": "0 — the group clips the first and last rows", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text styles", "value": "shared library styles · names pending Dev Mode read", "mono": true },
              { "key": "Primary Text", "value": "Proxima Soft SemiBold · 16 / 20 · +0.25", "mono": true },
              { "key": "Supporting Text", "value": "Proxima Soft SemiBold · 12 / 14 · +0.5", "mono": true },
              { "key": "Badge #value", "value": "Proxima Soft Bold · 12 / 12 · +0.5", "mono": true },
              { "key": "Per density", "value": "identical at all three — density changes padding, not type", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span>\n    leading<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.icon</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"settings\"</span><span class=\"syn-punc\">),</span>\n    isSelected<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebDensity</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.compact</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span>\n    leading <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectLeading</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">R</span><span class=\"syn-punc\">.</span>drawable<span class=\"syn-punc\">.</span>settings<span class=\"syn-punc\">),</span>\n    selected <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span><span class=\"syn-punc\">,</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Compact</span>\n<span class=\"syn-punc\">)</span>"
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "Swift Package Manager",
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/gcash/east-blue-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Gradle",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.gcash.eastblue:components:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. Snippets show the intended shape, not shipped code."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters.",
      "rows": [
        { "figma": "Type", "swift": "leading: EBSelectLeading", "compose": "leading: EBSelectLeading" },
        { "figma": "Density", "swift": ".ebDensity(.compact / .default / .comfortable)", "compose": "density: EBDensity" },
        { "figma": "State", "swift": "driven by interaction · .disabled(true)", "compose": "driven by interaction · enabled = false" },
        { "figma": "isSelected", "swift": "isSelected: Bool", "compose": "selected: Boolean" },
        { "figma": "Primary Text", "swift": "label: String", "compose": "label: String" },
        { "figma": "Supporting Text", "swift": "supporting: String?", "compose": "supporting: String?" },
        { "figma": "Trailing Element", "swift": "@ViewBuilder trailing: () -> Trailing", "compose": "trailing: (@Composable () -> Unit)?" }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "A plain row",
        "swift": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Savings account\"</span><span class=\"syn-punc\">,</span> leading<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.icon</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"wallet\"</span><span class=\"syn-punc\">))</span>",
        "compose": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Savings account\"</span><span class=\"syn-punc\">,</span>\n    leading <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectLeading</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">R</span><span class=\"syn-punc\">.</span>drawable<span class=\"syn-punc\">.</span>wallet<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Selected, with supporting text",
        "swift": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-str\">\"GCash wallet\"</span><span class=\"syn-punc\">,</span>\n    supporting<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Available balance PHP 1,240.00\"</span><span class=\"syn-punc\">,</span>\n    leading<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pesoSignVector</span><span class=\"syn-punc\">,</span>\n    isSelected<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"GCash wallet\"</span><span class=\"syn-punc\">,</span>\n    supporting <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Available balance PHP 1,240.00\"</span><span class=\"syn-punc\">,</span>\n    leading <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectLeading</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">PesoSignVector</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "A country row",
        "swift": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Philippines\"</span><span class=\"syn-punc\">,</span> leading<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.flag</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"PH\"</span><span class=\"syn-punc\">))</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebDensity</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.comfortable</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Philippines\"</span><span class=\"syn-punc\">,</span>\n    leading <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectLeading</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Flag</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"PH\"</span><span class=\"syn-punc\">),</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Comfortable</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Exposed as a selectable option",
        "ios": "<code>.accessibilityAddTraits(.isButton)</code> plus <code>.isSelected</code> when chosen",
        "android": "<code>Modifier.selectable(selected = …, role = Role.RadioButton)</code>"
      },
      {
        "requirement": "Selection is not colour-only",
        "ios": "Selected state announced, not just rendered in brand blue",
        "android": "<code>selected = true</code> carries into the node's state description"
      },
      {
        "requirement": "Supporting text reads with the label",
        "ios": "<code>.accessibilityElement(children: .combine)</code>",
        "android": "<code>Modifier.semantics(mergeDescendants = true)</code>"
      },
      {
        "requirement": "Leading element is decorative",
        "ios": "<code>.accessibilityHidden(true)</code> — except Flag, whose country belongs in the label",
        "android": "<code>contentDescription = null</code> — same exception"
      },
      {
        "requirement": "Row meets the touch minimum",
        "ios": "Compact is 40 — needs 44 of hit area even where the row draws shorter",
        "android": "Compact is 40 — needs 48dp"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Pick one Density for a whole list.",
        "dontText": "Don't mix densities inside one Select Group — the rows stop scanning as a column."
      },
      {
        "doText": "Use Flag when the option is a country and the flag identifies it.",
        "dontText": "Don't rely on the flag alone — the country name belongs in the label for screen readers."
      },
      {
        "doText": "Keep the label short enough to sit on one line.",
        "dontText": "Don't push detail into the label when Supporting Text is the place for it."
      },
      {
        "doText": "Let the group own the dividers between rows.",
        "dontText": "Don't add a divider inside the row — Select Group's BorderType already places them."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Leading, Content and Trailing are each their own component. The row draws none of their internals."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The <code>disabeld</code> typo is gone, the multi-word values are joined, and <code>Type</code> is a deliberate enum rather than a slot."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Fills resolve to library variables. Supporting Text's <code>#6780A9</code> is 4.01:1 on white, just under AA for 12px — carried as a recommendation."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Disabled is a state rather than a type, so the axes map cleanly onto a selectable list row on both platforms."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Pressed now exists across every Type and Density. The two missing selected combinations are confirmed intentional."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The raster flag is now a vector Flags Library instance. The icons nest hidden grid scaffolding, which belongs to the icon library."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — the native library does not exist yet."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All four axes map one to one with no rename at the boundary now the multi-word values are joined."
      },
      {
        "aspect": "Token coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Bindings are in place; only the human-readable names are outstanding."
      },
      {
        "aspect": "Registration",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until the native library exists."
      }
    ],
    "variants": {
      "total": 48,
      "description": "4 Type × 3 Density × 4 of the 6 State × isSelected combinations = 48. Selected-and-pressed and selected-and-disabled are intentionally omitted, which is what keeps it from being 72.",
      "columns": ["Type", "Leading element", "State × isSelected", "Heights", "Count"],
      "rows": [
        { "cells": ["Icon", "24 × 24 icon instance", "Default ×2, Pressed, Disabled", "40 / 48 / 56", "12"] },
        { "cells": ["PesoSignVector", "custom ₱ SVG matched to the font", "Default ×2, Pressed, Disabled", "40 / 48 / 56", "12"] },
        { "cells": ["Flag", "Flags Library - 16px vector", "Default ×2, Pressed, Disabled", "40 / 48 / 56", "12"] },
        { "cells": ["PesoSignText", "Proxima's native ₱ glyph", "Default ×2, Pressed, Disabled", "40 / 48 / 56", "12"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "3.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt on the 2026 Working File · node 7947:111969",
      "rows": [
        {
          "body": "<strong>The <code>disabeld</code> typo is gone.</strong> Disabled is now a correctly spelled value on the <code>State</code> axis, so the documentation no longer needs to carry both spellings defensively.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>Disabled promoted from a <code>type</code> value to an orthogonal <code>State</code>.</strong> Every leading type now has Default, Pressed and Disabled instead of the two ideas competing for one axis.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>The raster PNG flag is a vector.</strong> Now a <code>Flags Library - 16px</code> instance — the exported SVG contains no image element.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>Pressed state added</strong> across all four types and three densities, tinting the row to <code>#F6F9FD</code>.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<code>Peso Sign</code> and <code>Text - Peso Sign</code> renamed to <code>PesoSignVector</code> and <code>PesoSignText</code> — spaces and the hyphen separator removed, and named for what they are rather than how they were first described.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "Selected-and-pressed and selected-and-disabled confirmed as intentionally omitted, holding the set at 48 variants rather than 72.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "Node moved from <code>18577:13033</code> (Sticker Sheets v2) to <code>7947:111969</code> (2026 Working File), and <code>navGroup</code> changed from Dropdown to Select to match the component's name.",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        }
      ]
    },
    {
      "version": "2.1.0",
      "date": "July 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "isSelected normalised · node 25689:371384",
      "rows": [
        {
          "body": "<strong><code>isSelected</code> collapsed to two values</strong> — the ambiguous third <code>Default</code> value was removed; the prop now applies uniformly across Icon, Peso Sign, and Flag. Coverage is consistent at 9 × unselected + 3 × selected per Type, and selection maps 1:1 to a native <code>Bool</code>.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>Boolean vocabulary standardised</strong> — <code>isSelected</code> values renamed <code>Yes</code>/<code>No</code> → <code>true</code>/<code>false</code> across all 36 variants. Select Item now matches the documented C2 rule and the rebuilt Radio Button; the system is on a single boolean vocabulary.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "July 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt as Select Item · node 25689:371384",
      "rows": [
        {
          "body": "<strong>Component rebuilt and renamed Dropdown Item → Select Item</strong> — new slot-based architecture: Type (Icon / Peso Sign / Flag) × Density (Compact / Default / Comfortable) × State (Default / Pressed / Disabled) × isSelected (No / Yes / Default), with named Leading / Content / Trailing element slots.\n          <span class=\"tag-fixed\">Restructured</span>",
          "delta": {
            "kind": "resolved",
            "label": "Rebuild"
          }
        },
        {
          "body": "<strong>Enum typo <code>disabeld</code> resolved</strong> — disabled is now a correctly-spelled orthogonal <code>State</code> value, not a misspelled content type. Composes with any Type (e.g. Peso Sign + Disabled), resolving the earlier C2 + C4 issues.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 · C4 Resolved"
          }
        },
        {
          "body": "<strong>Raster flag replaced with a vector instance</strong> — the country flag now maps to <code>Flags Library - 16px</code> in the Leading slot, locale-swappable rather than a baked-in Philippines PNG.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6 Resolved"
          }
        },
        {
          "body": "<strong>Pressed state + selected affordance added</strong> — <code>State=Pressed</code> covers touch feedback (focused is N/A on mobile), and <code>isSelected=Yes</code> flips the label to brand color plus exposes a checkmark via the Trailing icon slot.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong>Amount variant generalized</strong> — the peso sign is now a Leading vector slot (<code>Peso Sign - Proxima</code>) with the value in Content; the trailing slot stays free for a badge or value.\n          <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "Slot"
          }
        },
        {
          "body": "<strong><code>isSelected</code> exposes three values (No / Yes / Default)</strong> — ambiguous for a boolean and inconsistent across Types. Collapse to Yes/No.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — now unblocked by the rebuild; SwiftUI / Compose mappings not yet registered.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18577:13033",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 9 variants documented across type (text / amount / country / text with tag / disabeld) × selected (true/false). Row primitive for Dropdown overlay.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Enum value <code>disabeld</code> misspelled</strong> — ships into the generated TS type. Rename to <code>disabled</code>.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Country variant uses a raster PNG flag</strong> — Philippines image is bitmap, not a vector flag instance. Blocks reuse and native handoff.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>No pressed or focused state variants</strong> — only <code>selected</code> on/off and a pseudo-disabled content type. Touch/keyboard feedback unmodeled.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Disabled modeled as <code>type</code> value</strong> — collides with content types (text / amount / country). Should be an orthogonal <code>disabled</code> axis.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — no CLI mappings registered yet; blocked by C2, C5, C6.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
