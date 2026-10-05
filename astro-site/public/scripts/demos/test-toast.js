/* Toast — TEST page demo script.
 *
 * Trial read of the Toast component set, independent of the existing
 * `toast` page: file pbxY8a2xcIfVZKxwnud9Xe (GCash DS · 2026 Working File),
 * set 4915:25141, read 18 September 2026 — geometry and bindings over the
 * Figma REST API, token names from src/data/tokens.json through
 * scripts/audit/figma-verify.mjs, icons and the set as plugin exports.
 *
 * The set is sparse: 22 of the 96 combinations its six axes allow. The
 * preview draws only those 22. Any other combination renders a "not built"
 * placeholder rather than a design Figma does not have.
 *
 *   Appearance        = Default | Destructive | Pending
 *   Theme             = Dark | Light
 *   Size              = MD | SM
 *   hasLeadingIcon    = True | False
 *   hasTrailingAction = False | True
 *   hasDescription    = True | False
 */
var TTO_PROPS = {
  appearance:        { values: [['default', 'Default'], ['destructive', 'Destructive'], ['pending', 'Pending']] },
  theme:             { values: [['dark', 'Dark'], ['light', 'Light']] },
  size:              { values: [['md', 'MD'], ['sm', 'SM']] },
  hasLeadingIcon:    { values: [['true', 'True'], ['false', 'False']] },
  hasTrailingAction: { values: [['false', 'False'], ['true', 'True']] },
  hasDescription:    { values: [['false', 'False'], ['true', 'True']] }
};

/* The 22 built combinations: appearance|theme|size|lead|trail|desc. */
var TTO_BUILT = {
  'default|dark|md|false|false|false': '4915:25175', 'default|dark|md|false|true|false': '4915:25240',
  'default|dark|md|false|true|true': '4915:25216',   'default|dark|md|true|false|false': '4915:25142',
  'default|dark|sm|false|false|false': '4915:25210', 'default|dark|sm|true|false|false': '4915:25186',
  'default|light|md|false|false|false': '4915:25178','default|light|md|false|true|false': '4915:25245',
  'default|light|md|false|true|true': '4915:25224',  'default|light|md|true|false|false': '4915:25148',
  'default|light|sm|false|false|false': '4915:25213','default|light|sm|true|false|false': '4915:25192',
  'destructive|dark|md|false|false|false': '4915:25172', 'destructive|dark|md|true|false|false': '4915:25154',
  'destructive|dark|sm|false|false|false': '4915:25197', 'destructive|dark|sm|true|false|false': '4915:25181',
  'destructive|light|md|false|true|false': '4915:25250', 'destructive|light|md|false|true|true': '4915:25232',
  'pending|dark|md|true|false|false': '4915:25160',  'pending|dark|sm|true|false|false': '4915:25200',
  'pending|light|md|true|false|false': '4915:25166', 'pending|light|sm|true|false|false': '4915:25205'
};

/* Leading icons, exported as SVG (4915:25151 · 4915:25169 · 4915:25157).
 * Each is a flattened fill in the export; in Figma each is an unflattened
 * union. Drawn in currentColor so the theme sets the tone. */
var TTO_ICON = {
  default: 'M12 3.09961C16.9152 3.09982 20.9004 7.0848 20.9004 12C20.9002 16.915 16.915 20.9002 12 20.9004C7.0848 20.9004 3.09982 16.9152 3.09961 12C3.09961 7.08467 7.08467 3.09961 12 3.09961ZM12 4.90039C8.07878 4.90039 4.90039 8.07878 4.90039 12C4.9006 15.921 8.07891 19.0996 12 19.0996C15.9209 19.0994 19.0994 15.9209 19.0996 12C19.0996 8.07891 15.921 4.9006 12 4.90039ZM15.3984 9.33008C15.7683 8.99817 16.3379 9.0287 16.6699 9.39844C17.0015 9.76831 16.9712 10.338 16.6016 10.6699L11.0293 15.6699C10.6698 15.9923 10.1199 15.9731 9.7832 15.627L7.35449 13.127C7.00821 12.7704 7.01654 12.2008 7.37305 11.8545C7.72958 11.5082 8.29919 11.5165 8.64551 11.873L10.4707 13.752L15.3984 9.33008Z',
  pending: 'M12 3.09961C16.9152 3.09982 20.9004 7.0848 20.9004 12C20.9002 16.915 16.915 20.9002 12 20.9004C7.0848 20.9004 3.09982 16.9152 3.09961 12C3.09961 7.08467 7.08467 3.09961 12 3.09961ZM12 4.90039C8.07878 4.90039 4.90039 8.07878 4.90039 12C4.9006 15.921 8.07891 19.0996 12 19.0996C15.9209 19.0994 19.0994 15.9209 19.0996 12C19.0996 8.07891 15.921 4.9006 12 4.90039ZM12 10.2002C12.4416 10.2004 12.7998 10.5583 12.7998 11V15.2002H13C13.4416 15.2004 13.7998 15.5583 13.7998 16C13.7996 16.4415 13.4415 16.7996 13 16.7998H11C10.5583 16.7998 10.2004 16.4416 10.2002 16C10.2002 15.5582 10.5582 15.2002 11 15.2002H11.2002V11.7998H11C10.5583 11.7998 10.2004 11.4416 10.2002 11C10.2002 10.5582 10.5582 10.2002 11 10.2002H12ZM12 7C12.5521 7.00021 13 7.44785 13 8C12.9998 8.55198 12.552 8.99979 12 9C11.4478 9 11.0002 8.55211 11 8C11 7.44772 11.4477 7 12 7Z',
  destructive: 'M12 3.09961C16.9152 3.09982 20.9004 7.0848 20.9004 12C20.9002 16.915 16.915 20.9002 12 20.9004C7.0848 20.9004 3.09982 16.9152 3.09961 12C3.09961 7.08467 7.08467 3.09961 12 3.09961ZM12 4.90039C8.07878 4.90039 4.90039 8.07878 4.90039 12C4.9006 15.921 8.07891 19.0996 12 19.0996C15.9209 19.0994 19.0994 15.9209 19.0996 12C19.0996 8.07891 15.921 4.9006 12 4.90039ZM13.793 8.79297C14.1835 8.40244 14.8165 8.40244 15.207 8.79297C15.5972 9.18352 15.5974 9.81664 15.207 10.207L13.4141 12L15.207 13.793C15.5972 14.1835 15.5974 14.8166 15.207 15.207C14.8166 15.5974 14.1835 15.5972 13.793 15.207L12 13.4141L10.207 15.207C9.81664 15.5974 9.18352 15.5972 8.79297 15.207C8.40244 14.8165 8.40244 14.1835 8.79297 13.793L10.5859 12L8.79297 10.207C8.40244 9.81651 8.40244 9.18349 8.79297 8.79297C9.18349 8.40244 9.81651 8.40244 10.207 8.79297L12 10.5859L13.793 8.79297Z'
};

