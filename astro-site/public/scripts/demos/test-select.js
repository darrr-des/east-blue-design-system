/* Select — TEST page demo script.
 *
 * Trial read of the Select component set, independent of the existing
 * `dropdown` page: file pbxY8a2xcIfVZKxwnud9Xe (GCash DS · 2026 Working
 * File), set 7947:111865, read 17 September 2026 with the Talk To Figma
 * plugin. Every colour, size and string below is read off the variants —
 * nothing is derived. What the plugin could not read is written "—" on
 * the page rather than filled with a plausible value.
 *
 * Schema (24 of 24 combinations built — a complete matrix):
 *   Type     = Default | PesoSignVector | PesoSignText
 *   State    = Default | Expanded | Error | Disabled
 *   isFilled = false | true
 *
 * Two notes the page records as findings:
 *   1. The placeholder string is not the same across Types. Type=Default
 *      reads "Select Option"; both peso Types read "Select Value".
 *   2. The trigger ships a #label text layer and a raster Philippines flag
 *      instance that draw in none of the 24 variants. The preview draws
 *      what the exports draw, so neither appears here.
 *
 * Padding, gap and alignment are NOT in this file as read values: the
 * Talk To Figma plugin returns no auto-layout fields, so the spec rows
 * report them unread. The 12px inset below reproduces the exported
 * bounding boxes so the preview matches the component; it is not offered
 * as the component's padding.
 */
var TSEL_PROPS = {
  type:     { values: [['default', 'Default'], ['pesovector', 'PesoSignVector'], ['pesotext', 'PesoSignText']] },
  state:    { values: [['default', 'Default'], ['expanded', 'Expanded'], ['error', 'Error'], ['disabled', 'Disabled']] },
  isFilled: { values: [['false', 'False'], ['true', 'True']] }
};

/* Chevron Down exported as SVG from I7947:111934;23:199755 — one path,
 * stroke #005CE5, width 2, round caps. Chevron Up is the same path
 * mirrored, taken from the Expanded variants. */
var TSEL_CHEV_DOWN = '<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M9 13L16 20L23 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
var TSEL_CHEV_UP = '<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M9 19L16 12L23 19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* The #value string, read per Type and per isFilled. */
function _tselValue(type, filled) {
  if (type === 'default') return filled ? 'Selected Option' : 'Select Option';
  return filled ? '1,000.00' : 'Select Value';
}

/* The menu: Select Group, 7 Select Items of 40 with 4px dividers,
 * first item selected. Drawn only when State=Expanded. */
function _tselMenu() {
  var rows = '';
  for (var i = 0; i < 7; i++) {
    rows += '<span class="eb-preview-tsel__item' + (i === 0 ? ' eb-preview-tsel__item--selected' : '') + '">'
      + '<span class="eb-preview-tsel__item-peso">₱</span><span>Text</span></span>';
  }
  return '<span class="eb-preview-tsel__menu">' + rows + '</span>';
}

/* One Select. `o` carries the three properties as strings. */
function _tselRender(o) {
  var type = o.type === 'pesovector' || o.type === 'pesotext' ? o.type : 'default';
  var state = (o.state === 'expanded' || o.state === 'error' || o.state === 'disabled') ? o.state : 'default';
  var filled = o.isFilled === 'true' || o.isFilled === true;

  var cls = 'eb-preview eb-preview-tsel eb-preview-tsel--' + type + ' eb-preview-tsel--' + state
    + (filled ? ' eb-preview-tsel--filled' : '');

  /* Type=Default draws no leading mark: its peso-sign frame sits behind
   * the text-container and shows in no export. */
  var lead = type === 'default' ? ''
    : '<span class="eb-preview-tsel__lead eb-preview-tsel__lead--' + type + '">₱</span>';

  var field = '<span class="eb-preview-tsel__field">'
    + lead
    + '<span class="eb-preview-tsel__text"><span class="eb-preview-tsel__value">' + _tselValue(type, filled) + '</span></span>'
    + '<span class="eb-preview-tsel__chev">' + (state === 'expanded' ? TSEL_CHEV_UP : TSEL_CHEV_DOWN) + '</span>'
    + '</span>';

  return '<div class="' + cls + '">' + field + (state === 'expanded' ? _tselMenu() : '') + '</div>';
}

