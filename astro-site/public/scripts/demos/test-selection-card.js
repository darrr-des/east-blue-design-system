/* Selection Card — TEST page demo script.
 *
 * Trial read of a component outside the GCash DS inventory:
 * file wKe957vSsU9xGcLvdClyX8 (Cashier · Receipt Sticker Sheets),
 * set 3777:363452, read 16 September 2026 with the Talk To Figma plugin.
 * Every colour, size and offset below is read off the variants — nothing
 * is derived. What the plugin could not read is written "—" on the page.
 *
 * Schema (30 of 36 combinations built):
 *   Type            = Default | Cards | Option
 *   State           = Default | Pressed | Disabled
 *   isSelected      = False | True
 *   ValidationState = None | Error        (Type=Option has no Error variant)
 *
 * One note on the amount glyph: the Figma text node holds U+20A7 "₧"
 * (peseta) and draws as a peso because Proxima Soft maps it that way. The
 * preview draws U+20B1 "₱" so it matches the exported component; the code
 * point itself is raised as an open issue.
 */
var TSC_PROPS = {
  type:       { values: [['default', 'Default'], ['cards', 'Cards'], ['option', 'Option']] },
  state:      { values: [['default', 'Default'], ['pressed', 'Pressed'], ['disabled', 'Disabled']] },
  isSelected: { values: [['false', 'False'], ['true', 'True']] },
  validation: { values: [['none', 'None'], ['error', 'Error']] }
};

var TSC_PLUS = '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 3.2v9.6M3.2 8h9.6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>';

/* One card. `o` carries the four properties as strings. */
function _tscRender(o) {
  var type = o.type === 'cards' || o.type === 'option' ? o.type : 'default';
  var state = o.state === 'pressed' || o.state === 'disabled' ? o.state : 'default';
  var selected = o.isSelected === 'true' || o.isSelected === true;
  /* Type=Option ships no Error variant, so it can never draw one. */
  var error = (o.validation === 'error') && type !== 'option';
  var cls = 'eb-preview eb-preview-tsc eb-preview-tsc--' + type + ' eb-preview-tsc--' + state
    + (selected ? ' eb-preview-tsc--selected' : '')
    + (error ? ' eb-preview-tsc--error' : '');

  var lead = type === 'option'
    ? '<span class="eb-preview-tsc__radio"><span class="eb-preview-tsc__ring"><span class="eb-preview-tsc__dot"></span></span></span>'
    /* AssetContainer is an empty Slot: 32 × 32 of reserved space, nothing drawn. */
    : '<span class="eb-preview-tsc__asset"></span>';

  var text = '<span class="eb-preview-tsc__text"><span class="eb-preview-tsc__label">Label</span>'
    /* Type=Cards hides #description — its text-container is 16 tall. */
    + (type === 'cards' ? '' : '<span class="eb-preview-tsc__desc">Description</span>')
    + '</span>';

  var trailing = type === 'cards'
    ? '<span class="eb-preview-tsc__action">' + TSC_PLUS + '<span>Label</span></span>'
    : '<span class="eb-preview-tsc__trailing">'
      + '<span class="eb-preview-tsc__amount"><span class="eb-preview-tsc__peso">₱</span><span>Amount</span></span>'
      + '<span class="eb-preview-tsc__subtext">' + (type === 'option' ? 'Subtext-link' : 'Subtext') + '</span>'
      + '</span>';

  return '<div class="' + cls + '">' + lead + text + trailing + '</div>';
}

/* Every value of one property, each labelled, the others from `card`. */
function _tscExamples(prop, card) {
  var def = TSC_PROPS[prop];
  if (!def) return _tscRender(card || {});
  return '<div class="eb-examples">' + def.values.map(function (val) {
    var o = {};
    for (var k in card) o[k] = card[k];
    o[prop] = val[0];
    return '<figure class="eb-example">' + _tscRender(o) + '<figcaption class="eb-example__label">' + val[1] + '</figcaption></figure>';
  }).join('') + '</div>';
}

