import type { ComponentData, DemoControlSection } from '../types';

// Panel mirrors the variant axes of set 4915:25141, in variant-name order.
// No property-panel screenshot was supplied, so a text or instance-swap
// property would not appear here. Only 22 of the 96 combinations are built;
// the demo script snaps to the nearest built variant. Text-Slot and
// Component-Slot are SLOTs and get no control.
const toastDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Appearance',
        prop: 'appearance',
        defaultValue: 'default',
        options: [
          { value: 'default', label: 'Default' },
          { value: 'destructive', label: 'Destructive' },
          { value: 'pending', label: 'Pending' },
        ],
      },
      {
        label: 'Theme',
        prop: 'theme',
        defaultValue: 'dark',
        options: [
          { value: 'dark', label: 'Dark' },
          { value: 'light', label: 'Light' },
        ],
      },
      {
        label: 'Size',
        prop: 'size',
        defaultValue: 'md',
        options: [
          { value: 'md', label: 'MD' },
          { value: 'sm', label: 'SM' },
        ],
      },
      {
        label: 'hasLeadingIcon',
        prop: 'hasleadingicon',
        control: 'toggle',
        defaultValue: 'true',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasTrailingAction',
        prop: 'hastrailingaction',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
      {
        label: 'hasDescription',
        prop: 'hasdescription',
        control: 'toggle',
        defaultValue: 'false',
        options: [
          { value: 'false', label: 'False' },
          { value: 'true', label: 'True' },
        ],
      },
    ],
  },
];

