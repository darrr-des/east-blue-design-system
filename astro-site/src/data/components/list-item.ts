import type { ComponentData, DemoControlSection } from '../types';
import { buildColorsTable } from './_helpers';

/* Demo controls for the Style tab's single spec card. ListLevel and
   hasTrailing are the component's own properties; the asset type is a
   nested instance property, which is how it surfaces in Figma too. */
const listItemControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'hasLeading',
        prop: 'hasleading',
        control: 'toggle' as const,
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasTrailing',
        prop: 'hastrailing',
        control: 'toggle' as const,
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      }
    ]
  },
  {
    heading: 'Nested instances',
    rows: [
      {
        label: 'List Item - Asset',
        prop: 'asset',
        control: 'select' as const,
        defaultValue: 'bullet',
        options: [
          { value: 'pending', label: 'Pending' },
          { value: 'pending-notice', label: 'PendingNotice' },
          { value: 'check', label: 'Check' },
          { value: 'check-positive', label: 'CheckPositive' },
          { value: 'bullet', label: 'Bullet' },
          { value: 'square', label: 'Square' },
          { value: 'numbered', label: 'Numbered' },
          { value: 'slot', label: 'Slot' }
        ]
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
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"li-demo-preview\"><div class=\"eb-preview-litem\"><div class=\"eb-preview-litem__row eb-preview-litem__row--l1\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">List body with level-1 style</span></div><div class=\"eb-preview-litem__row eb-preview-litem__row--l2\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">List body with level-2 style</span></div><div class=\"eb-preview-litem__row eb-preview-litem__row--l3\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">List body with level-3 style</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">ListLevel</span><select id=\"li-ctrl-level\" class=\"demo-panel-select\" onchange=\"_liUpdate()\"><option value=\"1\">1</option><option value=\"2\">2</option><option value=\"3\" selected>3</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasLeading</span><select id=\"li-ctrl-hasleading\" class=\"demo-panel-select\" onchange=\"_liUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected>true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasTrailing</span><select id=\"li-ctrl-hastrailing\" class=\"demo-panel-select\" onchange=\"_liUpdate()\"><option value=\"false\" selected>false</option><option value=\"true\">true</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Nested instances</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">List Item - Asset</span><select id=\"li-ctrl-asset\" class=\"demo-panel-select\" onchange=\"_liUpdate()\"><option value=\"pending\">Pending</option><option value=\"pending-notice\">PendingNotice</option><option value=\"check\">Check</option><option value=\"check-positive\">CheckPositive</option><option value=\"bullet\" selected>Bullet</option><option value=\"square\">Square</option><option value=\"numbered\">Numbered</option><option value=\"slot\">Slot</option></select></div></div></div></div>",
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
    "heading": "ListLevel",
    "description": "Three levels, and the only thing that changes between them is the left padding — 0, 16, 32. Type, colour, height and gap are identical, and the row fills its container at every level, so the indent comes out of the label's width rather than out of the row's. <code>hasLeading</code> and <code>hasTrailing</code> switch the two slots independently at any level.",
    "colorsTables": [
      buildColorsTable({
        title: "Colors by Level",
        description: "The row paints one thing — its label. The marker's colour belongs to whichever <a href=\"/components/list-item-asset\">List Item - Asset</a> version is placed, which is why it is named here rather than given a value, and the surface is whatever the list sits on. Depth is carried by the indent alone: all three levels are identical in colour and in type.",
        columns: ["Value"],
        rows: [
          { role: "#label", token: "text/color-text-weak", values: ["#445C85"] },
          { role: "Marker", token: "set by the List Item - Asset version placed", values: ["—"] },
          { role: "Surface", token: "none — inherits the list background", values: ["—"] }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "li-spec-card-l1",
        "demoKey": "l1",
        "demoControls": listItemControls,
        "title": "1",
        "node": "5800:39052",
        "description": "",
        "previewHtml": "<div id=\"li-spec-l1\"><div class=\"eb-preview-litem\"><div class=\"eb-preview-litem__row eb-preview-litem__row--l1\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">List body with level-1 style</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "ListLevel", "value": "1" },
              { "key": "hasLeading", "value": "true", "prop": "hasleading" },
              { "key": "hasTrailing", "value": "false", "prop": "hastrailing" },
              { "key": "⤷ TrailingSlot (slot)", "value": "3 items — ships empty in all three versions" },
              { "key": "Leading marker", "value": "List Item - Asset, placed as Bullet" },
              { "key": "Versions", "value": "3" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "#label", "value": "#445C85", "token": "text/color-text-weak", "swatch": true },
              { "key": "Marker", "value": "Set by the List Item - Asset version placed" },
              { "key": "Surface", "value": "None — inherits the list background" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#label", "value": "Secondary/Bold/Base", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "20 — Hug", "mono": true },
              { "key": "Width", "value": "294 — Fill", "mono": true },
              { "key": "Radius", "value": "0", "mono": true },
              { "key": "Padding H", "value": "0 left · 0 right", "mono": true },
              { "key": "Padding V", "value": "0", "mono": true },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Top left", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-str\">\"List body\"</span><span class=\"syn-punc\">,</span>\n    level<span class=\"syn-punc\">:</span> <span class=\"syn-val\">1</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"List body\"</span><span class=\"syn-punc\">,</span>\n    level <span class=\"syn-eq\">=</span> <span class=\"syn-val\">1</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "li-spec-card-l2",
        "demoKey": "l2",
        "demoControls": listItemControls,
        "title": "2",
        "node": "5800:39056",
        "description": "",
        "previewHtml": "<div id=\"li-spec-l2\"><div class=\"eb-preview-litem\"><div class=\"eb-preview-litem__row eb-preview-litem__row--l1\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">List body with level-1 style</span></div><div class=\"eb-preview-litem__row eb-preview-litem__row--l2\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">List body with level-2 style</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "ListLevel", "value": "2" },
              { "key": "hasLeading", "value": "true", "prop": "hasleading" },
              { "key": "hasTrailing", "value": "false", "prop": "hastrailing" },
              { "key": "⤷ TrailingSlot (slot)", "value": "3 items — ships empty in all three versions" },
              { "key": "Leading marker", "value": "List Item - Asset, placed as Bullet" },
              { "key": "Versions", "value": "3" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "#label", "value": "#445C85", "token": "text/color-text-weak", "swatch": true },
              { "key": "Marker", "value": "Set by the List Item - Asset version placed" },
              { "key": "Surface", "value": "None — inherits the list background" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#label", "value": "Secondary/Bold/Base", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "20 — Hug", "mono": true },
              { "key": "Width", "value": "294 — Fill", "mono": true },
              { "key": "Radius", "value": "0", "mono": true },
              { "key": "Padding H", "value": "16 left · 0 right", "mono": true },
              { "key": "Padding V", "value": "0", "mono": true },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Top left", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-str\">\"List body\"</span><span class=\"syn-punc\">,</span>\n    level<span class=\"syn-punc\">:</span> <span class=\"syn-val\">2</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"List body\"</span><span class=\"syn-punc\">,</span>\n    level <span class=\"syn-eq\">=</span> <span class=\"syn-val\">2</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "li-spec-card-l3",
        "demoKey": "l3",
        "demoControls": listItemControls,
        "title": "3",
        "node": "5800:39060",
        "description": "",
        "previewHtml": "<div id=\"li-spec-l3\"><div class=\"eb-preview-litem\"><div class=\"eb-preview-litem__row eb-preview-litem__row--l1\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">List body with level-1 style</span></div><div class=\"eb-preview-litem__row eb-preview-litem__row--l2\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">List body with level-2 style</span></div><div class=\"eb-preview-litem__row eb-preview-litem__row--l3\"><span class=\"eb-preview-litem__asset eb-preview-litem__asset--bullet\"></span><span class=\"eb-preview-litem__label\">List body with level-3 style</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "ListLevel", "value": "3" },
              { "key": "hasLeading", "value": "true", "prop": "hasleading" },
              { "key": "hasTrailing", "value": "false", "prop": "hastrailing" },
              { "key": "⤷ TrailingSlot (slot)", "value": "3 items — ships empty in all three versions" },
              { "key": "Leading marker", "value": "List Item - Asset, placed as Bullet" },
              { "key": "Versions", "value": "3" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "#label", "value": "#445C85", "token": "text/color-text-weak", "swatch": true },
              { "key": "Marker", "value": "Set by the List Item - Asset version placed" },
              { "key": "Surface", "value": "None — inherits the list background" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#label", "value": "Secondary/Bold/Base", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "20 — Hug", "mono": true },
              { "key": "Width", "value": "294 — Fill", "mono": true },
              { "key": "Radius", "value": "0", "mono": true },
              { "key": "Padding H", "value": "32 left · 0 right", "mono": true },
              { "key": "Padding V", "value": "0", "mono": true },
              { "key": "Gap", "value": "8", "mono": true },
              { "key": "Alignment", "value": "Top left", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-str\">\"List body\"</span><span class=\"syn-punc\">,</span>\n    level<span class=\"syn-punc\">:</span> <span class=\"syn-val\">3</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"List body\"</span><span class=\"syn-punc\">,</span>\n    level <span class=\"syn-eq\">=</span> <span class=\"syn-val\">3</span>\n<span class=\"syn-punc\">)</span>"
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
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:list:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>list<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. The artifact is the List family: List, List Item and List Item - Asset all ship in <code>com.eastblue.ds:list</code> and import <code>com.eastblue.ds.list.*</code>."
    },
    "propertyMapping": {
      "description": "Four properties: one enum-shaped variant, two booleans and a slot. Two native parameters have no row because Figma has no property behind them — <code>label</code> is the <code>#label</code> text layer, and <code>marker</code> is the nested <a href=\"/components/list-item-asset\">List Item - Asset</a> instance, which Figma lists under Nested instances rather than Properties. <strong><code>level</code> is an <code>Int</code>, not a three-value enum.</strong> The Figma variant stops at 3 because a variant has to enumerate its values; a real list nests as deep as its content does, and capping the native API at three would bake a tooling limit into the platform. Same shape as <code>hasWeek6 → weeks: Int</code> on Date Picker - Calendar.",
      "rows": [
        {
          "figma": "ListLevel — 1, 2, 3",
          "swift": "<code>level: Int = 1</code>",
          "compose": "<code>level: Int = 1</code>"
        },
        {
          "figma": "hasLeading — true, false",
          "swift": "<code>hasLeading: Bool = true</code>",
          "compose": "<code>hasLeading: Boolean = true</code>"
        },
        {
          "figma": "hasTrailing — true, false",
          "swift": "<code>hasTrailing: Bool = false</code>",
          "compose": "<code>hasTrailing: Boolean = false</code>"
        },
        {
          "figma": "⤷ TrailingSlot (slot)",
          "swift": "<code>@ViewBuilder trailing: () -> Trailing</code> — shown when <code>hasTrailing</code>",
          "compose": "<code>trailing: @Composable (() -> Unit)?</code> — shown when <code>hasTrailing</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "1 — a flat list",
        "swift": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Delivery fee\"</span><span class=\"syn-punc\">,</span> level<span class=\"syn-punc\">:</span> <span class=\"syn-val\">1</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Delivery fee\"</span><span class=\"syn-punc\">,</span> level <span class=\"syn-eq\">=</span> <span class=\"syn-val\">1</span><span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "2 — one level in",
        "swift": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Service charge\"</span><span class=\"syn-punc\">,</span> level<span class=\"syn-punc\">:</span> <span class=\"syn-val\">2</span><span class=\"syn-punc\">,</span> marker<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.square</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Service charge\"</span><span class=\"syn-punc\">,</span> level <span class=\"syn-eq\">=</span> <span class=\"syn-val\">2</span><span class=\"syn-punc\">,</span> marker <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Square</span><span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "3 — as deep as the variants go",
        "swift": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Processing\"</span><span class=\"syn-punc\">,</span> level<span class=\"syn-punc\">:</span> <span class=\"syn-val\">3</span><span class=\"syn-punc\">,</span> marker<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.checkPositive</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"chevron.right\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBListItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Processing\"</span><span class=\"syn-punc\">,</span> level <span class=\"syn-eq\">=</span> <span class=\"syn-val\">3</span><span class=\"syn-punc\">,</span> marker <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBListItemAssetType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">CheckPositive</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">{</span>\n    <span class=\"syn-fn\">Icon</span><span class=\"syn-punc\">(</span>EBIcons<span class=\"syn-punc\">.</span>ChevronRight<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
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
        "notes": "<code>ListLevel</code> is PascalCase, and <code>hasLeading</code> and <code>hasTrailing</code> both follow the boolean prefix convention while staying off the variant name, so the set holds at three. The one caveat is that <code>ListLevel</code> has to enumerate at all — see C4."
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
        "notes": "Maps to a single row view or composable. <code>level</code> is an <code>Int</code> natively rather than the three-value enum Figma shows: a variant has to enumerate, but a list nests as deep as its content does, and capping the API at three would bake a tooling limit into the platform. One constraint inherited from the marker: <a href=\"/components/list-item-asset\">List Item - Asset</a> is 9, 12 or 16 wide by version, so swapping the marker moves where the label starts. That is raised as a Design Recommendation on that component, not scored here."
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
    "codeConnect": [],
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
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style and Code tabs rebuilt to the content guides — node 5728:37276",
      "rows": [
        {
          "body": "<strong>One card became three.</strong> <code>ListLevel</code> is the driving property, so each of its values gets a card. The single card was titled with the component’s own name and specified level 1 only.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong><code>hasLeading</code> was undocumented.</strong> The Figma panel carries it, defaulting to True; neither the node tree nor this page had it at all. Nothing changed in Figma — <code>get_node_info</code> cannot read property definitions, and this is the fourth component in a row where the panel held more than the tree could show.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>The previews showed three rows all at the same level, which demonstrated nothing.</strong> The indent is the only thing <code>ListLevel</code> changes, and an indent is only legible against what it is indented from. Each card now renders the ladder down to its own level — level 1 alone, level 2 under a level 1, level 3 under both — which is also how the nesting actually works.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The four spec sections were in the wrong order.</strong> Properties, Colors, <em>Layout, Typography</em>; the order is Properties, Colors, Typography, Layout.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Layout had none of the seven keys.</strong> It carried <code>Indent</code>, <code>#label width</code>, <code>Marker to label gap</code>, <code>Marker width</code> and <code>TrailingContainer</code>. All seven are now read off the auto-layout panel: <code>20 — Hug</code>, <code>294 — Fill</code>, padding 0/16/32 left by level, gap 8, top left.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Typography was three font specs and an IOU.</strong> <code>BarkAda SemiBold · 14 / 20 · 0</code>, a <code>Face</code> row, a <code>Per level</code> row, and \"shared library style · name pending Dev Mode read\". <code>#label</code> resolves to <code>Secondary/Bold/Base</code>.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The label colour is named, and the two it does not own are declared as such.</strong> <code>#label</code> is <code>text/color-text-weak</code> at <code>#445C85</code>. The marker’s colour belongs to whichever <a href=\"/components/list-item-asset\">List Item - Asset</a> version is placed and the surface to the list beneath, so the new Colors by Level table says so rather than inventing values for them.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The live preview was missing a control and would have flashed.</strong> Its panel had no <code>hasLeading</code>, so the renderer was reading a control that did not exist and silently falling back to true; and its server-rendered markup did not match what the script produces, so it would have been replaced on load. Both the live preview and all three cards are now generated by the same renderer.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The nested-instance control was missing Slot.</strong> <a href=\"/components/list-item-asset\">List Item - Asset</a> has eight Type values and the dropdown listed seven. Slot draws as the same 16 × 16 dashed footprint the trailing slot uses, which is honest — they are the same thing, a reserved box the consumer fills.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The control panel mirrors Figma’s two blocks.</strong> <code>Properties</code> holds the two booleans; <code>Nested instances</code> holds List Item - Asset. Figma lists them separately because the marker belongs to that component rather than to this row, and reproducing the split says something true about ownership.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. It now cites the List family artifact <code>com.eastblue.ds:list:1.0.0</code> and imports <code>com.eastblue.ds.list.*</code>, matching List Item - Asset.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping missed one property and mapped two things that are not properties.</strong> <code>hasLeading</code> had no row; <code>#label</code> is a text layer and the List Item - Asset instance is a nested instance, which Figma lists under Nested instances rather than Properties. Four rows now, one per panel property, with <code>label</code> and <code>marker</code> named in the description instead.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong><code>level</code> is an <code>Int</code>, not a three-value enum.</strong> The Figma variant stops at 3 because a variant has to enumerate its values; a real list nests as deep as its content does, and capping the native API at three would bake a tooling limit into the platform. Recorded in the mapping description and in C4, alongside the <code>hasWeek6 → weeks: Int</code> precedent from Date Picker - Calendar.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>The Code tab contradicted the Style tab.</strong> Code emitted <code>EBListItem(\"Top level\", level: 1)</code> and the Style tab <code>EBListItem(level: 1, label: \"List body\")</code>. The Style tab moved: an unlabelled leading string matches <code>EBButton(\"Save Changes\")</code>, which is the house convention. Kotlin names the parameter, having no equivalent idiom.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Usage Snippets were keyed to use-cases, not to the property.</strong> \"A flat bulleted list\", \"Nesting by level\", \"With trailing content\". One per <code>ListLevel</code> value now, with <code>marker</code> and the trailing slot riding along on levels 2 and 3 rather than taking subheadings of their own.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Swapping the marker moves where the label starts.</strong> <a href=\"/components/list-item-asset\">List Item - Asset</a> is 9, 12 or 16 wide depending on its version, so a list mixing Bullet with Slot has its labels 7px apart. Recorded in C4 as an inherited constraint, pointing at the Design Recommendation being raised on that component rather than scored again here.",
          "delta": { "kind": "open", "label": "Docs" }
        },
        {
          "body": "<strong>DEV code is live for the first time, and Code Connect is emptied.</strong> The demo script had no <code>getSnippet</code>, so both language tabs were frozen on a static string.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
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
