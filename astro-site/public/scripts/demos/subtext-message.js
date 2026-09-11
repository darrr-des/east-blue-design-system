/* Subtext Message — Style tab demo.
 * Rebuilt from Figma component set 26715:17362 (GCash DS Sticker Sheets v2).
 * Colours, sizes and the icon path are read off get_node_info / get_svg on
 * the matching variant — nothing here is derived or invented except where
 * a comment says "derived".
 *
 * Panel (set 26715:17362):
 *   Status · Default, Success, Error, Disabled   (variant)
 *   Size · Small, Default                        (variant)
 *   hasLeadingIcon · True                        (boolean)
 *   Icon · Checkmark (Circular)                  (instance swap — a slot, no control)
 *   hasTrailingLabel · False                     (boolean)
 *
 * 4 Status × 2 Size = 8 variants, all built. The two booleans are
 * orthogonal and add no variants, so there is nothing to constrain.
 */

/* ── Geometry — all measured on Status=Default at both sizes ────────── */
/*  All eight variants are 189 × 22. Only the type scale changes with Size. */
var STM_GEO = {
  small:   { font: 10, leading: 15 },
  default: { font: 12, leading: 18 }
};
var STM_BOX  = { w: 189, h: 22 };
var STM_PADL = 2;    /* component left edge → leading-icon */
var STM_ICON = 16;   /* leading-icon frame; the glyph inside is 12 × 12 */
var STM_ICONY = 5;   /* icon top offset — 5 top / 1 bottom, i.e. NOT centred */
var STM_GAP  = 4;    /* leading-icon → content */
var STM_TEXTY = 13;  /* content-box centre; identical at both sizes */

/* ── Colours, keyed by Status ────────────────────────────────────────
   Default and Success paint the icon a different colour from the text;
   Error and Disabled use one colour for both. */
var STM_COLOR = {
  'default':  { icon: '#7E96BE', text: '#6780A9' },
  'success':  { icon: '#12AF80', text: '#048570' },
  'error':    { icon: '#D61B2C', text: '#D61B2C' },
  'disabled': { icon: '#C2CFE5', text: '#C2CFE5' }
};

/* Checkmark (Circular) — the default Icon swap, from get_svg on 26715:17365.
   A filled disc with the tick knocked out, drawn in a 16 × 16 box. */
var STM_ICON_PATH = 'M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2ZM11.4238 6.07617C11.1895 5.84186 10.8095 5.84186 10.5752 6.07617L6.99902 9.65137L5.42383 8.07617C5.18952 7.84187 4.81049 7.84188 4.57617 8.07617C4.34187 8.31048 4.34188 8.68951 4.57617 8.92383L6.5752 10.9238C6.68772 11.0364 6.84086 11.0996 7 11.0996C7.15905 11.0996 7.31136 11.0363 7.42383 10.9238L11.4238 6.92383C11.658 6.68954 11.658 6.31046 11.4238 6.07617Z';

/* ── Renderer ───────────────────────────────────────────────────────── */
function _stmRender(card, scale) {
  scale = scale || 1;
  var g = STM_GEO[card.size] || STM_GEO.small;
  var col = STM_COLOR[card.status] || STM_COLOR['default'];
  var hasIcon = card.hasLeadingIcon === 'true';
  var hasLabel = card.hasTrailingLabel === 'true';
  var W = STM_BOX.w, H = STM_BOX.h;

  var out = '<svg width="' + (W * scale) + '" height="' + (H * scale) +
            '" viewBox="0 0 ' + W + ' ' + H + '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  /* content x: measured at 24 with the icon on. With the icon off the
     layer is hidden and content collapses to the left padding — derived,
     since Figma ships the component with hasLeadingIcon=true. */
  var textX = hasIcon ? (STM_PADL + STM_ICON + STM_GAP) : STM_PADL;

  if (hasIcon) {
    out += '<g transform="translate(' + STM_PADL + ',' + STM_ICONY + ')">';
    out += '<path d="' + STM_ICON_PATH + '" fill="' + col.icon + '"/>';
    out += '</g>';
  }

  out += '<text class="stm-text" x="' + textX + '" y="' + STM_TEXTY +
         '" font-size="' + g.font + '" fill="' + col.text +
         '" dominant-baseline="central">Message content</text>';

  if (hasLabel) {
    out += '<text class="stm-text" x="' + W + '" y="' + STM_TEXTY +
           '" font-size="' + g.font + '" fill="' + col.text +
           '" text-anchor="end" dominant-baseline="central">Label</text>';
  }

  return out + '</svg>';
}

