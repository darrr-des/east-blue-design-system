/* Powers the live preview and spec cards on the date-picker-cell page.
 * Date Picker - Cell (node 5943:41825) is one component with four
 * settings: Kind, Role, Selection and isDisabled — 16 real versions.
 */

function _dpcEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Range strips only exist on Day cells. Middle sits behind the whole
   cell; start and end reach toward their neighbour. */
function _dpcRange(selection) {
  if (selection === 'range-start') return '<span class="eb-preview-dpcell__range eb-preview-dpcell__range--start"></span>';
  if (selection === 'range-end') return '<span class="eb-preview-dpcell__range eb-preview-dpcell__range--end"></span>';
  if (selection === 'range-middle') return '<span class="eb-preview-dpcell__range eb-preview-dpcell__range--middle"></span>';
  return '';
}

function _dpcRender(opts) {
  var kind = opts.kind || 'day';
  var role = opts.role || 'default';
  var selection = opts.selection || 'none';
  var disabled = !!opts.disabled;

  /* MonthYear never takes a range or Prev-Next — fall back cleanly if a
     control is left on a value the other kind does not support. */
  if (kind === 'monthyear') {
    if (selection.indexOf('range') === 0) selection = 'none';
    if (role === 'prev-next') role = 'default';
  }

  var cls = ['eb-preview-dpcell', 'eb-preview-dpcell--' + kind];
  if (role === 'today') cls.push('eb-preview-dpcell--today');
  if (role === 'prev-next') cls.push('eb-preview-dpcell--prevnext');
  if (selection === 'selected') cls.push('eb-preview-dpcell--selected');
  if (selection === 'range-start' || selection === 'range-end') cls.push('eb-preview-dpcell--selected');
  if (selection === 'range-middle') cls.push('eb-preview-dpcell--rangemiddle');
  if (disabled) cls.push('eb-preview-dpcell--disabled');

  var label = kind === 'day' ? '1' : 'Label';
  return '<span class="' + cls.join(' ') + '">' +
    _dpcRange(selection) +
    '<span class="eb-preview-dpcell__label">' + _dpcEscape(label) + '</span>' +
    '</span>';
}

function _dpcUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('dpc-demo-preview');
  if (!preview) return;

  var kind = getVal('dpc-ctrl-kind', 'day');
  preview.innerHTML = _dpcRender({
    kind: kind,
    role: getVal('dpc-ctrl-role', 'default'),
    selection: getVal('dpc-ctrl-selection', 'none'),
    disabled: getVal('dpc-ctrl-disabled', 'false') === 'true'
  });

  /* Hide the options the current Kind cannot express, rather than
     letting the preview silently ignore them. */
  var roleSel = document.getElementById('dpc-ctrl-role');
  var selSel = document.getElementById('dpc-ctrl-selection');
  var setDisabled = function (sel, values, off) {
    if (!sel) return;
    Array.prototype.forEach.call(sel.options, function (o) {
      if (values.indexOf(o.value) !== -1) {
        o.disabled = off;
        if (off && o.selected) sel.value = sel.options[0].value;
      }
    });
  };
  var isMonthYear = kind === 'monthyear';
  setDisabled(roleSel, ['prev-next'], isMonthYear);
  setDisabled(selSel, ['range-start', 'range-middle', 'range-end'], isMonthYear);
}
window._dpcUpdate = _dpcUpdate;

/* ── Style tab spec cards ────────────────────────────────────────── */
var _specCards = {
  day: { role: 'default', selection: 'none', disabled: 'false' },
  monthyear: { role: 'default', selection: 'none', disabled: 'false' }
};
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('dpc-spec-' + cardKey);
  if (!host) return;
  host.innerHTML = _dpcRender({
    kind: cardKey,
    role: card.role,
    selection: card.selection,
    disabled: card.disabled === 'true'
  });
}
window.updateSpecCard = updateSpecCard;

function _dpcInit() {
  _dpcUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'role', _specCards[k].role);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _dpcInit);
  else _dpcInit();
  document.addEventListener('astro:page-load', _dpcInit);
})();
