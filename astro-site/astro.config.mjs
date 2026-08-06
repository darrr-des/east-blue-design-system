import { defineConfig } from 'astro/config';

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
});
