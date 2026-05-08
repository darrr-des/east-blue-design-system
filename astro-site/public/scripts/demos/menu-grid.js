/* Auto-extracted from assessment-src/components/menu-grid.html.
 * Powers the live-preview dropdowns/toggles for the menu-grid component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs menu-grid
 */
/* ── Menu Grid Component JS ───────────────────────────────────────── */
var _mgDemo = { row: 4, col: 4 };

function _mgBuildSvg(rows, cols) {
  var cellW = 64;
  var cellH = 56;
  var gap = 4;
  var padH = 8;
  var padT = 10;
  var padB = 6;
  var w = padH * 2 + cols * cellW + (cols - 1) * gap;
  var h = padT + padB + rows * cellH + (rows - 1) * gap;
  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="6" fill="#FFFFFF" stroke="#E5EBF4" stroke-width="1"/>';
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      var x = padH + c * (cellW + gap);
      var y = padT + r * (cellH + gap);
      var iconCx = x + cellW / 2;
      var iconCy = y + 20;
      s += '<circle cx="' + iconCx + '" cy="' + iconCy + '" r="14" fill="#E8EBF0"/>';
      s += '<text x="' + iconCx + '" y="' + (y + 50) + '" text-anchor="middle" fill="#072592" font-size="9" font-weight="700" font-family="\'Proxima Soft\', system-ui, sans-serif">Label</text>';
    }
  }
  s += '</svg>';
  return s;
}

function updateMenuGridDemo() {
  var rEl = document.getElementById('mg-demo-row');
  var cEl = document.getElementById('mg-demo-col');
  var r = rEl ? parseInt(rEl.value, 10) || 4 : 4;
  var c = cEl ? parseInt(cEl.value, 10) || 4 : 4;
  _mgDemo.row = r;
  _mgDemo.col = c;
  var el = document.getElementById('mg-demo-preview');
  if (el) el.innerHTML = _mgBuildSvg(r, c);
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
    if (previewBody) previewBody.innerHTML = _mgBuildSvg(rows, cols);
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
    var lh = '<div class="spec-detail-label">Layout</div><div class="spec-props">';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Cells</span><span class="spec-prop-val mono">' + rows + ' × ' + cols + ' = ' + (rows * cols) + '</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Tile size</span><span class="spec-prop-val mono">square (auto by column count)</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Icon size</span><span class="spec-prop-val mono">40 × 40</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Padding</span><span class="spec-prop-val mono">10 vertical · 8 horizontal</span></div>';
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
