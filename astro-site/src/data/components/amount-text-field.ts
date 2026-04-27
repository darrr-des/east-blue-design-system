import type { ComponentData } from '../types';

export const amountTextField: ComponentData = {
  "meta": {
    "slug": "amount-text-field",
    "name": "Amount Text Field",
    "node": "152:48122",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=152-48122",
    "description": "A display-style numeric input for PHP amount entry in Send Money, Cash-In, and top-up flows. Sits on a single underline — Large is a 53px headline, Default prefixes a peso glyph with a 35px amount.",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Form Elements",
    "verdict": {
      "kind": "restructure",
      "title": "Restructure before handoff",
      "text": "Peso glyph is a raster image (C6), state coverage is incomplete — no Active/Disabled (C5), and <code>label=yes/no</code> needs Boolean naming (C2). Decide whether to keep as a standalone sibling or fold into Input Field as <code>type: .currency</code>."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns (Send Money, Cash-In, Top-up).",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"5\" width=\"100\" height=\"70\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <text x=\"30\" y=\"18\" font-size=\"6\" fill=\"currentColor\" opacity=\".3\" font-family=\"system-ui\">Send Money</text>\n          <text x=\"34\" y=\"36\" font-size=\"5\" fill=\"currentColor\" opacity=\".4\" font-family=\"system-ui\">Enter Amount</text>\n          <text x=\"30\" y=\"52\" font-size=\"14\" fill=\"currentColor\" opacity=\".7\" font-family=\"system-ui\" font-weight=\"700\">₱500.00</text>\n          <line x1=\"24\" y1=\"58\" x2=\"96\" y2=\"58\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".3\"></line>\n          <text x=\"34\" y=\"68\" font-size=\"4\" fill=\"currentColor\" opacity=\".4\" font-family=\"system-ui\">Maximum ₱50,000</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"amt-demo-preview\"><svg width=\"360\" height=\"184\" viewBox=\"0 0 360 184\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"38\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"0.9\" letter-spacing=\"0.25\">Add Your Label Here</text><text x=\"180\" y=\"114\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"53\" font-weight=\"600\" fill=\"#0A2757\">500.00</text><line x1=\"24\" y1=\"134\" x2=\"336\" y2=\"134\" stroke=\"#445C85\" stroke-width=\"1\"></line><text x=\"180\" y=\"164\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\">Add your subtext here</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">size</span><select class=\"demo-panel-select\" onchange=\"_amtDemo.size=this.value;updateAmountFieldDemo()\"><option value=\"Large\" selected=\"\">Large</option><option value=\"Default\">Default</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select class=\"demo-panel-select\" onchange=\"_amtDemo.state=this.value;updateAmountFieldDemo()\"><option value=\"Default\">Default</option><option value=\"Filled\" selected=\"\">Filled</option><option value=\"Error\">Error</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><select class=\"demo-panel-select\" onchange=\"_amtDemo.label=this.value;updateAmountFieldDemo()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Works for any PHP amount entry. Peso glyph is hard-coded — no currency parameterization for a multi-country future. Large variant has no peso glyph at all, which is an inconsistency rather than a deliberate option."
      },
      {
        "name": "Self-contained",
        "rating": "partial",
        "note": "Carries its own typography, border, and subtext. But only 3 states (Default, Filled, Error) — missing Active (focused) and Disabled states that every other Form Element defines."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "<code>label=yes/no</code> instead of <code>true/false</code> — doesn't match <code>isFilled=true/false</code> on sibling fields. State set also differs from Input Field's 4-state model (Default/Active/Error/Disabled)."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Appears as its own record and as a type inside Dropdown (\"Amount\" variant) and adjacent fields. Doesn't compose Input Field's primitive — keeps a separate anatomy, which duplicates interaction logic in native code."
      }
    ],
    "behavior": [
      {
        "state": "Default (empty)",
        "ios": "yes",
        "android": "yes",
        "property": "state=Default",
        "notes": "Shows <code>0.00</code> in placeholder color #90A8D0. Border #ADBDDC."
      },
      {
        "state": "Filled",
        "ios": "yes",
        "android": "yes",
        "property": "state=Filled",
        "notes": "Amount typed; navy #0A2757 text, border darkens to #445C85."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "state=Error",
        "notes": "Red #D61B2C for amount, border, and subtext. Subtext becomes the validation message."
      },
      {
        "state": "Active (focused)",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Missing variant. Native field will show caret + keyboard; no DS-defined visual affordance."
      },
      {
        "state": "Disabled",
        "ios": "no",
        "android": "no",
        "property": "—",
        "notes": "Missing variant. Top-up confirmations and locked amounts have no canonical appearance."
      }
    ],
    "resolved": [
      {
        "body": "None yet — initial assessment."
      }
    ],
    "open": [
      {
        "headline": "Peso Sign glyph is a raster image.",
        "body": "The ₱ mark renders via an <code>&lt;img&gt;</code> reference (<code>imgShapeFull</code>) rather than an instance of the <code>Peso Sign - Proxima</code> vector icon. Raster assets can't be recolored with tokens, scale poorly on high-DPI screens, and block Code Connect asset mapping.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Missing Active (focused) state.",
        "body": "The component exposes only Default / Filled / Error. Native keyboards surface a caret on focus, but the DS has no defined focused-border or amount color — devs have to invent one per flow.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Missing Disabled state.",
        "body": "Amount confirmations, locked top-up amounts, and review screens use an inert version of this field. Without a <code>state=Disabled</code> variant there's no single source of truth for its appearance.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "<code>label</code> property uses <code>yes/no</code> instead of <code>true/false</code>.",
        "body": "Boolean naming. <code>label=Yes</code> doesn't map cleanly to Swift <code>Bool</code> / Kotlin <code>Boolean</code>, and it diverges from sibling fields that were already migrated to <code>true/false</code> (Input Field's <code>isFilled</code>). Should also be renamed to <code>hasLabel</code> or <code>showLabel</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Large variant drops the peso glyph.",
        "body": "When <code>size=Large</code> the ₱ is removed entirely — the amount is just <code>500.00</code>. If this is intentional it's under-documented; if not, it's an inconsistency that users and devs will stumble on. No property controls it, so it can't be opted into.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked by the structural issues above — register after peso glyph is vectorized, states are added, and <code>label</code> is migrated to Boolean.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Replace the raster peso with a vector instance of <code>Peso Sign - Proxima</code>.",
        "body": "That library component already exists and is sized per font tier — swap the current <code>&lt;img&gt;</code> for an instance-swap slot so color can bind to <code>main/amount-text-field/{state}/icon-currency</code> and scale at any DPR.",
        "tag": "Asset"
      },
      {
        "headline": "Add <code>state=Active</code> and <code>state=Disabled</code> variants.",
        "body": "Extends the enum to the same 4-state model used by Input Field (Default / Active / Error / Disabled) plus a <code>Filled</code> display-only state, or collapse <code>Filled</code> into a derived-from-content view. Either way, lock the state axis to match siblings.",
        "tag": "State"
      },
      {
        "headline": "Migrate <code>label=yes/no</code> to a Boolean <code>showLabel=true/false</code>.",
        "body": "Matches the canonical naming used by Input Field's <code>isFilled</code> and unlocks direct Code Connect mapping to Swift <code>Bool</code> / Kotlin <code>Boolean</code>. Consider splitting <code>subtext</code> out as its own Boolean so error-copy and helper-copy can be toggled independently of label.",
        "tag": "Rename"
      },
      {
        "headline": "Expose leading and trailing slots for the currency mark and unit suffix.",
        "body": "Hard-coding the peso glyph ties the component to PHP. A <code>leadingCurrency</code> slot (₱, $, €) and an optional <code>trailingUnit</code> slot (\"PHP\") future-proofs the component for multi-currency flows without a per-country fork.",
        "tag": "Slot"
      },
      {
        "headline": "Family decision — fold into Input Field as <code>type: .currency</code>, or keep as EBAmountTextField sibling.",
        "body": "Option A: Keep separate — Amount Text Field stays a display-style sibling of Input Field with its own underline anatomy; share tokens via a common text-field token tier. Option B (recommended): Fold into Input Field as <code>EBInputField(type: .currency, …)</code>, using SwiftUI's <code>TextField(value:format:.currency(code:))</code> + <code>.keyboardType(.decimalPad)</code> and Compose's <code>OutlinedTextField(keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Decimal), leadingIcon = { Text(\"₱\") })</code>. Option B eliminates the duplicate peso glyph instance inside Dropdown's \"Amount\" variant and the Recipient Field's currency-prefix case.",
        "tag": "Family"
      },
      {
        "headline": "Document locale and keyboard behavior in the component.",
        "body": "Decimal separator, thousands separator, minimum/maximum, and zero-padding rules are product concerns today. Adding a short <code>Docs</code> note in Figma (or in this assessment's Code tab) gives implementers a single source of truth.",
        "tag": "Docs"
      }
    ]
  },
  "style": {
    "specCards": [
      {
        "cardKey": "amt-spec-large-filled",
        "title": "Large · Filled",
        "node": "152:48113",
        "description": "53px amount headline, filled value, dark navy. No peso glyph — the Large tier is used as a hero-amount display.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Size",
                "value": "Large",
                "mono": false
              },
              {
                "key": "State",
                "value": "Filled",
                "mono": false
              },
              {
                "key": "Label",
                "value": "true",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Border (underline)",
                "value": "#445C85",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "amount-text-field/filled/border",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Amount",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Amount token",
                "value": "amount-text-field/filled/label-amount",
                "mono": true
              },
              {
                "key": "Subtext",
                "value": "#0A2757",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "fill parent",
                "mono": true
              },
              {
                "key": "Height",
                "value": "hug content",
                "mono": true
              },
              {
                "key": "Label height",
                "value": "18px",
                "mono": true
              },
              {
                "key": "Amount size",
                "value": "53px",
                "mono": true
              },
              {
                "key": "Peso glyph",
                "value": "hidden (Large tier)",
                "mono": true
              },
              {
                "key": "Underline",
                "value": "1px bottom border",
                "mono": true
              },
              {
                "key": "Subtext height",
                "value": "14px / 16 line",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Large",
                "mono": true
              },
              {
                "key": "Amount style",
                "value": "Primary/Headlines/Epic",
                "mono": true
              },
              {
                "key": "Amount font",
                "value": "Proxima Soft Semibold",
                "mono": true
              },
              {
                "key": "Amount size/lh",
                "value": "53px / 58px &#183; 0",
                "mono": true
              },
              {
                "key": "Subtext style",
                "value": "Primary/Multi-line Label/Light/Small",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>      <span class=\"syn-cmt\">// e.g. 500.00</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.large</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>            <span class=\"syn-cmt\">// e.g. \"500.00\"</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Large</span>\n<span class=\"syn-punc\">)</span></code>",
        "previewHtml": "<svg width=\"360\" height=\"184\" viewBox=\"0 0 360 184\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"38\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"0.9\" letter-spacing=\"0.25\">Add Your Label Here</text><text x=\"180\" y=\"114\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"53\" font-weight=\"600\" fill=\"#0A2757\">500.00</text><line x1=\"24\" y1=\"134\" x2=\"336\" y2=\"134\" stroke=\"#445C85\" stroke-width=\"1\"></line><text x=\"180\" y=\"164\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\">Add your subtext here</text></svg>"
      },
      {
        "cardKey": "amt-spec-large-default",
        "title": "Large · Default",
        "node": "152:48116",
        "description": "Empty state at 53px, muted placeholder color. Used before the user types in hero amount screens.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Size",
                "value": "Large",
                "mono": false
              },
              {
                "key": "State",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Label",
                "value": "true",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Border (underline)",
                "value": "#ADBDDC",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "amount-text-field/default/border",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Amount",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Amount token",
                "value": "amount-text-field/default/label-amount",
                "mono": true
              },
              {
                "key": "Subtext",
                "value": "#0A2757",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "fill parent",
                "mono": true
              },
              {
                "key": "Height",
                "value": "hug content",
                "mono": true
              },
              {
                "key": "Label height",
                "value": "18px",
                "mono": true
              },
              {
                "key": "Amount size",
                "value": "53px",
                "mono": true
              },
              {
                "key": "Peso glyph",
                "value": "hidden (Large tier)",
                "mono": true
              },
              {
                "key": "Underline",
                "value": "1px bottom border",
                "mono": true
              },
              {
                "key": "Subtext height",
                "value": "14px / 16 line",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Large",
                "mono": true
              },
              {
                "key": "Amount style",
                "value": "Primary/Headlines/Epic",
                "mono": true
              },
              {
                "key": "Amount font",
                "value": "Proxima Soft Semibold",
                "mono": true
              },
              {
                "key": "Amount size/lh",
                "value": "53px / 58px &#183; 0",
                "mono": true
              },
              {
                "key": "Subtext style",
                "value": "Primary/Multi-line Label/Light/Small",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.large</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Large</span>\n<span class=\"syn-punc\">)</span></code>",
        "previewHtml": "<svg width=\"360\" height=\"184\" viewBox=\"0 0 360 184\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"38\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"0.9\" letter-spacing=\"0.25\">Add Your Label Here</text><text x=\"180\" y=\"114\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"53\" font-weight=\"600\" fill=\"#90A8D0\">0.00</text><line x1=\"24\" y1=\"134\" x2=\"336\" y2=\"134\" stroke=\"#ADBDDC\" stroke-width=\"1\"></line><text x=\"180\" y=\"164\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\">Add your subtext here</text></svg>"
      },
      {
        "cardKey": "amt-spec-large-error",
        "title": "Large · Error",
        "node": "152:48120",
        "description": "Validation error — amount, border, and subtext all tint red #D61B2C. Subtext is the error message slot.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Size",
                "value": "Large",
                "mono": false
              },
              {
                "key": "State",
                "value": "Error",
                "mono": false
              },
              {
                "key": "Label",
                "value": "true",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Border (underline)",
                "value": "#D61B2C",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "amount-text-field/error/border",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Amount",
                "value": "#D61B2C",
                "mono": true
              },
              {
                "key": "Amount token",
                "value": "amount-text-field/error/label-amount",
                "mono": true
              },
              {
                "key": "Subtext",
                "value": "#D61B2C",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "fill parent",
                "mono": true
              },
              {
                "key": "Height",
                "value": "hug content",
                "mono": true
              },
              {
                "key": "Label height",
                "value": "18px",
                "mono": true
              },
              {
                "key": "Amount size",
                "value": "53px",
                "mono": true
              },
              {
                "key": "Peso glyph",
                "value": "hidden (Large tier)",
                "mono": true
              },
              {
                "key": "Underline",
                "value": "1px bottom border",
                "mono": true
              },
              {
                "key": "Subtext height",
                "value": "14px / 16 line",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Large",
                "mono": true
              },
              {
                "key": "Amount style",
                "value": "Primary/Headlines/Epic",
                "mono": true
              },
              {
                "key": "Amount font",
                "value": "Proxima Soft Semibold",
                "mono": true
              },
              {
                "key": "Amount size/lh",
                "value": "53px / 58px &#183; 0",
                "mono": true
              },
              {
                "key": "Subtext style",
                "value": "Primary/Multi-line Label/Light/Small",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    subtext<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Enter a valid amount\"</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.large</span><span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    subtext <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Enter a valid amount\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Large</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Error</span>\n<span class=\"syn-punc\">)</span></code>",
        "previewHtml": "<svg width=\"360\" height=\"184\" viewBox=\"0 0 360 184\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"38\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"0.9\" letter-spacing=\"0.25\">Add Your Label Here</text><text x=\"180\" y=\"114\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"53\" font-weight=\"600\" fill=\"#D61B2C\">500.00</text><line x1=\"24\" y1=\"134\" x2=\"336\" y2=\"134\" stroke=\"#D61B2C\" stroke-width=\"1\"></line><text x=\"180\" y=\"164\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#D61B2C\" letter-spacing=\"0.25\">Add your subtext here</text></svg>"
      },
      {
        "cardKey": "amt-spec-default-filled",
        "title": "Default · Filled",
        "node": "152:48121",
        "description": "35px amount with leading peso glyph. Standard send/pay screens. Peso glyph is currently a raster image (see C6 open issue).",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Size",
                "value": "Default",
                "mono": false
              },
              {
                "key": "State",
                "value": "Filled",
                "mono": false
              },
              {
                "key": "Label",
                "value": "true",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Border (underline)",
                "value": "#445C85",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "amount-text-field/filled/border",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Amount",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Amount token",
                "value": "amount-text-field/filled/label-amount",
                "mono": true
              },
              {
                "key": "Peso glyph",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Subtext",
                "value": "#0A2757",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "fill parent",
                "mono": true
              },
              {
                "key": "Height",
                "value": "hug content",
                "mono": true
              },
              {
                "key": "Label height",
                "value": "18px",
                "mono": true
              },
              {
                "key": "Amount size",
                "value": "35px",
                "mono": true
              },
              {
                "key": "Peso glyph",
                "value": "present (leading)",
                "mono": true
              },
              {
                "key": "Underline",
                "value": "1px bottom border",
                "mono": true
              },
              {
                "key": "Subtext height",
                "value": "14px / 16 line",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Large",
                "mono": true
              },
              {
                "key": "Amount style",
                "value": "Primary/Headlines/Spotlight",
                "mono": true
              },
              {
                "key": "Amount font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Amount size/lh",
                "value": "35px / 38px &#183; 0",
                "mono": true
              },
              {
                "key": "Subtext style",
                "value": "Primary/Multi-line Label/Light/Small",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>      <span class=\"syn-cmt\">// e.g. 500.00</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>            <span class=\"syn-cmt\">// e.g. \"500.00\"</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Default</span>\n<span class=\"syn-punc\">)</span></code>",
        "previewHtml": "<svg width=\"360\" height=\"165\" viewBox=\"0 0 360 165\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"38\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"0.9\" letter-spacing=\"0.25\">Add Your Label Here</text><text x=\"124\" y=\"100\" font-family=\"Proxima Soft, system-ui\" font-size=\"32\" font-weight=\"700\" fill=\"#0A2757\">₱</text><text x=\"150\" y=\"100\" font-family=\"Proxima Soft, system-ui\" font-size=\"35\" font-weight=\"700\" fill=\"#0A2757\">500.00</text><line x1=\"24\" y1=\"114\" x2=\"336\" y2=\"114\" stroke=\"#445C85\" stroke-width=\"1\"></line><text x=\"180\" y=\"144\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\">Add your subtext here</text></svg>"
      },
      {
        "cardKey": "amt-spec-default-default",
        "title": "Default · Default",
        "node": "152:48114",
        "description": "Empty state — both peso glyph and <code>0.00</code> render in the placeholder tint #90A8D0 / #D7E0EF.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Size",
                "value": "Default",
                "mono": false
              },
              {
                "key": "State",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Label",
                "value": "true",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Border (underline)",
                "value": "#ADBDDC",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "amount-text-field/default/border",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Amount",
                "value": "#90A8D0",
                "mono": true
              },
              {
                "key": "Amount token",
                "value": "amount-text-field/default/label-amount",
                "mono": true
              },
              {
                "key": "Peso glyph",
                "value": "#D7E0EF",
                "mono": true
              },
              {
                "key": "Subtext",
                "value": "#0A2757",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "fill parent",
                "mono": true
              },
              {
                "key": "Height",
                "value": "hug content",
                "mono": true
              },
              {
                "key": "Label height",
                "value": "18px",
                "mono": true
              },
              {
                "key": "Amount size",
                "value": "35px",
                "mono": true
              },
              {
                "key": "Peso glyph",
                "value": "present (leading)",
                "mono": true
              },
              {
                "key": "Underline",
                "value": "1px bottom border",
                "mono": true
              },
              {
                "key": "Subtext height",
                "value": "14px / 16 line",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Large",
                "mono": true
              },
              {
                "key": "Amount style",
                "value": "Primary/Headlines/Spotlight",
                "mono": true
              },
              {
                "key": "Amount font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Amount size/lh",
                "value": "35px / 38px &#183; 0",
                "mono": true
              },
              {
                "key": "Subtext style",
                "value": "Primary/Multi-line Label/Light/Small",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Default</span>\n<span class=\"syn-punc\">)</span></code>",
        "previewHtml": "<svg width=\"360\" height=\"165\" viewBox=\"0 0 360 165\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"38\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"0.9\" letter-spacing=\"0.25\">Add Your Label Here</text><text x=\"124\" y=\"100\" font-family=\"Proxima Soft, system-ui\" font-size=\"32\" font-weight=\"700\" fill=\"#D7E0EF\">₱</text><text x=\"150\" y=\"100\" font-family=\"Proxima Soft, system-ui\" font-size=\"35\" font-weight=\"700\" fill=\"#90A8D0\">0.00</text><line x1=\"24\" y1=\"114\" x2=\"336\" y2=\"114\" stroke=\"#ADBDDC\" stroke-width=\"1\"></line><text x=\"180\" y=\"144\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\">Add your subtext here</text></svg>"
      },
      {
        "cardKey": "amt-spec-default-error",
        "title": "Default · Error",
        "node": "152:48118",
        "description": "Validation failed — peso glyph, amount, border, and subtext all tint red #D61B2C.",
        "sections": [
          {
            "label": "Properties",
            "rows": [
              {
                "key": "Size",
                "value": "Default",
                "mono": false
              },
              {
                "key": "State",
                "value": "Error",
                "mono": false
              },
              {
                "key": "Label",
                "value": "true",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "rows": [
              {
                "key": "Border (underline)",
                "value": "#D61B2C",
                "mono": true
              },
              {
                "key": "Border token",
                "value": "amount-text-field/error/border",
                "mono": true
              },
              {
                "key": "Label",
                "value": "#0A2757",
                "mono": true
              },
              {
                "key": "Amount",
                "value": "#D61B2C",
                "mono": true
              },
              {
                "key": "Amount token",
                "value": "amount-text-field/error/label-amount",
                "mono": true
              },
              {
                "key": "Peso glyph",
                "value": "#D61B2C",
                "mono": true
              },
              {
                "key": "Subtext",
                "value": "#D61B2C",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "rows": [
              {
                "key": "Width",
                "value": "fill parent",
                "mono": true
              },
              {
                "key": "Height",
                "value": "hug content",
                "mono": true
              },
              {
                "key": "Label height",
                "value": "18px",
                "mono": true
              },
              {
                "key": "Amount size",
                "value": "35px",
                "mono": true
              },
              {
                "key": "Peso glyph",
                "value": "present (leading)",
                "mono": true
              },
              {
                "key": "Underline",
                "value": "1px bottom border",
                "mono": true
              },
              {
                "key": "Subtext height",
                "value": "14px / 16 line",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Large",
                "mono": true
              },
              {
                "key": "Amount style",
                "value": "Primary/Headlines/Spotlight",
                "mono": true
              },
              {
                "key": "Amount font",
                "value": "Proxima Soft Bold",
                "mono": true
              },
              {
                "key": "Amount size/lh",
                "value": "35px / 38px &#183; 0",
                "mono": true
              },
              {
                "key": "Subtext style",
                "value": "Primary/Multi-line Label/Light/Small",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    subtext<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Enter a valid amount\"</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    subtext <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Enter a valid amount\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Default</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Error</span>\n<span class=\"syn-punc\">)</span></code>",
        "previewHtml": "<svg width=\"360\" height=\"165\" viewBox=\"0 0 360 165\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"38\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"0.9\" letter-spacing=\"0.25\">Add Your Label Here</text><text x=\"124\" y=\"100\" font-family=\"Proxima Soft, system-ui\" font-size=\"32\" font-weight=\"700\" fill=\"#D61B2C\">₱</text><text x=\"150\" y=\"100\" font-family=\"Proxima Soft, system-ui\" font-size=\"35\" font-weight=\"700\" fill=\"#D61B2C\">500.00</text><line x1=\"24\" y1=\"114\" x2=\"336\" y2=\"114\" stroke=\"#D61B2C\" stroke-width=\"1\"></line><text x=\"180\" y=\"144\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#D61B2C\" letter-spacing=\"0.25\">Add your subtext here</text></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "All colors bind to the <code>main/amount-text-field/{state}/{role}</code> token family. No variable modes, so the table is a flat state matrix.",
        "columns": [
          "DEFAULT",
          "FILLED",
          "ERROR"
        ],
        "rows": [
          {
            "role": "Border (underline)",
            "token": "amount-text-field/{state}/border",
            "values": [
              "#ADBDDC",
              "#445C85",
              "#D61B2C"
            ]
          },
          {
            "role": "Label (top)",
            "token": "amount-text-field/{state}/label",
            "values": [
              "#0A2757",
              "#0A2757",
              "#0A2757"
            ]
          },
          {
            "role": "Amount (body)",
            "token": "amount-text-field/{state}/label-amount",
            "values": [
              "#90A8D0",
              "#0A2757",
              "#D61B2C"
            ]
          },
          {
            "role": "Peso glyph",
            "token": "amount-text-field/{state}/icon-currency",
            "values": [
              "#D7E0EF",
              "#0A2757",
              "#D61B2C"
            ]
          },
          {
            "role": "Subtext",
            "token": "amount-text-field/{state}/subtext",
            "values": [
              "#0A2757",
              "#0A2757",
              "#D61B2C"
            ]
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Font",
          "Size",
          "Line-height",
          "Tracking"
        ],
        "rows": [
          {
            "role": "Label (top)",
            "token": "Primary/Label/Light/Large",
            "values": [
              "Proxima Soft Semibold",
              "18px",
              "18px",
              "0.25"
            ]
          },
          {
            "role": "Amount — Large",
            "token": "Primary/Headlines/Epic",
            "values": [
              "Proxima Soft Semibold",
              "53px",
              "58px",
              "0"
            ]
          },
          {
            "role": "Amount — Default",
            "token": "Primary/Headlines/Spotlight",
            "values": [
              "Proxima Soft Bold",
              "35px",
              "38px",
              "0"
            ]
          },
          {
            "role": "Subtext",
            "token": "Primary/Multi-line Label/Light/Small",
            "values": [
              "Proxima Soft Semibold",
              "14px",
              "16px",
              "0.25"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:form-elements:1.0.0\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.form.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "size = Large / Default",
          "swift": ".controlSize(.large / .regular)",
          "compose": "size = EBAmountSize.Large / Default"
        },
        {
          "figma": "state = Default",
          "swift": "—",
          "compose": "—"
        },
        {
          "figma": "state = Filled",
          "swift": "Derived from <code>value &gt; 0</code>",
          "compose": "Derived from <code>value &gt; 0</code>"
        },
        {
          "figma": "state = Error",
          "swift": ".ebError(true)",
          "compose": "isError = true"
        },
        {
          "figma": "label = yes / no",
          "swift": "label: String?",
          "compose": "label: String?"
        },
        {
          "figma": "subtext (copy)",
          "swift": "subtext: String?",
          "compose": "subtext: String?"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/FormElements/EBAmountTextField.swift",
        "compose": "android/components/form/EBAmountTextField.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default (size=Default)",
        "swift": "<span class=\"typ\">EBAmountTextField</span>(<span class=\"prp\">value</span>: $amount, <span class=\"prp\">label</span>: <span class=\"str\">\"Add Your Label Here\"</span>, <span class=\"prp\">subtext</span>: <span class=\"str\">\"Add your subtext here\"</span>)\n    .<span class=\"fn\">keyboardType</span>(.<span class=\"prp\">decimalPad</span>)",
        "compose": "<span class=\"typ\">EBAmountTextField</span>(\n    <span class=\"prp\">value</span> = amount,\n    <span class=\"prp\">onValueChange</span> = { amount = it },\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Add Your Label Here\"</span>,\n    <span class=\"prp\">subtext</span> = <span class=\"str\">\"Add your subtext here\"</span>,\n    <span class=\"prp\">keyboardOptions</span> = <span class=\"typ\">KeyboardOptions</span>(<span class=\"prp\">keyboardType</span> = <span class=\"typ\">KeyboardType</span>.<span class=\"prp\">Decimal</span>)\n)"
      },
      {
        "subheading": "Large (hero amount)",
        "swift": "<span class=\"typ\">EBAmountTextField</span>(<span class=\"prp\">value</span>: $amount)\n    .<span class=\"fn\">ebAmountSize</span>(.<span class=\"prp\">large</span>)\n    .<span class=\"fn\">keyboardType</span>(.<span class=\"prp\">decimalPad</span>)",
        "compose": "<span class=\"typ\">EBAmountTextField</span>(\n    <span class=\"prp\">value</span> = amount,\n    <span class=\"prp\">onValueChange</span> = { amount = it },\n    <span class=\"prp\">size</span> = <span class=\"typ\">EBAmountSize</span>.<span class=\"prp\">Large</span>,\n    <span class=\"prp\">keyboardOptions</span> = <span class=\"typ\">KeyboardOptions</span>(<span class=\"prp\">keyboardType</span> = <span class=\"typ\">KeyboardType</span>.<span class=\"prp\">Decimal</span>)\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"typ\">EBAmountTextField</span>(<span class=\"prp\">value</span>: $amount, <span class=\"prp\">subtext</span>: <span class=\"str\">\"How much do you want to save?\"</span>)\n    .<span class=\"fn\">ebError</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBAmountTextField</span>(\n    <span class=\"prp\">value</span> = amount,\n    <span class=\"prp\">onValueChange</span> = { amount = it },\n    <span class=\"prp\">subtext</span> = <span class=\"str\">\"How much do you want to save?\"</span>,\n    <span class=\"prp\">isError</span> = <span class=\"kw\">true</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Keyboard type",
        "ios": "<code>.keyboardType(.decimalPad)</code>",
        "android": "<code>KeyboardType.Decimal</code>"
      },
      {
        "requirement": "Currency format",
        "ios": "<code>.currency(code: \"PHP\")</code>",
        "android": "<code>VisualTransformation</code> + <code>NumberFormat.getCurrencyInstance()</code>"
      },
      {
        "requirement": "Accessibility label",
        "ios": "<code>.accessibilityLabel(\"Amount in pesos\")</code>",
        "android": "<code>contentDescription = \"Amount in pesos\"</code>"
      },
      {
        "requirement": "Error announcement",
        "ios": "VoiceOver reads error via <code>.accessibilityValue</code>",
        "android": "TalkBack reads error via <code>semantics { error() }</code>"
      },
      {
        "requirement": "Minimum touch target",
        "ios": "44 x 44 pt",
        "android": "48 x 48 dp"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use .decimalPad / KeyboardType.Decimal so users can enter fractional pesos without switching keyboards.",
        "dontText": "Use Amount Text Field for phone numbers, account numbers, or non-currency numerics — it hard-codes the peso glyph and currency formatting."
      },
      {
        "doText": "Pair Large size with a label above and a hint subtext below for hero entry screens (Send Money, Cash-In).",
        "dontText": "Drop the peso glyph on Default size to \"save space\" — the glyph is the primary signal that the input expects currency."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic names: <code>peso-offset</code>, <code>input</code>, <code>Peso Sign - Proxima</code>. No <code>Frame 42</code> artifacts."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>label=yes/no</code> should be Boolean <code>showLabel=true/false</code>. Large variant's missing peso glyph isn't gated by a property."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bind to <code>main/amount-text-field/{state}/{role}</code>. Typography uses DS text styles."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to <code>TextField</code> + <code>.keyboardType(.decimalPad)</code> / <code>OutlinedTextField</code> + <code>KeyboardType.Decimal</code>. Display-style underline anatomy needs custom styling vs default framework chrome."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Missing Active (focused) and Disabled states. Only Default / Filled / Error defined."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Peso Sign glyph is a raster <code>&lt;img&gt;</code> reference, not a vector instance. Can't be tint-bound to the <code>icon-currency</code> token."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No CLI mappings registered. Blocked by C2, C5, C6."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>label=yes/no</code> blocks Boolean mapping"
      },
      {
        "aspect": "State coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Missing Active / Disabled"
      },
      {
        "aspect": "Asset linkability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Raster peso glyph not mappable to a vector asset param"
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "EBAmountTextField.swift / EBAmountTextField.kt not yet created"
      }
    ],
    "variants": {
      "total": 12,
      "description": "2 <code>size</code> × 3 <code>state</code> × 2 <code>label</code> = <strong>12 variants</strong>.",
      "columns": [
        "size",
        "state",
        "label",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Large",
            "Filled",
            "yes",
            "152:48113"
          ]
        },
        {
          "cells": [
            "Large",
            "Default",
            "yes",
            "152:48116"
          ]
        },
        {
          "cells": [
            "Large",
            "Error",
            "yes",
            "152:48120"
          ]
        },
        {
          "cells": [
            "Large",
            "Filled",
            "no",
            "152:48111"
          ]
        },
        {
          "cells": [
            "Large",
            "Default",
            "no",
            "152:48115"
          ]
        },
        {
          "cells": [
            "Large",
            "Error",
            "no",
            "152:48110"
          ]
        },
        {
          "cells": [
            "Default",
            "Filled",
            "yes",
            "152:48121"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "yes",
            "152:48114"
          ]
        },
        {
          "cells": [
            "Default",
            "Error",
            "yes",
            "152:48118"
          ]
        },
        {
          "cells": [
            "Default",
            "Filled",
            "no",
            "152:48117"
          ]
        },
        {
          "cells": [
            "Default",
            "Default",
            "no",
            "152:48119"
          ]
        },
        {
          "cells": [
            "Default",
            "Error",
            "no",
            "152:48112"
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
      "header": "Initial Assessment · node 152:48122",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 12 variants documented across size (Default/Large) × state (Default/Filled/Error) × label (yes/no). Part of Form Elements group.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Peso Sign is a raster image</strong> — Peso glyph rendered as <code>&lt;img src={imgShapeFull}&gt;</code> rather than a vector instance of <code>Peso Sign - Proxima</code>. Blocks tint-color binding and Code Connect asset mapping.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Missing Active and Disabled states</strong> — Only Default / Filled / Error defined. Sibling Form Elements use a 4-state Default / Active / Error / Disabled model.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>label property uses yes/no</strong> — <code>label=yes/no</code> instead of Boolean <code>showLabel=true/false</code>. Incompatible with Swift <code>Bool</code> / Kotlin <code>Boolean</code> for Code Connect mapping.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered. Blocked by C2, C5, C6.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
