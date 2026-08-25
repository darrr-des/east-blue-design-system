import type { ComponentData, DemoControlSection } from '../types';

/* Demo controls for the Style tab's single spec card. State and
   hasTooltip are the component's two axes; Value is not a property at
   all — it is the width of DraggableFill, which is why the slot exists. */
const sliderControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'disabled', label: 'Disabled' },
          { value: 'pressed', label: 'Pressed' }
        ],
        defaultValue: 'default'
      },
      {
        label: 'hasTooltip',
        prop: 'hastooltip',
        options: [
          { value: 'true', label: 'true' },
          { value: 'false', label: 'false' }
        ],
        defaultValue: 'true'
      }
    ]
  }
];

export const slider: ComponentData = {
  "meta": {
    "slug": "slider",
    "name": "Slider",
    "node": "6802:105580",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=6802-105580",
    "description": "A horizontal slider — a filled track, a knob, and an optional percentage tooltip that rides above it.",
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
    "verdict": {
      "kind": "keep",
      "title": "Keep — the continuous primitive the first assessment asked for",
      "text": "The May assessment found eleven discrete variants modelling a continuous value at 10% steps, no Pressed or Disabled treatment, and an always-on tooltip with no way to switch it off. All three are resolved. The value is no longer a variant at all: <code>DraggableFill</code> sits inside <code>⤷ Track</code>, and the slot is what makes it resizable on an instance, so a designer drags it to the value rather than picking the nearest tenth. What survives as a variant is <code>State</code> and <code>hasTooltip</code>. Several rounds of naming cleanup landed on top — including a layer that was literally named \"Adjust this bsed on the length needed\". The Needs Refinement badge is about state polish, not structure: the knob is unchanged in Disabled, and focus is not specified."
    }
  },
  "overview": {
    "inContextNote": "The preview is draggable — grab the knob or press anywhere on the track, the same continuous model the slot gives you in Figma. Used where a value is approximate rather than typed — amount estimation, settings, filters. Contexts are illustrative; final screens will reference actual GCash patterns.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"sldr-demo-preview\"><div class=\"eb-preview-sldr eb-preview-sldr--default\" data-sldr=\"demo\"><div class=\"eb-preview-sldr__track\"><div class=\"eb-preview-sldr__fill\"><div class=\"eb-preview-sldr__tooltip\"><span class=\"eb-preview-sldr__pct\">10%</span></div><div class=\"eb-preview-sldr__knob\"></div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"sldr-ctrl-state\" class=\"demo-panel-select\" onchange=\"_sldrUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"disabled\">Disabled</option><option value=\"pressed\">Pressed</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasTooltip</span><select id=\"sldr-ctrl-hastooltip\" class=\"demo-panel-select\" onchange=\"_sldrUpdate()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One control rather than a value enumerated at ten-point steps. Any surface needing an approximate value uses it, at whatever precision the product wants."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries the track, the fill, the knob and the tooltip, with colours bound to library variables. The only thing it does not own is its width, which fills the container."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>⤷ Track</code>, <code>DraggableFill</code>, <code>KnobContainer</code>, <code>Knob</code>, <code>Tooltip</code>, <code>Label</code>, <code>PointerDecorator</code>, <code>Pointer</code> and <code>#percentage</code> all follow the conventions settled across Modal, Voucher and List Item, and <code>hasTooltip</code> uses lowercase boolean values."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "<code>⤷ Track</code> is what makes <code>DraggableFill</code> resizable on an instance — without the slot the fill would be locked at its authored width, and the value would have to go back to being a variant."
      }
    ],
    "behavior": [
      {
        "state": "State=Default",
        "ios": "na",
        "android": "na",
        "property": "365 × 26",
        "notes": "Fill <code>#005CE5</code> on a <code>#E5EBF4</code> track. The default the component ships with."
      },
      {
        "state": "State=Pressed",
        "ios": "na",
        "android": "na",
        "property": "365 × 26",
        "notes": "Fill darkens to <code>#2340A9</code>, the track to <code>#D7E0EF</code>, and the knob's ring to <code>#ADBDDC</code> — the only state where the knob itself responds."
      },
      {
        "state": "State=Disabled",
        "ios": "na",
        "android": "na",
        "property": "365 × 26",
        "notes": "Fill and tooltip both drop to <code>#C2CFE5</code>, with the tooltip switching to dark text so the value stays readable."
      },
      {
        "state": "hasTooltip=true",
        "ios": "na",
        "android": "na",
        "property": "default",
        "notes": "Shows the bubble above the knob. It sits outside the component's 26px box by design."
      },
      {
        "state": "hasTooltip=false",
        "ios": "na",
        "android": "na",
        "property": "track only",
        "notes": "Track, fill and knob only. The knob is still present — only the bubble is removed."
      },
      {
        "state": "Value",
        "ios": "na",
        "android": "na",
        "property": "fill width",
        "notes": "Not a property. The designer resizes <code>DraggableFill</code> inside the slot; the knob and tooltip ride its right edge."
      }
    ],
    "resolved": [
      {
        "headline": "Eleven variants became a continuous value.",
        "body": "The old build enumerated the value at 10% steps — eleven variants for something that is not discrete. The value is now the width of <code>DraggableFill</code>, resized directly on the instance, so any value is reachable rather than the nearest tenth.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The slot is what makes that work.",
        "body": "<code>DraggableFill</code> sits inside <code>⤷ Track</code> because a nested frame's size is not editable on an instance unless it is exposed. Without the slot the fill would be locked at its authored width and the value would have to go back to being a variant — so the slot is load-bearing rather than indirection.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Pressed and Disabled states exist now.",
        "body": "Neither was specified before. Pressed darkens the fill to <code>#2340A9</code>, the track to <code>#D7E0EF</code> and the knob ring to <code>#ADBDDC</code>; Disabled drops the fill and tooltip to <code>#C2CFE5</code>.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "The tooltip can be switched off.",
        "body": "It used to be always on with no way to hide it. <code>hasTooltip</code> now controls it, and the values are lowercase <code>true</code> / <code>false</code> to match every other boolean in the system.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "A layer was named after its own instructions.",
        "body": "The fill was called <code>Adjust this bsed on the length needed</code> — an instruction to the designer, typo included, repeated across every variant. It is now <code>DraggableFill</code>, which keeps the authoring hint without shipping a sentence into the layer tree.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The duplicate track is gone.",
        "body": "A <code>BG</code> rectangle sat behind a separate <code>Slider Slot</code>, both 365 × 10 and both full width. The slot now carries the track's own fill and radius and is named <code>⤷ Track</code>, which removes a layer and leaves one thing responsible for the rail.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The tooltip's internals were renamed.",
        "body": "<code>label</code>, <code>pointer-decorator</code> and <code>pointer</code> were lowercase and kebab-cased, and the knob itself was still Figma's default <code>Ellipse</code>. They are now <code>Label</code>, <code>PointerDecorator</code>, <code>Pointer</code> and <code>Knob</code>, inside <code>KnobContainer</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The disabled tooltip went from unreadable to 9.27:1.",
        "body": "It was white on <code>#C2CFE5</code> — 1.57:1, effectively invisible. An intermediate fix used the pressed navy, which passed but made the disabled state louder than the enabled one and identical to Pressed. The answer landed on keeping the bubble at <code>#C2CFE5</code> and switching the text to <code>#0A2757</code>: 9.27:1, and the bubble still reads as muted because it matches the disabled fill. WCAG exempts inactive controls from contrast, so this was optional — but the tooltip displays a value, and an unreadable value is worse than no value.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "The tooltip overflowing the component is intentional.",
        "body": "Both tooltip variants are 26 tall while the bubble sits 23px above the top edge, so nothing reserves space for it. Confirmed as intended: consumers leave clearance above the slider rather than the component growing to contain it.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "hasTooltip stays a variant, and that is a Figma limit rather than a choice.",
        "body": "A boolean component property cannot target a layer nested inside a slot, and <code>Tooltip</code> lives inside <code>DraggableFill</code> inside <code>⤷ Track</code>. It sits there so it hugs the fill's right edge as the fill resizes — moving it out would break that. So the axis stays and the set holds six variants rather than three. Recorded here as a deliberate divergence between the Figma model and the native API, where the tooltip will simply be an optional parameter.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The slider fills its container.",
        "body": "The authored 365 is a fill width, not a fixed one, so the control stretches to whatever the screen gives it. That matters more here than on most components — a slider at a fixed width would leave the value's position meaningless on any other screen size.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Give the disabled knob a treatment.",
        "body": "It is <code>#FFFFFF</code> with an <code>#E5EBF4</code> ring in Default, Disabled and Pressed alike — except Pressed, which earned <code>#ADBDDC</code>. So in the disabled row the knob is the one element still looking active, sitting on a muted fill under a muted tooltip. Matching the pressed ring, or dropping the knob's fill to the track colour, would finish the state.",
        "tag": "State"
      },
      {
        "headline": "Confirm focus is out of scope.",
        "body": "The May assessment asked for a Focused state alongside Pressed and Disabled, and it is still absent. The precedent set on Date Picker was that focus does not apply to a mobile-only system and pressed carries the interaction — worth confirming that holds here so the gap is recorded as a decision rather than an omission.",
        "tag": "State"
      },
      {
        "headline": "Make the sample value match the fill.",
        "body": "<code>#percentage</code> reads \"10%\" while <code>DraggableFill</code> is 62 of 365, about 17%. Harmless in isolation, but a component that ships showing one number at a different position teaches the wrong relationship to whoever copies it.",
        "tag": "Docs"
      },
      {
        "headline": "Range, step, min and max belong to the native API.",
        "body": "The May assessment asked for them as axes. They have no Figma representation — a designer resizes the fill and that is the whole model — so they should be specified in the native contract instead of being added to the component. Documented in the property mapping.",
        "tag": "Docs"
      },
      {
        "headline": "Expect a rename at the Code Connect boundary.",
        "body": "<code>DraggableFill</code> was kept deliberately because it tells the team the frame is resizable. Both native APIs call this the active track — Compose has <code>activeTrackColor</code>, SwiftUI fills the portion below the value — so the mapping is <code>DraggableFill</code> to active track rather than a one-to-one name. Noted so it is not read as a mismatch later.",
        "tag": "Docs"
      },
      {
        "headline": "Specify the accessible slider contract.",
        "body": "A slider needs a role, a current value, a range and increment actions — none of which are visible in a Figma frame. Screen reader users adjust it with gestures rather than dragging, so the value has to be announced on change and the control has to accept increment and decrement without a drag.",
        "tag": "A11y"
      },
      {
        "headline": "Publish the token names once Dev Mode is read.",
        "body": "Fills across the component resolve to library variables — verified on <code>#percentage</code> — but the read-only tools return variable IDs rather than names, so the spec tables carry hex values only.",
        "tag": "Token"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Structure",
    "specCards": [
      {
        "cardKey": "sldr-spec-card-default",
        "demoKey": "default",
        "demoControls": sliderControls,
        "title": "Slider",
        "node": "6802:105580",
        "description": "Six variants across two axes. The value is not one of them — it is the width of DraggableFill, which the slot makes editable on an instance.",
        "previewHtml": "<div id=\"sldr-spec-default\"><div class=\"eb-preview-sldr eb-preview-sldr--default\" data-sldr=\"spec\"><div class=\"eb-preview-sldr__track\"><div class=\"eb-preview-sldr__fill\"><div class=\"eb-preview-sldr__tooltip\"><span class=\"eb-preview-sldr__pct\">10%</span></div><div class=\"eb-preview-sldr__knob\"></div></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "State", "value": "Default", "prop": "state",
                "variants": {
                  "state:disabled": { "value": "Disabled" },
                  "state:pressed": { "value": "Pressed" }
                }
              },
              { "key": "hasTooltip", "value": "true", "prop": "hastooltip",
                "variants": {
                  "hastooltip:false": { "value": "false" }
                }
              },
              { "key": "⤷ Track", "value": "slot — also the unfilled rail" },
              { "key": "DraggableFill", "value": "resized on the instance — drag the preview" },
              { "key": "#percentage", "value": "10%" },
              { "key": "Node", "value": "6764:106099", "mono": true,
                "variants": {
                  "state:disabled": { "value": "6802:105593" },
                  "state:pressed": { "value": "7085:108663" },
                  "hastooltip:false": { "value": "6802:105581" },
                  "state:disabled|hastooltip:false": { "value": "7085:108656" },
                  "state:pressed|hastooltip:false": { "value": "7085:108670" }
                }
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "⤷ Track", "value": "#E5EBF4", "token": "library variable · name pending Dev Mode read", "swatch": true,
                "variants": {
                  "state:pressed": { "value": "#D7E0EF" }
                }
              },
              { "key": "DraggableFill", "value": "#005CE5", "token": "library variable · name pending Dev Mode read", "swatch": true,
                "variants": {
                  "state:disabled": { "value": "#C2CFE5" },
                  "state:pressed": { "value": "#2340A9" }
                }
              },
              { "key": "Knob", "value": "#FFFFFF", "token": "library variable · name pending Dev Mode read", "swatch": true },
              { "key": "Knob ring", "value": "#E5EBF4", "token": "library variable · name pending Dev Mode read", "swatch": true,
                "variants": {
                  "state:pressed": { "value": "#ADBDDC" }
                }
              },
              { "key": "Tooltip bubble", "value": "#005CE5", "token": "library variable · name pending Dev Mode read", "swatch": true,
                "variants": {
                  "state:disabled": { "value": "#C2CFE5" },
                  "state:pressed": { "value": "#2340A9" }
                }
              },
              { "key": "#percentage", "value": "#FFFFFF — 5.73:1", "token": "library variable · name pending Dev Mode read", "swatch": true,
                "variants": {
                  "state:disabled": { "value": "#0A2757 — 9.27:1" },
                  "state:pressed": { "value": "#FFFFFF — 8.83:1" }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "365 — fills its container", "mono": true },
              { "key": "Height", "value": "26", "mono": true },
              { "key": "Track height", "value": "10", "mono": true },
              { "key": "Track radius", "value": "99", "mono": true },
              { "key": "DraggableFill width", "value": "0–365 — drag the preview to set it", "mono": true },
              { "key": "Figma sample", "value": "62 of 365 (≈17%) while #percentage reads 10%", "mono": true },
              { "key": "Knob", "value": "16 × 16 in an 18 × 18 container", "mono": true },
              { "key": "Knob position", "value": "right-aligned to the fill's edge", "mono": true },
              { "key": "Tooltip", "value": "34 × 26, centred on the knob", "mono": true,
                "variants": {
                  "hastooltip:false": { "value": "hidden" }
                }
              },
              { "key": "Tooltip offset", "value": "23 above the component — overflows by design", "mono": true },
              { "key": "Bubble radius", "value": "4", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Applies to", "value": "#percentage only — everything else is a shape", "mono": true },
              { "key": "Text style", "value": "shared library style · name pending Dev Mode read", "mono": true },
              { "key": "#percentage", "value": "Proxima Soft Bold · 14 / 14 · +0.25", "mono": true },
              { "key": "Alignment", "value": "centred in the bubble", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">in</span><span class=\"syn-punc\">:</span> 0<span class=\"syn-punc\">...</span>100<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebShowsTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">= {</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">},</span>\n    valueRange <span class=\"syn-eq\">=</span> 0f<span class=\"syn-punc\">..</span>100f<span class=\"syn-punc\">,</span>\n    showTooltip <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
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
      "description": "Figma properties mapped to the intended native parameters. Range, step and bounds have no Figma representation — the designer resizes the fill — so they are specified here rather than in the component.",
      "rows": [
        {
          "figma": "DraggableFill width",
          "swift": "value: Binding<Double>",
          "compose": "value: Float + onValueChange"
        },
        {
          "figma": "State",
          "swift": "driven by interaction · .disabled(true)",
          "compose": "driven by interaction · enabled = false"
        },
        {
          "figma": "hasTooltip",
          "swift": ".ebShowsTooltip(Bool)",
          "compose": "showTooltip: Boolean"
        },
        {
          "figma": "#percentage",
          "swift": "tooltipFormat: (Double) -> String",
          "compose": "tooltipFormat: (Float) -> String"
        },
        {
          "figma": "— no Figma equivalent",
          "swift": "in: ClosedRange<Double>, step: Double",
          "compose": "valueRange: ClosedFloatingPointRange<Float>, steps: Int"
        },
        {
          "figma": "⤷ Track / DraggableFill",
          "swift": "trackColor / activeTrackColor",
          "compose": "SliderColors.inactiveTrackColor / activeTrackColor"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "With the tooltip (default)",
        "swift": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">in</span><span class=\"syn-punc\">:</span> 0<span class=\"syn-punc\">...</span>100<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebShowsTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">padding</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.top</span><span class=\"syn-punc\">,</span> 26<span class=\"syn-punc\">)</span>  <span class=\"syn-cm\">// clearance for the bubble</span>",
        "compose": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">= {</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">},</span>\n    showTooltip <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">,</span>\n    modifier <span class=\"syn-eq\">=</span> <span class=\"syn-type\">Modifier</span><span class=\"syn-punc\">.</span><span class=\"syn-fn\">padding</span><span class=\"syn-punc\">(</span>top <span class=\"syn-eq\">=</span> 26<span class=\"syn-punc\">.</span>dp<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Without the tooltip",
        "swift": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>volume<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">in</span><span class=\"syn-punc\">:</span> 0<span class=\"syn-punc\">...</span>1<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebShowsTooltip</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">false</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> volume<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">= {</span> volume <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">},</span>\n    showTooltip <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Stepped and disabled",
        "swift": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>tenor<span class=\"syn-punc\">,</span> <span class=\"syn-kw\">in</span><span class=\"syn-punc\">:</span> 3<span class=\"syn-punc\">...</span>24<span class=\"syn-punc\">,</span> step<span class=\"syn-punc\">:</span> 3<span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">disabled</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> tenor<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">= {</span> tenor <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">},</span>\n    valueRange <span class=\"syn-eq\">=</span> 3f<span class=\"syn-punc\">..</span>24f<span class=\"syn-punc\">,</span>\n    steps <span class=\"syn-eq\">=</span> 6<span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Exposed as an adjustable control",
        "ios": "<code>.accessibilityValue</code> plus <code>.accessibilityAdjustableAction</code>",
        "android": "<code>Modifier.semantics { setProgress { … } }</code> with <code>ProgressBarRangeInfo</code>"
      },
      {
        "requirement": "Adjustable without dragging",
        "ios": "Swipe up and down increments and decrements",
        "android": "Accessibility actions for increase and decrease"
      },
      {
        "requirement": "Value announced on change",
        "ios": "Announce the formatted value, not the raw number",
        "android": "Same — the tooltip's format is the announced string"
      },
      {
        "requirement": "Tooltip is not a separate element",
        "ios": "Hidden from the tree; its value lives on the slider",
        "android": "<code>contentDescription = null</code>; value carried by the slider"
      },
      {
        "requirement": "Knob meets the touch minimum",
        "ios": "16 × 16 needs a 44 × 44 hit area around it",
        "android": "16 × 16 needs 48dp"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use a slider where the value is approximate — estimation, filtering, settings.",
        "dontText": "Don't use one where an exact figure matters; a field is faster and more accurate."
      },
      {
        "doText": "Leave 26px of clearance above when the tooltip is on.",
        "dontText": "Don't place it directly under other content — the bubble sits outside the component's box."
      },
      {
        "doText": "Let the slider fill the width it is given.",
        "dontText": "Don't fix its width — the value's position stops meaning anything at another screen size."
      },
      {
        "doText": "Switch the tooltip off when a nearby label already shows the value.",
        "dontText": "Don't show the same number twice."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "The instruction-as-layer-name is gone, the duplicate track rectangle removed, and the tooltip internals plus the knob renamed. The tooltip overflowing the frame is confirmed intentional."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>State</code> and <code>hasTooltip</code> with lowercase boolean values. The tooltip axis stays a variant because a boolean cannot reach a layer inside a slot — a Figma limit, documented rather than worked around."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Fills resolve to library variables — verified on the component's own nodes. All three tooltip states now clear 4.5:1, the disabled one at 9.27:1."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A continuous value, a track, a thumb and an optional bubble map directly onto both platforms' slider primitives. Range and step have no Figma form and are specified in the property mapping."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Pressed and Disabled both exist now. The knob is unchanged in Disabled while Pressed gives it a ring, and focus is still unspecified — both carried as recommendations."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "No imported artwork — the knob is a vector ellipse and the tooltip pointer a vector frame."
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
        "notes": "<code>State</code>, <code>hasTooltip</code> and <code>#percentage</code> map cleanly. <code>DraggableFill</code> maps to the active track rather than one-to-one, which is deliberate."
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
      "total": 6,
      "description": "3 State values × 2 hasTooltip values = 6 variants. The value is not an axis — it is the width of DraggableFill, resized through the slot.",
      "columns": ["State", "hasTooltip", "Track", "Fill", "Node"],
      "rows": [
        { "cells": ["Default", "true", "#E5EBF4", "#005CE5", "6764:106099"] },
        { "cells": ["Default", "false", "#E5EBF4", "#005CE5", "6802:105581"] },
        { "cells": ["Disabled", "true", "#E5EBF4", "#C2CFE5", "6802:105593"] },
        { "cells": ["Disabled", "false", "#E5EBF4", "#C2CFE5", "7085:108656"] },
        { "cells": ["Pressed", "true", "#D7E0EF", "#2340A9", "7085:108663"] },
        { "cells": ["Pressed", "false", "#D7E0EF", "#2340A9", "7085:108670"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt on the 2026 Working File · node 6802:105580",
      "rows": [
        {
          "body": "<strong>Eleven variants collapsed into a continuous value</strong> — the value is now the width of <code>DraggableFill</code>, resized on the instance through <code>⤷ Track</code>, which is what the first assessment asked for.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>Pressed and Disabled states added.</strong> Pressed darkens the fill, the track and the knob ring; Disabled mutes the fill and tooltip.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<code>hasTooltip</code> added so the bubble can be switched off, with lowercase <code>true</code> / <code>false</code> values.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>A layer named <code>Adjust this bsed on the length needed</code></strong> — an instruction with a typo, repeated across all six variants — renamed to <code>DraggableFill</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "The duplicate <code>BG</code> rectangle removed; the slot now carries the rail's own fill and radius as <code>⤷ Track</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<code>label</code>, <code>pointer-decorator</code> and <code>pointer</code> renamed to PascalCase, and the knob's <code>Ellipse</code> renamed to <code>Knob</code> inside <code>KnobContainer</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>Disabled tooltip contrast raised from 1.57:1 to 9.27:1</strong> by keeping the muted bubble and switching the text to <code>#0A2757</code>, rather than saturating the bubble and making the disabled state louder than the enabled one.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<code>hasTooltip</code> kept as a variant axis — a boolean property cannot target a layer inside a slot, and the tooltip sits there so it tracks the fill's edge. Recorded as a Figma-versus-code divergence.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "Node moved from <code>3235:60722</code> (Sticker Sheets v2) to <code>6802:105580</code> (2026 Working File).",
          "delta": { "kind": "resolved", "label": "Rebuilt" }
        }
      ]
    },
    {
      version: '1.0.0',
      date: '2026-05-19',
      kind: 'major',
      kindLabel: 'Major',
      header: 'Initial Assessment · node 3235:60722',
      rows: [
        { body: '<strong>Component assessed</strong> — 11 variants at 10% increments. Used in settings / amount-approximation flows. <span class="tag-fixed">Documented</span>', delta: { kind: 'resolved', label: 'Initial' } },
        { body: '<strong>Verdict: Restructure</strong> — Promote to a single <code>EBSlider</code> primitive with <code>value: Double</code> + <code>range</code> + <code>step</code>. Add Pressed / Focused / Disabled state coverage. <span class="tag-open tag-c1 tag-c4 tag-c5">Open</span>', delta: { kind: 'open', label: 'Family' } },
        { body: '<strong>C1 — 11 discrete variants</strong> — Continuous value modeled as a 10%-stepped enum. Replace with a continuous primitive. <span class="tag-open tag-c1">Open</span>', delta: { kind: 'open', label: 'C1' } },
        { body: '<strong>C4 — Tooltip is baked</strong> — Always-visible, percentage-only. No way to swap to currency / custom format. <span class="tag-open tag-c4">Open</span>', delta: { kind: 'open', label: 'C4' } },
        { body: '<strong>C5 — Missing states</strong> — No Pressed (drag), Focused, or Disabled treatment. Tooltip-visibility axis also missing. <span class="tag-open tag-c5">Open</span>', delta: { kind: 'open', label: 'C5' } },
        { body: '<strong>C7 — Code Connect</strong> — Not registered. Blocked on restructure. <span class="tag-open tag-c7">Open</span>', delta: { kind: 'open', label: 'C7' } },
      ],
    },
  ],
};
