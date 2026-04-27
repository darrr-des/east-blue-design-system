/* Auto-extracted from assessment-src/components/header.html.
 * Powers the live-preview dropdowns/toggles for the header component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs header
 */
/* ── Header (Section Header) JS ─────────────────────────────────── */
/* Pixel-accurate replica of node 18430:2919.
   Specs: 360px wide, 24×16 padding, #FFFFFF bg, no border.
   Preamble: HeyMeow Rnd Bold 14/14 #005CE5, tracking 0.25
   Title:    HeyMeow Rnd Bold 22/26 #0A2757
   Desc:     BarkAda Semibold 12/18 #6780A9
   Link:     HeyMeow Rnd Bold 16/16 #005CE5
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
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _headerInit);
else _headerInit();
