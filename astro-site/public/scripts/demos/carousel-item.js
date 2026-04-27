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

function _citRender(opts) {
  var mode         = opts.mode || 'light';              // light | dark
  var type         = opts.type || 'default';            // default | icon | headline
  var hasPreamble  = opts.hasPreamble === 'yes';
  var hasTextLink  = opts.hasTextLink !== 'no';
  var focus        = opts.focus || 'center';            // center | side — cosmetic for context preview

  var preamble = opts.preamble || 'Preamble';
  var heading  = opts.heading  || 'Heading';
  var desc     = opts.desc     || 'This is a description for this banner.';
  var button   = opts.button   || 'Button';

  // Light text = card sits on a DARK photo; we mock with blue gradient.
  // Dark text  = card sits on a LIGHT photo; we mock with peach gradient.
  var bgClass  = mode === 'light' ? 'eb-preview-cit--bg-dark' : 'eb-preview-cit--bg-light';
  var focusCls = focus === 'side' ? ' eb-preview-cit--side' : '';

  var headingColor   = mode === 'light' ? '#FFFFFF' : '#0A2757';
  var descColor      = mode === 'light' ? '#FFFFFF' : '#6780A9';
  var preambleColor  = mode === 'light' ? 'rgba(246,249,253,0.8)' : 'rgba(7,37,146,0.6)';
  var linkColor      = mode === 'light' ? '#FFFFFF' : '#005CE5';

  var html = '<div class="eb-preview eb-preview-cit ' + bgClass + focusCls + '">';
  html += '<div class="eb-preview-cit__hero"></div>';
  html += '<div class="eb-preview-cit__content">';

  if (hasPreamble) {
    html += '<div class="eb-preview-cit__preamble" style="color:' + preambleColor + '">' + _citEscape(preamble) + '</div>';
  }

  if (type === 'icon') {
    html += '<div class="eb-preview-cit__icon"></div>';
  }

  html += '<div class="eb-preview-cit__heading" style="color:' + headingColor + '">' + _citEscape(heading) + '</div>';

  if (type !== 'headline' && type !== 'icon') {
    html += '<div class="eb-preview-cit__desc" style="color:' + descColor + '">' + _citEscape(desc) + '</div>';
  } else if (type === 'icon') {
    html += '<div class="eb-preview-cit__desc" style="color:' + descColor + '">' + _citEscape(desc) + '</div>';
  }

  if (hasTextLink) {
    html += '<div class="eb-preview-cit__link" style="color:' + linkColor + '">' +
      '<span>' + _citEscape(button) + '</span>' +
      _citChevronSvg(linkColor) +
    '</div>';
  }

  html += '</div>'; // content
  html += '</div>'; // card
  return html;
}

function _citContextMarkup() {
  return '<div class="eb-preview-cit-strip">' +
    _citRender({mode:'light', type:'default', hasPreamble:'no', hasTextLink:'yes', focus:'side', heading:'Send Money', desc:'Abroad in minutes', button:'Learn more'}) +
    _citRender({mode:'light', type:'default', hasPreamble:'yes', hasTextLink:'yes', focus:'center', preamble:'PROMO', heading:'New user bonus', desc:'₱50 cashback', button:'Claim'}) +
    _citRender({mode:'dark',  type:'default', hasPreamble:'no', hasTextLink:'yes', focus:'side', heading:'Pay Bills', desc:'500+ billers', button:'View'}) +
  '</div>';
}

function _citUpdate() {
  var get = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  var preview = document.getElementById('cit-demo-preview');
  if (!preview) return;
  preview.innerHTML = _citRender({
    mode:        get('cit-ctrl-mode', 'light'),
    type:        get('cit-ctrl-type', 'default'),
    hasPreamble: get('cit-ctrl-haspreamble', 'no'),
    hasTextLink: get('cit-ctrl-hastextlink', 'yes'),
    preamble:    get('cit-ctrl-preamble', 'Preamble'),
    heading:     get('cit-ctrl-heading', 'Heading'),
    desc:        get('cit-ctrl-desc', 'This is a description for this banner.'),
    button:      get('cit-ctrl-button', 'Button')
  });
}

function _citInit() {
  var ctx = document.getElementById('cit-context-preview');
  if (ctx) ctx.innerHTML = _citContextMarkup();
  _citUpdate();

  var s1 = document.getElementById('cit-spec-1');
  if (s1) s1.innerHTML = _citRender({mode:'light', type:'default', hasPreamble:'no', hasTextLink:'yes'});

  var s2 = document.getElementById('cit-spec-2');
  if (s2) s2.innerHTML = _citRender({mode:'light', type:'headline', hasPreamble:'yes', hasTextLink:'yes', heading:'Add your title here. Add your title here.'});
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _citInit);
else _citInit();
