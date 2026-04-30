/* Auto-extracted from assessment-src/components/header-centered.html.
 * Powers the live-preview dropdowns/toggles for the header-centered component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs header-centered
 */
/* ── Header - Centered (Page Banner) JS ─────────────────────────── */
/* Pixel-accurate replica of node 18430:2858.
   Dark variant: #1972F9 bg, white title, 72%-white "Label:" key,
   white value, 24%-white bottom border.
   Light variant: white bg, #0A2757 title, #6780A9 key, dark value.
   Size: 360px × hug. Padding: 24 24 34 24.                          */

function _headerCenteredRender(opts) {
  var isDark  = opts.type === 'dark';
  var hasDesc = opts.desc === 'yes';
  var themeClass = isDark ? 'eb-preview-header-centered--dark' : 'eb-preview-header-centered--light';
  var html = '<div class="eb-preview eb-preview-header-centered ' + themeClass + '">' +
    '<p class="eb-preview-header-centered__title">Label</p>';
  if (hasDesc) {
    html +=
      '<p class="eb-preview-header-centered__sublabel">' +
        '<span class="eb-preview-header-centered__sublabel-key">Label:</span>' +
        '<span class="eb-preview-header-centered__sublabel-value">&nbsp;Add Content</span>' +
      '</p>';
  }
  html += '</div>';
  return html;
}

function _headerCenteredContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-lg">' +
    _headerCenteredRender({type:'dark',  desc:'yes'}) +
    _headerCenteredRender({type:'light', desc:'no'}) +
  '</div>';
}

function _headerCenteredUpdate() {
  var type    = document.getElementById('header-centered-ctrl-type');
  var desc    = document.getElementById('header-centered-ctrl-desc');
  var preview = document.getElementById('header-centered-demo-preview');
  if (!preview) return;
  preview.innerHTML = _headerCenteredRender({
    type: type ? type.value : 'dark',
    desc: desc ? desc.value : 'yes'
  });
}

/* ── Spec Cards ──────────────────────────────────────────────────── */
var _headerCenteredSpecCards = {
  'hc-dark':  { type: 'dark',  desc: 'yes' },
  'hc-light': { type: 'light', desc: 'yes' }
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
  var surface = card.type === 'dark' ? '.brand' : '.default';
  var surfaceCompose = card.type === 'dark' ? 'Brand' : 'Default';
  var hasDesc = card.desc === 'yes';
  if (lang === 'swift') {
    var s = 'EBCenteredHeader("Page title")\n    .ebStyle(' + surface + ')';
    if (hasDesc) s += '\n    .ebDescription("Description body copy")';
    return s;
  } else {
    var c = 'EBCenteredHeader(\n    title = "Page title",\n    style = EBHeaderStyle.' + surfaceCompose;
    if (hasDesc) c += ',\n    description = "Description body copy"';
    c += '\n)';
    return c;
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
  var spType = document.querySelector('[data-sp="' + cardStyle + '-type"]');
  if (spType) spType.textContent = card.type;
  var spDesc = document.querySelector('[data-sp="' + cardStyle + '-desc"]');
  if (spDesc) spDesc.textContent = card.desc;

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
  updateSpecCard('hc-dark',  'desc', 'yes');
  updateSpecCard('hc-light', 'desc', 'yes');
  updateSpecCard('hc-light', 'type', 'light');
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
