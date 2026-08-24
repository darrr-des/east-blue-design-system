/* Powers the live preview on the ad-space component page.
 * Ad Space is one component (node 6507:74166) with a single Variant
 * setting: Receipt | Banner | Promo. Each version wraps a Container
 * around a ⤷ AssetSlot; Banner and Promo add a Content block beneath,
 * and Banner alone carries a #title above the asset.
 *
 * The Style tab's spec cards render static previews from the data file,
 * so nothing here drives them.
 */

var _adsVariants = {
  receipt: { hasTitle: false, hasContent: false },
  banner:  { hasTitle: true,  hasContent: true  },
  promo:   { hasTitle: false, hasContent: true  }
};

function _adsEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _adsRender(opts) {
  var key = opts.variant || 'banner';
  var v = _adsVariants[key] || _adsVariants.banner;
  var h = '<div class="eb-preview-adspace eb-preview-adspace--' + key + '">';
  if (v.hasTitle && opts.title) {
    h += '<div class="eb-preview-adspace__title">' + _adsEscape(opts.title) + '</div>';
  }
  var filled = opts.asset === 'filled';
  h += '<div class="eb-preview-adspace__asset' + (filled ? ' eb-preview-adspace__asset--filled' : '') + '">';
  h += filled ? '' : '<span class="eb-preview-adspace__asset-label">Asset</span>';
  h += '</div>';
  if (v.hasContent && (opts.header || opts.description)) {
    h += '<div class="eb-preview-adspace__content">';
    if (opts.header) {
      h += '<div class="eb-preview-adspace__header">' + _adsEscape(opts.header) + '</div>';
    }
    if (opts.description) {
      h += '<div class="eb-preview-adspace__description">' + _adsEscape(opts.description) + '</div>';
    }
    h += '</div>';
  }
  return h + '</div>';
}

function _adsUpdate() {
  var getVal = function (id, fallback) {
    var el = document.getElementById(id);
    return el ? el.value : fallback;
  };
  var preview = document.getElementById('ads-demo-preview');
  if (!preview) return;

  var variant = getVal('ads-ctrl-variant', 'banner');
  preview.innerHTML = _adsRender({
    variant: variant,
    title: getVal('ads-ctrl-title', 'Title'),
    header: getVal('ads-ctrl-header', 'Header'),
    description: getVal('ads-ctrl-description', 'Description Goes Here')
  });

  /* Only Banner has #title, and only Banner and Promo have the Content
     block — hide the controls that don't apply to the current version. */
  var shape = _adsVariants[variant] || _adsVariants.banner;
  var toggle = function (id, on) {
    var el = document.getElementById(id);
    if (el && el.parentElement) el.parentElement.style.display = on ? '' : 'none';
  };
  toggle('ads-ctrl-title', shape.hasTitle);
  toggle('ads-ctrl-header', shape.hasContent);
  toggle('ads-ctrl-description', shape.hasContent);
}
window._adsUpdate = _adsUpdate;

function _adsInit() {
  _adsUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'asset', _specCards[k].asset);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _adsInit);
  else _adsInit();
  document.addEventListener('astro:page-load', _adsInit);
})();

/* ── Style tab spec cards ────────────────────────────────────────────
   One card per version. The only thing that varies inside a card is
   what sits in the asset slot: the authoring placeholder, or real
   product media. */
var _specCards = {
  receipt: { asset: 'placeholder' },
  banner:  { asset: 'placeholder' },
  promo:   { asset: 'placeholder' }
};
window._specCards = _specCards;

var _adsCardCopy = {
  receipt: {},
  banner:  { title: 'Title', header: 'Header', description: 'Description Goes Here' },
  promo:   { header: 'Header', description: 'Description Goes Here' }
};

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('ads-spec-' + cardKey);
  if (!host) return;
  var copy = _adsCardCopy[cardKey] || {};
  host.innerHTML = _adsRender({
    variant: cardKey,
    title: copy.title,
    header: copy.header,
    description: copy.description,
    asset: card.asset
  });
}
window.updateSpecCard = updateSpecCard;
