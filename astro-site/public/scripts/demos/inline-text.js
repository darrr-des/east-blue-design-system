/* Inline Text — Style tab demo.
 * Rebuilt from Figma component set 4419:24515 (GCash DS 2026 Working File).
 * Every size, offset and colour below is read off get_node_info / get_svg
 * on the variants and checked against export_node_as_image.
 *
 * Panel (set 4419:24515):
 *   Type               · Copy Icon, Badge, Checkmark, Slot   (variant)
 *   hasDescription     · False, True                         (variant)
 *   hasTextLink        · True, False                         (variant)
 *   hasTrailingElement · True                                (boolean)
 *   Nested instance    · Trailing Elements                   (no control)
 *
 * 4 x 2 x 2 = 16 variants, all built.
 */

var ITX_W = 368;

/* ── Geometry ────────────────────────────────────────────────────────
   MainRow is 24 tall; SupportingRow is 18 tall at y 26 (2px gap), so a
   row with either supporting element is 44 and a bare row 24. Label
   fills; ValueGroup hugs — Value 34 wide at "0.00", 4px, then the
   trailing element. */
var ITX_MAIN_H = 24, ITX_SUP_Y = 26, ITX_SUP_H = 18;
var ITX_VALUE_W = 34, ITX_TRAIL_GAP = 4;
var ITX_LINK_X = 345;           /* LinkLabel x on every Type, with or without Description */
var ITX_TRAIL_W = { 'copy-icon': 24, 'badge': 48, 'checkmark': 16, 'slot': 24 };

/* ── Colours ───────────────────────────────────────────────────────── */
var ITX_C = {
  label: '#0A2757', value: '#445C85', description: '#6780A9', link: '#005CE5',
  icon: '#445C85', badgeBg: '#E5F1FF', badgeLabel: '#005CE5'
};

/* Paths from get_svg on the Trailing Elements instances. */
function _itxCopy(x) {
  return '<g transform="translate(' + x + ' 0)">' +
    '<path opacity="0.4" d="M8 7H7.4C6.6268 7 6 7.6268 6 8.4V18.6C6 19.3732 6.6268 20 7.4 20H13.6C14.3732 20 15 19.3732 15 18.6V17.1111" stroke="' + ITX_C.icon + '" stroke-width="1.8" stroke-linecap="round"/>' +
    '<path d="M18 15.6V5.4C18 4.6268 17.3732 4 16.6 4H10.4C9.6268 4 9 4.6268 9 5.4V15.6C9 16.3732 9.6268 17 10.4 17H16.6C17.3732 17 18 16.3732 18 15.6Z" stroke="' + ITX_C.icon + '" stroke-width="1.8" stroke-linecap="round"/>' +
  '</g>';
}
function _itxCheck(x) {
  return '<g transform="translate(' + x + ' 0)">' +
    '<path d="M3 12L6.5 15L13 9" stroke="' + ITX_C.icon + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' +
  '</g>';
}
function _itxBadge(x) {
  return '<rect x="' + x + '" y="3" width="48" height="18" rx="9" fill="' + ITX_C.badgeBg + '"/>' +
    '<text class="itx-badge" x="' + (x + 24) + '" y="12" font-size="12" font-weight="700" fill="' + ITX_C.badgeLabel +
    '" text-anchor="middle" dominant-baseline="central">Label</text>';
}
/* An empty SLOT draws nothing in Figma. The dashed outline marks its
   24 × 24 footprint in the preview only. */
function _itxSlot(x) {
  return '<rect x="' + (x + 0.5) + '" y="0.5" width="23" height="23" rx="2" stroke="#C2CFE5" stroke-dasharray="3 2"/>';
}

