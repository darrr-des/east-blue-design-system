import type { ComponentData, DemoControlSection } from '../types';
import { buildInteractiveColorsTable } from './_helpers';

const triggerControls: DemoControlSection[] = [
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
          { value: 'disabled', label: 'Disabled' }
        ]
      },
      {
        label: 'hasCaret',
        prop: 'caret',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      },
      {
        label: 'Label',
        prop: 'text',
        control: 'input',
        defaultValue: 'Label',
        options: []
      }
    ]
  }
];

export const datePickerHeaderTrigger: ComponentData = {
  "meta": {
    "slug": "date-picker-header-trigger",
    "name": "Date Picker - Header Trigger",
    "node": "6779:105937",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=6779-105937",
    "description": "The month and year chips in the calendar header. Tapping one switches the calendar to its month or year view. Six versions — three states, with or without a caret.",
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
      "title": "Keep — one State setting, and the caret it was missing",
      "text": "All four DS Health traits pass. Two independent booleans became a single <code>State</code> setting, matching the field trigger and the naming guidelines. A <code>hasCaret</code> option adds the disclosure indicator that was missing — without it the chips read as static labels rather than controls that open a view. It is badged Needs Refinement for one reason: at 24px tall the chip is well under the minimum touch target."
    }
  },
  "overview": {
    "inContextNote": "Two instances sit between the chevrons in the calendar header — one for the month, one for the year. Tapping either switches Date Picker - Calendar into its Month or Year mode, where the chip is replaced by a static title and a back chevron.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dpht-demo-preview\"><span class=\"eb-preview-dphdr\"><span>Month</span></span></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select id=\"dpht-ctrl-state\" class=\"demo-panel-select\" onchange=\"_dphtUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"pressed\">Pressed</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">hasCaret</span><select id=\"dpht-ctrl-caret\" class=\"demo-panel-select\" onchange=\"_dphtUpdate()\"><option value=\"true\" selected=\"\">true</option><option value=\"false\">false</option></select></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">#text</span><input type=\"text\" id=\"dpht-ctrl-text\" class=\"demo-panel-select demo-panel-input\" value=\"Month\" oninput=\"_dphtUpdate()\"></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "The same chip serves both the month and the year position; only its text differs. <code>hasCaret</code> lets it be used where a disclosure indicator would be wrong."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own surface, radius, type style, all three states, and the caret icon instance."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Uses <code>State</code> like <a href=\"/components/date-picker\">Date Picker</a> does, and wraps in a <code>Container</code> like every other component in the family."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Instanced twice inside the calendar header's <code>Container</code>, between the two chevrons."
      }
    ],
    "behavior": [
      {
        "state": "State=Default",
        "ios": "na",
        "android": "na",
        "property": "#F6F9FD",
        "notes": "Resting chip. Both header instances use this."
      },
      {
        "state": "State=Pressed",
        "ios": "na",
        "android": "na",
        "property": "#EEF2F9",
        "notes": "Momentary. Not used to mark which view is open."
      },
      {
        "state": "State=Disabled",
        "ios": "na",
        "android": "na",
        "property": "#FFFFFF",
        "notes": "Surface stays, text and caret mute together."
      },
      {
        "state": "hasCaret=true",
        "ios": "na",
        "android": "na",
        "property": "Chevron Down",
        "notes": "16px icon instance. Widens the chip from 57 to 81."
      }
    ],
    "resolved": [
      {
        "headline": "The 24px chip is deliberate.",
        "body": "The calendar header is a fixed strip, and a taller chip would push the grid down. The drawn chip stays 24px while the tap target is expanded natively to 44 pt on iOS and 48 dp on Android, which the Accessibility table sets out for both platforms. Confirmed with design — the same reasoning that settled the 32 × 32 cell. Growing the drawn chip is logged as a recommendation for a future redesign.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Two booleans became one State setting.",
        "body": "<code>isDisabled</code> and <code>isPressed</code> sat side by side, which allowed a pressed-and-disabled combination that means nothing. They are now <code>State = Default | Pressed | Disabled</code> — the shape the naming guidelines ask for, and the one <a href=\"/components/date-picker\">Date Picker</a> already used.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The setting with one value is gone.",
        "body": "A <code>Kind</code> setting existed with <code>Month</code> as its only value — a dropdown with nothing to choose, and no matching <code>Year</code>. It was dropped: the same chip serves both positions, and only its text differs.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "The chip now says it opens something.",
        "body": "It was a filled rectangle with a bold label and no disclosure indicator, which reads as a static chip. <code>hasCaret</code> adds a <code>Chevron Down</code> icon instance after the text — the same signal the field trigger's dropdown carries. The caret mutes along with the label in Disabled.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "The wrapper matches the family.",
        "body": "The inner frame was <code>Label Container</code>, spaced Title Case. It is now <code>Container</code>, like the cell and the weekday header.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The header no longer uses Pressed to mean selected.",
        "body": "In the calendar's Day mode the month chip shipped in its Pressed version while the year chip sat at Default, which read as \"this one is active\". Both are Default now — pressed is a momentary state, not a way to mark the open view.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      }
    ],
    "open": [],
    "recommendations": [
      {
        "headline": "Give the chip a taller tap area.",
        "body": "The drawn chip is 24px against 44 on iOS and 48 on Android — shorter even than the 32px day cell. The target is expanded natively today, which is the accepted trade for now, but an expanded target the user cannot see still misleads: two chips sit 8px apart while both claim 44. Worth growing the drawn chip whenever the calendar header is next reworked. Not a blocker for this release.",
        "tag": "A11y"
      },
    ],
    "appliedRecommendations": [
      {
        "headline": "Announce the chip as a button that opens a picker.",
        "body": "v1.1: Applied — the Accessibility table now carries a Role / trait row (<code>.accessibilityAddTraits(.isButton)</code> · <code>Modifier.semantics { role = Role.Button }</code>) alongside a label row that names the value and the action together, \"August, select month\" rather than \"August\". Both platforms answered.",
        "tag": "A11y"
      },
      {
        "headline": "Rename the component to <code>Date Picker - Header Trigger</code> in Figma.",
        "body": "v1.1: Applied — node <code>6779:105937</code> now reads <code>Date Picker - Header Trigger</code>, so the chip groups with Cell, Header, Calendar and the picker itself in the assets panel. The recommendation described it as still named <code>Header Trigger</code>; that has not been true since the rename.",
        "tag": "Rename"
      },
    ]
  },
  "style": {
    "heading": "States",
    "description": "One chip, three states, with or without a caret. Default and Pressed differ only in surface; Disabled turns the surface white and mutes the content.",
    "colorsTables": [
      buildInteractiveColorsTable({
        title: "Colors by State",
        description: "Three states, six versions. The caret is a stroke, not a fill, which is why it carries border tokens rather than icon ones. Disabled swaps the surface to white and mutes the label and caret to the same value from two different tokens.",
        rows: [
          { role: "Container surface", token: "bg/color-bg · pressed bg/color-bg-strong · disabled bg/color-bg-primary-inverse",
            default: "#F6F9FD", pressed: "#EEF2F9", disabled: "#FFFFFF" },
          { role: "#text", token: "text/color-text · disabled text/color-text-disabled",
            default: "#0A2757", pressed: "#0A2757", disabled: "#C2CFE5" },
          { role: "Chevron Down", token: "border/color-border-strongest · disabled border/color-border-disabled",
            default: "#445C85", pressed: "#445C85", disabled: "#C2CFE5" }
        ]
      })
    ],
    "specCards": [
      {
        "cardKey": "dpht-spec-card-default",
        "demoKey": "default",
        "demoControls": triggerControls,
        "title": "Header Trigger",
        "node": "6779:105937",
        "description": "",
        "previewHtml": "<div id=\"dpht-spec-default\"><span class=\"eb-preview-dphdr\"><span>Label</span></span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "hasCaret", "value": "true", "prop": "caret" },
              { "key": "Label", "value": "Label", "prop": "text" },
              { "key": "Versions", "value": "6" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Container surface", "value": "#F6F9FD", "token": "bg/color-bg", "swatch": true, "variants": { "state:pressed": { "value": "#EEF2F9", "token": "bg/color-bg-strong" }, "state:disabled": { "value": "#FFFFFF", "token": "bg/color-bg-primary-inverse" } } },
              { "key": "#text", "value": "#0A2757", "token": "text/color-text", "swatch": true, "variants": { "state:disabled": { "value": "#C2CFE5", "token": "text/color-text-disabled" } } },
              { "key": "Chevron Down", "value": "#445C85", "token": "border/color-border-strongest", "swatch": true, "variants": { "state:disabled": { "value": "#C2CFE5", "token": "border/color-border-disabled" } } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "#text", "value": "Primary/Label/Base", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "Hug (24px)", "mono": true },
              { "key": "Width", "value": "Hug (81px)", "mono": true, "variants": { "caret:false": { "value": "Hug (57px)" } } },
              { "key": "Radius", "value": "4px", "mono": true },
              { "key": "Padding H", "value": "8px", "mono": true },
              { "key": "Padding V", "value": "4px", "mono": true },
              { "key": "Gap", "value": "8px", "mono": true },
              { "key": "Alignment", "value": "Center", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBDatePickerHeaderTrigger</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    hasCaret<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerHeaderTrigger</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    hasCaret <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"syn-punc\">.</span><span class=\"syn-fn\">package</span><span class=\"syn-punc\">(</span>url<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"https://github.com/AY-Org/eb-ds-ios\"</span><span class=\"syn-punc\">,</span> from<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"2.1.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"syn-fn\">implementation</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"com.eastblue.ds:date-picker:2.1.0\"</span><span class=\"syn-punc\">)</span>"
        },
        {
          "label": "Import",
          "code": "<span class=\"syn-kw\">import</span> <span class=\"syn-type\">EastBlueDS</span>\n<span class=\"syn-kw\">import</span> com<span class=\"syn-punc\">.</span>eastblue<span class=\"syn-punc\">.</span>ds<span class=\"syn-punc\">.</span>datepicker<span class=\"syn-punc\">.</span><span class=\"syn-punc\">*</span>"
        }
      ],
      "footnote": "Planned API — the native library does not exist yet. The artifact is the Date Picker family, not this component: Cell, Header, Header Trigger, Calendar and the picker itself all ship in <code>com.eastblue.ds:date-picker</code> and import <code>com.eastblue.ds.datepicker.*</code>."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters, in the order the Figma property panel lists them. State is the one property that is not a single parameter: Default and Disabled are a flag, while Pressed is what the platform reports while a finger is down.",
      "rows": [
        {
          "figma": "State — Default, Pressed, Disabled",
          "swift": "<code>isDisabled: Bool = false</code> — Pressed is the momentary press state, not a parameter",
          "compose": "<code>enabled: Boolean = true</code> — Pressed comes from the <code>InteractionSource</code>"
        },
        {
          "figma": "hasCaret — true, false",
          "swift": "<code>hasCaret: Bool = true</code>",
          "compose": "<code>hasCaret: Boolean = true</code>"
        },
        {
          "figma": "Label (text)",
          "swift": "<code>label: String</code>",
          "compose": "<code>label: String</code>"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Header Trigger — a month or year chip",
        "swift": "<span class=\"syn-type\">EBDatePickerHeaderTrigger</span><span class=\"syn-punc\">(</span>\n    label<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    hasCaret<span class=\"syn-punc\">:</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBDatePickerHeaderTrigger</span><span class=\"syn-punc\">(</span>\n    label <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Label\"</span><span class=\"syn-punc\">,</span>\n    hasCaret <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Label",
        "ios": "Button with <code>.accessibilityLabel(\"August, select month\")</code>",
        "android": "<code>Modifier.clickable(onClickLabel = \"Select month\")</code>"
      },
      {
        "requirement": "Role / trait",
        "ios": "<code>.accessibilityAddTraits(.isButton)</code>",
        "android": "<code>Modifier.semantics { role = Role.Button }</code>"
      },
      {
        "requirement": "Minimum target",
        "ios": "<code>.frame(minHeight: 44)</code> around the 24pt chip",
        "android": "<code>Modifier.minimumInteractiveComponentSize()</code> — 48dp"
      },
      {
        "requirement": "Dynamic type",
        "ios": "Supported, scales to AX5 — the chip hugs, so width grows with the label",
        "android": "<code>sp</code> units, scales with the system font scale"
      },
      {
        "requirement": "Caret is decorative",
        "ios": "<code>.accessibilityHidden(true)</code> on the chevron",
        "android": "<code>contentDescription = null</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Turn the caret on wherever the chip opens a view.",
        "dontText": "Don't ship a bare chip that looks identical to a static label."
      },
      {
        "doText": "Keep both chips in Default while the calendar is on the day view.",
        "dontText": "Don't use Pressed to mark which view is open — that's a selection meaning on a momentary state."
      }
    ],
    "scorecard": [
      { "id": "C1", "criterion": "Layer Structure & Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>Container</code> → <code>#text</code> plus an optional icon instance." },
      { "id": "C2", "criterion": "Variant & Property Naming", "status": "ready", "statusLabel": "Ready", "notes": "<code>State</code> replaced two booleans; <code>hasCaret</code> follows the boolean prefix convention with lowercase values." },
      { "id": "C3", "criterion": "Token Coverage", "status": "ready", "statusLabel": "Ready", "notes": "Three surfaces and two text colours, all standard tokens." },
      { "id": "C4", "criterion": "Native Mappability", "status": "ready", "statusLabel": "Ready", "notes": "A labelled button with an optional trailing icon." },
      { "id": "C5", "criterion": "Interaction State Coverage", "status": "ready", "statusLabel": "Ready", "notes": "All three states are built across both caret options, and there is no Focused state by design — these are mobile components. The 24px chip is a deliberate visual size; the tap target is expanded natively to 44 pt / 48 dp, as the Accessibility table sets out." },
      { "id": "C6", "criterion": "Asset & Icon Quality", "status": "ready", "statusLabel": "Ready", "notes": "The caret is a <code>Chevron Down</code> icon instance that recolours per state." },
      { "id": "C7", "criterion": "Code Connect Linkability", "status": "empty", "statusLabel": "Not Mapped", "notes": "Blocked — the native library does not exist yet." }
    ],
    "codeConnect": [],
    "variants": {
      "total": 6,
      "description": "3 <code>State</code> × 2 <code>hasCaret</code> = 6 variants — the matrix is complete, every combination is built.",
      "columns": ["State", "hasCaret", "Surface", "Width", "Node"],
      "rows": [
        { "cells": ["Default", "false", "#F6F9FD", "57", "6493:75116"] },
        { "cells": ["Pressed", "false", "#EEF2F9", "57", "6493:73968"] },
        { "cells": ["Disabled", "false", "#FFFFFF", "57", "6493:73974"] },
        { "cells": ["Default", "true", "#F6F9FD", "81", "7409:160301"] },
        { "cells": ["Pressed", "true", "#EEF2F9", "81", "7409:160304"] },
        { "cells": ["Disabled", "true", "#FFFFFF", "81", "7409:160307"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "1.1.0",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Renamed to the family, Style and Code tabs rebuilt — node 6779:105937",
      "rows": [
        {
          "body": "<strong>The component has its family name.</strong> The August assessment recorded it as <code>Header Trigger</code> and recommended the <code>Date Picker - </code> prefix. Node <code>6779:105937</code> now reads <code>Date Picker - Header Trigger</code>, so the chip groups with Cell, Header, Calendar and the picker in the assets panel. This is what makes the release a minor rather than a patch.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>The 24px chip is a decision, not a gap.</strong> The calendar header is a fixed strip and a taller chip would push the grid down, so the drawn chip stays 24px while the tap target expands natively to 44 pt / 48 dp. Same reasoning that settled the 32 × 32 cell. C5 moves to Ready; growing the drawn chip stays on the list as a recommendation for a future redesign.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>The chip announces itself as a button.</strong> The recommendation asked for a button role and a label naming both the value and the action. Accessibility now carries a Role / trait row and a label row reading \"August, select month\" rather than \"August\", answered for iOS and Android.",
          "delta": { "kind": "resolved", "label": "A11y" }
        },
        {
          "body": "<strong>The documented type style did not exist.</strong> Typography read <code>Primary/Bold/Subheading</code>, which is not a style in the database. The layer resolves to <code>Primary/Label/Base</code>. The <code>Font</code> row spelling out Proxima Soft Bold · 16 / 16 · +0.25 is gone — that lives in the text style.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The caret had no documented colour.</strong> Two of the three roles were on the page and the chevron was on none of them. It is a stroke, not a fill, which is why it carries <code>border/color-border-strongest</code> and <code>border/color-border-disabled</code> rather than an icon token. A Colors by State table now covers all three roles across all three states.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The surface tokens named the wrong steps.</strong> They read <code>bg/color-bg-subtle</code>, <code>bg/color-bg-subtle-pressed</code> and <code>bg/color-bg-main</code>; the bindings are <code>bg/color-bg</code>, <code>bg/color-bg-strong</code> and <code>bg/color-bg-primary-inverse</code>. The hex values were right throughout — only the token paths were wrong, which is the worse half to get wrong.",
          "delta": { "kind": "resolved", "label": "C3 resolved" }
        },
        {
          "body": "<strong>The preview rendered in the wrong typeface.</strong> <code>.eb-preview-dphdr</code> declared no font, so it inherited the documentation font — BarkAda — through <code>.eb-preview-scope</code> and <code>body</code>, while the component is Proxima Soft Bold. Proxima Soft was loaded the whole time; the preview simply never asked for it.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The caret drew in the label colour.</strong> It inherited <code>currentColor</code>, so Default and Pressed rendered <code>#0A2757</code> instead of <code>#445C85</code>. Disabled looked correct only by coincidence — the text and border disabled tokens both land on <code>#C2CFE5</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Gap was documented as 4px; the panel says 8.</strong> The auto-layout panel confirms 8, and the arithmetic agrees: 8 + 41 + 8 + 16 + 8 reproduces the 81px caret width exactly. The caret path and stroke-width were redrawn from Figma’s own <code>M4.5 6.5L8 10L11.5 6.5</code> at 2, replacing an approximation at 1.6.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Layout was not on the seven-key list.</strong> It carried <code>Corner radius</code>, <code>Gap to caret</code>, <code>Caret</code> and <code>Touch target</code> while missing <code>Padding V</code> and <code>Alignment</code>. Now Height · Width · Radius · Padding H · Padding V · Gap · Alignment, each read off the auto-layout panel, with Width switching to <code>Hug (57px)</code> when the caret is off.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The install block pointed at coordinates that will never exist.</strong> <code>gcash/east-blue-ios</code> and <code>com.gcash.eastblue:components:1.0.0</code>, with no Import line at all. Under the family rule the artifact is <code>com.eastblue.ds:date-picker</code> — the whole Date Picker family, not this component — imported as <code>com.eastblue.ds.datepicker.*</code>.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Usage Snippets documented the header, not the chip.</strong> They showed <code>HStack(spacing: 4)</code> and <code>Row(horizontalArrangement = …)</code> assembling two triggers — how to draw a header, not how to use this component. One snippet per driving value now, built from the same definition as the spec card and the live preview.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>The component had two names and a parameter that traced to nothing.</strong> Spec cards said <code>EBPickerHeaderTrigger</code>, and the mapping offered <code>showsCaret</code> for a property Figma calls <code>hasCaret</code>. All surfaces now read <code>EBDatePickerHeaderTrigger</code> with <code>hasCaret</code> and <code>label</code>, each tracing 1:1 to a property in the panel.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Property Mapping named a layer where a property belongs.</strong> The third row read <code>#text</code>; the Figma property is <code>Label</code>. Rows are now prose grouped by property with their values listed, and the Variants Inventory gained the node ID for each of the six versions.",
          "delta": { "kind": "resolved", "label": "Docs" }
        },
        {
          "body": "<strong>Code Connect was populated on a component with nothing registered.</strong> Three rows claimed readiness against a native library that does not exist. The section is gone; C7 stays Not Mapped.",
          "delta": { "kind": "resolved", "label": "Docs" }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "August 2026",
      "kind": "initial",
      "kindLabel": "Initial",
      "header": "First assessment · node 6779:105937",
      "rows": [
        {
          "body": "<strong>C2 — <code>isDisabled</code> and <code>isPressed</code> collapsed into <code>State</code>.</strong> Interaction states belong on one setting, not on parallel booleans that permit combinations with no meaning.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C2 — the single-value <code>Kind</code> setting removed.</strong> It offered only <code>Month</code>, with no <code>Year</code> counterpart.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C5 — <code>hasCaret</code> added.</strong> A <code>Chevron Down</code> instance now signals that the chip opens a view; it mutes with the label in Disabled.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>C1 — <code>Label Container</code> renamed to <code>Container</code></strong>, matching the rest of the family.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C5 — the calendar header stopped using Pressed to mean selected.</strong> Both chips now render Default in Day mode.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>C5 — tap area unchanged</strong> at 24px against 44/48 minimums.",
          "delta": { "kind": "open", "label": "C5 open" }
        }
      ]
    }
  ]
};
