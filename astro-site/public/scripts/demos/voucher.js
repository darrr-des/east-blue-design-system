/* Powers the live preview and spec card on the voucher page.
 * Voucher (node 5372:38309) is AssetSize × Orientation × State — 12
 * versions.
 *
 * The two orientations are deliberately built differently, not the same
 * card rotated: vertical stacks artwork over content and carries a
 * discount badge; horizontal sets content beside artwork and carries a
 * fixed claim rail with no room for a discount.
 */

function _vchEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

var _vchBadgeLabel = { default: 'Limited', used: 'Used', expired: 'Expired' };

function _vchAsset(state) {
  var h = '<div class="eb-preview-vch__asset">';
  h += '<span class="eb-preview-vch__placeholder">Placeholder image</span>';
  /* Used dims the artwork; Expired washes it out. Both leave the notch. */
  if (state !== 'default') h += '<span class="eb-preview-vch__filter"></span>';
  h += '<span class="eb-preview-vch__notch eb-preview-vch__notch--a"></span>';
  h += '<span class="eb-preview-vch__notch eb-preview-vch__notch--b"></span>';
  return h + '</div>';
}

function _vchContent(opts) {
  var h = '<div class="eb-preview-vch__content">';
  if (opts.orientation === 'vertical') {
    h += '<span class="eb-preview-vch__badge">' + _vchBadgeLabel[opts.state] + '</span>';
  }
  h += '<div class="eb-preview-vch__title">' + _vchEscape(opts.title) + '</div>';
  h += '<div class="eb-preview-vch__desc">This is the description of the voucher.</div>';
  h += '<div class="eb-preview-vch__prices">';
  h += '<span class="eb-preview-vch__price">' + _vchEscape(opts.price) + '</span>';
  h += '<span class="eb-preview-vch__original">PHP 150.00</span>';
  h += '</div>';
  h += '<div class="eb-preview-vch__validity">Validity: Dec 25 2022 - Jan 5 2023</div>';
  return h + '</div>';
}

function _vchRender(opts) {
  var orientation = opts.orientation || 'vertical';
  var state = opts.state || 'default';
  var size = opts.size || 'small';

  var cls = ['eb-preview-vch', 'eb-preview-vch--' + orientation, 'eb-preview-vch--' + size];
  if (state !== 'default') cls.push('eb-preview-vch--' + state);

  var body = {
    orientation: orientation,
    state: state,
    title: opts.title || 'Buy Load Pre-seeded SKU Voucher Sample',
    price: opts.price || 'PHP 100.00'
  };

  var h = '<div class="' + cls.join(' ') + '">';
  if (orientation === 'vertical') {
    h += _vchAsset(state);
    h += _vchContent(body);
    /* Discount badge is vertical-only — horizontal has no room for it. */
    h += '<span class="eb-preview-vch__discount">35% off</span>';
  } else {
    h += _vchContent(body);
    h += _vchAsset(state);
    h += '<span class="eb-preview-vch__badge eb-preview-vch__badge--float">' + _vchBadgeLabel[state] + '</span>';
    h += '<span class="eb-preview-vch__rail"><span>GET VOUCHER</span></span>';
  }
  return h + '</div>';
}

function _vchUpdate() {
  var byId = function (id) { return document.getElementById(id); };
  var preview = byId('vch-demo-preview');
  if (!preview) return;
  preview.innerHTML = _vchRender({
    size: byId('vch-ctrl-size') ? byId('vch-ctrl-size').value : 'small',
    orientation: byId('vch-ctrl-orientation') ? byId('vch-ctrl-orientation').value : 'vertical',
    state: byId('vch-ctrl-state') ? byId('vch-ctrl-state').value : 'default',
    title: byId('vch-ctrl-title') ? byId('vch-ctrl-title').value : undefined,
    price: byId('vch-ctrl-price') ? byId('vch-ctrl-price').value : undefined
  });
}
window._vchUpdate = _vchUpdate;

/* ── Style tab spec card ─────────────────────────────────────────── */
var _specCards = { voucher: { size: 'small', orientation: 'vertical', state: 'default' } };
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('vch-spec-' + cardKey);
  if (host) host.innerHTML = _vchRender(card);
}
window.updateSpecCard = updateSpecCard;

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
