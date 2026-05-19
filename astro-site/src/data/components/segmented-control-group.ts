import type { ComponentData, DemoControlSection } from '../types';
import { buildStatelessColorsTable } from './_helpers';

// Per-card demo controls — wired to `updateSpecCard(demoKey, prop, value)`
// in `public/scripts/demos/segmented-control-group.js`.
const segmentedControlGroupDemoControls: DemoControlSection[] = [
  {
    heading: 'Properties',
    rows: [
      {
        label: 'Selected',
        prop: 'selected',
        defaultValue: 'first',
        options: [
          { value: 'first',  label: 'First' },
          { value: 'second', label: 'Second' },
        ],
      },
      {
        label: 'Subtext',
        prop: 'subtext',
        control: 'toggle',
        defaultValue: 'no',
        options: [
          { value: 'no',  label: 'Hide' },
          { value: 'yes', label: 'Show' },
        ],
      },
      {
        label: 'Avatars',
        prop: 'avatars',
        control: 'toggle',
        defaultValue: 'no',
        options: [
          { value: 'no',  label: 'Hide' },
          { value: 'yes', label: 'Show' },
        ],
      },
    ],
  },
];

export const segmentedControlGroup: ComponentData = {
  meta: {
    slug: 'segmented-control-group',
    name: 'Segmented Control - Group',
    node: '27:30940',
    figmaUrl: 'https://www.figma.com/design/HwWDwPit2xJjDH4zszOZ5o/GCash-Design-System--Sticker-Sheets-v2?node-id=27-30940',
    description: 'A labeled Toggle Segmented Control with optional subtext and a small-avatar group below.',
    badges: [
      { kind: 'fix', label: 'Fix' },
      { kind: 'refine', label: 'Needs Refinement' },
    ],
    navGroup: 'Toggle',
    verdict: {
      kind: 'fix',
      title: 'Collapse subtext/avatars booleans + adopt named slots',
      text: 'Four variants on a <code>subtext × avatars</code> boolean matrix is a slot pattern in disguise — they describe whether content is present, not different visual treatments. Replace with named optional slots (<code>subtext?: String</code>, <code>avatars?: [Avatar]</code>) so the variant count drops to 1 and consumers can compose any future trailing content (a count badge, an inline error) without a new variant.',
    },
  },
  overview: {
    inContextNote: 'Used in form sections where a binary choice carries supporting metadata — e.g. a "Send to / Request from" picker with the most-recent recipients shown below, or a "Schedule / Now" toggle with a helper subtext explaining the consequence.',
    inContextHtml: '<div class="ctx-placeholder">\n      <svg width="220" height="130" viewBox="0 0 220 130" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <rect x="20" y="10" width="180" height="110" rx="6" stroke="currentColor" stroke-width="1.2" opacity=".2"/>\n        <text x="32" y="32" fill="#0A2757" font-size="9" font-weight="600" font-family="system-ui">Label</text>\n        <rect x="32" y="40" width="156" height="20" rx="4" fill="#005CE5"/>\n        <text x="60" y="54" fill="#FFF" font-size="8" font-weight="700" text-anchor="middle" font-family="system-ui">Option 1</text>\n        <text x="155" y="54" fill="#005CE5" font-size="8" font-weight="700" text-anchor="middle" font-family="system-ui">Option 2</text>\n        <text x="32" y="76" fill="#6780A9" font-size="8" font-weight="500" font-family="system-ui">Use this space for your subtext.</text>\n        <circle cx="42" cy="92" r="8" fill="#005CE5"/><text x="42" y="95" text-anchor="middle" fill="#FFF" font-size="6" font-weight="700" font-family="system-ui">DM</text>\n        <circle cx="62" cy="92" r="8" stroke="#005CE5" fill="#F6F9FD"/><text x="62" y="95" text-anchor="middle" fill="#005CE5" font-size="6" font-weight="700" font-family="system-ui">LM</text>\n        <circle cx="82" cy="92" r="8" stroke="#005CE5" fill="#F6F9FD"/><text x="82" y="95" text-anchor="middle" fill="#005CE5" font-size="6" font-weight="700" font-family="system-ui">LM</text>\n      </svg>\n    </div>',
    "livePreviewHtml": "<div class=\"demo-layout\"><div class=\"demo-preview\" id=\"scg-demo-preview\"></div><div class=\"demo-figma-panel\"><div class=\"demo-panel-section\"><div class=\"demo-panel-heading\">Properties</div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Selected</span><select class=\"demo-panel-select\" id=\"scg-demo-selected\" onchange=\"_scgDemo.selected=this.value;updateSegmentedControlGroupDemo()\"><option value=\"first\" selected=\"\">First</option><option value=\"second\">Second</option></select></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Subtext</span><label class=\"demo-panel-toggle\"><input type=\"checkbox\" id=\"scg-demo-subtext\" onchange=\"_scgDemo.subtext=this.checked?'yes':'no';this.parentElement.classList.toggle('is-on',this.checked);updateSegmentedControlGroupDemo()\"/><span class=\"demo-panel-toggle__track\"><span class=\"demo-panel-toggle__thumb\"></span></span></label></div><div class=\"demo-panel-row\"><span class=\"demo-panel-label\">Avatars</span><label class=\"demo-panel-toggle\"><input type=\"checkbox\" id=\"scg-demo-avatars\" onchange=\"_scgDemo.avatars=this.checked?'yes':'no';this.parentElement.classList.toggle('is-on',this.checked);updateSegmentedControlGroupDemo()\"/><span class=\"demo-panel-toggle__track\"><span class=\"demo-panel-toggle__thumb\"></span></span></label></div></div></div></div>",
    traits: [
      { name: 'Reusable', rating: 'warn', note: 'Four variants for what should be a single component with two optional slots. Any future trailing content (a count badge, an error message, a help link) requires a new variant.' },
      { name: 'Self-contained', rating: 'partial', note: 'Composes Toggle - Segmented Control + Subtext Message + Avatar instances. Inherits all 3 sub-components\' open issues.' },
      { name: 'Consistent', rating: 'partial', note: 'Naming uses positional booleans (<code>subtext=yes|no</code>, <code>avatars=yes|no</code>) instead of slot semantics. Should be <code>subtext?: String</code> + <code>avatars?: [Avatar]</code>.' },
      { name: 'Composable', rating: 'partial', note: 'Built from sub-components but doesn\'t expose them as slots — consumers can\'t swap the inner control for a 3-segment variant or use a custom subtext component.' },
    ],
    behavior: [],
    resolved: [],
    open: [
      {
        headline: 'Boolean variant matrix instead of named slots.',
        body: '<code>subtext × avatars</code> produces 4 variants for a slot-presence question. Replace with named optional slots — Figma Slot architecture supports this directly.',
        tag: { criterion: 'C1', label: 'C1 · Layer Structure & Naming' },
      },
      {
        headline: 'Inherits all Toggle - Segmented Control issues.',
        body: 'No Pressed / Focused / Disabled state, hardcoded 2-segment count, positional <code>first|second</code> naming — all flagged on the parent component and propagate here.',
        tag: { criterion: 'C5', label: 'C5 · Interaction State Coverage' },
      },
      {
        headline: 'No way to change avatar count.',
        body: 'Avatar group is baked with exactly 3 avatars. Real consumers may want 1, 2, 5+. Should be a slot accepting <code>avatars: [Avatar]</code>.',
        tag: { criterion: 'C4', label: 'C4 · Native Mappability' },
      },
      {
        headline: 'Code Connect mappings not registered.',
        body: 'Blocked on the slot restructure — one mapping with optional <code>subtext</code> + <code>avatars</code> params will be cleaner than 4 variant entries.',
        tag: { criterion: 'C7', label: 'C7 · Code Connect Linkability' },
      },
    ],
    recommendations: [
      {
        headline: 'Convert boolean axes to named slots.',
        body: 'Target API: <code>EBSegmentedControlGroup(label, segments, selectedIndex, subtext?, avatars?)</code>. <code>subtext</code> and <code>avatars</code> become optional content slots driven by data, not variants. Drops Figma variant count from 4 to 1.',
        tag: 'Slot',
      },
      {
        headline: 'Adopt Figma Slot for both subtext and avatars.',
        body: 'Use Figma\'s native Slot feature so consumers can instance-swap any Subtext Message variant or any Avatar group composition without detaching.',
        tag: 'Slot',
      },
      {
        headline: 'Promote inner control to a data-driven Segmented Control.',
        body: 'Tracked on the Toggle - Segmented Control component — once that ships <code>segments: [Segment]</code>, this group inherits the flexibility automatically.',
        tag: 'Family',
      },
      {
        headline: 'Document the A11y model for the labeled group.',
        body: 'Use <code>aria-labelledby</code> referencing the label. Subtext gets <code>aria-describedby</code>. Avatars below should be a separate accessible region with their own labels.',
        tag: 'A11y',
      },
    ],
  },
  style: {
    heading: 'Types',
    specCards: [
      {
        cardKey: 'default',
        demoKey: 'default',
        demoControls: segmentedControlGroupDemoControls,
        title: 'Default',
        node: '27:30941',
        description: '366 wide labeled group. Label on top, 40px-tall Toggle Segmented Control below, then optional subtext and avatar-group rows. Heights: 64 (base) / 86 (+ subtext) / 104 (+ avatars) / 118 (both).',
        sections: [
          {
            label: 'Properties',
            slug: 'props',
            rows: [
              { key: 'Selected', value: 'First', prop: 'selected' },
              { key: 'Subtext',  value: 'Hide',  prop: 'subtext'  },
              { key: 'Avatars',  value: 'Hide',  prop: 'avatars'  },
            ],
          },
          {
            label: 'Colors',
            slug: 'colors',
            rows: [
              { key: 'Label',           value: '#0A2757', token: 'segmented-control-group/color/label' },
              { key: 'Subtext',         value: '#6780A9', token: 'subtext-message/color/default/text',
                variants: { 'subtext:no': { hide: true } }
              },
              { key: 'Selected bg',     value: '#005CE5', token: 'toggle-segmented-control/color/selected/bg' },
              { key: 'Unselected label', value: '#005CE5', token: 'toggle-segmented-control/color/unselected/label' },
            ],
          },
          {
            label: 'Layout',
            slug: 'layout',
            rows: [
              { key: 'Width',         value: '366',     mono: true },
              { key: 'Label height',  value: '16',      mono: true },
              { key: 'Label → control gap', value: '8', mono: true },
              { key: 'Control height', value: '40',     mono: true },
              { key: 'Control → subtext gap', value: '8', mono: true,
                variants: { 'subtext:no': { hide: true } }
              },
              { key: 'Subtext height', value: '22', mono: true,
                variants: { 'subtext:no': { hide: true } }
              },
              { key: 'Control → avatars gap', value: '8', mono: true,
                variants: { 'avatars:no': { hide: true } }
              },
              { key: 'Avatar group',  value: '32 tall', mono: true,
                variants: { 'avatars:no': { hide: true } }
              },
            ],
          },
          {
            label: 'Typography',
            slug: 'typo',
            rows: [
              { key: 'Label',   value: 'Proxima Soft Semibold · 16 / 16 · +0.25', mono: true },
              { key: 'Subtext', value: 'See Subtext Message component', mono: false,
                variants: { 'subtext:no': { hide: true } }
              },
              { key: 'Segment', value: 'See Toggle - Segmented Control', mono: false },
            ],
          },
        ],
        swift: '<span class="syn-type">EBSegmentedControlGroup</span><span class="syn-punc">(</span>\n    label<span class="syn-punc">: </span><span class="syn-str">"Label"</span><span class="syn-punc">,</span>\n    segments<span class="syn-punc">: </span><span class="syn-punc">[</span><span class="syn-str">"Option 1"</span><span class="syn-punc">, </span><span class="syn-str">"Option 2"</span><span class="syn-punc">]</span><span class="syn-punc">,</span>\n    selectedIndex<span class="syn-punc">: </span>$selected<span class="syn-punc">,</span>\n    subtext<span class="syn-punc">: </span><span class="syn-str">"Use this space for your subtext."</span><span class="syn-punc">,</span>\n    avatars<span class="syn-punc">: </span>recentContacts\n<span class="syn-punc">)</span>',
        compose: '<span class="syn-type">EBSegmentedControlGroup</span><span class="syn-punc">(</span>\n    label <span class="syn-eq">=</span> <span class="syn-str">"Label"</span><span class="syn-punc">,</span>\n    segments <span class="syn-eq">=</span> listOf<span class="syn-punc">(</span><span class="syn-str">"Option 1"</span><span class="syn-punc">, </span><span class="syn-str">"Option 2"</span><span class="syn-punc">)</span><span class="syn-punc">,</span>\n    selectedIndex <span class="syn-eq">=</span> selected<span class="syn-punc">,</span>\n    subtext <span class="syn-eq">=</span> <span class="syn-str">"Use this space for your subtext."</span><span class="syn-punc">,</span>\n    avatars <span class="syn-eq">=</span> recentContacts\n<span class="syn-punc">)</span>',
        previewHtml: '<div id="scg-spec-preview"></div>',
      },
    ],
    colorsTables: [
      buildStatelessColorsTable({
        title: 'Colors',
        description: 'Group-owned tokens are limited to the label color; everything else (segments, subtext, avatars) inherits from its sub-component.',
        rows: [
          { role: 'Label',           token: 'segmented-control-group/color/label', value: '#0A2757' },
          { role: 'Selected bg',     token: 'toggle-segmented-control/color/selected/bg', value: '#005CE5' },
          { role: 'Unselected label', token: 'toggle-segmented-control/color/unselected/label', value: '#005CE5' },
          { role: 'Subtext',         token: 'subtext-message/color/default/text', value: '#6780A9' },
        ],
      }),
    ],
  },
  code: {
    installation: { planned: true, blocks: [] },
    propertyMapping: {
      description: 'Subtext and Avatars become optional content slots after restructure. The 4-variant boolean matrix collapses to a single component definition.',
      rows: [
        { figma: 'subtext=yes/no', swift: 'subtext: String?', compose: 'subtext: String?' },
        { figma: 'avatars=yes/no', swift: 'avatars: [Avatar]?', compose: 'avatars: List<Avatar>?' },
        { figma: 'segments', swift: 'segments: [Segment]', compose: 'segments: List<Segment>' },
        { figma: 'selected=first/second', swift: 'selectedIndex: Int', compose: 'selectedIndex: Int' },
        { figma: '#label', swift: 'label: String', compose: 'label: String' },
      ],
      filePaths: {
        swift: 'ios/Components/SegmentedControl/EBSegmentedControlGroup.swift',
        compose: 'android/components/segmentedcontrol/EBSegmentedControlGroup.kt',
      },
    },
    usageSnippets: [],
    accessibility: [
      { requirement: 'Label association', ios: 'Use <code>.accessibilityLabelledBy</code> on the segmented row referencing the label text.', android: 'Use <code>Modifier.semantics { contentDescription = label }</code> on the group container.' },
      { requirement: 'Subtext announce', ios: 'Wire as <code>.accessibilityHint</code> on the segmented row so VoiceOver reads "Label, hint: Use this space for your subtext."', android: 'Use <code>stateDescription</code> on the row.' },
      { requirement: 'Avatar group', ios: 'Separate accessibility region; each avatar exposes its own label ("Dela Cruz, recently selected").', android: 'Same — each avatar gets its own <code>contentDescription</code>.' },
    ],
    usageGuidelines: [],
    scorecard: [
      { id: 'C1', criterion: 'Layer Structure & Naming', status: 'refine', statusLabel: 'Needs Refinement', notes: 'Boolean axes for slot presence. Convert to named optional slots.' },
      { id: 'C2', criterion: 'Variant & Property Naming', status: 'refine', statusLabel: 'Needs Refinement', notes: '<code>subtext=yes|no</code> and <code>avatars=yes|no</code> describe slot presence, not visual variants.' },
      { id: 'C3', criterion: 'Token Coverage', status: 'ready', statusLabel: 'Ready', notes: 'Label color uses <code>main/text/default</code>. All other colors inherit from sub-components.' },
      { id: 'C4', criterion: 'Native Mappability', status: 'refine', statusLabel: 'Needs Refinement', notes: 'Maps to a single composable / SwiftUI view with optional slots after restructure.' },
      { id: 'C5', criterion: 'Interaction State Coverage', status: 'rework', statusLabel: 'Requires Rework', notes: 'Inherits Toggle - Segmented Control\'s missing states.' },
      { id: 'C6', criterion: 'Asset & Icon Quality', status: 'na', statusLabel: 'Not Applicable', notes: 'No assets owned by this component.' },
      { id: 'C7', criterion: 'Code Connect Linkability', status: 'empty', statusLabel: 'Not Mapped', notes: 'Blocked on slot restructure.' },
    ],
    codeConnect: [],
    variants: {
      total: 4,
      description: '<code>subtext × avatars</code> boolean matrix. Each combination produces a height variant: 64 / 86 / 104 / 118.',
      columns: ['#', 'subtext', 'avatars', 'Size', 'Node'],
      rows: [
        { cells: ['1', 'no',  'no',  '366 × 64',  '<code>27:30941</code>'] },
        { cells: ['2', 'no',  'yes', '366 × 104', '<code>27:30946</code>'] },
        { cells: ['3', 'yes', 'no',  '366 × 86',  '<code>27:30957</code>'] },
        { cells: ['4', 'yes', 'yes', '366 × 118', '<code>27:30964</code>'] },
      ],
    },
  },
  changelog: [
    {
      version: '1.0.0',
      date: '2026-05-19',
      kind: 'major',
      kindLabel: 'Major',
      header: 'Initial Assessment · node 27:30940',
      rows: [
        { body: '<strong>Component assessed</strong> — 4 variants on <code>subtext × avatars</code>. Composes Toggle - Segmented Control + Subtext Message + Avatar. <span class="tag-fixed">Documented</span>', delta: { kind: 'resolved', label: 'Initial' } },
        { body: '<strong>Verdict: Fix</strong> — Replace boolean axes with named optional slots (<code>subtext?</code>, <code>avatars?</code>). Drops variant count from 4 to 1 and unlocks any future trailing content. <span class="tag-open tag-c1 tag-c2">Open</span>', delta: { kind: 'open', label: 'Family' } },
        { body: '<strong>C1 — Boolean axes</strong> — Slot-presence as variants. Convert to Figma Slot. <span class="tag-open tag-c1">Open</span>', delta: { kind: 'open', label: 'C1' } },
        { body: '<strong>C5 — Inherited state gaps</strong> — Toggle - Segmented Control is missing Pressed / Focused / Disabled; this group inherits all of those. <span class="tag-open tag-c5">Open</span>', delta: { kind: 'open', label: 'C5' } },
        { body: '<strong>C7 — Code Connect</strong> — Not registered. Blocked on slot restructure. <span class="tag-open tag-c7">Open</span>', delta: { kind: 'open', label: 'C7' } },
      ],
    },
  ],
};
