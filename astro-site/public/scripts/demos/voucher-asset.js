/* Auto-extracted from assessment-src/components/voucher-asset.html.
 * Powers the live-preview dropdowns/toggles for the voucher-asset component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs voucher-asset
 */
/* ── Voucher Asset JS ─────────────────────────────────────────────── */
function _vaTicket(w, h, label, badgeText, badgeRight, bg) {
  var notchR = 6;
  var cx = w / 2;
  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" style="display:block">';
  s += '<defs><clipPath id="va-clip-' + w + '-' + h + '"><path d="M8 0 H' + (w - 8) + ' Q' + w + ' 0 ' + w + ' 8 V' + (h / 2 - notchR) + ' A' + notchR + ' ' + notchR + ' 0 0 0 ' + w + ' ' + (h / 2 + notchR) + ' V' + (h - 8) + ' Q' + w + ' ' + h + ' ' + (w - 8) + ' ' + h + ' H8 Q0 ' + h + ' 0 ' + (h - 8) + ' V' + (h / 2 + notchR) + ' A' + notchR + ' ' + notchR + ' 0 0 0 0 ' + (h / 2 - notchR) + ' V8 Q0 0 8 0 Z" /></clipPath></defs>';
  s += '<g clip-path="url(#va-clip-' + w + '-' + h + ')">';
  s += '<rect width="' + w + '" height="' + h + '" fill="' + bg + '"/>';
  if (label) {
    s += '<text x="' + cx + '" y="' + (h / 2 - 8) + '" text-anchor="middle" fill="#445C85" font-size="11" font-weight="700" font-family="system-ui">' + label + '</text>';
  }
  s += '</g>';
  s += '<line x1="8" y1="' + (h / 2) + '" x2="' + (w - 8) + '" y2="' + (h / 2) + '" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2 3"/>';
  if (badgeText) {
    var bw = 52, bh = 20;
    var bx = w - bw;
    var by = h / 2 - bh / 2;
    s += '<g transform="translate(' + bx + ',' + by + ')">';
    s += '<path d="M0 0 H' + bw + ' V' + bh + ' H0 Q-0 ' + bh + ' -0 ' + (bh - 4) + ' V4 Q0 0 0 0 Z" fill="#1972F9"/>';
    s += '<rect x="0" y="0" width="' + bw + '" height="' + bh + '" rx="0" fill="#1972F9"/>';
    s += '<path d="M4 0 H' + bw + ' V' + bh + ' H4 Q0 ' + bh + ' 0 ' + (bh - 4) + ' V4 Q0 0 4 0 Z" fill="#1972F9"/>';
    s += '<text x="' + (bw / 2) + '" y="' + (bh / 2 + 4) + '" text-anchor="middle" fill="#FFFFFF" font-size="11" font-weight="700" font-family="system-ui">' + badgeText + '</text>';
    s += '</g>';
  }
  s += '</svg>';
  return s;
}

function _vaPhotoTicket(w, h, swatch1, swatch2, label, badgeText) {
  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" style="display:block">';
  var notchR = 6;
  s += '<defs>';
  s += '<clipPath id="va-pc-' + w + '-' + h + '-' + label + '"><path d="M8 0 H' + (w - 8) + ' Q' + w + ' 0 ' + w + ' 8 V' + (h / 2 - notchR) + ' A' + notchR + ' ' + notchR + ' 0 0 0 ' + w + ' ' + (h / 2 + notchR) + ' V' + (h - 8) + ' Q' + w + ' ' + h + ' ' + (w - 8) + ' ' + h + ' H8 Q0 ' + h + ' 0 ' + (h - 8) + ' V' + (h / 2 + notchR) + ' A' + notchR + ' ' + notchR + ' 0 0 0 0 ' + (h / 2 - notchR) + ' V8 Q0 0 8 0 Z" /></clipPath>';
  s += '<linearGradient id="vag-' + label + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + swatch1 + '"/><stop offset="1" stop-color="' + swatch2 + '"/></linearGradient>';
  s += '</defs>';
  s += '<g clip-path="url(#va-pc-' + w + '-' + h + '-' + label + ')">';
  s += '<rect width="' + w + '" height="' + h + '" fill="url(#vag-' + label + ')"/>';
  s += '<text x="' + (w / 2) + '" y="' + (h / 2 - 14) + '" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="10" font-weight="700" font-family="system-ui">' + label + '</text>';
  s += '</g>';
  s += '<line x1="8" y1="' + (h / 2) + '" x2="' + (w - 8) + '" y2="' + (h / 2) + '" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2 3"/>';
  if (badgeText) {
    var bw = 48, bh = 18;
    var bx = w - bw;
    var by = h / 2 - bh / 2;
    s += '<g transform="translate(' + bx + ',' + by + ')">';
    s += '<rect x="0" y="0" width="' + bw + '" height="' + bh + '" fill="#1972F9" rx="0"/>';
    s += '<text x="' + (bw / 2) + '" y="' + (bh / 2 + 4) + '" text-anchor="middle" fill="#FFFFFF" font-size="10" font-weight="700" font-family="system-ui">' + badgeText + '</text>';
    s += '</g>';
  }
  s += '</svg>';
  return s;
}

