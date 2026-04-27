# EB DS Assessment — Astro site

Static site that renders the GCash design-system component assessments. Built with [Astro](https://astro.build) — outputs plain HTML/CSS/JS, no runtime framework.

## Architecture

```
astro-site/
├── public/                      → static assets (served as-is)
│   ├── assets/previews/         → in-context PNG snapshots
│   ├── fonts/{BarkAda,HeyMeow}/ → variable fonts
│   └── scripts/assessment.js    → ONE shared client-side module for all 79 pages
├── src/
│   ├── data/
│   │   ├── types.ts             → ComponentData TypeScript schema
│   │   └── components/
│   │       ├── _index.ts        → manifest + componentMap (auto-generated)
│   │       └── <slug>.ts        → one data file per component (auto-generated)
│   ├── components/              → reusable Astro components (SpecCard, DSHealth, etc.)
│   ├── layouts/Base.astro       → HTML shell + sidebar
│   ├── pages/
│   │   ├── index.astro          → all-components table
│   │   └── components/[slug].astro → dynamic route for any component
│   └── styles/global.css        → ported from assessment-src/styles.css
└── scripts/
    ├── migrate.mjs              → parses ../assessment-src/components/*.html → src/data/components/<slug>.ts
    └── audit.mjs                → reports per-component completeness
```

## Authoring

Two ways to update a component:

**A. Edit the source HTML, regenerate (current state).** The legacy `assessment-src/components/<slug>.html` files are still authoritative. Edit, then:

```bash
npm run build
```

This runs `migrate.mjs` (re-parses all 79 HTML files into `.ts` data) and then `astro build`.

**B. Edit the `.ts` data file directly (target state).** Once you cut over to Astro as the source of truth, edit `src/data/components/<slug>.ts` directly — one line change instead of hunting through HTML. Skip the migration step:

```bash
npm run build:astro
```

Just be aware that running `npm run migrate` will overwrite hand-edits in `.ts` files. Migrate first, then edit, until you delete `assessment-src/`.

## Common commands

| Command              | What it does |
|----------------------|--------------|
| `npm run dev`        | Dev server at http://127.0.0.1:4321 with hot reload |
| `npm run migrate`    | Parse `assessment-src/` HTML → `src/data/components/*.ts` |
| `npm run audit`      | Print per-component completeness report |
| `npm run build`      | `migrate` + `astro build` → outputs `dist/` |
| `npm run build:astro`| `astro build` only (skips migration) |
| `npm run preview`    | Serve the built `dist/` locally for verification |

## Deployment

`dist/` is plain static HTML/CSS/JS — host on anything:

- **Your own server** (nginx, Apache, Caddy): point the document root at `dist/`
- **S3 + CloudFront**: sync `dist/` to bucket, set index document to `index.html`
- **Vercel/Netlify**: connect this repo, set build command `npm run build`, publish dir `astro-site/dist`
- **GitHub Pages**: push `dist/` contents to a `gh-pages` branch

All internal URLs are root-absolute (`/components/<slug>`, `/scripts/assessment.js`, `/fonts/...`), so the site **must be hosted at the domain root**. For subpath hosting, add `base: '/your-subpath/'` to `astro.config.mjs`.

## Adding a new component

1. **Source-driven** (current): create `assessment-src/components/<slug>.html` with `@meta-start/end`, `@nav-start/end`, etc. blocks; run `npm run migrate`. Component appears in the sidebar + index automatically.
2. **Data-driven** (target): create `src/data/components/<slug>.ts` exporting `ComponentData` and add an entry to `_index.ts` `componentMap` and `componentManifest`. (Or just rerun `migrate` to regenerate `_index.ts`.)
