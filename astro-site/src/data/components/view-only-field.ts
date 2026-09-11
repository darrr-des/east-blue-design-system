import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/view-only-field.js`.
const viewOnlyFieldDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'TrailingContent',
        prop: 'trailingContent',
        defaultValue: 'None',
        options: [
          { value: 'None', label: 'None' },
          { value: 'Badge', label: 'Badge' },
          { value: 'Link', label: 'Link' },
          { value: 'Icon', label: 'Icon' },
        ],
      },
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'LG',
        options: [
          { value: 'SM', label: 'SM' },
          { value: 'LG', label: 'LG' },
        ],
      },
      {
        label: 'Status',
        prop: 'status',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'error', label: 'Error' },
          { value: 'warning', label: 'Warning' },
        ],
      },
      {
        label: 'hasCheckmark',
        prop: 'hasCheckmark',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasDescription',
        prop: 'hasDescription',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'Value',
        prop: 'value',
        control: 'input',
        defaultValue: 'Text',
        options: [],
      },
      {
        label: 'Label',
        prop: 'label',
        control: 'input',
        defaultValue: 'Label',
        options: [],
      },
    ],
  },
];

export const viewOnlyField: ComponentData = {
  "meta": {
    "slug": "view-only-field",
    "name": "View Only Field",
    "node": "4996:25507",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4996-25507",
    "description": "A read-only form field showing a label and value; non-interactive.",
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
    "navGroup": "Form Elements",
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>4996:25507</code> in the 2026 Working File. <code>TrailingContent = None | Badge | Link | Icon</code> × <code>Size = SM | LG</code> × <code>Status = Default | Error | Warning</code> ships all 24 combinations with no gaps, layer naming follows the §3 vocabulary and the trailing containers are kebab-case per §4. The axis rename from <code>State</code> to <code>Status</code> settles the last divergence: a display-only field has no interaction states to describe, so the form-field exception in §6 did not apply and the property now says what it actually carries. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <text x=\"20\" y=\"20\" font-size=\"5\" fill=\"currentColor\" opacity=\".15\" font-family=\"system-ui\">Account Details</text>\n          <rect x=\"20\" y=\"26\" width=\"18\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".15\"></rect>\n          <rect x=\"20\" y=\"31\" width=\"38\" height=\"3\" rx=\"1\" fill=\"currentColor\" opacity=\".3\"></rect>\n          <rect x=\"20\" y=\"40\" width=\"18\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".15\"></rect>\n          <rect x=\"20\" y=\"45\" width=\"28\" height=\"3\" rx=\"1\" fill=\"currentColor\" opacity=\".3\"></rect>\n          <rect x=\"85\" y=\"44\" width=\"15\" height=\"5\" rx=\"2.5\" fill=\"#005CE5\" opacity=\".2\"></rect>\n          <rect x=\"20\" y=\"55\" width=\"18\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".15\"></rect>\n          <rect x=\"20\" y=\"60\" width=\"42\" height=\"3\" rx=\"1\" fill=\"currentColor\" opacity=\".3\"></rect>\n          <path d=\"M95 58l2 2 4-4\" stroke=\"#005CE5\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" opacity=\".3\"></path>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"vof-demo-preview\"><svg width=\"360\" height=\"75\" viewBox=\"0 0 360 75\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><text x=\"0\" y=\"13\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#6780A9\">Label</text><text x=\"0\" y=\"37\" font-family=\"Proxima Soft, system-ui\" font-size=\"16\" font-weight=\"600\" fill=\"#0A2757\">Text</text><text x=\"0\" y=\"55\" font-family=\"BarkAda, system-ui\" font-size=\"10\" font-weight=\"600\" fill=\"#6780A9\">Message content</text></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">variant</span><select class=\"demo-panel-select\" onchange=\"_vofDemo.variant=this.value;updateViewOnlyFieldDemo()\"><option value=\"Default\" selected=\"\">Default</option><option value=\"with Badge\">with Badge</option><option value=\"with Text Link\">with Text Link</option><option value=\"with Icon\">with Icon</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Size</span><select class=\"demo-panel-select\" onchange=\"_vofDemo.size=this.value;updateViewOnlyFieldDemo()\"><option value=\"Default\" selected=\"\">Default</option><option value=\"Large\">Large</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasCheckmark</span><select class=\"demo-panel-select\" onchange=\"_vofDemo.checkmark=this.value;updateViewOnlyFieldDemo()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasDescription</span><select class=\"demo-panel-select\" onchange=\"_vofDemo.description=this.value;updateViewOnlyFieldDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Read-only data display used across profile screens, transaction details, account information, settings displays, and confirmation flows. Highly reusable across contexts."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Bundles label, value, optional subtext, and optional trailing slot (badge/link/icon). All colors token-bound. Typography scales per size (Default / Large)."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Layer naming follows the §3 vocabulary as <code>Label</code> and <code>Value</code>, the trailing containers are kebab-case per §4, and the 24-variant matrix is complete with no gaps. The axis now reads <code>Status = Default | Error | Warning</code>, which is correct for a display-only component: it reports what the system knows about the value rather than describing an interaction that cannot occur."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Composes cleanly in list rows, profile pages, transaction detail sheets, and settings screens. Uses Badge component instance for the \"with Badge\" variant — good compositional inheritance."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "TrailingContent=None",
        "notes": "Label + value only, no trailing slot."
      },
      {
        "state": "Trailing badge",
        "ios": "yes",
        "android": "yes",
        "property": "TrailingContent=Badge",
        "notes": "Badge instance in the trailing slot (e.g. \"Change\" status chip)."
      },
      {
        "state": "Trailing link",
        "ios": "yes",
        "android": "yes",
        "property": "TrailingContent=Link",
        "notes": "Text link in the trailing slot (e.g. \"What is this?\" contextual help)."
      },
      {
        "state": "Trailing icon",
        "ios": "yes",
        "android": "yes",
        "property": "TrailingContent=Icon",
        "notes": "Edit icon (pencil) in the trailing slot — typically navigates to an editable state."
      },
      {
        "state": "Checkmark",
        "ios": "yes",
        "android": "yes",
        "property": "hasCheckmark=true",
        "notes": "Displays a 13×13 checkmark next to the value (e.g. verified status)."
      },
      {
        "state": "Description",
        "ios": "yes",
        "android": "yes",
        "property": "hasDescription=true",
        "notes": "Shows a subtext message below the value (e.g. \"Message content\" helper text)."
      }
    ],
    "resolved": [
      {
        "headline": "Overloaded <code>variant</code> property renamed.",
        "body": "v2.0: Rebuilt on node <code>4996:25507</code> in the 2026 Working File. The catch-all <code>variant</code> enum is now <code>TrailingContent = None | Badge | Link | Icon</code> — PascalCase per §1, semantic values, and a clean 1:1 native enum mapping. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Size values aligned to the standard scale.",
        "body": "v2.0: <code>Size=Default</code> — which described a starting state rather than a size — is now <code>Size = SM | LG</code>, matching §5's <code>XS · SM · MD · LG · XL</code> set and the values Amount Text Field uses. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Checkmark converted to a vector.",
        "body": "v2.0: The <code>imgCheck</code> CDN raster is gone. The checkmark still exists as a <code>check</code> vector group inside a <code>Checkmark</code> frame (<code>4996:25514</code>), hidden by default — so it renders crisply at any density when shown. (C6 · Asset)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Error and Warning states added and made selectable.",
        "body": "v2.1: <code>State = Default | Error | Warning</code> is now a real third axis, giving <code>TrailingContent</code> (4) × <code>Size</code> (2) × <code>State</code> (3) = <strong>24 uniquely-named variants</strong>. An intermediate pass had all 24 authored but only 8 distinct names — three groups shared identical <code>TrailingContent × Size</code> names and differed only by their <code>Subtext Message</code> state, so Figma treated them as conflicts and consumers had no way to select Error or Warning. Naming the axis made two-thirds of the component reachable. (C2 · State)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Text layers renamed to <code>Label</code> and <code>Value</code>.",
        "body": "v2.2: <code>#label</code> → <code>Label</code> and <code>#text</code> → <code>Value</code>, matching §3 Form-content definitions exactly. Sampled across four variants spanning all three State groups and both sizes. Sets up the text properties, whose names default from the layer names. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>Label</code> and <code>Value</code> confirmed exposed as text properties.",
        "body": "v2.2: Closed on owner confirmation — both are exposed, so consumers set copy from the instance panel without detaching. Not independently verifiable from the assessment tooling, which cannot read component property definitions. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Wrapper frame names confirmed intentional.",
        "body": "v2.2: Closed by owner decision — <code>content-container</code> and <code>text-container</code> stay as they are. They are internal auto-layout wrappers with no property or override surface, so their names never reach a consumer or a Code Connect mapping; the guidelines govern property names rather than layer names. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>container</code> renamed to <code>FieldRow</code>.",
        "body": "v2.1: Verified by exact string match across all 24 variants — no trailing whitespace and no leftovers. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Composes the shared <code>Subtext Message</code> instance.",
        "body": "v2.0: Every variant carries a <code>Subtext Message</code> instance for its helper, error and warning copy, so that anatomy propagates from one source rather than being re-authored. Same pattern as Text Area and Upload File. (Composition)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Variant matrix verified complete at 24.",
        "body": "v2.4: Re-read on the live node. <code>TrailingContent = None | Badge | Link | Icon</code> × <code>Size = SM | LG</code> × <code>State = Default | Error | Warning</code> ships all 24 combinations with no gaps — SM at 55–56px and LG at 72px throughout. <code>Label</code> and <code>Value</code> carry the §3 vocabulary, and the trailing containers are kebab-case (<code>badge-container</code>, <code>icon-container</code>, <code>text-link-container</code>) per §4. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>State</code> axis renamed to <code>Status</code>.",
        "body": "v2.5: Verified on the live node — all 24 variants now read <code>TrailingContent</code> × <code>Size</code> × <code>Status = Default | Error | Warning</code>. The axis was carrying three statuses and no interaction values on a component that is display-only and can never be focused, pressed or disabled, so the form-field exception in §6 of the Property Naming Guidelines did not reach it. The rename cost nothing structurally — same three values, same 24 variants — and the component now reads correctly against the guideline the rest of the family is measured by. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>Subtext Message</code> copy exposed via nested instance properties.",
        "body": "v2.5: The message and its trailing label can be set from the parent without detaching. Attested rather than verified — nested-instance property exposure is not readable through the review tooling, so this is recorded on the owner’s confirmation. (C1 · Slot)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
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
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "vof-spec-main",
        "demoKey": "main",
        "demoControls": viewOnlyFieldDemoControls,
        "title": "View Only Field",
        "node": "4996:25507",
        "description": "",
        "previewHtml": "<div id=\"view-only-field-spec-main\"><svg width=\"360\" height=\"72\" viewBox=\"0 0 360 72\" fill=\"none\" role=\"img\" aria-label=\"View Only Field, LG, default, trailing None\"><text x=\"0\" y=\"15\" font-family=\"'Proxima Soft', system-ui, sans-serif\" font-size=\"16\" font-weight=\"600\" letter-spacing=\"0.25\" fill=\"#6780A9\">Label</text><text class=\"vof-value\" x=\"0\" y=\"44\" font-family=\"'Proxima Soft', system-ui, sans-serif\" font-size=\"22\" font-weight=\"700\" fill=\"#0A2757\">Text</text><text x=\"0\" y=\"65\" font-family=\"BarkAda, system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#6780A9\">Message content</text></svg></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "TrailingContent", "value": "None", "prop": "trailingContent" },
              { "key": "Size", "value": "LG", "prop": "size" },
              { "key": "Status", "value": "Default", "prop": "status" },
              { "key": "hasCheckmark", "value": "False", "prop": "hasCheckmark" },
              { "key": "hasDescription", "value": "True", "prop": "hasDescription" },
              { "key": "Value", "value": "Text", "prop": "value" },
              { "key": "Label", "value": "Label", "prop": "label" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Label", "value": "#6780A9", "token": "text/secondary" },
              { "key": "Value", "value": "#0A2757", "token": "text/primary" },
              { "key": "Description", "value": "#6780A9", "token": "text/secondary",
                "variants": {
                  "status:error": { "value": "#D61B2C", "token": "text/error" },
                  "status:warning": { "value": "#CA970C", "token": "text/warning" }
                } },
              { "key": "Status icon", "value": "–", "token": "–",
                "variants": {
                  "status:error": { "value": "#D61B2C", "token": "icon/error" },
                  "status:warning": { "value": "#CA970C", "token": "icon/warning" }
                } },
              { "key": "Checkmark", "value": "#025AE9", "token": "icon/interactive" },
              { "key": "Trailing", "value": "–", "token": "–",
                "variants": {
                  "trailingContent:Badge": { "value": "#005CE5 on #E5F1FF", "token": "badge/interactive" },
                  "trailingContent:Link": { "value": "#005CE5", "token": "text/interactive" },
                  "trailingContent:Icon": { "value": "#005CE5", "token": "icon/interactive" }
                } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label", "value": "—", "mono": true },
              { "key": "Value", "value": "—", "mono": true },
              { "key": "Description", "value": "—", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "72px", "mono": true,
                "variants": { "size:SM": { "value": "55px" } } },
              { "key": "Width", "value": "360px (fill)", "mono": true },
              { "key": "Radius", "value": "0px", "mono": true },
              { "key": "Padding H", "value": "0px", "mono": true },
              { "key": "Padding V", "value": "0px", "mono": true },
              { "key": "Gap", "value": "4px", "mono": true },
              { "key": "Alignment", "value": "—", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBViewOnlyField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">controlSize</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.large</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBViewOnlyField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Text\"</span><span class=\"syn-punc\">,</span>\n    size <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldSize</span><span class=\"syn-punc\">.</span>LG<span class=\"syn-punc\">,</span>\n    status <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldStatus</span><span class=\"syn-punc\">.</span>Default\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Display-only component — no interaction states. All colors token-bound.",
        "columns": [
          "Value"
        ],
        "rows": [
          {
            "role": "Label",
            "token": "main/view-only-field/color/label",
            "values": [
              "#6780A9"
            ]
          },
          {
            "role": "Value text",
            "token": "main/view-only-field/color/text",
            "values": [
              "#0A2757"
            ]
          },
          {
            "role": "Text link",
            "token": "main/view-only-field/color/label-link",
            "values": [
              "#005CE5"
            ]
          },
          {
            "role": "Edit icon",
            "token": "main/view-only-field/color/icon",
            "values": [
              "#005CE5"
            ]
          },
          {
            "role": "Subtext description",
            "token": "main/subtext-message/primary/label",
            "values": [
              "#6780A9"
            ]
          },
          {
            "role": "Badge bg (default)",
            "token": "main/badge/information/light/background",
            "values": [
              "#E5F1FF"
            ]
          },
          {
            "role": "Badge label",
            "token": "main/badge/information/light/label",
            "values": [
              "#005CE5"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [
          "Large"
        ],
        "rows": [
          {
            "role": "Height",
            "token": "57px",
            "values": [
              "71px"
            ]
          },
          {
            "role": "Width",
            "token": "360px",
            "values": [
              "360px"
            ]
          },
          {
            "role": "Label-value gap",
            "token": "8px",
            "values": [
              "8px"
            ]
          },
          {
            "role": "Subtext top padding",
            "token": "4px",
            "values": [
              "4px"
            ]
          },
          {
            "role": "Trailing icon size",
            "token": "24 × 24",
            "values": [
              "24 × 24"
            ]
          },
          {
            "role": "Checkmark size",
            "token": "13 × 13",
            "values": [
              "13 × 13"
            ]
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [
          "Large Size"
        ],
        "rows": [
          {
            "role": "Label",
            "token": "Primary/Label/Light/Small — 14px Semibold",
            "values": [
              "Primary/Label/Light/Base — 16px Semibold"
            ]
          },
          {
            "role": "Value text",
            "token": "Primary/Label/Light/Base — 16px Semibold",
            "values": [
              "Primary/Headlines/Section — 22px Bold"
            ]
          },
          {
            "role": "Subtext description",
            "token": "Secondary/Bold/Small Caption — 10px Semibold (BarkAda)",
            "values": [
              "Secondary/Bold/Caption — 12px Semibold (BarkAda)"
            ]
          },
          {
            "role": "Text link",
            "token": "12px Semibold (BarkAda)",
            "values": [
              "12px Semibold (BarkAda)"
            ]
          },
          {
            "role": "Badge label",
            "token": "Primary/Label/Fine — 12px Bold",
            "values": [
              "Primary/Label/Fine — 12px Bold"
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
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "TrailingContent = None | Badge | Link | Icon",
          "swift": "trailing: EBTrailingContent",
          "compose": "trailingContent = EBTrailingContent.None"
        },
        {
          "figma": "Size = SM | LG",
          "swift": ".controlSize(.small / .large)",
          "compose": "size = EBFieldSize.SM / LG"
        },
        {
          "figma": "Status = Default | Error | Warning",
          "swift": ".ebStatus(.error / .warning)",
          "compose": "status = EBFieldStatus.Default"
        },
        {
          "figma": "hasCheckmark <em>(boolean, default False)</em>",
          "swift": "showCheckmark: Bool",
          "compose": "hasCheckmark: Boolean = false"
        },
        {
          "figma": "hasDescription <em>(boolean, default True)</em>",
          "swift": "description: String?",
          "compose": "description: String?"
        },
        {
          "figma": "Value <em>(text)</em>",
          "swift": "value: String",
          "compose": "value: String"
        },
        {
          "figma": "Label <em>(text)</em>",
          "swift": "label: String",
          "compose": "label: String"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Plain field",
        "swift": "<span class=\"typ\">EBViewOnlyField</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Label\"</span>, <span class=\"prp\">value</span>: <span class=\"str\">\"Text\"</span>)\n    .<span class=\"fn\">controlSize</span>(<span class=\"dot\">.large</span>)",
        "compose": "<span class=\"typ\">EBViewOnlyField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Label\"</span>,\n    <span class=\"prp\">value</span> = <span class=\"str\">\"Text\"</span>,\n    <span class=\"prp\">size</span> = <span class=\"typ\">EBFieldSize</span>.LG\n)"
      },
      {
        "subheading": "With a trailing badge",
        "swift": "<span class=\"typ\">EBViewOnlyField</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Label\"</span>, <span class=\"prp\">value</span>: <span class=\"str\">\"Text\"</span>)\n    .<span class=\"fn\">ebTrailing</span>(<span class=\"dot\">.badge</span>)",
        "compose": "<span class=\"typ\">EBViewOnlyField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Label\"</span>,\n    <span class=\"prp\">value</span> = <span class=\"str\">\"Text\"</span>,\n    <span class=\"prp\">trailingContent</span> = <span class=\"typ\">EBTrailingContent</span>.Badge\n)"
      },
      {
        "subheading": "Verified — with the checkmark",
        "swift": "<span class=\"typ\">EBViewOnlyField</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Label\"</span>, <span class=\"prp\">value</span>: <span class=\"str\">\"Text\"</span>)\n    .<span class=\"fn\">ebCheckmark</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBViewOnlyField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Label\"</span>,\n    <span class=\"prp\">value</span> = <span class=\"str\">\"Text\"</span>,\n    <span class=\"prp\">hasCheckmark</span> = <span class=\"kw\">true</span>\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"typ\">EBViewOnlyField</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Label\"</span>, <span class=\"prp\">value</span>: <span class=\"str\">\"Text\"</span>)\n    .<span class=\"fn\">ebStatus</span>(<span class=\"dot\">.error</span>)",
        "compose": "<span class=\"typ\">EBViewOnlyField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Label\"</span>,\n    <span class=\"prp\">value</span> = <span class=\"str\">\"Text\"</span>,\n    <span class=\"prp\">status</span> = <span class=\"typ\">EBFieldStatus</span>.Error\n)"
      },
      {
        "subheading": "Warning, without a description",
        "swift": "<span class=\"typ\">EBViewOnlyField</span>(<span class=\"prp\">label</span>: <span class=\"str\">\"Label\"</span>, <span class=\"prp\">value</span>: <span class=\"str\">\"Text\"</span>)\n    .<span class=\"fn\">ebStatus</span>(<span class=\"dot\">.warning</span>)\n    .<span class=\"fn\">ebDescription</span>(<span class=\"kw\">nil</span>)",
        "compose": "<span class=\"typ\">EBViewOnlyField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Label\"</span>,\n    <span class=\"prp\">value</span> = <span class=\"str\">\"Text\"</span>,\n    <span class=\"prp\">status</span> = <span class=\"typ\">EBFieldStatus</span>.Warning,\n    <span class=\"prp\">description</span> = <span class=\"kw\">null</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Accessibility label",
        "ios": "<code>.accessibilityLabel(\"\\(label): \\(value)\")</code>",
        "android": "<code>contentDescription = \"$label: $value\"</code>"
      },
      {
        "requirement": "Trailing action (with Icon)",
        "ios": "Button with <code>.accessibilityLabel(\"Edit \\(label)\")</code>",
        "android": "IconButton with <code>contentDescription = \"Edit $label\"</code>"
      },
      {
        "requirement": "Text link",
        "ios": "Button with <code>.accessibilityHint(\"Opens help\")</code>",
        "android": "TextButton with <code>semantics { role = Role.Button }</code>"
      },
      {
        "requirement": "Min touch target (trailing action)",
        "ios": "44 × 44 pt",
        "android": "48 × 48 dp"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use View Only Field to display verified or system-set data (phone number, email, account status) where the user shouldn't edit directly.",
        "dontText": "Use for editable input — use Input Field, Labeled Field, or Select Field instead. Read-only fields imply the value is final or managed elsewhere."
      },
      {
        "doText": "Use the with Icon variant with a pencil to indicate the field can be edited in a separate screen — provides a clear tap target.",
        "dontText": "Rely on the icon alone without an accessibility label — screen readers need to announce the trailing action's purpose."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>FieldRow</code> wraps <code>Label</code> and <code>Value</code> on the §3 vocabulary, with the trailing containers kebab-cased per §4 — <code>badge-container</code>, <code>text-link-container</code>, <code>icon-container</code>. The wrapper frame names are a recorded intentional exception."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The overloaded <code>variant</code> enum is now <code>TrailingContent = None | Badge | Link | Icon</code>, <code>Size</code> uses the standard <code>SM | LG</code> scale, and the axis carrying Error and Warning was renamed <code>State</code> → <code>Status</code> in v2.5 — correct for a display-only component, which has no interaction states for a <code>State</code> axis to describe."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Colors read cleanly off the node, including the amber <code>#CA970C</code> warning pair. Bindings themselves are not readable through the review tooling, so the token paths on the Style tab are indicative and need a Dev Mode confirmation."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to a SwiftUI <code>VStack</code> / Compose <code>Column</code> of label + value, with the trailing content as an optional closure. No border or fill — it is a display row, so there is no framework chrome to fight."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Display-only. Nothing here is focused, pressed or disabled, which is why the axis carries <code>Status</code> rather than <code>State</code>. The trailing badge, link and icon own their own tap states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The checkmark is a vector — a 13 × 13 filled circle at <code>#025AE9</code> with the tick knocked out — replacing the raster CDN image. The edit icon and the status glyphs are shared instances."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — no native library exists yet. Nothing in the schema blocks it: three cleanly named enums, two booleans and two text properties."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>TrailingContent</code>, <code>Size</code> and <code>Status</code> map onto native enums; the two booleans and two text properties map onto plain parameters."
      },
      {
        "aspect": "State coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All 24 combinations exist — 4 × 2 × 3 with no gaps."
      },
      {
        "aspect": "Asset linkability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Checkmark, edit icon and status glyphs are all vector instances, bindable as asset parameters."
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Proposed target: <code>EBViewOnlyField</code>. Not yet written — blocked on the native library, same as C7."
      }
    ],
    "variants": {
      "total": 24,
      "description": "<code>TrailingContent</code> (4) × <code>Size</code> (2) × <code>Status</code> (3) = <strong>24 variants</strong> — the full matrix, no gaps. <code>hasCheckmark</code>, <code>hasDescription</code>, <code>Value</code> and <code>Label</code> are component properties rather than variant axes, so they do not multiply the count. SM is 55px in Default and 56px in Error and Warning, where the status glyph sets the row height.",
      "summary": {
        "columns": [
          "TrailingContent",
          "Size",
          "Status",
          "Count"
        ],
        "rows": [
        {
          "cells": [
            "None",
            "SM · LG",
            "Default · Error · Warning",
            "6"
          ]
        },
        {
          "cells": [
            "Badge",
            "SM · LG",
            "Default · Error · Warning",
            "6"
          ]
        },
        {
          "cells": [
            "Link",
            "SM · LG",
            "Default · Error · Warning",
            "6"
          ]
        },
        {
          "cells": [
            "Icon",
            "SM · LG",
            "Default · Error · Warning",
            "6"
          ]
        }
        ]
      },
      "collapseLabel": "View full TrailingContent × Size × Status breakdown (24 rows)",
      "columns": [
        "TrailingContent",
        "Size",
        "Status",
        "Dimensions",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "None",
            "SM",
            "Default",
            "360 × 55",
            "4996:25508"
          ]
        },
        {
          "cells": [
            "None",
            "LG",
            "Default",
            "360 × 72",
            "4996:25562"
          ]
        },
        {
          "cells": [
            "None",
            "SM",
            "Error",
            "360 × 56",
            "5001:33489"
          ]
        },
        {
          "cells": [
            "None",
            "LG",
            "Error",
            "360 × 72",
            "5001:33543"
          ]
        },
        {
          "cells": [
            "None",
            "SM",
            "Warning",
            "360 × 56",
            "5001:34115"
          ]
        },
        {
          "cells": [
            "None",
            "LG",
            "Warning",
            "360 × 72",
            "5001:34169"
          ]
        },
        {
          "cells": [
            "Badge",
            "SM",
            "Default",
            "360 × 55",
            "4996:25520"
          ]
        },
        {
          "cells": [
            "Badge",
            "LG",
            "Default",
            "360 × 72",
            "4996:25574"
          ]
        },
        {
          "cells": [
            "Badge",
            "SM",
            "Error",
            "360 × 56",
            "5001:33475"
          ]
        },
        {
          "cells": [
            "Badge",
            "LG",
            "Error",
            "360 × 72",
            "5001:33529"
          ]
        },
        {
          "cells": [
            "Badge",
            "SM",
            "Warning",
            "360 × 56",
            "5001:34101"
          ]
        },
        {
          "cells": [
            "Badge",
            "LG",
            "Warning",
            "360 × 72",
            "5001:34155"
          ]
        },
        {
          "cells": [
            "Link",
            "SM",
            "Default",
            "360 × 55",
            "4996:25534"
          ]
        },
        {
          "cells": [
            "Link",
            "LG",
            "Default",
            "360 × 72",
            "4996:25588"
          ]
        },
        {
          "cells": [
            "Link",
            "SM",
            "Error",
            "360 × 56",
            "5001:33461"
          ]
        },
        {
          "cells": [
            "Link",
            "LG",
            "Error",
            "360 × 72",
            "5001:33501"
          ]
        },
        {
          "cells": [
            "Link",
            "SM",
            "Warning",
            "360 × 56",
            "5001:34087"
          ]
        },
        {
          "cells": [
            "Link",
            "LG",
            "Warning",
            "360 × 72",
            "5001:34141"
          ]
        },
        {
          "cells": [
            "Icon",
            "SM",
            "Default",
            "360 × 55",
            "4996:25548"
          ]
        },
        {
          "cells": [
            "Icon",
            "LG",
            "Default",
            "360 × 72",
            "4996:25602"
          ]
        },
        {
          "cells": [
            "Icon",
            "SM",
            "Error",
            "360 × 56",
            "5001:33447"
          ]
        },
        {
          "cells": [
            "Icon",
            "LG",
            "Error",
            "360 × 72",
            "5001:33515"
          ]
        },
        {
          "cells": [
            "Icon",
            "SM",
            "Warning",
            "360 × 56",
            "5001:34073"
          ]
        },
        {
          "cells": [
            "Icon",
            "LG",
            "Warning",
            "360 × 72",
            "5001:34127"
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
      "header": "Style + Code tabs rebuilt against node 4996:25507",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt as a single card</strong> — one spec card driven by a panel mirroring the Figma property panel: <code>TrailingContent</code>, <code>Size</code> and <code>Status</code> as selects, <code>hasCheckmark</code> and <code>hasDescription</code> as toggles, and <code>Value</code> and <code>Label</code> as text inputs. The booleans and text properties were invisible to <code>get_node_info</code>, which returns variant properties only. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong>Text-property input added to the shared spec card</strong> — <code>SpecCard.astro</code> handled selects and toggles but had no control for a Figma TEXT property, so <code>Value</code> and <code>Label</code> had nowhere to go. Added <code>control: 'input'</code> to the schema and the renderer. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong>Checkmark corrected twice</strong> — first drawn as a green stroked tick, which was invented rather than read. It is <code>#025AE9</code> and filled. The form was then still wrong: exporting the boolean child alone renders a plain circle, and only the <code>check</code> group shows the white tick knocked out of it. Alignment corrected too — 8px after the value, vertically centred in the value box, measured from the real text width at runtime rather than a per-character estimate. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong>Property mapping corrected</strong> — the overloaded <code>variant=Default</code> row and <code>Size=Large</code> are gone. Now maps all seven properties: three enums, two booleans and two text properties. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Code"
          }
        },
        {
          "body": "<strong>Variants inventory corrected</strong> — from <code>total: 8</code> on a “4 variant × 2 Size” matrix to the real <strong>24</strong> (<code>TrailingContent</code> × <code>Size</code> × <code>Status</code>), with a grouped summary and a collapsible full breakdown per the inventory conventions. <code>codeConnect</code> was an empty array and is now filled. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Code"
          }
        },
        {
          "body": "<strong>Scorecard rewritten</strong> — C2 still called <code>variant</code> overloaded and <code>Size=Default</code> a non-size, C6 still reported a raster checkmark from the Figma CDN. All resolved in v2.0. C5 is now Not Applicable rather than Ready: a display-only component has no interaction states to cover. <span class=\"tag-fixed\">Documented</span>",
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
      "header": "Axis renamed and nested copy exposed",
      "rows": [
        {
          "body": "<strong><code>State</code> axis renamed <code>Status</code></strong> — the axis carried three statuses and no interaction values on a component that can never be focused, pressed or disabled, so the §6 form-field exception did not reach it. Same 24 variants, one property renamed. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        },
        {
          "body": "<strong><code>Subtext Message</code> copy exposed via nested instance properties</strong> — the message and its trailing label can be set from the parent without detaching. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        }
      ]
    },
    {
      "version": "2.4",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Matrix verified",
      "rows": [
        {
          "body": "<strong>Variant matrix verified complete at 24</strong> — <code>TrailingContent</code> (4) × <code>Size</code> (2) × <code>Status</code> (3) with no gaps, SM at 55–56px and LG at 72px throughout. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        }
      ]
    },
    {
      "version": "2.2",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Text layers named and wrappers confirmed",
      "rows": [
        {
          "body": "<strong>Text layers renamed <code>Label</code> and <code>Value</code></strong> — onto the §3 vocabulary. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong><code>Label</code> and <code>Value</code> confirmed exposed as text properties</strong> — a consumer sets the copy without detaching. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Wrapper frame names confirmed intentional</strong> — the kebab-cased trailing containers follow §4, which reserves that casing for slots and content wrappers. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        }
      ]
    },
    {
      "version": "2.1",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Status values added",
      "rows": [
        {
          "body": "<strong>Error and Warning states added and made selectable</strong> — each pairing its own glyph with its message colour: a filled red circle at <code>#D61B2C</code>, an amber triangle at <code>#CA970C</code>. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        },
        {
          "body": "<strong><code>container</code> renamed <code>FieldRow</code>.</strong> <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        }
      ]
    },
    {
      "version": "2.0",
      "date": "September 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt on node 4996:25507 — 2026 Working File",
      "rows": [
        {
          "body": "<strong>Overloaded <code>variant</code> property renamed</strong> — four trailing content types packed into one enum called <code>variant</code> are now <code>TrailingContent = None | Badge | Link | Icon</code>, which says what the axis controls. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Size values aligned to the standard scale</strong> — <code>Size=Default</code> was never a size name; the axis is now <code>SM | LG</code>. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Checkmark converted to a vector</strong> — replacing the raster image served from the Figma CDN. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6"
          }
        },
        {
          "body": "<strong>Composes the shared <code>Subtext Message</code> instance</strong> rather than redrawing the description row. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C4"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18403:4520",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 8 variants documented across variant (Default/with Badge/with Text Link/with Icon) × Size (Default/Large). Read-only data display field with label, value, optional subtext, and optional trailing slot. Grouped under Form Elements.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Overloaded variant property</strong> — <code>variant</code> conflates 4 different trailing content types into one enum. Should be renamed to <code>trailingContent</code> or split into semantic properties.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Size=Default should be Size=Regular</strong> — \"Default\" isn't a size name; describes starting state, not dimension.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Raster checkmark</strong> — Checkmark uses a raster IMG from Figma CDN instead of a vector icon instance. Replace with icon library component.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered yet.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
