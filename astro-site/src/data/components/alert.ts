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
    "node": "26449:14796",
    "figmaUrl": "https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=26449-14796",
    "description": "A persistent status surface with intent, title, description, and an optional action — in Card or Banner style. 30 variants across <code>Type</code> (Neutral / Information / Warning / Error / Success) × <code>Style</code> (Card / Banner) × <code>Content</code> (Default / Header Only / Description Only), with a <code>Leading Container</code> icon slot and a <code>Dismiss Container</code> slot.",
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
    "verdict": {
      "kind": "keep",
      "title": "Rebuilt — explicit Style, slots, and intent enum",
      "text": "The rebuild resolved every structural issue: <code>Style=Card / Banner</code> is now an explicit axis (was hidden behind a <code>Full Width</code> boolean), the yes/no booleans collapsed into a clean <code>Type</code> × <code>Style</code> × <code>Content</code> matrix, <code>Type=Default</code> became <code>Neutral</code>, the left icon is a swappable <code>Leading Container</code> slot, and a dismiss slot plus a real action-button instance shipped. v2.1 finished the naming — <code>#text</code> → <code>#description</code> across all 20 description nodes, and <code>Trailing Element</code> → <code>Dismiss Container</code> across all 30 variants. Only the A11y live-region docs and Code Connect remain."
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
        "rating": "pass",
        "note": "Owns its colors, spacing, and typography tokens across all five intents and both styles. The action is now a real button instance (with its own states) rather than drawn in-place."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Three Title Case enums — <code>Type</code> × <code>Style</code> × <code>Content</code> — a complete 30-variant matrix, and <code>Type=Default</code> renamed <code>Neutral</code>. Internal naming now matches: the description node is <code>#description</code>, and the paired slots read <code>Leading Container</code> / <code>Dismiss Container</code>."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "A swappable <code>Leading Container</code> icon slot in both styles, a <code>Dismiss Container</code> holding a <code>Content</code> slot, and an action-button instance — consumers compose an icon, an action, and a dismiss without editing the master."
      }
    ],
    "behavior": [
      {
        "state": "Intent",
        "ios": "yes",
        "android": "yes",
        "property": "Type=Neutral / Information / Warning / Error / Success",
        "notes": "Five intents drive background, border/accent, and icon color. Neutral is the no-charge appearance (renamed from the old Default)."
      },
      {
        "state": "Card style",
        "ios": "yes",
        "android": "yes",
        "property": "Style=Card",
        "notes": "Bordered rounded card (radius 4) with a leading icon slot, action button, and trailing dismiss slot."
      },
      {
        "state": "Banner style",
        "ios": "yes",
        "android": "yes",
        "property": "Style=Banner",
        "notes": "Flat inline surface with a 6px <code>Left Border Accent</code> instead of a full border."
      },
      {
        "state": "Content composition",
        "ios": "yes",
        "android": "yes",
        "property": "Content=Default / Header Only / Description Only",
        "notes": "Default shows title + description; the other two drop one. Composes with every Type and Style."
      },
      {
        "state": "Action tap",
        "ios": "yes",
        "android": "yes",
        "property": "Button instance",
        "notes": "The \"Learn more\" action is a real button instance with its own states, plus a chevron slot — no longer drawn in-place."
      },
      {
        "state": "Dismiss",
        "ios": "yes",
        "android": "yes",
        "property": "Dismiss Container (Content slot)",
        "notes": "The trailing slot carries the dismiss / close affordance."
      },
      {
        "state": "A11y announcement",
        "ios": "na",
        "android": "na",
        "property": "Not annotated",
        "notes": "Error alerts should announce as <code>role=\"alert\"</code> / <code>LiveRegion.Assertive</code>, informational as <code>role=\"status\"</code> / <code>LiveRegion.Polite</code>. Still to document."
      }
    ],
    "resolved": [
      {
        "body": "v2.0: Boolean properties eliminated — the old yes/no <code>Full Width</code> / <code>Left Icon</code> / <code>Right Icon</code> / <code>Description</code> booleans (with the <code>No</code>/<code>no</code> casing bug) collapsed into a clean <code>Type</code> × <code>Style</code> × <code>Content</code> enum matrix. (C2)"
      },
      {
        "body": "v2.0: The Card-vs-Banner distinction is now an explicit <code>Style</code> axis rather than being hidden behind a <code>Full Width</code> boolean — Card is the bordered accent surface, Banner the flat inline strip with a left accent. (C1)"
      },
      {
        "body": "v2.0: <code>Type=Default</code> renamed <code>Neutral</code> — no longer conflated with \"the default/unset value\", and consistent with the semantic siblings. (C2)"
      },
      {
        "body": "v2.0: Left-icon placeholder replaced with a real <code>Leading Container</code> SLOT (32 × 32) in both Card and Banner, so consumers swap in any DS icon. (C6)"
      },
      {
        "body": "v2.0: Dismiss contract added — a <code>Trailing Element</code> wrapping a <code>Content</code> slot carries the close affordance, covering the previously-missing dismissable pattern. (C5)"
      },
      {
        "body": "v2.0: The \"Learn more\" action is now a real button instance (with a chevron slot) rather than drawn text + chevron, so it carries its own states and its copy is swappable. (C5)"
      },
      {
        "body": "v2.1: Description text node renamed <code>#text</code> → <code>#description</code> across all 20 variants that carry one — Card and Banner, Default and Description Only. Verified by a full text-node rescan with zero <code>#text</code> remaining. (C2)"
      },
      {
        "body": "v2.1: Trailing dismiss wrapper renamed <code>Trailing Element</code> → <code>Dismiss Container</code> across all 30 variants, pairing cleanly with <code>Leading Container</code>. <code>Dismiss</code> was chosen over <code>Trailing Container</code> deliberately: the nested <code>Button_New</code> already exposes its own <code>Trailing Container</code> slot, so reusing that name would have put two identically-named layers in one variant. (C2)"
      },
      {
        "body": "v2.1: Component moved into the Sticker Sheets v2 library; the assessment now points at the canonical node rather than the 2026 Working File. (C1)"
      },
      {
        "body": "v2.1: The <code>Button_New</code> action instance is <strong>intentional</strong> — reviewed and confirmed. It is a real Button component slotted into the Alert, not a placeholder or copy-paste artifact, so its name belongs to that component rather than to Alert. Not an Alert defect. (C1)"
      }
    ],
    "open": [
      {
        "headline": "A11y live-region mapping not documented.",
        "body": "Error alerts should announce assertively, informational alerts politely. Not yet annotated on the component, so engineers have no spec for the correct roles.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      },
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Structure and naming are settled enough to register. Blocked only on the SwiftUI / Compose mappings being wired and the native component existing — snippets remain a Planned API.",
        "tag": {
          "criterion": "C7",
          "label": "C7 · Code Connect Linkability"
        }
      }
    ],
    "recommendations": [
      {
        "headline": "Document the A11y live-region mapping.",
        "body": "Spell out assertive for error, polite for informational, so engineers wire <code>role=\"alert\"</code> / <code>role=\"status\"</code> correctly.",
        "tag": "A11y"
      },
      {
        "headline": "Register Code Connect mapping to <code>EBAlert</code>.",
        "body": "Wire <code>Type</code>, <code>Style</code>, and <code>Content</code> to the SwiftUI / Compose API, and map the <code>Leading Container</code> and trailing dismiss slots to native content slots.",
        "tag": "Docs"
      }
    ],
    "appliedRecommendations": [
      {
        "headline": "Normalize boolean values and casing.",
        "body": "v2.0: Applied — the yes/no booleans are gone entirely, replaced by three Title Case enums. The <code>No</code>/<code>no</code> casing bug no longer exists.",
        "tag": "Rename"
      },
      {
        "headline": "Expose <code>style = banner | card</code>.",
        "body": "v2.0: Applied — <code>Style=Card / Banner</code> is a real axis; the layout difference is no longer hidden behind width.",
        "tag": "Property"
      },
      {
        "headline": "Rename <code>Type=Default</code> to <code>Neutral</code>.",
        "body": "v2.0: Applied.",
        "tag": "Rename"
      },
      {
        "headline": "Replace the left-icon placeholder with a swappable Icon slot.",
        "body": "v2.0: Applied — <code>Leading Container</code> SLOT in both styles.",
        "tag": "Slot"
      },
      {
        "headline": "Add a dismissable variant.",
        "body": "v2.0: Applied — the <code>Trailing Element</code> / <code>Content</code> slot carries the dismiss affordance.",
        "tag": "State"
      },
      {
        "headline": "Promote the Learn More action to a button instance.",
        "body": "v2.0: Applied — it is now a real button instance with its own states, rather than drawn in-place. (Naming cleanup pending — see the <code>Button_New</code> open issue.)",
        "tag": "Composition"
      },
      {
        "headline": "Rename <code>#text</code> → <code>#description</code>.",
        "body": "v2.1: Applied — all 20 description nodes, verified by rescan.",
        "tag": "Rename"
      },
      {
        "headline": "Align the paired slot names.",
        "body": "v2.1: Applied as <code>Leading Container</code> / <code>Dismiss Container</code> — avoiding a collision with the Button's own nested <code>Trailing Container</code> slot.",
        "tag": "Rename"
      },
      {
        "headline": "Give the action button a semantic name.",
        "body": "v2.1: Reviewed and closed as not needed — <code>Button_New</code> is a real Button component slotted into the Alert, so the name is owned by that component.",
        "tag": "Rename"
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
              { "key": "Background", "value": "#E5F1FF", "token": "alert/color/information/bg",
                "variants": {
                  "type:neutral": { "value": "#F4F6FA", "token": "alert/color/neutral/bg" },
                  "type:warning": { "value": "#FFF9EB", "token": "alert/color/warning/bg" },
                  "type:error":   { "value": "#FEECEB", "token": "alert/color/error/bg" },
                  "type:success": { "value": "#E4F7ED", "token": "alert/color/success/bg" }
                }
              },
              { "key": "Title", "value": "#072592", "token": "alert/color/information/label-title",
                "variants": {
                  "type:neutral": { "value": "#0A2757", "token": "alert/color/neutral/label-title" },
                  "type:warning": { "value": "#6C5009", "token": "alert/color/warning/label-title" },
                  "type:error":   { "value": "#5F1410", "token": "alert/color/error/label-title" },
                  "type:success": { "value": "#0B3E23", "token": "alert/color/success/label-title" }
                }
              },
              { "key": "Description", "value": "#072592", "token": "alert/color/information/description",
                "variants": {
                  "type:neutral": { "value": "#0A2757", "token": "alert/color/neutral/description" },
                  "type:warning": { "value": "#6C5009", "token": "alert/color/warning/description" },
                  "type:error":   { "value": "#5F1410", "token": "alert/color/error/description" },
                  "type:success": { "value": "#0B3E23", "token": "alert/color/success/description" }
                }
              },
              { "key": "Icon / accent", "value": "#2340A9", "token": "alert/color/information/icon",
                "variants": {
                  "type:neutral": { "value": "#6780A9", "token": "alert/color/neutral/icon" },
                  "type:warning": { "value": "#966F0B", "token": "alert/color/warning/icon" },
                  "type:error":   { "value": "#B0231C", "token": "alert/color/error/icon" },
                  "type:success": { "value": "#188A47", "token": "alert/color/success/icon" }
                }
              }
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
              { "key": "Border accent", "value": "#2340A9", "token": "alert/color/information/icon",
                "variants": {
                  "type:neutral": { "value": "#6780A9", "token": "alert/color/neutral/icon" },
                  "type:warning": { "value": "#966F0B", "token": "alert/color/warning/icon" },
                  "type:error":   { "value": "#B0231C", "token": "alert/color/error/icon" },
                  "type:success": { "value": "#188A47", "token": "alert/color/success/icon" }
                }
              },
              { "key": "Title", "value": "#072592", "token": "alert/color/information/label-title",
                "variants": {
                  "type:neutral": { "value": "#0A2757", "token": "alert/color/neutral/label-title" },
                  "type:warning": { "value": "#6C5009", "token": "alert/color/warning/label-title" },
                  "type:error":   { "value": "#5F1410", "token": "alert/color/error/label-title" },
                  "type:success": { "value": "#0B3E23", "token": "alert/color/success/label-title" }
                }
              },
              { "key": "Description", "value": "#072592", "token": "alert/color/information/description",
                "variants": {
                  "type:neutral": { "value": "#0A2757", "token": "alert/color/neutral/description" },
                  "type:warning": { "value": "#6C5009", "token": "alert/color/warning/description" },
                  "type:error":   { "value": "#5F1410", "token": "alert/color/error/description" },
                  "type:success": { "value": "#0B3E23", "token": "alert/color/success/description" }
                }
              },
              { "key": "Action link", "value": "#005CE5", "token": "alert/color/information/label-link" }
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
