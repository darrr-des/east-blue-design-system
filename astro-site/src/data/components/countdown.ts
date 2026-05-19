import type { ComponentData, DemoControlSection } from '../types';
import { buildMultiModeColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(demoKey, prop, value)`
// in `public/scripts/demos/countdown.js`.
const countdownStateModeControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default',  label: 'Default' },
          { value: 'expiring', label: 'Expiring' },
        ],
      },
      {
        label: 'Mode',
        prop: 'mode',
        defaultValue: 'light',
        options: [
          { value: 'light', label: 'Light' },
          { value: 'dark',  label: 'Dark' },
        ],
      },
    ],
  },
];

const countdownPerContainerControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'State',
        prop: 'state',
        defaultValue: 'default',
        options: [
          { value: 'default',  label: 'Default' },
          { value: 'expiring', label: 'Expiring' },
        ],
      },
      {
        label: 'Mode',
        prop: 'mode',
        defaultValue: 'light',
        options: [
          { value: 'light', label: 'Light' },
          { value: 'dark',  label: 'Dark' },
        ],
      },
      {
        label: 'Variant',
        prop: 'variant',
        defaultValue: 'default',
        options: [
          { value: 'default',     label: 'Default (d:h:m:s)' },
          { value: 'no-days',     label: 'No days (h:m:s)' },
          { value: 'mins-secs',   label: 'Mins & secs (m:s)' },
        ],
      },
    ],
  },
];

export const countdown: ComponentData = {
  meta: {
    slug: 'countdown',
    name: 'Countdown',
    node: '4076:9090',
    figmaUrl: 'https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=4076-9090',
    description: 'A live timer showing time remaining (days · hours · minutes · seconds) across multiple presentations — full promo card, single bar, segmented boxes, or a compact pill.',
    badges: [
      { kind: 'restructure', label: 'Restructure' },
      { kind: 'rework', label: 'Requires Rework' },
    ],
    verdict: {
      kind: 'restructure',
      title: 'Split into a primitive + recipes; collapse the State/Style/Mode/Variant matrix',
      text: 'Today\'s Countdown bundles four very different presentations (Full promo card, One bar, Per-unit boxes, Pill) into one COMPONENT_SET with ~24 variants. The promo "Full Container" is a composition (header + countdown row + Button + close icon), not a primitive — it should live as a recipe over a small <strong>Countdown</strong> timer primitive that ships only the time-unit display. State (<code>Default</code> / <code>Expiring</code>) is purely a color override and should be a prop, not a variant. <code>Mode = Light/Dark</code> should follow the theme, not be a baked variant. The <code>no Days</code> / <code>Mins and Secs</code> variants encode <em>which units are visible</em> and should be data-driven (<code>units: [.days, .hours, .mins, .secs]</code> or similar). Recommendation: ship one <code>EBCountdown</code> primitive with <code>style</code>, <code>state</code>, <code>units</code>, and <code>theme</code> props; publish the "Full promo" as a composition example, not a sibling.',
    },
  },
  overview: {
    inContextNote: 'Used to add urgency around time-limited offers — flash sales, voucher expiry, limited-time deals on the Discover and Voucher surfaces. The Pill variant docks inside cards as a small "ends in" badge; the Full Container is the standalone promo bar; One / Per Container sit inline above CTAs.',
    inContextHtml: '<div class="ctx-placeholder">\n      <svg width="220" height="130" viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect x="20" y="10" width="180" height="110" rx="10" stroke="currentColor" stroke-width="1.2" opacity=".2"></rect>\n        <rect x="32" y="22" width="156" height="22" rx="4" fill="#005CE5" opacity=".18"></rect>\n        <text x="40" y="36" font-family="system-ui" font-size="9" font-weight="700" fill="#0A2757">Sale ends in</text>\n        <rect x="120" y="24" width="64" height="18" rx="3" fill="#EEF2F9" stroke="#E5EBF4"></rect>\n        <text x="128" y="36" font-family="system-ui" font-size="8" font-weight="700" fill="#005CE5">5 : 9 : 48 : 16</text>\n        <rect x="32" y="56" width="156" height="20" rx="4" fill="#FCF0CA" stroke="#EBB30A"></rect>\n        <text x="40" y="68" font-family="system-ui" font-size="8" font-weight="600" fill="#6C5009">03d : 37h : 01m</text>\n        <rect x="32" y="86" width="156" height="22" rx="11" fill="#005CE5"></rect>\n        <text x="110" y="100" text-anchor="middle" font-family="system-ui" font-size="9" font-weight="700" fill="#FFF">Show now!</text>\n      </svg>\n    </div>',
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"cd-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Style</span><select class=\"demo-panel-select\" id=\"cd-demo-style\" onchange=\"_cdDemo.style=this.value;updateCountdownDemo()\"><option value=\"full\" selected=\"\">Full Container</option><option value=\"one\">One Container</option><option value=\"per\">Per Container</option><option value=\"pill\">Pill</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">State</span><select class=\"demo-panel-select\" id=\"cd-demo-state\" onchange=\"_cdDemo.state=this.value;updateCountdownDemo()\"><option value=\"default\" selected=\"\">Default</option><option value=\"expiring\">Expiring</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Mode</span><select class=\"demo-panel-select\" id=\"cd-demo-mode\" onchange=\"_cdDemo.mode=this.value;updateCountdownDemo()\"><option value=\"light\" selected=\"\">Light</option><option value=\"dark\">Dark</option></select></div></div></div></div>",
    traits: [
      {
        name: 'Reusable',
        rating: 'warn',
        note: 'Covers four real product needs (promo card, inline bar, segmented boxes, pill badge) — but bundling them as one component forces consumers to discover them by trial. Splitting Full Container into a recipe and shipping Pill / One / Per as <code>style</code> values on a smaller primitive would actually be reusable.',
      },
      {
        name: 'Self-contained',
        rating: 'partial',
        note: 'Full Container instance-swaps Button - XSmall and a Close icon — both are external dependencies that drift independently. The Pill variant embeds the <code>Task Delayed Small</code> icon (a feature-specific glyph) rather than exposing an icon slot.',
      },
      {
        name: 'Consistent',
        rating: 'fail',
        note: 'Axis names collide: <code>State = Default | Expiring | Pill</code> mixes a true state ("Expiring") with a layout-style ("Pill"). <code>Style = Full Container | One Container | Per Container | White | Blue</code> conflates layout (Full/One/Per) with color treatment (White/Blue) — those last two should be theme tokens, not style values.',
      },
      {
        name: 'Composable',
        rating: 'warn',
        note: 'No content slots. The title text in Full Container is a baked <code>#title</code> text node ("Hurry up! Sale ends in:"), not a slot. The CTA is a hard-baked Button - XSmall with the literal label "Show now!". Consumers can\'t change copy without detaching.',
      },
    ],
    behavior: [
      { state: 'Ticking', ios: 'yes', android: 'yes', property: 'Not modeled', notes: 'Component is a static visual snapshot — no spec for the 1s tick, monotonic-clock source, or text update strategy. Native dev has to invent both.' },
      { state: 'Reaches 0', ios: 'na', android: 'na', property: 'Not modeled', notes: 'No "expired" terminal state. Should the component switch to a static "Expired" label, hide itself, or fire a callback?' },
      { state: 'Expiring threshold', ios: 'na', android: 'na', property: 'Color-only', notes: 'State = Expiring is described as a visual style. The <em>threshold</em> (when to flip from Default to Expiring — last 24h? 1h?) isn\'t spec\'d.' },
      { state: 'Pill close affordance', ios: 'na', android: 'na', property: 'na', notes: 'Pill has no close icon, but Full Container does. Whether the X dismisses the promo (and what dismissal means — hide forever / session-only) is undocumented.' },
      { state: 'A11y — live region', ios: 'na', android: 'na', property: 'Not modeled', notes: 'A ticking timer should be a polite live region with a stable announcement cadence (every minute, not every second). No annotation.' },
    ],
    resolved: [],
    open: [
      {
        headline: 'Four different layouts bundled as one component.',
        body: 'Full Container is a promo card (header + countdown + CTA + close), One/Per Container are bare countdown bars, and Pill is a compact badge. These have different consumers, different paddings, different content contracts — they should be a primitive (the time-unit display) plus a composition recipe (the promo card).',
        tag: { criterion: 'C1', label: 'C1 · Layer Structure & Naming' },
      },
      {
        headline: '<code>State</code> axis mixes state + layout.',
        body: '<code>State = Default | Expiring | Pill</code>. "Expiring" is a true state (an urgency cue near the deadline). "Pill" is a layout treatment. They should be separate properties: <code>style = full | one | per | pill</code> and <code>state = default | expiring</code>.',
        tag: { criterion: 'C2', label: 'C2 · Variant & Property Naming' },
      },
      {
        headline: '<code>Mode = Light | Dark</code> baked as a variant instead of theme.',
        body: 'The Mode axis renders different bg / text colors per theme — exactly what design tokens + a single <code>theme</code> mode are for. Baking Mode as a structural variant duplicates the variant matrix and forces consumers to manually switch component instances on theme change.',
        tag: { criterion: 'C3', label: 'C3 · Token Coverage' },
      },
      {
        headline: '<code>no Days</code> / <code>Mins and Secs</code> variants encode visible-unit subset.',
        body: 'These two Per Container sub-variants only differ in which time units are visible (h:m:s vs m:s). That\'s a data concern (<code>units: [.hours, .minutes, .seconds]</code>), not a variant axis. Encoded as variants, every future "Y:H:M:S" or "M:S only" need produces yet another variant.',
        tag: { criterion: 'C2', label: 'C2 · Variant & Property Naming' },
      },
      {
        headline: '"White" / "Blue" Style values are color treatments, not layouts.',
        body: '<code>Style = White | Blue</code> on the Pill is a theme/color choice. It overlaps with <code>Mode = Light | Dark</code> — there\'s no defined matrix for "White-style Dark-mode". Color treatments belong in tokens; style should describe layout only.',
        tag: { criterion: 'C2', label: 'C2 · Variant & Property Naming' },
      },
      {
        headline: 'Full Container hard-codes header text + CTA + close.',
        body: 'The <code>#title</code> text "Hurry up! Sale ends in:" and the CTA button labeled "Show now!" are literal strings inside the component. Consumers using this for an offer without a CTA, or with a different message, have to detach.',
        tag: { criterion: 'C4', label: 'C4 · Native Mappability' },
      },
      {
        headline: 'Close icon, CTA, and time-unit labels are not slots.',
        body: 'Close icon is an instance with no opt-out, the CTA is a baked Button - XSmall instance, and the "days / hrs / mins / secs" labels are literal text — none of which is a Figma Slot. Native devs can\'t map these to <code>@ViewBuilder</code> / <code>@Composable</code> slots without a Figma restructure.',
        tag: { criterion: 'C4', label: 'C4 · Native Mappability' },
      },
      {
        headline: 'No "expired" terminal state.',
        body: 'Components like this need a defined behaviour when the timer hits 0:00:00:00 — either swap to an "Expired" label, fire a callback, or hide. None of those are spec\'d in any variant.',
        tag: { criterion: 'C5', label: 'C5 · Interaction State Coverage' },
      },
      {
        headline: 'No pressed / disabled / dismissed states.',
        body: 'The promo CTA and the close icon are tappable but lack pressed / disabled spec. Pill should also have a disabled (greyed) state for promo-ended cases. None are modelled.',
        tag: { criterion: 'C5', label: 'C5 · Interaction State Coverage' },
      },
      {
        headline: 'Pill embeds a feature-specific icon.',
        body: 'The leading <code>Task Delayed Small</code> icon is baked into every Pill variant. Other countdown contexts may want a clock, hourglass, calendar, or no icon at all. Should be an optional leading-icon slot, not a baked instance.',
        tag: { criterion: 'C6', label: 'C6 · Asset & Icon Quality' },
      },
      {
        headline: 'Code Connect mappings not registered.',
        body: 'Blocked on the restructure decision — once Style / State / Theme are split correctly, native mappings collapse from ~24 variants × props down to ~6 props with a single composable.',
        tag: { criterion: 'C7', label: 'C7 · Code Connect Linkability' },
      },
    ],
    recommendations: [
      {
        headline: 'Split Full Container out of the component into a recipe.',
        body: 'Publish <code>EBCountdownPromo</code> as a documented composition (header + EBCountdown + Button + close icon) on the Countdown page. Keep <code>EBCountdown</code> the primitive for just the time-unit display. Removes a whole instance-swap dependency on Button + Close and decouples promo-copy decisions from the timer.',
        tag: 'Family',
      },
      {
        headline: 'Collapse Style + State + Mode + Variant into a small prop set.',
        body: 'Target API: <code>style: .one | .per | .pill</code>, <code>state: .default | .expiring | .expired</code>, <code>units: [.days, .hours, .mins, .secs]</code>, <code>theme</code> inherited. That is 3 + 3 + N + theme → an order of magnitude fewer variants in Figma and 1:1 mapping to a native component.',
        tag: 'Property',
      },
      {
        headline: 'Drive units by data, not by variants.',
        body: 'Remove the <code>no Days</code> and <code>Mins and Secs</code> sub-variants. Replace with a <code>units</code> array on the primitive that controls which unit cells render. Same Figma component supports any subset without producing new variants.',
        tag: 'Property',
      },
      {
        headline: 'Move "Expiring" colors to state tokens.',
        body: 'Today the Default vs Expiring palette is hardcoded per variant. Define <code>countdown/color/{default|expiring}/{bg|border|label|number}</code> token roles and bind both states\' colors. State becomes a single prop that drives token swaps instead of a variant axis.',
        tag: 'Token',
      },
      {
        headline: 'Replace baked CTA and close instance with slots.',
        body: 'In the Full Container recipe, surface a <code>trailing</code> slot (close icon / icon-button / empty) and a <code>footer</code> slot (CTA composition). Removes the hard dependency on Button - XSmall and lets consumers compose the promo to their need.',
        tag: 'Slot',
      },
      {
        headline: 'Add an optional leading-icon slot on Pill.',
        body: 'Replace the baked Task Delayed icon with an <code>icon?: Icon</code> slot. Default to no icon. Pill becomes generic enough for any time-limited surface (offer expiry, scheduled job, queue position).',
        tag: 'Slot',
      },
      {
        headline: 'Define the timer behaviour contract.',
        body: 'Document on the component: 1s tick cadence; monotonic clock (no drift on backgrounding); polite live-region announce on minute boundary; an <code>onExpire</code> callback; and the Expiring threshold (recommend last 24h with a token-driven hour count). Without this, every native implementation reinvents these details.',
        tag: 'Docs',
      },
      {
        headline: 'Document the A11y model.',
        body: 'For ticking timers: VoiceOver / TalkBack should not announce every second. Use a polite live region that announces once per minute (or when crossing Expiring threshold). Provide an <code>accessibilityLabel</code> contract like "Sale ends in 5 days 9 hours". Mark the close button as a separate accessibility element.',
        tag: 'A11y',
      },
    ],
  },
  style: {
    heading: 'Types',
    specCards: [
      {
        cardKey: 'full-container',
        demoKey: 'full',
        demoControls: countdownStateModeControls,
        title: 'Full Container',
        node: '4076:9091',
        description: 'Promo card. Header copy ("Hurry up! Sale ends in:"), a One-Container countdown row, a trailing close icon, and a Button - XSmall CTA. Flip Mode for light / dark surfaces and State for the urgency palette.',
        sections: [
          {
            label: 'Properties',
            slug: 'props',
            rows: [
              { key: 'State', value: 'default', prop: 'state' },
              { key: 'Mode',  value: 'light',   prop: 'mode'  },
            ],
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              { key: 'Card bg', value: '#FFFFFF', token: 'countdown/full/light/default/bg',
                variants: {
                  'mode:dark':    { value: '#1972F9', token: 'countdown/full/dark/default/bg' },
                },
              },
              { key: 'Header label', value: '#071969', token: 'countdown/full/light/label',
                variants: { 'mode:dark': { value: '#FFFFFF', token: 'countdown/full/dark/label' } },
              },
              { key: 'Countdown row bg', value: '#EEF2F9', token: 'countdown/one/light/default/bg',
                variants: {
                  'state:expiring':            { value: '#FCF0CA', token: 'countdown/one/light/expiring/bg' },
                  'mode:dark':                  { value: 'gradient #1972F9 → #005CE5', token: 'countdown/one/dark/default/bg' },
                  'mode:dark|state:expiring':   { value: '#F7D96E', token: 'countdown/one/dark/expiring/bg' },
                },
              },
              { key: 'Countdown numbers', value: '#2340A9', token: 'countdown/one/light/default/number',
                variants: {
                  'state:expiring':            { value: '#6C5009', token: 'countdown/one/light/expiring/number' },
                  'mode:dark':                  { value: '#FFFFFF', token: 'countdown/one/dark/default/number' },
                  'mode:dark|state:expiring':   { value: '#453408', token: 'countdown/one/dark/expiring/number' },
                },
              },
              { key: 'CTA bg', value: '#005CE5', token: 'button/primary/brand/enabled/bg',
                variants: { 'mode:dark': { value: '#2340A9', token: 'button/primary/brand/dark/bg' } },
              },
              { key: 'Close icon', value: '#0A2757', token: 'countdown/full/light/icon',
                variants: { 'mode:dark': { value: '#FFFFFF', token: 'countdown/full/dark/icon' } },
              },
            ],
          },
          {
            label: 'Layout',
            slug: 'layout',
            rows: [
              { key: 'Card size',        value: '360 × 92', mono: true },
              { key: 'Top section',      value: '360 × 68', mono: true },
              { key: 'Title',            value: '95 × 32 at (20, 18)', mono: true },
              { key: 'Inline countdown', value: '185 × 44 at (151, 12)', mono: true },
              { key: 'Inline padding',   value: '4 / 6 vert · 8 horiz', mono: true },
              { key: 'Inline gap',       value: '8', mono: true },
              { key: 'CTA',              value: '360 × 24 (full bleed)', mono: true },
              { key: 'Close icon',       value: '16 × 16 (top-right, inset 4)', mono: true },
            ],
          },
          {
            label: 'Typography',
            slug: 'typo',
            rows: [
              { key: 'Header',  value: 'Proxima Soft Bold · 16 / 16 · +0.25',  mono: true },
              { key: 'Number',  value: 'Proxima Soft Bold · 20 / 24 · 0',  mono: true },
              { key: 'Unit',    value: 'Proxima Soft Semibold · 10 / 10 · +0.25', mono: true },
              { key: 'CTA',     value: 'Proxima Soft Bold · 14 / 14 · +0.25',  mono: true },
            ],
          },
        ],
        swift: '<span class="syn-type">EBCountdownPromo</span><span class="syn-punc">(</span>\n    title<span class="syn-punc">: </span><span class="syn-str">"Hurry up! Sale ends in:"</span><span class="syn-punc">,</span>\n    endsAt<span class="syn-punc">: </span>saleEndDate<span class="syn-punc">,</span>\n    cta<span class="syn-punc">: </span><span class="syn-str">"Show now!"</span><span class="syn-punc">,</span>\n    onTapCTA<span class="syn-punc">: { </span>openSale<span class="syn-punc">() }</span>\n<span class="syn-punc">)</span>',
        compose: '<span class="syn-type">EBCountdownPromo</span><span class="syn-punc">(</span>\n    title <span class="syn-eq">=</span> <span class="syn-str">"Hurry up! Sale ends in:"</span><span class="syn-punc">,</span>\n    endsAt <span class="syn-eq">=</span> saleEndDate<span class="syn-punc">,</span>\n    cta <span class="syn-eq">=</span> <span class="syn-str">"Show now!"</span><span class="syn-punc">,</span>\n    onTapCTA <span class="syn-eq">=</span> <span class="syn-punc">{ openSale() }</span>\n<span class="syn-punc">)</span>',
        previewHtml: '<div id="cd-full-preview"></div>',
      },
      {
        cardKey: 'one-container',
        demoKey: 'one',
        demoControls: countdownStateModeControls,
        title: 'One Container',
        node: '4076:9199',
        description: 'Single bar with four time units inline (days · hrs · mins · secs). Common as a strip under banners and above CTAs. Flip Mode for surface theme, State for the urgency palette.',
        sections: [
          {
            label: 'Properties',
            slug: 'props',
            rows: [
              { key: 'State', value: 'default', prop: 'state' },
              { key: 'Mode',  value: 'light',   prop: 'mode'  },
            ],
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              { key: 'Bg', value: '#EEF2F9', token: 'countdown/one/light/default/bg',
                variants: {
                  'state:expiring':            { value: '#FCF0CA', token: 'countdown/one/light/expiring/bg' },
                  'mode:dark':                  { value: 'gradient #1972F9 → #005CE5', token: 'countdown/one/dark/default/bg' },
                  'mode:dark|state:expiring':   { value: '#F7D96E', token: 'countdown/one/dark/expiring/bg' },
                },
              },
              { key: 'Border', value: '#E5EBF4', token: 'countdown/one/light/default/border',
                variants: {
                  'state:expiring':            { value: '#EBB30A', token: 'countdown/one/light/expiring/border' },
                  'mode:dark':                  { value: 'none',   token: '—' },
                  'mode:dark|state:expiring':   { value: 'none',   token: '—' },
                },
              },
              { key: 'Number', value: '#2340A9', token: 'countdown/one/light/default/number',
                variants: {
                  'state:expiring':            { value: '#6C5009', token: 'countdown/one/light/expiring/number' },
                  'mode:dark':                  { value: '#FFFFFF', token: 'countdown/one/dark/default/number' },
                  'mode:dark|state:expiring':   { value: '#453408', token: 'countdown/one/dark/expiring/number' },
                },
              },
              { key: 'Unit label', value: '#6075C1', token: 'countdown/one/light/default/unit',
                variants: {
                  'state:expiring':            { value: '#6C5009', token: 'countdown/one/light/expiring/unit' },
                  'mode:dark':                  { value: '#FFFFFF', token: 'countdown/one/dark/default/unit' },
                  'mode:dark|state:expiring':   { value: '#453408', token: 'countdown/one/dark/expiring/unit' },
                },
              },
            ],
          },
          {
            label: 'Layout',
            slug: 'layout',
            rows: [
              { key: 'Size',          value: '360 × 50',     mono: true },
              { key: 'Padding',       value: '8 vert · 16 horiz', mono: true },
              { key: 'Border radius', value: '6',            mono: true },
              { key: 'Cell',          value: '28 × 34',      mono: true },
              { key: 'Colon',         value: '3 × 10 (two 3×3 dots, 4 gap)', mono: true },
              { key: 'Gap',           value: 'space-between (~34)', mono: true },
            ],
          },
          {
            label: 'Typography',
            slug: 'typo',
            rows: [
              { key: 'Number', value: 'Proxima Soft Bold · 20 / 24 · 0',  mono: true },
              { key: 'Unit',   value: 'Proxima Soft Semibold · 10 / 10 · +0.25', mono: true },
            ],
          },
        ],
        swift: '<span class="syn-type">EBCountdown</span><span class="syn-punc">(</span>endsAt<span class="syn-punc">: </span>endDate<span class="syn-punc">)</span>\n    .<span class="syn-fn">ebStyle</span><span class="syn-punc">(</span><span class="syn-dot">.one</span><span class="syn-punc">)</span>',
        compose: '<span class="syn-type">EBCountdown</span><span class="syn-punc">(</span>\n    endsAt <span class="syn-eq">=</span> endDate<span class="syn-punc">,</span>\n    style <span class="syn-eq">=</span> <span class="syn-type">EBCountdownStyle</span><span class="syn-punc">.</span><span class="syn-dot">.One</span>\n<span class="syn-punc">)</span>',
        previewHtml: '<div id="cd-one-preview"></div>',
      },
      {
        cardKey: 'per-container',
        demoKey: 'per',
        demoControls: countdownPerContainerControls,
        title: 'Per Container',
        node: '4076:9287',
        description: 'Each time unit lives in its own 56×50 box, separated by colon glyphs. Use Variant to drop higher-order units (no Days, or Mins-and-Secs only).',
        sections: [
          {
            label: 'Properties',
            slug: 'props',
            rows: [
              { key: 'State',   value: 'default', prop: 'state'   },
              { key: 'Mode',    value: 'light',   prop: 'mode'    },
              { key: 'Variant', value: 'default', prop: 'variant' },
            ],
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              { key: 'Cell bg', value: '#EEF2F9', token: 'countdown/per/light/default/bg',
                variants: {
                  'state:expiring':            { value: '#FCF0CA', token: 'countdown/per/light/expiring/bg' },
                  'mode:dark':                  { value: '#1972F9', token: 'countdown/per/dark/default/bg' },
                  'mode:dark|state:expiring':   { value: '#F7D96E', token: 'countdown/per/dark/expiring/bg' },
                },
              },
              { key: 'Cell border', value: '#E5EBF4', token: 'countdown/per/light/default/border',
                variants: {
                  'state:expiring':            { value: '#EBB30A', token: 'countdown/per/light/expiring/border' },
                  'mode:dark':                  { value: 'none',   token: '—' },
                  'mode:dark|state:expiring':   { value: 'none',   token: '—' },
                },
              },
              { key: 'Number', value: '#2340A9', token: 'countdown/per/light/default/number',
                variants: {
                  'state:expiring':            { value: '#6C5009', token: 'countdown/per/light/expiring/number' },
                  'mode:dark':                  { value: '#FFFFFF', token: 'countdown/per/dark/default/number' },
                  'mode:dark|state:expiring':   { value: '#453408', token: 'countdown/per/dark/expiring/number' },
                },
              },
              { key: 'Unit label', value: '#6075C1', token: 'countdown/per/light/default/unit',
                variants: {
                  'state:expiring':            { value: '#6C5009', token: 'countdown/per/light/expiring/unit' },
                  'mode:dark':                  { value: '#FFFFFF', token: 'countdown/per/dark/default/unit' },
                  'mode:dark|state:expiring':   { value: '#453408', token: 'countdown/per/dark/expiring/unit' },
                },
              },
            ],
          },
          {
            label: 'Layout',
            slug: 'layout',
            rows: [
              { key: 'Row width', value: '360', mono: true,
                variants: {
                  'variant:no-days':   { value: '238' },
                  'variant:mins-secs': { value: '147' },
                },
              },
              { key: 'Row height',    value: '50',           mono: true },
              { key: 'Cell',          value: '56 × 50',      mono: true },
              { key: 'Cell radius',   value: '8',            mono: true },
              { key: 'Colon',         value: '3 × 10 (two 3×3 dots, 4 gap)', mono: true },
              { key: 'Gap',           value: 'space-between (~21)', mono: true },
            ],
          },
          {
            label: 'Typography',
            slug: 'typo',
            rows: [
              { key: 'Number', value: 'Proxima Soft Bold · 20 / 24 · 0', mono: true },
              { key: 'Unit',   value: 'Proxima Soft Semibold · 10 / 10 · +0.25', mono: true },
            ],
          },
        ],
        swift: '<span class="syn-type">EBCountdown</span><span class="syn-punc">(</span>endsAt<span class="syn-punc">: </span>endDate<span class="syn-punc">)</span>\n    .<span class="syn-fn">ebStyle</span><span class="syn-punc">(</span><span class="syn-dot">.per</span><span class="syn-punc">)</span>\n    .<span class="syn-fn">ebUnits</span><span class="syn-punc">(</span><span class="syn-punc">[</span><span class="syn-dot">.days</span><span class="syn-punc">, </span><span class="syn-dot">.hours</span><span class="syn-punc">, </span><span class="syn-dot">.mins</span><span class="syn-punc">, </span><span class="syn-dot">.secs</span><span class="syn-punc">]</span><span class="syn-punc">)</span>',
        compose: '<span class="syn-type">EBCountdown</span><span class="syn-punc">(</span>\n    endsAt <span class="syn-eq">=</span> endDate<span class="syn-punc">,</span>\n    style <span class="syn-eq">=</span> <span class="syn-type">EBCountdownStyle</span><span class="syn-punc">.</span><span class="syn-dot">.Per</span><span class="syn-punc">,</span>\n    units <span class="syn-eq">=</span> listOf<span class="syn-punc">(</span><span class="syn-type">Unit</span><span class="syn-punc">.</span><span class="syn-dot">.Day</span><span class="syn-punc">, </span><span class="syn-type">Unit</span><span class="syn-punc">.</span><span class="syn-dot">.Hour</span><span class="syn-punc">, </span><span class="syn-type">Unit</span><span class="syn-punc">.</span><span class="syn-dot">.Min</span><span class="syn-punc">, </span><span class="syn-type">Unit</span><span class="syn-punc">.</span><span class="syn-dot">.Sec</span><span class="syn-punc">)</span>\n<span class="syn-punc">)</span>',
        previewHtml: '<div id="cd-per-preview"></div>',
      },
      {
        cardKey: 'pill',
        demoKey: 'pill',
        demoControls: countdownStateModeControls,
        title: 'Pill',
        node: '4076:9479',
        description: 'Compact 161×29 badge with a leading clock glyph and an inline "03d : 37h : 01m" string. Use inside cards and rows to communicate time-remaining without the visual weight of a full bar.',
        sections: [
          {
            label: 'Properties',
            slug: 'props',
            rows: [
              { key: 'State', value: 'default', prop: 'state' },
              { key: 'Mode',  value: 'light',   prop: 'mode'  },
            ],
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              { key: 'Pill bg', value: '#EEF2F9', token: 'countdown/pill/light/default/bg',
                variants: {
                  'state:expiring':            { value: '#FCF0CA', token: 'countdown/pill/light/expiring/bg' },
                  'mode:dark':                  { value: '#1972F9', token: 'countdown/pill/dark/default/bg' },
                  'mode:dark|state:expiring':   { value: '#F7D96E', token: 'countdown/pill/dark/expiring/bg' },
                },
              },
              { key: 'Pill border', value: '#E5EBF4', token: 'countdown/pill/light/default/border',
                variants: {
                  'state:expiring':            { value: '#EBB30A', token: 'countdown/pill/light/expiring/border' },
                  'mode:dark':                  { value: 'none',   token: '—' },
                  'mode:dark|state:expiring':   { value: 'none',   token: '—' },
                },
              },
              { key: 'Text', value: '#2340A9', token: 'countdown/pill/light/default/text',
                variants: {
                  'state:expiring':            { value: '#6C5009', token: 'countdown/pill/light/expiring/text' },
                  'mode:dark':                  { value: '#FFFFFF', token: 'countdown/pill/dark/default/text' },
                  'mode:dark|state:expiring':   { value: '#453408', token: 'countdown/pill/dark/expiring/text' },
                },
              },
              { key: 'Icon', value: '#2340A9', token: 'countdown/pill/light/default/icon',
                variants: {
                  'state:expiring':            { value: '#6C5009', token: 'countdown/pill/light/expiring/icon' },
                  'mode:dark':                  { value: '#FFFFFF', token: 'countdown/pill/dark/default/icon' },
                  'mode:dark|state:expiring':   { value: '#453408', token: 'countdown/pill/dark/expiring/icon' },
                },
              },
            ],
          },
          {
            label: 'Layout',
            slug: 'layout',
            rows: [
              { key: 'Size',          value: '161 × 29',         mono: true },
              { key: 'Padding',       value: '0 left 8 · right 12 · vertical 4', mono: true },
              { key: 'Border radius', value: '44 (pill)',        mono: true },
              { key: 'Icon size',     value: '20 × 20 at (8, 4)', mono: true },
              { key: 'Icon→text gap', value: '8',                mono: true },
            ],
          },
          {
            label: 'Typography',
            slug: 'typo',
            rows: [
              { key: 'Text', value: 'Proxima Soft Semibold · 16 / 16 · +0.25', mono: true },
            ],
          },
        ],
        swift: '<span class="syn-type">EBCountdown</span><span class="syn-punc">(</span>endsAt<span class="syn-punc">: </span>endDate<span class="syn-punc">)</span>\n    .<span class="syn-fn">ebStyle</span><span class="syn-punc">(</span><span class="syn-dot">.pill</span><span class="syn-punc">)</span>',
        compose: '<span class="syn-type">EBCountdown</span><span class="syn-punc">(</span>\n    endsAt <span class="syn-eq">=</span> endDate<span class="syn-punc">,</span>\n    style <span class="syn-eq">=</span> <span class="syn-type">EBCountdownStyle</span><span class="syn-punc">.</span><span class="syn-dot">.Pill</span>\n<span class="syn-punc">)</span>',
        previewHtml: '<div id="cd-pill-preview"></div>',
      },
    ],
    colorsTables: [
      buildMultiModeColorsTable({
        title: 'Container fills — by Mode × State',
        description: 'Each Style + State + Mode combo uses its own bg + border pair. Dark mode uses solid fills (no border); Light mode is a tinted bg + matching border.',
        modes: ['Light · Default', 'Light · Expiring', 'Dark · Default', 'Dark · Expiring'],
        rows: [
          { role: 'One Container bg',   token: 'countdown/one/{mode}/{state}/bg', values: ['#EEF2F9', '#FCF0CA', 'gradient #1972F9 → #005CE5', '#F7D96E'] },
          { role: 'Per Container bg',   token: 'countdown/per/{mode}/{state}/bg', values: ['#EEF2F9', '#FCF0CA', '#1972F9', '#F7D96E'] },
          { role: 'Pill bg',            token: 'countdown/pill/{mode}/{state}/bg', values: ['#EEF2F9', '#FCF0CA', '#1972F9', '#F7D96E'] },
          { role: 'Light bg border',    token: 'countdown/{style}/light/{state}/border', values: ['#E5EBF4', '#EBB30A', 'none', 'none'] },
        ],
      }),
      buildMultiModeColorsTable({
        title: 'Text & icon — by Mode × State',
        description: 'Number is Proxima Soft Bold 20/24; label is Semibold 10/10. Colons are 3×3 dots in pastel blue on Light Default, amber on Expiring.',
        modes: ['Light · Default', 'Light · Expiring', 'Dark · Default', 'Dark · Expiring'],
        rows: [
          { role: 'Number',     token: 'countdown/{style}/{mode}/{state}/number', values: ['#2340A9', '#6C5009', '#FFFFFF', '#453408'] },
          { role: 'Unit label', token: 'countdown/{style}/{mode}/{state}/unit',   values: ['#6075C1', '#6C5009', '#FFFFFF', '#453408'] },
          { role: 'Colon dots', token: 'countdown/{style}/{mode}/{state}/colon',  values: ['#9BC5FD', '#EBB30A', '#9BC5FD', '#453408'] },
          { role: 'Pill text',  token: 'countdown/pill/{mode}/{state}/text',      values: ['#2340A9', '#6C5009', '#FFFFFF', '#453408'] },
          { role: 'Pill icon',  token: 'countdown/pill/{mode}/{state}/icon',      values: ['#2340A9', '#6C5009', '#FFFFFF', '#453408'] },
        ],
      }),
    ],
  },
  code: {
    installation: {
      planned: true,
      blocks: [],
    },
    propertyMapping: {
      description: 'The current Figma schema (~24 variants on State × Style × Mode × Variant) does not map 1:1 to a single native primitive. The table below maps the proposed post-restructure schema — one <code>EBCountdown</code> primitive with prop-driven style/state, units, and theme inherited.',
      rows: [
        { figma: 'Style = One / Per / Pill', swift: 'style: EBCountdownStyle', compose: 'style: EBCountdownStyle' },
        { figma: 'State = Default / Expiring', swift: 'state: EBCountdownState', compose: 'state: EBCountdownState' },
        { figma: 'Mode = Light / Dark', swift: '(inherited from theme)', compose: '(inherited from theme)' },
        { figma: 'Variant = Default / no Days / Mins and Secs', swift: 'units: [EBTimeUnit]', compose: 'units: List&lt;EBTimeUnit&gt;' },
        { figma: '(implicit end date)', swift: 'endsAt: Date', compose: 'endsAt: Instant' },
        { figma: '(implicit tick)', swift: '(internal Timer; 1s polite live region announce)', compose: '(internal Flow; 1s polite live region announce)' },
        { figma: '(no expired terminal)', swift: 'onExpire: () -&gt; Void', compose: 'onExpire: () -&gt; Unit' },
        { figma: 'Full Container = recipe', swift: 'EBCountdownPromo (composition)', compose: 'EBCountdownPromo (composition)' },
      ],
      filePaths: {
        swift: 'ios/Components/Countdown/EBCountdown.swift',
        compose: 'android/components/countdown/EBCountdown.kt',
      },
    },
    usageSnippets: [
      {
        subheading: 'Usage',
        swift: '<span class="cmt">// Primitive — inline countdown bar</span>\n<span class="typ">EBCountdown</span>(<span class="prp">endsAt</span>: saleEnd)\n    .<span class="fn">ebStyle</span>(.<span class="prp">one</span>)\n\n<span class="cmt">// Segmented boxes, Mins+Secs only</span>\n<span class="typ">EBCountdown</span>(<span class="prp">endsAt</span>: lastChance)\n    .<span class="fn">ebStyle</span>(.<span class="prp">per</span>)\n    .<span class="fn">ebUnits</span>([.<span class="prp">mins</span>, .<span class="prp">secs</span>])\n\n<span class="cmt">// Pill — dock inside a Voucher card</span>\n<span class="typ">EBCountdown</span>(<span class="prp">endsAt</span>: voucherExpiry)\n    .<span class="fn">ebStyle</span>(.<span class="prp">pill</span>)\n    .<span class="fn">ebState</span>(timeLeft &lt; .<span class="fn">hours</span>(24) ? .<span class="prp">expiring</span> : .<span class="prp">default</span>)\n\n<span class="cmt">// Promo recipe — composition over the primitive</span>\n<span class="typ">EBCountdownPromo</span>(\n    <span class="prp">title</span>: <span class="str">"Hurry up! Sale ends in:"</span>,\n    <span class="prp">endsAt</span>: saleEnd,\n    <span class="prp">cta</span>: <span class="str">"Show now!"</span>,\n    <span class="prp">onTapCTA</span>: { openSale() }\n)',
        compose: '<span class="cmt">// Primitive — inline countdown bar</span>\n<span class="typ">EBCountdown</span>(endsAt = saleEnd, style = <span class="typ">EBCountdownStyle</span>.<span class="prp">One</span>)\n\n<span class="cmt">// Segmented boxes, Mins+Secs only</span>\n<span class="typ">EBCountdown</span>(\n    endsAt = lastChance,\n    style = <span class="typ">EBCountdownStyle</span>.<span class="prp">Per</span>,\n    units = listOf(<span class="typ">EBTimeUnit</span>.<span class="prp">Min</span>, <span class="typ">EBTimeUnit</span>.<span class="prp">Sec</span>)\n)\n\n<span class="cmt">// Pill — dock inside a Voucher card</span>\n<span class="typ">EBCountdown</span>(\n    endsAt = voucherExpiry,\n    style = <span class="typ">EBCountdownStyle</span>.<span class="prp">Pill</span>,\n    state = if (timeLeft &lt; <span class="kw">24.hours</span>) <span class="typ">EBCountdownState</span>.<span class="prp">Expiring</span> else <span class="typ">EBCountdownState</span>.<span class="prp">Default</span>\n)\n\n<span class="cmt">// Promo recipe — composition over the primitive</span>\n<span class="typ">EBCountdownPromo</span>(\n    title = <span class="str">"Hurry up! Sale ends in:"</span>,\n    endsAt = saleEnd,\n    cta = <span class="str">"Show now!"</span>,\n    onTapCTA = { openSale() }\n)',
      },
    ],
    accessibility: [
      {
        requirement: 'Live region',
        ios: 'Mark the countdown as <code>.accessibilityElement(children: .combine)</code> + polite live region. Announce once per minute (or when crossing the Expiring threshold), not every second.',
        android: 'Wrap in <code>Modifier.semantics(mergeDescendants = true) { liveRegion = LiveRegionMode.Polite }</code>; debounce announcements to once per minute.',
      },
      {
        requirement: 'Spoken announcement',
        ios: 'Use a friendly relative phrase: <code>"Sale ends in 5 days 9 hours"</code>. Avoid reading colon-separated digits.',
        android: 'Set <code>contentDescription = "Sale ends in 5 days 9 hours"</code>. Localize unit words via resource strings.',
      },
      {
        requirement: 'Expired state',
        ios: 'When the timer reaches 0, swap to an Expired label and announce <code>"Sale ended"</code> once. Stop updating the live region.',
        android: 'Same — swap label, announce once via <code>announceForAccessibility</code>, then stop.',
      },
      {
        requirement: 'Promo close button',
        ios: 'In the Full Container recipe, the close icon is a separate focusable element with <code>.accessibilityLabel("Dismiss promo")</code>.',
        android: 'Close icon uses <code>contentDescription = "Dismiss promo"</code> and is its own focusable element.',
      },
      {
        requirement: 'Reduced motion',
        ios: 'Honour <code>UIAccessibility.isReduceMotionEnabled</code> — if true, suppress any unit-flip animations (none in v1 anyway).',
        android: 'Honour <code>Settings.Global.ANIMATOR_DURATION_SCALE</code> = 0 — suppress unit-flip animation.',
      },
    ],
    usageGuidelines: [],
    scorecard: [
      { id: 'C1', criterion: 'Layer Structure & Naming', status: 'rework', statusLabel: 'Requires Rework', notes: 'Four distinct presentations bundled as one component. Full Container is a composition, not a primitive.' },
      { id: 'C2', criterion: 'Variant & Property Naming', status: 'rework', statusLabel: 'Requires Rework', notes: '<code>State</code> mixes state and layout; <code>Style</code> mixes layout and color treatment; <code>Variant</code> encodes a data subset that should be a <code>units</code> array.' },
      { id: 'C3', criterion: 'Token Coverage', status: 'refine', statusLabel: 'Needs Refinement', notes: 'Hex values are consistent across variants but token namespace not registered. Need <code>countdown/{style}/{mode}/{state}/*</code> token scope.' },
      { id: 'C4', criterion: 'Native Mappability', status: 'rework', statusLabel: 'Requires Rework', notes: 'Full Container hard-codes header text + CTA + close instance. Post-restructure mapping is clean.' },
      { id: 'C5', criterion: 'Interaction State Coverage', status: 'rework', statusLabel: 'Requires Rework', notes: 'No expired terminal, no pressed/disabled on CTA + close, no Expiring threshold spec.' },
      { id: 'C6', criterion: 'Asset & Icon Quality', status: 'refine', statusLabel: 'Needs Refinement', notes: 'Pill embeds a feature-specific Task Delayed icon. Should be an optional icon slot.' },
      { id: 'C7', criterion: 'Code Connect Linkability', status: 'empty', statusLabel: 'Not Mapped', notes: 'Blocked until restructure decision lands.' },
    ],
    codeConnect: [],
    variants: {
      total: 24,
      description: 'Sticker sheet ships 24 variants across <code>State × Style × Mode × Variant</code>. State = Default + Expiring; Style = Full Container, One Container, Per Container, Pill (with White/Blue color treatments); Mode = Light / Dark; Variant (Per Container only) = Default / no Days / Mins and Secs.',
      columns: ['#', 'Style', 'State', 'Mode', 'Variant', 'Size', 'Node'],
      rows: [
        { cells: ['1',  'Full Container', 'Default',  'Light', 'Default',      '360 × 92',  '<code>4076:9091</code>'] },
        { cells: ['2',  'Full Container', 'Expiring', 'Light', 'Default',      '360 × 92',  '<code>4076:9118</code>'] },
        { cells: ['3',  'Full Container', 'Default',  'Dark',  'Default',      '360 × 92',  '<code>4076:9145</code>'] },
        { cells: ['4',  'Full Container', 'Expiring', 'Dark',  'Default',      '360 × 92',  '<code>4076:9172</code>'] },
        { cells: ['5',  'One Container',  'Default',  'Light', 'Default',      '360 × 50',  '<code>4076:9199</code>'] },
        { cells: ['6',  'One Container',  'Expiring', 'Light', 'Default',      '360 × 50',  '<code>4076:9221</code>'] },
        { cells: ['7',  'One Container',  'Default',  'Dark',  'Default',      '360 × 50',  '<code>4076:9243</code>'] },
        { cells: ['8',  'One Container',  'Expiring', 'Dark',  'Default',      '360 × 50',  '<code>4076:9265</code>'] },
        { cells: ['9',  'Per Container',  'Default',  'Light', 'Default',      '360 × 50',  '<code>4076:9287</code>'] },
        { cells: ['10', 'Per Container',  'Expiring', 'Light', 'Default',      '360 × 50',  '<code>4076:9309</code>'] },
        { cells: ['11', 'Per Container',  'Default',  'Dark',  'Default',      '360 × 52',  '<code>4076:9331</code>'] },
        { cells: ['12', 'Per Container',  'Expiring', 'Dark',  'Default',      '360 × 52',  '<code>4076:9353</code>'] },
        { cells: ['13', 'Per Container',  'Default',  'Light', 'no Days',      '238 × 50',  '<code>4076:9375</code>'] },
        { cells: ['14', 'Per Container',  'Expiring', 'Light', 'no Days',      '238 × 50',  '<code>4076:9391</code>'] },
        { cells: ['15', 'Per Container',  'Default',  'Dark',  'no Days',      '238 × 52',  '<code>4076:9407</code>'] },
        { cells: ['16', 'Per Container',  'Expiring', 'Dark',  'no Days',      '238 × 52',  '<code>4076:9423</code>'] },
        { cells: ['17', 'Per Container',  'Default',  'Light', 'Mins & Secs',  '147 × 50',  '<code>4076:9439</code>'] },
        { cells: ['18', 'Per Container',  'Expiring', 'Light', 'Mins & Secs',  '147 × 50',  '<code>4076:9449</code>'] },
        { cells: ['19', 'Per Container',  'Default',  'Dark',  'Mins & Secs',  '147 × 52',  '<code>4076:9459</code>'] },
        { cells: ['20', 'Per Container',  'Expiring', 'Dark',  'Mins & Secs',  '147 × 52',  '<code>4076:9469</code>'] },
        { cells: ['21', 'Pill · White',   'Default',  'Light', '—',            '161 × 29',  '<code>4076:9479</code>'] },
        { cells: ['22', 'Pill · White',   'Expiring', 'Light', '—',            '161 × 29',  '<code>4076:9482</code>'] },
        { cells: ['23', 'Pill · Blue',    'Default',  'Dark',  '—',            '161 × 29',  '<code>4076:9485</code>'] },
        { cells: ['24', 'Pill · Blue',    'Expiring', 'Dark',  '—',            '161 × 29',  '<code>4076:9488</code>'] },
      ],
    },
  },
  changelog: [
    {
      version: '1.0.0',
      date: '2026-05-18',
      kind: 'major',
      kindLabel: 'Major',
      header: 'Initial Assessment · node 4076:9090',
      rows: [
        { body: '<strong>Family assessed</strong> — 24 variants across 4 Styles × 2 States × 2 Modes × 3 Variants (Per Container only). Discover and Voucher surfaces consume Pill; promo bars on flash-sale screens use Full Container. <span class="tag-fixed">Documented</span>', delta: { kind: 'resolved', label: 'Initial' } },
        { body: '<strong>Verdict: Restructure</strong> — Split Full Container into a composition recipe; collapse <code>Style × State × Mode × Variant</code> into prop-driven <code>style</code> + <code>state</code> + <code>units</code> + theme-inherited mode. <span class="tag-open tag-c1 tag-c2 tag-c3">Open</span>', delta: { kind: 'open', label: 'Family' } },
        { body: '<strong>C1 — Component scope</strong> — Four very different presentations bundled as one component. Full Container is a composition, not a primitive. <span class="tag-open tag-c1">Open</span>', delta: { kind: 'open', label: 'C1' } },
        { body: '<strong>C2 — Axis collisions</strong> — <code>State = Default | Expiring | Pill</code> mixes state with layout; <code>Style = White | Blue</code> overlaps with <code>Mode</code>. Needs renaming + splitting. <span class="tag-open tag-c2">Open</span>', delta: { kind: 'open', label: 'C2' } },
        { body: '<strong>C3 — Token namespace</strong> — Hex values consistent but no <code>countdown/*</code> token scope registered. <span class="tag-open tag-c3">Open</span>', delta: { kind: 'open', label: 'C3' } },
        { body: '<strong>C4 — Hard-coded content</strong> — Full Container bakes "Hurry up! Sale ends in:" + "Show now!" + Button - XSmall + Close. None are slots. <span class="tag-open tag-c4">Open</span>', delta: { kind: 'open', label: 'C4' } },
        { body: '<strong>C5 — Missing states</strong> — No expired terminal, no pressed/disabled on CTA, no Expiring threshold definition. <span class="tag-open tag-c5">Open</span>', delta: { kind: 'open', label: 'C5' } },
        { body: '<strong>C6 — Embedded feature icon</strong> — Pill embeds <code>Task Delayed Small</code> rather than exposing a leading-icon slot. <span class="tag-open tag-c6">Open</span>', delta: { kind: 'open', label: 'C6' } },
        { body: '<strong>C7 — Code Connect</strong> — Not registered. Blocked on restructure. <span class="tag-open tag-c7">Open</span>', delta: { kind: 'open', label: 'C7' } },
      ],
    },
  ],
};
