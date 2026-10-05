/* Menu Grid — live preview + spec card.
 * Set 5973:70111 (2026 Working File): Column = 2 | 3 | 4 | 5 × Row = 1 … 5
 * = 20 variants, each a 336-wide frame of Service Item instances.
 *
 * Geometry read off 5973:70256 (4 × 2), 5973:70287 (5 × 5) and 5973:70150
 * (2 × 4) on 2026-09-14 and checked against export_node_as_image: the icon
 * slot is hidden in every instance and the frame has no stroke or radius;
 * only the labels and, at Column=2, the row dividers render.
 *   Column 3 · 4 · 5 → Vertical tiles 104 / 77 / 64 × 72, label centred at y 54
 *   Column 2         → Horizontal tiles 158 × 64, label at x 72 / y 18,
 *                      1 px #D7E0EF dividers between rows
 */
var MG_W = 336, MG_PAD_V = 8, MG_GAP_V = 4;
var MG_LAYOUT = {
  2: { tileW: 158, tileH: 64, gap: 4, padH: 8, horizontal: true },
  3: { tileW: 104, tileH: 72, gap: 4, padH: 8 },
  4: { tileW: 77, tileH: 72, gap: 4, padH: 8 },
  5: { tileW: 64, tileH: 72, gap: 0.8, padH: 6.4 }
};

function _mgBuildSvg(cols, rows) {
  cols = Math.max(2, Math.min(5, parseInt(cols, 10) || 4));
  rows = Math.max(1, Math.min(5, parseInt(rows, 10) || 2));
  var L = MG_LAYOUT[cols];
  var h = MG_PAD_V * 2 + rows * L.tileH + (rows - 1) * MG_GAP_V;
  var font = "'Proxima Soft', system-ui, sans-serif";
  var s = '<svg class="eb-preview eb-preview-mg" width="' + MG_W + '" height="' + h + '" viewBox="0 0 ' + MG_W + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect width="' + MG_W + '" height="' + h + '" fill="#FFFFFF"/>';
  for (var r = 0; r < rows; r++) {
    var y = MG_PAD_V + r * (L.tileH + MG_GAP_V);
    if (L.horizontal && r > 0) s += '<rect x="0" y="' + (y - 2.5) + '" width="' + MG_W + '" height="1" fill="#D7E0EF"/>';
    for (var c = 0; c < cols; c++) {
      var x = L.padH + c * (L.tileW + L.gap);
      if (L.horizontal) s += '<text x="' + (x + 72) + '" y="' + (y + 24) + '" fill="#072592" font-size="12" font-weight="700" letter-spacing="0.5" font-family="' + font + '" dominant-baseline="central">Label</text>';
      else s += '<text x="' + (x + L.tileW / 2) + '" y="' + (y + 60) + '" text-anchor="middle" fill="#072592" font-size="12" font-weight="700" letter-spacing="0.5" font-family="' + font + '" dominant-baseline="central">Label</text>';
    }
  }
  return s + '</svg>';
}

/* ── Overview live preview ─────────────────────────────────────────── */
function _mgUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var el = document.getElementById('mg-demo-preview');
  if (el) el.innerHTML = _mgBuildSvg(getVal('mg-ctrl-column', '4'), getVal('mg-ctrl-row', '2'));
}
window._mgUpdate = _mgUpdate;

/* ── Spec card — one card: Column and Row are count axes ────────────── */
var _specCards = { 'menu-grid': { column: '4', row: '2' } };
window._specCards = _specCards;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var cols = parseInt(c.column, 10) || 4, rows = parseInt(c.row, 10) || 2;
  if (lang === 'swift') return 'EBMenuGrid(items: services, columns: ' + cols + ', rows: ' + rows + ')';
  return 'EBMenuGrid(\n    items = services,\n    columns = ' + cols + ',\n    rows = ' + rows + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('mg-spec-' + cardKey);
  if (host) host.innerHTML = _mgBuildSvg(card.column, card.row);
}
window.updateSpecCard = updateSpecCard;

function _mgInit() {
  _mgUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'column', _specCards[k].column); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _mgInit);
else _mgInit();
document.addEventListener('astro:page-load', _mgInit);
