import type { ComponentData } from '../types';

export const menuGrid: ComponentData = {
  "meta": {
    "slug": "menu-grid",
    "name": "Menu Grid",
    "node": "18320:14332",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18320-14332",
    "description": "A 2D grid of icon-and-label tiles used for top-level service navigation.",
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
    "verdict": {
      "kind": "fix",
      "title": "Open issues remain",
      "text": "Variant property values use pseudo-numeric strings (<code>\"by 4\"</code>) instead of integers (C2). Service Item only ships an <code>active</code> color set — no pressed/disabled tokens (C5). Code Connect mappings not yet registered (C7)."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns. Menu Grid sits on the dashboard as the primary service shortcut surface — typically Row=2, Column=4 (8 services) on the home screen.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"180\" height=\"120\" viewBox=\"0 0 180 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          \n          <rect x=\"34\" y=\"6\" width=\"112\" height=\"108\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          \n          <rect x=\"34\" y=\"6\" width=\"112\" height=\"22\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"34\" y=\"20\" width=\"112\" height=\"8\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"90\" y=\"20\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">GCash</text>\n          \n          <rect x=\"42\" y=\"34\" width=\"96\" height=\"14\" rx=\"3\" fill=\"currentColor\" opacity=\".06\"></rect>\n          <rect x=\"46\" y=\"38\" width=\"34\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <rect x=\"46\" y=\"43\" width=\"22\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".12\"></rect>\n          \n          <rect x=\"42\" y=\"54\" width=\"96\" height=\"44\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"0.8\"></rect>\n          \n          <g fill=\"#005CE5\" opacity=\".9\">\n            <rect x=\"48\" y=\"58\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n            <rect x=\"68\" y=\"58\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n            <rect x=\"88\" y=\"58\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n            <rect x=\"108\" y=\"58\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n            <rect x=\"48\" y=\"80\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n            <rect x=\"68\" y=\"80\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n            <rect x=\"88\" y=\"80\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n            <rect x=\"108\" y=\"80\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n          </g>\n          <g fill=\"#072592\" opacity=\".55\">\n            <rect x=\"49\" y=\"74\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n            <rect x=\"69\" y=\"74\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n            <rect x=\"89\" y=\"74\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n            <rect x=\"109\" y=\"74\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n            <rect x=\"49\" y=\"96\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n            <rect x=\"69\" y=\"96\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n            <rect x=\"89\" y=\"96\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n            <rect x=\"109\" y=\"96\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n          </g>\n          \n          <rect x=\"42\" y=\"104\" width=\"96\" height=\"6\" rx=\"3\" fill=\"currentColor\" opacity=\".07\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"mg-demo-preview\"><svg width=\"284\" height=\"252\" viewBox=\"0 0 284 252\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"284\" height=\"252\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"></rect><rect x=\"26\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"26\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"26\" y=\"136\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"136\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"136\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"136\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"26\" y=\"196\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"196\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"196\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"196\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Row</span><select class=\"demo-panel-select\" id=\"mg-demo-row\" onchange=\"updateMenuGridDemo()\"><option value=\"2\">by 2</option><option value=\"3\">by 3</option><option value=\"4\" selected=\"\">by 4</option><option value=\"5\">by 5</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Column</span><select class=\"demo-panel-select\" id=\"mg-demo-col\" onchange=\"updateMenuGridDemo()\"><option value=\"1\">by 1</option><option value=\"2\">by 2</option><option value=\"3\">by 3</option><option value=\"4\" selected=\"\">by 4</option><option value=\"5\">by 5</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used on dashboard surfaces and any screen needing a uniform service shortcut grid. 20 row/column combinations cover most layout needs from a single column list to a 5×5 grid."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Container carries its own background, padding (8h / 10t / 6b), gap (4×4), and bottom radius (6). All values bound to design tokens."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Variant property values are pseudo-numeric strings (<code>\"by 4\"</code>) instead of clean integer enums. Should be <code>rows: 4</code> / <code>columns: 4</code> for native parity. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Cleanly composes <strong>Service Item</strong> instances (node <code>17787:1700</code>). Service Item is a separate canonical component — icon and label are easily overridable per cell."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "Row × Column",
        "notes": "Active state only — uses <code>dashboard/service-item/color/active/{icon,label}</code>"
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "No pressed token defined for Service Item. Native may need to derive from icon brand color. <span class=\"tag-open tag-c5\">C5</span>"
      },
      {
        "state": "Disabled",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "No disabled token defined. <span class=\"tag-open tag-c5\">C5</span>"
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Variant values use pseudo-numeric strings.",
        "body": "<code>Row=\"by 4\"</code>, <code>Column=\"by 4\"</code> can't map cleanly to native ints or enums. Should be plain integers (<code>rows: 4</code>, <code>columns: 4</code>).",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Service Item only defines an <code>active</code> color set.",
        "body": "No <code>pressed</code> or <code>disabled</code> tokens exist — engineers must invent these colors on native.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until the variant explosion and token gaps are addressed.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Replace the 20-variant matrix with two integer props.",
        "body": "<code>rows</code> and <code>columns</code> as ints. Variant explosion is a Figma-only construct; native uses a lazy grid that takes any int. Could collapse to ~1–2 variants.",
        "tag": "Property"
      },
      {
        "headline": "Add <code>pressed</code> and <code>disabled</code> color tokens.",
        "body": "Extend <code>dashboard/service-item/color/*</code> so all states are documented at the token layer, not improvised in code.",
        "tag": "Token"
      },
      {
        "headline": "Promote Service Item to a first-class DS component.",
        "body": "It's currently a child of Menu Grid but is reused independently across other surfaces. Publishing it standalone (same pattern as Avatar + Avatar Group) makes reuse explicit.",
        "tag": "Family"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "mg-spec-2x4",
        "title": "Row 2 × Column 4 — 8 services (most common)",
        "node": "18320:14371",
        "description": "The default dashboard layout — 2 rows × 4 columns = 8 services. Used on the home dashboard for primary service shortcuts.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Row 2 × Column 4 — 8 services (most common)",
                "mono": false
              },
              {
                "key": "Grid",
                "value": "4-column",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Active icon", "value": "#005CE5", "token": "dashboard/service-item/color/active/icon" },
              { "key": "Active label", "value": "#072592", "token": "dashboard/service-item/color/active/label" },
              { "key": "Surface", "value": "#FFFFFF", "token": "bg/color-bg-main" },
              { "key": "Divider", "value": "#E5EBF4", "token": "border/color-border-weak" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Tile size",
                "value": "square (auto by column count)",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "40 × 40",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "10 vertical · 8 horizontal",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 12 / 12 · +0.5",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBMenuGrid</span><span class=\"syn-punc\">(</span>items<span class=\"syn-punc\">: </span>services<span class=\"syn-punc\">, </span>columns<span class=\"syn-punc\">: </span>4<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBMenuGrid</span><span class=\"syn-punc\">(</span>\n    items <span class=\"syn-eq\">=</span> services<span class=\"syn-punc\">,</span>\n    columns <span class=\"syn-eq\">=</span> 4\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"284\" height=\"132\" viewBox=\"0 0 284 132\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"284\" height=\"132\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"></rect><rect x=\"26\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"26\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text></svg>"
      },
      {
        "cardKey": "mg-spec-4x4",
        "title": "Row 4 × Column 4 — 16 services",
        "node": "18320:14333",
        "description": "Expanded grid for \"All Services\" sheets — 4 rows × 4 columns = 16 services. Used on category pages or full-list views.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Row 4 × Column 4 — 16 services",
                "mono": false
              },
              {
                "key": "Grid",
                "value": "4-column",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Active icon", "value": "#005CE5", "token": "dashboard/service-item/color/active/icon" },
              { "key": "Active label", "value": "#072592", "token": "dashboard/service-item/color/active/label" },
              { "key": "Surface", "value": "#FFFFFF", "token": "bg/color-bg-main" },
              { "key": "Divider", "value": "#E5EBF4", "token": "border/color-border-weak" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Tile size",
                "value": "square (auto by column count)",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "40 × 40",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "10 vertical · 8 horizontal",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 12 / 12 · +0.5",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBMenuGrid</span><span class=\"syn-punc\">(</span>items<span class=\"syn-punc\">: </span>services<span class=\"syn-punc\">, </span>columns<span class=\"syn-punc\">: </span>4<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBMenuGrid</span><span class=\"syn-punc\">(</span>\n    items <span class=\"syn-eq\">=</span> services<span class=\"syn-punc\">,</span>\n    columns <span class=\"syn-eq\">=</span> 4\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"284\" height=\"252\" viewBox=\"0 0 284 252\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"284\" height=\"252\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"></rect><rect x=\"26\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"26\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"26\" y=\"136\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"136\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"136\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"136\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"26\" y=\"196\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"196\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"196\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"196\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text></svg>"
      },
      {
        "cardKey": "mg-spec-5x5",
        "title": "Row 5 × Column 5 — 25 services (max)",
        "node": "18320:14508",
        "description": "Maximum density — 5 rows × 5 columns = 25 services. Use sparingly; label legibility tightens at this density.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Variant",
                "value": "Row 5 × Column 5 — 25 services (max)",
                "mono": false
              },
              {
                "key": "Grid",
                "value": "4-column",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Active icon", "value": "#005CE5", "token": "dashboard/service-item/color/active/icon" },
              { "key": "Active label", "value": "#072592", "token": "dashboard/service-item/color/active/label" },
              { "key": "Surface", "value": "#FFFFFF", "token": "bg/color-bg-main" },
              { "key": "Divider", "value": "#E5EBF4", "token": "border/color-border-weak" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Tile size",
                "value": "square (auto by column count)",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "40 × 40",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "10 vertical · 8 horizontal",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Bold · 12 / 12 · +0.5",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBMenuGrid</span><span class=\"syn-punc\">(</span>items<span class=\"syn-punc\">: </span>services<span class=\"syn-punc\">, </span>columns<span class=\"syn-punc\">: </span>4<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBMenuGrid</span><span class=\"syn-punc\">(</span>\n    items <span class=\"syn-eq\">=</span> services<span class=\"syn-punc\">,</span>\n    columns <span class=\"syn-eq\">=</span> 4\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"352\" height=\"312\" viewBox=\"0 0 352 312\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"352\" height=\"312\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"></rect><rect x=\"26\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"298\" y=\"16\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"312\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"26\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"298\" y=\"76\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"312\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"26\" y=\"136\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"136\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"136\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"136\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"298\" y=\"136\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"312\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"26\" y=\"196\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"196\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"196\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"196\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"298\" y=\"196\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"312\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"26\" y=\"256\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"40\" y=\"300\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"94\" y=\"256\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"108\" y=\"300\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"162\" y=\"256\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"176\" y=\"300\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"230\" y=\"256\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"244\" y=\"300\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text><rect x=\"298\" y=\"256\" width=\"28\" height=\"28\" rx=\"4\" fill=\"#005CE5\" opacity=\".9\"></rect><text x=\"312\" y=\"300\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'HeyMeow Rnd', system-ui, sans-serif\">Label</text></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Service Item ships only the <code>active</code> color set. Pressed and disabled are not yet defined at the token layer — see C5 in the Open Issues.",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Container bg",
            "token": "bg/color-bg-main",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "Service icon",
            "token": "dashboard/service-item/color/active/icon",
            "values": [
              "#005CE5"
            ]
          },
          {
            "role": "Service label",
            "token": "dashboard/service-item/color/active/label",
            "values": [
              "#072592"
            ]
          },
          {
            "role": "Border (weak)",
            "token": "border/color-border-weak",
            "values": [
              "#E5EBF4"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Container width",
            "token": "—",
            "values": [
              "336px (fixed)"
            ]
          },
          {
            "role": "Padding (horizontal)",
            "token": "space/space-8",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Padding (top)",
            "token": "space/space-10",
            "values": [
              "10px"
            ]
          },
          {
            "role": "Padding (bottom)",
            "token": "space/space-6",
            "values": [
              "6px"
            ]
          },
          {
            "role": "Cell gap (row & col)",
            "token": "space/space-4",
            "values": [
              "4px"
            ]
          },
          {
            "role": "Bottom radius",
            "token": "radius/radius-2",
            "values": [
              "6px"
            ]
          },
          {
            "role": "Service Item min-width",
            "token": "—",
            "values": [
              "64px"
            ]
          },
          {
            "role": "Service Item icon container",
            "token": "—",
            "values": [
              "40 × 40"
            ]
          },
          {
            "role": "Icon padding",
            "token": "space/space-4",
            "values": [
              "4px"
            ]
          },
          {
            "role": "Icon → label gap",
            "token": "space/space-6",
            "values": [
              "6px"
            ]
          }
        ]
      },
      {
        "title": "Typography (Service Item Label)",
        "columns": [],
        "rows": [
          {
            "role": "DS text style",
            "token": "Primary/Label/Fine",
            "values": []
          },
          {
            "role": "Font",
            "token": "HeyMeow Rnd",
            "values": []
          },
          {
            "role": "Weight",
            "token": "700 (Bold)",
            "values": []
          },
          {
            "role": "Size",
            "token": "12px",
            "values": []
          },
          {
            "role": "Line height",
            "token": "12px",
            "values": []
          },
          {
            "role": "Tracking",
            "token": "+0.5",
            "values": []
          },
          {
            "role": "Alignment",
            "token": "center",
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:menu-grid:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "Row=\"by N\"",
          "swift": "rows: Int",
          "compose": "rows: Int"
        },
        {
          "figma": "Column=\"by N\"",
          "swift": "columns: Int",
          "compose": "columns: Int"
        },
        {
          "figma": "Service Item (instance)",
          "swift": "items: [EBServiceItem]",
          "compose": "items: List&lt;EBServiceItem&gt;"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/MenuGrid/EBMenuGrid.swift",
        "compose": "android/components/menugrid/EBMenuGrid.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Default dashboard grid — 2 rows × 4 columns</span>\n<span class=\"typ\">EBMenuGrid</span>(<span class=\"prp\">columns</span>: <span class=\"kw\">4</span>, <span class=\"prp\">items</span>: services)\n\n<span class=\"cmt\">// Service Item child</span>\n<span class=\"typ\">EBServiceItem</span>(\n    <span class=\"prp\">icon</span>: <span class=\"typ\">Image</span>(<span class=\"str\">\"send-money\"</span>),\n    <span class=\"prp\">label</span>: <span class=\"str\">\"Send Money\"</span>,\n    <span class=\"prp\">action</span>: { /* tap */ }\n)",
        "compose": "<span class=\"cmt\">// Default dashboard grid — 2 rows × 4 columns</span>\n<span class=\"typ\">EBMenuGrid</span>(\n    <span class=\"prp\">columns</span> = <span class=\"kw\">4</span>,\n    <span class=\"prp\">items</span> = services\n)\n\n<span class=\"cmt\">// Service Item child</span>\n<span class=\"typ\">EBServiceItem</span>(\n    <span class=\"prp\">icon</span> = painterResource(R.drawable.send_money),\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Send Money\"</span>,\n    <span class=\"prp\">onClick</span> = { /* tap */ }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Tap target",
        "ios": "Service Item is 64+ px wide × ~64 px tall — meets HIG 44pt minimum",
        "android": "Meets Material 48dp minimum"
      },
      {
        "requirement": "Accessibility label",
        "ios": "<code>.accessibilityLabel(label)</code> on each item",
        "android": "<code>contentDescription = label</code>"
      },
      {
        "requirement": "Grid semantics",
        "ios": "Container exposes grid traits via <code>LazyVGrid</code>",
        "android": "<code>LazyVerticalGrid</code> announces row/column position"
      },
      {
        "requirement": "Disabled state",
        "ios": "Currently undefined — needs token + <code>.disabled(true)</code> handling",
        "android": "Currently undefined — needs token + <code>enabled = false</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Row=2 × Column=4 for the primary dashboard surface — 8 services is the established home pattern.",
        "dontText": "Use Row=5 × Column=5 unless density is essential — 25 cells reduces label legibility."
      },
      {
        "doText": "Pair Menu Grid with a section heading or container card so users understand the grouping.",
        "dontText": "Mix icon styles within a single grid — keep all Service Item icons in the same vector style."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic names: <code>Service Item</code>, <code>icon-container</code>, <code>Label</code>. No Frame/Group debris."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Property values are pseudo-numeric strings (<code>\"by 4\"</code>) instead of integers. Native takes <code>Int</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors, spacing, radii, and typography bound to tokens."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to <code>LazyVGrid</code> / <code>LazyVerticalGrid</code>. The 20-variant matrix is Figma-only — native uses one component with two int props."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Only <code>active</code> token defined. No <code>pressed</code> or <code>disabled</code> color tokens for Service Item."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Icon container is a vector instance, token-bound color."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No CLI mappings registered yet."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 20,
      "description": "4 <code>Row</code> × 5 <code>Column</code> = <strong>20 variants</strong>. All variants share the same 336px container, 4×4 cell gap, and Service Item child.",
      "columns": [
        "Row",
        "Columns",
        "Cell range",
        "Count"
      ],
      "rows": [
        {
          "cells": [
            "<strong>by 2</strong>",
            "by 1, 2, 3, 4, 5",
            "2 – 10",
            "5"
          ]
        },
        {
          "cells": [
            "<strong>by 3</strong>",
            "by 1, 2, 3, 4, 5",
            "3 – 15",
            "5"
          ]
        },
        {
          "cells": [
            "<strong>by 4</strong>",
            "by 1, 2, 3, 4, 5",
            "4 – 20",
            "5"
          ]
        },
        {
          "cells": [
            "<strong>by 5</strong>",
            "by 1, 2, 3, 4, 5",
            "5 – 25",
            "5"
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
      "header": "Initial Assessment · node 18320:14332",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 20 variants formed by Row × Column (Row 2/3/4/5, Column 1/2/3/4/5). Layout container of Service Item children. 336px fixed width.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Variant property values are strings, not integers</strong> — <code>Row=\"by 4\"</code>, <code>Column=\"by 4\"</code>. Native takes <code>Int</code>; the string prefix forces parsing.\n          <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Service Item missing pressed/disabled tokens</strong> — Only <code>dashboard/service-item/color/active/{icon,label}</code> defined. Other states must be improvised.\n          <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered yet.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
