import type { ComponentData, DemoControlSection } from '../types';

/* Demo controls for the Style tab's single spec card. */
const receiptControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'ActionOrientation',
        prop: 'actions',
        options: [
          { value: 'vertical', label: 'Vertical' },
          { value: 'horizontal', label: 'Horizontal' }
        ],
        defaultValue: 'vertical'
      }
    ]
  }
];

export const modalTransactionReceipt: ComponentData = {
  "meta": {
    "slug": "modal-transaction-receipt",
    "name": "Modal - Transaction Receipt",
    "node": "5879:41048",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5879-41048",
    "description": "The receipt dialog — a title, a block of transaction rows, a copyable reference number, and one or two actions.",
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
    "navGroup": "Modal",
    "verdict": {
      "kind": "keep",
      "title": "Keep — the receipt half of the old Modal, now standing on its own",
      "text": "This is the half of the old Modal that dealt with receipts, split out into its own component. The rebuild did the important thing right: <code>⤷ TransactionSlot</code> holds real <a href=\"/components/modal-transaction-receipt-entry\">Modal - Transaction Receipt Entry</a> instances rather than hand-drawn rows, so the primitive's renames flowed straight through. Layer names, the property name, both slot names and the button component were all brought into line during this assessment, and nothing is outstanding. The Needs Refinement badge is about handoff rather than structure: the copy control has no confirmation state and its row falls short of the platform tap-target minimums."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"mtr-demo-preview\"><div class=\"eb-preview-mtr eb-preview-mtr--vertical\"><div class=\"eb-preview-mtr__content\"><div class=\"eb-preview-mtr__title\">Put the title here</div><div class=\"eb-preview-mtr__description\">First line of text goes here<br>Second line of text goes here</div><div class=\"eb-preview-mtr__rows\"><div class=\"eb-preview-mtr__row\"><span class=\"eb-preview-mtr__row-label\">Label</span><span class=\"eb-preview-mtr__row-value\">Put content here</span></div><div class=\"eb-preview-mtr__row\"><span class=\"eb-preview-mtr__row-label\">Label</span><span class=\"eb-preview-mtr__row-value\">Put content here</span></div><div class=\"eb-preview-mtr__row\"><span class=\"eb-preview-mtr__row-label\">Label</span><span class=\"eb-preview-mtr__row-value\">Put content here</span></div></div></div><div class=\"eb-preview-mtr__reference\"><span class=\"eb-preview-mtr__row-label\">Reference Number</span><span class=\"eb-preview-mtr__row-value\">165A25912345</span><span class=\"eb-preview-mtr__copy\"></span></div><div class=\"eb-preview-mtr__actions\"><div class=\"eb-preview-mtr__btn eb-preview-mtr__btn--filled\">Label</div><div class=\"eb-preview-mtr__btn eb-preview-mtr__btn--outlined\">Label</div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">ActionOrientation</span><select id=\"mtr-ctrl-actions\" class=\"demo-panel-select\" onchange=\"_mtrUpdate()\"><option value=\"vertical\" selected=\"\">Vertical</option><option value=\"horizontal\">Horizontal</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#title</span><input type=\"text\" id=\"mtr-ctrl-title\" class=\"demo-panel-select demo-panel-input\" value=\"Put the title here\" oninput=\"_mtrUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Reference #value</span><input type=\"text\" id=\"mtr-ctrl-ref\" class=\"demo-panel-select demo-panel-input\" value=\"165A25912345\" oninput=\"_mtrUpdate()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Every receipt in the product is this component with different rows in the slot. Nothing about the structure is tied to one transaction type."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own surface, card, hairline, type styles and spacing. The scrim sits outside it deliberately — <a href=\"/components/overlay\">Overlay</a> owns that, and this component owns the card."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>Content</code>, <code>TransactionDetails</code>, <code>Container</code>, <code>Reference</code>, <code>ReferenceNumber</code>, <code>⤷ TransactionSlot</code> and <code>⤷ ActionSlot</code> all follow the family conventions after this pass, and <code>ActionOrientation</code> matches the property name on <a href=\"/components/modal\">Modal</a>."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "It composes the row primitive three times through a real slot, and takes its buttons from <code>Button_New</code> rather than drawing them. Both slots accept substituted content without detaching."
      }
    ],
    "behavior": [
      {
        "state": "ActionOrientation=Vertical",
        "ios": "na",
        "android": "na",
        "property": "320 × 434",
        "notes": "Two full-width buttons stacked, primary on top. The action area is 156 tall."
      },
      {
        "state": "ActionOrientation=Horizontal",
        "ios": "na",
        "android": "na",
        "property": "320 × 376",
        "notes": "Two 132-wide buttons side by side, primary on the right. The action area is 98 tall; everything above it is unchanged."
      },
      {
        "state": "⤷ TransactionSlot",
        "ios": "na",
        "android": "na",
        "property": "3 × Entry",
        "notes": "Holds Modal - Transaction Receipt Entry instances in their Inline layout. Row count is set by the content, not by a variant."
      },
      {
        "state": "Copy",
        "ios": "na",
        "android": "na",
        "property": "24 × 24 icon",
        "notes": "Copies the reference number. The whole reference row is the tap target, not just the icon."
      }
    ],
    "resolved": [
      {
        "headline": "The transaction rows are real instances.",
        "body": "<code>⤷ TransactionSlot</code> holds three <a href=\"/components/modal-transaction-receipt-entry\">Modal - Transaction Receipt Entry</a> instances. This is what proves the split worked — when the primitive's <code>#name</code> and <code>#text</code> were renamed to <code>#label</code> and <code>#value</code>, all three rows updated without being touched.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The property name lost its space.",
        "body": "<code>Action Orientation</code> became <code>ActionOrientation</code>. It was the only variant property in the system with a space in it, and because the property name becomes the native parameter, a space would have forced a rename at the Code Connect boundary.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Layer names match the rest of the family.",
        "body": "<code>content</code> became <code>Content</code>, <code>transaction-details</code> became <code>TransactionDetails</code>, and <code>container</code> became <code>Container</code> — the PascalCase convention already settled on Date Picker, Voucher and Countdown.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The spacer-shaped name is gone.",
        "body": "<code>reference-offset</code> became <code>Reference</code>. The old name described a layout side-effect rather than the content, which is the kind of name that survives into a native layout and confuses whoever reads it next.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The reference row says what it is.",
        "body": "<code>For Receipt</code> became <code>ReferenceNumber</code>, and its two text layers picked up <code>#label</code> and <code>#value</code> to match the primitive's vocabulary even though the row is not an instance of it. The name landed spaced at first and was joined in a later pass, settling the convention against <code>TransactionDetails</code> beside it — the displayed copy still reads \"Reference Number\", since that is text rather than a layer name.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Both modals now use the same button.",
        "body": "This component was instancing <code>Button - Large/Medium</code> while <a href=\"/components/modal\">Modal</a> used <code>Button_New</code> — two different masters with different internal structure in one family. <code>Button_New</code> won, so the label is addressable as <code>#label</code> in both.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The reference row is a deliberate duplicate, not an oversight.",
        "body": "It is styled identically to a Modal - Transaction Receipt Entry in its Inline layout, and the obvious move is to instance it. Confirmed as intentional instead: it does not function as a transaction entry — it sits outside the receipt card on the grey strip and carries a copy control. It is documented here so the parallel styling is maintained on purpose rather than drifting by accident.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The title's tracking is a token style.",
        "body": "<code>#title</code> is the only text in the component at 0 tracking while everything else sits at +0.25. Confirmed as the bound text style rather than a loose override.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "No close control is intentional.",
        "body": "There is no X and no scrim in the component. Dismissal runs through the action buttons, and the scrim belongs to <a href=\"/components/overlay\">Overlay</a> — this component is the card only.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Both slots carry the ⤷ prefix.",
        "body": "<code>Transaction Slot</code> and <code>Action Slot</code> became <code>⤷ TransactionSlot</code> and <code>⤷ ActionSlot</code> on both variants. The prefix is how a slot is told apart from an ordinary frame at a glance, so a half-applied convention was worse than none — the Action Slot rename landed last and closed it.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Give the reference row a real tap target height.",
        "body": "The copy affordance is a 24×24 icon, below the 44×44 iOS and 48×48 Android minimums. Confirmed that the whole row is the tap target rather than the icon alone, which solves the width — but the row is only 14 tall inside a 40 tall strip, so the height still needs to reach 44. Raising the <code>Reference</code> frame to 48 and centring its contents covers both platforms without changing the layout.",
        "tag": "A11y"
      },
      {
        "headline": "Keep the reference row in step with the primitive.",
        "body": "It duplicates Modal - Transaction Receipt Entry's Inline styling by hand, deliberately. That means any change to the primitive's type or colour has to be mirrored here, and nothing in Figma will warn you. Worth a note on the component so the next person to touch the primitive knows to check this row.",
        "tag": "Docs"
      },
      {
        "headline": "Confirm the copy control has a confirmation.",
        "body": "Copying a reference number with no feedback leaves the user unsure it worked. Whether that is a toast, a swap to a check icon, or a haptic is a product decision, but it should be settled before handoff — the component shows no state for it today.",
        "tag": "State"
      },
      {
        "headline": "Publish the token names once Dev Mode is read.",
        "body": "Fills across the component resolve to library variables and the text carries shared library styles — verified on the reference row's own nodes — but the read-only tools return IDs rather than names, so the spec tables carry hex values only.",
        "tag": "Token"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"/components/modal-transaction-receipt-entry\">Modal - Transaction Receipt Entry</a> supplies every row in the slot. <a href=\"/components/modal\">Modal</a> is the general-purpose dialog this was split away from. <a href=\"/components/overlay\">Overlay</a> supplies the scrim behind both.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Structure",
    "specCards": [
      {
        "cardKey": "mtr-spec-card-default",
        "demoKey": "default",
        "demoControls": receiptControls,
        "title": "Modal - Transaction Receipt",
        "node": "5879:41048",
        "description": "A white card on a grey surface, a grey reference strip beneath it, and the action area last. Only the action area changes between the two variants.",
        "previewHtml": "<div id=\"mtr-spec-default\"><div class=\"eb-preview-mtr eb-preview-mtr--vertical\"><div class=\"eb-preview-mtr__content\"><div class=\"eb-preview-mtr__title\">Put the title here</div><div class=\"eb-preview-mtr__description\">First line of text goes here<br>Second line of text goes here</div><div class=\"eb-preview-mtr__rows\"><div class=\"eb-preview-mtr__row\"><span class=\"eb-preview-mtr__row-label\">Label</span><span class=\"eb-preview-mtr__row-value\">Put content here</span></div><div class=\"eb-preview-mtr__row\"><span class=\"eb-preview-mtr__row-label\">Label</span><span class=\"eb-preview-mtr__row-value\">Put content here</span></div><div class=\"eb-preview-mtr__row\"><span class=\"eb-preview-mtr__row-label\">Label</span><span class=\"eb-preview-mtr__row-value\">Put content here</span></div></div></div><div class=\"eb-preview-mtr__reference\"><span class=\"eb-preview-mtr__row-label\">Reference Number</span><span class=\"eb-preview-mtr__row-value\">165A25912345</span><span class=\"eb-preview-mtr__copy\"></span></div><div class=\"eb-preview-mtr__actions\"><div class=\"eb-preview-mtr__btn eb-preview-mtr__btn--filled\">Label</div><div class=\"eb-preview-mtr__btn eb-preview-mtr__btn--outlined\">Label</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "ActionOrientation", "value": "Vertical", "prop": "actions",
                "variants": {
                  "actions:horizontal": { "value": "Horizontal" }
                }
              },
              { "key": "⤷ TransactionSlot", "value": "3 × Entry (Inline)" },
              { "key": "⤷ ActionSlot", "value": "2 × Button_New" },
              { "key": "#title", "value": "Put the title here" },
              { "key": "#description", "value": "Two lines of supporting copy" },
              { "key": "Copy", "value": "24 × 24 icon instance" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#F6F9FD", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Card", "value": "#FFFFFF", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Card hairline", "value": "#E5EBF4", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "#title", "value": "#0A2757", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "#description", "value": "#0A2757", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Row #label", "value": "#6780A9", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Row #value", "value": "#0A2757", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Button filled bg", "value": "#005CE5", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Button outlined border", "value": "#005CE5", "token": "library variable · name pending Dev Mode read", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "320", "mono": true },
              { "key": "Height", "value": "434", "mono": true,
                "variants": {
                  "actions:horizontal": { "value": "376" }
                }
              },
              { "key": "Corner radius", "value": "6", "mono": true },
              { "key": "Card height", "value": "238", "mono": true },
              { "key": "Card inset", "value": "24", "mono": true },
              { "key": "#title to #description", "value": "16", "mono": true },
              { "key": "Container to slot", "value": "12", "mono": true },
              { "key": "Row pitch", "value": "36 — 24 tall, 12 gap", "mono": true },
              { "key": "Reference", "value": "320 × 40 — holds ReferenceNumber + Copy", "mono": true },
              { "key": "Action area", "value": "320 × 156", "mono": true,
                "variants": {
                  "actions:horizontal": { "value": "320 × 98" }
                }
              },
              { "key": "Button size", "value": "272 × 50", "mono": true,
                "variants": {
                  "actions:horizontal": { "value": "132 × 50" }
                }
              },
              { "key": "Button gap", "value": "8", "mono": true },
              { "key": "Button radius", "value": "99", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text styles", "value": "shared library styles · names pending Dev Mode read", "mono": true },
              { "key": "#title", "value": "Proxima Soft Bold · 22 / 26 · 0", "mono": true },
              { "key": "#description", "value": "Proxima Soft SemiBold · 16 / 20 · +0.25", "mono": true },
              { "key": "Row #label / #value", "value": "Proxima Soft SemiBold · 14 / 14 · +0.25", "mono": true },
              { "key": "Reference row", "value": "Proxima Soft SemiBold · 14 / 14 · +0.25", "mono": true },
              { "key": "Button #label", "value": "Proxima Soft Bold · 18 / 18 · +0.25", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTransactionReceiptModal</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Payment successful\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Your payment has been sent.\"</span><span class=\"syn-punc\">,</span>\n    reference<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"165A25912345\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>entries<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> $0<span class=\"syn-punc\">.</span>label<span class=\"syn-punc\">,</span> value<span class=\"syn-punc\">:</span> $0<span class=\"syn-punc\">.</span>value<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBTransactionReceiptModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Payment successful\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Your payment has been sent.\"</span><span class=\"syn-punc\">,</span>\n    reference <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"165A25912345\"</span>\n<span class=\"syn-punc\">) {</span>\n    entries<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>it<span class=\"syn-punc\">.</span>label<span class=\"syn-punc\">,</span> it<span class=\"syn-punc\">.</span>value<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">}</span>"
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "Swift Package Manager",
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/gcash/east-blue-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Gradle",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.gcash.eastblue:components:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. Snippets show the intended shape, not shipped code."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters.",
      "rows": [
        {
          "figma": "ActionOrientation",
          "swift": ".ebActionOrientation(.vertical / .horizontal)",
          "compose": "actionOrientation: EBActionOrientation"
        },
        {
          "figma": "#title",
          "swift": "title: String",
          "compose": "title: String"
        },
        {
          "figma": "#description",
          "swift": "description: String?",
          "compose": "description: String?"
        },
        {
          "figma": "⤷ TransactionSlot",
          "swift": "@ViewBuilder entries: () -> Content",
          "compose": "entries: @Composable ColumnScope.() -> Unit"
        },
        {
          "figma": "ReferenceNumber · #value",
          "swift": "reference: String?",
          "compose": "reference: String?"
        },
        {
          "figma": "⤷ ActionSlot",
          "swift": "@ViewBuilder actions: () -> Actions",
          "compose": "actions: @Composable () -> Unit"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Vertical actions (default)",
        "swift": "<span class=\"syn-type\">EBTransactionReceiptModal</span><span class=\"syn-punc\">(</span>title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Payment successful\"</span><span class=\"syn-punc\">,</span> reference<span class=\"syn-punc\">:</span> ref<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>entries<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> $0<span class=\"syn-punc\">.</span>label<span class=\"syn-punc\">,</span> value<span class=\"syn-punc\">:</span> $0<span class=\"syn-punc\">.</span>value<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">} </span>actions<span class=\"syn-punc\">: {</span>\n    <span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Done\"</span><span class=\"syn-punc\">) {</span> dismiss<span class=\"syn-punc\">() }</span>\n    <span class=\"syn-type\">EBOutlinedButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Share\"</span><span class=\"syn-punc\">) {</span> share<span class=\"syn-punc\">() }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBTransactionReceiptModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Payment successful\"</span><span class=\"syn-punc\">,</span>\n    reference <span class=\"syn-eq\">=</span> ref<span class=\"syn-punc\">,</span>\n    entries <span class=\"syn-eq\">= {</span> entries<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>it<span class=\"syn-punc\">.</span>label<span class=\"syn-punc\">,</span> it<span class=\"syn-punc\">.</span>value<span class=\"syn-punc\">) } }</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Done\"</span><span class=\"syn-punc\">,</span> onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">::</span>dismiss<span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBOutlinedButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Share\"</span><span class=\"syn-punc\">,</span> onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">::</span>share<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "Horizontal actions",
        "swift": "<span class=\"syn-type\">EBTransactionReceiptModal</span><span class=\"syn-punc\">(</span>title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Payment successful\"</span><span class=\"syn-punc\">,</span> reference<span class=\"syn-punc\">:</span> ref<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>entries<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">EBTransactionReceiptEntry</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">:</span> $0<span class=\"syn-punc\">.</span>label<span class=\"syn-punc\">,</span> value<span class=\"syn-punc\">:</span> $0<span class=\"syn-punc\">.</span>value<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebActionOrientation</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.horizontal</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionReceiptModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Payment successful\"</span><span class=\"syn-punc\">,</span>\n    reference <span class=\"syn-eq\">=</span> ref<span class=\"syn-punc\">,</span>\n    actionOrientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBActionOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Horizontal</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-punc\">/* </span>actions<span class=\"syn-punc\"> */ }</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Dialog announced on present",
        "ios": "<code>.accessibilityAddTraits(.isModal)</code>, focus moves to <code>#title</code>",
        "android": "<code>Dialog</code> with <code>Modifier.semantics { paneTitle = title }</code>"
      },
      {
        "requirement": "Each receipt row reads as one unit",
        "ios": "Handled by the entry primitive's <code>.combine</code>",
        "android": "Handled by the entry primitive's <code>mergeDescendants</code>"
      },
      {
        "requirement": "Copy control has a name and a tap target",
        "ios": "<code>.accessibilityLabel(\"Copy reference number\")</code>, 44×44 minimum",
        "android": "<code>contentDescription = \"Copy reference number\"</code>, 48dp minimum"
      },
      {
        "requirement": "Copy result is announced",
        "ios": "<code>UIAccessibility.post(.announcement, \"Copied\")</code>",
        "android": "<code>announceForAccessibility(\"Copied\")</code>"
      },
      {
        "requirement": "Primary action is reachable first",
        "ios": "Primary precedes secondary in the accessibility order in both orientations",
        "android": "Primary precedes secondary in the traversal order in both orientations"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use vertical actions when both labels are long or the secondary action matters.",
        "dontText": "Don't use horizontal actions with labels that will truncate at 132px."
      },
      {
        "doText": "Fill the slot with entry instances so type and colour stay inherited.",
        "dontText": "Don't detach a row to change one value — override the text on the instance."
      },
      {
        "doText": "Keep the reference number in the grey strip where the copy control lives.",
        "dontText": "Don't add the reference as a fourth row in the transaction slot; it has different behaviour."
      },
      {
        "doText": "Pair the modal with Overlay for the scrim.",
        "dontText": "Don't build a scrim into the card — this component is the card only."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Content</code>, <code>TransactionDetails</code>, <code>Container</code>, <code>Reference</code> and <code>ReferenceNumber</code> all renamed to the family convention this pass."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>ActionOrientation</code> closed its space, and both slots picked up the <code>⤷</code> prefix. Nothing outstanding."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Fills resolve to library variables and text carries shared library styles — verified on the component's own nodes. The title's 0 tracking is part of its bound style."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A column of text, a repeated row, a strip and an action area. Both slots map to view builders, and the button component is now shared with Modal."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Button states come from Button_New. The copy control has no confirmation state, and the reference row's 40px height falls short of the 44/48 tap minimum."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The copy glyph is a clean vector instance. Its master carries hidden icon-grid scaffolding, which is an icon-library concern rather than a fault here."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — the native library does not exist yet."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>ActionOrientation</code>, <code>⤷ TransactionSlot</code> and <code>⤷ ActionSlot</code> all map one to one with no rename at the boundary."
      },
      {
        "aspect": "Token coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Bindings are in place; only the human-readable names are outstanding."
      },
      {
        "aspect": "Registration",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until the native library exists."
      }
    ],
    "variants": {
      "total": 2,
      "description": "1 component set × 2 ActionOrientation values = 2 variants. Everything above the action area is identical between them; row count comes from the slot, not from a variant.",
      "columns": ["ActionOrientation", "Size", "Action area", "Buttons", "Node"],
      "rows": [
        { "cells": ["Vertical", "320 × 434", "320 × 156", "2 × 272 × 50, primary on top", "5879:41046"] },
        { "cells": ["Horizontal", "320 × 376", "320 × 98", "2 × 132 × 50, primary on right", "5945:180029"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.0.0",
      "date": "August 2026",
      "kind": "initial",
      "kindLabel": "Initial",
      "header": "First assessment · node 5879:41048",
      "rows": [
        {
          "body": "New component. Split out of the old <a href=\"/components/modal\">Modal</a> (<code>18507:71705</code>), which was carrying both a general-purpose dialog and this receipt layout in one set.",
          "delta": { "kind": "added", "label": "Added" }
        },
        {
          "body": "<code>Action Orientation</code> renamed to <code>ActionOrientation</code> — the only variant property in the system that still had a space in it.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<code>content</code>, <code>transaction-details</code> and <code>container</code> renamed to PascalCase; <code>reference-offset</code> renamed to <code>Reference</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<code>For Receipt</code> renamed to <code>ReferenceNumber</code>, with its text layers renamed to <code>#label</code> and <code>#value</code>. The space was closed in a follow-up so the layer matches <code>TransactionDetails</code>; the displayed copy still reads \"Reference Number\".",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<code>Transaction Slot</code> and <code>Action Slot</code> renamed to <code>⤷ TransactionSlot</code> and <code>⤷ ActionSlot</code>.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "Buttons switched from <code>Button - Large/Medium</code> to <code>Button_New</code>, so both modals in the family share one button component.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "Renamed from <code>Transaction Receipt Modal</code> to <code>Modal - Transaction Receipt</code>.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        }
      ]
    }
  ]
};
