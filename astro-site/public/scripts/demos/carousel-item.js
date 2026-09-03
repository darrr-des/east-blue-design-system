/* Auto-extracted from assessment-src/components/carousel-item.html.
 * Powers the live-preview dropdowns/toggles for the carousel-item component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs carousel-item
 */
/* ── Carousel - Item JS ──────────────────────────────────────────
   Flat-color placeholder (no raster bg) approximation of node
   18543:2806. Preamble / Heading / Description / Button slots
   are wired to the side panel inputs.                              */

function _citChevronSvg(color) {
  return '<svg class="eb-preview-cit__chev" viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
    '<path d="M9 6l6 6-6 6" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
  '</svg>';
}

function _citEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* Normalise legacy { mode, type, hasPreamble, hasTextLink } options onto the
   current Size / Appearance / TopElement / isPressed schema, so the Style-tab
   spec cards keep rendering until they are rebuilt. */
function _citNormalise(opts) {
  var o = opts || {};

  /* Legacy `mode` was named for the TEXT colour; Appearance names the
     SURFACE. mode=light (white text on dark art) === Appearance=Dark. */
  var appearance = o.appearance;
  if (!appearance && o.mode) appearance = o.mode === 'light' ? 'dark' : 'light';

  var topElement = o.topElement;
  if (!topElement) {
    if (o.type === 'icon') topElement = 'icon';
    else if (o.hasPreamble === 'yes') topElement = 'preamble';
    else topElement = 'none';
  }

  return {
    size:       o.size       || 'default',
    appearance: appearance   || 'dark',
    topElement: topElement,
    isPressed:  o.isPressed === true || o.isPressed === 'true',
    hasButton:  o.hasTextLink !== 'no',
    preamble:   o.preamble || 'Preamble',
    heading:    o.heading  || 'Heading',
    desc:       o.desc     || 'This is a description for this banner.',
    button:     o.button   || 'Button',
    focus:      o.focus    || 'center'
  };
}

function _citRender(opts) {
  var o = _citNormalise(opts);
  var onDark = o.appearance === 'dark';

  var cls = 'eb-preview eb-preview-cit ';
  cls += onDark ? 'eb-preview-cit--bg-dark' : 'eb-preview-cit--bg-light';
  if (o.size === 'small') cls += ' eb-preview-cit--small';
  if (o.focus === 'side') cls += ' eb-preview-cit--side';

  var headingColor  = onDark ? '#FFFFFF' : '#0A2757';
  var descColor     = onDark ? 'rgba(246,249,253,0.8)' : '#6780A9';
  var preambleColor = onDark ? 'rgba(246,249,253,0.8)' : 'rgba(7,37,146,0.6)';
  var linkColor     = onDark ? '#FFFFFF' : '#005CE5';

  var html = '<div class="' + cls + '">';
  html += '<div class="eb-preview-cit__hero"></div>';

  /* Pressed drops a dim layer over the whole card (Overlay instance). */
  if (o.isPressed) html += '<div class="eb-preview-cit__dim"></div>';

  html += '<div class="eb-preview-cit__content">';

  /* TopElement — what sits above the heading. */
  if (o.topElement === 'icon') {
    html += '<div class="eb-preview-cit__icon"></div>';
  } else if (o.topElement === 'preamble') {
    html += '<div class="eb-preview-cit__preamble" style="color:' + preambleColor + '">' + _citEscape(o.preamble) + '</div>';
  }

  html += '<div class="eb-preview-cit__heading" style="color:' + headingColor + '">' + _citEscape(o.heading) + '</div>';
  html += '<div class="eb-preview-cit__desc" style="color:' + descColor + '">' + _citEscape(o.desc) + '</div>';

  if (o.hasButton) {
    html += '<div class="eb-preview-cit__link" style="color:' + linkColor + '">' +
      '<span>' + _citEscape(o.button) + '</span>' +
      _citChevronSvg(linkColor) +
    '</div>';
  }

  html += '</div>'; // content
  html += '</div>'; // card
  return html;
}

function _citContextMarkup() {
  return '<div class="eb-preview-cit-strip">' +
    _citRender({size:'small',   appearance:'dark',  topElement:'none',     focus:'side',   heading:'Send Money',    desc:'Abroad in minutes', button:'Learn more'}) +
    _citRender({size:'default', appearance:'dark',  topElement:'preamble', focus:'center', preamble:'PROMO', heading:'New user bonus', desc:'₱50 cashback', button:'Claim'}) +
    _citRender({size:'small',   appearance:'light', topElement:'icon',     focus:'side',   heading:'Pay Bills',     desc:'500+ billers', button:'View'}) +
  '</div>';
}

