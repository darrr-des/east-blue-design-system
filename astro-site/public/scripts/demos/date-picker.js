/* Powers the live preview and spec card on the date-picker page.
 * Date Picker (node 7201:112099) is the field: State × isFilled, eight
 * versions, each composing one Dropdown - Generic instance.
 *
 * Geometry and colour are read off the Playground bundle, which is built
 * from that set, so the two renderers agree:
 *
 *   root            312 wide, column, gap 0
 *   FormGroup Header 22 tall — #label Proxima Soft 600 14/14 in a frame
 *                   padded 2 each side, 8 below
 *   Select Field    46 tall, radius 6; Container padding 6 / 12 / 8 / 12,
 *                   items centred, gap 0
 *   #value          Proxima Soft 600 14/14 in a 256-wide text-container
 *                   padded 2 on top
 *   Calendar        32 x 32, 12 in from the right
 *   description     Error only — 312 x 26, padding 4 / 2; #subtext BarkAda
 *                   600 12/18
 *
 * The stroke is painted as an inset shadow: Figma's is INSIDE and stays out
 * of layout, so a CSS border would move the padding.
 *
 * Three colours below are Figma's as read, not what the pattern predicts —
 * see the Date Picker report. Disabled takes text/color-text-disabled when
 * empty but text/color-text-weakest when filled; Error paints the calendar
 * with border/color-border-primary-disabled. Rule Zero: reproduce the set.
 */

var DP_GLYPH = '<svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23 3C23.5523 3 24 3.44772 24 4V5H25.3076C26.0632 5 26.7599 5.33937 27.2529 5.89551C27.7425 6.44776 28 7.17395 28 7.90918V25.0908C28 25.826 27.7425 26.5522 27.2529 27.1045C26.7599 27.6606 26.0632 28 25.3076 28H6.69238C5.93679 28 5.24008 27.6606 4.74707 27.1045C4.25753 26.5522 4 25.826 4 25.0908V7.90918C4 7.17395 4.25753 6.44775 4.74707 5.89551C5.24007 5.33937 5.93679 5 6.69238 5H8V4C8 3.44772 8.44772 3 9 3C9.55228 3 10 3.44772 10 4V5H22V4C22 3.44772 22.4477 3 23 3ZM6 25.0908C6 25.3682 6.09894 25.6135 6.24414 25.7773C6.38587 25.9372 6.55034 26 6.69238 26H25.3076C25.4497 26 25.6141 25.9372 25.7559 25.7773C25.9011 25.6135 26 25.3682 26 25.0908V12H6V25.0908ZM11 22C11.5523 22 12 22.4477 12 23C12 23.5523 11.5523 24 11 24H9C8.44772 24 8 23.5523 8 23C8 22.4477 8.44772 22 9 22H11ZM17 22C17.5523 22 18 22.4477 18 23C18 23.5523 17.5523 24 17 24H15C14.4477 24 14 23.5523 14 23C14 22.4477 14.4477 22 15 22H17ZM23 22C23.5523 22 24 22.4477 24 23C24 23.5523 23.5523 24 23 24H21C20.4477 24 20 23.5523 20 23C20 22.4477 20.4477 22 21 22H23ZM11 18C11.5523 18 12 18.4477 12 19C12 19.5523 11.5523 20 11 20H9C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18H11ZM17 18C17.5523 18 18 18.4477 18 19C18 19.5523 17.5523 20 17 20H15C14.4477 20 14 19.5523 14 19C14 18.4477 14.4477 18 15 18H17ZM23 18C23.5523 18 24 18.4477 24 19C24 19.5523 23.5523 20 23 20H21C20.4477 20 20 19.5523 20 19C20 18.4477 20.4477 18 21 18H23ZM11 14C11.5523 14 12 14.4477 12 15C12 15.5523 11.5523 16 11 16H9C8.44772 16 8 15.5523 8 15C8 14.4477 8.44772 14 9 14H11ZM17 14C17.5523 14 18 14.4477 18 15C18 15.5523 17.5523 16 17 16H15C14.4477 16 14 15.5523 14 15C14 14.4477 14.4477 14 15 14H17ZM23 14C23.5523 14 24 14.4477 24 15C24 15.5523 23.5523 16 23 16H21C20.4477 16 20 15.5523 20 15C20 14.4477 20.4477 14 21 14H23ZM6.69238 7C6.55034 7 6.38587 7.06277 6.24414 7.22266C6.09894 7.38646 6 7.63177 6 7.90918V10H26V7.90918C26 7.63177 25.9011 7.38646 25.7559 7.22266C25.6141 7.06277 25.4497 7 25.3076 7H6.69238Z" fill="currentColor"/></svg>';

