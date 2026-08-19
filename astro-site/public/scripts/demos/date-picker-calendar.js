/* Powers the live preview and spec card on the date-picker-calendar page.
 * Date Picker - Calendar (node 6769:105110) is Mode = Day | Year | Month.
 * Day pages through months from its header; Month and Year are reached
 * from the header chips and return via the back chevron.
 */

var _dpcalChevron = function (dir) {
  var d = dir === 'left' ? 'M10 4 6 8l4 4' : 'M6 4l4 4-4 4';
  return '<svg class="eb-preview-dpcal__chevron" width="16" height="16" viewBox="0 0 16 16" ' +
    'fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="' + d + '" stroke="currentColor" stroke-width="1.8" ' +
    'stroke-linecap="round" stroke-linejoin="round"/></svg>';
};

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
   filling the tail in the Prev-Next treatment. */
function _dpcalDayGrid() {
  var h = '<div class="eb-preview-dpcal__row">';
  _dpcalWeekdays.forEach(function (d) { h += '<span class="eb-preview-dpwk">' + d + '</span>'; });
  h += '</div>';

  var day = 1, next = 1;
  for (var r = 0; r < 6; r++) {
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

function _dpcalRender(mode) {
  var h = '<div class="eb-preview-dpcal">';
  h += '<div class="eb-preview-dpcal__header">';
  h += _dpcalChevron('left');

  if (mode === 'day') {
    h += '<div class="eb-preview-dpcal__center">';
    h += '<span class="eb-preview-dphdr"><span>Month</span></span>';
    h += '<span class="eb-preview-dphdr"><span>2026</span></span>';
    h += '</div>';
    h += _dpcalChevron('right');
  } else {
    h += '<div class="eb-preview-dpcal__center"><span class="eb-preview-dpcal__title">' +
      (mode === 'year' ? 'Select Year' : 'Select Month') + '</span></div>';
    /* The right chevron is a hidden spacer in these modes — it keeps the
       title optically centred without shifting when it disappears. */
    h += '<span style="width:16px"></span>';
  }
  h += '</div>';

  if (mode === 'day') {
    h += _dpcalDayGrid();
  } else if (mode === 'month') {
    h += _dpcalListGrid(_dpcalMonths, 7);
  } else {
    var years = [];
    for (var y = 2015; y <= 2029; y++) years.push(String(y));
    h += _dpcalListGrid(years, 11);
    h += '<div class="eb-preview-dpcal__scrollbar"></div>';
  }

  return h + '</div>';
}

function _dpcalUpdate() {
  var el = document.getElementById('dpcal-ctrl-mode');
  var mode = el ? el.value : 'day';
  var preview = document.getElementById('dpcal-demo-preview');
  if (preview) preview.innerHTML = _dpcalRender(mode);

  var cells = document.getElementById('dpcal-info-cells');
  var header = document.getElementById('dpcal-info-header');
  if (cells) cells.textContent = mode === 'day' ? '42' : (mode === 'month' ? '12' : '18');
  if (header) header.textContent = mode === 'day' ? '2 triggers' : 'Title';
}
window._dpcalUpdate = _dpcalUpdate;

/* ── Style tab spec card ─────────────────────────────────────────── */
var _specCards = { modes: { mode: 'day' } };
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('dpcal-spec-' + cardKey);
  if (host) host.innerHTML = _dpcalRender(card.mode);
}
window.updateSpecCard = updateSpecCard;

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
