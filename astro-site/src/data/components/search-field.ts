import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — toggles between Default and Filled. Wired to a
// future per-card update handler in `public/scripts/demos/search-field.js`.
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
          { value: 'filled', label: 'Filled' },
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
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Form Elements",
    "verdict": {
      "kind": "fix",
      "title": "Fix — one slot decision left",
      "text": "Rebuilt on node <code>4697:18836</code> in the 2026 Working File and confirmed as a standalone primitive. <code>State = Default | Focused | Error | Disabled</code>, the leading glyph is a library icon instance, the trailing slot holds real <code>Close</code> / <code>Error</code> icons, every layer carries a semantic name, and colors come from the shared generic token scale. The banded top/bottom border is intentional — a full-width element above content, not a field inside a form stack — and <code>Error</code> on the State axis is a documented exception. What remains is a <code>hasClearButton</code> boolean so the filled-but-unfocused state can be expressed, plus documentation."
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
        "rating": "partial",
        "note": "<code>TrailingIcon</code> is a real slot carrying swappable instances. Leading icon is a vector <code>Search Small</code> instance but is not slotted — locked to the bundled search glyph."
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
    "recommendations": [
      {
        "headline": "Model the filled-but-unfocused state.",
        "body": "With <code>State</code> as the only axis, a field that has a value but isn't focused has nowhere to live — <code>Default</code> is empty and <code>Focused</code> carries the caret. That state needs the clear button too. Either add a <code>hasValue</code> boolean, or document that the clear affordance is driven by value presence in code and the Figma variants depict only the canonical four.",
        "tag": "State"
      },
      {
        "headline": "Carry the same State / Status exception across Form Elements.",
        "body": "Search Field documents <code>Error</code> on the <code>State</code> axis as a deliberate exception. Amount Text Field has the identical divergence still open, and the rest of the family will hit it too. Record the exception once at family level — ideally in the Property Naming Guidelines themselves — so each component isn't re-litigating it.",
        "tag": "Family"
      },
      {
        "headline": "Document search semantics for native handoff.",
        "body": "iOS uses <code>.searchable(text:)</code> on a container (it is not a standalone view); Android uses Material 3 <code>SearchBar</code> (which expands into full-screen search) or a <code>TextField</code> with a leading search icon. Document both paths and the Enter-to-submit / Escape-to-clear keyboard contract.",
        "tag": "Docs"
      },
      {
        "headline": "Add <code>role=\"search\"</code> / search semantics and a labeled clear button.",
        "body": "The clear-button slot needs its own accessibility label (\"Clear search\"). iOS VoiceOver and Android TalkBack must announce the field as a search input, not a generic text field.",
        "tag": "A11y"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "srf-spec-default",
        "demoKey": "srf-default",
        "demoControls": searchFieldDemoControls,
        "title": "Default",
        "node": "50:78118",
        "description": "Empty state. Placeholder label at 50% opacity (#90A8D0), leading search glyph at 80% opacity.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant", "value": "Default" },
              { "key": "State",   "value": "Default", "prop": "state" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg",          "value": "#FFFFFF", "token": "input-field/default/bg" },
              { "key": "Border",      "value": "#D7E0EF", "token": "input-field/default/border" },
              { "key": "Text",        "value": "#0A2757", "token": "input-field/default/text" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "input-field/default/placeholder",
                "variants": { "state:filled": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Field height",  "value": "48px", "mono": true },
              { "key": "Padding H",     "value": "12px", "mono": true },
              { "key": "Padding V",     "value": "14px", "mono": true },
              { "key": "Border radius", "value": "radius/radius-2 (6px)", "mono": true },
              { "key": "Border",        "value": "1px solid", "mono": true },
              { "key": "Icon size",     "value": "20 × 20", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Value style", "value": "Primary/Label/Light/Small", "mono": true },
              { "key": "Value font",  "value": "BarkAda Semibold · 14 / 14 · +0.25", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSearchField</span><span class=\"syn-punc\">(</span>placeholder<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Search\"</span><span class=\"syn-punc\">, </span>text<span class=\"syn-punc\">: </span>$query<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSearchField</span><span class=\"syn-punc\">(</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Search\"</span><span class=\"syn-punc\">,</span>\n    query <span class=\"syn-eq\">=</span> query<span class=\"syn-punc\">,</span>\n    onQueryChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"360\" height=\"56\" viewBox=\"0 0 360 56\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"360\" height=\"56\" fill=\"#FFFFFF\"></rect><line x1=\"0\" y1=\"0.5\" x2=\"360\" y2=\"0.5\" stroke=\"rgba(246,249,253,0.8)\" stroke-width=\"1\"></line><line x1=\"0\" y1=\"55.5\" x2=\"360\" y2=\"55.5\" stroke=\"rgba(246,249,253,0.8)\" stroke-width=\"1\"></line><g transform=\"translate(22,16)\" opacity=\"0.8\"><circle cx=\"10\" cy=\"10\" r=\"7\" stroke=\"#6780A9\" stroke-width=\"2\" fill=\"none\"></circle><line x1=\"15.5\" y1=\"15.5\" x2=\"20.5\" y2=\"20.5\" stroke=\"#6780A9\" stroke-width=\"2\" stroke-linecap=\"round\"></line></g><text x=\"54\" y=\"32\" font-family=\"BarkAda, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#90A8D0\" fill-opacity=\"0.5\">Search</text><circle cx=\"324\" cy=\"28\" r=\"12\" fill=\"#6780A9\"></circle></svg>"
      },
      {
        "cardKey": "srf-spec-filled",
        "demoKey": "srf-filled",
        "demoControls": searchFieldDemoControls,
        "title": "Filled",
        "node": "50:78126",
        "description": "State shown when a query has been entered. Text uses #0A2757 at full opacity.",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Variant", "value": "Filled" },
              { "key": "State",   "value": "Filled", "prop": "state" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Bg",          "value": "#FFFFFF", "token": "input-field/default/bg" },
              { "key": "Border",      "value": "#D7E0EF", "token": "input-field/default/border" },
              { "key": "Text",        "value": "#0A2757", "token": "input-field/default/text" },
              { "key": "Placeholder", "value": "#90A8D0", "token": "input-field/default/placeholder",
                "variants": { "state:filled": { "hide": true } }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Field height",  "value": "48px", "mono": true },
              { "key": "Padding H",     "value": "12px", "mono": true },
              { "key": "Padding V",     "value": "14px", "mono": true },
              { "key": "Border radius", "value": "radius/radius-2 (6px)", "mono": true },
              { "key": "Border",        "value": "1px solid", "mono": true },
              { "key": "Icon size",     "value": "20 × 20", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Value style", "value": "Primary/Label/Light/Small", "mono": true },
              { "key": "Value font",  "value": "BarkAda Semibold · 14 / 14 · +0.25", "mono": true }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBSearchField</span><span class=\"syn-punc\">(</span>placeholder<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Search\"</span><span class=\"syn-punc\">, </span>text<span class=\"syn-punc\">: </span>$query<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebState</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.default</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBSearchField</span><span class=\"syn-punc\">(</span>\n    placeholder <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Search\"</span><span class=\"syn-punc\">,</span>\n    query <span class=\"syn-eq\">=</span> query<span class=\"syn-punc\">,</span>\n    onQueryChange <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ }</span><span class=\"syn-punc\">,</span>\n    state <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBFieldState</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Default</span>\n<span class=\"syn-punc\">)</span>",
        "previewHtml": "<svg width=\"360\" height=\"56\" viewBox=\"0 0 360 56\" fill=\"none\"><rect x=\"0\" y=\"0\" width=\"360\" height=\"56\" fill=\"#FFFFFF\"></rect><line x1=\"0\" y1=\"0.5\" x2=\"360\" y2=\"0.5\" stroke=\"rgba(246,249,253,0.8)\" stroke-width=\"1\"></line><line x1=\"0\" y1=\"55.5\" x2=\"360\" y2=\"55.5\" stroke=\"rgba(246,249,253,0.8)\" stroke-width=\"1\"></line><g transform=\"translate(22,16)\" opacity=\"0.8\"><circle cx=\"10\" cy=\"10\" r=\"7\" stroke=\"#6780A9\" stroke-width=\"2\" fill=\"none\"></circle><line x1=\"15.5\" y1=\"15.5\" x2=\"20.5\" y2=\"20.5\" stroke=\"#6780A9\" stroke-width=\"2\" stroke-linecap=\"round\"></line></g><text x=\"54\" y=\"32\" font-family=\"BarkAda, system-ui\" font-size=\"14\" font-weight=\"600\" fill=\"#0A2757\" fill-opacity=\"1\">Search</text><circle cx=\"324\" cy=\"28\" r=\"12\" fill=\"#6780A9\"></circle></svg>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Only a single variable mode (<code>default</code>) is bound on <code>main/search/*</code>. Focused, error, and disabled tokens do not exist yet.",
        "columns": [
          "DEFAULT",
          "FILLED"
        ],
        "rows": [
          {
            "role": "Background",
            "token": "main/search/color/default/bg",
            "values": [
              "#FFFFFF",
              "#FFFFFF"
            ]
          },
          {
            "role": "Border (top + bottom)",
            "token": "main/search/color/default/border",
            "values": [
              "#F6F9FD (80%)",
              "#F6F9FD (80%)"
            ]
          },
          {
            "role": "Placeholder",
            "token": "main/search/color/default/placeholder",
            "values": [
              "#90A8D0 (50%)",
              "–"
            ]
          },
          {
            "role": "Text",
            "token": "main/search/color/default/text",
            "values": [
              "–",
              "#0A2757"
            ]
          },
          {
            "role": "Icon (leading)",
            "token": "main/search/color/default/icon-leading",
            "values": [
              "#6780A9 (80%)",
              "#6780A9 (80%)"
            ]
          },
          {
            "role": "Icon (trailing)",
            "token": "main/search/color/default/icon-trailing",
            "values": [
              "#6780A9",
              "#6780A9"
            ]
          }
        ]
      },
      {
        "title": "Layout",
        "columns": [
          "Token"
        ],
        "rows": [
          {
            "role": "Container size",
            "token": "360 × 56 px",
            "values": [
              "—"
            ]
          },
          {
            "role": "Padding (horizontal)",
            "token": "22 px left / 24 px right",
            "values": [
              "— / space/space-24"
            ]
          },
          {
            "role": "Padding (vertical)",
            "token": "16 px",
            "values": [
              "space/space-16"
            ]
          },
          {
            "role": "Gap (icon ↔ text)",
            "token": "8 px",
            "values": [
              "space/space-8"
            ]
          },
          {
            "role": "Gap (trailing slot)",
            "token": "12 px",
            "values": [
              "space/space-12"
            ]
          },
          {
            "role": "Corner radius",
            "token": "0",
            "values": [
              "radius/radius-0"
            ]
          },
          {
            "role": "Border",
            "token": "1 px top + bottom only",
            "values": [
              "—"
            ]
          },
          {
            "role": "Leading icon size",
            "token": "24 × 24 px",
            "values": [
              "—"
            ]
          },
          {
            "role": "Trailing slot size",
            "token": "24 × 24 px",
            "values": [
              "—"
            ]
          }
        ]
      },
      {
        "title": "Typography",
        "columns": [],
        "rows": [
          {
            "role": "DS text style",
            "token": "Secondary/Bold/Base",
            "values": []
          },
          {
            "role": "Font family",
            "token": "BarkAda",
            "values": []
          },
          {
            "role": "Weight",
            "token": "Semibold (600)",
            "values": []
          },
          {
            "role": "Size",
            "token": "14 px (font-size-20)",
            "values": []
          },
          {
            "role": "Line height",
            "token": "20 px (leading-40)",
            "values": []
          },
          {
            "role": "Tracking",
            "token": "0 (tracking-normal)",
            "values": []
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
          "figma": "state = default / filled",
          "swift": "text: Binding&lt;String&gt;",
          "compose": "query: String"
        },
        {
          "figma": "— (missing)",
          "swift": ".focused() / @FocusState",
          "compose": "interactionSource"
        },
        {
          "figma": "— (missing)",
          "swift": ".disabled(true)",
          "compose": "enabled = false"
        },
        {
          "figma": "swapIcon (trailing)",
          "swift": "trailingIcon: Image?",
          "compose": "trailingIcon: @Composable"
        },
        {
          "figma": "label",
          "swift": "prompt: Text",
          "compose": "placeholder: String"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/FormElements/EBSearchField.swift",
        "compose": "android/components/form/EBSearchField.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Standalone Search Field",
        "swift": "<span class=\"typ\">EBSearchField</span>(<span class=\"str\">\"Search\"</span>, <span class=\"prp\">text</span>: $query,\n    <span class=\"prp\">onSubmit</span>: { runSearch(query) },\n    <span class=\"prp\">onClear</span>: { query = <span class=\"str\">\"\"</span> })",
        "compose": "<span class=\"typ\">EBSearchField</span>(\n    <span class=\"prp\">query</span> = query,\n    <span class=\"prp\">onQueryChange</span> = { query = it },\n    <span class=\"prp\">onSearch</span> = { runSearch(query) },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Search\"</span>\n)"
      },
      {
        "subheading": "Preferred: .searchable on a container",
        "swift": "<span class=\"typ\">NavigationStack</span> {\n    <span class=\"typ\">List</span>(results) { row <span class=\"kw\">in</span> <span class=\"typ\">Text</span>(row.title) }\n}\n.<span class=\"fn\">searchable</span>(<span class=\"prp\">text</span>: $query, <span class=\"prp\">prompt</span>: <span class=\"str\">\"Search\"</span>)",
        "compose": "<span class=\"typ\">SearchBar</span>(\n    <span class=\"prp\">query</span> = query,\n    <span class=\"prp\">onQueryChange</span> = { query = it },\n    <span class=\"prp\">onSearch</span> = { runSearch(query) },\n    <span class=\"prp\">active</span> = active,\n    <span class=\"prp\">onActiveChange</span> = { active = it },\n    <span class=\"prp\">placeholder</span> = { <span class=\"typ\">Text</span>(<span class=\"str\">\"Search\"</span>) },\n    <span class=\"prp\">leadingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.Search, <span class=\"kw\">null</span>) }\n) { <span class=\"cmt\">/* results */</span> }"
      },
      {
        "subheading": "Alternative: compose from EBInputField",
        "swift": "<span class=\"typ\">EBInputField</span>(<span class=\"str\">\"Search\"</span>, <span class=\"prp\">text</span>: $query)\n    .<span class=\"fn\">ebLeadingIcon</span>(<span class=\"typ\">Image</span>(<span class=\"str\">\"search\"</span>))\n    .<span class=\"fn\">ebTrailingIcon</span>(query.isEmpty ? <span class=\"kw\">nil</span> : <span class=\"typ\">Image</span>(<span class=\"str\">\"close\"</span>)) { query = <span class=\"str\">\"\"</span> }\n    .<span class=\"fn\">ebRole</span>(.search)",
        "compose": "<span class=\"typ\">EBInputField</span>(\n    <span class=\"prp\">value</span> = query,\n    <span class=\"prp\">onValueChange</span> = { query = it },\n    <span class=\"prp\">placeholder</span> = <span class=\"str\">\"Search\"</span>,\n    <span class=\"prp\">leadingIcon</span> = { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.Search, <span class=\"kw\">null</span>) },\n    <span class=\"prp\">trailingIcon</span> = <span class=\"kw\">if</span> (query.isNotEmpty()) {\n        { <span class=\"typ\">IconButton</span>({ query = <span class=\"str\">\"\"</span> }) { <span class=\"typ\">Icon</span>(<span class=\"typ\">Icons</span>.Default.Close, <span class=\"str\">\"Clear search\"</span>) } }\n    } <span class=\"kw\">else</span> <span class=\"kw\">null</span>\n)"
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
      "total": 2,
      "description": "A single <code>state</code> axis with two values. Both variants are 360 × 56 px.",
      "columns": [
        "state",
        "Dimensions",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "default",
            "360 × 56",
            "50:78118"
          ]
        },
        {
          "cells": [
            "filled",
            "360 × 56",
            "50:78126"
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
