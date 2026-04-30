/* Auto-extracted from assessment-src/components/carousel-discount-card.html.
 * Powers the live-preview dropdowns/toggles for the carousel-discount-card component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs carousel-discount-card
 */
/* ── Carousel - Discount Card JS ────────────────────────────────────
   Voucher card replica. 140 × ~223. Banner + perforate edge + label + value.
   3 variants: default | with violator | skeleton loader.                */

function _cdcardEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br/>');
}

function _cdcardBannerMarkup(showViolator, violatorText) {
  var violator = showViolator
    ? '<span class="eb-preview-cdcard__violator">' + _cdcardEscape(violatorText || 'New') + '</span>'
    : '';
  return '<div class="eb-preview-cdcard__banner">' +
    '<div class="eb-preview-cdcard__banner-img"></div>' +
    '<svg class="eb-preview-cdcard__perforate" viewBox="0 0 120 4" preserveAspectRatio="none" aria-hidden="true">' +
      '<path d="M0,2 C2,4 4,4 6,2 C8,0 10,0 12,2 C14,4 16,4 18,2 C20,0 22,0 24,2 C26,4 28,4 30,2 C32,0 34,0 36,2 C38,4 40,4 42,2 C44,0 46,0 48,2 C50,4 52,4 54,2 C56,0 58,0 60,2 C62,4 64,4 66,2 C68,0 70,0 72,2 C74,4 76,4 78,2 C80,0 82,0 84,2 C86,4 88,4 90,2 C92,0 94,0 96,2 C98,4 100,4 102,2 C104,0 106,0 108,2 C110,4 112,4 114,2 C116,0 118,0 120,2 L120,4 L0,4 Z" fill="#FFFFFF"/>' +
    '</svg>' +
    violator +
  '</div>';
}

function _cdcardRender(opts) {
  var type = opts.type || 'default';
  var label1 = opts.label1 || 'Add label here';
  var label2 = opts.label2 || 'Add label here';
  var value = opts.value || 'PHP 200.00';
  var violator = opts.violator || 'New';

  if (type === 'skeleton') {
    return '<div class="eb-preview eb-preview-cdcard eb-preview-cdcard--skeleton">' +
      '<div class="eb-preview-cdcard__sk-banner"></div>' +
      '<div class="eb-preview-cdcard__sk-content">' +
        '<div class="eb-preview-cdcard__sk eb-preview-cdcard__sk--title"></div>' +
        '<div class="eb-preview-cdcard__sk eb-preview-cdcard__sk--amount"></div>' +
      '</div>' +
    '</div>';
  }

  var showViolator = (type === 'with-violator');
  return '<div class="eb-preview eb-preview-cdcard">' +
    _cdcardBannerMarkup(showViolator, violator) +
    '<div class="eb-preview-cdcard__content">' +
      '<p class="eb-preview-cdcard__label">' + _cdcardEscape(label1) + '<br/>' + _cdcardEscape(label2) + '</p>' +
      '<p class="eb-preview-cdcard__value">' + _cdcardEscape(value) + '</p>' +
    '</div>' +
  '</div>';
}

function _cdcardContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--row eb-preview-stack--gap-sm">' +
    _cdcardRender({type:'default', label1:'2% off GCrypto', label2:'Bitcoin purchase', value:'PHP 200.00'}) +
    _cdcardRender({type:'with-violator', label1:'Save up to', label2:'50% on Lazada', value:'PHP 500.00', violator:'New'}) +
    _cdcardRender({type:'skeleton'}) +
  '</div>';
}

function _cdcardUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('cdcard-demo-preview');
  if (!preview) return;
  preview.innerHTML = _cdcardRender({
    type:     getVal('cdcard-ctrl-type', 'default'),
    label1:   getVal('cdcard-ctrl-label1', 'Add label here'),
    label2:   getVal('cdcard-ctrl-label2', 'Add label here'),
    value:    getVal('cdcard-ctrl-value', 'PHP 200.00'),
    violator: getVal('cdcard-ctrl-violator', 'New')
  });
}

/* ── Spec card state — drives per-card preview + DEV snippets ──────── */
var _specCards = {
  'default':         { type: 'default' },
  'with-violator':   { type: 'with-violator' },
  'skeleton-loader': { type: 'skeleton' }
};
window._specCards = _specCards;

/* Mapping demoKey → existing preview-body element id */
var _cdcardPreviewIds = {
  'default':         'cdcard-spec-1',
  'with-violator':   'cdcard-spec-2',
  'skeleton-loader': 'cdcard-spec-3'
};

function buildSwiftSnippet(cardKey, card) {
  var t = card.type || 'default';
  if (t === 'skeleton') return 'EBDiscountCard(isLoading: true)';
  if (t === 'with-violator') {
    return 'EBDiscountCard(\n    label: "Add label here",\n    value: "PHP 200.00",\n    violator: "New"\n)';
  }
  return 'EBDiscountCard(\n    label: "Add label here",\n    value: "PHP 200.00"\n)';
}

function buildComposeSnippet(cardKey, card) {
  var t = card.type || 'default';
  if (t === 'skeleton') return 'EBDiscountCard(\n    isLoading = true\n)';
  if (t === 'with-violator') {
    return 'EBDiscountCard(\n    label = "Add label here",\n    value = "PHP 200.00",\n    violator = "New"\n)';
  }
  return 'EBDiscountCard(\n    label = "Add label here",\n    value = "PHP 200.00"\n)';
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview HTML */
  var previewId = _cdcardPreviewIds[cardStyle];
  var previewEl = previewId ? document.getElementById(previewId) : null;
  if (previewEl) previewEl.innerHTML = _cdcardRender({ type: card.type });

  /* Update Properties readouts */
  var spType = document.querySelector('[data-sp="' + cardStyle + '-type"]');
  if (spType) spType.textContent = card.type;

  /* Update DEV code */
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

function _cdcardInit() {
  var ctx = document.getElementById('cdcard-context-preview');
  if (ctx) ctx.innerHTML = _cdcardContextMarkup();
  _cdcardUpdate();

  var s1 = document.getElementById('cdcard-spec-1');
  if (s1) s1.innerHTML = _cdcardRender({type:'default'});

  var s2 = document.getElementById('cdcard-spec-2');
  if (s2) s2.innerHTML = _cdcardRender({type:'with-violator', violator:'New'});

  var s3 = document.getElementById('cdcard-spec-3');
  if (s3) s3.innerHTML = _cdcardRender({type:'skeleton'});

  /* Re-render DEV snippets via shared updater */
  Object.keys(_specCards).forEach(function(k){ updateSpecCard(k, 'type', _specCards[k].type); });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _cdcardInit);
else _cdcardInit();

/* Re-init after Astro view-transition swaps */
document.addEventListener('astro:page-load', _cdcardInit);
