/* Powers the live preview and the two spec cards on the voucher page.
 * Voucher (node 5372:38309) is Orientation × AssetSize × State — 12
 * versions — plus five booleans and five text properties.
 *
 * Orientation is the driving property, not AssetSize. The two are not one
 * card rotated: vertical stacks artwork over content and puts the discount
 * badge on the artwork; horizontal sets content beside artwork, floats the
 * badge on the artwork instead, carries a claim rail, and has no
 * DiscountSlot at all. AssetSize only resizes the artwork panel.
 *
 * Vertical orders title → description → price; horizontal orders
 * title → price → description. That is the component, not a simplification.
 */

function _vchEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

var _vchBadgeLabel = { default: 'Limited', used: 'Used', expired: 'Expired' };

var _VCH_TEXT = {
  title: 'Buy Load Pre-seeded SKU Voucher Sample',
  description: 'This is the description of the voucher.',
  validitydate: 'Validity: Dec 25 2022 - Jan 5 2023',
  price: 'PHP 100.00',
  originalprice: 'PHP 150.00'
};

/* The artwork panel. Its default content is a #F6F9FD rectangle under a
   raster placeholder image — the grey in that image is the one colour on
   the component bound to no token. Used and Expired lay a filter over it;
   both keep the notch. */
/* The claim rail lives inside the asset, not on top of it: the 96 wide
   panel is a 68 image plus a 28 rail, and the two notches are punched at
   the seam between them. Drawing the rail as an overlay is what put the
   badge and the notches on the wrong edges and centred the placeholder
   underneath the rail. */
function _vchAsset(o) {
  var horizontal = o.orientation === 'horizontal';
  var h = '<div class="eb-preview-vch__asset">';
  h += '<span class="eb-preview-vch__art">';
  h += '<span class="eb-preview-vch__placeholder">Placeholder image</span>';
  /* The root carries the state class; the filter only needs to exist. */
  if (o.state !== 'default') h += '<span class="eb-preview-vch__filter"></span>';
  h += '</span>';
  if (horizontal) {
    h += '<span class="eb-preview-vch__rail"><span>GET VOUCHER</span></span>';
    /* BadgeSlot floats at the artwork's top-left in horizontal. */
    if (o.hasbadge) {
      h += '<span class="eb-preview-vch__badge eb-preview-vch__badge--float">' +
           _vchBadgeLabel[o.state] + '</span>';
    }
  }
  h += '<span class="eb-preview-vch__notch eb-preview-vch__notch--a"></span>';
  h += '<span class="eb-preview-vch__notch eb-preview-vch__notch--b"></span>';
  /* DiscountSlot rides on the artwork, and only in vertical. */
  if (!horizontal && o.hasdiscountbadge) {
    h += '<span class="eb-preview-vch__discount">35% off</span>';
  }
  return h + '</div>';
}

function _vchPrices(o) {
  var h = '<div class="eb-preview-vch__prices">';
  h += '<span class="eb-preview-vch__price">' + _vchEscape(o.price) + '</span>';
  if (o.hasoriginalprice) {
    h += '<span class="eb-preview-vch__original">' + _vchEscape(o.originalprice) + '</span>';
  }
  return h + '</div>';
}

function _vchContent(o) {
  var vertical = o.orientation === 'vertical';
  var h = '<div class="eb-preview-vch__content">';
  /* Details is a 4px-gap frame in both orientations, but it holds
     different children. Vertical: BadgeSlot, title, description, prices —
     BadgeSlot sits inline above the title there. Horizontal: title and
     prices only, with the description outside it, and the badge floating
     on the artwork instead. Validity is outside Details either way, which
     is what lets the Auto distribution push it to the bottom edge. */
  h += '<div class="eb-preview-vch__details">';
  if (vertical) {
    if (o.hasbadge) {
      h += '<span class="eb-preview-vch__badge">' + _vchBadgeLabel[o.state] + '</span>';
    }
    h += '<div class="eb-preview-vch__title">' + _vchEscape(o.title) + '</div>';
    if (o.hasdescription) h += '<div class="eb-preview-vch__desc">' + _vchEscape(o.description) + '</div>';
    h += _vchPrices(o);
    h += '</div>';
  } else {
    h += '<div class="eb-preview-vch__title">' + _vchEscape(o.title) + '</div>';
    h += _vchPrices(o);
    h += '</div>';
    if (o.hasdescription) h += '<div class="eb-preview-vch__desc">' + _vchEscape(o.description) + '</div>';
  }
  if (o.hasvaliditydate) {
    h += '<div class="eb-preview-vch__validity">' + _vchEscape(o.validitydate) + '</div>';
  }
  return h + '</div>';
}

function _vchRender(opts) {
  var o = {
    orientation: opts.orientation || 'vertical',
    assetsize: opts.assetsize || 'small',
    state: opts.state || 'default',
    hasvaliditydate: opts.hasvaliditydate !== false,
    hasdescription: opts.hasdescription !== false,
    hasbadge: opts.hasbadge !== false,
    hasdiscountbadge: opts.hasdiscountbadge !== false,
    hasoriginalprice: opts.hasoriginalprice !== false,
    title: opts.title || _VCH_TEXT.title,
    description: opts.description || _VCH_TEXT.description,
    validitydate: opts.validitydate || _VCH_TEXT.validitydate,
    price: opts.price || _VCH_TEXT.price,
    originalprice: opts.originalprice || _VCH_TEXT.originalprice
  };

  var cls = ['eb-preview-vch', 'eb-preview-vch--' + o.orientation, 'eb-preview-vch--' + o.assetsize];
  if (o.state !== 'default') cls.push('eb-preview-vch--' + o.state);

  var h = '<div class="' + cls.join(' ') + '">';
  if (o.orientation === 'vertical') {
    h += _vchAsset(o);
    h += _vchContent(o);
  } else {
    h += _vchContent(o);
    h += _vchAsset(o);
  }
  return h + '</div>';
}

