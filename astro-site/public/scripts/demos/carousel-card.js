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
    /* Discount's label is the one place we show the two-line case that
       Figma's shared placeholder cannot: the Title property carries one
       value for every variant, so the component reads "Title" there. */
    html += '<p class="eb-preview-ccard__label">' + _ccardEscape(o.title).split('\n').join('<br>') + '</p>';
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

  /* One title input serves all three versions, so an untouched "Title"
     on Discount shows the two-line label instead — the case Figma's
     shared placeholder cannot demonstrate. Typing overrides it. */
  var titleVal = getVal('ccard-ctrl-title', 'Title');
  if (variant === 'discount' && titleVal === 'Title') titleVal = 'Label here\nLabel here';

  preview.innerHTML = _ccardRender({
    variant:   variant,
    isLoading: getVal('ccard-ctrl-isloading', 'false'),
    isPressed: getVal('ccard-ctrl-ispressed', 'false'),
    title:     titleVal,
    desc:      getVal('ccard-ctrl-desc', 'Description here. Description here.'),
    amount:    getVal('ccard-ctrl-amount', 'PHP 200.00'),
    violator:  getVal('ccard-ctrl-violator', 'New')
  });
}

/* ── Spec card state — drives per-card preview + DEV snippets ────────
   One card per `Variant` value. `isLoading`, `isPressed`, `hasViolator`
   and `Amount` are panel controls, defaulting to what Figma ships. */
var _specCards = {
  'default':   { variant: 'default',   isLoading: 'false', isPressed: 'false', hasViolator: 'true', amount: 'PHP 200.00' },
  'with-icon': { variant: 'with-icon', isLoading: 'false', isPressed: 'false', hasViolator: 'true', amount: 'PHP 200.00' },
  'discount':  { variant: 'discount',  isLoading: 'false', isPressed: 'false', hasViolator: 'true', amount: 'PHP 200.00', title: 'Label here\nLabel here' }
};
window._specCards = _specCards;

var _ccardPreviewIds = {
  'default':   'ccard-spec-1',
  'with-icon': 'ccard-spec-2',
  'discount':  'ccard-spec-3'
};

/* `true` unless a control has explicitly turned it off. */
function _ccardOn(card, prop, dflt) {
  var v = card[prop];
  if (v === undefined) return dflt;
  return v === true || v === 'true';
}

/* Both snippets are built from the same argument list so the two
   languages can never drift apart. */
var _ccardVariantCase = {
  swift:   { 'default': '.default', 'with-icon': '.withIcon', 'discount': '.discount' },
  compose: { 'default': 'Default',  'with-icon': 'WithIcon',  'discount': 'Discount'  }
};

/* Mirrors the canonical call documented on the Style and Code tabs:
   variant first, then content, then the optional flags, with the banner
   slot passed as a trailing closure — it is a required parameter. */
function _ccardArgs(card, sep, lang) {
  var variant = card.variant || 'default';
  var args = [];
  args.push('variant' + sep + (lang === 'swift'
    ? _ccardVariantCase.swift[variant]
    : 'EBCarouselCardVariant.' + _ccardVariantCase.compose[variant]));

  var title = (card.title || 'Title').split('\n').join(' ');
  args.push('title' + sep + '"' + title + '"');

  if (variant === 'discount') {
    args.push('amount' + sep + '"' + (card.amount || 'PHP 200.00') + '"');
  } else {
    args.push('description' + sep + '"' + (card.description || 'Description here. Description here.') + '"');
  }

  if (_ccardOn(card, 'hasViolator', true)) args.push('violator' + sep + '"New"');
  if (_ccardOn(card, 'isLoading', false)) args.push('isLoading' + sep + 'true');
  if (_ccardOn(card, 'isPressed', false)) args.push('isPressed' + sep + 'true');
  return args;
}

function buildSwiftSnippet(cardKey, card) {
  var args = _ccardArgs(card, ': ', 'swift');
  if ((card.variant || 'default') === 'with-icon') {
    args.push('icon: Image(systemName: "star.fill")');
  }
  return 'EBCarouselCard(\n    ' + args.join(',\n    ') + '\n) {\n    Image(ad.banner)\n}';
}

function buildComposeSnippet(cardKey, card) {
  var args = _ccardArgs(card, ' = ', 'compose');
  if ((card.variant || 'default') === 'with-icon') {
    args.push('icon = { Icon(Icons.Filled.Star, null) }');
  }
  return 'EBCarouselCard(\n    ' + args.join(',\n    ') +
         '\n) {\n    AsyncImage(model = ad.banner, contentDescription = null)\n}';
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
  if (previewEl) {
    previewEl.innerHTML = _ccardRender({
      variant:   card.variant,
      isLoading: card.isLoading,
      isPressed: card.isPressed,
      title:     card.title,
      desc:      card.description,
      amount:    card.amount,
      violator:  _ccardOn(card, 'hasViolator', true) ? 'New' : ''
    });
  }

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

  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'variant', _specCards[k].variant);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ccardInit);
else _ccardInit();

/* Re-init after Astro view-transition swaps */
document.addEventListener('astro:page-load', _ccardInit);
