import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — applies to both Collapsed and Expanded cards.
// Wired to the legacy `updateAccSpecCard(cardType, prop, value)` function
// in `public/scripts/demos/accordion.js`.
const accordionDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'pressed', label: 'Pressed' },
          { value: 'disabled', label: 'Disabled' },
        ],
      },
      {
        label: 'leadingIcon',
        prop: 'leadingIcon',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' },
        ],
      },
      {
        label: 'description',
        prop: 'description',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
    ],
  },
];

export const accordion: ComponentData = {
  "meta": {
    "slug": "accordion",
    "name": "Accordion",
    "node": "16870:9288",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=16870-9288",
    "description": "A disclosure row that expands to reveal content. Supports optional leading icon and description via boolean visibility properties. Reduced from 24 to 6 variants (Type × State) with color tokens fully connected.",
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
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      \n      <rect x=\"2\" y=\"2\" width=\"28\" height=\"10\" rx=\"2\" fill=\"#EEF3FB\" stroke=\"#B8CFF8\" stroke-width=\"1\"/>\n      \n      <rect x=\"6\" y=\"6\" width=\"14\" height=\"2\" rx=\"1\" fill=\"#7AAAE0\"/>\n      \n      <path d=\"M23 6.5 L25.5 8 L23 9.5\" stroke=\"#0056D6\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n\n      \n      <rect x=\"2\" y=\"14\" width=\"28\" height=\"16\" rx=\"2\" fill=\"#F4F7FB\" stroke=\"#B8CFF8\" stroke-width=\"1\"/>\n      \n      <rect x=\"6\" y=\"17\" width=\"14\" height=\"2\" rx=\"1\" fill=\"#7AAAE0\"/>\n      \n      <path d=\"M23 19.5 L25.5 18 L23 16.5\" stroke=\"#0056D6\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" transform=\"rotate(90 24 18)\"/>\n      \n      <rect x=\"6\" y=\"22\" width=\"18\" height=\"1.5\" rx=\"0.75\" fill=\"#C5D5E8\"/>\n      <rect x=\"6\" y=\"25.5\" width=\"13\" height=\"1.5\" rx=\"0.75\" fill=\"#C5D5E8\"/>\n    </svg>"
  },
  "overview": {
    "inContextNote": "How the accordion appears in a real product screen — expanding to reveal content.",
    "inContextHtml": "<img class=\"ctx-img\" src=\"/assets/previews/accordion-in-context.png\" alt=\"Accordion component shown in a GCash Cash In screen with Over the Counter expanded showing partner list, Online Banks and Global Partners collapsed\" >",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"acc-demo-preview-wrap\"><div id=\"demo-acc-live\" style=\"width:340px;border:1px solid #E5EBF4;border-radius:0;overflow:hidden;font-family:'Proxima Soft', sans-serif;\"><div id=\"demo-acc-header\" style=\"display:flex;align-items:center;gap:8px;padding:4px 16px;height:56px;background:#FFFFFF;border-bottom:none;box-sizing:border-box;\"><div id=\"demo-acc-icon\" style=\"width:32px;height:32px;border-radius:6px;background:#C2C6CF;flex-shrink:0;display:flex;align-items:center;justify-content:center;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><rect x=\"3\" y=\"3\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#fff\" opacity=\".8\"></rect></svg></div><div style=\"flex:1;min-width:0;\"><div id=\"demo-acc-label\" style=\"font-size:16px;font-weight:700;color:#0A2757;line-height:20px;letter-spacing:0.25px;\">Accordion Label</div><div id=\"demo-acc-desc\" style=\"font-family:'BarkAda',sans-serif;font-size:14px;font-weight:600;color:#90A8D0;line-height:20px;display:none;\">Description text</div></div><div id=\"demo-acc-chevron\" style=\"width:32px;height:32px;flex-shrink:0;display:flex;align-items:center;justify-content:center;\"><svg id=\"demo-acc-chevron-svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><path d=\"M5 7.5l5 5 5-5\" stroke=\"#005CE5\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div><div id=\"demo-acc-body\" style=\"display:none;height:56px;background:#F4F7FB;border-top:1px solid #E5EBF4;padding:12px 16px;box-sizing:border-box;\"><div style=\"height:8px;border-radius:4px;background:#C5D5E8;margin-bottom:8px;width:80%;\"></div><div style=\"height:8px;border-radius:4px;background:#C5D5E8;width:60%;\"></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select class=\"demo-panel-select\" onchange=\"setAccDemoType(this.value)\"><option value=\"collapsed\" selected=\"\">Collapsed</option><option value=\"expanded\">Expanded</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" onchange=\"setAccDemoState(this.value)\"><option value=\"default\" selected=\"\">Default</option><option value=\"pressed\">Pressed</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">leadingIcon</span><button class=\"demo-bool-toggle active\" onclick=\"this.classList.toggle('active'); setAccDemoProp('leadingIcon', this.classList.contains('active'))\"></button></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><button class=\"demo-bool-toggle\" onclick=\"this.classList.toggle('active'); setAccDemoProp('description', this.classList.contains('active'))\"></button></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Expanded variants include a <code>content-body</code> slot. Boolean visibility on <code>leadingIcon</code> and <code>description</code> lets designers configure the component without extra variants."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Header row (56px fixed height) and <code>content-body</code> panel are both included. Engineers can implement it as a standalone unit with no external spec needed."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "A single variant property (<code>Type</code>) drives collapsed/expanded. <code>leadingIcon</code> and <code>description</code> are boolean show/hide properties — no duplicate variants needed."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Semantic layer names (<code>icon-leading</code>, <code>content</code>, <code>trailing-icon</code>). Chevrons are vector instances. The icon slot accepts instances cleanly."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default",
        "notes": "Header row with chevron. Tap to expand/collapse."
      },
      {
        "state": "Pressed",
        "ios": "yes",
        "android": "yes",
        "property": "State=Pressed",
        "notes": "Visual feedback on touch. Darker surface token."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Muted colors. Tap ignored. Chevron dimmed."
      },
      {
        "state": "Focused (a11y)",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Mobile OS handles focus rings natively."
      }
    ],
    "resolved": [
      {
        "body": "Boolean properties converted from yes/no to true/false (C2)"
      },
      {
        "body": "Layer names corrected to semantic naming: <code>container</code>, <code>icon-leading</code>, <code>content</code>, <code>trailing-icon</code> (C1)"
      },
      {
        "body": "Pressed and disabled interaction states added across all 6 variants (C5)"
      },
      {
        "body": "Expanded content panel with <code>content-body</code> SLOT added to all expanded variants (C4)"
      },
      {
        "body": "Variant set reduced from 24 to 6 — <code>Type</code> × <code>State</code> matrix (C2)"
      },
      {
        "body": "<code>leadingIcon</code> and <code>description</code> converted to boolean visibility properties"
      },
      {
        "body": "Fixed 56px header height applied across all 6 variants"
      },
      {
        "body": "10 design tokens connected — all colors, spacing, and typography fully tokenized (C3)"
      },
      {
        "body": "Annotation instance frame built with nested auto layout (Type × State grid)"
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "No native component files are linked yet. All structural blockers are resolved — registration can now proceed.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Add an <code>AccordionGroup</code> compound component.",
        "body": "Manages exclusive expand (only one open at a time) — the canonical FAQ and settings pattern. Avoids every consumer wiring their own expanded-id state.",
        "tag": "Family"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "acc-spec-collapsed",
        "demoKey": "acc-collapsed",
        "demoControls": accordionDemoControls,
        "title": "Collapsed",
        "node": "16870:9289",
        "description": "Header row only — 56px fixed height. Trailing chevron points down. Tap anywhere in the row to expand.",
        "previewHtml": "<div id=\"spec-acc-collapsed-preview\" style=\"width:320px;border:1px solid #E5EBF4;border-radius:0;overflow:hidden;font-family:'Proxima Soft', sans-serif;\"><div id=\"spec-acc-collapsed-header\" style=\"display:flex;align-items:center;gap:8px;padding:4px 16px;height:56px;background:#FFFFFF;box-sizing:border-box;\"><div id=\"spec-acc-collapsed-icon\" style=\"width:32px;height:32px;border-radius:6px;background:#C2C6CF;flex-shrink:0;display:flex;align-items:center;justify-content:center;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><rect x=\"3\" y=\"3\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#fff\" opacity=\".8\"></rect></svg></div><div style=\"flex:1;min-width:0;\"><div id=\"spec-acc-collapsed-label\" style=\"font-size:16px;font-weight:700;color:#0A2757;line-height:20px;letter-spacing:0.25px;\">Label</div><div id=\"spec-acc-collapsed-desc\" style=\"font-family:'BarkAda',sans-serif;font-size:14px;font-weight:600;color:#90A8D0;line-height:20px;display:none;\">Description</div></div><div style=\"width:32px;height:32px;flex-shrink:0;display:flex;align-items:center;justify-content:center;\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><path id=\"spec-acc-collapsed-chev\" d=\"M5 7.5l5 5 5-5\" stroke=\"#005CE5\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type",        "value": "Collapsed" },
              { "key": "State",       "value": "Default", "prop": "state" },
              { "key": "leadingIcon", "value": "true",    "prop": "leadingIcon" },
              { "key": "description", "value": "false",   "prop": "description" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "accordion/color/collapsed/bg" },
              { "key": "Border",  "value": "#E5EBF4", "token": "accordion/color/collapsed/border" },
              { "key": "Label", "value": "#0A2757", "token": "accordion/color/collapsed/label",
                "variants": { "state:disabled": { "value": "#C2CFE5", "token": "text/color-text-disabled" } }
              },
              { "key": "Description", "value": "#90A8D0", "token": "accordion/color/collapsed/description",
                "variants": { "description:false": { "hide": true } }
              },
              { "key": "Chevron", "value": "#005CE5", "token": "accordion/color/collapsed/icon-chevron",
                "variants": { "state:disabled": { "value": "#9BC5FD" } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",         "value": "396px (fill)", "mono": true },
              { "key": "Header height", "value": "56px", "mono": true },
              { "key": "Padding H",     "value": "16px", "mono": true },
              { "key": "Padding V",     "value": "4px", "mono": true },
              { "key": "Leading icon",  "value": "32×32px", "mono": true },
              { "key": "Trailing icon", "value": "32×32px", "mono": true },
              { "key": "Corner radius", "value": "0 (rectangular)", "mono": true },
              { "key": "Border",        "value": "1px solid #E5EBF4", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style",       "value": "Primary/Multi-line Label/Base", "mono": true },
              { "key": "Label font",        "value": "Proxima Soft Bold", "mono": true },
              { "key": "Label size",        "value": "16px", "mono": true },
              { "key": "Label tracking",    "value": "0.25px", "mono": true },
              { "key": "Label line-height", "value": "20px", "mono": true },
              { "key": "Desc style",        "value": "Secondary/Bold/Base", "mono": true },
              { "key": "Desc font",         "value": "BarkAda SemiBold", "mono": true },
              { "key": "Desc size",         "value": "14px", "mono": true },
              { "key": "Desc tracking",     "value": "0", "mono": true },
              { "key": "Desc line-height",  "value": "20px", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAccordion</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">, </span>isExpanded<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.constant</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">false</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">) </span><span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Content\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAccordion</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    expanded <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span><span class=\"syn-punc\">,</span>\n    onExpandChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Content\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "cardKey": "acc-spec-expanded",
        "demoKey": "acc-expanded",
        "demoControls": accordionDemoControls,
        "title": "Expanded",
        "node": "16870:9298",
        "description": "Header row (56px) + content-body panel (56px SLOT) = 112px total height. Trailing chevron points up. Content-body background uses <code>surface/content</code> token.",
        "previewHtml": "<div id=\"spec-acc-expanded-preview\" style=\"width:320px;border:1px solid #E5EBF4;border-radius:0;overflow:hidden;font-family:'Proxima Soft', sans-serif;\"><div id=\"spec-acc-expanded-header\" style=\"display:flex;align-items:center;gap:8px;padding:4px 16px;height:56px;background:#FFFFFF;border-bottom:1px solid #E5EBF4;box-sizing:border-box;\"><div id=\"spec-acc-expanded-icon\" style=\"width:32px;height:32px;border-radius:6px;background:#C2C6CF;flex-shrink:0;display:flex;align-items:center;justify-content:center;\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><rect x=\"3\" y=\"3\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#fff\" opacity=\".8\"></rect></svg></div><div style=\"flex:1;min-width:0;\"><div id=\"spec-acc-expanded-label\" style=\"font-size:16px;font-weight:700;color:#0A2757;line-height:20px;letter-spacing:0.25px;\">Label</div><div id=\"spec-acc-expanded-desc\" style=\"font-family:'BarkAda',sans-serif;font-size:14px;font-weight:600;color:#90A8D0;line-height:20px;display:none;\">Description</div></div><div style=\"width:32px;height:32px;flex-shrink:0;display:flex;align-items:center;justify-content:center;\"><svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\"><path id=\"spec-acc-expanded-chev\" d=\"M5 12.5l5-5 5 5\" stroke=\"#005CE5\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div><div id=\"spec-acc-expanded-body\" style=\"height:56px;background:#F4F7FB;padding:12px 16px;box-sizing:border-box;\"><div style=\"height:8px;border-radius:4px;background:#C5D5E8;margin-bottom:8px;width:80%;\"></div><div style=\"height:8px;border-radius:4px;background:#C5D5E8;width:60%;\"></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type",        "value": "Expanded" },
              { "key": "State",       "value": "Default", "prop": "state" },
              { "key": "leadingIcon", "value": "true",    "prop": "leadingIcon" },
              { "key": "description", "value": "false",   "prop": "description" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "accordion/color/expanded/bg" },
              { "key": "Border",  "value": "#E5EBF4", "token": "accordion/color/expanded/border" },
              { "key": "Label", "value": "#0A2757", "token": "accordion/color/expanded/label",
                "variants": { "state:disabled": { "value": "#C2CFE5", "token": "text/color-text-disabled" } }
              },
              { "key": "Description", "value": "#90A8D0", "token": "accordion/color/expanded/description",
                "variants": { "description:false": { "hide": true } }
              },
              { "key": "Chevron", "value": "#005CE5", "token": "accordion/color/expanded/icon-chevron",
                "variants": { "state:disabled": { "value": "#9BC5FD" } }
              },
              { "key": "Body bg", "value": "#F6F9FD", "token": "bg/color-bg" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",               "value": "396px (fill)", "mono": true },
              { "key": "Header height",       "value": "56px", "mono": true },
              { "key": "Content-body height", "value": "56px (SLOT)", "mono": true },
              { "key": "Total height",        "value": "112px", "mono": true },
              { "key": "Padding H",           "value": "16px", "mono": true },
              { "key": "Padding V",           "value": "4px", "mono": true },
              { "key": "Leading icon",        "value": "32×32px", "mono": true },
              { "key": "Trailing icon",       "value": "32×32px", "mono": true },
              { "key": "Corner radius",       "value": "0 (rectangular)", "mono": true },
              { "key": "Border",              "value": "1px solid #E5EBF4", "mono": true },
              { "key": "Divider",             "value": "1px solid #E5EBF4 (header/body)", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style",       "value": "Primary/Multi-line Label/Base", "mono": true },
              { "key": "Label font",        "value": "Proxima Soft Bold", "mono": true },
              { "key": "Label size",        "value": "16px", "mono": true },
              { "key": "Label tracking",    "value": "0.25px", "mono": true },
              { "key": "Label line-height", "value": "20px", "mono": true },
              { "key": "Desc style",        "value": "Secondary/Bold/Base", "mono": true },
              { "key": "Desc font",         "value": "BarkAda SemiBold", "mono": true },
              { "key": "Desc size",         "value": "14px", "mono": true },
              { "key": "Desc tracking",     "value": "0", "mono": true },
              { "key": "Desc line-height",  "value": "20px", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAccordion</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">, </span>isExpanded<span class=\"syn-punc\">: </span><span class=\"syn-dot\">.constant</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span><span class=\"syn-punc\">) </span><span class=\"syn-punc\">{</span>\n    <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Body content shown when expanded\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAccordion</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Title\"</span><span class=\"syn-punc\">,</span>\n    expanded <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">,</span>\n    onExpandChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Body content shown when expanded\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "All colors are bound to design tokens from the component variable collection.",
        "columns": [
          "Default",
          "Pressed",
          "Disabled"
        ],
        "rows": [
          {
            "role": "Header bg",
            "token": "surface/default",
            "values": [
              "#FFFFFF",
              "—",
              "—"
            ]
          },
          {
            "role": "Pressed bg",
            "token": "surface/pressed",
            "values": [
              "—",
              "#F4F7FB",
              "—"
            ]
          },
          {
            "role": "Disabled bg",
            "token": "surface/disabled",
            "values": [
              "—",
              "—",
              "#F8F9FB"
            ]
          },
          {
            "role": "Border",
            "token": "border/subtle",
            "values": [
              "#E5EBF4",
              "#E5EBF4",
              "#E5EBF4"
            ]
          },
          {
            "role": "Label",
            "token": "text/primary",
            "values": [
              "#0A2757",
              "#0A2757",
              "—"
            ]
          },
          {
            "role": "Label (disabled)",
            "token": "text/disabled",
            "values": [
              "—",
              "—",
              "#C2C6CF"
            ]
          },
          {
            "role": "Description",
            "token": "text/secondary",
            "values": [
              "#90A8D0",
              "#90A8D0",
              "—"
            ]
          },
          {
            "role": "Icon placeholder",
            "token": "icon/placeholder",
            "values": [
              "#C2C6CF",
              "#C2C6CF",
              "#C2C6CF"
            ]
          },
          {
            "role": "Chevron",
            "token": "icon-chevron",
            "values": [
              "#005CE5",
              "#005CE5",
              "#C2CFE5"
            ]
          }
        ]
      },
      {
        "title": "Colors by State",
        "description": "Expanded adds the <code>surface/content</code> token for the content-body panel background.",
        "columns": [
          "Default",
          "Pressed",
          "Disabled"
        ],
        "rows": [
          {
            "role": "Header bg",
            "token": "surface/default",
            "values": [
              "#FFFFFF",
              "—",
              "—"
            ]
          },
          {
            "role": "Pressed bg",
            "token": "surface/pressed",
            "values": [
              "—",
              "#F4F7FB",
              "—"
            ]
          },
          {
            "role": "Disabled bg",
            "token": "surface/disabled",
            "values": [
              "—",
              "—",
              "#F8F9FB"
            ]
          },
          {
            "role": "Content bg",
            "token": "surface/content",
            "values": [
              "#F4F7FB",
              "#F4F7FB",
              "#F8F9FB"
            ]
          },
          {
            "role": "Border",
            "token": "border/subtle",
            "values": [
              "#E5EBF4",
              "#E5EBF4",
              "#E5EBF4"
            ]
          },
          {
            "role": "Label",
            "token": "text/primary",
            "values": [
              "#0A2757",
              "#0A2757",
              "—"
            ]
          },
          {
            "role": "Label (disabled)",
            "token": "text/disabled",
            "values": [
              "—",
              "—",
              "#C2C6CF"
            ]
          },
          {
            "role": "Description",
            "token": "text/secondary",
            "values": [
              "#90A8D0",
              "#90A8D0",
              "—"
            ]
          },
          {
            "role": "Icon placeholder",
            "token": "icon/placeholder",
            "values": [
              "#C2C6CF",
              "#C2C6CF",
              "#C2C6CF"
            ]
          },
          {
            "role": "Chevron",
            "token": "icon-chevron",
            "values": [
              "#005CE5",
              "#005CE5",
              "#C2CFE5"
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
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>\n\n<span class=\"cmt\">// Or in Package.swift:</span>\n.<span class=\"fn\">package</span>(\n    <span class=\"prp\">url</span>: <span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>,\n    <span class=\"prp\">from</span>: <span class=\"str\">\"1.0.0\"</span>\n)"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"cmt\">// build.gradle.kts (app)</span>\n<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:accordion:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.accordion.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths. API shape is final — native implementation is pending."
    },
    "propertyMapping": {
      "description": "Every row maps a Figma component property to its native equivalent.",
      "rows": [
        {
          "figma": "<code>Type=Collapsed</code>",
          "swift": "<code>isExpanded: false</code>",
          "compose": "<code>isExpanded = false</code>"
        },
        {
          "figma": "<code>Type=Expanded</code>",
          "swift": "<code>isExpanded: true</code>",
          "compose": "<code>isExpanded = true</code>"
        },
        {
          "figma": "<code>State=Disabled</code>",
          "swift": "<code>.disabled(true)</code>",
          "compose": "<code>enabled = false</code>"
        },
        {
          "figma": "<code>leadingIcon=true</code>",
          "swift": "<code>leadingIcon: Image?</code>",
          "compose": "<code>leadingIcon: @Composable (() -> Unit)?</code>"
        },
        {
          "figma": "<code>description=true</code>",
          "swift": "<code>description: String?</code>",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "<code>Content-Body (SLOT)</code>",
          "swift": "<code>content: () -> some View</code>",
          "compose": "<code>content: @Composable () -> Unit</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Accordion/EBAccordion.swift",
        "compose": "android/components/accordion/EBAccordion.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Basic Accordion",
        "swift": "<span class=\"cmt\">// Basic</span>\n<span class=\"typ\">EBAccordion</span>(<span class=\"str\">\"Settings\"</span>, <span class=\"prp\">isExpanded</span>: $isExpanded) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Content goes here\"</span>)\n}\n\n<span class=\"cmt\">// With leading icon</span>\n<span class=\"typ\">EBAccordion</span>(<span class=\"str\">\"Settings\"</span>,\n    <span class=\"prp\">isExpanded</span>: $isExpanded,\n    <span class=\"prp\">leadingIcon</span>: <span class=\"typ\">Image</span>(<span class=\"prp\">systemName</span>: <span class=\"str\">\"gear\"</span>)\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Content\"</span>)\n}\n\n<span class=\"cmt\">// With description</span>\n<span class=\"typ\">EBAccordion</span>(<span class=\"str\">\"Settings\"</span>,\n    <span class=\"prp\">description</span>: <span class=\"str\">\"Manage your preferences\"</span>,\n    <span class=\"prp\">isExpanded</span>: $isExpanded\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Content\"</span>)\n}\n\n<span class=\"cmt\">// Disabled</span>\n<span class=\"typ\">EBAccordion</span>(<span class=\"str\">\"Settings\"</span>, <span class=\"prp\">isExpanded</span>: $isExpanded) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Content\"</span>)\n}\n.<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"cmt\">// Basic</span>\n<span class=\"typ\">EBAccordion</span>(\n    <span class=\"prp\">title</span> = <span class=\"str\">\"Settings\"</span>,\n    <span class=\"prp\">isExpanded</span> = isExpanded,\n    <span class=\"prp\">onExpandedChange</span> = { isExpanded = it }\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Content goes here\"</span>)\n}\n\n<span class=\"cmt\">// With leading icon</span>\n<span class=\"typ\">EBAccordion</span>(\n    <span class=\"prp\">title</span> = <span class=\"str\">\"Settings\"</span>,\n    <span class=\"prp\">isExpanded</span> = isExpanded,\n    <span class=\"prp\">onExpandedChange</span> = { isExpanded = it },\n    <span class=\"prp\">leadingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.<span class=\"prp\">Filled</span>.<span class=\"prp\">Settings</span>, <span class=\"kw\">null</span>) }\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Content\"</span>)\n}\n\n<span class=\"cmt\">// Disabled</span>\n<span class=\"typ\">EBAccordion</span>(\n    <span class=\"prp\">title</span> = <span class=\"str\">\"Settings\"</span>,\n    <span class=\"prp\">isExpanded</span> = isExpanded,\n    <span class=\"prp\">onExpandedChange</span> = {},\n    <span class=\"prp\">enabled</span> = <span class=\"kw\">false</span>\n) {\n    <span class=\"typ\">Text</span>(<span class=\"str\">\"Content\"</span>)\n}"
      }
    ],
    "accessibility": [
      {
        "requirement": "Min touch target",
        "ios": "<code>44 × 44pt</code> (full header row)",
        "android": "<code>48 × 48dp</code> (full header row)"
      },
      {
        "requirement": "Expand/collapse",
        "ios": "<code>.accessibilityAction(.default)</code> toggles",
        "android": "<code>onClick</code> handler on header"
      },
      {
        "requirement": "State announcement",
        "ios": "<code>.accessibilityValue(\"expanded\"/\"collapsed\")</code>",
        "android": "<code>expandedState</code> semantics"
      },
      {
        "requirement": "Disabled",
        "ios": "<code>.disabled(true)</code> — announced by VoiceOver",
        "android": "<code>enabled = false</code>"
      },
      {
        "requirement": "Content-body",
        "ios": "Automatically read by screen reader when expanded",
        "android": "Automatically read by screen reader when expanded"
      },
      {
        "requirement": "Chevron icon",
        "ios": "<code>.accessibilityHidden(true)</code> — decorative",
        "android": "<code>contentDescription = null</code> — decorative"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Accordion for progressive disclosure — hiding secondary content until the user needs it.",
        "dontText": "Nest Accordions more than one level deep — it creates confusing navigation."
      },
      {
        "doText": "Use description text for context that helps users decide whether to expand.",
        "dontText": "Put critical information inside collapsed Accordions — users may miss it."
      },
      {
        "doText": "Use leadingIcon to reinforce the section's topic — gears for settings, bell for notifications.",
        "dontText": "Use Accordion for content the user needs to compare side-by-side — use tabs instead."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic names across all variants: <code>container</code>, <code>icon-leading</code>, <code>content</code>, <code>trailing-icon</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Boolean properties use <code>true</code>/<code>false</code>. Variant keys use <code>key=value</code> syntax. <code>leadingIcon</code> and <code>description</code> are boolean visibility props."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "10 tokens bound across all 6 variants. All colors, spacing, and typography fully tokenized."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Header + content-body SLOT maps cleanly to <code>DisclosureGroup</code> (SwiftUI) and <code>AnimatedVisibility</code> (Compose)."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default, pressed, and disabled states covered across all 6 variants. Focus ring N/A — mobile OS handles natively."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Chevrons are vector component instances. Leading icon is a SLOT placeholder accepting any icon instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No Code Connect mappings registered. Property structure is clean and ready for mapping — suggested paths below."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Component type",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Proper Figma component set."
      },
      {
        "aspect": "Variant naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>key=value</code> syntax with <code>true</code>/<code>false</code> booleans."
      },
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Clean 1:1 mapping to native params."
      },
      {
        "aspect": "Layer naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>container</code>, <code>icon-leading</code>, <code>content</code>, <code>trailing-icon</code>."
      },
      {
        "aspect": "Token coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All 10 tokens bound — colors, spacing, and typography."
      },
      {
        "aspect": "Asset quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Chevrons are vector component instances. Icon slot is SLOT type."
      },
      {
        "aspect": "Code Connect",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "No mappings registered. Suggested paths below."
      }
    ],
    "variants": {
      "total": 6,
      "description": "2 <code>Type</code> values × 3 <code>State</code> values. <code>leadingIcon</code> and <code>description</code> are boolean visibility properties, not variant axes.",
      "columns": [
        "Type",
        "State",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Collapsed",
            "Default",
            "16870:9289"
          ]
        },
        {
          "cells": [
            "Expanded",
            "Default",
            "16870:9298"
          ]
        },
        {
          "cells": [
            "Collapsed",
            "Pressed",
            "16919:864"
          ]
        },
        {
          "cells": [
            "Expanded",
            "Pressed",
            "16919:877"
          ]
        },
        {
          "cells": [
            "Collapsed",
            "Disabled",
            "16919:956"
          ]
        },
        {
          "cells": [
            "Expanded",
            "Disabled",
            "16919:969"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.4.0",
      "date": "March 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Changes Applied via Figma MCP · node 16870:9288",
      "rows": [
        {
          "body": "<strong>Leading icon layer re-renamed</strong> — All 6 variants had <code>Placeholder</code> reverted after v1.3.0 restructure. Re-applied <code>icon-leading</code> name across all 6 current variants.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1 Restored"
          }
        },
        {
          "body": "<strong>Custom fonts validated</strong> — <code>HeyMeowRnd-Bold.ttf</code> (700, TTF, GPOS kerning, 959 glyphs) and <code>BarkAda-SemiBold.ttf</code> (600, TTF, GPOS kerning, 1050 glyphs) confirmed native-ready. BarkAda uses PostScript name <code>BarkAda-SemiBold</code> for iOS registration.\n          <span class=\"tag-fixed\">Validated</span>",
          "delta": {
            "kind": "resolved",
            "label": "Fonts Resolved"
          }
        }
      ]
    },
    {
      "version": "1.3.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Changes Applied via Figma MCP · node 16870:9288",
      "rows": [
        {
          "body": "<strong>Variant set reduced from 24 to 6</strong> — <code>leadingIcon</code> and <code>description</code> converted from variant axes to boolean visibility properties. Component set now has 2 Type values (Collapsed / Expanded) × 3 State values (Default / Pressed / Disabled) = 6 variants total.\n          <span class=\"tag-fixed\">Refined</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Improved"
          }
        },
        {
          "body": "<strong>Fixed 56px header height</strong> — Applied consistent fixed height across all 6 variant headers for reliable layout in native implementations.\n          <span class=\"tag-fixed\">Refined</span>",
          "delta": {
            "kind": "partial",
            "label": "C4 Improved"
          }
        },
        {
          "body": "<strong>Color tokens connected</strong> — 10 design system variables bound across all 6 variants: <code>surface/default</code>, <code>border/subtle</code>, <code>text/primary</code>, <code>text/secondary</code>, <code>icon/placeholder</code>, <code>icon-chevron</code>, <code>surface/pressed</code>, <code>surface/content</code>, <code>surface/disabled</code>, <code>text/disabled</code>. Fully resolves C3.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3 Resolved"
          }
        },
        {
          "body": "<strong>Code Connect property renamed</strong> — <code>labelDescription</code> → <code>description</code> for cleaner 1:1 mapping to native params.\n          <span class=\"tag-fixed\">Refined</span>",
          "delta": {
            "kind": "partial",
            "label": "C7 Prep"
          }
        },
        {
          "body": "<strong>Annotation instance frame added</strong> — Type × State grid built with nested auto layout (VERTICAL outer → HORIZONTAL rows → VERTICAL cells). White card, #E5EBF4 border, 16px radius, Menlo annotation labels.\n          <span class=\"tag-fixed\">Added</span>",
          "delta": {
            "kind": "partial",
            "label": "Annotation"
          }
        }
      ]
    },
    {
      "version": "1.2.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Changes Applied via Figma MCP · node 16870:9288",
      "rows": [
        {
          "body": "<strong>Added expanded content panel (content-body)</strong> — All 12 expanded variants resized from 62px to 142px. A <code>content-body</code> frame (360×80px) added at y=62 inside each container. Background: #F4F7FB (<code>surface/content</code> token). Border: #E5EBF4. Fully resolves C4.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C4 Resolved"
          }
        }
      ]
    },
    {
      "version": "1.1.0",
      "date": "March 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Changes Applied via Figma MCP · node 16870:9288",
      "rows": [
        {
          "body": "<strong>Added state=pressed and state=disabled variants</strong> — 16 new variants cloned and styled. Component set expanded from 8 to 24 variants. <code>state</code> property added with values <code>default / pressed / disabled</code>. Fully resolves C5.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        }
      ]
    },
    {
      "version": "1.0.1",
      "date": "March 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Changes Applied via Figma MCP · node 16830:2025",
      "rows": [
        {
          "body": "<strong>Frame renamed to container</strong> — All 8 root container frames renamed from <code>Frame</code> to <code>container</code>.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "partial",
            "label": "C1 Partial"
          }
        },
        {
          "body": "<strong>Placeholder renamed to icon-leading</strong> — All 4 leading icon instances renamed from <code>Placeholder</code> to <code>icon-leading</code>.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "partial",
            "label": "C1 Partial"
          }
        },
        {
          "body": "<strong>Boolean props converted to true/false</strong> — All 8 variant names updated. <code>leading icon</code> and <code>label description</code> converted from <code>yes/no</code> to <code>true/false</code>. Fully resolves C2.\n          <span class=\"tag-fixed\">Fixed</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2 Resolved"
          }
        },
        {
          "body": "<strong>Expanded content panel</strong> — Resolved in v1.2.0. <code>content-body</code> frame added to all 12 expanded variants.\n          <span class=\"tag-fixed\">Fixed in 1.2.0</span>",
          "delta": {
            "kind": "resolved",
            "label": "C4 Resolved"
          }
        },
        {
          "body": "<strong>Interaction states: pressed / disabled</strong> — Resolved in v1.1.0. 16 new variants added across all type/icon/desc combinations.\n          <span class=\"tag-fixed\">Fixed in 1.1.0</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5 Resolved"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No native component files or Code Connect CLI mappings registered yet.\n          <span class=\"tag-open tag-c7\">Still Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
