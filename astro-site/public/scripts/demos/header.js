/* Auto-extracted from assessment-src/components/header.html.
 * Powers the live-preview dropdowns/toggles for the header component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs header
 */
/* ── Header (Section Header) JS ─────────────────────────────────── */
/* Pixel-accurate replica of node 18430:2919.
   Specs: 360px wide, 24×16 padding, #FFFFFF bg, no border.
   Preamble: Proxima Soft Bold 14/14 #005CE5, tracking 0.25
   Title:    Proxima Soft Bold 22/26 #0A2757
   Desc:     BarkAda Semibold 12/18 #6780A9
   Link:     Proxima Soft Bold 16/16 #005CE5
   Counter:  24×24 pill, #EEF2F9 bg, #072592 label                   */

var EB_HEADER_EDIT_SVG =
  '<svg class="eb-preview-header__edit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>';

var EB_HEADER_LEADING_ICON_SVG =
  '<svg class="eb-preview-header__leading-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-6"/></svg>';

function _headerRenderVariant(opts) {
  var preamble    = opts.preamble === 'yes';
  var description = opts.description === 'yes';
  var leading     = opts.leading || 'none';
  var trailing    = opts.trailing || 'none';

  var centerAlign = (trailing === 'link' || trailing === 'edit' || trailing === 'counter') && !preamble && !description;

  var html = '<div class="eb-preview eb-preview-header' + (centerAlign ? ' eb-preview-header--center' : '') + '">';

  if (leading === 'icon') {
    html += EB_HEADER_LEADING_ICON_SVG;
  } else if (leading === 'illustration') {
    html += '<div class="eb-preview-header__leading-illus" aria-hidden="true"></div>';
  }

  html += '<div class="eb-preview-header__content">';
  if (preamble) html += '<p class="eb-preview-header__preamble">Preamble</p>';
  html += '<p class="eb-preview-header__title">Heading</p>';
  if (description) html += '<p class="eb-preview-header__desc">Description goes here</p>';
  html += '</div>';

  if (trailing === 'illustration') {
    html += '<div class="eb-preview-header__trailing-illus" aria-hidden="true"></div>';
  } else if (trailing === 'link') {
    html += '<span class="eb-preview-header__trailing"><span class="eb-preview-header__link">View All</span></span>';
  } else if (trailing === 'edit') {
    html += '<span class="eb-preview-header__trailing">' + EB_HEADER_EDIT_SVG + '<span class="eb-preview-header__link">Edit details</span></span>';
  } else if (trailing === 'counter') {
    html += '<span class="eb-preview-header__counter">0</span>';
  }

  html += '</div>';
  return html;
}

function _headerContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-lg">' +
    _headerRenderVariant({preamble:'yes', description:'yes', leading:'none', trailing:'link'}) +
    _headerRenderVariant({preamble:'no',  description:'no',  leading:'none', trailing:'counter'}) +
    _headerRenderVariant({preamble:'no',  description:'yes', leading:'illustration', trailing:'none'}) +
  '</div>';
}

function _headerUpdate() {
  var preamble    = document.getElementById('header-ctrl-preamble');
  var description = document.getElementById('header-ctrl-description');
  var leading     = document.getElementById('header-ctrl-leading');
  var trailing    = document.getElementById('header-ctrl-trailing');
  var preview     = document.getElementById('header-demo-preview');
  if (!preview) return;
  preview.innerHTML = _headerRenderVariant({
    preamble:    preamble ? preamble.value : 'no',
    description: description ? description.value : 'yes',
    leading:     leading ? leading.value : 'none',
    trailing:    trailing ? trailing.value : 'none'
  });
}

function _headerSpecMode(mode, cardNum) { /* reserved for DES/DEV toggle */ }

/* ── Header Spec Cards (cascaded pattern) ──────────────────────── */
var _headerSpecCards = {
  'title-only':       { preamble: 'no',  description: 'no',  leading: 'none', trailing: 'none' },
  'full-stack':       { preamble: 'yes', description: 'yes', leading: 'none', trailing: 'none' },
  'trailing-link':    { preamble: 'no',  description: 'no',  leading: 'none', trailing: 'link' },
  'trailing-edit':    { preamble: 'no',  description: 'no',  leading: 'none', trailing: 'edit' },
  'trailing-counter': { preamble: 'no',  description: 'no',  leading: 'none', trailing: 'counter' }
};

var _specCards = _headerSpecCards;
window._specCards = _specCards;

