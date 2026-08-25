import type { ComponentData, DemoControlSection } from '../types';

/* Demo controls for the Style tab's single spec card. Both axes shape the
   slot's default content rather than being applied to whatever fills it —
   see the resolved list for why that is a Figma constraint. */
const selectGroupControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'BorderType',
        prop: 'border',
        options: [
          { value: 'middleinset', label: 'MiddleInset' },
          { value: 'fullwidth', label: 'FullWidth' },
          { value: 'none', label: 'None' }
        ],
        defaultValue: 'middleinset'
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
      }
    ]
  }
];

export const dropdownItemGroup: ComponentData = {
  "meta": {
    "slug": "dropdown-item-group",
    "name": "Select Group",
    "node": "7947:111630",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=7947-111630",
    "description": "The menu surface a Select opens — a rounded card wrapping a slot of Select Items, with optional dividers between them.",
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
      "title": "Keep — the cleanup its own verdict listed is done",
      "text": "The previous pass had already turned this from a hardcoded preview artifact into a genuine slot-based container, and withdrew a Consolidate verdict in the process. What it left behind was a list of cleanup: a <code>MIddle Inset</code> typo, a vestigial <code>Dropdown Item - Last</code> name, hidden 366px leftovers, and a Scrollbar frame. The first three are gone. The Scrollbar stays, confirmed as intentional. This pass also joined the property and its values to <code>BorderType = MiddleInset | FullWidth | None</code> and named the slot <code>⤷ SelectionSlot</code>. Nothing is outstanding on the component itself; Code Connect stays open because the native library does not exist yet."
    }
  },
  "overview": {
    "inContextNote": "The surface that appears under a Select when it expands. On its own it is never shown — it is either filled by a Select or filled by hand with Select Items.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"sgroup-demo-preview\"><div class=\"eb-preview-sgroup eb-preview-sgroup--middleinset eb-preview-sgroup--compact\"><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"></span><span class=\"eb-preview-sgroup__label\">Text</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">BorderType</span><select id=\"sgroup-ctrl-border\" class=\"demo-panel-select\" onchange=\"_sgroupUpdate()\"><option value=\"middleinset\" selected=\"\">MiddleInset</option><option value=\"fullwidth\">FullWidth</option><option value=\"none\">None</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Density</span><select id=\"sgroup-ctrl-density\" class=\"demo-panel-select\" onchange=\"_sgroupUpdate()\"><option value=\"compact\" selected=\"\">Compact</option><option value=\"default\">Default</option><option value=\"comfortable\">Comfortable</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One surface for every Select in the product, and usable on its own wherever a list of options needs a card around it."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns the card — the white fill, the hairline, the 6px radius and the padding around the rows. It does not draw the rows themselves."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>BorderType</code> and its values are joined after this pass, the <code>MIddle Inset</code> typo is gone, and the slot carries the family's <code>⤷</code> prefix as <code>⤷ SelectionSlot</code>."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "A real Figma <code>SLOT</code> filled with <a href=\"/components/dropdown-item\">Select Item</a> instances, and consumed as a whole by <a href=\"/components/dropdown\">Select</a>. What it cannot do is apply its own properties to substituted content — see the resolved list."
      }
    ],
    "behavior": [
      {
        "state": "BorderType=MiddleInset",
        "ios": "na",
        "android": "na",
        "property": "inset dividers",
        "notes": "Dividers sit between rows, inset from both edges. The default the component ships with."
      },
      {
        "state": "BorderType=FullWidth",
        "ios": "na",
        "android": "na",
        "property": "edge-to-edge dividers",
        "notes": "Same dividers, running the full width of the card."
      },
      {
        "state": "BorderType=None",
        "ios": "na",
        "android": "na",
        "property": "no dividers",
        "notes": "The divider nodes are absent entirely, which is why these variants are 24 shorter than their bordered siblings."
      },
      {
        "state": "Density",
        "ios": "na",
        "android": "na",
        "property": "312 / 368 / 424",
        "notes": "Sets the row height of the Select Items in the default content — 40, 48 and 56 respectively — which is what drives the card's height."
      },
      {
        "state": "⤷ SelectionSlot",
        "ios": "na",
        "android": "na",
        "property": "7 rows by default",
        "notes": "Ships with seven Select Items and a hidden Label. Substituted content replaces all of it, dividers included."
      }
    ],
    "resolved": [
      {
        "headline": "The MIddle Inset typo is gone.",
        "body": "The value carried a capital I in the middle of the word. It is now <code>MiddleInset</code> — and joined at the same time, so the property reads <code>BorderType = MiddleInset | FullWidth | None</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The vestigial Dropdown Item - Last name is gone.",
        "body": "The final row in the slot was still called <code>Dropdown Item - Last</code>, left over from before the Dropdown to Select rename — and confusingly its instance had been renamed while the master had not, so the two disagreed depending on where you looked. It is now simply <code>Select Item</code>: seven rows with six dividers between them, and no trailing divider to suppress.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The hidden 366px leftovers are gone.",
        "body": "Five stale <code>Select Item</code> instances sat in the slot at 366 × 52 with no children, all stacked at a single coordinate. They were invisible but shipped inside every variant. Removed.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The slot is named for what belongs in it.",
        "body": "It was <code>Slot</code> — the arrow prefix arrived first, then the name. <code>⤷ SelectionSlot</code> now says what the container is for, rather than just marking it as a slot.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Both properties shape the default content rather than being applied to the slot.",
        "body": "Each of the nine variants contains its own hand-placed rows: <code>MiddleInset</code> and <code>FullWidth</code> interleave six <code>Horizontal / Divider</code> siblings between seven Select Items, and <code>None</code> simply has no divider nodes at all. So a consumer who fills the slot with their own rows loses both the dividers and the density, because those lived in the default content they replaced. This is the same Figma limit the Slider hit — a component property cannot reach into a slot — and it is understood and already instructed to designers. Recorded here because natively both are list-level properties applied to whatever rows the list holds, which is a genuine divergence a developer needs told rather than left to infer.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The hidden Label is a subsection header.",
        "body": "A 320 × 28 instance at the top of the slot, hidden in all nine variants. Confirmed as intentional: it acts as a divider or subsection heading for grouped option lists, and stays hidden by default because most lists are flat.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The Scrollbar frame stays.",
        "body": "A hand-drawn 12 × full-height rectangle inside the slot, hidden. Native platforms render their own scroll indicator, so this has no counterpart in code — kept deliberately as a design-time affordance, consistent with how the same call was made elsewhere in the system.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native library does not exist yet, so there is nothing to map onto. The component side is ready: <code>BorderType</code>, <code>Density</code> and <code>⤷ SelectionSlot</code> all map one to one, with the caveat that the first two are list-level properties natively rather than variants of the default content.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Pass the Divider component's name upstream.",
        "body": "The dividers are instances of a component published as <code>Horizontal / Divider</code>. Two things are off, neither of them this component's to fix. The spaces around the slash are inconsistent with how the rest of the file namespaces — <code>Primary/Label/Large</code>, <code>Flags Library - 16px</code> — and the order is inverted: it produces a folder named Horizontal containing Divider, and presumably a Vertical folder containing another Divider, splitting one family across two folders named for the wrong thing. <code>Divider/Horizontal</code> would group them.",
        "tag": "Docs"
      },
      {
        "headline": "Write down what a slot swap costs.",
        "body": "Because the dividers and the density live in the default content, replacing the slot's contents silently drops both. Designers have been briefed, but the constraint is invisible from the component — it belongs in the usage documentation where someone reaches for it, and in the native contract where it does not apply at all.",
        "tag": "Docs"
      },
      {
        "headline": "Give the Label a way to be switched on.",
        "body": "It is a real subsection header sitting hidden in every variant. Revealing it currently means finding a hidden layer inside a slot. A boolean on the group — or shipping it as an option inside the slot's default content — would make it discoverable rather than folklore.",
        "tag": "Property"
      },
      {
        "headline": "Publish the token names once Dev Mode is read.",
        "body": "The card's fill, hairline and the row colours resolve to library variables, but the read-only tools return variable IDs rather than names, so the spec tables carry hex values only.",
        "tag": "Token"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"/components/dropdown-item\">Select Item</a> fills the slot, and <a href=\"/components/dropdown\">Select</a> is the control that opens this surface. <a href=\"/components/select-field\">Select Field</a> is the trigger, deliberately outside this family's scope.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Structure",
    "specCards": [
      {
        "cardKey": "sgroup-spec-card-default",
        "demoKey": "default",
        "demoControls": selectGroupControls,
        "title": "Select Group",
        "node": "7947:111630",
        "description": "A card wrapping ⤷ SelectionSlot. The preview shows five rows rather than the seven the component ships, so the card fits the page.",
        "previewHtml": "<div id=\"sgroup-spec-default\"><div class=\"eb-preview-sgroup eb-preview-sgroup--middleinset eb-preview-sgroup--compact\"><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"></span><span class=\"eb-preview-sgroup__label\">Text</span></div><div class=\"eb-preview-sgroup__row\"><span class=\"eb-preview-sgroup__lead\"></span><span class=\"eb-preview-sgroup__label\">Text</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "BorderType", "value": "MiddleInset", "prop": "border",
                "variants": {
                  "border:fullwidth": { "value": "FullWidth" },
                  "border:none": { "value": "None — divider nodes absent" }
                }
              },
              { "key": "Density", "value": "Compact", "prop": "density",
                "variants": {
                  "density:default": { "value": "Default" },
                  "density:comfortable": { "value": "Comfortable" }
                }
              },
              { "key": "⤷ SelectionSlot", "value": "7 × Select Item + hidden Label" },
              { "key": "Dividers", "value": "6 × Horizontal / Divider, siblings in the slot",
                "variants": {
                  "border:none": { "value": "none — absent from the variant" }
                }
              },
              { "key": "Scrollbar", "value": "hidden — native draws its own" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Card", "value": "#FFFFFF", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Card hairline", "value": "#E5EBF4", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Divider", "value": "#E5EBF4", "token": "library variable · name pending Dev Mode read", "swatch": true,
                "variants": {
                  "border:none": { "value": "–", "swatch": false }
                }
              },
              { "key": "Row", "value": "set by Select Item", "token": "–" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "320", "mono": true },
              { "key": "Height", "value": "312", "mono": true,
                "variants": {
                  "border:none": { "value": "288" },
                  "density:default": { "value": "368" },
                  "density:comfortable": { "value": "424" },
                  "border:none|density:default": { "value": "344" },
                  "border:none|density:comfortable": { "value": "400" }
                }
              },
              { "key": "Corner radius", "value": "6", "mono": true },
              { "key": "Padding", "value": "4 top and bottom", "mono": true },
              { "key": "Row height", "value": "40", "mono": true,
                "variants": {
                  "density:default": { "value": "48" },
                  "density:comfortable": { "value": "56" }
                }
              },
              { "key": "Divider height", "value": "4", "mono": true },
              { "key": "Rows shipped", "value": "7", "mono": true },
              { "key": "Scrollbar", "value": "12 wide, full height, hidden", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Applies to", "value": "none of its own — the rows carry the type", "mono": true },
              { "key": "Row text", "value": "see Select Item — Proxima Soft SemiBold 16 / 20", "mono": true },
              { "key": "Label header", "value": "hidden by default; a subsection heading when shown", "mono": true },
              { "key": "Text styles", "value": "shared library styles · names pending Dev Mode read", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>\n    borderType<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.middleInset</span><span class=\"syn-punc\">,</span>\n    density<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.compact</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>options<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>$0<span class=\"syn-punc\">.</span>label<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>\n    borderType <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBorderType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">MiddleInset</span><span class=\"syn-punc\">,</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Compact</span>\n<span class=\"syn-punc\">) {</span>\n    options<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>it<span class=\"syn-punc\">.</span>label<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">}</span>"
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
      "description": "Figma properties mapped to the intended native parameters. Both properties are variants of the slot's default content in Figma but genuine list-level parameters in code — the divergence is deliberate and documented.",
      "rows": [
        { "figma": "BorderType", "swift": "borderType: EBBorderType", "compose": "borderType: EBBorderType" },
        { "figma": "Density", "swift": "density: EBDensity", "compose": "density: EBDensity" },
        { "figma": "⤷ SelectionSlot", "swift": "@ViewBuilder content: () -> Content", "compose": "content: @Composable ColumnScope.() -> Unit" },
        { "figma": "Label (hidden)", "swift": "header: String?", "compose": "header: String?" },
        { "figma": "Scrollbar", "swift": "— platform draws its own", "compose": "— platform draws its own" }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Inset dividers (default)",
        "swift": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>borderType<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.middleInset</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>accounts<span class=\"syn-punc\">) {</span> account <span class=\"syn-kw\">in</span>\n        <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>account<span class=\"syn-punc\">.</span>name<span class=\"syn-punc\">,</span> isSelected<span class=\"syn-punc\">:</span> account <span class=\"syn-eq\">==</span> selected<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>borderType <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBorderType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">MiddleInset</span><span class=\"syn-punc\">) {</span>\n    accounts<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span>\n        <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>it<span class=\"syn-punc\">.</span>name<span class=\"syn-punc\">,</span> selected <span class=\"syn-eq\">=</span> it <span class=\"syn-eq\">==</span> selected<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "No dividers, comfortable rows",
        "swift": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>borderType<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.none</span><span class=\"syn-punc\">,</span> density<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.comfortable</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>countries<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>$0<span class=\"syn-punc\">.</span>name<span class=\"syn-punc\">,</span> leading<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.flag</span><span class=\"syn-punc\">(</span>$0<span class=\"syn-punc\">.</span>code<span class=\"syn-punc\">)) }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>\n    borderType <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBBorderType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">None</span><span class=\"syn-punc\">,</span>\n    density <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBDensity</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Comfortable</span>\n<span class=\"syn-punc\">) {</span> countries<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>it<span class=\"syn-punc\">.</span>name<span class=\"syn-punc\">) } }</span>"
      },
      {
        "subheading": "With a subsection header",
        "swift": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>header<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Recent\"</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>recent<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>$0<span class=\"syn-punc\">.</span>label<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelectGroup</span><span class=\"syn-punc\">(</span>header <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Recent\"</span><span class=\"syn-punc\">) {</span>\n    recent<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>it<span class=\"syn-punc\">.</span>label<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Exposed as a list of options",
        "ios": "<code>.accessibilityElement(children: .contain)</code> with a radio-group trait",
        "android": "<code>Modifier.selectableGroup()</code> on the column"
      },
      {
        "requirement": "Announced when it opens",
        "ios": "Focus moves into the list; the Select's label carries the context",
        "android": "<code>paneTitle</code> on the popup"
      },
      {
        "requirement": "Dividers are decorative",
        "ios": "<code>.accessibilityHidden(true)</code>",
        "android": "<code>contentDescription = null</code>"
      },
      {
        "requirement": "Subsection header reads as a heading",
        "ios": "<code>.accessibilityAddTraits(.isHeader)</code> when the Label is shown",
        "android": "<code>Modifier.semantics { heading() }</code>"
      },
      {
        "requirement": "Long lists stay reachable",
        "ios": "Scrolls to the selected row when opened",
        "android": "Same — the selected row is brought into view"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Let the group own the dividers between rows.",
        "dontText": "Don't add dividers inside a Select Item — BorderType already places them."
      },
      {
        "doText": "Re-apply density when you replace the slot's contents.",
        "dontText": "Don't assume swapped-in rows inherit the group's density — they don't, in Figma."
      },
      {
        "doText": "Use None when the rows already read as separate cards.",
        "dontText": "Don't stack dividers against a row that draws its own border."
      },
      {
        "doText": "Show the Label when a list has genuine sections.",
        "dontText": "Don't use it as a title for the whole menu — that belongs on the Select."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The vestigial <code>Dropdown Item - Last</code> and the five hidden 366px leftovers are both gone. The hidden Label is confirmed as an intentional subsection header."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>BorderType = MiddleInset | FullWidth | None</code> after the typo fix and the joining, and the slot is <code>⤷ SelectionSlot</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The card fill, hairline and divider resolve to library variables. Names need a Dev Mode read before they can be printed."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A card wrapping a list maps directly. The one divergence — properties shaping default content rather than applying to the slot — is a Figma limit, documented rather than worked around."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "The surface has no states of its own. Pressed and selected belong to the rows inside it."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "No artwork of its own. The Scrollbar is a hand-drawn rectangle, hidden and confirmed intentional."
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
        "notes": "<code>BorderType</code>, <code>Density</code> and <code>⤷ SelectionSlot</code> map one to one now the values are joined."
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
      "total": 9,
      "description": "3 BorderType × 3 Density = 9. Row count is not an axis — the slot ships seven and takes whatever replaces them.",
      "columns": ["BorderType", "Density", "Row height", "Card height", "Node"],
      "rows": [
        { "cells": ["MiddleInset", "Compact", "40", "312", "7947:111631"] },
        { "cells": ["FullWidth", "Compact", "40", "312", "7947:111659"] },
        { "cells": ["None", "Compact", "40", "288", "7947:111687"] },
        { "cells": ["MiddleInset", "Default", "48", "368", "7947:111709"] },
        { "cells": ["FullWidth", "Default", "48", "368", "7947:111737"] },
        { "cells": ["None", "Default", "48", "344", "7947:111765"] },
        { "cells": ["MiddleInset", "Comfortable", "56", "424", "7947:111787"] },
        { "cells": ["FullWidth", "Comfortable", "56", "424", "7947:111815"] },
        { "cells": ["None", "Comfortable", "56", "400", "7947:111843"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Slot rebuild + reassessment on the 2026 Working File · node 7947:111630",
      "rows": [
        {
          "body": "<strong>Covers two changes at once.</strong> The slot rebuild that turned this from a hardcoded preview artifact into a real container — and withdrew a Consolidate verdict — was described in the component's verdict but never given a changelog entry of its own. This version records it alongside the cleanup that followed.",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        },
        {
          "body": "<strong>The <code>MIddle Inset</code> typo is gone</strong> — the property and its values are now joined as <code>BorderType = MiddleInset | FullWidth | None</code>.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>The vestigial <code>Dropdown Item - Last</code> is gone.</strong> Its master and instance had disagreed since the Dropdown to Select rename; the last row is now simply <code>Select Item</code>, with six dividers between seven rows and none trailing.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>Five hidden 366px leftovers removed</strong> — stale Select Item instances stacked at one coordinate inside the slot, invisible but shipping in every variant.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<code>Slot</code> renamed to <code>⤷ SelectionSlot</code>, so the name says what belongs in it rather than only marking it as a slot.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "The Scrollbar frame kept, confirmed as an intentional design-time affordance with no native counterpart. The hidden <code>Label</code> confirmed as a subsection header for grouped lists.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "Both properties documented as shaping the slot's <em>default content</em> rather than applying to substituted content — a Figma limit, already instructed to designers, and a genuine divergence from the native contract where both are list-level.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "Node moved from <code>25783:1255</code> (Sticker Sheets v2) to <code>7947:111630</code> (2026 Working File), and <code>navGroup</code> changed from Dropdown to Select.",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 6383:3446",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — Single variant, 8-item fixed layout at 366px. Rounded 6px card, white bg, 6px/12px drop shadow. All tokens bound (bg, radius, shadow, space).\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Last row is a detached frame</strong> — Node <code>6383:3442</code> is a hand-built <code>Dropdown - Item</code> frame instead of a DropdownItem component instance. Breaks consistency.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>No slot, no item count, no fill-container width</strong> — Layout is hardcoded to 8 rows at 366px. Cannot be reused for menus of different sizes.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Irregular component name</strong> — \"Dropdown Item - Group\" uses a \" - \" separator inconsistent with other DS group names. Recommend rename to \"Dropdown Menu\".\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Popover surface not a native primitive</strong> — Both <code>Menu</code> (iOS) and <code>DropdownMenu</code> (Compose) draw the shadowed card automatically. This component has no 1:1 native mapping.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Code Connect not registered</strong> — No properties to map. Consolidate into Dropdown before mapping.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};