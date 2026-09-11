import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — the four live states of node 4697:18836.
// Wired to updateSpecCard(demoKey, 'state', value) in
// public/scripts/demos/search-field.js.
const searchFieldDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'disabled', label: 'Disabled' },
          { value: 'focused', label: 'Focused' },
          { value: 'error', label: 'Error' },
        ],
      },
      {
        label: 'Label',
        prop: 'label',
        control: 'input',
        defaultValue: 'Search',
        options: [],
      },
      {
        label: 'hasClearButton',
        prop: 'hasClearButton',
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

export const searchField: ComponentData = {
  "meta": {
    "slug": "search-field",
    "name": "Search Field",
    "node": "4697:18836",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4697-18836",
    "description": "A search input field with a leading magnifying-glass icon and an optional clear button.",
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
    "navGroup": "Form Elements",
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>4697:18836</code> in the 2026 Working File and confirmed a standalone primitive. <code>State = Default | Focused | Error | Disabled</code>, the leading glyph is a library icon instance, the trailing slot holds real <code>Close</code> / <code>Error</code> icons and appears only where it does something, every layer carries a semantic name, and colors come from the shared generic token scale. The banded top/bottom border and the constant container chrome are both intentional — this is a full-width element above content, not a field inside a form stack. <code>Error</code> on the <code>State</code> axis is now a documented system-wide exception recorded in §6 of the Property Naming Guidelines rather than a per-component argument, and the filled-but-unfocused state is derived from value presence in code instead of doubling the variant set. Native search semantics, the keyboard contract and the accessibility requirements are all documented. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          <line x1=\"18\" y1=\"22\" x2=\"102\" y2=\"22\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".2\"></line>\n          <line x1=\"18\" y1=\"38\" x2=\"102\" y2=\"38\" stroke=\"currentColor\" stroke-width=\"1\" opacity=\".2\"></line>\n          <circle cx=\"26\" cy=\"30\" r=\"3\" stroke=\"currentColor\" stroke-width=\"1\" fill=\"none\" opacity=\".35\"></circle>\n          <rect x=\"34\" y=\"29\" width=\"30\" height=\"2\" rx=\"1\" fill=\"currentColor\" opacity=\".2\"></rect>\n          <rect x=\"20\" y=\"50\" width=\"80\" height=\"6\" rx=\"3\" fill=\"currentColor\" opacity=\".08\"></rect>\n          <rect x=\"20\" y=\"60\" width=\"60\" height=\"6\" rx=\"3\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"srf-demo-preview\"><svg width=\"360\" height=\"56\" viewBox=\"0 0 360 56\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"360\" height=\"56\" fill=\"#FFFFFF\"></rect><line x1=\"0\" y1=\"0.5\" x2=\"360\" y2=\"0.5\" stroke=\"rgba(246,249,253,0.8)\" stroke-width=\"1\"></line><line x1=\"0\" y1=\"55.5\" x2=\"360\" y2=\"55.5\" stroke=\"rgba(246,249,253,0.8)\" stroke-width=\"1\"></line><g transform=\"translate(22,16)\" opacity=\"0.8\"><circle cx=\"10\" cy=\"10\" r=\"7\" stroke=\"#6780A9\" stroke-width=\"2\" fill=\"none\"></circle><line x1=\"15.5\" y1=\"15.5\" x2=\"20.5\" y2=\"20.5\" stroke=\"#6780A9\" stroke-width=\"2\" stroke-linecap=\"round\"></line></g><text x=\"54\" y=\"32\" font-family=\"BarkAda, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" fill-opacity=\"0.5\">Search</text><circle cx=\"324\" cy=\"28\" r=\"12\" fill=\"#6780A9\"></circle></svg></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">state</span><select class=\"demo-panel-select\" onchange=\"_srfDemo.state=this.value;updateSearchFieldDemo()\"><option value=\"default\">default</option><option value=\"filled\">filled</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Purpose-built as a full-width element that sits above other content — the banded top/bottom chrome is the correct treatment for that role, confirmed by the component owner. Works anywhere that pattern applies. No size axis or dark mode yet, neither currently required."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "<code>TrailingIcon</code> holds real <code>Close</code> / <code>Error</code> icon instances, and all four interaction states carry their own label and glyph colors. Nothing external required to render."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Variant axis is <code>State = Default | Focused | Error | Disabled</code>, matching the sibling fields; every layer carries a semantic name (<code>Container</code> · <code>Value</code> · <code>TrailingIcon</code>); colors come from the shared generic token scale rather than a component-scoped namespace. <code>Error</code> on the State axis is a documented, deliberate exception."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "<code>TrailingIcon</code> is a real slot carrying swappable <code>Close</code> and <code>Error</code> instances. The leading glyph is deliberately not slotted — a search field’s search icon is part of what identifies the component, and making it swappable would turn this into a generic icon-prefixed input, which is <a href=\"#\" onclick=\"showPanelById('amount-text-field');return false;\">a different component</a>’s job."
      }
    ],
    "behavior": [
      {
        "state": "Default (empty)",
        "ios": "yes",
        "android": "yes",
        "property": "State=Default",
        "notes": "Placeholder label at <code>#90A8D0</code>, no trailing icon — nothing to clear in the empty state."
      },
      {
        "state": "Focused",
        "ios": "yes",
        "android": "yes",
        "property": "State=Focused",
        "notes": "Value at <code>#0A2757</code> with a caret. Container chrome is unchanged from Default — focus is conveyed by content alone, not by a ring or border shift."
      },
      {
        "state": "Error",
        "ios": "yes",
        "android": "yes",
        "property": "State=Error",
        "notes": "Value at <code>#0A2757</code>, trailing slot swaps to the red <code>Error</code> icon. The container border does not change color."
      },
      {
        "state": "Disabled",
        "ios": "yes",
        "android": "yes",
        "property": "State=Disabled",
        "notes": "Label and leading glyph mute to <code>#C2CFE5</code>, no trailing icon."
      }
    ],
    "resolved": [
      {
        "headline": "State coverage completed.",
        "body": "v2.0: Rebuilt on node <code>4697:18836</code>. <code>State = Default | Focused | Error | Disabled</code> now ships all four interaction states, matching the schema every sibling field uses. Replaces the old two-value <code>default/filled</code> axis. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Leading search glyph is now a vector instance.",
        "body": "v2.0: The raster <code>&lt;img&gt;</code> was replaced with a <code>Search Small</code> icon instance, restoring token-based recoloring and crisp rendering at any density. Applied as recommended. (C6 · Asset)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Trailing slot holds real icons.",
        "body": "v2.0: The <code>Placeholder</code> scaffolding wrapper is gone. <code>TrailingIcon</code> now carries a <code>Close</code> instance in Default, Focused and Disabled, and an <code>Error</code> instance in Error. Applied as recommended. (C1 · Slot)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "State axis no longer conflates content with interaction.",
        "body": "v2.0: <code>filled</code> was dropped from the axis rather than split into a boolean — content-filled is derived from whether a value is present, and the axis now carries interaction states only. Resolves the C2 finding, though by a different route than the recommended <code>isFilled</code> split. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Layer naming cleaned up.",
        "body": "v2.1: <code>search-field</code> → <code>Container</code>, <code>#search</code> → <code>Value</code>, <code>icon-container</code> → <code>TrailingIcon</code>, across all four variants, and the Error variant's placeholder junk text (<code>@@ . @#$!#  #_12</code>) was replaced with realistic sample content. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Clear button removed from the empty state.",
        "body": "v2.2: <code>TrailingIcon</code> was deleted from <code>State=Default</code>, so the empty field no longer offers a clear affordance with nothing to clear. <code>Value</code> widened from 250 to 282 to take the freed space. The trailing slot now appears only where it does something — <code>Close</code> in Focused, <code>Error</code> in Error. (C4 · Slot)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Disabled state's trailing icon resolved.",
        "body": "v2.2: Rather than muting the <code>Close</code> icon, <code>TrailingIcon</code> was removed from <code>State=Disabled</code> altogether — a disabled field has nothing to clear either. Consistent with the Default fix, and it removes the full-strength blue affordance that had read as tappable. (C5 · State)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Banded border confirmed intentional.",
        "body": "v2.3: Closed by owner decision — not a divergence. Search Field is a full-width element that sits above other content rather than inside a form stack, so the top/bottom rule is the correct chrome for that role; a rounded-rect stroke would imply an inline form field it isn't. The Form Elements siblings use a rounded rect because they sit within forms. Native implementations should render a full-bleed container with top and bottom dividers, not a bordered text field. (C4 · Family)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "<code>State=Error</code> exception documented.",
        "body": "v2.3: Closed on owner confirmation — <code>Error</code> stays on the <code>State</code> axis as a deliberate, documented exception to the State/Status rule, matching how most design systems model form-field validation. Keeps the set at 4 variants instead of the 6 a split would require. Recorded on the owner's word; component property descriptions are not readable from the assessment tooling. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Token namespace resolved — reverted to generic tokens.",
        "body": "v2.3: Closed by owner decision. The component-scoped <code>main/search/color/default/*</code> namespace was abandoned in favour of the shared generic tokens, so the single-sub-mode problem disappears — there is no longer a per-component token tier that has to enumerate every state. Colors now inherit from the system scale like the rest of Form Elements. (Token)",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Confirmed as a standalone primitive.",
        "body": "v2.3: Closed by owner decision — Search Field stays its own component rather than folding into Input Field as a composed variant. The full-width, above-content role and its banded chrome are genuinely distinct from a field inside a form stack, and merging would force the banded treatment to become a variant of a rounded-rect primitive. This also settles the token direction: <code>main/search/*</code> is expanded, not retired. (Composition)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Search icon delegated to the iconography team.",
        "body": "v2.3: Removed from this component's scope. The <code>Search Small</code> glyph is an instance of the shared icon library — the correct setup, so edits to the icon propagate everywhere it is used. The <code>shape_full</code> BOOLEAN_OPERATION lives in the library source component (<code>4629:59009</code>), not in Search Field, so flattening it is the icon owner's call and affects every consumer equally. No action here. (C6)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Filled-but-unfocused state documented rather than added as a variant.",
        "body": "v2.4: The clear affordance is driven by value presence in code, not by a Figma variant. <code>State</code> stays a pure interaction axis of four; a field holding a value while unfocused renders as <code>Default</code> chrome with the <code>Value</code> color of <code>Focused</code> (<code>#0A2757</code>) and the trailing <code>Close</code> icon shown. Adding a <code>hasValue</code> boolean would have doubled the set to depict something the runtime already derives from whether the text is empty. Native implementations should show the clear control whenever the bound text is non-empty, regardless of focus. (State · Docs)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "State / Status exception recorded at family level.",
        "body": "v2.4: Written into <strong>§6 of the Property Naming Guidelines</strong> rather than re-argued per component. Text-entry components may carry <code>Error</code> on the <code>State</code> axis; everything else keeps <code>State</code> (interaction) and <code>Status</code> (system report) on separate axes. The entry names the three reasons — a field in error is in a distinct interaction state, splitting multiplies variants for a combination that does not occur at design time, and every major system models validation this way — and lists the components covered: Search Field, Amount Text Field, Text Area and future text-entry siblings. <a href=\"#\" onclick=\"showPanelById('amount-text-field');return false;\">Amount Text Field</a> had already settled the same question on its own page; the guideline entry now carries it once so no third component has to. (Family · Docs)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Native search semantics documented.",
        "body": "v2.4: The two platforms model search differently and neither maps to a plain text field. <strong>iOS</strong>: <code>.searchable(text:)</code> is a modifier applied to a <code>NavigationStack</code> or <code>List</code>, not a standalone view — the system owns placement, the cancel button and the scroll-to-reveal behavior, so a hand-built field should not be substituted. <strong>Android</strong>: Material 3 offers <code>SearchBar</code>, which expands into a full-screen search surface with its own result list, or a plain <code>TextField</code> with a leading search icon where inline search is wanted. Search Field’s banded full-width chrome maps to the latter. <strong>Keyboard contract</strong>: Enter submits (<code>onSubmit</code> / <code>ImeAction.Search</code>), Escape or the clear control empties the field and returns focus to it, and the field never submits on every keystroke unless the screen is explicitly live-filtering. (Docs)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "Search and clear-button accessibility documented.",
        "body": "v2.4: The field must announce as a search input rather than a generic text field — <code>.accessibilityAddTraits(.isSearchField)</code> on iOS, <code>Modifier.semantics { role = Role.SearchField }</code> or the equivalent <code>contentDescription</code> on Android — so VoiceOver and TalkBack read it correctly and users can jump to it by type. The trailing control needs its own label, <strong>“Clear search”</strong>, not the icon name; it is a button, not decoration, and must be reachable and at least 44×44pt / 48×48dp as a touch target even though the glyph is 24×24. In <code>Disabled</code> the field should be announced as dimmed rather than hidden from the tree. (A11y)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Container chrome confirmed constant across states.",
        "body": "v2.4: The border stays <code>#E5EBF4</code> in all four states — focus is carried by the caret and the clear control, error by the trailing icon. Confirmed intentional: Search Field is a full-width band above content rather than a field inside a form, so a focus ring or an error-colored border would read as an inline form field it is not. Native implementations should follow suit and convey focus and error through content rather than the container. Recorded because a reviewer comparing this to the Form Elements siblings will notice the difference and should find the reasoning rather than re-open it. (C5 · Docs)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      }
    ],
"open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The structural blockers are cleared: the property schema is a clean <code>State</code> enum and every layer is semantically named.",
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
        "cardKey": "srf-spec-main",
        "demoKey": "main",
        "demoControls": searchFieldDemoControls,
        "title": "Search Field",
        "node": "4697:18836",
        "description": "",
        "previewHtml": "<div id=\"search-field-spec-main\"><svg width=\"360\" height=\"56\" viewBox=\"0 0 360 56\" fill=\"none\" role=\"img\" aria-label=\"Search field, default\"><rect x=\"0\" y=\"0\" width=\"360\" height=\"56\" fill=\"#FFFFFF\"/><line x1=\"0\" y1=\"0.5\" x2=\"360\" y2=\"0.5\" stroke=\"#E5EBF4\" stroke-width=\"1\"/><line x1=\"0\" y1=\"55.5\" x2=\"360\" y2=\"55.5\" stroke=\"#E5EBF4\" stroke-width=\"1\"/><g transform=\"translate(22,16)\" fill=\"none\" stroke=\"#445C85\" stroke-width=\"2\"><circle cx=\"10.5\" cy=\"10.5\" r=\"6.5\"/><line x1=\"15.4\" y1=\"15.4\" x2=\"20.5\" y2=\"20.5\" stroke-linecap=\"round\"/></g><text x=\"54\" y=\"33\" font-family=\"BarkAda, system-ui, sans-serif\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\">Search</text></svg></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "State", "value": "Default", "prop": "state" },
              { "key": "Label", "value": "Search", "prop": "label" },
              { "key": "hasClearButton", "value": "True", "prop": "hasClearButton" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Band", "value": "#FFFFFF", "token": "surface/default" },
              { "key": "Border (top + bottom)", "value": "#E5EBF4", "token": "border/subtle" },
              { "key": "Leading glyph", "value": "#445C85", "token": "icon/secondary",
                "variants": { "state:disabled": { "value": "#C2CFE5", "token": "icon/disabled" } } },
              { "key": "Label", "value": "#90A8D0", "token": "text/placeholder",
                "variants": {
                  "state:focused": { "value": "#0A2757", "token": "text/primary" },
                  "state:error": { "value": "#0A2757", "token": "text/primary" },
                  "state:disabled": { "value": "#C2CFE5", "token": "text/disabled" }
                } },
              { "key": "Trailing icon", "value": "–", "token": "–",
                "variants": {
                  "state:focused": { "value": "#025AE9", "token": "icon/interactive" },
                  "state:error": { "value": "#D61B2C", "token": "icon/error" }
                } }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Label", "value": "—", "mono": true }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "56px", "mono": true },
              { "key": "Width", "value": "360px (fill)", "mono": true },
              { "key": "Radius", "value": "0px", "mono": true },
              { "key": "Padding H", "value": "22px / 24px", "mono": true },
              { "key": "Padding V", "value": "16px", "mono": true },
              { "key": "Gap", "value": "8px", "mono": true },
              { "key": "Alignment", "value": "—", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSearchField</span><span class=\"syn-punc\">(</span>placeholder<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Search\"</span><span class=\"syn-punc\">, </span>text<span class=\"syn-punc\">: </span>$query<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSearchField</span><span class=\"syn-punc\">(</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Search\"</span><span class=\"syn-punc\">,</span>\n    query <span class=\"syn-eq\">=</span> query<span class=\"syn-punc\">,</span>\n    onQueryChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    hasClearButton <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span>Default\n<span class=\"syn-punc\">)</span>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off node <code>4697:18836</code>. Colors come from the shared generic token scale. The band and its border are constant across all four states: focus is carried by the caret and the clear control, error by the trailing glyph. Token paths are indicative pending a variable-binding read, which the review tooling cannot perform.",
        "columns": ["Token", "Value"],
        "rows": [
          { "role": "Default", "token": "Band", "values": ["surface/default", "#FFFFFF"] },
          { "role": "—", "token": "Border (top + bottom)", "values": ["border/subtle", "#E5EBF4"] },
          { "role": "—", "token": "Leading glyph", "values": ["icon/secondary", "#445C85"] },
          { "role": "—", "token": "Label", "values": ["text/placeholder", "#90A8D0"] },
          { "role": "Disabled", "token": "Leading glyph", "values": ["icon/disabled", "#C2CFE5"] },
          { "role": "—", "token": "Label", "values": ["text/disabled", "#C2CFE5"] },
          { "role": "Focused", "token": "Label", "values": ["text/primary", "#0A2757"] },
          { "role": "—", "token": "Trailing icon (Close)", "values": ["icon/interactive", "#025AE9"] },
          { "role": "Error", "token": "Label", "values": ["text/primary", "#0A2757"] },
          { "role": "—", "token": "Trailing icon (Error)", "values": ["icon/error", "#D61B2C"] }
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
          "figma": "State = Default | Disabled | Focused | Error",
          "swift": ".ebState(.default) · .disabled(true) · @FocusState",
          "compose": "state = EBFieldState.Default · enabled = false · interactionSource"
        },
        {
          "figma": "Label <em>(text)</em>",
          "swift": "EBSearchField(placeholder:)",
          "compose": "placeholder: String"
        },
        {
          "figma": "hasClearButton <em>(boolean)</em>",
          "swift": ".ebClearButton(_ show: Bool)",
          "compose": "hasClearButton: Boolean"
        },
        {
          "figma": "— <em>no Figma property</em>",
          "swift": "text: Binding&lt;String&gt;",
          "compose": "query: String + onQueryChange: (String) -&gt; Unit"
        }
      ]
    },
    "usageSnippets": [
      {
        "subheading": "Standalone search field",
        "swift": "<span class=\"typ\">EBSearchField</span>(<span class=\"str\">\"Search\"</span>, <span class=\"prp\">text</span>: $query)\n    .<span class=\"fn\">ebState</span>(<span class=\"dot\">.default</span>)\n    .<span class=\"prp\">onSubmit</span> { runSearch(query) }",
        "compose": "<span class=\"typ\">EBSearchField</span>(\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Search\"</span>,\n    <span class=\"prp\">query</span> = query,\n    <span class=\"prp\">onQueryChange</span> = { query = it },\n    <span class=\"prp\">onSearch</span> = { runSearch(query) }\n)"
      },
      {
        "subheading": "Without the clear button",
        "swift": "<span class=\"typ\">EBSearchField</span>(<span class=\"str\">\"Search\"</span>, <span class=\"prp\">text</span>: $query)\n    .<span class=\"fn\">ebClearButton</span>(<span class=\"kw\">false</span>)",
        "compose": "<span class=\"typ\">EBSearchField</span>(\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Search\"</span>,\n    <span class=\"prp\">query</span> = query,\n    <span class=\"prp\">onQueryChange</span> = { query = it },\n    <span class=\"prp\">hasClearButton</span> = <span class=\"kw\">false</span>\n)"
      },
      {
        "subheading": "Error state",
        "swift": "<span class=\"typ\">EBSearchField</span>(<span class=\"str\">\"Search\"</span>, <span class=\"prp\">text</span>: $query)\n    .<span class=\"fn\">ebState</span>(<span class=\"dot\">.error</span>)",
        "compose": "<span class=\"typ\">EBSearchField</span>(\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Search\"</span>,\n    <span class=\"prp\">query</span> = query,\n    <span class=\"prp\">onQueryChange</span> = { query = it },\n    <span class=\"prp\">state</span> = <span class=\"typ\">EBFieldState</span>.Error\n)"
      },
      {
        "subheading": "Disabled",
        "swift": "<span class=\"typ\">EBSearchField</span>(<span class=\"str\">\"Search\"</span>, <span class=\"prp\">text</span>: $query)\n    .<span class=\"fn\">disabled</span>(<span class=\"kw\">true</span>)",
        "compose": "<span class=\"typ\">EBSearchField</span>(\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Search\"</span>,\n    <span class=\"prp\">query</span> = query,\n    <span class=\"prp\">onQueryChange</span> = { query = it },\n    <span class=\"prp\">enabled</span> = <span class=\"kw\">false</span>\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Minimum touch target",
        "ios": "44 × 44 pt (container is 56pt ✓)",
        "android": "48 × 48 dp (container is 56dp ✓)"
      },
      {
        "requirement": "Search role / trait",
        "ios": "<code>.searchable</code> or <code>.accessibilityAddTraits(.isSearchField)</code>",
        "android": "<code>SearchBar</code> sets role automatically, else <code>semantics { role = Role.TextField; contentType = ContentType.SearchQuery }</code>"
      },
      {
        "requirement": "Clear button label",
        "ios": "<code>.accessibilityLabel(\"Clear search\")</code>",
        "android": "<code>contentDescription = \"Clear search\"</code>"
      },
      {
        "requirement": "Submit / Enter",
        "ios": "<code>.submitLabel(.search)</code> + <code>onSubmit</code>",
        "android": "<code>keyboardOptions = KeyboardOptions(imeAction = ImeAction.Search)</code>"
      },
      {
        "requirement": "Escape to clear",
        "ios": "Hardware keyboard: handle in <code>onKeyPress(.escape)</code>",
        "android": "Handle in <code>onKeyEvent</code> for keyboard users"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Search Field for free-text query input that filters or retrieves results. Show the clear (X) button only when the field has content.",
        "dontText": "Use Search Field for destinations that don't actually filter or search. Use Input Field for generic text entry."
      },
      {
        "doText": "Pair with a results region below the field and announce result counts to assistive tech when the query updates.",
        "dontText": "Ship the placeholder circle in the trailing slot — always swap to a real Clear / Cancel icon before publishing a screen."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Container</code> · <code>Value</code> · <code>TrailingIcon</code> — every layer semantically named, scaffolding removed."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>State = Default | Focused | Error | Disabled</code> matches the sibling axis. Remaining: <code>Error</code> is a Status value on the State axis."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All visible colors bound to <code>main/search/color/default/*</code>, but only a <code>default</code> sub-mode exists — no tokens for focused/error/disabled."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Banded border is intentional — render as a full-bleed container with top/bottom dividers, not a bordered text field. Remaining: <code>role=search</code> semantics undocumented."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All four states ship, each with correct trailing affordance. Remaining: filled-but-unfocused isn't modeled."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Leading glyph is a <code>Search Small</code> instance from the shared icon library, so icon edits propagate. The <code>shape_full</code> boolean op lives in the library source, outside this component's scope."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked — no native library exists yet. The structural blockers (C1/C5/C6) are now cleared."
      }
    ],
    "codeConnect": [
      {
        "aspect": "Property naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>State</code> enum maps cleanly. Open question: whether <code>Error</code> belongs on a separate <code>Status</code> axis"
      },
      {
        "aspect": "State coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default / Focused / Error / Disabled all ship"
      },
      {
        "aspect": "Icon quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Vector leading glyph and real trailing icons; <code>shape_full</code> boolean op remains"
      },
      {
        "aspect": "Native component file",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "EBSearchField.swift / EBSearchField.kt not yet created"
      }
    ],
    "variants": {
      "total": 4,
      "description": "A single <code>State</code> axis with four values, all 360 × 56. <code>Label</code> (text) and <code>hasClearButton</code> (boolean) are component properties rather than variant axes, so they do not multiply the count — 4 variants cover the set.",
      "columns": [
        "State",
        "Dimensions",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "360 × 56",
            "4697:18837"
          ]
        },
        {
          "cells": [
            "Disabled",
            "360 × 56",
            "4706:18270"
          ]
        },
        {
          "cells": [
            "Focused",
            "360 × 56",
            "4706:18282"
          ]
        },
        {
          "cells": [
            "Error",
            "360 × 56",
            "4706:18328"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.5",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Style + Code tabs rebuilt against node 4697:18836",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt as a single card</strong> — one spec card driven by a panel mirroring the Figma property panel: <code>State</code> (select), <code>Label</code> (text input), <code>hasClearButton</code> (toggle). Replaces four fixed cards. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong><code>hasClearButton</code> constrained to real variants</strong> — the toggle is enabled only on <code>Focused</code>, the one variant carrying a <code>Close</code> control. <code>Default</code> and <code>Disabled</code> have no <code>TrailingIcon</code> layer, and <code>Error</code> holds the error glyph. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong>Specs re-measured from the node</strong> — band 56 (was 48), leading glyph 24 × 24 (was 20 × 20), border <code>#E5EBF4</code> (was <code>#D7E0EF</code>), value BarkAda 14 / 20 tracking 0 (was 14 / 14 · +0.25). Banded top + bottom border confirmed by export. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Style"
          }
        },
        {
          "body": "<strong>Property mapping corrected</strong> — the retired <code>state = default / filled</code> axis and a non-existent <code>swapIcon</code> row are gone, along with two rows whose Figma column read <code>— (missing)</code>. Now maps the three real properties plus the value binding. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Code"
          }
        },
        {
          "body": "<strong>Usage snippets and variants inventory updated</strong> — four snippets replacing two, and the inventory corrected from <code>total: 2</code> to 4, noting that <code>Label</code> and <code>hasClearButton</code> are component properties rather than variant axes. <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Code"
          }
        }
      ]
    },
    {
      "version": "2.4",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Documentation pass — remaining recommendations closed",
      "rows": [
        {
          "body": "<strong>Filled-but-unfocused state documented</strong> rather than added as a variant — the clear affordance is driven by value presence in code; <code>State</code> stays a pure interaction axis of four. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "State"
          }
        },
        {
          "body": "<strong>State / Status exception recorded at family level</strong> — written into §6 of the Property Naming Guidelines, so text-entry components may carry <code>Error</code> on <code>State</code> without each one re-arguing it. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Native search semantics documented</strong> — iOS <code>.searchable(text:)</code> is a container modifier, not a standalone view; Android splits between M3 <code>SearchBar</code> and a <code>TextField</code>. Enter / Escape contract recorded. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Accessibility documented</strong> — search role/trait, a “Clear search” label for the trailing control, and 44 × 44pt / 48 × 48dp touch targets despite the 24 × 24 glyph. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Container chrome confirmed constant</strong> — the border stays <code>#E5EBF4</code> in all four states; focus is carried by the caret and clear control, error by the trailing glyph. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        }
      ]
    },
    {
      "version": "2.3",
      "date": "September 2026",
      "kind": "minor",
      "kindLabel": "Minor",
      "header": "Owner decisions recorded",
      "rows": [
        {
          "body": "<strong>Banded border confirmed intentional</strong> — a full-width element above content, not a field inside a form stack. A rounded-rect stroke would imply an inline form field it is not. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C4"
          }
        },
        {
          "body": "<strong><code>State=Error</code> exception documented</strong> — <code>Error</code> stays on the <code>State</code> axis as a deliberate exception, keeping the set at 4 variants. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Token namespace resolved</strong> — the component-scoped namespace was abandoned in favour of the shared generic tokens, so the single-sub-mode problem disappears. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Confirmed a standalone primitive</strong> — stays its own component rather than folding into Input Field as a composed variant. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C4"
          }
        },
        {
          "body": "<strong>Search icon delegated</strong> — the glyph is an instance of the shared icon library, so the <code>shape_full</code> boolean is the icon owner’s call and affects every consumer equally. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6"
          }
        }
      ]
    },
    {
      "version": "2.2",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Trailing slot corrected",
      "rows": [
        {
          "body": "<strong>Clear button removed from the empty state</strong> — <code>TrailingIcon</code> deleted from <code>State=Default</code>, so an empty field no longer offers a clear affordance with nothing to clear. <code>Value</code> widened 250 → 282. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C4"
          }
        },
        {
          "body": "<strong>Disabled trailing icon resolved</strong> — removed rather than muted; a disabled field has nothing to clear either, and the full-strength blue had read as tappable. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        }
      ]
    },
    {
      "version": "2.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Layer naming",
      "rows": [
        {
          "body": "<strong>Layer naming cleaned up</strong> — <code>search-field</code> → <code>Container</code>, <code>#search</code> → <code>Value</code>, <code>icon-container</code> → <code>TrailingIcon</code> across all four variants, and the Error variant’s placeholder junk text replaced with realistic sample content. <span class=\"tag-fixed\">Resolved</span>",
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
      "header": "Rebuilt on node 4697:18836 — 2026 Working File",
      "rows": [
        {
          "body": "<strong>State coverage completed</strong> — <code>State = Default | Focused | Error | Disabled</code> ships all four interaction states, replacing the two-value <code>default/filled</code> axis. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C5"
          }
        },
        {
          "body": "<strong>Leading glyph is a vector instance</strong> — the raster <code>&lt;img&gt;</code> replaced with a <code>Search Small</code> icon instance, restoring token-based recolouring. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C6"
          }
        },
        {
          "body": "<strong>Trailing slot holds real icons</strong> — the <code>Placeholder</code> scaffolding is gone; <code>TrailingIcon</code> carries <code>Close</code> and <code>Error</code> instances. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C1"
          }
        },
        {
          "body": "<strong><code>state</code> axis no longer conflates content with interaction</strong> — <code>filled</code> dropped rather than split into a boolean; content-filled is derived from value presence. <span class=\"tag-fixed\">Resolved</span>",
          "delta": {
            "kind": "resolved",
            "label": "C2"
          }
        }
      ]
    },
    {
      "version": "1.0.0",
      "date": "April 2026",
      "kind": "major",
      "kindLabel": "Major",
      "header": "Initial Assessment · node 18577:14520",
      "rows": [
        {
          "body": "<strong>Component assessed</strong> — 2 variants documented (<code>state=default/filled</code>). Part of Form Elements group. Verdict: Restructure / Requires Rework.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "open",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>State coverage incomplete</strong> — only default and filled; focused, error, disabled missing.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Leading glyph is raster</strong> — <code>shape_full</code> rendered via <code>img</code>, not a vector instance.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Trailing slot ships Placeholder wrapper</strong> — unresolved <code>Placeholder &gt; icon-placeholder</code> circle rather than a real Clear icon.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1 Open"
          }
        },
        {
          "body": "<strong><code>state</code> axis conflates content and interaction</strong> — <code>default/filled</code> is a derived content signal, not a state-machine value.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>Banded border diverges from family</strong> — top+bottom only, <code>radius-0</code>. Siblings use full rounded-rect stroke at 6px.\n          <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — not registered. Blocked by C1/C2/C5/C6.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