/* ── Per-card state — Figma's defaults for all four controls ────────── */
var _specCards = {
  main: { status: 'default', size: 'small', hasLeadingIcon: 'true', hasTrailingLabel: 'false' }
};
window._specCards = _specCards;

/* ── DEV code — component API, live on both tabs ────────────────────── */
function buildSwiftSnippet(cardStyle, card) {
  var status = { 'default': '.default', success: '.success', error: '.error', disabled: '.disabled' }[card.status];
  var lines = ['EBSubtextMessage("Message content")'];
  lines.push('    .ebStatus(' + status + ')');
  if (card.size === 'default') lines.push('    .controlSize(.regular)');
  else lines.push('    .controlSize(.small)');
  if (card.hasLeadingIcon === 'true') lines.push('    .ebLeadingIcon(Image("checkmark-circular"))');
  if (card.hasTrailingLabel === 'true') lines.push('    .ebTrailingLabel("Label")');
  return lines.join('\n');
}

function buildComposeSnippet(cardStyle, card) {
  var status = { 'default': 'Default', success: 'Success', error: 'Error', disabled: 'Disabled' }[card.status];
  var size = card.size === 'default' ? 'Default' : 'Small';
  var lines = ['EBSubtextMessage('];
  lines.push('    message = "Message content",');
  lines.push('    status = EBSubtextStatus.' + status + ',');
  lines.push('    size = EBSubtextSize.' + size + ',');
  if (card.hasLeadingIcon === 'true') lines.push('    leadingIcon = { Icon(EBIcons.CheckmarkCircular, null) },');
  if (card.hasTrailingLabel === 'true') lines.push('    trailingLabel = "Label",');
  lines[lines.length - 1] = lines[lines.length - 1].replace(/,$/, '');
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardStyle, lang, card) {
  return lang === 'swift'
    ? buildSwiftSnippet(cardStyle, card)
    : buildComposeSnippet(cardStyle, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
var STM_PREVIEW_SCALE = 2;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('subtext-message-spec-' + cardStyle);
  if (host) host.innerHTML = _stmRender(card, STM_PREVIEW_SCALE);

  /* Properties readout. Colors / Typography / Layout `variants` are applied
     by the shared patcher in assessment.js — do not rebuild those here.
     Booleans keep Figma's own True / False capitalisation. */
  var STM_BOOL = { hasLeadingIcon: 1, hasTrailingLabel: 1 };
  ['status', 'size', 'hasLeadingIcon', 'hasTrailingLabel'].forEach(function (k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    var v = String(card[k]);
    el.textContent = STM_BOOL[k]
      ? (v === 'true' ? 'True' : 'False')
      : v.charAt(0).toUpperCase() + v.slice(1);
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

/* ── Overview tab live preview ──────────────────────────────────────── */
/* The Overview panel still ships the pre-rebuild control set. Map what
   it has onto the real axes so the preview draws the Figma component. */
function updateSubtextMessageDemo() {
  var el = document.getElementById('stm-demo-preview');
  if (!el) return;
  var g = function (id) { var n = document.getElementById(id); return n ? n.value : null; };
  var variant = (g('stm-demo-variant') || g('stm-demo-intent') || 'default').toLowerCase();
  var card = {
    status: STM_COLOR[variant] ? variant : (variant === 'primary' ? 'default' : 'default'),
    size: (g('stm-demo-size') || 'small').toLowerCase() === 'base' ? 'default' : 'small',
    hasLeadingIcon: 'true',
    hasTrailingLabel: 'false'
  };
  el.innerHTML = _stmRender(card, 2);
}
window.updateSubtextMessageDemo = updateSubtextMessageDemo;

/* ── First paint ────────────────────────────────────────────────────── */
function _stmInit() {
  updateSubtextMessageDemo();
  Object.keys(_specCards).forEach(function (k) {
    var host = document.getElementById('subtext-message-spec-' + k);
    if (host) host.innerHTML = _stmRender(_specCards[k], STM_PREVIEW_SCALE);
  });
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _stmInit);
else _stmInit();
document.addEventListener('astro:page-load', _stmInit);
