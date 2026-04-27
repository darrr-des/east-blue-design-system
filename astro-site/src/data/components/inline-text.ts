import type { ComponentData } from '../types';

export const inlineText: ComponentData = {
  "meta": {
    "slug": "inline-text",
    "name": "Inline Text",
    "node": "18652:71101",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18652-71101",
    "description": "A single-line text element used for inline labels, captions, or value pairs within a row.",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "verdict": {
      "kind": "restructure",
      "title": "Restructure — type enum hides 5 trailing-slot compositions",
      "text": "Same anti-pattern as Alert's <code>Full Width</code> and Generic Transaction Card's <code>type</code>. Replace the enum with orthogonal booleans (<code>hasCopy</code>, <code>hasDescription</code>, <code>hasTextLink</code>) plus a unified <code>trailing</code> slot so Badge can be instance-swapped instead of drawn inline. The component itself belongs — its four semantic color tokens (<code>label</code>, <code>label-value</code>, <code>description</code>, <code>label-link</code>) give it enough DS opinion to ship as <code>EBInlineText</code>, but behind a cleaner schema."
    }
  },
  "overview": {
    "inContextNote": "Inline Text is a composition primitive. You'll find stacks of it inside Generic Transaction Card's detail modal, Send Money confirmation screens, receipt summaries, and fee-breakdown list items. Rarely used standalone.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"itx-demo-preview\"><div class=\"eb-preview-itx\"><p class=\"eb-preview-itx__label\">Amount</p><p class=\"eb-preview-itx__value\">PHP 1,500.00</p></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><input type=\"text\" id=\"itx-ctrl-label\" class=\"demo-panel-select demo-panel-input\" value=\"Amount\" oninput=\"_itxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">value</span><input type=\"text\" id=\"itx-ctrl-value\" class=\"demo-panel-select demo-panel-input\" value=\"PHP 1,500.00\" oninput=\"_itxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"itx-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"Description goes here\" oninput=\"_itxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">cta</span><input type=\"text\" id=\"itx-ctrl-cta\" class=\"demo-panel-select demo-panel-input\" value=\"CTA\" oninput=\"_itxUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">badge</span><input type=\"text\" id=\"itx-ctrl-badge\" class=\"demo-panel-select demo-panel-input\" value=\"Label\" oninput=\"_itxUpdate()\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select id=\"itx-ctrl-type\" class=\"demo-panel-select\" onchange=\"_itxUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"with-clipboard\">with Clipboard</option><option value=\"with-badge\">with Badge</option><option value=\"with-description\">with Description</option><option value=\"with-text-link\">with Text Link</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Genuinely reused across transaction cards, modal summaries, and list items. A strong primitive."
      },
      {
        "name": "Self-contained",
        "rating": "warn",
        "note": "Binds tokens cleanly but draws its own Badge inline (information/light hardcoded) instead of instance-swapping from the canonical Badge component — parallel source of truth for badge styling."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "The <code>type</code> enum conflates two axes (trailing-slot content and sub-row content). <code>with Description</code> and <code>with Text Link</code> describe the second row; <code>with Clipboard</code> and <code>with Badge</code> describe the first. Merging them into one enum forces consumers to pick incompatible combinations."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Used as a stacking block inside larger components — good. But consumers can't freely combine (e.g. clipboard + description) because the enum makes those permutations unrepresentable."
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
    "resolved": [],
    "open": [
      {
        "headline": "<code>type</code> enum conflates two axes and hides 5 different layouts.",
        "body": "<code>with Clipboard</code> and <code>with Badge</code> describe the trailing slot, while <code>with Description</code> and <code>with Text Link</code> describe a second row. As one enum, the combinations \"clipboard + description\" and \"badge + text link\" are unrepresentable — even though real screens need them. Split into orthogonal booleans (<code>hasCopy</code>, <code>hasDescription</code>, <code>hasTextLink</code>) with a unified <code>trailing</code> slot.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Enum values mix concerns and use \"with X\" phrasing.",
        "body": "<code>with Clipboard</code> / <code>with Badge</code> / <code>with Description</code> / <code>with Text Link</code> all read as feature toggles (\"with feature X\"), which reinforces the anti-pattern of the previous bullet. Under the proposed schema, these become boolean props named by what they ARE, not what they add.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Badge variant is drawn inline, not instance-swapped.",
        "body": "The <code>with Badge</code> variant hardcodes <code>main/badge/information/light/background</code> and <code>main/badge/information/light/label</code> — duplicating the Badge component's styling rules. If Badge changes its hover state, border, or typography, Inline Text silently drifts. Replace with an instance swap on a trailing slot.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Copy icon appears to be drawn inline rather than a DS Icon instance.",
        "body": "The <code>Copy</code> node is a local instance, but its child layers (<code>shape_half</code>, <code>shape_full</code>) suggest a one-off vector rather than a canonical icon swapped from the DS icon library. Confirm the source and, if necessary, replace with a swappable <code>icon</code> prop so consumers can choose clipboard / share / refresh trailing actions.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No pressed state on the copy action.",
        "body": "The clipboard variant is the only interactive part of Inline Text and it ships with no pressed tint, no focus ring, and no success toast hook. Add a pressed state on the icon and document the success-toast convention.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked on the slot / boolean restructure — mapping today's single <code>type</code> enum would bake the anti-pattern into the native API.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Replace <code>type</code> with orthogonal booleans + a trailing slot.",
        "body": "Target schema: <code>label: String</code>, <code>trailing: value(String) | badge(Badge) | custom</code>, <code>hasCopy: Bool</code>, <code>hasDescription: Bool</code>, <code>hasTextLink: Bool</code>, <code>description?: String</code>, <code>ctaLabel?: String</code>. This unlocks valid combinations today's enum forbids (copy + description, badge + link) without adding any net new variants.",
        "tag": "Property"
      },
      {
        "headline": "Instance-swap Badge instead of drawing it inline.",
        "body": "Expose a <code>trailing</code> slot that accepts a Badge instance. Removes the parallel badge-styling source, keeps Inline Text honest as a layout primitive.",
        "tag": "Composition"
      },
      {
        "headline": "Rename the clipboard prop to describe the action.",
        "body": "<code>hasCopy</code> reads better than today's <code>with Clipboard</code> — \"copy\" is the action, \"clipboard\" is the target. Provide an <code>onCopy</code> callback in the native API and document the success-toast convention.",
        "tag": "Rename"
      },
      {
        "headline": "Confirm the copy icon is a DS Icon instance.",
        "body": "If it's a local one-off, replace with a swapped DS Icon so the whole family shares one icon source. While at it, expose <code>trailingIcon</code> as a slot so screens can use share / external-link / refresh instead of copy.",
        "tag": "Slot"
      },
      {
        "headline": "Add a pressed state on the copy icon.",
        "body": "Subtle tint change (<code>icon</code> → <code>icon-pressed</code>) plus a documented toast (\"Copied to clipboard\") on tap. This is the only interactive affordance in Inline Text — it needs feedback.",
        "tag": "State"
      },
      {
        "headline": "Document the stacking recipe.",
        "body": "Most real usage is a vertical stack of 3–6 Inline Text rows inside a modal or card (fee breakdowns, transaction details). Add a \"Receipt block\" recipe page showing the stack spacing (8 px gap, 1 px divider optional) so consumers don't reinvent it.",
        "tag": "Docs"
      },
      {
        "headline": "Reconcile typography with Generic Transaction Card's metadata.",
        "body": "Inline Text's description row uses BarkAda Semibold 12/18. Generic Transaction Card's date metadata uses the same font but a different line-height bucket. Align captions family-wide so receipt text reads consistently.",
        "tag": "Family"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "default-—-label-+-value",
        "title": "Default — label + value",
        "node": "21:138493",
        "description": "The baseline row. Leading label, trailing value, 25 px tall, full-width auto-layout.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"itx-spec-1\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "type",
                "value": "Default",
                "mono": true
              },
              {
                "key": "label",
                "value": "\"Label\"",
                "mono": true
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
            "rows": [
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Label token",
                "value": "inline-text/color/label",
                "mono": true
              },
              {
                "key": "Value",
                "value": "#445C85",
                "mono": true
              },
              {
                "key": "Value token",
                "value": "inline-text/color/label-value",
                "mono": true
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "mono": true
              },
              {
                "key": "Description token",
                "value": "inline-text/color/description",
                "mono": true
              },
              {
                "key": "Link",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Link token",
                "value": "inline-text/color/label-link",
                "mono": true
              },
              {
                "key": "Icon",
                "value": "#445C85",
                "mono": true
              },
              {
                "key": "Icon token",
                "value": "inline-text/color/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
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
              },
              {
                "key": "Value",
                "value": "Same as label, opacity 0.80 (via color token)",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBInlineText</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"PHP 1,500.00\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBInlineText</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"PHP 1,500.00\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "with-clipboard-—-value-+-copy-icon",
        "title": "With Clipboard — value + copy icon",
        "node": "21:138497",
        "description": "Adds a 24 × 24 copy icon to the right of the value. Tapping the icon copies the value to clipboard. Icon uses <code>inline-text/icon</code> token.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"itx-spec-2\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Has clipboard",
                "value": "Yes",
                "mono": true
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
            "rows": [
              {
                "key": "Label color",
                "value": "#3C4A5C",
                "mono": true
              },
              {
                "key": "Label color token",
                "value": "main/inline-text/label",
                "mono": true
              },
              {
                "key": "Value color",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Value color token",
                "value": "main/inline-text/value",
                "mono": true
              },
              {
                "key": "Icon color",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Icon color token",
                "value": "main/inline-text/icon",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
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
        "title": "With Badge — label + trailing badge",
        "node": "21:138503",
        "description": "Replaces the value cell with a Badge pill. Used on voucher / discount rows. Today the badge is drawn inline (information/light hardcoded) rather than instance-swapped from the Badge component.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"itx-spec-3\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Trailing slot",
                "value": "Badge",
                "mono": true
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
            "rows": [
              {
                "key": "Label color",
                "value": "#3C4A5C",
                "mono": true
              },
              {
                "key": "Label color token",
                "value": "main/inline-text/label",
                "mono": true
              },
              {
                "key": "Badge bg",
                "value": "#E8F1FF",
                "mono": true
              },
              {
                "key": "Badge bg token",
                "value": "main/badge/brand/bg",
                "mono": true
              },
              {
                "key": "Badge label",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Badge label token",
                "value": "main/badge/brand/label",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
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
        "title": "With Description",
        "node": "21:138506",
        "description": "Adds a second row below the label/value with a description caption. Description uses BarkAda Semibold 12/18.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"itx-spec-4\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Has description",
                "value": "Yes",
                "mono": true
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
            "rows": [
              {
                "key": "Label color",
                "value": "#3C4A5C",
                "mono": true
              },
              {
                "key": "Label color token",
                "value": "main/inline-text/label",
                "mono": true
              },
              {
                "key": "Value color",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Value color token",
                "value": "main/inline-text/value",
                "mono": true
              },
              {
                "key": "Description color",
                "value": "#3C4A5C",
                "mono": true
              },
              {
                "key": "Description color token",
                "value": "main/inline-text/description",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
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
        "title": "With Text Link",
        "node": "21:138512",
        "description": "Adds a trailing link (CTA) to the description row. Link uses <code>inline-text/label-link</code> token.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"itx-spec-5\"></div>",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Trailing slot",
                "value": "TextLink",
                "mono": true
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
            "rows": [
              {
                "key": "Label color",
                "value": "#3C4A5C",
                "mono": true
              },
              {
                "key": "Label color token",
                "value": "main/inline-text/label",
                "mono": true
              },
              {
                "key": "Value color",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Value color token",
                "value": "main/inline-text/value",
                "mono": true
              },
              {
                "key": "Link color",
                "value": "#005CE5",
                "mono": true
              },
              {
                "key": "Link color token",
                "value": "main/text-link/label",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
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
    "colorsTables": []
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