function _getHeaderSnippet(cardKey, lang, card) {
  var c = card || _headerSpecCards[cardKey] || {};
  var hasPreamble = c.preamble === 'yes';
  var hasDesc     = c.description === 'yes';
  var leading     = c.leading || 'none';
  var trailing    = c.trailing || 'none';

  if (lang === 'swift') {
    var s = 'EBHeader("Page title")';
    if (hasPreamble) s += '\n    .ebPreamble("PREAMBLE")';
    if (hasDesc)     s += '\n    .ebDescription("Description body copy")';
    if (leading === 'icon')         s += '\n    .ebLeadingMedia(.icon(Image(systemName: "chart.bar")))';
    else if (leading === 'illustration') s += '\n    .ebLeadingMedia(.illustration(Image("section")))';
    if (trailing === 'link')        s += '\n    .ebTrailing(.link("View All"))';
    else if (trailing === 'edit')   s += '\n    .ebTrailing(.edit("Edit details"))';
    else if (trailing === 'counter')s += '\n    .ebTrailing(.counter(0))';
    else if (trailing === 'illustration') s += '\n    .ebTrailing(.illustration(Image("trail")))';
    return s;
  }
  var lines = ['EBHeader('];
  lines.push('    title = "Page title"' + (hasPreamble || hasDesc || leading !== 'none' || trailing !== 'none' ? ',' : ''));
  if (hasPreamble) lines.push('    preamble = "PREAMBLE"' + ((hasDesc || leading !== 'none' || trailing !== 'none') ? ',' : ''));
  if (hasDesc)     lines.push('    description = "Description body copy"' + ((leading !== 'none' || trailing !== 'none') ? ',' : ''));
  if (leading === 'icon')         lines.push('    leadingMedia = EBLeadingMedia.Icon(Icons.Default.BarChart)' + (trailing !== 'none' ? ',' : ''));
  else if (leading === 'illustration') lines.push('    leadingMedia = EBLeadingMedia.Illustration(painterResource(R.drawable.section))' + (trailing !== 'none' ? ',' : ''));
  if (trailing === 'link')        lines.push('    trailing = EBHeaderTrailing.Link("View All")');
  else if (trailing === 'edit')   lines.push('    trailing = EBHeaderTrailing.Edit("Edit details")');
  else if (trailing === 'counter')lines.push('    trailing = EBHeaderTrailing.Counter(0)');
  else if (trailing === 'illustration') lines.push('    trailing = EBHeaderTrailing.Illustration(painterResource(R.drawable.trail))');
  lines.push(')');
  return lines.join('\n');
}

function buildSwiftSnippet(type, card)   { return _getHeaderSnippet(type, 'swift', card); }
function buildComposeSnippet(type, card) { return _getHeaderSnippet(type, 'compose', card); }
function getSnippet(type, lang, card)    { return _getHeaderSnippet(type, lang, card); }
window.getSnippet = getSnippet;

/* Map a demoKey to its underlying spec-card cardKey via the inner preview id. */
var _headerDemoKeyToSpecId = {
  'title-only':       'header-spec-1',
  'full-stack':       'header-spec-2',
  'trailing-link':    'header-spec-3',
  'trailing-edit':    'header-spec-4',
  'trailing-counter': 'header-spec-5'
};

function _headerCardKeyFor(demoKey) {
  var inner = document.getElementById(_headerDemoKeyToSpecId[demoKey]);
  if (!inner) return null;
  var card$ = inner.closest('.spec-card');
  if (!card$) return null;
  return (card$.id || '').replace(/^spec-card-/, '');
}

function updateSpecCard(cardKey, prop, value) {
  var card = _headerSpecCards[cardKey];
  if (!card) return;
  card[prop] = value;

  /* Update preview body */
  var ck = _headerCardKeyFor(cardKey);
  var card$ = ck ? document.getElementById('spec-card-' + ck) : null;
  if (card$) {
    var preview = card$.querySelector('.spec-card-preview, .spec-preview-body, .spec-preview-frame');
    if (preview) preview.innerHTML = _headerRenderVariant(card);
  }

  /* Update Properties readouts — data-sp="<demoKey>-<prop>" */
  ['preamble', 'description', 'leading', 'trailing'].forEach(function(p) {
    var spEl = document.querySelector('[data-sp="' + cardKey + '-' + p + '"]');
    if (spEl) spEl.textContent = card[p];
  });

  /* Update DEV code */
  var devView = document.querySelector('[data-view="' + cardKey + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + cardKey + '"]');
    if (codeEl) {
      var code = getSnippet(cardKey, lang, card);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}

function _headerInit() {
  var ctx = document.getElementById('header-context-preview');
  if (ctx) ctx.innerHTML = _headerContextMarkup();
  _headerUpdate();
  var cards = [
    { id: 'header-spec-1', opts: {preamble:'no',  description:'no',  leading:'none', trailing:'none'} },
    { id: 'header-spec-2', opts: {preamble:'yes', description:'yes', leading:'none', trailing:'none'} },
    { id: 'header-spec-3', opts: {preamble:'no',  description:'no',  leading:'none', trailing:'link'} },
    { id: 'header-spec-4', opts: {preamble:'no',  description:'no',  leading:'none', trailing:'edit'} },
    { id: 'header-spec-5', opts: {preamble:'no',  description:'no',  leading:'none', trailing:'counter'} }
  ];
  cards.forEach(function(c) {
    var el = document.getElementById(c.id);
    if (el) el.innerHTML = _headerRenderVariant(c.opts);
  });

  /* Sync each spec card's per-prop dropdowns to the card's defaults. */
  Object.keys(_headerSpecCards).forEach(function(k) {
    var ck = _headerCardKeyFor(k);
    if (!ck) return;
    var card$ = document.getElementById('spec-card-' + ck);
    if (!card$) return;
    var card = _headerSpecCards[k];
    var selects = card$.querySelectorAll('.demo-figma-panel .demo-panel-row');
    selects.forEach(function(row) {
      var label = row.querySelector('.demo-panel-label');
      var sel   = row.querySelector('select');
      if (!label || !sel) return;
      var prop = label.textContent.trim();
      var v = card[prop];
      if (v == null) return;
      for (var i = 0; i < sel.options.length; i++) {
        if (sel.options[i].value === v) { sel.selectedIndex = i; break; }
      }
    });
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _headerInit);
else _headerInit();

(function(){
  function reinit(){ if (typeof _headerInit === 'function') _headerInit(); }
  document.addEventListener('astro:page-load', reinit);
})();
