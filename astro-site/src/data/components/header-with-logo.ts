import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/header-with-logo.js`.
const headerWithLogoDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'logo',
        prop: 'theme',
        defaultValue: 'light',
        options: [
          { value: 'light', label: 'light' },
          { value: 'dark', label: 'dark' },
        ],
      },
    ],
  },
];

export const headerWithLogo: ComponentData = {
  "meta": {
    "slug": "header-with-logo",
    "name": "Header - With Logo",
    "node": "18430:2875",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18430-2875",
    "description": "A header variant featuring the GCash wordmark instead of a title; trailing actions optional.",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Header",
    "verdict": {
      "kind": "restructure",
      "title": "Consolidate — merge into Title Bar",
      "text": "This component solves the same problem as Title Bar (<code>23:175148</code>) but swaps the title text for a logo. Rather than maintain two app-bar components, add a <code>leading = title | logo</code> slot to Title Bar and retire this file. One app bar primitive, two behaviours. See <a href=\"/components/header\">Header family restructure</a> for the full plan."
    }
  },
  "overview": {
    "inContextNote": "Brand app bar appears on splash, login, onboarding, and home screens — anywhere the brand identity should lead before page-specific navigation takes over.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"header-with-logo-demo-preview\"><div class=\"eb-preview eb-preview-header-logo\"><div class=\"eb-preview-header-logo__mark eb-preview-header-logo__mark--light\"><svg class=\"eb-preview-header-logo__glyph\" viewBox=\"0 0 28 28\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"14\" cy=\"14\" r=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"></circle><path d=\"M14 6 A8 8 0 1 1 8.5 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path><circle cx=\"19\" cy=\"9\" r=\"1.5\" fill=\"currentColor\"></circle></svg><span>GCash</span></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">logo</span><select id=\"header-with-logo-ctrl-theme\" class=\"demo-panel-select\" onchange=\"_headerWithLogoUpdate()\"><option value=\"light\" selected=\"\">light</option><option value=\"dark\">dark</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "partial",
        "note": "Serves a narrow role that overlaps entirely with Title Bar. Two components for \"top app bar\" is one too many."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its surface, logo asset, and layout."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Duplicates Title Bar's scope. \"Header\" prefix conflates with 3 structurally different components."
      },
      {
        "name": "Composable",
        "rating": "warn",
        "note": "No leading/trailing action slots (back button, profile avatar, etc.) — only a logo. If the screen needs navigation, consumers must switch to Title Bar, losing the logo."
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
    "resolved": [],
    "open": [
      {
        "headline": "Consolidate into Title Bar.",
        "body": "Duplicates app-bar scope. Add <code>leading = title | logo</code> slot to Title Bar and retire this file.",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "\"Header\" prefix",
        "body": "conflates with 3 structurally different components. If kept as a separate component, rename to <strong>Brand App Bar</strong>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>logo=dark|light</code>",
        "body": "names the asset, not the surface. Should be <code>theme = dark | light</code> or tied to the surrounding surface token.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "No Code Connect mapping.",
        "body": "",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Merge into Title Bar.",
        "body": "Add a <code>leading</code> slot to Title Bar that accepts either a title string or a logo instance. One app bar component, two behaviours. Eliminates \"which component do I use?\" friction.",
        "tag": "Family"
      },
      {
        "headline": "If kept separate, rename to Brand App Bar.",
        "body": "Frees the \"Header\" namespace and signals the narrow branded-surface role.",
        "tag": "Rename"
      },
      {
        "headline": "Use a single Logo component",
        "body": "as the visual — don't bake dark/light as a Header-level property. The Logo component should own its theme variants and be instance-swapped inside the app bar.",
        "tag": "Composition"
      },
      {
        "headline": "See siblings:",
        "body": "<a href=\"#\" onclick=\"showPanelById('header');return false;\">Header</a>, <a href=\"#\" onclick=\"showPanelById('header-centered');return false;\">Header - Centered</a>, <a href=\"#\" onclick=\"showPanelById('header-transaction');return false;\">Header - Transaction</a>, <a href=\"#\" onclick=\"showPanelById('title-bar');return false;\">Title Bar</a> (merge target).",
        "tag": "Family"
      }
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
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-with-logo-spec-1\"><div class=\"eb-preview eb-preview-header-logo\"><div class=\"eb-preview-header-logo__mark eb-preview-header-logo__mark--dark\"><svg class=\"eb-preview-header-logo__glyph\" viewBox=\"0 0 28 28\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"14\" cy=\"14\" r=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"></circle><path d=\"M14 6 A8 8 0 1 1 8.5 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path><circle cx=\"19\" cy=\"9\" r=\"1.5\" fill=\"currentColor\"></circle></svg><span>GCash</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "logo",
                "value": "dark",
                "mono": true,
                "prop": "theme"
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
        "previewHtml": "<div class=\"spec-preview-body\" id=\"header-with-logo-spec-2\"><div class=\"eb-preview eb-preview-header-logo\"><div class=\"eb-preview-header-logo__mark eb-preview-header-logo__mark--light\"><svg class=\"eb-preview-header-logo__glyph\" viewBox=\"0 0 28 28\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"14\" cy=\"14\" r=\"12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"></circle><path d=\"M14 6 A8 8 0 1 1 8.5 20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\" stroke-linecap=\"round\"></path><circle cx=\"19\" cy=\"9\" r=\"1.5\" fill=\"currentColor\"></circle></svg><span>GCash</span></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "logo",
                "value": "light",
                "mono": true,
                "prop": "theme"
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
