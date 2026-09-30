/* Checkbox — Style tab demo.
 * Rebuilt from Figma component set 17143:2464 (GCash DS Sticker Sheets v2),
 * named Checkbox_New. Fills and strokes read off get_node_info; the box
 * outline, the tick and the dash come from get_svg on each size.
 *
 * Panel (set 17143:2464, from the property-panel screenshot):
 *   State      · Default, Pressed, Focused, Disabled, Error
 *   isSelected · false, true, indeterminate
 *   Size       · Small, Medium, Large
 * 33 of the 45 combinations are built: indeterminate ships on
 * State=Default only, so the panel snaps to a built variant.
 *
 * Small 16, Medium 20, Large 24 — all at radius 4, with a 2 outline when
 * unselected and a filled box with a white glyph when not.
 */

var CB_NODES = {"default|false|small":"17143:2465","default|true|small":"17143:2468","default|false|medium":"17143:2471","default|true|medium":"17143:2473","default|false|large":"17143:2476","default|true|large":"17143:2478","pressed|false|small":"17733:968","focused|false|small":"17733:971","disabled|false|small":"17733:974","error|false|small":"17733:977","pressed|true|small":"17733:980","focused|true|small":"17733:984","disabled|true|small":"17733:988","error|true|small":"17733:992","pressed|false|medium":"17733:996","focused|false|medium":"17733:998","disabled|false|medium":"17733:1000","error|false|medium":"17733:1002","pressed|true|medium":"17733:1004","focused|true|medium":"17733:1008","disabled|true|medium":"17733:1012","error|true|medium":"17733:1016","pressed|false|large":"17733:1020","focused|false|large":"17733:1022","disabled|false|large":"17733:1024","error|false|large":"17733:1026","pressed|true|large":"17733:1028","focused|true|large":"17733:1032","disabled|true|large":"17733:1036","error|true|large":"17733:1040","default|indeterminate|small":"17733:1044","default|indeterminate|medium":"17733:1048","default|indeterminate|large":"17733:1052"};

/* state → [box fill when unselected, outline, box fill when selected] */
var CB_STATE = {
  'default':  [null,      '#D7E0EF', '#1972F9'],
  'pressed':  ['#EBF2FF', '#1972F9', '#0F57C8'],
  'focused':  [null,      '#1972F9', '#1972F9'],
  'disabled': [null,      '#D7E0EF', '#9BC5FD'],
  'error':    [null,      '#D81E1E', '#D81E1E']
};

/* size → [box, tick path, dash path, glyph stroke] — straight from get_svg */
var CB_SIZE = {
  small:  [16, 'M5 8L7 10L11 6',      'M4 8H12.5', 2,   'M4 1H12C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15H4C2.34315 15 1 13.6569 1 12V4C1 2.34315 2.34315 1 4 1Z'],
  medium: [20, 'M6 10L9 13L15 7',     'M5 10H15',  2.3, 'M4 1H16C17.6569 1 19 2.34315 19 4V16C19 17.6569 17.6569 19 16 19H4C2.34315 19 1 17.6569 1 16V4C1 2.34315 2.34315 1 4 1Z'],
  large:  [24, 'M6 12.5L9.5 16L17.5 8', 'M6 12H18', 2.5, 'M4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1Z']
};

function _cbKey(c) { return [c.state, c.isselected, c.size].join('|'); }

/* indeterminate ships on State=Default only. */
function _cbResolve(card, changed) {
  if (changed === 'isselected' && card.isselected === 'indeterminate') card.state = 'default';
  if (changed === 'state' && card.state !== 'default' && card.isselected === 'indeterminate') card.isselected = 'true';
  return _cbKey(card);
}

