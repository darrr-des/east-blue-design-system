/* Stepper (slug stepper-bullet) — live preview + spec cards.
 * Set 4337:11140 (2026 Working File): Type = Bullet | Circular | Dash ×
 * Steps = 2…10 × Current = 0…10 × Status = Current | Completed | Upcoming |
 * Error — 225 built variants (Bullet: Current + N/N Completed; Circular:
 * Current + Steps=2 Upcoming/Completed; Dash: Current, Error, N/N Completed).
 *
 * Read off the variants and checked against export_node_as_image:
 *   Bullet 4337:11205 / 4337:11586 · Circular 4365:12137 / 4773:31490 /
 *   4695:22509 · Dash 4695:22253 / 4773:32386 / 4773:32832
 */

var STP = { fill: '#005CE5', track: '#D2E5FF', error: '#D61B2C', done: '#12AF80', upcomingIndex: '#9BC5FD' };
var STP_STATUS = { bullet: ['current', 'completed'], circular: ['current', 'upcoming', 'completed'], dash: ['current', 'error', 'completed'] };

function _stpInt(v, fallback) { var n = parseInt(v, 10); return isNaN(n) ? fallback : n; }

/* Circular — ring r 20 stroke 5 (get_svg 4365:12140); arc is a round-capped
   stroke from 12 o'clock, sweep = current / steps; Completed is a full
   #12AF80 ring with the 16 × 16 Checkmark instance (get_svg 4695:22588). */
function _stpCircular(steps, current, status) {
  var svg = '<svg class="eb-preview eb-preview-stp eb-preview-stp--circular eb-preview-stp--' + status + '" viewBox="0 0 45 45" width="45" height="45" fill="none" aria-hidden="true">';
  if (status === 'completed') {
    svg += '<circle cx="22.5" cy="22.5" r="20" stroke="' + STP.done + '" stroke-width="5"/>';
    svg += '<path d="M17.5 22.5L21 25.5L27.5 19.5" stroke="' + STP.done + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>';
    return svg + '</svg>';
  }
  svg += '<circle cx="22.5" cy="22.5" r="20" stroke="' + STP.track + '" stroke-width="5"/>';
  var f = status === 'upcoming' ? 0 : Math.max(0, Math.min(1, current / steps));
  if (f >= 1) svg += '<circle cx="22.5" cy="22.5" r="20" stroke="' + STP.fill + '" stroke-width="5"/>';
  else if (f > 0) {
    var a = f * 2 * Math.PI, x = 22.5 + 20 * Math.sin(a), y = 22.5 - 20 * Math.cos(a);
    svg += '<path d="M22.5 2.5A20 20 0 ' + (f > 0.5 ? 1 : 0) + ' 1 ' + x.toFixed(2) + ' ' + y.toFixed(2) + '" stroke="' + STP.fill + '" stroke-width="5" stroke-linecap="round"/>';
  }
  svg += '<text class="eb-preview-stp__index" x="22.5" y="23.5" text-anchor="middle" dominant-baseline="central">' + current + '</text>';
  return svg + '</svg>';
}

/* opts: { type: bullet|circular|dash, steps, current, status } */
function _stpRender(opts) {
  var type = opts.type || 'bullet';
  var steps = Math.max(type === 'bullet' ? 3 : 2, Math.min(10, _stpInt(opts.steps, 3)));
  var status = STP_STATUS[type].indexOf(opts.status) !== -1 ? opts.status : 'current';
  var current = Math.max(type === 'circular' ? 0 : 1, Math.min(steps, _stpInt(opts.current, 1)));
  if (status === 'completed') current = steps;
  if (status === 'upcoming') current = 0;
  if (type === 'circular') return _stpCircular(steps, current, status);

  var html = '<div class="eb-preview eb-preview-stp eb-preview-stp--' + type + ' eb-preview-stp--' + status + '">';
  for (var i = 1; i <= steps; i++) {
    var cls = type === 'bullet' ? 'eb-preview-stp__dot' : 'eb-preview-stp__dash';
    if (status === 'completed') cls += ' is-done';
    else if (i < current) cls += ' is-on';
    else if (i === current) cls += status === 'error' ? ' is-error' : ' is-on';
    html += '<span class="' + cls + '"></span>';
  }
  return html + '</div>';
}

/* ── Overview live preview ─────────────────────────────────────────── */
function _stpUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('stp-demo-preview');
  if (!preview) return;
  preview.innerHTML = _stpRender({
    type:    getVal('stp-ctrl-type', 'bullet'),
    steps:   getVal('stp-ctrl-steps', '3'),
    current: getVal('stp-ctrl-current', '1'),
    status:  getVal('stp-ctrl-status', 'current')
  });
}
window._stpUpdate = _stpUpdate;

/* ── Spec cards — one per Type value, keyed by demoKey ─────────────── */
var _specCards = {
  'bullet':   { type: 'bullet',   steps: '3', current: '1', status: 'current' },
  'circular': { type: 'circular', steps: '3', current: '1', status: 'current' },
  'dash':     { type: 'dash',     steps: '3', current: '1', status: 'current' }
};
window._specCards = _specCards;

function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var type = c.type || 'bullet', status = c.status || 'current';
  var steps = _stpInt(c.steps, 3), current = _stpInt(c.current, 1);
  if (lang === 'swift') {
    var s = 'EBStepper(steps: ' + steps + ', current: ' + current + ')\n    .ebType(.' + type + ')';
    if (status !== 'current') s += '\n    .ebStatus(.' + status + ')';
    return s;
  }
  var cap = function (v) { return v.charAt(0).toUpperCase() + v.slice(1); };
  var lines = ['    steps = ' + steps, '    current = ' + current, '    type = EBStepperType.' + cap(type)];
  if (status !== 'current') lines.push('    status = EBStepperStatus.' + cap(status));
  return 'EBStepper(\n' + lines.join(',\n') + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('stp-spec-' + cardKey);
  if (host) host.innerHTML = _stpRender(card);
}
window.updateSpecCard = updateSpecCard;

function _stpInit() {
  _stpUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'status', _specCards[k].status); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _stpInit);
else _stpInit();
document.addEventListener('astro:page-load', _stpInit);
