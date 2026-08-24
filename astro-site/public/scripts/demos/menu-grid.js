/* Auto-extracted from assessment-src/components/menu-grid.html.
 * Powers the live-preview dropdowns/toggles for the menu-grid component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs menu-grid
 */
/* ── Menu Grid Component JS ───────────────────────────────────────── */
/* Geometry measured off the Figma component set (node 5973:70111).
 * The container is always 336 wide; the tile width, horizontal gap and
 * side padding are per-column-count values rather than one formula —
 * Column=5 packs 64-wide tiles at a 0.8 gap with 6.4 side padding, which
 * a uniform (320 - gaps) / n expression does not reproduce. Each row of
 * the table sums back to 336 exactly.
 *
 * Column=2 renders the Service Item child at Orientation=Horizontal
 * (158 × 64, icon left of the label). Column=3 | 4 | 5 renders
 * Orientation=Vertical (72 tall, icon above the label). That switch is
 * driven by the column count alone — Menu Grid exposes no orientation
 * property of its own.
 */
var _mgDemo = { row: 2, col: 4 };

var MG_CONTAINER_W = 336;
var MG_PAD_V = 8;
var MG_GAP_V = 4;
var MG_ICON = 48;

var MG_LAYOUT = {
  2: { tileW: 158, tileH: 64, gap: 4, padH: 8 },
  3: { tileW: 104, tileH: 72, gap: 4, padH: 8 },
  4: { tileW: 77, tileH: 72, gap: 4, padH: 8 },
  5: { tileW: 64, tileH: 72, gap: 0.8, padH: 6.4 }
};

function _mgLayout(cols) {
  return MG_LAYOUT[cols] || MG_LAYOUT[4];
}

function _mgOrientation(cols) {
  return cols === 2 ? 'horizontal' : 'vertical';
}

function _mgTileW(cols) {
  return _mgLayout(cols).tileW;
}

function _mgTileH(cols) {
  return _mgLayout(cols).tileH;
}

function _mgBuildSvg(cols, rows) {
  var L = _mgLayout(cols);
  var tileW = L.tileW;
  var tileH = L.tileH;
  var horizontal = _mgOrientation(cols) === 'horizontal';
  var w = MG_CONTAINER_W;
  var h = MG_PAD_V * 2 + rows * tileH + (rows - 1) * MG_GAP_V;
  var font = "'Proxima Soft', system-ui, sans-serif";

  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="6" fill="#FFFFFF" stroke="#E5EBF4" stroke-width="1"/>';

  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      var x = L.padH + c * (tileW + L.gap);
      var y = MG_PAD_V + r * (tileH + MG_GAP_V);
      if (horizontal) {
        /* icon left, label right — Container is inset 12 from the tile edge */
        s += '<circle cx="' + (x + 12 + MG_ICON / 2) + '" cy="' + (y + tileH / 2) + '" r="' + (MG_ICON / 2) + '" fill="#E5EBF4"/>';
        s += '<text x="' + (x + 12 + MG_ICON + 12) + '" y="' + (y + tileH / 2 + 4) + '" fill="#072592" font-size="12" font-weight="700" letter-spacing="0.5" font-family="' + font + '">Label</text>';
      } else {
        /* icon above, label centred beneath */
        s += '<circle cx="' + (x + tileW / 2) + '" cy="' + (y + MG_ICON / 2) + '" r="' + (MG_ICON / 2) + '" fill="#E5EBF4"/>';
        s += '<text x="' + (x + tileW / 2) + '" y="' + (y + 63) + '" text-anchor="middle" fill="#072592" font-size="12" font-weight="700" letter-spacing="0.5" font-family="' + font + '">Label</text>';
      }
    }
  }
  s += '</svg>';
  return s;
}

