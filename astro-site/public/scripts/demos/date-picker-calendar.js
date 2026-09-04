/* Powers the live preview and spec cards on the date-picker-calendar page.
 * Date Picker - Calendar (node 6769:105110) is Mode = Day | Month | Year,
 * assembled from Date Picker - Cell, - Header and - Header Trigger.
 * Day pages through months from its header; Month and Year are reached
 * from the header chips and return via the back chevron.
 */

/* Figma's chevron verbatim: 24 × 24, stroked at 2, border/color-border-primary. */
var _dpcalChevron = function (dir) {
  var d = dir === 'left' ? 'M14.25 6.75L9 12L14.25 17.25' : 'M9.75 6.75L15 12L9.75 17.25';
  return '<svg class="eb-preview-dpcal__chevron" width="24" height="24" viewBox="0 0 24 24" ' +
    'fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="' + d + '" stroke="currentColor" stroke-width="2" ' +
    'stroke-linecap="round" stroke-linejoin="round"/></svg>';
};

/* The header chips are Header Trigger instances with hasCaret on. */
var _dpcalCaret =
  '<svg class="eb-preview-dphdr__caret" width="16" height="16" viewBox="0 0 16 16" ' +
  'fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
  '<path d="M4.5 6.5L8 10L11.5 6.5" stroke="currentColor" stroke-width="2" ' +
  'stroke-linecap="round" stroke-linejoin="round"/></svg>';

function _dpcalTrigger(text) {
  return '<span class="eb-preview-dphdr eb-preview-dpcal__trigger">' +
    '<span class="eb-preview-dphdr__label">' + text + '</span>' + _dpcalCaret + '</span>';
}

var _dpcalWeekdays = ['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa'];
var _dpcalMonths = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

function _dpcalCell(label, mods) {
  var cls = ['eb-preview-dpcell', 'eb-preview-dpcell--' + (mods.kind || 'day')];
  if (mods.today) cls.push('eb-preview-dpcell--today');
  if (mods.prevNext) cls.push('eb-preview-dpcell--prevnext');
  if (mods.selected) cls.push('eb-preview-dpcell--selected');
  return '<span class="' + cls.join(' ') + '"><span class="eb-preview-dpcell__label">' + label + '</span></span>';
}

/* Day mode: a weekday strip, then 1–31 with the following month's days
   filling the tail in the Prev-Next treatment. `week 6` adds the last row. */
function _dpcalDayGrid(weeks) {
  var h = '<div class="eb-preview-dpcal__row">';
  _dpcalWeekdays.forEach(function (d) { h += '<span class="eb-preview-dpwk">' + d + '</span>'; });
  h += '</div>';

  var day = 1, next = 1;
  for (var r = 0; r < weeks; r++) {
    h += '<div class="eb-preview-dpcal__row">';
    for (var c = 0; c < 7; c++) {
      if (day <= 31) {
        h += _dpcalCell(day, { today: day === 12 });
        day++;
      } else {
        h += _dpcalCell(next, { prevNext: true });
        next++;
      }
    }
    h += '</div>';
  }
  return h;
}

function _dpcalListGrid(items, selectedIndex) {
  var h = '<div class="eb-preview-dpcal__grid">';
  items.forEach(function (label, i) {
    h += _dpcalCell(label, { kind: 'monthyear', today: i === selectedIndex });
  });
  return h + '</div>';
}

function _dpcalRender(mode, week6) {
  var h = '<div class="eb-preview-dpcal">';
  h += '<div class="eb-preview-dpcal__header">';
  h += _dpcalChevron('left');

  if (mode === 'day') {
    h += '<div class="eb-preview-dpcal__center">';
    h += _dpcalTrigger('Month');
    h += _dpcalTrigger('2026');
    h += '</div>';
    h += _dpcalChevron('right');
  } else {
    h += '<div class="eb-preview-dpcal__center"><span class="eb-preview-dpcal__title">' +
      (mode === 'year' ? 'Select Year' : 'Select Month') + '</span></div>';
    /* Month and Year carry no right chevron in Figma. The spacer keeps the
       title optically centred against the back chevron on the left. */
    h += '<span class="eb-preview-dpcal__spacer"></span>';
  }
  h += '</div>';

  if (mode === 'day') {
    h += _dpcalDayGrid(week6 === false ? 5 : 6);
  } else if (mode === 'month') {
    h += _dpcalListGrid(_dpcalMonths, 7);
  } else {
    var years = [];
    for (var y = 2015; y <= 2029; y++) years.push(String(y));
    /* The indicator floats over the right edge of the list, as in Figma —
       it must not take part in the vertical flow. */
    h += '<div class="eb-preview-dpcal__scrollarea">';
    h += _dpcalListGrid(years, 11);
    h += '<div class="eb-preview-dpcal__scrollbar"></div>';
    h += '</div>';
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
  var sep = swift ? '<span class="syn-punc">:</span> ' : ' <span class="syn-eq">=</span> ';
  var mode = card.mode === 'monthyear' ? 'month' : card.mode;
  var cased = mode.charAt(0).toUpperCase() + mode.slice(1);
  var args = ['mode' + sep + (swift
    ? '<span class="syn-dot">.' + mode + '</span>'
    : '<span class="syn-type">EBDatePickerCalendarMode</span><span class="syn-punc">.</span><span class="syn-dot">' + cased + '</span>')];
  if (card.mode === 'day') {
    args.push('weeks' + sep + (card.week6 === 'false' ? '5' : '6'));
  }
  return '<span class="syn-type">EBDatePickerCalendar</span><span class="syn-punc">(</span>\n    ' +
    args.join('<span class="syn-punc">,</span>\n    ') +
    '\n<span class="syn-punc">)</span>';
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
