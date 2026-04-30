/* Auto-extracted from assessment-src/components/date-picker.html.
 * Powers the live-preview dropdowns/toggles for the date-picker component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs date-picker
 */
/* ── Date Picker Component JS ──────────────────────────────────────── */
var _dpDemo = { state: 'Default', filled: 'false', disabled: 'No' };

function _dpBuildSvg(state, filled, disabled) {
  var isDisabled = disabled === 'Yes';
  var isActive = state === 'Active' && !isDisabled;
  var isFilled = filled === 'true';
  var w = 360;
  var borderColor = isDisabled ? 'none' : (isActive ? '#005CE5' : '#D7E0EF');
  var borderWidth = isActive ? '2' : '1';
  var bg = isDisabled ? '#EEF2F9' : '#FFFFFF';
  var valueColor = isDisabled ? '#90A8D0' : '#0A2757';
  var placeholderColor = '#90A8D0';
  var iconColor = isDisabled ? '#9BC5FD' : '#005CE5';
  var text = isFilled ? '03/05/2026' : 'Value';
  var textColor = isFilled ? valueColor : placeholderColor;
  var totalH = isActive ? 430 : 68;
  var s = '<svg width="' + w + '" height="' + totalH + '" viewBox="0 0 ' + w + ' ' + totalH + '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  /* shadow filter for panel */
  s += '<defs><filter id="dpShadow" x="-4" y="64" width="' + (w + 8) + '" height="370" filterUnits="userSpaceOnUse"><feDropShadow dx="0" dy="6" stdDeviation="6" flood-color="#020E22" flood-opacity="0.16"/></filter></defs>';

  /* header label */
  s += '<text x="2" y="12" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="#0A2757">Label</text>';

  /* trigger field */
  var strokeAttr = borderColor === 'none' ? '' : ' stroke="' + borderColor + '" stroke-width="' + borderWidth + '"';
  s += '<rect x="0.5" y="22.5" width="' + (w - 1) + '" height="45" rx="5.5" fill="' + bg + '"' + strokeAttr + '/>';
  s += '<text x="12" y="50" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="' + textColor + '">' + text + '</text>';

  /* calendar glyph — simple vector placeholder (matches the raster source visually) */
  var gx = w - 36;
  s += '<rect x="' + (gx + 4) + '" y="31" width="20" height="20" rx="3" stroke="' + iconColor + '" stroke-width="1.6" fill="none"/>';
  s += '<line x1="' + (gx + 4) + '" y1="37" x2="' + (gx + 24) + '" y2="37" stroke="' + iconColor + '" stroke-width="1.6"/>';
  s += '<line x1="' + (gx + 9) + '" y1="28" x2="' + (gx + 9) + '" y2="32" stroke="' + iconColor + '" stroke-width="1.6" stroke-linecap="round"/>';
  s += '<line x1="' + (gx + 19) + '" y1="28" x2="' + (gx + 19) + '" y2="32" stroke="' + iconColor + '" stroke-width="1.6" stroke-linecap="round"/>';

  if (isActive) {
    /* calendar panel */
    var py = 70;
    var ph = 358;
    s += '<rect x="0" y="' + py + '" width="' + w + '" height="' + ph + '" rx="8" fill="#FFFFFF" stroke="#E5EBF4" stroke-width="1" filter="url(#dpShadow)"/>';

    /* month header */
    var mhy = py + 28;
    s += '<path d="M20 ' + (mhy - 4) + 'l-5 5 5 5" stroke="#005CE5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
    s += '<text x="' + (w / 2) + '" y="' + (mhy + 5) + '" text-anchor="middle" font-family="Proxima Soft, system-ui" font-size="18" font-weight="700" fill="#0A2757">Month / Year</text>';
    s += '<path d="M' + (w - 20) + ' ' + (mhy - 4) + 'l5 5-5 5" stroke="#005CE5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';

    /* weekday row */
    var wdays = ['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa'];
    var rowY = py + 60;
    var colW = (w - 32) / 7;
    for (var wd = 0; wd < 7; wd++) {
      s += '<text x="' + (16 + colW * wd + colW / 2) + '" y="' + (rowY + 12) + '" text-anchor="middle" font-family="Proxima Soft, system-ui" font-size="14" font-weight="700" fill="#0A2757">' + wdays[wd] + '</text>';
    }

    /* date grid (5 rows of 7) */
    var startRow = py + 92;
    var rowH = 40;
    var todayIdx = 4; /* Thursday of row 0 */
    var dates = [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, '1', '2', '3', '4']
    ];
    for (var r = 0; r < 5; r++) {
      for (var c = 0; c < 7; c++) {
        var cx = 16 + colW * c + colW / 2;
        var cy = startRow + r * rowH;
        var val = dates[r][c];
        var isTrailing = (r === 4 && c >= 3);
        var color = isTrailing ? '#C2CFE5' : '#0A2757';
        var isToday = (r === 0 && c === todayIdx);
        if (isToday) {
          s += '<circle cx="' + cx + '" cy="' + (cy + 6) + '" r="14" fill="none" stroke="#005CE5" stroke-width="1.5"/>';
          color = '#005CE5';
        }
        s += '<text x="' + cx + '" y="' + (cy + 11) + '" text-anchor="middle" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="' + color + '">' + val + '</text>';
      }
    }
  }

  s += '</svg>';
  return s;
}

