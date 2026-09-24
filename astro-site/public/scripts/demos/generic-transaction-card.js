/* Generic Transaction Card — Style tab demo.
 * Rebuilt from Figma component set 5488:32955 (GCash DS 2026 Working File).
 * Offsets, fills and text styles read off get_node_info and
 * get_styled_text_segments; checked against export_node_as_image.
 *
 * Panel (set 5488:32955, from the property-panel screenshot):
 *   State              · Default, Pressed, Disabled   (variant)
 *   Status             · Default, Read, Skeleton      (variant)
 *   hasLeadingElement  · True   ⤷ Leading-Slot  · 4 items
 *   hasAmount          · True
 *   hasTrailingElement · True   ⤷ Trailing-Slot · 4 items
 *   hasBadge           · True
 * 5 of the 9 combinations are built — Pressed, Disabled and Read each
 * pair with one value of the other axis — so the panel snaps.
 *
 * 360 x 82 (Skeleton 79). LeadingElement 44 x 50 at (22, 16) holding a 32
 * avatar, then the content row at x 66: Label and Amount on the first
 * line, the badge and date on the second. The trailing Others glyph sits
 * at x 312.
 *
 * Disabled is the odd one out: its avatar is 24, not 32, so its content
 * row starts at x 58 and runs 278 wide.
 */

var GT_W = 360;
var GT_NODES = {
  'default|default': '5488:32979', 'pressed|default': '5492:33839',
  'disabled|default': '5492:33889', 'default|read': '5501:38441',
  'default|skeleton': '5488:33001'
};

var GT_S = {
  'default|default':  { bg: '#FFFFFF', label: '#0A2757', amount: '#0A2757', date: '#6780A9', others: '#005CE5',
                        avatar: '#005CE5', initials: '#FFFFFF', badge: '#E5F1FF', badgeLabel: '#005CE5', avatarSize: 32 },
  'pressed|default':  { bg: '#F6F9FD', label: '#0A2757', amount: '#0A2757', date: '#6780A9', others: '#005CE5',
                        avatar: '#005CE5', initials: '#FFFFFF', badge: '#E5F1FF', badgeLabel: '#005CE5', avatarSize: 32 },
  'default|read':     { bg: '#FFFFFF', label: '#0A2757', amount: '#90A8D0', date: '#6780A9', others: '#005CE5',
                        avatar: '#005CE5', initials: '#FFFFFF', badge: '#E5F1FF', badgeLabel: '#005CE5', avatarSize: 32 },
  'disabled|default': { bg: '#FFFFFF', label: '#C2CFE5', amount: '#C2CFE5', date: '#C2CFE5', others: '#9BC5FD',
                        avatar: '#9BC5FD', initials: '#F6F9FD', badge: '#D7E0EF', badgeLabel: '#FFFFFF', avatarSize: 24 }
};
var GT_BORDER = '#E5EBF4', GT_SKELETON = '#EEF2F9';

function _gtOn(v, def) { return v == null ? def : v === 'true'; }
function _gtKey(c) { return c.state + '|' + c.status; }

/* Only 5 of the 9 pairings are built. */
function _gtResolve(card, changed) {
  var built = GT_NODES[_gtKey(card)];
  if (built) return _gtKey(card);
  if (changed === 'status') card.state = 'default';
  else card.status = 'default';
  return _gtKey(card);
}

/* The "Others" glyph — three dots. The instance exposes only its guide
 * layers, so the fill comes from export_node_as_image: #005CE5, and
 * #9BC5FD when Disabled. */
function _gtOthers(x, y, fill) {
  var s = '';
  [4, 12, 20].forEach(function (dx) { s += '<circle cx="' + (x + dx) + '" cy="' + (y + 12) + '" r="2" fill="' + fill + '"/>'; });
  return s;
}

