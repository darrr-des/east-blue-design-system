import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/chip.js`.
const chipDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Style',
        prop: 'style',
        defaultValue: 'filled',
        options: [
          { value: 'filled', label: 'Filled' },
          { value: 'light', label: 'Light' },
          { value: 'outline', label: 'Outline' },
        ],
      },
      {
        label: 'Leading',
        prop: 'leading',
        defaultValue: 'none',
        options: [
          { value: 'none', label: 'None' },
          { value: 'avatar', label: 'Avatar' },
          { value: 'icon', label: 'Icon' },
        ],
      },
      {
        label: 'Trailing',
        prop: 'trailing',
        defaultValue: 'none',
        options: [
          { value: 'none', label: 'None' },
          { value: 'close', label: 'Close' },
          { value: 'chevron', label: 'Chevron' },
        ],
      },
    ],
  },
];

export const chip: ComponentData = {
  "meta": {
    "slug": "chip",
    "name": "Chip",
    "node": "5595:39596",
    "figmaUrl": "https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=5595-39596",
    "description": "A pill-shaped selector carrying a label and an optional chosen value, with optional leading and trailing icons and a slot for an attached dropdown.",
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
      "text": "Rebuilt on node <code>5595:39596</code> in the 2026 Working File, and every recommendation from the previous assessment has landed. Two overlapping components are consolidated into one 24-variant set — <code>hasValue</code> × <code>State</code> × <code>hasLeadingIcon</code> × <code>hasTrailingIcon</code> — with a property schema following §1, §2 and §5, identical layer naming across all 24 variants on the §3 vocabulary, Pressed and Disabled states with properly muted disabled text, the <code>offset</code> frames and colored <code>_space_*</code> spacers removed, and <code>dropdown group</code> replaced by a real <code>Dropdown-Slot</code>. Scope is confirmed dropdown-only, so <code>Pressed</code> means finger-down rather than doubling as a selection; the leading <code>Placeholder</code> is a deliberate swap target; and the 80% pressed-label opacity is the same intentional treatment confirmed elsewhere in the system. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists."
    }
  },
  "overview": {
    "inContextNote": "Contexts are illustrative. Final screens will reference actual GCash patterns.",
    "inContextHtml": "<div class=\"ctx-placeholder\">\n        <svg width=\"120\" height=\"80\" viewBox=\"0 0 120 80\" fill=\"none\">\n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"64\" rx=\"8\" stroke=\"currentColor\" stroke-width=\"1.2\" opacity=\".15\"></rect>\n          \n          <rect x=\"10\" y=\"8\" width=\"100\" height=\"18\" rx=\"4\" fill=\"#1972F9\" opacity=\".6\"></rect>\n          <text x=\"60\" y=\"19\" text-anchor=\"middle\" fill=\"white\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Vouchers</text>\n          \n          <rect x=\"16\" y=\"32\" width=\"22\" height=\"8\" rx=\"4\" fill=\"#005CE5\" opacity=\".85\"></rect>\n          <rect x=\"42\" y=\"32\" width=\"22\" height=\"8\" rx=\"4\" fill=\"#EEF2F9\"></rect>\n          <rect x=\"68\" y=\"32\" width=\"22\" height=\"8\" rx=\"4\" fill=\"#FFFFFF\" stroke=\"#D7E0EF\" stroke-width=\"0.8\"></rect>\n          \n          <rect x=\"18\" y=\"48\" width=\"84\" height=\"10\" rx=\"2\" fill=\"currentColor\" opacity=\".07\"></rect>\n          <rect x=\"18\" y=\"60\" width=\"84\" height=\"6\" rx=\"3\" fill=\"currentColor\" opacity=\".08\"></rect>\n        </svg>\n      </div>",
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"chip-demo-preview\"><div style=\"display:inline-flex;align-items:center;height:36px;padding:0 16px 0 6px;background:#005CE5;border:none;border-radius:99px;box-sizing:border-box;font-family:'Proxima Soft', system-ui, sans-serif;font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;\"><div style=\"width:24px;height:24px;border-radius:50%;background:#C2C6CF;flex-shrink:0;margin-right:4px;\"></div><span style=\"color:#FFFFFF;white-space:nowrap;\">Filter Name</span><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" style=\"margin-left:8px;flex-shrink:0;\"><path d=\"M4 4l8 8M12 4l-8 8\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg></div></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">style</span><select class=\"demo-panel-select\" id=\"chip-demo-style\" onchange=\"updateChipDemo()\"><option value=\"filled\" selected=\"\">filled</option><option value=\"light\">light</option><option value=\"outline\">outline</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">leading</span><select class=\"demo-panel-select\" id=\"chip-demo-leading\" onchange=\"updateChipDemo()\"><option value=\"none\">none</option><option value=\"avatar\" selected=\"\">avatar</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">trailing</span><select class=\"demo-panel-select\" id=\"chip-demo-trailing\" onchange=\"updateChipDemo()\"><option value=\"none\">none</option><option value=\"close\" selected=\"\">close</option><option value=\"chevron\">chevron</option></select></div></div></div></div>",
    "traits": [
      {
        "name": "Reusable",
        "rating": "pass",
        "note": "A generic pill selector — filter row, sort control, dropdown trigger. Nothing ties it to one screen, and the four axes cover the combinations a chip actually appears in."
      },
      {
        "name": "Self-contained",
        "rating": "pass",
        "note": "Owns its pill chrome, typography and state colors. <code>Dropdown-Slot</code> attaches external content without the chip needing to know what it is."
      },
      {
        "name": "Consistent",
        "rating": "pass",
        "note": "The schema follows §1, §2 and §5 — <code>hasValue</code> × <code>State</code> × <code>hasLeadingIcon</code> × <code>hasTrailingIcon</code> — and all 24 variants now carry identical layer names on the §3 vocabulary, so each text layer exposes as a single property. The Disabled state mutes its text in line with Counter and Search Field rather than diverging."
      },
      {
        "name": "Composable",
        "rating": "pass",
        "note": "<code>Dropdown-Slot</code> is a real Figma Slot on the twelve variants that signal a dropdown, <code>ContentRow</code> composes label and value independently, and the leading position takes a swappable instance."
      }
    ],
    "behavior": [
      {
        "state": "Active / Selected",
        "ios": "yes",
        "android": "yes",
        "property": "Filter · type=primary",
        "notes": "Filled blue background, white label. Used when a filter is applied."
      },
      {
        "state": "Inactive (light)",
        "ios": "yes",
        "android": "yes",
        "property": "Filter · type=light",
        "notes": "Light gray pill, gray label. Used for unapplied filters or tag readouts."
      },
      {
        "state": "Inactive (outline)",
        "ios": "yes",
        "android": "yes",
        "property": "Filter · type=outline",
        "notes": "White pill, gray border, gray label."
      },
      {
        "state": "Dropdown trigger",
        "ios": "yes",
        "android": "yes",
        "property": "Filter w/ Dropdown · default",
        "notes": "Light style with chevron. Used for sort/filter pickers."
      },
      {
        "state": "Pressed / Disabled / Error",
        "ios": "na",
        "android": "na",
        "property": "—",
        "notes": "Not defined in Figma. <span class=\"tag-open tag-c5\">C5</span>"
      }
    ],
    "resolved": [
      {
        "headline": "Consolidated into one component on the Working File.",
        "body": "v2.0: Rebuilt on node <code>5595:39596</code>. What were two overlapping chip components are now a single 24-variant set — <code>hasValue</code> (2) × <code>State</code> (3) × <code>hasLeadingIcon</code> (2) × <code>hasTrailingIcon</code> (2) — with every combination present and no gaps. This is the rename-and-consolidate recommendation applied. (C2 · Family)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Property schema rebuilt on the naming guidelines.",
        "body": "v2.0: The old yes/no values and the “with active time” enum are gone. Booleans now use the <code>has</code> prefix with lowerCamelCase per §2 — <code>hasValue</code>, <code>hasLeadingIcon</code>, <code>hasTrailingIcon</code>, the last two replacing the ambiguous <code>hasLeading</code> / <code>hasTrailing</code> — and <code>State</code> is PascalCase per §1 with Title Case values per §5. Every axis now says what it controls. (C2 · Rename)",
        "tag": {
          "criterion": "C2",
          "label": "C2 · Variant & Property Naming"
        }
      },
      {
        "headline": "Pressed and Disabled states added.",
        "body": "v2.0: <code>State = Default | Pressed | Disabled</code> replaces the single default state. Pressed fills the pill <code>#005CE5</code>; Disabled fills it <code>#EEF2F9</code>; Default is white with a <code>#D7E0EF</code> border. (C5)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Layer naming rebuilt throughout.",
        "body": "v2.0: The two frames named <code>offset</code> and the <code>#label</code> sigil are gone. Every variant now reads <code>Pill</code> → <code>LeadingIcon</code> · <code>ContentRow</code> → <code>Label</code> · <code>Value</code> · <code>TrailingIcon</code>, following the §3 vocabulary. Two layers were missed in the sweep and are tracked below; the rest is done. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "<code>dropdown group</code> is now a real Figma Slot.",
        "body": "v2.0: <code>Dropdown-Slot</code> is a genuine <code>SLOT</code> node rather than a frame standing in for one, kebab-case per §4, and it appears on exactly the twelve variants where <code>hasTrailingIcon=True</code> — the chevron is what signals a dropdown, so slot and affordance are consistent by construction. A consumer attaches their own menu without detaching. (C1 · Slot)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Colored spacer instances removed.",
        "body": "v2.0: The <code>_space_4</code> and <code>_space_8</code> instances filled <code>#00FF66</code> and <code>#FFFF00</code> are gone from the layer tree; spacing is carried by auto-layout. A native implementation now sees the children that actually exist. (C1)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Rename sweep completed across all 24 variants.",
        "body": "v2.1: Verified on the live node. <code>label</code> → <code>Label</code> (<code>5595:39613</code>) and <code>Trailing Icon</code> → <code>TrailingIcon</code> (<code>5595:39661</code>). Every variant now carries identical layer names — <code>Pill</code> → <code>LeadingIcon</code> · <code>ContentRow</code> → <code>Label</code> · <code>Value</code> · <code>TrailingIcon</code> — so <code>Label</code> and <code>Value</code> each expose as a single text property across the whole set rather than fragmenting. (C1 · Rename)",
        "tag": {
          "criterion": "C1",
          "label": "C1 · Layer Structure & Naming"
        }
      },
      {
        "headline": "Disabled state now mutes its text.",
        "body": "v2.1: <code>Label</code> drops to <code>#C2CFE5</code> and <code>Value</code> to <code>#9BC5FD</code>, replacing the full-strength <code>#6780A9</code> and <code>#005CE5</code> that made a disabled chip read as an available action. The muted blue on the value is a nice touch — it keeps the label/value hierarchy legible while removing the affordance, rather than flattening both to one grey. Consistent with <a href=\"#\" onclick=\"showPanelById('counter');return false;\">Counter</a> and <a href=\"#\" onclick=\"showPanelById('search-field');return false;\">Search Field</a>, which both mute to <code>#C2CFE5</code>. (C5 · Token)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Scope confirmed dropdown-only — no selected state needed.",
        "body": "v2.2: Chip is a dropdown trigger, not a filter toggle. <code>hasValue=True</code> is what a made choice looks like, and <code>Dropdown-Slot</code> on the twelve <code>hasTrailingIcon=True</code> variants is what the component exists to attach. <code>Pressed</code> therefore means what it says — a transient finger-down state released on lift — and does not double as a persistent selection. Recorded so the absence of <code>isSelected</code> reads as scope rather than an omission: a screen needing an on/off filter pill reaches for a different component rather than pressing this one into service. (C5 · State)",
        "tag": {
          "criterion": "C5",
          "label": "C5 · Interaction State Coverage"
        }
      },
      {
        "headline": "Leading <code>Placeholder</code> confirmed a deliberate swap target.",
        "body": "v2.2: The 24×24 <code>Placeholder</code> in each <code>LeadingIcon</code> frame is the intended instance-swap point for consumer content — the same pattern <a href=\"#\" onclick=\"showPanelById('header-transaction');return false;\">Detail Hero</a> uses. The asymmetry with the trailing side is intentional rather than an oversight: the trailing position is a fixed <code>Chevron Down</code> plus a named <code>Dropdown-Slot</code>, because what attaches there is a menu the chip must anchor, while the leading position takes an arbitrary icon the chip only has to reserve room for. Two different jobs, two different mechanisms. Attested rather than verified — instance-swap property definitions are not readable through the review tooling. (C6 · Composition)",
        "tag": {
          "criterion": "C6",
          "label": "C6 · Asset & Icon Quality"
        }
      },
      {
        "headline": "Pressed label opacity confirmed intentional.",
        "body": "v2.2: <code>Label</code> at <code>#F6F9FD</code> 80% against the solid <code>#005CE5</code> pill is deliberate — it holds the label back so the chosen <code>Value</code> reads as the brighter of the two while the chip is held down, preserving the same hierarchy the Default state gets from <code>#6780A9</code> against <code>#005CE5</code>. Consistent with the treatment already confirmed on Page Banner and Detail Hero, and covered by the same owner decision: the composited values are token-bound rather than local overrides. Attested rather than verified — opacity token bindings are not readable through the review tooling. (C3 · Token)",
        "tag": {
          "criterion": "C3",
          "label": "C3 · Token Coverage"
        }
      }
    ],
"open": [
      {
        "headline": "Code Connect mappings not registered.",
        "body": "Blocked — no native library exists yet. The schema is otherwise settled: three booleans and one enum over a label, a value, a swappable leading icon and a named dropdown slot.",
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
        "cardKey": "chip-spec-filled",
        "demoKey": "filled",
        "demoControls": chipDemoControls,
        "title": "Filled",
        "node": "18336:22244",
        "description": "Brand blue fill with white label. Represents an active/applied filter.",
        "previewHtml": "<div id=\"spec-chip-filled-preview\"><div style=\"display:inline-flex;align-items:center;height:36px;padding:0 16px 0 6px;background:#005CE5;border:none;border-radius:99px;box-sizing:border-box;font-family:'Proxima Soft', system-ui, sans-serif;font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;\"><div style=\"width:24px;height:24px;border-radius:50%;background:#C2C6CF;flex-shrink:0;margin-right:4px;\"></div><span style=\"color:#FFFFFF;white-space:nowrap;\">Filter Name</span><svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" style=\"margin-left:8px;flex-shrink:0;\"><path d=\"M4 4l8 8M12 4l-8 8\" stroke=\"#FFFFFF\" stroke-width=\"1.6\" stroke-linecap=\"round\"></path></svg></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Style", "value": "Filled", "prop": "style" },
              { "key": "Leading", "value": "avatar", "prop": "leading" },
              { "key": "Trailing", "value": "close", "prop": "trailing" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Background", "value": "#005CE5", "token": "main/filter/color/primary/bg" },
              { "key": "Label", "value": "#FFFFFF", "token": "main/filter/color/primary/label" },
              { "key": "Icon", "value": "#F6F9FDB8", "token": "main/filter/color/primary/icon" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "32px", "mono": true },
              { "key": "Corner radius", "value": "99px (pill)", "mono": true },
              { "key": "Padding L", "value": "4px", "mono": true },
              { "key": "Padding R", "value": "14px", "mono": true },
              { "key": "Leading avatar", "value": "24 × 24", "mono": true },
              { "key": "Close icon", "value": "16 × 16", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text style", "value": "Primary/Label/Base", "mono": true },
              { "key": "Font", "value": "Proxima Soft Bold", "mono": true },
              { "key": "Size", "value": "16px", "mono": true },
              { "key": "Line-height", "value": "16px", "mono": true },
              { "key": "Tracking", "value": "0.25px", "mono": true }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Filter Name\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">leading</span><span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.avatar</span><span class=\"syn-punc\">(</span><span class=\"syn-type\">EBAvatar</span><span class=\"syn-punc\">(</span><span class=\"syn-param\">initials</span><span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"DM\"</span><span class=\"syn-punc\">)),</span>\n    <span class=\"syn-param\">trailing</span><span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.close</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">onRemove</span><span class=\"syn-punc\">:</span> <span class=\"syn-punc\">{</span> <span class=\"syn-cmt\">/* remove filter */</span> <span class=\"syn-punc\">})</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.filled</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">label</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Filter Name\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">style</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBChipStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Filled</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">leading</span> <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-type\">EBAvatar</span><span class=\"syn-punc\">(</span><span class=\"syn-param\">initials</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"DM\"</span><span class=\"syn-punc\">)</span> <span class=\"syn-punc\">},</span>\n    <span class=\"syn-param\">trailing</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBChipTrailing</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Close</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">onRemove</span> <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-cmt\">/* remove filter */</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span></code>"
      },
      {
        "cardKey": "chip-spec-light",
        "demoKey": "light",
        "demoControls": chipDemoControls,
        "title": "Light",
        "node": "18336:22257",
        "description": "Light gray fill with gray label. Used for inactive filters, tags, or dropdown trigger base.",
        "previewHtml": "<div id=\"spec-chip-light-preview\"><div style=\"display:inline-flex;align-items:center;height:36px;padding:0 16px 0 16px;background:#EEF2F9;border:none;border-radius:99px;box-sizing:border-box;font-family:'Proxima Soft', system-ui, sans-serif;font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;\"><span style=\"color:#6780A9;white-space:nowrap;\">Category</span></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Style", "value": "Light", "prop": "style" },
              { "key": "Leading", "value": "none", "prop": "leading" },
              { "key": "Trailing", "value": "none", "prop": "trailing" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Background", "value": "#EEF2F9", "token": "main/filter/color/secondary/bg" },
              { "key": "Label", "value": "#6780A9", "token": "main/filter/color/secondary/label" },
              { "key": "Icon", "value": "#7E96BE", "token": "main/filter/color/secondary/icon" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "32px", "mono": true },
              { "key": "Corner radius", "value": "99px (pill)", "mono": true },
              { "key": "Padding horizontal", "value": "14px", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text style", "value": "Primary/Label/Base", "mono": true },
              { "key": "Font", "value": "Proxima Soft Bold", "mono": true },
              { "key": "Size", "value": "16px", "mono": true },
              { "key": "Line-height", "value": "16px", "mono": true },
              { "key": "Tracking", "value": "0.25px", "mono": true }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Category\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.light</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">label</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Category\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">style</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBChipStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Light</span>\n<span class=\"syn-punc\">)</span></code>"
      },
      {
        "cardKey": "chip-spec-outline",
        "demoKey": "outline",
        "demoControls": chipDemoControls,
        "title": "Outline",
        "node": "18336:22270",
        "description": "White fill with 2px gray border and gray label. Alternative inactive style for light surfaces.",
        "previewHtml": "<div id=\"spec-chip-outline-preview\"><div style=\"display:inline-flex;align-items:center;height:36px;padding:0 16px 0 16px;background:#FFFFFF;border:2px solid #D7E0EF;border-radius:99px;box-sizing:border-box;font-family:'Proxima Soft', system-ui, sans-serif;font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;\"><span style=\"color:#6780A9;white-space:nowrap;\">Category</span></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Style", "value": "Outline", "prop": "style" },
              { "key": "Leading", "value": "none", "prop": "leading" },
              { "key": "Trailing", "value": "none", "prop": "trailing" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Background", "value": "#FFFFFF", "token": "surface/default" },
              { "key": "Border", "value": "#D7E0EF", "token": "main/filter/color/tertiary/border" },
              { "key": "Label", "value": "#6780A9", "token": "main/filter/color/tertiary/label" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "32px", "mono": true },
              { "key": "Corner radius", "value": "99px (pill)", "mono": true },
              { "key": "Border width", "value": "2px", "mono": true },
              { "key": "Padding horizontal", "value": "14px", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text style", "value": "Primary/Label/Base", "mono": true },
              { "key": "Font", "value": "Proxima Soft Bold", "mono": true },
              { "key": "Size", "value": "16px", "mono": true },
              { "key": "Line-height", "value": "16px", "mono": true },
              { "key": "Tracking", "value": "0.25px", "mono": true }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Category\"</span><span class=\"syn-punc\">)</span>\n    <span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.outline</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">label</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Category\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">style</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBChipStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Outline</span>\n<span class=\"syn-punc\">)</span></code>"
      },
      {
        "cardKey": "chip-spec-dropdown",
        "demoKey": "dropdown",
        "demoControls": chipDemoControls,
        "title": "Dropdown",
        "node": "18336:22284",
        "description": "Light style with a trailing chevron. Used as a pill-styled dropdown trigger. Selected value shown in blue <code>label-link</code>.",
        "previewHtml": "<div id=\"spec-chip-dropdown-preview\"><div style=\"display:inline-flex;align-items:center;height:36px;padding:0 14px 0 16px;background:#EEF2F9;border:none;border-radius:99px;box-sizing:border-box;font-family:'Proxima Soft', system-ui, sans-serif;font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;\"><span style=\"color:#6780A9;white-space:nowrap;\">Sort by</span><span style=\"margin-left:8px;color:#005CE5;white-space:nowrap;\">Conservative first</span><svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" style=\"margin-left:4px;flex-shrink:0;\"><path d=\"M7 10l5 5 5-5\" stroke=\"#005CE5\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></div></div>",
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              { "key": "Style", "value": "Light", "prop": "style" },
              { "key": "Leading", "value": "none", "prop": "leading" },
              { "key": "Trailing", "value": "chevron", "prop": "trailing" }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              { "key": "Background", "value": "#EEF2F9", "token": "main/filter/color/secondary/bg" },
              { "key": "Label", "value": "#6780A9", "token": "main/filter/color/secondary/label" },
              { "key": "Selected value", "value": "#005CE5", "token": "main/filter/color/secondary/label-link" },
              { "key": "Chevron", "value": "#005CE5", "token": "main/filter/color/secondary/chevron" }
            ]
          },
          {
            "label": "Layout",
            "slug": "layout",
            "rows": [
              { "key": "Height", "value": "32px", "mono": true },
              { "key": "Corner radius", "value": "99px (pill)", "mono": true },
              { "key": "Padding left", "value": "16px", "mono": true },
              { "key": "Padding right", "value": "12px", "mono": true },
              { "key": "Chevron size", "value": "24 × 24", "mono": true }
            ]
          },
          {
            "label": "Typography",
            "slug": "typo",
            "rows": [
              { "key": "Text style", "value": "Primary/Label/Base", "mono": true },
              { "key": "Font", "value": "Proxima Soft Bold", "mono": true },
              { "key": "Size", "value": "16px", "mono": true },
              { "key": "Line-height", "value": "16px", "mono": true },
              { "key": "Tracking", "value": "0.25px", "mono": true }
            ]
          }
        ],
        "swift": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span><span class=\"syn-str\">\"Sort by\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">selectedValue</span><span class=\"syn-punc\">:</span> <span class=\"syn-str\">\"Conservative first\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">trailing</span><span class=\"syn-punc\">:</span> <span class=\"syn-dot\">.chevron</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">action</span><span class=\"syn-punc\">:</span> <span class=\"syn-punc\">{</span> <span class=\"syn-cmt\">/* open dropdown */</span> <span class=\"syn-punc\">})</span>\n<span class=\"syn-punc\">.</span><span class=\"syn-fn\">ebStyle</span><span class=\"syn-punc\">(</span><span class=\"syn-dot\">.light</span><span class=\"syn-punc\">)</span></code>",
        "compose": "<code><span class=\"syn-type\">EBChip</span><span class=\"syn-punc\">(</span>\n    <span class=\"syn-param\">label</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Sort by\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">selectedValue</span> <span class=\"syn-eq\">=</span> <span class=\"syn-str\">\"Conservative first\"</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">style</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBChipStyle</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Light</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">trailing</span> <span class=\"syn-eq\">=</span> <span class=\"syn-type\">EBChipTrailing</span><span class=\"syn-punc\">.</span><span class=\"syn-dot\">Chevron</span><span class=\"syn-punc\">,</span>\n    <span class=\"syn-param\">onClick</span> <span class=\"syn-eq\">=</span> <span class=\"syn-punc\">{</span> <span class=\"syn-cmt\">/* open dropdown */</span> <span class=\"syn-punc\">}</span>\n<span class=\"syn-punc\">)</span></code>"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by Style",
        "description": "Three style modes, each with bg, label, and icon tokens. Dropdown adds <code>label-link</code> and <code>chevron</code>.",
        "columns": [
          "Token",
          "Value"
        ],
        "rows": [
          {
            "role": "Filled",
            "token": "bg",
            "values": [
              "main/filter/color/primary/bg",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "label",
            "values": [
              "main/filter/color/primary/label",
              "#FFFFFF"
            ]
          },
          {
            "role": "—",
            "token": "icon",
            "values": [
              "main/filter/color/primary/icon",
              "#F6F9FDB8"
            ]
          },
          {
            "role": "Light",
            "token": "bg",
            "values": [
              "main/filter/color/secondary/bg",
              "#EEF2F9"
            ]
          },
          {
            "role": "—",
            "token": "label",
            "values": [
              "main/filter/color/secondary/label",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "icon",
            "values": [
              "main/filter/color/secondary/icon",
              "#7E96BE"
            ]
          },
          {
            "role": "—",
            "token": "selected value",
            "values": [
              "main/filter/color/secondary/label-link",
              "#005CE5"
            ]
          },
          {
            "role": "—",
            "token": "chevron",
            "values": [
              "main/filter/color/secondary/chevron",
              "#005CE5"
            ]
          },
          {
            "role": "Outline",
            "token": "border",
            "values": [
              "main/filter/color/tertiary/border",
              "#D7E0EF"
            ]
          },
          {
            "role": "—",
            "token": "label",
            "values": [
              "main/filter/color/tertiary/label",
              "#6780A9"
            ]
          },
          {
            "role": "—",
            "token": "icon",
            "values": [
              "main/filter/color/tertiary/icon",
              "#7E96BE"
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
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:chip:1.0.0\"</span>)\n}"
        }
      ]
    },
    "propertyMapping": {
      "rows": [
        {
          "figma": "style",
          "swift": ".ebStyle(.filled / .light / .outline)",
          "compose": "style = EBChipStyle.*"
        },
        {
          "figma": "leading",
          "swift": "leading: EBChipLeading?",
          "compose": "leading: @Composable (() -&gt; Unit)?"
        },
        {
          "figma": "trailing",
          "swift": "trailing: EBChipTrailing?",
          "compose": "trailing: EBChipTrailing?"
        },
        {
          "figma": "selectedValue",
          "swift": "selectedValue: String?",
          "compose": "selectedValue: String?"
        },
        {
          "figma": "label",
          "swift": "title: String",
          "compose": "label: String"
        },
        {
          "figma": "onTap / onClose",
          "swift": "action / onRemove",
          "compose": "onClick / onRemove"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/Chip/EBChip.swift",
        "compose": "android/components/chip/EBChip.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Usage",
        "swift": "<span class=\"cmt\">// Applied filter — brand fill, avatar + close</span>\n<span class=\"typ\">EBChip</span>(<span class=\"str\">\"Filter Name\"</span>,\n    <span class=\"prp\">leading</span>: .<span class=\"fn\">avatar</span>(<span class=\"typ\">EBAvatar</span>(<span class=\"prp\">initials</span>: <span class=\"str\">\"DM\"</span>)),\n    <span class=\"prp\">trailing</span>: .<span class=\"prp\">close</span>,\n    <span class=\"prp\">onRemove</span>: { /* remove filter */ })\n.<span class=\"fn\">ebStyle</span>(.<span class=\"prp\">filled</span>)\n\n<span class=\"cmt\">// Inactive filter — light, label only</span>\n<span class=\"typ\">EBChip</span>(<span class=\"str\">\"Category\"</span>)\n    .<span class=\"fn\">ebStyle</span>(.<span class=\"prp\">light</span>)\n\n<span class=\"cmt\">// Dropdown trigger with selected value</span>\n<span class=\"typ\">EBChip</span>(<span class=\"str\">\"Sort by\"</span>,\n    <span class=\"prp\">selectedValue</span>: <span class=\"str\">\"Conservative first\"</span>,\n    <span class=\"prp\">trailing</span>: .<span class=\"prp\">chevron</span>,\n    <span class=\"prp\">action</span>: { /* open dropdown */ })\n.<span class=\"fn\">ebStyle</span>(.<span class=\"prp\">light</span>)",
        "compose": "<span class=\"cmt\">// Applied filter — brand fill, avatar + close</span>\n<span class=\"typ\">EBChip</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Filter Name\"</span>,\n    <span class=\"prp\">style</span> = <span class=\"typ\">EBChipStyle</span>.<span class=\"prp\">Filled</span>,\n    <span class=\"prp\">leading</span> = { <span class=\"typ\">EBAvatar</span>(initials = <span class=\"str\">\"DM\"</span>) },\n    <span class=\"prp\">trailing</span> = <span class=\"typ\">EBChipTrailing</span>.<span class=\"prp\">Close</span>,\n    <span class=\"prp\">onRemove</span> = { /* remove filter */ }\n)\n\n<span class=\"cmt\">// Inactive filter — light, label only</span>\n<span class=\"typ\">EBChip</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Category\"</span>,\n    <span class=\"prp\">style</span> = <span class=\"typ\">EBChipStyle</span>.<span class=\"prp\">Light</span>\n)\n\n<span class=\"cmt\">// Dropdown trigger with selected value</span>\n<span class=\"typ\">EBChip</span>(\n    <span class=\"prp\">label</span> = <span class=\"str\">\"Sort by\"</span>,\n    <span class=\"prp\">selectedValue</span> = <span class=\"str\">\"Conservative first\"</span>,\n    <span class=\"prp\">style</span> = <span class=\"typ\">EBChipStyle</span>.<span class=\"prp\">Light</span>,\n    <span class=\"prp\">trailing</span> = <span class=\"typ\">EBChipTrailing</span>.<span class=\"prp\">Chevron</span>,\n    <span class=\"prp\">onClick</span> = { /* open dropdown */ }\n)"
      }
    ],
    "accessibility": [
      {
        "requirement": "Tap target",
        "ios": "32px height is below HIG 44pt — wrap in a 44pt-tall hit area",
        "android": "32dp height is below Material 48dp — expand touch target via <code>Modifier.minimumInteractiveComponentSize()</code>"
      },
      {
        "requirement": "Role",
        "ios": "<code>.accessibilityAddTraits(.isButton)</code>",
        "android": "Use <code>semantics { role = Role.Button }</code>"
      },
      {
        "requirement": "Close button label",
        "ios": "<code>.accessibilityLabel(\"Remove filter: \\(label)\")</code>",
        "android": "<code>contentDescription = \"Remove filter: $label\"</code>"
      },
      {
        "requirement": "Dropdown indicator",
        "ios": "<code>.accessibilityHint(\"Double-tap to change\")</code>",
        "android": "Announce chevron via role + state"
      },
      {
        "requirement": "Selected state",
        "ios": "<code>.accessibilityAddTraits(.isSelected)</code> for <code>style=filled</code>",
        "android": "<code>selected = true</code> in semantics for active filters"
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use style=filled for applied/active filters, style=light for inactive filters and dropdown triggers, style=outline when the surface beneath is already light gray.",
        "dontText": "Mix filled and light chips in the same filter row without intent — it signals \"one filter is selected,\" so using both styles for unrelated reasons misleads the user."
      },
      {
        "doText": "Pair the close affordance with applied filters so users can remove them with a single tap.",
        "dontText": "Add a close icon to dropdown-trigger chips — the chevron already indicates the tap behavior; a close icon implies removal instead of picking."
      },
      {
        "doText": "Keep the chip label to one or two words. Use selectedValue to show the picked option separately.",
        "dontText": "Stretch chips to fill width — they're meant to fit their content. If a control needs full width, use a Button or Select Field instead."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Semantic names: <code>container</code>, <code>Placeholder</code>, <code>Close</code>, <code>Chevron Down</code>."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Split across two components. <code>with icon</code> uses yes/no. Dropdown uses <code>type=\"with active time\"</code>."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "All colors, radii, spacing, and typography bound to tokens."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Maps to custom pill on iOS and <code>FilterChip</code>/<code>InputChip</code> on Android."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "No pressed / disabled / error states. Selected is implied by <code>style=filled</code>."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "rework",
        "statusLabel": "Requires Rework",
        "notes": "Leading slot is a hardcoded 24px gray circle — should be a swappable Avatar/Icon instance."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Blocked by C2 consolidation."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 0,
      "description": "",
      "columns": [
        "Source",
        "Style",
        "Leading",
        "Trailing",
        "Node ID"
      ],
      "rows": [
        {
          "cells": [
            "Filter",
            "Filled (primary)",
            "Avatar",
            "Close",
            "18336:22244"
          ]
        },
        {
          "cells": [
            "Filter",
            "Filled (primary)",
            "—",
            "—",
            "18336:22253"
          ]
        },
        {
          "cells": [
            "Filter",
            "Light",
            "Avatar",
            "Close",
            "18336:22257"
          ]
        },
        {
          "cells": [
            "Filter",
            "Light",
            "—",
            "—",
            "18336:22266"
          ]
        },
        {
          "cells": [
            "Filter",
            "Outline",
            "Avatar",
            "Close",
            "18336:22270"
          ]
        },
        {
          "cells": [
            "Filter",
            "Outline",
            "—",
            "—",
            "18336:22279"
          ]
        },
        {
          "cells": [
            "Filter w/ Dropdown",
            "Light",
            "—",
            "Chevron",
            "18336:22292"
          ]
        },
        {
          "cells": [
            "Filter w/ Dropdown",
            "Light (w/ selected value)",
            "—",
            "Chevron",
            "18336:22284"
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
      "header": "Initial Assessment · nodes 18336:22243 + 18336:22283",
      "rows": [
        {
          "body": "<strong>Assessed as Chip</strong> — Two Figma components (\"Filter\" with 6 variants, \"Filter with Dropdown\" with 2 variants) share the same pill anatomy. Recommended rename + consolidation into a single Chip component with semantic slot props.\n          <span class=\"tag-fixed\">Documented</span>",
          "delta": {
            "kind": "resolved",
            "label": "Initial"
          }
        },
        {
          "body": "<strong>Two-component split, mismatched schemas</strong> — Filter uses <code>type</code> + <code>with icon</code>. Dropdown uses <code>type=\"with active time\"</code>. Booleans are yes/no. Should consolidate to <code>style</code> / <code>leading</code> / <code>trailing</code> + optional <code>selectedValue</code>.\n          <span class=\"tag-open tag-c2\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C2 Open"
          }
        },
        {
          "body": "<strong>No pressed/disabled/error states</strong> — Engineers must improvise these affordances.\n          <span class=\"tag-open tag-c5\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C5 Open"
          }
        },
        {
          "body": "<strong>Leading slot is hardcoded placeholder</strong> — 24px gray circle instead of a swappable Avatar/Icon instance.\n          <span class=\"tag-open tag-c6\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C6 Open"
          }
        },
        {
          "body": "<strong>Code Connect mappings</strong> — Blocked by C2 rename + consolidation.\n          <span class=\"tag-open tag-c7\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "C7 Open"
          }
        }
      ]
    }
  ]
};
