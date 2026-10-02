/*
 * Component data — loaded from src/content/components/<slug>.json, the files
 * the CMS edits (keystatic.config.ts). `fromJson` turns the CMS shape back
 * into `ComponentData` (src/data/types.ts); the slug is the file name.
 */
import type { ComponentData } from '../types';
import { fromJson, isSample, isTest } from './from-json.mjs';

const files = import.meta.glob<{ default: Record<string, unknown> }>('../../content/components/*.json', { eager: true });

export const componentMap: Record<string, ComponentData> = Object.fromEntries(
  Object.entries(files)
    .map(([p, mod]) => { const slug = p.split('/').pop()!.replace(/\.json$/, ''); return [slug, fromJson(slug, mod.default) as ComponentData] as const; })
    .sort(([a], [b]) => a.localeCompare(b)),
);

/**
 * Nav / search manifest — derived from `componentMap` so it can never drift.
 * Consumers read slug / name / node / badges / navGroup / navIconSvg from
 * `meta`, plus `openIssues` for the sidebar dot.
 */
export const componentManifest = Object.values(componentMap).map((c) => ({
  ...c.meta,
  openIssues: c.overview?.open?.length ?? 0,
  /** Reference page (slug `sample-*`): sample data, built but not listed. */
  sample: isSample(c.meta.slug),
  /** Test page (slug `test-*`): a trial read, built but not listed. */
  test: isTest(c.meta.slug),
}));

/**
 * The manifest without reference or test pages — what the sidebar, search,
 * the components grid and the home count read. `[slug].astro` keeps building
 * from `componentManifest`, so those pages still get their route.
 */
export const navManifest = componentManifest.filter((m) => !m.sample && !m.test);
