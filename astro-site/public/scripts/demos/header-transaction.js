/* Auto-extracted from assessment-src/components/header-transaction.html.
 * Powers the live-preview dropdowns/toggles for the header-transaction component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs header-transaction
 */
/* ── Header - Transaction (Detail Hero) JS ──────────────────────── */
/* Pixel-accurate replica of node 18430:2897.
   Surface: #1972F9 brand, 360 × 191/220. Padding 24 all.
   Avatar: 32×32 #C2CFE5 pill.
   Title:  HeyMeow Rnd Bold 22/26 white.
   Separator: 1px 24%-white.
   Meta: key 72%-white, value white, 14/20 BarkAda Semibold.
   Description: BarkAda Semibold 12/18 72%-white.                    */

function _headerTransactionRender(opts) {
  var hasEmail = opts.email === 'yes';
  var html = '<div class="eb-preview eb-preview-header-tx">' +
    '<div class="eb-preview-header-tx__avatar" aria-hidden="true"></div>' +
    '<p class="eb-preview-header-tx__title">Add Label Here</p>' +
    '<div class="eb-preview-header-tx__separator"></div>';
  if (hasEmail) {
    html +=
      '<p class="eb-preview-header-tx__meta">' +
        '<span class="eb-preview-header-tx__meta-key">email:</span>' +
        '<span class="eb-preview-header-tx__meta-value">email@gmail.com</span>' +
      '</p>';
  }
  html +=
    '<p class="eb-preview-header-tx__desc">Add description here.<br>Add description here.</p>' +
  '</div>';
  return html;
}

function _headerTransactionContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-lg">' +
    _headerTransactionRender({email:'yes'}) +
    _headerTransactionRender({email:'no'}) +
  '</div>';
}

function _headerTransactionUpdate() {
  var email   = document.getElementById('header-transaction-ctrl-email');
  var preview = document.getElementById('header-transaction-demo-preview');
  if (!preview) return;
  preview.innerHTML = _headerTransactionRender({email: email ? email.value : 'no'});
}

/* ── Spec Cards ──────────────────────────────────────────────────── */
var _headerTransactionSpecCards = {
  'ht-no':  { email: 'no' },
  'ht-yes': { email: 'yes' }
};

/* Map demoKey → existing previewHtml container id from data file. */
var _headerTransactionPreviewIds = {
  'ht-no':  'header-transaction-spec-1',
  'ht-yes': 'header-transaction-spec-2'
};

/* Expose for shared utilities. */
var _specCards = _headerTransactionSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  return getSnippet(type, 'swift', card);
}
function buildComposeSnippet(type, card) {
  return getSnippet(type, 'compose', card);
}
function getSnippet(type, lang, card) {
  var hasEmail = card.email === 'yes';
  if (lang === 'swift') {
    var s = 'EBTransactionHeader(\n    title: "Send to bank"';
    if (hasEmail) s += ',\n    email: "user@example.com"';
    s += '\n)';
    return s;
  } else {
    var c = 'EBTransactionHeader(\n    title = "Send to bank"';
    if (hasEmail) c += ',\n    email = "user@example.com"';
    c += '\n)';
    return c;
  }
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _headerTransactionSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview — locate via mapped id. */
  var previewId = _headerTransactionPreviewIds[cardStyle];
  if (previewId) {
    var previewEl = document.getElementById(previewId);
    if (previewEl) previewEl.innerHTML = _headerTransactionRender(card);
  }

  /* Update DES property readouts via [data-sp="${cardStyle}-${prop}"]. */
  var spEmail = document.querySelector('[data-sp="' + cardStyle + '-email"]');
  if (spEmail) spEmail.textContent = card.email;

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

function _headerTransactionInit() {
  var ctx = document.getElementById('header-transaction-context-preview');
  if (ctx) ctx.innerHTML = _headerTransactionContextMarkup();
  _headerTransactionUpdate();
  /* Initial spec card render. */
  updateSpecCard('ht-no',  'email', 'no');
  updateSpecCard('ht-yes', 'email', 'yes');
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _headerTransactionInit);
else _headerTransactionInit();

/* ── Re-init after Astro view-transition swaps ─────────────── */
(function(){
  function reinit(){
    if (typeof _headerTransactionInit === 'function') _headerTransactionInit();
  }
  document.addEventListener('astro:page-load', reinit);
})();