function _vaBuildPreview() {
  var cases = [
    { k: 'Placeholder', c1: '#C8CDD5', c2: '#B6BBC3', midfi: true },
    { k: 'Restaurant', c1: '#D63A2F', c2: '#8C1A15' },
    { k: 'Vacation', c1: '#2CA6C8', c2: '#0F5D75' },
    { k: 'Beverage', c1: '#D4A373', c2: '#7A4C24' },
    { k: 'Snack', c1: '#B87333', c2: '#6B3D15' },
    { k: 'Fashion', c1: '#9AA0A6', c2: '#4A4F55' },
    { k: 'Party', c1: '#5D3A9E', c2: '#2A1B4F' },
    { k: 'Meal', c1: '#6B8E23', c2: '#365010' },
    { k: 'Games', c1: '#1E3A5F', c2: '#0B1A33' },
    { k: 'Food', c1: '#3A2418', c2: '#1A0F0A' }
  ];
  var s = '<div style="display:flex;flex-direction:column;gap:14px;">';
  s += '<div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap;">';
  cases.slice(0, 9).forEach(function(c) {
    var col = '<div style="display:flex;flex-direction:column;gap:8px;align-items:center;">';
    if (c.midfi) {
      col += _vaTicket(110, 68, 'Placeholder', '35% off', true, '#D6D3DC');
      col += _vaTicket(110, 104, 'Placeholder', '35% off', true, '#D6D3DC');
    } else {
      col += _vaPhotoTicket(110, 68, c.c1, c.c2, c.k, '35% off');
      col += _vaPhotoTicket(110, 104, c.c1, c.c2, c.k, '35% off');
    }
    col += '<div style="color:#666;font-size:10px;font-family:system-ui;font-weight:600;">' + c.k.toLowerCase() + '</div>';
    col += '</div>';
    s += col;
  });
  s += '</div>';
  s += '<div style="display:flex;gap:12px;align-items:flex-start;flex-wrap:wrap;">';
  s += '<div style="display:flex;flex-direction:column;gap:6px;align-items:center;">';
  s += _vaTicket(226, 96, 'Placeholder Image', '35% off', true, '#D6D3DC');
  s += '<div style="color:#666;font-size:10px;font-family:system-ui;font-weight:600;">default · horizontal</div>';
  s += '</div>';
  s += '<div style="display:flex;flex-direction:column;gap:6px;align-items:center;">';
  s += _vaPhotoTicket(226, 96, '#3A2418', '#1A0F0A', 'Food', '35% off');
  s += '<div style="color:#666;font-size:10px;font-family:system-ui;font-weight:600;">food · horizontal</div>';
  s += '</div>';
  s += '</div>';
  s += '</div>';
  return s;
}

function _vaInit() {
  var el = document.getElementById('va-demo-preview');
  if (el) el.innerHTML = _vaBuildPreview();
}

