/* Powers the live-preview controls for the carousel-card component page.
 *
 * Tracks component set 5655:42547 — Variant (Default / With Icon / Discount)
 * × isLoading × isPressed, 8 versions.
 *
 * _ccardRender also accepts the legacy { type: 'default' | 'with-icon' |
 * 'skeleton' } shape so the Style-tab spec cards keep rendering until they
 * are rebuilt against the new architecture.
 */

function _ccardEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function _ccardIconSvg() {
  return '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true" width="16" height="16">' +
    '<circle cx="12" cy="12" r="10" fill="#C2C6CF"/>' +
  '</svg>';
}

/* Normalise legacy { type } options onto the current schema. */
function _ccardNormalise(opts) {
  var o = opts || {};
  var legacyType = o.type;
  var variant = o.variant;
  var isLoading = o.isLoading;

  if (!variant && legacyType) {
    variant = legacyType === 'skeleton' ? 'default' : legacyType;
  }
  if (isLoading === undefined) {
    isLoading = legacyType === 'skeleton';
  }

  return {
    variant:   variant || 'default',
    isLoading: isLoading === true || isLoading === 'true',
    isPressed: o.isPressed === true || o.isPressed === 'true',
    title:     o.title    || 'Title',
    desc:      o.desc     || 'Description here. Description here.',
    amount:    o.amount   || 'PHP 200.00',
    violator:  o.violator === undefined ? 'New' : o.violator
  };
}

function _ccardRender(opts) {
  var o = _ccardNormalise(opts);
  var isDiscount = o.variant === 'discount';

  var cls = 'eb-preview eb-preview-ccard eb-preview-ccard--' + o.variant;
  if (o.isPressed && !o.isLoading) cls += ' eb-preview-ccard--pressed';

  var html = '<div class="' + cls + '">';

  if (o.isLoading) {
    /* Skeleton — flat blocks, no violator, no pressed treatment. */
    html += '<div class="eb-preview-ccard__banner eb-preview-ccard__banner--skeleton"></div>';
    html += '<div class="eb-preview-ccard__content eb-preview-ccard__content--skeleton">';
    if (isDiscount) {
      html += '<div class="eb-preview-ccard__sk eb-preview-ccard__sk--label"></div>';
      html += '<div class="eb-preview-ccard__sk eb-preview-ccard__sk--amount"></div>';
    } else {
      html += '<div class="eb-preview-ccard__sk eb-preview-ccard__sk--title"></div>';
      html += '<div class="eb-preview-ccard__sk eb-preview-ccard__sk--desc"></div>';
      html += '<div class="eb-preview-ccard__sk eb-preview-ccard__sk--desc2"></div>';
    }
    html += '</div>';
    html += '</div>';
    return html;
  }

  /* Banner — image, dimmer, and shadow all live inside the Asset instance. */
  html += '<div class="eb-preview-ccard__banner">';
  html += '<div class="eb-preview-ccard__banner-img"></div>';
  html += '<div class="eb-preview-ccard__banner-dimmer"></div>';
  html += '<div class="eb-preview-ccard__banner-shadow"></div>';
  if (o.variant === 'with-icon') {
    html += '<div class="eb-preview-ccard__banner-icon">' + _ccardIconSvg() + '</div>';
  }
  if (o.violator) {
    html += '<div class="eb-preview-ccard__violator">' + _ccardEscape(o.violator) + '</div>';
  }
  html += '</div>';

  /* Content */
  if (isDiscount) {
    html += '<div class="eb-preview-ccard__content eb-preview-ccard__content--discount">';
    html += '<p class="eb-preview-ccard__label">' + _ccardEscape(o.title) + '</p>';
    html += '<p class="eb-preview-ccard__amount">' + _ccardEscape(o.amount) + '</p>';
    html += '</div>';
  } else {
    html += '<div class="eb-preview-ccard__content">';
    html += '<p class="eb-preview-ccard__title">' + _ccardEscape(o.title) + '</p>';
    html += '<p class="eb-preview-ccard__desc">' + _ccardEscape(o.desc).replace(/\. /g, '.<br>') + '</p>';
    html += '</div>';
  }

  html += '</div>';
  return html;
}

