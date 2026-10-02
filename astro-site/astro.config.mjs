import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

// The CMS (Keystatic, local storage) is a dev-time editor over
// src/content/components/*.json. Its routes are server-rendered, so they are
// only mounted for `npm run cms`; the production build stays fully static.
const cms = process.env.KEYSTATIC === '1';

// Base path is deploy-target specific:
//   Droplet (eb-ds.frostdesigngroup.com) serves dist/ at the domain root → '/'
//   GitHub Pages project site serves from a subpath → '/east-blue-design-system/'
//
// Only the Pages workflow sets PUBLIC_BASE_PATH. Every other build — local dev
// and the droplet deploy — falls through to '/' and is unaffected.
const base = process.env.PUBLIC_BASE_PATH || '/';
const site = process.env.PUBLIC_SITE_URL || 'https://eb-ds.frostdesigngroup.com';

export default defineConfig({
  site,
  base,
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  build: {
    format: 'directory',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: cms ? [react(), keystatic()] : [],
  // Vite's dependency pre-bundler cannot resolve Astro's virtual
  // `astro:env/server` that the Keystatic API route imports; serve that
  // module through Astro's own pipeline instead.
  vite: cms ? { optimizeDeps: { exclude: ['@keystatic/astro/api'] }, ssr: { noExternal: ['@keystatic/astro'] } } : {},
});