/* ── Spec Card asset preview (single asset, controllable) ─────────── */
function _vaBuildAsset(status, hasBadge, badgeLabel) {
  var w = 144, h = 144;
  var notchR = 8;
  var bgGrad1 = '#3A2418', bgGrad2 = '#1A0F0A';
  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" style="display:block">';
  s += '<defs>';
  s += '<clipPath id="va-asset-clip"><path d="M8 0 H' + (w - 8) + ' Q' + w + ' 0 ' + w + ' 8 V' + (h / 2 - notchR) + ' A' + notchR + ' ' + notchR + ' 0 0 0 ' + w + ' ' + (h / 2 + notchR) + ' V' + (h - 8) + ' Q' + w + ' ' + h + ' ' + (w - 8) + ' ' + h + ' H8 Q0 ' + h + ' 0 ' + (h - 8) + ' V' + (h / 2 + notchR) + ' A' + notchR + ' ' + notchR + ' 0 0 0 0 ' + (h / 2 - notchR) + ' V8 Q0 0 8 0 Z" /></clipPath>';
  s += '<linearGradient id="va-asset-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + bgGrad1 + '"/><stop offset="1" stop-color="' + bgGrad2 + '"/></linearGradient>';
  s += '</defs>';
  s += '<g clip-path="url(#va-asset-clip)">';
  s += '<rect width="' + w + '" height="' + h + '" fill="url(#va-asset-grad)"/>';
  s += '<text x="' + (w / 2) + '" y="' + (h / 2 - 18) + '" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="11" font-weight="700" font-family="system-ui">Voucher Image</text>';
  if (status === 'Expired') {
    s += '<rect width="' + w + '" height="' + h + '" fill="#020E22" opacity="0.24"/>';
  }
  s += '</g>';
  s += '<line x1="8" y1="' + (h / 2) + '" x2="' + (w - 8) + '" y2="' + (h / 2) + '" stroke="#FFFFFF" stroke-width="1" stroke-dasharray="2 3"/>';
  if (hasBadge) {
    var bw = 64, bh = 20;
    var bx = 8, by = 8;
    var bg = (status === 'Expired') ? '#C2C5CA' : '#1972F9';
    s += '<g transform="translate(' + bx + ',' + by + ')">';
    s += '<rect x="0" y="0" width="' + bw + '" height="' + bh + '" fill="' + bg + '" rx="4"/>';
    s += '<text x="' + (bw / 2) + '" y="' + (bh / 2 + 4) + '" text-anchor="middle" fill="#FFFFFF" font-size="11" font-weight="700" font-family="system-ui">' + badgeLabel + '</text>';
    s += '</g>';
  }
  s += '</svg>';
  return s;
}

/* ── Spec Cards ──────────────────────────────────────────────────── */
var _vaSpecCards = {
  'default-with-discount': { status: 'Default', badge: 'Yes', badgeLabel: '50% OFF' },
  'no-badge':              { status: 'Default', badge: 'No',  badgeLabel: '–' },
  'expired-overlay':       { status: 'Expired', badge: 'Yes', badgeLabel: '50% OFF' }
};

/* Expose for shared utilities — `switchCodeTab` reads this. */
var _specCards = _vaSpecCards;
window._specCards = _specCards;

function _vaRenderPreview(cardStyle, card) {
  var el = document.getElementById('va-spec-' + cardStyle + '-preview');
  if (!el) return;
  el.innerHTML = _vaBuildAsset(card.status, card.badge === 'Yes', card.badgeLabel);
}

function buildSwiftSnippet(cardStyle, card) {
  return getSnippet(cardStyle, 'swift', card);
}
function buildComposeSnippet(cardStyle, card) {
  return getSnippet(cardStyle, 'compose', card);
}
function getSnippet(cardStyle, lang, card) {
  var hasBadge = card.badge === 'Yes';
  var isExpired = card.status === 'Expired';
  if (lang === 'swift') {
    var lines = 'EBVoucherAsset(\n    image: Image("voucher-cinema")';
    if (hasBadge) lines += ',\n    discountLabel: "' + card.badgeLabel + '"';
    if (isExpired) lines += ',\n    state: .expired';
    lines += '\n)';
    return lines;
  } else {
    var lines = 'EBVoucherAsset(\n    image = R.drawable.voucher_cinema';
    if (hasBadge) lines += ',\n    discountLabel = "' + card.badgeLabel + '"';
    if (isExpired) lines += ',\n    state = EBVoucherAssetState.Expired';
    lines += '\n)';
    return lines;
  }
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _vaSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Render preview */
  _vaRenderPreview(cardStyle, card);

  /* Update Properties readouts — data-sp="${demoKey}-${prop}" */
  var spStatus = document.querySelector('[data-sp="' + cardStyle + '-status"]');
  if (spStatus) spStatus.textContent = card.status;
  var spBadge = document.querySelector('[data-sp="' + cardStyle + '-badge"]');
  if (spBadge) spBadge.textContent = card.badge;

  /* Update DEV code — `[data-code-content="${cardStyle}"]` */
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

function _vaInitSpecCards() {
  Object.keys(_vaSpecCards).forEach(function(key) {
    _vaRenderPreview(key, _vaSpecCards[key]);
  });
}

function _vaInitAll() {
  _vaInit();
  _vaInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _vaInitAll);
else _vaInitAll();

/* ── Re-init after Astro view-transition swaps ─────────────── */
(function(){
  document.addEventListener('astro:page-load', _vaInitAll);
})();
