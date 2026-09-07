import type { ComponentData, DemoControlSection } from '../types';
import { buildColorsTable } from './_helpers';

/* Demo controls for the Style tab's single spec card. */
const receiptControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'hasDescription',
        prop: 'hasdescription',
        control: 'toggle' as const,
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'hasReferenceNo',
        prop: 'hasreferenceno',
        control: 'toggle' as const,
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
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
      "text": "This is the half of the old Modal that dealt with receipts, split out into its own component. The rebuild did the important thing right: <code>⤷ TransactionSlot</code> holds real <a href=\"/components/modal-transaction-receipt-entry\">Modal - Transaction Receipt Entry</a> instances rather than hand-drawn rows, so the primitive's renames flowed straight through. Layer names, the property name, both slot names and the button component were all brought into line during this assessment, and nothing is outstanding on the component itself — Code Connect stays open only because the native library does not exist yet. The Needs Refinement badge is about handoff rather than structure: the copy control has no confirmation state and its row falls short of the platform tap-target minimums."
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
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native library does not exist yet, so there is nothing to map onto. The component side is ready: <code>ActionOrientation</code>, <code>⤷ TransactionSlot</code> and <code>⤷ ActionSlot</code> map one to one now the property name and both slot names are settled.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
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
    "heading": "ActionOrientation",
    "description": "One setting, and it reaches only the action area: the card, the transaction rows and the reference strip are identical in both. Vertical stacks two full-width buttons and stands 434 tall; Horizontal puts them side by side and stands 376. Both slots carry the same 24px padding and 8px gap — only the flow differs, which is the whole of the 58px height difference.",
    "colorsTables": [
      buildColorsTable({
        title: "Colors by Orientation",
        description: "Ten roles, identical in both orientations — the action area changes shape, not colour. The last four belong to the <code>appearance/*</code> set, which is the Button’s own variable mode rather than anything this modal sets: the buttons arrive through <code>⤷ ActionSlot</code> and bring their palette with them. The transaction rows are the same: they are <a href=\"/components/modal-transaction-receipt-entry\">Modal - Transaction Receipt Entry</a> instances, so their label and value colours are that component’s.",
        columns: ["Value"],
        rows: [
          { role: "Surface", token: "bg/color-bg", values: ["#F6F9FD"] },
          { role: "Content card", token: "bg/color-bg-main", values: ["#FFFFFF"] },
          { role: "Card hairline", token: "border/color-border-weak", values: ["#E5EBF4"] },
          { role: "#title · #description · every #value", token: "text/color-text", values: ["#0A2757"] },
          { role: "Every #label", token: "text/color-text-weaker", values: ["#6780A9"] },
          { role: "Copy icon", token: "border/color-border-primary", values: ["#005CE5"] },
          { role: "ActionSlot · filled fill", token: "appearance/container/fill", values: ["#005CE5"] },
          { role: "ActionSlot · filled label", token: "appearance/label/color", values: ["#FFFFFF"] },
          { role: "ActionSlot · outlined stroke", token: "appearance/stroke/color", values: ["#005CE5"] },
          { role: "ActionSlot · outlined label", token: "appearance/label/on-surface/color", values: ["#005CE5"] }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "mtr-spec-card-horizontal",
        "demoKey": "horizontal",
        "demoControls": receiptControls,
        "title": "Horizontal",
        "node": "5945:180029",
        "description": "",
        "previewHtml": "<div id=\"mtr-spec-horizontal\"><div class=\"eb-preview-mtr eb-preview-mtr--horizontal\"><div class=\"eb-preview-mtr__content\"><div class=\"eb-preview-mtr__title\">Put the title here</div><div class=\"eb-preview-mtr__description\">First line of text goes here<br>Second line of text goes here</div><div class=\"eb-preview-mtr__rows\"><div class=\"eb-preview-mtr__row\"><span class=\"eb-preview-mtr__row-label\">Label</span><span class=\"eb-preview-mtr__row-value\">Put content here</span></div><div class=\"eb-preview-mtr__row\"><span class=\"eb-preview-mtr__row-label\">Label</span><span class=\"eb-preview-mtr__row-value\">Put content here</span></div><div class=\"eb-preview-mtr__row\"><span class=\"eb-preview-mtr__row-label\">Label</span><span class=\"eb-preview-mtr__row-value\">Put content here</span></div></div></div><div class=\"eb-preview-mtr__reference\"><span class=\"eb-preview-mtr__row-label\">Reference Number</span><span class=\"eb-preview-mtr__row-value\">165A25912345</span><span class=\"eb-preview-mtr__copy\"></span></div><div class=\"eb-preview-mtr__actions\"><div class=\"eb-preview-mtr__btn eb-preview-mtr__btn--outlined\">Label</div><div class=\"eb-preview-mtr__btn eb-preview-mtr__btn--filled\">Label</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "ActionOrientation", "value": "Horizontal" },
              { "key": "hasDescription", "value": "true", "prop": "hasdescription" },
              { "key": "hasReferenceNo", "value": "true", "prop": "hasreferenceno" },
              { "key": "⤷ ActionSlot (slot)", "value": "2 items · horizontal flow, 320 × 98, 24px padding, 8px gap — the two buttons sit side by side" },
              { "key": "⤷ TransactionSlot (slot)", "value": "2 items · holds 3 Modal - Transaction Receipt Entry instances at Layout=Inline" },
              { "key": "Reference strip", "value": "320 × 40 · horizontal, 24px sides, 16px top and none at the bottom, gap 0 — the 40 is the Copy icon’s 24 plus that 16" },
              { "key": "Action order", "value": "Outlined left, filled right — the platform convention for a side-by-side pair" },
              { "key": "Versions", "value": "2" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#F6F9FD", "token": "bg/color-bg", "swatch": true },
              { "key": "Content card", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "Card hairline", "value": "#E5EBF4", "token": "border/color-border-weak", "swatch": true },
              { "key": "#title · #description · every #value", "value": "#0A2757", "token": "text/color-text", "swatch": true },
              { "key": "Every #label", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true },
              { "key": "Copy icon", "value": "#005CE5", "token": "border/color-border-primary", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#title", "value": "Primary/Headlines/Section", "mono": true },
              { "key": "#description", "value": "Primary/Multi-line Label/Light/Base", "mono": true },
              { "key": "Reference #label · #value", "value": "Primary/Label/Light/Small", "mono": true },
              { "key": "ActionSlot #label", "value": "Primary/Label/Large", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "376 — Hug", "mono": true },
              { "key": "Width", "value": "320", "mono": true },
              { "key": "Radius", "value": "6", "mono": true },
              { "key": "Padding H", "value": "0", "mono": true },
              { "key": "Padding V", "value": "0", "mono": true },
              { "key": "Gap", "value": "0", "mono": true },
              { "key": "Alignment", "value": "Top left", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTransactionReceiptModal</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.horizontal</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionReceiptModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBActionOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Horizontal</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "mtr-spec-card-vertical",
        "demoKey": "vertical",
        "demoControls": receiptControls,
        "title": "Vertical",
        "node": "5879:41046",
        "description": "",
        "previewHtml": "<div id=\"mtr-spec-vertical\"><div class=\"eb-preview-mtr eb-preview-mtr--vertical\"><div class=\"eb-preview-mtr__content\"><div class=\"eb-preview-mtr__title\">Put the title here</div><div class=\"eb-preview-mtr__description\">First line of text goes here<br>Second line of text goes here</div><div class=\"eb-preview-mtr__rows\"><div class=\"eb-preview-mtr__row\"><span class=\"eb-preview-mtr__row-label\">Label</span><span class=\"eb-preview-mtr__row-value\">Put content here</span></div><div class=\"eb-preview-mtr__row\"><span class=\"eb-preview-mtr__row-label\">Label</span><span class=\"eb-preview-mtr__row-value\">Put content here</span></div><div class=\"eb-preview-mtr__row\"><span class=\"eb-preview-mtr__row-label\">Label</span><span class=\"eb-preview-mtr__row-value\">Put content here</span></div></div></div><div class=\"eb-preview-mtr__reference\"><span class=\"eb-preview-mtr__row-label\">Reference Number</span><span class=\"eb-preview-mtr__row-value\">165A25912345</span><span class=\"eb-preview-mtr__copy\"></span></div><div class=\"eb-preview-mtr__actions\"><div class=\"eb-preview-mtr__btn eb-preview-mtr__btn--filled\">Label</div><div class=\"eb-preview-mtr__btn eb-preview-mtr__btn--outlined\">Label</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "ActionOrientation", "value": "Vertical" },
              { "key": "hasDescription", "value": "true", "prop": "hasdescription" },
              { "key": "hasReferenceNo", "value": "true", "prop": "hasreferenceno" },
              { "key": "⤷ ActionSlot (slot)", "value": "2 items · vertical flow, 320 × 156, 24px padding, 8px gap — the two buttons stack" },
              { "key": "⤷ TransactionSlot (slot)", "value": "2 items · holds 3 Modal - Transaction Receipt Entry instances at Layout=Inline" },
              { "key": "Reference strip", "value": "320 × 40 · horizontal, 24px sides, 16px top and none at the bottom, gap 0 — the 40 is the Copy icon’s 24 plus that 16" },
              { "key": "Action order", "value": "Filled on top, outlined beneath" },
              { "key": "Versions", "value": "2" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#F6F9FD", "token": "bg/color-bg", "swatch": true },
              { "key": "Content card", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "Card hairline", "value": "#E5EBF4", "token": "border/color-border-weak", "swatch": true },
              { "key": "#title · #description · every #value", "value": "#0A2757", "token": "text/color-text", "swatch": true },
              { "key": "Every #label", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true },
              { "key": "Copy icon", "value": "#005CE5", "token": "border/color-border-primary", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#title", "value": "Primary/Headlines/Section", "mono": true },
              { "key": "#description", "value": "Primary/Multi-line Label/Light/Base", "mono": true },
              { "key": "Reference #label · #value", "value": "Primary/Label/Light/Small", "mono": true },
              { "key": "ActionSlot #label", "value": "Primary/Label/Large", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "434 — Hug", "mono": true },
              { "key": "Width", "value": "320", "mono": true },
              { "key": "Radius", "value": "6", "mono": true },
              { "key": "Padding H", "value": "0", "mono": true },
              { "key": "Padding V", "value": "0", "mono": true },
              { "key": "Gap", "value": "0", "mono": true },
              { "key": "Alignment", "value": "Top left", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTransactionReceiptModal</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.vertical</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionReceiptModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBActionOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Vertical</span>\n<span class=\"syn-punc\">)</span>"
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/AY-Org/eb-ds-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:modal:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>modal<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Modal family: Modal, this receipt and <a href=\"/components/modal-transaction-receipt-entry\">Modal - Transaction Receipt Entry</a> all ship in <code>com.eastblue.ds:modal</code> and import <code>com.eastblue.ds.modal.*</code>."
    },
    "propertyMapping": {
      "description": "Five properties, in the order the Figma property panel lists them. Three native parameters have no row because Figma has no property behind them — <code>title</code>, <code>description</code> and the reference <code>value</code> are text layers, so a designer sets them by overriding the layer. Each boolean keeps its own parameter alongside the content it gates rather than the content being inferred from a nil, so every Figma property traces 1:1 for Code Connect. <code>hasReferenceNo</code> keeps Figma's spelling for the same reason. <code>actionOrientation</code> is a parameter in both languages rather than a SwiftUI modifier: it changes the layout of the action area, not the component's appearance.",
      "rows": [
        {
          "figma": "ActionOrientation — Horizontal, Vertical",
          "swift": "<code>actionOrientation: EBActionOrientation</code>",
          "compose": "<code>actionOrientation: EBActionOrientation</code>"
        },
        {
          "figma": "⤷ ActionSlot (slot)",
          "swift": "<code>@ViewBuilder actions: () -> Actions</code>",
          "compose": "<code>actions: @Composable () -> Unit</code>"
        },
        {
          "figma": "hasDescription — true, false",
          "swift": "<code>hasDescription: Bool = true</code>",
          "compose": "<code>hasDescription: Boolean = true</code>"
        },
        {
          "figma": "hasReferenceNo — true, false",
          "swift": "<code>hasReferenceNo: Bool = true</code>",
          "compose": "<code>hasReferenceNo: Boolean = true</code>"
        },
        {
          "figma": "⤷ TransactionSlot (slot)",
          "swift": "<code>@ViewBuilder entries: () -> Content</code>",
          "compose": "<code>entries: @Composable ColumnScope.() -> Unit</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Horizontal — two short actions side by side",
        "swift": "<span class=\"syn-type\">EBTransactionReceiptModal</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Payment successful\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.horizontal</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionReceiptModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Payment successful\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBActionOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Horizontal</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Vertical — two full-width actions stacked",
        "swift": "<span class=\"syn-type\">EBTransactionReceiptModal</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Payment successful\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.vertical</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTransactionReceiptModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Payment successful\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBActionOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Vertical</span>\n<span class=\"syn-punc\">)</span>"
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
        "notes": "<code>ActionOrientation</code> closed its space and both slots picked up the <code>⤷</code> prefix. <code>hasReferenceNo.</code> lost its trailing period this pass — it would not have survived as a native identifier in either language, and the name now traces 1:1. Nothing outstanding on this axis."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Every colour is bound and named. Six belong to this component — <code>bg/color-bg</code>, <code>bg/color-bg-main</code>, <code>border/color-border-weak</code>, <code>text/color-text</code>, <code>text/color-text-weaker</code> and <code>border/color-border-primary</code>. The other four are the <code>appearance/*</code> set, which is the Button’s own variable mode arriving through <code>⤷ ActionSlot</code> rather than anything this modal sets. All five text layers resolve to shared library styles."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A column of text, a repeated row, a strip and an action area. Both slots map to view builders and the transaction rows are <a href=\"/components/modal-transaction-receipt-entry\">Modal - Transaction Receipt Entry</a> instances, so the composition maps as cleanly as the primitive does. The one gap is that the three strings are text layers rather than properties — see C7."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Button states come from Button_New, and the transaction rows are display-only. What is missing is the copy control’s confirmation state — nothing in the component says a tap succeeded. The reference strip’s 40px height also falls short of the 44/48 tap minimum; the component ships live, so that is raised as a Design Recommendation rather than scored here."
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
        "notes": "Blocked — the native library does not exist yet. Worth noting for when it is not: <code>title</code>, <code>description</code> and the reference value are text layers rather than component properties, so Code Connect will have nothing to bind those three strings to. The five properties that do exist all trace 1:1."
      }
    ],
    "codeConnect": [],
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
      "version": "1.1.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "hasReferenceNo renamed; Style and Code tabs rebuilt — node 5879:41048",
      "rows": [
        {
          "body": "<strong><code>hasReferenceNo.</code> lost its trailing period.</strong> The name would not have survived as a native identifier in either language, so the mapping would have had to rename it and break the 1:1 trace Code Connect needs. It is <code>hasReferenceNo</code> in Figma and in both platform signatures now, spelled the same in all three.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>One card became two.</strong> <code>ActionOrientation</code> is the driving property, so Horizontal and Vertical each get a card, in the panel’s order. The single card was titled with the component’s own name and specified Vertical only.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Two properties were undocumented.</strong> The Figma panel carries <code>hasDescription</code> and <code>hasReferenceNo</code>, both defaulting to True; neither was on the page. Nothing changed in Figma for these two — <code>get_node_info</code> cannot read property definitions, and this is the fifth component in this run of reviews where the panel held more than the tree could show.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>Layout described the children rather than the component.</strong> Thirteen rows including <code>Card inset</code>, <code>Row pitch</code>, <code>Button gap</code> and <code>Button radius</code>. The seven canonical keys now come off the container’s own auto-layout panel: 434 or 376 tall and hugging, 320 wide, radius 6, no padding, no gap, top left.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The 58px between the two variants is one thing, not several.</strong> Both action slots carry the same 24px padding and 8px gap; only the flow changes. Vertical stacks two 272-wide buttons for 156; Horizontal puts two 132-wide buttons side by side for 98. Recorded on each card’s Properties row, where the old page implied two unrelated action-area specs.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The reference strip had invented padding.</strong> The preview drew <code>13px 24px</code> — symmetric, and not what the panel says. It is 24 at the sides, 16 on top and <em>none</em> at the bottom, with a gap of 0, which is why the strip had been floating away from the action area. Its 40px height is the Copy icon’s 24 plus that 16.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Five text styles were an IOU.</strong> The page carried five font specs and \"shared library styles · names pending Dev Mode read\". <code>#title</code> is <code>Primary/Headlines/Section</code>, <code>#description</code> is <code>Primary/Multi-line Label/Light/Base</code>, the reference row is <code>Primary/Label/Light/Small</code>, and the action label is <code>Primary/Label/Large</code>.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>All ten colours are named, and four of them are not this component’s.</strong> Six belong here — <code>bg/color-bg</code>, <code>bg/color-bg-main</code>, <code>border/color-border-weak</code>, <code>text/color-text</code>, <code>text/color-text-weaker</code>, <code>border/color-border-primary</code>. The other four are the <code>appearance/*</code> set, which is the Button’s own variable mode arriving through <code>⤷ ActionSlot</code>. The transaction rows are the same story: they are <a href=\"/components/modal-transaction-receipt-entry\">Entry</a> instances, so their colours are that component’s.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The preview drew in the documentation font.</strong> <code>.eb-preview-mtr</code> declared <code>font-family: inherit</code>, which resolves to the site’s <code>--font-body</code> — BarkAda. Every text layer here carries a <code>Primary/*</code> style and is Proxima Soft in Figma, so the whole card was rendering in the wrong face. The root now names Proxima Soft; no per-layer override is needed, because nothing in this component is Secondary.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Both previews are server-rendered.</strong> The static markup on each card now holds the component’s real default state, generated by the same renderer the demo uses, so what ships before JavaScript runs matches what runs after it.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. It now cites the Modal family artifact <code>com.eastblue.ds:modal:1.0.0</code> and imports <code>com.eastblue.ds.modal.*</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping missed two properties and mapped three things that are not properties.</strong> Six rows became five: the two booleans gained rows, and <code>#title</code>, <code>#description</code> and the reference value came out — all three are text layers. They are named in the description instead, since they still have to be parameters natively.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The two tabs declared different APIs.</strong> The mapping had <code>.ebActionOrientation(...)</code> — a SwiftUI modifier — against its own Compose column’s parameter, while the Style tab used a parameter in both. Settled on the parameter: <code>actionOrientation</code> changes the layout of the action area, not the component’s appearance. The same disagreement was found and settled the same way on the Entry primitive.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>A snippet claimed a default that could not be read.</strong> \"Vertical actions (default)\"; the property panel lists Horizontal first, so naming Vertical the default was a guess. Both snippets are keyed plainly to the values now and ordered to match the panel and the cards.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Three strings have nothing to bind to.</strong> Because <code>title</code>, <code>description</code> and the reference value are text layers rather than component properties, Code Connect will have no anchor for them when the native library lands. The five properties that do exist all trace 1:1. Recorded against C7, which was already open on registration.",
          "delta": { "kind": "open", "label": "C7 open" }
        },
        {
          "body": "<strong>C5 is narrowed to one item.</strong> Its note bundled the copy control’s missing confirmation state with the reference strip’s 40px height. The height falls short of the 44/48 tap minimum, but the component ships live, so that is raised as a Design Recommendation rather than scored. The confirmation state is a genuine missing interaction state and holds C5 open.",
          "delta": { "kind": "open", "label": "C5 open" }
        },
        {
          "body": "<strong>Code Connect emptied, and DEV code is live for the first time.</strong> The demo script had no <code>getSnippet</code>, so both language tabs were frozen on a static string; they now track both booleans.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
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
