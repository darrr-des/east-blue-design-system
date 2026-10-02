/* Toast — live preview + spec cards.
 * Set 4915:25141 (2026 Working File): Appearance = Default | Destructive |
 * Pending × Theme = Dark | Light × Size = MD | SM × hasLeadingIcon ×
 * hasTrailingAction × hasDescription — 22 built variants. The preview
 * composes every combination from the parts Figma built.
 *
 * Read off the variants and checked against export_node_as_image:
 *   Default·Dark 4915:25142 · Default·Light 4915:25148 · Destructive
 *   4915:25154 · Pending 4915:25160 / 4915:25166 · SM 4915:25186 · with
 *   action 4915:25240 · with action + description 4915:25216 / 4915:25224 /
 *   4915:25232. Icon glyphs from get_svg on the LeadingIcon frames.
 */

function _tstEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

var TST_ICON = {
  'default': 'M12.002 10.0996C16.9171 10.0998 20.9023 14.0848 20.9023 19C20.9021 23.915 16.917 27.9002 12.002 27.9004C7.08675 27.9004 3.10177 23.9152 3.10156 19C3.10156 14.0847 7.08662 10.0996 12.002 10.0996ZM12.002 11.9004C8.08073 11.9004 4.90234 15.0788 4.90234 19C4.90255 22.921 8.08086 26.0996 12.002 26.0996C15.9229 26.0994 19.1014 22.9209 19.1016 19C19.1016 15.0789 15.923 11.9006 12.002 11.9004ZM15.4004 16.3301C15.7703 15.9982 16.3399 16.0287 16.6719 16.3984C17.0034 16.7683 16.9731 17.338 16.6035 17.6699L11.0312 22.6699C10.6717 22.9923 10.1218 22.9731 9.78516 22.627L7.35645 20.127C7.01016 19.7704 7.01849 19.2008 7.375 18.8545C7.73153 18.5082 8.30114 18.5165 8.64746 18.873L10.4727 20.752L15.4004 16.3301Z',
  'destructive': 'M12.002 10.0996C16.9171 10.0998 20.9023 14.0848 20.9023 19C20.9021 23.915 16.917 27.9002 12.002 27.9004C7.08675 27.9004 3.10177 23.9152 3.10156 19C3.10156 14.0847 7.08662 10.0996 12.002 10.0996ZM12.002 11.9004C8.08073 11.9004 4.90234 15.0788 4.90234 19C4.90255 22.921 8.08086 26.0996 12.002 26.0996C15.9229 26.0994 19.1014 22.9209 19.1016 19C19.1016 15.0789 15.923 11.9006 12.002 11.9004ZM13.7949 15.793C14.1854 15.4024 14.8185 15.4024 15.209 15.793C15.5991 16.1835 15.5994 16.8166 15.209 17.207L13.416 19L15.209 20.793C15.5991 21.1835 15.5994 21.8166 15.209 22.207C14.8186 22.5974 14.1855 22.5972 13.7949 22.207L12.002 20.4141L10.209 22.207C9.81859 22.5974 9.18548 22.5972 8.79492 22.207C8.4044 21.8165 8.4044 21.1835 8.79492 20.793L10.5879 19L8.79492 17.207C8.4044 16.8165 8.4044 16.1835 8.79492 15.793C9.18545 15.4024 9.81846 15.4024 10.209 15.793L12.002 17.5859L13.7949 15.793Z',
  'pending': 'M12.002 10.0996C16.9171 10.0998 20.9023 14.0848 20.9023 19C20.9021 23.915 16.917 27.9002 12.002 27.9004C7.08675 27.9004 3.10177 23.9152 3.10156 19C3.10156 14.0847 7.08662 10.0996 12.002 10.0996ZM12.002 11.9004C8.08073 11.9004 4.90234 15.0788 4.90234 19C4.90255 22.921 8.08086 26.0996 12.002 26.0996C15.9229 26.0994 19.1014 22.9209 19.1016 19C19.1016 15.0789 15.923 11.9006 12.002 11.9004ZM12.002 17.2002C12.4436 17.2004 12.8018 17.5583 12.8018 18V22.2002H13.002C13.4436 22.2004 13.8018 22.5583 13.8018 23C13.8015 23.4415 13.4435 23.7996 13.002 23.7998H11.002C10.5603 23.7998 10.2024 23.4416 10.2021 23C10.2021 22.5582 10.5601 22.2002 11.002 22.2002H11.2021V18.7998H11.002C10.5603 18.7998 10.2024 18.4416 10.2021 18C10.2021 17.5582 10.5601 17.2002 11.002 17.2002H12.002ZM12.002 14C12.5541 14.0002 13.002 14.4478 13.002 15C13.0017 15.552 12.5539 15.9998 12.002 16C11.4498 16 11.0022 15.5521 11.002 15C11.002 14.4477 11.4497 14 12.002 14Z'
};