function _ttoOn(v) { return v === true || v === 'true'; }

function _ttoNorm(o) {
  return {
    appearance: (o.appearance === 'destructive' || o.appearance === 'pending') ? o.appearance : 'default',
    theme: o.theme === 'light' ? 'light' : 'dark',
    size: o.size === 'sm' ? 'sm' : 'md',
    lead: o.hasLeadingIcon === undefined ? true : _ttoOn(o.hasLeadingIcon),
    trail: _ttoOn(o.hasTrailingAction),
    desc: _ttoOn(o.hasDescription)
  };
}

function _ttoKey(n) { return [n.appearance, n.theme, n.size, n.lead, n.trail, n.desc].join('|'); }

/* One Toast, or a "not built" placeholder when Figma has no such variant. */
function _ttoRender(o) {
  var n = _ttoNorm(o);
  var node = TTO_BUILT[_ttoKey(n)];
  if (!node) {
    return '<div class="eb-preview eb-preview-tto eb-preview-tto--missing"><span>Not built in Figma</span></div>';
  }
  /* Destructive draws red under both themes — its tone ignores Theme. */
  var tone = n.appearance === 'destructive' ? 'destructive' : n.theme;
  var layout = n.trail ? (n.desc ? 'action-desc' : 'action') : 'plain';
  var cls = 'eb-preview eb-preview-tto eb-preview-tto--' + tone + ' eb-preview-tto--' + layout + ' eb-preview-tto--' + n.size
    + (n.size === 'md' && !n.trail ? ' eb-preview-tto--shadow' : '');

  var icon = n.lead
    ? '<span class="eb-preview-tto__icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + TTO_ICON[n.appearance] + '" fill="currentColor"/></svg></span>'
    : '';

  if (n.trail) {
    var button = n.appearance === 'destructive'
      ? '<span class="eb-preview-tto__action eb-preview-tto__action--link">Retry</span>'
      : '<span class="eb-preview-tto__action">Label</span>';
    var text = '<span class="eb-preview-tto__text"><span class="eb-preview-tto__title eb-preview-tto__title--bold">Add label here</span>'
      + (n.desc ? '<span class="eb-preview-tto__desc">Add description here.</span>' : '') + '</span>';
    return '<div class="' + cls + '"><span class="eb-preview-tto__row">' + text + button + '</span></div>';
  }
  return '<div class="' + cls + '"><span class="eb-preview-tto__row">' + icon
    + '<span class="eb-preview-tto__text"><span class="eb-preview-tto__title">Add the popup message here</span></span></span></div>';
}

function _ttoExamples(cardKey, card) {
  var spec = TTO_PROPS[cardKey];
  if (!spec) return '';
  var out = '';
  for (var i = 0; i < spec.values.length; i++) {
    var o = {};
    for (var k in card) o[k] = card[k];
    o[cardKey] = spec.values[i][0];
    out += '<figure class="eb-example">' + _ttoRender(o)
      + '<figcaption class="eb-example__label">' + spec.values[i][1] + '</figcaption></figure>';
  }
  return '<div class="eb-examples">' + out + '</div>';
}

