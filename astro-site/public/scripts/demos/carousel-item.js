/* Live preview for the carousel-item component page.
 *
 * Geometry, type and colour are read off component set 5776:37969 in the
 * 2026 Working File — the same source the Playground bundle is built from,
 * so the two renderers agree. Every number below is a Figma value:
 *
 *   card            282 x 160 (Default) / 282 x 146 (Small), radius 8,
 *                   padding 16 / 20 / 12 / 20, primary axis CENTER,
 *                   shadow app/shadow/shadow-high = 0 8 12 -8 #020E22 @16%
 *   Background      SLOT, absolute, inset 0 — holds the Asset instance whose
 *                   "replace-this-asset" rectangle carries the artwork
 *   content         130 wide FIXED, FILL height capped at 124, gap 0
 *   top-container   HUG; padding-bottom 8 with the icon, 1 with the preamble
 *   ⤷ LeadingIcon   SLOT 24 x 24, empty in the set — Figma's pink placeholder
 *   text-container  FILL, gap 1
 *   #heading        Primary/Headlines/Block — Proxima Soft 700 18/23, ls 0.25
 *   #description    Secondary/Bold/Caption — BarkAda 600 12/18, ls 0, TRUNCATE
 *   #preamble       Primary/Label/Fine — Proxima Soft 700 12/12, ls 0.5
 *   Button_New      HUG, padding-top 12, gap 8; #label Primary/Label/Small
 *                   (Proxima Soft 700 14/14, ls 0.25) + 16 x 16 chevron
 *   isPressed=true  Overlay instance — a #020E22 @24% rectangle over the art
 */

var _CIT = {
  dark:  { surface: '#1972F9', heading: '#FFFFFF',
           desc: 'rgba(246,249,253,0.8)', preamble: 'rgba(246,249,253,0.8)',
           link: '#FFFFFF',
           bg: { 'default': '/assets/previews/carousel-item-bg-dark.png',
                 small:     '/assets/previews/carousel-item-bg-dark-small.png' } },
  light: { surface: '#E5F1FF', heading: '#0A2757',
           desc: '#6780A9', preamble: '#2340A9',
           link: '#005CE5',
           bg: { 'default': '/assets/previews/carousel-item-bg-light.png',
                 small:     '/assets/previews/carousel-item-bg-light-small.png' } }
};

function _citEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function _citOn(v) { return v !== false && v !== 'false' && v !== 'no'; }

/* 16 x 16 chevron — the Button's Trailing Container slot. */
function _citChevronSvg(color) {
  return '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style="display:block;flex:none;">' +
    '<path d="M6 12L10 8L6 4" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
  '</svg>';
}

/* ⤷ LeadingIcon is an empty SLOT: Figma's export draws nothing, but the
   24 x 24 still holds its place in the top-container. */
function _citIconSlot() {
  return '<div style="width:24px;height:24px;flex:none;"></div>';
}

/* Normalise legacy { mode, type, hasPreamble, hasTextLink } options onto the
   Figma schema, so the Code-tab spec cards keep rendering. */
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
    size:       (o.size || 'default') === 'small' ? 'small' : 'default',
    appearance: appearance === 'light' ? 'light' : 'dark',
    topElement: topElement,
    isPressed:  _citOn(o.isPressed) && o.isPressed !== undefined,
    hasDescription: o.hasDescription === undefined ? true : _citOn(o.hasDescription),
    hasTextLink:    o.hasTextLink    === undefined ? true : _citOn(o.hasTextLink),
    preamble:   o.preamble === undefined ? 'Preamble' : o.preamble,
    heading:    o.heading  === undefined ? 'Heading'  : o.heading,
    desc:       o.desc     === undefined
                  ? 'This is a description for this banner. This is a description.'
                  : o.desc,
    button:     o.button   === undefined ? 'Button' : o.button
  };
}

