import type { ComponentData, DemoControlSection } from '../types';

// Per-card demo controls — wired to `updateSpecCard(card, prop, value)`
// in `public/scripts/demos/service-item.js`.
// Panel mirrors the property panel of set 4692:21582, in its order: four
// variant axes, three booleans and two text properties. Asset-Slot and
// Description-Slot are SLOTs (32 items each) and get no control.
const serviceItemDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default',  label: 'Default' },
          { value: 'disabled', label: 'Disabled' },
          { value: 'inactive', label: 'Inactive' },
          { value: 'pressed',  label: 'Pressed' },
        ],
      },
      {
        label: 'Orientation',
        prop: 'orientation',
        defaultValue: 'vertical',
        options: [
          { value: 'vertical',   label: 'Vertical' },
          { value: 'horizontal', label: 'Horizontal' },
        ],
      },
      {
        label: 'Badge',
        prop: 'badge',
        defaultValue: 'none',
        options: [
          { value: 'none', label: 'None' },
          { value: 'new',  label: 'New' },
        ],
      },
      {
        label: 'Action',
        prop: 'action',
        defaultValue: 'none',
        options: [
          { value: 'none',   label: 'None' },
          { value: 'add',    label: 'Add' },
          { value: 'remove', label: 'Remove' },
        ],
      },
      { label: 'hasPreamble',    prop: 'haspreamble',    control: 'toggle', defaultValue: 'false',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasDescription', prop: 'hasdescription', control: 'toggle', defaultValue: 'false',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'hasBorder',      prop: 'hasborder',      control: 'toggle', defaultValue: 'false',
        options: [ { value: 'false', label: 'False' }, { value: 'true', label: 'True' } ] },
      { label: 'Label',    prop: 'label',    control: 'input', defaultValue: 'Label',    options: [] },
      { label: 'Preamble', prop: 'preamble', control: 'input', defaultValue: 'Preamble', options: [] },
    ],
  },
];