function _tstIcon(appearance) {
  return '<svg class="eb-preview-tst__icon" viewBox="0 7 24 24" aria-hidden="true"><path d="' + (TST_ICON[appearance] || TST_ICON['default']) + '" fill="currentColor"/></svg>';
}

function _tstOn(v, def) { return String(v == null ? def : v) === 'true'; }

/* opts: { appearance: default|destructive|pending, theme: dark|light, size: md|sm,
           hasLeadingIcon, hasTrailingAction, hasDescription, title, description, action } */
function _tstRender(opts) {
  var appearance = ['default', 'destructive', 'pending'].indexOf(opts.appearance) !== -1 ? opts.appearance : 'default';
  var theme = opts.theme === 'light' ? 'light' : 'dark';
  var size = opts.size === 'sm' ? 'sm' : 'md';
  var icon = _tstOn(opts.hasLeadingIcon, 'true');
  var action = _tstOn(opts.hasTrailingAction, 'false');
  var desc = _tstOn(opts.hasDescription, 'false');
  var title = opts.title || (action || desc ? 'Add label here' : 'Add the popup message here');
  var description = opts.description || 'Add description here.';
  var actionLabel = opts.action || (appearance === 'destructive' ? 'Retry' : 'Label');

  var cls = 'eb-preview eb-preview-tst eb-preview-tst--' + appearance + ' eb-preview-tst--' + theme + ' eb-preview-tst--' + size;
  if (action) cls += ' eb-preview-tst--action';
  if (desc) cls += ' eb-preview-tst--desc';
  var html = '<div class="' + cls + '">';
  if (icon && !action && !desc) html += _tstIcon(appearance);
  html += '<div class="eb-preview-tst__text">';
  html += '<p class="eb-preview-tst__title">' + _tstEscape(title) + '</p>';
  if (desc) html += '<p class="eb-preview-tst__description">' + _tstEscape(description) + '</p>';
  html += '</div>';
  if (action) html += '<span class="eb-preview-tst__button">' + _tstEscape(actionLabel) + '</span>';
  return html + '</div>';
}

/* ── Overview live preview ─────────────────────────────────────────── */
function _toastUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var el = document.getElementById('toast-demo-preview');
  if (!el) return;
  el.innerHTML = _tstRender({
    appearance:        getVal('toast-ctrl-appearance', 'default'),
    theme:             getVal('toast-ctrl-theme', 'dark'),
    size:              getVal('toast-ctrl-size', 'md'),
    hasLeadingIcon:    getVal('toast-ctrl-hasleadingicon', 'true'),
    hasTrailingAction: getVal('toast-ctrl-hastrailingaction', 'false'),
    hasDescription:    getVal('toast-ctrl-hasdescription', 'false'),
    title:             getVal('toast-ctrl-title', ''),
    description:       getVal('toast-ctrl-description', ''),
    action:            getVal('toast-ctrl-action', '')
  });
}
window._toastUpdate = _toastUpdate;

/* ── Spec cards — one per Appearance value, keyed by demoKey ────────── */
function _tstCard(a) { return { appearance: a, theme: 'dark', size: 'md', hasLeadingIcon: 'true', hasTrailingAction: 'false', hasDescription: 'false' }; }
var _specCards = { 'default': _tstCard('default'), 'destructive': _tstCard('destructive'), 'pending': _tstCard('pending') };
window._specCards = _specCards;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || _tstCard('default');
  var cap = function (v) { return v.charAt(0).toUpperCase() + v.slice(1); };
  var icon = _tstOn(c.hasLeadingIcon, 'true'), action = _tstOn(c.hasTrailingAction, 'false'), desc = _tstOn(c.hasDescription, 'false');
  var title = action || desc ? 'Add label here' : 'Add the popup message here';
  if (lang === 'swift') {
    var s = 'EBToast("' + title + '")\n    .ebAppearance(.' + c.appearance + ')\n    .ebTheme(.' + c.theme + ')\n    .ebSize(.' + c.size + ')';
    if (!icon) s += '\n    .ebLeadingIcon(false)';
    if (desc) s += '\n    .ebDescription("Add description here.")';
    if (action) s += '\n    .ebAction("' + (c.appearance === 'destructive' ? 'Retry' : 'Label') + '") { }';
    return s;
  }
  var lines = ['    title = "' + title + '"', '    appearance = EBToastAppearance.' + cap(c.appearance), '    theme = EBToastTheme.' + cap(c.theme), '    size = EBToastSize.' + c.size.toUpperCase()];
  if (!icon) lines.push('    leadingIcon = false');
  if (desc) lines.push('    description = "Add description here."');
  if (action) lines.push('    action = EBToastAction("' + (c.appearance === 'destructive' ? 'Retry' : 'Label') + '") { }');
  return 'EBToast(\n' + lines.join(',\n') + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('toast-spec-' + cardKey);
  if (host) host.innerHTML = _tstRender(card);
}
window.updateSpecCard = updateSpecCard;

function _toastInit() {
  _toastUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'theme', _specCards[k].theme); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _toastInit);
else _toastInit();
document.addEventListener('astro:page-load', _toastInit);
