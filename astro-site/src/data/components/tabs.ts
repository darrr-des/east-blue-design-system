import type { ComponentData, DemoControlSection } from '../types';

const tabsDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Active tab',
        prop: 'active',
        defaultValue: '0',
        options: [
          { value: '0', label: 'Tab 1' },
          { value: '1', label: 'Tab 2' },
          { value: '2', label: 'Tab 3' },
          { value: '3', label: 'Tab 4' },
        ],
      },
    ],
  },
];

export const tabs: ComponentData = {
  "meta": {
    "slug": "tabs",
    "name": "Tabs",
    "node": "26327:11046",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=26327-11046",
    "description": "The Tabs container composes a row of <strong>Tab Item</strong> instances. 12 variants across <code>Orientation</code> (Vertical/Horizontal) × <code>Size</code> (Medium/Large) × <code>Tabs Count</code> (2/3/4).",
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
    "navGroup": "Tabs",
    "verdict": {
      "kind": "keep",
      "title": "Rebuilt — container is clean",
      "text": "Renamed to <strong>Tabs</strong> (plural), disambiguating it from the Tab Item atom, and rebuilt to 12 variants across <code>Orientation</code> × <code>Size</code> × <code>Tabs Count</code>. Every cell is a real Tab Item instance, so atom changes propagate. The fixed <code>Tabs Count</code> axis and the absence of a scrollable variant are both intentional — GCash tabs are capped at 2–4. Only Code Connect registration remains."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns. Tabs sit below a Title Bar to switch between screen sections.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"108\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"22\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"34\" y=\"20\" width=\"132\" height=\"8\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"20\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Title</text>\n          \n          <rect x=\"34\" y=\"34\" width=\"132\" height=\"20\" fill=\"#FFFFFF\"></rect>\n          <rect x=\"34\" y=\"52\" width=\"44\" height=\"2\" fill=\"#005CE5\"></rect>\n          <rect x=\"78\" y=\"52\" width=\"44\" height=\"2\" fill=\"#E5EBF4\"></rect>\n          <rect x=\"122\" y=\"52\" width=\"44\" height=\"2\" fill=\"#E5EBF4\"></rect>\n          <text x=\"56\" y=\"48\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Overview</text>\n          <text x=\"100\" y=\"48\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Details</text>\n          <text x=\"144\" y=\"48\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">History</text>\n          \n          <rect x=\"42\" y=\"62\" width=\"116\" height=\"10\" rx=\"2\" fill=\"currentColor\" opacity=\".07\"></rect>\n          <rect x=\"42\" y=\"76\" width=\"116\" height=\"10\" rx=\"2\" fill=\"currentColor\" opacity=\".07\"></rect>\n          <rect x=\"42\" y=\"90\" width=\"116\" height=\"10\" rx=\"2\" fill=\"currentColor\" opacity=\".07\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"tabs-demo-preview\"><svg width=\"248\" height=\"84\" viewBox=\"0 0 248 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"248\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"31\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"31\" y=\"60\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"62\" height=\"2\" fill=\"#005CE5\"></rect><circle cx=\"93\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"93\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"62\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect><circle cx=\"155\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"155\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"124\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect><circle cx=\"217\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"217\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"186\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">tabsCount</span><select class=\"demo-panel-select\" id=\"tabs-demo-count\" onchange=\"updateTabsDemo()\"><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\" selected=\"\">4</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">active</span><select class=\"demo-panel-select\" id=\"tabs-demo-active\" onchange=\"updateTabsDemo()\"><option value=\"0\" selected=\"\">1st</option><option value=\"1\">2nd</option><option value=\"2\">3rd</option><option value=\"3\">4th</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used anywhere a screen switches between sections — Transactions, Vouchers, Profile, category filters. Two orientations and two sizes cover both compact rows and vertical rails."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own layout and spacing across all 12 variants, and delegates every cell to the Tab Item atom rather than redrawing tabs locally."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Named <strong>Tabs</strong> (plural), correctly distinguishing the container from the Tab Item atom. Three orthogonal props — <code>Orientation</code> × <code>Size</code> × <code>Tabs Count</code> = a complete 2 × 2 × 3 matrix with no invalid cells."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Every cell is a real <code>Tab Item</code> INSTANCE, so atom changes propagate automatically. Orientation and Size forward down to the nested items."
      }
    ],
    "behavior": [
      {
        "state": "Horizontal",
        "ios": "yes",
        "android": "yes",
        "property": "Orientation=Horizontal",
        "notes": "Tabs laid out in a row with the label beside the optional icon. Medium 48px tall, Large 50px."
      },
      {
        "state": "Vertical",
        "ios": "yes",
        "android": "yes",
        "property": "Orientation=Vertical",
        "notes": "Tabs stacked with the icon above the label, 92px tall. Used for rail-style navigation."
      },
      {
        "state": "Tab count",
        "ios": "yes",
        "android": "yes",
        "property": "Tabs Count=2 | 3 | 4",
        "notes": "Container width adapts to the number of tabs. Capped at 4 by design — GCash tab bars do not exceed four destinations."
      },
      {
        "state": "5+ tabs / scrollable",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not modelled by design. The 2–4 cap is deliberate, so horizontal overflow and scrolling do not arise."
      }
    ],
    "resolved": [
      {
        "body": "v2.0: Component renamed <code>Tab</code> → <strong>Tabs</strong> (plural) — the container is no longer confusable with the Tab Item atom. (C2)"
      },
      {
        "body": "v2.0: Rebuilt to 12 variants across <code>Orientation</code> (Vertical / Horizontal) × <code>Size</code> (Medium / Large) × <code>Tabs Count</code> (2 / 3 / 4) — a complete 2 × 2 × 3 matrix, up from the earlier count-only split. (C2)"
      },
      {
        "body": "v2.0: <code>Tabs Count</code> as a fixed variant axis confirmed <strong>intentional</strong> — GCash tab bars are capped at 2–4 destinations, so a Slot-based container is not needed here. (C2)"
      },
      {
        "body": "v2.0: Absence of a scrollable / overflow variant confirmed <strong>intentional</strong> — follows directly from the 2–4 cap; horizontal overflow never occurs. (C5)"
      },
      {
        "body": "v2.0: Composition verified — every cell is a real <code>Tab Item</code> INSTANCE rather than a redrawn tab, so atom changes propagate to all 12 variants. (C4)"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "The rename and container structure are settled, so registration is unblocked — but the SwiftUI / Compose mappings are not yet wired and the native component does not exist. Snippets remain a Planned API.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Register Code Connect mapping to <code>EBTabs</code>.",
        "body": "Wire <code>Orientation</code>, <code>Size</code>, and <code>Tabs Count</code> to the SwiftUI / Compose API, forwarding orientation and size down to the nested <code>EBTabItem</code> children.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Rename \"Tab\" → \"Tabs\".",
        "body": "v2.0: Applied — the container is now plural, disambiguating it from the Tab Item atom.",
        "tag": "Rename"
      },
      {
        "headline": "Drop the <code>tabsCount</code> variant.",
        "body": "v2.0: Reviewed and closed as not needed — the 2–4 cap is deliberate, so a flexible slot-based container would add complexity without covering a real case.",
        "tag": "Property"
      },
      {
        "headline": "Add a scrollable variant.",
        "body": "v2.0: Reviewed and closed as not needed — follows from the 2–4 cap; overflow never occurs.",
        "tag": "State"
      }
    ]
  },
  "style": {
    "heading": "Variants",
    "specCards": [
      {
        "cardKey": "tabs-spec-4",
        "demoKey": "tabs-4",
        "demoControls": tabsDemoControls,
        "title": "4 tabs — default",
        "node": "18482:33250",
        "description": "4 Tab Items in an equal-width flex row. 248px total width.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Tab count",  "value": "4" },
              { "key": "Active tab", "value": "Tab 1", "prop": "active" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label", "value": "#005CE5", "token": "tab/color/active/label",
                "variants": { "active:false": { "value": "#6780A9", "token": "tab/color/inactive/label" } }
              },
              { "key": "Border", "value": "#005CE5", "token": "tab/color/active/border",
                "variants": { "active:false": { "value": "#E5EBF4", "token": "tab/color/inactive/border" } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Tab height",       "value": "44px",  "mono": true },
              { "key": "Padding H",        "value": "16px",  "mono": true },
              { "key": "Gap",              "value": "24px",  "mono": true },
              { "key": "Indicator height", "value": "3px",   "mono": true },
              { "key": "Total width",      "value": "248px", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text Style",  "value": "Primary/Label/Base", "mono": true },
              { "key": "Font",        "value": "Proxima Soft Bold", "mono": true },
              { "key": "Size",        "value": "16px", "mono": true },
              { "key": "Tracking",    "value": "0.25px", "mono": true },
              { "key": "Line-height", "value": "16px", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTabs</span><span class=\"syn-punc\">(</span>selection<span class=\"syn-punc\">: </span>$current<span class=\"syn-punc\">)</span> {\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Tab 1\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.one</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Tab 2\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.two</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBTabs</span><span class=\"syn-punc\">(</span>selectedIndex <span class=\"syn-eq\">=</span> index<span class=\"syn-punc\">, </span>onTabChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Tab 1\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Tab 2\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"tabs-preview-tabs-4\"><svg width=\"248\" height=\"84\" viewBox=\"0 0 248 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"248\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"31\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"31\" y=\"60\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"62\" height=\"2\" fill=\"#005CE5\"></rect><circle cx=\"93\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"93\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"62\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect><circle cx=\"155\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"155\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"124\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect><circle cx=\"217\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"217\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"186\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect></svg></div>"
      },
      {
        "cardKey": "tabs-spec-3",
        "demoKey": "tabs-3",
        "demoControls": tabsDemoControls,
        "title": "3 tabs",
        "node": "18482:33255",
        "description": "3 Tab Items in an equal-width flex row. 186px total width.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Tab count",  "value": "3" },
              { "key": "Active tab", "value": "Tab 1", "prop": "active" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label", "value": "#005CE5", "token": "tab/color/active/label",
                "variants": { "active:false": { "value": "#6780A9", "token": "tab/color/inactive/label" } }
              },
              { "key": "Border", "value": "#005CE5", "token": "tab/color/active/border",
                "variants": { "active:false": { "value": "#E5EBF4", "token": "tab/color/inactive/border" } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Tab height",       "value": "44px",  "mono": true },
              { "key": "Padding H",        "value": "16px",  "mono": true },
              { "key": "Gap",              "value": "24px",  "mono": true },
              { "key": "Indicator height", "value": "3px",   "mono": true },
              { "key": "Total width",      "value": "186px", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text Style",  "value": "Primary/Label/Base", "mono": true },
              { "key": "Font",        "value": "Proxima Soft Bold", "mono": true },
              { "key": "Size",        "value": "16px", "mono": true },
              { "key": "Tracking",    "value": "0.25px", "mono": true },
              { "key": "Line-height", "value": "16px", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTabs</span><span class=\"syn-punc\">(</span>selection<span class=\"syn-punc\">: </span>$current<span class=\"syn-punc\">)</span> {\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Tab 1\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.one</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Tab 2\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.two</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBTabs</span><span class=\"syn-punc\">(</span>selectedIndex <span class=\"syn-eq\">=</span> index<span class=\"syn-punc\">, </span>onTabChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Tab 1\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Tab 2\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"tabs-preview-tabs-3\"><svg width=\"186\" height=\"84\" viewBox=\"0 0 186 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"186\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"31\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"31\" y=\"60\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"62\" height=\"2\" fill=\"#005CE5\"></rect><circle cx=\"93\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"93\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"62\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect><circle cx=\"155\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"155\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"124\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect></svg></div>"
      },
      {
        "cardKey": "tabs-spec-2",
        "demoKey": "tabs-2",
        "demoControls": tabsDemoControls,
        "title": "2 tabs",
        "node": "18482:33259",
        "description": "2 Tab Items in an equal-width flex row. 124px total width.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Tab count",  "value": "2" },
              { "key": "Active tab", "value": "Tab 1", "prop": "active" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label", "value": "#005CE5", "token": "tab/color/active/label",
                "variants": { "active:false": { "value": "#6780A9", "token": "tab/color/inactive/label" } }
              },
              { "key": "Border", "value": "#005CE5", "token": "tab/color/active/border",
                "variants": { "active:false": { "value": "#E5EBF4", "token": "tab/color/inactive/border" } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Tab height",       "value": "44px",  "mono": true },
              { "key": "Padding H",        "value": "16px",  "mono": true },
              { "key": "Gap",              "value": "24px",  "mono": true },
              { "key": "Indicator height", "value": "3px",   "mono": true },
              { "key": "Total width",      "value": "124px", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text Style",  "value": "Primary/Label/Base", "mono": true },
              { "key": "Font",        "value": "Proxima Soft Bold", "mono": true },
              { "key": "Size",        "value": "16px", "mono": true },
              { "key": "Tracking",    "value": "0.25px", "mono": true },
              { "key": "Line-height", "value": "16px", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTabs</span><span class=\"syn-punc\">(</span>selection<span class=\"syn-punc\">: </span>$current<span class=\"syn-punc\">)</span> {\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Tab 1\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.one</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Tab 2\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.two</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBTabs</span><span class=\"syn-punc\">(</span>selectedIndex <span class=\"syn-eq\">=</span> index<span class=\"syn-punc\">, </span>onTabChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Tab 1\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Tab 2\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"tabs-preview-tabs-2\"><svg width=\"124\" height=\"84\" viewBox=\"0 0 124 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"124\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"31\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"31\" y=\"60\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"62\" height=\"2\" fill=\"#005CE5\"></rect><circle cx=\"93\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"93\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui\">Label</text><rect x=\"62\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect></svg></div>"
      }
    ],
    "colorsTables": [
      {
        "title": "Layout",
        "columns": [],
        "rows": [
          {
            "role": "Total width (2 tabs)",
            "token": "124px",
            "values": []
          },
          {
            "role": "Total width (3 tabs)",
            "token": "186px",
            "values": []
          },
          {
            "role": "Total width (4 tabs)",
            "token": "248px",
            "values": []
          },
          {
            "role": "Per-tab width",
            "token": "62px (flex 1 0 0)",
            "values": []
          },
          {
            "role": "Gap between tabs",
            "token": "0 (shared border-bottom)",
            "values": []
          },
          {
            "role": "Shadow",
            "token": "Depth/D4 — 0 0 8px #73819A1A",
            "values": []
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:tabs:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "items",
          "swift": "items: [EBTabItem]",
          "compose": "items: List&lt;EBTabItem&gt;"
        },
        {
          "figma": "selectedIndex",
          "swift": "@Binding selection: Int",
          "compose": "selectedIndex: Int"
        },
        {
          "figma": "onSelect",
          "swift": "onSelect: (Int) -&gt; Void",
          "compose": "onSelect: (Int) -&gt; Unit"
        },
        {
          "figma": "scrollable",
          "swift": ".scrollable(true)",
          "compose": "scrollable: Boolean"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Tabs/EBTabs.swift",
        "compose": "android/components/tabs/EBTabs.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"typ\">EBTabs</span>(\n    <span class=\"prp\">items</span>: [\n        <span class=\"typ\">EBTabItem</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Overview\"</span>, <span class=\"prp\">icon</span>: .<span class=\"fn\">image</span>(<span class=\"typ\">Image</span>(<span class=\"str\">\"overview\"</span>))),\n        <span class=\"typ\">EBTabItem</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Details\"</span>),\n        <span class=\"typ\">EBTabItem</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"History\"</span>)\n    ],\n    <span class=\"prp\">selection</span>: $selectedIndex\n)",
        "compose": "<span class=\"typ\">EBTabs</span>(\n    <span class=\"prp\">items</span> = listOf(\n        <span class=\"typ\">EBTabItem</span>(label = <span class=\"str\">\"Overview\"</span>, icon = painterResource(R.drawable.overview)),\n        <span class=\"typ\">EBTabItem</span>(label = <span class=\"str\">\"Details\"</span>),\n        <span class=\"typ\">EBTabItem</span>(label = <span class=\"str\">\"History\"</span>)\n    ),\n    <span class=\"prp\">selectedIndex</span> = state,\n    <span class=\"prp\">onSelect</span> = { state = it }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Tab list role",
        "ios": "Automatic via <code>TabView</code>",
        "android": "Automatic via <code>TabRow</code> (Material semantics)"
      },
      {
        "requirement": "Selected state announced",
        "ios": "<code>.accessibilityAddTraits(.isSelected)</code> on active tab",
        "android": "<code>selected = true</code> in semantics"
      },
      {
        "requirement": "Keyboard / focus navigation",
        "ios": "iOS handles via focus traits",
        "android": "Compose handles via focus semantics"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use 2–4 tabs for primary navigation within a screen. Tabs should represent peer sections of equal importance.",
        "dontText": "Use tabs for sequential flows (Step 1 / Step 2 / Step 3) — use a Stepper component instead."
      },
      {
        "doText": "Keep tab labels short (one or two words). If labels exceed 12 characters, use icons only or switch to vertical orientation.",
        "dontText": "Nest Tabs inside Tabs — creates navigation ambiguity and accessibility issues."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Tab 1</code>, <code>Tab 2</code>, ... <code>container</code>, <code>icon-label</code>. Semantic."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Component named singular \"Tab\"; <code>tabsCount</code> uses string values and shouldn't be a variant at all."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Shadow and spacing bound to tokens. Colors live on the Tab Item atom."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps cleanly to <code>TabView</code> / <code>TabRow</code>."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Active/inactive covered via Tab Item. No scrollable pattern for 5+ tabs."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Children are Tab Item instances."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Not mapped."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 3,
      "description": "After the recommended restructure these 3 variants collapse to 1 flexible container accepting a list.",
      "columns": [
        "tabsCount",
        "Width",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "2",
            "124px",
            "18482:33259"
          ]
        },
        {
          "cells": [
            "3",
            "186px",
            "18482:33255"
          ]
        },
        {
          "cells": [
            "4",
            "248px",
            "18482:33250"
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
      "header": "Initial Assessment · node 18482:33249",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 3 variants (tabsCount 2/3/4). Container composing Tab Item children. Recommended rename \"Tab\" → \"Tabs\" and dropping the count variant.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Component named singular</strong> — \"Tab\" should be \"Tabs\" (plural) to disambiguate from the Tab Item atom.\n          <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong><code>tabsCount</code> is a variant property</strong> — Should be removed; the container should accept a list of Tab Items instead of exposing a fixed count enum.\n          <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>No scrollable variant</strong> — 5+ tabs have no documented overflow pattern.\n          <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Not registered.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