/* ── Renderer ───────────────────────────────────────────────────────── */
function _itxRender(card, scale) {
  scale = scale || 1;
  var hasDesc = card.hasdescription === 'true';
  var hasLink = card.hastextlink === 'true';
  var hasTrail = card.hastrailingelement !== 'false';
  var h = (hasDesc || hasLink) ? ITX_SUP_Y + ITX_SUP_H : ITX_MAIN_H;

  var trailW = hasTrail ? ITX_TRAIL_W[card.type] : 0;
  var groupW = ITX_VALUE_W + (hasTrail ? ITX_TRAIL_GAP + trailW : 0);
  var valueX = ITX_W - groupW;
  var trailX = ITX_W - trailW;

  var out = '<svg width="' + (ITX_W * scale) + '" height="' + (h * scale) +
            '" viewBox="0 0 ' + ITX_W + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  out += '<text class="itx-proxima" x="0" y="12" font-size="16" font-weight="600" fill="' + ITX_C.label +
         '" dominant-baseline="central">Label</text>';
  out += '<text class="itx-proxima" x="' + valueX + '" y="12" font-size="16" font-weight="600" fill="' + ITX_C.value +
         '" dominant-baseline="central">0.00</text>';

  if (hasTrail) {
    if (card.type === 'copy-icon') out += _itxCopy(trailX);
    else if (card.type === 'badge') out += _itxBadge(trailX);
    else if (card.type === 'checkmark') out += _itxCheck(trailX);
    else out += _itxSlot(trailX);
  }

  var supY = ITX_SUP_Y + ITX_SUP_H / 2;
  if (hasDesc) {
    out += '<text class="itx-barkada" x="0" y="' + supY + '" font-size="12" font-weight="600" fill="' + ITX_C.description +
           '" dominant-baseline="central">Description goes here</text>';
  }
  if (hasLink) {
    out += '<text class="itx-barkada" x="' + ITX_LINK_X + '" y="' + supY + '" font-size="12" font-weight="600" fill="' + ITX_C.link +
           '" dominant-baseline="central">CTA</text>';
  }
  return out + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: { type: 'copy-icon', hasdescription: 'true', hastextlink: 'true', hastrailingelement: 'true' }
};
window._specCards = _specCards;

var ITX_LABELS = {
  type: { 'copy-icon': 'Copy Icon', 'badge': 'Badge', 'checkmark': 'Checkmark', 'slot': 'Slot' },
  bool: { 'true': 'True', 'false': 'False' }
};

/* ── DEV code ───────────────────────────────────────────────────────── */
var ITX_SWIFT_TRAIL = { 'copy-icon': '.copyIcon', 'badge': '.badge("Label")', 'checkmark': '.checkmark', 'slot': '.slot { content }' };
var ITX_COMPOSE_TRAIL = { 'copy-icon': 'EBInlineTextTrailing.CopyIcon', 'badge': 'EBInlineTextTrailing.Badge("Label")', 'checkmark': 'EBInlineTextTrailing.Checkmark', 'slot': 'EBInlineTextTrailing.Slot { content() }' };

function buildSwiftSnippet(cardKey, card) {
  var s = 'EBInlineText(label: "Label", value: "0.00")';
  if (card.hastrailingelement !== 'false') s += '\n    .ebTrailing(' + ITX_SWIFT_TRAIL[card.type] + ')';
  if (card.hasdescription === 'true') s += '\n    .ebDescription("Description goes here")';
  if (card.hastextlink === 'true') s += '\n    .ebTextLink("CTA") { }';
  return s;
}
function buildComposeSnippet(cardKey, card) {
  var a = ['    label = "Label"', '    value = "0.00"'];
  if (card.hastrailingelement !== 'false') a.push('    trailing = ' + ITX_COMPOSE_TRAIL[card.type]);
  if (card.hasdescription === 'true') a.push('    description = "Description goes here"');
  if (card.hastextlink === 'true') { a.push('    linkLabel = "CTA"'); a.push('    onLinkClick = { }'); }
  return 'EBInlineText(\n' + a.join(',\n') + '\n)';
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
var ITX_PREVIEW_SCALE = 1;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('inline-text-spec-' + cardStyle);
  if (host) host.innerHTML = _itxRender(card, ITX_PREVIEW_SCALE);

  ['type', 'hasdescription', 'hastextlink', 'hastrailingelement'].forEach(function (p) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + p + '"]');
    if (el) el.textContent = p === 'type' ? ITX_LABELS.type[card.type] : ITX_LABELS.bool[card[p]];
  });

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

/* ── Overview tab shims ──────────────────────────────────────────────
   The Overview still carries the retired five-value panel; it renders
   Figma's default variant until that tab is rebuilt. */
function _itxUpdate() {
  var el = document.getElementById('itx-demo-preview');
  if (el) el.innerHTML = _itxRender(_specCards.main, 1);
}
window._itxUpdate = _itxUpdate;

function _itxContextMarkup() {
  return ['copy-icon', 'badge', 'checkmark'].map(function (t) {
    return '<div>' + _itxRender({ type: t, hasdescription: 'false', hastextlink: 'false', hastrailingelement: 'true' }, 1) + '</div>';
  }).join('');
}

/* ── First paint ────────────────────────────────────────────────────── */
function _itxInit() {
  var ctx = document.getElementById('itx-context-preview');
  if (ctx) ctx.innerHTML = _itxContextMarkup();
  _itxUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('inline-text-spec-' + k);
    if (host) host.innerHTML = _itxRender(_specCards[k], ITX_PREVIEW_SCALE);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _itxInit);
else _itxInit();
document.addEventListener('astro:page-load', _itxInit);
