/* Section Header (slug header) — live preview + spec cards.
 * Set 4363:11467 (2026 Working File): TrailingMedia = Icon | Link | Edit |
 * None × hasLeadingMedia = True | False = 8 variants, plus the hasPreamble,
 * hasDescription and hasCounter booleans. Image-Slot (leading) and Icon-Slot
 * (trailing Icon) are Figma Slots.
 *
 * Sizes, offsets and colours read off get_node_info on 4363:11466 (Icon ·
 * True), 4363:11463 (Link), 4363:11462 (Edit), 4368:11366 (None) and
 * 4363:11464 (None · False), re-verified 2026-09-14 against the exports.
 * Every child is top-anchored at y 24 inside the fixed 100 px frame.
 */

var SH_W = 360, SH_H = 100;
var SH_PAD = 24;
var SH_GAP = 16;                  /* leading → content → trailing */
var SH_LEADING = 46;              /* LeadingMedia › Image-Slot */
var SH_STACK_GAP = 2;             /* Preamble → DescriptionRow */
var SH_PREAMBLE_H = 14, SH_TITLE_H = 26, SH_DESC_H = 18;
var SH_COUNTER = 24, SH_COUNTER_GAP = 12, SH_TITLE_W = 85;
var SH_TRAILING = { 'none': { w: 0 }, 'link': { w: 61, h: 22 }, 'icon': { w: 32, h: 48 }, 'edit': { w: 112, h: 24 } };
var SH_COLOR = { surface: '#FFFFFF', border: '#E5EBF4', preamble: '#005CE5', title: '#0A2757', description: '#6780A9', trailing: '#005CE5', counterBg: '#EEF2F9', counterValue: '#072592', placeholder: '#D7E0EF' };
/* Edit icon path — get_svg on the Trailing Media › Edit instance (4363:11055). */
var SH_EDIT_PATH = 'M14.2621 6.0363C15.6199 4.74442 17.7543 4.79689 19.0483 6.15251C19.7021 6.83767 19.9868 7.66599 19.8793 8.5158C19.7757 9.33326 19.3244 10.0642 18.7201 10.6476C18.7166 10.651 18.712 10.655 18.7084 10.6584L10.0024 18.7824C9.88586 18.8911 9.74172 18.9669 9.58634 19.0021L5.767 19.8654C5.68774 19.8833 5.54038 19.9108 5.3627 19.8918C4.44649 19.7931 3.87067 18.8522 4.19083 17.9865L5.46817 14.5324C5.51584 14.4038 5.59246 14.2871 5.69181 14.1926L14.2621 6.0363ZM7.08341 15.3527L6.12638 17.9386L8.95157 17.301L15.974 10.7472L14.0004 8.7697L7.08341 15.3527ZM17.7465 7.3947C17.1375 6.75684 16.1409 6.73356 15.5033 7.34001L15.3041 7.52849L17.2914 9.51775L17.4809 9.34197C17.8752 8.95764 18.0557 8.58553 18.0932 8.28923C18.1269 8.02223 18.0591 7.72223 17.7465 7.3947Z';

function _shOn(v) { return String(v) !== 'false'; }

