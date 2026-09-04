import type { ComponentData, DemoControlSection } from '../types';
import { buildInteractiveColorsTable } from './_helpers';

const fieldControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'pressed', label: 'Pressed' },
          { value: 'disabled', label: 'Disabled' },
          { value: 'error', label: 'Error' }
        ]
      },
      {
        label: 'isFilled',
        prop: 'filled',
        control: 'toggle' as const,
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      }
    ]
  }
];

export const datePicker: ComponentData = {
  "meta": {
    "slug": "date-picker",
    "name": "Date Picker",
    "node": "7201:112099",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=7201-112099",
    "description": "The date field a user actually taps. Eight versions across four states and a filled flag, built on the system's own Dropdown rather than a redrawn field.",
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
    "navGroup": "Date Picker",
    "verdict": {
      "kind": "keep",
      "title": "Keep — the entry point, now built on Dropdown",
      "text": "All four DS Health traits pass. This is the component teams reach for: the field, its states, and the calendar it opens. It composes <code>Dropdown - Generic</code> instead of redrawing a form field, which is what closed the old consistency gap with the rest of the form family. Error and Pressed exist for the first time, and Disabled moved onto <code>State</code> so the impossible combinations the old two-boolean schema allowed are gone. It is badged Needs Refinement for two inherited details from Dropdown, not for anything in its own structure."
    }
  },
  "overview": {
    "inContextNote": "Sits inline in a form — a transaction history filter, a scheduling screen, a date of birth field. Tapping it opens <a href=\"/components/date-picker-calendar\">Date Picker - Calendar</a> as an overlay; the chosen date returns to the field and flips isFilled.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dp-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"dp-ctrl-state\" class=\"demo-panel-select\" onchange=\"_dpUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"pressed\">Pressed</option><option value=\"disabled\">Disabled</option><option value=\"error\">Error</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isFilled</span><select id=\"dp-ctrl-filled\" class=\"demo-panel-select\" onchange=\"_dpUpdate()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#label</span><input type=\"text\" id=\"dp-ctrl-label\" class=\"demo-panel-select demo-panel-input\" value=\"Label\" oninput=\"_dpUpdate()\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#value</span><input type=\"text\" id=\"dp-ctrl-value\" class=\"demo-panel-select demo-panel-input\" value=\"Select option\" oninput=\"_dpUpdate()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One field covers every date entry in the app. Nothing about a particular form is baked in — the label and value are text properties."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its label, field, calendar icon, error subtext and all four states. What it does not carry it inherits from Dropdown, deliberately."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Uses <code>State</code> with the same vocabulary as <a href=\"/components/date-picker-header-trigger\">Date Picker - Header Trigger</a>, and looks like every other form field because it is one."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Built from <code>Dropdown - Generic</code>, and pairs with <a href=\"/components/date-picker-calendar\">Date Picker - Calendar</a> as its overlay."
      }
    ],
    "behavior": [
      {
        "state": "State=Default",
        "ios": "na",
        "android": "na",
        "property": "312 × 68",
        "notes": "White field, <code>#D7E0EF</code> border."
      },
      {
        "state": "State=Pressed",
        "ios": "na",
        "android": "na",
        "property": "312 × 68",
        "notes": "Border goes brand blue while the calendar is open."
      },
      {
        "state": "State=Disabled",
        "ios": "na",
        "android": "na",
        "property": "312 × 68",
        "notes": "Filled <code>#EEF2F9</code>, no border. Same height as Default."
      },
      {
        "state": "State=Error",
        "ios": "na",
        "android": "na",
        "property": "312 × 94",
        "notes": "Red border plus subtext — the only version that is taller."
      },
      {
        "state": "isFilled=false",
        "ios": "na",
        "android": "na",
        "property": "placeholder",
        "notes": "\"Select option\" in the muted value colour."
      },
      {
        "state": "isFilled=true",
        "ios": "na",
        "android": "na",
        "property": "value",
        "notes": "The chosen date in the heading colour."
      }
    ],
    "resolved": [
      {
        "headline": "The calendar glyph paints once.",
        "body": "The icon carried a <code>#025AE9</code> fill under a <code>#005CE5</code> stroke that never rendered — two near-identical blues where one was needed. Cleared in Figma during this run; the glyph is now a single <code>border/color-border-primary</code> fill.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "The field is a Dropdown, not a redraw.",
        "body": "Every version wraps one <code>Dropdown - Generic</code> instance. The old component drew its own field, which is why it drifted from the rest of the form family on border colour, height and label placement.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Error and Pressed exist.",
        "body": "Neither had a version before, so a form could not show an invalid date and the field gave no feedback while its calendar was open. Both are now <code>State</code> values, each covering both filled and empty.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "One state setting instead of overlapping booleans.",
        "body": "<code>isDisabled</code> used <code>Yes</code> and <code>No</code> while <code>isFilled</code> used <code>False</code> and <code>True</code>, and the two together permitted combinations that could not happen. Disabled is now a <code>State</code> value, leaving <code>State</code> × <code>isFilled</code> — orthogonal, and complete at eight of eight.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The calendar glyph is a vector.",
        "body": "It shipped as a raster image that could not recolour. It is now a <code>shape_full</code> vector inside a <code>Calendar</code> icon instance.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Disabled stopped being taller than Default.",
        "body": "Every version carries Dropdown's <code>description</code> frame. Disabled sized itself to include the empty frame and came out 26px taller than Default, so disabling a date field pushed the rest of the form down. It now hugs its content at 68, and only Error — which has real subtext — is 94.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The boolean values are lowercase.",
        "body": "<code>isFilled</code> read <code>False</code> and <code>True</code>. It now matches the rest of the family — <code>false</code> and <code>true</code>, like <code>isDisabled</code> on the cell and <code>hasCaret</code> on the header trigger.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The calendar moved out of the trigger.",
        "body": "The old component composed its calendar inline, so the field and the surface could not be used or assessed apart. The calendar is now <a href=\"/components/date-picker-calendar\">Date Picker - Calendar</a>, opened as an overlay.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Let the description frame size to the field.",
        "body": "Dropdown's <code>description</code> frame is 366 wide inside a 312 wide component — a 54px overflow on every version. It cannot be set to fill width while hidden, which is why it is fixed. Worth solving in <code>Dropdown - Generic</code> so every field built on it inherits the fix.",
        "tag": "Composition"
      },
      {
        "headline": "Drive the unused Dropdown slots by property, not by hiding.",
        "body": "Composing Dropdown brings a <code>peso-sign</code> prefix and a <code>flag-container</code> holding a raster Philippines flag. Both are currently switched off by hand. Hand-hidden layers reappear the moment someone swaps the instance — if Dropdown exposed booleans for them, a date field could turn them off declaratively.",
        "tag": "Property"
      },
    ],
    "appliedRecommendations": [
      {
        "headline": "Document that the picker is a wrapper, not a reimplementation.",
        "body": "v2.1: Applied — a Usage Guideline pairs \"present the platform's date picker inside this field's styling\" with \"don't rebuild the calendar from the Figma grid — locale and accessibility come free from the platform\", and the install footnote says plainly that this is the component an app places while the other four are what it renders.",
        "tag": "Docs"
      },
      {
        "headline": "Announce the field as a date control.",
        "body": "v2.1: Applied — Accessibility answers all three parts for both platforms: the field is announced as a date control with its value spoken as a date, activating it is described as opening a calendar, and the Error subtext is tied to the field so it is read on focus rather than left as loose text. A fourth row covers Disabled being announced rather than only greyed.",
        "tag": "A11y"
      },
      {
        "headline": "Take the <code>[Option 02]</code> suffix off the name.",
        "body": "v2.1: Applied — node <code>7201:112099</code> reads <code>Date Picker</code>. Both halves of the recommendation landed: the calendar was renamed to <code>Date Picker - Calendar</code> first, freeing the name for the component that actually takes it. As family lead this is the one member whose name carries no prefix, which is what §3.2 expects.",
        "tag": "Rename"
      },
    ]
  },
  "style": {
    "heading": "States",
    "description": "Eight versions across four states and a filled flag. The field is one <code>Dropdown - Generic</code> instance: the label sits above, the value and calendar icon inside, and Error adds a subtext row that takes the card from 68px to 94px.",
    "colorsTables": [
      buildInteractiveColorsTable({
        title: "Colors by State",
        description: "Four states across two fill flags. Every colour here belongs to the <code>Dropdown - Generic</code> instance the component is built from — this component paints nothing of its own. Error is the fourth column, shown in the notes rather than as a column of its own. The two disabled <code>#value</code> colours are deliberate and not a mistake: a disabled field that already holds a date keeps the darker <code>text/color-text-weakest</code> so the value stays legible, while an empty disabled field drops to the lighter <code>text/color-text-disabled</code>.",
        rows: [
          { role: "Field surface", token: "bg/color-bg-main · disabled bg/color-bg-strong",
            default: "#FFFFFF", pressed: "#FFFFFF", disabled: "#EEF2F9" },
          { role: "Field border", token: "border/color-border · pressed border/color-border-primary · error border/color-border-error",
            default: "#D7E0EF", pressed: "#005CE5", disabled: "–" },
          { role: "#label", token: "text/color-text",
            default: "#0A2757", pressed: "#0A2757", disabled: "#0A2757" },
          { role: "#value — placeholder", token: "text/color-text-weakest · disabled text/color-text-disabled",
            default: "#90A8D0", pressed: "#90A8D0", disabled: "#C2CFE5" },
          { role: "#value — filled", token: "text/color-text · disabled text/color-text-weakest",
            default: "#0A2757", pressed: "#0A2757", disabled: "#90A8D0" },
          { role: "Calendar icon", token: "border/color-border-primary · disabled border/color-border-primary-disabled",
            default: "#005CE5", pressed: "#005CE5", disabled: "#9BC5FD" },
          { role: "#subtext — Error only", token: "text/color-text-weak",
            default: "#445C85", pressed: "–", disabled: "–" }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "dp-spec-card-field",
        "demoKey": "field",
        "demoControls": fieldControls,
        "title": "Date Picker",
        "node": "7201:112099",
        "description": "",
        "previewHtml": "<div id=\"dp-spec-field\"></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "isFilled", "value": "false", "prop": "filled" },
              { "key": "Versions", "value": "8" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Field surface", "value": "#FFFFFF", "token": "bg/color-bg-main", "swatch": true, "variants": { "state:disabled": { "value": "#EEF2F9", "token": "bg/color-bg-strong" } } },
              { "key": "Field border", "value": "#D7E0EF", "token": "border/color-border", "swatch": true, "variants": { "state:pressed": { "value": "#005CE5", "token": "border/color-border-primary" }, "state:error": { "value": "#D61B2C", "token": "border/color-border-error" }, "state:disabled": { "value": "–", "token": "none — the disabled field has no stroke" } } },
              { "key": "#label", "value": "#0A2757", "token": "text/color-text", "swatch": true },
              { "key": "#value", "value": "#90A8D0", "token": "text/color-text-weakest", "swatch": true, "variants": { "filled:true": { "value": "#0A2757", "token": "text/color-text" }, "state:disabled": { "value": "#C2CFE5", "token": "text/color-text-disabled" }, "state:disabled|filled:true": { "value": "#90A8D0", "token": "text/color-text-weakest" } } },
              { "key": "Calendar icon", "value": "#005CE5", "token": "border/color-border-primary", "swatch": true, "variants": { "state:disabled": { "value": "#9BC5FD", "token": "border/color-border-primary-disabled" } } },
              { "key": "#subtext — Error", "value": "#445C85", "token": "text/color-text-weak", "swatch": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#label", "value": "Primary/Label/Light/Small", "mono": true },
              { "key": "#value", "value": "Primary/Label/Light/Small", "mono": true },
              { "key": "#subtext — Error", "value": "Secondary/Bold/Caption", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "68px", "mono": true, "variants": { "state:error": { "value": "94px" } } },
              { "key": "Width", "value": "312px", "mono": true },
              { "key": "Radius", "value": "6px", "mono": true },
              { "key": "Padding H", "value": "12px (derived)", "mono": true },
              { "key": "Padding V", "value": "14px top · 16px bottom (derived)", "mono": true },
              { "key": "Gap", "value": "0px — label, field and subtext stack flush", "mono": true },
              { "key": "Alignment", "value": "Left", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    selection<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>date\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> date<span class=\"syn-punc\">,</span>\n    onSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> date <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span>"
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
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:date-picker:1.0.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>datepicker<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Date Picker family, not this component: Cell, Header, Header Trigger, Calendar and the picker itself all ship in <code>com.eastblue.ds:date-picker</code> and import <code>com.eastblue.ds.datepicker.*</code>. This is the component an app actually places; the other four are what it renders."
    },
    "propertyMapping": {
      "description": "Two properties, and neither is a plain parameter. <code>State</code> splits across a modifier and a message; <code>isFilled</code> is not passed at all — it follows from whether the binding holds a date, which is why the Figma panel has no text property for the value. The label, the placeholder and the calendar icon belong to the <code>Dropdown - Generic</code> instance this component is built from.",
      "rows": [
        {
          "figma": "State — Default, Pressed, Disabled, Error",
          "swift": "<code>.disabled(true)</code> for Disabled · <code>errorText: String?</code> for Error. Default and Pressed are not parameters — the platform reports the press",
          "compose": "<code>enabled: Boolean = true</code> for Disabled · <code>errorText: String?</code> for Error. Pressed comes from the <code>InteractionSource</code>"
        },
        {
          "figma": "isFilled — true, false",
          "swift": "<code>selection: Binding&lt;Date?&gt;</code> — derived, the field is filled when the binding holds a date",
          "compose": "<code>selected: LocalDate?</code> — derived the same way, with <code>onSelect</code> to set it"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "A date field",
        "swift": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    selection<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>date\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> date<span class=\"syn-punc\">,</span>\n    onSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> date <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Disabled — a modifier on iOS, a parameter on Android",
        "swift": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    selection<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>date\n<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">disabled</span><span class=\"syn-punc\">(</span><span class=\"syn-kw\">true</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> date<span class=\"syn-punc\">,</span>\n    onSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> date <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    enabled <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">false</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "subheading": "Error — the subtext row appears",
        "swift": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    selection<span class=\"syn-punc\">:</span> <span class=\"syn-punc\">$</span>date<span class=\"syn-punc\">,</span>\n    errorText<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Input your subtext here.\"</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePicker</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    selected <span class=\"syn-eq\">=</span> date<span class=\"syn-punc\">,</span>\n    onSelect <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> date <span class=\"syn-eq\">=</span> it <span class=\"syn-punc\">}</span><span class=\"syn-punc\">,</span>\n    errorText <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Input your subtext here.\"</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Announced as a date control",
        "ios": "<code>.accessibilityLabel(label)</code> with <code>.accessibilityValue(date.formatted(date: .long, time: .omitted))</code>",
        "android": "<code>contentDescription</code> plus <code>stateDescription</code> carrying the spoken date"
      },
      {
        "requirement": "Activation is described",
        "ios": "<code>.accessibilityHint(\"Opens a calendar\")</code>",
        "android": "<code>onClickLabel = \"Open calendar\"</code>"
      },
      {
        "requirement": "Error subtext is tied to the field",
        "ios": "Append to <code>accessibilityValue</code> so it reads on focus",
        "android": "<code>Modifier.semantics { error(message) }</code>"
      },
      {
        "requirement": "Disabled is announced, not just greyed",
        "ios": "<code>.disabled(true)</code> sets the trait automatically",
        "android": "<code>enabled = false</code> sets the trait automatically"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Present the platform's date picker inside this field's styling.",
        "dontText": "Don't rebuild the calendar from the Figma grid — locale and accessibility come free from the platform."
      },
      {
        "doText": "Let isFilled follow from whether a date is selected.",
        "dontText": "Don't expose isFilled as something a developer sets by hand."
      },
      {
        "doText": "Use Error with a message that says what to do.",
        "dontText": "Don't turn the border red without subtext explaining why."
      }
    ],
    "scorecard": [
      { "id": "C1", "criterion": "Layer Structure & Naming", "status": "ready", "statusLabel": "Ready", "notes": "One <code>Dropdown - Generic</code> instance per version and nothing drawn by hand, which is the point of the component. Two quirks are inherited from that instance rather than introduced here: its description frame is 366px wide inside a 312px field, and it carries a hidden currency prefix and country flag that a date field never uses. Both belong to Dropdown." },
      { "id": "C2", "criterion": "Variant & Property Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>State</code> × <code>isFilled</code> is orthogonal and complete, with lowercase booleans." },
      { "id": "C3", "criterion": "Token Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Field, border, text and icon colours all follow the shared form tokens through Dropdown." },
      { "id": "C4", "criterion": "Native Mappability", "status": "ready", "statusLabel": "Ready", "notes": "A form field with a trailing icon that presents a picker — the standard pattern on both platforms." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Default, Pressed, Disabled and Error, each across both filled states." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "The calendar glyph is a vector instance, now a single <code>border/color-border-primary</code> fill after the stray stroke was cleared. It is still a <code>BOOLEAN_OPERATION</code> and the hidden flag beside it is a raster — both live in the shared icon and the Dropdown instance, not in this component." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [],
    "variants": {
      "total": 8,
      "description": "4 State × 2 isFilled = 8 versions, complete with no gaps.",
      "columns": ["State", "isFilled", "Height", "Node"],
      "rows": [
        { "cells": ["Default", "false", "68", "7201:112100"] },
        { "cells": ["Default", "true", "68", "7201:112105"] },
        { "cells": ["Pressed", "false", "68", "7201:112102"] },
        { "cells": ["Pressed", "true", "68", "7201:112107"] },
        { "cells": ["Disabled", "false", "68", "7201:112112"] },
        { "cells": ["Disabled", "true", "68", "7201:112110"] },
        { "cells": ["Error", "false", "94", "7201:112116"] },
        { "cells": ["Error", "true", "94", "7201:112114"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.1.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Renamed to Date Picker, Style and Code tabs rebuilt — node 7201:112099",
      "rows": [
        {
          "body": "<strong>The component has the family name.</strong> It was <code>Date Picker Trigger [Option 02]</code> — a working title and a discarded alternative carried into the file. Renaming the calendar to <code>Date Picker - Calendar</code> freed the name for the component that actually takes it. This is what makes the release a minor rather than a patch.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>The calendar glyph paints once.</strong> It carried a <code>#025AE9</code> fill under a <code>#005CE5</code> stroke that never rendered — two near-identical blues where one was needed. Cleared in Figma during this run.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>The documented type style did not exist.</strong> Typography read <code>Primary/SemiBold/Subheading</code>, which is not in the database, alongside three font-spec rows. Both <code>#label</code> and <code>#value</code> resolve to <code>Primary/Label/Light/Small</code>, and the Error subtext to <code>Secondary/Bold/Caption</code> — genuinely BarkAda, since that is what the Secondary family is.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Seven of eight colour tokens named the wrong steps</strong>, and the error border was recorded as <code>#D81E1E</code> when the node says <code>#D61B2C</code> — a value borrowed from the button destructive palette. The bindings are <code>bg/color-bg-main</code>, <code>bg/color-bg-strong</code>, <code>border/color-border</code>, <code>border/color-border-primary</code>, <code>border/color-border-error</code>, <code>text/color-text</code>, <code>text/color-text-weakest</code> and <code>border/color-border-primary-disabled</code>.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The disabled value colours were both wrong, and the cause was the schema.</strong> The row carried two single-property overrides, <code>filled:true</code> and <code>state:disabled</code>; with both active neither wins predictably, so Disabled+filled painted <code>#0A2757</code> and Disabled+empty painted a value read in error. A compound <code>state:disabled|filled:true</code> key settles it. The two colours are deliberate: a disabled field holding a date keeps the darker <code>text/color-text-weakest</code> so the value stays legible, while an empty one drops to <code>text/color-text-disabled</code>.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>Layout had none of the seven keys</strong> — <code>Label row</code>, <code>Field</code>, <code>Corner radius</code>, <code>Calendar icon</code> and a <code>Description frame</code> row describing an overflow. Now Height · Width · Radius · Padding H · Padding V · Gap · Alignment, with Height switching to 94px in Error. <code>Gap</code> is <code>0px</code>: label, field and subtext stack flush, which is worth stating because the render suggests otherwise.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Three preview corrections.</strong> The error border drew <code>#D81E1E</code> against Figma's <code>#D61B2C</code>; the disabled calendar icon stayed full-strength blue where Figma dims it to <code>#9BC5FD</code>; and the whole field rendered in the documentation font, since the preview declared <code>font-family: inherit</code>. The subtext now declares BarkAda explicitly, because there it is correct.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The DEV code block was frozen.</strong> This was the only component in the family without a <code>getSnippet</code>, so the snippet stood still while the controls moved. It now follows both settings, and the two languages differ where they should: Disabled is a trailing <code>.disabled(true)</code> modifier in SwiftUI and an <code>enabled = false</code> argument in Compose.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong><code>isFilled</code> was a dropdown where the guide asks for a toggle.</strong> The values were already ordered off-then-on; only <code>control: 'toggle'</code> was missing, which <code>hasCaret</code> and <code>hasWeek6</code> both carry.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line — the last of these in the family. It now cites <code>com.eastblue.ds:date-picker:1.0.0</code> and imports <code>com.eastblue.ds.datepicker.*</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping had seven rows for two properties.</strong> Three of them split <code>State</code> by value in <code>Prop=Value</code> form, which the guide forbids outright, and three more named layers rather than properties. Two rows now, and both say something a developer can act on: <code>State</code> splits across a modifier and a message, and <code>isFilled</code> is never passed — it follows from whether the binding holds a date, which is exactly why the Figma panel has no text property for the value.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>Usage Snippets disagreed with the Style tab.</strong> They passed the label positionally, <code>EBDatePicker(\"Date of birth\", …)</code>, where the card and the live snippet use <code>label:</code>. Three snippets remain but are re-keyed to what changes the call — the base field, Disabled and Error. Default and Pressed produce identical code, so a fourth would have been noise.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Two scorecard rows were held open for another component's faults.</strong> C1 and C6 cited Dropdown's 366px description frame, its hidden currency prefix and country flag, and the raster inside that flag. All still true, all still recorded — but as inherited from the instance rather than as defects of this component, so the page no longer asks someone to fix them here. C1 and C6 move to Ready, and Code Connect is emptied.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>Three of five recommendations close.</strong> The rename landed, the accessibility announcements are documented for both platforms, and the wrapper-not-reimplementation point is stated in the guidelines and the install footnote. The two that remain are Dropdown's: its description frame overflowing the field by 54px, and its unused slots being hidden by hand rather than driven by a property.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Rebuilt on Dropdown — node 7201:112099",
      "rows": [
        {
          "body": "<strong>Rebuilt in the 2026 Working File.</strong> The previous component at <code>12879:49826</code> in Sticker Sheets v2 is deprecated. The calendar it composed inline is now <a href=\"/components/date-picker-calendar\">Date Picker - Calendar</a>.",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>C4 — composes <code>Dropdown - Generic</code></strong> rather than redrawing a form field, closing the consistency gap with the rest of the form family.",
          "delta": { "kind": "resolved", "label": "C4 resolved" }
        },
        {
          "body": "<strong>C5 — Error and Pressed added.</strong> Neither existed; a form could not show an invalid date, and the field gave no feedback while its calendar was open.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>C2 — one state setting.</strong> <code>isDisabled</code> (<code>Yes</code>/<code>No</code>) folded into <code>State</code>, leaving <code>State</code> × <code>isFilled</code> orthogonal and complete. Boolean values lowercased.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C6 — the calendar glyph is a vector</strong> inside a <code>Calendar</code> icon instance, no longer a raster image.",
          "delta": { "kind": "resolved", "label": "C6 resolved" }
        },
        {
          "body": "<strong>C1 — Disabled hugs its content.</strong> It was 26px taller than Default because it sized around Dropdown's empty <code>description</code> frame, so disabling a field shifted the form.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C1 — the description frame still overflows</strong> at 366 wide inside a 312 field. It cannot fill width while hidden; raised against <code>Dropdown - Generic</code>.",
          "delta": { "kind": "open", "label": "C1 open" }
        },
        {
          "body": "<strong>C6 — unused Dropdown slots are hand-hidden.</strong> A currency prefix and a raster flag ride along, switched off manually rather than by property.",
          "delta": { "kind": "partial", "label": "C6 partial" }
        }
      ]
    }
  ]
};