/* ── Live preview ─────────────────────────────────────────────────── */
function _vchRead() {
  var v = function (id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  var b = function (id) { return v(id, 'true') === 'true'; };
  return {
    orientation: v('vch-ctrl-orientation', 'vertical'),
    assetsize: v('vch-ctrl-assetsize', 'small'),
    state: v('vch-ctrl-state', 'default'),
    hasvaliditydate: b('vch-ctrl-hasvaliditydate'),
    hasdescription: b('vch-ctrl-hasdescription'),
    hasbadge: b('vch-ctrl-hasbadge'),
    hasdiscountbadge: b('vch-ctrl-hasdiscountbadge'),
    hasoriginalprice: b('vch-ctrl-hasoriginalprice'),
    title: v('vch-ctrl-title', _VCH_TEXT.title),
    description: v('vch-ctrl-description', _VCH_TEXT.description),
    validitydate: v('vch-ctrl-validitydate', _VCH_TEXT.validitydate),
    price: v('vch-ctrl-price', _VCH_TEXT.price),
    originalprice: v('vch-ctrl-originalprice', _VCH_TEXT.originalprice)
  };
}

function _vchUpdate() {
  var el = document.getElementById('vch-demo-preview');
  if (el) el.innerHTML = _vchRender(_vchRead());
}
window._vchUpdate = _vchUpdate;

/* ── Spec card state ──────────────────────────────────────────────── */
/* One card per Orientation value, in the panel's order. Everything else
   is a control — two cards describing 12 versions. */
var _specCards = {
  horizontal: { orientation: 'horizontal', assetsize: 'small', state: 'default',
    hasvaliditydate: 'true', hasdescription: 'true', hasbadge: 'true',
    hasdiscountbadge: 'true', hasoriginalprice: 'true' },
  vertical: { orientation: 'vertical', assetsize: 'small', state: 'default',
    hasvaliditydate: 'true', hasdescription: 'true', hasbadge: 'true',
    hasdiscountbadge: 'true', hasoriginalprice: 'true' }
};
window._specCards = _specCards;

function _vchCardOpts(card) {
  return {
    orientation: card.orientation,
    assetsize: card.assetsize,
    state: card.state,
    hasvaliditydate: card.hasvaliditydate !== 'false',
    hasdescription: card.hasdescription !== 'false',
    hasbadge: card.hasbadge !== 'false',
    hasdiscountbadge: card.hasdiscountbadge !== 'false',
    hasoriginalprice: card.hasoriginalprice !== 'false',
    title: card.title,
    description: card.description,
    validitydate: card.validitydate,
    price: card.price,
    originalprice: card.originalprice
  };
}

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('vch-spec-' + cardKey);
  if (host) host.innerHTML = _vchRender(_vchCardOpts(card));
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ───────────────────────────────────────────────── */
/* State IS a parameter here, unlike the interaction states on other
   components: Used and Expired are facts about the voucher that the
   caller holds and the card cannot work out for itself. The five
   booleans are not — each asks whether an optional is present, so the
   optional is the parameter and the boolean falls out of it. */
function getSnippet(cardKey, lang) {
  var card = _specCards[cardKey] || _specCards.vertical;
  var compose = lang === 'compose';
  var sep = compose ? ' <span class="syn-eq">=</span> ' : '<span class="syn-punc">:</span> ';
  var S = function (t) { return '<span class="syn-str">"' + t + '"</span>'; };
  var K = function (t) { return '<span class="syn-kw">' + t + '</span>'; };
  var T = function (t) { return '<span class="syn-type">' + t + '</span>'; };
  var P = function (t) { return '<span class="syn-punc">' + t + '</span>'; };
  var D = function (t) { return '<span class="syn-dot">' + t + '</span>'; };

  var cased = function (v) { return v.charAt(0).toUpperCase() + v.slice(1); };
  var enumVal = function (type, v) {
    return compose ? T(type) + P('.') + D(cased(v)) : D('.' + v);
  };

  var args = [
    'title' + sep + S(_VCH_TEXT.title),
    'price' + sep + S(_VCH_TEXT.price),
    'orientation' + sep + enumVal('EBVoucherOrientation', card.orientation),
    'assetSize' + sep + enumVal('EBVoucherAssetSize', card.assetsize)
  ];
  if (card.state !== 'default') args.push('state' + sep + enumVal('EBVoucherState', card.state));
  if (card.hasoriginalprice !== 'false') args.push('originalPrice' + sep + S(_VCH_TEXT.originalprice));
  if (card.hasdescription !== 'false') args.push('description' + sep + S(_VCH_TEXT.description));
  if (card.hasvaliditydate !== 'false') args.push('validityDate' + sep + S(_VCH_TEXT.validitydate));
  if (card.hasbadge === 'false') args.push('badge' + sep + K(compose ? 'null' : 'nil'));
  if (card.orientation === 'vertical' && card.hasdiscountbadge === 'false') {
    args.push('discountBadge' + sep + K(compose ? 'null' : 'nil'));
  }

  return T('EBVoucher') + P('(') + '\n    ' +
    args.join(P(',') + '\n    ') +
    '\n' + P(') {') + '\n    ' +
    T('EBVoucherAsset') + P('(') + 'image' + sep + S('voucher-hero') + P(')') + '\n' +
    P('}');
}
window.getSnippet = getSnippet;

function _vchInit() {
  _vchUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'orientation', _specCards[k].orientation);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _vchInit);
  else _vchInit();
  document.addEventListener('astro:page-load', _vchInit);
})();
