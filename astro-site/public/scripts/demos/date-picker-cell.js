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
  if (role === 'prev-next') selection = 'none';

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
  var byId = function (id) { return document.getElementById(id); };
  var preview = byId("dpc-demo-preview");
  if (!preview) return;

  var kindSel = byId("dpc-ctrl-kind");
  var roleSel = byId("dpc-ctrl-role");
  var selSel = byId("dpc-ctrl-selection");
  var disSel = byId("dpc-ctrl-disabled");

  var kind = kindSel ? kindSel.value : "day";

  /* Normalise the controls before rendering, so the preview never shows a
     combination the component cannot express.

     MonthYear has no Prev-Next and no ranges — those cells are header
     controls that pick one value. A Prev-Next day belongs to the
     neighbouring month, so it is never selected or part of a range. */
  var allow = function (sel, allowed) {
    if (!sel) return;
    Array.prototype.forEach.call(sel.options, function (o) {
      o.disabled = allowed.indexOf(o.value) === -1;
    });
    if (sel.selectedOptions && sel.selectedOptions[0] && sel.selectedOptions[0].disabled) {
      sel.value = allowed[0];
    }
  };

  var isMonthYear = kind === "monthyear";
  allow(roleSel, isMonthYear ? ["default", "today"] : ["default", "today", "prev-next"]);

  var role = roleSel ? roleSel.value : "default";
  var selections = ["none", "selected"];
  if (!isMonthYear && role !== "prev-next") {
    selections = selections.concat(["range-start", "range-middle", "range-end"]);
  } else if (role === "prev-next") {
    selections = ["none"];
  }
  allow(selSel, selections);

  preview.innerHTML = _dpcRender({
    kind: kind,
    role: role,
    selection: selSel ? selSel.value : "none",
    disabled: disSel ? disSel.value === "true" : false
  });
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

/* ── DEV code, live ──────────────────────────────────────────────────
   One argument list rendered into both languages, so the two cannot
   drift. Mirrors the call documented on the Style and Code tabs. */
function _dpcArgs(cardKey, card, sep, lang) {
  var swift = lang === 'swift';
  var args = [];
  args.push('kind' + sep + (swift
    ? '.' + (cardKey === 'monthyear' ? 'monthYear' : 'day')
    : 'EBDatePickerCellKind.' + (cardKey === 'monthyear' ? 'MonthYear' : 'Day')));

  args.push(cardKey === 'monthyear'
    ? 'label' + sep + '"' + (card.label || 'Label') + '"'
    : 'index' + sep + (card.index || '1'));

  var role = card.role || 'default';
  if (role !== 'default') {
    var roleCase = role === 'prev-next' ? 'prevNext' : 'today';
    args.push('role' + sep + (swift
      ? '.' + roleCase
      : 'EBDatePickerCellRole.' + roleCase.charAt(0).toUpperCase() + roleCase.slice(1)));
  }

  var sel = card.selection || 'none';
  if (sel !== 'none') {
    var selCase = sel.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); });
    args.push('selection' + sep + (swift
      ? '.' + selCase
      : 'EBDatePickerCellSelection.' + selCase.charAt(0).toUpperCase() + selCase.slice(1)));
  }

  if (card.disabled === 'true') args.push('isDisabled' + sep + 'true');
  return args;
}

function buildSwiftSnippet(cardKey, card) {
  return 'EBDatePickerCell(\n    ' + _dpcArgs(cardKey, card, ': ', 'swift').join(',\n    ') + '\n)';
}

function buildComposeSnippet(cardKey, card) {
  return 'EBDatePickerCell(\n    ' + _dpcArgs(cardKey, card, ' = ', 'compose').join(',\n    ') + '\n)';
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;