function _ccardContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--row eb-preview-stack--gap-sm">' +
    _ccardRender({variant:'default',   title:'Article',    desc:'Latest news. Read more.'}) +
    _ccardRender({variant:'with-icon', title:'Send Money', desc:'Local & abroad. Same day.'}) +
    _ccardRender({variant:'discount',  title:'GrabFood voucher', amount:'PHP 200.00'}) +
    _ccardRender({variant:'default',   isLoading:true}) +
  '</div>';
}

function _ccardUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('ccard-demo-preview');
  if (!preview) return;

  var variant = getVal('ccard-ctrl-variant', 'default');

  /* Amount only applies to Discount; description only to the other two. */
  var amountRow = document.getElementById('ccard-row-amount');
  if (amountRow) amountRow.style.display = variant === 'discount' ? '' : 'none';
  var descRow = document.getElementById('ccard-row-desc');
  if (descRow) descRow.style.display = variant === 'discount' ? 'none' : '';

  preview.innerHTML = _ccardRender({
    variant:   variant,
    isLoading: getVal('ccard-ctrl-isloading', 'false'),
    isPressed: getVal('ccard-ctrl-ispressed', 'false'),
    title:     getVal('ccard-ctrl-title', 'Title'),
    desc:      getVal('ccard-ctrl-desc', 'Description here. Description here.'),
    amount:    getVal('ccard-ctrl-amount', 'PHP 200.00'),
    violator:  getVal('ccard-ctrl-violator', 'New')
  });
}

/* ── Spec card state — drives per-card preview + DEV snippets ────────
   Still keyed on the legacy card keys; _ccardRender maps them forward. */
var _specCards = {
  'default':         { type: 'default' },
  'with-icon':       { type: 'with-icon' },
  'skeleton-loader': { type: 'skeleton' }
};
window._specCards = _specCards;

var _ccardPreviewIds = {
  'default':         'ccard-spec-1',
  'with-icon':       'ccard-spec-2',
  'skeleton-loader': 'ccard-spec-3'
};

function buildSwiftSnippet(cardKey, card) {
  var t = card.type || 'default';
  if (t === 'skeleton') return 'EBCarouselCard(isLoading: true)';
  if (t === 'discount') {
    return 'EBCarouselCard(\n    variant: .discount,\n    title: "Title",\n    amount: "PHP 200.00"\n)';
  }
  if (t === 'with-icon') {
    return 'EBCarouselCard(\n    title: "Title",\n    description: "Description",\n    icon: Image(systemName: "star.fill")\n)';
  }
  return 'EBCarouselCard(\n    title: "Title",\n    description: "Description"\n)';
}

function buildComposeSnippet(cardKey, card) {
  var t = card.type || 'default';
  if (t === 'skeleton') return 'EBCarouselCard(\n    isLoading = true\n)';
  if (t === 'discount') {
    return 'EBCarouselCard(\n    variant = EBCarouselCardVariant.Discount,\n    title = "Title",\n    amount = "PHP 200.00"\n)';
  }
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

  var previewId = _ccardPreviewIds[cardStyle];
  var previewEl = previewId ? document.getElementById(previewId) : null;
  if (previewEl) previewEl.innerHTML = _ccardRender({ type: card.type });

  var spType = document.querySelector('[data-sp="' + cardStyle + '-type"]');
  if (spType) spType.textContent = card.type;

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

  Object.keys(_specCards).forEach(function(k){ updateSpecCard(k, 'type', _specCards[k].type); });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ccardInit);
else _ccardInit();

/* Re-init after Astro view-transition swaps */
document.addEventListener('astro:page-load', _ccardInit);
