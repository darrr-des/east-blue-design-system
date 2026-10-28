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

/* The artwork panel is drawn from Figma's own layer data for the chosen variant
   (public/playground/voucher.json — the data the Playground uses): the placeholder image,
   the claim rail with its rotated button, the Stub Cutout mask that punches the notches and
   the dashed seam, and the Used / Expired filter. Each variant carries different artwork,
   so it is not redrawn in CSS. The badges float over it and stay HTML. */
var _vchData = null, _vchLoading = false;
function _vchRgba(p) {
  var h = p.hex.replace('#', ''), a = p.alpha == null ? 1 : p.alpha;
  return 'rgba(' + parseInt(h.slice(0, 2), 16) + ',' + parseInt(h.slice(2, 4), 16) + ',' + parseInt(h.slice(4, 6), 16) + ',' + a + ')';
}
function _vchArtNode(n, D, style) {
  if (n.hidden) return '';
  var st = 'position:absolute;left:' + n.x + 'px;top:' + n.y + 'px;width:' + n.w + 'px;height:' + n.h + 'px;' + (style || '');
  if (n.mask) st += 'opacity:0;';
  else if (n.opacity != null) st += 'opacity:' + n.opacity + ';';
  if (n.blend) st += 'mix-blend-mode:' + n.blend + ';';
  if (n.graphic) {
    if (n.img != null) return '<img alt="" src="' + D.images[n.img] + '" style="' + st + '">';
    if (n.svg != null) return '<div style="' + st + '">' + D.svgs[n.svg].replace(/<svg /, '<svg style="display:block;width:100%;height:100%" ') + '</div>';
    return '';
  }
  /* Figma stacks fills bottom-up (the Used rail is white under 40% overlay): draw them all. */
  var fills = (n.fills || []).map(_vchRgba).reverse().map(function (c) { return 'linear-gradient(' + c + ',' + c + ')'; });
  var h = '<div style="' + st + (fills.length ? 'background:' + fills.join(',') + ';' : '') +
    (n.radius ? 'border-radius:' + n.radius.join('px ') + 'px;' : '') + (n.clip ? 'overflow:hidden;' : '') + '">';
  var kids = n.children || [], mask = null;
  kids.forEach(function (c) {
    var extra = '';
    if (mask) {
      var src = mask.img != null ? D.images[mask.img] : null;
      if (src) {
        var pos = (mask.x - c.x) + 'px ' + (mask.y - c.y) + 'px', size = mask.w + 'px ' + mask.h + 'px';
        extra = '-webkit-mask-image:url(' + src + ');mask-image:url(' + src + ');-webkit-mask-size:' + size + ';mask-size:' + size +
          ';-webkit-mask-position:' + pos + ';mask-position:' + pos + ';-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;';
      }
    }
    h += _vchArtNode(c, D, extra);
    if (c.mask) mask = c;
  });
  return h + '</div>';
}
function _vchArt(o) {
  if (!_vchData) return '';
  var cap = function (v) { return v.charAt(0).toUpperCase() + v.slice(1); };
  var name = 'Orientation=' + cap(o.orientation) + ', AssetSize=' + cap(o.assetsize) + ', State=' + cap(o.state);
  var v = _vchData.variants.filter(function (x) { return x.name === name; })[0];
  if (!v) return '';
  var find = function (n) { if (n.name === 'Voucher Asset') return n; for (var i = 0; i < (n.children || []).length; i++) { var f = find(n.children[i]); if (f) return f; } return null; };
  var a = find(v.tree);
  if (!a) return '';
  var copy = {}; for (var k in a) copy[k] = a[k];
  copy.x = 0; copy.y = 0;
  var h = _vchArtNode(copy, _vchData, '');
  /* Used / Expired: a Filter layer sits over the artwork at the component level. */
  (v.tree.children || []).forEach(function (c) {
    if (c.name !== 'Filter') return;
    var f = {}; for (var k in c) f[k] = c[k];
    f.x = c.x - a.x; f.y = c.y - a.y;
    h += _vchArtNode(f, _vchData, '');
  });
  return h;
}

function _vchAsset(o) {
  var horizontal = o.orientation === 'horizontal';
  var h = '<div class="eb-preview-vch__asset">' + _vchArt(o);
  /* BadgeSlot floats at the artwork's top-left in horizontal. */
  if (horizontal && o.hasbadge) h += '<span class="eb-preview-vch__badge eb-preview-vch__badge--float">' + _vchBadgeLabel[o.state] + '</span>';
  /* DiscountSlot rides on the artwork, and only in vertical. */
  if (!horizontal && o.hasdiscountbadge) h += '<span class="eb-preview-vch__discount">35% off</span>';
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
  if (!el) return;
  el.innerHTML = _vchRender(_vchRead());
  if (_vchData || _vchLoading) return;
  _vchLoading = true;
  var pg = document.getElementById('pg-data');
  fetch((pg && pg.getAttribute('data-src')) || '/playground/voucher.json').then(function (r) { return r.json(); })
    .then(function (d) { _vchData = d; _vchUpdate(); if (typeof _vchRefreshCards === 'function') _vchRefreshCards(); });
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
  var sep = compose ? ' = ' : ': ';
  var S = function (t) { return '"' + t + '"'; };
  var K = function (t) { return '' + t + ''; };
  var T = function (t) { return '' + t + ''; };
  var P = function (t) { return '' + t + ''; };
  var D = function (t) { return '' + t + ''; };

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
