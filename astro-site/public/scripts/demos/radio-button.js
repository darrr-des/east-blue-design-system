/* Auto-extracted from assessment-src/components/radio-button.html.
 * Powers the live-preview dropdowns/toggles for the radio-button component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs radio-button
 */
/* ── Radio Button JS ──────────────────────────────────────────────── */
var _rbDemo = { selected: 'unselected', size: 'large', style: 'default' };

function _rbBuildSvg(opts, scale) {
  scale = scale || 1;
  var isLarge = opts.size === 'large';
  var box = isLarge ? 20 : 16;
  var s = box * scale;
  var v = '<svg width="' + s + '" height="' + s + '" viewBox="0 0 ' + box + ' ' + box + '" xmlns="http://www.w3.org/2000/svg">';
  var cx = box / 2;

  var ringStroke, ringFill, innerColor;
  switch (opts.selected) {
    case 'unselected':
      ringStroke = '#D7E0EF'; ringFill = 'none'; innerColor = null;
      break;
    case 'selected':
      ringStroke = '#005CE5'; ringFill = '#005CE5'; innerColor = '#FFFFFF';
      break;
    case 'disabled':
      ringStroke = '#C2CFE5'; ringFill = '#C2CFE5'; innerColor = '#FFFFFF';
      break;
    case 'error':
      ringStroke = '#D61B2C';
      ringFill = opts.style === 'filled' ? '#D61B2C' : 'none';
      innerColor = opts.style === 'filled' ? '#FFFFFF' : null;
      break;
  }

  // Effective style: unselected/error+default → ring only; otherwise use opts.style
  var effStyle = opts.style;
  if (opts.selected === 'unselected') effStyle = 'default';
  if (opts.selected === 'error' && opts.style === 'default') effStyle = 'default';

  // Outer ring
  v += '<circle cx="' + cx + '" cy="' + cx + '" r="' + (box / 2 - 1) + '" fill="' + ringFill + '" stroke="' + ringStroke + '" stroke-width="2"/>';

  // Inner indicator
  if (innerColor && effStyle === 'filled') {
    v += '<circle cx="' + cx + '" cy="' + cx + '" r="' + (isLarge ? 3 : 2) + '" fill="' + innerColor + '"/>';
  } else if (innerColor && effStyle === 'checkmark') {
    var o = isLarge ? 5 : 4;
    v += '<path d="M' + o + ' ' + cx + ' l ' + (box / 5) + ' ' + (box / 5) + ' l ' + (box / 3) + ' ' + (-box / 3) + '" stroke="' + innerColor + '" stroke-width="' + (isLarge ? 2 : 1.6) + '" stroke-linecap="round" stroke-linejoin="round" fill="none"/>';
  }

  v += '</svg>';
  return v;
}

function updateRadioButtonDemo() {
  _rbDemo.selected = document.getElementById('rb-demo-selected').value;
  _rbDemo.size = document.getElementById('rb-demo-size').value;
  _rbDemo.style = document.getElementById('rb-demo-style').value;
  var el = document.getElementById('rb-demo-preview');
  if (el) el.innerHTML = _rbBuildSvg(_rbDemo, 1);
}

function _rbInitSpecCards() {
  var rows = [
    { label: 'Unselected',         selected: 'unselected', style: 'default' },
    { label: 'Selected (filled)',  selected: 'selected',   style: 'filled' },
    { label: 'Selected (checkmark)', selected: 'selected', style: 'checkmark' },
    { label: 'Disabled (filled)',  selected: 'disabled',   style: 'filled' },
    { label: 'Error (unselected)', selected: 'error',      style: 'default' },
    { label: 'Error (filled)',     selected: 'error',      style: 'filled' }
  ];
  var html = '<div style="display:grid;grid-template-columns:auto auto 1fr;gap:14px 24px;align-items:center;padding:8px 0;">';
  rows.forEach(function(r) {
    html += '<div>' + _rbBuildSvg({ selected: r.selected, size: 'large', style: r.style }, 2) + '</div>';
    html += '<div>' + _rbBuildSvg({ selected: r.selected, size: 'small', style: r.style }, 2) + '</div>';
    html += '<code style="font-size:12px;color:var(--muted);">' + r.label + '</code>';
  });
  html += '</div>';
  var el = document.getElementById('rb-preview-all');
  if (el) el.innerHTML = html;
}

function _rbInit() {
  updateRadioButtonDemo();
  _rbInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _rbInit);
else _rbInit();

/* ── Canonical wiring (matches avatar.js shape) ────────────────────── */
/* Static showcase — no per-card state. Expose stubs so any dropdown
   bindings or `switchCodeTab` calls don't error. */
var _specCards = {
  'rb-all': { selected: 'unselected', size: 'large', style: 'default' }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardStyle, card) {
  var lines = [];
  lines.push('EBRadioButton(isSelected: $isSelected)');
  lines.push('    .controlSize(.regular)');
  return lines.join('\n');
}

function buildComposeSnippet(cardStyle, card) {
  var lines = [];
  lines.push('EBRadioButton(');
  lines.push('    selected = isSelected,');
  lines.push('    onClick = { isSelected = !isSelected },');
  lines.push('    size = EBRadioSize.Large');
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardStyle, lang, card) {
  return lang === 'swift'
    ? buildSwiftSnippet(cardStyle, card)
    : buildComposeSnippet(cardStyle, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;
  /* Re-render the spec-card preview SVG using the same builder used
     by the Overview live preview. Doubled scale so the spec card has
     a visible focal point even at small box sizes. */
  var el = document.getElementById('spec-' + cardStyle + '-preview');
  if (el && typeof _rbBuildSvg === 'function') {
    el.innerHTML = _rbBuildSvg(card, 1);
  }
}
window.updateSpecCard = updateSpecCard;

/* Initial paint — make sure the spec card matches its default control
   values on first load (and every Astro view-transition swap). */
function _rbInitSpecCard() {
  var card = _specCards['rb-all'];
  if (!card) return;
  var el = document.getElementById('spec-rb-all-preview');
  if (el && typeof _rbBuildSvg === 'function') {
    el.innerHTML = _rbBuildSvg(card, 1);
  }
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _rbInitSpecCard);
} else {
  _rbInitSpecCard();
}
document.addEventListener('astro:page-load', _rbInitSpecCard);