function _citRender(opts) {
  var o = _citNormalise(opts);
  var c = _CIT[o.appearance];
  var cardH    = o.size === 'small' ? 146 : 160;
  /* content is FILL between the 16 / 12 paddings, capped at 124. */
  var contentH = Math.min(cardH - 28, 124);
  /* #description is FILL with autoResize TRUNCATE — it takes the height the
     other rows leave and ends in an ellipsis. top-container is 32 under the
     icon, 13 under the preamble; the heading is 23 + the 1px text gap; the
     Button adds 28. */
  var topH     = o.topElement === 'icon' ? 32 : (o.topElement === 'preamble' ? 13 : 0);
  var descH    = contentH - topH - 24 - (o.hasTextLink ? 28 : 0);
  var descLines = Math.max(1, Math.floor(descH / 18));

  var html = '<div style="position:relative;box-sizing:border-box;width:282px;height:' + cardH + 'px;' +
    'border-radius:8px;overflow:hidden;background:' + c.surface + ';' +
    'box-shadow:0 8px 12px -8px rgba(2,14,34,0.16);' +
    'display:flex;flex-direction:column;justify-content:center;align-items:flex-start;' +
    'padding:16px 20px 12px;">';

  /* Background slot — the Asset instance fills the card. */
  html += '<img src="' + c.bg[o.size] + '" alt="" aria-hidden="true" ' +
    'style="position:absolute;left:0;top:0;width:100%;height:100%;object-fit:cover;">';

  /* isPressed — the Overlay instance dims the artwork, never the copy. */
  if (o.isPressed) {
    html += '<div style="position:absolute;left:0;top:0;right:0;bottom:0;background:#020E22;opacity:0.24;"></div>';
  }

  html += '<div style="position:relative;z-index:2;width:130px;height:' + contentH + 'px;' +
    'display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:0;">';

  /* top-container — padding-bottom is 8 under the icon, 1 under the preamble. */
  if (o.topElement === 'icon') {
    html += '<div style="width:130px;padding-bottom:8px;display:flex;align-items:flex-start;flex:none;">' +
      _citIconSlot() + '</div>';
  } else if (o.topElement === 'preamble') {
    html += '<div style="width:130px;padding-bottom:1px;flex:none;">' +
      '<div style="font-family:\'Proxima Soft\',system-ui,sans-serif;font-weight:700;' +
      'font-size:12px;line-height:12px;letter-spacing:0.5px;color:' + c.preamble + ';">' +
      _citEscape(o.preamble) + '</div></div>';
  }

  /* text-container — FILL, gap 1. */
  html += '<div style="width:130px;flex:1 1 auto;min-height:0;display:flex;flex-direction:column;gap:1px;">';
  html += '<div style="font-family:\'Proxima Soft\',system-ui,sans-serif;font-weight:700;' +
    'font-size:18px;line-height:23px;letter-spacing:0.25px;color:' + c.heading + ';flex:none;">' +
    _citEscape(o.heading) + '</div>';
  if (o.hasDescription) {
    html += '<div style="font-family:\'BarkAda\',system-ui,sans-serif;font-weight:600;' +
      'font-size:12px;line-height:18px;letter-spacing:0;color:' + c.desc + ';' +
      'flex:1 1 auto;min-height:0;overflow:hidden;display:-webkit-box;' +
      '-webkit-box-orient:vertical;-webkit-line-clamp:' + descLines + ';">' +
      _citEscape(o.desc) + '</div>';
  }
  html += '</div>';

  /* Button_New — padding-top 12, gap 8, hugs its label + chevron. */
  if (o.hasTextLink) {
    html += '<div style="flex:none;padding-top:12px;display:flex;align-items:center;gap:8px;">' +
      '<span style="font-family:\'Proxima Soft\',system-ui,sans-serif;font-weight:700;' +
      'font-size:14px;line-height:14px;letter-spacing:0.25px;color:' + c.link + ';">' +
      _citEscape(o.button) + '</span>' + _citChevronSvg(c.link) + '</div>';
  }

  html += '</div>'; // content
  html += '</div>'; // card
  return html;
}

function _citUpdate() {
  var get = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  var preview = document.getElementById('cit-demo-preview');
  if (!preview) return;

  var topElement     = get('cit-ctrl-topelement', 'icon');
  var hasDescription = get('cit-ctrl-hasdescription', 'true');

  /* A text field is only useful when its layer is on screen. */
  var show = function (rowId, on) {
    var row = document.getElementById(rowId);
    if (row) row.style.display = on ? '' : 'none';
  };
  show('cit-row-preamble', topElement === 'preamble');
  show('cit-row-desc',     hasDescription !== 'false');

  preview.innerHTML = _citRender({
    hasDescription: hasDescription,
    hasTextLink:    get('cit-ctrl-hastextlink', 'true'),
    preamble:       get('cit-ctrl-preamble', 'Preamble'),
    heading:        get('cit-ctrl-heading', 'Heading'),
    desc:           get('cit-ctrl-desc', 'This is a description for this banner. This is a description.'),
    button:         'Button',
    size:           get('cit-ctrl-size', 'default'),
    isPressed:      get('cit-ctrl-ispressed', 'false'),
    appearance:     get('cit-ctrl-appearance', 'dark'),
    topElement:     topElement
  });
}

/* ── Spec card state — one card per Appearance value ────────────────
   Everything else is a panel control, defaulting to what Figma ships. */
var _specCards = {
  'dark':  { appearance: 'dark',  size: 'default', isPressed: 'false', topElement: 'icon', hasDescription: 'true', hasTextLink: 'true', preamble: 'Preamble' },
  'light': { appearance: 'light', size: 'default', isPressed: 'false', topElement: 'icon', hasDescription: 'true', hasTextLink: 'true', preamble: 'Preamble' }
};
window._specCards = _specCards;

var _citPreviewIds = { 'dark': 'cit-spec-1', 'light': 'cit-spec-2' };
/* One argument list, rendered into both languages, so the two cannot
   drift apart. Mirrors the call documented on the Code tab. */
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

/* Show or hide one control row on a spec card's panel. */
function _citToggleRow(cardKey, prop, show) {
  var row = document.querySelector(
    '.demo-panel-row[data-panel-card="' + cardKey + '"][data-panel-prop="' + prop + '"]'
  );
  if (row) row.style.display = show ? '' : 'none';
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var previewId = _citPreviewIds[cardStyle];
  var previewEl = previewId ? document.getElementById(previewId) : null;
  if (previewEl) previewEl.innerHTML = _citRender(card);

  _citToggleRow(cardStyle, 'preamble', card.topElement === 'preamble');
  _citToggleRow(cardStyle, 'desc', card.hasDescription !== 'false');

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
  _citUpdate();

  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'appearance', _specCards[k].appearance);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _citInit);
else _citInit();

/* Re-init after Astro view-transition swaps */
document.addEventListener('astro:page-load', _citInit);