function _citUpdate() {
  var get = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  var preview = document.getElementById('cit-demo-preview');
  if (!preview) return;

  var topElement = get('cit-ctrl-topelement', 'icon');

  /* Preamble text only applies when TopElement=Preamble. */
  var preambleRow = document.getElementById('cit-row-preamble');
  if (preambleRow) preambleRow.style.display = topElement === 'preamble' ? '' : 'none';

  preview.innerHTML = _citRender({
    size:       get('cit-ctrl-size', 'default'),
    appearance: get('cit-ctrl-appearance', 'dark'),
    topElement: topElement,
    isPressed:  get('cit-ctrl-ispressed', 'false'),
    preamble:   get('cit-ctrl-preamble', 'Preamble'),
    heading:    get('cit-ctrl-heading', 'Heading'),
    desc:       get('cit-ctrl-desc', 'This is a description for this banner.'),
    button:     get('cit-ctrl-button', 'Button')
  });
}

/* ── Spec card state — drives per-card preview + DEV snippets ──────── */
/* ── Spec card state — one card per Appearance value ────────────────
   Everything else is a panel control, defaulting to what Figma ships. */
var _specCards = {
  'dark':  { appearance: 'dark',  size: 'default', isPressed: 'false', topElement: 'icon', hasDescription: 'true', hasTextLink: 'true', preamble: 'Preamble' },
  'light': { appearance: 'light', size: 'default', isPressed: 'false', topElement: 'icon', hasDescription: 'true', hasTextLink: 'true', preamble: 'Preamble' }
};
window._specCards = _specCards;

var _citPreviewIds = { 'dark': 'cit-spec-1', 'light': 'cit-spec-2' };
/* One argument list, rendered into both languages, so the two cannot
   drift apart. Mirrors the call documented on the Style and Code tabs. */
function _citArgs(card, sep, lang) {
  var app = (card.appearance || 'dark');
  var args = [];
  args.push('appearance' + sep + (lang === 'swift'
    ? '.' + app
    : 'EBAppearance.' + app.charAt(0).toUpperCase() + app.slice(1)));
  if ((card.size || 'default') === 'small') {
    args.push('size' + sep + (lang === 'swift' ? '.small' : 'EBCarouselItemSize.Small'));
  }
  if (card.topElement === 'preamble') {
    args.push('preamble' + sep + '"' + (card.preamble || 'Preamble') + '"');
  }
  args.push('heading' + sep + '"Heading"');
  if (card.hasDescription !== 'false') {
    args.push('description' + sep + '"This is a description for this banner."');
  }
  if (card.hasTextLink !== 'false') args.push('textLink' + sep + '"Button"');
  if (card.topElement === 'icon') {
    args.push(lang === 'swift'
      ? 'leadingIcon: Image(systemName: "star.fill")'
      : 'leadingIcon = { Icon(Icons.Filled.Star, null) }');
  }
  if (card.isPressed === 'true') args.push('isPressed' + sep + 'true');
  return args;
}

function buildSwiftSnippet(cardKey, card) {
  return 'EBCarouselItem(\n    ' + _citArgs(card, ': ', 'swift').join(',\n    ') +
         '\n) {\n    Image(banner.asset)\n}';
}

function buildComposeSnippet(cardKey, card) {
  return 'EBCarouselItem(\n    ' + _citArgs(card, ' = ', 'compose').join(',\n    ') +
         '\n) {\n    AsyncImage(model = banner.asset, contentDescription = null)\n}';
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
  var previewId = _citPreviewIds[cardStyle];
  var previewEl = previewId ? document.getElementById(previewId) : null;
  if (previewEl) previewEl.innerHTML = _citRender(card);

  /* Update Properties readouts */


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

function _citInit() {
  var ctx = document.getElementById('cit-context-preview');
  if (ctx) ctx.innerHTML = _citContextMarkup();
  _citUpdate();

  /* Each card renders from its own state — no hardcoded legacy props. */
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'appearance', _specCards[k].appearance);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _citInit);
else _citInit();

/* Re-init after Astro view-transition swaps */
document.addEventListener('astro:page-load', _citInit);