/* Every value of one property, each labelled, the others taken from `card`. */
function _tselExamples(cardKey, card) {
  var spec = TSEL_PROPS[cardKey];
  if (!spec) return '';
  var out = '';
  for (var i = 0; i < spec.values.length; i++) {
    var o = {};
    for (var k in card) o[k] = card[k];
    o[cardKey] = spec.values[i][0];
    out += '<figure class="eb-example">' + _tselRender(o)
      + '<figcaption class="eb-example__label">' + spec.values[i][1] + '</figcaption></figure>';
  }
  return '<div class="eb-examples">' + out + '</div>';
}

/* Spec-card state, one entry per card. */
var _specCards = {
  type:     { type: 'default', state: 'default', isFilled: 'false' },
  state:    { type: 'default', state: 'default', isFilled: 'false' },
  isFilled: { type: 'default', state: 'default', isFilled: 'false' }
};

/* ── Live preview panel ───────────────────────────────────────────── */
function _tselRead() {
  var g = function (id) { return document.getElementById(id); };
  return {
    type: g('tsel-ctrl-type') ? g('tsel-ctrl-type').value : 'default',
    state: g('tsel-ctrl-state') ? g('tsel-ctrl-state').value : 'default',
    isFilled: g('tsel-ctrl-isfilled') && g('tsel-ctrl-isfilled').checked ? 'true' : 'false'
  };
}

function _tselUpdate() {
  var host = document.getElementById('tsel-demo-preview');
  if (host) host.innerHTML = _tselRender(_tselRead());
}
window._tselUpdate = _tselUpdate;

/* ── DEV code — component API, never container code ───────────────── */
function _tselSnippet(lang, o, focus) {
  var type = o.type || 'default';
  var state = o.state || 'default';
  var filled = o.isFilled === 'true' || o.isFilled === true;
  var typeName = type === 'pesovector' ? 'PesoSignVector' : (type === 'pesotext' ? 'PesoSignText' : 'Default');
  var value = _tselValue(type, filled);

  var note = function (prop, text) { return focus === prop ? '   // ' + text : ''; };

  if (lang === 'swift') {
    var s = 'EBSelect("Label")\n'
      + '    .ebValue("' + value + '")' + note('isFilled', 'False: the placeholder string') + '\n'
      + '    .ebType(.' + (type === 'default' ? 'default' : (type === 'pesovector' ? 'pesoSignVector' : 'pesoSignText')) + ')'
      + note('type', 'or .pesoSignVector · .pesoSignText') + '\n'
      + '    .ebFilled(' + filled + ')';
    if (state === 'expanded') s += '\n    .ebExpanded(true)' + note('state', 'Default: omit');
    else if (focus === 'state') s += '\n    // Expanded: .ebExpanded(true)';
    if (state === 'error') s += '\n    .ebValidation(.error)';
    if (state === 'disabled') s += '\n    .disabled(true)';
    s += '\n    .ebOptions(options)';
    return s;
  }

  var k = 'EBSelect(\n    label = "Label",\n'
    + '    value = "' + value + '",' + note('isFilled', 'False: the placeholder string') + '\n'
    + '    type = EBSelectType.' + typeName + ',' + note('type', 'or PesoSignVector · PesoSignText') + '\n'
    + '    filled = ' + filled;
  if (state === 'expanded') k += ',\n    expanded = true' + note('state', 'Default: omit');
  else if (focus === 'state') k += '\n    // Expanded: expanded = true';
  if (state === 'error') k += ',\n    validation = EBValidation.Error';
  if (state === 'disabled') k += ',\n    enabled = false';
  k += ',\n    options = options\n)';
  return k;
}
window._tselSnippet = _tselSnippet;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var o = {};
  for (var k in c) o[k] = c[k];
  if (TSEL_PROPS[cardKey] && !(cardKey in o)) o[cardKey] = TSEL_PROPS[cardKey].values[0][0];
  return _tselSnippet(lang, o, cardKey);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('tsel-spec-' + cardKey);
  if (host) host.innerHTML = _tselExamples(cardKey, card);
}
window.updateSpecCard = updateSpecCard;

function _tselInit() {
  _tselUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var first = Object.keys(_specCards[k])[0];
    updateSpecCard(k, first, _specCards[k][first]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tselInit);
else _tselInit();
document.addEventListener('astro:page-load', _tselInit);
