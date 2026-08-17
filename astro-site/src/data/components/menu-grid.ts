import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/menu-grid.js`.
// Property order and value ranges mirror the Figma component set
// (node 5973:70111): `Column` = 2–5 columns across, `Row` = 1–5 rows down.
// Column=2 switches the Service Item child to Orientation=Horizontal.
const menuGridDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Column',
        prop: 'col',
        defaultValue: '4',
        options: [
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '5', label: '5' },
        ],
      },
      {
        label: 'Row',
        prop: 'row',
        defaultValue: '2',
        options: [
          { value: '1', label: '1' },
          { value: '2', label: '2' },
          { value: '3', label: '3' },
          { value: '4', label: '4' },
          { value: '5', label: '5' },
        ],
      },
    ],
  },
];

export const menuGrid: ComponentData = {
  "meta": {
    "slug": "menu-grid",
    "name": "Menu Grid",
    "node": "5973:70111",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5973-70111",
    "description": "A 2D grid of Service Item tiles used for top-level service navigation. <code>Column</code> (2–5) sets the tiles across, <code>Row</code> (1–5) the tiles down.",
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
    "verdict": {
      "kind": "keep",
      "title": "Ship as-is",
      "text": "All four traits pass. The rebuilt component set uses plain numeric variant values (<code>Column=4, Row=2</code>) — string values are the correct approach here, since Figma variant properties cannot be typed as integers. Interaction states are owned by the <a href=\"/components/service-item\">Service Item</a> child and are assessed there, not on this layout container. Code Connect mappings are left open for engineering to register."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns. Menu Grid sits on the dashboard as the primary service shortcut surface — typically <code>Column=4, Row=2</code> (8 services) on the home screen.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"180\" height=\"120\" viewBox=\"0 0 180 120\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          \n          <rect x=\"34\" y=\"6\" width=\"112\" height=\"108\" rx=\"10\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          \n          <rect x=\"34\" y=\"6\" width=\"112\" height=\"22\" rx=\"10\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"34\" y=\"20\" width=\"112\" height=\"8\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <text x=\"90\" y=\"20\" text-anchor=\"middle\" fill=\"#FFF\" font-size=\"6\" font-weight=\"700\" font-family=\"system-ui\">GCash</text>\n          \n          <rect x=\"42\" y=\"34\" width=\"96\" height=\"14\" rx=\"3\" fill=\"currentColor\" opacity=\".06\"></rect>\n          <rect x=\"46\" y=\"38\" width=\"34\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".18\"></rect>\n          <rect x=\"46\" y=\"43\" width=\"22\" height=\"3\" rx=\"1.5\" fill=\"currentColor\" opacity=\".12\"></rect>\n          \n          <rect x=\"42\" y=\"54\" width=\"96\" height=\"44\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"0.8\"></rect>\n          \n          <g fill=\"#005CE5\" opacity=\".9\">\n            <rect x=\"48\" y=\"58\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n            <rect x=\"68\" y=\"58\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n            <rect x=\"88\" y=\"58\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n            <rect x=\"108\" y=\"58\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n            <rect x=\"48\" y=\"80\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n            <rect x=\"68\" y=\"80\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n            <rect x=\"88\" y=\"80\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n            <rect x=\"108\" y=\"80\" width=\"14\" height=\"14\" rx=\"2\"></rect>\n          </g>\n          <g fill=\"#072592\" opacity=\".55\">\n            <rect x=\"49\" y=\"74\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n            <rect x=\"69\" y=\"74\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n            <rect x=\"89\" y=\"74\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n            <rect x=\"109\" y=\"74\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n            <rect x=\"49\" y=\"96\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n            <rect x=\"69\" y=\"96\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n            <rect x=\"89\" y=\"96\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n            <rect x=\"109\" y=\"96\" width=\"12\" height=\"2\" rx=\"1\"></rect>\n          </g>\n          \n          <rect x=\"42\" y=\"104\" width=\"96\" height=\"6\" rx=\"3\" fill=\"currentColor\" opacity=\".07\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"mg-demo-preview\"><svg width=\"336\" height=\"164\" viewBox=\"0 0 336 164\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"336\" height=\"164\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"/><circle cx=\"46.5\" cy=\"32\" r=\"24\" fill=\"#E5EBF4\"/><text x=\"46.5\" y=\"71\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"12\" font-weight=\"700\" letter-spacing=\"0.5\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"127.5\" cy=\"32\" r=\"24\" fill=\"#E5EBF4\"/><text x=\"127.5\" y=\"71\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"12\" font-weight=\"700\" letter-spacing=\"0.5\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"208.5\" cy=\"32\" r=\"24\" fill=\"#E5EBF4\"/><text x=\"208.5\" y=\"71\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"12\" font-weight=\"700\" letter-spacing=\"0.5\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"289.5\" cy=\"32\" r=\"24\" fill=\"#E5EBF4\"/><text x=\"289.5\" y=\"71\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"12\" font-weight=\"700\" letter-spacing=\"0.5\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"46.5\" cy=\"108\" r=\"24\" fill=\"#E5EBF4\"/><text x=\"46.5\" y=\"147\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"12\" font-weight=\"700\" letter-spacing=\"0.5\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"127.5\" cy=\"108\" r=\"24\" fill=\"#E5EBF4\"/><text x=\"127.5\" y=\"147\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"12\" font-weight=\"700\" letter-spacing=\"0.5\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"208.5\" cy=\"108\" r=\"24\" fill=\"#E5EBF4\"/><text x=\"208.5\" y=\"147\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"12\" font-weight=\"700\" letter-spacing=\"0.5\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"289.5\" cy=\"108\" r=\"24\" fill=\"#E5EBF4\"/><text x=\"289.5\" y=\"147\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"12\" font-weight=\"700\" letter-spacing=\"0.5\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Column</span><select class=\"demo-panel-select\" id=\"mg-demo-col\" onchange=\"updateMenuGridDemo()\"><option value=\"2\">2</option><option value=\"3\">3</option><option value=\"4\" selected=\"\">4</option><option value=\"5\">5</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Row</span><select class=\"demo-panel-select\" id=\"mg-demo-row\" onchange=\"updateMenuGridDemo()\"><option value=\"1\">1</option><option value=\"2\" selected=\"\">2</option><option value=\"3\">3</option><option value=\"4\">4</option><option value=\"5\">5</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Service Item</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Orientation</span><span class=\"demo-panel-readout\" id=\"mg-demo-orientation\">Vertical</span></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Used on dashboard surfaces and any screen needing a uniform service shortcut grid. 20 row/column combinations cover most layout needs from a single column list to a 5×5 grid."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "The container is a fixed 336 wide and carries its own background, padding (8 vertical; 8 horizontal, tightening to 6.4 at <code>Column=5</code>), 4 row gap, and 6 radius."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Both axes read the conventional way — <code>Column</code> counts tiles across, <code>Row</code> counts tiles down. Values are plain numbers across all 20 variants."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Composes <strong>Service Item</strong> instances and nothing else. Icons arrive through a Figma <code>SLOT</code>, so each cell is overridable without detaching."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "Column × Row",
        "notes": "Menu Grid is a layout container and has no interaction states of its own. Tap, pressed and disabled behaviour belong to the <a href=\"/components/service-item\">Service Item</a> child."
      }
    ],
    "resolved": [
      {
        "headline": "Variant values are plain numbers.",
        "body": "The earlier set used pseudo-numeric strings (<code>Row=\"by 4\"</code>). The rebuild uses <code>Column=4, Row=2</code>. String values are the correct and only option here — Figma variant properties cannot be typed as integers — so the prior recommendation to switch to integer props has been withdrawn.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Service Item is a first-class DS component.",
        "body": "Previously flagged as a child of Menu Grid only. It is now published standalone with its own <code>State</code> / <code>Orientation</code> / <code>Badge</code> / <code>Action</code> axes, and Menu Grid instances it rather than redefining tiles.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Container metrics are uniform across all 20 variants.",
        "body": "Two <code>Row=5</code> variants previously broke the shared metrics — <code>Column=5, Row=5</code> was 352 wide against 336 everywhere else, and <code>Column=2, Row=5</code> used 60-tall tiles against 64. Both were corrected in Figma. Every variant is now a 336-wide container at a 4 row gap, with 64-tall tiles at <code>Column=2</code> and 72-tall tiles at <code>Column=3</code>–<code>5</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Icons come through a slot.",
        "body": "Each tile's icon is a Figma <code>SLOT</code>, not baked artwork, so cells are swappable without detaching the instance.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Left open for engineering. The property surface is stable and linkable — <code>Column</code> and <code>Row</code> map straight onto a lazy grid's column count and item count.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Document that <code>Column=2</code> switches the tile to horizontal.",
        "body": "At <code>Column=2</code> the Service Item child renders at <code>Orientation=Horizontal</code> (158 × 64, icon left of the label); <code>Column=3</code>–<code>5</code> render vertical. Menu Grid exposes no orientation property, so a native lazy grid will not reproduce the switch on its own — it has to be stated in the property mapping. No Figma change required.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "mg-spec-2x4",
        "demoKey": "r2c4",
        "demoControls": menuGridDemoControls,
        "title": "Row 2 × Column 4 — 8 services (most common)",
        "node": "18320:14371",
        "description": "The default dashboard layout — 2 rows × 4 columns = 8 services. Used on the home dashboard for primary service shortcuts.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Row",
                "value": "2",
                "prop": "row",
                "mono": false
              },
              {
                "key": "Column",
                "value": "4",
                "prop": "col",
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
                "key": "Cells",
                "value": "4 × 2 = 8",
                "mono": true
              },
              {
                "key": "Item orientation",
                "value": "Vertical",
                "mono": true
              },
              {
                "key": "Tile size",
                "value": "77 × 72",
                "mono": true
              },
              {
                "key": "Icon slot",
                "value": "48 × 48",
                "mono": true
              },
              {
                "key": "Container width",
                "value": "336",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "8 horizontal · 8 vertical",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "4 × 4",
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
        "previewHtml": "<svg width=\"284\" height=\"132\" viewBox=\"0 0 284 132\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"284\" height=\"132\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"></rect><circle cx=\"40\" cy=\"30\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"40\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"108\" cy=\"30\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"108\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"176\" cy=\"30\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"176\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"244\" cy=\"30\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"244\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"40\" cy=\"90\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"40\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"108\" cy=\"90\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"108\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"176\" cy=\"90\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"176\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"244\" cy=\"90\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"244\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text></svg>"
      },
      {
        "cardKey": "mg-spec-4x4",
        "demoKey": "r4c4",
        "demoControls": menuGridDemoControls,
        "title": "Row 4 × Column 4 — 16 services",
        "node": "18320:14333",
        "description": "Expanded grid for \"All Services\" sheets — 4 rows × 4 columns = 16 services. Used on category pages or full-list views.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Row",
                "value": "4",
                "prop": "row",
                "mono": false
              },
              {
                "key": "Column",
                "value": "4",
                "prop": "col",
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
                "key": "Cells",
                "value": "4 × 4 = 16",
                "mono": true
              },
              {
                "key": "Item orientation",
                "value": "Vertical",
                "mono": true
              },
              {
                "key": "Tile size",
                "value": "77 × 72",
                "mono": true
              },
              {
                "key": "Icon slot",
                "value": "48 × 48",
                "mono": true
              },
              {
                "key": "Container width",
                "value": "336",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "8 horizontal · 8 vertical",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "4 × 4",
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
        "previewHtml": "<svg width=\"284\" height=\"252\" viewBox=\"0 0 284 252\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"284\" height=\"252\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"></rect><circle cx=\"40\" cy=\"30\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"40\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"108\" cy=\"30\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"108\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"176\" cy=\"30\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"176\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"244\" cy=\"30\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"244\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"40\" cy=\"90\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"40\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"108\" cy=\"90\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"108\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"176\" cy=\"90\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"176\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"244\" cy=\"90\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"244\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"40\" cy=\"150\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"40\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"108\" cy=\"150\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"108\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"176\" cy=\"150\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"176\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"244\" cy=\"150\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"244\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"40\" cy=\"210\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"40\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"108\" cy=\"210\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"108\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"176\" cy=\"210\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"176\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"244\" cy=\"210\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"244\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text></svg>"
      },
      {
        "cardKey": "mg-spec-5x5",
        "demoKey": "r5c5",
        "demoControls": menuGridDemoControls,
        "title": "Row 5 × Column 5 — 25 services (max)",
        "node": "18320:14508",
        "description": "Maximum density — 5 rows × 5 columns = 25 services. Use sparingly; label legibility tightens at this density.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Row",
                "value": "5",
                "prop": "row",
                "mono": false
              },
              {
                "key": "Column",
                "value": "5",
                "prop": "col",
                "mono": false
              },
              {
                "key": "Grid",
                "value": "5-column",
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
                "key": "Cells",
                "value": "5 × 5 = 25",
                "mono": true
              },
              {
                "key": "Item orientation",
                "value": "Vertical",
                "mono": true
              },
              {
                "key": "Tile size",
                "value": "64 × 72",
                "mono": true
              },
              {
                "key": "Icon slot",
                "value": "48 × 48",
                "mono": true
              },
              {
                "key": "Container width",
                "value": "336",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "6.4 horizontal · 8 vertical",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0.8 × 4",
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
        "previewHtml": "<svg width=\"352\" height=\"312\" viewBox=\"0 0 352 312\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"0\" y=\"0\" width=\"352\" height=\"312\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"></rect><circle cx=\"40\" cy=\"30\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"40\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"108\" cy=\"30\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"108\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"176\" cy=\"30\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"176\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"244\" cy=\"30\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"244\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"312\" cy=\"30\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"312\" y=\"60\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"40\" cy=\"90\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"40\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"108\" cy=\"90\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"108\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"176\" cy=\"90\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"176\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"244\" cy=\"90\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"244\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"312\" cy=\"90\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"312\" y=\"120\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"40\" cy=\"150\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"40\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"108\" cy=\"150\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"108\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"176\" cy=\"150\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"176\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"244\" cy=\"150\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"244\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"312\" cy=\"150\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"312\" y=\"180\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"40\" cy=\"210\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"40\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"108\" cy=\"210\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"108\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"176\" cy=\"210\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"176\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"244\" cy=\"210\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"244\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"312\" cy=\"210\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"312\" y=\"240\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"40\" cy=\"270\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"40\" y=\"300\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"108\" cy=\"270\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"108\" y=\"300\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"176\" cy=\"270\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"176\" y=\"300\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"244\" cy=\"270\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"244\" y=\"300\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text><circle cx=\"312\" cy=\"270\" r=\"14\" fill=\"#E8EBF0\"></circle><text x=\"312\" y=\"300\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"9\" font-weight=\"700\" font-family=\"'Proxima Soft', system-ui, sans-serif\">Label</text></svg>"
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
            "token": "Proxima Soft",
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
        "notes": "Every child is a named <code>Service Item</code> instance. No Frame/Group debris in the component set."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Column</code> = tiles across, <code>Row</code> = tiles down — the conventional reading. Values are plain numbers. Figma variant properties are string-only, so numeric strings are the correct representation."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "na",
        "statusLabel": "Not Assessed",
        "notes": "Out of scope for this review — token paths live in remote library collections and were not audited for this pass."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to <code>LazyVGrid</code> / <code>LazyVerticalGrid(GridCells.Fixed(Column))</code> with <code>Column × Row</code> items. The tile orientation switch at <code>Column=2</code> must be carried in the API — see the Docs recommendation."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Menu Grid is a layout container with no states of its own. Tap and disabled behaviour is assessed on <a href=\"/components/service-item\">Service Item</a>."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Icons are delivered through a Figma <code>SLOT</code> on each tile rather than baked artwork."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "No CLI mappings registered yet — left open for engineering."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 20,
      "description": "4 <code>Column</code> × 5 <code>Row</code> = <strong>20 variants</strong>. <code>Column</code> counts tiles across, <code>Row</code> counts tiles down. Every variant is a 336-wide container of <strong>Service Item</strong> instances at a 4 row gap.",
      "columns": [
        "Column",
        "Row",
        "Tiles",
        "Container",
        "Node"
      ],
      "rows": [
        {
          "cells": [
            "Column = 2",
            "Row = 1",
            "2",
            "336 × 80",
            "<code>5973:70192</code>"
          ]
        },
        {
          "cells": [
            "Column = 2",
            "Row = 2",
            "4",
            "336 × 148",
            "<code>5973:70186</code>"
          ]
        },
        {
          "cells": [
            "Column = 2",
            "Row = 3",
            "6",
            "336 × 216",
            "<code>5973:70177</code>"
          ]
        },
        {
          "cells": [
            "Column = 2",
            "Row = 4",
            "8",
            "336 × 284",
            "<code>5973:70150</code>"
          ]
        },
        {
          "cells": [
            "Column = 2",
            "Row = 5",
            "10",
            "336 × 352",
            "<code>5973:70162</code>"
          ]
        },
        {
          "cells": [
            "Column = 3",
            "Row = 1",
            "3",
            "336 × 88",
            "<code>5973:70202</code>"
          ]
        },
        {
          "cells": [
            "Column = 3",
            "Row = 2",
            "6",
            "336 × 164",
            "<code>5973:70195</code>"
          ]
        },
        {
          "cells": [
            "Column = 3",
            "Row = 3",
            "9",
            "336 × 240",
            "<code>5973:70342</code>"
          ]
        },
        {
          "cells": [
            "Column = 3",
            "Row = 4",
            "12",
            "336 × 316",
            "<code>5973:70329</code>"
          ]
        },
        {
          "cells": [
            "Column = 3",
            "Row = 5",
            "15",
            "336 × 392",
            "<code>5973:70313</code>"
          ]
        },
        {
          "cells": [
            "Column = 4",
            "Row = 1",
            "4",
            "336 × 88",
            "<code>5973:70282</code>"
          ]
        },
        {
          "cells": [
            "Column = 4",
            "Row = 2",
            "8",
            "336 × 164",
            "<code>5973:70256</code>"
          ]
        },
        {
          "cells": [
            "Column = 4",
            "Row = 3",
            "12",
            "336 × 240",
            "<code>5973:70227</code>"
          ]
        },
        {
          "cells": [
            "Column = 4",
            "Row = 4",
            "16",
            "336 × 316",
            "<code>5973:70112</code>"
          ]
        },
        {
          "cells": [
            "Column = 4",
            "Row = 5",
            "20",
            "336 × 392",
            "<code>5973:70129</code>"
          ]
        },
        {
          "cells": [
            "Column = 5",
            "Row = 1",
            "5",
            "336 × 88",
            "<code>5973:70276</code>"
          ]
        },
        {
          "cells": [
            "Column = 5",
            "Row = 2",
            "10",
            "336 × 164",
            "<code>5973:70265</code>"
          ]
        },
        {
          "cells": [
            "Column = 5",
            "Row = 3",
            "15",
            "336 × 240",
            "<code>5973:70240</code>"
          ]
        },
        {
          "cells": [
            "Column = 5",
            "Row = 4",
            "20",
            "336 × 316",
            "<code>5973:70206</code>"
          ]
        },
        {
          "cells": [
            "Column = 5",
            "Row = 5",
            "25",
            "336 × 392",
            "<code>5973:70287</code>"
          ]
        }
      ],
      "summary": {
        "columns": [
          "Column",
          "Row range",
          "Tiles",
          "Tile size",
          "Item orientation",
          "Count"
        ],
        "rows": [
          {
            "cells": [
              "<strong>Column = 2</strong>",
              "1 – 5",
              "2 – 10",
              "158 × 64",
              "Horizontal",
              "5"
            ]
          },
          {
            "cells": [
              "<strong>Column = 3</strong>",
              "1 – 5",
              "3 – 15",
              "104 × 72",
              "Vertical",
              "5"
            ]
          },
          {
            "cells": [
              "<strong>Column = 4</strong>",
              "1 – 5",
              "4 – 20",
              "77 × 72",
              "Vertical",
              "5"
            ]
          },
          {
            "cells": [
              "<strong>Column = 5</strong>",
              "1 – 5",
              "5 – 25",
              "64 × 72",
              "Vertical",
              "5"
            ]
          }
        ]
      },
      "collapseLabel": "View full Column × Row breakdown (20 rows)"
    }
  },
  "changelog": [
    {
      "version": "2.0.1",
      "date": "August 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Changes Applied via Figma · node 5973:70111",
      "rows": [
        {
          "body": "<strong><code>Row=5</code> dimensions corrected</strong> — <code>Column=5, Row=5</code> (<code>5973:70287</code>) narrowed from 352 to 336 to match every sibling, and <code>Column=2, Row=5</code> (<code>5973:70162</code>) moved from 60-tall to 64-tall tiles, taking the container from 332 to 352. All 20 variants now share the same container width and per-column tile height.\n          <span class=\"tag-fixed tag-c1\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Revalidated against the v2 rebuild · node 5973:70111",
      "rows": [
        {
          "body": "<strong>Repointed to the 2026 Working File</strong> — assessment now tracks <code>5973:70111</code> in <em>GCash Design System · 2026 Working File</em>, replacing <code>18320:14332</code> in Sticker Sheets v2. Still 20 variants: 4 <code>Column</code> × 5 <code>Row</code>, all individually verified.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Updated"
          }
        },
        {
          "body": "<strong>Variant values are plain numbers</strong> — <code>Column=4, Row=2</code> replaces the earlier <code>Row=\"by 4\"</code> strings. The prior recommendation to move to integer props is withdrawn: Figma variant properties are string-only, so numeric strings are the correct representation.\n          <span class=\"tag-fixed tag-c2\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Interaction states reassigned to Service Item</strong> — Menu Grid is a layout container with no states of its own, so the earlier pressed/disabled token gap is assessed on <a href=\"/components/service-item\">Service Item</a> instead. C5 is Not Applicable here.\n          <span class=\"tag-fixed tag-c5\">Reassigned</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        },
        {
          "body": "<strong>Two <code>Row=5</code> variants break the shared metrics</strong> — <code>Column=5, Row=5</code> is 352 wide against 336 everywhere else, and <code>Column=2, Row=5</code> uses 60-tall tiles against 64.\n          <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Live preview rebuilt from measured geometry</strong> — controls now read <code>Column</code> 2–5 × <code>Row</code> 1–5 with plain numeric labels, the preview renders columns across instead of down, and a readout surfaces the <code>Column=2 → Orientation=Horizontal</code> switch.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Token coverage not assessed</strong> — C3 was out of scope for this pass; token paths live in remote library collections.\n          <span class=\"tag-open tag-c3\">Deferred</span>",
          "delta": {
            "kind": "partial",
            "label": "C3"
          }
        }
      ]
    },
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
