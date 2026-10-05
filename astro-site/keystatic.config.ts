/*
 * Keystatic — the editing UI over src/content/components/<slug>.json.
 *
 * This schema mirrors `src/data/types.ts` field for field. Optional fields
 * in the TypeScript type are empty strings / empty arrays / 'auto' here
 * (a form field always exists); `src/data/components/_index.ts` turns them
 * back into `undefined` when it loads the JSON for the site.
 *
 * Storage is local: `npm run cms` opens http://127.0.0.1:4321/keystatic,
 * edits write straight to the JSON files, and git records the change.
 */
import { config, collection, fields } from '@keystatic/core';

const DS_VERDICTS = [
  { label: 'Keep', value: 'keep' }, { label: 'Fix', value: 'fix' }, { label: 'Restructure', value: 'restructure' },
  { label: 'Consolidate', value: 'consolidate' }, { label: 'Product Layer', value: 'product-layer' }, { label: 'Remove', value: 'remove' },
];
const NATIVE_STATUS = [
  { label: 'Ready', value: 'ready' }, { label: 'Needs Refinement', value: 'refine' }, { label: 'Requires Rework', value: 'rework' },
  { label: 'Not Applicable', value: 'na' }, { label: 'Fix', value: 'fix' },
];
const CRITERIA = [
  { label: '— none', value: '' },
  { label: 'C1 · Layer Structure & Naming', value: 'C1' }, { label: 'C2 · Variant & Property Naming', value: 'C2' },
  { label: 'C3 · Token Coverage', value: 'C3' }, { label: 'C4 · Native Mappability', value: 'C4' },
  { label: 'C5 · Interaction State Coverage', value: 'C5' }, { label: 'C6 · Asset & Icon Quality', value: 'C6' },
];
const RECO_TAGS = ['Rename', 'Property', 'Slot', 'State', 'Token', 'Asset', 'Composition', 'Family', 'A11y', 'Docs'].map((t) => ({ label: t, value: t }));
const TRI = [{ label: 'auto', value: 'auto' }, { label: 'yes', value: 'yes' }, { label: 'no', value: 'no' }];
const YES_NO_NA = [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }, { label: 'N/A', value: 'na' }];

const text = (label: string, multiline = false) => fields.text({ label, multiline });
const html = (label: string) => fields.text({ label, multiline: true, description: 'HTML is allowed' });
const strings = (label: string) => fields.array(fields.text({ label: 'Value' }), { label, itemLabel: (p) => p.value });

const issue = fields.object({
  headline: text('Headline'),
  body: html('Body'),
  tag: fields.object({ criterion: fields.select({ label: 'Criterion', options: CRITERIA, defaultValue: '' }), label: text('Tag label') }, { label: 'Tag' }),
}, { label: 'Issue' });
const reco = fields.object({
  headline: text('Headline'),
  body: html('Body'),
  tag: fields.select({ label: 'Tag', options: RECO_TAGS, defaultValue: 'Docs' }),
}, { label: 'Recommendation' });

