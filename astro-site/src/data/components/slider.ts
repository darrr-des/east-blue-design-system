import type { ComponentData, DemoControlSection } from '../types';
import { buildColorsTable } from './_helpers';

/* Demo controls for the Style tab's single spec card. State and
   hasTooltip are the component's two axes; Value is not a property at
   all — it is the width of DraggableFill, which is why the slot exists. */
const sliderControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'hasTooltip',
        prop: 'hastooltip',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
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
        "kind": "ready",
        "label": "Ready"
      }
    ],
    "verdict": {
      "kind": "keep",
      "title": "Keep — the continuous primitive the first assessment asked for",
      "text": "The May assessment found eleven discrete variants modelling a continuous value at 10% steps, no Pressed or Disabled treatment, and an always-on tooltip with no way to switch it off. All three are resolved. The value is no longer a variant at all: <code>DraggableFill</code> sits inside <code>⤷ Track</code>, and the slot is what makes it resizable on an instance, so a designer drags it to the value rather than picking the nearest tenth. Several rounds of naming cleanup landed on top — including a layer that was literally named \"Adjust this bsed on the length needed\" — and <code>hasTooltip</code> was narrowed so it gates the bubble alone rather than taking the knob with it. The Needs Refinement badge is about state polish, not structure: the knob is unchanged in Disabled, and focus is not specified."
    }
  },
  "overview": {
    "inContextNote": "The preview is draggable — grab the knob or press anywhere on the track, the same continuous model the slot gives you in Figma. Used where a value is approximate rather than typed — amount estimation, settings, filters. Contexts are illustrative; final screens will reference actual GCash patterns.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"sldr-demo-preview\"><div class=\"eb-preview-sldr eb-preview-sldr--default\" data-sldr=\"demo\"><div class=\"eb-preview-sldr__track\"><div class=\"eb-preview-sldr__fill\"><div class=\"eb-preview-sldr__tooltip\"><span class=\"eb-preview-sldr__pct\">10%</span></div><div class=\"eb-preview-sldr__knob\"></div></div></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"sldr-ctrl-state\" class=\"demo-panel-select\" onchange=\"_sldrUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"disabled\">Disabled</option><option value=\"pressed\">Pressed</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasTooltip</span><select id=\"sldr-ctrl-hastooltip\" class=\"demo-panel-select\" onchange=\"_sldrUpdate()\"><option value=\"false\">false</option><option value=\"true\" selected=\"\">true</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Value</span><span class=\"demo-panel-note\">drag the knob</span></div></div></div></div>",
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
        "note": "<code>⤷ Track</code>, <code>DraggableFill</code>, <code>KnobContainer</code>, <code>Knob</code>, <code>Tooltip</code>, <code>Label</code>, <code>PointerDecorator</code>, <code>Pointer</code> and <code>#percentage</code> all follow the conventions settled across Modal, Voucher and List Item, <code>hasTooltip</code> uses lowercase boolean values, and the axis now gates the bubble alone."
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
        "property": "no bubble",
        "notes": "Hides the bubble only. The knob stays, so the control still reads as draggable — it used to disappear with the tooltip, which left a handle-less bar."
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
        "headline": "hasTooltip gates the bubble and nothing else.",
        "body": "It used to remove the knob as well — <code>DraggableFill</code> had no children at all in the <code>false</code> variants, so what was left was a filled bar with no handle. That read as a progress indicator rather than a slider, overlapping <a href=\"/components/progress-bar\">Progress Bar</a>, and the property name gave no hint that the handle went with it. <code>KnobContainer</code> is now present in all six variants, with the pressed ring carried through, so the axis does exactly what it says.",
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
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — the native library does not exist yet, so there is nothing to map onto. The component side is ready: <code>State</code>, <code>hasTooltip</code> and <code>#percentage</code> all map one to one, and <code>DraggableFill</code> maps to the active track.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Give the disabled knob a treatment.",
        "body": "The knob is identical in Default and Disabled — same <code>bg/color-bg-main</code> fill, same <code>border/color-border-weak</code> ring — while the track and the tooltip both shift. Confirmed deliberate: those two carry the signal, and the thumb is left alone on purpose. Worth revisiting only if the slider ever appears without its tooltip in a disabled state, since the track alone is a subtler cue than the pair.",
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
    "appliedRecommendations": [
      {
        "headline": "Confirm focus is out of scope.",
        "body": "v2.0.1: Applied — confirmed out of scope. The component is mobile only, so there is no focus state to specify and none is missing. Recorded here rather than left as an open question, because \"no focus variant\" reads as an omission until someone says otherwise.",
        "tag": "State"
      }
    ]
  },
  "style": {
    "heading": "Structure",
    "colorsTables": [
      buildColorsTable({
        title: "Colors by State",
        description: "Every colour the component paints, and all of it is the component’s own — the <code>⤷ Track</code> slot exists so the fill can be dragged in Figma, not to hand its contents to another component. Only the knob holds still across the three states; the track, the fill, the ring, the bubble and its label all move. One naming oddity worth knowing rather than fixing here: Pressed paints <code>bg/color-bg-primary-hover</code>, a hover token doing a pressed job on a surface that has no hover.",
        columns: ["Default", "Disabled", "Pressed"],
        rows: [
          { role: "Track", token: "border/color-border-weak · -weak · border/color-border", values: ["#E5EBF4","#E5EBF4","#D7E0EF"] },
          { role: "DraggableFill", token: "bg/color-bg-primary · -disabled · -primary-hover", values: ["#005CE5","#C2CFE5","#2340A9"] },
          { role: "Knob", token: "bg/color-bg-main", values: ["#FFFFFF","#FFFFFF","#FFFFFF"] },
          { role: "Knob ring", token: "border/color-border-weak · -weak · border/color-border-strong", values: ["#E5EBF4","#E5EBF4","#ADBDDC"] },
          { role: "Tooltip", token: "bg/color-bg-primary · -disabled · -primary-hover", values: ["#005CE5","#C2CFE5","#2340A9"] },
          { role: "#percentage", token: "text/color-text-inverse · text/color-text · -inverse", values: ["#FFFFFF","#0A2757","#FFFFFF"] }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "sldr-spec-card-default",
        "demoKey": "default",
        "demoControls": sliderControls,
        "title": "Default",
        "node": "6764:106099",
        "description": "",
        "previewHtml": "<div id=\"sldr-spec-default\"><div class=\"eb-preview-sldr eb-preview-sldr--default\" data-sldr=\"default\"><div class=\"eb-preview-sldr__track\"><div class=\"eb-preview-sldr__fill\"><div class=\"eb-preview-sldr__tooltip\"><span class=\"eb-preview-sldr__pct\">10%</span></div><div class=\"eb-preview-sldr__knob\"></div></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "State",
                "value": "Default"
              },
              {
                "key": "hasTooltip",
                "value": "true",
                "prop": "hastooltip",
                "variants": {
                  "hastooltip:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "⤷ Track (slot)",
                "value": "6 items"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Track",
                "value": "#E5EBF4",
                "token": "border/color-border-weak",
                "swatch": true
              },
              {
                "key": "DraggableFill",
                "value": "#005CE5",
                "token": "bg/color-bg-primary",
                "swatch": true
              },
              {
                "key": "Knob",
                "value": "#FFFFFF",
                "token": "bg/color-bg-main",
                "swatch": true
              },
              {
                "key": "Knob ring",
                "value": "#E5EBF4",
                "token": "border/color-border-weak",
                "swatch": true
              },
              {
                "key": "Tooltip",
                "value": "#005CE5",
                "token": "bg/color-bg-primary",
                "swatch": true
              },
              {
                "key": "#percentage",
                "value": "#FFFFFF",
                "token": "text/color-text-inverse",
                "swatch": true,
                "variants": {
                  "hastooltip:false": {
                    "hide": true
                  }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "#percentage",
                "value": "Primary/Label/Small",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "26",
                "mono": true
              },
              {
                "key": "Width",
                "value": "365",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "99 — on the track and the fill",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "0",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "8",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Center",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    in<span class=\"syn-punc\">:</span> <span class=\"syn-num\">0</span><span class=\"syn-punc\">...</span><span class=\"syn-num\">100</span><span class=\"syn-punc\">,</span>\n    showsTooltip<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    valueRange <span class=\"syn-eq\">=</span> <span class=\"syn-num\">0f</span><span class=\"syn-punc\">..</span><span class=\"syn-num\">100f</span><span class=\"syn-punc\">,</span>\n    showsTooltip <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "sldr-spec-card-disabled",
        "demoKey": "disabled",
        "demoControls": sliderControls,
        "title": "Disabled",
        "node": "6802:105593",
        "description": "",
        "previewHtml": "<div id=\"sldr-spec-disabled\"><div class=\"eb-preview-sldr eb-preview-sldr--disabled\" data-sldr=\"disabled\"><div class=\"eb-preview-sldr__track\"><div class=\"eb-preview-sldr__fill\"><div class=\"eb-preview-sldr__tooltip\"><span class=\"eb-preview-sldr__pct\">10%</span></div><div class=\"eb-preview-sldr__knob\"></div></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "State",
                "value": "Disabled"
              },
              {
                "key": "hasTooltip",
                "value": "true",
                "prop": "hastooltip",
                "variants": {
                  "hastooltip:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "⤷ Track (slot)",
                "value": "6 items"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Track",
                "value": "#E5EBF4",
                "token": "border/color-border-weak",
                "swatch": true
              },
              {
                "key": "DraggableFill",
                "value": "#C2CFE5",
                "token": "bg/color-bg-disabled",
                "swatch": true
              },
              {
                "key": "Knob",
                "value": "#FFFFFF",
                "token": "bg/color-bg-main",
                "swatch": true
              },
              {
                "key": "Knob ring",
                "value": "#E5EBF4",
                "token": "border/color-border-weak",
                "swatch": true
              },
              {
                "key": "Tooltip",
                "value": "#C2CFE5",
                "token": "bg/color-bg-disabled",
                "swatch": true
              },
              {
                "key": "#percentage",
                "value": "#0A2757",
                "token": "text/color-text",
                "swatch": true,
                "variants": {
                  "hastooltip:false": {
                    "hide": true
                  }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "#percentage",
                "value": "Primary/Label/Small",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "26",
                "mono": true
              },
              {
                "key": "Width",
                "value": "365",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "99 — on the track and the fill",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "0",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "8",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Center",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    in<span class=\"syn-punc\">:</span> <span class=\"syn-num\">0</span><span class=\"syn-punc\">...</span><span class=\"syn-num\">100</span><span class=\"syn-punc\">,</span>\n    showsTooltip<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">disabled</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    valueRange <span class=\"syn-eq\">=</span> <span class=\"syn-num\">0f</span><span class=\"syn-punc\">..</span><span class=\"syn-num\">100f</span><span class=\"syn-punc\">,</span>\n    showsTooltip <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "sldr-spec-card-pressed",
        "demoKey": "pressed",
        "demoControls": sliderControls,
        "title": "Pressed",
        "node": "7085:108663",
        "description": "",
        "previewHtml": "<div id=\"sldr-spec-pressed\"><div class=\"eb-preview-sldr eb-preview-sldr--pressed\" data-sldr=\"pressed\"><div class=\"eb-preview-sldr__track\"><div class=\"eb-preview-sldr__fill\"><div class=\"eb-preview-sldr__tooltip\"><span class=\"eb-preview-sldr__pct\">10%</span></div><div class=\"eb-preview-sldr__knob\"></div></div></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "State",
                "value": "Pressed"
              },
              {
                "key": "hasTooltip",
                "value": "true",
                "prop": "hastooltip",
                "variants": {
                  "hastooltip:false": {
                    "value": "false"
                  }
                }
              },
              {
                "key": "⤷ Track (slot)",
                "value": "6 items"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Track",
                "value": "#D7E0EF",
                "token": "border/color-border",
                "swatch": true
              },
              {
                "key": "DraggableFill",
                "value": "#2340A9",
                "token": "bg/color-bg-primary-hover",
                "swatch": true
              },
              {
                "key": "Knob",
                "value": "#FFFFFF",
                "token": "bg/color-bg-main",
                "swatch": true
              },
              {
                "key": "Knob ring",
                "value": "#ADBDDC",
                "token": "border/color-border-strong",
                "swatch": true
              },
              {
                "key": "Tooltip",
                "value": "#2340A9",
                "token": "bg/color-bg-primary-hover",
                "swatch": true
              },
              {
                "key": "#percentage",
                "value": "#FFFFFF",
                "token": "text/color-text-inverse",
                "swatch": true,
                "variants": {
                  "hastooltip:false": {
                    "hide": true
                  }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "#percentage",
                "value": "Primary/Label/Small",
                "mono": true
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "26",
                "mono": true
              },
              {
                "key": "Width",
                "value": "365",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "99 — on the track and the fill",
                "mono": true
              },
              {
                "key": "Padding H",
                "value": "0",
                "mono": true
              },
              {
                "key": "Padding V",
                "value": "8",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "0",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "Center",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    in<span class=\"syn-punc\">:</span> <span class=\"syn-num\">0</span><span class=\"syn-punc\">...</span><span class=\"syn-num\">100</span><span class=\"syn-punc\">,</span>\n    showsTooltip<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    valueRange <span class=\"syn-eq\">=</span> <span class=\"syn-num\">0f</span><span class=\"syn-punc\">..</span><span class=\"syn-num\">100f</span><span class=\"syn-punc\">,</span>\n    showsTooltip <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
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
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:slider:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>slider<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. Slider has no <code>navGroup</code>, so it is a family of one and the artifact takes its slug: <code>com.eastblue.ds:slider</code>, imported as <code>com.eastblue.ds.slider.*</code>."
    },
    "propertyMapping": {
      "description": "Three properties, and the interesting one is the slot. <strong>The value is the whole reason <code>⤷ Track</code> exists.</strong> A slider’s value is continuous, and Figma has no property type for that — so rather than enumerate it as eleven variants at 10% steps, the component makes the track a slot and lets <code>DraggableFill</code> be resized inside it. The slot is not content anyone swaps; it is a value control wearing a slot’s clothes. Natively it maps to the binding, which is where a value belongs, so the thing that looks least like an API in Figma is the one that maps most directly. <code>range</code>, <code>step</code>, <code>min</code> and <code>max</code> have no Figma form at all and are the native API’s own — they get no row here, because a row would imply Figma says something about them.",
      "rows": [
        {
          "figma": "State — Default, Disabled, Pressed",
          "swift": "<em>not a parameter</em> — Pressed is the drag itself; Disabled is <code>.disabled(true)</code>",
          "compose": "<em>not a parameter</em> — Disabled is <code>enabled = false</code>"
        },
        {
          "figma": "hasTooltip — true, false",
          "swift": "<code>showsTooltip: Bool = true</code>",
          "compose": "<code>showsTooltip: Boolean = true</code>"
        },
        {
          "figma": "⤷ Track (slot)",
          "swift": "<em>not a slot</em> — <code>value: Binding&lt;Double&gt;</code>, <code>in: ClosedRange&lt;Double&gt;</code>",
          "compose": "<em>not a slot</em> — <code>value: Float</code>, <code>onValueChange</code>, <code>valueRange</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Default — the standard call",
        "swift": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    in<span class=\"syn-punc\">:</span> <span class=\"syn-num\">0</span><span class=\"syn-punc\">...</span><span class=\"syn-num\">100</span><span class=\"syn-punc\">,</span>\n    showsTooltip<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    valueRange <span class=\"syn-eq\">=</span> <span class=\"syn-num\">0f</span><span class=\"syn-punc\">..</span><span class=\"syn-num\">100f</span><span class=\"syn-punc\">,</span>\n    showsTooltip <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Disabled — each platform’s own idiom",
        "swift": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    in<span class=\"syn-punc\">:</span> <span class=\"syn-num\">0</span><span class=\"syn-punc\">...</span><span class=\"syn-num\">100</span><span class=\"syn-punc\">,</span>\n    showsTooltip<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">disabled</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    valueRange <span class=\"syn-eq\">=</span> <span class=\"syn-num\">0f</span><span class=\"syn-punc\">..</span><span class=\"syn-num\">100f</span><span class=\"syn-punc\">,</span>\n    showsTooltip <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Pressed — no call of its own",
        "swift": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>amount<span class=\"syn-punc\">,</span>\n    in<span class=\"syn-punc\">:</span> <span class=\"syn-num\">0</span><span class=\"syn-punc\">...</span><span class=\"syn-num\">100</span><span class=\"syn-punc\">,</span>\n    showsTooltip<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">// Pressed is the drag — there is nothing to pass</span>",
        "compose": "<span class=\"syn-type\">EBSlider</span><span class=\"syn-punc\">(</span>\n    value <span class=\"syn-eq\">=</span> amount<span class=\"syn-punc\">,</span>\n    onValueChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> amount <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    valueRange <span class=\"syn-eq\">=</span> <span class=\"syn-num\">0f</span><span class=\"syn-punc\">..</span><span class=\"syn-num\">100f</span><span class=\"syn-punc\">,</span>\n    showsTooltip <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">// Pressed is the drag — there is nothing to pass</span>"
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
        "doText": "Leave 23px of clearance above when the tooltip is on.",
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
        "notes": "<code>State</code> and <code>hasTooltip</code> with lowercase boolean values. The tooltip axis stays a variant because a boolean cannot reach a layer inside a slot — a Figma limit, documented rather than worked around — and it now gates the bubble alone."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Every colour resolves to a system token, and the nine on the page are exactly the nine the file’s selection list carries. Five of the six roles move with State; only the knob’s fill holds still. One naming oddity is recorded rather than raised: Pressed paints <code>bg/color-bg-primary-hover</code>, the next step above <code>bg/color-bg-primary</code>, because no pressed token exists yet."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "A continuous value, a track, a thumb and an optional bubble map onto both platforms’ slider primitives. The slot is the one thing that looks unusual in Figma and is the most ordinary natively: it exists because Figma cannot express a continuous value, and it maps to the binding. <code>range</code>, <code>step</code>, <code>min</code> and <code>max</code> have no Figma form and belong to the native API."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default, Pressed and Disabled all exist, and the two things this criterion used to hang on are decisions rather than gaps. The knob is deliberately unchanged in Disabled — the track and the tooltip both shift, and that carries the signal without touching the thumb. Focus is out of scope: the component is mobile only. Pressed is the one state that reaches the knob, giving it a <code>border/color-border-strong</code> ring."
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
    "codeConnect": [],
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
      "version": "2.0.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style and Code tabs rebuilt to the content guides — node 6802:105580",
      "rows": [
        {
          "body": "<strong>The unchanged disabled knob is deliberate.</strong> The knob is identical in Default and Disabled — same <code>bg/color-bg-main</code> fill, same <code>border/color-border-weak</code> ring — while the track and the tooltip both shift. Confirmed that those two carry the signal and the thumb is left alone on purpose. It stays as a recommendation to revisit only if a disabled slider ever ships without its tooltip, since the track alone is the subtler cue.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>Focus is out of scope, and now says so.</strong> The component is mobile only, so there is no focus state to specify and none is missing. Recorded rather than left as an open question, because \"no focus variant\" reads as an omission until someone says otherwise. With both of these settled, C5 moves to Ready.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>One card became three.</strong> A single card covered all six versions. <code>State</code> is the driving property, so Default, Disabled and Pressed each get a card and <code>hasTooltip</code> becomes the only control.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Colour was documented as one state when it moves across three.</strong> Five of the six roles change with <code>State</code> — track, fill, knob ring, tooltip and its label — and only the knob’s fill holds still. A Colors by State table now carries all fifteen values against the nine tokens the file actually uses. The preview already had every one of them right; it was the page that only described one column.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The knob was missing its drop shadow.</strong> <code>dy 2</code>, blur 2, black at 10% — an effect that appears in neither the layer tree nor <code>get_node_info</code>, only in the SVG export’s filter. Third artwork detail this batch that the node tree does not expose.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>The preview drew in the documentation font.</strong> <code>.eb-preview-sldr</code> declared <code>font-family: inherit</code>, which resolves to BarkAda. The one text layer is <code>Primary/Label/Small</code>, so the root names Proxima Soft.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping had three properties in six rows.</strong> <code>DraggableFill width</code> is the value, <code>— no Figma equivalent</code> was a placeholder for range and step, and one row bundled <code>⤷ Track</code> with <code>DraggableFill</code>. Three rows now, matching the panel exactly. Range, step, min and max get no row at all: they have no Figma form, and a row would imply Figma says something about them.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The slot is documented as what it is.</strong> A slider’s value is continuous and Figma has no property type for that, so rather than enumerate eleven variants at 10% steps the component makes the track a slot and resizes <code>DraggableFill</code> inside it. It is not content anyone swaps — it is a value control wearing a slot’s clothes, and natively it maps straight onto the binding. The thing that looks least like an API in Figma turns out to map most directly.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line. Slider has no <code>navGroup</code>, so it is a family of one and the artifact takes its slug: <code>com.eastblue.ds:slider:1.0.0</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>A CSS convenience had been written up as a Figma measurement.</strong> The usage guideline said to leave 26px of clearance above the tooltip. Figma measures <strong>23</strong> — 26 was the preview’s own <code>padding-top</code>. Corrected, and worth naming as a class of error: a number that only ever existed in the documentation, handed to developers as though the component said it.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Usage Snippets were keyed to use-cases, and Code Connect is emptied.</strong> One per <code>State</code> now, including an honest <em>Pressed — no call of its own</em>: two of the three states have no API expression, and saying so beats inventing one.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The Property Mapping intro had been printing its own markup.</strong> That paragraph was the only description field on the page rendered as escaped text rather than HTML, while the same component’s table rows three lines below already rendered it. Fixed in <code>PropertyMapping.astro</code>, which repaired the intro on <strong>17 component pages</strong> — twelve of them broken long before this review. Nothing in any data file changed: writing <code>&lt;code&gt;</code> there was always the convention, and the renderer simply was not honouring it.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
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
          "body": "<strong><code>hasTooltip</code> narrowed to the bubble alone</strong> — setting it to <code>false</code> used to remove <code>KnobContainer</code> as well, leaving a handle-less bar that read as a progress indicator and overlapped <a href=\"/components/progress-bar\">Progress Bar</a>. The knob is now present in all six variants, pressed ring included.",
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
