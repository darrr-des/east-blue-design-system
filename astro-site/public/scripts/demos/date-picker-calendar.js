/* Powers the live preview and spec cards on the date-picker-calendar page.
 * Date Picker - Calendar (node 6769:105110) is Mode = Day | Month | Year,
 * assembled from Date Picker - Cell, - Header and - Header Trigger.
 *
 * Geometry, type and colour are read off the Playground bundle, which is
 * generated from that set, so the two renderers agree:
 *
 *   card        312 wide, radius 8, padding 16, column gap 8, 1px
 *               border/color-border-weak #E5EBF4 on bg/color-bg-primary-inverse
 *   Header      280 x 24, space-between
 *   Day         Chevron Left + two 114-wide Header Triggers (gap 4) + Chevron
 *               Right; Content is a weekday Row then six Rows of seven
 *               32 x 32 cells, each Row space-between, column gap 8
 *   Month/Year  a centred Title; the right chevron is still there at opacity 0,
 *               which is what holds the title centred. Content is a clipped
 *               280 x 232 grid — Month 3 x 4 of 83-wide cells at a 64 pitch,
 *               Year 3 x 6 of 88-wide cells at a 48 pitch, so Year's last row
 *               is cut off and the Scrollbar sits over the card's right edge.
 *   cells       Day radius 24, Month/Year radius 8; Proxima Soft 600 14/14,
 *               tracking 0.25. Selection is a 2px #005CE5 ring on the cell's
 *               Container with the label in the same blue.
 *
 * The content is the set's own: 1-31 then 1-11 in text/color-text-weak for the
 * next month, August selected in Month, 2015-2032 with 2026 selected in Year.
 * Nothing here is invented — the Day grid marks no selection because the set
 * marks none.
 */

var DPC = {
  text:      '#0A2757',   /* text/color-text            */
  textWeak:  '#6780A9',   /* text/color-text-weak       */
  blue:      '#005CE5',   /* border/color-border-primary */
  caret:     '#445C85',
  surface:   '#FFFFFF',
  border:    '#E5EBF4',   /* border/color-border-weak   */
  chip:      '#F6F9FD',   /* bg/color-bg                */
  thumb:     '#0A2757'    /* bg/color-bg-inverse        */
};
var DPC_TYPE = "font-family:'Proxima Soft',system-ui,sans-serif;font-size:14px;line-height:14px;letter-spacing:0.25px;";

var _dpcalWeekdays = ['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa'];
var _dpcalMonths = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