function _gtRender(c) {
  var skeleton = c.status === 'skeleton';
  var h = skeleton ? 79 : 82;
  var s = '<svg width="' + GT_W + '" height="' + h + '" viewBox="0 0 ' + GT_W + ' ' + h +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  if (skeleton) {
    s += '<rect x="0" y="0" width="' + GT_W + '" height="' + h + '" fill="#FFFFFF"/>';
    s += '<circle cx="38" cy="32" r="16" fill="' + GT_SKELETON + '"/>';
    s += '<rect x="67" y="16" width="80" height="20" rx="4" fill="' + GT_SKELETON + '"/>';
    s += '<rect x="67" y="40" width="182" height="23" rx="4" fill="' + GT_SKELETON + '"/>';
    s += '<rect x="262" y="16" width="82" height="19" rx="4" fill="' + GT_SKELETON + '"/>';
    s += '<rect x="0" y="' + (h - 1) + '" width="' + GT_W + '" height="1" fill="' + GT_BORDER + '"/>';
    return s + '</svg>';
  }

  var st = GT_S[_gtKey(c)] || GT_S['default|default'];
  var lead = _gtOn(c.hasleadingelement, true), amount = _gtOn(c.hasamount, true);
  var trail = _gtOn(c.hastrailingelement, true), badge = _gtOn(c.hasbadge, true);
  var av = st.avatarSize;
  var contentX = lead ? (22 + av + 12) : 22;

  s += '<rect x="0" y="0" width="' + GT_W + '" height="' + h + '" fill="' + st.bg + '"/>';
  if (lead) {
    s += '<circle cx="' + (22 + av / 2) + '" cy="' + (16 + av / 2) + '" r="' + (av / 2) + '" fill="' + st.avatar + '"/>';
    s += '<text class="gt-initials" x="' + (22 + av / 2) + '" y="' + (16 + av / 2) + '" font-size="12" font-weight="700" fill="' +
         st.initials + '" text-anchor="middle" dominant-baseline="central">G</text>';
  }
  s += '<text class="gt-label" x="' + contentX + '" y="28" font-size="18" font-weight="700" fill="' + st.label +
       '" dominant-baseline="central">Label</text>';
  if (amount) s += '<text class="gt-amount" x="238" y="28" font-size="18" font-weight="700" fill="' + st.amount +
                   '" dominant-baseline="central">XXX.XX</text>';
  if (trail) s += _gtOthers(312, 16, st.others);

  var dateX = contentX;
  if (badge) {
    s += '<rect x="' + contentX + '" y="48" width="48" height="18" rx="9" fill="' + st.badge + '"/>';
    s += '<text class="gt-badge" x="' + (contentX + 24) + '" y="57" font-size="12" font-weight="700" fill="' + st.badgeLabel +
         '" text-anchor="middle" dominant-baseline="central">Label</text>';
    dateX = contentX + 56;
  }
  s += '<text class="gt-date" x="' + dateX + '" y="57" font-size="12" font-weight="600" fill="' + st.date +
       '" dominant-baseline="central">Date XX, XXXX, Time (AM,PM)</text>';
  s += '<rect x="0" y="' + (h - 1) + '" width="' + GT_W + '" height="1" fill="' + GT_BORDER + '"/>';
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: { state: 'default', status: 'default', hasleadingelement: 'true', hasamount: 'true',
          hastrailingelement: 'true', hasbadge: 'true' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function buildSwiftSnippet(cardKey, c) {
  var l = ['EBTransactionCard(', '    label: "Label",', '    date: "Date XX, XXXX, Time (AM,PM)"', ')'];
  if (_gtOn(c.hasamount, true)) l.push('    .ebAmount("XXX.XX")');
  if (_gtOn(c.hasbadge, true)) l.push('    .ebBadge("Label")');
  if (_gtOn(c.hasleadingelement, true)) l.push('    .ebLeading { EBAvatar("G") }');
  if (_gtOn(c.hastrailingelement, true)) l.push('    .ebTrailing(.others) { showMenu() }');
  if (c.status === 'read') l.push('    .ebRead(true)');
  if (c.status === 'skeleton') l.push('    .ebSkeleton(true)');
  if (c.state === 'disabled') l.push('    .disabled(true)');
  return l.join('\n');
}
function buildComposeSnippet(cardKey, c) {
  var l = ['EBTransactionCard(', '    label = "Label",', '    date = "Date XX, XXXX, Time (AM,PM)",'];
  if (_gtOn(c.hasamount, true)) l.push('    amount = "XXX.XX",');
  if (_gtOn(c.hasbadge, true)) l.push('    badge = "Label",');
  if (_gtOn(c.hasleadingelement, true)) l.push('    leading = { EBAvatar("G") },');
  if (_gtOn(c.hastrailingelement, true)) l.push('    trailing = { EBIconButton(EBIcons.Others) { showMenu() } },');
  if (c.status === 'read') l.push('    read = true,');
  if (c.status === 'skeleton') l.push('    skeleton = true,');
  if (c.state === 'disabled') l.push('    enabled = false,');
  l.push('    onClick = { }');
  l.push(')');
  return l.join('\n');
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
function _gtSync(cardStyle, card) {
  ['state', 'status'].forEach(function (a) {
    var el = document.querySelector('[onchange*="updateSpecCard(\'' + cardStyle + '\', \'' + a + '\'"]');
    if (el) el.value = card[a];
  });
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  var key = _gtResolve(card, prop);
  _gtSync(cardStyle, card);

  var host = document.getElementById('generic-transaction-card-spec-' + cardStyle);
  if (host) host.innerHTML = _gtRender(card);

  ['state', 'status', 'hasleadingelement', 'hasamount', 'hastrailingelement', 'hasbadge'].forEach(function (a) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + a + '"]');
    if (!el) return;
    el.textContent = a.indexOf('has') === 0 ? (card[a] === 'true' ? 'True' : 'False')
      : card[a].charAt(0).toUpperCase() + card[a].slice(1);
  });
  var h = card.status === 'skeleton' ? 79 : 82;
  var put = function (name, text) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + name + '"]');
    if (el) el.textContent = text;
  };
  put('size-readout', GT_W + ' × ' + h);
  put('avatar-readout', (GT_S[key] || GT_S['default|default']).avatarSize + ' × ' + (GT_S[key] || GT_S['default|default']).avatarSize);
  put('variantNode', GT_NODES[key] + ' · ' + GT_W + ' × ' + h);

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

/* ── Overview tab shim — the old panel drove gtx-ctrl-* selects. ───── */
function _gtxUpdate() {
  var el = document.getElementById('gtx-demo-preview');
  if (!el) return;
  var yes = function (id, f) { var n = document.getElementById(id); return (n ? n.value : f) === 'yes' ? 'true' : 'false'; };
  var v = function (id, f) { var n = document.getElementById(id); return n ? n.value : f; };
  el.innerHTML = _gtRender({
    state: v('gtx-ctrl-state', 'default'), status: v('gtx-ctrl-type', 'default'),
    hasleadingelement: yes('gtx-ctrl-initials', 'yes'),
    hasamount: yes('gtx-ctrl-amount', 'yes'),
    hastrailingelement: 'true',
    hasbadge: yes('gtx-ctrl-badge', 'yes')
  });
}
window._gtxUpdate = _gtxUpdate;

/* ── First paint ────────────────────────────────────────────────────── */
function _gtInit() {
  _gtxUpdate();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _gtInit);
else _gtInit();
document.addEventListener('astro:page-load', _gtInit);
