/* Auto-extracted from assessment-src/components/carousel-card.html.
 * Powers the live-preview dropdowns/toggles for the carousel-card component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs carousel-card
 */
/* ── Carousel Card JS ────────────────────────────────────────────── */
/* Pixel-accurate replica of node 23:121311. 3 type variants:
   default / with-icon / skeleton. Content is editable via panel inputs. */

function _ccardEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function _ccardIconSvg() {
  return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="16" height="16">' +
    '<circle cx="12" cy="12" r="10" fill="#C2C6CF"/>' +
  '</svg>';
}

function _ccardRender(opts) {
  var type  = opts.type || 'default';
  var title = opts.title || 'Title';
  var desc  = opts.desc || 'Description here. Description here.';

  var html = '<div class="eb-preview eb-preview-ccard eb-preview-ccard--' + type + '">';

  if (type === 'skeleton') {
    html += '<div class="eb-preview-ccard__banner eb-preview-ccard__banner--skeleton"></div>';
    html += '<div class="eb-preview-ccard__content eb-preview-ccard__content--skeleton">';
    html += '<div class="eb-preview-ccard__sk eb-preview-ccard__sk--title"></div>';
    html += '<div class="eb-preview-ccard__sk eb-preview-ccard__sk--desc"></div>';
    html += '<div class="eb-preview-ccard__sk eb-preview-ccard__sk--desc2"></div>';
    html += '</div>';
  } else {
    html += '<div class="eb-preview-ccard__banner">';
    html += '<div class="eb-preview-ccard__banner-img"></div>';
    html += '<div class="eb-preview-ccard__banner-dimmer"></div>';
    if (type === 'with-icon') {
      html += '<div class="eb-preview-ccard__banner-shadow"></div>';
      html += '<div class="eb-preview-ccard__banner-icon">' + _ccardIconSvg() + '</div>';
    }
    html += '</div>';
    html += '<div class="eb-preview-ccard__content">';
    html += '<p class="eb-preview-ccard__title">' + _ccardEscape(title) + '</p>';
    html += '<p class="eb-preview-ccard__desc">' + _ccardEscape(desc).replace(/\. /g, '.<br>') + '</p>';
    html += '</div>';
  }

  html += '</div>';
  return html;
}

function _ccardContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--row eb-preview-stack--gap-sm">' +
    _ccardRender({type:'default', title:'Article', desc:'Latest news. Read more.'}) +
    _ccardRender({type:'with-icon', title:'Send Money', desc:'Local & abroad. Same day.'}) +
    _ccardRender({type:'skeleton'}) +
  '</div>';
}

function _ccardUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('ccard-demo-preview');
  if (!preview) return;
  preview.innerHTML = _ccardRender({
    type:  getVal('ccard-ctrl-type', 'default'),
    title: getVal('ccard-ctrl-title', 'Title'),
    desc:  getVal('ccard-ctrl-desc', 'Description here. Description here.')
  });
}

/* ── Spec card state — drives per-card preview + DEV snippets ──────── */
var _specCards = {
  'default':         { type: 'default' },
  'with-icon':       { type: 'with-icon' },
  'skeleton-loader': { type: 'skeleton' }
};
window._specCards = _specCards;

/* Mapping demoKey → existing preview-body element id */
var _ccardPreviewIds = {
  'default':         'ccard-spec-1',
  'with-icon':       'ccard-spec-2',
  'skeleton-loader': 'ccard-spec-3'
};

function buildSwiftSnippet(cardKey, card) {
  var t = card.type || 'default';
  if (t === 'skeleton') return 'EBCarouselCard(isLoading: true)';
  if (t === 'with-icon') {
    return 'EBCarouselCard(\n    title: "Title",\n    description: "Description",\n    icon: Image(systemName: "star.fill")\n)';
  }
  return 'EBCarouselCard(\n    title: "Title",\n    description: "Description"\n)';
}

function buildComposeSnippet(cardKey, card) {
  var t = card.type || 'default';
  if (t === 'skeleton') return 'EBCarouselCard(\n    isLoading = true\n)';
  if (t === 'with-icon') {
    return 'EBCarouselCard(\n    title = "Title",\n    description = "Description",\n    icon = { Icon(Icons.Filled.Star, null) }\n)';
  }
  return 'EBCarouselCard(\n    title = "Title",\n    description = "Description"\n)';
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview SVG/HTML */
  var previewId = _ccardPreviewIds[cardStyle];
  var previewEl = previewId ? document.getElementById(previewId) : null;
  if (previewEl) previewEl.innerHTML = _ccardRender({ type: card.type });

  /* Update Properties readouts */
  var spType = document.querySelector('[data-sp="' + cardStyle + '-type"]');
  if (spType) spType.textContent = card.type;

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

function _ccardInit() {
  var ctx = document.getElementById('ccard-context-preview');
  if (ctx) ctx.innerHTML = _ccardContextMarkup();
  _ccardUpdate();

  var s1 = document.getElementById('ccard-spec-1');
  if (s1) s1.innerHTML = _ccardRender({type:'default'});

  var s2 = document.getElementById('ccard-spec-2');
  if (s2) s2.innerHTML = _ccardRender({type:'with-icon'});

  var s3 = document.getElementById('ccard-spec-3');
  if (s3) s3.innerHTML = _ccardRender({type:'skeleton'});

  /* Re-render DEV snippets via shared updater */
  Object.keys(_specCards).forEach(function(k){ updateSpecCard(k, 'type', _specCards[k].type); });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ccardInit);
else _ccardInit();

/* Re-init after Astro view-transition swaps */
document.addEventListener('astro:page-load', _ccardInit);
