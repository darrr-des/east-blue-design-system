/* Auto-extracted from assessment-src/components/banner.html.
 * Powers the live-preview dropdowns/toggles for the banner component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs banner
 */
/* ── Banner JS ─────────────────────────────────────────────────────
   Flat approximation of Banner (node 756:82673). Mocks the image
   asset with a soft gradient rectangle + "Replace me" chip. Wires
   the six property toggles + four content inputs.                   */

function _bnrEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function _bnrChevronSvg(color) {
  return '<svg class="eb-preview-bnr__chev" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="16" height="16">' +
    '<path d="M9 6l6 6-6 6" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
  '</svg>';
}

function _bnrAssetMarkup() {
  return '<div class="eb-preview-bnr__asset">' +
    '<div class="eb-preview-bnr__asset-disk"></div>' +
    '<div class="eb-preview-bnr__asset-chip">Replace me</div>' +
  '</div>';
}

function _bnrIconMarkup() {
  return '<div class="eb-preview-bnr__asset eb-preview-bnr__asset--icon">' +
    '<div class="eb-preview-bnr__icon-dot"></div>' +
  '</div>';
}

function _bnrRender(opts) {
  var property    = opts.property || 'container';       // container | full
  var position    = opts.position || 'left';            // left | right
  var hasPreamble = opts.hasPreamble === 'yes';
  var hasIcon     = opts.hasIcon === 'yes';
  var action      = opts.action || 'button';            // button | link | none

  var preamble = opts.preamble || 'Preamble';
  var heading  = opts.heading  || 'Heading';
  var desc     = opts.desc     || 'Add description here.';
  var actionLabel = opts.actionLabel || 'Button';

  var propCls = property === 'full' ? ' eb-preview-bnr--full' : ' eb-preview-bnr--container';
  var posCls  = position === 'right' ? ' eb-preview-bnr--img-right' : ' eb-preview-bnr--img-left';

  var assetHtml = hasIcon ? _bnrIconMarkup() : _bnrAssetMarkup();

  var contentHtml = '<div class="eb-preview-bnr__content">';
  if (hasPreamble) {
    contentHtml += '<div class="eb-preview-bnr__preamble">' + _bnrEscape(preamble) + '</div>';
  }
  contentHtml += '<div class="eb-preview-bnr__heading">' + _bnrEscape(heading) + '</div>';
  contentHtml += '<div class="eb-preview-bnr__desc">' + _bnrEscape(desc) + '</div>';
  if (action !== 'none') {
    contentHtml += '<div class="eb-preview-bnr__link">' +
      '<span>' + _bnrEscape(actionLabel) + '</span>' +
      _bnrChevronSvg('#005CE5') +
    '</div>';
  }
  contentHtml += '</div>';

  var inner = position === 'right'
    ? contentHtml + assetHtml
    : assetHtml + contentHtml;

  var html = '<div class="eb-preview eb-preview-bnr' + propCls + posCls + '">' +
    '<div class="eb-preview-bnr__card">' + inner + '</div>' +
  '</div>';

  return html;
}

function _bnrContextMarkup() {
  return '<div class="eb-preview-bnr-strip">' +
    _bnrRender({property:'container', position:'left', hasPreamble:'yes', hasIcon:'no', action:'button', preamble:'PROMO', heading:'New user bonus', desc:'₱50 cashback on your first transfer.', actionLabel:'Claim'}) +
    _bnrRender({property:'full', position:'right', hasPreamble:'no', hasIcon:'no', action:'link', heading:'Pay Bills', desc:'Over 500 billers supported.', actionLabel:'Learn more'}) +
    _bnrRender({property:'container', position:'left', hasPreamble:'no', hasIcon:'yes', action:'none', heading:'Verify your account', desc:'Tap here to complete your KYC.'}) +
  '</div>';
}

function _bnrUpdate() {
  var get = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  var preview = document.getElementById('bnr-demo-preview');
  if (!preview) return;
  preview.innerHTML = _bnrRender({
    property:    get('bnr-ctrl-property', 'container'),
    position:    get('bnr-ctrl-position', 'left'),
    hasPreamble: get('bnr-ctrl-preamble-flag', 'no'),
    hasIcon:     get('bnr-ctrl-icon-flag', 'no'),
    action:      get('bnr-ctrl-action-flag', 'button'),
    preamble:    get('bnr-ctrl-preamble', 'Preamble'),
    heading:     get('bnr-ctrl-heading', 'Heading'),
    desc:        get('bnr-ctrl-desc', 'Add description here.'),
    actionLabel: get('bnr-ctrl-action', 'Button')
  });
}

function _bnrInit() {
  var ctx = document.getElementById('bnr-context-preview');
  if (ctx) ctx.innerHTML = _bnrContextMarkup();
  _bnrUpdate();

  var s1 = document.getElementById('bnr-spec-1');
  if (s1) s1.innerHTML = _bnrRender({property:'container', position:'right', hasPreamble:'yes', hasIcon:'no', action:'button', preamble:'Preamble', heading:'Heading', desc:'Add description here.', actionLabel:'Button'});

  var s2 = document.getElementById('bnr-spec-2');
  if (s2) s2.innerHTML = _bnrRender({property:'full', position:'right', hasPreamble:'no', hasIcon:'no', action:'button', heading:'Heading', desc:'Add description here.', actionLabel:'Button'});

  var s3 = document.getElementById('bnr-spec-3');
  if (s3) s3.innerHTML = _bnrRender({property:'container', position:'left', hasPreamble:'no', hasIcon:'yes', action:'none', heading:'Heading', desc:'This is a description for this banner. This is a description for this banner.'});
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _bnrInit);
else _bnrInit();

function toggleBnrSpecMode(cardKey, toggleEl) {
  var labels = toggleEl.querySelectorAll('.spec-mode-label');
  var isDes = labels[0].classList.contains('active');
  labels[0].classList.toggle('active', !isDes);
  labels[1].classList.toggle('active', isDes);
  var desEl = document.querySelector('[data-view="' + cardKey + '-des"]');
  var devEl = document.querySelector('[data-view="' + cardKey + '-dev"]');
  if (desEl) desEl.style.display = isDes ? 'none' : '';
  if (devEl) devEl.style.display = isDes ? '' : 'none';
}
function switchBnrCodeTab(tabBtn, lang, cardKey) {
  var block = tabBtn.closest('.spec-card-code');
  if (!block) return;
  block.querySelectorAll('.spec-code-tab').forEach(function(t){ t.classList.remove('active'); });
  tabBtn.classList.add('active');
  block.querySelectorAll('.spec-code-block').forEach(function(pre){
    pre.style.display = pre.getAttribute('data-lang') === lang ? '' : 'none';
  });
}