export const toast: ComponentData = {
  "meta": {
    "slug": "toast",
    "name": "Toast",
    "node": "4915:25141",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4915-25141",
    "description": "A transient bottom-anchored message for confirmations and inline alerts, with optional leading icon, description and trailing action. Auto-dismisses after a short delay.",
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
    "navGroup": "Toast",
    "verdict": {
      "kind": "keep",
      "title": "Keep — documentation gaps only",
      "text": "Rebuilt on node <code>4915:25141</code> in the 2026 Working File as <code>Appearance</code> × <code>Theme</code> × <code>Size</code> × three <code>has*</code> booleans, authored as a sparse 22-variant set. The family restructure is complete: Toast and Toast - With Button are merged, the overloaded <code>theme</code> axis is split, every variant value follows §5, layer naming is clean, and the description and trailing action are real Figma Slots composing shared components. All four DS Health traits pass. What remains is documentation — the dismiss and auto-duration contract, the native primitive mapping, and the a11y live-region behaviour."
    }
  },
  "overview": {
    "inContextNote": "Toasts float over the app screen — not inline with content. Success toasts confirm completed actions (\"Transfer sent\"), pending toasts acknowledge background work (\"Uploading…\"), and error toasts surface failures that don't block the flow. They auto-dismiss after ~3 seconds unless swiped.",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"toast-demo-preview\"><div class=\"eb-preview eb-preview-toast eb-preview-toast--dark eb-preview-toast--large\"><div class=\"eb-preview-toast__container\"><div class=\"eb-preview-toast__icon-wrap\"><svg class=\"eb-preview-toast__icon eb-preview-toast__icon--large\" viewBox=\"0 0 24 24\" fill=\"none\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"10\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" fill=\"none\"></circle><path d=\"M7.50 12.20 L10.80 16.50 L17.00 7.50\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"></path></svg></div><p class=\"eb-preview-toast__label\">Add the popup message here</p></div></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select id=\"toast-ctrl-type\" class=\"demo-panel-select\" onchange=\"_toastUpdate()\"><option value=\"default\" selected=\"\">default</option><option value=\"pending\">pending</option><option value=\"error\">error</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Theme</span><select id=\"toast-ctrl-theme\" class=\"demo-panel-select\" onchange=\"_toastUpdate()\"><option value=\"dark\" selected=\"\">dark</option><option value=\"light\">light</option><option value=\"default\">default</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">With Icon</span><select id=\"toast-ctrl-withicon\" class=\"demo-panel-select\" onchange=\"_toastUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Large Label</span><select id=\"toast-ctrl-largelabel\" class=\"demo-panel-select\" onchange=\"_toastUpdate()\"><option value=\"yes\" selected=\"\">yes</option><option value=\"no\">no</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "Drops into any transient-feedback moment — transfers, uploads, validation errors. Not tied to a specific screen."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its colors and typography, composes a shared <code>Subtext Message</code> for the description and a <code>Button - XSmall</code> for the action, and each Appearance carries its own icon instance from the library. Nothing external required to render."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "<code>Appearance</code> and <code>Theme</code> are separate axes, <code>Size</code> uses the standard <code>MD | SM</code> scale, the three <code>has*</code> booleans carry correct verb prefixes and are genuine Figma booleans, and every variant value is Title Cased per §5."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "The trailing action is an <code>addon</code> <code>SLOT</code> holding a <code>Button - XSmall</code> instance — <code>addon</code> being §4's canonical name for this pattern — and the description is a <code>content</code> <code>SLOT</code> carrying a shared <code>Subtext Message</code>. The separate Toast - With Button sibling is retired."
      }
    ],
    "behavior": [
      {
        "state": "Show / auto-dismiss",
        "ios": "yes",
        "android": "yes",
        "property": "Not modeled",
        "notes": "Toasts appear on a host overlay and auto-dismiss after a duration (~3s short, ~5s long). Host-screen concern — no visual state variant needed."
      },
      {
        "state": "Swipe to dismiss",
        "ios": "na",
        "android": "na",
        "property": "Not annotated",
        "notes": "Standard gesture on both platforms. Not called out in the component spec."
      },
      {
        "state": "Tap to dismiss",
        "ios": "na",
        "android": "na",
        "property": "Not annotated",
        "notes": "Pending variants already wrap the container in a <code>button</code> element in the Figma code — but no interaction callback is documented."
      },
      {
        "state": "Pending spinner animation",
        "ios": "na",
        "android": "na",
        "property": "Gray circle",
        "notes": "Pending icon is a static gray circle (<code>icon-placeholder</code>) — should be an animated spinner (ProgressView / CircularProgressIndicator)."
      },
      {
        "state": "A11y announcement",
        "ios": "na",
        "android": "na",
        "property": "Not annotated",
        "notes": "Error toasts should announce as assertive; default/pending as polite. Not spec'd."
      }
    ],
    "resolved": [
      {
        "headline": "Toast and Toast - With Button consolidated.",
        "body": "v2.0: Rebuilt on node <code>4915:25141</code> in the 2026 Working File. The two components that modelled one primitive are now a single set — the trailing button is a <code>hasTrailingAction</code> boolean rather than a separate component. Confirmed as a permanent merge by the component owner. (C4 · Family)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      },
      {
        "headline": "<code>theme</code> axis split into Appearance and Theme.",
        "body": "v2.0: The overloaded axis that mixed status with light/dark is now <code>Appearance</code> (default · destructive · pending) × <code>Theme</code> (dark · light), exactly as recommended. Semantic meaning and visual mode are independent. (C2 · Property)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "<code>Large Label</code> replaced by a real Size axis.",
        "body": "v2.0: The content flag masquerading as a size is now <code>Size = base | sm</code>. Value naming still needs work — see open issues — but the axis itself is correct. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Boolean values normalised.",
        "body": "v2.0: <code>hasLeadingIcon</code>, <code>hasTrailingAction</code> and <code>hasDescription</code> use <code>true</code>/<code>false</code> rather than <code>yes</code>/<code>no</code> strings, and all three carry the correct <code>has</code> verb prefix per §2. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Action slot added.",
        "body": "v2.0: The trailing action is an <code>addon</code> <code>SLOT</code> holding a <code>Button - XSmall</code> instance — and <code>addon</code> is the canonical name §4 gives for exactly this pattern. Consumers can swap the button without detaching. (Slot)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Description composed from the shared Subtext Message.",
        "body": "v2.0: The description is a <code>content</code> <code>SLOT</code> carrying a shared <code>Subtext Message</code> instance, matching Text Area, Upload File and View Only Field. Copy changes propagate from one source. (Composition)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Size and Theme values aligned to the standard sets.",
        "body": "v2.1: <code>Size = base | sm</code> → <code>MD | SM</code>, matching §5's <code>XS · SM · MD · LG · XL</code> scale and the values Amount Text Field and View Only Field use. <code>Theme</code> is now <code>Dark | Light</code> in Title Case per §5. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Booleans confirmed as real Figma booleans.",
        "body": "v2.1: <code>hasLeadingIcon</code>, <code>hasTrailingAction</code> and <code>hasDescription</code> now render <code>True</code>/<code>False</code> capitalised, matching every genuine Figma boolean elsewhere in the file. They map directly to Swift <code>Bool</code> and Kotlin <code>Boolean</code>. (C2)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Layer naming completed.",
        "body": "v2.2: <code>container</code> → <code>ToastRow</code>, the two sibling <code>offset</code> frames → <code>LeadingIcon</code> and <code>TextContent</code>, <code>text-container</code> → <code>TextGroup</code>, and <code>#content</code> → <code>Title</code>. The two anonymous slots also gained names — <code>Text-Slot</code> for the description and <code>Component-Slot</code> for the trailing action. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Pending placeholder replaced with a real icon.",
        "body": "v2.2: The <code>icon-placeholder</code> rectangle is gone. <code>LeadingIcon</code> now holds an <code>Information</code> instance from the icon library — chosen by the owner over a spinner, so Pending reads as an informational notice rather than an in-flight progress state. Each Appearance carries its own icon instance, which keeps glyph and semantic meaning in step and removes the need for a leading-icon slot. (C6 · Asset)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "All variant values Title Cased.",
        "body": "v2.3: <code>Appearance=pending</code> → <code>Pending</code>, the last value the casing sweep had missed. Every one of the 22 variant names now conforms to §5 — <code>Appearance = Default | Destructive | Pending</code>, <code>Theme = Dark | Light</code>, <code>Size = MD | SM</code>, and three <code>has*</code> booleans on <code>True | False</code>. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Dismiss and auto-duration contract documented.",
        "body": "v2.4: Documented. <strong>Auto-hide</strong> — 4 seconds by default; 8 seconds when <code>hasTrailingAction=True</code>, since the user needs time to read the message and reach the action. <code>Appearance=Pending</code> does not auto-hide at all: it represents an in-flight operation and is replaced by a Default or Destructive toast when that operation resolves. <strong>Dismissal</strong> — a horizontal swipe in either direction dismisses. Tapping the toast body does nothing; only the trailing action is a tap target, and triggering it dismisses the toast. <strong>Stacking</strong> — one toast at a time; a new message replaces the current one rather than queueing behind it. Durations follow Material 3 Snackbar convention (4s short, longer when an action is present) rather than a product measurement, so they are a starting contract — say the word if product has specific numbers and I will amend. (C5 · Docs)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Native mapping and a11y live region documented.",
        "body": "v2.4: Documented. <strong>iOS</strong> — there is no system toast; build a custom view presented through a <code>ViewModifier</code> over the root, anchored to the bottom safe area. <strong>Android</strong> — Material 3 <code>Snackbar</code> with <code>SnackbarHost</code> covers the Default and Destructive appearances and maps <code>hasTrailingAction</code> onto its action slot, though the Pending appearance and the Theme axis need a custom composable. <strong>Accessibility</strong> — a transient message that is never focused must be announced, not merely rendered. On iOS post an <code>AccessibilityNotification.Announcement</code> with the message text; on Android set <code>Modifier.semantics { liveRegion = LiveRegionMode.Polite }</code>, raised to <code>Assertive</code> for <code>Appearance=Destructive</code> so an error interrupts rather than queues. The trailing action carries its own label; the leading icon is decorative and should be hidden from the accessibility tree. (C4 · A11y · Docs)",
        "tag": {
          "criterion": "C4",
          "label": "C4 · Native Mappability"
        }
      }
    ],
    "open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet.",
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
        "cardKey": "ts-spec-main",
        "demoKey": "main",
        "title": "Toast",
        "node": "4915:25141",
        "description": "",
        "previewHtml": "<div id=\"toast-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": toastDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "Appearance",
                "value": "Default",
                "prop": "appearance"
              },
              {
                "key": "Theme",
                "value": "Dark",
                "prop": "theme"
              },
              {
                "key": "Size",
                "value": "MD",
                "prop": "size"
              },
              {
                "key": "hasLeadingIcon",
                "value": "True",
                "prop": "hasleadingicon"
              },
              {
                "key": "hasTrailingAction",
                "value": "False",
                "prop": "hastrailingaction"
              },
              {
                "key": "hasDescription",
                "value": "False",
                "prop": "hasdescription"
              },
              {
                "key": "Leading icon",
                "value": "Checkmark (Circular)",
                "variants": {
                  "appearance:pending": {
                    "value": "Information"
                  },
                  "appearance:destructive": {
                    "value": "Close"
                  },
                  "hasleadingicon:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Text-Slot",
                "value": "Slot · Subtext Message",
                "variants": {
                  "hasdescription:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Component-Slot",
                "value": "Slot · Button - XSmall",
                "variants": {
                  "hastrailingaction:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Resolved variant",
                "value": "4915:25142 · 312 × 38",
                "mono": true,
                "variants": {
                  "appearance:default|theme:dark|size:md|hasleadingicon:true|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25142 · 312 × 38"
                  },
                  "appearance:default|theme:light|size:md|hasleadingicon:true|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25148 · 312 × 38"
                  },
                  "appearance:destructive|theme:dark|size:md|hasleadingicon:true|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25154 · 312 × 38"
                  },
                  "appearance:pending|theme:dark|size:md|hasleadingicon:true|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25160 · 312 × 38"
                  },
                  "appearance:pending|theme:light|size:md|hasleadingicon:true|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25166 · 312 × 38"
                  },
                  "appearance:destructive|theme:dark|size:md|hasleadingicon:false|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25172 · 312 × 38"
                  },
                  "appearance:default|theme:dark|size:md|hasleadingicon:false|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25175 · 312 × 38"
                  },
                  "appearance:default|theme:light|size:md|hasleadingicon:false|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25178 · 312 × 38"
                  },
                  "appearance:destructive|theme:dark|size:sm|hasleadingicon:true|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25181 · 312 × 38"
                  },
                  "appearance:default|theme:dark|size:sm|hasleadingicon:true|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25186 · 312 × 38"
                  },
                  "appearance:default|theme:light|size:sm|hasleadingicon:true|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25192 · 312 × 38"
                  },
                  "appearance:destructive|theme:dark|size:sm|hasleadingicon:false|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25197 · 312 × 38"
                  },
                  "appearance:pending|theme:dark|size:sm|hasleadingicon:true|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25200 · 312 × 38"
                  },
                  "appearance:pending|theme:light|size:sm|hasleadingicon:true|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25205 · 312 × 38"
                  },
                  "appearance:default|theme:dark|size:sm|hasleadingicon:false|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25210 · 312 × 38"
                  },
                  "appearance:default|theme:light|size:sm|hasleadingicon:false|hastrailingaction:false|hasdescription:false": {
                    "value": "4915:25213 · 312 × 38"
                  },
                  "appearance:default|theme:dark|size:md|hasleadingicon:false|hastrailingaction:true|hasdescription:true": {
                    "value": "4915:25216 · 312 × 59"
                  },
                  "appearance:default|theme:light|size:md|hasleadingicon:false|hastrailingaction:true|hasdescription:true": {
                    "value": "4915:25224 · 312 × 59"
                  },
                  "appearance:destructive|theme:light|size:md|hasleadingicon:false|hastrailingaction:true|hasdescription:true": {
                    "value": "4915:25232 · 312 × 59"
                  },
                  "appearance:default|theme:dark|size:md|hasleadingicon:false|hastrailingaction:true|hasdescription:false": {
                    "value": "4915:25240 · 312 × 41"
                  },
                  "appearance:default|theme:light|size:md|hasleadingicon:false|hastrailingaction:true|hasdescription:false": {
                    "value": "4915:25245 · 312 × 41"
                  },
                  "appearance:destructive|theme:light|size:md|hasleadingicon:false|hastrailingaction:true|hasdescription:false": {
                    "value": "4915:25250 · 312 × 41"
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
                "value": "#0A2757",
                "token": "—",
                "variants": {
                  "theme:light": {
                    "value": "#FFFFFF"
                  },
                  "appearance:destructive|theme:dark": {
                    "value": "#D61B2C"
                  },
                  "appearance:destructive|theme:light": {
                    "value": "#D61B2C"
                  }
                }
              },
              {
                "key": "Border",
                "value": "#E5EBF4",
                "token": "—",
                "variants": {
                  "appearance:destructive": {
                    "value": "#F4C7C9"
                  }
                }
              },
              {
                "key": "Title",
                "value": "#FFFFFF",
                "token": "—",
                "variants": {
                  "theme:light": {
                    "value": "#0A2757"
                  },
                  "appearance:destructive|theme:dark": {
                    "value": "#FFFFFF"
                  },
                  "appearance:destructive|theme:light": {
                    "value": "#FFFFFF"
                  }
                }
              },
              {
                "key": "Icon",
                "value": "#FFFFFF",
                "token": "—",
                "variants": {
                  "hasleadingicon:false|appearance:default|theme:dark": { "hide": true },
                  "hasleadingicon:false|appearance:default|theme:light": { "hide": true },
                  "hasleadingicon:false|appearance:destructive|theme:dark": { "hide": true },
                  "hasleadingicon:false|appearance:destructive|theme:light": { "hide": true },
                  "hasleadingicon:false|appearance:pending|theme:dark": { "hide": true },
                  "hasleadingicon:false|appearance:pending|theme:light": { "hide": true },
                  "theme:light": {
                    "value": "#0A2757"
                  },
                  "appearance:destructive|theme:dark": {
                    "value": "#FFFFFF"
                  },
                  "appearance:destructive|theme:light": {
                    "value": "#FFFFFF"
                  },
                  "hasleadingicon:false|theme:dark": {
                    "hide": true
                  },
                  "hasleadingicon:false|theme:light": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Description",
                "value": "#F6F9FD @ 72%",
                "token": "—",
                "variants": {
                  "theme:light": {
                    "value": "#6780A9"
                  },
                  "appearance:destructive|theme:light": {
                    "value": "#F6F9FD @ 80%"
                  },
                  "hasdescription:false|theme:dark": {
                    "hide": true
                  },
                  "hasdescription:false|theme:light": {
                    "hide": true
                  },
                  "hasdescription:false|appearance:destructive|theme:light": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Button surface",
                "value": "#FFFFFF",
                "token": "—",
                "variants": {
                  "theme:light": {
                    "value": "#005CE5"
                  },
                  "appearance:destructive|theme:light": {
                    "value": "None — no fill"
                  },
                  "hastrailingaction:false|theme:dark": {
                    "hide": true
                  },
                  "hastrailingaction:false|theme:light": {
                    "hide": true
                  },
                  "hastrailingaction:false|appearance:destructive|theme:dark": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Button label",
                "value": "#005CE5",
                "token": "—",
                "variants": {
                  "theme:light": {
                    "value": "#FFFFFF"
                  },
                  "appearance:destructive|theme:light": {
                    "value": "#FFFFFF"
                  },
                  "hastrailingaction:false|theme:dark": {
                    "hide": true
                  },
                  "hastrailingaction:false|theme:light": {
                    "hide": true
                  },
                  "hastrailingaction:false|appearance:destructive|theme:dark": {
                    "hide": true
                  }
                }
              }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              {
                "key": "Title",
                "value": "Primary/Label/Light/Small",
                "mono": true,
                "variants": {
                  "size:sm": {
                    "value": "Primary/Multi-line Label/Light/Fine"
                  },
                  "hastrailingaction:true": {
                    "value": "Primary/Multi-line Label/Small"
                  }
                }
              },
              {
                "key": "Description",
                "value": "Secondary/Bold/Small Caption",
                "mono": true,
                "variants": {
                  "hasdescription:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Button label",
                "value": "Primary/Label/Small",
                "mono": true,
                "variants": {
                  "hastrailingaction:false": {
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
                "value": "38px",
                "mono": true,
                "variants": {
                  "hastrailingaction:true": {
                    "value": "41px"
                  },
                  "hastrailingaction:true|hasdescription:true": {
                    "value": "59px"
                  }
                }
              },
              {
                "key": "Width",
                "value": "312px",
                "mono": true
              },
              {
                "key": "Radius",
                "value": "8px",
                "mono": true
              },
              {
                "key": "Padding",
                "value": "12px all sides",
                "mono": true,
                "variants": {
                  "hastrailingaction:true": {
                    "value": "16px H · 8px V"
                  },
                  "hastrailingaction:true|hasdescription:true": {
                    "value": "16px H · 12px V"
                  }
                }
              },
              {
                "key": "Leading icon",
                "value": "24 × 24 · 8px to Title",
                "mono": true,
                "variants": {
                  "size:sm": {
                    "value": "16 × 16 · 8px to Title"
                  },
                  "hasleadingicon:false|size:md": {
                    "hide": true
                  },
                  "hasleadingicon:false|size:sm": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Title width",
                "value": "256px",
                "mono": true,
                "variants": {
                  "size:sm": {
                    "value": "264px"
                  },
                  "hasleadingicon:false|size:md": {
                    "value": "288px"
                  },
                  "hasleadingicon:false|size:sm": {
                    "value": "288px"
                  },
                  "hastrailingaction:true|hasleadingicon:false|size:md": {
                    "value": "188px"
                  }
                }
              },
              {
                "key": "Text-Slot",
                "value": "188 × 15 · 4px below Title",
                "mono": true,
                "variants": {
                  "hasdescription:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Component-Slot",
                "value": "68 × 35 · 24px after text",
                "mono": true,
                "variants": {
                  "hastrailingaction:false": {
                    "hide": true
                  },
                  "hastrailingaction:true|hasdescription:false": {
                    "value": "68 × 25 · 24px after text"
                  }
                }
              },
              {
                "key": "Button",
                "value": "68 × 24",
                "mono": true,
                "variants": {
                  "hastrailingaction:false": {
                    "hide": true
                  },
                  "hastrailingaction:true|appearance:destructive": {
                    "value": "67 × 24"
                  }
                }
              },
              {
                "key": "Fill layer",
                "value": "ToastRow",
                "mono": true,
                "variants": {
                  "hastrailingaction:true|hasdescription:true": {
                    "value": "Component frame"
                  },
                  "hastrailingaction:true|hasdescription:false|theme:light": {
                    "value": "Component frame"
                  }
                }
              }
            ]
          }
        ],
        "swift": "EBToast(\n    \"Add the popup message here\",\n    appearance: .default,\n    theme: .dark,\n    size: .md\n)",
        "compose": "EBToast(\n    message = \"Add the popup message here\",\n    appearance = EBToastAppearance.Default,\n    theme = EBToastTheme.Dark,\n    size = EBToastSize.MD\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Appearance & Theme",
        "description": "Read off <code>get_node_info</code> and <code>get_svg</code> on set <code>4915:25141</code>. <strong>Destructive is the same red whatever its Theme value</strong> — its message variants are named <code>Theme=Dark</code> and its action variants <code>Theme=Light</code>. The Button belongs to its own component. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Default · Dark",
          "Default · Light",
          "Pending · Dark",
          "Pending · Light",
          "Destructive"
        ],
        "rows": [
          {
            "role": "Surface",
            "token": "—",
            "values": [
              "#0A2757",
              "#FFFFFF",
              "#0A2757",
              "#FFFFFF",
              "#D61B2C"
            ]
          },
          {
            "role": "Border",
            "token": "—",
            "values": [
              "#E5EBF4",
              "#E5EBF4",
              "#E5EBF4",
              "#E5EBF4",
              "#F4C7C9"
            ]
          },
          {
            "role": "Title & icon",
            "token": "—",
            "values": [
              "#FFFFFF",
              "#0A2757",
              "#FFFFFF",
              "#0A2757",
              "#FFFFFF"
            ]
          },
          {
            "role": "Description",
            "token": "—",
            "values": [
              "#F6F9FD @ 72%",
              "#6780A9",
              "–",
              "–",
              "#F6F9FD @ 80%"
            ]
          },
          {
            "role": "Button surface",
            "token": "—",
            "values": [
              "#FFFFFF",
              "#005CE5",
              "–",
              "–",
              "None"
            ]
          },
          {
            "role": "Button label",
            "token": "—",
            "values": [
              "#005CE5",
              "#FFFFFF",
              "–",
              "–",
              "#FFFFFF"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:toast:2.4.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.toast.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per variant axis of set <code>4915:25141</code>, in variant-name order, then the two SLOTs and the text layers. No property-panel screenshot was supplied and component property definitions are not readable, so a text property on the set would be missing here. Only 22 of 96 combinations are built — the native API should accept only those.",
      "rows": [
        {
          "figma": "Appearance — Default, Destructive, Pending",
          "swift": "<code>appearance: .default / .destructive / .pending</code>",
          "compose": "<code>appearance = EBToastAppearance.Default / Destructive / Pending</code>"
        },
        {
          "figma": "Theme — Dark, Light",
          "swift": "<code>theme: .dark / .light</code> — ignored for Destructive",
          "compose": "<code>theme = EBToastTheme.Dark / Light</code>"
        },
        {
          "figma": "Size — MD, SM",
          "swift": "<code>size: .md / .sm</code>",
          "compose": "<code>size = EBToastSize.MD / SM</code>"
        },
        {
          "figma": "hasLeadingIcon — True, False",
          "swift": "<code>showsIcon: Bool = true</code> — the glyph follows Appearance",
          "compose": "<code>showsIcon: Boolean = true</code>"
        },
        {
          "figma": "hasTrailingAction — True, False",
          "swift": "<code>.ebAction(String) { }</code> — omit for False",
          "compose": "<code>actionLabel: String? = null</code> + <code>onAction: (() -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasDescription — True, False",
          "swift": "<code>.ebDescription(String)</code> — omit for False",
          "compose": "<code>description: String? = null</code>"
        },
        {
          "figma": "— Text-Slot (SLOT · Subtext Message)",
          "swift": "the description text",
          "compose": "the description text"
        },
        {
          "figma": "— Component-Slot (SLOT · Button - XSmall)",
          "swift": "the action button",
          "compose": "the action button"
        },
        {
          "figma": "— Title text layer",
          "swift": "<code>EBToast(_ message: String)</code>",
          "compose": "<code>message: String</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Toast/EBToast.swift",
        "compose": "android/components/toast/EBToast.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Default · Dark · MD",
        "swift": "<span class=\"cmt\">// Appearance=Default, Theme=Dark, Size=MD, hasLeadingIcon=True, hasTrailingAction=False, hasDescription=False — 4915:25142, 312 × 38.</span>\n<span class=\"typ\">EBToast</span>(\n    <span class=\"str\">\"Add the popup message here\"</span>,\n    appearance: .<span class=\"prp\">default</span>,\n    theme: .<span class=\"prp\">dark</span>,\n    size: .<span class=\"prp\">md</span>\n)",
        "compose": "<span class=\"cmt\">// Appearance=Default, Theme=Dark, Size=MD, hasLeadingIcon=True, hasTrailingAction=False, hasDescription=False — 4915:25142, 312 × 38.</span>\n<span class=\"typ\">EBToast</span>(\n    message = <span class=\"str\">\"Add the popup message here\"</span>,\n    appearance = <span class=\"typ\">EBToastAppearance</span>.<span class=\"prp\">Default</span>,\n    theme = <span class=\"typ\">EBToastTheme</span>.<span class=\"prp\">Dark</span>,\n    size = <span class=\"typ\">EBToastSize</span>.<span class=\"prp\">MD</span>\n)"
      },
      {
        "subheading": "Pending · Light · SM",
        "swift": "<span class=\"cmt\">// Appearance=Pending, Theme=Light, Size=SM, hasLeadingIcon=True, hasTrailingAction=False, hasDescription=False — 4915:25205, 312 × 38.</span>\n<span class=\"typ\">EBToast</span>(\n    <span class=\"str\">\"Add the popup message here\"</span>,\n    appearance: .<span class=\"prp\">pending</span>,\n    theme: .<span class=\"prp\">light</span>,\n    size: .<span class=\"prp\">sm</span>\n)",
        "compose": "<span class=\"cmt\">// Appearance=Pending, Theme=Light, Size=SM, hasLeadingIcon=True, hasTrailingAction=False, hasDescription=False — 4915:25205, 312 × 38.</span>\n<span class=\"typ\">EBToast</span>(\n    message = <span class=\"str\">\"Add the popup message here\"</span>,\n    appearance = <span class=\"typ\">EBToastAppearance</span>.<span class=\"prp\">Pending</span>,\n    theme = <span class=\"typ\">EBToastTheme</span>.<span class=\"prp\">Light</span>,\n    size = <span class=\"typ\">EBToastSize</span>.<span class=\"prp\">SM</span>\n)"
      },
      {
        "subheading": "Destructive · MD, no icon",
        "swift": "<span class=\"cmt\">// Appearance=Destructive, Theme=Dark, Size=MD, hasLeadingIcon=False, hasTrailingAction=False, hasDescription=False — 4915:25172, 312 × 38.</span>\n<span class=\"typ\">EBToast</span>(\n    <span class=\"str\">\"Add the popup message here\"</span>,\n    appearance: .<span class=\"prp\">destructive</span>,\n    theme: .<span class=\"prp\">dark</span>,\n    size: .<span class=\"prp\">md</span>,\n    showsIcon: <span class=\"prp\">false</span>\n)",
        "compose": "<span class=\"cmt\">// Appearance=Destructive, Theme=Dark, Size=MD, hasLeadingIcon=False, hasTrailingAction=False, hasDescription=False — 4915:25172, 312 × 38.</span>\n<span class=\"typ\">EBToast</span>(\n    message = <span class=\"str\">\"Add the popup message here\"</span>,\n    appearance = <span class=\"typ\">EBToastAppearance</span>.<span class=\"prp\">Destructive</span>,\n    theme = <span class=\"typ\">EBToastTheme</span>.<span class=\"prp\">Dark</span>,\n    size = <span class=\"typ\">EBToastSize</span>.<span class=\"prp\">MD</span>,\n    showsIcon = <span class=\"prp\">false</span>\n)"
      },
      {
        "subheading": "Default · Dark · action + description",
        "swift": "<span class=\"cmt\">// Appearance=Default, Theme=Dark, Size=MD, hasLeadingIcon=False, hasTrailingAction=True, hasDescription=True — 4915:25216, 312 × 59.</span>\n<span class=\"typ\">EBToast</span>(\n    <span class=\"str\">\"Add label here\"</span>,\n    appearance: .<span class=\"prp\">default</span>,\n    theme: .<span class=\"prp\">dark</span>,\n    size: .<span class=\"prp\">md</span>,\n    showsIcon: <span class=\"prp\">false</span>\n)\n.<span class=\"fn\">ebDescription</span>(<span class=\"str\">\"Add description here.\"</span>)\n.<span class=\"fn\">ebAction</span>(<span class=\"str\">\"Label\"</span>) { retry() }",
        "compose": "<span class=\"cmt\">// Appearance=Default, Theme=Dark, Size=MD, hasLeadingIcon=False, hasTrailingAction=True, hasDescription=True — 4915:25216, 312 × 59.</span>\n<span class=\"typ\">EBToast</span>(\n    message = <span class=\"str\">\"Add label here\"</span>,\n    appearance = <span class=\"typ\">EBToastAppearance</span>.<span class=\"prp\">Default</span>,\n    theme = <span class=\"typ\">EBToastTheme</span>.<span class=\"prp\">Dark</span>,\n    size = <span class=\"typ\">EBToastSize</span>.<span class=\"prp\">MD</span>,\n    showsIcon = <span class=\"prp\">false</span>,\n    description = <span class=\"str\">\"Add description here.\"</span>,\n    actionLabel = <span class=\"str\">\"Label\"</span>,\n    onAction = { retry() }\n)"
      },
      {
        "subheading": "Destructive · action",
        "swift": "<span class=\"cmt\">// Appearance=Destructive, Theme=Light, Size=MD, hasLeadingIcon=False, hasTrailingAction=True, hasDescription=False — 4915:25250, 312 × 41.</span>\n<span class=\"typ\">EBToast</span>(\n    <span class=\"str\">\"Add label here\"</span>,\n    appearance: .<span class=\"prp\">destructive</span>,\n    theme: .<span class=\"prp\">light</span>,\n    size: .<span class=\"prp\">md</span>,\n    showsIcon: <span class=\"prp\">false</span>\n)\n.<span class=\"fn\">ebAction</span>(<span class=\"str\">\"Retry\"</span>) { retry() }",
        "compose": "<span class=\"cmt\">// Appearance=Destructive, Theme=Light, Size=MD, hasLeadingIcon=False, hasTrailingAction=True, hasDescription=False — 4915:25250, 312 × 41.</span>\n<span class=\"typ\">EBToast</span>(\n    message = <span class=\"str\">\"Add label here\"</span>,\n    appearance = <span class=\"typ\">EBToastAppearance</span>.<span class=\"prp\">Destructive</span>,\n    theme = <span class=\"typ\">EBToastTheme</span>.<span class=\"prp\">Light</span>,\n    size = <span class=\"typ\">EBToastSize</span>.<span class=\"prp\">MD</span>,\n    showsIcon = <span class=\"prp\">false</span>,\n    actionLabel = <span class=\"str\">\"Retry\"</span>,\n    onAction = { retry() }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Announcement",
        "ios": "A toast is never focused, so announce it: post <code>AccessibilityNotification.Announcement</code> with the Title (and Description).",
        "android": "Set <code>Modifier.semantics { liveRegion = LiveRegionMode.Polite }</code>; <code>Assertive</code> for Destructive."
      },
      {
        "requirement": "Duration with an action",
        "ios": "A VoiceOver user needs time to reach the action. Keep an action toast up until dismissed or acted on when VoiceOver is running.",
        "android": "Use <code>SnackbarDuration.Indefinite</code> when TalkBack is on and an action is present."
      },
      {
        "requirement": "Action target",
        "ios": "The Button is 68 × 24 — under 44pt tall. Extend the hit area; the toast body is not a target.",
        "android": "Apply <code>Modifier.minimumInteractiveComponentSize()</code> to the action."
      },
      {
        "requirement": "Icon",
        "ios": "The glyph repeats the Appearance. Hide it (<code>.accessibilityHidden(true)</code>) and let the message carry the meaning.",
        "android": "<code>contentDescription = null</code> on the icon."
      },
      {
        "requirement": "Contrast",
        "ios": "Title on Dark 14.58:1, on Light 14.58:1, on Destructive 5.18:1. Description on Dark 7.79:1; on Light #6780A9 4.01:1 and on Destructive #F6F9FD 80% 3.54:1 — both below 4.5:1 at 10pt.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Toast for brief, non-blocking feedback after an action — sent, saved, copied.",
        "dontText": "Don’t use it for errors that need a decision; use a Modal or Inline Message."
      },
      {
        "doText": "Use Pending for an in-flight operation and replace it with Default or Destructive when it resolves.",
        "dontText": "Don’t auto-hide Pending (v2.4 contract)."
      },
      {
        "doText": "Pick one of the 22 built variants. An action toast is MD without a leading icon.",
        "dontText": "Don’t combine a leading icon with an action or use SM with an action — Figma draws neither."
      },
      {
        "doText": "Keep the message to one line: 256px at MD with an icon, 188px beside an action.",
        "dontText": "Don’t put two sentences in a toast."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Most layers follow the v2.2 pass. But the Title text layer is named <code>LeadingIcon</code> on both Destructive action variants (4915:25232, 4915:25250), <code>#content</code> survives on 4915:25240, SM Destructive and Pending drop the <code>LeadingIcon</code> wrapper, and the fill sits on <code>ToastRow</code> in some variants and on the component frame in others."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Names are clean PascalCase with Title Case values. But <code>Theme</code> means nothing for Destructive — the same red is <code>Theme=Dark</code> on its message variants and <code>Theme=Light</code> on its action variants — so a consumer switching one boolean also has to switch Theme."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All five text layers resolve <code>matched</code> — <code>Primary/Label/Light/Small</code>, <code>Primary/Multi-line Label/Light/Fine</code>, <code>Primary/Multi-line Label/Small</code>, <code>Secondary/Bold/Small Caption</code>, <code>Primary/Label/Small</code>. Colour bindings cannot be read with the plugin. Description opacity differs — 72% on Dark, 80% on Destructive."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Maps to one <code>EBToast</code>, documented in v2.4. But 22 of 96 combinations are built, and three heights (38, 41, 59) and two paddings (12 and 16/8) come from two separate layouts the booleans switch between, so the native view is effectively two layouts behind one API."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Dismiss, auto-hide and stacking are documented (v2.4). The action’s pressed state belongs to the Button."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Checkmark (Circular), Information and Close are DS icon instances at 24 and 16; the description and action are SLOTs composing Subtext Message and Button - XSmall."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "No SwiftUI or Compose mappings are registered; the native library does not exist."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 22,
      "description": "<code>Appearance</code> (3) × <code>Theme</code> (2) × <code>Size</code> (2) × <code>hasLeadingIcon</code> × <code>hasTrailingAction</code> × <code>hasDescription</code> = 96 combinations; <strong>22 built</strong>. Message toasts are 312 × 38; action toasts 312 × 41, or 312 × 59 with a description. Pending has no icon-less variant, and actions exist only at MD without an icon.",
      "columns": [
        "Appearance",
        "Theme",
        "Size",
        "hasLeadingIcon",
        "hasTrailingAction",
        "hasDescription",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "Default",
            "Dark",
            "MD",
            "<code>True</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25142</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Default",
            "Light",
            "MD",
            "<code>True</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25148</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Destructive",
            "Dark",
            "MD",
            "<code>True</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25154</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Pending",
            "Dark",
            "MD",
            "<code>True</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25160</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Pending",
            "Light",
            "MD",
            "<code>True</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25166</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Destructive",
            "Dark",
            "MD",
            "<code>False</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25172</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Default",
            "Dark",
            "MD",
            "<code>False</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25175</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Default",
            "Light",
            "MD",
            "<code>False</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25178</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Destructive",
            "Dark",
            "SM",
            "<code>True</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25181</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Default",
            "Dark",
            "SM",
            "<code>True</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25186</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Default",
            "Light",
            "SM",
            "<code>True</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25192</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Destructive",
            "Dark",
            "SM",
            "<code>False</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25197</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Pending",
            "Dark",
            "SM",
            "<code>True</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25200</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Pending",
            "Light",
            "SM",
            "<code>True</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25205</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Default",
            "Dark",
            "SM",
            "<code>False</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25210</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Default",
            "Light",
            "SM",
            "<code>False</code>",
            "<code>False</code>",
            "<code>False</code>",
            "<code>4915:25213</code>",
            "312 × 38"
          ]
        },
        {
          "cells": [
            "Default",
            "Dark",
            "MD",
            "<code>False</code>",
            "<code>True</code>",
            "<code>True</code>",
            "<code>4915:25216</code>",
            "312 × 59"
          ]
        },
        {
          "cells": [
            "Default",
            "Light",
            "MD",
            "<code>False</code>",
            "<code>True</code>",
            "<code>True</code>",
            "<code>4915:25224</code>",
            "312 × 59"
          ]
        },
        {
          "cells": [
            "Destructive",
            "Light",
            "MD",
            "<code>False</code>",
            "<code>True</code>",
            "<code>True</code>",
            "<code>4915:25232</code>",
            "312 × 59"
          ]
        },
        {
          "cells": [
            "Default",
            "Dark",
            "MD",
            "<code>False</code>",
            "<code>True</code>",
            "<code>False</code>",
            "<code>4915:25240</code>",
            "312 × 41"
          ]
        },
        {
          "cells": [
            "Default",
            "Light",
            "MD",
            "<code>False</code>",
            "<code>True</code>",
            "<code>False</code>",
            "<code>4915:25245</code>",
            "312 × 41"
          ]
        },
        {
          "cells": [
            "Destructive",
            "Light",
            "MD",
            "<code>False</code>",
            "<code>True</code>",
            "<code>False</code>",
            "<code>4915:25250</code>",
            "312 × 41"
          ]
        }
      ]
    }
  },
  "changelog": [
    {
      "version": "2.4.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 4915:25141",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the variant axes.</strong> Three cards on retired <code>27:*</code> nodes carried the pre-v2.0 <code>theme</code>, <code>With Icon</code> and <code>Large Label</code> controls. Now one card with <code>Appearance</code>, <code>Theme</code>, <code>Size</code> and the three <code>has*</code> booleans, snapping to the 22 built variants.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from Figma.</strong> The Pending grey placeholder circle (replaced by an Information icon in v2.2) is gone; icons use the library glyphs at 24 and 16, and the action layouts, Button colours and “Retry” label match the set.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Typography now names text styles.</strong> Five layers resolve, all matched — <code>Primary/Label/Light/Small</code>, <code>Primary/Multi-line Label/Light/Fine</code>, <code>Primary/Multi-line Label/Small</code>, <code>Secondary/Bold/Small Caption</code>, <code>Primary/Label/Small</code>.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>The Code tab still described the 1.0.0 component.</strong> Property Mapping listed <code>Type</code>, the overloaded <code>Theme</code>, <code>Large Label</code> and <code>With Icon</code>; install was empty. Rebuilt on the six live axes with <code>com.eastblue.ds:toast:2.4.1</code> and five snippets.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard rescored against v2.0–v2.4.</strong> C3, C5, C6 Ready; C1, C2, C4 Needs Refinement on new findings; C7 Not Mapped.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Title layer named <code>LeadingIcon</code></strong> on the two Destructive action variants (4915:25232, 4915:25250); <code>#content</code> remains on 4915:25240. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Destructive ignores Theme</strong> — the same red is <code>Theme=Dark</code> on its message variants and <code>Theme=Light</code> on its action variants. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>Structure differs across variants.</strong> The fill sits on <code>ToastRow</code> or on the component frame depending on the variant, and SM Destructive and Pending have no <code>LeadingIcon</code> wrapper. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>Description fails AA</strong> on Light (#6780A9, 4.01:1) and Destructive (#F6F9FD 80%, 3.54:1) at 10pt; opacity is 72% on Dark and 80% on Destructive. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Property panel not confirmed.</strong> The Style panel is built from variant names; a text property on the set would be missing. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>v2.0.0 through v2.4.0 have no changelog entries.</strong> The Overview records thirteen resolutions across those versions, but the changelog jumps from 1.0.0 to here. Their dates are not recorded anywhere readable, so they are not invented. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
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
      "header": "Initial Assessment · node 27:53135",
      "rows": [
        {
          "body": "<strong>Verdict: Restructure</strong> — Consolidate with Toast - With Button, split the overloaded <code>theme</code> axis, rename <code>Large Label</code> to <code>size</code>, and replace the Pending placeholder with a real spinner. <span class=\"tag-open tag-c1 tag-c2 tag-c5 tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Schema"
          }
        },
        {
          "body": "<strong>C1 — Family duplication</strong> — Toast + Toast - With Button model one primitive; merge via optional <code>action</code> slot. <span class=\"tag-open tag-c1\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C1"
          }
        },
        {
          "body": "<strong>C2 — Axis overload</strong> — <code>theme</code> mixes appearance + status; <code>Large Label</code> is a size flag; booleans on <code>yes/no</code>. <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2"
          }
        },
        {
          "body": "<strong>C6 — Pending placeholder</strong> — 16/24 gray <code>icon-placeholder</code> circle; adopt a real spinner instance. <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6"
          }
        },
        {
          "body": "<strong>C5 — Dismiss + duration</strong> — No auto-dismiss, swipe, or tap-to-dismiss documented. <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5"
          }
        },
        {
          "body": "<strong>C4 — Native mapping</strong> — Document ToastManager overlay (iOS) + SnackbarHost wrapper (Android). <span class=\"tag-open tag-c4\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C4"
          }
        },
        {
          "body": "<strong>C7 — Code Connect</strong> — Blocked on family consolidation + schema cleanup. <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7"
          }
        }
      ]
    }
  ]
};
