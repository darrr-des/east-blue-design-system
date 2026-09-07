import type { ComponentData, DemoControlSection } from '../types';
import { buildColorsTable } from './_helpers';

/* Demo controls for the Style tab's single spec card. Four axes, but the
   State × isSelected grid is deliberately sparse — see the resolved list. */
const selectItemControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: "Density",
        prop: "density",
        control: 'select' as const,
        defaultValue: "compact",
        options: [
          { value: "compact", label: "Compact" },
          { value: "default", label: "Default" },
          { value: "comfortable", label: "Comfortable" }
        ]
      },
      {
        label: "State",
        prop: "state",
        control: 'select' as const,
        defaultValue: "default",
        options: [
          { value: "default", label: "Default" },
          { value: "pressed", label: "Pressed" },
          { value: "disabled", label: "Disabled" }
        ]
      },
      {
        label: "isSelected",
        prop: "isselected",
        control: 'toggle' as const,
        defaultValue: "false",
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: "hasLeading",
        prop: "hasleading",
        control: 'toggle' as const,
        defaultValue: "true",
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: "hasTrailing",
        prop: "hastrailing",
        control: 'toggle' as const,
        defaultValue: "true",
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
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
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"sitem-demo-preview\"><div class=\"eb-preview-sitem-stack\"><div class=\"eb-preview-sitem eb-preview-sitem--compact\"><span class=\"eb-preview-sitem__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg></span><span class=\"eb-preview-sitem__content\"><span class=\"eb-preview-sitem__primary\">Text</span></span><span class=\"eb-preview-sitem__trail\"><span class=\"eb-preview-sitem__badge\">Label</span></span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select id=\"sitem-ctrl-type\" class=\"demo-panel-select\" onchange=\"_sitemUpdate()\"><option value=\"icon\" selected>Icon</option><option value=\"pesosignvector\">PesoSignVector</option><option value=\"flag\">Flag</option><option value=\"pesosigntext\">PesoSignText</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Density</span><select id=\"sitem-ctrl-density\" class=\"demo-panel-select\" onchange=\"_sitemUpdate()\"><option value=\"compact\" selected>Compact</option><option value=\"default\">Default</option><option value=\"comfortable\">Comfortable</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"sitem-ctrl-state\" class=\"demo-panel-select\" onchange=\"_sitemUpdate()\"><option value=\"default\" selected>Default</option><option value=\"pressed\">Pressed</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isSelected</span><select id=\"sitem-ctrl-isselected\" class=\"demo-panel-select\" onchange=\"_sitemUpdate()\"><option value=\"false\" selected>false</option><option value=\"true\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasLeading</span><select id=\"sitem-ctrl-hasleading\" class=\"demo-panel-select\" onchange=\"_sitemUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected>true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasTrailing</span><select id=\"sitem-ctrl-hastrailing\" class=\"demo-panel-select\" onchange=\"_sitemUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected>true</option></select></div></div></div></div>",
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
    "heading": "Type",
    "description": "Four leading marks on one row shape. <code>Density</code> sets the height — 40, 48 or 56 — and changes nothing else; <code>State</code> and <code>isSelected</code> move the row fill and the label colour between them. The grid is deliberately sparse: <code>isSelected=true</code> exists only alongside <code>State=Default</code>, which is what holds the set at <strong>48 variants rather than the 72</strong> a full matrix would give. <code>hasTrailing</code> ships <strong>true</strong> on purpose: the badge advertises that the slot exists at a glance. In practice both consumers — <a href=\"/components/dropdown-item-group\">Select Group</a> and <a href=\"/components/dropdown\">Select</a> — set it false, so a row in a real list shows no badge.",
    "colorsTables": [
      buildColorsTable({
        title: "Colors by State",
        description: "Six roles. The row and the label are the only two that move: Pressed tints the row, Disabled fades the label, and isSelected turns it brand blue — which is why selected-and-pressed does not exist as a variant. Supporting Text is listed because the layer is there, but it ships hidden, so nothing on the page currently draws it. The badge is a Badge instance, so its two colours are that component’s rather than this one’s.",
        columns: ["Default", "Pressed", "Disabled", "Selected"],
        rows: [
          { role: "Row", token: "bg/color-bg-main · bg/color-bg",
            values: ["#FFFFFF", "#F6F9FD", "#FFFFFF", "#FFFFFF"] },
          { role: "Primary Text", token: "text/color-text · -disabled · -primary",
            values: ["#0A2757", "#0A2757", "#C2CFE5", "#005CE5"] },
          { role: "Supporting Text (hidden)", token: "text/color-text-weaker",
            values: ["#6780A9", "#6780A9", "#6780A9", "#6780A9"] },
          { role: "Leading Element", token: "bg/color-bg-inverse",
            values: ["#0A2757", "#0A2757", "#0A2757", "#0A2757"] },
          { role: "Trailing Element · badge fill", token: "bg/color-bg-secondary",
            values: ["#E5F1FF", "#E5F1FF", "#E5F1FF", "#E5F1FF"] },
          { role: "Trailing Element · badge label", token: "text/color-text-primary · -primary-disabled",
            values: ["#005CE5", "#005CE5", "#9BC5FD", "#005CE5"] }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "sitem-spec-card-icon",
        "demoKey": "icon",
        "demoControls": selectItemControls,
        "title": "Icon",
        "node": "7947:111970",
        "description": "",
        "previewHtml": "<div id=\"sitem-spec-icon\"><div class=\"eb-preview-sitem-stack\"><div class=\"eb-preview-sitem eb-preview-sitem--compact\"><span class=\"eb-preview-sitem__lead\"><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg></span><span class=\"eb-preview-sitem__content\"><span class=\"eb-preview-sitem__primary\">Text</span></span><span class=\"eb-preview-sitem__trail\"><span class=\"eb-preview-sitem__badge\">Label</span></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Icon" },
              { "key": "Density", "value": "Compact", "prop": "density" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "isSelected", "value": "false", "prop": "isselected" },
              { "key": "hasLeading", "value": "true", "prop": "hasleading" },
              { "key": "hasTrailing", "value": "true — shown here to advertise the slot; both consumers set it false", "prop": "hastrailing" },
              { "key": "Leading Element", "value": "A 24 × 24 icon instance — Settings in the published variants" },
              { "key": "Content Element", "value": "Primary Text over a Supporting Text layer that ships hidden — not a property" },
              { "key": "Trailing Element", "value": "A Badge instance, 40 × 16, radius 4" },
              { "key": "Versions", "value": "48" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Row", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true, "variants": { "state:pressed": { "value": "#F6F9FD", "token": "bg/color-bg" } } },
              { "key": "Primary Text", "value": "#0A2757", "token": "text/color-text", "swatch": true, "variants": { "state:disabled": { "value": "#C2CFE5", "token": "text/color-text-disabled" }, "isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" }, "state:default|isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" } } },
              { "key": "Supporting Text", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true },
              { "key": "Leading Element", "value": "#0A2757", "token": "bg/color-bg-inverse", "swatch": true, "variants": { "state:disabled": { "value": "#C2CFE5", "token": "text/color-text-disabled" }, "isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" }, "state:default|isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" } } },
              { "key": "Trailing Element · badge fill", "value": "#E5F1FF", "token": "bg/color-bg-secondary", "swatch": true },
              { "key": "Trailing Element · badge label", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true, "variants": { "state:disabled": { "value": "#9BC5FD", "token": "text/color-text-primary-disabled" } } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Primary Text", "value": "Primary/Multi-line Label/Light/Base", "mono": true },
              { "key": "Supporting Text", "value": "Primary/Multi-line Label/Light/Fine", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "40 — Hug", "mono": true, "variants": { "density:default": { "value": "48 — Hug" }, "density:comfortable": { "value": "56 — Hug" } } },
              { "key": "Width", "value": "320", "mono": true },
              { "key": "Radius", "value": "0 — the group clips the first and last rows", "mono": true },
              { "key": "Padding H", "value": "12", "mono": true },
              { "key": "Padding V", "value": "8", "mono": true, "variants": { "density:default": { "value": "12" }, "density:comfortable": { "value": "16" } } },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Left, centred", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span>\n    type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.icon</span><span class=\"syn-punc\">,</span>\n    density<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.compact</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Icon</span><span class=\"syn-punc\">,</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Compact</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "sitem-spec-card-pesosignvector",
        "demoKey": "pesosignvector",
        "demoControls": selectItemControls,
        "title": "PesoSignVector",
        "node": "7947:112018",
        "description": "",
        "previewHtml": "<div id=\"sitem-spec-pesosignvector\"><div class=\"eb-preview-sitem-stack\"><div class=\"eb-preview-sitem eb-preview-sitem--compact\"><span class=\"eb-preview-sitem__lead eb-preview-sitem__lead--peso-vector\"><svg width=\"15\" height=\"24\" viewBox=\"0 0 15 24\" fill=\"none\" aria-hidden=\"true\"><path d=\"M8.23438 6.44531C9.85278 6.44534 11.2144 7.54183 11.6191 9.03223H12.1533C12.6311 9.0324 13.0185 9.41968 13.0186 9.89746C13.0186 10.3753 12.6311 10.7625 12.1533 10.7627H11.6475C11.2821 12.3099 9.8932 13.4619 8.23438 13.4619H5.75293V16.498C5.75271 17.0778 5.28289 17.5479 4.70312 17.5479C4.12345 17.5478 3.65354 17.0777 3.65332 16.498V10.7627H3.05273C2.57485 10.7626 2.1875 10.3754 2.1875 9.89746C2.18755 9.41961 2.57488 9.03229 3.05273 9.03223H3.65332V7.49805C3.65332 6.93887 4.09045 6.48214 4.6416 6.4502C4.67527 6.44658 4.70951 6.44532 4.74414 6.44531H8.23438ZM5.75293 10.7627V11.5576H8.23438C8.82481 11.5576 9.33957 11.2377 9.61816 10.7627H5.75293ZM5.75293 9.03223H9.54688C9.2565 8.6196 8.77714 8.34962 8.23438 8.34961H5.75293V9.03223Z\" fill=\"currentColor\"/></svg></span><span class=\"eb-preview-sitem__content\"><span class=\"eb-preview-sitem__primary\">Text</span></span><span class=\"eb-preview-sitem__trail\"><span class=\"eb-preview-sitem__badge\">Label</span></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "PesoSignVector" },
              { "key": "Density", "value": "Compact", "prop": "density" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "isSelected", "value": "false", "prop": "isselected" },
              { "key": "hasLeading", "value": "true", "prop": "hasleading" },
              { "key": "hasTrailing", "value": "true — shown here to advertise the slot; both consumers set it false", "prop": "hastrailing" },
              { "key": "Leading Element", "value": "A drawn ₱ — 15 wide, its own artwork rather than the font’s glyph" },
              { "key": "Content Element", "value": "Primary Text over a Supporting Text layer that ships hidden — not a property" },
              { "key": "Trailing Element", "value": "A Badge instance, 40 × 16, radius 4" },
              { "key": "Versions", "value": "48" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Row", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true, "variants": { "state:pressed": { "value": "#F6F9FD", "token": "bg/color-bg" } } },
              { "key": "Primary Text", "value": "#0A2757", "token": "text/color-text", "swatch": true, "variants": { "state:disabled": { "value": "#C2CFE5", "token": "text/color-text-disabled" }, "isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" }, "state:default|isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" } } },
              { "key": "Supporting Text", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true },
              { "key": "Leading Element", "value": "#0A2757", "token": "bg/color-bg-inverse", "swatch": true, "variants": { "state:disabled": { "value": "#C2CFE5", "token": "text/color-text-disabled" }, "isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" }, "state:default|isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" } } },
              { "key": "Trailing Element · badge fill", "value": "#E5F1FF", "token": "bg/color-bg-secondary", "swatch": true },
              { "key": "Trailing Element · badge label", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true, "variants": { "state:disabled": { "value": "#9BC5FD", "token": "text/color-text-primary-disabled" } } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Primary Text", "value": "Primary/Multi-line Label/Light/Base", "mono": true },
              { "key": "Supporting Text", "value": "Primary/Multi-line Label/Light/Fine", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "40 — Hug", "mono": true, "variants": { "density:default": { "value": "48 — Hug" }, "density:comfortable": { "value": "56 — Hug" } } },
              { "key": "Width", "value": "320", "mono": true },
              { "key": "Radius", "value": "0 — the group clips the first and last rows", "mono": true },
              { "key": "Padding H", "value": "12", "mono": true },
              { "key": "Padding V", "value": "8", "mono": true, "variants": { "density:default": { "value": "12" }, "density:comfortable": { "value": "16" } } },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Left, centred", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span>\n    type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pesosignvector</span><span class=\"syn-punc\">,</span>\n    density<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.compact</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">PesoSignVector</span><span class=\"syn-punc\">,</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Compact</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "sitem-spec-card-flag",
        "demoKey": "flag",
        "demoControls": selectItemControls,
        "title": "Flag",
        "node": "7947:112022",
        "description": "",
        "previewHtml": "<div id=\"sitem-spec-flag\"><div class=\"eb-preview-sitem-stack\"><div class=\"eb-preview-sitem eb-preview-sitem--compact\"><span class=\"eb-preview-sitem__lead eb-preview-sitem__lead--flag\"><svg width=\"16\" height=\"12\" viewBox=\"0 0 16 12\" fill=\"none\" aria-hidden=\"true\"><rect x=\"0.5\" y=\"0.5\" width=\"15\" height=\"11\" rx=\"1.5\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\"/><rect x=\"1\" y=\"1\" width=\"14\" height=\"1.4\" fill=\"#F15A5B\"/><rect x=\"1\" y=\"3.8\" width=\"14\" height=\"1.4\" fill=\"#F15A5B\"/><rect x=\"1\" y=\"6.6\" width=\"14\" height=\"1.4\" fill=\"#F15A5B\"/><rect x=\"1\" y=\"9.4\" width=\"14\" height=\"1.4\" fill=\"#F15A5B\"/><rect x=\"1\" y=\"1\" width=\"6\" height=\"5\" fill=\"#434389\"/></svg></span><span class=\"eb-preview-sitem__content\"><span class=\"eb-preview-sitem__primary\">Text</span></span><span class=\"eb-preview-sitem__trail\"><span class=\"eb-preview-sitem__badge\">Label</span></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Flag" },
              { "key": "Density", "value": "Compact", "prop": "density" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "isSelected", "value": "false", "prop": "isselected" },
              { "key": "hasLeading", "value": "true", "prop": "hasleading" },
              { "key": "hasTrailing", "value": "true — shown here to advertise the slot; both consumers set it false", "prop": "hastrailing" },
              { "key": "Leading Element", "value": "A Flags Library instance — a vector, which is what closed the raster finding" },
              { "key": "Content Element", "value": "Primary Text over a Supporting Text layer that ships hidden — not a property" },
              { "key": "Trailing Element", "value": "A Badge instance, 40 × 16, radius 4" },
              { "key": "Versions", "value": "48" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Row", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true, "variants": { "state:pressed": { "value": "#F6F9FD", "token": "bg/color-bg" } } },
              { "key": "Primary Text", "value": "#0A2757", "token": "text/color-text", "swatch": true, "variants": { "state:disabled": { "value": "#C2CFE5", "token": "text/color-text-disabled" }, "isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" }, "state:default|isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" } } },
              { "key": "Supporting Text", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true },
              { "key": "Leading Element", "value": "#0A2757", "token": "bg/color-bg-inverse", "swatch": true, "variants": { "state:disabled": { "value": "#C2CFE5", "token": "text/color-text-disabled" }, "isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" }, "state:default|isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" } } },
              { "key": "Trailing Element · badge fill", "value": "#E5F1FF", "token": "bg/color-bg-secondary", "swatch": true },
              { "key": "Trailing Element · badge label", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true, "variants": { "state:disabled": { "value": "#9BC5FD", "token": "text/color-text-primary-disabled" } } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Primary Text", "value": "Primary/Multi-line Label/Light/Base", "mono": true },
              { "key": "Supporting Text", "value": "Primary/Multi-line Label/Light/Fine", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "40 — Hug", "mono": true, "variants": { "density:default": { "value": "48 — Hug" }, "density:comfortable": { "value": "56 — Hug" } } },
              { "key": "Width", "value": "320", "mono": true },
              { "key": "Radius", "value": "0 — the group clips the first and last rows", "mono": true },
              { "key": "Padding H", "value": "12", "mono": true },
              { "key": "Padding V", "value": "8", "mono": true, "variants": { "density:default": { "value": "12" }, "density:comfortable": { "value": "16" } } },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Left, centred", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span>\n    type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.flag</span><span class=\"syn-punc\">,</span>\n    density<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.compact</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Flag</span><span class=\"syn-punc\">,</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Compact</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "sitem-spec-card-pesosigntext",
        "demoKey": "pesosigntext",
        "demoControls": selectItemControls,
        "title": "PesoSignText",
        "node": "7947:120575",
        "description": "",
        "previewHtml": "<div id=\"sitem-spec-pesosigntext\"><div class=\"eb-preview-sitem-stack\"><div class=\"eb-preview-sitem eb-preview-sitem--compact\"><span class=\"eb-preview-sitem__lead eb-preview-sitem__lead--peso-text\">₱</span><span class=\"eb-preview-sitem__content\"><span class=\"eb-preview-sitem__primary\">Text</span></span><span class=\"eb-preview-sitem__trail\"><span class=\"eb-preview-sitem__badge\">Label</span></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "PesoSignText" },
              { "key": "Density", "value": "Compact", "prop": "density" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "isSelected", "value": "false", "prop": "isselected" },
              { "key": "hasLeading", "value": "true", "prop": "hasleading" },
              { "key": "hasTrailing", "value": "true — shown here to advertise the slot; both consumers set it false", "prop": "hastrailing" },
              { "key": "Leading Element", "value": "Proxima Soft’s own ₱ set as type — 10 wide, so the label starts 5px further left than the vector’s" },
              { "key": "Content Element", "value": "Primary Text over a Supporting Text layer that ships hidden — not a property" },
              { "key": "Trailing Element", "value": "A Badge instance, 40 × 16, radius 4" },
              { "key": "Versions", "value": "48" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Row", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true, "variants": { "state:pressed": { "value": "#F6F9FD", "token": "bg/color-bg" } } },
              { "key": "Primary Text", "value": "#0A2757", "token": "text/color-text", "swatch": true, "variants": { "state:disabled": { "value": "#C2CFE5", "token": "text/color-text-disabled" }, "isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" }, "state:default|isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" } } },
              { "key": "Supporting Text", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true },
              { "key": "Leading Element", "value": "#0A2757", "token": "bg/color-bg-inverse", "swatch": true, "variants": { "state:disabled": { "value": "#C2CFE5", "token": "text/color-text-disabled" }, "isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" }, "state:default|isselected:true": { "value": "#005CE5", "token": "text/color-text-primary" } } },
              { "key": "Trailing Element · badge fill", "value": "#E5F1FF", "token": "bg/color-bg-secondary", "swatch": true },
              { "key": "Trailing Element · badge label", "value": "#005CE5", "token": "text/color-text-primary", "swatch": true, "variants": { "state:disabled": { "value": "#9BC5FD", "token": "text/color-text-primary-disabled" } } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Primary Text", "value": "Primary/Multi-line Label/Light/Base", "mono": true },
              { "key": "Supporting Text", "value": "Primary/Multi-line Label/Light/Fine", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "40 — Hug", "mono": true, "variants": { "density:default": { "value": "48 — Hug" }, "density:comfortable": { "value": "56 — Hug" } } },
              { "key": "Width", "value": "320", "mono": true },
              { "key": "Radius", "value": "0 — the group clips the first and last rows", "mono": true },
              { "key": "Padding H", "value": "12", "mono": true },
              { "key": "Padding V", "value": "8", "mono": true, "variants": { "density:default": { "value": "12" }, "density:comfortable": { "value": "16" } } },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Left, centred", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span>\n    type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pesosigntext</span><span class=\"syn-punc\">,</span>\n    density<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.compact</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">PesoSignText</span><span class=\"syn-punc\">,</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Compact</span>\n<span class=\"syn-punc\">)</span>"
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/AY-Org/eb-ds-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:select:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>select<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Select family: <a href=\"/components/dropdown\">Select</a>, <a href=\"/components/dropdown-item-group\">Select Group</a> and this component all ship in <code>com.eastblue.ds:select</code> and import <code>com.eastblue.ds.select.*</code>."
    },
    "propertyMapping": {
      "description": "Six properties, in the order the Figma property panel lists them. Three native parameters have no row: <code>label</code> and <code>supporting</code> are the two text layers inside Content Element, and the trailing content is a nested Badge instance — none is a component property, so Code Connect will have nothing to bind them to. <code>State</code> is the one property that is not a parameter either: Pressed is what the platform already does while a finger is down, and Disabled is each platform’s own idiom rather than an enum case. <code>Type</code> chooses the leading mark, and each mark brings its own width — 24, 16, 15 or 10 — which is deliberate; the row hugs whatever it is given rather than reserving a fixed slot.",
      "rows": [
        {
          "figma": "Type — Icon, PesoSignVector, Flag, PesoSignText",
          "swift": "<code>type: EBSelectItemType</code>",
          "compose": "<code>type: EBSelectItemType</code>"
        },
        {
          "figma": "Density — Compact, Default, Comfortable",
          "swift": "<code>density: EBSelectItemDensity = .compact</code>",
          "compose": "<code>density: EBSelectItemDensity = Compact</code>"
        },
        {
          "figma": "State — Default, Pressed, Disabled",
          "swift": "<em>not a parameter</em> — Pressed is the press itself; Disabled is <code>.disabled(true)</code>",
          "compose": "<em>not a parameter</em> — Disabled is <code>enabled = false</code>"
        },
        {
          "figma": "isSelected — true, false",
          "swift": "<code>isSelected: Bool = false</code>",
          "compose": "<code>isSelected: Boolean = false</code>"
        },
        {
          "figma": "hasLeading — true, false",
          "swift": "<code>hasLeading: Bool = true</code>",
          "compose": "<code>hasLeading: Boolean = true</code>"
        },
        {
          "figma": "hasTrailing — true, false",
          "swift": "<code>hasTrailing: Bool = true</code>",
          "compose": "<code>hasTrailing: Boolean = true</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Icon — a settings row",
        "swift": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Notifications\"</span><span class=\"syn-punc\">,</span>\n    type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.icon</span><span class=\"syn-punc\">,</span>\n    density<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.compact</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Notifications\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Icon</span><span class=\"syn-punc\">,</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Compact</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "PesoSignVector — an amount row, drawn mark",
        "swift": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Send money\"</span><span class=\"syn-punc\">,</span>\n    type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pesosignvector</span><span class=\"syn-punc\">,</span>\n    density<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.default</span><span class=\"syn-punc\">,</span>\n    hasTrailing<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Send money\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">PesoSignVector</span><span class=\"syn-punc\">,</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Default</span><span class=\"syn-punc\">,</span>\n    hasTrailing <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Flag — a country row",
        "swift": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Philippines\"</span><span class=\"syn-punc\">,</span>\n    type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.flag</span><span class=\"syn-punc\">,</span>\n    density<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.default</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Philippines\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Flag</span><span class=\"syn-punc\">,</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Default</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "PesoSignText — an amount row, typed mark",
        "swift": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Cash in\"</span><span class=\"syn-punc\">,</span>\n    type<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pesosigntext</span><span class=\"syn-punc\">,</span>\n    density<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.comfortable</span><span class=\"syn-punc\">,</span>\n    isSelected<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Cash in\"</span><span class=\"syn-punc\">,</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">PesoSignText</span><span class=\"syn-punc\">,</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectItemDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Comfortable</span><span class=\"syn-punc\">,</span>\n    isSelected <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
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
        "notes": "Every colour is bound and named: <code>bg/color-bg-main</code> and <code>bg/color-bg</code> on the row, <code>text/color-text</code> stepping to <code>-disabled</code> and <code>-primary</code> on the label, <code>bg/color-bg-inverse</code> on the leading mark — which tracks the label rather than staying fixed — and the badge’s <code>bg/color-bg-secondary</code> with <code>text/color-text-primary</code> stepping to <code>-primary-disabled</code>. Supporting Text is bound to <code>text/color-text-weaker</code> but ships hidden, so its 4.01:1 on white is not a live contrast concern; it becomes one the day the layer is switched on."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Four axes map onto a selectable list row on both platforms. <code>State</code> is the one that is not a parameter: Pressed is what the platform already does under a finger, and Disabled is each platform’s own idiom. The leading mark’s width varies by <code>Type</code> — 24, 16, 15 or 10 — which is deliberate, so the native row should hug what it is given rather than reserve a fixed slot. <code>hasTrailing</code> defaulting to true is deliberate too: the badge shows that the slot exists, and both consumers turn it off, so the native default should follow the primitive rather than the usage. The gap is that neither text layer nor the trailing instance is a Figma property; see C7."
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
        "notes": "Blocked — the native library does not exist yet. Worth noting for when it is not: <code>Primary Text</code>, <code>Supporting Text</code> and the trailing Badge are layers and a nested instance rather than component properties, so Code Connect will have nothing to bind the row’s two strings or its trailing content to. The six properties that do exist all trace 1:1."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 48,
      "description": "4 <code>Type</code> × 3 <code>Density</code> × 4 of the 6 <code>State</code> × <code>isSelected</code> combinations = <strong>48</strong>. Selected-and-pressed and selected-and-disabled are intentionally omitted, which is what keeps it from being 72. <code>hasLeading</code> and <code>hasTrailing</code> are boolean properties, so they switch the two nested instances without multiplying the set.",
      "columns": ["Type", "Leading element", "Width", "State × isSelected", "Heights", "Count"],
      "rows": [
        { "cells": ["Icon", "A 24 × 24 icon instance", "24", "Default ×2, Pressed, Disabled", "40 / 48 / 56", "12"] },
        { "cells": ["PesoSignVector", "Drawn ₱ artwork — one bar through the P", "15", "Default ×2, Pressed, Disabled", "40 / 48 / 56", "12"] },
        { "cells": ["Flag", "Flags Library instance — a vector", "16", "Default ×2, Pressed, Disabled", "40 / 48 / 56", "12"] },
        { "cells": ["PesoSignText", "Proxima Soft’s own ₱, set as type", "10", "Default ×2, Pressed, Disabled", "40 / 48 / 56", "12"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "3.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style and Code tabs rebuilt to the content guides — node 7947:111969",
      "rows": [
        {
          "body": "<strong><code>hasTrailing</code> defaults to true on purpose, and the page now says why.</strong> Both consumers — <a href=\"/components/dropdown-item-group\">Select Group</a> and <a href=\"/components/dropdown\">Select</a> — set it false, so no row in a real list shows a badge. That reads like a wrong default until you know the intent: the primitive shows the badge so the trailing slot is visible at a glance, and consumers turn it off. Recorded in the Style tab’s description, on every card’s Properties row and in C4, because the reasoning is not recoverable from the file and the next reviewer would otherwise file it as a finding.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Two controls in the live preview did nothing.</strong> The panel still offered <code>supporting</code> and <code>badge</code> from before the restructure, while the reader had moved to <code>hasLeading</code> and <code>hasTrailing</code> — so both were inert and neither reported an error. The panel now mirrors Figma’s six properties in order. The generator that writes it fails the build if the panel declares a control the script does not read, or the script reads one the panel does not declare.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The sparse-grid note broke the preview’s layout.</strong> Both preview frames centre their children, so the row and the note explaining an impossible combination sat side by side and stretched the frame. They now stack in a column fixed to the row’s own width, so the note wraps underneath in the live preview and the spec cards alike.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>One card became four.</strong> <code>Type</code> is the driving property, so Icon, PesoSignVector, Flag and PesoSignText each get a card. The other three axes — <code>Density</code>, <code>State</code>, <code>isSelected</code> — are controls on every card rather than cards of their own, which is what keeps four cards describing 48 variants.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Two properties were undocumented.</strong> The Figma panel carries <code>hasLeading</code> and <code>hasTrailing</code>, both defaulting to True; neither was on the page. Nothing changed in Figma — <code>get_node_info</code> cannot read property definitions.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>PesoSignVector was drawing the font’s glyph instead of its own artwork.</strong> The preview returned the literal <code>₱</code> character for both peso versions, with a note arguing the difference was invisible at that size. It is not: the vector is 15 wide against the text glyph’s 10, with a single bar through the P where Proxima draws two. The real path is now in the preview, exported from node 7947:112019 and drawn in <code>currentColor</code>. The two versions exist precisely because they are not interchangeable, and the preview had been erasing the distinction it was there to document.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The leading mark’s colour was recorded as fixed; it tracks the label.</strong> Exporting the same node in three states gives <code>#0A2757</code>, <code>#C2CFE5</code> disabled and <code>#005CE5</code> selected. The row now carries the same variants Primary Text does. The previous page said \"follows the label colour\", which was right — this pass had replaced a true qualitative note with a precise wrong one before catching it.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Vertical padding varies with density and was documented flat.</strong> It is 8, 12 and 16 across Compact, Default and Comfortable — which is what turns a fixed 24px content block into a 40, 48 or 56 tall row. The heights are a consequence of the padding rather than set independently. The preview’s CSS was worse: <code>padding: 0 12px</code>, with the heights faked by <code>min-height</code>, so it looked right and described the component wrongly.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Both text styles resolve.</strong> <code>Primary Text</code> is <code>Primary/Multi-line Label/Light/Base</code> and <code>Supporting Text</code> is <code>.../Fine</code>, replacing three font specs and a \"names pending Dev Mode read\" IOU.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>All six colour roles are named, and four of them move.</strong> The row flips to <code>bg/color-bg</code> when pressed; Primary Text and the leading mark step through <code>text/color-text</code>, <code>-disabled</code> and <code>-primary</code>; the badge label steps to <code>-primary-disabled</code>. The badge fill is <code>bg/color-bg-secondary</code> at <code>#E5F1FF</code> — comparing that against <a href=\"/components/countdown\">Countdown</a>, which had the same token recorded at <code>#EEF2F9</code>, is what surfaced a wrong token name on that page.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Supporting Text is a hidden layer, not a property.</strong> The panel offered a <code>supporting</code> toggle Figma does not have. The layer is documented — bound to <code>text/color-text-weaker</code>, with its own text style — and marked as shipping hidden, so nothing on the page currently draws it.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The preview drew in the documentation font.</strong> <code>.eb-preview-sitem</code> declared <code>font-family: inherit</code>, which resolves to BarkAda; both text layers are <code>Primary/*</code> and are Proxima Soft in Figma. The root now names Proxima Soft. This is the first component caught by the typeface check rather than by eye.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. It now cites the Select family artifact <code>com.eastblue.ds:select:1.0.0</code> and imports <code>com.eastblue.ds.select.*</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping missed two properties and mapped three things that are not properties.</strong> <code>hasLeading</code> and <code>hasTrailing</code> had no rows; <code>Primary Text</code>, <code>Supporting Text</code> and <code>Trailing Element</code> are two text layers and a nested instance. Seven rows became six, one per panel property.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The two tabs disagreed three separate ways.</strong> <code>Type</code> mapped to <code>leading: EBSelectLeading</code> against the Style tab’s <code>type: EBSelectItemType</code>; <code>Density</code> had a SwiftUI modifier against a Compose parameter; and <code>State</code> was \"not a parameter\" in the mapping while the Style tab emitted <code>state: .disabled</code>. More disagreements than any other component in this run of reviews.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong><code>State</code> is not a parameter, and the Style tab moved to match.</strong> The mapping had it right: Pressed is what the platform already does under a finger, and Disabled is each platform’s own idiom — <code>.disabled(true)</code> in SwiftUI, <code>enabled = false</code> in Compose. Third component in the system where a Figma <code>State</code> axis exists only because a designer has to pick one to see it, after Countdown and Select Item’s own sibling.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>Usage Snippets were keyed to use-cases, not to the property.</strong> \"A plain row\", \"Selected, with supporting text\" and \"A country row\". One per <code>Type</code> value now, four in total, with density, selection and <code>hasTrailing</code> demonstrated across them.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>C3’s contrast note read as a live defect and is not one.</strong> It flagged Supporting Text at 4.01:1 on white; the layer ships hidden, so nothing draws it. Reworded to say it is bound, hidden, and becomes a contrast concern the day it is switched on — which is the useful form of that warning.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The variants table claimed something unread and lacked something useful.</strong> PesoSignVector was described as \"matched to the font\", which cannot be verified and is visibly untrue at 15 against 10. A Width column now carries all four leading widths — 24, 16, 15, 10.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Two design decisions are recorded as deliberate rather than left to be re-raised.</strong> The leading mark’s width varies by <code>Type</code>, so the row hugs what it is given rather than reserving a fixed slot; and the two peso versions coexist while a transition finishes, with one to be deprecated later. Both are confirmed intentional and noted in C4 and the mapping description so a later reviewer does not file them as findings.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Three pieces of content have nothing to bind to.</strong> <code>Primary Text</code>, <code>Supporting Text</code> and the trailing Badge are layers and a nested instance rather than component properties, so Code Connect will have no anchor for the row’s two strings or its trailing content. The six properties that do exist all trace 1:1. Recorded against C7, which was already open on registration.",
          "delta": { "kind": "open", "label": "C7 open" }
        },
        {
          "body": "<strong>Code Connect emptied, and DEV code is live for the first time.</strong> The demo script had no <code>getSnippet</code>, so both language tabs were frozen on a static string; they now produce four distinct calls and respect the sparse grid — <code>isSelected</code> is only emitted alongside <code>State=Default</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
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
