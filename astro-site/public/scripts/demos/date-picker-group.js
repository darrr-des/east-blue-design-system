/* Auto-extracted from assessment-src/components/date-picker-group.html.
 * Powers the live-preview dropdowns/toggles for the date-picker-group component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs date-picker-group
 */
/* ── Date Picker - Group Component JS ───────────────────────────────── */
var _dpgDemo = { type: 'Date' };

function _dpgChevron(dir) {
  /* Returns a small SVG chevron path. dir = 'left' or 'right'. */
  if (dir === 'left') {
    return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 7l-5 5 5 5" stroke="#005CE5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }
  return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M10 7l5 5-5 5" stroke="#005CE5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function _dpgSurfaceOpen() {
  /* Opens the 360-wide panel card. */
  return '<div style="width:360px;background:#FFFFFF;border:1px solid #E5EBF4;border-radius:0 0 8px 8px;box-shadow:0 6px 12px -8px rgba(2,14,34,.16);padding:16px;box-sizing:border-box;font-family:\'Proxima Soft\', system-ui, sans-serif;">';
}

function _dpgHeader(label, showPrev, showNext) {
  var prev = showPrev ? _dpgChevron('left') : '<div style="width:24px;height:24px;"></div>';
  var next = showNext ? _dpgChevron('right') : '<div style="width:24px;height:24px;"></div>';
  return ''
    + '<div style="display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:8px;">'
    +   prev
    +   '<div style="font-weight:700;font-size:18px;line-height:18px;color:#0A2757;letter-spacing:.25px;">' + label + '</div>'
    +   next
    + '</div>';
}

function _dpgDateGrid() {
  /* 7 weekday labels + 6 rows of 7 day cells (42 total). */
  var weekdays = ['Su','M','T','W','Th','F','Sa'];
  var s = '';
  /* weekday row */
  s += '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:0;width:100%;margin-bottom:8px;">';
  weekdays.forEach(function(d) {
    s += '<div style="width:32px;height:32px;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;color:#0A2757;font-weight:700;font-size:14px;line-height:14px;letter-spacing:.25px;">' + d + '</div>';
  });
  s += '</div>';
  /* 6 weeks, approximate March layout: first row leads with 1 prev-month placeholder */
  var days = [
    [null, 2, 3, 4, 5, 6, 7],       /* row 1, 1 is prev-month */
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 'x', 'x', 'x', 'x']  /* 'x' = next-month dimmed */
  ];
  for (var r = 0; r < days.length; r++) {
    s += '<div style="display:grid;grid-template-columns:repeat(7,1fr);gap:0;width:100%;margin-bottom:' + (r === days.length - 1 ? '0' : '8px') + ';">';
    for (var c = 0; c < 7; c++) {
      var v = days[r][c];
      var label, color, border;
      if (v === null) {
        /* prev-month dimmed '1' */
        label = '1'; color = '#C2CFE5'; border = 'none';
      } else if (v === 'x') {
        var nextIdx = 1 + (c - days[days.length - 1].indexOf('x'));
        label = String(nextIdx); color = '#C2CFE5'; border = 'none';
      } else {
        label = String(v); color = '#0A2757'; border = 'none';
      }
      /* Apply Today ring on day 5 */
      if (v === 5) { color = '#005CE5'; border = '1.5px solid #005CE5'; }
      s += '<div style="width:32px;height:32px;margin:0 auto;display:flex;align-items:flex-start;justify-content:center;padding:10px 6px 12px;box-sizing:border-box;border-radius:30px;border:' + border + ';color:' + color + ';font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;">' + label + '</div>';
    }
    s += '</div>';
  }
  return s;
}

