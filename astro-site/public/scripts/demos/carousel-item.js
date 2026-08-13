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
var _specCards = {
  'cit-default':  { mode: 'light', type: 'default',  hasPreamble: 'no',  hasTextLink: 'yes' },
  'cit-headline': { mode: 'light', type: 'headline', hasPreamble: 'yes', hasTextLink: 'yes' }
};
window._specCards = _specCards;

/* Mapping demoKey → existing preview-body element id */
var _citPreviewIds = {
  'cit-default':  'cit-spec-1',
  'cit-headline': 'cit-spec-2'
};

function buildSwiftSnippet(cardKey, card) {
  var modeArg = card.mode === 'dark' ? '.dark' : '.light';
  var lines = ['EBCarouselItem('];
  lines.push('    heading: "Heading",');
  if (card.hasPreamble === 'yes') lines.push('    preamble: "Preamble",');
  if (card.type !== 'headline') lines.push('    description: "Description",');
  if (card.type === 'icon') lines.push('    leadingIcon: Image(systemName: "star.fill"),');
  lines.push('    appearance: ' + modeArg);
  lines.push(')');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  var modeArg = card.mode === 'dark' ? 'EBAppearance.Dark' : 'EBAppearance.Light';
  var lines = ['EBCarouselItem('];
  lines.push('    heading = "Heading",');
  if (card.hasPreamble === 'yes') lines.push('    preamble = "Preamble",');
  if (card.type !== 'headline') lines.push('    description = "Description",');
  if (card.type === 'icon') lines.push('    leadingIcon = { Icon(Icons.Filled.Star, null) },');
  lines.push('    appearance = ' + modeArg);
  lines.push(')');
  return lines.join('\n');
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
  ['mode', 'type', 'hasPreamble', 'hasTextLink'].forEach(function(p) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + p + '"]');
    if (el) {
      var disp = card[p];
      if (p === 'mode') disp = (card.mode === 'dark') ? 'Dark Text' : 'Light Text';
      else if (p === 'type') {
        if (card.type === 'icon') disp = 'with Icon';
        else if (card.type === 'headline') disp = 'Headline Only';
        else disp = 'Default';
      }
      el.textContent = disp;
    }
  });

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

  var s1 = document.getElementById('cit-spec-1');
  if (s1) s1.innerHTML = _citRender({mode:'light', type:'default', hasPreamble:'no', hasTextLink:'yes'});

  var s2 = document.getElementById('cit-spec-2');
  if (s2) s2.innerHTML = _citRender({mode:'light', type:'headline', hasPreamble:'yes', hasTextLink:'yes', heading:'Add your title here. Add your title here.'});

  /* Re-render DEV snippets via shared updater */
  Object.keys(_specCards).forEach(function(k){ updateSpecCard(k, 'mode', _specCards[k].mode); });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _citInit);
else _citInit();

/* Re-init after Astro view-transition swaps */
document.addEventListener('astro:page-load', _citInit);
