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
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _cdcardInit);
else _cdcardInit();