/* Each card starts on a combination that exists for every value it shows. */
var _specCards = {
  appearance:        { appearance: 'default', theme: 'dark', size: 'md', hasLeadingIcon: 'true', hasTrailingAction: 'false', hasDescription: 'false' },
  theme:             { appearance: 'default', theme: 'dark', size: 'md', hasLeadingIcon: 'true', hasTrailingAction: 'false', hasDescription: 'false' },
  size:              { appearance: 'default', theme: 'dark', size: 'md', hasLeadingIcon: 'true', hasTrailingAction: 'false', hasDescription: 'false' },
  hasLeadingIcon:    { appearance: 'default', theme: 'dark', size: 'md', hasLeadingIcon: 'true', hasTrailingAction: 'false', hasDescription: 'false' },
  hasTrailingAction: { appearance: 'default', theme: 'light', size: 'md', hasLeadingIcon: 'false', hasTrailingAction: 'false', hasDescription: 'false' },
  hasDescription:    { appearance: 'default', theme: 'light', size: 'md', hasLeadingIcon: 'false', hasTrailingAction: 'true', hasDescription: 'false' }
};

/* ── Live preview panel ───────────────────────────────────────────── */
function _ttoRead() {
  var g = function (id) { return document.getElementById(id); };
  var sel = function (id, d) { return g(id) ? g(id).value : d; };
  var chk = function (id, d) { return g(id) ? (g(id).checked ? 'true' : 'false') : d; };
  return {
    appearance: sel('tto-ctrl-appearance', 'default'), theme: sel('tto-ctrl-theme', 'dark'), size: sel('tto-ctrl-size', 'md'),
    hasLeadingIcon: chk('tto-ctrl-lead', 'true'), hasTrailingAction: chk('tto-ctrl-trail', 'false'), hasDescription: chk('tto-ctrl-desc', 'false')
  };
}

function _ttoUpdate() {
  var host = document.getElementById('tto-demo-preview');
  if (host) host.innerHTML = _ttoRender(_ttoRead());
}
window._ttoUpdate = _ttoUpdate;

/* ── DEV code — component API, never container code ───────────────── */
function _ttoSnippet(lang, o, focus) {
  var n = _ttoNorm(o);
  var note = function (prop, text) { return focus === prop ? '   // ' + text : ''; };
  var built = !!TTO_BUILT[_ttoKey(n)];
  var head = built ? '' : (lang === 'swift' ? '// Not built in Figma — no variant for this combination\n' : '// Not built in Figma — no variant for this combination\n');
  var cap = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };

  if (lang === 'swift') {
    var s = head + 'EBToast(' + (n.trail ? '"Add label here"' : '"Add the popup message here"') + ')\n'
      + '    .ebAppearance(.' + n.appearance + ')' + note('appearance', 'or .default · .destructive · .pending') + '\n'
      + '    .ebTheme(.' + n.theme + ')' + note('theme', 'no effect on .destructive') + '\n'
      + '    .ebSize(.' + n.size + ')' + note('size', 'or .md · .sm');
    if (!n.lead) s += '\n    .ebLeadingIcon(false)' + note('hasLeadingIcon', 'True: omit');
    if (n.desc) s += '\n    .ebDescription("Add description here.")' + note('hasDescription', 'only with an action');
    if (n.trail) s += '\n    .ebAction("' + (n.appearance === 'destructive' ? 'Retry' : 'Label') + '") { }' + note('hasTrailingAction', 'False: omit');
    return s;
  }
  var k = head + 'EBToast(\n    message = ' + (n.trail ? '"Add label here"' : '"Add the popup message here"') + ',\n'
    + '    appearance = EBToastAppearance.' + cap(n.appearance) + ',' + note('appearance', 'or Default · Destructive · Pending') + '\n'
    + '    theme = EBToastTheme.' + cap(n.theme) + ',' + note('theme', 'no effect on Destructive') + '\n'
    + '    size = EBToastSize.' + n.size.toUpperCase();
  if (!n.lead) k += ',\n    leadingIcon = false' + note('hasLeadingIcon', 'True: omit');
  if (n.desc) k += ',\n    description = "Add description here."' + note('hasDescription', 'only with an action');
  if (n.trail) k += ',\n    action = EBToastAction("' + (n.appearance === 'destructive' ? 'Retry' : 'Label') + '") { }' + note('hasTrailingAction', 'False: omit');
  k += '\n)';
  return k;
}
window._ttoSnippet = _ttoSnippet;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var o = {};
  for (var k in c) o[k] = c[k];
  if (TTO_PROPS[cardKey] && !(cardKey in o)) o[cardKey] = TTO_PROPS[cardKey].values[0][0];
  return _ttoSnippet(lang, o, cardKey);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('tto-spec-' + cardKey);
  if (host) host.innerHTML = _ttoExamples(cardKey, card);
}
window.updateSpecCard = updateSpecCard;

function _ttoInit() {
  _ttoUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var first = Object.keys(_specCards[k])[0];
    updateSpecCard(k, first, _specCards[k][first]);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ttoInit);
else _ttoInit();
document.addEventListener('astro:page-load', _ttoInit);
