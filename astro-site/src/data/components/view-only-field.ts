import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/view-only-field.js`.
const viewOnlyFieldDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'Default',
        options: [
          { value: 'Default', label: 'Default' },
          { value: 'Large', label: 'Large' },
        ],
      },
      {
        label: 'hasCheckmark',
        prop: 'checkmark',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' },
        ],
      },
      {
        label: 'hasDescription',
        prop: 'description',
        defaultValue: 'true',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' },
        ],
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
        "cardKey": "vof-spec-default",
        "demoKey": "default",
        "demoControls": viewOnlyFieldDemoControls,
        "title": "Default",
        "node": "18403:4521",
        "description": "Label + value only. Used for plain read-only information display.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Size",
                "value": "Default",
                "prop": "size",
                "mono": false
              },
              {
                "key": "hasCheckmark",
                "value": "false",
                "prop": "checkmark",
                "mono": false
              },
              {
                "key": "hasDescription",
                "value": "true",
                "prop": "description",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "labeled-field/default/bg" },
              { "key": "Border", "value": "#D7E0EF", "token": "labeled-field/default/border" },
              { "key": "Label", "value": "#0A2757", "token": "labeled-field/default/label" },
              { "key": "Text", "value": "#0A2757", "token": "labeled-field/default/text" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "labeled-field/default/placeholder",
                "variants": { "filled:true": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "14px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              },
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBViewOnlyField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Account number\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"•••• 1234\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBViewOnlyField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account number\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"•••• 1234\"</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"vof-preview-default\"></div>"
      },
      {
        "cardKey": "vof-spec-badge",
        "demoKey": "badge",
        "demoControls": viewOnlyFieldDemoControls,
        "title": "with Badge",
        "node": "18403:4533",
        "description": "Label + value + Badge instance in the trailing slot. Uses Badge component (layout=overflow or similar) for status indicators.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "with Badge",
                "mono": false
              },
              {
                "key": "Size",
                "value": "Default",
                "prop": "size",
                "mono": false
              },
              {
                "key": "hasCheckmark",
                "value": "false",
                "prop": "checkmark",
                "mono": false
              },
              {
                "key": "hasDescription",
                "value": "true",
                "prop": "description",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "labeled-field/default/bg" },
              { "key": "Border", "value": "#D7E0EF", "token": "labeled-field/default/border" },
              { "key": "Label", "value": "#0A2757", "token": "labeled-field/default/label" },
              { "key": "Text", "value": "#0A2757", "token": "labeled-field/default/text" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "labeled-field/default/placeholder",
                "variants": { "filled:true": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "14px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              },
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBViewOnlyField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Account number\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"•••• 1234\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBViewOnlyField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account number\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"•••• 1234\"</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"vof-preview-badge\"></div>"
      },
      {
        "cardKey": "vof-spec-textlink",
        "demoKey": "textlink",
        "demoControls": viewOnlyFieldDemoControls,
        "title": "with Text Link",
        "node": "18403:4547",
        "description": "Label + value + contextual text link (e.g. \"What is this?\"). Used for helper/learn-more navigation.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "with Text Link",
                "mono": false
              },
              {
                "key": "Size",
                "value": "Default",
                "prop": "size",
                "mono": false
              },
              {
                "key": "hasCheckmark",
                "value": "false",
                "prop": "checkmark",
                "mono": false
              },
              {
                "key": "hasDescription",
                "value": "true",
                "prop": "description",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "labeled-field/default/bg" },
              { "key": "Border", "value": "#D7E0EF", "token": "labeled-field/default/border" },
              { "key": "Label", "value": "#0A2757", "token": "labeled-field/default/label" },
              { "key": "Text", "value": "#0A2757", "token": "labeled-field/default/text" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "labeled-field/default/placeholder",
                "variants": { "filled:true": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "14px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              },
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBViewOnlyField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Account number\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"•••• 1234\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBViewOnlyField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account number\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"•••• 1234\"</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"vof-preview-textlink\"></div>"
      },
      {
        "cardKey": "vof-spec-icon",
        "demoKey": "icon",
        "demoControls": viewOnlyFieldDemoControls,
        "title": "with Icon",
        "node": "18403:4561",
        "description": "Label + value + 24×24 icon (typically Edit pencil) in the trailing slot. Icon typically navigates to an editable state.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "state",
                "value": "Default",
                "mono": false
              },
              {
                "key": "Variant",
                "value": "with Icon",
                "mono": false
              },
              {
                "key": "Size",
                "value": "Default",
                "prop": "size",
                "mono": false
              },
              {
                "key": "hasCheckmark",
                "value": "false",
                "prop": "checkmark",
                "mono": false
              },
              {
                "key": "hasDescription",
                "value": "true",
                "prop": "description",
                "mono": false
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg", "value": "#FFFFFF", "token": "labeled-field/default/bg" },
              { "key": "Border", "value": "#D7E0EF", "token": "labeled-field/default/border" },
              { "key": "Label", "value": "#0A2757", "token": "labeled-field/default/label" },
              { "key": "Text", "value": "#0A2757", "token": "labeled-field/default/text" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "labeled-field/default/placeholder",
                "variants": { "filled:true": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Field height",
                "value": "48px",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "12px",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "14px",
                "mono": true
              },
              {
                "key": "Border radius",
                "value": "radius/radius-2 (6px)",
                "mono": true
              },
              {
                "key": "Border",
                "value": "1px solid",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "20 × 20",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Label style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Label font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              },
              {
                "key": "Value style",
                "value": "Primary/Label/Light/Small",
                "mono": true
              },
              {
                "key": "Value font",
                "value": "Proxima Soft Semibold · 14 / 14 · +0.25",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBViewOnlyField</span><span class=\"syn-punc\">(</span>label<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Account number\"</span><span class=\"syn-punc\">, </span>value<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"•••• 1234\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBViewOnlyField</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account number\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"•••• 1234\"</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<div id=\"vof-preview-icon\"></div>"
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
          "figma": "variant=Default",
          "swift": "(default — no trailing)",
          "compose": "trailing = null"
        },
        {
          "figma": "variant=with Badge <span class=\"tag-open tag-c2\">rename</span>",
          "swift": "trailing: { EBBadge(...) }",
          "compose": "trailing = { EBBadge(...) }"
        },
        {
          "figma": "variant=with Text Link <span class=\"tag-open tag-c2\">rename</span>",
          "swift": "trailing: { Button(\"...\") {} }",
          "compose": "trailing = { TextButton(...) }"
        },
        {
          "figma": "variant=with Icon <span class=\"tag-open tag-c2\">rename</span>",
          "swift": "trailing: { Image(...) }",
          "compose": "trailing = { Icon(...) }"
        },
        {
          "figma": "Size=Default <span class=\"tag-open tag-c2\">rename</span>",
          "swift": ".controlSize(.regular)",
          "compose": "size = EBFieldSize.Regular"
        },
        {
          "figma": "Size=Large",
          "swift": ".controlSize(.large)",
          "compose": "size = EBFieldSize.Large"
        },
        {
          "figma": "hasCheckmark (boolean)",
          "swift": "isVerified: Bool",
          "compose": "isVerified: Boolean"
        },
        {
          "figma": "hasDescription (boolean)",
          "swift": "description: String?",
          "compose": "description: String?"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/FormElements/EBViewOnlyField.swift",
        "compose": "android/components/form/EBViewOnlyField.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default",
        "swift": "<span class=\"typ\">EBViewOnlyField</span>(\n    <span class=\"prp\">label</span>: <span class=\"str\">\"Mobile Number\"</span>,\n    <span class=\"prp\">value</span>: <span class=\"str\">\"+63 917 123 4567\"</span>,\n    <span class=\"prp\">description</span>: <span class=\"str\">\"This is your verified number\"</span>\n)",
        "compose": "<span class=\"typ\">EBViewOnlyField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Mobile Number\"</span>,\n    <span class=\"prp\">value</span> = <span class=\"str\">\"+63 917 123 4567\"</span>,\n    <span class=\"prp\">description</span> = <span class=\"str\">\"This is your verified number\"</span>\n)"
      },
      {
        "subheading": "with Badge",
        "swift": "<span class=\"typ\">EBViewOnlyField</span>(\n    <span class=\"prp\">label</span>: <span class=\"str\">\"Account Status\"</span>,\n    <span class=\"prp\">value</span>: <span class=\"str\">\"Active\"</span>,\n    <span class=\"prp\">trailing</span>: {\n        <span class=\"typ\">EBBadge</span>(<span class=\"str\">\"Change\"</span>, <span class=\"prp\">state</span>: .<span class=\"prp\">information</span>, <span class=\"prp\">level</span>: .<span class=\"prp\">light</span>)\n    }\n)",
        "compose": "<span class=\"typ\">EBViewOnlyField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Account Status\"</span>,\n    <span class=\"prp\">value</span> = <span class=\"str\">\"Active\"</span>,\n    <span class=\"prp\">trailing</span> = {\n        <span class=\"typ\">EBBadge</span>(\n            <span class=\"prp\">text</span> = <span class=\"str\">\"Change\"</span>,\n            <span class=\"prp\">state</span> = <span class=\"typ\">BadgeState</span>.<span class=\"prp\">Information</span>,\n            <span class=\"prp\">level</span> = <span class=\"typ\">BadgeLevel</span>.<span class=\"prp\">Light</span>\n        )\n    }\n)"
      },
      {
        "subheading": "with Icon (Edit)",
        "swift": "<span class=\"typ\">EBViewOnlyField</span>(\n    <span class=\"prp\">label</span>: <span class=\"str\">\"Email Address\"</span>,\n    <span class=\"prp\">value</span>: <span class=\"str\">\"dhar@frostdesigngroup.com\"</span>,\n    <span class=\"prp\">trailing</span>: {\n        <span class=\"typ\">Button</span>(<span class=\"prp\">action</span>: { <span class=\"cmt\">/* navigate to edit */</span> }) {\n            <span class=\"typ\">Image</span>(<span class=\"prp\">systemName</span>: <span class=\"str\">\"pencil\"</span>)\n        }\n    }\n)",
        "compose": "<span class=\"typ\">EBViewOnlyField</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Email Address\"</span>,\n    <span class=\"prp\">value</span> = <span class=\"str\">\"dhar@frostdesigngroup.com\"</span>,\n    <span class=\"prp\">trailing</span> = {\n        <span class=\"typ\">IconButton</span>(<span class=\"prp\">onClick</span> = { <span class=\"cmt\">/* navigate to edit */</span> }) {\n            <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.<span class=\"prp\">Default</span>.<span class=\"prp\">Edit</span>, <span class=\"prp\">contentDescription</span> = <span class=\"str\">\"Edit\"</span>)\n        }\n    }\n)"
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
        "notes": "Semantic names: <code>container</code>, <code>content-container</code>, <code>text-container</code>, <code>badge-container</code>, <code>text-link-container</code>, <code>icon-container</code>. Clean hierarchy."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Property <code>variant</code> is overloaded (4 trailing content types as one enum). <code>Size=Default</code> isn't a size name — should be <code>Regular</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to design tokens. Space, typography, and badge tokens all present."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps cleanly to SwiftUI VStack / Compose Column with label + value + optional trailing closure."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Display-only component — no interaction states expected. Trailing actions (icon/text link) handle their own tap states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Checkmark uses a raster IMG from Figma CDN. Edit icon is a clean vector. Replace checkmark with an icon component instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No CLI mappings registered yet."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 8,
      "description": "4 <code>variant</code> values × 2 <code>Size</code> values. Two booleans (<code>hasCheckmark</code>, <code>hasDescription</code>) apply to all variants.",
      "columns": [
        "variant",
        "Size",
        "Height",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "Default",
            "57",
            "18403:4521"
          ]
        },
        {
          "cells": [
            "with Badge",
            "Default",
            "57",
            "18403:4533"
          ]
        },
        {
          "cells": [
            "with Text Link",
            "Default",
            "57",
            "18403:4547"
          ]
        },
        {
          "cells": [
            "with Icon",
            "Default",
            "57",
            "18403:4561"
          ]
        },
        {
          "cells": [
            "Default",
            "Large",
            "71",
            "18403:4575"
          ]
        },
        {
          "cells": [
            "with Badge",
            "Large",
            "71",
            "18403:4587"
          ]
        },
        {
          "cells": [
            "with Text Link",
            "Large",
            "71",
            "18403:4601"
          ]
        },
        {
          "cells": [
            "with Icon",
            "Large",
            "71",
            "18403:4615"
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