var DP_STATE = {
  'default':  { bg: '#FFFFFF', ring: '#D7E0EF', ringW: 1, icon: '#005CE5',
                value: { empty: '#90A8D0', filled: '#0A2757' } },
  'pressed':  { bg: '#FFFFFF', ring: '#005CE5', ringW: 2, icon: '#005CE5',
                value: { empty: '#90A8D0', filled: '#0A2757' } },
  'disabled': { bg: '#EEF2F9', ring: null,      ringW: 0, icon: '#9BC5FD',
                value: { empty: '#C2CFE5', filled: '#90A8D0' } },
  'error':    { bg: '#FFFFFF', ring: '#D61B2C', ringW: 2, icon: '#9BC5FD',
                value: { empty: '#90A8D0', filled: '#0A2757' } }
};

function _dpEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _dpRender(opts) {
  var o = opts || {};
  var c = DP_STATE[o.state || 'default'] || DP_STATE['default'];
  var filled = !!o.filled;
  var primary = "font-family:'Proxima Soft',system-ui,sans-serif;font-weight:600;font-size:14px;line-height:14px;";

  var h = '<div style="width:312px;display:flex;flex-direction:column;">';

  /* FormGroup Header */
  h += '<div style="padding:0 2px 8px;"><div style="' + primary + 'color:#0A2757;">' +
       _dpEscape(o.label || 'Label') + '</div></div>';

  /* Select Field */
  h += '<div style="box-sizing:border-box;height:46px;border-radius:6px;background:' + c.bg + ';' +
       (c.ring ? 'box-shadow:inset 0 0 0 ' + c.ringW + 'px ' + c.ring + ';' : '') +
       'display:flex;align-items:center;padding:6px 12px 8px;">';
  h += '<div style="flex:1 1 auto;min-width:0;padding-top:2px;"><span style="' + primary +
       'color:' + (filled ? c.value.filled : c.value.empty) + ';">' +
       _dpEscape(o.value || 'Select option') + '</span></div>';
  h += '<div style="flex:none;width:32px;height:32px;color:' + c.icon + ';">' + DP_GLYPH + '</div>';
  h += '</div>';

  /* description — Error only */
  if ((o.state || 'default') === 'error') {
    h += '<div style="padding:4px 2px;"><div style="font-family:\'BarkAda\',system-ui,sans-serif;' +
         'font-weight:600;font-size:12px;line-height:18px;color:#445C85;">Input your subtext here.</div></div>';
  }

  return h + '</div>';
}

function _dpUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('dp-demo-preview');
  if (!preview) return;

  var filled = getVal('dp-ctrl-filled', 'false') === 'true';
  var valueEl = document.getElementById('dp-ctrl-value');
  /* Follow the set: #value reads "Select option" when isFilled is false and
     "Value" when it is true. Neither string is ours to invent. */
  if (valueEl && filled && valueEl.value === 'Select option') valueEl.value = 'Value';
  if (valueEl && !filled && valueEl.value === 'Value') valueEl.value = 'Select option';

  preview.innerHTML = _dpRender({
    state: getVal('dp-ctrl-state', 'default'),
    filled: filled,
    label: getVal('dp-ctrl-label', 'Label'),
    value: getVal('dp-ctrl-value', 'Select option')
  });
}
window._dpUpdate = _dpUpdate;

/* ── Style tab spec card ─────────────────────────────────────────── */
var _specCards = { field: { state: 'default', filled: 'false' } };
window._specCards = _specCards;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('dp-spec-' + cardKey);
  if (host) {
    var filled = card.filled === 'true';
    host.innerHTML = _dpRender({
      state: card.state,
      filled: filled,
      label: 'Label',
      value: filled ? 'Value' : 'Select option'
    });
  }
}
window.updateSpecCard = updateSpecCard;

/* ── DEV code, live ──────────────────────────────────────────────────
   The field takes a binding, so the snippet changes with State rather
   than with the value: Disabled and Error are modifiers on the call. */
function _dpArgs(card, lang) {
  var swift = lang !== 'compose';
  var sep = swift ? ': ' : ' = ';
  var args = ['label' + sep + '"Label"'];
  args.push(swift
    ? 'selection' + sep + '$date'
    : 'selected' + sep + 'date');
  if (!swift) args.push('onSelect' + sep + '{ date = it }');
  if (!swift && card.state === 'disabled') args.push('enabled' + sep + 'false');
  if (card.state === 'error') {
    args.push('errorText' + sep + '"Input your subtext here."');
  }
  return args;
}

function getSnippet(cardKey, lang) {
  var card = _specCards[cardKey] || _specCards['field'];
  var swift = lang !== 'compose';
  var call = 'EBDatePicker(\n    ' +
    _dpArgs(card, lang).join(',\n    ') +
    '\n)';
  /* Disabled is a modifier in SwiftUI; Compose takes it as a parameter above. */
  if (swift && card.state === 'disabled') {
    call += '\n.disabled' +
      '(true)';
  }
  return call;
}
window.getSnippet = getSnippet;


function _dpInit() {
  _dpUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

(function () {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _dpInit);
  else _dpInit();
  document.addEventListener('astro:page-load', _dpInit);
})();
