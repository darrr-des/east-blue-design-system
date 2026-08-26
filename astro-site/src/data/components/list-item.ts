import type { ComponentData, DemoControlSection } from '../types';

/* Demo controls for the Style tab's single spec card. ListLevel and
   hasTrailing are the component's own properties; the asset type is a
   nested instance property, which is how it surfaces in Figma too. */
const listItemControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'ListLevel',
        prop: 'level',
        options: [
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' }
        ],
        defaultValue: '1'
      },
      {
        label: 'hasTrailing',
        prop: 'hastrailing',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ],
        defaultValue: 'false'
      }
    ]
  },
  {
    heading: 'List Item - Asset',
    rows: [
      {
        label: 'Type',
        prop: 'asset',
        options: [
          { value: 'bullet', label: 'Bullet' },
          { value: 'square', label: 'Square' },
          { value: 'numbered', label: 'Numbered' },
          { value: 'check', label: 'Check' },
          { value: 'check-positive', label: 'CheckPositive' },
          { value: 'pending', label: 'Pending' },
          { value: 'pending-notice', label: 'PendingNotice' }
        ],
        defaultValue: 'bullet'
      }
    ]
  }
];

export const listItem: ComponentData = {
  "meta": {
    "slug": "list-item",
    "name": "List Item",
    "node": "5728:37276",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5728-37276",
    "description": "One row in a list — a leading marker, a filling label, and an optional trailing slot. Three nesting levels set the indent.",
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
    "navGroup": "List",
    "verdict": {
      "kind": "keep",
      "title": "Keep — composes the primitive properly and fills its container",
      "text": "The April assessment left three recommendations here. Two were taken directly: <code>level</code> became <code>ListLevel</code>, and the trailing slot that was only a suggestion now exists as <code>⤷ TrailingSlot</code> behind a <code>hasTrailing</code> boolean. The third asked for the leading asset to become a Figma Slot; the rebuild kept it as a <a href=\"/components/list-item-asset\">List Item - Asset</a> instance instead, which reaches the same place by a better route — that component now carries its own <code>Type=Slot</code>, so arbitrary 16 × 16 content already has a way in without loosening this row to accept anything. This pass set <code>#label</code> to fill and closed the space in <code>TrailingContainer</code>. Nothing is outstanding on the component itself; Code Connect stays open because the native library does not exist yet."
    }
  },
  "overview": {
    "inContextNote": "Shown as three rows so the indent reads against the left edge — a single row tells you nothing about what ListLevel does. Lists appear on terms pages, onboarding steps and task checklists.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"li-demo-preview\"><div class=\"eb-preview-litem\"><div class=\"eb-preview-litem__row eb-preview-litem__row--l1\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">List body with level-1 style</span></div><div class=\"eb-preview-litem__row eb-preview-litem__row--l1\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">Second row in the same list</span></div><div class=\"eb-preview-litem__row eb-preview-litem__row--l1\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">Third row in the same list</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">ListLevel</span><select id=\"li-ctrl-level\" class=\"demo-panel-select\" onchange=\"_liUpdate()\"><option value=\"1\" selected=\"\">1</option><option value=\"2\">2</option><option value=\"3\">3</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasTrailing</span><select id=\"li-ctrl-hastrailing\" class=\"demo-panel-select\" onchange=\"_liUpdate()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">List Item - Asset</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select id=\"li-ctrl-asset\" class=\"demo-panel-select\" onchange=\"_liUpdate()\"><option value=\"bullet\" selected=\"\">Bullet</option><option value=\"square\">Square</option><option value=\"numbered\">Numbered</option><option value=\"check\">Check</option><option value=\"check-positive\">CheckPositive</option><option value=\"pending\">Pending</option><option value=\"pending-notice\">PendingNotice</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Terms pages, onboarding steps, task checklists — every bulleted or numbered list in the product is this row repeated. Nothing about it is tied to one surface."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its indent, the gap to the label, and the label's type and colour, all bound to library variables. It does not own the marker's artwork — that belongs to the primitive it instances."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>ListLevel</code> is PascalCase, <code>hasTrailing</code> follows the boolean prefix used by <code>hasIcon</code> and <code>hasCTA</code>, <code>#label</code> carries the <code>#</code> prefix and <code>⤷ TrailingSlot</code> the arrow. <code>TrailingContainer</code> closed its space this pass."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "It instances <a href=\"/components/list-item-asset\">List Item - Asset</a> for the marker and exposes a slot for trailing content, and <code>#label</code> fills — so the row stretches to whatever width the list gives it rather than sitting at a fixed size."
      }
    ],
    "behavior": [
      {
        "state": "ListLevel=1",
        "ios": "na",
        "android": "na",
        "property": "indent 0",
        "notes": "Top-level row. The marker sits flush with the list's left edge."
      },
      {
        "state": "ListLevel=2",
        "ios": "na",
        "android": "na",
        "property": "indent 16",
        "notes": "One level in. The label narrows by 16 because it fills the remaining width."
      },
      {
        "state": "ListLevel=3",
        "ios": "na",
        "android": "na",
        "property": "indent 32",
        "notes": "Two levels in. Depth is carried by indentation alone — the marker and type stay the same at every level."
      },
      {
        "state": "hasTrailing=false",
        "ios": "na",
        "android": "na",
        "property": "default",
        "notes": "<code>TrailingContainer</code> is hidden and the label runs to the right edge."
      },
      {
        "state": "hasTrailing=true",
        "ios": "na",
        "android": "na",
        "property": "16 × 20",
        "notes": "Reveals <code>⤷ TrailingSlot</code> at the end of the row. The slot ships empty."
      },
      {
        "state": "Leading marker",
        "ios": "na",
        "android": "na",
        "property": "instance",
        "notes": "A List Item - Asset instance, Bullet by default. Swapping its Type is a nested instance property, not a property of this row."
      }
    ],
    "resolved": [
      {
        "headline": "The trailing slot exists now.",
        "body": "The April assessment raised it as \"consider a Trailing slot\" — it is now <code>⤷ TrailingSlot</code> inside <code>TrailingContainer</code>, revealed by a <code>hasTrailing</code> boolean that defaults to false.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The level property was renamed.",
        "body": "<code>level</code> became <code>ListLevel</code>, matching the PascalCase convention used for variant properties across the system.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The label fills instead of sitting at a fixed width.",
        "body": "Every version is now 294 wide with <code>#label</code> at 277, 261 and 245 — the label absorbs the indent exactly, which is what fill looks like from the outside. A fixed label would have left the row unable to stretch to the width a real list gives it.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The leading asset stayed an instance, deliberately.",
        "body": "The April assessment asked for it to become a Figma Slot so consumers could drop in any 16 × 16 component. It is still a <a href=\"/components/list-item-asset\">List Item - Asset</a> instance — and that is the better answer now, because the primitive carries its own <code>Type=Slot</code>. Arbitrary content gets in through there, while this row keeps the constraint that its marker is a real design system marker.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "TrailingContainer closed its space.",
        "body": "It was <code>Trailing Container</code>. Renamed this pass to match <code>TransactionDetails</code> and the other joined multi-word layer names in the system.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Depth is carried by indentation alone.",
        "body": "All three levels use the same marker and the same type — BarkAda SemiBold 14 / 20 in <code>#445C85</code>. Nested lists often alternate markers so depth reads without counting indents, and <code>Square</code> was available for it. Confirmed as intentional: the indent is the signal.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The sample copy means indentation, not type.",
        "body": "The placeholder strings read \"List body with level-1 style\" through to level-3, which can be read as promising three different text styles when the type is identical at every level. Confirmed that \"style\" refers to the visual treatment of the indentation.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native library does not exist yet, so there is nothing to map onto. The component side is ready: <code>ListLevel</code>, <code>hasTrailing</code>, <code>#label</code> and <code>⤷ TrailingSlot</code> all map one to one with no rename at the boundary.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "The leading column is not pinned, which is what makes mixed markers break.",
        "body": "<code>#label</code> starts 8px after the marker ends, and the marker's width is set by whichever <a href=\"/components/list-item-asset\">List Item - Asset</a> version is in the instance — 9 for Bullet and Square, 12 for Numbered, 16 for the status icons. Swapping Bullet for Check therefore pushes the label 7px right, so a list mixing markers loses its left alignment. Mixing is out of scope by design and users are briefed, so this is a note rather than a fault — but pinning the marker to a fixed 16 and centring inside it would remove the constraint altogether and make the briefing unnecessary.",
        "tag": "Composition"
      },
      {
        "headline": "Confirm what a wrapping label does to the marker.",
        "body": "The row is 20 tall with a single-line label. Real list copy wraps, and when it does the marker should stay pinned to the first line rather than centring against the whole block. Worth setting the cross-axis alignment explicitly so it does not depend on the default.",
        "tag": "Composition"
      },
      {
        "headline": "Expose the list as a list to assistive tech.",
        "body": "Rows should be children of a list container with their nesting level exposed, so a screen reader announces position and depth rather than reading a flat run of sentences. Indentation is a visual signal only — it does not reach assistive tech on either platform.",
        "tag": "A11y"
      },
      {
        "headline": "Publish the token names once Dev Mode is read.",
        "body": "<code>#label</code> resolves to a library variable — verified on the component's own node — but the read-only tools return variable IDs rather than names, so the spec tables carry the hex value only.",
        "tag": "Token"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"/components/list-item-asset\">List Item - Asset</a> supplies the leading marker and is the only other component in the family. <a href=\"/components/list\">List</a> was removed in the 2026 rebuild — it was a frame of eight hardcoded rows rather than a container, so rows are now stacked with auto layout and list-level concerns like row spacing sit with whatever composes them.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Structure",
    "specCards": [
      {
        "cardKey": "li-spec-card-default",
        "demoKey": "default",
        "demoControls": listItemControls,
        "title": "List Item",
        "node": "5728:37276",
        "description": "Three versions on one axis. Only the indent changes between them — the marker, the type and the row height are identical at every level.",
        "previewHtml": "<div id=\"li-spec-default\"><div class=\"eb-preview-litem\"><div class=\"eb-preview-litem__row eb-preview-litem__row--l1\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">List body with level-1 style</span></div><div class=\"eb-preview-litem__row eb-preview-litem__row--l1\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">Second row in the same list</span></div><div class=\"eb-preview-litem__row eb-preview-litem__row--l1\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">Third row in the same list</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "ListLevel", "value": "1", "prop": "level",
                "variants": {
                  "level:2": { "value": "2" },
                  "level:3": { "value": "3" }
                }
              },
              { "key": "hasTrailing", "value": "false", "prop": "hastrailing",
                "variants": {
                  "hastrailing:true": { "value": "true" }
                }
              },
              { "key": "Leading marker", "value": "List Item - Asset instance — Bullet", "prop": "asset",
                "variants": {
                  "asset:square": { "value": "List Item - Asset instance — Square" },
                  "asset:numbered": { "value": "List Item - Asset instance — Numbered" },
                  "asset:check": { "value": "List Item - Asset instance — Check" },
                  "asset:check-positive": { "value": "List Item - Asset instance — CheckPositive" },
                  "asset:pending": { "value": "List Item - Asset instance — Pending" },
                  "asset:pending-notice": { "value": "List Item - Asset instance — PendingNotice" }
                }
              },
              { "key": "#label", "value": "fills the remaining width" },
              { "key": "⤷ TrailingSlot", "value": "hidden",
                "variants": {
                  "hastrailing:true": { "value": "16 × 16 — empty by design" }
                }
              },
              { "key": "Node", "value": "5800:39052", "mono": true,
                "variants": {
                  "level:2": { "value": "5800:39056" },
                  "level:3": { "value": "5800:39060" }
                }
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "#label", "value": "#445C85", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Marker", "value": "#90A8D0", "token": "set by the List Item - Asset version", "swatch": true,
                "variants": {
                  "asset:check-positive": { "value": "#27C990" },
                  "asset:pending-notice": { "value": "#CA970C" }
                }
              },
              { "key": "Surface", "value": "none — inherits the list background", "token": "–" },
              { "key": "Trailing", "value": "set by the swapped asset", "token": "–" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "294 — fills its container", "mono": true },
              { "key": "Height", "value": "20", "mono": true },
              { "key": "Indent", "value": "0", "mono": true,
                "variants": {
                  "level:2": { "value": "16" },
                  "level:3": { "value": "32" }
                }
              },
              { "key": "#label width", "value": "277", "mono": true,
                "variants": {
                  "level:2": { "value": "261" },
                  "level:3": { "value": "245" }
                }
              },
              { "key": "Marker to label gap", "value": "8", "mono": true },
              { "key": "Marker width", "value": "9 — Bullet", "mono": true,
                "variants": {
                  "asset:square": { "value": "9 — Square" },
                  "asset:numbered": { "value": "12 — Numbered, hugs" },
                  "asset:check": { "value": "16 — Check" },
                  "asset:check-positive": { "value": "16 — CheckPositive" },
                  "asset:pending": { "value": "16 — Pending" },
                  "asset:pending-notice": { "value": "16 — PendingNotice" }
                }
              },
              { "key": "TrailingContainer", "value": "16 × 20 — hidden", "mono": true,
                "variants": {
                  "hastrailing:true": { "value": "16 × 20" }
                }
              },
              { "key": "Padding", "value": "0 — the container stacking the rows owns the gap", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text style", "value": "shared library style · name pending Dev Mode read", "mono": true },
              { "key": "#label", "value": "BarkAda SemiBold · 14 / 20 · 0", "mono": true },
              { "key": "Face", "value": "BarkAda — the secondary face, for longer copy at smaller sizes", "mono": true },
              { "key": "Per level", "value": "identical at all three levels — depth is the indent", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-str\">\"List body with level-1 style\"</span><span class=\"syn-punc\">,</span>\n    level<span class=\"syn-punc\">:</span> 1<span class=\"syn-punc\">,</span>\n    marker<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.bullet</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"List body with level-1 style\"</span><span class=\"syn-punc\">,</span>\n    level <span class=\"syn-eq\">=</span> 1<span class=\"syn-punc\">,</span>\n    marker <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Bullet</span>\n<span class=\"syn-punc\">)</span>"
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
        {
          "figma": "ListLevel",
          "swift": "level: Int",
          "compose": "level: Int"
        },
        {
          "figma": "#label",
          "swift": "label: String",
          "compose": "label: String"
        },
        {
          "figma": "hasTrailing",
          "swift": "trailing: (() -> Trailing)?",
          "compose": "trailing: (@Composable () -> Unit)?"
        },
        {
          "figma": "⤷ TrailingSlot",
          "swift": "@ViewBuilder trailing: () -> Trailing",
          "compose": "trailing: @Composable () -> Unit"
        },
        {
          "figma": "List Item - Asset instance",
          "swift": "marker: EBListItemAssetType",
          "compose": "marker: EBListItemAssetType"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "A flat bulleted list",
        "swift": "<span class=\"syn-type\">VStack</span><span class=\"syn-punc\">(</span>alignment<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.leading</span><span class=\"syn-punc\">,</span> spacing<span class=\"syn-punc\">:</span> 4<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>terms<span class=\"syn-punc\">,</span> id<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">\\.self</span><span class=\"syn-punc\">) {</span>\n        <span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>$0<span class=\"syn-punc\">,</span> marker<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.bullet</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">Column</span><span class=\"syn-punc\">(</span>verticalArrangement <span class=\"syn-eq\">=</span> <span class=\"syn-type\">Arrangement</span><span class=\"syn-punc\">.</span><span class=\"syn-fn\">spacedBy</span><span class=\"syn-punc\">(</span>4<span class=\"syn-punc\">.</span>dp<span class=\"syn-punc\">)) {</span>\n    terms<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span>\n        <span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> it<span class=\"syn-punc\">,</span> marker <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Bullet</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "Nesting by level",
        "swift": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Top level\"</span><span class=\"syn-punc\">,</span> level<span class=\"syn-punc\">:</span> 1<span class=\"syn-punc\">)</span>\n<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Nested once\"</span><span class=\"syn-punc\">,</span> level<span class=\"syn-punc\">:</span> 2<span class=\"syn-punc\">)</span>\n<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Nested twice\"</span><span class=\"syn-punc\">,</span> level<span class=\"syn-punc\">:</span> 3<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Top level\"</span><span class=\"syn-punc\">,</span> level <span class=\"syn-eq\">=</span> 1<span class=\"syn-punc\">)</span>\n<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Nested once\"</span><span class=\"syn-punc\">,</span> level <span class=\"syn-eq\">=</span> 2<span class=\"syn-punc\">)</span>\n<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Nested twice\"</span><span class=\"syn-punc\">,</span> level <span class=\"syn-eq\">=</span> 3<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "With trailing content",
        "swift": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Delivery fee\"</span><span class=\"syn-punc\">,</span> marker<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.checkPositive</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"info.circle\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Delivery fee\"</span><span class=\"syn-punc\">,</span>\n    marker <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">CheckPositive</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Icons</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Outlined</span><span class=\"syn-punc\">.</span>Info<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">) }</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Rows are exposed as a list",
        "ios": "Wrap in a container with <code>.accessibilityElement(children: .contain)</code> and list traits",
        "android": "<code>Modifier.semantics { collectionInfo = CollectionInfo(rowCount, 1) }</code>"
      },
      {
        "requirement": "Nesting level is announced",
        "ios": "Expose <code>ListLevel</code> in the row's accessibility value — indentation alone is invisible",
        "android": "<code>CollectionItemInfo</code> carries the row's depth"
      },
      {
        "requirement": "Decorative markers are hidden",
        "ios": "Bullet, Square and Numbered are hidden; status markers put their meaning in the row's label",
        "android": "Same split — see List Item - Asset"
      },
      {
        "requirement": "Label wrapping is not truncated",
        "ios": "No line limit on <code>#label</code>; the marker stays on the first line",
        "android": "<code>maxLines = Int.MAX_VALUE</code>, marker aligned to the top"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Let the row fill the width its list gives it.",
        "dontText": "Don't set a fixed width on the row — the label is built to absorb the space."
      },
      {
        "doText": "Use ListLevel for depth and keep the marker the same throughout.",
        "dontText": "Don't mix markers within one list — widths differ from 9 to 16 and the labels stop aligning."
      },
      {
        "doText": "Turn on hasTrailing only when there is something to put in the slot.",
        "dontText": "Don't leave an empty trailing slot switched on; it reserves 16px for nothing."
      },
      {
        "doText": "Keep the gap between rows on the auto-layout frame that stacks them.",
        "dontText": "Don't add vertical padding inside the row; it will double up with the list's spacing."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>TrailingContainer</code> closed its space this pass. <code>#label</code> and <code>⤷ TrailingSlot</code> carry the right prefixes, and identical type across levels is confirmed intentional."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>ListLevel</code> is PascalCase and <code>hasTrailing</code> follows the boolean prefix convention, staying off the variant name so the set holds three versions rather than six."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>#label</code> resolves to a library variable and carries a shared library text style — verified on the component's own node. Marker colour comes from the primitive."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A marker, a filling label and an optional trailing slot. <code>ListLevel</code> maps to a leading inset rather than three separate views, and the fill setting means the row stretches natively."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Display only — the row is not tappable. Anything interactive belongs to whatever is dropped into the trailing slot."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "No artwork of its own — the marker is a List Item - Asset instance and the trailing slot is whatever the consumer supplies."
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
        "notes": "<code>ListLevel</code>, <code>hasTrailing</code>, <code>#label</code> and <code>⤷ TrailingSlot</code> map one to one with no rename at the boundary."
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
      "total": 3,
      "description": "1 component set × 3 ListLevel values = 3 variants. hasTrailing is a boolean component property, so it toggles the trailing slot without doubling the set, and the marker is a nested instance rather than an axis.",
      "columns": ["ListLevel", "Indent", "#label width", "Row", "Node"],
      "rows": [
        { "cells": ["1", "0", "277", "294 × 20", "5800:39052"] },
        { "cells": ["2", "16", "261", "294 × 20", "5800:39056"] },
        { "cells": ["3", "32", "245", "294 × 20", "5800:39060"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt on the 2026 Working File · node 5728:37276",
      "rows": [
        {
          "body": "<strong>Trailing slot added</strong> — the April assessment raised it as a suggestion; <code>⤷ TrailingSlot</code> now sits in <code>TrailingContainer</code> behind a <code>hasTrailing</code> boolean defaulting to false.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<code>level</code> renamed to <code>ListLevel</code>, matching the PascalCase convention for variant properties.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>#label set to fill</strong> — every version is 294 wide with the label at 277, 261 and 245, absorbing the indent. The row now stretches to whatever width its list gives it.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>Leading asset kept as an instance</strong> — the April recommendation was to make it a Slot. Resolved by a different route: <a href=\"/components/list-item-asset\">List Item - Asset</a> now carries its own <code>Type=Slot</code>, so arbitrary content gets in without loosening this row.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<code>Trailing Container</code> renamed to <code>TrailingContainer</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "Identical type at all three levels confirmed intentional — depth is carried by indentation alone, and the sample copy's \"style\" refers to that indentation rather than to a text style.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "Node moved from <code>18482:34429</code> (Sticker Sheets v2) to <code>5728:37276</code> (2026 Working File).",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18482:34429",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 3 variants (level 1/2/3). Composes List Item - Asset via instance swap. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong><code>level</code> uses string values</strong> — Should be integer or dropped in favor of nesting-based indent. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Asset is instance-swap</strong> — Adopt Figma Slots for first-class slot mapping. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Not registered. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
