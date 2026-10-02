/* Auto-extracted from assessment-src/components/generic-card.html.
 * Powers the live-preview dropdowns/toggles for the generic-card component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs generic-card
 */
/* ── Generic Card JS ────────────────────────────────────────────── */
/* Pixel-accurate replica of node 18482:35806. Content is editable via
   panel inputs. 8 properties toggle slots independently (matches
   Figma's non-variant boolean props).                               */

function _gcardChevronSvg() {
  return '<svg class="eb-preview-gcard__chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
  '</svg>';
}

function _gcardEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function _gcardRender(opts) {
  var iconSize    = opts.iconSize || '64';
  var state       = opts.state || 'default';
  var hasSubtitle = opts.hasSubtitle !== 'no';
  var hasBlurb    = opts.hasBlurb !== 'no';
  var hasTag      = opts.hasTag !== 'no';
  var has2desc    = opts.has2desc !== 'no';
  var hasBadge    = opts.hasBadge !== 'no';
  var hasChevron  = opts.hasChevron !== 'no';

  var blurb   = opts.blurb || 'Blurb';
  var tag     = opts.tag || 'Tag';
  var heading = opts.heading || 'Heading Goes Here';
  var desc    = opts.desc || 'Description goes here';
  var badge   = opts.badge || 'Label';

  if (state === 'skeleton') {
    return '<div class="eb-preview eb-preview-gcard eb-preview-gcard--skeleton">' +
      '<div class="eb-preview-gcard__icon eb-preview-gcard__icon--' + iconSize + '"></div>' +
      '<div class="eb-preview-gcard__content">' +
        '<div class="eb-preview-gcard__sk eb-preview-gcard__sk--tag"></div>' +
        '<div class="eb-preview-gcard__sk eb-preview-gcard__sk--heading"></div>' +
        '<div class="eb-preview-gcard__sk eb-preview-gcard__sk--desc"></div>' +
        '<div class="eb-preview-gcard__sk eb-preview-gcard__sk--desc2"></div>' +
        '<div class="eb-preview-gcard__sk eb-preview-gcard__sk--badge"></div>' +
      '</div>' +
      '<div class="eb-preview-gcard__sk eb-preview-gcard__sk--chevron"></div>' +
    '</div>';
  }

  var html = '<div class="eb-preview eb-preview-gcard' + (state === 'disabled' ? ' eb-preview-gcard--disabled' : '') + '">';
  html += '<div class="eb-preview-gcard__icon eb-preview-gcard__icon--' + iconSize + '"></div>';
  html += '<div class="eb-preview-gcard__content">';

  if (hasSubtitle && (hasBlurb || hasTag)) {
    html += '<div class="eb-preview-gcard__subtitle">';
    if (hasBlurb) html += '<span class="eb-preview-gcard__blurb">' + _gcardEscape(blurb) + '</span>';
    if (hasTag)   html += '<span class="eb-preview-gcard__tag">' + _gcardEscape(tag) + '</span>';
    html += '</div>';
  }

  html += '<p class="eb-preview-gcard__heading">' + _gcardEscape(heading) + '</p>';

  html += '<p class="eb-preview-gcard__desc-line eb-preview-gcard__desc-line--first">' +
    '<span class="eb-preview-gcard__desc-label">Label:</span>' +
    '<span class="eb-preview-gcard__desc-value">' + _gcardEscape(desc) + '</span>' +
  '</p>';

  if (has2desc) {
    html += '<p class="eb-preview-gcard__desc-line">' +
      '<span class="eb-preview-gcard__desc-label">Label:</span>' +
      '<span class="eb-preview-gcard__desc-value">' + _gcardEscape(desc) + '</span>' +
    '</p>';
  }

  if (hasBadge) {
    html += '<span class="eb-preview-gcard__badge">' + _gcardEscape(badge) + '</span>';
  }

  html += '</div>';

  if (hasChevron) {
    html += '<div class="eb-preview-gcard__chevron-wrap">' + _gcardChevronSvg() + '</div>';
  }

  html += '</div>';
  return html;
}

function _gcardContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-sm">' +
    _gcardRender({iconSize:'64', state:'default', hasSubtitle:'yes', hasBlurb:'yes', hasTag:'yes', has2desc:'yes', hasBadge:'yes', hasChevron:'yes', blurb:'PROMO', tag:'New', heading:'Send Money Abroad', desc:'Same day delivery', badge:'Recommended'}) +
    _gcardRender({iconSize:'52', state:'default', hasSubtitle:'yes', hasBlurb:'yes', hasTag:'no', has2desc:'yes', hasBadge:'no', hasChevron:'yes', blurb:'BILLS', heading:'Pay Bills', desc:'Over 500 billers supported'}) +
    _gcardRender({iconSize:'40', state:'skeleton'}) +
  '</div>';
}

