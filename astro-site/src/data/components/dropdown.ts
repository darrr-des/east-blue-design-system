import type { ComponentData, DemoControlSection } from '../types';

/* Demo controls for the Style tab's single spec card. Three axes; the
   menu only renders when State=Expanded. */
const selectControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'pesosignvector', label: 'PesoSignVector' },
          { value: 'pesosigntext', label: 'PesoSignText' }
        ],
        defaultValue: 'default'
      },
      {
        label: 'State',
        prop: 'state',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'expanded', label: 'Expanded' },
          { value: 'error', label: 'Error' },
          { value: 'disabled', label: 'Disabled' }
        ],
        defaultValue: 'default'
      },
      {
        label: 'isFilled',
        prop: 'isfilled',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ],
        defaultValue: 'false'
      }
    ]
  }
];

export const dropdown: ComponentData = {
  "meta": {
    "slug": "dropdown",
    "name": "Select",
    "node": "7947:111865",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=7947-111865",
    "description": "A trigger field that opens a menu of options — composes Select Field for the trigger and Select Group for the menu.",
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
    "navGroup": "Select",
    "verdict": {
      "kind": "keep",
      "title": "Keep — a clean three-axis schema over two composed components",
      "text": "Select had already been rebuilt twice before this pass: v2.0 added <code>State=Disabled</code>, dropped a product-specific Mobile variant and moved to composing <a href=\"/components/select-field\">Select Field</a> plus <a href=\"/components/dropdown-item-group\">Select Group</a>, and v2.1 finished the schema by renaming <code>State=Active</code> to <code>Expanded</code>, aligning <code>isFilled</code> to <code>true</code>/<code>false</code>, and removing a redundant <code>isSelected</code>. Neither was ever written into the changelog. This pass records them, adds the third <code>Type</code> value the 2026 file introduced, and closes the naming and the placeholder copy. The absence of a pressed state remains correct — a form field signals interaction by expanding, not by tinting. Nothing is outstanding on the component itself; Code Connect stays open because the native library does not exist yet."
    }
  },
  "overview": {
    "inContextNote": "Sits in forms where a value is chosen from a fixed list rather than typed. The menu overlays the content below it, so the trigger's own box stays 46 tall in every state.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"sel-demo-preview\"><div class=\"eb-preview-sel eb-preview-sel--default\"><div class=\"eb-preview-sel__field\"><span class=\"eb-preview-sel__value\">Select Option</span><span class=\"eb-preview-sel__chevron\"></span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select id=\"sel-ctrl-type\" class=\"demo-panel-select\" onchange=\"_selUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"pesosignvector\">PesoSignVector</option><option value=\"pesosigntext\">PesoSignText</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"sel-ctrl-state\" class=\"demo-panel-select\" onchange=\"_selUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"expanded\">Expanded</option><option value=\"error\">Error</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select id=\"sel-ctrl-isfilled\" class=\"demo-panel-select\" onchange=\"_selUpdate()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Every fixed-list choice in a form is this control. The three Types cover the plain case and the two currency treatments the product needs."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns the schema and the assembly. It draws neither the trigger nor the menu — both come from their own components — which is what keeps its own surface area small."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>Type = Default | PesoSignVector | PesoSignText</code> after this pass, matching the same two currency values on <a href=\"/components/dropdown-item\">Select Item</a>. <code>State</code> and <code>isFilled</code> were settled in v2.1 and still hold."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Composes Select Field and Select Group as instances rather than redrawing them, so a change to either flows through. Its own menu content is whatever Select Group's slot holds."
      }
    ],
    "behavior": [
      {
        "state": "State=Default",
        "ios": "na",
        "android": "na",
        "property": "border #D7E0EF",
        "notes": "Collapsed. Chevron points down; the menu instance is present but hidden."
      },
      {
        "state": "State=Expanded",
        "ios": "na",
        "android": "na",
        "property": "border #005CE5",
        "notes": "The menu appears below the trigger and the chevron flips to <code>Chevron Up</code>. The trigger's own box stays 46 tall — the menu overlays what is beneath it."
      },
      {
        "state": "State=Error",
        "ios": "na",
        "android": "na",
        "property": "border #D61B2C",
        "notes": "Border only. The error message itself belongs to the form, not to this control."
      },
      {
        "state": "State=Disabled",
        "ios": "na",
        "android": "na",
        "property": "#F6F9FD fill",
        "notes": "The only state that changes the fill as well as the border."
      },
      {
        "state": "isFilled",
        "ios": "na",
        "android": "na",
        "property": "value vs placeholder",
        "notes": "Switches the trigger between the <code>#90A8D0</code> placeholder and a chosen value with the label floated above it."
      },
      {
        "state": "No pressed state",
        "ios": "na",
        "android": "na",
        "property": "by design",
        "notes": "A form field signals interaction by expanding, not by tinting. Confirmed correct in the previous assessment and unchanged."
      }
    ],
    "resolved": [
      {
        "headline": "Two undocumented rebuilds are now on the record.",
        "body": "The v2.0 rebuild added <code>State=Disabled</code>, dropped a product-specific Mobile variant and moved to composing Select Field and Select Group. v2.1 renamed <code>State=Active</code> to <code>Expanded</code>, aligned <code>isFilled</code> to <code>true</code>/<code>false</code> so it agreed with the field it wraps, and removed a redundant <code>isSelected</code>. Both were described in the component's verdict but neither reached the changelog, so the history stopped at the initial assessment. This version covers them.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "A third Type joined, deliberately.",
        "body": "The matrix was <code>Type</code> (2) × <code>State</code> (4) × <code>isFilled</code> (2) = 16. It is now 24, because currency needed two treatments rather than one: <code>PesoSignVector</code> is a custom SVG drawn to match the font, <code>PesoSignText</code> is Proxima's own ₱ glyph. They render almost identically at this size, which is exactly why the distinction has to be documented rather than left to the eye.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The multi-word values are joined.",
        "body": "<code>Peso</code> and <code>Text - Peso Sign</code> became <code>PesoSignVector</code> and <code>PesoSignText</code> — spaces and the hyphen separator gone, renamed for what they are rather than how they were first described, and matched to the same values on <a href=\"/components/dropdown-item\">Select Item</a> so the two components agree.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The placeholder copy agrees across states.",
        "body": "<code>State=Expanded, isFilled=false</code> read \"Value\" while <code>State=Default, isFilled=false</code> read \"Select Option\" — the same unfilled control saying two different things depending on whether it was open. Both now read \"Select Option\".",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The menu's leftovers were cleaned up in Select Group.",
        "body": "Every one of the 24 variants embeds a Select Group instance, so the five stale hidden rows and the vestigial <code>Dropdown Item - Last</code> name were shipping 24 times over. Both were fixed at the source — see <a href=\"/components/dropdown-item-group\">Select Group</a>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The menu instance rides along in all 24 variants.",
        "body": "It is present whether or not <code>State=Expanded</code>, hidden in the 20 collapsed ones. That is how a Figma variant carries an overlay it cannot conditionally instantiate, and it is why the trigger's box stays 46 tall while the menu overflows below it. Natively the menu is presented, not embedded.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No pressed state, still correct.",
        "body": "Form fields signal interaction by expanding rather than by tinting, so Pressed would be a state with nothing to show. Confirmed in the previous assessment and unchanged here.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native library does not exist yet, so there is nothing to map onto. The component side is ready: <code>Type</code>, <code>State</code> and <code>isFilled</code> all map one to one now the multi-word values are joined.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Select Field is out of scope, and that needs saying out loud.",
        "body": "The trigger is a <a href=\"/components/select-field\">Select Field</a> instance, and that component also backs text fields and other visually similar inputs — changing it to suit Select would move things that have nothing to do with Select. So it was deliberately excluded from this review. A developer reading this page will reasonably ask why the trigger is not documented alongside the menu, and the answer is blast radius rather than oversight. Its internals do carry lowercase and kebab-case layer names, and a <code>philippines</code> rectangle worth checking for a raster fill, whenever it is assessed on its own terms.",
        "tag": "Docs"
      },
      {
        "headline": "Document when to use PesoSignVector versus PesoSignText.",
        "body": "One is a custom SVG matched to the font, the other is Proxima's native ₱. At 16px they are nearly indistinguishable, so a designer picking from the variant menu has nothing to go on. A sentence on the component turns a coin-flip into a decision.",
        "tag": "Docs"
      },
      {
        "headline": "Specify how the menu is presented natively.",
        "body": "In Figma the menu is an embedded instance that overflows the trigger's box. On both platforms it is a presented surface — a popup or a sheet — with its own dismissal, its own scroll and its own placement rules when there is no room below. None of that is visible in the component, so it belongs in the native contract.",
        "tag": "Docs"
      },
      {
        "headline": "Specify the accessible combobox contract.",
        "body": "A Select needs a role, an expanded state, a link between the trigger and the list it controls, and the chosen value announced on change. The error state also needs its message associated with the field rather than merely rendered near it — the red border alone reaches no one using a screen reader.",
        "tag": "A11y"
      },
      {
        "headline": "Publish the token names once Dev Mode is read.",
        "body": "The border, fill and placeholder colours resolve to library variables, but the read-only tools return variable IDs rather than names, so the spec tables carry hex values only.",
        "tag": "Token"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"/components/dropdown-item-group\">Select Group</a> is the menu this opens and <a href=\"/components/dropdown-item\">Select Item</a> is the row inside it — both reassessed alongside this component. <a href=\"/components/select-field\">Select Field</a> is the trigger, out of scope.",
        "tag": "Family"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Structure",
    "specCards": [
      {
        "cardKey": "sel-spec-card-default",
        "demoKey": "default",
        "demoControls": selectControls,
        "title": "Select",
        "node": "7947:111865",
        "description": "Three axes, 24 variants. The trigger is a Select Field instance and the menu a Select Group instance — this component owns the schema, not the drawing.",
        "previewHtml": "<div id=\"sel-spec-default\"><div class=\"eb-preview-sel eb-preview-sel--default\"><div class=\"eb-preview-sel__field\"><span class=\"eb-preview-sel__value\">Select Option</span><span class=\"eb-preview-sel__chevron\"></span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Type", "value": "Default", "prop": "type",
                "variants": {
                  "type:pesosignvector": { "value": "PesoSignVector — custom ₱ SVG" },
                  "type:pesosigntext": { "value": "PesoSignText — Proxima's ₱ glyph" }
                }
              },
              { "key": "State", "value": "Default", "prop": "state",
                "variants": {
                  "state:expanded": { "value": "Expanded" },
                  "state:error": { "value": "Error" },
                  "state:disabled": { "value": "Disabled" }
                }
              },
              { "key": "isFilled", "value": "false", "prop": "isfilled",
                "variants": {
                  "isfilled:true": { "value": "true" }
                }
              },
              { "key": "Trigger", "value": "Select Field instance — out of scope" },
              { "key": "Menu", "value": "Select Group instance — hidden",
                "variants": {
                  "state:expanded": { "value": "Select Group instance — shown" }
                }
              },
              { "key": "Chevron", "value": "Chevron Down",
                "variants": {
                  "state:expanded": { "value": "Chevron Up" }
                }
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Border", "value": "#D7E0EF", "token": "library variable · name pending Dev Mode read", "swatch": true,
                "variants": {
                  "state:expanded": { "value": "#005CE5" },
                  "state:error": { "value": "#D61B2C" },
                  "state:disabled": { "value": "#E5EBF4" }
                }
              },
              { "key": "Fill", "value": "#FFFFFF", "token": "library variable · name pending Dev Mode read", "swatch": true,
                "variants": {
                  "state:disabled": { "value": "#F6F9FD" }
                }
              },
              { "key": "Placeholder", "value": "#90A8D0", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Floating label", "value": "#0A2757", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Menu card", "value": "#FFFFFF, hairline #E5EBF4", "token": "set by Select Group", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "366 — fills its container", "mono": true },
              { "key": "Trigger height", "value": "46 in every state", "mono": true },
              { "key": "Corner radius", "value": "6", "mono": true },
              { "key": "Menu width", "value": "366 — matches the trigger", "mono": true },
              { "key": "Menu height", "value": "312 at Compact density", "mono": true },
              { "key": "Menu placement", "value": "overlays below the trigger — outside its 46px box", "mono": true },
              { "key": "Chevron", "value": "32 × 32", "mono": true },
              { "key": "Side inset", "value": "12", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text styles", "value": "shared library styles · names pending Dev Mode read", "mono": true },
              { "key": "Placeholder", "value": "Proxima Soft SemiBold · 14 / 14 · +0.25", "mono": true },
              { "key": "Floating label", "value": "Proxima Soft SemiBold · 16 / 16 · +0.25", "mono": true },
              { "key": "Menu rows", "value": "see Select Item — Proxima Soft SemiBold 16 / 20", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-str\">\"Account\"</span><span class=\"syn-punc\">,</span>\n    selection<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>account<span class=\"syn-punc\">,</span>\n    placeholder<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Select Option\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>accounts<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>$0<span class=\"syn-punc\">.</span>name<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account\"</span><span class=\"syn-punc\">,</span>\n    selection <span class=\"syn-eq\">=</span> account<span class=\"syn-punc\">,</span>\n    onSelectionChange <span class=\"syn-eq\">= {</span> account <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">},</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Select Option\"</span>\n<span class=\"syn-punc\">) {</span>\n    accounts<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>it<span class=\"syn-punc\">.</span>name<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">}</span>"
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
      "description": "Figma properties mapped to the intended native parameters. State and isFilled are driven by the control natively rather than being set by the consumer.",
      "rows": [
        { "figma": "Type", "swift": "leading: EBSelectLeading", "compose": "leading: EBSelectLeading" },
        { "figma": "State=Expanded", "swift": "internal — driven by the control", "compose": "internal — driven by the control" },
        { "figma": "State=Error", "swift": "errorMessage: String?", "compose": "isError: Boolean + supportingText" },
        { "figma": "State=Disabled", "swift": ".disabled(true)", "compose": "enabled = false" },
        { "figma": "isFilled", "swift": "derived from selection != nil", "compose": "derived from selection != null" },
        { "figma": "Select Field instance", "swift": "the trigger — a separate component", "compose": "the trigger — a separate component" },
        { "figma": "Select Group instance", "swift": "presented, not embedded", "compose": "presented, not embedded" }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "A plain select",
        "swift": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Account\"</span><span class=\"syn-punc\">,</span> selection<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>account<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>accounts<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>$0<span class=\"syn-punc\">.</span>name<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account\"</span><span class=\"syn-punc\">,</span>\n    selection <span class=\"syn-eq\">=</span> account<span class=\"syn-punc\">,</span>\n    onSelectionChange <span class=\"syn-eq\">= {</span> account <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">) {</span> accounts<span class=\"syn-punc\">.</span>forEach <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>it<span class=\"syn-punc\">.</span>name<span class=\"syn-punc\">) } }</span>"
      },
      {
        "subheading": "With a currency leading element",
        "swift": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span> selection<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span> leading<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.pesoSignVector</span><span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">ForEach</span><span class=\"syn-punc\">(</span>presets<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">EBSelectItem</span><span class=\"syn-punc\">(</span>$0<span class=\"syn-punc\">.</span>label<span class=\"syn-punc\">) }</span>\n<span class=\"syn-punc\">}</span>",
        "compose": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Amount\"</span><span class=\"syn-punc\">,</span>\n    selection <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onSelectionChange <span class=\"syn-eq\">= {</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">},</span>\n    leading <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBSelectLeading</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">PesoSignVector</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-punc\">/* </span>items<span class=\"syn-punc\"> */ }</span>"
      },
      {
        "subheading": "In an error state",
        "swift": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-str\">\"Account\"</span><span class=\"syn-punc\">,</span>\n    selection<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>account<span class=\"syn-punc\">,</span>\n    errorMessage<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Choose an account to continue\"</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-punc\">/* </span>items<span class=\"syn-punc\"> */ }</span>",
        "compose": "<span class=\"syn-type\">EBSelect</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account\"</span><span class=\"syn-punc\">,</span>\n    selection <span class=\"syn-eq\">=</span> account<span class=\"syn-punc\">,</span>\n    onSelectionChange <span class=\"syn-eq\">= {</span> account <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">},</span>\n    isError <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">,</span>\n    supportingText <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Choose an account to continue\"</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-punc\">/* </span>items<span class=\"syn-punc\"> */ }</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Exposed as a combobox",
        "ios": "Button trait plus <code>.accessibilityValue</code> carrying the chosen option",
        "android": "<code>Modifier.semantics { role = Role.DropdownList }</code>"
      },
      {
        "requirement": "Expanded state is announced",
        "ios": "<code>.accessibilityAddTraits(.isExpanded)</code> while the menu is open",
        "android": "<code>expand</code> and <code>collapse</code> actions on the trigger"
      },
      {
        "requirement": "Error message is associated, not just adjacent",
        "ios": "Message folded into the field's accessibility value",
        "android": "<code>supportingText</code> tied to the field, <code>isError = true</code>"
      },
      {
        "requirement": "Selection announced on change",
        "ios": "The chosen option is announced when the menu closes",
        "android": "Same — the trigger's value updates and is announced"
      },
      {
        "requirement": "Menu dismissable without choosing",
        "ios": "Escape gesture closes and returns focus to the trigger",
        "android": "Back press closes and returns focus to the trigger"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Select when the value comes from a fixed, known list.",
        "dontText": "Don't use it for free text or for a list long enough to need searching."
      },
      {
        "doText": "Leave room below the trigger for the menu to open.",
        "dontText": "Don't assume the menu fits inside the trigger's 46px box — it overlays what is beneath it."
      },
      {
        "doText": "Pair Error with a message the form owns.",
        "dontText": "Don't rely on the red border alone — it reaches nobody using a screen reader."
      },
      {
        "doText": "Pick the currency Type deliberately and document which one.",
        "dontText": "Don't mix PesoSignVector and PesoSignText across one form; they differ subtly enough to look like a mistake."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Two composed instances and nothing drawn locally. The placeholder copy now agrees across states, and the menu's own leftovers were cleaned up at the source."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Type = Default | PesoSignVector | PesoSignText</code>, matching Select Item. <code>State</code> and <code>isFilled</code> were settled in v2.1 and still hold."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Border, fill and text colours resolve to library variables. Names need a Dev Mode read before they can be printed."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A trigger plus a presented menu. The embedded-instance-in-every-variant arrangement is a Figma necessity, documented rather than mistaken for the native shape."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default, Expanded, Error and Disabled across both fill states. The absence of Pressed is correct for a form field."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "No artwork of its own — the chevron and currency marks belong to the trigger, and the rows to Select Item."
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
        "notes": "<code>Type</code>, <code>State</code> and <code>isFilled</code> map one to one now the multi-word values are joined."
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
      "total": 24,
      "description": "3 Type × 4 State × 2 isFilled = 24, up from 16 when currency gained a second treatment. No correlated axes — every combination is valid.",
      "columns": ["State", "Border", "Fill", "Chevron", "Menu"],
      "rows": [
        { "cells": ["Default", "#D7E0EF", "#FFFFFF", "Down", "hidden"] },
        { "cells": ["Expanded", "#005CE5", "#FFFFFF", "Up", "shown"] },
        { "cells": ["Error", "#D61B2C", "#FFFFFF", "Down", "hidden"] },
        { "cells": ["Disabled", "#E5EBF4", "#F6F9FD", "Down", "hidden"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Two prior rebuilds recorded + reassessment on the 2026 Working File · node 7947:111865",
      "rows": [
        {
          "body": "<strong>Covers three changes at once.</strong> The v2.0 rebuild and the v2.1 schema pass were both described in the component's verdict but neither reached the changelog, so the history stopped at the initial assessment. This version records them alongside the 2026 reassessment.",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        },
        {
          "body": "<strong>v2.0</strong> — <code>State=Disabled</code> added, a product-specific Mobile variant dropped, and the component moved to composing <a href=\"/components/select-field\">Select Field</a> and <a href=\"/components/dropdown-item-group\">Select Group</a> rather than drawing them.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>v2.1</strong> — <code>State=Active</code> renamed <code>Expanded</code>, <code>isFilled</code> aligned to <code>true</code>/<code>false</code> so it agreed with the field it wraps, and a redundant <code>isSelected</code> removed.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>A third <code>Type</code> value added</strong> — currency needed two treatments, a custom SVG matched to the font and Proxima's own ₱ glyph. The matrix went from 16 variants to 24.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<code>Peso</code> and <code>Text - Peso Sign</code> renamed to <code>PesoSignVector</code> and <code>PesoSignText</code>, matching the same values on <a href=\"/components/dropdown-item\">Select Item</a>.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>Placeholder copy reconciled</strong> — the expanded unfilled trigger read \"Value\" while the collapsed one read \"Select Option\". Both now read \"Select Option\".",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "Node moved from <code>25783:1148</code> (Sticker Sheets v2) to <code>7947:111865</code> (2026 Working File), and <code>navGroup</code> changed from Dropdown to Select to match the component's name.",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18482:31910",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 8 variants documented across variant (Text/Error/Amount/Mobile) × type (Collapsed/Expanded). Generic dropdown with trigger field, chevron affordance, and overlay item list.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>DropdownItem selected uses yes/no</strong> — <code>selected=yes/no</code> instead of <code>true/false</code>. Incompatible with Swift <code>Bool</code> and Kotlin <code>Boolean</code> for Code Connect mapping.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Missing disabled and pressed states</strong> — Only Collapsed, Expanded, and Error states defined. No disabled state for non-interactive forms, no pressed state for touch feedback.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Amount variant Peso Sign uses BOOLEAN_OPERATION</strong> — <code>shape_full</code> is a BOOLEAN_OPERATION, not a clean vector path. May render inconsistently on native platforms.\n          <span class=\"tag-open\">Open</span>",
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
