import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/alert.js`.
const alertDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        defaultValue: 'information',
        options: [
          { value: 'neutral', label: 'Neutral' },
          { value: 'information', label: 'Information' },
          { value: 'warning', label: 'Warning' },
          { value: 'error', label: 'Error' },
          { value: 'success', label: 'Success' },
        ],
      },
    ],
  },
];

export const alert: ComponentData = {
  "meta": {
    "slug": "alert",
    "name": "Alert",
    "node": "18444:2012",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=18444-2012",
    "description": "A persistent in-flow status banner with intent (info, success, warning, danger), title, description, and optional CTA.",
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
    "verdict": {
      "kind": "fix",
      "title": "Fix — clarify property schema before native handoff",
      "text": "Normalize boolean values, replace the placeholder left-icon with a swappable slot, and expose an explicit <code>style = banner | card</code> (or split into two components) so the two layouts aren't hidden behind a <code>fullWidth</code> boolean. Add a dismiss contract while you're in there."
    }
  },
  "overview": {
    "inContextNote": "Alerts sit inline in forms, payment flows, and detail screens to communicate status, validation, or supplementary guidance. The accent-card style is often used for onboarding tips; the banner style is used for transient validation.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"alert-demo-preview\"><div class=\"eb-preview eb-preview-alert eb-preview-alert--banner eb-preview-alert--information\"><div class=\"eb-preview-alert__content\"><p class=\"eb-preview-alert__title\">This is for the title.</p><p class=\"eb-preview-alert__desc\">This is the description. Put the description here.</p></div><svg class=\"eb-preview-alert__icon-right\" viewBox=\"0 0 32 32\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"16\" cy=\"16\" r=\"13\" stroke=\"var(--alert-icon)\" stroke-width=\"2\" fill=\"none\"></circle><circle cx=\"16\" cy=\"10\" r=\"1.6\" fill=\"var(--alert-icon)\"></circle><rect x=\"14.5\" y=\"13.5\" width=\"3\" height=\"10\" rx=\"1\" fill=\"var(--alert-icon)\"></rect></svg></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">title</span><input type=\"text\" id=\"alert-ctrl-title\" class=\"demo-panel-select demo-panel-input\" value=\"This is for the title.\" oninput=\"_alertUpdate()\" placeholder=\"Title text\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"alert-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"This is the description. Put the description here.\" oninput=\"_alertUpdate()\" placeholder=\"Description text\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select id=\"alert-ctrl-type\" class=\"demo-panel-select\" onchange=\"_alertUpdate()\"><option value=\"neutral\">Default</option><option value=\"information\" selected=\"\">Information</option><option value=\"warning\">Warning</option><option value=\"error\">Error</option><option value=\"success\">Success</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Full Width</span><select id=\"alert-ctrl-fullwidth\" class=\"demo-panel-select\" onchange=\"_alertUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Left Icon</span><select id=\"alert-ctrl-lefticon\" class=\"demo-panel-select\" onchange=\"_alertUpdate()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Right Icon</span><select id=\"alert-ctrl-righticon\" class=\"demo-panel-select\" onchange=\"_alertUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Description</span><select id=\"alert-ctrl-showdesc\" class=\"demo-panel-select\" onchange=\"_alertUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Generic notification primitive — drops into forms, detail screens, and flows across the app."
      },
      {
        "name": "Self-contained",
        "rating": "partial",
        "note": "Owns its colors, spacing, and typography tokens. But the Learn More action is drawn in-place — not an instance of Text Button — so it can't inherit pressed/disabled states."
      },
      {
        "name": "Consistent",
        "rating": "warn",
        "note": "Boolean properties use <code>yes/no</code> strings with inconsistent casing (<code>No</code> vs <code>no</code>). <code>Type=Default</code> mixes a neutral appearance into an otherwise-semantic set."
      },
      {
        "name": "Composable",
        "rating": "partial",
        "note": "Composes into forms fine, but the left-icon slot is a hardcoded placeholder circle — can't swap in an icon from the DS icon library."
      }
    ],
    "behavior": [
      {
        "state": "Show / hide",
        "ios": "yes",
        "android": "yes",
        "property": "Not modeled",
        "notes": "Alerts fade/slide in on mount. Host-screen concern, not component state."
      },
      {
        "state": "Action tap (Learn More)",
        "ios": "na",
        "android": "na",
        "property": "No button",
        "notes": "Learn More text + chevron is a drawn element — no pressed state. Should be a Text Button instance."
      },
      {
        "state": "Dismiss (X close)",
        "ios": "na",
        "android": "na",
        "property": "Not built",
        "notes": "Dismissable alerts need an X button + <code>onDismiss</code> callback. Not modeled today."
      },
      {
        "state": "A11y announcement",
        "ios": "na",
        "android": "na",
        "property": "Not annotated",
        "notes": "Error alerts should announce as <code>role=\"alert\"</code> / <code>LiveRegion.Assertive</code>. Informational use <code>role=\"status\"</code> / <code>LiveRegion.Polite</code>."
      }
    ],
    "resolved": [],
    "open": [
      {
        "headline": "Boolean properties use <code>yes/no</code> strings.",
        "body": "<code>Full Width</code>, <code>Left Icon</code>, <code>Right Icon</code>, <code>Description</code> — and <code>Full Width</code> has inconsistent casing (<code>No</code> on the non-full-width Information variant, <code>no</code> elsewhere). Blocks direct Swift <code>Bool</code> / Kotlin <code>Boolean</code> mapping.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Two layouts hidden behind <code>Full Width</code>.",
        "body": "Non-full-width variants are accent cards (left border + Learn More action); full-width variants are flat banners. The axis name describes the width, not the real structural difference. Either split into two components or rename to <code>style = banner | card</code>.",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>Type=Default</code> mixes with semantic types.",
        "body": "Default is a neutral appearance; Information / Warning / Error / Success are semantic statuses. Mixing them in one enum blurs the mental model. Rename to <code>Neutral</code> or put it on a separate axis.",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Left-icon slot is a placeholder circle.",
        "body": "24 × 24 gray <code>icon-placeholder</code> — not swappable via instance-swap. Consumers can't drop in a real Icon from the DS icon library.",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "No dismiss / close state.",
        "body": "Dismissable alerts are a standard pattern (X button on the right, <code>onDismiss</code> callback). Not modeled in any of the 20 variants.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Learn More action is drawn in-place.",
        "body": "Text + chevron aren't a real Text Button instance — no pressed or disabled state coverage, can't swap in \"Try again\", \"View details\", etc. without editing the master.",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked until schema cleanup and slot adoption land.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Normalize boolean values and casing.",
        "body": "<code>Full Width</code> / <code>Left Icon</code> / <code>Right Icon</code> / <code>Description</code> → <code>true/false</code>. Eliminates the <code>No</code>/<code>no</code> casing bug.",
        "tag": "Rename"
      },
      {
        "headline": "Expose <code>style = banner | card</code>.",
        "body": "Makes the real difference explicit: <code>card</code> has the left-border accent + action link, <code>banner</code> is the flat inline surface. Either this, or split into two components (<code>AlertBanner</code> + <code>AlertCard</code>).",
        "tag": "Property"
      },
      {
        "headline": "Rename <code>Type=Default</code> to <code>Neutral</code>.",
        "body": "Disambiguates from \"the default / unset value\" and matches the semantic naming of its siblings.",
        "tag": "Rename"
      },
      {
        "headline": "Replace the left-icon placeholder with a swappable Icon slot.",
        "body": "Adopt Figma Slots so product teams can drop in any Icon from the DS library without editing the master.",
        "tag": "Slot"
      },
      {
        "headline": "Add a dismissable variant",
        "body": "with an X icon on the right and an <code>onDismiss</code> callback contract. Pairs with a default timeout for transient alerts.",
        "tag": "State"
      },
      {
        "headline": "Promote the Learn More action to a Text Button slot.",
        "body": "Gains pressed / disabled states automatically, and lets consumers swap copy (\"View details\", \"Try again\", \"Undo\") without editing the master. Same pattern Button will have once trailing slots ship.",
        "tag": "Composition"
      },
      {
        "headline": "Document the A11y live-region mapping.",
        "body": "Error alerts should announce as assertive; informational alerts as polite. Spell this out in the component spec so engineers wire the right roles.",
        "tag": "A11y"
      }
    ]
  },
  "style": {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "alert-spec-banner",
        "demoKey": "banner",
        "demoControls": alertDemoControls,
        "title": "Banner",
        "node": "18444:2087",
        "description": "Flat inline banner. 360 wide, 12 × 16 padding, 4px radius, soft shadow. Optional left icon, right icon, and description.",
        "previewHtml": "<div id=\"spec-alert-banner-preview\"><div style=\"display:inline-flex;align-items:flex-start;gap:8px;padding:12px 16px;width:360px;box-sizing:border-box;background:#E5F1FF;border-radius:4px;box-shadow:0 1px 3px rgba(232,238,242,0.79);font-family:'Proxima Soft', system-ui, sans-serif;\"><div style=\"flex:1;min-width:0;\"><div style=\"font-weight:700;font-size:16px;line-height:20px;color:#072592;letter-spacing:0.25px;\">This is for the title.</div><div style=\"margin-top:4px;font-family:'BarkAda', system-ui;font-weight:600;font-size:12px;line-height:18px;color:#072592;opacity:.8;\">This is the description.</div></div><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"#2340A9\" stroke-width=\"1.6\" fill=\"none\"></circle><path d=\"M12 16v-5M12 8h.01\" stroke=\"#2340A9\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Style", "value": "Banner" },
              { "key": "Type", "value": "Information", "prop": "type" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Background", "value": "#E5F1FF", "token": "alert/color/info/bg" },
              { "key": "Title", "value": "#072592", "token": "alert/color/info/label-title" },
              { "key": "Description", "value": "#072592", "token": "alert/color/info/description" },
              { "key": "Icon / accent", "value": "#2340A9", "token": "alert/color/info/icon" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "360px", "mono": true },
              { "key": "Padding", "value": "12 × 16", "mono": true },
              { "key": "Corner radius", "value": "4px (radius-1)", "mono": true },
              { "key": "Gap (icon ↔ content)", "value": "8px", "mono": true },
              { "key": "Right icon", "value": "24 × 24", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Title style", "value": "Primary/Multi-line Label/Base", "mono": true },
              { "key": "Title font", "value": "Proxima Soft Bold", "mono": true },
              { "key": "Title size", "value": "16 / 20", "mono": true },
              { "key": "Description font", "value": "BarkAda Semibold", "mono": true },
              { "key": "Description size", "value": "12 / 18", "mono": true }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBAlert</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">type</span><span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.information</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">title</span><span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is for the title.\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">description</span><span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is the description.\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">trailingIcon</span><span class=\"syn-punc\">:</span> <span class=\"syn-type\">Image</span><span class=\"syn-punc\">(</span>systemName<span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"info.circle\"</span><span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">)</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.banner</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBAlert</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">type</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAlertType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Information</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">style</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAlertStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Banner</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">title</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is for the title.\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">description</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is the description.\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">trailingIcon</span> <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">Icon</span><span class=\"syn-punc\">(</span>painterResource<span class=\"syn-punc\">(</span>R<span class=\"syn-punc\">.</span>drawable<span class=\"syn-punc\">.</span>info<span class=\"syn-punc\">),</span> contentDescription <span class=\"syn-eq\">=</span> <span class=\"syn-kw\">null</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span></code>"
      },
      {
        "cardKey": "alert-spec-card",
        "demoKey": "card",
        "demoControls": alertDemoControls,
        "title": "Accent Card",
        "node": "18444:2019",
        "description": "Card with a 6px left-border accent. Always ships a right icon + Learn More action + description. Title is larger (18 / 23) than the banner.",
        "previewHtml": "<div id=\"spec-alert-card-preview\"><div style=\"width:328px;box-sizing:border-box;background:#FFFFFF;border-radius:6px;border-left:6px solid #2340A9;padding:16px;box-shadow:0 1px 3px rgba(115,129,154,0.1);font-family:'Proxima Soft', system-ui, sans-serif;\"><div style=\"display:flex;align-items:flex-start;gap:8px;\"><div style=\"flex:1;min-width:0;\"><div style=\"font-weight:700;font-size:18px;line-height:23px;color:#072592;letter-spacing:0.25px;\">This is for the title.</div><div style=\"margin-top:4px;font-family:'BarkAda', system-ui;font-weight:600;font-size:12px;line-height:18px;color:#072592;opacity:.8;\">This is the description. Put the description here.</div></div><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"flex-shrink:0;\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"#2340A9\" stroke-width=\"1.6\" fill=\"none\"></circle><path d=\"M12 16v-5M12 8h.01\" stroke=\"#2340A9\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg></div><div style=\"margin-top:8px;display:inline-flex;align-items:center;gap:4px;font-weight:700;font-size:14px;color:#2340A9;\">Learn More <svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\"><path d=\"M6 3l5 5-5 5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Style", "value": "Accent Card" },
              { "key": "Type", "value": "Information", "prop": "type" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Surface", "value": "#FFFFFF", "token": "surface/default" },
              { "key": "Border accent", "value": "#2340A9", "token": "alert/color/info/icon" },
              { "key": "Title", "value": "#072592", "token": "alert/color/info/label-title" },
              { "key": "Description", "value": "#072592", "token": "alert/color/info/description" },
              { "key": "Action link", "value": "#005CE5", "token": "alert/color/info/label-link" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Width", "value": "328px", "mono": true },
              { "key": "Padding", "value": "16 × 16", "mono": true },
              { "key": "Corner radius", "value": "6px (radius-2)", "mono": true },
              { "key": "Left accent", "value": "6px solid", "mono": true },
              { "key": "Gap (title ↔ desc)", "value": "4px", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Title style", "value": "Primary/Headlines/Block", "mono": true },
              { "key": "Title font", "value": "Proxima Soft Bold", "mono": true },
              { "key": "Title size", "value": "18 / 23", "mono": true },
              { "key": "Description", "value": "BarkAda Semibold · 12 / 18", "mono": true },
              { "key": "Action label", "value": "Proxima Soft Bold · 14 / 20", "mono": true }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBAlert</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">type</span><span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.information</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">title</span><span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is for the title.\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">description</span><span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"This is the description.\"</span>\n<span class=\"syn-punc\">) {</span>\n    <span class=\"syn-type\">EBTextButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Learn More\"</span><span class=\"syn-punc\">) {</span> <span class=\"syn-cmt\">/* action */</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.card</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBAlert</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">type</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAlertType</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Information</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">style</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBAlertStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Card</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">title</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is for the title.\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">description</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"This is the description.\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">action</span> <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBTextButton</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Learn More\"</span><span class=\"syn-punc\">,</span> onClick <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{ })</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span></code>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Type",
        "description": "Each type ships its own bg, title, description, and icon tokens. Accent-card style adds a border-accent token matching the icon color.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Information",
            "token": "bg",
            "values": [
              "main/alert/color/information/bg",
              "#E5F1FF"
            ]
          },
          {
            "role": "—",
            "token": "title",
            "values": [
              "main/alert/color/information/label-title",
              "#072592"
            ]
          },
          {
            "role": "—",
            "token": "description",
            "values": [
              "main/alert/color/information/description",
              "#072592 @ 80%"
            ]
          },
          {
            "role": "—",
            "token": "icon / accent",
            "values": [
              "main/alert/color/information/icon",
              "#2340A9"
            ]
          },
          {
            "role": "Warning",
            "token": "bg",
            "values": [
              "main/alert/color/warning/bg",
              "#FFF9EB"
            ]
          },
          {
            "role": "—",
            "token": "title",
            "values": [
              "main/alert/color/warning/label-title",
              "#6C5009"
            ]
          },
          {
            "role": "—",
            "token": "description",
            "values": [
              "main/alert/color/warning/description",
              "#6C5009 @ 80%"
            ]
          },
          {
            "role": "—",
            "token": "icon / accent",
            "values": [
              "main/alert/color/warning/icon",
              "#966F0B"
            ]
          },
          {
            "role": "Error",
            "token": "bg",
            "values": [
              "main/alert/color/error/bg",
              "#FEECEB"
            ]
          },
          {
            "role": "—",
            "token": "title",
            "values": [
              "main/alert/color/error/label-title",
              "#5F1410"
            ]
          },
          {
            "role": "—",
            "token": "description",
            "values": [
              "main/alert/color/error/description",
              "#5F1410 @ 80%"
            ]
          },
          {
            "role": "—",
            "token": "icon / accent",
            "values": [
              "main/alert/color/error/icon",
              "#B0231C"
            ]
          },
          {
            "role": "Success",
            "token": "bg",
            "values": [
              "main/alert/color/success/bg",
              "#E4F7ED"
            ]
          },
          {
            "role": "—",
            "token": "title",
            "values": [
              "main/alert/color/success/label-title",
              "#0B3E23"
            ]
          },
          {
            "role": "—",
            "token": "description",
            "values": [
              "main/alert/color/success/description",
              "#0B3E23 @ 80%"
            ]
          },
          {
            "role": "—",
            "token": "icon / accent",
            "values": [
              "main/alert/color/success/icon",
              "#188A47"
            ]
          },
          {
            "role": "Neutral",
            "token": "bg",
            "values": [
              "main/alert/color/neutral/bg",
              "#F4F6FA"
            ]
          },
          {
            "role": "—",
            "token": "title",
            "values": [
              "main/alert/color/neutral/label-title",
              "#0A2757"
            ]
          },
          {
            "role": "—",
            "token": "description",
            "values": [
              "main/alert/color/neutral/description",
              "#0A2757 @ 80%"
            ]
          },
          {
            "role": "—",
            "token": "icon / accent",
            "values": [
              "main/alert/color/neutral/icon",
              "#6780A9"
            ]
          }
        ]
      }
    ]
  },
  "code": {
    "installation": {
      "planned": true,
      "blocks": []
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "<code>Type: Default | Information | Warning | Error | Success</code>",
          "swift": "<code>type: neutral | information | warning | error | success</code>",
          "compose": "<code>type: EBAlertType</code>"
        },
        {
          "figma": "<code>Full Width: yes | No</code>",
          "swift": "<code>style: banner | card</code>",
          "compose": "<code>.ebAlertStyle(.banner)</code> modifier"
        },
        {
          "figma": "<code>Left Icon: yes | no</code>",
          "swift": "<code>leadingIcon?: Icon</code> (slot)",
          "compose": "<code>leadingIcon: Image?</code>"
        },
        {
          "figma": "<code>Right Icon: yes | no</code>",
          "swift": "<code>trailingIcon?: Icon</code> (slot, auto for semantic types)",
          "compose": "<code>trailingIcon: Image?</code>"
        },
        {
          "figma": "<code>Description: yes | no</code>",
          "swift": "<code>description?: String</code>",
          "compose": "<code>description: String?</code>"
        },
        {
          "figma": "(implicit)",
          "swift": "<code>title: String</code>",
          "compose": "<code>title: String</code>"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>action?: TextButton</code> (card only)",
          "compose": "<code>action: EBTextButton?</code>"
        },
        {
          "figma": "(not modeled)",
          "swift": "<code>onDismiss?: () -&gt; Void</code>",
          "compose": "<code>onDismiss: (() -&gt; Void)?</code>"
        }
      ]
    },
    "usageSnippets": [],
    "accessibility": [
      {
        "requirement": "Live region — error",
        "ios": "Post <code>UIAccessibility.Notification.announcement</code> with <code>.high</code> priority on mount.",
        "android": "<code>Modifier.semantics { liveRegion = LiveRegionMode.Assertive }</code> on the container."
      },
      {
        "requirement": "Live region — info / success",
        "ios": "Post announcement with default priority.",
        "android": "<code>LiveRegionMode.Polite</code> on the container."
      },
      {
        "requirement": "Action label",
        "ios": "Text Button inside action slot owns its own label + hint.",
        "android": "Text Button inside action slot owns its own <code>contentDescription</code>."
      },
      {
        "requirement": "Dismiss button",
        "ios": "Icon Button with <code>accessibilityLabel: \"Dismiss\"</code>.",
        "android": "Icon Button with <code>contentDescription = \"Dismiss\"</code>."
      },
      {
        "requirement": "Color contrast",
        "ios": "All title/description colors on their type-surface tested to ≥4.5:1. Verified in variable defs.",
        "android": "Same ratios apply."
      }
    ],
    "usageGuidelines": [],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Two layouts (banner + card) hidden behind <code>Full Width</code> — rename to <code>style</code> or split."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Booleans <code>yes/no</code> with inconsistent casing; <code>Type=Default</code> mixes with semantic types."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All 5 types fully tokenized under <code>main/alert/color/*</code>."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps cleanly to a custom <code>EBAlert</code> view / composable once schema cleans up."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "No dismiss state; Learn More isn't a real button — no pressed coverage."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Left-icon slot is a placeholder circle — adopt a Figma Slot."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Blocked until schema cleanup + slot adoption land."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 20,
      "description": "<code>Type</code> (5) × layout combos = <strong>20 built variants</strong> out of 2<sup>4</sup> × 5 = 80 theoretical combinations.",
      "columns": [
        "Group",
        "Count",
        "Axes"
      ],
      "rows": [
        {
          "cells": [
            "<strong>Accent card</strong>",
            "4",
            "fullWidth=No, L=no, R=yes, desc=yes · Information / Warning / Error / Success"
          ]
        },
        {
          "cells": [
            "<strong>Banner — right icon, desc</strong>",
            "5",
            "fullWidth=yes, L=no, R=yes, desc=yes · all 5 types"
          ]
        },
        {
          "cells": [
            "<strong>Banner — left icon, desc</strong>",
            "5",
            "fullWidth=yes, L=yes, R=no, desc=yes · all 5 types"
          ]
        },
        {
          "cells": [
            "<strong>Banner — left icon, no desc</strong>",
            "5",
            "fullWidth=yes, L=yes, R=no, desc=no · all 5 types"
          ]
        },
        {
          "cells": [
            "<strong>Default — full width, no icons, with desc</strong>",
            "1",
            "fullWidth=yes, L=no, R=no, desc=yes · Default only"
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
      "header": "Initial Assessment · node 18444:2012",
      "rows": [
        {
          "body": "<strong>Verdict: Fix</strong> — Normalize booleans, replace placeholder left-icon with a real Slot, split the two layouts explicitly, and add a dismiss contract. <span class=\"tag-open tag-c1 tag-c2 tag-c5 tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>C2 — Property naming</strong> — Four booleans on <code>yes/no</code> with inconsistent casing; <code>Type=Default</code> mixes with semantic types. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C1 — Two layouts, one component</strong> — Banner + accent card hidden behind <code>fullWidth</code>. Rename to <code>style</code> or split. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C6 — Left-icon placeholder</strong> — 24 × 24 <code>icon-placeholder</code> circle; adopt Figma Slots. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C5 — State coverage</strong> — No dismiss; Learn More isn't a real button. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on schema cleanup. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
