import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/action-list-counter.js`.
const actionListCounterDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'Default',
        options: [
          { value: 'Default',  label: 'Default' },
          { value: 'Disabled', label: 'Disabled' },
          { value: 'Loading',  label: 'Loading' },
        ],
      },
      {
        label: 'Density',
        prop: 'density',
        defaultValue: 'Compact',
        options: [
          { value: 'Compact',  label: 'Compact' },
          { value: 'Expanded', label: 'Expanded' },
        ],
      },
    ],
  },
];

export const actionListCounter: ComponentData = {
  "meta": {
    "slug": "action-list-counter",
    "name": "Action List - with Counter",
    "node": "18577:14637",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18577-14637",
    "description": "Action-list row with a 32px leading icon, label, trailing chevron, and a trailing Counter pill.",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "na",
        "label": "Not Applicable"
      }
    ],
    "navGroup": "Action List",
    "verdict": {
      "kind": "consolidate",
      "title": "Consolidate — merged into Action Row",
      "text": "This component no longer exists on its own. It is merged into <a href=\"/components/action-list\">Action Row</a> (node <code>4628:19843</code>), where the trailing counter is now a <code>Trailing=Counter</code> value. Assessment for this pattern lives on the Action Row page."
    }
  },
  "overview": {
    "inContextNote": "Used where a row needs to surface a pending count alongside the action — inbox folders, notification categories, or settings entries with outstanding items.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"240\" height=\"140\" viewBox=\"0 0 240 140\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <rect x=\"20\" y=\"8\" width=\"200\" height=\"124\" rx=\"12\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <text x=\"120\" y=\"24\" text-anchor=\"middle\" fill=\"currentColor\" font-size=\"9\" font-weight=\"700\" font-family=\"system-ui\" opacity=\".7\">Inbox</text>\n          \n          <rect x=\"32\" y=\"36\" width=\"176\" height=\"24\" rx=\"5\" fill=\"#FFF\" stroke=\"#E8EEF2\" stroke-width=\"1\"></rect>\n          <circle cx=\"44\" cy=\"48\" r=\"6\" fill=\"#C2C6CF\"></circle>\n          <text x=\"56\" y=\"51\" fill=\"#005CE5\" font-size=\"8\" font-weight=\"700\" font-family=\"system-ui\">Notifications</text>\n          <path d=\"M172 45 176 48 172 51\" stroke=\"#005CE5\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\"></path>\n          <rect x=\"182\" y=\"42\" width=\"18\" height=\"12\" rx=\"6\" fill=\"#EEF2F9\"></rect>\n          <text x=\"191\" y=\"51\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">5</text>\n          \n          <rect x=\"32\" y=\"68\" width=\"176\" height=\"24\" rx=\"5\" fill=\"#FFF\" stroke=\"#E8EEF2\" stroke-width=\"1\"></rect>\n          <circle cx=\"44\" cy=\"80\" r=\"6\" fill=\"#C2C6CF\"></circle>\n          <text x=\"56\" y=\"83\" fill=\"#005CE5\" font-size=\"8\" font-weight=\"700\" font-family=\"system-ui\">Promos</text>\n          <path d=\"M172 77 176 80 172 83\" stroke=\"#005CE5\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\"></path>\n          <rect x=\"182\" y=\"74\" width=\"18\" height=\"12\" rx=\"6\" fill=\"#EEF2F9\"></rect>\n          <text x=\"191\" y=\"83\" text-anchor=\"middle\" fill=\"#072592\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">2</text>\n          \n          <rect x=\"32\" y=\"100\" width=\"176\" height=\"24\" rx=\"5\" fill=\"#FFF\" stroke=\"#E8EEF2\" stroke-width=\"1\"></rect>\n          <circle cx=\"44\" cy=\"112\" r=\"6\" fill=\"#C2C6CF\"></circle>\n          <text x=\"56\" y=\"115\" fill=\"#C2CFE5\" font-size=\"8\" font-weight=\"700\" font-family=\"system-ui\">Archive</text>\n          <path d=\"M172 109 176 112 172 115\" stroke=\"#9BC5FD\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\"></path>\n          <rect x=\"182\" y=\"106\" width=\"18\" height=\"12\" rx=\"6\" fill=\"#EEF2F9\"></rect>\n          <text x=\"191\" y=\"115\" text-anchor=\"middle\" fill=\"#C2CFE5\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">0</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"litc-demo-preview\"><div style=\"display:flex;align-items:center;gap:12px;width:360px;height:56px;padding:11px 12px;background:#FFF;border-radius:6px;box-shadow:0 1px 3px 0 #E8EEF2C9;box-sizing:border-box;\"><div style=\"width:32px;height:32px;border-radius:999px;background:#C2C6CF;flex-shrink:0;\"></div><div style=\"flex:1;min-width:0;color:#005CE5;font-family:'Proxima Soft',system-ui;font-weight:700;font-size:18px;line-height:20px;letter-spacing:0.25px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;\">Notifications</div><span style=\"display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:999px;background:#EEF2F9;color:#072592;font-family:'Proxima Soft',system-ui;font-weight:700;font-size:14px;line-height:14px;letter-spacing:0.25px;flex-shrink:0;\">5</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\" aria-hidden=\"true\"><path d=\"M10 6l6 6-6 6\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path></svg></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Density</span><select class=\"demo-panel-select\" id=\"litc-demo-density\" onchange=\"updateLitcDemo()\"><option value=\"Compact\" selected=\"\">Compact</option><option value=\"Expanded\">Expanded</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" id=\"litc-demo-state\" onchange=\"updateLitcDemo()\"><option value=\"Default\" selected=\"\">Default</option><option value=\"Disabled\">Disabled</option><option value=\"Loading\">Loading</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><input type=\"text\" class=\"demo-panel-select demo-panel-input\" id=\"litc-demo-label\" value=\"Notifications\" oninput=\"updateLitcDemo()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">count</span><input type=\"text\" class=\"demo-panel-select demo-panel-input\" id=\"litc-demo-count\" value=\"5\" oninput=\"updateLitcDemo()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "warn",
        "note": "Historical rating from the standalone assessment. This component is merged into Action Row — see that page for current DS Health."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Historical rating from the standalone assessment. This component is merged into Action Row — see that page for current DS Health."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Historical rating from the standalone assessment. This component is merged into Action Row — see that page for current DS Health."
      },
      {
        "name": "Composable",
        "rating": "fail",
        "note": "Historical rating from the standalone assessment. This component is merged into Action Row — see that page for current DS Health."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default",
        "notes": "Brand-blue label, brand-blue chevron, filled Counter pill (<code>#072592</code> on <code>#EEF2F9</code>)."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Muted label (<code>#C2CFE5</code>), muted chevron (<code>#9BC5FD</code>), empty Counter pill."
      },
      {
        "state": "Loading",
        "ios": "yes",
        "android": "yes",
        "property": "State=Loading",
        "notes": "Avatar circle, long label skeleton, trailing 46 × 16 strip. The strip doesn't actually match the Counter pill shape — see open issue."
      },
      {
        "state": "Pressed / Focused",
        "ios": "na",
        "android": "na",
        "property": "Not modeled",
        "notes": "No pressed / focused variants on the row. Inherited gap — same issue as base Transaction row."
      }
    ],
    "resolved": [
      {
        "headline": "Merged into Action Row.",
        "body": "v2.0: Confirmed by the component owner — this no longer exists as a standalone component. It is merged into <a href=\"/components/action-list\">Action Row</a> (node <code>4628:19843</code>), where the trailing counter is now a <code>Trailing=Counter</code> value. This page is kept as a pointer; all assessment for this pattern lives on Action Row. (Family)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
    "open": [],
    "recommendations": []
  },
  "style": {
    "heading": "Variants",
    "specCards": [
      {
        "cardKey": "compact-·-default-—-brand-label-+-filled-counter",
        "demoKey": "cd",
        "demoControls": actionListCounterDemoControls,
        "title": "Compact · Default — brand label + filled Counter",

        "node": "18577:14638",
        "description": "360 × 56. 32 px icon, brand-blue label, chevron, trailing 24 × 24 filled Counter pill.",
        "previewHtml": "<div id=\"litc-spec-cd\" style=\"width:360px;\"><div style=\"display:flex;align-items:center;gap:12px;padding:11px 12px;background:#FFFFFF;border-radius:6px;box-shadow:0 1px 4px rgba(10,39,87,0.08), 0 0 0 1px rgba(10,39,87,0.04);\"><div style=\"width:32px;height:32px;border-radius:50%;background:#C2C6CF;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:18px;line-height:20px;font-weight:700;letter-spacing:0.25px;color:#005CE5;\">Label</div></div><span style=\"display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:99px;background:#005CE5;color:#FFFFFF;font-family:'Proxima Soft',system-ui;font-size:13px;font-weight:700;line-height:1;flex-shrink:0;\">3</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Density", "value": "Compact", "prop": "density" },
              { "key": "State",   "value": "Default", "prop": "state" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg",      "value": "#FFFFFF", "token": "action-list/color/default/bg" },
              { "key": "Label",   "value": "#005CE5", "token": "action-list/color/default/label-brand" },
              { "key": "Counter", "value": "#EEF2F9", "token": "counter/color/filled/bg" },
              { "key": "Chevron", "value": "#005CE5", "token": "action-list/color/default/chevron" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Row height", "value": "56px", "mono": true,
                "variants": { "density:Expanded": { "value": "64px" } }
              },
              { "key": "Padding H",    "value": "12px",   "mono": true },
              { "key": "Padding V", "value": "11px", "mono": true,
                "variants": { "density:Expanded": { "value": "15px" } }
              },
              { "key": "Corner radius","value": "6px",    "mono": true },
              { "key": "Chevron size", "value": "24 × 24", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style", "value": "Primary/Label/Light/Large", "mono": true },
              { "key": "Font",        "value": "Proxima Soft Bold",          "mono": true },
              { "key": "Size",        "value": "18px / 20px",                "mono": true },
              { "key": "Tracking",    "value": "+0.25",                      "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "expanded-·-default-—-taller-row-variant",
        "demoKey": "ed",
        "demoControls": actionListCounterDemoControls,
        "title": "Expanded · Default — taller row variant",
        "node": "18577:14647",
        "description": "360 × 64. Same composition; 15 px vertical padding vs 11 px on Compact.",
        "previewHtml": "<div id=\"litc-spec-ed\" style=\"width:360px;\"><div style=\"display:flex;align-items:center;gap:12px;padding:15px 12px;background:#FFFFFF;border-radius:6px;box-shadow:0 1px 4px rgba(10,39,87,0.08), 0 0 0 1px rgba(10,39,87,0.04);\"><div style=\"width:32px;height:32px;border-radius:50%;background:#C2C6CF;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:18px;line-height:20px;font-weight:700;letter-spacing:0.25px;color:#005CE5;\">Label</div></div><span style=\"display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:99px;background:#005CE5;color:#FFFFFF;font-family:'Proxima Soft',system-ui;font-size:13px;font-weight:700;line-height:1;flex-shrink:0;\">3</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Density", "value": "Expanded", "prop": "density" },
              { "key": "State",   "value": "Default",  "prop": "state" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg",      "value": "#FFFFFF", "token": "action-list/color/default/bg" },
              { "key": "Label",   "value": "#005CE5", "token": "action-list/color/default/label-brand" },
              { "key": "Counter", "value": "#EEF2F9", "token": "counter/color/filled/bg" },
              { "key": "Chevron", "value": "#005CE5", "token": "action-list/color/default/chevron" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Row height", "value": "64px", "mono": true,
                "variants": { "density:Compact": { "value": "56px" } }
              },
              { "key": "Padding H",    "value": "12px",   "mono": true },
              { "key": "Padding V", "value": "15px", "mono": true,
                "variants": { "density:Compact": { "value": "11px" } }
              },
              { "key": "Corner radius","value": "6px",    "mono": true },
              { "key": "Chevron size", "value": "24 × 24", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style", "value": "Primary/Label/Light/Large", "mono": true },
              { "key": "Font",        "value": "Proxima Soft Bold",          "mono": true },
              { "key": "Size",        "value": "18px / 20px",                "mono": true },
              { "key": "Tracking",    "value": "+0.25",                      "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "compact-·-disabled-—-muted-tokens",
        "demoKey": "cdis",
        "demoControls": actionListCounterDemoControls,
        "title": "Compact · Disabled — muted tokens",
        "node": "18577:14656",
        "description": "Muted label, muted chevron, empty Counter pill.",
        "previewHtml": "<div id=\"litc-spec-cdis\" style=\"width:360px;\"><div style=\"display:flex;align-items:center;gap:12px;padding:11px 12px;background:#F4F6FA;border-radius:6px;box-shadow:0 0 0 1px rgba(10,39,87,0.04);\"><div style=\"width:32px;height:32px;border-radius:50%;background:#E5EBF4;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:18px;line-height:20px;font-weight:700;letter-spacing:0.25px;color:#C2CFE5;\">Label</div></div><span style=\"display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:99px;background:#E5EBF4;color:#C2CFE5;font-family:'Proxima Soft',system-ui;font-size:13px;font-weight:700;line-height:1;flex-shrink:0;\">3</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;opacity:0.4;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Density", "value": "Compact",  "prop": "density" },
              { "key": "State",   "value": "Disabled", "prop": "state" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg",      "value": "#FFFFFF", "token": "action-list/color/disabled/bg" },
              { "key": "Label",   "value": "#C2CFE5", "token": "action-list/color/disabled/label" },
              { "key": "Counter", "value": "#E5EBF4", "token": "counter/color/empty/bg" },
              { "key": "Chevron", "value": "#9BC5FD", "token": "action-list/color/disabled/chevron" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Row height", "value": "56px", "mono": true,
                "variants": { "density:Expanded": { "value": "64px" } }
              },
              { "key": "Padding H",    "value": "12px",   "mono": true },
              { "key": "Padding V", "value": "11px", "mono": true,
                "variants": { "density:Expanded": { "value": "15px" } }
              },
              { "key": "Corner radius","value": "6px",    "mono": true },
              { "key": "Chevron size", "value": "24 × 24", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style", "value": "Primary/Label/Light/Large", "mono": true },
              { "key": "Font",        "value": "Proxima Soft Bold",          "mono": true },
              { "key": "Size",        "value": "18px / 20px",                "mono": true },
              { "key": "Tracking",    "value": "+0.25",                      "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.disabled</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Disabled</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "expanded-·-disabled-—-taller-muted-variant",
        "demoKey": "edis",
        "demoControls": actionListCounterDemoControls,
        "title": "Expanded · Disabled — taller muted variant",
        "node": "18577:14665",
        "description": "Expanded height + Disabled tokens.",
        "previewHtml": "<div id=\"litc-spec-edis\" style=\"width:360px;\"><div style=\"display:flex;align-items:center;gap:12px;padding:15px 12px;background:#F4F6FA;border-radius:6px;box-shadow:0 0 0 1px rgba(10,39,87,0.04);\"><div style=\"width:32px;height:32px;border-radius:50%;background:#E5EBF4;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"font-family:'Proxima Soft',system-ui;font-size:18px;line-height:20px;font-weight:700;letter-spacing:0.25px;color:#C2CFE5;\">Label</div></div><span style=\"display:inline-flex;align-items:center;justify-content:center;min-width:24px;height:24px;padding:0 8px;border-radius:99px;background:#E5EBF4;color:#C2CFE5;font-family:'Proxima Soft',system-ui;font-size:13px;font-weight:700;line-height:1;flex-shrink:0;\">3</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;opacity:0.4;\"><path d=\"M10 6l6 6-6 6\" stroke=\"#0A2757\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Density", "value": "Expanded", "prop": "density" },
              { "key": "State",   "value": "Disabled", "prop": "state" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg",      "value": "#FFFFFF", "token": "action-list/color/disabled/bg" },
              { "key": "Label",   "value": "#C2CFE5", "token": "action-list/color/disabled/label" },
              { "key": "Counter", "value": "#E5EBF4", "token": "counter/color/empty/bg" },
              { "key": "Chevron", "value": "#9BC5FD", "token": "action-list/color/disabled/chevron" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Row height", "value": "64px", "mono": true,
                "variants": { "density:Compact": { "value": "56px" } }
              },
              { "key": "Padding H",    "value": "12px",   "mono": true },
              { "key": "Padding V", "value": "15px", "mono": true,
                "variants": { "density:Compact": { "value": "11px" } }
              },
              { "key": "Corner radius","value": "6px",    "mono": true },
              { "key": "Chevron size", "value": "24 × 24", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style", "value": "Primary/Label/Light/Large", "mono": true },
              { "key": "Font",        "value": "Proxima Soft Bold",          "mono": true },
              { "key": "Size",        "value": "18px / 20px",                "mono": true },
              { "key": "Tracking",    "value": "+0.25",                      "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.disabled</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Disabled</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "compact-·-loading-—-skeleton-row",
        "demoKey": "cl",
        "demoControls": actionListCounterDemoControls,
        "title": "Compact · Loading — skeleton row",
        "node": "18577:14674",
        "description": "Avatar circle + label line + 46 × 16 trailing strip. Strip shape doesn't match the Counter pill.",
        "previewHtml": "<div id=\"litc-spec-cl\" style=\"width:360px;\"><div style=\"display:flex;align-items:center;gap:12px;padding:11px 12px;background:#FFFFFF;border-radius:6px;box-shadow:0 1px 4px rgba(10,39,87,0.08), 0 0 0 1px rgba(10,39,87,0.04);\"><div style=\"width:32px;height:32px;border-radius:50%;background:#EEF2F9;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"height:14px;width:120px;border-radius:4px;background:#EEF2F9;\"></div></div><div style=\"width:46px;height:16px;border-radius:8px;background:#EEF2F9;flex-shrink:0;\"></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Density", "value": "Compact", "prop": "density" },
              { "key": "State",   "value": "Loading", "prop": "state" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg",       "value": "#FFFFFF", "token": "action-list/color/default/bg" },
              { "key": "Skeleton", "value": "#EEF2F9", "token": "bg/color-bg-strong" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Row height", "value": "56px", "mono": true,
                "variants": { "density:Expanded": { "value": "64px" } }
              },
              { "key": "Padding H",    "value": "12px",   "mono": true },
              { "key": "Padding V", "value": "11px", "mono": true,
                "variants": { "density:Expanded": { "value": "16px" } }
              },
              { "key": "Corner radius","value": "6px",    "mono": true },
              { "key": "Chevron size", "value": "24 × 24", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style", "value": "Primary/Label/Light/Large", "mono": true },
              { "key": "Font",        "value": "Proxima Soft Bold",          "mono": true },
              { "key": "Size",        "value": "18px / 20px",                "mono": true },
              { "key": "Tracking",    "value": "+0.25",                      "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.loading</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Loading</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "expanded-·-loading-—-taller-skeleton-row",
        "demoKey": "el",
        "demoControls": actionListCounterDemoControls,
        "title": "Expanded · Loading — taller skeleton row",
        "node": "18577:14679",
        "description": "Same skeleton with 16 px padding.",
        "previewHtml": "<div id=\"litc-spec-el\" style=\"width:360px;\"><div style=\"display:flex;align-items:center;gap:12px;padding:16px 12px;background:#FFFFFF;border-radius:6px;box-shadow:0 1px 4px rgba(10,39,87,0.08), 0 0 0 1px rgba(10,39,87,0.04);\"><div style=\"width:32px;height:32px;border-radius:50%;background:#EEF2F9;flex-shrink:0;\"></div><div style=\"flex:1 0 0;display:flex;flex-direction:column;justify-content:center;min-width:0;\"><div style=\"height:14px;width:140px;border-radius:4px;background:#EEF2F9;\"></div></div><div style=\"width:46px;height:16px;border-radius:8px;background:#EEF2F9;flex-shrink:0;\"></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Density", "value": "Expanded", "prop": "density" },
              { "key": "State",   "value": "Loading",  "prop": "state" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg",       "value": "#FFFFFF", "token": "action-list/color/default/bg" },
              { "key": "Skeleton", "value": "#EEF2F9", "token": "bg/color-bg-strong" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Row height", "value": "64px", "mono": true,
                "variants": { "density:Compact": { "value": "56px" } }
              },
              { "key": "Padding H",    "value": "12px",   "mono": true },
              { "key": "Padding V", "value": "16px", "mono": true,
                "variants": { "density:Compact": { "value": "11px" } }
              },
              { "key": "Corner radius","value": "6px",    "mono": true },
              { "key": "Chevron size", "value": "24 × 24", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style", "value": "Primary/Label/Light/Large", "mono": true },
              { "key": "Font",        "value": "Proxima Soft Bold",          "mono": true },
              { "key": "Size",        "value": "18px / 20px",                "mono": true },
              { "key": "Tracking",    "value": "+0.25",                      "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">, </span>icon<span class=\"syn-punc\">: </span>icon<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.loading</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">onTap</span><span class=\"syn-punc\">{ }</span>",
        "compose": "<span class=\"syn-type\">EBActionRow</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account settings\"</span><span class=\"syn-punc\">,</span>\n    leadingIcon <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ icon }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBRowState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Loading</span><span class=\"syn-punc\">,</span>\n    onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "columns": [
          "Default",
          "Disabled",
          "Loading"
        ],
        "rows": [
          {
            "role": "Row bg",
            "token": "main/action-list/color/default/bg",
            "values": [
              "#FFFFFF",
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Label",
            "token": "main/action-list/color/default/label-brand",
            "values": [
              "#005CE5",
              "–",
              "–"
            ]
          },
          {
            "role": "Label (disabled)",
            "token": "main/action-list/color/disabled/label",
            "values": [
              "–",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Chevron",
            "token": "main/action-list/color/default/chevron",
            "values": [
              "#005CE5",
              "#9BC5FD",
              "–"
            ]
          },
          {
            "role": "Counter bg",
            "token": "main/counter/color/filled/bg",
            "values": [
              "#EEF2F9",
              "#EEF2F9",
              "–"
            ]
          },
          {
            "role": "Counter label (filled)",
            "token": "main/counter/color/filled/label",
            "values": [
              "#072592",
              "–",
              "–"
            ]
          },
          {
            "role": "Counter label (empty)",
            "token": "main/counter/color/empty/label",
            "values": [
              "–",
              "#C2CFE5",
              "–"
            ]
          },
          {
            "role": "Skeleton bar",
            "token": "bg/color-bg-strong",
            "values": [
              "–",
              "–",
              "#EEF2F9"
            ]
          },
          {
            "role": "Row shadow",
            "token": "Depth/D0",
            "values": [
              "drop-shadow(0 1 3 0 #E8EEF2C9)"
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
            "role": "Row width",
            "token": "—",
            "values": [
              "360px"
            ]
          },
          {
            "role": "Row height (Compact)",
            "token": "—",
            "values": [
              "56px"
            ]
          },
          {
            "role": "Row height (Expanded)",
            "token": "—",
            "values": [
              "64px"
            ]
          },
          {
            "role": "Row padding H",
            "token": "space/space-12",
            "values": [
              "12px"
            ]
          },
          {
            "role": "Row padding V (Compact)",
            "token": "—",
            "values": [
              "11px"
            ]
          },
          {
            "role": "Row padding V (Expanded)",
            "token": "—",
            "values": [
              "15px"
            ]
          },
          {
            "role": "Icon → label gap",
            "token": "space/space-12",
            "values": [
              "12px"
            ]
          },
          {
            "role": "Label → trailing gap",
            "token": "space/space-16",
            "values": [
              "16px"
            ]
          },
          {
            "role": "Icon size",
            "token": "—",
            "values": [
              "32 × 32"
            ]
          },
          {
            "role": "Chevron size",
            "token": "—",
            "values": [
              "32 × 32"
            ]
          },
          {
            "role": "Counter size",
            "token": "—",
            "values": [
              "24 × 24 (min) · hugs digits"
            ]
          },
          {
            "role": "Counter pad H",
            "token": "space/space-8",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Counter radius",
            "token": "radius/radius-round",
            "values": [
              "pill (99999)"
            ]
          },
          {
            "role": "Row radius",
            "token": "radius/radius-2",
            "values": [
              "6px"
            ]
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Spec"
        ],
        "rows": [
          {
            "role": "Label",
            "token": "Primary/Label/Large",
            "values": [
              "Proxima Soft Bold · 18 / 18 · +0.25"
            ]
          },
          {
            "role": "Counter",
            "token": "Primary/Label/Small",
            "values": [
              "Proxima Soft Bold · 14 / 14 · +0.25"
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
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>\n\n<span class=\"kw\">import</span> EBDesignSystem"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:list:1.0.0\"</span>)\n}\n\n<span class=\"kw\">import</span> com.eastblue.ds.components.EBListItemTransaction"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "(separate component)",
          "swift": "<code>trailing</code> Slot on base row",
          "compose": "@ViewBuilder trailing"
        },
        {
          "figma": "Density",
          "swift": "<code>density</code> (renamed)",
          "compose": "density: .compact | .expanded"
        },
        {
          "figma": "State",
          "swift": "<code>state</code> (renamed)",
          "compose": "state: .default | .disabled | .loading"
        },
        {
          "figma": "icon (bool)",
          "swift": "<code>leading</code> Slot",
          "compose": "@ViewBuilder leading"
        },
        {
          "figma": "label",
          "swift": "<code>label</code>",
          "compose": "label: String"
        },
        {
          "figma": "chevron (bool)",
          "swift": "<code>chevron</code>",
          "compose": "chevron: Bool = true"
        },
        {
          "figma": "counter (bool)",
          "swift": "<em>derived</em> from trailing slot",
          "compose": "—"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/List/EBListItemTransaction.swift",
        "compose": "android/components/list/EBListItemTransaction.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Default — Compact density, trailing Counter</span>\n<span class=\"typ\">EBListItemTransaction</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Notifications\"</span>) {\n    <span class=\"typ\">EBAvatar</span>(<span class=\"prp\">initials</span>: <span class=\"str\">\"N\"</span>)\n} trailing: {\n    <span class=\"typ\">EBCounter</span>(<span class=\"prp\">count</span>: unreadCount)\n}\n\n<span class=\"cmt\">// Expanded density</span>\n<span class=\"typ\">EBListItemTransaction</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Promos\"</span>) {\n    <span class=\"typ\">EBAvatar</span>(<span class=\"prp\">initials</span>: <span class=\"str\">\"P\"</span>)\n} trailing: {\n    <span class=\"typ\">EBCounter</span>(<span class=\"prp\">count</span>: <span class=\"kw\">2</span>)\n}\n.<span class=\"fn\">density</span>(.<span class=\"prp\">expanded</span>)\n\n<span class=\"cmt\">// Disabled row — counter stays in empty state</span>\n<span class=\"typ\">EBListItemTransaction</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Archive\"</span>) {\n    <span class=\"typ\">EBAvatar</span>(<span class=\"prp\">initials</span>: <span class=\"str\">\"A\"</span>)\n} trailing: {\n    <span class=\"typ\">EBCounter</span>(<span class=\"prp\">count</span>: <span class=\"kw\">0</span>)\n}\n.<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)\n\n<span class=\"cmt\">// Loading — trailing slot omitted; skeleton fills</span>\n<span class=\"typ\">EBListItemTransaction</span>.<span class=\"fn\">loading</span>()",
        "compose": "<span class=\"cmt\">// Default — Compact density, trailing Counter</span>\n<span class=\"typ\">EBListItemTransaction</span>(\n    label = <span class=\"str\">\"Notifications\"</span>,\n    leading = { <span class=\"typ\">EBAvatar</span>(initials = <span class=\"str\">\"N\"</span>) },\n    trailing = { <span class=\"typ\">EBCounter</span>(count = unreadCount) }\n)\n\n<span class=\"cmt\">// Expanded density</span>\n<span class=\"typ\">EBListItemTransaction</span>(\n    label = <span class=\"str\">\"Promos\"</span>,\n    density = <span class=\"typ\">EBListDensity</span>.<span class=\"prp\">Expanded</span>,\n    leading = { <span class=\"typ\">EBAvatar</span>(initials = <span class=\"str\">\"P\"</span>) },\n    trailing = { <span class=\"typ\">EBCounter</span>(count = <span class=\"kw\">2</span>) }\n)\n\n<span class=\"cmt\">// Disabled row</span>\n<span class=\"typ\">EBListItemTransaction</span>(\n    label = <span class=\"str\">\"Archive\"</span>,\n    enabled = <span class=\"kw\">false</span>,\n    leading = { <span class=\"typ\">EBAvatar</span>(initials = <span class=\"str\">\"A\"</span>) },\n    trailing = { <span class=\"typ\">EBCounter</span>(count = <span class=\"kw\">0</span>) }\n)\n\n<span class=\"cmt\">// Loading — trailing slot omitted; skeleton fills</span>\n<span class=\"typ\">EBListItemTransaction</span>(state = <span class=\"typ\">EBListState</span>.<span class=\"prp\">Loading</span>)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Row role",
        "ios": "Wrap in <code>Button</code> / <code>NavigationLink</code> for tappable semantics",
        "android": "Apply <code>Modifier.clickable(...)</code> + <code>Role.Button</code>"
      },
      {
        "requirement": "Counter label",
        "ios": "Compose accessibility label: <code>\"Notifications, 5 unread\"</code> — don't let VoiceOver read the digit alone",
        "android": "Merge into row: <code>contentDescription = \"Notifications, 5 unread\"</code>"
      },
      {
        "requirement": "Disabled",
        "ios": "<code>.disabled(true)</code> — drops from hit-testing + dims label/chevron/counter",
        "android": "<code>enabled = false</code> on clickable modifier"
      },
      {
        "requirement": "Loading",
        "ios": "Announce <code>\"Loading\"</code>; hide skeleton children from a11y tree",
        "android": "<code>Modifier.semantics { liveRegion = Polite }</code> + hide skeletons"
      },
      {
        "requirement": "Chevron",
        "ios": "Decorative — <code>.accessibilityHidden(true)</code>",
        "android": "<code>contentDescription = null</code>"
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Sibling duplicates the base Transaction row matrix. Consolidate via trailing slot."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>Density</code>/<code>State</code> PascalCase mismatches lowercase Counter and most of DS."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors + spacing bound. Uses <code>main/action-list/*</code> + <code>main/counter/*</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "HStack/Row maps cleanly. Loading skeleton's 46 × 16 trailing strip doesn't match a Counter pill."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No pressed / focused variants — inherited from base row."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Chevron is a vector instance; icon is a swap placeholder — same pattern as other List Items."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Do not wire this sibling — map the base row with trailing slot after consolidation."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 6,
      "description": "<code>Density</code> (2) × <code>State</code> (3) = <strong>6 variants</strong>. Identical matrix to the base Transaction row.",
      "columns": [
        "#",
        "Density",
        "State",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "Compact",
            "Default",
            "18577:14638",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "2",
            "Expanded",
            "Default",
            "18577:14647",
            "360 × 64"
          ]
        },
        {
          "cells": [
            "3",
            "Compact",
            "Disabled",
            "18577:14656",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "4",
            "Expanded",
            "Disabled",
            "18577:14665",
            "360 × 64"
          ]
        },
        {
          "cells": [
            "5",
            "Compact",
            "Loading",
            "18577:14674",
            "360 × 56"
          ]
        },
        {
          "cells": [
            "6",
            "Expanded",
            "Loading",
            "18577:14679",
            "360 × 64"
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
      "header": "Initial Assessment · node 18577:14637",
      "rows": [
        {
          "body": "<strong>Verdict: Consolidate</strong> — Sibling of base Action List; duplicates the 2 × 3 density/state matrix just to add a trailing Counter. Fold into base via a trailing slot. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>C1 — Duplicated matrix</strong> — 6 variants re-created instead of using a slot on the base. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — PascalCase naming</strong> — <code>Density</code>/<code>State</code> mismatch lowercase <code>state</code> on composed Counter. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Loading skeleton shape</strong> — 46 × 16 trailing strip doesn't match a 24 × 24 Counter pill. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Not mapped; wait for consolidation so the mapping targets the base row. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