function _dpgYearGrid() {
  /* 7 visible rows × 3 cols. Selected = 2026 (row 3, col 2). */
  var startYear = 2015;
  var rows = 7, cols = 3;
  var s = '<div style="display:flex;flex-direction:column;gap:8px;width:100%;position:relative;">';
  for (var r = 0; r < rows; r++) {
    s += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">';
    for (var c = 0; c < cols; c++) {
      var y = startYear + (r * cols) + c;
      var selected = (y === 2026);
      var color = selected ? '#005CE5' : '#0A2757';
      var border = selected ? '1px solid #005CE5' : '1px solid transparent';
      s += '<div style="flex:1;display:flex;align-items:center;justify-content:center;padding:10px 12px 8px;border-radius:8px;border:' + border + ';color:' + color + ';font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;">' + y + '</div>';
    }
    s += '</div>';
  }
  /* Drawn scrollbar decoration — intentional visual because it's in the Figma source */
  s += '<div style="position:absolute;top:50px;bottom:50px;right:-4px;width:4px;background:#0A2757;opacity:.10;border-radius:99px;"></div>';
  s += '</div>';
  return s;
}

function _dpgMonthGrid() {
  /* 4 rows × 3 cols of months. Selected = March (pos 2). */
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var s = '<div style="display:flex;flex-direction:column;gap:8px;width:100%;">';
  for (var r = 0; r < 4; r++) {
    s += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">';
    for (var c = 0; c < 3; c++) {
      var idx = r * 3 + c;
      var selected = (idx === 2); /* Mar highlighted */
      var color = selected ? '#005CE5' : '#0A2757';
      var border = selected ? '1px solid #005CE5' : '1px solid transparent';
      s += '<div style="flex:1;display:flex;align-items:center;justify-content:center;padding:10px 12px 8px;border-radius:8px;border:' + border + ';color:' + color + ';font-weight:600;font-size:14px;line-height:14px;letter-spacing:.25px;">' + months[idx] + '</div>';
    }
    s += '</div>';
  }
  s += '</div>';
  return s;
}

function _dpgBuildPanel(type) {
  var s = _dpgSurfaceOpen();
  if (type === 'Year') {
    s += _dpgHeader('Year', true, false); /* Year has a left chevron; figma shows left chevron, no right — match the figma screenshot */
    s += _dpgYearGrid();
  } else if (type === 'Month') {
    /* Month variant is asymmetric — no Prev chevron in Figma */
    s += _dpgHeader('Year', false, true);
    s += _dpgMonthGrid();
  } else {
    s += _dpgHeader('Month / Year', true, true);
    s += _dpgDateGrid();
  }
  s += '</div>';
  return s;
}

function updateDatePickerGroupDemo() {
  var demo = document.getElementById('dpg-demo-preview');
  if (demo) demo.innerHTML = _dpgBuildPanel(_dpgDemo.type);
}

/* ── Spec card state — single dynamic card ────────────────────────── */
var _specCards = {
  'default': { type: 'Date' }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  var view = (card.type || 'Date').toLowerCase();
  return 'EBDatePickerGroup($selectedDate)\n    .ebView(.' + view + ')';
}

function buildComposeSnippet(cardKey, card) {
  var view = card.type || 'Date';
  return 'EBDatePickerGroup(\n    date = selectedDate,\n    view = EBPickerView.' + view + '\n)';
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview HTML inside the spec card root */
  var rootEl = document.getElementById('spec-card-' + cardStyle);
  if (rootEl) {
    var previewEl = rootEl.querySelector('.spec-card-preview');
    if (previewEl) previewEl.innerHTML = _dpgBuildPanel(card.type);
  }

  /* Update Properties readouts */
  var spType = document.querySelector('[data-sp="' + cardStyle + '-type"]');
  if (spType) spType.textContent = card.type;

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

function _dpgInit() {
  updateDatePickerGroupDemo();
  /* Re-render spec previews + DEV snippets via shared updater */
  Object.keys(_specCards).forEach(function(k){ updateSpecCard(k, 'type', _specCards[k].type); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _dpgInit);
} else {
  _dpgInit();
}

/* Re-init after Astro view-transition swaps */
document.addEventListener('astro:page-load', _dpgInit);
