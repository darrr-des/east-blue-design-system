/* Banner — live preview + spec cards.
 * Wired to the Astro SpecCard demo-panel (`updateSpecCard(demoKey, prop, value)`).
 * Re-extract via: node astro-site/scripts/extract-demos.mjs banner
 */

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
  var property    = opts.property || 'container';
  var position    = opts.position || 'left';
  var hasPreamble = opts.hasPreamble === 'yes';
  var hasIcon     = opts.hasIcon === 'yes';
  var action      = opts.action || 'button';

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

  return '<div class="eb-preview eb-preview-bnr' + propCls + posCls + '">' +
    '<div class="eb-preview-bnr__card">' + inner + '</div>' +
  '</div>';
}

/* ── Live preview (Overview tab) ─────────────────────────────────── */
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

/* ── Spec cards (Style tab) ──────────────────────────────────────── */
var _bnrSpecCards = {
  'container-pre':  { property: 'container', position: 'left',  hasPreamble: 'yes', hasIcon: 'no',  action: 'button' },
  'full-button':    { property: 'full',      position: 'right', hasPreamble: 'no',  hasIcon: 'no',  action: 'button' },
  'container-icon': { property: 'container', position: 'left',  hasPreamble: 'no',  hasIcon: 'yes', action: 'none'   }
};
var _specCards = _bnrSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  var lines = ['EBBanner('];
  lines.push('    title: "Heading",');
  if (card.hasPreamble === 'yes') lines.push('    preamble: "Preamble",');
  lines.push('    description: "Add description here.",');
  if (card.action === 'button')      lines.push('    action: .button("Button") { /* tap */ }');
  else if (card.action === 'link')   lines.push('    action: .link("Button")');
  if (card.hasIcon === 'yes')        lines.push('    leadingAsset: .icon(Image(systemName: "info.circle.fill"))');
  lines.push(')');
  lines.push('.ebBannerLayout(.' + (card.property === 'full' ? 'fullWidth' : 'container') + ')');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  var lines = ['EBBanner('];
  lines.push('    title = "Heading",');
  if (card.hasPreamble === 'yes') lines.push('    preamble = "Preamble",');
  lines.push('    description = "Add description here.",');
  lines.push('    layout = EBBannerLayout.' + (card.property === 'full' ? 'FullWidth' : 'Container') + ',');
  lines.push('    imagePosition = EBBannerPosition.' + (card.position === 'right' ? 'Right' : 'Left') + ',');
  if (card.action === 'button')    lines.push('    action = EBBannerAction.Button("Button") { /* tap */ },');
  else if (card.action === 'link') lines.push('    action = EBBannerAction.Link("Button"),');
  if (card.hasIcon === 'yes')      lines.push('    leadingAsset = { Icon(Icons.Info, null) }');
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _bnrSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview — `bnr-spec-{cardStyle}-preview` */
  var previewEl = document.getElementById('bnr-spec-' + cardStyle + '-preview');
  if (previewEl) {
    previewEl.innerHTML = _bnrRender(card);
  }

  /* Update Properties readouts — `[data-sp="{cardStyle}-{prop}"]` */
  var labelMap = {
    property:    { container: 'Within A Container', full: 'Full Width' },
    position:    { left: 'left', right: 'right' },
    hasPreamble: { yes: 'yes', no: 'no' },
    hasIcon:     { yes: 'yes', no: 'no' },
    action:      { button: 'button', link: 'link', none: 'none' }
  };
  Object.keys(card).forEach(function(k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    var span = el.querySelector('.spec-prop-hex') || el;
    span.textContent = (labelMap[k] && labelMap[k][card[k]]) || card[k];
  });

  /* DEV code update — `[data-code-content="{cardStyle}"]` */
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

function _bnrInitSpecCards() {
  Object.keys(_bnrSpecCards).forEach(function(key) {
    updateSpecCard(key, 'property', _bnrSpecCards[key].property);
  });
}

function _bnrInit() {
  var ctx = document.getElementById('bnr-context-preview');
  if (ctx) {
    ctx.innerHTML = '<div class="eb-preview-bnr-strip">' +
      _bnrRender({property:'container', position:'left', hasPreamble:'yes', hasIcon:'no', action:'button', preamble:'PROMO', heading:'New user bonus', desc:'₱50 cashback on your first transfer.', actionLabel:'Claim'}) +
      _bnrRender({property:'full', position:'right', hasPreamble:'no', hasIcon:'no', action:'link', heading:'Pay Bills', desc:'Over 500 billers supported.', actionLabel:'Learn more'}) +
      _bnrRender({property:'container', position:'left', hasPreamble:'no', hasIcon:'yes', action:'none', heading:'Verify your account', desc:'Tap here to complete your KYC.'}) +
    '</div>';
  }
  _bnrUpdate();
  _bnrInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _bnrInit);
else _bnrInit();
document.addEventListener('astro:page-load', _bnrInit);

/* Legacy aliases */
function toggleBnrSpecMode(cardKey, toggleEl) {
  if (typeof window.toggleSpecMode === 'function') return window.toggleSpecMode(cardKey, toggleEl);
}
function switchBnrCodeTab(tabBtn, lang, cardKey) {
  if (typeof window.switchCodeTab === 'function') return window.switchCodeTab(tabBtn, lang, cardKey);
}