export const serviceItem: ComponentData = {
  meta: {
    slug: 'service-item',
    name: 'Service Item',
    node: '4692:21582',
    figmaUrl: 'https://www.figma.com/design/pbxY8a2xcIfVZKxwnud9Xe/GCash-Design-System--2026-Working-File?node-id=4692-21582',
    description: 'A service tile — asset slot, label and optional description — used in the home Menu Grid and customizable shortcut surfaces, with an optional New badge and Add or Remove edit overlays.',
    badges: [
      { kind: 'keep', label: 'Keep' },
      { kind: 'refine', label: 'Needs Refinement' },
    ],
    verdict: {
      kind: "keep",
      title: "Keep — all findings resolved",
      text: "Rebuilt on node <code>4692:21582</code> in the 2026 Working File, and every finding from the original assessment has landed. The <code>State=Disbaled</code> typo is corrected, <code>Type</code> is split into <code>Badge</code> and <code>Action</code>, Inactive and Disabled render differently, a <code>Pressed</code> state ships across all eight combinations, description is a real Figma Slot, and layer naming follows §3 and §7 throughout with both slots kebab-cased per §4. Three things are settled as decisions rather than fixes: badges are suppressed during edit mode, so 32 is the complete matrix rather than 32 of 48; the <code>Container</code> frame in the Horizontal variants is what creates the side-by-side layout and is correctly absent from Vertical; and the 12×12 overlay tap target is specified at 44×44pt / 48×48dp with its own accessibility label. The Add and Remove glyph construction is parked as accepted debt in the shared icon source. All four DS Health traits pass; the only item still open is Code Connect, blocked until the native library exists.",
    },
  },
  overview: {
    inContextNote: 'Used inside the home Menu Grid (the 4×N icon-and-label grid above the bills/transfer shortcuts) and inside the "Customize your home" reordering screen, where Add/Remove overlays appear over the icon during edit mode. Vertical orientation is the dominant home-grid usage; horizontal is reserved for list-style surfaces (e.g. the recent-services drawer).',
    inContextHtml: '<div class="ctx-placeholder">\n      <svg width="220" height="130" viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect x="20" y="10" width="180" height="110" rx="6" stroke="currentColor" stroke-width="1.2" opacity=".2"/>\n        <g opacity=".7">\n          <circle cx="50"  cy="40" r="14" fill="#E6F0FF" stroke="#005CE5" stroke-width="1.5"/>\n          <text  x="50"  y="68" fill="#072592" font-size="7" font-weight="700" text-anchor="middle" font-family="system-ui">Cash In</text>\n          <circle cx="110" cy="40" r="14" fill="#E6F0FF"/>\n          <rect x="120" y="22" width="18" height="10" rx="5" fill="#E11744"/><text x="129" y="30" fill="#FFF" font-size="6" font-weight="700" text-anchor="middle" font-family="system-ui">New</text>\n          <text  x="110" y="68" fill="#072592" font-size="7" font-weight="700" text-anchor="middle" font-family="system-ui">Send</text>\n          <circle cx="170" cy="40" r="14" fill="#E6F0FF"/>\n          <circle cx="180" cy="30" r="6" fill="#16A34A"/><text x="180" y="33" fill="#FFF" font-size="9" font-weight="700" text-anchor="middle" font-family="system-ui">+</text>\n          <text  x="170" y="68" fill="#072592" font-size="7" font-weight="700" text-anchor="middle" font-family="system-ui">Bills</text>\n        </g>\n      </svg>\n    </div>',
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"si-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Type</span><select class=\"demo-panel-select\" id=\"si-demo-type\" onchange=\"_siDemo.type=this.value;updateServiceItemDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"new\">New</option><option value=\"add\">Add</option><option value=\"remove\">Remove</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" id=\"si-demo-state\" onchange=\"_siDemo.state=this.value;updateServiceItemDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"inactive\">Inactive</option><option value=\"disabled\">Disabled</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Orientation</span><select class=\"demo-panel-select\" id=\"si-demo-orientation\" onchange=\"_siDemo.orientation=this.value;updateServiceItemDemo()\"><option value=\"vertical\" selected=\"\">Vertical</option><option value=\"horizontal\">Horizontal</option></select></div></div></div></div>",
    traits: [
      { name: "Reusable", rating: "pass", note: "Covers both the home-grid tile and the list-row layout from one component, and the <code>Type</code> axis that used to fuse badge with action is now two independent properties." },
      { name: "Self-contained", rating: "pass", note: "Owns its label, preamble and slot styling, and all four states carry their own colors. The Badge and the Add/Remove overlays are shared instances by design, so a fix to either propagates rather than drifting." },
      { name: "Consistent", rating: "pass", note: "Four axes in PascalCase per §1 with Title Case values per §5, layer naming in the §7 hierarchy as <code>Preamble → Label → Description</code>, and both slots kebab-cased per §4 as <code>Asset-Slot</code> and <code>Description-Slot</code>. The two structural differences are deliberate and recorded: <code>Container</code> exists only in Horizontal because only Horizontal needs a row frame, and the matrix stops at 32 because badges are suppressed while an edit overlay is present." },
      { name: "Composable", rating: "pass", note: "<code>Asset Slot</code> and <code>Description Slot</code> are both real Figma Slots, so a consumer supplies their own artwork and can show a label without inheriting placeholder description copy." },
    ],
    behavior: [
      { state: "Default", ios: "yes", android: "yes", property: "State=Default", notes: "Label at <code>#072592</code> on a <code>#F6F9FD</code> asset slot." },
      { state: "Pressed", ios: "yes", android: "yes", property: "State=Pressed", notes: "Label deepens to <code>#071969</code>; asset slot darkens to <code>#EEF2F9</code>. Released on finger-up." },
      { state: "Inactive", ios: "yes", android: "yes", property: "State=Inactive", notes: "Label at <code>#6780A9</code>. Visible and still tappable — the service exists but is temporarily unavailable." },
      { state: "Disabled", ios: "na", android: "na", property: "State=Disabled", notes: "Label at <code>#C2CFE5</code>, the system disabled foreground. Not tappable." },
      { state: "New badge", ios: "na", android: "na", property: "Badge=New", notes: "A 29×12 <code>Badge</code> instance over the asset slot. Decay rule — first tap, or N days — is still unspecified." },
      { state: "Add / Remove overlay", ios: "yes", android: "yes", property: "Action=Add | Remove", notes: "A 12×12 control in the asset slot corner, a separate tap target from the tile. Hit area is not annotated." },
    ],
    resolved: [
      {
        headline: "<code>State=Disbaled</code> typo corrected.",
        body: "v2.0: Rebuilt on node <code>4692:21582</code> in the 2026 Working File. All 32 variants read <code>State=Disabled</code>. The misspelling would have propagated into Code Connect prop names and from there into generated native constants, where it is far more expensive to unwind. (C2 · Rename)",
        tag: { criterion: "C2", label: "C2 · Variant & Property Naming" },
      },
      {
        headline: "<code>Type</code> split into <code>Badge</code> and <code>Action</code>.",
        body: "v2.0: The axis that bundled a content flag with an overlay action is gone. The schema is now <code>State</code> × <code>Orientation</code> × <code>Badge = None | New</code> × <code>Action = None | Add | Remove</code>, all PascalCase per §1 with Title Case values per §5. Each axis names one thing. (C2 · Property)",
        tag: { criterion: "C2", label: "C2 · Variant & Property Naming" },
      },
      {
        headline: "Inactive and Disabled now render differently.",
        body: "v2.0: The two states had been visually identical. They now separate cleanly — <code>Inactive</code> holds the label at <code>#6780A9</code>, a readable muted blue for a service that is visible but temporarily unavailable, while <code>Disabled</code> drops to <code>#C2CFE5</code>, the system disabled foreground. A user can tell which situation they are looking at. (C5 · State)",
        tag: { criterion: "C5", label: "C5 · Interaction State Coverage" },
      },
      {
        headline: "Pressed state added.",
        body: "v2.0: <code>State=Pressed</code> ships across all 8 orientation/badge/action combinations — the label deepens to <code>#071969</code> and the asset slot darkens <code>#F6F9FD</code> → <code>#EEF2F9</code>. Tiles are the primary tap target on the home grid, so touch-down feedback was the most-felt gap in the previous assessment. (C5 · State)",
        tag: { criterion: "C5", label: "C5 · Interaction State Coverage" },
      },
      {
        headline: "Description promoted to a real content slot.",
        body: "v2.0: <code>Description Slot</code> is a genuine <code>SLOT</code> node rather than a baked text layer with placeholder copy. Home-grid usages that only need a label no longer carry description content they have to remember to clear. <code>Asset Slot</code> is likewise a real Slot. (C4 · Slot)",
        tag: { criterion: "C4", label: "C4 · Native Mappability" },
      },
      {
        headline: "Layer naming pass landed, and both slots are kebab-case.",
        body: "v2.1: Verified on the live node. <code>#preamble</code> → <code>Preamble</code>, <code>#label</code> → <code>Label</code>, and the wrapping frames <code>preamble</code> / <code>content</code> / <code>border</code> → <code>Preamble</code> / <code>Content</code> / <code>Border</code>. The two slots also moved onto the §4 convention as <code>Asset-Slot</code> and <code>Description-Slot</code> — kebab-case for slots, PascalCase for frames, which is exactly the distinction §4 draws. Text layers now sit in the §7 hierarchy as <code>Preamble → Label → Description</code>. One layer was missed and is tracked below. (C1 · Rename)",
        tag: { criterion: "C1", label: "C1 · Layer Structure & Naming" },
      },
      {
        headline: "Rename sweep completed — <code>#description</code> → <code>Description</code>.",
        body: "v2.2: Verified on the live node (<code>4692:21589</code>). Every text layer now reads without the legacy sigil, in the §7 hierarchy as <code>Preamble → Label → Description</code>, with <code>Asset-Slot</code> and <code>Description-Slot</code> kebab-cased per §4. No layer in the set carries the old convention. (C1 · Rename)",
        tag: { criterion: "C1", label: "C1 · Layer Structure & Naming" },
      },
      {
        headline: "Badges are suppressed in edit mode — matrix confirmed complete at 32.",
        body: "v2.2: Closed by owner decision. <code>Badge</code> and <code>Action</code> are deliberately mutually exclusive: while a user is customising their home screen, a red <em>New</em> badge competes with the Add/Remove affordance for the same corner of the tile and for the same attention, so the badge is suppressed for the duration of edit mode. The 16 <code>Badge=New</code> × <code>Action=Add|Remove</code> combinations are therefore unsupported rather than unbuilt, and 32 is the complete matrix. Native implementations should hide the badge whenever an edit overlay is present rather than stacking them. Recorded so a consumer meeting the gap in the variant picker finds a rule instead of assuming an omission. (C2 · Property)",
        tag: { criterion: "C2", label: "C2 · Variant & Property Naming" },
      },
      {
        headline: "<code>Container</code> in the Horizontal variants confirmed intentional.",
        body: "v2.2: The asymmetry is structural, not an oversight. Horizontal lays the asset and the text side by side, which needs its own auto-layout frame to hold that row; Vertical stacks the same children directly and needs no wrapper. Adding a <code>Container</code> to Vertical would introduce a frame that does nothing, and removing it from Horizontal would break the layout it exists to create. Native implementations should read <code>Orientation</code> as the layout switch — a row versus a column — rather than expecting one tree shape across both. (C1)",
        tag: { criterion: "C1", label: "C1 · Layer Structure & Naming" },
      },
      {
        headline: "Overlay tap-area specified.",
        body: "v2.2: The Add and Remove overlays render at <strong>12×12</strong> in the corner of <code>Asset-Slot</code>, and each is a <strong>separate tap target from the tile beneath it</strong> — tapping the tile opens the service, tapping the overlay adds or removes it. The glyph stays 12×12 visually; the touch target must be expanded around it to <strong>44×44pt on iOS</strong> and <strong>48×48dp on Android</strong>, centred on the glyph and extending beyond the tile bounds where necessary. On iOS use a transparent <code>.contentShape(Rectangle())</code> sized to the target rather than growing the visible circle; on Android set the minimum touch target on the clickable modifier rather than padding the icon. The overlay must sit above the tile in hit-test order so its region wins, and it needs its own accessibility label — “Add {service}” / “Remove {service}” — separate from the tile’s. Without this an implementer either ships an untappable control or wraps the whole tile, and wrapping the tile breaks edit mode. This spec lives here rather than as a Figma annotation: the review has read-only Figma access, so the note itself still needs adding in the file. (C5 · A11y)",
        tag: { criterion: "C5", label: "C5 · Interaction State Coverage" },
      },
      {
        headline: "Add and Remove glyph construction deferred.",
        body: "v2.2: Parked by owner decision rather than fixed. The overlays’ source component is built from <code>Ellipse 53</code> plus <code>Rectangle 2620</code> and <code>Rectangle 2621</code> — two white bars over a <code>#12AF80</code> circle — rather than a vector glyph on the icon grid, so the default shape names carry no meaning and the plus will not scale or recolor like the rest of the icon set. It sits in the shared icon source rather than in Service Item, so fixing it is the icon owner’s call and affects every consumer equally. Recorded as a known, accepted debt rather than closed as correct. (C6 · Asset)",
        tag: { criterion: "C6", label: "C6 · Asset & Icon Quality" },
      }
    ],
    open: [
      {
        headline: "Code Connect mappings not registered.",
        body: "Blocked — no native library exists yet. Both blockers the original assessment named are cleared: the State typo is fixed and the Type axis is split, so the schema — four PascalCase axes over two named slots — maps cleanly whenever the library lands.",
        tag: { criterion: "C7", label: "C7 · Code Connect Linkability" },
      }
    ],
    recommendations: [],
  },
  style: {
    "heading": "Styles",
    "specCards": [
      {
        "cardKey": "si-spec-main",
        "demoKey": "main",
        "title": "Service Item",
        "node": "4692:21582",
        "description": "A service tile — asset, label and optional preamble and description — with a New badge or Add / Remove edit overlay. Vertical is 64 wide and 72 tall bare (109 with Preamble and Description); Horizontal hugs its text, 120 × 64 bare and 138 × 80 with everything on.",
        "previewHtml": "<div id=\"service-item-spec-main\" class=\"spec-preview-body\"></div>",
        "demoControls": serviceItemDemoControls,
        "sections": [
          {
            "label": "Properties",
            "slug": "props",
            "rows": [
              {
                "key": "State",
                "value": "Default",
                "prop": "state"
              },
              {
                "key": "Orientation",
                "value": "Vertical",
                "prop": "orientation"
              },
              {
                "key": "Badge",
                "value": "None",
                "prop": "badge"
              },
              {
                "key": "Action",
                "value": "None",
                "prop": "action"
              },
              {
                "key": "hasPreamble",
                "value": "False",
                "prop": "haspreamble"
              },
              {
                "key": "hasDescription",
                "value": "False",
                "prop": "hasdescription"
              },
              {
                "key": "hasBorder",
                "value": "False",
                "prop": "hasborder"
              },
              {
                "key": "Label",
                "value": "Label",
                "prop": "label"
              },
              {
                "key": "Preamble",
                "value": "Preamble",
                "prop": "preamble"
              },
              {
                "key": "⤷ Asset-Slot",
                "value": "Slot · 32 items — 48 × 48, full radius"
              },
              {
                "key": "⤷ Description-Slot",
                "value": "Slot · 32 items — 15 tall",
                "variants": {
                  "hasdescription:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Resolved variant",
                "value": "4692:21583 · 64 × 72",
                "mono": true,
                "prop": "variantNode"
              }
            ]
          },
          {
            "label": "Colors",
            "slug": "colors",
            "rows": [
              {
                "key": "Label",
                "value": "#072592",
                "token": "—",
                "swatch": "#072592",
                "variants": {
                  "state:inactive": {
                    "value": "#6780A9",
                    "swatch": "#6780A9"
                  },
                  "state:pressed": {
                    "value": "#071969",
                    "swatch": "#071969"
                  },
                  "state:disabled": {
                    "value": "#C2CFE5",
                    "swatch": "#C2CFE5"
                  }
                }
              },
              {
                "key": "Asset-Slot fill",
                "value": "#F6F9FD",
                "token": "—",
                "swatch": "#F6F9FD",
                "variants": {
                  "state:pressed": {
                    "value": "#EEF2F9",
                    "swatch": "#EEF2F9"
                  }
                }
              },
              {
                "key": "Preamble",
                "value": "#90A8D0",
                "token": "—",
                "swatch": "#90A8D0",
                "variants": {
                  "haspreamble:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Description",
                "value": "#445C85",
                "token": "—",
                "swatch": "#445C85",
                "variants": {
                  "hasdescription:false": {
                    "hide": true
                  },
                  "state:inactive|hasdescription:true": {
                    "value": "#90A8D0",
                    "swatch": "#90A8D0"
                  },
                  "state:pressed|hasdescription:true": {
                    "value": "#0A2757",
                    "swatch": "#0A2757"
                  },
                  "state:disabled|hasdescription:true": {
                    "value": "#C2CFE5",
                    "swatch": "#C2CFE5"
                  }
                }
              },
              {
                "key": "Border",
                "value": "#D7E0EF",
                "token": "—",
                "swatch": "#D7E0EF",
                "variants": {
                  "hasborder:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "New badge fill",
                "value": "#D61B2C",
                "token": "—",
                "swatch": "#D61B2C",
                "variants": {
                  "badge:none": {
                    "hide": true
                  },
                  "state:inactive|badge:new": {
                    "value": "#F76464",
                    "swatch": "#F76464"
                  },
                  "state:inactive|badge:none": {
                    "hide": true
                  },
                  "state:pressed|badge:new": {
                    "value": "#B50707",
                    "swatch": "#B50707"
                  },
                  "state:pressed|badge:none": {
                    "hide": true
                  },
                  "state:disabled|badge:new": {
                    "value": "#F8E6E6",
                    "swatch": "#F8E6E6"
                  },
                  "state:disabled|badge:none": {
                    "hide": true
                  }
                }
              },
              {
                "key": "New badge label",
                "value": "#FFFFFF",
                "token": "—",
                "swatch": "#FFFFFF",
                "variants": {
                  "badge:none": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Add overlay fill",
                "value": "#12AF80",
                "token": "—",
                "swatch": "#12AF80",
                "variants": {
                  "action:none": {
                    "hide": true
                  },
                  "action:remove": {
                    "hide": true
                  },
                  "state:inactive|action:add": {
                    "value": "#6FE7AB",
                    "swatch": "#6FE7AB"
                  },
                  "state:inactive|action:none": {
                    "hide": true
                  },
                  "state:inactive|action:remove": {
                    "hide": true
                  },
                  "state:pressed|action:add": {
                    "value": "#048570",
                    "swatch": "#048570"
                  },
                  "state:pressed|action:none": {
                    "hide": true
                  },
                  "state:pressed|action:remove": {
                    "hide": true
                  },
                  "state:disabled|action:add": {
                    "value": "#E7F8F0",
                    "swatch": "#E7F8F0"
                  },
                  "state:disabled|action:none": {
                    "hide": true
                  },
                  "state:disabled|action:remove": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Remove overlay fill",
                "value": "#D61B2C",
                "token": "—",
                "swatch": "#D61B2C",
                "variants": {
                  "action:none": {
                    "hide": true
                  },
                  "action:add": {
                    "hide": true
                  },
                  "state:inactive|action:remove": {
                    "value": "#F76464",
                    "swatch": "#F76464"
                  },
                  "state:inactive|action:none": {
                    "hide": true
                  },
                  "state:inactive|action:add": {
                    "hide": true
                  },
                  "state:pressed|action:remove": {
                    "value": "#B50707",
                    "swatch": "#B50707"
                  },
                  "state:pressed|action:none": {
                    "hide": true
                  },
                  "state:pressed|action:add": {
                    "hide": true
                  },
                  "state:disabled|action:remove": {
                    "value": "#F8E6E6",
                    "swatch": "#F8E6E6"
                  },
                  "state:disabled|action:none": {
                    "hide": true
                  },
                  "state:disabled|action:add": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Overlay glyph",
                "value": "#FFFFFF",
                "token": "—",
                "swatch": "#FFFFFF",
                "variants": {
                  "action:none": {
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
                "key": "Size",
                "value": "64 × 72",
                "mono": true,
                "prop": "size-readout"
              },
              {
                "key": "Width",
                "value": "Fixed 64",
                "mono": true,
                "variants": {
                  "orientation:horizontal": {
                    "value": "Hugs — 20 + Container + 8"
                  }
                }
              },
              {
                "key": "Padding",
                "value": "0 top · 6 bottom · 0 sides",
                "mono": true,
                "variants": {
                  "orientation:horizontal": {
                    "value": "8 top · 8 bottom · 20 left · 8 right"
                  }
                }
              },
              {
                "key": "Asset-Slot",
                "value": "48 × 48 · radius full",
                "mono": true
              },
              {
                "key": "Asset position",
                "value": "x 8 · y 0",
                "mono": true,
                "variants": {
                  "haspreamble:true": {
                    "value": "x 8 · y 18 — 6 below Preamble"
                  },
                  "orientation:horizontal": {
                    "value": "x 20 · y 8, first in Container"
                  },
                  "orientation:horizontal|haspreamble:true": {
                    "value": "x 20 · y 8, first in Container"
                  }
                }
              },
              {
                "key": "Container",
                "value": "48 × 48 asset + 12 gap + text column (hugs)",
                "mono": true,
                "variants": {
                  "orientation:vertical": {
                    "hide": true
                  }
                }
              },
              {
                "key": "Label",
                "value": "64 wide, centred · 6 below asset",
                "mono": true,
                "variants": {
                  "orientation:horizontal": {
                    "value": "Hugs, left-aligned · 12 right of asset · text column centred on asset"
                  }
                }
              },
              {
                "key": "Description gap",
                "value": "4 below label",
                "mono": true,
                "variants": {
                  "hasdescription:false": {
                    "hide": true
                  },
                  "orientation:horizontal|hasdescription:true": {
                    "value": "2 below label"
                  }
                }
              },
              {
                "key": "Preamble",
                "value": "64 × 12 at top · text inset 4 · 6 above asset",
                "mono": true,
                "variants": {
                  "haspreamble:false": {
                    "hide": true
                  },
                  "orientation:horizontal|haspreamble:true": {
                    "value": "Container width × 12 · 4 below Container · text inset 8"
                  }
                }
              },
              {
                "key": "Border",
                "value": "1 × full height, left edge",
                "mono": true,
                "variants": {
                  "hasborder:false": {
                    "hide": true
                  }
                }
              },
              {
                "key": "New badge",
                "value": "29 × 12 · radius 4 · at (41, −12) from frame top",
                "mono": true,
                "variants": {
                  "badge:none": {
                    "hide": true
                  },
                  "orientation:horizontal|badge:new": {
                    "value": "29 × 12 · radius 4 · at (87, −2) from frame top"
                  }
                }
              },
              {
                "key": "Add / Remove overlay",
                "value": "12 × 12 circle · at (54, −6) from frame top",
                "mono": true,
                "variants": {
                  "action:none": {
                    "hide": true
                  },
                  "orientation:horizontal|action:add": {
                    "value": "12 × 12 circle · at (104, −2) from frame top"
                  },
                  "orientation:horizontal|action:remove": {
                    "value": "12 × 12 circle · at (104, −2) from frame top"
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
                "key": "Label",
                "value": "Primary/Label/Fine",
                "mono": true
              },
              {
                "key": "Preamble",
                "value": "Secondary/Heavy/Fine",
                "mono": true,
                "variants": {
                  "haspreamble:false": {
                    "hide": true
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
                "key": "New badge",
                "value": "Primary/Label/Tiny",
                "mono": true,
                "variants": {
                  "badge:none": {
                    "hide": true
                  }
                }
              }
            ]
          }
        ],
        "swift": "EBServiceItem(\"Label\")\n    .ebOrientation(.vertical)\n    .ebAsset { Image(\"service\") }",
        "compose": "EBServiceItem(\n    label = \"Label\",\n    orientation = EBServiceItemOrientation.Vertical,\n    asset = { Image(painterResource(R.drawable.service), null) },\n    onClick = { }\n)"
      }
    ],
    "colorsTables": [
      {
        "title": "Colors by State",
        "description": "Read off <code>get_node_info</code> across the 32 variants of set <code>4692:21582</code>. Orientation does not change any colour. Token paths could not be read; the plugin returns no variable bindings.",
        "columns": [
          "Default",
          "Inactive",
          "Pressed",
          "Disabled"
        ],
        "rows": [
          {
            "role": "Label",
            "token": "—",
            "values": [
              "#072592",
              "#6780A9",
              "#071969",
              "#C2CFE5"
            ]
          },
          {
            "role": "Asset-Slot fill",
            "token": "—",
            "values": [
              "#F6F9FD",
              "#F6F9FD",
              "#EEF2F9",
              "#F6F9FD"
            ]
          },
          {
            "role": "New badge fill / label",
            "token": "—",
            "values": [
              "#D61B2C / #FFFFFF",
              "#F76464 / #FFFFFF",
              "#B50707 / #FFFFFF",
              "#F8E6E6 / #FFFFFF"
            ]
          },
          {
            "role": "Add overlay fill / glyph",
            "token": "—",
            "values": [
              "#12AF80 / #FFFFFF",
              "#6FE7AB / #FFFFFF",
              "#048570 / #FFFFFF",
              "#E7F8F0 / #FFFFFF"
            ]
          },
          {
            "role": "Remove overlay fill / glyph",
            "token": "—",
            "values": [
              "#D61B2C / #FFFFFF",
              "#F76464 / #FFFFFF",
              "#B50707 / #FFFFFF",
              "#F8E6E6 / #FFFFFF"
            ]
          },
          {
            "role": "Preamble",
            "token": "—",
            "values": [
              "#90A8D0",
              "#90A8D0",
              "#90A8D0",
              "#90A8D0"
            ]
          },
          {
            "role": "Description",
            "token": "—",
            "values": [
              "#445C85",
              "#90A8D0",
              "#0A2757",
              "#C2CFE5"
            ]
          },
          {
            "role": "Border",
            "token": "—",
            "values": [
              "#D7E0EF",
              "#D7E0EF",
              "#D7E0EF",
              "#D7E0EF"
            ]
          }
        ]
      }
    ]
  },
  code: {
    "installation": {
      "planned": true,
      "blocks": [
        {
          "label": "iOS — Swift Package Manager",
          "code": "<span class=\"cmt\">// In Xcode: File → Add Package Dependencies</span>\n<span class=\"str\">\"https://github.com/AY-Org/eb-ds-ios\"</span>"
        },
        {
          "label": "Android — Gradle (Kotlin DSL)",
          "code": "<span class=\"fn\">dependencies</span> {\n    <span class=\"fn\">implementation</span>(<span class=\"str\">\"com.eastblue.ds:service-item:2.2.1\"</span>)\n}"
        },
        {
          "label": "Import",
          "code": "<span class=\"kw\">import</span> EastBlueDS  <span class=\"cmt\">// SwiftUI</span>\n<span class=\"kw\">import</span> com.eastblue.ds.serviceitem.*  <span class=\"cmt\">// Compose</span>"
        }
      ],
      "footnote": "Package not yet published. These are the planned distribution paths."
    },
    "propertyMapping": {
      "description": "One row per property of set <code>4692:21582</code>, in panel order. <code>Badge</code> and <code>Action</code> never combine — setting one clears the other. <code>Asset-Slot</code> and <code>Description-Slot</code> are SLOTs with 32 items each.",
      "rows": [
        {
          "figma": "State — Default, Disabled, Inactive, Pressed",
          "swift": "<code>.disabled(true)</code> · <code>.ebInactive(true)</code> — Pressed is the button’s pressed style",
          "compose": "<code>enabled = false</code> · <code>inactive = true</code> — Pressed from <code>interactionSource</code>"
        },
        {
          "figma": "Orientation — Vertical, Horizontal",
          "swift": "<code>.ebOrientation(.vertical / .horizontal)</code>",
          "compose": "<code>orientation = EBServiceItemOrientation.Vertical / Horizontal</code>"
        },
        {
          "figma": "Badge — None, New",
          "swift": "<code>.ebBadge(.new)</code> — omit for None",
          "compose": "<code>badge = EBServiceItemBadge.New</code> — default <code>null</code>"
        },
        {
          "figma": "Action — None, Add, Remove",
          "swift": "<code>.ebEditAction(.add / .remove) { }</code> — omit for None",
          "compose": "<code>editAction = EBServiceItemAction.Add / Remove</code> + <code>onEditAction</code>"
        },
        {
          "figma": "hasPreamble — boolean",
          "swift": "<code>.ebPreamble(String)</code> — omit for False",
          "compose": "<code>preamble: String? = null</code>"
        },
        {
          "figma": "hasDescription — boolean",
          "swift": "<code>.ebDescription(String)</code> — omit for False",
          "compose": "<code>description: (@Composable () -&gt; Unit)? = null</code>"
        },
        {
          "figma": "hasBorder — boolean",
          "swift": "<code>.ebBorder(true)</code>",
          "compose": "<code>showsBorder = true</code>"
        },
        {
          "figma": "Label — text",
          "swift": "<code>EBServiceItem(_ label: String)</code>",
          "compose": "<code>label: String</code>"
        },
        {
          "figma": "Preamble — text",
          "swift": "the string passed to <code>.ebPreamble</code>",
          "compose": "the value of <code>preamble</code>"
        },
        {
          "figma": "⤷ Asset-Slot — SLOT (48 × 48)",
          "swift": "content of <code>.ebAsset { }</code>",
          "compose": "<code>asset: @Composable () -&gt; Unit</code>"
        },
        {
          "figma": "⤷ Description-Slot — SLOT",
          "swift": "content of <code>.ebDescription</code>",
          "compose": "content of <code>description</code>"
        }
      ],
      "filePaths": {
        "swift": "ios/Components/ServiceItem/EBServiceItem.swift",
        "compose": "android/components/serviceitem/EBServiceItem.kt"
      }
    },
    "usageSnippets": [
      {
        "subheading": "Vertical · default",
        "swift": "<span class=\"cmt\">// State=Default, Orientation=Vertical, Badge=None, Action=None — 4692:21583, 64 × 72.</span>\n<span class=\"typ\">EBServiceItem</span>(<span class=\"str\">\"Send\"</span>)\n    .ebOrientation(.vertical)\n    .ebAsset { <span class=\"typ\">Image</span>(<span class=\"str\">\"send\"</span>) }",
        "compose": "<span class=\"cmt\">// State=Default, Orientation=Vertical, Badge=None, Action=None — 4692:21583, 64 × 72.</span>\n<span class=\"typ\">EBServiceItem</span>(\n    label = <span class=\"str\">\"Send\"</span>,\n    orientation = <span class=\"typ\">EBServiceItemOrientation</span>.Vertical,\n    asset = { <span class=\"typ\">Image</span>(painterResource(R.drawable.send), null) },\n    onClick = { openSend() }\n)"
      },
      {
        "subheading": "Vertical · New badge",
        "swift": "<span class=\"cmt\">// State=Default, Orientation=Vertical, Badge=New, Action=None — 4692:21591, 64 × 72.</span>\n<span class=\"typ\">EBServiceItem</span>(<span class=\"str\">\"Borrow\"</span>)\n    .ebOrientation(.vertical)\n    .ebBadge(.new)\n    .ebAsset { <span class=\"typ\">Image</span>(<span class=\"str\">\"borrow\"</span>) }",
        "compose": "<span class=\"cmt\">// State=Default, Orientation=Vertical, Badge=New, Action=None — 4692:21591, 64 × 72.</span>\n<span class=\"typ\">EBServiceItem</span>(\n    label = <span class=\"str\">\"Borrow\"</span>,\n    orientation = <span class=\"typ\">EBServiceItemOrientation</span>.Vertical,\n    badge = <span class=\"typ\">EBServiceItemBadge</span>.New,\n    asset = { <span class=\"typ\">Image</span>(painterResource(R.drawable.borrow), null) },\n    onClick = { openBorrow() }\n)"
      },
      {
        "subheading": "Edit mode · Add / Remove",
        "swift": "<span class=\"cmt\">// State=Default, Orientation=Vertical, Badge=None, Action=Add — 4692:21601, 64 × 72.</span>\n<span class=\"typ\">EBServiceItem</span>(<span class=\"str\">\"Send\"</span>)\n    .ebOrientation(.vertical)\n    .ebEditAction(.add) { pin(.send) }\n    .ebAsset { <span class=\"typ\">Image</span>(<span class=\"str\">\"send\"</span>) }",
        "compose": "<span class=\"cmt\">// State=Default, Orientation=Vertical, Badge=None, Action=Add — 4692:21601, 64 × 72.</span>\n<span class=\"typ\">EBServiceItem</span>(\n    label = <span class=\"str\">\"Send\"</span>,\n    orientation = <span class=\"typ\">EBServiceItemOrientation</span>.Vertical,\n    editAction = <span class=\"typ\">EBServiceItemAction</span>.Add,\n    onEditAction = { pin(Service.Send) },\n    asset = { <span class=\"typ\">Image</span>(painterResource(R.drawable.send), null) },\n    onClick = { }\n)"
      },
      {
        "subheading": "Horizontal · description",
        "swift": "<span class=\"cmt\">// State=Default, Orientation=Horizontal, hasDescription=True — 4692:21655, 120 × 64 at default.</span>\n<span class=\"typ\">EBServiceItem</span>(<span class=\"str\">\"Pay Bills\"</span>)\n    .ebOrientation(.horizontal)\n    .ebDescription(<span class=\"str\">\"Due today\"</span>)\n    .ebAsset { <span class=\"typ\">Image</span>(<span class=\"str\">\"bills\"</span>) }",
        "compose": "<span class=\"cmt\">// State=Default, Orientation=Horizontal, hasDescription=True — 4692:21655, 120 × 64 at default.</span>\n<span class=\"typ\">EBServiceItem</span>(\n    label = <span class=\"str\">\"Pay Bills\"</span>,\n    orientation = <span class=\"typ\">EBServiceItemOrientation</span>.Horizontal,\n    description = { <span class=\"typ\">Text</span>(<span class=\"str\">\"Due today\"</span>) },\n    asset = { <span class=\"typ\">Image</span>(painterResource(R.drawable.bills), null) },\n    onClick = { openBills() }\n)"
      },
      {
        "subheading": "Inactive and Disabled",
        "swift": "<span class=\"cmt\">// State=Inactive / Disabled, Orientation=Vertical — 4692:21619 / 4692:21775, 64 × 72.</span>\n<span class=\"typ\">EBServiceItem</span>(<span class=\"str\">\"GInsure\"</span>)\n    .ebInactive(true)       // still tappable\n    .ebAsset { <span class=\"typ\">Image</span>(<span class=\"str\">\"insure\"</span>) }\n\n<span class=\"typ\">EBServiceItem</span>(<span class=\"str\">\"GLoan\"</span>)\n    .disabled(true)\n    .ebAsset { <span class=\"typ\">Image</span>(<span class=\"str\">\"loan\"</span>) }",
        "compose": "<span class=\"cmt\">// State=Inactive / Disabled, Orientation=Vertical — 4692:21619 / 4692:21775, 64 × 72.</span>\n<span class=\"typ\">EBServiceItem</span>(label = <span class=\"str\">\"GInsure\"</span>, inactive = true,\n    asset = { <span class=\"typ\">Image</span>(painterResource(R.drawable.insure), null) }, onClick = { explain() })\n\n<span class=\"typ\">EBServiceItem</span>(label = <span class=\"str\">\"GLoan\"</span>, enabled = false,\n    asset = { <span class=\"typ\">Image</span>(painterResource(R.drawable.loan), null) }, onClick = { })"
      }
    ],
    "accessibility": [
      {
        "requirement": "Tile role",
        "ios": "Wrap as <code>Button</code>; label is <code>Label</code> plus the description when shown.",
        "android": "<code>Modifier.clickable(role = Role.Button)</code>; <code>contentDescription</code> = label + description."
      },
      {
        "requirement": "New badge",
        "ios": "<code>.accessibilityValue(\"new\")</code> so VoiceOver reads “Send, new”.",
        "android": "Append “new” to <code>stateDescription</code>."
      },
      {
        "requirement": "Add / Remove overlay",
        "ios": "Its own element — “Add Send” / “Remove Send” — with a 44 × 44pt target via <code>.contentShape</code> around the 12 × 12 glyph.",
        "android": "Separate clickable with its own <code>contentDescription</code> and a 48 × 48dp minimum touch target."
      },
      {
        "requirement": "Disabled vs Inactive",
        "ios": "Disabled: <code>.disabled(true)</code>. Inactive stays tappable with <code>.accessibilityHint(\"Currently unavailable\")</code>.",
        "android": "Disabled: <code>enabled = false</code>. Inactive stays clickable; <code>stateDescription = \"currently unavailable\"</code>."
      },
      {
        "requirement": "Contrast",
        "ios": "Label #072592 is 12.44:1 on white; Pressed #071969 15.53:1. Inactive #6780A9 is 4.01:1 — below 4.5:1 at 12pt. Description is 6.74:1 (#445C85) and 14.58:1 Pressed (#0A2757), but the Inactive description (#90A8D0) is 2.41:1. White on the Inactive overlays is 3.02:1 (#F76464) and 1.53:1 (#6FE7AB); on the Disabled overlays 1.20:1 and 1.10:1. The Add overlay in Default (#12AF80) is 2.81:1.",
        "android": "Same ratios."
      }
    ],
    "usageGuidelines": [
      {
        "doText": "Use Vertical in the home Menu Grid and Horizontal where a tile needs a description beside it.",
        "dontText": "Don’t mix orientations in one grid."
      },
      {
        "doText": "Show Add or Remove only in the customise-home edit mode.",
        "dontText": "Don’t show a New badge and an edit overlay together — the set has no such variant."
      },
      {
        "doText": "Use Inactive for a service the user can still open to learn why it is unavailable.",
        "dontText": "Don’t use Disabled when tapping should explain something — Disabled takes no taps."
      },
      {
        "doText": "Keep labels to one short line; the vertical tile is 64 wide.",
        "dontText": "Don’t rely on the description in Vertical home grids — it adds height to every row."
      }
    ],
    "scorecard": [
      {
        "id": "C1",
        "criterion": "Layer Structure & Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "<code>Asset-Slot</code>, <code>Content</code>, <code>Label</code>, <code>Preamble</code>, <code>Description-Slot</code>, <code>Border</code>, <code>Container</code> — semantic throughout."
      },
      {
        "id": "C2",
        "criterion": "Variant & Property Naming",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Four PascalCase axes, three <code>has…</code> booleans and two text properties. 32 variants; Badge × Action is exclusive by owner decision."
      },
      {
        "id": "C3",
        "criterion": "Token Coverage",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "All four text layers resolve <code>matched</code>. Colour bindings cannot be read with the plugin, and the Inactive and Disabled overlays fail contrast."
      },
      {
        "id": "C4",
        "criterion": "Native Mappability",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "One <code>EBServiceItem</code> with an orientation, optional badge or edit action, and asset / description slots."
      },
      {
        "id": "C5",
        "criterion": "Interaction State Coverage",
        "status": "ready",
        "statusLabel": "Ready",
        "notes": "Default, Pressed, Inactive and Disabled on every orientation and pairing; the overlay tap target is specified on the Overview."
      },
      {
        "id": "C6",
        "criterion": "Asset & Icon Quality",
        "status": "refine",
        "statusLabel": "Needs Refinement",
        "notes": "Asset-Slot is a real SLOT. The Add and Remove glyphs are built from an ellipse and rectangles — parked as accepted debt."
      },
      {
        "id": "C7",
        "criterion": "Code Connect Linkability",
        "status": "empty",
        "statusLabel": "Not Mapped",
        "notes": "Properties are ready to map; no mappings are registered."
      }
    ],
    "codeConnect": [],
    "variants": {
      "total": 32,
      "description": "<code>State</code> (4) × <code>Orientation</code> (2) × 4 Badge / Action pairings = 32 variants. <code>Badge=New</code> never pairs with an <code>Action</code> — badges are suppressed in edit mode by owner decision. The three booleans and two text properties add none. Dimensions are with the booleans off; with all three on, Vertical is 64 × 109 and Horizontal 138 × 80.",
      "columns": [
        "Orientation",
        "State",
        "Badge",
        "Action",
        "Node ID",
        "Dimensions"
      ],
      "rows": [
        {
          "cells": [
            "Vertical",
            "Default",
            "None",
            "None",
            "<code>4692:21583</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Default",
            "New",
            "None",
            "<code>4692:21591</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Default",
            "None",
            "Add",
            "<code>4692:21601</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Default",
            "None",
            "Remove",
            "<code>4692:21610</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Inactive",
            "None",
            "None",
            "<code>4692:21619</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Inactive",
            "New",
            "None",
            "<code>4692:21627</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Inactive",
            "None",
            "Add",
            "<code>4692:21637</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Inactive",
            "None",
            "Remove",
            "<code>4692:21646</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Pressed",
            "None",
            "None",
            "<code>4703:18264</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Pressed",
            "New",
            "None",
            "<code>4703:18387</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Pressed",
            "None",
            "Add",
            "<code>4711:18442</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Pressed",
            "None",
            "Remove",
            "<code>4711:18624</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Disabled",
            "None",
            "None",
            "<code>4692:21775</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Disabled",
            "New",
            "None",
            "<code>4692:21783</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Disabled",
            "None",
            "Add",
            "<code>4692:21793</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Vertical",
            "Disabled",
            "None",
            "Remove",
            "<code>4692:21802</code>",
            "64.0 × 72.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Default",
            "None",
            "None",
            "<code>4692:21655</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Default",
            "New",
            "None",
            "<code>4692:21664</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Default",
            "None",
            "Add",
            "<code>4692:21675</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Default",
            "None",
            "Remove",
            "<code>4692:21685</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Inactive",
            "None",
            "None",
            "<code>4692:21695</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Inactive",
            "New",
            "None",
            "<code>4692:21704</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Inactive",
            "None",
            "Add",
            "<code>4692:21715</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Inactive",
            "None",
            "Remove",
            "<code>4692:21725</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Pressed",
            "None",
            "None",
            "<code>4711:18705</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Pressed",
            "New",
            "None",
            "<code>4711:18714</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Pressed",
            "None",
            "Add",
            "<code>4711:18726</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Pressed",
            "None",
            "Remove",
            "<code>4711:18739</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Disabled",
            "None",
            "None",
            "<code>4692:21735</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Disabled",
            "New",
            "None",
            "<code>4692:21754</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Disabled",
            "None",
            "Add",
            "<code>4692:21744</code>",
            "120.0 × 64.0"
          ]
        },
        {
          "cells": [
            "Horizontal",
            "Disabled",
            "None",
            "Remove",
            "<code>4692:21765</code>",
            "120.0 × 64.0"
          ]
        }
      ]
    }
  },
  changelog: [
    {
      "version": "2.2.1",
      "date": "September 2026",
      "kind": "patch",
      "kindLabel": "Patch",
      "header": "Style + Code tabs rebuilt against the live component · node 4692:21582",
      "rows": [
        {
          "body": "<strong>Style tab rebuilt to one card with the Figma property panel.</strong> The card on retired node <code>20210:2442</code> with a fused <code>Type</code> control became one card with <code>State</code>, <code>Orientation</code>, <code>Badge</code>, <code>Action</code>, <code>hasPreamble</code>, <code>hasDescription</code>, <code>hasBorder</code> and the <code>Label</code> / <code>Preamble</code> text inputs. The two slots are listed without controls.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Preview redrawn from the set.</strong> Vertical 64 × 72 and Horizontal 120 × 64, with the New badge at (41, −12) / (87, −2) and the 12 × 12 overlays at (54, −6) / (104, −2) — both sit above the frame. Picking a badge with an action snaps to the built variant.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Colours corrected.</strong> New badge and Remove are #D61B2C (not #E11744), Add is #12AF80 (not #16A34A), Inactive label is #6780A9 (not #C2CFE5), and Pressed is added — #071969 label on an #EEF2F9 asset. Description follows State too: #445C85, Inactive #90A8D0, Pressed #0A2757, Disabled #C2CFE5.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>Typography now names text styles.</strong> <code>Primary/Label/Fine</code>, <code>Secondary/Heavy/Fine</code>, <code>Secondary/Bold/Small Caption</code> and <code>Primary/Label/Tiny</code>, all matched.",
          "delta": {
            "kind": "resolved",
            "label": "C3"
          }
        },
        {
          "body": "<strong>The Code tab was rebuilt on the live panel.</strong> Install is <code>com.eastblue.ds:service-item:2.2.1</code>, with an 11-row mapping, five snippets and a 32-row inventory replacing the 24-row one.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Scorecard rescored.</strong> C1, C2, C4, C5 Ready; C3, C6 Needs Refinement; C7 Not Mapped.",
          "delta": {
            "kind": "resolved",
            "label": "Docs"
          }
        },
        {
          "body": "<strong>Boolean geometry read off the set with the layers shown.</strong> Vertical adds Preamble 12 + 6 gap on top and Description 4 + 15 below — 64 × 109 with both on. Horizontal hugs its text: 20 + Asset 48 + 12 + text column + 8, so a Description (50 wide) takes it to 138, and Preamble adds 4 + 12 below the Container — 138 × 80. The New badge and Add / Remove stay pinned to the frame’s top edge. Preamble in Horizontal is inset 8 inside a Container-wide row, not aligned to the asset’s left edge.",
          "delta": {
            "kind": "resolved",
            "label": "C4"
          }
        },
        {
          "body": "<strong>Inactive and Disabled overlays fail contrast</strong> — white on #F76464 is 3.02:1, on #6FE7AB 1.53:1, on #F8E6E6 1.20:1 and on #E7F8F0 1.10:1; Default Add (#12AF80) is 2.81:1. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>Inactive text fails AA</strong> — the #6780A9 label is 4.01:1 on white at 12pt, and the #90A8D0 description 2.41:1 at 10pt. <span class=\"tag-open tag-c3\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "A11y"
          }
        },
        {
          "body": "<strong>No changelog entries exist for v2.0 – v2.2.</strong> The Overview records those releases, but their dates are not on file. <span class=\"tag-open\">Open</span>",
          "delta": {
            "kind": "open",
            "label": "Docs"
          }
        }
      ]
    },
    {
      version: '1.0.0',
      date: '2026-05-19',
      kind: 'major',
      kindLabel: 'Major',
      header: 'Initial Assessment · node 20210:2441',
      rows: [
        { body: '<strong>Component assessed</strong> — 24 variants across <code>Type × State × Orientation</code>. Powers the home Menu Grid and the customize-home edit mode. <span class="tag-fixed">Documented</span>', delta: { kind: 'resolved', label: 'Initial' } },
        { body: '<strong>Verdict: Fix</strong> — Rename the State=Disbaled typo, split Type into orthogonal <code>badge</code> + <code>action</code> axes, distinguish Inactive from Disabled. <span class="tag-open tag-c2 tag-c5">Open</span>', delta: { kind: 'open', label: 'Family' } },
        { body: '<strong>C2 — State=Disbaled typo</strong> — Misspelled across 6 horizontal/disabled variants. Will propagate to Code Connect props unless fixed in Figma. <span class="tag-open tag-c2">Open</span>', delta: { kind: 'open', label: 'C2' } },
        { body: '<strong>C2 — Type axis bundles badge + action</strong> — Default / New / Add / Remove conflates content presence with overlay action. Split into <code>badge</code> + <code>action</code>. <span class="tag-open tag-c2">Open</span>', delta: { kind: 'open', label: 'C2' } },
        { body: '<strong>C5 — Inactive vs Disabled</strong> — Render identically today. Need distinct visual + interaction treatments. <span class="tag-open tag-c5">Open</span>', delta: { kind: 'open', label: 'C5' } },
        { body: '<strong>C5 — Tap-area + Pressed</strong> — No Pressed state; Icon Action overlays are 12 px with no annotated hit-area extension. <span class="tag-open tag-c5">Open</span>', delta: { kind: 'open', label: 'C5' } },
        { body: '<strong>C7 — Code Connect</strong> — Not registered. Blocked on the State typo and Type-axis split. <span class="tag-open tag-c7">Open</span>', delta: { kind: 'open', label: 'C7' } },
      ],
    },
  ],
};