/* ── Overview live preview ─────────────────────────────────────────── */
function _tscUpdate() {
  var val = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var chk = function (id, fallback) { var el = document.getElementById(id); return el ? String(el.checked) : fallback; };
  var host = document.getElementById('tsc-demo-preview');
  if (!host) return;
  host.innerHTML = _tscRender({
    type: val('tsc-ctrl-type', 'default'),
    state: val('tsc-ctrl-state', 'default'),
    isSelected: chk('tsc-ctrl-isselected', 'false'),
    validation: val('tsc-ctrl-validation', 'none')
  });
}
window._tscUpdate = _tscUpdate;

/* ── Examples cards — one per Figma property ───────────────────────── */
var _specCards = {
  type:       { state: 'default', isSelected: 'false', validation: 'none' },
  state:      { type: 'default', isSelected: 'false', validation: 'none' },
  isSelected: { type: 'default', state: 'default', validation: 'none' },
  validation: { type: 'default', state: 'default', isSelected: 'false' }
};
window._specCards = _specCards;

/* The call for one configuration. `focus` names the card's own property;
   its alternatives are written as a trailing comment on that line. */
function _tscSnippet(lang, o, focus) {
  var type = o.type === 'cards' || o.type === 'option' ? o.type : 'default';
  var state = o.state === 'pressed' || o.state === 'disabled' ? o.state : 'default';
  var selected = o.isSelected === 'true' || o.isSelected === true;
  var error = o.validation === 'error' && type !== 'option';
  var cap = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
  var note = function (prop, text) { return focus === prop ? '  // ' + text : ''; };

  if (lang === 'swift') {
    var s = 'EBSelectionCard("Label")\n'
      + '    .ebDescription("Description")\n'
      + '    .ebAmount("Amount")\n'
      + '    .ebSubtext("Subtext")\n'
      + '    .ebType(.' + type + ')' + note('type', 'or .cards · .option') + '\n'
      + '    .ebSelected(' + selected + ')' + note('isSelected', 'False: omit') + '\n'
      + '    .ebAsset { EmptyView() }   // AssetContainer slot';
    if (error) s += '\n    .ebValidation(.error)' + note('validation', 'None: omit');
    else if (focus === 'validation') s += '\n    // Error: .ebValidation(.error)';
    if (state === 'disabled') s += '\n    .disabled(true)' + note('state', 'Default: omit · Pressed: the platform\'s own highlight');
    else if (focus === 'state') s += '\n    // Pressed: the platform\'s own highlight · Disabled: .disabled(true)';
    return s;
  }

  var k = 'EBSelectionCard(\n    label = "Label",\n    description = "Description",\n'
    + '    amount = "Amount",\n    subtext = "Subtext",\n'
    + '    type = EBSelectionType.' + cap(type) + ',' + note('type', 'or Cards · Option') + '\n'
    + '    selected = ' + selected + ',' + note('isSelected', 'False: omit') + '\n'
    + '    asset = { }';
  if (error) k += ',\n    validation = EBValidation.Error' + note('validation', 'None: omit');
  else if (focus === 'validation') k += '\n    // Error: validation = EBValidation.Error';
  if (state === 'disabled') k += ',\n    enabled = false' + note('state', 'Default: omit · Pressed: the platform\'s own ripple');
  else if (focus === 'state') k += '\n    // Pressed: the platform\'s own ripple · Disabled: enabled = false';
  k += '\n)';
  return k;
}
window._tscSnippet = _tscSnippet;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var o = {};
  for (var k in c) o[k] = c[k];
  if (TSC_PROPS[cardKey] && !(cardKey in o)) o[cardKey] = TSC_PROPS[cardKey].values[0][0];
  return _tscSnippet(lang, o, cardKey);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('tsc-spec-' + cardKey);
  if (host) host.innerHTML = _tscExamples(cardKey, card);
}
window.updateSpecCard = updateSpecCard;

function _tscInit() {
  _tscUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var first = Object.keys(_specCards[k])[0];
    updateSpecCard(k, first, _specCards[k][first]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tscInit);
else _tscInit();
document.addEventListener('astro:page-load', _tscInit);
