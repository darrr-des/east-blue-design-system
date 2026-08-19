import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/header-centered.js`.
const headerCenteredDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'type',
        prop: 'type',
        defaultValue: 'dark',
        options: [
          { value: 'dark', label: 'dark' },
          { value: 'light', label: 'light' },
        ],
      },
      {
        label: 'description',
        prop: 'desc',
        defaultValue: 'yes',
        options: [
          { value: 'yes', label: 'yes' },
          { value: 'no', label: 'no' },
        ],
      },
    ],
  },
];

export const headerCentered: ComponentData = {
  "meta": {
    "slug": "header-centered",
    "name": "Page Banner",
    "node": "4368:12839",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4368-12839",
    "description": "A header variant with the title centered, optional leading and trailing actions on either side.",
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
    "navGroup": "Header",
    "verdict": {
      "kind": "keep",
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>4368:12839</code> in the 2026 Working File as <strong>Page Banner</strong>, with <code>Surface = Brand | Default</code> replacing the old <code>type = dark | light</code>. Layer naming is now settled across both variants — <code>Content</code> wrapping <code>Title</code> and a <code>SubtitleRow</code> of <code>Label</code> and <code>Value</code> — which lets the title expose as a single text property and clears the legacy <code>#</code> prefix. The brand surface color and its alpha values are confirmed intentional, the remaining alignment difference is inert because the text node hugs its content, and an <code>Alignment</code> axis was decided against. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Page Banner sits at the top of a screen, modal, or feature card — centered, taking full width, setting the title of the surface below it.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"header-centered-demo-preview\"><div class=\"eb-preview eb-preview-header-centered eb-preview-header-centered--dark\"><p class=\"eb-preview-header-centered__title\">Label</p><p class=\"eb-preview-header-centered__sublabel\"><span class=\"eb-preview-header-centered__sublabel-key\">Label:</span><span class=\"eb-preview-header-centered__sublabel-value\">&nbsp;Add Content</span></p></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">type</span><select id=\"header-centered-ctrl-type\" class=\"demo-panel-select\" onchange=\"_headerCenteredUpdate()\"><option value=\"dark\" selected=\"\">dark</option><option value=\"light\">light</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><select id=\"header-centered-ctrl-desc\" class=\"demo-panel-select\" onchange=\"_headerCenteredUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Generic page banner — works at the top of any screen, modal or feature card. Nothing ties it to one surface."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its typography, fills and border. Nothing external required to render."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "The <em>Header</em> prefix, the appearance-named property and the layer naming are all resolved. <code>Surface = Brand | Default</code> is PascalCase per §1 with Title Case values per §5, and the text layers map onto the §3 vocabulary as <code>Title</code> · <code>Label</code> · <code>Value</code>, identically in both variants."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Drops into any screen, modal or card as a page title, and composes nothing it should not."
      }
    ],
    "behavior": [
      {
        "state": "Default (Brand)",
        "ios": "yes",
        "android": "yes",
        "property": "Surface=Brand",
        "notes": "White title on the brand surface."
      },
      {
        "state": "Default (Default)",
        "ios": "yes",
        "android": "yes",
        "property": "Surface=Default",
        "notes": "Dark title on the default white surface."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Banner is informational — no pressed state."
      },
      {
        "state": "Disabled",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not interactive."
      }
    ],
    "resolved": [
      {
        "headline": "Renamed to Page Banner.",
        "body": "v2.0: Rebuilt on node <code>4368:12839</code> in the 2026 Working File. The name no longer sits in the <em>Header</em> namespace that four structurally different components were sharing, and it says what the component is — a full-width banner setting the title of the surface below it, not a navigation bar. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>type = dark | light</code> replaced by <code>Surface</code>.",
        "body": "v2.0: The axis now reads <code>Surface = Brand | Default</code>, naming the surface role rather than the appearance that follows from it — the same shape Brand App Bar landed on, so the two read consistently across the family. PascalCase property per §1, Title Case values per §5. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Layer names settled across both variants.",
        "body": "v2.1: Verified on the live node. <code>header</code> → <code>Content</code>; the 22px title, previously <code>#name</code> in Brand and <code>#label</code> in Default, is now <code>Title</code> in both; <code>text-container</code> → <code>SubtitleRow</code>, holding <code>Label</code> and <code>Value</code>. Three problems closed at once: the cross-variant mismatch that stopped the title exposing as a single text property, the duplicate <code>#label</code> inside the Default variant, and the legacy <code>#</code> prefix. Names now follow the §3 vocabulary. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Brand surface color and its alpha values confirmed intentional.",
        "body": "v2.1: The brand fill <code>#1972F9</code> differs from Brand App Bar’s <code>#005CE5</code>, and the brand sub-row key and border are <code>#F6F9FD</code> at 72% and 24%. Confirmed by the owner as bound to generic tokens and deliberate rather than local overrides — the two surfaces serve different jobs, and a banner sitting above content is not required to match the app bar’s blue. Attested rather than verified: variable bindings and opacity tokens are not readable through the review tooling, so this is recorded on the owner’s confirmation. (C3 · Token)",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      },
      {
        "headline": "Sub-row alignment difference is inert.",
        "body": "v2.1: The sub-row key still reads <code>LEFT</code> on Brand and <code>CENTER</code> on Default, but the text node hugs its content — 36px wide for “Label:” inside a 119px row — so horizontal alignment inside it has nothing to distribute and produces no visual difference on either surface. A leftover value rather than a behavioural one, and nothing a native implementation has to reproduce. (C4)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "No <code>Alignment</code> property.",
        "body": "v2.1: Decided against. A centered banner is what the component is for; a left-aligned title is a different component’s job, and adding the axis would double the set to serve a case nobody has asked for. Closed rather than carried forward a third time. (Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Sub-row composition confirmed as intended.",
        "body": "v2.1: The <code>SubtitleRow</code> is present in both live variants; the owner confirms the current composition is the intended one, closing the question left over from the old <code>description = yes | no</code> control. Attested rather than verified — component property definitions are not readable through the review tooling. (Docs)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Place in the header family settled.",
        "body": "v2.1: Page Banner is confirmed a distinct component, not a variant of another. It sets the title of the surface below it; <strong>Section Header</strong> labels a section inside a scroll, <strong>Brand App Bar</strong> carries the wordmark, and <strong>Title Bar - App</strong> carries navigation. Four different jobs, four components, none folding into another. Siblings: <a href=\"#\" onclick=\"showPanelById('header');return false;\">Section Header</a> · <a href=\"#\" onclick=\"showPanelById('header-with-logo');return false;\">Brand App Bar</a> · <a href=\"#\" onclick=\"showPanelById('header-transaction');return false;\">Detail Hero</a>. (Family)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
"open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The schema is small once one does: a single <code>Surface</code> enum over a title and a sub-row.",
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
        "cardKey": "dark-/-brand-surface",
        "demoKey": "hc-dark",
        "demoControls": headerCenteredDemoControls,
        "title": "Dark / brand surface",
        "node": "18430:2859",
        "description": "White title on brand-blue surface. The \"hero\" variant — used for primary feature banners.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-centered-spec-1\"><div class=\"eb-preview eb-preview-header-centered eb-preview-header-centered--dark\"><p class=\"eb-preview-header-centered__title\">Label</p><p class=\"eb-preview-header-centered__sublabel\"><span class=\"eb-preview-header-centered__sublabel-key\">Label:</span><span class=\"eb-preview-header-centered__sublabel-value\">&nbsp;Add Content</span></p></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "type",
                "value": "dark",
                "mono": true,
                "prop": "type"
              },
              {
                "key": "description",
                "value": "yes",
                "mono": true,
                "prop": "desc"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Brand bg", "value": "#1972F9", "token": "header/color/brand/bg" },
              { "key": "Brand title", "value": "#FFFFFF", "token": "header/color/brand/label-header" },
              { "key": "Brand preamble", "value": "#FFFFFF", "token": "header/color/brand/label-preamble" },
              { "key": "Brand label", "value": "#F6F9FDB8 (72% alpha)", "token": "header/color/brand/label" },
              { "key": "Brand border", "value": "#F6F9FD3D (24% alpha)", "token": "header/color/brand/border" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Width",
                "value": "Fill",
                "mono": true
              },
              {
                "key": "Height",
                "value": "104 (hug)",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "space/space-24 space/space-16",
                "mono": true
              },
              {
                "key": "Gap",
                "value": "space/space-4",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title",
                "value": "Heading/L · Proxima Soft Bold 22",
                "mono": true
              },
              {
                "key": "Description",
                "value": "Body/S · BarkAda Semibold 14",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "center",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBCenteredHeader</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Page title\"</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.brand</span><span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebDescription</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Description body copy\"</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBCenteredHeader</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Page title\"</span><span class=\"syn-punc\">,</span>\n    style <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBHeaderStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">.Brand</span><span class=\"syn-punc\">,</span>\n    description <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Description body copy\"</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "light-/-default-surface",
        "demoKey": "hc-light",
        "demoControls": headerCenteredDemoControls,
        "title": "Light / default surface",
        "node": "18430:2865",
        "description": "Dark title on default surface. Used for modal sheet titles and subdued banners.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-centered-spec-2\"><div class=\"eb-preview eb-preview-header-centered eb-preview-header-centered--light\"><p class=\"eb-preview-header-centered__title\">Label</p><p class=\"eb-preview-header-centered__sublabel\"><span class=\"eb-preview-header-centered__sublabel-key\">Label:</span><span class=\"eb-preview-header-centered__sublabel-value\">&nbsp;Add Content</span></p></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "type",
                "value": "light",
                "mono": true,
                "prop": "type"
              },
              {
                "key": "description",
                "value": "yes",
                "mono": true,
                "prop": "desc"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface bg", "value": "#FFFFFF", "token": "main/header/light/bg" },
              { "key": "Title color", "value": "#0A2757", "token": "main/header/light/title" },
              { "key": "Icon color", "value": "#0A2757", "token": "main/header/light/icon" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "56",
                "mono": true
              },
              {
                "key": "Padding (h)",
                "value": "16",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "24 × 24",
                "mono": true
              },
              {
                "key": "Title gap",
                "value": "8",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Style",
                "value": "Heading/Small · Bold",
                "mono": true
              },
              {
                "key": "Font",
                "value": "Proxima Soft",
                "mono": true
              },
              {
                "key": "Size",
                "value": "18",
                "mono": true
              },
              {
                "key": "Line-height",
                "value": "24",
                "mono": true
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span>\n    title<span class=\"syn-punc\">: </span><span class=\"syn-str\">\"Account\"</span><span class=\"syn-punc\">,</span>\n    appearance<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>light<span class=\"syn-punc\">,</span>\n    centered<span class=\"syn-punc\">: </span><span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span>\n    title <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Account\"</span><span class=\"syn-punc\">,</span>\n    appearance <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBHeaderAppearance</span><span class=\"syn-punc\">.</span>Light<span class=\"syn-punc\">,</span>\n    centered <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">true</span>\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      // Card 1 — Dark / brand surface
      buildStatelessColorsTable({
        title: 'Dark — Colors',
        description: 'Brand-blue centered header used at the top of branded screens.',
        rows: [
          { role: 'Surface bg',  token: 'main/header-centered/dark/bg',     value: '#1972F9' },
          { role: 'Border',      token: 'main/header-centered/dark/border', value: '#F6F9FD @ 24%' },
          { role: 'Heading',     token: 'main/header-centered/dark/heading', value: '#FFFFFF' },
          { role: 'Description', token: 'main/header-centered/dark/description', value: '#FFFFFF @ 80%' },
        ],
      }),
      // Card 2 — Light / default surface
      buildStatelessColorsTable({
        title: 'Light — Colors',
        description: 'White centered header used on neutral surfaces.',
        rows: [
          { role: 'Surface bg',  token: 'main/header-centered/light/bg',     value: '#FFFFFF' },
          { role: 'Border',      token: 'main/header-centered/light/border', value: '#E5EBF4' },
          { role: 'Heading',     token: 'text/primary/headline/section',     value: '#0A2757' },
          { role: 'Description', token: 'text/primary/body/secondary',       value: '#6780A9' },
        ],
      }),
    ],
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "(implicit)",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "<code>description: boolean</code>",
          "swift": "<code>description?: String</code>",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "<code>type: dark | light</code>",
          "swift": "<code>surface: brand | default</code>",
          "compose": "<code>.ebSurface(.brand)</code> modifier"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Heading trait",
        "ios": "<code>.accessibilityAddTraits(.isHeader)</code> on the title.",
        "android": "<code>Modifier.semantics { heading() }</code> on the title."
      },
      {
        "requirement": "Contrast",
        "ios": "Brand surface: white on #005CE5 = 8.5:1 ✓. Default surface: #0A2757 on #FFFFFF = 15.4:1 ✓.",
        "android": "Same contrast ratios apply."
      },
      {
        "requirement": "Screen reader order",
        "ios": "Title → Description. VoiceOver reads in DOM order.",
        "android": "Same — TalkBack follows composition order."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Rename to <strong>Page Banner</strong>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Rename <code>type=dark|light</code> → <code>surface=brand|default</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Surface and text tokens bound."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps cleanly to a <code>EBPageBanner</code> view/composable."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Static — no interactive states."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "No assets."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Trivial once renamed."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 4,
      "description": "<code>type</code> × <code>description</code> = <strong>4 variants</strong>.",
      "columns": [
        "#",
        "Node",
        "type",
        "description",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>18430:2859</code>",
            "dark",
            "yes",
            "360 × 104"
          ]
        },
        {
          "cells": [
            "2",
            "<code>18430:2865</code>",
            "light",
            "yes",
            "360 × 104"
          ]
        },
        {
          "cells": [
            "3",
            "<code>18430:2871</code>",
            "dark",
            "no",
            "360 × 84"
          ]
        },
        {
          "cells": [
            "4",
            "<code>18430:2873</code>",
            "light",
            "no",
            "360 × 84"
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
      "header": "Initial Assessment · node 18430:2858",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Rename to <strong>Page Banner</strong>. Swap <code>type=dark|light</code> for <code>surface=brand|default</code>. <span class=\"tag-open tag-c1 tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Naming"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Trivial mapping once renamed. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
