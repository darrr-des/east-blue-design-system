/* Action Row (slug action-list) — live preview + spec cards.
 * Set 4628:19843 (2026 Working File): TrailingContent = CTA | Counter ×
 * State = Default | Pressed | Disabled | Loading × Density = Compact |
 * Expanded = 16 variants, plus the hasDescription boolean.
 *
 * Read off the variants and checked against export_node_as_image:
 *   CTA 4628:19844 · Counter 4628:19883 · Pressed 4628:20022 ·
 *   Disabled 4628:19939 / 4628:19965 · Loading 4649:16649 · Expanded 4628:19857
 */

function _arowEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Chevron Right — path and stroke from get_svg(4628:20854). */
function _arowChevron() {
  return '<svg class="eb-preview-arow__chevron" viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
    '<path d="M13 23L20 16L13 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
  '</svg>';
}

/* opts: { trailing: cta|counter, state: default|pressed|disabled|loading,
           density: compact|expanded, hasDescription: 'true'|'false',
           label, description, cta, count } */
function _arowRender(opts) {
  var trailing = opts.trailing || 'cta';
  var state = opts.state || 'default';
  var density = opts.density || 'compact';
  var hasDescription = String(opts.hasDescription == null ? 'true' : opts.hasDescription) === 'true';
  var label = opts.label || 'Label';
  var description = opts.description || 'description';
  var cta = opts.cta || 'CTA';
  var count = opts.count == null || opts.count === '' ? '0' : opts.count;

  var cls = 'eb-preview eb-preview-arow eb-preview-arow--' + trailing + ' eb-preview-arow--' + density;
  if (state !== 'default') cls += ' eb-preview-arow--' + state;

  if (state === 'loading') {
    return '<div class="' + cls + '">' +
      '<span class="eb-preview-arow__sk eb-preview-arow__sk--asset"></span>' +
      '<div class="eb-preview-arow__sk-lines"><span class="eb-preview-arow__sk eb-preview-arow__sk--line1"></span><span class="eb-preview-arow__sk eb-preview-arow__sk--line2"></span></div>' +
      '<div class="eb-preview-arow__sk-actions"><span class="eb-preview-arow__sk eb-preview-arow__sk--square"></span><span class="eb-preview-arow__sk eb-preview-arow__sk--square"></span></div>' +
    '</div>';
  }

  var html = '<div class="' + cls + '">';
  html += '<span class="eb-preview-arow__asset" aria-hidden="true"></span>';
  html += '<div class="eb-preview-arow__text">';
  html += '<p class="eb-preview-arow__label">' + _arowEscape(label) + '</p>';
  if (hasDescription) html += '<p class="eb-preview-arow__description">' + _arowEscape(description) + '</p>';
  html += '</div>';
  html += '<div class="eb-preview-arow__trailing">';
  if (trailing === 'counter') {
    html += _arowChevron() + '<span class="eb-preview-arow__counter">' + _arowEscape(count) + '</span>';
  } else {
    html += '<span class="eb-preview-arow__cta">' + _arowEscape(cta) + '</span>' + _arowChevron();
  }
  html += '</div>';
  html += '</div>';
  return html;
}

/* ── Overview live preview — the Figma properties + text slots ─────── */
function _arowUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('arow-demo-preview');
  if (!preview) return;
  preview.innerHTML = _arowRender({
    trailing:       getVal('arow-ctrl-trailing', 'cta'),
    state:          getVal('arow-ctrl-state', 'default'),
    density:        getVal('arow-ctrl-density', 'compact'),
    hasDescription: getVal('arow-ctrl-hasdescription', 'true'),
    label:          getVal('arow-ctrl-label', 'Label'),
    description:    getVal('arow-ctrl-description', 'description'),
    cta:            getVal('arow-ctrl-cta', 'CTA'),
    count:          getVal('arow-ctrl-count', '0')
  });
}
window._arowUpdate = _arowUpdate;

/* ── Spec cards — one per TrailingContent value, keyed by demoKey ──── */
var _specCards = {
  'cta':     { trailing: 'cta',     state: 'default', density: 'compact', hasDescription: 'true' },
  'counter': { trailing: 'counter', state: 'default', density: 'compact', hasDescription: 'true' }
};
window._specCards = _specCards;

/* Component-API snippets that follow the panel — plain text. */
function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var trailing = c.trailing || 'cta';
  var state = c.state || 'default';
  var density = c.density || 'compact';
  var hasDescription = String(c.hasDescription) !== 'false';
  if (lang === 'swift') {
    var s = 'EBActionRow("Label"' + (hasDescription ? ', description: "description"' : '') + ')';
    s += '\n    .ebLeadingAsset(Image("placeholder"))';
    s += '\n    .ebTrailing(' + (trailing === 'counter' ? '.counter(0)' : '.cta("CTA")') + ')';
    s += '\n    .ebDensity(.' + density + ')';
    if (state === 'disabled') s += '\n    .disabled(true)';
    if (state === 'loading') s += '\n    .ebLoading(true)';
    return s;
  }
  var lines = ['    label = "Label"'];
  if (hasDescription) lines.push('    description = "description"');
  lines.push('    leadingAsset = { Icon(…) }');
  lines.push('    trailing = ' + (trailing === 'counter' ? 'EBActionRowTrailing.Counter(0)' : 'EBActionRowTrailing.Cta("CTA")'));
  lines.push('    density = EBActionRowDensity.' + (density === 'expanded' ? 'Expanded' : 'Compact'));
  if (state === 'disabled') lines.push('    enabled = false');
  if (state === 'loading') lines.push('    isLoading = true');
  return 'EBActionRow(\n' + lines.join(',\n') + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('arow-spec-' + cardKey);
  if (host) host.innerHTML = _arowRender(card);
}
window.updateSpecCard = updateSpecCard;

function _arowInit() {
  _arowUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'state', _specCards[k].state); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _arowInit);
else _arowInit();
document.addEventListener('astro:page-load', _arowInit);
