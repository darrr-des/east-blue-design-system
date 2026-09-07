import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/amount-text-field.js`.
const amountTextFieldDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'LG',
        options: [
          { value: 'LG', label: 'LG' },
          { value: 'MD', label: 'MD' },
        ],
      },
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'focused', label: 'Focused' },
          { value: 'disabled', label: 'Disabled' },
          { value: 'error', label: 'Error' },
        ],
      },
      {
        label: 'hasLabel',
        prop: 'hasLabel',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasLeadingCurrency',
        prop: 'hasLeadingCurrency',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasSubtext',
        prop: 'hasSubtext',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasTrailingCurrency',
        prop: 'hasTrailingCurrency',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
    ],
  },
];

export const amountTextField: ComponentData = {
  "meta": {
    "slug": "amount-text-field",
    "name": "Amount Text Field",
    "node": "4602:18144",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4602-18144",
    "description": "A display-style numeric input for PHP amount entry in Send Money, Cash-In, and top-up flows. Sits on a single underline, with a label above and supporting text below. Two sizes × four interaction states.",
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
    "navGroup": "Form Elements",
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>4602:18144</code> in the 2026 Working File. <code>Size = LG | MD</code> × <code>State = Default | Focused | Disabled | Error</code> gives eight variants, and every one carries the same five semantic names — <code>Label</code>, <code>AmountRow</code> wrapping <code>CurrencySymbol</code> · <code>Value</code> · <code>CurrencyCode</code>, and <code>HelperText</code> — with no legacy prefix and no cross-variant mismatch. The Error state colors the border, the full amount row and the helper text, which is the family reference treatment. Keeping <code>Label</code> and <code>HelperText</code> local rather than composing the shared form scaffolding is a recorded decision: this is a centered, large-type standalone field, not a form row. Locale, currency-code and keyboard behavior are documented. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns (Send Money, Cash-In, Top-up).",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"5\" width=\"100\" height=\"70\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <text x=\"30\" y=\"18\" font-size=\"6\" fill=\"currentColor\" opacity=\".3\" font-family=\"system-ui\">Send Money</text>\n          <text x=\"34\" y=\"36\" font-size=\"5\" fill=\"currentColor\" opacity=\".4\" font-family=\"system-ui\">Enter Amount</text>\n          <text x=\"30\" y=\"52\" font-size=\"14\" fill=\"currentColor\" opacity=\".7\" font-family=\"system-ui\" font-weight=\"700\">₱500.00</text>\n          <line x1=\"24\" y1=\"58\" x2=\"96\" y2=\"58\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".3\"></line>\n          <text x=\"34\" y=\"68\" font-size=\"4\" fill=\"currentColor\" opacity=\".4\" font-family=\"system-ui\">Maximum ₱50,000</text>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"amt-demo-preview\"><svg width=\"360\" height=\"184\" viewBox=\"0 0 360 184\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"38\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"0.9\" letter-spacing=\"0.25\">Add Your Label Here</text><text x=\"180\" y=\"114\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"53\" font-weight=\"600\" fill=\"#0A2757\">500.00</text><line x1=\"24\" y1=\"134\" x2=\"336\" y2=\"134\" stroke=\"#445C85\" stroke-width=\"1\"></line><text x=\"180\" y=\"164\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\">Add your subtext here</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">size</span><select class=\"demo-panel-select\" onchange=\"_amtDemo.size=this.value;updateAmountFieldDemo()\"><option value=\"Large\" selected=\"\">Large</option><option value=\"Default\">Default</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select class=\"demo-panel-select\" onchange=\"_amtDemo.state=this.value;updateAmountFieldDemo()\"><option value=\"Default\">Default</option><option value=\"Filled\" selected=\"\">Filled</option><option value=\"Error\">Error</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">label</span><select class=\"demo-panel-select\" onchange=\"_amtDemo.label=this.value;updateAmountFieldDemo()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Works for any amount entry, and both sizes carry the currency glyph consistently. <code>CurrencySymbol</code> and <code>CurrencyCode</code> are editable text layers, so switching ₱ to another currency is a text edit — not a fork."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own typography, border, and helper text, and all four interaction states (Default / Focused / Disabled / Error) ship in both sizes."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>Size = LG | MD</code> and <code>State = Default | Focused | Disabled | Error</code> both follow the Property Naming Guidelines and match the siblings. Every layer carries a correct semantic name — <code>Label</code>, <code>AmountRow</code>, <code>CurrencySymbol</code>, <code>Value</code>, <code>CurrencyCode</code>, <code>HelperText</code> — and <code>Error</code> on the State axis is the confirmed family-level exception."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "<code>AmountRow</code> composes cleanly and <code>CurrencySymbol</code> · <code>Value</code> · <code>CurrencyCode</code> are independently addressable, so a locale can drop the code without restructuring. <code>Label</code> and <code>HelperText</code> stay local by design — the shared <code>FormGroup Header</code> and <code>Subtext Message</code> instances are built for left-aligned form rows and would need overriding in every variant of this centered, large-type field."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default",
        "notes": "Shows <code>₱ 0.00 Php</code> in navy. Underline <code>#E5EBF4</code>."
      },
      {
        "state": "Active (focused)",
        "ios": "yes",
        "android": "yes",
        "property": "State=Active",
        "notes": "Underline darkens to <code>#183462</code>; amount shown at full navy. Named <code>Active</code> here but <code>Focused</code> on Search Field — see open issues."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Amount mutes. Label and supporting text keep their default colors — see open issues."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "State=Error",
        "notes": "Red <code>#D61B2C</code> for amount, underline, and supporting text, which becomes the validation message."
      },
      {
        "state": "Size",
        "ios": "yes",
        "android": "yes",
        "property": "Size=Large | Medium",
        "notes": "Large uses a 70px input row, Medium 50px. Both carry the peso glyph."
      }
    ],
    "resolved": [
      {
        "headline": "Peso glyph is no longer a raster image.",
        "body": "v2.0: Rebuilt on node <code>4602:18144</code>. The ₱ now renders as a text glyph inside the input row rather than an <code>&lt;img&gt;</code> reference, restoring token-based coloring and clean scaling. Applied by a different route than the recommended icon instance-swap, but it resolves the C6 finding. (C6 · Asset)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Active and Disabled states added.",
        "body": "v2.0: The state axis is now <code>Default | Active | Disabled | Error</code>, matching Input Field's 4-state model, and every state ships in both sizes. Closes both C5 findings. (C5 · State)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Large variant now carries the peso glyph.",
        "body": "v2.0: Both <code>Size=Large</code> and <code>Size=Medium</code> render <code>₱ 0.00 Php</code>. The inconsistency where Large dropped the currency mark is gone. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>State=Error</code> exception confirmed.",
        "body": "v2.1: Closed by owner decision at family level — <code>Error</code> stays on the <code>State</code> axis across Form Elements as a deliberate exception to the State/Status rule, matching how most design systems model form-field validation. Applies equally to Search Field and Text Area. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>label=yes/no</code> property removed.",
        "body": "v2.0: The property is gone from the variant axes, which are now <code>Size</code> × <code>State</code>; the label is always present. This resolves the boolean-naming finding, though by removal rather than the recommended migration to <code>showLabel=true/false</code> — so the ability to hide the label no longer exists. Confirm that was deliberate rather than dropped in the rebuild. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Amount layers renamed to describe their content.",
        "body": "v2.2: The three <code>#amount</code> nodes in every <code>input</code> frame are now <code>CurrencySymbol</code> (₱), <code>Value</code> (the number) and <code>CurrencyCode</code> (Php), and the title layer is <code>Label</code>. The duplicate-name collisions are gone and <code>Value</code> matches §3's Form-content definition exactly. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Size values aligned to the standard scale.",
        "body": "v2.2: <code>Size = Large | Medium</code> → <code>LG | MD</code>, matching the <code>XS · SM · MD · LG · XL</code> set in §5 of the Property Naming Guidelines. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Layer and property naming completed.",
        "body": "v2.3: <code>Focussed</code> → <code>Focused</code>, matching the guidelines and both siblings; <code>SupportText</code> → <code>HelperText</code> across all eight variants, resolving the term §6 explicitly forbids and picking up the one Error-variant layer the previous sweep missed; and <code>input</code> → <code>AmountRow</code>. Every layer and property value in the set now follows the Property Naming Guidelines. (C1 · C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Disabled treatment confirmed intentional.",
        "body": "v2.3: Closed by owner decision — <code>Label</code> and <code>HelperText</code> sit outside the enclosed input element, so they deliberately keep their default colours while only the amount inside <code>AmountRow</code> mutes. The disabled affordance belongs to the control, not to the surrounding copy. Differs from Text Area and Search Field, which mute the whole field, because those components enclose their text within the input container. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Currency slots ruled unnecessary.",
        "body": "v2.3: Closed by owner decision — <code>CurrencySymbol</code> and <code>CurrencyCode</code> are already text layers, so switching ₱ to $ or € is a text edit rather than an instance swap. That is more flexible than a slot for a glyph, and it means the component is not in fact hard-coded to PHP. (Slot)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Confirmed as a standalone component.",
        "body": "v2.3: Closed by owner decision — Amount Text Field stays its own component rather than folding into Input Field as <code>type: .currency</code>. Its display-style anatomy, 53px numeral and currency-triplet row are distinct enough from a standard field to justify separation, and the decision matches Search Field and Text Area. (Family)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Fractional widths corrected.",
        "body": "v2.2: Variants went 384.75 → <code>360</code> and inner rows 336.75 → <code>312</code>; the set narrowed 424.75 → 400. All dimensions are now whole numbers that map cleanly to native layout values. (C4)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Layer naming verified complete across all eight variants.",
        "body": "v2.4: Re-read on the live node. Every variant carries the same five semantic names — <code>Label</code>, <code>AmountRow</code> wrapping <code>CurrencySymbol</code> · <code>Value</code> · <code>CurrencyCode</code>, and <code>HelperText</code> — with no legacy prefix, no duplicate siblings and no cross-variant mismatch. Each text layer can therefore expose as a single property across the set. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Error state colors the full amount row and its helper text.",
        "body": "v2.4: In <code>State=Error</code> the border, <code>CurrencySymbol</code>, <code>Value</code>, <code>CurrencyCode</code> and <code>HelperText</code> all move to <code>#D61B2C</code>. The validation message is carried by color as well as position, which is the stronger of the two treatments in Form Elements — <a href=\"#\" onclick=\"showPanelById('text-area');return false;\">Text Area</a> leaves its subtext neutral, and that difference is now tracked on Text Area rather than here. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Local <code>Label</code> and <code>HelperText</code> confirmed intentional.",
        "body": "v2.5: Amount Text Field deliberately does not compose <code>FormGroup Header</code> and <code>Subtext Message</code>. Those instances are built for left-aligned form rows sitting above a bordered input; this component is a centered, standalone amount entry whose label and helper text are centered on the amount at 18px and 14px, sized against a 53pt value rather than a 14px one. Adopting the shared scaffolding would mean overriding its alignment, sizing and spacing in every variant — inheriting the maintenance cost without the benefit. Recorded as a deliberate divergence so the odd one out in Form Elements reads as a decision. (C4 · Composition)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Locale and keyboard behavior documented.",
        "body": "v2.5: The component shows <code>₱</code> and <code>Php</code> together because it is used where the amount must be unambiguous — a transfer confirmation, not a price. Where the surrounding screen already establishes currency, <code>CurrencyCode</code> is omitted and the symbol carries it alone. Locale drives the symbol, the code, and the grouping and decimal separators together, never independently; implementations should format through the platform’s currency formatter rather than string-concatenating a symbol onto a number. <strong>Keyboard</strong>: decimal pad on both platforms (<code>.keyboardType(.decimalPad)</code> / <code>KeyboardType.Decimal</code>), no locale-switching mid-entry, a hard cap of two fraction digits, and pasted input stripped to digits and a single separator rather than rejected outright — a user pasting <code>₱1,000.00</code> should land on <code>1000.00</code>, not an empty field. (Docs)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
"open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The property schema is clean and every layer is semantically named, so mapping is a mechanical step once the library lands.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": []
  },
  "style": {
    "heading": "Variants",
    "specCards": [
      {
        "cardKey": "atf-spec-main",
        "demoKey": "main",
        "demoControls": amountTextFieldDemoControls,
        "title": "Amount Text Field",
        "node": "4602:18144",
        "description": "",
        "previewHtml": "<div id=\"amount-text-field-spec-main\"><svg width=\"400\" height=\"184\" viewBox=\"0 0 400 184\" fill=\"none\" role=\"img\" aria-label=\"Amount Text Field, LG, default\"><text x=\"200\" y=\"38\" text-anchor=\"middle\" font-family=\"'Proxima Soft', system-ui, sans-serif\" font-size=\"18\" font-weight=\"600\" letter-spacing=\"0.25\" fill=\"#0A2757\">Add Your Label Here</text><text x=\"200\" y=\"111.02\" text-anchor=\"middle\" font-family=\"'Proxima Soft', system-ui, sans-serif\" font-size=\"53\" font-weight=\"600\" fill=\"#0A2757\">₱ 0.00 Php</text><line x1=\"24\" y1=\"128.5\" x2=\"376\" y2=\"128.5\" stroke=\"#E5EBF4\" stroke-width=\"1\"/><text x=\"200\" y=\"157\" text-anchor=\"middle\" font-family=\"'Proxima Soft', system-ui, sans-serif\" font-size=\"14\" font-weight=\"600\" letter-spacing=\"0.25\" fill=\"#445C85\">Add your subtext here</text></svg></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Size", "value": "LG", "prop": "size" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "hasLabel", "value": "True", "prop": "hasLabel" },
              { "key": "hasLeadingCurrency", "value": "True", "prop": "hasLeadingCurrency" },
              { "key": "hasSubtext", "value": "True", "prop": "hasSubtext" },
              { "key": "hasTrailingCurrency", "value": "True", "prop": "hasTrailingCurrency" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label", "value": "#0A2757", "token": "text/primary" },
              { "key": "Amount", "value": "#0A2757", "token": "text/primary",
                "variants": {
                  "state:disabled": { "value": "#C2CFE5", "token": "text/disabled" },
                  "state:error": { "value": "#D61B2C", "token": "text/error" }
                } },
              { "key": "Bottom rule", "value": "#E5EBF4", "token": "border/subtle",
                "variants": {
                  "state:focused": { "value": "#183462", "token": "border/focused" },
                  "state:error": { "value": "#D61B2C", "token": "border/error" }
                } },
              { "key": "Helper text", "value": "#445C85", "token": "text/secondary",
                "variants": { "state:error": { "value": "#D61B2C", "token": "text/error" } } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label", "value": "—", "mono": true },
              { "key": "Amount", "value": "—", "mono": true },
              { "key": "Helper text", "value": "—", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "184px", "mono": true,
                "variants": { "size:MD": { "value": "164px" } } },
              { "key": "Width", "value": "400px", "mono": true },
              { "key": "Radius", "value": "0px", "mono": true },
              { "key": "Padding H", "value": "24px", "mono": true },
              { "key": "Padding V", "value": "24px", "mono": true },
              { "key": "Gap", "value": "16px", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAmountField</span><span class=\"syn-punc\">(</span>amount<span class=\"syn-punc\">: </span>$amount<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">controlSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.large</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBAmountField</span><span class=\"syn-punc\">(</span>\n    amount <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onAmountChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountSize</span><span class=\"syn-punc\">.</span>LG<span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span>Default\n<span class=\"syn-punc\">)</span>"
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
          "figma": "Size = LG | MD",
          "swift": ".controlSize(.large / .regular)",
          "compose": "size = EBAmountSize.LG / MD"
        },
        {
          "figma": "State = Default | Focused | Disabled | Error",
          "swift": "@FocusState · .disabled(true) · .ebError(true)",
          "compose": "interactionSource · enabled = false · isError = true"
        },
        {
          "figma": "hasLabel <em>(boolean)</em>",
          "swift": "label: String?",
          "compose": "label: String?"
        },
        {
          "figma": "hasLeadingCurrency <em>(boolean)</em>",
          "swift": "showCurrencySymbol: Bool",
          "compose": "showCurrencySymbol: Boolean"
        },
        {
          "figma": "hasTrailingCurrency <em>(boolean)</em>",
          "swift": "showCurrencyCode: Bool",
          "compose": "showCurrencyCode: Boolean"
        },
        {
          "figma": "hasSubtext <em>(boolean)</em>",
          "swift": "helperText: String?",
          "compose": "helperText: String?"
        },
        {
          "figma": "— <em>no Figma property</em>",
          "swift": "amount: Binding&lt;Decimal&gt;",
          "compose": "amount: String + onAmountChange: (String) -&gt; Unit"
        },
        {
          "figma": "— <em>no Figma property</em>",
          "swift": ".keyboardType(.decimalPad)",
          "compose": "keyboardType = KeyboardType.Decimal"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Large — hero amount",
        "swift": "<span class=\"typ\">EBAmountField</span>(<span class=\"prp\">amount</span>: $amount)\n    .<span class=\"fn\">controlSize</span>(<span class=\"dot\">.large</span>)\n    .<span class=\"fn\">ebLabel</span>(<span class=\"str\">\"Add Your Label Here\"</span>)\n    .<span class=\"fn\">ebHelperText</span>(<span class=\"str\">\"Add your subtext here\"</span>)",
        "compose": "<span class=\"typ\">EBAmountField</span>(\n    <span class=\"prp\">amount</span> = amount,\n    <span class=\"prp\">onAmountChange</span> = { amount = it },\n    <span class=\"prp\">size</span> = <span class=\"typ\">EBAmountSize</span>.LG,\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Add Your Label Here\"</span>,\n    <span class=\"prp\">helperText</span> = <span class=\"str\">\"Add your subtext here\"</span>\n)"
      },
      {
        "subheading": "Medium",
        "swift": "<span class=\"typ\">EBAmountField</span>(<span class=\"prp\">amount</span>: $amount)\n    .<span class=\"fn\">controlSize</span>(<span class=\"dot\">.regular</span>)",
        "compose": "<span class=\"typ\">EBAmountField</span>(\n    <span class=\"prp\">amount</span> = amount,\n    <span class=\"prp\">onAmountChange</span> = { amount = it },\n    <span class=\"prp\">size</span> = <span class=\"typ\">EBAmountSize</span>.MD\n)"
      },
      {
        "subheading": "Amount only — no currency symbol or code",
        "swift": "<span class=\"typ\">EBAmountField</span>(<span class=\"prp\">amount</span>: $amount)\n    .<span class=\"fn\">ebCurrencySymbol</span>(<span class=\"kw\">false</span>)\n    .<span class=\"fn\">ebCurrencyCode</span>(<span class=\"kw\">false</span>)",
        "compose": "<span class=\"typ\">EBAmountField</span>(\n    <span class=\"prp\">amount</span> = amount,\n    <span class=\"prp\">onAmountChange</span> = { amount = it },\n    <span class=\"prp\">showCurrencySymbol</span> = <span class=\"kw\">false</span>,\n    <span class=\"prp\">showCurrencyCode</span> = <span class=\"kw\">false</span>\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"typ\">EBAmountField</span>(<span class=\"prp\">amount</span>: $amount)\n    .<span class=\"fn\">ebState</span>(<span class=\"dot\">.error</span>)\n    .<span class=\"fn\">ebHelperText</span>(<span class=\"str\">\"Amount exceeds your balance\"</span>)",
        "compose": "<span class=\"typ\">EBAmountField</span>(\n    <span class=\"prp\">amount</span> = amount,\n    <span class=\"prp\">onAmountChange</span> = { amount = it },\n    <span class=\"prp\">state</span> = <span class=\"typ\">EBFieldState</span>.Error,\n    <span class=\"prp\">helperText</span> = <span class=\"str\">\"Amount exceeds your balance\"</span>\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"typ\">EBAmountField</span>(<span class=\"prp\">amount</span>: $amount)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBAmountField</span>(\n    <span class=\"prp\">amount</span> = amount,\n    <span class=\"prp\">onAmountChange</span> = { amount = it },\n    <span class=\"prp\">enabled</span> = <span class=\"kw\">false</span>\n)"
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
        "notes": "Every variant carries the same five semantic names — <code>Label</code>, <code>AmountRow</code> wrapping <code>CurrencySymbol</code> · <code>Value</code> · <code>CurrencyCode</code>, and <code>HelperText</code>. The duplicate <code>#label</code> and <code>#amount</code> layers are gone, so each text layer exposes as a single property across the set."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Size = LG | MD</code> × <code>State = Default | Focused | Disabled | Error</code>, PascalCase per §1 with Title Case values per §5, on the standard sizing vocabulary. <code>Active</code> → <code>Focused</code> and <code>Large|Medium</code> → <code>LG|MD</code> both landed; <code>label=yes/no</code> is now the <code>hasLabel</code> boolean. <code>Error</code> on the <code>State</code> axis is the documented §6 form-field exception."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Colors moved from the component-scoped namespace to the shared generic scale. Bindings are not readable through the review tooling, so the token paths on the Style tab are indicative and need a Dev Mode confirmation."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to <code>TextField</code> + <code>.keyboardType(.decimalPad)</code> on iOS and <code>OutlinedTextField</code> + <code>KeyboardType.Decimal</code> on Android. The <code>AmountRow</code> stroke renders as a single bottom rule rather than a box, so native draws an underline rather than framework chrome."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All four states ship in both sizes — the rule moves <code>#E5EBF4</code> → <code>#183462</code> focused → <code>#D61B2C</code> error, and Disabled mutes the amount to <code>#C2CFE5</code>. The label deliberately stays <code>#0A2757</code> in Disabled: it identifies the field regardless of whether it can be edited."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "The component carries no icons. The peso glyph is a text character in the same style as the amount, so it colours with it rather than needing a vector asset."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — no native library exists yet. Nothing in the schema blocks it: two cleanly named enums and four booleans, with no duplicate layer names."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Size</code> and <code>State</code> map onto native enums; the four <code>has</code> booleans map onto optional arguments and visibility flags."
      },
      {
        "aspect": "State coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All eight combinations exist — <code>Size</code> (2) × <code>State</code> (4) with no gaps."
      },
      {
        "aspect": "Asset linkability",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No vector assets to link. The peso glyph is text."
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Proposed target: <code>EBAmountField</code>. Not yet written — blocked on the native library, same as C7."
      }
    ],
    "variants": {
      "total": 8,
      "description": "<code>Size</code> (2) × <code>State</code> (4) — all eight combinations exist. The four <code>has</code> booleans are component properties rather than variant axes, so they do not multiply the count. LG is 20px taller than MD, and its amount runs 53/58 Semibold against MD’s 35/38 Bold — a weight change as well as a size change.",
      "columns": [
        "Size",
        "State",
        "Dimensions",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "LG",
            "Default",
            "400 × 184",
            "4602:18143"
          ]
        },
        {
          "cells": [
            "LG",
            "Focused",
            "400 × 184",
            "4602:18139"
          ]
        },
        {
          "cells": [
            "LG",
            "Disabled",
            "400 × 184",
            "4602:18140"
          ]
        },
        {
          "cells": [
            "LG",
            "Error",
            "400 × 184",
            "4602:18142"
          ]
        },
        {
          "cells": [
            "MD",
            "Default",
            "400 × 164",
            "4602:18141"
          ]
        },
        {
          "cells": [
            "MD",
            "Focused",
            "400 × 164",
            "4602:18138"
          ]
        },
        {
          "cells": [
            "MD",
            "Disabled",
            "400 × 164",
            "4602:18137"
          ]
        },
        {
          "cells": [
            "MD",
            "Error",
            "400 × 164",
            "4602:18136"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.6",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Style + Code tabs rebuilt against node 4602:18144",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt as a single card</strong> — one spec card driven by a panel mirroring the Figma property panel: <code>Size</code> and <code>State</code> as selects, and <code>hasLabel</code>, <code>hasLeadingCurrency</code>, <code>hasSubtext</code>, <code>hasTrailingCurrency</code> as toggles. The four booleans were invisible to <code>get_node_info</code>, which returns variant properties only. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong>The stroke is a bottom rule, not a box</strong> — <code>AmountRow</code> carries a stroke that reads as a bordered container in the layer data but renders as a single line under the amount. Corrected by checking against an export. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong>Currency toggles recentre the amount</strong> — dropping <code>₱</code> or <code>Php</code> re-centres what remains rather than leaving a gap, matching the centred auto-layout. Turning off the label or subtext collapses its block and the card shrinks from 184px. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong>Property mapping corrected</strong> — <code>size = Large / Default</code>, <code>state = Filled</code> and <code>label = yes / no</code> are gone. Now maps <code>Size</code>, <code>State</code> and the four booleans, plus the amount binding and the decimal keyboard. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Code"
          }
        },
        {
          "body": "<strong>Variants inventory corrected</strong> — from <code>total: 12</code> on a “2 size × 3 state × 2 label” matrix to the real 8, noting that LG runs 53/58 Semibold against MD’s 35/38 Bold — a weight change as well as a size change. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Code"
          }
        },
        {
          "body": "<strong>Scorecard and Code Connect rewritten</strong> — C1 still reported duplicate <code>#label</code> / <code>#amount</code> layers, C2 the <code>Active</code> and <code>Large|Medium</code> naming, C5 an unmuted Disabled label. All resolved in v2.2–v2.3. C6 is now Not Applicable: the peso glyph is text, not an asset. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Code"
          }
        }
      ]
    },
    {
      "version": "2.5",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Composition and locale settled",
      "rows": [
        {
          "body": "<strong>Local <code>Label</code> and <code>HelperText</code> confirmed intentional</strong> — the shared <code>FormGroup Header</code> and <code>Subtext Message</code> instances are built for left-aligned form rows and would need overriding in every variant of this centred, large-type field. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C4"
          }
        },
        {
          "body": "<strong>Locale and keyboard behaviour documented</strong> — locale drives the symbol, the code and the separators together; format through the platform currency formatter rather than concatenating. Decimal pad on both platforms, two fraction digits, and pasted input stripped to digits rather than rejected. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        }
      ]
    },
    {
      "version": "2.4",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Naming verified and error treatment recorded",
      "rows": [
        {
          "body": "<strong>Layer naming verified complete</strong> across all eight variants — no legacy prefix, no duplicate siblings, no cross-variant mismatch. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Error state colours the full amount row and its helper text</strong> — border, symbol, value, code and helper all move to <code>#D61B2C</code>, the stronger of the two treatments in Form Elements. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        }
      ]
    },
    {
      "version": "2.3",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Naming completed and scope confirmed",
      "rows": [
        {
          "body": "<strong>Layer and property naming completed.</strong> <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Disabled treatment confirmed intentional</strong> — the label and helper text sit outside the enclosed input, so they keep their colour while the amount mutes. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        },
        {
          "body": "<strong>Currency slots ruled unnecessary</strong> — the symbol and code are text, so a slot would add indirection without adding capability. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Confirmed a standalone component</strong> rather than a composed variant of Input Field. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C4"
          }
        }
      ]
    },
    {
      "version": "2.2",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Layer names and sizing scale",
      "rows": [
        {
          "body": "<strong>Amount layers renamed to describe their content</strong> — <code>CurrencySymbol</code>, <code>Value</code> and <code>CurrencyCode</code> replacing three layers that shared one name. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Size values aligned to the standard scale</strong> — <code>Large|Medium</code> → <code>LG|MD</code>. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Fractional widths corrected.</strong> <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C4"
          }
        }
      ]
    },
    {
      "version": "2.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Exception confirmed",
      "rows": [
        {
          "body": "<strong><code>State=Error</code> exception confirmed</strong> — covered by the §6 form-field exception in the Property Naming Guidelines, so <code>Error</code> stays on the <code>State</code> axis. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        }
      ]
    },
    {
      "version": "2.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt on node 4602:18144 — 2026 Working File",
      "rows": [
        {
          "body": "<strong>Peso glyph is no longer a raster image</strong> — now a text character in the same style as the amount, so it colours with it. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6"
          }
        },
        {
          "body": "<strong>Active and Disabled states added</strong> — the axis now carries all four interaction states. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        },
        {
          "body": "<strong>Large variant now carries the peso glyph.</strong> <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong><code>label=yes/no</code> property removed</strong> — replaced by the <code>hasLabel</code> boolean with real True/False values. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        }
      ]
    },
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