function updateDatePickerDemo() {
  var el = document.getElementById('dp-demo-preview');
  if (el) el.innerHTML = _dpBuildSvg(_dpDemo.state, _dpDemo.filled, _dpDemo.disabled);
}

/* ── Spec card state — drives per-card preview + DEV snippets ──────── */
var _specCards = {
  'dp-default-empty':  { state: 'Default', filled: 'false', disabled: 'No' },
  'dp-default-filled': { state: 'Default', filled: 'true',  disabled: 'No' },
  'dp-active-empty':   { state: 'Active',  filled: 'false', disabled: 'No' },
  'dp-active-filled':  { state: 'Active',  filled: 'true',  disabled: 'No' },
  'dp-disabled':       { state: 'Default', filled: 'false', disabled: 'Yes' }
};
window._specCards = _specCards;

/* Mapping demoKey → cardKey (used to find spec-card root in DOM) */
var _dpCardKeys = {
  'dp-default-empty':  'dp-spec-default-empty',
  'dp-default-filled': 'dp-spec-default-filled',
  'dp-active-empty':   'dp-spec-active-empty',
  'dp-active-filled':  'dp-spec-active-filled',
  'dp-disabled':       'dp-spec-disabled'
};

function buildSwiftSnippet(cardKey, card) {
  if (card.disabled === 'Yes') {
    return 'EBDatePicker($selectedDate)\n    .disabled(true)';
  }
  var lines = ['EBDatePicker($selectedDate'];
  if (card.filled !== 'true') lines[0] += ', placeholder: "Select a date"';
  lines[0] += ')';
  if (card.state === 'Active') lines.push('    .ebFocused(true)');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  var lines = ['EBDatePicker('];
  lines.push('    date = selectedDate,');
  lines.push('    onDateChange = { },');
  if (card.filled !== 'true' && card.disabled !== 'Yes') lines.push('    placeholder = "Select a date",');
  if (card.state === 'Active') lines.push('    focused = true,');
  if (card.disabled === 'Yes') lines.push('    enabled = false,');
  /* Strip trailing comma */
  var last = lines[lines.length - 1];
  if (last.charAt(last.length - 1) === ',') lines[lines.length - 1] = last.slice(0, -1);
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview SVG — locate the .spec-card-preview inside the spec card root */
  var rootKey = _dpCardKeys[cardStyle];
  if (rootKey) {
    var rootEl = document.getElementById('spec-card-' + rootKey);
    if (rootEl) {
      var previewEl = rootEl.querySelector('.spec-card-preview');
      if (previewEl) previewEl.innerHTML = _dpBuildSvg(card.state, card.filled, card.disabled);
    }
  }

  /* Update Properties readouts */
  ['state', 'filled', 'disabled'].forEach(function(p) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + p + '"]');
    if (el) el.textContent = card[p];
  });

  /* Update DEV code */
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

/* Legacy alias — preserve old function name in case other code uses it */
function updateDatePickerSpecCard(key) {
  /* Legacy: triggered by old onclick handlers */
  var demoKey = 'dp-' + key;
  var card = _specCards[demoKey];
  if (card) updateSpecCard(demoKey, 'state', card.state);
}

function _dpInitSpecCards() {
  Object.keys(_specCards).forEach(function(k){ updateSpecCard(k, 'state', _specCards[k].state); });
}

function _dpInit() {
  updateDatePickerDemo();
  _dpInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _dpInit);
} else {
  _dpInit();
}

/* Re-init after Astro view-transition swaps */
document.addEventListener('astro:page-load', _dpInit);
