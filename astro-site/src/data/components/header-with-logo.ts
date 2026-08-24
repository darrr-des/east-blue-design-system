import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/header-with-logo.js`.
const headerWithLogoDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Surface',
        prop: 'surface',
        defaultValue: 'brand',
        options: [
          { value: 'brand', label: 'Brand' },
          { value: 'default', label: 'Default' },
        ],
      },
    ],
  },
];

export const headerWithLogo: ComponentData = {
  "meta": {
    "slug": "header-with-logo",
    "name": "Brand App Bar",
    "node": "4566:17590",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4566-17590",
    "description": "A wordmark-only app bar in brand and default surfaces, used where a screen needs identity rather than navigation.",
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
      "title": "Keep — confirmed standalone",
      "text": "Rebuilt on node <code>4566:17590</code> in the 2026 Working File and renamed <strong>Brand App Bar</strong>, which settles the original either/or in favour of keeping it separate from Title Bar. <code>Surface = Brand | Default</code> replaces the old <code>logo=dark|light</code> axis, the wordmark is a single swappable instance rather than two baked assets, and both variants are a clean 90px. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Brand app bar appears on splash, login, onboarding, and home screens — anywhere the brand identity should lead before page-specific navigation takes over.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"header-with-logo-demo-preview\"><div class=\"eb-preview eb-preview-header-logo eb-preview-header-logo--brand\"><div class=\"eb-preview-header-logo__mark\"><svg class=\"eb-preview-header-logo__glyph\" viewBox=\"0 0 28 28\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"14\" cy=\"14\" r=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"></circle><path d=\"M14 6 A8 8 0 1 1 8.5 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path><circle cx=\"19\" cy=\"9\" r=\"1.5\" fill=\"currentColor\"></circle></svg><span>GCash</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Surface</span><select id=\"header-with-logo-ctrl-surface\" class=\"demo-panel-select\" onchange=\"_headerWithLogoUpdate()\"><option value=\"brand\" selected=\"\">Brand</option><option value=\"default\">Default</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Drops onto any screen that needs brand identity rather than navigation — onboarding, splash, marketing surfaces. Two surfaces cover the light and dark contexts it appears on."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its surface fill and the logo instance. Nothing external required to render."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>Surface = Brand | Default</code> is PascalCase per §1 with Title Case values, and <code>LogoContainer</code> matches the naming convention the rest of the system uses. Dimensions are whole pixels."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "Composes the shared <code>GCash Logo</code> instance so a wordmark change propagates from one source, and sits as the top element on any screen. Its lack of action slots is deliberate — screens needing controls use Title Bar - App."
      }
    ],
    "behavior": [
      {
        "state": "Dark logo",
        "ios": "yes",
        "android": "yes",
        "property": "logo=dark",
        "notes": "Dark GCash mark on lighter brand surface."
      },
      {
        "state": "Light logo",
        "ios": "yes",
        "android": "yes",
        "property": "logo=light",
        "notes": "Light GCash mark on brand surface."
      },
      {
        "state": "Pressed",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not interactive."
      }
    ],
    "resolved": [
      {
        "headline": "Confirmed as a standalone component, renamed Brand App Bar.",
        "body": "v2.0: Rebuilt on node <code>4566:17590</code> in the 2026 Working File. The original assessment framed this as either/or — merge into Title Bar, or keep it separate and rename to <strong>Brand App Bar</strong>. The rename has shipped, which settles it: this stays its own component. A brand bar showing only the wordmark has a different job from a title bar carrying navigation, and folding it in would have meant a Title Bar variant that hides every control it exists to provide. (Family)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "\"Header\" prefix released.",
        "body": "v2.0: The name no longer collides with the three structurally different components that shared the prefix. Section Header keeps the generic name; this one says what it is. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>logo=dark|light</code> replaced by <code>Surface</code>.",
        "body": "v2.0: The axis now reads <code>Surface = Brand | Default</code>, describing the surface the bar sits on rather than the asset sitting on it — <code>#005CE5</code> with the light wordmark, or white with the blue one. That is the better of the two options the original assessment offered, since the logo treatment follows from the surface rather than being set independently of it. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Logo is a single swappable instance.",
        "body": "v2.0: Both variants carry a <code>GCash Logo</code> instance that changes appearance with the surface, rather than baking a dark and a light asset into the component. A wordmark update propagates from one source. (C6 · Composition)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Fractional height corrected.",
        "body": "v2.1: Both variants went 89.7466 → <code>90</code>. The stray sub-pixel value came from the logo instance driving the frame height; it now maps cleanly to a native layout value. (C4)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "<code>logo-container</code> renamed.",
        "body": "v2.1: → <code>LogoContainer</code>, matching the PascalCase convention the rest of the system settled on. It is also now the surface wrapper rather than just a logo holder, which the name reflects. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Control-free by design — Title Bar - App covers screens needing actions.",
        "body": "Confirmed intentional. The bar carries only a wordmark: no back control, no avatar, no trailing action. That is the point of a brand bar — an uncluttered mark, not a navigation surface. Any screen that needs a control reaches for <strong>Title Bar - App</strong> instead, which exists precisely to carry them. Recorded here so the absence of slots reads as a decision rather than an unfinished component, and so a designer who needs a control switches components rather than detaching this one. (C4 · Docs)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
"open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The schema is trivial once one does: a single <code>Surface</code> enum over a logo instance.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "dark-logo-variant",
        "demoKey": "hwl-dark",
        "demoControls": headerWithLogoDemoControls,
        "title": "Dark logo variant",
        "node": "18430:2876",
        "description": "Dark GCash mark on brand surface. Used where extra contrast is needed or on lighter brand tints.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-with-logo-spec-1\"><div class=\"eb-preview eb-preview-header-logo eb-preview-header-logo--brand\"><div class=\"eb-preview-header-logo__mark\"><svg class=\"eb-preview-header-logo__glyph\" viewBox=\"0 0 28 28\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"14\" cy=\"14\" r=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"></circle><path d=\"M14 6 A8 8 0 1 1 8.5 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path><circle cx=\"19\" cy=\"9\" r=\"1.5\" fill=\"currentColor\"></circle></svg><span>GCash</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "logo",
                "value": "dark",
                "mono": true,
                "prop": "surface"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "header/color/default/bg" },
              { "key": "Title", "value": "#0A2757", "token": "header/color/default/label-header" },
              { "key": "Description", "value": "#6780A9", "token": "header/color/default/description" },
              { "key": "Border", "value": "#E5EBF4", "token": "header/color/default/border" }
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
                "value": "88 (hug)",
                "mono": true
              },
              {
                "key": "Logo size",
                "value": "~120 × 32",
                "mono": true
              },
              {
                "key": "Alignment",
                "value": "center",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "N/A",
                "value": "Logo is SVG/vector, not text",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBLogoHeader</span><span class=\"syn-punc\">(</span>logo<span class=\"syn-punc\">: </span>gcashWordmark<span class=\"syn-punc\">)</span>\n    .<span class=\"syn-fn\">ebActions</span><span class=\"syn-punc\">(</span><span class=\"syn-punc\">[ ... ]</span><span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBLogoHeader</span><span class=\"syn-punc\">(</span>\n    logo <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ </span><span class=\"syn-type\">GCashLogo</span><span class=\"syn-punc\">() }</span><span class=\"syn-punc\">,</span>\n    actions <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ ... }</span>\n<span class=\"syn-punc\">)</span>"
      },
      {
        "cardKey": "light-logo-variant",
        "demoKey": "hwl-light",
        "demoControls": headerWithLogoDemoControls,
        "title": "Light logo variant",
        "node": "18430:2887",
        "description": "Light GCash mark on brand surface. The default variant for most branded screens.",
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-with-logo-spec-2\"><div class=\"eb-preview eb-preview-header-logo eb-preview-header-logo--brand\"><div class=\"eb-preview-header-logo__mark\"><svg class=\"eb-preview-header-logo__glyph\" viewBox=\"0 0 28 28\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"14\" cy=\"14\" r=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"></circle><path d=\"M14 6 A8 8 0 1 1 8.5 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path><circle cx=\"19\" cy=\"9\" r=\"1.5\" fill=\"currentColor\"></circle></svg><span>GCash</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "logo",
                "value": "light",
                "mono": true,
                "prop": "surface"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface bg", "value": "#FFFFFF", "token": "main/header/light/bg" },
              { "key": "Logo color", "value": "#005CE5", "token": "main/header/logo/brand" },
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
                "key": "Logo size",
                "value": "88 × 24",
                "mono": true
              },
              {
                "key": "Icon size",
                "value": "24 × 24",
                "mono": true
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "N/A",
                "value": "Logo only — no text",
                "mono": false
              }
            ]
          }
        ],
        "swift": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span>\n    logo<span class=\"syn-punc\">: </span><span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"gcash-logo\"</span><span class=\"syn-punc\">),</span>\n    appearance<span class=\"syn-punc\">: </span><span class=\"syn-punc\">.</span>light\n<span class=\"syn-punc\">)</span>",
        "compose": "<span class=\"syn-type\">EBHeader</span><span class=\"syn-punc\">(</span>\n    logo <span class=\"syn-eq\">=</span> <span class=\"syn-type\">R</span><span class=\"syn-punc\">.</span>drawable<span class=\"syn-punc\">.</span>gcash_logo<span class=\"syn-punc\">,</span>\n    appearance <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBHeaderAppearance</span><span class=\"syn-punc\">.</span>Light\n<span class=\"syn-punc\">)</span>"
      }
    ],
    colorsTables: [
      // Card 1 — Dark logo variant
      buildStatelessColorsTable({
        title: 'Dark Logo — Colors',
        description: 'GCash logo placed inside a dark logo container — used on light surfaces.',
        rows: [
          { role: 'Surface bg',     token: 'main/header-with-logo/light/bg',           value: '#FFFFFF' },
          { role: 'Logo container', token: 'main/header-with-logo/dark/logo-bg',       value: '#0A2757' },
          { role: 'Logo mark',      token: 'main/header-with-logo/dark/logo-mark',     value: '#FFFFFF' },
        ],
      }),
      // Card 2 — Light logo variant
      buildStatelessColorsTable({
        title: 'Light Logo — Colors',
        description: 'GCash logo placed inside a light logo container — used on brand-blue surfaces.',
        rows: [
          { role: 'Surface bg',     token: 'main/header-with-logo/dark/bg',            value: '#1972F9' },
          { role: 'Logo container', token: 'main/header-with-logo/light/logo-bg',      value: '#FFFFFF' },
          { role: 'Logo mark',      token: 'main/header-with-logo/light/logo-mark',    value: '#1972F9' },
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
          "figma": "(standalone component)",
          "swift": "<code>Title Bar / leading = logo</code>",
          "compose": "<code>EBTitleBar { EBLogo() }</code>"
        },
        {
          "figma": "<code>logo: dark | light</code>",
          "swift": "<code>EBLogo.theme: dark | light</code>",
          "compose": "<code>EBLogo(theme: .light)</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Logo a11y label",
        "ios": "Logo carries <code>.accessibilityLabel(\"GCash\")</code> — identify as brand, not decorative.",
        "android": "Logo carries <code>contentDescription = \"GCash\"</code>."
      },
      {
        "requirement": "Not a button",
        "ios": "The logo is not tappable by default; no button trait.",
        "android": "No <code>clickable</code> modifier unless a screen wires one up."
      },
      {
        "requirement": "Heading role",
        "ios": "App bar owns heading trait on its overall container.",
        "android": "Same — <code>semantics { heading() }</code> on the bar."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "\"Header\" prefix conflates with 3 other components. If kept, rename to <strong>Brand App Bar</strong>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "<code>logo=dark|light</code> names the asset, not the surface. Prefer <code>theme</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Surface bound to brand token."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Duplicates Title Bar scope. Merge rather than create a second app bar primitive."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Static bar."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Logo is a vector instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked on merge-vs-rename decision."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 2,
      "description": "",
      "columns": [
        "#",
        "Node",
        "logo",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "1",
            "<code>18430:2876</code>",
            "dark",
            "360 × 88"
          ]
        },
        {
          "cells": [
            "2",
            "<code>18430:2887</code>",
            "light",
            "360 × 88"
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
      "header": "Initial Assessment · node 18430:2875",
      "rows": [
        {
          "body": "<strong>Verdict: Consolidate</strong> — Merge into Title Bar as a <code>leading = logo</code> slot. Retire this file. <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Architecture"
          }
        },
        {
          "body": "<strong>If kept separate</strong> — Rename to <strong>Brand App Bar</strong>. Rename <code>logo=dark|light</code> to <code>theme=dark|light</code>. <span class=\"tag-open tag-c1 tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Naming"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on merge decision. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
