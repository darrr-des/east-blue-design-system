/* Auto-extracted from assessment-src/components/ad-space.html.
 * Powers the live-preview dropdowns/toggles for the ad-space component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs ad-space
 */
/* ── Ad Space JS ────────────────────────────────────────────── */
/* Canonical consolidated component. 7 sizes across 3 families:
   banner-sm | banner-lg | banner-mrec  (AdMob)
   promo-sm  | promo-md                  (dashboard tile)
   hero-sm   | hero-md                   (full-width hero)
   Orthogonal isLoading boolean; optional caption string (promo/hero only). */

var _adsSizes = {
  'banner-sm':   { w: 320, h:  50, family: 'banner', aspect: '320×50',  captionAllowed: false },
  'banner-lg':   { w: 320, h: 100, family: 'banner', aspect: '320×100', captionAllowed: false },
  'banner-mrec': { w: 300, h: 250, family: 'banner', aspect: '300×250', captionAllowed: false },
  'promo-sm':    { w: 131, h: 126, family: 'promo',  aspect: '131×126', captionAllowed: true  },
  'promo-md':    { w: 224, h: 200, family: 'promo',  aspect: '224×200', captionAllowed: true  },
  'hero-sm':     { w: 296, h: 174, family: 'hero',   aspect: '296×174', captionAllowed: true  },
  'hero-md':     { w: 336, h: 174, family: 'hero',   aspect: '336×174', captionAllowed: true  }
};

function _adsEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* Scale so previews fit the demo frame without exceeding ~340px wide or ~250 tall */
function _adsScale(w, h) {
  var maxW = 340, maxH = 250;
  var s = Math.min(maxW / w, maxH / h, 1);
  return s;
}

function _adsRender(opts) {
  var sizeKey = opts.size || 'promo-md';
  var s = _adsSizes[sizeKey] || _adsSizes['promo-md'];
  var loading = !!opts.loading;
  var caption = opts.caption || '';
  var scale = _adsScale(s.w, s.h);
  var w = Math.round(s.w * scale);
  var h = Math.round(s.h * scale);

  var cls = 'eb-preview-adspace eb-preview-adspace--' + s.family + ' eb-preview-adspace--' + sizeKey;
  if (loading) cls += ' eb-preview-adspace--loading';

  var style = 'width:' + w + 'px;height:' + h + 'px;';

  var html = '<div class="' + cls + '" style="' + style + '">';

  if (loading) {
    html += '<div class="eb-preview-adspace__skeleton"></div>';
  } else if (s.family === 'banner') {
    html += '<div class="eb-preview-adspace__banner-fill">';
    html += '<span class="eb-preview-adspace__banner-label">Ad</span>';
    html += '<span class="eb-preview-adspace__banner-dim">' + s.aspect + '</span>';
    html += '</div>';
  } else if (s.family === 'promo') {
    html += '<div class="eb-preview-adspace__image"><span class="eb-preview-adspace__image-label">Replace me · ' + s.aspect + '</span></div>';
    if (caption) {
      html += '<div class="eb-preview-adspace__caption eb-preview-adspace__caption--below">' + _adsEscape(caption) + '</div>';
    }
  } else if (s.family === 'hero') {
    html += '<div class="eb-preview-adspace__image eb-preview-adspace__image--full"><span class="eb-preview-adspace__image-label">Replace me · ' + s.aspect + '</span></div>';
    if (caption) {
      html += '<div class="eb-preview-adspace__caption eb-preview-adspace__caption--overlay">' + _adsEscape(caption) + '</div>';
    }
  }

  html += '</div>';
  return html;
}

function _adsContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--col eb-preview-stack--gap-md">' +
    '<div class="eb-preview-stack eb-preview-stack--row eb-preview-stack--gap-sm">' +
      _adsRender({size:'banner-sm'}) +
    '</div>' +
    '<div class="eb-preview-stack eb-preview-stack--row eb-preview-stack--gap-sm">' +
      _adsRender({size:'promo-sm', caption:'Send free'}) +
      _adsRender({size:'promo-md', caption:'Earn up to 5%'}) +
    '</div>' +
    '<div class="eb-preview-stack eb-preview-stack--row eb-preview-stack--gap-sm">' +
      _adsRender({size:'hero-md', caption:'Weekend deals'}) +
    '</div>' +
  '</div>';
}

function _adsUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('ads-demo-preview');
  if (!preview) return;
  var size = getVal('ads-ctrl-size', 'promo-md');
  var loading = getVal('ads-ctrl-loading', 'false') === 'true';
  var cap = getVal('ads-ctrl-caption', 'Offer title');
  var captionAllowed = (_adsSizes[size] || {}).captionAllowed;
  preview.innerHTML = _adsRender({
    size: size,
    loading: loading,
    caption: captionAllowed ? cap : ''
  });
}

function _adsInit() {
  var ctx = document.getElementById('ads-context-preview');
  if (ctx) ctx.innerHTML = _adsContextMarkup();
  _adsUpdate();

  var sb = document.getElementById('ads-spec-banner');
  if (sb) sb.innerHTML =
    '<div class="eb-preview-stack eb-preview-stack--col eb-preview-stack--gap-sm">' +
      _adsRender({size:'banner-sm'}) +
      _adsRender({size:'banner-lg'}) +
      _adsRender({size:'banner-mrec'}) +
    '</div>';

  var sp = document.getElementById('ads-spec-promo');
  if (sp) sp.innerHTML =
    '<div class="eb-preview-stack eb-preview-stack--row eb-preview-stack--gap-sm">' +
      _adsRender({size:'promo-sm', caption:'Send free'}) +
      _adsRender({size:'promo-md', caption:'Earn up to 5% on savings'}) +
    '</div>';

  var sh = document.getElementById('ads-spec-hero');
  if (sh) sh.innerHTML =
    '<div class="eb-preview-stack eb-preview-stack--col eb-preview-stack--gap-sm">' +
      _adsRender({size:'hero-sm', caption:'Featured offer'}) +
      _adsRender({size:'hero-md', caption:'Weekend deals are here'}) +
    '</div>';
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _adsInit);
else _adsInit();

function toggleAdSpaceSpecMode(cardKey, toggleEl) {
  var labels = toggleEl.querySelectorAll('.spec-mode-label');
  var isDes = labels[0].classList.contains('active');
  labels[0].classList.toggle('active', !isDes);
  labels[1].classList.toggle('active', isDes);
  var desEl = document.querySelector('[data-view="' + cardKey + '-des"]');
  var devEl = document.querySelector('[data-view="' + cardKey + '-dev"]');
  if (desEl) desEl.style.display = isDes ? 'none' : '';
  if (devEl) devEl.style.display = isDes ? '' : 'none';
}
function switchAdSpaceCodeTab(tabBtn, lang, cardKey) {
  var block = tabBtn.closest('.spec-card-code');
  if (!block) return;
  block.querySelectorAll('.spec-code-tab').forEach(function(t){ t.classList.remove('active'); });
  tabBtn.classList.add('active');
  block.querySelectorAll('.spec-code-block').forEach(function(pre){
    pre.style.display = pre.getAttribute('data-lang') === lang ? '' : 'none';
  });
}