/* Chevron Left / Right — 24 x 24, stroked 2 in border/color-border-primary. */
function _dpcalChevron(dir, hidden) {
  var d = dir === 'left' ? 'M14.25 6.75L9 12L14.25 17.25' : 'M9.75 17.25L15 12L9.75 6.75';
  return '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" ' +
    'style="display:block;flex:none;' + (hidden ? 'opacity:0;' : '') + '">' +
    '<path d="' + d + '" stroke="' + DPC.blue + '" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

/* Date Picker - Header Trigger — 114 x 24 chip, radius 4, padding 4/8, gap 8. */
function _dpcalTrigger(label) {
  return '<span style="box-sizing:border-box;width:114px;height:24px;border-radius:4px;' +
    'background:' + DPC.chip + ';padding:4px 8px;display:flex;align-items:center;' +
    'justify-content:center;gap:8px;">' +
    '<span style="' + DPC_TYPE + 'font-weight:700;font-size:16px;line-height:16px;color:' + DPC.text + ';">' +
    label + '</span>' +
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style="display:block;flex:none;">' +
    '<path d="M4.5 6.5L8 10L11.5 6.5" stroke="' + DPC.caret + '" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
}

/* One Date Picker - Cell: a Container that carries the fill, radius and, when
   selected, the 2px ring. */
function _dpcalCell(label, w, radius, color, selected) {
  return '<span style="box-sizing:border-box;width:' + w + 'px;height:32px;border-radius:' + radius + 'px;' +
    'background:' + DPC.surface + ';display:flex;align-items:center;justify-content:center;' +
    (selected ? 'box-shadow:inset 0 0 0 2px ' + DPC.blue + ';' : '') + '">' +
    '<span style="' + DPC_TYPE + 'font-weight:600;color:' + (selected ? DPC.blue : color) + ';">' +
    label + '</span></span>';
}

function _dpcalRow(inner) {
  return '<div style="width:280px;height:32px;display:flex;justify-content:space-between;align-items:flex-start;">' +
    inner + '</div>';
}

function _dpcalDayGrid(weeks) {
  var h = _dpcalRow(_dpcalWeekdays.map(function (d) {
    return '<span style="width:32px;height:32px;display:flex;align-items:center;justify-content:center;' +
      DPC_TYPE + 'font-weight:700;color:' + DPC.text + ';">' + d + '</span>';
  }).join(''));

  var day = 1, next = 1;
  for (var r = 0; r < weeks; r++) {
    var cells = '';
    for (var c = 0; c < 7; c++) {
      if (day <= 31) cells += _dpcalCell(day++, 32, 24, DPC.text, false);
      else cells += _dpcalCell(next++, 32, 24, DPC.textWeak, false);
    }
    h += _dpcalRow(cells);
  }
  return '<div style="width:280px;display:flex;flex-direction:column;gap:8px;">' + h + '</div>';
}

/* Month and Year share a clipped 280 x 232 grid; only the cell width and the
   row pitch differ, and only Year overflows it. */
function _dpcalListGrid(items, selectedIndex, cellW, rowGap) {
  var h = '<div style="width:280px;height:232px;overflow:hidden;display:flex;flex-wrap:wrap;' +
    'align-content:flex-start;justify-content:space-between;row-gap:' + rowGap + 'px;">';
  items.forEach(function (label, i) {
    h += _dpcalCell(label, cellW, 8, DPC.text, i === selectedIndex);
  });
  return h + '</div>';
}

function _dpcalRender(mode, week6) {
  var h = '<div style="box-sizing:border-box;width:312px;border-radius:8px;background:' + DPC.surface + ';' +
    'box-shadow:inset 0 0 0 1px ' + DPC.border + ';padding:16px;display:flex;flex-direction:column;' +
    'gap:8px;position:relative;">';

  h += '<div style="width:280px;height:24px;display:flex;align-items:center;justify-content:space-between;gap:8px;">';
  h += _dpcalChevron('left', false);
  if (mode === 'day') {
    h += '<div style="width:232px;display:flex;justify-content:space-between;">' +
      _dpcalTrigger('Month') + _dpcalTrigger('2026') + '</div>';
    h += _dpcalChevron('right', false);
  } else {
    h += '<div style="width:232px;height:24px;display:flex;align-items:center;justify-content:center;padding:4px 8px;box-sizing:border-box;">' +
      '<span style="' + DPC_TYPE + 'font-weight:700;font-size:16px;line-height:16px;color:' + DPC.text + ';">' +
      (mode === 'year' ? 'Select Year' : 'Select Month') + '</span></div>';
    /* Present, invisible — it is what keeps the title centred. */
    h += _dpcalChevron('right', true);
  }
  h += '</div>';

  if (mode === 'day') {
    h += _dpcalDayGrid(week6 === false ? 5 : 6);
  } else if (mode === 'month') {
    h += _dpcalListGrid(_dpcalMonths, 7, 83, 32);
  } else {
    var years = [];
    for (var y = 2015; y <= 2032; y++) years.push(String(y));
    h += _dpcalListGrid(years, 11, 88, 16);
    /* Scrollbar instance — 12 x 174 over the card's right edge, thumb 4 x 80
       at 47 down the track. */
    h += '<div style="position:absolute;left:300px;top:52px;width:12px;height:174px;">' +
      '<span style="position:absolute;left:4px;top:47px;width:4px;height:80px;border-radius:99px;' +
      'background:' + DPC.thumb + ';display:block;"></span></div>';
  }

  return h + '</div>';
}

function _dpcalUpdate() {
  var byId = function (id) { return document.getElementById(id); };
  var modeEl = byId('dpcal-ctrl-mode');
  var weekEl = byId('dpcal-ctrl-week6');
  var mode = modeEl ? modeEl.value : 'day';

  /* `week 6` only exists on the day grid. */
  var weekRow = byId('dpcal-row-week6');
  if (weekRow) weekRow.hidden = mode !== 'day';

  var preview = byId('dpcal-demo-preview');
  if (preview) preview.innerHTML = _dpcalRender(mode, weekEl ? weekEl.value === 'true' : true);
}
window._dpcalUpdate = _dpcalUpdate;

/* ── Style tab spec cards — one per Mode ─────────────────────────── */
var _specCards = {
  day: { mode: 'day', week6: 'true' },
  month: { mode: 'month' },
  year: { mode: 'year' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('dpcal-spec-' + cardKey);
  if (host) host.innerHTML = _dpcalRender(card.mode, card.week6 !== 'false');
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ──────────────────────────────────────────────────
   One definition behind the spec-card fallback and both language tabs. */
function getSnippet(cardKey, lang) {
  var card = _specCards[cardKey] || _specCards['day'];
  var swift = lang !== 'compose';
  var sep = swift ? ': ' : ' = ';
  var mode = card.mode === 'monthyear' ? 'month' : card.mode;
  var cased = mode.charAt(0).toUpperCase() + mode.slice(1);
  var args = ['mode' + sep + (swift
    ? '.' + mode + ''
    : 'EBDatePickerCalendarMode.' + cased + '')];
  if (card.mode === 'day') {
    args.push('weeks' + sep + (card.week6 === 'false' ? '5' : '6'));
  }
  return 'EBDatePickerCalendar(\n    ' +
    args.join(',\n    ') +
    '\n)';
}
window.getSnippet = getSnippet;

function _dpcalInit() {
  _dpcalUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'mode', _specCards[k].mode);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _dpcalInit);
  else _dpcalInit();
  document.addEventListener('astro:page-load', _dpcalInit);
})();
