/* Auto-extracted from assessment-src/components/header-with-logo.html.
 * Powers the live-preview dropdowns/toggles for the header-with-logo component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs header-with-logo
 */
/* ── Header - With Logo (Brand App Bar) JS ──────────────────────── */
/* Pixel-accurate replica of node 18430:2875.
   Surface: #1972F9 brand. 360 × 88. Padding 24 all.
   Two variants: dark logo (#0A2757) / light logo (#FFFFFF).         */

var EB_HEADER_LOGO_GLYPH =
  '<svg class="eb-preview-header-logo__glyph" viewBox="0 0 28 28" fill="none" aria-hidden="true">' +
    '<circle cx="14" cy="14" r="12" fill="none" stroke="currentColor" stroke-width="2.2"/>' +
    '<path d="M14 6 A8 8 0 1 1 8.5 20" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>' +
    '<circle cx="19" cy="9" r="1.5" fill="currentColor"/>' +
  '</svg>';

function _headerWithLogoRender(opts) {
  var isLight = opts.theme === 'light';
  var markClass = isLight ? 'eb-preview-header-logo__mark--light' : 'eb-preview-header-logo__mark--dark';
  return '<div class="eb-preview eb-preview-header-logo">' +
    '<div class="eb-preview-header-logo__mark ' + markClass + '">' +
      EB_HEADER_LOGO_GLYPH +
      '<span>GCash</span>' +
    '</div>' +
  '</div>';
}

function _headerWithLogoContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-sm">' +
    _headerWithLogoRender({theme:'light'}) +
    _headerWithLogoRender({theme:'dark'}) +
  '</div>';
}

function _headerWithLogoUpdate() {
  var theme   = document.getElementById('header-with-logo-ctrl-theme');
  var preview = document.getElementById('header-with-logo-demo-preview');
  if (!preview) return;
  preview.innerHTML = _headerWithLogoRender({theme: theme ? theme.value : 'light'});
}

function _headerWithLogoInit() {
  var ctx = document.getElementById('header-with-logo-context-preview');
  if (ctx) ctx.innerHTML = _headerWithLogoContextMarkup();
  _headerWithLogoUpdate();
  var s1 = document.getElementById('header-with-logo-spec-1');
  if (s1) s1.innerHTML = _headerWithLogoRender({theme:'dark'});
  var s2 = document.getElementById('header-with-logo-spec-2');
  if (s2) s2.innerHTML = _headerWithLogoRender({theme:'light'});
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _headerWithLogoInit);
else _headerWithLogoInit();
