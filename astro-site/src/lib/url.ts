/**
 * Base-aware URL builder.
 *
 * The site ships to two targets with different roots:
 *   - Droplet / local dev → served at '/'
 *   - GitHub Pages project site → served at '/east-blue-design-system/'
 *
 * Astro exposes the configured base as import.meta.env.BASE_URL. Hardcoding
 * '/components/foo' breaks the subpath deploy, so route through url() instead.
 *
 *   url('/')            → '/'  |  '/east-blue-design-system/'
 *   url('/components')  → '/components'  |  '/east-blue-design-system/components'
 */
export function url(path: string = '/'): string {
  const base = String(import.meta.env.BASE_URL ?? '/').replace(/\/+$/, '');
  const rest = String(path).replace(/^\/+/, '');
  return rest ? `${base}/${rest}` : `${base}/`;
}

/** The base itself, always with a trailing slash. Handy for client scripts. */
export const BASE: string = url('/');

/**
 * Rewrite root-absolute src/href inside a raw HTML string so it survives a
 * subpath deploy.
 *
 * Component data files (`<slug>.ts`) embed HTML with hardcoded paths like
 * `src="/assets/previews/button-in-context.png"`. Rather than editing 78 data
 * files, rewrite them at render time wherever that HTML is injected.
 *
 * A no-op when the site is served from the root, so the droplet is unaffected.
 */
export function withBase(html: string = ''): string {
  const base = String(import.meta.env.BASE_URL ?? '/').replace(/\/+$/, '');
  if (!base) return html;
  // Skip protocol-relative URLs (//cdn.example.com) — only rewrite single-slash paths.
  return html.replace(/(\s(?:src|href)=")\/(?!\/)/g, `$1${base}/`);
}
