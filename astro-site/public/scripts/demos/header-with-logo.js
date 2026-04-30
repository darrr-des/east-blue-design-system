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

/* ── Spec Cards ──────────────────────────────────────────────────── */
var _headerWithLogoSpecCards = {
  'hwl-dark':  { theme: 'dark' },
  'hwl-light': { theme: 'light' }
};

/* Map demoKey → existing previewHtml container id from data file. */
var _headerWithLogoPreviewIds = {
  'hwl-dark':  'header-with-logo-spec-1',
  'hwl-light': 'header-with-logo-spec-2'
};

/* Expose for shared utilities. */
var _specCards = _headerWithLogoSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  return getSnippet(type, 'swift', card);
}
function buildComposeSnippet(type, card) {
  return getSnippet(type, 'compose', card);
}
function getSnippet(type, lang, card) {
  var appearance = card.theme === 'light' ? '.light' : '.dark';
  var appearanceCompose = card.theme === 'light' ? 'Light' : 'Dark';
  if (lang === 'swift') {
    return 'EBHeader(\n    logo: Image("gcash-logo"),\n    appearance: ' + appearance + '\n)';
  } else {
    return 'EBHeader(\n    logo = R.drawable.gcash_logo,\n    appearance = EBHeaderAppearance.' + appearanceCompose + '\n)';
  }
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _headerWithLogoSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview — locate via mapped id. */
  var previewId = _headerWithLogoPreviewIds[cardStyle];
  if (previewId) {
    var previewEl = document.getElementById(previewId);
    if (previewEl) previewEl.innerHTML = _headerWithLogoRender(card);
  }

  /* Update DES property readouts via [data-sp="${cardStyle}-${prop}"]. */
  var spTheme = document.querySelector('[data-sp="' + cardStyle + '-theme"]');
  if (spTheme) spTheme.textContent = card.theme;

  /* Update DEV code — `[data-code-content="${cardStyle}"]`. */
  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + cardStyle + '"]');
    if (codeEl) {
      var code = getSnippet(cardStyle, lang, card);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}

function _headerWithLogoInit() {
  var ctx = document.getElementById('header-with-logo-context-preview');
  if (ctx) ctx.innerHTML = _headerWithLogoContextMarkup();
  _headerWithLogoUpdate();
  /* Initial spec card render. */
  updateSpecCard('hwl-dark',  'theme', 'dark');
  updateSpecCard('hwl-light', 'theme', 'light');
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _headerWithLogoInit);
else _headerWithLogoInit();

/* ── Re-init after Astro view-transition swaps ─────────────── */
(function(){
  function reinit(){
    if (typeof _headerWithLogoInit === 'function') _headerWithLogoInit();
  }
  document.addEventListener('astro:page-load', reinit);
})();