function _cbRender(c) {
  var st = CB_STATE[c.state] || CB_STATE['default'];
  var m = CB_SIZE[c.size] || CB_SIZE['medium'];
  var d = m[0];
  var s = '<svg width="' + d + '" height="' + d + '" viewBox="0 0 ' + d + ' ' + d +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  if (c.isselected === 'false') {
    if (st[0]) s += '<rect x="1" y="1" width="' + (d - 2) + '" height="' + (d - 2) + '" rx="3" fill="' + st[0] + '"/>';
    s += '<path d="' + m[4] + '" stroke="' + st[1] + '" stroke-width="2"/>';
  } else {
    s += '<rect x="0" y="0" width="' + d + '" height="' + d + '" rx="4" fill="' + st[2] + '"/>';
    s += '<path d="' + (c.isselected === 'indeterminate' ? m[2] : m[1]) + '" stroke="#FFFFFF" stroke-width="' + m[3] +
         '" stroke-linecap="round" stroke-linejoin="round"/>';
  }
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = { main: { state: 'default', isselected: 'false', size: 'medium' } };
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function _cbCap(v) { return v.charAt(0).toUpperCase() + v.slice(1); }
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBCheckbox(', '    isOn: $isOn,'];
  if (c.isselected === 'indeterminate') l[1] = '    isOn: .indeterminate,';
  l.push('    size: .' + c.size);
  l.push(')');
  if (c.state === 'disabled') l.push('    .disabled(true)');
  if (c.state === 'error') l.push('    .ebError(true)');
  if (c.state === 'focused') l.push('    .focused($isFocused)');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBCheckbox('];
  l.push(c.isselected === 'indeterminate'
    ? '    state = EBToggleableState.Indeterminate,'
    : '    checked = ' + (c.isselected === 'true') + ',');
  l.push('    onCheckedChange = { checked = it },');
  l.push('    size = EBCheckboxSize.' + _cbCap(c.size) + ',');
  if (c.state === 'disabled') l.push('    enabled = false,');
  if (c.state === 'error') l.push('    isError = true,');
  l.push('    interactionSource = interactionSource');
  l.push(')');
  return l.join('\n');
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
function _cbSync(cardStyle, card) {
  ['state', 'isselected'].forEach(function (a) {
    var el = document.querySelector('[onchange*="updateSpecCard(\'' + cardStyle + '\', \'' + a + '\'"]');
    if (el) el.value = card[a];
  });
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  var key = _cbResolve(card, prop);
  _cbSync(cardStyle, card);

  var host = document.getElementById('checkbox-spec-' + cardStyle);
  if (host) host.innerHTML = _cbRender(card);

  var st = CB_STATE[card.state] || CB_STATE['default'];
  var m = CB_SIZE[card.size] || CB_SIZE['medium'];
  var put = function (name, text) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + name + '"]');
    if (el) el.textContent = text;
  };
  put('state', _cbCap(card.state));
  put('isselected', card.isselected);
  put('size', _cbCap(card.size));
  put('size-readout', m[0] + ' × ' + m[0]);
  put('fill-readout', card.isselected === 'false' ? (st[0] || 'None') : st[2]);
  put('stroke-readout', card.isselected === 'false' ? st[1] + ' · 2' : '—');
  put('glyph-readout', card.isselected === 'false' ? '—' : '#FFFFFF · ' + m[3]);
  put('variantNode', CB_NODES[key] + ' · ' + m[0] + ' × ' + m[0]);

  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && /swift/i.test(activeTab.textContent) ? 'swift' : 'compose';
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

/* ── Overview tab shim — the old panel drove _cbDemo. ──────────────── */
var _cbDemo = { sel: 'false', state: 'Default', size: 'medium' };
function updateCheckboxDemo() {
  var el = document.getElementById('cb-demo-preview');
  if (!el) return;
  var card = { state: String(_cbDemo.state).toLowerCase(), isselected: _cbDemo.sel, size: _cbDemo.size };
  _cbResolve(card, 'isselected');
  el.innerHTML = _cbRender(card);
}
window._cbDemo = _cbDemo;
window.updateCheckboxDemo = updateCheckboxDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _cbInit() {
  updateCheckboxDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _cbInit);
else _cbInit();
document.addEventListener('astro:page-load', _cbInit);