function updateMenuGridDemo() {
  var rEl = document.getElementById('mg-demo-row');
  var cEl = document.getElementById('mg-demo-col');
  var r = rEl ? parseInt(rEl.value, 10) || 2 : 2;
  var c = cEl ? parseInt(cEl.value, 10) || 4 : 4;
  _mgDemo.row = r;
  _mgDemo.col = c;
  var el = document.getElementById('mg-demo-preview');
  if (el) el.innerHTML = _mgBuildSvg(c, r);

  /* Column=2 flips the Service Item child to Orientation=Horizontal —
     surface it as a live readout so the coupling is visible. */
  var oEl = document.getElementById('mg-demo-orientation');
  if (oEl) oEl.textContent = _mgOrientation(c) === 'horizontal' ? 'Horizontal' : 'Vertical';
}

/* ── Menu Grid Spec Cards ─────────────────────────────────────────── */
var _mgSpecCards = {
  r2c4: { row: '2', col: '4' },
  r4c4: { row: '4', col: '4' },
  r5c5: { row: '5', col: '5' }
};

var _specCards = _mgSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var rows = parseInt(card.row, 10);
  var cols = parseInt(card.col, 10);
  return 'EBMenuGrid(items: services, rows: ' + rows + ', columns: ' + cols + ')';
}

function buildComposeSnippet(type, card) {
  var rows = parseInt(card.row, 10);
  var cols = parseInt(card.col, 10);
  return 'EBMenuGrid(\n    items = services,\n    rows = ' + rows + ',\n    columns = ' + cols + '\n)';
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _mgSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  var rows = parseInt(card.row, 10);
  var cols = parseInt(card.col, 10);

  /* Update preview — find the SVG inside the spec card preview */
  var specCardEl = document.getElementById('spec-card-mg-spec-' + _mgKeyToLegacy(cardStyle));
  if (specCardEl) {
    var previewBody = specCardEl.querySelector('.spec-preview-body');
    if (previewBody) previewBody.innerHTML = _mgBuildSvg(cols, rows);
  }

  /* Update Properties readouts via [data-sp] */
  var spRow = document.querySelector('[data-sp="' + cardStyle + '-row"]');
  if (spRow) spRow.textContent = String(rows);
  var spCol = document.querySelector('[data-sp="' + cardStyle + '-col"]');
  if (spCol) spCol.textContent = String(cols);

  /* Update Layout section — `Cells` row is a CALCULATED value (rows ×
     cols), which Plan A's `variants` map can't express (it's a lookup
     table, not a computed expression). This is a documented exception
     to the Plan A migration: keep the JS rebuild for menu-grid Layout. */
  var layoutEl = document.getElementById('spec-' + cardStyle + '-layout');
  if (layoutEl) {
    var L = _mgLayout(cols);
    var orientation = _mgOrientation(cols) === 'horizontal' ? 'Horizontal' : 'Vertical';
    var lh = '<div class="spec-detail-label">Layout</div><div class="spec-props">';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Cells</span><span class="spec-prop-val mono">' + cols + ' × ' + rows + ' = ' + (rows * cols) + '</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Item orientation</span><span class="spec-prop-val mono">' + orientation + '</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Tile size</span><span class="spec-prop-val mono">' + L.tileW + ' × ' + L.tileH + '</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Icon slot</span><span class="spec-prop-val mono">48 × 48</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Container width</span><span class="spec-prop-val mono">336</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Padding</span><span class="spec-prop-val mono">' + L.padH + ' horizontal · ' + MG_PAD_V + ' vertical</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Gap</span><span class="spec-prop-val mono">' + L.gap + ' × ' + MG_GAP_V + '</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Border radius</span><span class="spec-prop-val mono">radius/radius-2 (6px)</span></div>';
    lh += '</div>';
    layoutEl.innerHTML = lh;
  }

  /* Update DEV code via [data-code-content] */
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
window.updateSpecCard = updateSpecCard;

function _mgKeyToLegacy(k) {
  if (k === 'r2c4') return '2x4';
  if (k === 'r4c4') return '4x4';
  if (k === 'r5c5') return '5x5';
  return k;
}

function _mgInit() {
  updateMenuGridDemo();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _mgInit);
} else {
  _mgInit();
}

(function(){
  document.addEventListener('astro:page-load', _mgInit);
})();
