/* Generic Transaction Card — live preview + spec cards.
 * Set 5488:32955 (2026 Working File): Status = Default | Read | Skeleton ×
 * State = Default | Pressed | Disabled. Five variants are built; Read and
 * Skeleton exist at State=Default only.
 *
 * Read off the variants and checked against export_node_as_image:
 *   Default  5488:32979 · Pressed 5492:33839 · Disabled 5492:33889
 *   Read     5501:38441 · Skeleton 5488:33001
 */

function _gtxEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function _gtxBadge(text) {
  return '<span class="eb-preview-gtx__badge">' + _gtxEscape(text) + '</span>';
}

function _gtxAvatar(initials) {
  return '<span class="eb-preview-gtx__avatar">' + _gtxEscape((initials || 'G').substring(0, 2)) + '</span>';
}

/* Trailing-Slot › Others — the three-dot glyph, paths from the export. */
function _gtxMenu() {
  return '<svg class="eb-preview-gtx__menu" viewBox="0 0 24 24" aria-hidden="true">' +
    '<path d="M6 10C7.10457 10 8 10.8954 8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10ZM18 10C19.1046 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10Z" fill="currentColor"/>' +
  '</svg>';
}

/* opts: { status: default|read|skeleton, state: default|pressed|disabled,
           label, badge, date, amount, initials }
   Legacy Overview controls still send `type`; skeleton maps to Status,
   everything else renders the Default layout. */
function _gtxRender(opts) {
  var status = opts.status || (opts.type === 'skeleton' ? 'skeleton' : 'default');
  var state  = opts.state || 'default';
  var label    = opts.label || 'Label';
  var badge    = opts.badge || 'Label';
  var date     = opts.date || 'Date XX, XXXX, Time (AM,PM)';
  var amount   = opts.amount || 'XXX.XX';
  var initials = opts.initials || 'G';

  var cls = 'eb-preview eb-preview-gtx';
  if (status === 'read') cls += ' eb-preview-gtx--read';
  if (status === 'skeleton') cls += ' eb-preview-gtx--skeleton';
  if (state === 'pressed') cls += ' eb-preview-gtx--pressed';
  if (state === 'disabled') cls += ' eb-preview-gtx--disabled';

  if (status === 'skeleton') {
    return '<div class="' + cls + '">' +
      '<span class="eb-preview-gtx__sk eb-preview-gtx__sk--avatar"></span>' +
      '<div class="eb-preview-gtx__content">' +
        '<span class="eb-preview-gtx__sk eb-preview-gtx__sk--tag"></span>' +
        '<span class="eb-preview-gtx__sk eb-preview-gtx__sk--header"></span>' +
      '</div>' +
      '<div class="eb-preview-gtx__trailing"><span class="eb-preview-gtx__sk eb-preview-gtx__sk--trail"></span></div>' +
    '</div>';
  }

  var html = '<div class="' + cls + '">';
  html += _gtxAvatar(initials);
  html += '<div class="eb-preview-gtx__content">';
  html += '<div class="eb-preview-gtx__label-row">';
  html += '<p class="eb-preview-gtx__label">' + _gtxEscape(label) + '</p>';
  html += '<div class="eb-preview-gtx__trailing"><span class="eb-preview-gtx__amount">' + _gtxEscape(amount) + '</span>' + _gtxMenu() + '</div>';
  html += '</div>';
  html += '<div class="eb-preview-gtx__meta-row">' + _gtxBadge(badge) + '<span class="eb-preview-gtx__meta">' + _gtxEscape(date) + '</span></div>';
  html += '</div>';
  html += '</div>';
  return html;
}

/* ── Overview live preview — Status + State follow the Figma panel ── */
function _gtxUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var preview = document.getElementById('gtx-demo-preview');
  if (!preview) return;
  preview.innerHTML = _gtxRender({
    status:   getVal('gtx-ctrl-status', 'default'),
    state:    getVal('gtx-ctrl-state', 'default'),
    label:    getVal('gtx-ctrl-label', 'Label'),
    badge:    getVal('gtx-ctrl-badge', 'Label'),
    date:     getVal('gtx-ctrl-date', 'Date XX, XXXX, Time (AM,PM)'),
    amount:   getVal('gtx-ctrl-amount', 'XXX.XX'),
    initials: getVal('gtx-ctrl-initials', 'G')
  });
}
window._gtxUpdate = _gtxUpdate;

/* ── Spec cards — one per Status value, keyed by demoKey ──────────── */
var _specCards = {
  'default':  { status: 'default',  state: 'default' },
  'read':     { status: 'read',     state: 'default' },
  'skeleton': { status: 'skeleton', state: 'default' }
};
window._specCards = _specCards;

/* Component-API snippets that follow the panel — plain text. */
function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || {};
  var status = c.status || 'default';
  var disabled = c.state === 'disabled';
  if (lang === 'swift') {
    if (status === 'skeleton') return 'EBTransactionCard(loading: true)';
    var s = 'EBTransactionCard(\n    title: "Label",\n    amount: "XXX.XX",\n    date: "Date XX, XXXX, Time (AM,PM)",\n    badge: EBBadge("Label", intent: .information),\n    leading: .avatar("G"),\n    trailing: .menu\n)';
    if (status === 'read') s += '\n.ebStatus(.read)';
    if (disabled) s += '\n.disabled(true)';
    return s;
  }
  if (status === 'skeleton') return 'EBTransactionCard(isLoading = true)';
  var lines = [
    '    title = "Label"',
    '    amount = "XXX.XX"',
    '    date = "Date XX, XXXX, Time (AM,PM)"',
    '    badge = EBBadge("Label", EBBadgeIntent.Information)',
    '    leading = { EBAvatar(initials = "G") }',
    '    trailing = EBTransactionTrailing.Menu'
  ];
  if (status === 'read') lines.push('    status = EBTransactionStatus.Read');
  if (disabled) lines.push('    enabled = false');
  return 'EBTransactionCard(\n' + lines.join(',\n') + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('gtx-spec-' + cardKey);
  if (host) host.innerHTML = _gtxRender(card);
}
window.updateSpecCard = updateSpecCard;

function _gtxInit() {
  _gtxUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'state', _specCards[k].state); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _gtxInit);
else _gtxInit();
document.addEventListener('astro:page-load', _gtxInit);
