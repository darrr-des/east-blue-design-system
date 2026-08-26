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
    "node": "6663:104524",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=6663-104524",
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
      "title": "Keep — all findings resolved",
      "text": "Rebuilt on node <code>6663:104524</code> in the 2026 Working File as <code>Type</code> × <code>Style</code> × <code>Content</code> × <code>Size</code> over a complete 90-variant matrix, with all four axes PascalCase per §1 and Title Case values per §5. The naming pass is done: the three nested <code>container</code> frames became <code>AlertContainer</code> and <code>ContentRow</code> with the redundant middle wrapper deleted rather than renamed, the two <code>offset</code> frames are now <code>LeadingSlotContainer</code> and <code>TrailingSlotContainer</code>, the text layers dropped the <code>#</code> sigil onto the §3 vocabulary, and the slots are kebab-cased as <code>Leading-Slot</code> and <code>Trailing-Slot</code>. No layer contains a space. <code>Size</code> was verified to do real work, running the title 18/23 at <code>Large</code> down to 14/16 at <code>Small</code>. The action instance’s name belongs to the shared Button component rather than to Alert, dismissal is expressed through the trailing slot rather than a boolean, and the accessibility live-region contract is documented — <code>Error</code> and <code>Warning</code> announce assertively, the rest politely. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Alerts sit inline in forms, payment flows, and detail screens to communicate status, validation, or supplementary guidance. The accent-card style is often used for onboarding tips; the banner style is used for transient validation.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"alert-demo-preview\"><div class=\"eb-preview eb-preview-alert eb-preview-alert--banner eb-preview-alert--information\"><div class=\"eb-preview-alert__content\"><p class=\"eb-preview-alert__title\">This is for the title.</p><p class=\"eb-preview-alert__desc\">This is the description. Put the description here.</p></div><svg class=\"eb-preview-alert__icon-right\" viewBox=\"0 0 32 32\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"16\" cy=\"16\" r=\"13\" stroke=\"var(--alert-icon)\" stroke-width=\"2\" fill=\"none\"></circle><circle cx=\"16\" cy=\"10\" r=\"1.6\" fill=\"var(--alert-icon)\"></circle><rect x=\"14.5\" y=\"13.5\" width=\"3\" height=\"10\" rx=\"1\" fill=\"var(--alert-icon)\"></rect></svg></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Content</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">title</span><input type=\"text\" id=\"alert-ctrl-title\" class=\"demo-panel-select demo-panel-input\" value=\"This is for the title.\" oninput=\"_alertUpdate()\" placeholder=\"Title text\"></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">description</span><input type=\"text\" id=\"alert-ctrl-desc\" class=\"demo-panel-select demo-panel-input\" value=\"This is the description. Put the description here.\" oninput=\"_alertUpdate()\" placeholder=\"Description text\"></div></div><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select id=\"alert-ctrl-type\" class=\"demo-panel-select\" onchange=\"_alertUpdate()\"><option value=\"neutral\">Default</option><option value=\"information\" selected=\"\">Information</option><option value=\"warning\">Warning</option><option value=\"error\">Error</option><option value=\"success\">Success</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Full Width</span><select id=\"alert-ctrl-fullwidth\" class=\"demo-panel-select\" onchange=\"_alertUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Left Icon</span><select id=\"alert-ctrl-lefticon\" class=\"demo-panel-select\" onchange=\"_alertUpdate()\"><option value=\"no\" selected=\"\">no</option><option value=\"yes\">yes</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Right Icon</span><select id=\"alert-ctrl-righticon\" class=\"demo-panel-select\" onchange=\"_alertUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Description</span><select id=\"alert-ctrl-showdesc\" class=\"demo-panel-select\" onchange=\"_alertUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Five intents across two visual treatments and three content shapes cover every alert case in the product, and the 90-variant matrix is complete with no gaps."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its surface, accent bar and typography, and composes a real button instance for the action rather than drawing one."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "Four PascalCase axes with Title Case values, <code>Size</code> genuinely changing the type scale, and a clean layer tree on both styles — <code>AlertContainer</code> → <code>ContentRow</code> → <code>TitleContainer</code> / <code>DescriptionContainer</code>, slots kebab-cased per §4, text layers on the §3 vocabulary, and no spaces anywhere. The action instance carries the shared Button component’s name, which is that component’s to set."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "<code>Leading Slot</code> and <code>Trailing Slot</code> are both real Figma Slots holding swap targets, and the action is a shared button instance — icon, trailing control and action are all consumer-supplied."
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
        "headline": "<code>Style = Card | Banner</code> exposed.",
        "body": "v2.0: Rebuilt on node <code>6663:104524</code> in the 2026 Working File. The card and banner treatments are now one axis on one component rather than a distinction a consumer had to infer, which is the recommendation applied. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>Type=Default</code> renamed <code>Neutral</code>.",
        "body": "v2.0: The intent enum reads <code>Neutral | Information | Warning | Error | Success</code>. <em>Default</em> described a position in a list; <em>Neutral</em> describes what the alert is saying, which is what the axis is for. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Property casing normalised.",
        "body": "v2.0: All four axes are PascalCase per §1 — <code>Type</code>, <code>Style</code>, <code>Content</code>, <code>Size</code> — with Title Case values per §5. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Leading icon placeholder replaced by a real Slot.",
        "body": "v2.0: <code>Leading Slot</code> is a genuine <code>SLOT</code> node holding a <code>Slot Block</code> swap target, so a consumer supplies their own icon without detaching. <code>Trailing Slot</code> is paired with it, closing the alignment recommendation — both positions now behave the same way. (C1 · Slot)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Action promoted to a button instance.",
        "body": "v2.0: The Learn More text is now a real button instance rather than drawn type, so it inherits the button component’s states, sizing and token bindings. Its layer name is still not semantic and is tracked below. (C4 · Composition)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "<code>#text</code> renamed <code>#description</code>.",
        "body": "v2.0: The body copy layer now says what it holds. The legacy <code>#</code> sigil is still on it and on <code>#title</code>, tracked below. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Variant matrix complete at 90, and <code>Size</code> is meaningful.",
        "body": "v2.0: <code>Type</code> (5) × <code>Style</code> (2) × <code>Content</code> (3) × <code>Size</code> (3) ships all 90 combinations with no gaps. Verified that <code>Size</code> does real work rather than only changing the frame: the title runs 18/23 at <code>Large</code> and 14/16 at <code>Small</code>. The 56px floor on the single-line <code>Content</code> values is a minimum height, not evidence of duplicate variants. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Structural frames named — and one redundant wrapper removed.",
        "body": "v2.1: Verified on both the Card and Banner styles. The three nested frames all called <code>container</code> are gone: the outer is <code>AlertContainer</code>, the inner is <code>ContentRow</code>, and the middle one was deleted rather than renamed, so the tree is a level shallower than before. The two <code>offset</code> frames are now <code>LeadingSlotContainer</code> and <code>TrailingSlotContainer</code>. Removing the redundant wrapper is the better fix — a name would have made it readable, deleting it made it unnecessary. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Text layers and their frames renamed.",
        "body": "v2.1: <code>#title</code> → <code>Title</code> and <code>#description</code> → <code>Description</code>, dropping the legacy sigil, with their wrappers moving from <code>heading</code> and <code>line-paragraph</code> to <code>TitleContainer</code> and <code>DescriptionContainer</code>. The text layers now sit on the §3 vocabulary and the §7 hierarchy. <code>Left Border Accent</code> also lost its spaces, as <code>LeftBorderAccent</code>. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Slots brought onto the family convention.",
        "body": "v2.1: <code>Leading Slot</code> and <code>Trailing Slot</code> are now <code>Leading-Slot</code> and <code>Trailing-Slot</code> — kebab-case per §4 with the <code>-Slot</code> suffix used across <a href=\"#\" onclick=\"showPanelById('bottom-sheet');return false;\">Bottom Sheet</a>, <a href=\"#\" onclick=\"showPanelById('generic-card');return false;\">Generic Card</a> and <a href=\"#\" onclick=\"showPanelById('service-item');return false;\">Service Item</a>. No layer in the component carries a space any more, so nothing blocks a generated identifier. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>Button_New</code> delegated to the Button component’s owner.",
        "body": "v2.2: Closed out of Alert’s scope. The layer is an <code>INSTANCE</code>, and an instance carries its main component’s name unless it is locally overridden — so <code>Button_New</code> is the shared Button component’s own name rather than something Alert chose. Renaming it here would create a local override that detaches from the source, which is the opposite of what an instance is for; the rename belongs to the Button owner and will propagate to every consumer at once. Confirmed by the owner: <code>Button_New</code> is the shared Button component’s own name, and the rename is queued on that component rather than on Alert. Recorded as attested — the review tooling cannot read an instance’s main-component reference. The same delegation applies as for the shared icon glyphs. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Dismissal expressed through the trailing slot, not a property.",
        "body": "v2.2: Confirmed — there is no <code>hasDismiss</code> boolean by design. <code>Trailing-Slot</code> is the dismissal affordance when one is wanted: a consumer places a close control there and wires it, and leaves the slot empty or fills it with something else when the alert is not dismissible. A boolean would have duplicated a decision the slot already carries, and would have been wrong the moment a trailing control that is not a close button was needed. Native implementations should read dismissibility from whether a trailing action is supplied rather than expecting a flag, and should not assume the trailing slot always means dismiss. (C5 · Property)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Accessibility live-region contract documented.",
        "body": "v2.2: Announcement urgency follows <code>Type</code>. <strong>Assertive</strong> — <code>Error</code> and <code>Warning</code> interrupt whatever the screen reader is currently saying, because both describe something the user must act on before continuing. <strong>Polite</strong> — <code>Success</code>, <code>Information</code> and <code>Neutral</code> queue behind the current utterance, because they confirm or inform rather than block. <strong>Native mapping</strong> — iOS: post <code>AccessibilityNotification.Announcement</code> when the alert appears, and mark the container <code>.accessibilityElement(children: .combine)</code> so title and description are read as one utterance rather than two; Android: <code>Modifier.semantics { liveRegion = LiveRegionMode.Assertive }</code> or <code>.Polite</code> on the alert container, with <code>mergeDescendants = true</code> for the same reason. <strong>Ordering</strong> — the leading icon is decorative and must be excluded from the tree; the trailing control, where present, is a separate focusable element announced after the message, not before it. An alert that appears without a focus change must announce; one the user has navigated to should not announce twice. Confirmed by the owner as the intended contract rather than an inference, so implementations can treat it as binding. This contract covers <a href=\"#\" onclick=\"showPanelById('toast');return false;\">Toast</a> and <a href=\"#\" onclick=\"showPanelById('inline-message');return false;\">Inline Message</a>, which share the same intent enum. (C5 · A11y)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. Nothing in the layer tree blocks it: the identically-named frames are gone, no name contains a space, and the action instance will bind under whatever the shared Button component is renamed to.",
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