const variantOverride = fields.object({
  when: text('When (prop:value, compound with |)'),
  value: text('Value'),
  token: text('Token'),
  mono: fields.select({ label: 'Mono', options: TRI, defaultValue: 'auto' }),
  swatch: fields.select({ label: 'Swatch', options: TRI, defaultValue: 'auto' }),
  hide: fields.checkbox({ label: 'Hide the row for this selection' }),
}, { label: 'Variant override' });
const specRow = fields.object({
  key: text('Key'),
  value: html('Value'),
  mono: fields.checkbox({ label: 'Mono' }),
  token: text('Token'),
  swatch: fields.select({ label: 'Swatch', options: TRI, defaultValue: 'auto' }),
  prop: text('Follows control (prop)'),
  variants: fields.array(variantOverride, { label: 'Variants', itemLabel: (p) => p.fields.when.value }),
}, { label: 'Row' });
const controlRow = fields.object({
  label: text('Label (Figma name)'),
  prop: text('Prop'),
  control: fields.select({ label: 'Control', options: [{ label: 'select', value: 'select' }, { label: 'toggle', value: 'toggle' }, { label: 'input', value: 'input' }], defaultValue: 'select' }),
  defaultValue: text('Default value'),
  options: fields.array(fields.object({ value: text('value'), label: text('label') }), { label: 'Options', itemLabel: (p) => p.fields.label.value }),
}, { label: 'Control' });
const specCard = fields.object({
  cardKey: text('Card key'),
  demoKey: text('Demo key'),
  title: text('Title (the bare driving-property value)'),
  node: text('Figma node'),
  previewHtml: html('Preview HTML (server-rendered default)'),
  hasControls: fields.checkbox({ label: 'Has a demo panel (uncheck only for a card with nothing to control)', defaultValue: true }),
  demoControls: fields.array(fields.object({ heading: text('Heading'), rows: fields.array(controlRow, { label: 'Rows', itemLabel: (p) => p.fields.label.value }) }), { label: 'Demo controls', itemLabel: (p) => p.fields.heading.value }),
  sections: fields.array(fields.object({
    label: fields.select({ label: 'Section', options: ['Properties', 'Colors', 'Typography', 'Layout'].map((l) => ({ label: l, value: l })), defaultValue: 'Properties' }),
    slug: text('Slug'),
    rows: fields.array(specRow, { label: 'Rows', itemLabel: (p) => p.fields.key.value }),
  }), { label: 'Sections (Properties → Colors → Typography → Layout)', itemLabel: (p) => p.fields.label.value }),
  swift: html('SwiftUI (fallback)'),
  compose: html('Compose (fallback)'),
}, { label: 'Spec card' });
const colorsTable = fields.object({
  title: text('Title'),
  description: html('Description'),
  columns: strings('Columns'),
  rows: fields.array(fields.object({ role: text('Role'), element: text('Element'), token: text('Token'), values: strings('Values') }), { label: 'Rows', itemLabel: (p) => `${p.fields.role.value} · ${p.fields.element.value}` }),
}, { label: 'Colors table' });

const cells = fields.array(fields.object({ cells: strings('Cells') }), { label: 'Rows', itemLabel: (p) => p.fields.cells.elements.map((c) => c.value).join(' · ') });

