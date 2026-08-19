import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/amount-text-field.js`.
const amountTextFieldDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'Filled',
        options: [
          { value: 'Default', label: 'Default' },
          { value: 'Filled',  label: 'Filled' },
          { value: 'Error',   label: 'Error' },
        ],
      },
      {
        label: 'Label',
        prop: 'label',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'yes' },
          { value: 'no',  label: 'no' },
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
        "cardKey": "amt-spec-large-filled",
        "demoKey": "large-filled",
        "demoControls": amountTextFieldDemoControls,
        "title": "Large · Filled",
        "node": "152:48113",
        "description": "53px amount headline, filled value, dark navy. No peso glyph — the Large tier is used as a hero-amount display.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Size",  "value": "Large" },
              { "key": "State", "value": "Filled", "prop": "state" },
              { "key": "Label", "value": "yes",    "prop": "label" }
            ]
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              { key: 'Border (underline)', value: '#445C85', token: 'amount-text-field/filled/border',       variants: { 'state:Default': { value: '#ADBDDC', token: 'amount-text-field/default/border' }, 'state:Filled': { value: '#445C85', token: 'amount-text-field/filled/border' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/border' } } },
              { key: 'Label',              value: '#0A2757', token: 'amount-text-field/filled/label',        variants: { 'state:Default': { value: '#0A2757', token: 'amount-text-field/default/label' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/label' }, 'state:Error': { value: '#0A2757', token: 'amount-text-field/error/label' } } },
              { key: 'Amount',             value: '#0A2757', token: 'amount-text-field/filled/label-amount', variants: { 'state:Default': { value: '#90A8D0', token: 'amount-text-field/default/label-amount' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/label-amount' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/label-amount' } } },
              { key: 'Subtext',            value: '#0A2757', token: 'amount-text-field/filled/subtext',      variants: { 'state:Default': { value: '#0A2757', token: 'amount-text-field/default/subtext' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/subtext' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/subtext' } } },
            ],
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",          "value": "fill parent",        "mono": true },
              { "key": "Height",         "value": "hug content",        "mono": true },
              { "key": "Label height",   "value": "18px",               "mono": true },
              { "key": "Amount size",    "value": "53px",               "mono": true },
              { "key": "Peso glyph",     "value": "hidden (Large tier)", "mono": true },
              { "key": "Underline",      "value": "1px bottom border",  "mono": true },
              { "key": "Subtext height", "value": "14px / 16 line",     "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style",    "value": "Primary/Label/Light/Large",          "mono": true },
              { "key": "Amount style",   "value": "Primary/Headlines/Epic",             "mono": true },
              { "key": "Amount font",    "value": "Proxima Soft Semibold",              "mono": true },
              { "key": "Amount size/lh", "value": "53px / 58px · 0",                    "mono": true },
              { "key": "Subtext style",  "value": "Primary/Multi-line Label/Light/Small", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.large</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Large</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"amt-large-filled-preview\"><svg width=\"360\" height=\"184\" viewBox=\"0 0 360 184\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"38\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"0.9\" letter-spacing=\"0.25\">Add Your Label Here</text><text x=\"180\" y=\"114\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"53\" font-weight=\"600\" fill=\"#0A2757\">500.00</text><line x1=\"24\" y1=\"134\" x2=\"336\" y2=\"134\" stroke=\"#445C85\" stroke-width=\"1\"></line><text x=\"180\" y=\"164\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\">Add your subtext here</text></svg></div>"
      },
      {
        "cardKey": "amt-spec-large-default",
        "demoKey": "large-default",
        "demoControls": amountTextFieldDemoControls,
        "title": "Large · Default",
        "node": "152:48116",
        "description": "Empty state at 53px, muted placeholder color. Used before the user types in hero amount screens.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Size",  "value": "Large" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "Label", "value": "yes",     "prop": "label" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { key: 'Border (underline)', value: '#ADBDDC', token: 'amount-text-field/default/border',       variants: { 'state:Default': { value: '#ADBDDC', token: 'amount-text-field/default/border' }, 'state:Filled': { value: '#445C85', token: 'amount-text-field/filled/border' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/border' } } },
              { key: 'Label',              value: '#0A2757', token: 'amount-text-field/default/label',        variants: { 'state:Default': { value: '#0A2757', token: 'amount-text-field/default/label' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/label' }, 'state:Error': { value: '#0A2757', token: 'amount-text-field/error/label' } } },
              { key: 'Amount',             value: '#90A8D0', token: 'amount-text-field/default/label-amount', variants: { 'state:Default': { value: '#90A8D0', token: 'amount-text-field/default/label-amount' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/label-amount' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/label-amount' } } },
              { key: 'Subtext',            value: '#0A2757', token: 'amount-text-field/default/subtext',      variants: { 'state:Default': { value: '#0A2757', token: 'amount-text-field/default/subtext' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/subtext' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/subtext' } } },
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",          "value": "fill parent",        "mono": true },
              { "key": "Height",         "value": "hug content",        "mono": true },
              { "key": "Label height",   "value": "18px",               "mono": true },
              { "key": "Amount size",    "value": "53px",               "mono": true },
              { "key": "Peso glyph",     "value": "hidden (Large tier)", "mono": true },
              { "key": "Underline",      "value": "1px bottom border",  "mono": true },
              { "key": "Subtext height", "value": "14px / 16 line",     "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style",    "value": "Primary/Label/Light/Large",          "mono": true },
              { "key": "Amount style",   "value": "Primary/Headlines/Epic",             "mono": true },
              { "key": "Amount font",    "value": "Proxima Soft Semibold",              "mono": true },
              { "key": "Amount size/lh", "value": "53px / 58px · 0",                    "mono": true },
              { "key": "Subtext style",  "value": "Primary/Multi-line Label/Light/Small", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.large</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Large</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"amt-large-default-preview\"><svg width=\"360\" height=\"184\" viewBox=\"0 0 360 184\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"38\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"0.9\" letter-spacing=\"0.25\">Add Your Label Here</text><text x=\"180\" y=\"114\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"53\" font-weight=\"600\" fill=\"#90A8D0\">0.00</text><line x1=\"24\" y1=\"134\" x2=\"336\" y2=\"134\" stroke=\"#ADBDDC\" stroke-width=\"1\"></line><text x=\"180\" y=\"164\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\">Add your subtext here</text></svg></div>"
      },
      {
        "cardKey": "amt-spec-large-error",
        "demoKey": "large-error",
        "demoControls": amountTextFieldDemoControls,
        "title": "Large · Error",
        "node": "152:48120",
        "description": "Validation error — amount, border, and subtext all tint red #D61B2C. Subtext is the error message slot.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Size",  "value": "Large" },
              { "key": "State", "value": "Error", "prop": "state" },
              { "key": "Label", "value": "yes",   "prop": "label" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { key: 'Border (underline)', value: '#D61B2C', token: 'amount-text-field/error/border',       variants: { 'state:Default': { value: '#ADBDDC', token: 'amount-text-field/default/border' }, 'state:Filled': { value: '#445C85', token: 'amount-text-field/filled/border' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/border' } } },
              { key: 'Label',              value: '#0A2757', token: 'amount-text-field/error/label',        variants: { 'state:Default': { value: '#0A2757', token: 'amount-text-field/default/label' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/label' }, 'state:Error': { value: '#0A2757', token: 'amount-text-field/error/label' } } },
              { key: 'Amount',             value: '#D61B2C', token: 'amount-text-field/error/label-amount', variants: { 'state:Default': { value: '#90A8D0', token: 'amount-text-field/default/label-amount' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/label-amount' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/label-amount' } } },
              { key: 'Subtext',            value: '#D61B2C', token: 'amount-text-field/error/subtext',      variants: { 'state:Default': { value: '#0A2757', token: 'amount-text-field/default/subtext' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/subtext' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/subtext' } } },
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",          "value": "fill parent",        "mono": true },
              { "key": "Height",         "value": "hug content",        "mono": true },
              { "key": "Label height",   "value": "18px",               "mono": true },
              { "key": "Amount size",    "value": "53px",               "mono": true },
              { "key": "Peso glyph",     "value": "hidden (Large tier)", "mono": true },
              { "key": "Underline",      "value": "1px bottom border",  "mono": true },
              { "key": "Subtext height", "value": "14px / 16 line",     "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style",    "value": "Primary/Label/Light/Large",          "mono": true },
              { "key": "Amount style",   "value": "Primary/Headlines/Epic",             "mono": true },
              { "key": "Amount font",    "value": "Proxima Soft Semibold",              "mono": true },
              { "key": "Amount size/lh", "value": "53px / 58px · 0",                    "mono": true },
              { "key": "Subtext style",  "value": "Primary/Multi-line Label/Light/Small", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    subtext<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Enter a valid amount\"</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.large</span><span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    subtext <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Enter a valid amount\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Large</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Error</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"amt-large-error-preview\"><svg width=\"360\" height=\"184\" viewBox=\"0 0 360 184\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"38\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"0.9\" letter-spacing=\"0.25\">Add Your Label Here</text><text x=\"180\" y=\"114\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"53\" font-weight=\"600\" fill=\"#D61B2C\">500.00</text><line x1=\"24\" y1=\"134\" x2=\"336\" y2=\"134\" stroke=\"#D61B2C\" stroke-width=\"1\"></line><text x=\"180\" y=\"164\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#D61B2C\" letter-spacing=\"0.25\">Add your subtext here</text></svg></div>"
      },
      {
        "cardKey": "amt-spec-default-filled",
        "demoKey": "default-filled",
        "demoControls": amountTextFieldDemoControls,
        "title": "Default · Filled",
        "node": "152:48121",
        "description": "35px amount with leading peso glyph. Standard send/pay screens. Peso glyph is currently a raster image (see C6 open issue).",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Size",  "value": "Default" },
              { "key": "State", "value": "Filled", "prop": "state" },
              { "key": "Label", "value": "yes",    "prop": "label" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { key: 'Border (underline)', value: '#445C85', token: 'amount-text-field/filled/border',        variants: { 'state:Default': { value: '#ADBDDC', token: 'amount-text-field/default/border' }, 'state:Filled': { value: '#445C85', token: 'amount-text-field/filled/border' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/border' } } },
              { key: 'Label',              value: '#0A2757', token: 'amount-text-field/filled/label',         variants: { 'state:Default': { value: '#0A2757', token: 'amount-text-field/default/label' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/label' }, 'state:Error': { value: '#0A2757', token: 'amount-text-field/error/label' } } },
              { key: 'Amount',             value: '#0A2757', token: 'amount-text-field/filled/label-amount',  variants: { 'state:Default': { value: '#90A8D0', token: 'amount-text-field/default/label-amount' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/label-amount' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/label-amount' } } },
              { key: 'Peso glyph',         value: '#0A2757', token: 'amount-text-field/filled/icon-currency', variants: { 'state:Default': { value: '#D7E0EF', token: 'amount-text-field/default/icon-currency' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/icon-currency' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/icon-currency' } } },
              { key: 'Subtext',            value: '#0A2757', token: 'amount-text-field/filled/subtext',       variants: { 'state:Default': { value: '#0A2757', token: 'amount-text-field/default/subtext' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/subtext' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/subtext' } } },
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",          "value": "fill parent",       "mono": true },
              { "key": "Height",         "value": "hug content",       "mono": true },
              { "key": "Label height",   "value": "18px",              "mono": true },
              { "key": "Amount size",    "value": "35px",              "mono": true },
              { "key": "Peso glyph",     "value": "present (leading)", "mono": true },
              { "key": "Underline",      "value": "1px bottom border", "mono": true },
              { "key": "Subtext height", "value": "14px / 16 line",    "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style",    "value": "Primary/Label/Light/Large",          "mono": true },
              { "key": "Amount style",   "value": "Primary/Headlines/Spotlight",        "mono": true },
              { "key": "Amount font",    "value": "Proxima Soft Bold",                  "mono": true },
              { "key": "Amount size/lh", "value": "35px / 38px · 0",                    "mono": true },
              { "key": "Subtext style",  "value": "Primary/Multi-line Label/Light/Small", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"amt-default-filled-preview\"><svg width=\"360\" height=\"165\" viewBox=\"0 0 360 165\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"38\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"0.9\" letter-spacing=\"0.25\">Add Your Label Here</text><text x=\"124\" y=\"100\" font-family=\"Proxima Soft, system-ui\" font-size=\"32\" font-weight=\"700\" fill=\"#0A2757\">₱</text><text x=\"150\" y=\"100\" font-family=\"Proxima Soft, system-ui\" font-size=\"35\" font-weight=\"700\" fill=\"#0A2757\">500.00</text><line x1=\"24\" y1=\"114\" x2=\"336\" y2=\"114\" stroke=\"#445C85\" stroke-width=\"1\"></line><text x=\"180\" y=\"144\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\">Add your subtext here</text></svg></div>"
      },
      {
        "cardKey": "amt-spec-default-default",
        "demoKey": "default-default",
        "demoControls": amountTextFieldDemoControls,
        "title": "Default · Default",
        "node": "152:48114",
        "description": "Empty state — both peso glyph and <code>0.00</code> render in the placeholder tint #90A8D0 / #D7E0EF.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Size",  "value": "Default" },
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "Label", "value": "yes",     "prop": "label" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { key: 'Border (underline)', value: '#ADBDDC', token: 'amount-text-field/default/border',        variants: { 'state:Default': { value: '#ADBDDC', token: 'amount-text-field/default/border' }, 'state:Filled': { value: '#445C85', token: 'amount-text-field/filled/border' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/border' } } },
              { key: 'Label',              value: '#0A2757', token: 'amount-text-field/default/label',         variants: { 'state:Default': { value: '#0A2757', token: 'amount-text-field/default/label' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/label' }, 'state:Error': { value: '#0A2757', token: 'amount-text-field/error/label' } } },
              { key: 'Amount',             value: '#90A8D0', token: 'amount-text-field/default/label-amount',  variants: { 'state:Default': { value: '#90A8D0', token: 'amount-text-field/default/label-amount' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/label-amount' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/label-amount' } } },
              { key: 'Peso glyph',         value: '#D7E0EF', token: 'amount-text-field/default/icon-currency', variants: { 'state:Default': { value: '#D7E0EF', token: 'amount-text-field/default/icon-currency' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/icon-currency' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/icon-currency' } } },
              { key: 'Subtext',            value: '#0A2757', token: 'amount-text-field/default/subtext',       variants: { 'state:Default': { value: '#0A2757', token: 'amount-text-field/default/subtext' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/subtext' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/subtext' } } },
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",          "value": "fill parent",       "mono": true },
              { "key": "Height",         "value": "hug content",       "mono": true },
              { "key": "Label height",   "value": "18px",              "mono": true },
              { "key": "Amount size",    "value": "35px",              "mono": true },
              { "key": "Peso glyph",     "value": "present (leading)", "mono": true },
              { "key": "Underline",      "value": "1px bottom border", "mono": true },
              { "key": "Subtext height", "value": "14px / 16 line",    "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style",    "value": "Primary/Label/Light/Large",          "mono": true },
              { "key": "Amount style",   "value": "Primary/Headlines/Spotlight",        "mono": true },
              { "key": "Amount font",    "value": "Proxima Soft Bold",                  "mono": true },
              { "key": "Amount size/lh", "value": "35px / 38px · 0",                    "mono": true },
              { "key": "Subtext style",  "value": "Primary/Multi-line Label/Light/Small", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"amt-default-default-preview\"><svg width=\"360\" height=\"165\" viewBox=\"0 0 360 165\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"38\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"0.9\" letter-spacing=\"0.25\">Add Your Label Here</text><text x=\"124\" y=\"100\" font-family=\"Proxima Soft, system-ui\" font-size=\"32\" font-weight=\"700\" fill=\"#D7E0EF\">₱</text><text x=\"150\" y=\"100\" font-family=\"Proxima Soft, system-ui\" font-size=\"35\" font-weight=\"700\" fill=\"#90A8D0\">0.00</text><line x1=\"24\" y1=\"114\" x2=\"336\" y2=\"114\" stroke=\"#ADBDDC\" stroke-width=\"1\"></line><text x=\"180\" y=\"144\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\" letter-spacing=\"0.25\">Add your subtext here</text></svg></div>"
      },
      {
        "cardKey": "amt-spec-default-error",
        "demoKey": "default-error",
        "demoControls": amountTextFieldDemoControls,
        "title": "Default · Error",
        "node": "152:48118",
        "description": "Validation failed — peso glyph, amount, border, and subtext all tint red #D61B2C.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Size",  "value": "Default" },
              { "key": "State", "value": "Error", "prop": "state" },
              { "key": "Label", "value": "yes",   "prop": "label" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { key: 'Border (underline)', value: '#D61B2C', token: 'amount-text-field/error/border',        variants: { 'state:Default': { value: '#ADBDDC', token: 'amount-text-field/default/border' }, 'state:Filled': { value: '#445C85', token: 'amount-text-field/filled/border' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/border' } } },
              { key: 'Label',              value: '#0A2757', token: 'amount-text-field/error/label',         variants: { 'state:Default': { value: '#0A2757', token: 'amount-text-field/default/label' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/label' }, 'state:Error': { value: '#0A2757', token: 'amount-text-field/error/label' } } },
              { key: 'Amount',             value: '#D61B2C', token: 'amount-text-field/error/label-amount',  variants: { 'state:Default': { value: '#90A8D0', token: 'amount-text-field/default/label-amount' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/label-amount' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/label-amount' } } },
              { key: 'Peso glyph',         value: '#D61B2C', token: 'amount-text-field/error/icon-currency', variants: { 'state:Default': { value: '#D7E0EF', token: 'amount-text-field/default/icon-currency' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/icon-currency' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/icon-currency' } } },
              { key: 'Subtext',            value: '#D61B2C', token: 'amount-text-field/error/subtext',       variants: { 'state:Default': { value: '#0A2757', token: 'amount-text-field/default/subtext' }, 'state:Filled': { value: '#0A2757', token: 'amount-text-field/filled/subtext' }, 'state:Error': { value: '#D61B2C', token: 'amount-text-field/error/subtext' } } },
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width",          "value": "fill parent",       "mono": true },
              { "key": "Height",         "value": "hug content",       "mono": true },
              { "key": "Label height",   "value": "18px",              "mono": true },
              { "key": "Amount size",    "value": "35px",              "mono": true },
              { "key": "Peso glyph",     "value": "present (leading)", "mono": true },
              { "key": "Underline",      "value": "1px bottom border", "mono": true },
              { "key": "Subtext height", "value": "14px / 16 line",    "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label style",    "value": "Primary/Label/Light/Large",          "mono": true },
              { "key": "Amount style",   "value": "Primary/Headlines/Spotlight",        "mono": true },
              { "key": "Amount font",    "value": "Proxima Soft Bold",                  "mono": true },
              { "key": "Amount size/lh", "value": "35px / 38px · 0",                    "mono": true },
              { "key": "Subtext style",  "value": "Primary/Multi-line Label/Light/Small", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    subtext<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Enter a valid amount\"</span>\n<span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>\n.<span class=\"syn-fn\">ebAmountState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBAmountTextField</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    subtext <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Enter a valid amount\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountSize</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Default</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAmountState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Error</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"amt-default-error-preview\"><svg width=\"360\" height=\"165\" viewBox=\"0 0 360 165\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"180\" y=\"38\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"18\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"0.9\" letter-spacing=\"0.25\">Add Your Label Here</text><text x=\"124\" y=\"100\" font-family=\"Proxima Soft, system-ui\" font-size=\"32\" font-weight=\"700\" fill=\"#D61B2C\">₱</text><text x=\"150\" y=\"100\" font-family=\"Proxima Soft, system-ui\" font-size=\"35\" font-weight=\"700\" fill=\"#D61B2C\">500.00</text><line x1=\"24\" y1=\"114\" x2=\"336\" y2=\"114\" stroke=\"#D61B2C\" stroke-width=\"1\"></line><text x=\"180\" y=\"144\" text-anchor=\"middle\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#D61B2C\" letter-spacing=\"0.25\">Add your subtext here</text></svg></div>"
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
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Two layers named <code>#label</code> and three named <code>#amount</code> in every variant — the property surface can't distinguish them."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>label=yes/no</code> is gone and the state axis matches Input Field. Remaining: <code>Active</code> should be <code>Focused</code>, <code>Error</code> is a Status on the State axis, and <code>Large|Medium</code> diverges from <code>LG|MD</code>."
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
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All four states ship in both sizes. Remaining: label and supporting text don't mute in Disabled."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Peso glyph is now a text glyph, not a raster reference — colors with the rest of the amount."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — no native library exists yet. The structural blockers are cleared."
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
