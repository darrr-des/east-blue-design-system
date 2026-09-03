import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/text-area.js`.
const textAreaDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'focused', label: 'Focused' },
          { value: 'error', label: 'Error' },
          { value: 'disabled', label: 'Disabled' },
        ],
      },
      {
        label: 'hasValue',
        prop: 'hasValue',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
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
        label: 'hasSubtext',
        prop: 'hasSubtext',
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

export const textArea: ComponentData = {
  "meta": {
    "slug": "text-area",
    "name": "Text Area",
    "node": "4781:35856",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4781-35856",
    "description": "A multi-line text input for longer-form entry — label, body, and character counter.",
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
      "text": "Rebuilt on node <code>4781:35856</code> in the 2026 Working File. <code>State = Default | Focused | Error | Disabled</code> × <code>hasValue = False | True</code> gives eight variants, the label and subtext are shared instances rather than redrawn, focus and error borders are distinct, the character counter matches its sample exactly, and the local layers now read <code>ValueContainer</code> → <code>Value</code>. Two family questions were settled here rather than left to recur: <code>hasValue</code> is the pattern for fields whose filled state changes geometry, and the error color on a validation message belongs to the shared <code>Subtext Message</code> component. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Typical mobile contexts: feedback forms, message composers, notes, support request descriptions.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <rect x=\"20\" y=\"16\" width=\"80\" height=\"10\" rx=\"2\" fill=\"currentColor\" opacity=\".08\"></rect>\n          <rect x=\"20\" y=\"30\" width=\"80\" height=\"32\" rx=\"3\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".2\"></rect>\n          <rect x=\"24\" y=\"35\" width=\"60\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"24\" y=\"41\" width=\"55\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"24\" y=\"47\" width=\"40\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".1\"></rect>\n          <rect x=\"20\" y=\"66\" width=\"80\" height=\"6\" rx=\"3\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"ta-demo-preview\"><svg width=\"328\" height=\"62\" viewBox=\"0 0 328 62\" fill=\"none\"><rect x=\"0.5\" y=\"0.5\" width=\"327\" height=\"61\" rx=\"5.5\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"12\" y=\"36\" font-family=\"Proxima Soft, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" letter-spacing=\"0.25\">Placeholder</text><path d=\"M314 56L322 48M318 56L322 52\" stroke=\"#90A8D0\" stroke-width=\"1.2\" stroke-linecap=\"round\"></path></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select class=\"demo-panel-select\" onchange=\"_taDemo.state=this.value;updateTextAreaDemo()\"><option value=\"default\">default</option><option value=\"active\">active</option><option value=\"error\">error</option><option value=\"disabled\">disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select class=\"demo-panel-select\" onchange=\"_taDemo.filled=this.value;updateTextAreaDemo()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isExpandable</span><select class=\"demo-panel-select\" onchange=\"_taDemo.expandable=this.value;updateTextAreaDemo()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Works anywhere multi-line text is needed, carries its own label and supporting-text anatomy, and is confirmed as a standalone component. The <code>State × hasValue</code> schema mirrors Input Field's by design — family consistency rather than duplication."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own border, fill, and text styles per state, plus a <code>FormGroup Header</code> for labelling and a <code>Subtext Message</code> for supporting copy and the character count. Nothing external required to render a complete field."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Axes are clean — <code>State = Default | Focused | Error | Disabled</code> × <code>hasValue</code>, PascalCase per §1 with Title Case values — and <code>hasValue</code> is now the documented family pattern for fields whose filled state changes geometry. Local layers follow the §3 vocabulary as <code>ValueContainer</code> → <code>Value</code>, the label and subtext come from shared instances, and the character counter matches its sample content."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Composes shared <code>FormGroup Header</code> and <code>Subtext Message</code> instances, so label and supporting-text changes propagate from one source across the family rather than being re-authored per component."
      }
    ],
    "behavior": [
      {
        "state": "Default",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default",
        "notes": "1px #D7E0EF border, white bg. No resize glyph — removed in v2.2."
      },
      {
        "state": "Focused",
        "ios": "yes",
        "android": "yes",
        "property": "State=Focused",
        "notes": "#005CE5 border. Matches SwiftUI <code>@FocusState</code> / Compose <code>FocusRequester</code> vocabulary."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "State=Error",
        "notes": "#D61B2C border. Validation copy goes in the <code>Subtext Message</code> row below."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "#EEF2F9 bg, border hidden, text #C2CFE5."
      }
    ],
    "resolved": [
      {
        "headline": "Boolean property migrated to True/False.",
        "body": "v2.0: Rebuilt on node <code>4781:35856</code> in the 2026 Working File. <code>isFilled</code> is now a real Figma boolean with <code>True/False</code> values, mapping directly to Swift <code>Bool</code> / Kotlin <code>Boolean</code>. Matches the fix Input Field shipped in 1.1.0. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>State=Active</code> renamed to <code>Focused</code>.",
        "body": "v2.0: The interaction axis is now <code>State = Default | Focused | Error | Disabled</code>, matching SwiftUI <code>@FocusState</code> / Compose <code>FocusRequester</code> vocabulary and the <code>Focused</code> value in §5 of the Property Naming Guidelines. Consistent with Search Field. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Label and supporting-text slots added.",
        "body": "v2.0: Each variant now composes a <code>FormGroup Header</code> instance above the field and a <code>Subtext Message</code> instance below it, so labelling and validation copy are part of the component rather than re-implemented per screen. Delivered as shared instances rather than bespoke slots — a better outcome than recommended. (C5 · Slot)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Character-count affordance added.",
        "body": "v2.0: The <code>Subtext Message</code> instance carries a trailing counter (<code>0/100</code>) alongside the supporting-text row, matching Material 3's <code>supportingText</code> + <code>counter</code> pattern. The DS can now represent limit state. (C5 · Slot)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Confirmed as a standalone component.",
        "body": "v2.1: Closed by owner decision — Text Area stays its own component rather than folding into Input Field as a <code>multiline</code> flag. The original consolidation case rested on Text Area duplicating Input Field's schema with no anatomy of its own; it now composes shared <code>FormGroup Header</code> and <code>Subtext Message</code> instances and owns a character-count affordance Input Field doesn't need. The parallel <code>State × isFilled</code> schema is deliberate family consistency, not duplication. (Family)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "<code>State=Error</code> exception confirmed.",
        "body": "v2.1: Closed by owner decision at family level — <code>Error</code> stays on the <code>State</code> axis across Form Elements as a deliberate exception to the State/Status rule, matching how most design systems model form-field validation. Keeps Text Area at 8 variants rather than the 12 a split would require. Applies equally to Search Field and Amount Text Field. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Desktop resize handle removed.",
        "body": "v2.2: The <code>text-area icon</code> frame is gone from all eight variants, taking the browser-only <code>resize: both</code> affordance with it. Native <code>TextField(axis: .vertical)</code> / <code>OutlinedTextField(maxLines = n)</code> auto-grow without a user-facing grip, so the component now maps cleanly. Field heights normalised to 50px and every variant is a uniform 94px tall. Also closes the raster-vs-vector question, which is moot now the glyph is gone. (C4 · C6 · Asset)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Token namespace resolved — generic tokens applied.",
        "body": "v2.2: Closed by owner confirmation. The component-scoped <code>main/text-area/*</code> namespace was dropped in favour of the shared generic token scale, so there is no longer a parallel token set that can drift from <code>main/input-field/*</code>. Same direction Search Field took. (C1 · Token)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Character counter corrected in the filled variants.",
        "body": "v2.2: The four <code>hasValue=True</code> variants now read <code>71/100</code>, matching their body copy, instead of the previous <code>0/100</code>. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Boolean renamed <code>isFilled</code> → <code>hasValue</code>.",
        "body": "v2.3: The variant axis is now <code>State</code> × <code>hasValue</code>. Resolves the catalog gap in the right direction — §2 assigns the <code>has</code> prefix to presence of content, and <code>hasValue</code> pairs with the <code>Value</code> text property in §3, where <code>isFilled</code> read as a visual descriptor. Input Field and Amount Text Field should follow so the family stays aligned. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Nested duplicate <code>text-container</code> removed.",
        "body": "v2.3: <code>text-container</code> now holds <code>#text-label</code> directly in every variant — the redundant same-size wrapper inside it is gone, and the layer tree is unambiguous. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Sample content matches <code>hasValue</code> in all eight variants.",
        "body": "v2.4: Every <code>hasValue=False</code> variant now reads <em>Write your message…</em> with a <code>0/100</code> counter, and every <code>hasValue=True</code> variant carries the body sentence with <code>71/100</code> — verified across all eight by text scan. Field heights follow the content: 34px for one line of placeholder, 50px for two lines of copy. Closes the last C1 finding. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Character-count sample content corrected.",
        "body": "v2.4: Verified on the live node. The counter now reads <code>0/100</code> in the <code>hasValue=False</code> variants and <code>71/100</code> in the <code>hasValue=True</code> variants, matching the 71-character sample string exactly. Previously the count and the content disagreed, which made the counter look decorative rather than bound. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Local layer names cleaned up.",
        "body": "v2.5: Verified on the live node. <code>text-container</code> → <code>ValueContainer</code> and <code>#text-label</code> → <code>Value</code> across all eight variants, so the entered text exposes as a single <code>Value</code> property matching the §3 vocabulary. The bordered frame keeps the name <code>Text Area</code>; it is the only frame at that level and Figma already nests it under the component, so the shadowing is accepted rather than churned. The remaining <code>#label</code> and <code>#subtext</code> layers belong to the shared <code>FormGroup Header</code> and <code>Subtext Message</code> instances and are their owner’s to rename. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>hasValue</code> settled as a family rule.",
        "body": "v2.5: Both approaches in Form Elements are correct, and the rule that separates them is layout. Where the filled state changes the component’s geometry it needs an explicit boolean, because the two shapes cannot be one variant: Text Area is 78px empty and 94px filled, so <code>hasValue</code> earns its place and the set is eight. Where filled changes only color and affordance — <a href=\"#\" onclick=\"showPanelById('search-field');return false;\">Search Field</a>, whose height is constant at 56px — the state is derived from value presence in code and the set stays at four. A consumer can now tell from the geometry alone which pattern a field follows. <code>hasValue</code> goes into the §2 approved boolean catalog on that basis. (C2 · Family)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Error-state subtext coloring settled.",
        "body": "v2.5: The family rule is that a validation message carries the error color — <a href=\"#\" onclick=\"showPanelById('amount-text-field');return false;\">Amount Text Field</a> turns its <code>HelperText</code> <code>#D61B2C</code> and is the reference. Text Area’s subtext is not a local layer: it is the shared <code>Subtext Message</code> instance, which also carries the character counter, so the error color belongs to that component rather than to this one. Recorded here as a shared-component follow-up rather than a Text Area defect, so the difference reads as a known boundary instead of an inconsistency. (C5 · Token)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
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
        "cardKey": "ta-spec-main",
        "demoKey": "main",
        "demoControls": textAreaDemoControls,
        "title": "Text Area",
        "node": "4781:35856",
        "description": "",
        "previewHtml": "<div id=\"text-area-spec-main\"><svg width=\"358\" height=\"78\" viewBox=\"0 0 358 78\" fill=\"none\" role=\"img\" aria-label=\"Text Area, default, empty\"><text x=\"2\" y=\"11\" font-family=\"'Proxima Soft', system-ui, sans-serif\" font-size=\"14\" font-weight=\"600\" letter-spacing=\"0.25\" fill=\"#0A2757\">Label</text><rect x=\"0.5\" y=\"22.5\" width=\"357\" height=\"33\" rx=\"6\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"1\"></rect><text x=\"12\" y=\"44\" font-family=\"'Proxima Soft', system-ui, sans-serif\" font-size=\"14\" font-weight=\"600\" letter-spacing=\"0.25\" fill=\"#90A8D0\">Write your message…</text><text x=\"2\" y=\"73\" font-family=\"BarkAda, system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#6780A9\">Message content</text><text x=\"356\" y=\"73\" text-anchor=\"end\" font-family=\"BarkAda, system-ui, sans-serif\" font-size=\"12\" font-weight=\"600\" fill=\"#6780A9\">0/100</text></svg></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "hasValue", "value": "False", "prop": "hasValue" },
              { "key": "hasLabel", "value": "True", "prop": "hasLabel" },
              { "key": "hasSubtext", "value": "True", "prop": "hasSubtext" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Field background", "value": "#FFFFFF", "token": "surface/default",
                "variants": { "state:disabled": { "value": "#EEF2F9", "token": "surface/disabled" } } },
              { "key": "Border", "value": "#D7E0EF", "token": "border/default",
                "variants": {
                  "state:focused": { "value": "#005CE5", "token": "border/focused" },
                  "state:error": { "value": "#D61B2C", "token": "border/error" },
                  "state:disabled": { "value": "–", "token": "–" }
                } },
              { "key": "Value", "value": "#90A8D0", "token": "text/placeholder",
                "variants": { "hasValue:true": { "value": "#0A2757", "token": "text/primary" },
                              "state:disabled|hasValue:true": { "value": "#90A8D0", "token": "text/placeholder" } } },
              { "key": "Label", "value": "#0A2757", "token": "text/primary" },
              { "key": "Subtext", "value": "#6780A9", "token": "text/secondary" }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label", "value": "—", "mono": true },
              { "key": "Value", "value": "—", "mono": true },
              { "key": "Subtext", "value": "—", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "34px", "mono": true,
                "variants": { "hasValue:true": { "value": "50px" } } },
              { "key": "Width", "value": "358px", "mono": true },
              { "key": "Radius", "value": "6px", "mono": true },
              { "key": "Padding H", "value": "12px / 8px", "mono": true },
              { "key": "Padding V", "value": "10px / 8px", "mono": true },
              { "key": "Gap", "value": "0px", "mono": true },
              { "key": "Alignment", "value": "—", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBTextArea</span><span class=\"syn-punc\">(</span>placeholder<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Write your message…\"</span><span class=\"syn-punc\">, </span>text<span class=\"syn-punc\">: </span>$message<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBTextArea</span><span class=\"syn-punc\">(</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Write your message…\"</span><span class=\"syn-punc\">,</span>\n    value <span class=\"syn-eq\">=</span> message<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span>Default\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off node <code>4781:35856</code>. ROLE is the State value; the second column is the ELEMENT. Token paths are indicative — variable bindings are not readable through the Talk To Figma plugin.",
        "columns": ["Token", "Value"],
        "rows": [
          { "role": "Default", "token": "Field background", "values": ["surface/default", "#FFFFFF"] },
          { "role": "—", "token": "Border", "values": ["border/default", "#D7E0EF"] },
          { "role": "—", "token": "Value (empty)", "values": ["text/placeholder", "#90A8D0"] },
          { "role": "—", "token": "Value (filled)", "values": ["text/primary", "#0A2757"] },
          { "role": "—", "token": "Label", "values": ["text/primary", "#0A2757"] },
          { "role": "—", "token": "Subtext", "values": ["text/secondary", "#6780A9"] },
          { "role": "Focused", "token": "Field background", "values": ["surface/default", "#FFFFFF"] },
          { "role": "—", "token": "Border", "values": ["border/focused", "#005CE5"] },
          { "role": "—", "token": "Value (empty)", "values": ["text/placeholder", "#90A8D0"] },
          { "role": "—", "token": "Value (filled)", "values": ["text/primary", "#0A2757"] },
          { "role": "—", "token": "Label", "values": ["text/primary", "#0A2757"] },
          { "role": "—", "token": "Subtext", "values": ["text/secondary", "#6780A9"] },
          { "role": "Error", "token": "Field background", "values": ["surface/default", "#FFFFFF"] },
          { "role": "—", "token": "Border", "values": ["border/error", "#D61B2C"] },
          { "role": "—", "token": "Value (empty)", "values": ["text/placeholder", "#90A8D0"] },
          { "role": "—", "token": "Value (filled)", "values": ["text/primary", "#0A2757"] },
          { "role": "—", "token": "Label", "values": ["text/primary", "#0A2757"] },
          { "role": "—", "token": "Subtext", "values": ["text/secondary", "#6780A9"] },
          { "role": "Disabled", "token": "Field background", "values": ["surface/disabled", "#EEF2F9"] },
          { "role": "—", "token": "Border", "values": ["–", "–"] },
          { "role": "—", "token": "Value (empty)", "values": ["text/placeholder", "#90A8D0"] },
          { "role": "—", "token": "Value (filled)", "values": ["text/placeholder", "#90A8D0"] },
          { "role": "—", "token": "Label", "values": ["text/primary", "#0A2757"] },
          { "role": "—", "token": "Subtext", "values": ["text/secondary", "#6780A9"] }
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
          "figma": "(text content)",
          "swift": "text: Binding&lt;String&gt;",
          "compose": "value: String"
        },
        {
          "figma": "isFilled (yes/no)",
          "swift": "—",
          "compose": "—"
        },
        {
          "figma": "(multi-line default)",
          "swift": "axis: .vertical",
          "compose": "singleLine = false"
        },
        {
          "figma": "(auto-grow range)",
          "swift": ".lineLimit(3...6)",
          "compose": "maxLines = 6"
        },
        {
          "figma": "state = default",
          "swift": "—",
          "compose": "—"
        },
        {
          "figma": "state = active",
          "swift": "@FocusState",
          "compose": "interactionSource"
        },
        {
          "figma": "state = error",
          "swift": ".ebError(true)",
          "compose": "isError = true"
        },
        {
          "figma": "state = disabled",
          "swift": ".disabled(true)",
          "compose": "enabled = false"
        },
        {
          "figma": "isExpandable",
          "swift": "—",
          "compose": "—"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/FormElements/EBInputField.swift",
        "compose": "android/components/form/EBInputField.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Multi-line (default)",
        "swift": "<span class=\"typ\">EBInputField</span>(<span class=\"str\">\"Tell us more\"</span>, <span class=\"prp\">text</span>: $value, <span class=\"prp\">axis</span>: .<span class=\"kw\">vertical</span>)\n    .<span class=\"fn\">lineLimit</span>(<span class=\"num\">3</span>...<span class=\"num\">6</span>)",
        "compose": "<span class=\"typ\">EBInputField</span>(\n    <span class=\"prp\">value</span> = text,\n    <span class=\"prp\">onValueChange</span> = { text = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Tell us more\"</span>,\n    <span class=\"prp\">singleLine</span> = <span class=\"kw\">false</span>,\n    <span class=\"prp\">maxLines</span> = <span class=\"num\">6</span>\n)"
      },
      {
        "subheading": "Error",
        "swift": "<span class=\"typ\">EBInputField</span>(<span class=\"str\">\"Tell us more\"</span>, <span class=\"prp\">text</span>: $value, <span class=\"prp\">axis</span>: .<span class=\"kw\">vertical</span>)\n    .<span class=\"fn\">lineLimit</span>(<span class=\"num\">3</span>...<span class=\"num\">6</span>)\n    .<span class=\"fn\">ebError</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBInputField</span>(\n    <span class=\"prp\">value</span> = text,\n    <span class=\"prp\">onValueChange</span> = { text = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Tell us more\"</span>,\n    <span class=\"prp\">singleLine</span> = <span class=\"kw\">false</span>,\n    <span class=\"prp\">maxLines</span> = <span class=\"num\">6</span>,\n    <span class=\"prp\">isError</span> = <span class=\"kw\">true</span>\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"typ\">EBInputField</span>(<span class=\"str\">\"Tell us more\"</span>, <span class=\"prp\">text</span>: $value, <span class=\"prp\">axis</span>: .<span class=\"kw\">vertical</span>)\n    .<span class=\"fn\">lineLimit</span>(<span class=\"num\">3</span>...<span class=\"num\">6</span>)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBInputField</span>(\n    <span class=\"prp\">value</span> = text,\n    <span class=\"prp\">onValueChange</span> = { text = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Tell us more\"</span>,\n    <span class=\"prp\">singleLine</span> = <span class=\"kw\">false</span>,\n    <span class=\"prp\">maxLines</span> = <span class=\"num\">6</span>,\n    <span class=\"prp\">enabled</span> = <span class=\"kw\">false</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Minimum touch target",
        "ios": "44 x 44 pt (per-line height 22pt, container ≥44pt)",
        "android": "48 x 48 dp"
      },
      {
        "requirement": "Accessibility label",
        "ios": "<code>.accessibilityLabel(\"Comment\")</code>",
        "android": "<code>contentDescription</code>"
      },
      {
        "requirement": "Error announcement",
        "ios": "VoiceOver reads error via <code>.accessibilityValue</code>",
        "android": "TalkBack reads error via <code>semantics { error() }</code>"
      },
      {
        "requirement": "Character-count announcement",
        "ios": "Announce remaining via <code>.accessibilityValue</code> when a limit is set",
        "android": "Expose via <code>supportingText</code> semantics"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use for free-form responses expected to exceed one line — feedback, comments, messages, notes.",
        "dontText": "Use for short structured inputs (name, phone, code) — Input Field's single-line default is more appropriate and faster to fill."
      },
      {
        "doText": "Pair with a visible label above the field and a helper-text row below for character counts or format hints.",
        "dontText": "Rely on the desktop resize handle on mobile — mobile fields auto-grow within lineLimit/maxLines and the handle has no native behavior."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Duplicate token namespace <code>main/text-area/*</code> mirrors <code>main/input-field/*</code> exactly. Text layer structure is clean."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>isFilled=yes/no</code> (same anti-pattern Input Field already resolved). <code>state=active</code> should be <code>focused</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors bound to <code>main/text-area/color/*</code>. Spacing and radius tokens resolved."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Exists as a distinct component but native platforms treat multi-line as a single TextField with <code>axis: .vertical</code> / <code>singleLine=false</code>. Desktop resize handle has no native equivalent."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All 4 interaction states present. Missing slots: label, helper/error text, character count."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Resize glyph is a raster PNG referenced four times (once per state) instead of a single vector instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked by the consolidation decision and property renames."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "<code>isFilled=yes/no</code> cannot map to native booleans"
      },
      {
        "aspect": "Component identity",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Native platforms have no standalone TextArea primitive; consolidation into Input Field is required first"
      },
      {
        "aspect": "Native component file",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Proposed target: <code>EBInputField</code> with multi-line flag"
      }
    ],
    "variants": {
      "total": 8,
      "description": "4 <code>state</code> values × 2 <code>isFilled</code> values.",
      "columns": [
        "state",
        "isFilled",
        "Height",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "default",
            "yes",
            "62px",
            "3070:21242"
          ]
        },
        {
          "cells": [
            "default",
            "no",
            "46px",
            "3070:21239"
          ]
        },
        {
          "cells": [
            "active",
            "yes",
            "62px",
            "3070:21243"
          ]
        },
        {
          "cells": [
            "active",
            "no",
            "46px",
            "3070:21238"
          ]
        },
        {
          "cells": [
            "error",
            "yes",
            "62px",
            "3070:21244"
          ]
        },
        {
          "cells": [
            "error",
            "no",
            "46px",
            "3070:21240"
          ]
        },
        {
          "cells": [
            "disabled",
            "yes",
            "62px",
            "3070:21241"
          ]
        },
        {
          "cells": [
            "disabled",
            "no",
            "46px",
            "3070:21237"
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
      "header": "Initial Assessment · node 3070:21245",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 8 variants documented across <code>state</code> (default/active/error/disabled) × <code>isFilled</code> (yes/no). Multi-line sibling of Input Field within the Form Elements group.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Consolidation proposed</strong> — Fold Text Area into Input Field via a <code>multiline</code> / <code>lineLimit</code> prop to match SwiftUI <code>axis: .vertical</code> and Compose <code>singleLine=false</code>.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Family"
          }
        },
        {
          "body": "<strong>Boolean property uses Yes/No</strong> — <code>isFilled=yes/no</code> instead of <code>true/false</code>. Same anti-pattern Input Field already resolved.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Desktop resize-handle glyph</strong> — 12×12px raster PNG in the bottom-right has no native mobile equivalent; iOS/Android auto-grow without a user-facing handle.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4, C6 Open"
          }
        },
        {
          "body": "<strong>Duplicate token namespace</strong> — <code>main/text-area/color/*</code> values mirror <code>main/input-field/color/*</code> exactly; candidate for aliasing or deletion after consolidation.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — No CLI mappings registered yet. Blocked by consolidation decision and property renames.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