export default config({
  storage: { kind: 'local' },
  ui: { brand: { name: 'East Blue' } },
  collections: {
    components: collection({
      label: 'Components',
      slugField: 'name',
      path: 'src/content/components/*',
      format: { data: 'json' },
      columns: ['name'],
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        meta: fields.object({
          node: text('Figma node (component set)'),
          figmaUrl: fields.url({ label: 'Figma URL' }),
          description: html('Description'),
          badges: fields.array(fields.object({
            kind: fields.select({ label: 'Kind', options: [...DS_VERDICTS, ...NATIVE_STATUS], defaultValue: 'keep' }),
            label: text('Label'),
          }), { label: 'Badges (DS verdict, then native status)', itemLabel: (p) => p.fields.label.value }),
          verdict: fields.object({
            kind: fields.select({ label: 'Kind', options: [{ label: '— none', value: '' }, ...DS_VERDICTS], defaultValue: '' }),
            title: text('Title'),
            text: html('Text'),
          }, { label: 'Verdict box' }),
          navGroup: text('Family (navGroup)'),
          navIconSvg: html('Nav icon SVG'),
        }, { label: 'Meta' }),
        overview: fields.object({
          inContextNote: html('In Context — note'),
          inContextHtml: html('In Context — visual (HTML: an <img>, or the .ctx-placeholder pattern)'),
          inContextImage: text('In Context — image path'),
          inContextAlt: text('In Context — image alt text'),
          livePreviewHtml: html('Live preview HTML'),
          traits: fields.array(fields.object({
            name: text('Trait'),
            rating: fields.select({ label: 'Rating', options: ['pass', 'partial', 'warn', 'fail'].map((r) => ({ label: r, value: r })), defaultValue: 'pass' }),
            note: html('Note'),
          }), { label: 'DS Health — four traits', itemLabel: (p) => `${p.fields.name.value} · ${p.fields.rating.value}` }),
          behavior: fields.array(fields.object({
            state: text('State'),
            ios: fields.select({ label: 'iOS', options: YES_NO_NA, defaultValue: 'yes' }),
            android: fields.select({ label: 'Android', options: YES_NO_NA, defaultValue: 'yes' }),
            property: html('Property'),
            notes: html('Notes'),
          }), { label: 'Behavior', itemLabel: (p) => p.fields.state.value }),
          resolved: fields.array(issue, { label: 'Resolved issues', itemLabel: (p) => p.fields.headline.value }),
          open: fields.array(issue, { label: 'Open issues (C1–C6)', itemLabel: (p) => p.fields.headline.value }),
          recommendations: fields.array(reco, { label: 'Design recommendations', itemLabel: (p) => p.fields.headline.value }),
          appliedRecommendations: fields.array(reco, { label: 'Applied recommendations', itemLabel: (p) => p.fields.headline.value }),
        }, { label: 'Overview' }),
        style: fields.object({
          heading: text('Heading'),
          description: html('Description'),
          source: fields.object({
            set: text('Set read (must equal meta.node)'),
            variants: fields.integer({ label: 'Variant count', defaultValue: 0 }),
            read: text('Read on (YYYY-MM-DD)'),
            tool: fields.select({ label: 'Tool', options: [{ label: '— not stamped', value: '' }, { label: 'Talk To Figma', value: 'talk-to-figma' }, { label: 'Dev Mode MCP', value: 'dev-mode-mcp' }], defaultValue: '' }),
          }, { label: 'Source stamp' }),
          specCards: fields.array(specCard, { label: 'Spec cards', itemLabel: (p) => p.fields.title.value }),
          colorsTables: fields.array(colorsTable, { label: 'Colors tables', itemLabel: (p) => p.fields.title.value }),
        }, { label: 'Style' }),
        code: fields.object({
          installation: fields.object({
            planned: fields.checkbox({ label: 'Planned API', defaultValue: true }),
            blocks: fields.array(fields.object({ label: text('Label'), code: html('Code') }), { label: 'Blocks', itemLabel: (p) => p.fields.label.value }),
            footnote: html('Footnote'),
          }, { label: 'Installation' }),
          propertyMapping: fields.object({
            description: html('Description'),
            rows: fields.array(fields.object({ figma: text('Figma property (prose)'), swift: html('SwiftUI'), compose: html('Compose') }), { label: 'Rows', itemLabel: (p) => p.fields.figma.value }),
            filePaths: fields.object({ swift: text('Swift file'), compose: text('Compose file') }, { label: 'File paths' }),
          }, { label: 'Property mapping' }),
          usageSnippets: fields.array(fields.object({ subheading: text('Subheading'), swift: html('SwiftUI'), compose: html('Compose') }), { label: 'Usage snippets', itemLabel: (p) => p.fields.subheading.value }),
          accessibility: fields.array(fields.object({ requirement: text('Requirement'), ios: html('iOS'), android: html('Android') }), { label: 'Accessibility', itemLabel: (p) => p.fields.requirement.value }),
          usageGuidelines: fields.array(fields.object({ doText: html('Do'), dontText: html("Don't") }), { label: 'Usage guidelines (1–4 pairs)', itemLabel: (p) => p.fields.doText.value }),
          scorecard: fields.array(fields.object({
            id: fields.select({ label: 'ID', options: CRITERIA.filter((c) => c.value), defaultValue: 'C1' }),
            criterion: text('Criterion'),
            status: fields.select({ label: 'Status', options: NATIVE_STATUS, defaultValue: 'ready' }),
            statusLabel: text('Status label'),
            notes: html('Notes'),
          }), { label: 'Criteria scorecard (C1–C6)', itemLabel: (p) => `${p.fields.id.value} · ${p.fields.status.value}` }),
          variants: fields.object({
            total: fields.integer({ label: 'Total', defaultValue: 0 }),
            description: text('Multiplier expression'),
            columns: strings('Columns'),
            rows: cells,
            summary: fields.object({ columns: strings('Columns'), rows: cells }, { label: 'Summary (when > 10)' }),
            collapseLabel: text('Collapse label'),
          }, { label: 'Variants inventory' }),
        }, { label: 'Code' }),
        changelog: fields.array(fields.object({
          version: text('Version'),
          date: text('Date (Month YYYY)'),
          kind: fields.select({ label: 'Kind', options: ['major', 'minor', 'patch', 'initial'].map((k) => ({ label: k, value: k })), defaultValue: 'patch' }),
          kindLabel: text('Kind label'),
          header: text('Header (file · node)'),
          rows: fields.array(fields.object({
            body: html('Body'),
            delta: fields.object({
              kind: fields.select({ label: 'Delta', options: [{ label: '— none', value: '' }, { label: 'resolved', value: 'resolved' }, { label: 'partial', value: 'partial' }, { label: 'open', value: 'open' }], defaultValue: '' }),
              label: text('Label'),
            }, { label: 'Delta' }),
          }), { label: 'Rows', itemLabel: (p) => p.fields.body.value.replace(/<[^>]+>/g, '').slice(0, 60) }),
        }), { label: 'Changelog (newest first)', itemLabel: (p) => `${p.fields.version.value} · ${p.fields.date.value}` }),
      },
    }),
  },
});