function _gcardUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('gcard-demo-preview');
  if (!preview) return;
  preview.innerHTML = _gcardRender({
    iconSize:    getVal('gcard-ctrl-iconsize', '64'),
    state:       getVal('gcard-ctrl-state', 'default'),
    hasSubtitle: getVal('gcard-ctrl-hassubtitle', 'yes'),
    hasBlurb:    getVal('gcard-ctrl-hasblurb', 'yes'),
    hasTag:      getVal('gcard-ctrl-hastag', 'yes'),
    has2desc:    getVal('gcard-ctrl-has2desc', 'yes'),
    hasBadge:    getVal('gcard-ctrl-hasbadge', 'yes'),
    hasChevron:  getVal('gcard-ctrl-haschevron', 'yes'),
    blurb:       getVal('gcard-ctrl-blurb', 'Blurb'),
    tag:         getVal('gcard-ctrl-tag', 'Tag'),
    heading:     getVal('gcard-ctrl-heading', 'Heading Goes Here'),
    desc:        getVal('gcard-ctrl-desc', 'Description goes here'),
    badge:       getVal('gcard-ctrl-badge', 'Label')
  });
}

/* ── Spec card state — one card per Status value (set 5412:31504) ──
 * Panel: State (Default, Disabled) · IconSize (XL, LG, MD, SM, XS, XXS).
 * Skeleton has no Disabled variant, so its card exposes IconSize only. */
var GCARD_ICON_PX = { xl: '64', lg: '52', md: '46', sm: '40', xs: '32', xxs: '24' };
var _specCards = {
  'default':  { status: 'default',  state: 'default', iconSize: 'xl' },
  'skeleton': { status: 'skeleton', state: 'default', iconSize: 'xl' }
};
window._specCards = _specCards;

/* Maps a card's Figma-named state to the render options. */
function _gcardCardOpts(card) {
  return {
    iconSize: GCARD_ICON_PX[card.iconSize] || '64',
    state: card.status === 'skeleton' ? 'skeleton' : (card.state === 'disabled' ? 'disabled' : 'default')
  };
}

/* ── Code snippet builders — component API, one line per Figma property ── */
function buildSwiftSnippet(type, card) {
  var sz = (card && card.iconSize) || 'xl';
  if (card && card.status === 'skeleton') {
    return 'EBGenericCard(isLoading: true)\n    .ebIconSize(.' + sz + ')';
  }
  var lines = [];
  lines.push('EBGenericCard("Heading Goes Here")');
  lines.push('    .ebPreamble("Blurb", tag: "Tag")');
  lines.push('    .ebDescription(label: "Label", "Description goes here")');
  lines.push('    .ebDescription(label: "Label", "Description goes here")');
  lines.push('    .ebBadge("Label")');
  lines.push('    .ebLeadingIcon(Image(systemName: "star.fill"))');
  lines.push('    .ebIconSize(.' + sz + ')');
  if (card && card.state === 'disabled') lines.push('    .disabled(true)');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var sz = ((card && card.iconSize) || 'xl').toUpperCase();
  if (card && card.status === 'skeleton') {
    return 'EBGenericCard(\n    isLoading = true,\n    iconSize = EBIconSize.' + sz + '\n)';
  }
  var lines = [];
  lines.push('EBGenericCard(');
  lines.push('    title = "Heading Goes Here",');
  lines.push('    preamble = "Blurb",');
  lines.push('    tag = "Tag",');
  lines.push('    descriptions = listOf("Label" to "Description goes here", "Label" to "Description goes here"),');
  lines.push('    badge = "Label",');
  lines.push('    leadingIcon = { Icon(Icons.Filled.Star, null) },');
  lines.push('    iconSize = EBIconSize.' + sz + ',');
  if (card && card.state === 'disabled') lines.push('    enabled = false,');
  var last = lines[lines.length - 1];
  if (last.charAt(last.length - 1) === ',') lines[lines.length - 1] = last.slice(0, -1);
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

/* ── Spec card update ─────────────────────────────────────────────── */
function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview — the Properties rows follow via `variants` in the data. */
  var el = document.getElementById('gcard-spec-' + cardStyle);
  if (el) el.innerHTML = _gcardRender(_gcardCardOpts(card));

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

function _gcardInit() {
  var ctx = document.getElementById('gcard-context-preview');
  if (ctx) ctx.innerHTML = _gcardContextMarkup();
  if (document.getElementById('gcard-demo-preview')) _gcardUpdate();

  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'iconSize', _specCards[k].iconSize);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _gcardInit);
else _gcardInit();
document.addEventListener('astro:page-load', _gcardInit);
