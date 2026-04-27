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
      s += '<rect x="' + (iconCx - 14) + '" y="' + (iconCy - 14) + '" width="28" height="28" rx="4" fill="#005CE5" opacity=".9"/>';
      s += '<text x="' + iconCx + '" y="' + (y + 50) + '" text-anchor="middle" fill="#072592" font-size="9" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui, sans-serif">Label</text>';
    }
  }
  s += '</svg>';
  return s;
}

function updateMenuGridDemo() {
  var r = parseInt(document.getElementById('mg-demo-row').value, 10) || 4;
  var c = parseInt(document.getElementById('mg-demo-col').value, 10) || 4;
  _mgDemo.row = r;
  _mgDemo.col = c;
  var el = document.getElementById('mg-demo-preview');
  if (el) el.innerHTML = _mgBuildSvg(r, c);
}

function _mgInitSpecCards() {
  var combos = [[2, 4, '2x4'], [4, 4, '4x4'], [5, 5, '5x5']];
  combos.forEach(function(t) {
    var el = document.getElementById('mg-preview-' + t[2]);
    if (el) el.innerHTML = _mgBuildSvg(t[0], t[1]);
  });
}

function _mgInit() {
  updateMenuGridDemo();
  _mgInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _mgInit);
} else {
  _mgInit();
}
