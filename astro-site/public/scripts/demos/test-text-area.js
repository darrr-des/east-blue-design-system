/* Text Area — TEST page demo script.
 *
 * Trial read of the Text Area component set, independent of the existing
 * `text-area` page: file pbxY8a2xcIfVZKxwnud9Xe (GCash DS · 2026 Working
 * File), set 4781:35856, read 17 September 2026 with the Talk To Figma
 * plugin. Every colour, size and string below is read off the variants.
 * What the plugin could not read is written "—" on the page.
 *
 * Schema (8 of 8 combinations built — a complete matrix):
 *   State    = Default | Focused | Error | Disabled
 *   hasValue = False | True
 *
 * Border weight was read from SVG exports of the box frames, not from the
 * node tree: Default draws at 1, Focused and Error at 2, and Disabled
 * carries no stroke at all. Padding, gap and alignment stay unread —
 * the plugin returns no auto-layout fields.
 *
 * The colour the page flags: State=Disabled with hasValue=True renders the
 * entered value at #90A8D0, the same colour as the placeholder, so real
 * content and an empty field are the same tone.
 */
var TTA_PROPS = {
  state:    { values: [['default', 'Default'], ['focused', 'Focused'], ['error', 'Error'], ['disabled', 'Disabled']] },
  hasValue: { values: [['false', 'False'], ['true', 'True']] }
};

var TTA_PLACEHOLDER = 'Write your message…';
var TTA_FILLED = 'This a text area. This a text area. This a text area. This a text area.';

/* One Text Area. `o` carries the two properties as strings. */
function _ttaRender(o) {
  var state = (o.state === 'focused' || o.state === 'error' || o.state === 'disabled') ? o.state : 'default';
  var filled = o.hasValue === 'true' || o.hasValue === true;

  var cls = 'eb-preview eb-preview-tta eb-preview-tta--' + state + (filled ? ' eb-preview-tta--filled' : '');

  /* The counter is drawn text in the Subtext Message instance: 0/100 when
   * empty, 71/100 on the filled variants. */
  var count = filled ? '71/100' : '0/100';

  return '<div class="' + cls + '">'
    + '<span class="eb-preview-tta__label">Label</span>'
    + '<span class="eb-preview-tta__box"><span class="eb-preview-tta__value">'
    + (filled ? TTA_FILLED : TTA_PLACEHOLDER) + '</span></span>'
    + '<span class="eb-preview-tta__sub">'
    + '<span class="eb-preview-tta__helper">Message content</span>'
    + '<span class="eb-preview-tta__count">' + count + '</span>'
    + '</span>'
    + '</div>';
}

/* Every value of one property, each labelled, the others taken from `card`. */
function _ttaExamples(cardKey, card) {
  var spec = TTA_PROPS[cardKey];
  if (!spec) return '';
  var out = '';
  for (var i = 0; i < spec.values.length; i++) {
    var o = {};
    for (var k in card) o[k] = card[k];
    o[cardKey] = spec.values[i][0];
    out += '<figure class="eb-example">' + _ttaRender(o)
      + '<figcaption class="eb-example__label">' + spec.values[i][1] + '</figcaption></figure>';
  }
  return '<div class="eb-examples">' + out + '</div>';
}

var _specCards = {
  state:    { state: 'default', hasValue: 'false' },
  hasValue: { state: 'default', hasValue: 'false' }
};

/* ── Live preview panel ───────────────────────────────────────────── */
function _ttaRead() {
  var g = function (id) { return document.getElementById(id); };
  return {
    state: g('tta-ctrl-state') ? g('tta-ctrl-state').value : 'default',
    hasValue: g('tta-ctrl-hasvalue') && g('tta-ctrl-hasvalue').checked ? 'true' : 'false'
  };
}

function _ttaUpdate() {
  var host = document.getElementById('tta-demo-preview');
  if (host) host.innerHTML = _ttaRender(_ttaRead());
}
window._ttaUpdate = _ttaUpdate;

/* ── DEV code — component API, never container code ───────────────── */
function _ttaSnippet(lang, o, focus) {
  var state = o.state || 'default';
  var filled = o.hasValue === 'true' || o.hasValue === true;
  var note = function (prop, text) { return focus === prop ? '   // ' + text : ''; };
  var value = filled ? TTA_FILLED : '';

  if (lang === 'swift') {
    var s = 'EBTextArea("Label", text: $message)\n'
      + '    .ebPlaceholder("' + TTA_PLACEHOLDER + '")\n'
      + '    .ebSubtext("Message content")\n'
      + '    .ebLimit(100)';
    if (filled) s += '\n    .ebValue("' + value + '")' + note('hasValue', 'False: the placeholder shows');
    else if (focus === 'hasValue') s += '\n    // True: .ebValue("…")';
    if (state === 'focused') s += '\n    .ebFocused(true)' + note('state', 'Default: omit');
    else if (focus === 'state') s += '\n    // Focused: .ebFocused(true)';
    if (state === 'error') s += '\n    .ebValidation(.error)';
    if (state === 'disabled') s += '\n    .disabled(true)';
    return s;
  }

  var k = 'EBTextArea(\n    label = "Label",\n'
    + '    value = message,\n'
    + '    onValueChange = { message = it },\n'
    + '    placeholder = "' + TTA_PLACEHOLDER + '",\n'
    + '    subtext = "Message content",\n'
    + '    limit = 100';
  if (filled) k += ',\n    // hasValue is content, not a parameter' + note('hasValue', 'True when value is not empty');
  if (state === 'focused') k += ',\n    focused = true' + note('state', 'Default: omit');
  else if (focus === 'state') k += '\n    // Focused: focused = true';
  if (state === 'error') k += ',\n    validation = EBValidation.Error';
  if (state === 'disabled') k += ',\n    enabled = false';
  k += '\n)';
  return k;
}
window._ttaSnippet = _ttaSnippet;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var o = {};
  for (var k in c) o[k] = c[k];
  if (TTA_PROPS[cardKey] && !(cardKey in o)) o[cardKey] = TTA_PROPS[cardKey].values[0][0];
  return _ttaSnippet(lang, o, cardKey);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('tta-spec-' + cardKey);
  if (host) host.innerHTML = _ttaExamples(cardKey, card);
}
window.updateSpecCard = updateSpecCard;

function _ttaInit() {
  _ttaUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var first = Object.keys(_specCards[k])[0];
    updateSpecCard(k, first, _specCards[k][first]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ttaInit);
else _ttaInit();
document.addEventListener('astro:page-load', _ttaInit);
