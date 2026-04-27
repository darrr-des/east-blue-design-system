import type { ComponentData } from '../types';

export const chip: ComponentData = {
  "meta": {
    "slug": "chip",
    "name": "Chip",
    "node": "18336:22243",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18336-22243",
    "description": "A 32px pill used for filters, tags, selected values, and pill-styled dropdown triggers.",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ]
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          \n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"18\" rx=\"4\" fill=\"#1972F9\" opacity=\".6\"></rect>\n          <text x=\"60\" y=\"19\" text-anchor=\"middle\" fill=\"white\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Vouchers</text>\n          \n          <rect x=\"16\" y=\"32\" width=\"22\" height=\"8\" rx=\"4\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"42\" y=\"32\" width=\"22\" height=\"8\" rx=\"4\" fill=\"#EEF2F9\"></rect>\n          <rect x=\"68\" y=\"32\" width=\"22\" height=\"8\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"0.8\"></rect>\n          \n          <rect x=\"18\" y=\"48\" width=\"84\" height=\"10\" rx=\"2\" fill=\"currentColor\" opacity=\".07\"></rect>\n          <rect x=\"18\" y=\"60\" width=\"84\" height=\"6\" rx=\"3\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"chip-demo-preview\"><div style=\"display:inline-flex;align-items:center;height:32px;padding:0 14px 0 4px;background:#005CE5;border:none;border-radius:99px;box-sizing:border-box;font-family:'Proxima Soft', system-ui, sans-serif;font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;\"><div style=\"width:24px;height:24px;border-radius:50%;background:#C2C6CF;flex-shrink:0;margin-right:4px;\"></div><span style=\"color:#FFFFFF;white-space:nowrap;\">Filter Name</span><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" style=\"margin-left:8px;flex-shrink:0;\"><path d=\"M4 4l8 8M12 4l-8 8\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">style</span><select class=\"demo-panel-select\" id=\"chip-demo-style\" onchange=\"updateChipDemo()\"><option value=\"filled\" selected=\"\">filled</option><option value=\"light\">light</option><option value=\"outline\">outline</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">leading</span><select class=\"demo-panel-select\" id=\"chip-demo-leading\" onchange=\"updateChipDemo()\"><option value=\"none\">none</option><option value=\"avatar\" selected=\"\">avatar</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">trailing</span><select class=\"demo-panel-select\" id=\"chip-demo-trailing\" onchange=\"updateChipDemo()\"><option value=\"none\">none</option><option value=\"close\" selected=\"\">close</option><option value=\"chevron\">chevron</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Fits filter rows, applied-filter readouts, tag lists, and pill-styled sort/filter triggers. Same shape works across all three use cases — that's the argument for consolidation."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries pill radius, height, padding, typography, and color tokens. All 8 variants share the same base anatomy."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Split across two components with different property schemas. Filter uses <code>type</code> + <code>with icon</code> (yes/no). Dropdown uses <code>type=default/\"with active time\"</code>. <span class=\"tag-open tag-c2\">C2</span>"
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "Leading slot is a hardcoded 24px gray circle (<code>icon-placeholder</code>), not an Avatar instance or swappable Icon. Breaks compositional inheritance. <span class=\"tag-open tag-c6\">C6</span>"
      }
    ],
    "behavior": [
      {
        "state": "Active / Selected",
        "ios": "yes",
        "android": "yes",
        "property": "Filter · type=primary",
        "notes": "Filled blue background, white label. Used when a filter is applied."
      },
      {
        "state": "Inactive (light)",
        "ios": "yes",
        "android": "yes",
        "property": "Filter · type=light",
        "notes": "Light gray pill, gray label. Used for unapplied filters or tag readouts."
      },
      {
        "state": "Inactive (outline)",
        "ios": "yes",
        "android": "yes",
        "property": "Filter · type=outline",
        "notes": "White pill, gray border, gray label."
      },
      {
        "state": "Dropdown trigger",
        "ios": "yes",
        "android": "yes",
        "property": "Filter w/ Dropdown · default",
        "notes": "Light style with chevron. Used for sort/filter pickers."
      },
      {
        "state": "Pressed / Disabled / Error",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not defined in Figma. <span class=\"tag-open tag-c5\">C5</span>"
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Filter",
        "body": "Two separate Figma components share the same pill anatomy —  (6 variants) and <strong>Filter with Dropdown</strong> (2 variants). Should consolidate into a single <strong>Chip</strong> with <code>style</code>, <code>leading</code>, and <code>trailing</code> slot props.",
        "tag": {
          "criterion": "C2",
          "label": "C2"
        }
      },
      {
        "body": "Boolean property <code>with icon</code> uses <code>yes</code>/<code>no</code> instead of <code>true</code>/<code>false</code>. Incompatible with Swift <code>Bool</code> / Kotlin <code>Boolean</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2"
        }
      },
      {
        "body": "Enum value <code>\"with active time\"</code> contains spaces and a nonsensical name — should be <code>withValue</code> / <code>hasSelectedValue</code> or collapse into a <code>selectedValue</code> optional string prop.",
        "tag": {
          "criterion": "C2",
          "label": "C2"
        }
      },
      {
        "body": "Leading slot is a hardcoded 24px gray circle (<code>icon-placeholder</code>) — should be a swappable Avatar or Icon instance via instance swap.",
        "tag": {
          "criterion": "C6",
          "label": "C6"
        }
      },
      {
        "body": "No pressed / selected / disabled / error states documented.",
        "tag": {
          "criterion": "C5",
          "label": "C5"
        }
      },
      {
        "body": "Code Connect CLI mappings not registered.",
        "tag": {
          "criterion": "C7",
          "label": "C7"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Rename \"Filter\" → \"Chip\"",
        "body": "and merge with \"Filter with Dropdown\" into one component. Matches industry terminology (Material FilterChip/InputChip, Polaris Tag, Carbon Tag).",
        "tag": "Docs"
      },
      {
        "headline": "Replace the property schema",
        "body": "with three semantic slot props: <code>style</code> (filled / light / outline), <code>leading</code> (none / avatar / icon), <code>trailing</code> (none / close / chevron). Plus optional <code>selectedValue</code> string for the \"Sort by X\" pattern.",
        "tag": "Property"
      },
      {
        "headline": "Replace the leading placeholder with a real slot",
        "body": "— instance-swap an Avatar (for person filters) or Icon (for category filters).",
        "tag": "Slot"
      },
      {
        "headline": "Add pressed / disabled states",
        "body": "so applied-filter chips have a documented pressed affordance and disabled filters have a defined appearance.",
        "tag": "State"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "chip-spec-filled",
        "title": "Filled",
        "node": "18336:22244",
        "description": "Brand blue fill with white label. Represents an active/applied filter.",
        "previewHtml": "<div id=\"spec-chip-filled-preview\"><div style=\"display:inline-flex;align-items:center;height:32px;padding:0 14px 0 4px;background:#005CE5;border:none;border-radius:99px;box-sizing:border-box;font-family:'Proxima Soft', system-ui, sans-serif;font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;\"><div style=\"width:24px;height:24px;border-radius:50%;background:#C2C6CF;flex-shrink:0;margin-right:4px;\"></div><span style=\"color:#FFFFFF;white-space:nowrap;\">Filter Name</span><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" style=\"margin-left:8px;flex-shrink:0;\"><path d=\"M4 4l8 8M12 4l-8 8\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg></div></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Style",
                "value": "Filled",
                "mono": false
              },
              {
                "key": "Leading",
                "value": "avatar",
                "mono": false
              },
              {
                "key": "Trailing",
                "value": "close",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Background",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#F6F9FDB8",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "main/filter/color/primary/bg",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "main/filter/color/primary/label",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "main/filter/color/primary/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Height",
                "value": "32px",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "radius/radius-pill (99px)",
                "mono": true
              },
              {
                "key": "Padding L (with leading)",
                "value": "4px",
                "mono": true
              },
              {
                "key": "Padding R (with trailing)",
                "value": "14px",
                "mono": true
              },
              {
                "key": "Leading avatar",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Close icon",
                "value": "16 × 16",
                "mono": true
              },
              {
                "key": "Gap icon → label",
                "value": "4px (space/space-4)",
                "mono": true
              },
              {
                "key": "Gap label → close",
                "value": "8px (space/space-8)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Text style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Size",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Line height",
                "value": "16px",
                "mono": true
              },
              {
                "key": "Tracking",
                "value": "+0.25px",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Filter Name\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">leading</span><span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.avatar</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">EBAvatar</span><span class=\"syn-punc\">(</span><span class=\"syn-param\">initials</span><span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"DM\"</span><span class=\"syn-punc\">)),</span>\n    <span class=\"syn-param\">trailing</span><span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.close</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">onRemove</span><span class=\"syn-punc\">:</span> <span class=\"syn-punc\">{</span> <span class=\"syn-cmt\">/* remove filter */</span> <span class=\"syn-punc\">})</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.filled</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">label</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Filter Name\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">style</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBChipStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Filled</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">leading</span> <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBAvatar</span><span class=\"syn-punc\">(</span><span class=\"syn-param\">initials</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"DM\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">},</span>\n    <span class=\"syn-param\">trailing</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBChipTrailing</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Close</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">onRemove</span> <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-cmt\">/* remove filter */</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span></code>"
      },
      {
        "cardKey": "chip-spec-light",
        "title": "Light",
        "node": "18336:22257",
        "description": "Light gray fill with gray label. Used for inactive filters, tags, or dropdown trigger base.",
        "previewHtml": "<div id=\"spec-chip-light-preview\"><div style=\"display:inline-flex;align-items:center;height:32px;padding:0 14px 0 14px;background:#EEF2F9;border:none;border-radius:99px;box-sizing:border-box;font-family:'Proxima Soft', system-ui, sans-serif;font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;\"><span style=\"color:#6780A9;white-space:nowrap;\">Category</span></div></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Style",
                "value": "Light",
                "mono": false
              },
              {
                "key": "Leading",
                "value": "none",
                "mono": false
              },
              {
                "key": "Trailing",
                "value": "none",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Background",
                "value": "#EEF2F9",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#7E96BE",
                "mono": true
              },
              {
                "key": "Bg token",
                "value": "main/filter/color/secondary/bg",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "main/filter/color/secondary/label",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "main/filter/color/secondary/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Height",
                "value": "32px",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "radius/radius-pill (99px)",
                "mono": true
              },
              {
                "key": "Padding horizontal",
                "value": "14px",
                "mono": true
              },
              {
                "key": "Leading avatar",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Close icon",
                "value": "16 × 16",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Text style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Size / line-height",
                "value": "16 / 16px",
                "mono": true
              },
              {
                "key": "Tracking",
                "value": "+0.25px",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Category\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.light</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">label</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Category\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">style</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBChipStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Light</span>\n<span class=\"syn-punc\">)</span></code>"
      },
      {
        "cardKey": "chip-spec-outline",
        "title": "Outline",
        "node": "18336:22270",
        "description": "White fill with 2px gray border and gray label. Alternative inactive style for light surfaces.",
        "previewHtml": "<div id=\"spec-chip-outline-preview\"><div style=\"display:inline-flex;align-items:center;height:32px;padding:0 14px 0 14px;background:#FFFFFF;border:2px solid #D7E0EF;border-radius:99px;box-sizing:border-box;font-family:'Proxima Soft', system-ui, sans-serif;font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;\"><span style=\"color:#6780A9;white-space:nowrap;\">Category</span></div></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Style",
                "value": "Outline",
                "mono": false
              },
              {
                "key": "Leading",
                "value": "none",
                "mono": false
              },
              {
                "key": "Trailing",
                "value": "none",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Background",
                "value": "#FFFFFF",
                "mono": true
              },
              {
                "key": "Border",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "main/filter/color/tertiary/border",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "main/filter/color/tertiary/label",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Height",
                "value": "32px",
                "mono": true
              },
              {
                "key": "Corner radius",
                "value": "radius/radius-pill (99px)",
                "mono": true
              },
              {
                "key": "Border width",
                "value": "2px",
                "mono": true
              },
              {
                "key": "Padding horizontal",
                "value": "14px",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Text style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Size / line-height",
                "value": "16 / 16px",
                "mono": true
              },
              {
                "key": "Tracking",
                "value": "+0.25px",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Category\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.outline</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">label</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Category\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">style</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBChipStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Outline</span>\n<span class=\"syn-punc\">)</span></code>"
      },
      {
        "cardKey": "chip-spec-dropdown",
        "title": "Dropdown",
        "node": "18336:22284",
        "description": "Light style with a trailing chevron. Used as a pill-styled dropdown trigger. Selected value shown in blue <code>label-link</code>.",
        "previewHtml": "<div id=\"spec-chip-dropdown-preview\"><div style=\"display:inline-flex;align-items:center;height:32px;padding:0 12px 0 16px;background:#EEF2F9;border:none;border-radius:99px;box-sizing:border-box;font-family:'Proxima Soft', system-ui, sans-serif;font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;\"><span style=\"color:#6780A9;white-space:nowrap;\">Sort by</span><span style=\"margin-left:8px;color:#005CE5;white-space:nowrap;\">Conservative first</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"margin-left:4px;flex-shrink:0;\"><path d=\"M7 10l5 5 5-5\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Style",
                "value": "Light",
                "mono": false
              },
              {
                "key": "Trailing",
                "value": "chevron",
                "mono": false
              },
              {
                "key": "Selected value",
                "value": "true",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Background",
                "value": "#EEF2F9",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Selected value",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Chevron",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Value token",
                "value": "main/filter/color/secondary/label-link",
                "mono": true
              },
              {
                "key": "Chevron token",
                "value": "main/filter/color/secondary/chevron",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Height",
                "value": "32px",
                "mono": true
              },
              {
                "key": "Padding left",
                "value": "16px (space/space-16)",
                "mono": true
              },
              {
                "key": "Padding right",
                "value": "12px (space/space-12)",
                "mono": true
              },
              {
                "key": "Chevron size",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Gap label → value",
                "value": "8px (space/space-8)",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Text style",
                "value": "Primary/Label/Base",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Size / line-height",
                "value": "16 / 16px",
                "mono": true
              },
              {
                "key": "Tracking",
                "value": "+0.25px",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Sort by\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">selectedValue</span><span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Conservative first\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">trailing</span><span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.chevron</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">action</span><span class=\"syn-punc\">:</span> <span class=\"syn-punc\">{</span> <span class=\"syn-cmt\">/* open dropdown */</span> <span class=\"syn-punc\">})</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.light</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">label</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Sort by\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">selectedValue</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Conservative first\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">style</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBChipStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Light</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">trailing</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBChipTrailing</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Chevron</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">onClick</span> <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-cmt\">/* open dropdown */</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span></code>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Style",
        "description": "Three style modes, each with bg, label, and icon tokens. Dropdown adds <code>label-link</code> and <code>chevron</code>.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Filled",
            "token": "bg",
            "values": [
              "main/filter/color/primary/bg",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "label",
            "values": [
              "main/filter/color/primary/label",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "icon",
            "values": [
              "main/filter/color/primary/icon",
              "#F6F9FDB8"
            ]
          },
          {
            "role": "Light",
            "token": "bg",
            "values": [
              "main/filter/color/secondary/bg",
              "#EEF2F9"
            ]
          },
          {
            "role": "—",
            "token": "label",
            "values": [
              "main/filter/color/secondary/label",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "icon",
            "values": [
              "main/filter/color/secondary/icon",
              "#7E96BE"
            ]
          },
          {
            "role": "—",
            "token": "selected value",
            "values": [
              "main/filter/color/secondary/label-link",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "chevron",
            "values": [
              "main/filter/color/secondary/chevron",
              "#005CE5"
            ]
          },
          {
            "role": "Outline",
            "token": "border",
            "values": [
              "main/filter/color/tertiary/border",
              "#D7E0EF"
            ]
          },
          {
            "role": "—",
            "token": "label",
            "values": [
              "main/filter/color/tertiary/label",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "icon",
            "values": [
              "main/filter/color/tertiary/icon",
              "#7E96BE"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:chip:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "style",
          "swift": ".ebStyle(.filled / .light / .outline)",
          "compose": "style = EBChipStyle.*"
        },
        {
          "figma": "leading",
          "swift": "leading: EBChipLeading?",
          "compose": "leading: @Composable (() -&gt; Unit)?"
        },
        {
          "figma": "trailing",
          "swift": "trailing: EBChipTrailing?",
          "compose": "trailing: EBChipTrailing?"
        },
        {
          "figma": "selectedValue",
          "swift": "selectedValue: String?",
          "compose": "selectedValue: String?"
        },
        {
          "figma": "label",
          "swift": "title: String",
          "compose": "label: String"
        },
        {
          "figma": "onTap / onClose",
          "swift": "action / onRemove",
          "compose": "onClick / onRemove"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Chip/EBChip.swift",
        "compose": "android/components/chip/EBChip.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Applied filter — brand fill, avatar + close</span>\n<span class=\"typ\">EBChip</span>(<span class=\"str\">\"Filter Name\"</span>,\n    <span class=\"prp\">leading</span>: .<span class=\"fn\">avatar</span>(<span class=\"typ\">EBAvatar</span>(<span class=\"prp\">initials</span>: <span class=\"str\">\"DM\"</span>)),\n    <span class=\"prp\">trailing</span>: .<span class=\"prp\">close</span>,\n    <span class=\"prp\">onRemove</span>: { /* remove filter */ })\n.<span class=\"fn\">ebStyle</span>(.<span class=\"prp\">filled</span>)\n\n<span class=\"cmt\">// Inactive filter — light, label only</span>\n<span class=\"typ\">EBChip</span>(<span class=\"str\">\"Category\"</span>)\n    .<span class=\"fn\">ebStyle</span>(.<span class=\"prp\">light</span>)\n\n<span class=\"cmt\">// Dropdown trigger with selected value</span>\n<span class=\"typ\">EBChip</span>(<span class=\"str\">\"Sort by\"</span>,\n    <span class=\"prp\">selectedValue</span>: <span class=\"str\">\"Conservative first\"</span>,\n    <span class=\"prp\">trailing</span>: .<span class=\"prp\">chevron</span>,\n    <span class=\"prp\">action</span>: { /* open dropdown */ })\n.<span class=\"fn\">ebStyle</span>(.<span class=\"prp\">light</span>)",
        "compose": "<span class=\"cmt\">// Applied filter — brand fill, avatar + close</span>\n<span class=\"typ\">EBChip</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Filter Name\"</span>,\n    <span class=\"prp\">style</span> = <span class=\"typ\">EBChipStyle</span>.<span class=\"prp\">Filled</span>,\n    <span class=\"prp\">leading</span> = { <span class=\"typ\">EBAvatar</span>(initials = <span class=\"str\">\"DM\"</span>) },\n    <span class=\"prp\">trailing</span> = <span class=\"typ\">EBChipTrailing</span>.<span class=\"prp\">Close</span>,\n    <span class=\"prp\">onRemove</span> = { /* remove filter */ }\n)\n\n<span class=\"cmt\">// Inactive filter — light, label only</span>\n<span class=\"typ\">EBChip</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Category\"</span>,\n    <span class=\"prp\">style</span> = <span class=\"typ\">EBChipStyle</span>.<span class=\"prp\">Light</span>\n)\n\n<span class=\"cmt\">// Dropdown trigger with selected value</span>\n<span class=\"typ\">EBChip</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Sort by\"</span>,\n    <span class=\"prp\">selectedValue</span> = <span class=\"str\">\"Conservative first\"</span>,\n    <span class=\"prp\">style</span> = <span class=\"typ\">EBChipStyle</span>.<span class=\"prp\">Light</span>,\n    <span class=\"prp\">trailing</span> = <span class=\"typ\">EBChipTrailing</span>.<span class=\"prp\">Chevron</span>,\n    <span class=\"prp\">onClick</span> = { /* open dropdown */ }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Tap target",
        "ios": "32px height is below HIG 44pt — wrap in a 44pt-tall hit area",
        "android": "32dp height is below Material 48dp — expand touch target via <code>Modifier.minimumInteractiveComponentSize()</code>"
      },
      {
        "requirement": "Role",
        "ios": "<code>.accessibilityAddTraits(.isButton)</code>",
        "android": "Use <code>semantics { role = Role.Button }</code>"
      },
      {
        "requirement": "Close button label",
        "ios": "<code>.accessibilityLabel(\"Remove filter: \\(label)\")</code>",
        "android": "<code>contentDescription = \"Remove filter: $label\"</code>"
      },
      {
        "requirement": "Dropdown indicator",
        "ios": "<code>.accessibilityHint(\"Double-tap to change\")</code>",
        "android": "Announce chevron via role + state"
      },
      {
        "requirement": "Selected state",
        "ios": "<code>.accessibilityAddTraits(.isSelected)</code> for <code>style=filled</code>",
        "android": "<code>selected = true</code> in semantics for active filters"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use style=filled for applied/active filters, style=light for inactive filters and dropdown triggers, style=outline when the surface beneath is already light gray.",
        "dontText": "Mix filled and light chips in the same filter row without intent — it signals \"one filter is selected,\" so using both styles for unrelated reasons misleads the user."
      },
      {
        "doText": "Pair the close affordance with applied filters so users can remove them with a single tap.",
        "dontText": "Add a close icon to dropdown-trigger chips — the chevron already indicates the tap behavior; a close icon implies removal instead of picking."
      },
      {
        "doText": "Keep the chip label to one or two words. Use selectedValue to show the picked option separately.",
        "dontText": "Stretch chips to fill width — they're meant to fit their content. If a control needs full width, use a Button or Select Field instead."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic names: <code>container</code>, <code>Placeholder</code>, <code>Close</code>, <code>Chevron Down</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Split across two components. <code>with icon</code> uses yes/no. Dropdown uses <code>type=\"with active time\"</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors, radii, spacing, and typography bound to tokens."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to custom pill on iOS and <code>FilterChip</code>/<code>InputChip</code> on Android."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No pressed / disabled / error states. Selected is implied by <code>style=filled</code>."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Leading slot is a hardcoded 24px gray circle — should be a swappable Avatar/Icon instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Blocked by C2 consolidation."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 0,
      "description": "",
      "columns": [
        "Source",
        "Style",
        "Leading",
        "Trailing",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Filter",
            "Filled (primary)",
            "Avatar",
            "Close",
            "18336:22244"
          ]
        },
        {
          "cells": [
            "Filter",
            "Filled (primary)",
            "—",
            "—",
            "18336:22253"
          ]
        },
        {
          "cells": [
            "Filter",
            "Light",
            "Avatar",
            "Close",
            "18336:22257"
          ]
        },
        {
          "cells": [
            "Filter",
            "Light",
            "—",
            "—",
            "18336:22266"
          ]
        },
        {
          "cells": [
            "Filter",
            "Outline",
            "Avatar",
            "Close",
            "18336:22270"
          ]
        },
        {
          "cells": [
            "Filter",
            "Outline",
            "—",
            "—",
            "18336:22279"
          ]
        },
        {
          "cells": [
            "Filter w/ Dropdown",
            "Light",
            "—",
            "Chevron",
            "18336:22292"
          ]
        },
        {
          "cells": [
            "Filter w/ Dropdown",
            "Light (w/ selected value)",
            "—",
            "Chevron",
            "18336:22284"
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
      "header": "Initial Assessment · nodes 18336:22243 + 18336:22283",
      "rows": [
        {
          "body": "<strong>Assessed as Chip</strong> — Two Figma components (\"Filter\" with 6 variants, \"Filter with Dropdown\" with 2 variants) share the same pill anatomy. Recommended rename + consolidation into a single Chip component with semantic slot props.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Two-component split, mismatched schemas</strong> — Filter uses <code>type</code> + <code>with icon</code>. Dropdown uses <code>type=\"with active time\"</code>. Booleans are yes/no. Should consolidate to <code>style</code> / <code>leading</code> / <code>trailing</code> + optional <code>selectedValue</code>.\n          <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>No pressed/disabled/error states</strong> — Engineers must improvise these affordances.\n          <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Leading slot is hardcoded placeholder</strong> — 24px gray circle instead of a swappable Avatar/Icon instance.\n          <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Blocked by C2 rename + consolidation.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
