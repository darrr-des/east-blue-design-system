/* Empty State — Overview live preview + DEV code.
 * Rebuilt from Figma component set 26356:13970 (GCash DS Sticker Sheets v2).
 * Every size, colour and font below is read off the set — nothing derived.
 *
 * Panel:
 *   hasButton    ◉ boolean · true        (shows ⤷ ActionSlot)
 *   Style        Default · Subtle
 *   VisualType   Icon · Asset
 *   ⤷ VisualSlot / ⤷ ActionSlot  slots — no control
 *
 * Icon variants hug their content (padding 48 top/bottom). Asset variants are
 * a fixed 425 tall (padding 24) and ⤷ VisualSlot is set to Fill, so hiding the
 * action gives its 50px to the visual.
 */

var ES_W = 360;
var ES_HEADER_H = 97;   /* Header frame: padding 24, #heading 23 + gap 8 + #description 18 */
var ES_ACTION_H = 50;   /* ⤷ ActionSlot: Button - Large/Medium, 312 × 50, padding 0 24 */
var ES_COLOR = {
  bgDefault:   '#FFFFFF',  /* bg/color-bg-main */
  bgSubtle:    '#F6F9FD',  /* bg/color-bg */
  heading:     '#0A2757',  /* text/color-text */
  description: '#6780A9',  /* text/color-text-weaker */
  button:      '#005CE5',  /* bg/color-bg-primary */
  buttonLabel: '#FFFFFF',  /* text/color-text-inverse */
  slot:        '#9F3DFB'   /* Slot Block placeholder */
};

function _esBuildSvg(opts) {
  var asset = opts.VisualType === 'Asset';
  var btn = opts.hasButton !== false;
  var pad = asset ? 24 : 48;
  var visW = asset ? ES_W : 64;
  var visH = asset ? 425 - pad * 2 - ES_HEADER_H - (btn ? ES_ACTION_H : 0) : 64;
  var H = asset ? 425 : pad * 2 + visH + ES_HEADER_H + (btn ? ES_ACTION_H : 0);
  var y = pad;
  var s = '<svg width="' + ES_W + '" height="' + H + '" viewBox="0 0 ' + ES_W + ' ' + H +
          '" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect width="' + ES_W + '" height="' + H + '" fill="' +
       (opts.Style === 'Subtle' ? ES_COLOR.bgSubtle : ES_COLOR.bgDefault) + '"/>';

  /* ⤷ VisualSlot — Figma ships the Slot Block placeholder: 9% purple fill,
     1px dashed (4 4) inside stroke. */
  var vx = (ES_W - visW) / 2;
  s += '<rect x="' + (vx + 0.5) + '" y="' + (y + 0.5) + '" width="' + (visW - 1) + '" height="' + (visH - 1) +
       '" fill="' + ES_COLOR.slot + '" fill-opacity="0.09" stroke="' + ES_COLOR.slot + '" stroke-dasharray="4 4"/>';
  if (asset) {
    s += '<text x="' + (ES_W / 2) + '" y="' + (y + visH / 2 - 2) + '" text-anchor="middle" fill="' + ES_COLOR.slot +
         '" font-size="14" font-weight="700" font-family="\'Proxima Soft\', system-ui">🖼 Insert Asset here ⤵</text>';
    s += '<text x="' + (ES_W / 2) + '" y="' + (y + visH / 2 + 12) + '" text-anchor="middle" fill="' + ES_COLOR.slot +
         '" font-size="8" font-weight="500" font-family="\'BarkAda\', system-ui">Remove this placeholder when you insert custom content.</text>';
  } else {
    s += '<text x="' + (ES_W / 2) + '" y="' + (y + visH / 2) + '" text-anchor="middle" dominant-baseline="central" fill="' +
         ES_COLOR.slot + '" font-size="12">⤵</text>';
  }
  y += visH;

  /* Header — #heading Primary/Headlines/Block, #description Secondary/Bold/Caption */
  s += '<text x="' + (ES_W / 2) + '" y="' + (y + 24 + 17) + '" text-anchor="middle" fill="' + ES_COLOR.heading +
       '" font-size="18" font-weight="700" letter-spacing="0.25" font-family="\'Proxima Soft\', system-ui">Header</text>';
  s += '<text x="' + (ES_W / 2) + '" y="' + (y + 55 + 13) + '" text-anchor="middle" fill="' + ES_COLOR.description +
       '" font-size="12" font-weight="600" font-family="\'BarkAda\', system-ui">Description goes here</text>';
  y += ES_HEADER_H;

  /* ⤷ ActionSlot — Button - Large/Medium, radius 99, #label Primary/Label/Large */
  if (btn) {
    s += '<rect x="24" y="' + y + '" width="312" height="50" rx="25" fill="' + ES_COLOR.button + '"/>';
    s += '<text x="' + (ES_W / 2) + '" y="' + (y + 25) + '" text-anchor="middle" dominant-baseline="central" fill="' +
         ES_COLOR.buttonLabel + '" font-size="18" font-weight="700" letter-spacing="0.25" font-family="\'Proxima Soft\', system-ui">Label</text>';
  }
  return s + '</svg>';
}

/* ── Overview tab live preview ──────────────────────────────────────── */
var _esDemo = { hasButton: true, Style: 'Default', VisualType: 'Icon' };
window._esDemo = _esDemo;

function updateEmptyStateDemo() {
  var b = document.getElementById('es-demo-button');
  var st = document.getElementById('es-demo-style');
  var vt = document.getElementById('es-demo-visual');
  if (b) _esDemo.hasButton = b.checked;
  if (st) _esDemo.Style = st.value;
  if (vt) _esDemo.VisualType = vt.value;
  var el = document.getElementById('es-demo-preview');
  if (el) el.innerHTML = _esBuildSvg(_esDemo);
}
window.updateEmptyStateDemo = updateEmptyStateDemo;

/* ── DEV code — component API, as on the Code tab ───────────────────── */
function buildSwiftSnippet(card) {
  var lines = ['EBEmptyState(', '    title: "Header",', '    description: "Description goes here",'];
  lines.push(card.VisualType === 'Asset'
    ? '    asset: { Image("empty-illustration").resizable().scaledToFit() }'
    : '    icon: { Image(systemName: "tray") }');
  if (card.hasButton !== false) {
    lines[lines.length - 1] += ',';
    lines.push('    action: { EBButton("Label") { } }');
  }
  lines.push(')', '.ebStyle(.' + (card.Style === 'Subtle' ? 'subtle' : 'default') + ')');
  return lines.join('\n');
}

function buildComposeSnippet(card) {
  var lines = ['EBEmptyState(', '    title = "Header",', '    description = "Description goes here",',
               '    style = EBEmptyStateStyle.' + (card.Style === 'Subtle' ? 'Subtle' : 'Default') + ','];
  lines.push(card.VisualType === 'Asset'
    ? '    asset = { Image(painterResource(R.drawable.empty_illustration), contentDescription = null) }'
    : '    icon = { Icon(painterResource(R.drawable.tray), contentDescription = null) }');
  if (card.hasButton !== false) {
    lines[lines.length - 1] += ',';
    lines.push('    action = { EBButton("Label", onClick = { }) }');
  }
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardStyle, lang, card) {
  card = card || _esDemo;
  return lang === 'swift' ? buildSwiftSnippet(card) : buildComposeSnippet(card);
}
window.getSnippet = getSnippet;

/* ── First paint ────────────────────────────────────────────────────── */
function _esInit() { updateEmptyStateDemo(); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _esInit);
else _esInit();
document.addEventListener('astro:page-load', _esInit);
