import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/menu-grid.js`.
// Panel mirrors the property panel of set 5973:70111: two variant axes.
const menuGridDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Column',
        prop: 'column',
        defaultValue: '4',
        options: [
          { value: '5', label: '5' },
          { value: '4', label: '4' },
          { value: '3', label: '3' },
          { value: '2', label: '2' },
        ],
      },
      {
        label: 'Row',
        prop: 'row',
        defaultValue: '4',
        options: [
          { value: '5', label: '5' },
          { value: '4', label: '4' },
          { value: '3', label: '3' },
          { value: '2', label: '2' },
          { value: '1', label: '1' },
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
    "heading": "Layouts",
    "specCards": [
      {
        "cardKey": "mg-spec-main",
        "demoKey": "main",
        "title": "Menu Grid",
        "node": "5973:70111",
        "description": "A 336-wide grid of Service Item tiles. Column sets the tile width, Row the height; 20 variants.",
        "previewHtml": "<div id=\"menu-grid-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": menuGridDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Column",
                "value": "4",
                "prop": "column"
              },
              {
                "key": "Row",
                "value": "4",
                "prop": "row"
              },
              {
                "key": "Tiles",
                "value": "16 tiles",
                "prop": "count-readout"
              },
              {
                "key": "Tile",
                "value": "Service Item instance"
              },
              {
                "key": "Resolved variant",
                "value": "5973:70112 · 336 × 316",
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
                "key": "Grid background",
                "value": "#FFFFFF",
                "token": "—",
                "swatch": "#FFFFFF"
              },
              {
                "key": "Tile asset",
                "value": "#F6F9FD",
                "token": "—",
                "swatch": "#F6F9FD"
              },
              {
                "key": "Tile label",
                "value": "#072592",
                "token": "—",
                "swatch": "#072592"
              },
              {
                "key": "Tile description",
                "value": "#445C85",
                "token": "—",
                "swatch": "#445C85"
              },
              {
                "key": "Tile border",
                "value": "#D7E0EF",
                "token": "—",
                "swatch": "#D7E0EF"
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Size",
                "value": "336 × 316",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Width",
                "value": "336 — fixed",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "8px",
                "mono": true,
                "variants": {
                  "column:5": {
                    "value": "6.4px"
                  }
                }
              },
              {
                "key": "Gap",
                "value": "4px",
                "mono": true,
                "variants": {
                  "column:5": {
                    "value": "0.8px across · 4px down"
                  }
                }
              },
              {
                "key": "Tile",
                "value": "77 × 72",
                "mono": true,
                "prop": "tile-readout"
              },
              {
                "key": "Tile layout",
                "value": "Service Item · Vertical",
                "mono": true,
                "variants": {
                  "column:2": {
                    "value": "Service Item · Horizontal"
                  }
                }
              },
              {
                "key": "Row pitch",
                "value": "76 (72 + 4)",
                "mono": true,
                "variants": {
                  "column:2": {
                    "value": "68 (64 + 4)"
                  }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Tile #label",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Tile #description",
                "value": "Secondary/Bold/Small Caption",
                "mono": true
              }
            ]
          }
        ],
        "swift": "EBMenuGrid(columns: 4) {\n    ForEach(services.prefix(16)) { service in\n        EBServiceItem(service.label)\n            .ebAsset { Image(service.icon) }\n    }\n}",
        "compose": "EBMenuGrid(\n    columns = 4,\n    modifier = Modifier.fillMaxWidth()\n) {\n    services.take(16).forEach { service ->\n        EBServiceItem(\n            label = service.label,\n            asset = { Image(painterResource(service.icon), null) },\n            onClick = { open(service) }\n        )\n    }\n}"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Role",
        "description": "The grid is a white frame; every colour below belongs to the Service Item instances it holds. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Grid background",
            "token": "—",
            "values": [
              "#FFFFFF"
            ]
          },
          {
            "role": "Tile asset",
            "token": "—",
            "values": [
              "#F6F9FD"
            ]
          },
          {
            "role": "Tile label",
            "token": "—",
            "values": [
              "#072592"
            ]
          },
          {
            "role": "Tile description",
            "token": "—",
            "values": [
              "#445C85"
            ]
          },
          {
            "role": "Tile border",
            "token": "—",
            "values": [
              "#D7E0EF"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:menu-grid:2.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.menugrid.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "Set <code>5973:70111</code> has two axes and no booleans. Natively the row count is the item count, not a property.",
      "rows": [
        {
          "figma": "Column — 5, 4, 3, 2",
          "swift": "<code>EBMenuGrid(columns: Int)</code>",
          "compose": "<code>columns: Int</code>"
        },
        {
          "figma": "Row — 5, 4, 3, 2, 1",
          "swift": "implied by the item count",
          "compose": "implied by the item count"
        },
        {
          "figma": "Tile — Service Item instance",
          "swift": "<code>EBServiceItem</code> in the builder",
          "compose": "<code>EBServiceItem</code> in the content lambda"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/MenuGrid/EBMenuGrid.swift",
        "compose": "android/components/menugrid/EBMenuGrid.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "4 columns — the dashboard default",
        "swift": "<span class=\"cmt\">// Column=4, Row=2 — 5973:70256, 336 × 164; tiles 77 × 72.</span>\nEBMenuGrid(columns: 4) {\n    ForEach(services.prefix(8)) { service in\n        EBServiceItem(service.label)\n            .ebAsset { Image(service.icon) }\n    }\n}",
        "compose": "<span class=\"cmt\">// Column=4, Row=2 — 5973:70256, 336 × 164; tiles 77 × 72.</span>\nEBMenuGrid(columns = 4) {\n    services.take(8).forEach { service ->\n        EBServiceItem(\n            label = service.label,\n            asset = { Image(painterResource(service.icon), null) },\n            onClick = { open(service) }\n        )\n    }\n}"
      },
      {
        "subheading": "2 columns — horizontal tiles",
        "swift": "<span class=\"cmt\">// Column=2, Row=2 — 5973:70186, 336 × 148; tiles 158 × 64.</span>\nEBMenuGrid(columns: 2) {\n    ForEach(services.prefix(4)) { service in\n        EBServiceItem(service.label)\n            .ebOrientation(.horizontal)\n            .ebDescription(service.subtitle)\n            .ebAsset { Image(service.icon) }\n    }\n}",
        "compose": "<span class=\"cmt\">// Column=2, Row=2 — 5973:70186, 336 × 148; tiles 158 × 64.</span>\nEBMenuGrid(columns = 2) {\n    services.take(4).forEach { service ->\n        EBServiceItem(\n            label = service.label,\n            orientation = EBServiceItemOrientation.Horizontal,\n            description = { Text(service.subtitle) },\n            asset = { Image(painterResource(service.icon), null) },\n            onClick = { open(service) }\n        )\n    }\n}"
      },
      {
        "subheading": "5 columns — the tightest row",
        "swift": "<span class=\"cmt\">// Column=5, Row=1 — 5973:70276, 336 × 88; tiles stay 64 wide.</span>\nEBMenuGrid(columns: 5) {\n    ForEach(services.prefix(5)) { service in\n        EBServiceItem(service.label)\n            .ebAsset { Image(service.icon) }\n    }\n}",
        "compose": "<span class=\"cmt\">// Column=5, Row=1 — 5973:70276, 336 × 88; tiles stay 64 wide.</span>\nEBMenuGrid(columns = 5) {\n    services.take(5).forEach { service ->\n        EBServiceItem(\n            label = service.label,\n            asset = { Image(painterResource(service.icon), null) },\n            onClick = { open(service) }\n        )\n    }\n}"
      }
    ],
    "accessibility": [
      {
        "requirement": "Grid semantics",
        "ios": "<code>LazyVGrid</code> with <code>.accessibilityElement(children: .contain)</code>; each tile is its own button.",
        "android": "<code>LazyVerticalGrid</code>; each tile carries <code>Role.Button</code>."
      },
      {
        "requirement": "Reading order",
        "ios": "Row by row, left to right.",
        "android": "Same; do not override traversal."
      },
      {
        "requirement": "Tap target",
        "ios": "A 77 × 72 tile clears 44pt; at Column=5 the tile is 64 wide, still above it.",
        "android": "Clears 48dp at every column count."
      },
      {
        "requirement": "Labels",
        "ios": "Tile labels are the accessible names; keep them unique within a grid.",
        "android": "Same."
      },
      {
        "requirement": "Contrast",
        "ios": "Label #072592 is 12.44:1 on white; description #445C85 is 6.74:1 at 10pt.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Column=4 for the dashboard — it is what the home grid ships.",
        "dontText": "Don’t mix column counts within one section."
      },
      {
        "doText": "Use Column=2 when each service needs a description beside its icon.",
        "dontText": "Don’t use Column=2 for icon-only shortcuts."
      },
      {
        "doText": "Let the item count drive the rows natively.",
        "dontText": "Don’t hard-code a Row value in code — it is a Figma-only axis."
      },
      {
        "doText": "Keep labels short at Column=5; the tile is 64 wide.",
        "dontText": "Don’t pad a grid with empty tiles to fill a row."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A flat frame of <code>Service Item</code> instances — nothing else to name."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Two PascalCase axes over a complete 4 × 5 matrix, but <code>Row</code> is a count baked into variants; natively it is the number of items passed in."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Both tile text layers resolve <code>matched</code> — <code>Primary/Label/Fine</code> and <code>Secondary/Bold/Small Caption</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to <code>LazyVGrid</code> / <code>LazyVerticalGrid</code> with a column count. The Column=5 spacing — 6.4 padding and 0.8 gaps instead of 8 and 4 — has no clean native equivalent."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "A container; the tiles carry their own states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Every tile is a Service Item instance with its own Asset-Slot."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "One usable property, <code>Column</code>; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 20,
      "description": "<code>Column</code> (4) × <code>Row</code> (5) = 20 variants, all built. Width is always 336; the tile width falls out of the column count and the height out of the row count.",
      "columns": [
        "Column",
        "Row",
        "Tiles",
        "Tile size",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "5",
            "5",
            "25",
            "64 × 72",
            "<code>5973:70287</code>",
            "336 × 392"
          ]
        },
        {
          "cells": [
            "5",
            "4",
            "20",
            "64 × 72",
            "<code>5973:70206</code>",
            "336 × 316"
          ]
        },
        {
          "cells": [
            "5",
            "3",
            "15",
            "64 × 72",
            "<code>5973:70240</code>",
            "336 × 240"
          ]
        },
        {
          "cells": [
            "5",
            "2",
            "10",
            "64 × 72",
            "<code>5973:70265</code>",
            "336 × 164"
          ]
        },
        {
          "cells": [
            "5",
            "1",
            "5",
            "64 × 72",
            "<code>5973:70276</code>",
            "336 × 88"
          ]
        },
        {
          "cells": [
            "4",
            "5",
            "20",
            "77 × 72",
            "<code>5973:70129</code>",
            "336 × 392"
          ]
        },
        {
          "cells": [
            "4",
            "4",
            "16",
            "77 × 72",
            "<code>5973:70112</code>",
            "336 × 316"
          ]
        },
        {
          "cells": [
            "4",
            "3",
            "12",
            "77 × 72",
            "<code>5973:70227</code>",
            "336 × 240"
          ]
        },
        {
          "cells": [
            "4",
            "2",
            "8",
            "77 × 72",
            "<code>5973:70256</code>",
            "336 × 164"
          ]
        },
        {
          "cells": [
            "4",
            "1",
            "4",
            "77 × 72",
            "<code>5973:70282</code>",
            "336 × 88"
          ]
        },
        {
          "cells": [
            "3",
            "5",
            "15",
            "104 × 72",
            "<code>5973:70313</code>",
            "336 × 392"
          ]
        },
        {
          "cells": [
            "3",
            "4",
            "12",
            "104 × 72",
            "<code>5973:70329</code>",
            "336 × 316"
          ]
        },
        {
          "cells": [
            "3",
            "3",
            "9",
            "104 × 72",
            "<code>5973:70342</code>",
            "336 × 240"
          ]
        },
        {
          "cells": [
            "3",
            "2",
            "6",
            "104 × 72",
            "<code>5973:70195</code>",
            "336 × 164"
          ]
        },
        {
          "cells": [
            "3",
            "1",
            "3",
            "104 × 72",
            "<code>5973:70202</code>",
            "336 × 88"
          ]
        },
        {
          "cells": [
            "2",
            "5",
            "10",
            "158 × 64",
            "<code>5973:70162</code>",
            "336 × 352"
          ]
        },
        {
          "cells": [
            "2",
            "4",
            "8",
            "158 × 64",
            "<code>5973:70150</code>",
            "336 × 284"
          ]
        },
        {
          "cells": [
            "2",
            "3",
            "6",
            "158 × 64",
            "<code>5973:70177</code>",
            "336 × 216"
          ]
        },
        {
          "cells": [
            "2",
            "2",
            "4",
            "158 × 64",
            "<code>5973:70186</code>",
            "336 × 148"
          ]
        },
        {
          "cells": [
            "2",
            "1",
            "2",
            "158 × 64",
            "<code>5973:70192</code>",
            "336 × 80"
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
      "header": "Style + Code tabs rebuilt against the live set · node 5973:70111",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel</strong> — <code>Column</code> (5, 4, 3, 2) and <code>Row</code> (5, 4, 3, 2, 1). Three cards on retired node <code>18320:14371</code> are replaced.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> Every variant is 336 wide with 8 padding and a 4 gap; the tile width falls out of the column count — 158 at Column=2, 104 at 3, 77 at 4.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Column=2 swaps the tile to Service Item Horizontal</strong> — 158 × 64 with the description beside the asset, where the other counts use Vertical at 72 tall.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography resolved against the token database.</strong> Tile <code>#label</code> → <code>Primary/Label/Fine</code> and <code>#description</code> → <code>Secondary/Bold/Small Caption</code>, both matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Code tab rebuilt on the live set</strong> — install <code>com.eastblue.ds:menu-grid:2.0.0</code>, three snippets and a 20-row inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Column=5 breaks the grid’s own spacing.</strong> The tile stays at the Service Item’s natural 64 and the row distributes the 16 left over as 6.4 outer padding and 0.8 between tiles, instead of 8 and 4. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong><code>Row</code> is a Figma-only axis.</strong> Natively the row count is the number of items passed to the grid, so 20 variants collapse to one component with a column count. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
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
        },
        {
          "body": "<strong>C3 scoped to what Menu Grid owns</strong> — the container surface and its spacing. All tokenised colour inside a tile belongs to <a href=\"/components/service-item\">Service Item</a> and is audited on that component, the same delegation already applied to C5. The Colors table no longer restates Service Item's icon and label tokens.\n          <span class=\"tag-fixed tag-c3\">Scoped</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Container padding corrected</strong> — the Layout table documented 10px top and 6px bottom. Measured values are 8px on both, and the icon slot is 48 × 48 rather than the 40 × 40 carried over from the v1 assessment.\n          <span class=\"tag-fixed tag-c1\">Resolved</span>",
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