function _shRender(card, scale) {
  scale = scale || 1;
  var x = SH_PAD, y = SH_PAD;
  var out = '<svg class="eb-preview eb-preview-sh" width="' + (SH_W * scale) + '" height="' + (SH_H * scale) + '" viewBox="0 0 ' + SH_W + ' ' + SH_H + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  out += '<rect width="' + SH_W + '" height="' + SH_H + '" fill="' + SH_COLOR.surface + '"/>';
  out += '<line x1="0" y1="' + (SH_H - 0.5) + '" x2="' + SH_W + '" y2="' + (SH_H - 0.5) + '" stroke="' + SH_COLOR.border + '" stroke-width="1"/>';

  if (_shOn(card.hasLeadingMedia)) {
    out += '<rect x="' + x + '" y="' + y + '" width="' + SH_LEADING + '" height="' + SH_LEADING + '" rx="' + (SH_LEADING / 2) + '" fill="' + SH_COLOR.placeholder + '"/>';
    x += SH_LEADING + SH_GAP;
  }
  if (_shOn(card.hasPreamble)) {
    out += '<text class="sh-proxima" x="' + x + '" y="' + (y + SH_PREAMBLE_H / 2) + '" font-size="14" font-weight="700" letter-spacing="0.25" fill="' + SH_COLOR.preamble + '" dominant-baseline="central">Preamble</text>';
    y += SH_PREAMBLE_H + SH_STACK_GAP;
  }
  out += '<text class="sh-proxima-title" x="' + x + '" y="' + (y + SH_TITLE_H / 2) + '" font-size="22" font-weight="700" fill="' + SH_COLOR.title + '" dominant-baseline="central">Heading</text>';
  if (_shOn(card.hasCounter)) {
    var cx = x + SH_TITLE_W + SH_COUNTER_GAP;
    out += '<rect x="' + cx + '" y="' + y + '" width="' + SH_COUNTER + '" height="' + SH_COUNTER + '" rx="' + (SH_COUNTER / 2) + '" fill="' + SH_COLOR.counterBg + '"/>';
    out += '<text class="sh-proxima" x="' + (cx + SH_COUNTER / 2) + '" y="' + (y + SH_COUNTER / 2) + '" font-size="14" font-weight="700" letter-spacing="0.25" fill="' + SH_COLOR.counterValue + '" text-anchor="middle" dominant-baseline="central">0</text>';
  }
  y += SH_TITLE_H;
  if (_shOn(card.hasDescription)) {
    out += '<text class="sh-barkada" x="' + x + '" y="' + (y + SH_DESC_H / 2) + '" font-size="12" font-weight="600" fill="' + SH_COLOR.description + '" dominant-baseline="central">Description goes here</text>';
  }

  var t = SH_TRAILING[card.trailingmedia];
  if (t && t.w) {
    var tx = SH_W - SH_PAD - t.w, ty = SH_PAD;
    if (card.trailingmedia === 'icon') {
      out += '<rect x="' + tx + '" y="' + (ty + 8) + '" width="32" height="32" rx="16" fill="' + SH_COLOR.placeholder + '"/>';
    } else if (card.trailingmedia === 'link') {
      out += '<text class="sh-proxima" x="' + tx + '" y="' + (ty + 6 + 8) + '" font-size="16" font-weight="700" letter-spacing="0.25" fill="' + SH_COLOR.trailing + '" dominant-baseline="central">View All</text>';
    } else if (card.trailingmedia === 'edit') {
      out += '<g transform="translate(' + tx + ',' + ty + ')"><path d="' + SH_EDIT_PATH + '" fill="' + SH_COLOR.trailing + '"/></g>';
      out += '<text class="sh-proxima" x="' + (tx + 28) + '" y="' + (ty + 12) + '" font-size="16" font-weight="700" letter-spacing="0.25" fill="' + SH_COLOR.trailing + '" dominant-baseline="central">Edit details</text>';
    }
  }
  return out + '</svg>';
}

/* ── Overview live preview ─────────────────────────────────────────── */
function _headerUpdate() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var el = document.getElementById('sh-demo-preview');
  if (!el) return;
  el.innerHTML = _shRender({
    trailingmedia:  getVal('sh-ctrl-trailingmedia', 'icon'),
    hasLeadingMedia: getVal('sh-ctrl-hasleadingmedia', 'true'),
    hasPreamble:    getVal('sh-ctrl-haspreamble', 'true'),
    hasDescription: getVal('sh-ctrl-hasdescription', 'true'),
    hasCounter:     getVal('sh-ctrl-hascounter', 'true')
  }, 1);
}
window._headerUpdate = _headerUpdate;

/* ── Spec cards — one per TrailingMedia value, keyed by demoKey ─────── */
function _shCard(t) { return { trailingmedia: t, hasLeadingMedia: 'true', hasPreamble: 'true', hasDescription: 'true', hasCounter: 'true' }; }
var _specCards = { 'icon': _shCard('icon'), 'link': _shCard('link'), 'edit': _shCard('edit'), 'none': _shCard('none') };
window._specCards = _specCards;

function _shCap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function getSnippet(cardKey, lang, card) {
  var c = card || _specCards[cardKey] || _shCard('none');
  if (lang === 'swift') {
    var lines = ['EBSectionHeader("Heading")'];
    if (_shOn(c.hasPreamble)) lines.push('    .ebPreamble("Preamble")');
    if (_shOn(c.hasDescription)) lines.push('    .ebDescription("Description goes here")');
    if (_shOn(c.hasCounter)) lines.push('    .ebCounter(0)');
    if (_shOn(c.hasLeadingMedia)) lines.push('    .ebLeadingMedia { Image("placeholder") }');
    if (c.trailingmedia !== 'none') lines.push('    .ebTrailingMedia(.' + c.trailingmedia + ')');
    return lines.join('\n');
  }
  var k = ['    title = "Heading"'];
  if (_shOn(c.hasPreamble)) k.push('    preamble = "Preamble"');
  if (_shOn(c.hasDescription)) k.push('    description = "Description goes here"');
  if (_shOn(c.hasCounter)) k.push('    counter = 0');
  if (_shOn(c.hasLeadingMedia)) k.push('    leadingMedia = { Icon(…) }');
  k.push('    trailingMedia = EBTrailingMedia.' + _shCap(c.trailingmedia));
  return 'EBSectionHeader(\n' + k.join(',\n') + '\n)';
}
window.getSnippet = getSnippet;

function updateSpecCard(cardKey, prop, value) {
  var card = _specCards[cardKey];
  if (!card) return;
  card[prop] = value;
  var host = document.getElementById('sh-spec-' + cardKey);
  if (host) host.innerHTML = _shRender(card, 1);
}
window.updateSpecCard = updateSpecCard;

function _shInit() {
  _headerUpdate();
  Object.keys(_specCards).forEach(function (k) { updateSpecCard(k, 'trailingmedia', _specCards[k].trailingmedia); });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _shInit);
else _shInit();
document.addEventListener('astro:page-load', _shInit);
