import type { ComponentData, DemoControlSection } from '../types';

/* One card per Kind. Role and Selection are the axes worth exercising;
   isDisabled rides along on both. */
const dayControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Role',
        prop: 'role',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'today', label: 'Today' },
          { value: 'prev-next', label: 'Prev-Next' }
        ]
      },
      {
        label: 'Selection',
        prop: 'selection',
        defaultValue: 'none',
        options: [
          { value: 'none', label: 'None' },
          { value: 'selected', label: 'Selected' },
          { value: 'range-start', label: 'Range-Start' },
          { value: 'range-middle', label: 'Range-Middle' },
          { value: 'range-end', label: 'Range-End' }
        ]
      },
      {
        label: 'isDisabled',
        prop: 'disabled',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      }
    ]
  }
];

const monthYearControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Role',
        prop: 'role',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'today', label: 'Today' }
        ]
      },
      {
        label: 'Selection',
        prop: 'selection',
        defaultValue: 'none',
        options: [
          { value: 'none', label: 'None' },
          { value: 'selected', label: 'Selected' }
        ]
      },
      {
        label: 'isDisabled',
        prop: 'disabled',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'false' },
          { value: 'true', label: 'true' }
        ]
      }
    ]
  }
];

export const datePickerCell: ComponentData = {
  "meta": {
    "slug": "date-picker-cell",
    "name": "Date Picker - Cell",
    "node": "5943:41825",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5943-41825",
    "description": "The one selectable cell used everywhere in the picker — day numbers in the calendar grid, and month and year labels in the header views. 16 versions.",
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
    "navGroup": "Date Picker",
    "verdict": {
      "kind": "keep",
      "title": "Keep — two components merged into one, cleanly",
      "text": "All four DS Health traits pass. <code>Date Picker - Item</code> and <code>Month and Year Picker - Item</code> are gone; both are now <code>Kind</code> values on this one component. The old <code>Type</code> setting that mixed display role with selection state is split into <code>Role</code> and <code>Selection</code>, every version wraps in a <code>Container</code>, and the Today ring is identical across both kinds. It is badged Needs Refinement for one reason: the cell is 32×32, below the 44×44 and 48×48 minimum touch targets."
    }
  },
  "overview": {
    "inContextNote": "Day cells fill the seven-column calendar grid; month and year cells fill the three-column header views. The same component serves both, which is what keeps selection, today and disabled looking identical wherever they appear.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"dpc-demo-preview\"><span class=\"eb-preview-dpcell eb-preview-dpcell--day\"><span class=\"eb-preview-dpcell__label\">1</span></span></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Kind</span><select id=\"dpc-ctrl-kind\" class=\"demo-panel-select\" onchange=\"_dpcUpdate()\"><option value=\"day\" selected=\"\">Day</option><option value=\"monthyear\">MonthYear</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Role</span><select id=\"dpc-ctrl-role\" class=\"demo-panel-select\" onchange=\"_dpcUpdate()\"><option value=\"default\" selected=\"\">Default</option><option value=\"today\">Today</option><option value=\"prev-next\">Prev-Next</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Selection</span><select id=\"dpc-ctrl-selection\" class=\"demo-panel-select\" onchange=\"_dpcUpdate()\"><option value=\"none\" selected=\"\">None</option><option value=\"selected\">Selected</option><option value=\"range-start\">Range-Start</option><option value=\"range-middle\">Range-Middle</option><option value=\"range-end\">Range-End</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">isDisabled</span><select id=\"dpc-ctrl-disabled\" class=\"demo-panel-select\" onchange=\"_dpcUpdate()\"><option value=\"false\" selected=\"\">false</option><option value=\"true\">true</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "One cell covers the day grid and both header views. Where the system used to keep two near-identical components, a single <code>Kind</code> value now tells them apart."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Carries its own surface, radius, type style and every state it can be in. The range strip is drawn inside the cell rather than by the row that holds it."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Both kinds wrap in a <code>Container</code> holding one <code>#text</code>. Selection is <code>#005CE5</code> with white text in both; Today is a <code>#005CE5</code> ring in both; Selected text is SemiBold 600 in both."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Instanced by <a href=\"/components/date-picker-calendar\">Date Picker - Calendar</a> in all three modes — seven per row in Day, twelve in Month, eighteen in Year."
      }
    ],
    "behavior": [
      {
        "state": "Kind=Day",
        "ios": "na",
        "android": "na",
        "property": "32 × 32",
        "notes": "Circular container, radius 24."
      },
      {
        "state": "Kind=MonthYear",
        "ios": "na",
        "android": "na",
        "property": "59 × 32",
        "notes": "Rounded rectangle, radius 8. Header views only."
      },
      {
        "state": "Role=Today",
        "ios": "na",
        "android": "na",
        "property": "ring",
        "notes": "<code>#005CE5</code> stroke and text, no fill."
      },
      {
        "state": "Role=Prev-Next",
        "ios": "na",
        "android": "na",
        "property": "muted",
        "notes": "Adjacent-month days. Tappable, not disabled."
      },
      {
        "state": "Selection=Selected",
        "ios": "na",
        "android": "na",
        "property": "filled",
        "notes": "<code>#005CE5</code> fill, white text. Also carries the pressed meaning."
      },
      {
        "state": "Selection=Range-*",
        "ios": "na",
        "android": "na",
        "property": "strip",
        "notes": "<code>#E5F1FF</code> strip bleeding 10px past the cell to meet its neighbour. Day only."
      },
      {
        "state": "isDisabled=true",
        "ios": "na",
        "android": "na",
        "property": "muted",
        "notes": "Not available on the range or Prev-Next versions."
      }
    ],
    "resolved": [
      {
        "headline": "Two cell components became one.",
        "body": "<code>Date Picker - Item</code> and <code>Month and Year Picker - Item</code> are gone. Both are now <code>Kind</code> values on this component, which is what stopped the two from drifting apart on state coverage, ring thickness and selection colour.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Display role and selection are separate settings.",
        "body": "The old <code>Type</code> setting mixed the two, so \"this is today\" and \"this is selected\" competed for one slot. They are now <code>Role</code> and <code>Selection</code>, which is what made the Today and Selected combination expressible at all.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Value names lost their punctuation and spacing.",
        "body": "<code>Range (Middle)</code> is now <code>Range-Middle</code>, alongside <code>Range-Start</code> and <code>Range-End</code>. <code>Kind</code> reads <code>MonthYear</code> rather than carrying a slash, and the booleans are lowercase <code>true</code> and <code>false</code>.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Every version wraps the same way.",
        "body": "Day cells used to wrap in <code>container</code> and month cells in <code>Label Container</code>, and the month cell's inner frame was called <code>Month</code> even on the year view. All sixteen now read <code>Container</code> → <code>#text</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "The range strip is drawn once, consistently.",
        "body": "Range-Start carried two overlapping rectangles whose names sat on the wrong sides, Range-Middle painted <code>#E5F1FF</code> twice, and the plain Selected cell shipped two hidden range rectangles it never used. Each range version now has one rectangle, correctly named, bleeding the same 10px.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Selected reads the same weight on both kinds.",
        "body": "Month and year labels were Bold 700 while day numbers were SemiBold 600 in the same <code>Selection=Selected</code> state. Both are SemiBold 600 now.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Today and Selected no longer pretend to differ.",
        "body": "Four <code>Role=Today, Selection=Selected</code> versions existed but rendered identically to <code>Role=Default, Selection=Selected</code> — the day cell's only difference was a stroke in the same colour as its own fill. They were dropped rather than given a treatment: once a date is selected, the selected fill is the signal.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Adjacent-month days got a stronger colour.",
        "body": "Prev-Next moved from the weakest text token to the next step up, taking contrast against white from roughly 2.4:1 to about 4.0:1. These are real tappable days, not disabled ones, so they need to be readable.",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      }
    ],
    "open": [
      {
        "headline": "The cell is 32 × 32, below the minimum touch target.",
        "body": "iOS asks for 44 × 44 and Android for 48 × 48. A seven-column grid at 312px wide leaves 32px per cell, so the fix is either a taller row with the same visual circle, or a transparent tap area extending past the drawn cell. The second keeps the design and satisfies both platforms.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Take Prev-Next one more step up the token scale.",
        "body": "The move to the stronger token lands at roughly 4.0:1 against white. Normal-size text needs 4.5:1 — 14px SemiBold does not qualify as large text, which needs 18.66px bold or 24px regular. One more step settles it.",
        "tag": "Token"
      },
      {
        "headline": "Give the row the range strip, not the cell.",
        "body": "Each range version bleeds a rectangle 10px past its own bounds to meet the neighbouring cell. It works, but it means the cell knows about its siblings. Native calendars draw range continuity at the row, and moving it there would let the cell stop overflowing.",
        "tag": "Composition"
      },
      {
        "headline": "Rename the component to <code>Date Picker - Cell</code> in Figma.",
        "body": "The component is still called <code>Picker Cell</code> at node <code>5943:41825</code>. The family agreed on the <code>Date Picker - </code> prefix so the five components group together in the assets panel.",
        "tag": "Rename"
      },
      {
        "headline": "Document that Selected carries the pressed meaning.",
        "body": "There is no separate pressed version, by design — tapping a cell selects it. Worth noting in the Code tab that Compose attaches a ripple to clickable surfaces by default, so Android will show press feedback the design does not draw.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": []
  },
  "style": {
    "heading": "Kinds",
    "description": "Two kinds, one anatomy. Every version is a Container wrapping a single #text.",
    "specCards": [
      {
        "cardKey": "dpc-spec-card-day",
        "demoKey": "day",
        "demoControls": dayControls,
        "title": "Kind=Day",
        "node": "5943:41826",
        "description": "The calendar grid cell. Circular, 32×32, and the only kind that takes the range selections.",
        "previewHtml": "<div id=\"dpc-spec-day\"><span class=\"eb-preview-dpcell eb-preview-dpcell--day\"><span class=\"eb-preview-dpcell__label\">1</span></span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Role", "value": "Default", "prop": "role" },
              { "key": "Selection", "value": "None", "prop": "selection" },
              { "key": "isDisabled", "value": "false", "prop": "disabled" },
              { "key": "Versions", "value": "10 of 16" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Text — default", "value": "#0A2757", "token": "text/color-text-heading", "swatch": true },
              { "key": "Text — today", "value": "#005CE5", "token": "text/color-text-link", "swatch": true },
              { "key": "Text — prev-next", "value": "#6780A9", "token": "text/color-text-weaker", "swatch": true },
              { "key": "Text — disabled", "value": "#C2CFE5", "token": "text/color-text-weakest", "swatch": true },
              { "key": "Selected fill", "value": "#005CE5", "token": "main/date-picker/cell/selected", "swatch": true },
              { "key": "Range strip", "value": "#E5F1FF", "token": "main/date-picker/cell/range", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Dimensions", "value": "32 × 32", "mono": true },
              { "key": "Corner radius", "value": "24", "mono": true },
              { "key": "Today ring", "value": "1px inset", "mono": true },
              { "key": "Range bleed", "value": "10 each side", "mono": true },
              { "key": "Touch target", "value": "32 — below the 44/48 minimum", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text style", "value": "Primary/SemiBold/Body", "mono": true },
              { "key": "Font", "value": "Proxima Soft SemiBold · 14 / 14 · +0.25", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBPickerCell</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-dot\">.day</span><span class=\"syn-punc\">,</span>\n    role<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.default</span><span class=\"syn-punc\">,</span>\n    selection<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.none</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"1\"</span><span class=\"syn-punc\">) }</span>",
        "compose": "<span class=\"syn-type\">EBPickerCell</span><span class=\"syn-punc\">(</span>\n    kind <span class=\"syn-eq\">=</span> <span class=\"syn-type\">PickerCellKind</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Day</span><span class=\"syn-punc\">,</span>\n    role <span class=\"syn-eq\">=</span> <span class=\"syn-type\">PickerCellRole</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Default</span><span class=\"syn-punc\">,</span>\n    selection <span class=\"syn-eq\">=</span> <span class=\"syn-type\">PickerCellSelection</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">None</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"1\"</span><span class=\"syn-punc\">) }</span>"
      },
      {
        "cardKey": "dpc-spec-card-monthyear",
        "demoKey": "monthyear",
        "demoControls": monthYearControls,
        "title": "Kind=MonthYear",
        "node": "6442:73668",
        "description": "The header view cell. Wider and squarer than the day cell, and deliberately without the range selections — these pick a single month or year.",
        "previewHtml": "<div id=\"dpc-spec-monthyear\"><span class=\"eb-preview-dpcell eb-preview-dpcell--monthyear\"><span class=\"eb-preview-dpcell__label\">Label</span></span></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Role", "value": "Default", "prop": "role" },
              { "key": "Selection", "value": "None", "prop": "selection" },
              { "key": "isDisabled", "value": "false", "prop": "disabled" },
              { "key": "Versions", "value": "6 of 16" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Text — default", "value": "#0A2757", "token": "text/color-text-heading", "swatch": true },
              { "key": "Text — today", "value": "#005CE5", "token": "text/color-text-link", "swatch": true },
              { "key": "Text — disabled", "value": "#C2CFE5", "token": "text/color-text-weakest", "swatch": true },
              { "key": "Selected fill", "value": "#005CE5", "token": "main/date-picker/cell/selected", "swatch": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Dimensions", "value": "59 × 32", "mono": true },
              { "key": "Corner radius", "value": "8", "mono": true },
              { "key": "Today ring", "value": "1px inset", "mono": true },
              { "key": "Range selections", "value": "none — by design", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text style", "value": "Primary/SemiBold/Body", "mono": true },
              { "key": "Font", "value": "Proxima Soft SemiBold · 14 / 14 · +0.25", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBPickerCell</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-dot\">.monthYear</span><span class=\"syn-punc\">,</span>\n    role<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.today</span><span class=\"syn-punc\">,</span>\n    selection<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.none</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"2026\"</span><span class=\"syn-punc\">) }</span>",
        "compose": "<span class=\"syn-type\">EBPickerCell</span><span class=\"syn-punc\">(</span>\n    kind <span class=\"syn-eq\">=</span> <span class=\"syn-type\">PickerCellKind</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">MonthYear</span><span class=\"syn-punc\">,</span>\n    role <span class=\"syn-eq\">=</span> <span class=\"syn-type\">PickerCellRole</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Today</span>\n<span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"2026\"</span><span class=\"syn-punc\">) }</span>"
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
      "footnote": "Planned API — the native library does not exist yet. In practice most teams will never call this directly; it is the cell that Date Picker - Calendar draws."
    },
    "propertyMapping": {
      "description": "Figma properties mapped to the intended native parameters.",
      "rows": [
        { "figma": "Kind", "swift": "PickerCellKind (.day / .monthYear)", "compose": "kind: PickerCellKind" },
        { "figma": "Role", "swift": "PickerCellRole (.default / .today / .prevNext)", "compose": "role: PickerCellRole" },
        { "figma": "Selection", "swift": "PickerCellSelection (.none / .selected / .rangeStart / .rangeMiddle / .rangeEnd)", "compose": "selection: PickerCellSelection" },
        { "figma": "isDisabled", "swift": ".disabled(true)", "compose": "enabled = false" },
        { "figma": "#text", "swift": "@ViewBuilder label", "compose": "label: @Composable () -> Unit" }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "A selected day",
        "swift": "<span class=\"syn-type\">EBPickerCell</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.day</span><span class=\"syn-punc\">,</span> selection<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.selected</span><span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"14\"</span><span class=\"syn-punc\">) }</span>",
        "compose": "<span class=\"syn-type\">EBPickerCell</span><span class=\"syn-punc\">(</span>kind <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Day</span><span class=\"syn-punc\">,</span> selection <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Selected</span><span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"14\"</span><span class=\"syn-punc\">) }</span>"
      },
      {
        "subheading": "A day inside a selected range",
        "swift": "<span class=\"syn-type\">EBPickerCell</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.day</span><span class=\"syn-punc\">,</span> selection<span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.rangeMiddle</span><span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"15\"</span><span class=\"syn-punc\">) }</span>",
        "compose": "<span class=\"syn-type\">EBPickerCell</span><span class=\"syn-punc\">(</span>kind <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">Day</span><span class=\"syn-punc\">,</span> selection <span class=\"syn-eq\">=</span> <span class=\"syn-dot\">RangeMiddle</span><span class=\"syn-punc\">) {</span> <span class=\"syn-type\">Text</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"15\"</span><span class=\"syn-punc\">) }</span>"
      }
    ],
    "accessibility": [
      {
        "requirement": "Tap area meets the platform minimum",
        "ios": "<code>.frame(minWidth: 44, minHeight: 44)</code> around the 32pt circle",
        "android": "<code>Modifier.minimumInteractiveComponentSize()</code>"
      },
      {
        "requirement": "The date is announced, not the number",
        "ios": "<code>.accessibilityLabel(date.formatted(date: .complete, time: .omitted))</code>",
        "android": "<code>contentDescription</code> built from the full date"
      },
      {
        "requirement": "Selection is a state, not part of the label",
        "ios": "<code>.accessibilityAddTraits(.isSelected)</code>",
        "android": "<code>Modifier.semantics { selected = true }</code>"
      },
      {
        "requirement": "Today is announced",
        "ios": "Append \"Today\" to the label when <code>Role=Today</code>",
        "android": "Same, via <code>stateDescription</code>"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Prev-Next for days belonging to the neighbouring month — they stay tappable.",
        "dontText": "Don't use Disabled for adjacent-month days; disabled means unavailable."
      },
      {
        "doText": "Let Selected carry the pressed meaning — tapping a cell selects it.",
        "dontText": "Don't add a separate pressed style that competes with selection."
      },
      {
        "doText": "Keep range selections on Day cells.",
        "dontText": "Don't try to range-select months or years; those views pick one value."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All sixteen versions read <code>Container</code> → <code>#text</code>. Range rectangles are single, correctly named, and bleed a consistent 10px."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Kind</code>, <code>Role</code>, <code>Selection</code> and <code>isDisabled</code> follow the naming guidelines, with lowercase booleans and no punctuation in values."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Prev-Next moved up a step but still lands near 4.0:1. A <code>main/date-picker/cell/*</code> namespace is proposed for the selection and range fills."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to a cell on both platforms, but the range strip bleeds past the cell to fake row continuity, which native draws at the row."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "States are complete for the intended set — no Focused (mobile only), Selected carries pressed. Outstanding: the 32×32 touch target."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "No icons or rasters — the cell is type on a shape."
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
        "notes": "Four settings, all mapping one to one onto enums and a boolean."
      },
      {
        "aspect": "Token coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Cell fills need their own namespace before mapping."
      },
      {
        "aspect": "Registration",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until the native library exists."
      }
    ],
    "variants": {
      "total": 16,
      "description": "Kind × Role × Selection × isDisabled. The axes permit 60 combinations; 16 are real, because MonthYear has no range or Prev-Next and the range versions have no disabled state.",
      "columns": ["Kind", "Role", "Selection", "isDisabled", "Count"],
      "rows": [
        { "cells": ["Day", "Default", "None", "false · true", "2"] },
        { "cells": ["Day", "Default", "Selected", "false · true", "2"] },
        { "cells": ["Day", "Default", "Range-Start / Middle / End", "false", "3"] },
        { "cells": ["Day", "Today", "None", "false · true", "2"] },
        { "cells": ["Day", "Prev-Next", "None", "false", "1"] },
        { "cells": ["MonthYear", "Default", "None", "false · true", "2"] },
        { "cells": ["MonthYear", "Default", "Selected", "false · true", "2"] },
        { "cells": ["MonthYear", "Today", "None", "false · true", "2"] }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.0.0",
      "date": "August 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Consolidated rebuild — node 5943:41825",
      "rows": [
        {
          "body": "<strong>Two components became one.</strong> <code>Date Picker - Item</code> and <code>Month and Year Picker - Item</code> fold into this component as <code>Kind=Day</code> and <code>Kind=MonthYear</code>.",
          "delta": { "kind": "resolved", "label": "Family" }
        },
        {
          "body": "<strong>C2 — <code>Type</code> split into <code>Role</code> and <code>Selection</code>.</strong> Display role and selection state no longer compete for one setting.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C2 — value names cleaned.</strong> <code>Range (Middle)</code> → <code>Range-Middle</code>, <code>Month/Year</code> → <code>MonthYear</code>, booleans lowercased.",
          "delta": { "kind": "resolved", "label": "C2 resolved" }
        },
        {
          "body": "<strong>C1 — one anatomy.</strong> <code>container</code> and <code>Label Container</code> both became <code>Container</code>.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C1 — range strip rebuilt.</strong> One rectangle per range version, names matching their sides, 10px bleed throughout. Hidden range rectangles removed from the plain Selected cell.",
          "delta": { "kind": "resolved", "label": "C1 resolved" }
        },
        {
          "body": "<strong>C5 — Today+Selected dropped.</strong> The four versions rendered identically to Default+Selected; selection now wins outright.",
          "delta": { "kind": "resolved", "label": "C5 resolved" }
        },
        {
          "body": "<strong>C3 — Prev-Next token raised</strong> from the weakest step to the next, taking contrast from about 2.4:1 to about 4.0:1. Still short of 4.5:1.",
          "delta": { "kind": "partial", "label": "C3 partial" }
        },
        {
          "body": "<strong>C5 — touch target unchanged.</strong> The cell remains 32×32 against 44/48 minimums.",
          "delta": { "kind": "open", "label": "C5 open" }
        }
      ]
    }
  ]
};
