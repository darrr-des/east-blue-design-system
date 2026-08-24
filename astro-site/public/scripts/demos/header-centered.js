/* Auto-extracted from assessment-src/components/header-centered.html.
 * Powers the live-preview dropdowns/toggles for the header-centered component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs header-centered
 */
/* ── Page Banner JS ─────────────────────────────────────────────── */
/* Pixel-accurate replica of node 4368:12839.
   Surface=Brand:   #1972F9 bg, white title, 72%-white "Label:" key,
                    white value, 24%-white bottom border.
   Surface=Default: white bg, #0A2757 title, #6780A9 key, dark value.
   Size: 360px × hug. Padding: 24 24 34 24.
   The SubtitleRow is present in both variants — confirmed intended
   composition, so there is no description toggle.                   */

function _headerCenteredRender(opts) {
  var surface = opts.surface === 'default' ? 'default' : 'brand';
  return '<div class="eb-preview eb-preview-header-centered eb-preview-header-centered--' + surface + '">' +
    '<p class="eb-preview-header-centered__title">Label</p>' +
    '<p class="eb-preview-header-centered__sublabel">' +
      '<span class="eb-preview-header-centered__sublabel-key">Label:</span>' +
      '<span class="eb-preview-header-centered__sublabel-value">&nbsp;Add Content</span>' +
    '</p>' +
  '</div>';
}

function _headerCenteredContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-lg">' +
    _headerCenteredRender({surface:'brand'}) +
    _headerCenteredRender({surface:'default'}) +
  '</div>';
}

function _headerCenteredUpdate() {
  var surface = document.getElementById('header-centered-ctrl-surface');
  var preview = document.getElementById('header-centered-demo-preview');
  if (!preview) return;
  preview.innerHTML = _headerCenteredRender({ surface: surface ? surface.value : 'brand' });
}

/* ── Spec Cards ──────────────────────────────────────────────────── */
var _headerCenteredSpecCards = {
  'hc-dark':  { surface: 'brand'   },
  'hc-light': { surface: 'default' }
};

/* Map demoKey → existing previewHtml container id from data file. */
var _headerCenteredPreviewIds = {
  'hc-dark':  'header-centered-spec-1',
  'hc-light': 'header-centered-spec-2'
};

/* Expose for shared utilities. */
var _specCards = _headerCenteredSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  return getSnippet(type, 'swift', card);
}
function buildComposeSnippet(type, card) {
  return getSnippet(type, 'compose', card);
}
function getSnippet(type, lang, card) {
  var isDefault = card.surface === 'default';
  var surface = isDefault ? '.default' : '.brand';
  var surfaceCompose = isDefault ? 'Default' : 'Brand';
  if (lang === 'swift') {
    return 'EBPageBanner("Label")\n    .ebSurface(' + surface + ')\n    .ebSubtitle(key: "Label:", value: "Add Content")';
  } else {
    return 'EBPageBanner(\n    title = "Label",\n    surface = EBSurface.' + surfaceCompose + ',\n    subtitleKey = "Label:",\n    subtitleValue = "Add Content"\n)';
  }
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _headerCenteredSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview — locate via mapped id. */
  var previewId = _headerCenteredPreviewIds[cardStyle];
  if (previewId) {
    var previewEl = document.getElementById(previewId);
    if (previewEl) previewEl.innerHTML = _headerCenteredRender(card);
  }

  /* Update DES property readouts via [data-sp="${cardStyle}-${prop}"]. */
  var spSurface = document.querySelector('[data-sp="' + cardStyle + '-surface"]');
  if (spSurface) spSurface.textContent = card.surface === 'default' ? 'Default' : 'Brand';

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

function _headerCenteredInit() {
  var ctx = document.getElementById('header-centered-context-preview');
  if (ctx) ctx.innerHTML = _headerCenteredContextMarkup();
  _headerCenteredUpdate();
  /* Initial spec card render. */
  updateSpecCard('hc-dark',  'surface', 'brand');
  updateSpecCard('hc-light', 'surface', 'default');
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _headerCenteredInit);
else _headerCenteredInit();

/* ── Re-init after Astro view-transition swaps ─────────────── */
(function(){
  function reinit(){
    if (typeof _headerCenteredInit === 'function') _headerCenteredInit();
  }
  document.addEventListener('astro:page-load', reinit);
})();
