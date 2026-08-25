import type { ComponentData, DemoControlSection } from '../types';

/* Demo controls for the Style tab's single spec card. Three axes, all
   orthogonal — every one of the 30 combinations is valid. */
const alertControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        options: [
          { value: 'neutral', label: 'Neutral' },
          { value: 'information', label: 'Information' },
          { value: 'warning', label: 'Warning' },
          { value: 'error', label: 'Error' },
          { value: 'success', label: 'Success' }
        ],
        defaultValue: 'information'
      },
      {
        label: 'Style',
        prop: 'style',
        options: [
          { value: 'card', label: 'Card' },
          { value: 'banner', label: 'Banner' }
        ],
        defaultValue: 'card'
      },
      {
        label: 'Content',
        prop: 'content',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'titleonly', label: 'TitleOnly' },
          { value: 'descriptiononly', label: 'DescriptionOnly' }
        ],
        defaultValue: 'default'
      }
    ]
  }
];

export const alert: ComponentData = {
  "meta": {
    "slug": "alert",
    "name": "Alert",
    "node": "6627:102953",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=6627-102953",
    "description": "A persistent status surface — intent colour, title, description and an optional action, in Card or Banner style.",
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
    "verdict": {
      "kind": "keep",
      "title": "Keep — a clean three-axis schema, with the layer names now matching it",
      "text": "Alert had already been rebuilt twice before this pass. v2.0 made <code>Style = Card | Banner</code> an explicit axis where it had been hidden behind a <code>Full Width</code> boolean, collapsed a set of yes/no booleans into <code>Type</code> × <code>Style</code> × <code>Content</code>, renamed <code>Type=Default</code> to <code>Neutral</code>, and turned the left icon into a slot. v2.1 renamed <code>#text</code> to <code>#description</code> across 20 nodes. Neither reached the changelog. This pass records them and fixes what the rebuilds left behind: three nested layers all called <code>container</code>, two called <code>offset</code>, and a description colour that failed contrast on every one of the five tinted fills. Nothing is outstanding on the component itself; the A11y live-region mapping and Code Connect are both documentation and tooling rather than structure."
    }
  },
  "overview": {
    "inContextNote": "Sits inline in a page rather than overlaying it — a status that persists until the condition changes, as opposed to a Toast that passes. Contexts are illustrative; final screens will reference actual GCash patterns.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"alert-demo-preview\"><div class=\"eb-preview-alert eb-preview-alert--information eb-preview-alert--card\"><div class=\"eb-preview-alert__content\"><span class=\"eb-preview-alert__leading\"></span><span class=\"eb-preview-alert__body\"><span class=\"eb-preview-alert__title\">This is for the title.</span><span class=\"eb-preview-alert__desc\">This is the description. Put the description here.</span><span class=\"eb-preview-alert__action\">Learn more<span class=\"eb-preview-alert__action-chevron\"></span></span></span><span class=\"eb-preview-alert__trailing\"></span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select id=\"alert-ctrl-type\" class=\"demo-panel-select\" onchange=\"_alertUpdate()\"><option value=\"neutral\">Neutral</option><option value=\"information\" selected=\"\">Information</option><option value=\"warning\">Warning</option><option value=\"error\">Error</option><option value=\"success\">Success</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Style</span><select id=\"alert-ctrl-style\" class=\"demo-panel-select\" onchange=\"_alertUpdate()\"><option value=\"card\" selected=\"\">Card</option><option value=\"banner\">Banner</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Content</span><select id=\"alert-ctrl-content\" class=\"demo-panel-select\" onchange=\"_alertUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"titleonly\">TitleOnly</option><option value=\"descriptiononly\">DescriptionOnly</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Five intents across two layout styles covers every persistent status the product shows. Nothing in the structure is tied to a particular message or surface."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its tint, its accent, its type and its spacing. The action comes from the design system's own button rather than being drawn, and both the leading and trailing positions are slots the consumer fills."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "After this pass the layer names match the schema: <code>Container</code> / <code>Content</code> / <code>Body</code>, <code>LeadingContainer</code> / <code>TrailingContainer</code>, <code>Title</code> / <code>Description</code>, and <code>⤷ LeadingSlot</code>. The <code>Content</code> values are joined, matching <code>PesoSignText</code> and <code>BorderType</code> elsewhere."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Both ends are open — <code>⤷ LeadingSlot</code> takes an intent icon or avatar, and <code>Trailing Element</code> offers a close button or an arbitrary slot. The action is a real Button instance rather than a drawn approximation."
      }
    ],
    "behavior": [
      {
        "state": "Style=Card",
        "ios": "na",
        "android": "na",
        "property": "360 × 95",
        "notes": "Tinted fill with a 1px stroke in the accent colour and a 4px radius. The title sets at 18 / 23."
      },
      {
        "state": "Style=Banner",
        "ios": "na",
        "android": "na",
        "property": "360 × 92",
        "notes": "The same tint with a 6px left bar instead of a stroke, and no radius. The title steps down to 16 / 20."
      },
      {
        "state": "Content=Default",
        "ios": "na",
        "android": "na",
        "property": "title + description",
        "notes": "Both text blocks plus the action."
      },
      {
        "state": "Content=TitleOnly",
        "ios": "na",
        "android": "na",
        "property": "title, no description",
        "notes": "Card 75, Banner 74. The action button stays — the axis names the text content, not the whole surface."
      },
      {
        "state": "Content=DescriptionOnly",
        "ios": "na",
        "android": "na",
        "property": "description, no title",
        "notes": "68 tall in both styles. The action button stays here too."
      },
      {
        "state": "Type",
        "ios": "na",
        "android": "na",
        "property": "fill + accent",
        "notes": "Neutral, Information, Warning, Error and Success each set a tint and an accent. Nothing else changes between them."
      }
    ],
    "resolved": [
      {
        "headline": "Two undocumented rebuilds are now on the record.",
        "body": "v2.0 promoted <code>Style</code> from a hidden <code>Full Width</code> boolean to an explicit axis, collapsed a set of yes/no booleans into <code>Type</code> × <code>Style</code> × <code>Content</code>, renamed <code>Type=Default</code> to <code>Neutral</code>, made the left icon a slot, and shipped a dismiss slot alongside a real action-button instance. v2.1 renamed <code>#text</code> to <code>#description</code> across 20 nodes. Both were described in the component's verdict but neither reached the changelog, so the history stopped at the initial assessment.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Three nested layers were all called container.",
        "body": "At 360 × 95, 324 × 71 and 280 × 71, one inside the next, doing three different jobs — the surface, the row, and the text column. In the layers panel that read as three identical entries stacked inside each other. They are now <code>Container</code>, <code>Content</code> and <code>Body</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Two layers were called offset.",
        "body": "One wrapped the leading slot, one the trailing slot — a spacing side-effect used as a name, the same problem that turned Modal's <code>reference-offset</code> into <code>Reference</code>. They are now <code>LeadingContainer</code> and <code>TrailingContainer</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "heading and line-paragraph were renamed.",
        "body": "Both were lowercase, and <code>line-paragraph</code> described typesetting rather than the content it held. They are now <code>Title</code> and <code>Description</code>, matching the <code>#title</code> and <code>#description</code> text nodes inside them.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The leading slot carries the arrow prefix.",
        "body": "It was a real <code>SLOT</code> named <code>Leading Container</code> with no <code>⤷</code>, while a sibling slot in the same component had one — so the marker that tells a slot from an ordinary frame was applied inconsistently. It is now <code>⤷ LeadingSlot</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Header Only became TitleOnly.",
        "body": "The value said Header while the layer it controlled said <code>#title</code>, and both values carried spaces. They are now <code>TitleOnly</code> and <code>DescriptionOnly</code>. The \"Only\" refers to the text content — the action button is a constant across all three values, which is the intended reading rather than an oversight.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The description now clears contrast on every tint.",
        "body": "It was <code>#6780A9</code> on five light tinted fills rather than on white, which put it at 3.80:1 on Neutral and 3.33:1 on Error — under the 4.5:1 that 12px normal text needs. It is now <code>#445C85</code>, which lands between 5.60:1 on Error and 6.42:1 on Warning, and stays clearly lighter than the title's <code>#0A2757</code> so the hierarchy still reads.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "The trailing instance had two names.",
        "body": "Card variants showed <code>Trailing Element</code> while Banner variants showed <code>Dismiss Container</code> — the same instance of the same component set, named differently depending on which variant you opened. They are consistent now. The name reverted to <code>Trailing Element</code> deliberately: the component set behind it offers <code>Type = Close | Slot</code>, so it holds more than a dismiss control and naming it for dismissal was too narrow.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Left Border Accent lost its spaces, and the dead fills went.",
        "body": "The Banner's accent bar is now <code>LeftBorderAccent</code>. Separately, some variants carried invisible fill leftovers that differed by Type — Warning an unseen <code>#FFFBED</code>, Error and Success an unseen <code>#FFFFFF</code>, Neutral and Information none — which is dead data that renders nothing. Removed.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Both slots ship empty, deliberately.",
        "body": "Neither <code>⤷ LeadingSlot</code> nor the trailing slot has default content in any of the 30 variants. Confirmed as intended — the consumer fills them — which is why the sticker sheet shows their footprints rather than an icon.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      }
    ],
    "open": [
      {
        "headline": "A11y live-region mapping not documented.",
        "body": "An Alert that appears in response to something the user did needs announcing, and one that is present on load does not. That distinction decides whether it is a polite live region, an assertive one, or neither — and it cannot be read off the component. Carried over from the previous assessment and still outstanding.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native library does not exist yet, so there is nothing to map onto. The component side is ready: <code>Type</code>, <code>Style</code> and <code>Content</code> all map one to one now the values are joined.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Type is signalled by colour alone.",
        "body": "With <code>⤷ LeadingSlot</code> empty across all 30 variants, the only thing separating Neutral from Information from Warning from Error from Success is a tint and an accent. That is the signal that does not survive greyscale, low vision, or the common red-green confusions — and Error against Success is exactly the pair at risk. There is no per-Type icon in the system yet, so this sits outside the component's scope to fix, but it is worth knowing before an Alert carries information that exists nowhere else on the screen.",
        "tag": "A11y"
      },
      {
        "headline": "LeadingContainer reports 89px inside a 71-tall row.",
        "body": "Its height is set to fill, but Figma resolves it to the tallest state it could take — the height when the slot is filled and the placeholder text wraps to another line — so it overhangs its parent in the file. A known Figma behaviour rather than a layout error, and it does not affect what renders, but it is worth resolving so the frame reads honestly in the layers panel.",
        "tag": "Composition"
      },
      {
        "headline": "The preview on this page had drifted a full rebuild behind.",
        "body": "Before this pass the documented demo still exposed a <code>fullwidth</code> boolean and a <code>showdesc</code> toggle — the model v2.0 replaced with <code>Style</code> and <code>Content</code>. The preview and CSS have been rebuilt against the current schema. Worth a glance whenever a component is restructured: the data file's verdict was updated at the time, but the interactive demo beneath it was not.",
        "tag": "Docs"
      },
      {
        "headline": "Tidy two small leftovers on the action button.",
        "body": "<code>Button_New</code> carries a corner radius of 99999 where the rest of the system uses 99, and the description placeholder ends with a trailing space. Neither renders differently, both are one-character fixes.",
        "tag": "Docs"
      },
      {
        "headline": "Publish the token names once Dev Mode is read.",
        "body": "The tints, accents and text colours resolve to library variables — the description is bound to the same variable as List Item's label — but the read-only tools return variable IDs rather than names, so the spec tables carry hex values only.",
        "tag": "Token"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"/components/toast\">Toast</a> and <a href=\"/components/toast-with-button\">Toast with Button</a> are the transient equivalents, <a href=\"/components/inline-message\">Inline Message</a> the field-level one, and <a href=\"/components/banner\">Banner</a> and <a href=\"/components/callout\">Callout</a> the promotional surfaces. Worth settling which of these five overlap when the messaging family is reviewed together.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Structure",
    "specCards": [
      {
        "cardKey": "alert-spec-card-default",
        "demoKey": "default",
        "demoControls": alertControls,
        "title": "Alert",
        "node": "6627:102953",
        "description": "Three orthogonal axes, 30 variants. Type sets the tint and accent, Style decides whether the accent is a stroke or a bar, and Content decides which text blocks show.",
        "previewHtml": "<div id=\"alert-spec-default\"><div class=\"eb-preview-alert eb-preview-alert--information eb-preview-alert--card\"><div class=\"eb-preview-alert__content\"><span class=\"eb-preview-alert__leading\"></span><span class=\"eb-preview-alert__body\"><span class=\"eb-preview-alert__title\">This is for the title.</span><span class=\"eb-preview-alert__desc\">This is the description. Put the description here.</span><span class=\"eb-preview-alert__action\">Learn more<span class=\"eb-preview-alert__action-chevron\"></span></span></span><span class=\"eb-preview-alert__trailing\"></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Information", "prop": "type",
                "variants": {
                  "type:neutral": { "value": "Neutral" },
                  "type:warning": { "value": "Warning" },
                  "type:error": { "value": "Error" },
                  "type:success": { "value": "Success" }
                }
              },
              { "key": "Style", "value": "Card", "prop": "style",
                "variants": { "style:banner": { "value": "Banner" } }
              },
              { "key": "Content", "value": "Default", "prop": "content",
                "variants": {
                  "content:titleonly": { "value": "TitleOnly" },
                  "content:descriptiononly": { "value": "DescriptionOnly" }
                }
              },
              { "key": "⤷ LeadingSlot", "value": "32 × 32, empty by design" },
              { "key": "Trailing Element", "value": "Type = Close | Slot" },
              { "key": "Action", "value": "Button_New instance — always present" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Fill", "value": "#E5F1FF", "token": "library variable · name pending Dev Mode read", "swatch": true,
                "variants": {
                  "type:neutral": { "value": "#F6F9FD" },
                  "type:warning": { "value": "#FFF9EB" },
                  "type:error": { "value": "#F8E6E6" },
                  "type:success": { "value": "#E7F8F0" }
                }
              },
              { "key": "Accent", "value": "#005CE5 — stroke on Card, 6px bar on Banner", "token": "library variable · name pending Dev Mode read", "swatch": true,
                "variants": {
                  "type:neutral": { "value": "#D7E0EF — stroke on Card, 6px bar on Banner" },
                  "type:warning": { "value": "#EBB30A — stroke on Card, 6px bar on Banner" },
                  "type:error": { "value": "#D61B2C — stroke on Card, 6px bar on Banner" },
                  "type:success": { "value": "#27C990 — stroke on Card, 6px bar on Banner" }
                }
              },
              { "key": "#title", "value": "#0A2757 — clears 12:1 on every tint", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "#description", "value": "#445C85 — 5.89:1 on this tint", "token": "library variable · name pending Dev Mode read", "swatch": true,
                "variants": {
                  "type:neutral": { "value": "#445C85 — 6.38:1 on this tint" },
                  "type:warning": { "value": "#445C85 — 6.42:1 on this tint" },
                  "type:error": { "value": "#445C85 — 5.60:1 on this tint" },
                  "type:success": { "value": "#445C85 — 6.13:1 on this tint" }
                }
              },
              { "key": "Action label", "value": "#005CE5", "token": "library variable · name pending Dev Mode read", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "360", "mono": true },
              { "key": "Height", "value": "95", "mono": true,
                "variants": {
                  "style:banner": { "value": "92" },
                  "content:titleonly": { "value": "75" },
                  "content:descriptiononly": { "value": "68" },
                  "style:banner|content:titleonly": { "value": "74" },
                  "style:banner|content:descriptiononly": { "value": "68" }
                }
              },
              { "key": "Corner radius", "value": "4", "mono": true,
                "variants": { "style:banner": { "value": "0 — the bar replaces the stroke" } }
              },
              { "key": "Accent", "value": "1px stroke, all four sides", "mono": true,
                "variants": { "style:banner": { "value": "6 wide, full height, left edge" } }
              },
              { "key": "Content inset", "value": "20 sides · 12 top", "mono": true },
              { "key": "Leading / trailing", "value": "32 × 32 each", "mono": true },
              { "key": "Body width", "value": "280", "mono": true },
              { "key": "Action", "value": "91 × 24", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text styles", "value": "shared library styles · names pending Dev Mode read", "mono": true },
              { "key": "#title", "value": "Proxima Soft Bold · 18 / 23 · +0.25", "mono": true,
                "variants": { "style:banner": { "value": "Proxima Soft Bold · 16 / 20 · +0.25" } }
              },
              { "key": "#description", "value": "BarkAda SemiBold · 12 / 18 · 0", "mono": true },
              { "key": "Face split", "value": "Proxima Soft for the title, BarkAda for the body — the secondary-face rule", "mono": true },
              { "key": "Action label", "value": "Proxima Soft Bold · 14 / 24", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBAlert</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-dot\">.information</span><span class=\"syn-punc\">,</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is for the title.\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is the description.\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBTextButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Learn more\"</span><span class=\"syn-punc\">) {</span> open<span class=\"syn-punc\">() }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAlert</span><span class=\"syn-punc\">(</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAlertType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Information</span><span class=\"syn-punc\">,</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is for the title.\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is the description.\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBTextButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Learn more\"</span><span class=\"syn-punc\">,</span> onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">::</span>open<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">}</span>"
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
        { "figma": "Type", "swift": "EBAlertType", "compose": "type: EBAlertType" },
        { "figma": "Style", "swift": ".ebAlertStyle(.card / .banner)", "compose": "style: EBAlertStyle" },
        { "figma": "Content", "swift": "derived — title and description are optional", "compose": "derived — title and description are nullable" },
        { "figma": "#title", "swift": "title: String?", "compose": "title: String?" },
        { "figma": "#description", "swift": "description: String?", "compose": "description: String?" },
        { "figma": "⤷ LeadingSlot", "swift": "@ViewBuilder icon: () -> Icon", "compose": "icon: (@Composable () -> Unit)?" },
        { "figma": "Trailing Element", "swift": "onDismiss: (() -> Void)? or trailing view", "compose": "onDismiss: (() -> Unit)? or trailing slot" },
        { "figma": "Button_New", "swift": "@ViewBuilder action: () -> Action", "compose": "action: (@Composable () -> Unit)?" }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "A card alert with both text blocks",
        "swift": "<span class=\"syn-type\">EBAlert</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-dot\">.warning</span><span class=\"syn-punc\">,</span>\n    title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Verify your email\"</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Some features stay locked until you do.\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBTextButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Verify now\"</span><span class=\"syn-punc\">) {</span> verify<span class=\"syn-punc\">() }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBAlert</span><span class=\"syn-punc\">(</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAlertType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Warning</span><span class=\"syn-punc\">,</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Verify your email\"</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Some features stay locked until you do.\"</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">EBTextButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Verify now\"</span><span class=\"syn-punc\">,</span> onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">::</span>verify<span class=\"syn-punc\">) }</span>"
      },
      {
        "subheading": "Banner style, title only",
        "swift": "<span class=\"syn-type\">EBAlert</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.error</span><span class=\"syn-punc\">,</span> title<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Payment failed\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebAlertStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.banner</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBAlert</span><span class=\"syn-punc\">(</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAlertType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Error</span><span class=\"syn-punc\">,</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Payment failed\"</span><span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAlertStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Banner</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Dismissable, with a leading icon",
        "swift": "<span class=\"syn-type\">EBAlert</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-dot\">.success</span><span class=\"syn-punc\">,</span>\n    description<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Your details were saved.\"</span><span class=\"syn-punc\">,</span>\n    icon<span class=\"syn-punc\">:</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"checkmark.circle\"</span><span class=\"syn-punc\">),</span>\n    onDismiss<span class=\"syn-punc\">: {</span> hide<span class=\"syn-punc\">() }</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBAlert</span><span class=\"syn-punc\">(</span>\n    type <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAlertType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Success</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Your details were saved.\"</span><span class=\"syn-punc\">,</span>\n    icon <span class=\"syn-eq\">= {</span> <span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">Icons</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Outlined</span><span class=\"syn-punc\">.</span>CheckCircle<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">) },</span>\n    onDismiss <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">::</span>hide\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Announced only when it appears in response to an action",
        "ios": "<code>UIAccessibility.post(.announcement, …)</code> on appear; nothing for alerts present at load",
        "android": "<code>liveRegion = LiveRegionMode.Polite</code> on appear only"
      },
      {
        "requirement": "Error uses assertive, the rest polite",
        "ios": "Error interrupts; Information, Warning, Success and Neutral queue",
        "android": "<code>LiveRegionMode.Assertive</code> for Error only"
      },
      {
        "requirement": "Type is conveyed in text, not only colour",
        "ios": "Prefix the announcement with the intent — \"Error:\", \"Success:\"",
        "android": "Same — the tint reaches nobody using a screen reader"
      },
      {
        "requirement": "Title and description read as one unit",
        "ios": "<code>.accessibilityElement(children: .combine)</code>",
        "android": "<code>Modifier.semantics(mergeDescendants = true)</code>"
      },
      {
        "requirement": "Dismiss control is labelled and reachable",
        "ios": "<code>.accessibilityLabel(\"Dismiss\")</code>, 44 × 44 minimum",
        "android": "<code>contentDescription = \"Dismiss\"</code>, 48dp minimum"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Alert for a status that persists until the condition changes.",
        "dontText": "Don't use it for transient confirmation — that's Toast."
      },
      {
        "doText": "Say the intent in the words as well as the colour.",
        "dontText": "Don't let the tint be the only thing separating an error from a success."
      },
      {
        "doText": "Pick Card when the alert sits among other content, Banner when it spans an edge.",
        "dontText": "Don't mix both styles on one screen — they read as two different components."
      },
      {
        "doText": "Use TitleOnly or DescriptionOnly when one line genuinely says it all.",
        "dontText": "Don't pad a short message into both blocks just to fill the default layout."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The three nested <code>container</code>s and two <code>offset</code>s are renamed, the trailing instance is consistent across all 30 variants, and the invisible fill leftovers are gone."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Three orthogonal axes with joined values. <code>Header Only</code> became <code>TitleOnly</code>, matching the <code>#title</code> node it controls."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Fills, accents and text resolve to library variables. The description was moved to <code>#445C85</code>, which clears AA on all five tints where its predecessor failed on every one."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "An intent, two layout styles and optional text blocks map directly. Both ends are slots, and the action is a real button instance."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "The component is display-only and has no states of its own. The live-region mapping — which alerts announce, and how urgently — is still undocumented."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "No artwork of its own. Both slots ship empty by design, so any icon comes from the consumer."
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
        "notes": "<code>Type</code>, <code>Style</code> and <code>Content</code> map one to one with no rename at the boundary."
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
      "total": 30,
      "description": "5 Type × 2 Style × 3 Content = 30, all orthogonal — every combination is valid. Type sets the tint and accent; Style decides whether the accent is a stroke or a bar; Content decides which text blocks show.",
      "columns": ["Type", "Fill", "Accent", "Card heights", "Banner heights"],
      "rows": [
        { "cells": ["Neutral", "#F6F9FD", "#D7E0EF", "95 / 75 / 68", "92 / 74 / 68"] },
        { "cells": ["Information", "#E5F1FF", "#005CE5", "95 / 75 / 68", "92 / 74 / 68"] },
        { "cells": ["Warning", "#FFF9EB", "#EBB30A", "95 / 75 / 68", "92 / 74 / 68"] },
        { "cells": ["Error", "#F8E6E6", "#D61B2C", "95 / 75 / 68", "92 / 74 / 68"] },
        { "cells": ["Success", "#E7F8F0", "#27C990", "95 / 75 / 68", "92 / 74 / 68"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Two prior rebuilds recorded + reassessment on the 2026 Working File · node 6627:102953",
      "rows": [
        {
          "body": "<strong>Covers three changes at once.</strong> The v2.0 rebuild and the v2.1 naming pass were both described in the component's verdict but neither reached the changelog, so the history stopped at the initial assessment. This version records them alongside the 2026 reassessment.",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        },
        {
          "body": "<strong>v2.0</strong> — <code>Style = Card | Banner</code> promoted from a hidden <code>Full Width</code> boolean to an explicit axis, yes/no booleans collapsed into <code>Type</code> × <code>Style</code> × <code>Content</code>, <code>Type=Default</code> renamed <code>Neutral</code>, the left icon made a slot, and a dismiss slot plus a real action-button instance shipped.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>v2.1</strong> — <code>#text</code> renamed <code>#description</code> across all 20 description nodes.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>Three nested layers all called <code>container</code></strong> — the surface, the row and the text column — renamed to <code>Container</code>, <code>Content</code> and <code>Body</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>Two layers called <code>offset</code></strong> renamed to <code>LeadingContainer</code> and <code>TrailingContainer</code>; <code>heading</code> and <code>line-paragraph</code> to <code>Title</code> and <code>Description</code>; <code>Left Border Accent</code> to <code>LeftBorderAccent</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<code>Leading Container</code> became <code>⤷ LeadingSlot</code>, and <code>Content=Header Only</code> became <code>TitleOnly</code> — matching the <code>#title</code> node it controls and dropping the spaces.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>Description contrast fixed on all five tints.</strong> <code>#6780A9</code> sat at 3.80:1 on Neutral and 3.33:1 on Error, under AA for 12px. <code>#445C85</code> lands between 5.60:1 and 6.42:1.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "The trailing instance had been <code>Trailing Element</code> in Card variants and <code>Dismiss Container</code> in Banner ones; now consistent. The name stays <code>Trailing Element</code> because the component behind it offers <code>Type = Close | Slot</code> and holds more than a dismiss control.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "Invisible per-Type fill leftovers removed, and this page's interactive preview rebuilt — it had still been exposing the pre-v2.0 <code>fullwidth</code> boolean.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "Node moved from <code>26449:14796</code> (Sticker Sheets v2) to <code>6627:102953</code> (2026 Working File).",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18444:2012",
      "rows": [
        {
          "body": "<strong>Verdict: Fix</strong> — Normalize booleans, replace placeholder left-icon with a real Slot, split the two layouts explicitly, and add a dismiss contract. <span class=\"tag-open tag-c1 tag-c2 tag-c5 tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>C2 — Property naming</strong> — Four booleans on <code>yes/no</code> with inconsistent casing; <code>Type=Default</code> mixes with semantic types. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C1 — Two layouts, one component</strong> — Banner + accent card hidden behind <code>fullWidth</code>. Rename to <code>style</code> or split. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C6 — Left-icon placeholder</strong> — 24 × 24 <code>icon-placeholder</code> circle; adopt Figma Slots. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C5 — State coverage</strong> — No dismiss; Learn More isn't a real button. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on schema cleanup. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
