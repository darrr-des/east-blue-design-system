import type { ComponentData, DemoControlSection } from '../types';

/* Demo controls for the Style tab's single spec card. */
const modalControls: DemoControlSection[] = [
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
      },
      {
        label: 'hasIcon',
        prop: 'hasicon',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' }
        ],
        defaultValue: 'true'
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
    "heading": "Structure",
    "specCards": [
      {
        "cardKey": "mdl-spec-card-default",
        "demoKey": "default",
        "demoControls": modalControls,
        "title": "Modal",
        "node": "5879:41278",
        "description": "An illustration slot, a centred title and description, and the action area. Only the action area changes between the two variants; hasIcon collapses the slot.",
        "previewHtml": "<div id=\"mdl-spec-default\"><div class=\"eb-preview-mdl eb-preview-mdl--vertical\"><div class=\"eb-preview-mdl__content\"><div class=\"eb-preview-mdl__icon\"><span>Icon</span></div><div class=\"eb-preview-mdl__title\">Put the title here</div><div class=\"eb-preview-mdl__description\">Add description here.<br>Add description here.</div></div><div class=\"eb-preview-mdl__actions\"><div class=\"eb-preview-mdl__btn eb-preview-mdl__btn--filled\">Label</div><div class=\"eb-preview-mdl__btn eb-preview-mdl__btn--outlined\">Label</div></div></div></div>",
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
              { "key": "hasIcon", "value": "true", "prop": "hasicon",
                "variants": {
                  "hasicon:false": { "value": "false" }
                }
              },
              { "key": "⤷ IconSlot", "value": "Placeholder instance",
                "variants": {
                  "hasicon:false": { "value": "collapsed" }
                }
              },
              { "key": "⤷ ActionSlot", "value": "2 × Button_New" },
              { "key": "#title", "value": "Put the title here" },
              { "key": "#description", "value": "Add description here." }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "#title", "value": "#0A2757", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "#description", "value": "#6780A9", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Button filled bg", "value": "#005CE5", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Button filled label", "value": "#FFFFFF", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Button outlined border", "value": "#005CE5", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Button outlined label", "value": "#005CE5", "token": "library variable · name pending Dev Mode read", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "320", "mono": true },
              { "key": "Height", "value": "370", "mono": true,
                "variants": {
                  "actions:horizontal": { "value": "312" },
                  "hasicon:false": { "value": "262" },
                  "actions:horizontal|hasicon:false": { "value": "204" }
                }
              },
              { "key": "Corner radius", "value": "6", "mono": true },
              { "key": "Content height", "value": "214", "mono": true,
                "variants": {
                  "hasicon:false": { "value": "106" }
                }
              },
              { "key": "Side inset", "value": "24", "mono": true },
              { "key": "Padding top", "value": "24", "mono": true },
              { "key": "⤷ IconSlot", "value": "92 × 92, centred", "mono": true,
                "variants": {
                  "hasicon:false": { "value": "collapsed" }
                }
              },
              { "key": "Icon to #title", "value": "16", "mono": true },
              { "key": "#title to #description", "value": "16", "mono": true },
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
              { "key": "#description", "value": "BarkAda Medium · 14 / 20 · 0", "mono": true },
              { "key": "Button #label", "value": "Proxima Soft Bold · 18 / 18 · +0.25", "mono": true },
              { "key": "Alignment", "value": "title and description centred", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Add description here.\"</span><span class=\"syn-punc\">,</span>\n    icon<span class=\"syn-punc\">:</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"success\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Confirm\"</span><span class=\"syn-punc\">) {</span> confirm<span class=\"syn-punc\">() }</span>\n    <span class=\"syn-type\">EBOutlinedButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Cancel\"</span><span class=\"syn-punc\">) {</span> dismiss<span class=\"syn-punc\">() }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Put the title here\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Add description here.\"</span><span class=\"syn-punc\">,</span>\n    icon <span class=\"syn-eq\">= {</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">R</span><span class=\"syn-punc\">.</span>drawable<span class=\"syn-punc\">.</span>success<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Confirm\"</span><span class=\"syn-punc\">,</span> onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">::</span>confirm<span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBOutlinedButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Cancel\"</span><span class=\"syn-punc\">,</span> onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">::</span>dismiss<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
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
          "figma": "hasIcon",
          "swift": "icon: Image?",
          "compose": "icon: (@Composable () -> Unit)?"
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
          "figma": "⤷ IconSlot",
          "swift": "icon: Image?",
          "compose": "icon: (@Composable () -> Unit)?"
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
        "subheading": "Vertical actions with an illustration (default)",
        "swift": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Delete this card?\"</span><span class=\"syn-punc\">,</span> icon<span class=\"syn-punc\">:</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"warning\"</span><span class=\"syn-punc\">)) {</span>\n    <span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Delete\"</span><span class=\"syn-punc\">,</span> role<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.destructive</span><span class=\"syn-punc\">) {</span> delete<span class=\"syn-punc\">() }</span>\n    <span class=\"syn-type\">EBOutlinedButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Keep\"</span><span class=\"syn-punc\">) {</span> dismiss<span class=\"syn-punc\">() }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Delete this card?\"</span><span class=\"syn-punc\">,</span>\n    icon <span class=\"syn-eq\">= {</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">R</span><span class=\"syn-punc\">.</span>drawable<span class=\"syn-punc\">.</span>warning<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Delete\"</span><span class=\"syn-punc\">,</span> colors <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBButtonDefaults</span><span class=\"syn-punc\">.</span><span class=\"syn-fn\">destructiveColors</span><span class=\"syn-punc\">())</span>\n    <span class=\"syn-type\">EBOutlinedButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Keep\"</span><span class=\"syn-punc\">,</span> onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">::</span>dismiss<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
      },
      {
        "subheading": "No illustration (hasIcon=false)",
        "swift": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Session expired\"</span><span class=\"syn-punc\">,</span> description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Sign in again to continue.\"</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Sign in\"</span><span class=\"syn-punc\">) {</span> signIn<span class=\"syn-punc\">() }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Session expired\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Sign in again to continue.\"</span><span class=\"syn-punc\">,</span>\n    icon <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Sign in\"</span><span class=\"syn-punc\">,</span> onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">::</span>signIn<span class=\"syn-punc\">) }</span>"
      },
      {
        "subheading": "Horizontal actions",
        "swift": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Discard changes?\"</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBOutlinedButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Cancel\"</span><span class=\"syn-punc\">) {</span> dismiss<span class=\"syn-punc\">() }</span>\n    <span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Discard\"</span><span class=\"syn-punc\">) {</span> discard<span class=\"syn-punc\">() }</span>\n<span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebActionOrientation</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.horizontal</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBModal</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Discard changes?\"</span><span class=\"syn-punc\">,</span>\n    actionOrientation <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBActionOrientation</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Horizontal</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBOutlinedButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Cancel\"</span><span class=\"syn-punc\">,</span> onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">::</span>dismiss<span class=\"syn-punc\">)</span>\n    <span class=\"syn-type\">EBButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Discard\"</span><span class=\"syn-punc\">,</span> onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">::</span>discard<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
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
        "notes": "Fills resolve to library variables and text carries shared library styles — verified on the component's own nodes. The BarkAda description is confirmed as the secondary-face rule, not drift."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The receipt layouts have been extracted, so what is left maps cleanly to a dialog with two view-builder slots. Both modals now share one button component."
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
        "notes": "Blocked — the native library does not exist yet."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>ActionOrientation</code>, <code>hasIcon</code>, both <code>⤷</code> slots and the two text layers map one to one with no rename at the boundary."
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
      "description": "1 component set × 2 ActionOrientation values = 2 variants. hasIcon is a boolean component property, so it toggles the illustration without doubling the set.",
      "columns": ["ActionOrientation", "Size", "Action area", "Buttons", "Node"],
      "rows": [
        { "cells": ["Vertical", "320 × 370", "320 × 156", "2 × 272 × 50, primary on top", "5879:41275"] },
        { "cells": ["Horizontal", "320 × 312", "320 × 98", "2 × 132 × 50, primary on right", "5879:41276"] }
      ]
    }
  },
  "changelog": [
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
