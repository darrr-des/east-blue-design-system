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

var _adsLayoutMap = {
  'banner-sm':   { aspect: '32:5',     radius: 'radius/radius-1 (4px)',  pad: '0 (ad fills surface)' },
  'banner-lg':   { aspect: '16:5',     radius: 'radius/radius-1 (4px)',  pad: '0 (ad fills surface)' },
  'banner-mrec': { aspect: '6:5',      radius: 'radius/radius-1 (4px)',  pad: '0 (ad fills surface)' },
  'promo-sm':    { aspect: '4:3',      radius: 'radius/radius-2 (8px)',  pad: '8 horizontal, 6 vertical' },
  'promo-md':    { aspect: '3:2',      radius: 'radius/radius-2 (8px)',  pad: '8 horizontal, 6 vertical' },
  'hero-sm':     { aspect: '17:10',    radius: 'radius/radius-3 (12px)', pad: '12 horizontal, 8 vertical' },
  'hero-md':     { aspect: '15:8',     radius: 'radius/radius-3 (12px)', pad: '12 horizontal, 8 vertical' }
};

function _adsEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

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

/* ── Spec card state (per-card, drives previews + DEV code) ──────── */
var _specCards = {
  banner: { size: 'banner-sm', loading: 'false' },
  promo:  { size: 'promo-md',  loading: 'false' },
  hero:   { size: 'hero-md',   loading: 'false' }
};
window._specCards = _specCards;

function _adsCaptionFor(family) {
  if (family === 'promo') return 'Earn up to 5% on savings';
  if (family === 'hero')  return 'Weekend deals are here';
  return '';
}

function _adsColorRowsFor(card, family) {
  if (family === 'banner') {
    return [
      ['Surface',          '#FFFFFF', 'ad-space/color/surface'],
      ['Loading skeleton', '#EEF2F9', 'ad-space/color/loading-skeleton'],
      ['"Ad" marker',      '#6780A9', 'text/color-text-subtle']
    ];
  }
  if (family === 'promo') {
    return [
      ['Surface',           '#FFFFFF', 'ad-space/color/surface'],
      ['Caption',           '#2340A9', 'ad-space/color/caption'],
      ['Image placeholder', '#E6E1EF', 'ad-space/color/loading-skeleton']
    ];
  }
  return [
    ['Surface',           '#FFFFFF', 'ad-space/color/surface'],
    ['Caption (overlay)', '#FFFFFF', 'ad-space/color/caption-overlay'],
    ['Caption scrim',     '#040506', 'overlay/scrim-bottom'],
    ['Image placeholder', '#E6E1EF', 'ad-space/color/loading-skeleton']
  ];
}

/* ── Code snippet builders ──────────────────────────────────────── */
function _adsSizeEnumSwift(size) {
  var map = {
    'banner-sm':'.bannerSm','banner-lg':'.bannerLg','banner-mrec':'.bannerMrec',
    'promo-sm':'.promoSm','promo-md':'.promoMd',
    'hero-sm':'.heroSm','hero-md':'.heroMd'
  };
  return map[size] || '.bannerSm';
}
function _adsSizeEnumCompose(size) {
  var map = {
    'banner-sm':'BannerSm','banner-lg':'BannerLg','banner-mrec':'BannerMrec',
    'promo-sm':'PromoSm','promo-md':'PromoMd',
    'hero-sm':'HeroSm','hero-md':'HeroMd'
  };
  return map[size] || 'BannerSm';
}

