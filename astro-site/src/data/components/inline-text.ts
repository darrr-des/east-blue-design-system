import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(cardStyle, prop, value)`
// in `public/scripts/demos/inline-text.js`. Inline Text is content-driven,
// so the controls swap between a few label presets to demonstrate the row,
// plus the trailing-slot type and an aspirational state axis (the Pressed
// recommendation in Open Issues — all cards ship as Default today).
const inlineTextDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'with-clipboard', label: 'with Clipboard' },
          { value: 'with-badge', label: 'with Badge' },
          { value: 'with-description', label: 'with Description' },
          { value: 'with-text-link', label: 'with Text Link' },
        ],
      },
      {
        label: 'Label',
        prop: 'label',
        defaultValue: 'Amount',
        options: [
          { value: 'Amount', label: 'Amount' },
          { value: 'Reference No', label: 'Reference No' },
          { value: 'Voucher', label: 'Voucher' },
          { value: 'Service fee', label: 'Service fee' },
          { value: 'Promo code', label: 'Promo code' },
        ],
      },
      {
        label: 'State',
        prop: 'state',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'pressed', label: 'Pressed' },
          { value: 'disabled', label: 'Disabled' },
        ],
      },
    ],
  },
];

export const inlineText: ComponentData = {
  "meta": {
    "slug": "inline-text",
    "name": "Inline Text",
    "node": "4419:24515",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4419-24515",
    "description": "A label-and-value row with an optional trailing element, description line and text link — used for inline detail pairs within lists and cards.",
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
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>4419:24515</code> in the 2026 Working File as <code>Type</code> (Copy Icon · Badge · Checkmark · Slot) × <code>hasDescription</code> × <code>hasTextLink</code> = <strong>16 variants</strong>. The enum that hid five compositions is split into orthogonal axes, so clipboard plus description plus link is now a real combination rather than an unreachable one. The trailing element routes through a shared <code>Trailing Elements</code> instance holding a real Badge or DS icon, and every layer carries a distinct semantic name mapping onto §3. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Inline Text is a composition primitive. You'll find stacks of it inside Generic Transaction Card's detail modal, Send Money confirmation screens, receipt summaries, and fee-breakdown list items. Rarely used standalone.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"itx-demo-preview\"><div style=\"display:flex;align-items:center;justify-content:space-between;gap:12px;width:320px;font-family:'Proxima Soft',sans-serif;opacity:1;\"><p style=\"font-weight:600;font-size:16px;color:#0A2757;margin:0;line-height:20px;\">Amount</p><p style=\"font-weight:600;font-size:16px;color:#445C85;margin:0;line-height:20px;\">PHP 1,500.00</p></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><input type=\"text\" id=\"itx-ctrl-label\" class=\"demo-panel-select demo-panel-input\" value=\"Amount\" oninput=\"_itxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">value</span><input type=\"text\" id=\"itx-ctrl-value\" class=\"demo-panel-select demo-panel-input\" value=\"PHP 1,500.00\" oninput=\"_itxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"itx-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"Description goes here\" oninput=\"_itxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">cta</span><input type=\"text\" id=\"itx-ctrl-cta\" class=\"demo-panel-select demo-panel-input\" value=\"CTA\" oninput=\"_itxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">badge</span><input type=\"text\" id=\"itx-ctrl-badge\" class=\"demo-panel-select demo-panel-input\" value=\"Label\" oninput=\"_itxUpdate()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select id=\"itx-ctrl-type\" class=\"demo-panel-select\" onchange=\"_itxUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"with-clipboard\">with Clipboard</option><option value=\"with-badge\">with Badge</option><option value=\"with-description\">with Description</option><option value=\"with-text-link\">with Text Link</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Genuinely reused across transaction cards, modal summaries, and list items. A strong primitive."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Binds tokens cleanly and routes the trailing element through a shared <code>Trailing Elements</code> instance holding a real <code>Badge</code> or DS icon, so styling propagates rather than being redrawn here."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>Type</code> × <code>hasDescription</code> × <code>hasTextLink</code> are orthogonal, boolean values are genuine <code>True</code>/<code>False</code>, and every layer carries a distinct semantic name — the text layers mapping onto §3 as <code>Label</code>, <code>Value</code>, <code>Description</code>, plus <code>LinkLabel</code>. <code>Type=Slot</code> is a deliberate, documented choice."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Stacks inside transaction cards, modal summaries and list items, and the three axes combine freely — clipboard plus description plus link is now a real combination rather than an unreachable one. <code>Type=Slot</code> accepts arbitrary trailing content."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "type=Default",
        "notes": "Label leading, value trailing. The baseline receipt row."
      },
      {
        "state": "With Clipboard",
        "ios": "yes",
        "android": "yes",
        "property": "type=with Clipboard",
        "notes": "Value + 24 × 24 copy icon. Tapping the icon copies the value to clipboard."
      },
      {
        "state": "With Badge",
        "ios": "yes",
        "android": "yes",
        "property": "type=with Badge",
        "notes": "Replaces the value with a trailing badge pill. Used for voucher / discount selection."
      },
      {
        "state": "With Description",
        "ios": "yes",
        "android": "yes",
        "property": "type=with Description",
        "notes": "Adds a second row below the label with secondary caption text."
      },
      {
        "state": "With Text Link",
        "ios": "yes",
        "android": "yes",
        "property": "type=with Text Link",
        "notes": "Second row adds a trailing text link (CTA) next to the description."
      },
      {
        "state": "Pressed (copy icon)",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Copy icon has no pressed state or success toast hook — users get no feedback when the tap lands."
      }
    ],
    "resolved": [
      {
        "headline": "<code>type</code> enum split into orthogonal axes.",
        "body": "v2.0: Rebuilt on node <code>4419:24515</code> in the 2026 Working File. The single enum that hid five layouts is now <code>Type</code> (Copy Icon · Badge · Checkmark · Slot) × <code>hasDescription</code> × <code>hasTextLink</code> = 16 variants. Trailing-element kind, description presence and link presence are independent, so no combination is unreachable. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Enum values cleaned up.",
        "body": "v2.0: The \"with X\" phrasing is gone — values are now <code>Copy Icon</code>, <code>Badge</code>, <code>Checkmark</code> and <code>Slot</code>, each naming the trailing element rather than describing a composite layout. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Badge is instance-swapped, not drawn inline.",
        "body": "v2.0: The trailing element goes through a shared <code>Trailing Elements</code> instance which in turn holds a real <code>Badge</code> instance. Badge styling changes now propagate rather than needing to be redrawn here. (C6 · Composition)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Copy icon uses the shared wrapper.",
        "body": "v2.1: Confirmed by the component owner — <code>Type=Copy Icon</code> routes through the same <code>Trailing Elements</code> instance as Badge rather than drawing the glyph inline, so it inherits the DS icon. (C6)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Clipboard property renamed to describe the element.",
        "body": "v2.0: The property value now reads <code>Type=Copy Icon</code>, naming what appears rather than the clipboard mechanism behind it. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Layer naming completed.",
        "body": "v2.1: Seven renames — the 16px <code>#label</code> → <code>Label</code>, the 12px link <code>#label</code> → <code>LinkLabel</code>, <code>#amount</code> → <code>Value</code>, <code>description</code> → <code>Description</code>, the two <code>container</code> frames → <code>ValueGroup</code> and <code>DescriptionGroup</code>, and <code>bottom-container</code> → <code>SupportingRow</code>. Resolves the duplicate <code>#label</code> and duplicate <code>container</code> collisions, and the text names now map onto §3 — <code>Label</code>, <code>Value</code>, <code>Description</code>. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Row frame renamed to <code>MainRow</code>.",
        "body": "v2.2: The top row no longer shares the component set's own name, pairing cleanly with <code>SupportingRow</code> below it. Every layer this component owns now carries a distinct semantic name. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>Type=Slot</code> confirmed intentional.",
        "body": "v2.2: Closed by owner decision — <code>Slot</code> stays. The team treats Slot as a first-class concept in the system rather than an implementation detail, so the value reads as a named content mode to anyone working in the library. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Pressed state ruled out of scope.",
        "body": "v2.2: Closed by owner decision — nested buttons and links across the system do not currently carry pressed states, so adding one here would make Inline Text the outlier rather than the standard. Revisit at family level if pressed states are introduced for nested interactive elements generally. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The schema is clean: one enum, two booleans, three text layers and a swappable trailing instance.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Document the stacking recipe and reconcile typography.",
        "body": "How multiple Inline Text rows stack in a list, and how the label/value type scale relates to Generic Transaction Card's metadata — the two show similar content at different sizes. No Figma change required.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "default-—-label-+-value",
        "demoKey": "default",
        "demoControls": inlineTextDemoControls,
        "title": "Default — label + value",
        "node": "21:138493",
        "description": "The baseline row. Leading label, trailing value, 25 px tall, full-width auto-layout.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"itx-spec-default\"><div style=\"display:flex;align-items:center;justify-content:space-between;gap:12px;width:320px;font-family:'Proxima Soft',sans-serif;opacity:1;\"><p style=\"font-weight:600;font-size:16px;color:#0A2757;margin:0;line-height:20px;\">Amount</p><p style=\"font-weight:600;font-size:16px;color:#445C85;margin:0;line-height:20px;\">PHP 1,500.00</p></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "type",
                "value": "default",
                "mono": true,
                "prop": "type"
              },
              {
                "key": "label",
                "value": "Amount",
                "mono": true,
                "prop": "label"
              },
              {
                "key": "state",
                "value": "default",
                "mono": true,
                "prop": "state"
              },
              {
                "key": "value",
                "value": "\"0.00\"",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label", "value": "#0A2757", "token": "inline-text/color/label",
                "variants": {
                  "state:pressed": { "value": "#072592", "token": "inline-text/color/label-pressed" }
                }
              },
              { "key": "Value", "value": "#445C85", "token": "inline-text/color/label-value",
                "variants": {
                  "state:pressed": { "value": "#072592", "token": "inline-text/color/label-value-pressed" }
                }
              },
              { "key": "Description", "value": "#6780A9", "token": "inline-text/color/description",
                "variants": {
                  "type:default":        { "hide": true },
                  "type:with-clipboard": { "hide": true },
                  "type:with-badge":     { "hide": true },
                  "type:with-text-link": { "hide": true }
                }
              },
              { "key": "Link", "value": "#005CE5", "token": "inline-text/color/label-link",
                "variants": {
                  "type:default":         { "hide": true },
                  "type:with-clipboard":  { "hide": true },
                  "type:with-badge":      { "hide": true },
                  "type:with-description":{ "hide": true },
                  "state:pressed":        { "value": "#003ea0", "token": "inline-text/color/label-link-pressed" }
                }
              },
              { "key": "Icon", "value": "#445C85", "token": "inline-text/color/icon",
                "variants": {
                  "type:default":         { "hide": true },
                  "type:with-badge":      { "hide": true },
                  "type:with-description":{ "hide": true },
                  "type:with-text-link":  { "hide": true }
                }
              },
              { "key": "Disabled opacity", "value": "40%", "mono": true,
                "variants": {
                  "state:default": { "hide": true },
                  "state:pressed": { "hide": true }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "368 (fill)",
                "mono": true
              },
              {
                "key": "Height",
                "value": "25",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "0 (row) · 5 0 5 0 (value cell)",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0 (fill + hug)",
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
                "value": "Primary/Label/Light/Base",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold",
                "mono": true
              },
              {
                "key": "Size / Line / Tracking",
                "value": "16 / 16 / +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBInlineText</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"PHP 1,500.00\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInlineText</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 1,500.00\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "with-clipboard-—-value-+-copy-icon",
        "demoKey": "clipboard",
        "demoControls": inlineTextDemoControls,
        "title": "With Clipboard — value + copy icon",
        "node": "21:138497",
        "description": "Adds a 24 × 24 copy icon to the right of the value. Tapping the icon copies the value to clipboard. Icon uses <code>inline-text/icon</code> token.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"itx-spec-clipboard\"><div style=\"display:flex;align-items:center;justify-content:space-between;gap:12px;width:320px;font-family:'Proxima Soft',sans-serif;opacity:1;\"><p style=\"font-weight:600;font-size:16px;color:#0A2757;margin:0;line-height:20px;\">Reference No</p><span style=\"display:inline-flex;align-items:center;gap:8px;color:#445C85;font-weight:600;font-size:16px;line-height:20px;\"><span>GC123456789</span><span style=\"display:inline-flex;color:#445C85;\" aria-hidden=\"true\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"></rect><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"></path></svg></span></span></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "type",
                "value": "with-clipboard",
                "mono": true,
                "prop": "type"
              },
              {
                "key": "label",
                "value": "Reference No",
                "mono": true,
                "prop": "label"
              },
              {
                "key": "state",
                "value": "default",
                "mono": true,
                "prop": "state"
              },
              {
                "key": "Layout",
                "value": "Label-left, Value+icon-right",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label color", "value": "#3C4A5C", "token": "main/inline-text/label" },
              { "key": "Value color", "value": "#0A2757", "token": "main/inline-text/value" },
              { "key": "Icon color", "value": "#005CE5", "token": "main/inline-text/icon" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Row height",
                "value": "auto",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "8",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "20 × 20",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "0",
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
                "value": "Body/Small",
                "mono": true
              },
              {
                "key": "Value style",
                "value": "Body/Medium · Bold",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBInlineText</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Reference no.\"</span><span class=\"syn-punc\">,</span>\n    value<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"1234567890\"</span><span class=\"syn-punc\">,</span>\n    trailing<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>clipboard\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInlineText</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Reference no.\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"1234567890\"</span><span class=\"syn-punc\">,</span>\n    trailing <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBInlineTextTrailing</span><span class=\"syn-punc\">.</span>Clipboard\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "with-badge-—-label-+-trailing-badge",
        "demoKey": "badge",
        "demoControls": inlineTextDemoControls,
        "title": "With Badge — label + trailing badge",
        "node": "21:138503",
        "description": "Replaces the value cell with a Badge pill. Used on voucher / discount rows. Today the badge is drawn inline (information/light hardcoded) rather than instance-swapped from the Badge component.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"itx-spec-badge\"><div style=\"display:flex;align-items:center;justify-content:space-between;gap:12px;width:320px;font-family:'Proxima Soft',sans-serif;opacity:1;\"><p style=\"font-weight:600;font-size:16px;color:#0A2757;margin:0;line-height:20px;\">Voucher</p><span style=\"display:inline-flex;align-items:center;background:#E5F1FF;color:#005CE5;font-weight:700;font-size:12px;letter-spacing:0.5px;padding:4px 10px;border-radius:99px;\">Applied</span></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "type",
                "value": "with-badge",
                "mono": true,
                "prop": "type"
              },
              {
                "key": "label",
                "value": "Voucher",
                "mono": true,
                "prop": "label"
              },
              {
                "key": "state",
                "value": "default",
                "mono": true,
                "prop": "state"
              },
              {
                "key": "Badge style",
                "value": "Brand",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label color", "value": "#3C4A5C", "token": "main/inline-text/label" },
              { "key": "Badge bg", "value": "#E8F1FF", "token": "main/badge/brand/bg" },
              { "key": "Badge label", "value": "#005CE5", "token": "main/badge/brand/label" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Row height",
                "value": "auto",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "8",
                "mono": true
              },
              {
                "key": "Badge height",
                "value": "20",
                "mono": true
              },
              {
                "key": "Badge padding (h)",
                "value": "8",
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
                "value": "Body/Small",
                "mono": true
              },
              {
                "key": "Badge style",
                "value": "Caption/Bold",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBInlineText</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Status\"</span><span class=\"syn-punc\">,</span>\n    trailing<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>badge<span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Active\"</span><span class=\"syn-punc\">))</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInlineText</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Status\"</span><span class=\"syn-punc\">,</span>\n    trailing <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">EBBadge</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Active\"</span><span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "with-description",
        "demoKey": "description",
        "demoControls": inlineTextDemoControls,
        "title": "With Description",
        "node": "21:138506",
        "description": "Adds a second row below the label/value with a description caption. Description uses BarkAda Semibold 12/18.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"itx-spec-description\"><div style=\"display:flex;align-items:center;justify-content:space-between;gap:12px;width:320px;font-family:'Proxima Soft',sans-serif;opacity:1;align-items:flex-start;\"><div style=\"display:flex;flex-direction:column;align-items:flex-start;\"><p style=\"font-weight:600;font-size:16px;color:#0A2757;margin:0;line-height:20px;\">Service fee</p><p style=\"font-family:'BarkAda',sans-serif;font-weight:600;font-size:12px;color:#6780A9;margin:2px 0 0;line-height:18px;\">Includes ₱10 service fee</p></div><div style=\"display:flex;flex-direction:column;align-items:flex-end;\"><p style=\"font-weight:600;font-size:16px;color:#445C85;margin:0;line-height:20px;\">PHP 10.00</p></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "type",
                "value": "with-description",
                "mono": true,
                "prop": "type"
              },
              {
                "key": "label",
                "value": "Service fee",
                "mono": true,
                "prop": "label"
              },
              {
                "key": "state",
                "value": "default",
                "mono": true,
                "prop": "state"
              },
              {
                "key": "Layout",
                "value": "Vertical stack",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label color", "value": "#3C4A5C", "token": "main/inline-text/label" },
              { "key": "Value color", "value": "#0A2757", "token": "main/inline-text/value" },
              { "key": "Description color", "value": "#3C4A5C", "token": "main/inline-text/description" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Row height",
                "value": "auto",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "4",
                "mono": true
              },
              {
                "key": "Description gap",
                "value": "2",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "0",
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
                "value": "Body/Small",
                "mono": true
              },
              {
                "key": "Value style",
                "value": "Body/Medium · Bold",
                "mono": true
              },
              {
                "key": "Description style",
                "value": "Caption/Regular",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBInlineText</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Total amount\"</span><span class=\"syn-punc\">,</span>\n    value<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"₱1,250.00\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Includes ₱25 service fee\"</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInlineText</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Total amount\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"₱1,250.00\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Includes ₱25 service fee\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "with-text-link",
        "demoKey": "link",
        "demoControls": inlineTextDemoControls,
        "title": "With Text Link",
        "node": "21:138512",
        "description": "Adds a trailing link (CTA) to the description row. Link uses <code>inline-text/label-link</code> token.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"itx-spec-link\"><div style=\"display:flex;align-items:center;justify-content:space-between;gap:12px;width:320px;font-family:'Proxima Soft',sans-serif;opacity:1;align-items:flex-start;\"><div style=\"display:flex;flex-direction:column;align-items:flex-start;\"><p style=\"font-weight:600;font-size:16px;color:#0A2757;margin:0;line-height:20px;\">Promo code</p><p style=\"font-family:'BarkAda',sans-serif;font-weight:600;font-size:12px;color:#6780A9;margin:2px 0 0;line-height:18px;\">Saved PHP 50.00</p></div><div style=\"display:flex;flex-direction:column;align-items:flex-end;\"><p style=\"font-weight:600;font-size:16px;color:#445C85;margin:0;line-height:20px;\">GC50OFF</p><p style=\"font-weight:600;font-size:12px;color:#005CE5;margin:2px 0 0;line-height:18px;letter-spacing:0.5px;\">Change</p></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "type",
                "value": "with-text-link",
                "mono": true,
                "prop": "type"
              },
              {
                "key": "label",
                "value": "Promo code",
                "mono": true,
                "prop": "label"
              },
              {
                "key": "state",
                "value": "default",
                "mono": true,
                "prop": "state"
              },
              {
                "key": "Link label",
                "value": "View details",
                "mono": true
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label color", "value": "#3C4A5C", "token": "main/inline-text/label" },
              { "key": "Value color", "value": "#0A2757", "token": "main/inline-text/value" },
              { "key": "Link color", "value": "#005CE5", "token": "main/text-link/label" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Row height",
                "value": "auto",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "8",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "0",
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
                "value": "Body/Small",
                "mono": true
              },
              {
                "key": "Value style",
                "value": "Body/Medium · Bold",
                "mono": true
              },
              {
                "key": "Link style",
                "value": "Body/Small · Bold",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBInlineText</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Order #1234\"</span><span class=\"syn-punc\">,</span>\n    trailing<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>link<span class=\"syn-punc\">(</span><span class=\"syn-str\">\"View details\"</span><span class=\"syn-punc\">, </span>action<span class=\"syn-punc\">: </span><span class=\"syn-punc\">{ }))</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInlineText</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Order #1234\"</span><span class=\"syn-punc\">,</span>\n    trailing <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">EBTextLink</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"View details\"</span><span class=\"syn-punc\">) { } }</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: (() => {
      const rows = [
        { role: 'Label',       token: 'inline-text/color/label',       value: '#0A2757' },
        { role: 'Value',       token: 'inline-text/color/label-value', value: '#445C85' },
        { role: 'Description', token: 'inline-text/color/description', value: '#6780A9' },
        { role: 'Link',        token: 'inline-text/color/label-link',  value: '#005CE5' },
        { role: 'Icon',        token: 'inline-text/color/icon',        value: '#445C85' },
      ];
      const variants = [1, 2, 3, 4, 5];
      return variants.map((i) => buildStatelessColorsTable({
        title: `Variant ${i} — Colors`,
        description: 'Label · value pairs used inline within paragraphs and cards.',
        rows,
      }));
    })(),
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "(hardcoded)",
          "swift": "<code>label: String</code>",
          "compose": "<code>label: String</code>"
        },
        {
          "figma": "<code>type=Default / with Clipboard</code>",
          "swift": "<code>trailing = .value(String)</code>",
          "compose": "<code>trailing: EBInlineTextTrailing</code>"
        },
        {
          "figma": "<code>type=with Badge</code>",
          "swift": "<code>trailing = .badge(Badge)</code> (instance)",
          "compose": "同上"
        },
        {
          "figma": "<code>type=with Clipboard</code>",
          "swift": "<code>hasCopy: Bool</code>",
          "compose": "<code>onCopy: (() -&gt; Void)?</code>"
        },
        {
          "figma": "<code>type=with Description</code>",
          "swift": "<code>description?: String</code>",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "<code>type=with Text Link</code>",
          "swift": "<code>ctaLabel?: String</code> + <code>onCtaTap?</code>",
          "compose": "<code>cta: EBInlineTextCTA?</code>"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>trailingIcon?: Icon</code> (slot)",
          "compose": "<code>trailingIcon: Image?</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Row reads as \"label, value\"",
        "ios": "Merge children: <code>.accessibilityElement(children: .combine)</code>. Announces \"Amount, 1,500 pesos\".",
        "android": "<code>Modifier.semantics(mergeDescendants = true)</code> on the row."
      },
      {
        "requirement": "Copy button",
        "ios": "Dedicated <code>Button</code> around the icon with <code>accessibilityLabel: \"Copy reference number\"</code>. Announce success via <code>UIAccessibility.post(.announcement, \"Copied\")</code>.",
        "android": "<code>IconButton</code> with <code>contentDescription</code>. On click, call <code>view.announceForAccessibility(\"Copied\")</code>."
      },
      {
        "requirement": "Text link as link",
        "ios": "Use <code>Button</code> with <code>accessibilityAddTraits(.isLink)</code>. Minimum 44 × 44 touch target.",
        "android": "<code>TextButton</code> or clickable text with role <code>Role.Button</code>. Minimum 48 dp touch target."
      },
      {
        "requirement": "Currency announcement",
        "ios": "Use localized currency formatter on <code>accessibilityValue</code>, not raw \"PHP 1,500.00\".",
        "android": "Same — announce via <code>contentDescription</code> with currency formatter applied."
      },
      {
        "requirement": "Dynamic Type / font scaling",
        "ios": "Text uses <code>.font(.custom(..., relativeTo: .body))</code> so it scales with Dynamic Type.",
        "android": "Use <code>sp</code> units for text size; respect system font scale."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>type</code> enum conflates two axes — split into orthogonal booleans + slot."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Enum values use \"with X\" phrasing and describe features, not semantics."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to <code>main/inline-text/color/*</code>. Spacing + typography tokens intact."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No 1:1 native primitive — it's a styled HStack. Maps cleanly as <code>EBInlineText</code> wrapper once restructured."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No pressed state on the copy icon or text link."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Badge drawn inline; copy icon appears one-off — confirm + instance-swap both."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on restructure — mapping today's enum would bake the anti-pattern."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 5,
      "description": "<code>type</code> is a single enum with 5 values — each a structurally different trailing-slot composition.",
      "columns": [
        "#",
        "Node",
        "type",
        "Layout",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>21:138493</code>",
            "Default",
            "label · value",
            "368 × 25"
          ]
        },
        {
          "cells": [
            "2",
            "<code>21:138497</code>",
            "with Clipboard",
            "label · value · copy-icon",
            "368 × 24"
          ]
        },
        {
          "cells": [
            "3",
            "<code>21:138503</code>",
            "with Badge",
            "label · trailing badge",
            "368 × 24"
          ]
        },
        {
          "cells": [
            "4",
            "<code>21:138506</code>",
            "with Description",
            "[label · value] / description",
            "368 × 38"
          ]
        },
        {
          "cells": [
            "5",
            "<code>21:138512</code>",
            "with Text Link",
            "[label · value] / [description · CTA]",
            "368 × 41"
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
      "header": "Initial Assessment · node 18652:71101",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Replace <code>type</code> enum (5 layouts) with orthogonal booleans + unified trailing slot. Instance-swap Badge. Add pressed state on copy icon. <span class=\"tag-open tag-c1 tag-c2 tag-c5 tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>C1 — Type enum hides compositions</strong> — 5 <code>type</code> values conflate two axes (trailing slot + sub-row). Split into <code>hasCopy</code>, <code>hasDescription</code>, <code>hasTextLink</code>, unified <code>trailing</code> slot. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — \"with X\" value phrasing</strong> — Figma enum values describe what's added, not what the row IS. Rename under boolean-prop schema. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C6 — Badge drawn inline</strong> — <code>with Badge</code> hardcodes information/light fill + label instead of instance-swapping Badge. Parallel source of truth. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C5 — Copy / link pressed states</strong> — Copy icon and text link have no pressed tint, focus ring, or success feedback hook. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>Tokens ✓</strong> — All four semantic color roles (<code>label</code>, <code>label-value</code>, <code>description</code>, <code>label-link</code>) plus <code>icon</code> bound correctly. <span class=\"tag-fixed\">Noted</span>",
          "delta": {
            "kind": "resolved",
            "label": "Praise"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on restructure. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
