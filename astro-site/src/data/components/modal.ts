import type { ComponentData, DemoControlSection } from '../types';
import { buildColorsTable } from './_helpers';

/* Demo controls for the Style tab's single spec card. */
const modalControls: DemoControlSection[] = [
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
        label: 'hasIcon',
        prop: 'hasicon',
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

export const modal: ComponentData = {
  "meta": {
    "slug": "modal",
    "name": "Modal",
    "node": "5879:41278",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5879-41278",
    "description": "The general-purpose dialog — an optional illustration, a centred title and description, and one or two actions.",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "ready",
        "label": "Ready"
      }
    ],
    "navGroup": "Modal",
    "verdict": {
      "kind": "keep",
      "title": "Keep — the restructure the first assessment asked for has happened",
      "text": "The April assessment flagged this component for carrying two unrelated things in one set: a general-purpose dialog and a transaction receipt. It recommended splitting them and extracting <code>EBTransactionReceipt</code>. That is exactly what the 2026 rebuild did — the receipt layouts are now <a href=\"/components/modal-transaction-receipt\">Modal - Transaction Receipt</a>, and what remains here is the dialog on its own. The <code>_space_*</code> spacer rectangles are gone, the hardcoded placeholder circle is a real <code>⤷ IconSlot</code>, and the mixed-casing enums are one clean <code>ActionOrientation</code>. Nothing is outstanding on the component itself; Code Connect stays open because the native library does not exist yet."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"mdl-demo-preview\"><div class=\"eb-preview-mdl eb-preview-mdl--vertical\"><div class=\"eb-preview-mdl__content\"><div class=\"eb-preview-mdl__icon\"><span>Icon</span></div><div class=\"eb-preview-mdl__title\">Put the title here</div><div class=\"eb-preview-mdl__description\">Add description here.<br>Add description here.</div></div><div class=\"eb-preview-mdl__actions\"><div class=\"eb-preview-mdl__btn eb-preview-mdl__btn--filled\">Label</div><div class=\"eb-preview-mdl__btn eb-preview-mdl__btn--outlined\">Label</div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">ActionOrientation</span><select id=\"mdl-ctrl-actions\" class=\"demo-panel-select\" onchange=\"_mdlUpdate()\"><option value=\"vertical\" selected=\"\">Vertical</option><option value=\"horizontal\">Horizontal</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasIcon</span><select id=\"mdl-ctrl-hasicon\" class=\"demo-panel-select\" onchange=\"_mdlUpdate()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#title</span><input type=\"text\" id=\"mdl-ctrl-title\" class=\"demo-panel-select demo-panel-input\" value=\"Put the title here\" oninput=\"_mdlUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#description</span><input type=\"text\" id=\"mdl-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"Add description here. Add description here.\" oninput=\"_mdlUpdate()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Now that the receipt layouts have moved out, this is a dialog and nothing else — a slot, two text layers and an action area. Any confirmation, warning or prompt in the product is this component with different content."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own surface, radius, type styles and spacing, all bound to library variables. The scrim sits deliberately outside it in <a href=\"/components/overlay\">Overlay</a>, which is what resolved the duplicate-scope flag from the first assessment."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>Container</code>, <code>Content</code>, <code>⤷ IconSlot</code>, <code>⤷ ActionSlot</code>, <code>#title</code> and <code>#description</code> all match the conventions settled across Date Picker, Voucher and Countdown. <code>hasIcon</code> follows the boolean prefix already used by Ad Carousel's <code>hasCTA</code>."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Two real slots, both accepting substituted content without detaching. The buttons come from <code>Button_New</code>, the same component the receipt modal now uses."
      }
    ],
    "behavior": [
      {
        "state": "ActionOrientation=Vertical",
        "ios": "na",
        "android": "na",
        "property": "320 × 370",
        "notes": "Two full-width buttons stacked, primary on top. The action area is 156 tall."
      },
      {
        "state": "ActionOrientation=Horizontal",
        "ios": "na",
        "android": "na",
        "property": "320 × 312",
        "notes": "Two 132-wide buttons side by side, primary on the right. Everything above the action area is unchanged."
      },
      {
        "state": "hasIcon=true",
        "ios": "na",
        "android": "na",
        "property": "default",
        "notes": "Shows the 92 × 92 illustration slot with its Placeholder instance."
      },
      {
        "state": "hasIcon=false",
        "ios": "na",
        "android": "na",
        "property": "collapsed",
        "notes": "Collapses the slot and the 16px below it, taking 108 off the height."
      }
    ],
    "resolved": [
      {
        "headline": "The receipt layouts moved out.",
        "body": "The first assessment flagged this set for compressing a general-purpose dialog and a transaction receipt into one component with different information architectures and different native mappings. <code>transaction_v1</code> and <code>transaction_v2</code> are now <a href=\"/components/modal-transaction-receipt\">Modal - Transaction Receipt</a>, and the row inside it is <a href=\"/components/modal-transaction-receipt-entry\">Modal - Transaction Receipt Entry</a>.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The spacer rectangles are gone.",
        "body": "The old build used opacity-0 <code>_space_*</code> rectangles to fake gaps. Spacer nodes have no native equivalent — auto layout spacing does the job — and the rebuild removed them.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The placeholder circle is a real slot.",
        "body": "The illustration used to be a hardcoded circle drawn into the component. It is now <code>⤷ IconSlot</code>, a 92 × 92 slot holding a <code>Placeholder</code> instance that consumers swap.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The illustration can be switched off.",
        "body": "The slot was empty and always on, so every dialog reserved 116px for an illustration whether or not it had one, with no way to collapse it. A <code>hasIcon</code> boolean now controls it, defaulting to true, and a Placeholder gives consumers a starting point.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "The enums are one clean property.",
        "body": "The old set mixed casing and styles across two axes — <code>transaction_v1</code> alongside <code>1 - vertical</code> — with a sparse CTA matrix. What is left is <code>ActionOrientation = Vertical | Horizontal</code>, renamed during this pass to close the space it used to carry.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Both modals share one button.",
        "body": "This component was on <code>Button_New</code> while the receipt modal was still on <code>Button - Large/Medium</code> — two masters with different internal structure in one family. The receipt moved across, so the label is addressable as <code>#label</code> in both.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "The BarkAda description is deliberate.",
        "body": "The first assessment left this open as a question for design. Confirmed: BarkAda is the secondary face, used for longer copy at smaller sizes, while Proxima Soft carries titles, labels and shorter or larger text. That is why this description is BarkAda 14/20 and the receipt modal's is Proxima Soft 16/20 — a rule, not drift.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "The Container wrapper earns its place.",
        "body": "It has the same bounds and radius as the variant frame around it, which usually means a level that can be removed. Confirmed that it holds the auto layout, so it stays.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Centred here, left-aligned in the receipt.",
        "body": "<code>#title</code> and <code>#description</code> are centred in this component and left-aligned in <a href=\"/components/modal-transaction-receipt\">Modal - Transaction Receipt</a>. Confirmed as intentional: a confirmation dialog centres, and a receipt is left-aligned tabular data.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native library does not exist yet, so there is nothing to map onto. The component side is ready: <code>ActionOrientation</code>, <code>hasIcon</code>, both <code>⤷</code> slots and the two text layers map one to one with no rename at the boundary.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Tidy the Placeholder's own layer names.",
        "body": "The instance filling <code>⤷ IconSlot</code> wraps a lowercase <code>container</code> frame. It belongs to the Placeholder component rather than to Modal, so it is not a fault here, but it is the same PascalCase convention the rest of the family has adopted and worth passing upstream.",
        "tag": "Docs"
      },
      {
        "headline": "Give the dialog a loading state.",
        "body": "Confirmations that trigger a network call leave the primary button with nowhere to go while it waits. The first assessment raised this and it is still true. Whether it lives on the button or on the modal is a Button family decision, so it belongs there rather than here.",
        "tag": "State"
      },
      {
        "headline": "Publish the token names once Dev Mode is read.",
        "body": "Fills resolve to library variables and the text carries shared library styles — verified on the component's own nodes, and <code>#description</code> shares its variable with the receipt modal's row labels. The read-only tools return IDs rather than names, so the spec tables carry hex values only.",
        "tag": "Token"
      },
      {
        "headline": "Pair it with Overlay in documentation.",
        "body": "This component is the card. The scrim is <a href=\"/components/overlay\">Overlay</a>. That split resolved the duplicate-scope flag from the first assessment, but it only works if both pages say so — otherwise the next person builds a scrim into the card again.",
        "tag": "Docs"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"/components/modal-transaction-receipt\">Modal - Transaction Receipt</a> is the receipt half that was split out of this component, and <a href=\"/components/modal-transaction-receipt-entry\">Modal - Transaction Receipt Entry</a> is the row inside it. <a href=\"/components/overlay\">Overlay</a> supplies the scrim. <a href=\"/components/bottom-sheet\">Bottom Sheet</a> is the non-blocking alternative.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "ActionOrientation",
    "description": "One setting, reaching only the action area: the Content box is 320 × 214 in both, and the whole 58px difference is the slot stacking its two buttons instead of placing them side by side. Modal is the one component in this family that genuinely uses both faces — <code>#title</code> is Proxima Soft and <code>#description</code> is BarkAda, which the type rows name rather than leaving to inheritance.",
    "colorsTables": [
      buildColorsTable({
        title: "Colors by Orientation",
        description: "Eight roles, identical in both orientations — the action area changes shape, not colour. Four belong to this component; the other four are the <code>appearance/*</code> set, which is the Button’s own variable mode arriving through <code>⤷ ActionSlot</code> rather than anything the modal sets. The 92 × 92 circle in the icon slot is a placeholder: real usage swaps it, and the illustration brings its own colour.",
        columns: ["Value"],
        rows: [
          { role: "Surface", token: "bg/color-bg-main", values: ["#FFFFFF"] },
          { role: "#title", token: "text/color-text", values: ["#0A2757"] },
          { role: "#description", token: "text/color-text-weaker", values: ["#6780A9"] },
          { role: "IconSlot placeholder", token: "border/color-border", values: ["#D7E0EF"] },
          { role: "ActionSlot · filled fill", token: "appearance/container/fill", values: ["#005CE5"] },
          { role: "ActionSlot · filled label", token: "appearance/label/color", values: ["#FFFFFF"] },
          { role: "ActionSlot · outlined stroke", token: "appearance/stroke/color", values: ["#005CE5"] },
          { role: "ActionSlot · outlined label", token: "appearance/label/on-surface/color", values: ["#005CE5"] }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "mdl-spec-card-vertical",
        "demoKey": "vertical",
        "demoControls": modalControls,
        "title": "Vertical",
        "node": "5879:41275",
        "description": "",
        "previewHtml": "<div id=\"mdl-spec-vertical\"><div class=\"eb-preview-mdl eb-preview-mdl--vertical\"><div class=\"eb-preview-mdl__content\"><div class=\"eb-preview-mdl__icon\"><span>Icon</span></div><div class=\"eb-preview-mdl__title\">Put the title here</div><div class=\"eb-preview-mdl__description\">Add description here.<br>Add description here.</div></div><div class=\"eb-preview-mdl__actions\"><div class=\"eb-preview-mdl__btn eb-preview-mdl__btn--filled\">Label</div><div class=\"eb-preview-mdl__btn eb-preview-mdl__btn--outlined\">Label</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "ActionOrientation", "value": "Vertical" },
              { "key": "hasDescription", "value": "true", "prop": "hasdescription" },
              { "key": "hasIcon", "value": "true", "prop": "hasicon" },
              { "key": "⤷ IconSlot (slot)", "value": "2 items · 92 × 92, filled by a Placeholder circle in the published variants" },
              { "key": "⤷ ActionSlot (slot)", "value": "2 items · vertical flow, 320 × 156, 24px padding, 8px gap — the two buttons stack" },
              { "key": "Content box", "value": "320 × 214 · vertical, 24px sides, 24px top and none at the bottom, gap 16, top centre" },
              { "key": "Action order", "value": "Filled on top, outlined beneath" },
              { "key": "Versions", "value": "2" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "#title", "value": "#0A2757", "token": "text/color-text", "swatch": true },
              { "key": "#description", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true },
              { "key": "IconSlot placeholder", "value": "#D7E0EF", "token": "border/color-border", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#title", "value": "Primary/Headlines/Section", "mono": true },
              { "key": "#description", "value": "Secondary/Default/Base", "mono": true },
              { "key": "ActionSlot #label", "value": "Primary/Label/Large", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "370 — Hug", "mono": true },
              { "key": "Width", "value": "320 — Fill", "mono": true },
              { "key": "Radius", "value": "6", "mono": true },
              { "key": "Padding H", "value": "0", "mono": true },
              { "key": "Padding V", "value": "0", "mono": true },
              { "key": "Gap", "value": "0", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.vertical</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBActionOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Vertical</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "mdl-spec-card-horizontal",
        "demoKey": "horizontal",
        "demoControls": modalControls,
        "title": "Horizontal",
        "node": "5879:41276",
        "description": "",
        "previewHtml": "<div id=\"mdl-spec-horizontal\"><div class=\"eb-preview-mdl eb-preview-mdl--horizontal\"><div class=\"eb-preview-mdl__content\"><div class=\"eb-preview-mdl__icon\"><span>Icon</span></div><div class=\"eb-preview-mdl__title\">Put the title here</div><div class=\"eb-preview-mdl__description\">Add description here.<br>Add description here.</div></div><div class=\"eb-preview-mdl__actions\"><div class=\"eb-preview-mdl__btn eb-preview-mdl__btn--outlined\">Label</div><div class=\"eb-preview-mdl__btn eb-preview-mdl__btn--filled\">Label</div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "ActionOrientation", "value": "Horizontal" },
              { "key": "hasDescription", "value": "true", "prop": "hasdescription" },
              { "key": "hasIcon", "value": "true", "prop": "hasicon" },
              { "key": "⤷ IconSlot (slot)", "value": "2 items · 92 × 92, filled by a Placeholder circle in the published variants" },
              { "key": "⤷ ActionSlot (slot)", "value": "2 items · horizontal flow, 320 × 98, 24px padding, 8px gap — the two buttons sit side by side" },
              { "key": "Content box", "value": "320 × 214 · vertical, 24px sides, 24px top and none at the bottom, gap 16, top centre" },
              { "key": "Action order", "value": "Outlined left, filled right" },
              { "key": "Versions", "value": "2" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true },
              { "key": "#title", "value": "#0A2757", "token": "text/color-text", "swatch": true },
              { "key": "#description", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true },
              { "key": "IconSlot placeholder", "value": "#D7E0EF", "token": "border/color-border", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#title", "value": "Primary/Headlines/Section", "mono": true },
              { "key": "#description", "value": "Secondary/Default/Base", "mono": true },
              { "key": "ActionSlot #label", "value": "Primary/Label/Large", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "312 — Hug", "mono": true },
              { "key": "Width", "value": "320 — Fill", "mono": true },
              { "key": "Radius", "value": "6", "mono": true },
              { "key": "Padding H", "value": "0", "mono": true },
              { "key": "Padding V", "value": "0", "mono": true },
              { "key": "Gap", "value": "0", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.horizontal</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBActionOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Horizontal</span>\n<span class=\"syn-punc\">)</span>"
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
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Modal family: this component, <a href=\"/components/modal-transaction-receipt\">Modal - Transaction Receipt</a> and <a href=\"/components/modal-transaction-receipt-entry\">its Entry</a> all ship in <code>com.eastblue.ds:modal</code> and import <code>com.eastblue.ds.modal.*</code>."
    },
    "propertyMapping": {
      "description": "Five properties, in the order the Figma property panel lists them. <code>title</code> and <code>description</code> have no rows because <code>#title</code> and <code>#description</code> are text layers rather than component properties — a designer sets them by overriding the layer. Each boolean keeps its own parameter beside the slot it gates rather than the slot being inferred from a nil, so every Figma property traces 1:1 for Code Connect. <code>actionOrientation</code> is a parameter in both languages rather than a SwiftUI modifier: it changes the layout of the action area, not the component’s appearance.",
      "rows": [
        {
          "figma": "ActionOrientation — Vertical, Horizontal",
          "swift": "<code>actionOrientation: EBActionOrientation</code>",
          "compose": "<code>actionOrientation: EBActionOrientation</code>"
        },
        {
          "figma": "hasDescription — true, false",
          "swift": "<code>hasDescription: Bool = true</code>",
          "compose": "<code>hasDescription: Boolean = true</code>"
        },
        {
          "figma": "hasIcon — true, false",
          "swift": "<code>hasIcon: Bool = true</code>",
          "compose": "<code>hasIcon: Boolean = true</code>"
        },
        {
          "figma": "⤷ IconSlot (slot)",
          "swift": "<code>@ViewBuilder icon: () -> Icon</code> — shown when <code>hasIcon</code>",
          "compose": "<code>icon: @Composable (() -> Unit)?</code> — shown when <code>hasIcon</code>"
        },
        {
          "figma": "⤷ ActionSlot (slot)",
          "swift": "<code>@ViewBuilder actions: () -> Actions</code>",
          "compose": "<code>actions: @Composable () -> Unit</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Vertical — two full-width actions stacked",
        "swift": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Delete this recipient?\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"You can add them again at any time.\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.vertical</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Delete this recipient?\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"You can add them again at any time.\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBActionOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Vertical</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Horizontal — two short actions side by side",
        "swift": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Delete this recipient?\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"You can add them again at any time.\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.horizontal</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Delete this recipient?\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"You can add them again at any time.\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBActionOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Horizontal</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Dialog announced on present",
        "ios": "<code>.accessibilityAddTraits(.isModal)</code>, focus moves to <code>#title</code>",
        "android": "<code>Dialog</code> with <code>Modifier.semantics { paneTitle = title }</code>"
      },
      {
        "requirement": "Focus is trapped while open",
        "ios": "<code>.accessibilityFocused</code> held inside the dialog",
        "android": "<code>Dialog</code> traps focus by default"
      },
      {
        "requirement": "Illustration is decorative",
        "ios": "<code>.accessibilityHidden(true)</code> unless it carries meaning",
        "android": "<code>contentDescription = null</code> unless it carries meaning"
      },
      {
        "requirement": "Primary action is reachable first",
        "ios": "Primary precedes secondary in the accessibility order in both orientations",
        "android": "Primary precedes secondary in the traversal order in both orientations"
      },
      {
        "requirement": "Dismissal has a non-visual path",
        "ios": "Escape gesture maps to the secondary action",
        "android": "Back press maps to the secondary action"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use vertical actions when both labels are long or the secondary action matters.",
        "dontText": "Don't use horizontal actions with labels that will truncate at 132px."
      },
      {
        "doText": "Switch hasIcon off when there is no illustration to show.",
        "dontText": "Don't leave the slot on and empty — it reserves 108px of nothing."
      },
      {
        "doText": "Pair the modal with Overlay for the scrim.",
        "dontText": "Don't build a scrim into the card — this component is the card only."
      },
      {
        "doText": "Use Modal - Transaction Receipt for receipts.",
        "dontText": "Don't rebuild a receipt inside this component; that split is what the restructure was for."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Container</code>, <code>Content</code>, <code>#title</code> and <code>#description</code> all follow the family convention. The spacer rectangles from the first assessment are gone, and the Container wrapper is confirmed as holding the auto layout."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>ActionOrientation</code> closed its space this pass. <code>hasIcon</code> follows the boolean prefix convention and stays off the variant name."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Every colour is bound and named. Four belong to this component — <code>bg/color-bg-main</code>, <code>text/color-text</code>, <code>text/color-text-weaker</code> and <code>border/color-border</code> on the 92 × 92 placeholder. The other four are the <code>appearance/*</code> set, the Button’s own variable mode arriving through <code>⤷ ActionSlot</code>. All three text layers resolve, and Modal is the one component in this family that uses both faces: <code>Primary/Headlines/Section</code> for the title, <code>Secondary/Default/Base</code> for the description."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps cleanly to a dialog with two view-builder slots. The whole family shares one action pattern — two Button_New instances in a <code>⤷ ActionSlot</code> with 24px padding and an 8px gap, flipping between 156 tall stacked and 98 side by side — so the same <code>actionOrientation</code> parameter serves this component and <a href=\"/components/modal-transaction-receipt\">Modal - Transaction Receipt</a> alike. The one gap is that the two strings are text layers rather than properties; see C7."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Button states come from Button_New. <code>hasIcon</code> covers the with and without cases. A loading state belongs to the Button family rather than here."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The hardcoded placeholder circle is now a real slot with a Placeholder instance, and the raster copy icon left with the receipt layouts."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — the native library does not exist yet. Worth noting for when it is not: <code>#title</code> and <code>#description</code> are text layers rather than component properties, so Code Connect will have nothing to bind those two strings to. The five properties that do exist all trace 1:1."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 2,
      "description": "1 component set × 2 <code>ActionOrientation</code> values = 2 variants. <code>hasDescription</code> and <code>hasIcon</code> are boolean component properties, so they switch the description and the illustration without multiplying the set, and both slots take their content by swap rather than by variant.",
      "columns": ["ActionOrientation", "Size", "Action area", "Buttons", "Node"],
      "rows": [
        { "cells": ["Vertical", "320 × 370", "320 × 156", "2 × 272 × 50, filled on top", "5879:41275"] },
        { "cells": ["Horizontal", "320 × 312", "320 × 98", "2 × 132 × 50, filled on the right", "5879:41276"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style and Code tabs rebuilt to the content guides — node 5879:41278",
      "rows": [
        {
          "body": "<strong>One card became two.</strong> <code>ActionOrientation</code> is the driving property, so Vertical and Horizontal each get a card, in this panel’s order — which runs the opposite way to <a href=\"/components/modal-transaction-receipt\">Modal - Transaction Receipt</a>’s, so the two pages list their cards differently on purpose.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong><code>hasDescription</code> was undocumented.</strong> <code>hasIcon</code> was already on the page; the second boolean was not, though the Figma panel carries both defaulting to True. Nothing changed in Figma — <code>get_node_info</code> cannot read property definitions.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>Layout is read from two panels rather than derived.</strong> The Container gives the seven canonical keys — 370 or 312 tall and hugging, 320 and filling, radius 6, no padding, no gap, centred. The Content box has its own: 320 × 214, vertical, 24 at the sides and top with none at the bottom, gap 16, top centre. That sits in Properties, since it describes a child rather than the component.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Modal uses both faces, and now says so.</strong> <code>#title</code> is <code>Primary/Headlines/Section</code> and <code>#description</code> is <code>Secondary/Default/Base</code> — Proxima Soft over BarkAda. The action label is <code>Primary/Label/Large</code>. The page had carried font specs and a \"names pending Dev Mode read\" IOU.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>All eight colours are named, and half of them are not this component’s.</strong> Four belong here: <code>bg/color-bg-main</code>, <code>text/color-text</code>, <code>text/color-text-weaker</code>, and <code>border/color-border</code> on the 92 × 92 placeholder — read by exporting the icon slot as a vector, which returns the circle with its fill. The other four are the <code>appearance/*</code> set, the Button’s own variable mode arriving through <code>⤷ ActionSlot</code>.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The preview drew its title in the wrong face.</strong> <code>.eb-preview-mdl</code> declared <code>font-family: inherit</code>, which resolves to the site’s <code>--font-body</code> — BarkAda. That made <code>#description</code> look right by accident and <code>#title</code> silently wrong. The root now names Proxima Soft and the description names BarkAda, so each layer states its own face. Modal is the component that proves this cannot be a find-and-replace: a blanket sweep to Proxima Soft would have broken its description.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Both previews are server-rendered.</strong> Each card’s static markup now holds the component’s real default state, generated by the same renderer the demo uses, so what ships before JavaScript runs matches what runs after it.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. It now cites the Modal family artifact <code>com.eastblue.ds:modal:1.0.0</code> and imports <code>com.eastblue.ds.modal.*</code>, completing the family on one artifact.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Two properties mapped to the same parameter.</strong> <code>hasIcon</code> and <code>⤷ IconSlot</code> both read <code>icon: Image?</code>, which collapses the switch and the content it reveals into one thing and leaves the boolean with nothing of its own to trace to. The boolean now gates a <code>@ViewBuilder icon</code>, matching how the receipt handles <code>hasReferenceNo</code> and its strip.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping missed a property and mapped two things that are not properties.</strong> <code>hasDescription</code> had no row, and <code>#title</code> and <code>#description</code> are text layers. Six rows became five, one per panel property, with both strings named in the description instead.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Two strings have nothing to bind to.</strong> Because <code>#title</code> and <code>#description</code> are text layers rather than component properties, Code Connect will have no anchor for them when the native library lands. The five properties that do exist all trace 1:1. Recorded against C7, which was already open on registration.",
          "delta": { "kind": "open", "label": "C7 open" }
        },
        {
          "body": "<strong>The two tabs declared different APIs.</strong> The mapping had <code>.ebActionOrientation(...)</code> — a SwiftUI modifier — against its own Compose column’s parameter. Settled on the parameter, the third time in this family and for the same reason: it changes the layout of the action area, not the component’s appearance.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Usage Snippets had three subheadings for two values.</strong> The third, \"No illustration (hasIcon=false)\", was keyed to a boolean rather than to the driving property, and the first claimed a default the panel does not state. Two now, one per <code>ActionOrientation</code> value.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The variants table named a button that does not exist.</strong> It read \"primary on top\" and \"primary on right\"; <code>primary</code> is not a term this component’s API uses. Checked against the nodes — the outlined button sits left and the filled right — and reworded to <code>filled</code>, which is what the button actually is.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The family shares one action pattern, and C4 now records it.</strong> Two Button_New instances in a <code>⤷ ActionSlot</code> with 24px padding and an 8px gap, flipping between 156 tall stacked and 98 side by side — identical in this component and in the receipt, which is what lets one <code>actionOrientation</code> parameter serve both. C3’s note also named no tokens before; it now carries all four.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Code Connect emptied, and DEV code is live for the first time.</strong> The demo script had no <code>getSnippet</code>, so both language tabs were frozen on a static string; they now track both booleans.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt on the 2026 Working File · node 5879:41278",
      "rows": [
        {
          "body": "<strong>Restructured as recommended</strong> — the receipt layouts were extracted into <a href=\"/components/modal-transaction-receipt\">Modal - Transaction Receipt</a> and <a href=\"/components/modal-transaction-receipt-entry\">Modal - Transaction Receipt Entry</a>. What remains here is the general-purpose dialog, which is what the first assessment asked for.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>Duplicate scope with Overlay settled</strong> — Modal owns the card, <a href=\"/components/overlay\">Overlay</a> owns the scrim. Neither builds the other.",
          "delta": { "kind": "resolved", "label": "C7 resolved" }
        },
        {
          "body": "<code>_space_*</code> spacer rectangles removed and the hardcoded placeholder circle replaced with <code>⤷ IconSlot</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>Mixed-casing enums gone</strong> — <code>transaction_v1</code>, <code>transaction_v2</code> and <code>1 - vertical</code> collapsed into <code>ActionOrientation = Vertical | Horizontal</code>, renamed this pass to close the space it carried.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<code>hasIcon</code> added, defaulting to true, with a <code>Placeholder</code> instance in the slot — the illustration can now be switched off instead of reserving 108px of empty space.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>Raster copy icon resolved</strong> — the <code>shape_half</code> and <code>shape_full</code> PNGs left with the receipt layouts, where the copy control is now a vector instance.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>BarkAda description confirmed</strong> — the first assessment left this open for design. BarkAda is the secondary face for longer copy at smaller sizes; Proxima Soft carries titles, labels and shorter or larger text.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "Buttons unified on <code>Button_New</code> across the family, so the label is addressable as <code>#label</code> in both modals.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "Node moved from <code>18507:71705</code> (Sticker Sheets v2) to <code>5879:41278</code> (2026 Working File).",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18507:71705",
      "rows": [
        {
          "body": "<strong>DS Health</strong> — 7 variants across 2 axes. Reusable and Composable flagged Warn due to transaction layouts being compressed into a general-purpose Modal. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Baseline"
          }
        },
        {
          "body": "<strong>Duplicate scope with Overlay</strong> — Modal and Overlay (<code>47:329691</code>) are maintained independently but overlap in intent. Family consolidation required. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        },
        {
          "body": "<strong>C1 — Layer structure</strong> — Opacity-0 <code>_space_*</code> spacer rectangles + hardcoded icon-placeholder circle. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Enum naming</strong> — Mixed casing (<code>transaction_v1</code> vs <code>1 - vertical</code>). Sparse CTA matrix. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C4 — Native mappability</strong> — Transaction variants are a different component wearing the Modal hat. Recommend extraction into <code>EBTransactionReceipt</code>. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C5 — State coverage</strong> — No loading / destructive / copy-success states. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C6 — Raster copy icon</strong> — <code>shape_half</code> / <code>shape_full</code> PNGs should be a vector icon instance. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on restructure. Token coverage is the only Ready-status criterion. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        },
        {
          "body": "<strong>Typography note</strong> — Description copy uses <code>BarkAda</code> (secondary font). Confirm with design — otherwise covered by the standing custom-font action item. <span class=\"tag-fixed\">Info</span>",
          "delta": {
            "kind": "resolved",
            "label": "Info"
          }
        }
      ]
    }
  ]
};
