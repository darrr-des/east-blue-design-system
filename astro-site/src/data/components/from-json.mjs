/*
 * fromJson — turns one src/content/components/<slug>.json (the CMS shape,
 * every field present, optional ones as '' / [] / 'auto', `variants` as
 * arrays) into `ComponentData` (src/data/types.ts).
 *
 * Plain JS so the site (_index.ts) and the audit scripts share one loader.
 */

/**
 * Reference pages carry sample data, not a Figma read. They build and render
 * like any component (slug `sample-*`) so the framework can be seen whole,
 * but they stay out of the nav, search, the grid, the home count and the
 * sweep's aggregate — the sweep measures them apart and holds them to every
 * rule.
 */
export const isSample = (slug) => /^sample-/.test(slug);

/* Test pages (slug `test-*`) are a real Figma read of a component that is
   not part of the system's inventory — a trial run of the framework. They
   build and render, stay out of the sidebar, search, the grid and the
   counts, and the sweep reports them apart without scoring or gating them:
   an unfinished trial must never fail the build. */
export const isTest = (slug) => /^test-/.test(slug);

const str = (v) => (typeof v === 'string' && v !== '' ? v : undefined);
const tri = (v) => (v === 'yes' ? true : v === 'no' ? false : undefined);
const drop = (o) => Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined));

function row(r) {
  const variants = {};
  for (const v of r.variants || []) {
    if (!v.when) continue;
    variants[v.when] = drop({ value: str(v.value), token: str(v.token), mono: tri(v.mono), swatch: tri(v.swatch), hide: v.hide ? true : undefined });
  }
  return drop({
    key: r.key, value: r.value,
    mono: r.mono ? true : undefined,
    token: str(r.token),
    swatch: tri(r.swatch),
    prop: str(r.prop),
    variants: Object.keys(variants).length ? variants : undefined,
  });
}
function card(c) {
  return drop({
    cardKey: c.cardKey, demoKey: str(c.demoKey), title: c.title, node: c.node,
    previewHtml: str(c.previewHtml),
    demoControls: c.hasControls === false ? undefined : (c.demoControls || []).map((s) => ({
      heading: s.heading,
      rows: (s.rows || []).map((r) => drop({ label: r.label, prop: r.prop, control: r.control === 'select' ? undefined : r.control, defaultValue: str(r.defaultValue), options: r.options || [] })),
    })),
    sections: (c.sections || []).map((s) => drop({ label: s.label, slug: str(s.slug), rows: (s.rows || []).map(row) })),
    swift: c.swift || '', compose: c.compose || '',
  });
}
const table = (t) => drop({ title: t.title, description: str(t.description), columns: t.columns || [], rows: (t.rows || []).map((r) => drop({ role: r.role, element: str(r.element), token: r.token, values: r.values || [] })) });
const issue = (i) => drop({ headline: str(i.headline), body: i.body, tag: i.tag?.criterion ? { criterion: i.tag.criterion, label: i.tag.label } : undefined });

export function fromJson(slug, j) {
  const m = j.meta || {}, o = j.overview || {}, s = j.style || {}, c = j.code || {};
  return {
    meta: drop({
      slug, name: j.name, node: m.node, figmaUrl: m.figmaUrl, description: m.description,
      badges: m.badges || [],
      verdict: m.verdict?.kind ? { kind: m.verdict.kind, title: m.verdict.title, text: m.verdict.text } : undefined,
      navGroup: str(m.navGroup), navIconSvg: str(m.navIconSvg),
    }),
    overview: drop({
      inContextNote: str(o.inContextNote), inContextHtml: str(o.inContextHtml),
      inContextImage: str(o.inContextImage), inContextAlt: str(o.inContextAlt),
      livePreviewHtml: str(o.livePreviewHtml),
      traits: o.traits || [], behavior: o.behavior || [],
      resolved: (o.resolved || []).map(issue), open: (o.open || []).map(issue),
      recommendations: o.recommendations || [],
      appliedRecommendations: (o.appliedRecommendations || []).length ? o.appliedRecommendations : undefined,
    }),
    style: drop({
      heading: str(s.heading), description: str(s.description),
      source: s.source?.set ? { set: s.source.set, variants: s.source.variants, read: s.source.read, tool: s.source.tool } : undefined,
      playground: s.playground === true ? true : undefined,
      specCards: (s.specCards || []).map(card),
      colorsTables: (s.colorsTables || []).length ? s.colorsTables.map(table) : undefined,
    }),
    code: {
      installation: drop({ planned: !!c.installation?.planned, blocks: c.installation?.blocks || [], footnote: str(c.installation?.footnote) }),
      propertyMapping: drop({ description: str(c.propertyMapping?.description), rows: c.propertyMapping?.rows || [], filePaths: c.propertyMapping?.filePaths?.swift ? c.propertyMapping.filePaths : undefined }),
      usageSnippets: c.usageSnippets || [], accessibility: c.accessibility || [], usageGuidelines: c.usageGuidelines || [], scorecard: c.scorecard || [],
      variants: drop({
        total: c.variants?.total || 0, description: c.variants?.description || '',
        columns: c.variants?.columns || [], rows: c.variants?.rows || [],
        summary: (c.variants?.summary?.rows || []).length ? c.variants.summary : undefined,
        collapseLabel: str(c.variants?.collapseLabel),
      }),
    },
    changelog: (j.changelog || []).map((e) => ({ ...e, rows: (e.rows || []).map((r) => drop({ body: r.body, delta: r.delta?.kind ? r.delta : undefined })) })),
  };
}
