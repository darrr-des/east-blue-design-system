import type { ComponentData, DemoControlSection } from '../types';

// Panel mirrors the property panel of set 6663:104524 (named "Callout" in
// Figma), in its order: four variant axes and four booleans. Leading-Slot
// and Trailing-Slot are SLOTs (90 swap options each) and get no control.
const alertDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Type',
        prop: 'type',
        defaultValue: 'neutral',
        options: [
          { value: 'neutral', label: 'Neutral' },
          { value: 'information', label: 'Information' },
          { value: 'warning', label: 'Warning' },
          { value: 'error', label: 'Error' },
          { value: 'success', label: 'Success' },
        ],
      },
      {
        label: 'Style',
        prop: 'style',
        defaultValue: 'card',
        options: [
          { value: 'banner', label: 'Banner' },
          { value: 'card', label: 'Card' },
        ],
      },
      {
        label: 'Content',
        prop: 'content',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'header-only', label: 'Header Only' },
          { value: 'description-only', label: 'Description Only' },
        ],
      },
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'large',
        options: [
          { value: 'small', label: 'Small' },
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
        ],
      },
      {
        label: 'hasLeadingIcon',
        prop: 'hasleadingicon',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasActionButton',
        prop: 'hasactionbutton',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasTrailingIcon',
        prop: 'hastrailingicon',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasAccentBorder',
        prop: 'hasaccentborder',
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

export const alert: ComponentData = {
  "meta": {
    "slug": "alert",
    "name": "Alert",
    "node": "6663:104524",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=6663-104524",
    "description": "A persistent status surface with intent, title, description, and an optional action — in Card or Banner style. 90 variants across <code>Type</code> (Neutral / Information / Warning / Error / Success) × <code>Style</code> (Card / Banner) × <code>Content</code> (Default / Header Only / Description Only) × <code>Size</code> (3 steps, <code>Large</code> down to <code>Small</code>), with a <code>Leading-Slot</code> icon slot and a <code>Trailing-Slot</code>.",
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
        "cardKey": "alert-spec-main",
        "demoKey": "main",
        "title": "Callout",
        "node": "6663:104524",
        "description": "",
        "previewHtml": "<div id=\"alert-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": alertDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Type",
                "value": "Neutral",
                "prop": "type"
              },
              {
                "key": "Style",
                "value": "Card",
                "prop": "style"
              },
              {
                "key": "Content",
                "value": "Default",
                "prop": "content"
              },
              {
                "key": "Size",
                "value": "Large",
                "prop": "size"
              },
              { "key": "hasLeadingIcon", "value": "False", "prop": "hasleadingicon" },
              { "key": "hasActionButton", "value": "False", "prop": "hasactionbutton" },
              { "key": "hasTrailingIcon", "value": "True", "prop": "hastrailingicon" },
              { "key": "hasAccentBorder", "value": "True", "prop": "hasaccentborder" },
              {
                "key": "Leading-Slot",
                "value": "Slot · 90 swap options — ships a placeholder",
                "variants": { "hasleadingicon:false": { "hide": true } }
              },
              {
                "key": "Button_New",
                "value": "Text button — Learn more + chevron",
                "variants": { "hasactionbutton:false": { "hide": true } }
              },
              {
                "key": "Trailing-Slot",
                "value": "Slot · 90 swap options — ships a placeholder",
                "variants": { "hastrailingicon:false": { "hide": true } }
              },
              {
                "key": "Resolved variant",
                "value": "6663:104525 · 360 × 69",
                "mono": true,
                "prop": "variantNode",
                "variants": {
                  "type:neutral|style:card|content:default|size:large": {
                    "value": "6663:104525 · 360 × 69"
                  },
                  "type:neutral|style:card|content:header-only|size:large": {
                    "value": "6663:104590 · 360 × 56"
                  },
                  "type:neutral|style:card|content:header-only|size:small": {
                    "value": "6682:111532 · 360 × 56"
                  },
                  "type:success|style:banner|content:description-only|size:small": {
                    "value": "6801:110368 · 360 × 56"
                  },
                  "type:information|style:card|content:default|size:large": {
                    "value": "6663:104538 · 360 × 69"
                  },
                  "type:warning|style:card|content:default|size:large": {
                    "value": "6663:104551 · 360 × 69"
                  },
                  "type:error|style:card|content:default|size:large": {
                    "value": "6663:104564 · 360 × 69"
                  },
                  "type:success|style:card|content:default|size:large": {
                    "value": "6663:104577 · 360 × 69"
                  },
                  "type:information|style:card|content:header-only|size:large": {
                    "value": "6663:104601 · 360 × 56"
                  },
                  "type:warning|style:card|content:header-only|size:large": {
                    "value": "6663:104612 · 360 × 56"
                  },
                  "type:error|style:card|content:header-only|size:large": {
                    "value": "6663:104623 · 360 × 56"
                  },
                  "type:success|style:card|content:header-only|size:large": {
                    "value": "6663:104634 · 360 × 56"
                  },
                  "type:neutral|style:card|content:description-only|size:large": {
                    "value": "6663:104645 · 360 × 56"
                  },
                  "type:information|style:card|content:description-only|size:large": {
                    "value": "6663:104656 · 360 × 56"
                  },
                  "type:warning|style:card|content:description-only|size:large": {
                    "value": "6663:104667 · 360 × 56"
                  },
                  "type:error|style:card|content:description-only|size:large": {
                    "value": "6663:104678 · 360 × 56"
                  },
                  "type:success|style:card|content:description-only|size:large": {
                    "value": "6663:104689 · 360 × 56"
                  },
                  "type:neutral|style:card|content:default|size:medium": {
                    "value": "6679:107961 · 360 × 64"
                  },
                  "type:information|style:card|content:default|size:medium": {
                    "value": "6679:107976 · 360 × 64"
                  },
                  "type:warning|style:card|content:default|size:medium": {
                    "value": "6679:107991 · 360 × 64"
                  },
                  "type:error|style:card|content:default|size:medium": {
                    "value": "6679:108006 · 360 × 64"
                  },
                  "type:success|style:card|content:default|size:medium": {
                    "value": "6679:108021 · 360 × 64"
                  },
                  "type:neutral|style:card|content:header-only|size:medium": {
                    "value": "6679:108036 · 360 × 56"
                  },
                  "type:information|style:card|content:header-only|size:medium": {
                    "value": "6679:108049 · 360 × 56"
                  },
                  "type:warning|style:card|content:header-only|size:medium": {
                    "value": "6679:108062 · 360 × 56"
                  },
                  "type:error|style:card|content:header-only|size:medium": {
                    "value": "6679:108075 · 360 × 56"
                  },
                  "type:success|style:card|content:header-only|size:medium": {
                    "value": "6679:108088 · 360 × 56"
                  },
                  "type:neutral|style:card|content:description-only|size:medium": {
                    "value": "6679:108101 · 360 × 56"
                  },
                  "type:information|style:card|content:description-only|size:medium": {
                    "value": "6679:108114 · 360 × 56"
                  },
                  "type:warning|style:card|content:description-only|size:medium": {
                    "value": "6679:108127 · 360 × 56"
                  },
                  "type:error|style:card|content:description-only|size:medium": {
                    "value": "6679:108140 · 360 × 56"
                  },
                  "type:success|style:card|content:description-only|size:medium": {
                    "value": "6679:108153 · 360 × 56"
                  },
                  "type:neutral|style:card|content:default|size:small": {
                    "value": "6682:111457 · 360 × 57"
                  },
                  "type:information|style:card|content:default|size:small": {
                    "value": "6682:111472 · 360 × 57"
                  },
                  "type:warning|style:card|content:default|size:small": {
                    "value": "6682:111487 · 360 × 57"
                  },
                  "type:error|style:card|content:default|size:small": {
                    "value": "6682:111502 · 360 × 57"
                  },
                  "type:success|style:card|content:default|size:small": {
                    "value": "6682:111517 · 360 × 57"
                  },
                  "type:information|style:card|content:header-only|size:small": {
                    "value": "6682:111545 · 360 × 56"
                  },
                  "type:warning|style:card|content:header-only|size:small": {
                    "value": "6682:111558 · 360 × 56"
                  },
                  "type:error|style:card|content:header-only|size:small": {
                    "value": "6682:111571 · 360 × 56"
                  },
                  "type:success|style:card|content:header-only|size:small": {
                    "value": "6682:111584 · 360 × 56"
                  },
                  "type:neutral|style:card|content:description-only|size:small": {
                    "value": "6682:111597 · 360 × 56"
                  },
                  "type:information|style:card|content:description-only|size:small": {
                    "value": "6682:111610 · 360 × 56"
                  },
                  "type:warning|style:card|content:description-only|size:small": {
                    "value": "6682:111623 · 360 × 56"
                  },
                  "type:error|style:card|content:description-only|size:small": {
                    "value": "6682:111636 · 360 × 56"
                  },
                  "type:success|style:card|content:description-only|size:small": {
                    "value": "6682:111649 · 360 × 56"
                  },
                  "type:neutral|style:banner|content:default|size:large": {
                    "value": "6801:109634 · 360 × 69"
                  },
                  "type:information|style:banner|content:default|size:large": {
                    "value": "6801:109652 · 360 × 69"
                  },
                  "type:warning|style:banner|content:default|size:large": {
                    "value": "6801:109670 · 360 × 69"
                  },
                  "type:error|style:banner|content:default|size:large": {
                    "value": "6801:109688 · 360 × 69"
                  },
                  "type:success|style:banner|content:default|size:large": {
                    "value": "6801:109706 · 360 × 69"
                  },
                  "type:neutral|style:banner|content:header-only|size:large": {
                    "value": "6801:109724 · 360 × 56"
                  },
                  "type:information|style:banner|content:header-only|size:large": {
                    "value": "6801:109740 · 360 × 56"
                  },
                  "type:warning|style:banner|content:header-only|size:large": {
                    "value": "6801:109756 · 360 × 56"
                  },
                  "type:error|style:banner|content:header-only|size:large": {
                    "value": "6801:109772 · 360 × 56"
                  },
                  "type:success|style:banner|content:header-only|size:large": {
                    "value": "6801:109788 · 360 × 56"
                  },
                  "type:neutral|style:banner|content:description-only|size:large": {
                    "value": "6801:109804 · 360 × 56"
                  },
                  "type:information|style:banner|content:description-only|size:large": {
                    "value": "6801:109820 · 360 × 56"
                  },
                  "type:warning|style:banner|content:description-only|size:large": {
                    "value": "6801:109836 · 360 × 56"
                  },
                  "type:error|style:banner|content:description-only|size:large": {
                    "value": "6801:109852 · 360 × 56"
                  },
                  "type:success|style:banner|content:description-only|size:large": {
                    "value": "6801:109868 · 360 × 56"
                  },
                  "type:neutral|style:banner|content:default|size:medium": {
                    "value": "6801:109884 · 360 × 64"
                  },
                  "type:information|style:banner|content:default|size:medium": {
                    "value": "6801:109902 · 360 × 64"
                  },
                  "type:warning|style:banner|content:default|size:medium": {
                    "value": "6801:109920 · 360 × 64"
                  },
                  "type:error|style:banner|content:default|size:medium": {
                    "value": "6801:109938 · 360 × 64"
                  },
                  "type:success|style:banner|content:default|size:medium": {
                    "value": "6801:109956 · 360 × 64"
                  },
                  "type:neutral|style:banner|content:header-only|size:medium": {
                    "value": "6801:109974 · 360 × 56"
                  },
                  "type:information|style:banner|content:header-only|size:medium": {
                    "value": "6801:109990 · 360 × 56"
                  },
                  "type:warning|style:banner|content:header-only|size:medium": {
                    "value": "6801:110006 · 360 × 56"
                  },
                  "type:error|style:banner|content:header-only|size:medium": {
                    "value": "6801:110022 · 360 × 56"
                  },
                  "type:success|style:banner|content:header-only|size:medium": {
                    "value": "6801:110038 · 360 × 56"
                  },
                  "type:neutral|style:banner|content:description-only|size:medium": {
                    "value": "6801:110054 · 360 × 56"
                  },
                  "type:information|style:banner|content:description-only|size:medium": {
                    "value": "6801:110070 · 360 × 56"
                  },
                  "type:warning|style:banner|content:description-only|size:medium": {
                    "value": "6801:110086 · 360 × 56"
                  },
                  "type:error|style:banner|content:description-only|size:medium": {
                    "value": "6801:110102 · 360 × 56"
                  },
                  "type:success|style:banner|content:description-only|size:medium": {
                    "value": "6801:110118 · 360 × 56"
                  },
                  "type:neutral|style:banner|content:default|size:small": {
                    "value": "6801:110134 · 360 × 57"
                  },
                  "type:information|style:banner|content:default|size:small": {
                    "value": "6801:110152 · 360 × 57"
                  },
                  "type:warning|style:banner|content:default|size:small": {
                    "value": "6801:110170 · 360 × 57"
                  },
                  "type:error|style:banner|content:default|size:small": {
                    "value": "6801:110188 · 360 × 57"
                  },
                  "type:success|style:banner|content:default|size:small": {
                    "value": "6801:110206 · 360 × 57"
                  },
                  "type:neutral|style:banner|content:header-only|size:small": {
                    "value": "6801:110224 · 360 × 56"
                  },
                  "type:information|style:banner|content:header-only|size:small": {
                    "value": "6801:110240 · 360 × 56"
                  },
                  "type:warning|style:banner|content:header-only|size:small": {
                    "value": "6801:110256 · 360 × 56"
                  },
                  "type:error|style:banner|content:header-only|size:small": {
                    "value": "6801:110272 · 360 × 56"
                  },
                  "type:success|style:banner|content:header-only|size:small": {
                    "value": "6801:110288 · 360 × 56"
                  },
                  "type:neutral|style:banner|content:description-only|size:small": {
                    "value": "6801:110304 · 360 × 56"
                  },
                  "type:information|style:banner|content:description-only|size:small": {
                    "value": "6801:110320 · 360 × 56"
                  },
                  "type:warning|style:banner|content:description-only|size:small": {
                    "value": "6801:110336 · 360 × 56"
                  },
                  "type:error|style:banner|content:description-only|size:small": {
                    "value": "6801:110352 · 360 × 56"
                  }
                }
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Surface",
                "value": "#F6F9FD",
                "token": "—",
                "variants": {
                  "type:neutral": {
                    "value": "#F6F9FD"
                  },
                  "type:information": {
                    "value": "#E5F1FF"
                  },
                  "type:warning": {
                    "value": "#FFF9EB"
                  },
                  "type:error": {
                    "value": "#F8E6E6"
                  },
                  "type:success": {
                    "value": "#E7F8F0"
                  }
                }
              },
              {
                "key": "Left accent",
                "value": "#D7E0EF",
                "token": "—",
                "variants": { "type:neutral|hasaccentborder:false": { "hide": true }, "type:information|hasaccentborder:false": { "hide": true }, "type:warning|hasaccentborder:false": { "hide": true }, "type:error|hasaccentborder:false": { "hide": true }, "type:success|hasaccentborder:false": { "hide": true },
                  "type:neutral": {
                    "value": "#D7E0EF"
                  },
                  "type:information": {
                    "value": "#005CE5"
                  },
                  "type:warning": {
                    "value": "#EBB30A"
                  },
                  "type:error": {
                    "value": "#D61B2C"
                  },
                  "type:success": {
                    "value": "#27C990"
                  }
                }
              },
              {
                "key": "Title",
                "value": "#0A2757",
                "token": "—",
                "variants": {
                  "type:neutral": {
                    "value": "#0A2757"
                  },
                  "type:information": {
                    "value": "#072592"
                  },
                  "type:warning": {
                    "value": "#6C5009"
                  },
                  "type:error": {
                    "value": "#D61B2C"
                  },
                  "type:success": {
                    "value": "#035E50"
                  },
                  "type:neutral|content:description-only": {
                    "hide": true
                  },
                  "type:information|content:description-only": {
                    "hide": true
                  },
                  "type:warning|content:description-only": {
                    "hide": true
                  },
                  "type:error|content:description-only": {
                    "hide": true
                  },
                  "type:success|content:description-only": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Description",
                "value": "#6780A9",
                "token": "—",
                "variants": {
                  "type:neutral": {
                    "value": "#6780A9"
                  },
                  "type:information": {
                    "value": "#2340A9"
                  },
                  "type:warning": {
                    "value": "#966F0B"
                  },
                  "type:error": {
                    "value": "#D61B2C"
                  },
                  "type:success": {
                    "value": "#048570"
                  },
                  "type:neutral|content:header-only": {
                    "hide": true
                  },
                  "type:information|content:header-only": {
                    "hide": true
                  },
                  "type:warning|content:header-only": {
                    "hide": true
                  },
                  "type:error|content:header-only": {
                    "hide": true
                  },
                  "type:success|content:header-only": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Button label",
                "value": "#0A2757",
                "token": "—",
                "variants": { "hasactionbutton:false": { "hide": true } }
              },
              {
                "key": "Slot placeholder",
                "value": "#9F3DFB at 9% · dashed 4/4",
                "token": "—",
                "variants": { "hasleadingicon:false|hastrailingicon:false": { "hide": true } }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Button label",
                "value": "Primary/Label/Fine",
                "mono": true,
                "variants": { "hasactionbutton:false": { "hide": true } }
              },
              {
                "key": "Title",
                "value": "Primary/Headlines/Block",
                "mono": true,
                "variants": {
                  "size:medium": {
                    "value": "Primary/Multi-line Label/Base"
                  },
                  "size:small": {
                    "value": "Primary/Multi-line Label/Small"
                  },
                  "content:description-only": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Description",
                "value": "Secondary/Bold/Base",
                "mono": true,
                "variants": {
                  "size:medium": {
                    "value": "Secondary/Bold/Caption"
                  },
                  "size:small": {
                    "value": "Secondary/Bold/Small Caption"
                  },
                  "content:header-only": {
                    "hide": true
                  }
                }
              }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              {
                "key": "Height",
                "value": "69px",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Width",
                "value": "360px",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "6px",
                "mono": true,
                "variants": {
                  "style:banner": {
                    "value": "0 — square"
                  }
                }
              },
              {
                "key": "Left accent",
                "value": "6px, full height",
                "mono": true,
                "variants": { "hasaccentborder:false": { "hide": true } }
              },
              {
                "key": "Height rule",
                "value": "12 + max(text stack, 32px slot) + 12 — text centred when shorter",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "12px top and bottom · 20px left · 16px right",
                "mono": true
              },
              {
                "key": "Title → description",
                "value": "2px",
                "mono": true,
                "variants": {
                  "content:header-only": {
                    "hide": true
                  },
                  "content:description-only": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Trailing-Slot",
                "value": "32 × 32 at x 312, y 12",
                "mono": true,
                "variants": { "hastrailingicon:false": { "hide": true } }
              },
              {
                "key": "Leading-Slot",
                "value": "32 × 32 at x 20 · 12px to the text (assumed) — description wrap not measured",
                "mono": true,
                "variants": { "hasleadingicon:false": { "hide": true } }
              },
              {
                "key": "Button_New",
                "value": "91 × 24 · 2px below the text",
                "mono": true,
                "variants": { "hasactionbutton:false": { "hide": true } }
              }
            ]
          }
        ],
        "swift": "EBCallout(\n    title: \"This is for the title.\",\n    description: \"This is the description.\",\n    type: .neutral,\n    style: .card,\n    size: .large\n)\n.ebTrailing { EBIconButton(.close) { dismiss() } }",
        "compose": "EBCallout(\n    title = \"This is for the title.\",\n    description = \"This is the description.\",\n    type = EBCalloutType.Neutral,\n    style = EBCalloutStyle.Card,\n    size = EBCalloutSize.Large,\n    trailing = { EBIconButton(EBIcons.Close) { dismiss() } }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Type",
        "description": "Read off <code>get_node_info</code> on set <code>6663:104524</code>. <code>Style</code> changes only the corner radius — Card is 6, Banner square — so every colour is shared between the two. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Surface",
          "Accent",
          "Title",
          "Description"
        ],
        "rows": [
          {
            "role": "Neutral",
            "token": "—",
            "values": [
              "#F6F9FD",
              "#D7E0EF",
              "#0A2757",
              "#6780A9"
            ]
          },
          {
            "role": "Information",
            "token": "—",
            "values": [
              "#E5F1FF",
              "#005CE5",
              "#072592",
              "#2340A9"
            ]
          },
          {
            "role": "Warning",
            "token": "—",
            "values": [
              "#FFF9EB",
              "#EBB30A",
              "#6C5009",
              "#966F0B"
            ]
          },
          {
            "role": "Error",
            "token": "—",
            "values": [
              "#F8E6E6",
              "#D61B2C",
              "#D61B2C",
              "#D61B2C"
            ]
          },
          {
            "role": "Success",
            "token": "—",
            "values": [
              "#E7F8F0",
              "#27C990",
              "#035E50",
              "#048570"
            ]
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:alert:2.2.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.alert.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>6663:104524</code> — named <strong>Callout</strong> in Figma — in panel order: four variant axes, four booleans, then the two SLOTs (90 swap options each).",
      "rows": [
        {
          "figma": "Type — Neutral, Information, Warning, Error, Success",
          "swift": "<code>type: .neutral / .information / .warning / .error / .success</code>",
          "compose": "<code>type = EBCalloutType.Neutral / Information / Warning / Error / Success</code>"
        },
        {
          "figma": "Style — Card, Banner",
          "swift": "<code>style: .card / .banner</code>",
          "compose": "<code>style = EBCalloutStyle.Card / Banner</code>"
        },
        {
          "figma": "Content — Default, Header Only, Description Only",
          "swift": "which of <code>title:</code> / <code>description:</code> is passed",
          "compose": "<code>title: String?</code>, <code>description: String?</code> — at least one"
        },
        {
          "figma": "Size — Large, Medium, Small",
          "swift": "<code>size: .large / .medium / .small</code>",
          "compose": "<code>size = EBCalloutSize.Large / Medium / Small</code>"
        },
        {
          "figma": "hasLeadingIcon — boolean, False",
          "swift": "<code>.ebLeading { }</code> — omit for False",
          "compose": "<code>leading: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasActionButton — boolean, False",
          "swift": "<code>.ebAction(String) { }</code> — omit for False",
          "compose": "<code>actionLabel: String? = null</code> + <code>onAction</code>"
        },
        {
          "figma": "hasTrailingIcon — boolean, True",
          "swift": "<code>.ebTrailing { }</code> — omit for False",
          "compose": "<code>trailing: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasAccentBorder — boolean, True",
          "swift": "<code>showsAccent: Bool = true</code>",
          "compose": "<code>showsAccent: Boolean = true</code>"
        },
        {
          "figma": "— <code>Trailing-Slot</code> (SLOT, 32 × 32)",
          "swift": "<code>.ebTrailing { }</code> — dismissal lives here (v2.2)",
          "compose": "<code>trailing: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "— <code>Leading-Slot</code> (SLOT, 32 × 32)",
          "swift": "<code>.ebLeading { }</code>",
          "compose": "<code>leading: @Composable (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "— <code>Button_New</code> (text button, 91 × 24)",
          "swift": "<code>.ebAction(String) { }</code>",
          "compose": "<code>actionLabel: String? = null</code> + <code>onAction</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Callout/EBCallout.swift",
        "compose": "android/components/callout/EBCallout.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Information · Card · Default",
        "swift": "<span class=\"cmt\">// Type=Information, Style=Card, Content=Default, Size=Large — 6663:104538, 360 × 69.</span>\n<span class=\"typ\">EBCallout</span>(\n    title: <span class=\"str\">\"Transfer limit reached\"</span>,\n    description: <span class=\"str\">\"Try again tomorrow or verify your account.\"</span>,\n    type: .<span class=\"prp\">information</span>,\n    style: .<span class=\"prp\">card</span>,\n    size: .<span class=\"prp\">large</span>\n)\n.<span class=\"fn\">ebTrailing</span> { <span class=\"typ\">EBIconButton</span>(.<span class=\"prp\">close</span>) { dismiss() } }",
        "compose": "<span class=\"cmt\">// Type=Information, Style=Card, Content=Default, Size=Large — 6663:104538, 360 × 69.</span>\n<span class=\"typ\">EBCallout</span>(\n    title = <span class=\"str\">\"Transfer limit reached\"</span>,\n    description = <span class=\"str\">\"Try again tomorrow or verify your account.\"</span>,\n    type = <span class=\"typ\">EBCalloutType</span>.<span class=\"prp\">Information</span>,\n    style = <span class=\"typ\">EBCalloutStyle</span>.<span class=\"prp\">Card</span>,\n    size = <span class=\"typ\">EBCalloutSize</span>.<span class=\"prp\">Large</span>,\n    trailing = { <span class=\"typ\">EBIconButton</span>(<span class=\"typ\">EBIcons</span>.<span class=\"prp\">Close</span>) { dismiss() } }\n)"
      },
      {
        "subheading": "Warning · Banner · Header Only",
        "swift": "<span class=\"cmt\">// Type=Warning, Style=Banner, Content=Header Only, Size=Medium — 6801:110006, 360 × 56.</span>\n<span class=\"typ\">EBCallout</span>(\n    title: <span class=\"str\">\"Transfer limit reached\"</span>,\n    type: .<span class=\"prp\">warning</span>,\n    style: .<span class=\"prp\">banner</span>,\n    size: .<span class=\"prp\">medium</span>\n)\n.<span class=\"fn\">ebTrailing</span> { <span class=\"typ\">EBIconButton</span>(.<span class=\"prp\">close</span>) { dismiss() } }",
        "compose": "<span class=\"cmt\">// Type=Warning, Style=Banner, Content=Header Only, Size=Medium — 6801:110006, 360 × 56.</span>\n<span class=\"typ\">EBCallout</span>(\n    title = <span class=\"str\">\"Transfer limit reached\"</span>,\n    type = <span class=\"typ\">EBCalloutType</span>.<span class=\"prp\">Warning</span>,\n    style = <span class=\"typ\">EBCalloutStyle</span>.<span class=\"prp\">Banner</span>,\n    size = <span class=\"typ\">EBCalloutSize</span>.<span class=\"prp\">Medium</span>,\n    trailing = { <span class=\"typ\">EBIconButton</span>(<span class=\"typ\">EBIcons</span>.<span class=\"prp\">Close</span>) { dismiss() } }\n)"
      },
      {
        "subheading": "Error · Card · Description Only",
        "swift": "<span class=\"cmt\">// Type=Error, Style=Card, Content=Description Only, Size=Small — 6682:111636, 360 × 56.</span>\n<span class=\"typ\">EBCallout</span>(\n    description: <span class=\"str\">\"Try again tomorrow or verify your account.\"</span>,\n    type: .<span class=\"prp\">error</span>,\n    style: .<span class=\"prp\">card</span>,\n    size: .<span class=\"prp\">small</span>\n)\n.<span class=\"fn\">ebTrailing</span> { <span class=\"typ\">EBIconButton</span>(.<span class=\"prp\">close</span>) { dismiss() } }",
        "compose": "<span class=\"cmt\">// Type=Error, Style=Card, Content=Description Only, Size=Small — 6682:111636, 360 × 56.</span>\n<span class=\"typ\">EBCallout</span>(\n    description = <span class=\"str\">\"Try again tomorrow or verify your account.\"</span>,\n    type = <span class=\"typ\">EBCalloutType</span>.<span class=\"prp\">Error</span>,\n    style = <span class=\"typ\">EBCalloutStyle</span>.<span class=\"prp\">Card</span>,\n    size = <span class=\"typ\">EBCalloutSize</span>.<span class=\"prp\">Small</span>,\n    trailing = { <span class=\"typ\">EBIconButton</span>(<span class=\"typ\">EBIcons</span>.<span class=\"prp\">Close</span>) { dismiss() } }\n)"
      },
      {
        "subheading": "Success · Banner · Default",
        "swift": "<span class=\"cmt\">// Type=Success, Style=Banner, Content=Default, Size=Medium — 6801:109956, 360 × 64.</span>\n<span class=\"typ\">EBCallout</span>(\n    title: <span class=\"str\">\"Transfer limit reached\"</span>,\n    description: <span class=\"str\">\"Try again tomorrow or verify your account.\"</span>,\n    type: .<span class=\"prp\">success</span>,\n    style: .<span class=\"prp\">banner</span>,\n    size: .<span class=\"prp\">medium</span>\n)\n.<span class=\"fn\">ebTrailing</span> { <span class=\"typ\">EBIconButton</span>(.<span class=\"prp\">close</span>) { dismiss() } }",
        "compose": "<span class=\"cmt\">// Type=Success, Style=Banner, Content=Default, Size=Medium — 6801:109956, 360 × 64.</span>\n<span class=\"typ\">EBCallout</span>(\n    title = <span class=\"str\">\"Transfer limit reached\"</span>,\n    description = <span class=\"str\">\"Try again tomorrow or verify your account.\"</span>,\n    type = <span class=\"typ\">EBCalloutType</span>.<span class=\"prp\">Success</span>,\n    style = <span class=\"typ\">EBCalloutStyle</span>.<span class=\"prp\">Banner</span>,\n    size = <span class=\"typ\">EBCalloutSize</span>.<span class=\"prp\">Medium</span>,\n    trailing = { <span class=\"typ\">EBIconButton</span>(<span class=\"typ\">EBIcons</span>.<span class=\"prp\">Close</span>) { dismiss() } }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Live region",
        "ios": "Post an announcement with the title and description when it appears; Error should interrupt, the rest queue.",
        "android": "<code>liveRegion = LiveRegionMode.Assertive</code> for Error, <code>Polite</code> otherwise (documented v2.2)."
      },
      {
        "requirement": "Not colour alone",
        "ios": "Type changes the surface, the 6px accent and the text colour — nothing else. Put the severity in the title copy.",
        "android": "Same."
      },
      {
        "requirement": "Dismiss",
        "ios": "Dismissal lives in the 32 × 32 trailing slot; label it \"Dismiss\" and extend it to 44pt.",
        "android": "<code>IconButton</code>, 48dp, <code>contentDescription = \"Dismiss\"</code>."
      },
      {
        "requirement": "Contrast — title",
        "ios": "Neutral 13.80:1, Information 10.87:1, Warning 7.17:1, Success 7.01:1 — but Error #D61B2C on #F8E6E6 is 4.31:1, below 4.5:1 at 14–18pt bold.",
        "android": "Same ratios."
      },
      {
        "requirement": "Contrast — description",
        "ios": "Only Information passes (7.72:1). Neutral 3.80:1, Warning 4.37:1, Error 4.31:1 and Success 4.15:1 are all below 4.5:1.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Card inside a content area and Banner edge-to-edge at the top of a screen.",
        "dontText": "Don’t round a Banner or square a Card — Style exists to make that choice."
      },
      {
        "doText": "Match Size to the surrounding text: Large beside 16pt body, Small inside dense lists.",
        "dontText": "Don’t mix sizes within one screen."
      },
      {
        "doText": "Use Header Only for a single-line status and Description Only for a hint.",
        "dontText": "Don’t put a sentence in the title of a Header Only callout."
      },
      {
        "doText": "Put dismissal in the trailing slot.",
        "dontText": "Don’t ship the purple Slot Block placeholder."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Names follow the v2.1 pass — <code>AlertContainer</code>, <code>ContentRow</code>, <code>LeadingSlotContainer</code>, <code>Leading-Slot</code>. But <code>LeftBorderAccent</code> sits <strong>inside</strong> <code>AlertContainer</code> on Information, Error and Success and <strong>outside</strong> it on Neutral and Warning, and Neutral’s ContentRow is 280 wide where the other Types’ are 292."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Four PascalCase axes over a complete 90-variant matrix, plus four <code>has*</code> booleans on <code>True</code>/<code>False</code>. The set is now named <strong>Callout</strong> in Figma while this page and its layers still say Alert, and a separate Callout page documents a different Sticker Sheets component."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All six text layers resolve <code>matched</code> — <code>Primary/Headlines/Block</code>, <code>Primary/Multi-line Label/Base</code>, <code>Primary/Multi-line Label/Small</code>, <code>Secondary/Bold/Base</code>, <code>Secondary/Bold/Caption</code>, <code>Secondary/Bold/Small Caption</code>. Colour bindings cannot be read with the plugin."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One view with four enums and two slots; heights follow a rule — 12 + title + 2 + description + 12 for Default (69 / 64 / 57), and 56 for the one-line contents."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "na",
        "statusLabel": "Not Applicable",
        "notes": "Display-only; dismissal lives in the trailing slot (v2.2) and the button belongs to its owner."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Leading and trailing content are real SLOTs; <code>Button_New</code> is an instance delegated to the Button owner (v2.2)."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Four enums and two slots are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 90,
      "description": "<code>Type</code> (5) × <code>Style</code> (2) × <code>Content</code> (3) × <code>Size</code> (3) = 90 variants, a complete matrix, all 360 wide. Default is 69 / 64 / 57 tall at Large / Medium / Small; Header Only and Description Only are 56 at every size.",
      "columns": [
        "Type",
        "Style",
        "Variants",
        "Heights",
        "Default Large node"
      ],
      "rows": [
        {
          "cells": [
            "Neutral",
            "Card",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6663:104525</code>"
          ]
        },
        {
          "cells": [
            "Neutral",
            "Banner",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6801:109634</code>"
          ]
        },
        {
          "cells": [
            "Information",
            "Card",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6663:104538</code>"
          ]
        },
        {
          "cells": [
            "Information",
            "Banner",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6801:109652</code>"
          ]
        },
        {
          "cells": [
            "Warning",
            "Card",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6663:104551</code>"
          ]
        },
        {
          "cells": [
            "Warning",
            "Banner",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6801:109670</code>"
          ]
        },
        {
          "cells": [
            "Error",
            "Card",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6663:104564</code>"
          ]
        },
        {
          "cells": [
            "Error",
            "Banner",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6801:109688</code>"
          ]
        },
        {
          "cells": [
            "Success",
            "Card",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6663:104577</code>"
          ]
        },
        {
          "cells": [
            "Success",
            "Banner",
            "9",
            "Default 69 / 64 / 57 · one-line 56",
            "<code>6801:109706</code>"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.2.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 6663:104524",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with all four axes.</strong> Two cards on retired nodes <code>18444:2087</code> and <code>18444:2019</code> carried a Type-only panel. Now one card with <code>Type</code>, <code>Style</code>, <code>Content</code> and <code>Size</code>, resolving all 90 variants.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> Surface, 6px accent, title and description colour per Type; radius 6 on Card and square on Banner; heights 69 / 64 / 57 for Default and 56 for the one-line contents; the 32px trailing slot at x 312.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography now names text styles per Size.</strong> Title <code>Primary/Headlines/Block</code>, <code>Primary/Multi-line Label/Base</code>, <code>Primary/Multi-line Label/Small</code>; description <code>Secondary/Bold/Base</code>, <code>Secondary/Bold/Caption</code>, <code>Secondary/Bold/Small Caption</code> — all matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>The Code tab was rebuilt on the live axes.</strong> Install is <code>com.eastblue.ds:alert:2.2.1</code>, with four snippets across Types, Styles and Sizes and a per-Type inventory.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard rescored.</strong> C3, C4, C6 Ready; C1 and C2 Needs Refinement on new findings; C5 Not Applicable; C7 Not Mapped.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>The Figma set is now named Callout.</strong> This page, its layers (<code>AlertContainer</code>) and the site call it Alert, while a separate Callout page documents a different Sticker Sheets component (<code>23:179895</code>). <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>The left accent sits inconsistently</strong> — inside <code>AlertContainer</code> on Information, Error and Success, outside it on Neutral and Warning — and Neutral’s ContentRow is 280 wide against 292 elsewhere. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Two values are not readable while their booleans are off</strong> — the gap after <code>Leading-Slot</code> (the preview assumes 12, the gap Neutral leaves before Trailing-Slot) and the button’s chevron glyph, which does not export from a hidden layer. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Descriptions fail AA on four of five Types</strong> — Neutral 3.80:1, Warning 4.37:1, Error 4.31:1, Success 4.15:1 — and the Error title is 4.31:1. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Panel confirmed from the property panel.</strong> Four booleans the variant names do not show — <code>hasLeadingIcon</code> and <code>hasActionButton</code> (False), <code>hasTrailingIcon</code> and <code>hasAccentBorder</code> (True) — plus <code>Leading-Slot</code> and <code>Trailing-Slot</code> with 90 swap options each. They explain the two layers that did not render. The height follows 12 + max(text stack, 32px slot) + 12, which reproduces every measured variant.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        }
      ]
    },
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
