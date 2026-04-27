import type { ComponentData } from '../types';

export const tabs: ComponentData = {
  "meta": {
    "slug": "tabs",
    "name": "Tabs",
    "node": "18482:33249",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18482-33249",
    "description": "The Tabs container composes a row of <strong>Tab Item</strong> atoms and manages the active index. Currently exposes 3 variants split by <code>tabsCount</code> (2 / 3 / 4). Figma component is currently named singular \"Tab\" — should be renamed \"Tabs\".",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Tabs"
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns. Tabs sit below a Title Bar to switch between screen sections.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"200\" height=\"120\" viewBox=\"0 0 200 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"108\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"34\" y=\"6\" width=\"132\" height=\"22\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"34\" y=\"20\" width=\"132\" height=\"8\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"100\" y=\"20\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Title</text>\n          \n          <rect x=\"34\" y=\"34\" width=\"132\" height=\"20\" fill=\"#FFFFFF\"></rect>\n          <rect x=\"34\" y=\"52\" width=\"44\" height=\"2\" fill=\"#005CE5\"></rect>\n          <rect x=\"78\" y=\"52\" width=\"44\" height=\"2\" fill=\"#E5EBF4\"></rect>\n          <rect x=\"122\" y=\"52\" width=\"44\" height=\"2\" fill=\"#E5EBF4\"></rect>\n          <text x=\"56\" y=\"48\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Overview</text>\n          <text x=\"100\" y=\"48\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">Details</text>\n          <text x=\"144\" y=\"48\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">History</text>\n          \n          <rect x=\"42\" y=\"62\" width=\"116\" height=\"10\" rx=\"2\" fill=\"currentColor\" opacity=\".07\"></rect>\n          <rect x=\"42\" y=\"76\" width=\"116\" height=\"10\" rx=\"2\" fill=\"currentColor\" opacity=\".07\"></rect>\n          <rect x=\"42\" y=\"90\" width=\"116\" height=\"10\" rx=\"2\" fill=\"currentColor\" opacity=\".07\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"tabs-demo-preview\"><svg width=\"248\" height=\"84\" viewBox=\"0 0 248 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"248\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"31\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"31\" y=\"60\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"11\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"62\" height=\"2\" fill=\"#005CE5\"></rect><circle cx=\"93\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"93\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text><rect x=\"62\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect><circle cx=\"155\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"155\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text><rect x=\"124\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect><circle cx=\"217\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"217\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text><rect x=\"186\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">tabsCount</span><select class=\"demo-panel-select\" id=\"tabs-demo-count\" onchange=\"updateTabsDemo()\"><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\" selected=\"\">4</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">active</span><select class=\"demo-panel-select\" id=\"tabs-demo-active\" onchange=\"updateTabsDemo()\"><option value=\"0\" selected=\"\">1st</option><option value=\"1\">2nd</option><option value=\"2\">3rd</option><option value=\"3\">4th</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used anywhere a screen needs to switch between sections — Transactions, Vouchers, Profile tabs, category filters. Container adapts to 2–4 tabs via variant."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own width, shadow (<code>Depth/D4</code>), and flex layout. Composes Tab Item children cleanly."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Component named \"Tab\" (singular) while it's actually the container — confusing alongside the Tab Item atom. <code>tabsCount</code> uses string values (<code>\"2\"/\"3\"/\"4\"</code>) instead of integer or dropping the variant. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Every cell is an instance of the canonical Tab Item (<code>27:89110</code>). Changes to Tab Item propagate here."
      }
    ],
    "behavior": [
      {
        "state": "2 tabs",
        "ios": "yes",
        "android": "yes",
        "property": "tabsCount=\"2\"",
        "notes": "Width 124px"
      },
      {
        "state": "3 tabs",
        "ios": "yes",
        "android": "yes",
        "property": "tabsCount=\"3\"",
        "notes": "Width 186px"
      },
      {
        "state": "4 tabs",
        "ios": "yes",
        "android": "yes",
        "property": "tabsCount=\"4\"",
        "notes": "Width 248px"
      },
      {
        "state": "5+ tabs / scrollable",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not documented. Native needs a scrollable variant for overflow. <span class=\"tag-open tag-c5\">C5</span>"
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Component name is singular (\"Tab\").",
        "body": "Should be plural (\"Tabs\") to match the container semantics and disambiguate from the Tab Item atom.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>tabsCount</code> is a variant with string values.",
        "body": "<code>\"2\"/\"3\"/\"4\"</code> — native tabs take a list; the count should not be a discrete Figma variant. Drop the property and let the container accept a collection.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No scrollable / overflow variant documented.",
        "body": "For 5+ tabs, native uses <code>ScrollableTabRow</code> on Android and horizontal scroll on iOS — DS has no pattern, so engineers improvise.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the plural rename and <code>tabsCount</code> drop land.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Rename \"Tab\" → \"Tabs\"",
        "body": "(plural). Matches the atom/container pattern already used by Avatar + Avatar Group and Menu Grid + Service Item.",
        "tag": "Rename"
      },
      {
        "headline": "Drop the <code>tabsCount</code> variant.",
        "body": "The container should be a single flexible component that accepts an array of Tab Items. Collapses 3 variants → 1.",
        "tag": "Property"
      },
      {
        "headline": "Add a scrollable variant",
        "body": "(or document that 5+ tabs should switch to a ScrollableTabRow pattern). Prevents engineers from improvising overflow behavior.",
        "tag": "State"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "tabs-spec-4",
        "title": "4 tabs — default",
        "node": "18482:33250",
        "description": "4 Tab Items in an equal-width flex row. 248px total width.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "4 tabs — default",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Active label",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Active label token",
                "value": "tab/color/active/label",
                "mono": true
              },
              {
                "key": "Active border",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Active border token",
                "value": "tab/color/active/border",
                "mono": true
              },
              {
                "key": "Inactive label",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Inactive label token",
                "value": "tab/color/inactive/label",
                "mono": true
              },
              {
                "key": "Inactive border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Inactive border token",
                "value": "tab/color/inactive/border",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Tab height",
                "value": "44px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Indicator height",
                "value": "3px (Depth/D4 shadow on container)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Tab label style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "Tab font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTabs</span><span class=\"syn-punc\">(</span>selection<span class=\"syn-punc\">: </span>$current<span class=\"syn-punc\">)</span> {\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Tab 1\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.one</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Tab 2\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.two</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBTabs</span><span class=\"syn-punc\">(</span>selectedIndex <span class=\"syn-eq\">=</span> index<span class=\"syn-punc\">, </span>onTabChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Tab 1\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Tab 2\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "previewHtml": "<svg width=\"248\" height=\"84\" viewBox=\"0 0 248 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"248\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"31\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"31\" y=\"60\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"11\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"62\" height=\"2\" fill=\"#005CE5\"></rect><circle cx=\"93\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"93\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text><rect x=\"62\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect><circle cx=\"155\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"155\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text><rect x=\"124\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect><circle cx=\"217\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"217\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text><rect x=\"186\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect></svg>"
      },
      {
        "cardKey": "tabs-spec-3",
        "title": "3 tabs",
        "node": "18482:33255",
        "description": "3 Tab Items in an equal-width flex row. 186px total width.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "3 tabs",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Active label",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Active label token",
                "value": "tab/color/active/label",
                "mono": true
              },
              {
                "key": "Active border",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Active border token",
                "value": "tab/color/active/border",
                "mono": true
              },
              {
                "key": "Inactive label",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Inactive label token",
                "value": "tab/color/inactive/label",
                "mono": true
              },
              {
                "key": "Inactive border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Inactive border token",
                "value": "tab/color/inactive/border",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Tab height",
                "value": "44px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Indicator height",
                "value": "3px (Depth/D4 shadow on container)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Tab label style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "Tab font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTabs</span><span class=\"syn-punc\">(</span>selection<span class=\"syn-punc\">: </span>$current<span class=\"syn-punc\">)</span> {\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Tab 1\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.one</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Tab 2\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.two</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBTabs</span><span class=\"syn-punc\">(</span>selectedIndex <span class=\"syn-eq\">=</span> index<span class=\"syn-punc\">, </span>onTabChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Tab 1\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Tab 2\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "previewHtml": "<svg width=\"186\" height=\"84\" viewBox=\"0 0 186 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"186\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"31\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"31\" y=\"60\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"11\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"62\" height=\"2\" fill=\"#005CE5\"></rect><circle cx=\"93\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"93\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text><rect x=\"62\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect><circle cx=\"155\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"155\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text><rect x=\"124\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect></svg>"
      },
      {
        "cardKey": "tabs-spec-2",
        "title": "2 tabs",
        "node": "18482:33259",
        "description": "2 Tab Items in an equal-width flex row. 124px total width.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Variant",
                "value": "2 tabs",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Active label",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Active label token",
                "value": "tab/color/active/label",
                "mono": true
              },
              {
                "key": "Active border",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Active border token",
                "value": "tab/color/active/border",
                "mono": true
              },
              {
                "key": "Inactive label",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Inactive label token",
                "value": "tab/color/inactive/label",
                "mono": true
              },
              {
                "key": "Inactive border",
                "value": "#E5EBF4",
                "mono": true
              },
              {
                "key": "Inactive border token",
                "value": "tab/color/inactive/border",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Tab height",
                "value": "44px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "24px",
                "mono": true
              },
              {
                "key": "Indicator height",
                "value": "3px (Depth/D4 shadow on container)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Tab label style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "Tab font",
                "value": "Proxima Soft Bold · 16 / 16 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTabs</span><span class=\"syn-punc\">(</span>selection<span class=\"syn-punc\">: </span>$current<span class=\"syn-punc\">)</span> {\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Tab 1\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.one</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Tab 2\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.two</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBTabs</span><span class=\"syn-punc\">(</span>selectedIndex <span class=\"syn-eq\">=</span> index<span class=\"syn-punc\">, </span>onTabChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Tab 1\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBTabItem</span><span class=\"syn-punc\">(</span>label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Tab 2\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "previewHtml": "<svg width=\"124\" height=\"84\" viewBox=\"0 0 124 84\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"124\" height=\"84\" fill=\"#FFFFFF\"></rect><circle cx=\"31\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"31\" y=\"60\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"11\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text><rect x=\"0\" y=\"82\" width=\"62\" height=\"2\" fill=\"#005CE5\"></rect><circle cx=\"93\" cy=\"28\" r=\"16\" fill=\"#C2C6CF\"></circle><text x=\"93\" y=\"60\" text-anchor=\"middle\" fill=\"#6780A9\" font-size=\"11\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui\">Label</text><rect x=\"62\" y=\"82\" width=\"62\" height=\"2\" fill=\"#E5EBF4\"></rect></svg>"
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