function buildSwiftSnippet(type, card) {
  var family = (_adsSizes[card.size] || {}).family || type;
  var sizeEnum = _adsSizeEnumSwift(card.size);
  var loading = card.loading === 'true';
  var lines = [];
  if (family === 'banner') {
    lines.push('EBAdSpace(size: ' + sizeEnum + (loading ? ', isLoading: true' : '') + ') {');
    lines.push('    GADBannerView(adSize: .banner)');
    lines.push('}');
  } else if (family === 'promo') {
    lines.push('EBAdSpace(');
    lines.push('    size: ' + sizeEnum + ',');
    lines.push('    caption: "Earn rewards every day"' + (loading ? ',' : ''));
    if (loading) lines.push('    isLoading: true');
    lines.push(') {');
    lines.push('    AsyncImage(url: imageURL)');
    lines.push('}');
  } else {
    lines.push('EBAdSpace(');
    lines.push('    size: ' + sizeEnum + ',');
    lines.push('    caption: "Featured offer"' + (loading ? ',' : ''));
    if (loading) lines.push('    isLoading: true');
    lines.push(') {');
    lines.push('    AsyncImage(url: imageURL)');
    lines.push('}');
  }
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var family = (_adsSizes[card.size] || {}).family || type;
  var sizeEnum = _adsSizeEnumCompose(card.size);
  var loading = card.loading === 'true';
  var lines = [];
  lines.push('EBAdSpace(');
  lines.push('    size = AdSpaceSize.' + sizeEnum + ',');
  if (family !== 'banner') {
    var cap = family === 'promo' ? 'Earn rewards every day' : 'Featured offer';
    lines.push('    caption = "' + cap + '",');
  }
  if (loading) lines.push('    isLoading = true,');
  /* Trim trailing comma */
  var last = lines[lines.length - 1];
  if (last.charAt(last.length - 1) === ',') lines[lines.length - 1] = last.slice(0, -1);
  lines.push(') {');
  if (family === 'banner') {
    lines.push('    AndroidView(factory = { ctx -> AdView(ctx) })');
  } else {
    lines.push('    AsyncImage(model = imageUrl, contentDescription = null)');
  }
  lines.push('}');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  var family = cardStyle;

  /* Update preview wrapper #ads-spec-{key} */
  var preview = document.getElementById('ads-spec-' + cardStyle);
  if (preview) {
    var loading = card.loading === 'true';
    var caption = loading ? '' : _adsCaptionFor(family);
    preview.innerHTML = _adsRender({
      size: card.size,
      loading: loading,
      caption: caption
    });
  }

  /* Update Properties readout */
  var spSize = document.querySelector('[data-sp="' + cardStyle + '-size"]');
  if (spSize) spSize.textContent = card.size;
  var spLoading = document.querySelector('[data-sp="' + cardStyle + '-loading"]');
  if (spLoading) spLoading.textContent = card.loading;

  /* Update Colors section */
  var colorsEl = document.getElementById('spec-' + cardStyle + '-colors');
  if (colorsEl) {
    var rows = _adsColorRowsFor(card, family);
    var h = '<div class="spec-detail-label">Colors</div><div class="spec-props">';
    rows.forEach(function(r) {
      var border = (r[1] === '#FFFFFF') ? 'border:1px solid #E2E4E9' : '';
      var tokenHtml = r[2] ? '<span class="spec-token-name">' + r[2] + '</span>' : '';
      h += '<div class="spec-prop has-token"><span class="spec-prop-key">' + r[0] + '</span>'
         + '<span class="spec-prop-val mono"><span class="spec-swatch" style="background:' + r[1] + ';' + border + '"></span> ' + r[1] + '</span>'
         + tokenHtml + '</div>';
    });
    h += '</div>';
    colorsEl.innerHTML = h;
  }

  /* Update Layout section */
  var layoutEl = document.getElementById('spec-' + cardStyle + '-layout');
  if (layoutEl) {
    var L = _adsLayoutMap[card.size] || _adsLayoutMap['banner-sm'];
    var sz = _adsSizes[card.size] || _adsSizes['banner-sm'];
    var lh = '<div class="spec-detail-label">Layout</div><div class="spec-props">';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Dimensions</span><span class="spec-prop-val mono">' + sz.w + ' × ' + sz.h + '</span></div>';
    if (family !== 'banner') lh += '<div class="spec-prop"><span class="spec-prop-key">Image aspect</span><span class="spec-prop-val mono">' + L.aspect + '</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Corner radius</span><span class="spec-prop-val mono">' + L.radius + '</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">' + (family === 'banner' ? 'Padding' : 'Caption padding') + '</span><span class="spec-prop-val mono">' + L.pad + '</span></div>';
    lh += '</div>';
    layoutEl.innerHTML = lh;
  }

  /* Update DEV code — always */
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

function _adsInitSpecCards() {
  Object.keys(_specCards).forEach(function(k) {
    updateSpecCard(k, 'size', _specCards[k].size);
  });
}

function _adsInit() {
  var ctx = document.getElementById('ads-context-preview');
  if (ctx) ctx.innerHTML = _adsContextMarkup();
  _adsUpdate();
  _adsInitSpecCards();
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _adsInit);
  else _adsInit();
  document.addEventListener('astro:page-load', _adsInit);
})();

/* ── Legacy aliases ────────────────────────────────────────────── */
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
