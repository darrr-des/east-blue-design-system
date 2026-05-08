/* Auto-extracted from assessment-src/components/tab-item.html.
 * Powers the live-preview dropdowns/toggles for the tab-item component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs tab-item
 */
/* ── Tab Item Component JS ─────────────────────────────────────────── */
var _tiDemo = { active: 'yes', orient: 'vertical', size: 'small', leadicon: 'no', counter: 'no', dot: 'no' };

function _tiBuildSvg(opts) {
  var active = opts.active === 'yes';
  var vertical = opts.orient === 'vertical';
  var large = opts.size === 'large';
  var leadIcon = opts.leadicon === 'yes';
  var counter = opts.counter === 'yes';
  var dot = opts.dot === 'yes';

  var labelColor = active ? '#005CE5' : '#6780A9';
  var borderColor = active ? '#005CE5' : '#E5EBF4';
  var fontSize = large ? 14 : 12;

  var w, h, s;
  if (vertical) {
    w = 72; h = 84;
    s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
    s += '<rect x="0" y="0" width="' + w + '" height="' + h + '" fill="#FFFFFF"/>';
    // Icon
    s += '<circle cx="' + (w / 2) + '" cy="28" r="16" fill="#C2C6CF"/>';
    // Label
    s += '<text x="' + (w / 2) + '" y="' + (h - 22) + '" text-anchor="middle" fill="' + labelColor + '" font-size="' + fontSize + '" font-weight="700" font-family="\'Proxima Soft\', system-ui">Label</text>';
    // Border
    s += '<rect x="0" y="' + (h - 2) + '" width="' + w + '" height="2" fill="' + borderColor + '"/>';
    // Red dot
    if (dot) s += '<circle cx="' + (w - 8) + '" cy="8" r="3" fill="#D81E1E"/>';
    s += '</svg>';
    return s;
  }

  // Horizontal
  w = large ? 130 : 120;
  h = 48;
  s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0" y="0" width="' + w + '" height="' + h + '" fill="#FFFFFF"/>';
  var x = 12;
  if (leadIcon) {
    s += '<circle cx="' + (x + 10) + '" cy="' + (h / 2) + '" r="10" fill="#B3B3B3"/>';
    x += 24;
  }
  s += '<text x="' + x + '" y="' + (h / 2 + 5) + '" fill="' + labelColor + '" font-size="' + fontSize + '" font-weight="700" font-family="\'Proxima Soft\', system-ui">Label</text>';
  x += 38;
  if (counter) {
    s += '<rect x="' + x + '" y="' + (h / 2 - 9) + '" width="22" height="18" rx="9" fill="#ECF1FA"/>';
    s += '<text x="' + (x + 11) + '" y="' + (h / 2 + 4) + '" text-anchor="middle" fill="#0F3390" font-size="10" font-weight="700" font-family="\'Proxima Soft\', system-ui">0</text>';
  }
  s += '<rect x="0" y="' + (h - 2) + '" width="' + w + '" height="2" fill="' + borderColor + '"/>';
  if (dot) s += '<circle cx="' + (w - 8) + '" cy="8" r="3" fill="#D81E1E"/>';
  s += '</svg>';
  return s;
}

function updateTabItemDemo() {
  _tiDemo.active = document.getElementById('ti-demo-active').value;
  _tiDemo.orient = document.getElementById('ti-demo-orient').value;
  _tiDemo.size = document.getElementById('ti-demo-size').value;
  _tiDemo.leadicon = document.getElementById('ti-demo-leadicon').value;
  _tiDemo.counter = document.getElementById('ti-demo-counter').value;
  _tiDemo.dot = document.getElementById('ti-demo-dot').value;
  var el = document.getElementById('ti-demo-preview');
  if (el) el.innerHTML = _tiBuildSvg(_tiDemo);
}

/* Spec card: render active + inactive side by side */
function _tiSideBySide(baseOpts) {
  var act = Object.assign({}, baseOpts, { active: 'yes' });
  var inact = Object.assign({}, baseOpts, { active: 'no' });
  return '<div style="display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;">' +
    _tiBuildSvg(act) + _tiBuildSvg(inact) +
    '</div>';
}

function _tiInitSpecCards() {
  var cards = [
    ['ti-preview-vs', { orient: 'vertical', size: 'small' }],
    ['ti-preview-vl', { orient: 'vertical', size: 'large' }],
    ['ti-preview-hs', { orient: 'horizontal', size: 'small', leadicon: 'yes', counter: 'yes' }],
    ['ti-preview-hl', { orient: 'horizontal', size: 'large', leadicon: 'yes', counter: 'yes' }]
  ];
  cards.forEach(function(c) {
    var el = document.getElementById(c[0]);
    if (el) el.innerHTML = _tiSideBySide(c[1]);
  });
}

/* ── Tab Item Spec Cards ────────────────────────────────────────── */
var _specCards = {
  vs: { selected: 'true', orient: 'vertical',   size: 'small', leadingIcon: 'false', counter: 'false', redDot: 'false' },
  vl: { selected: 'true', orient: 'vertical',   size: 'large', leadingIcon: 'false', counter: 'false', redDot: 'false' },
  hs: { selected: 'true', orient: 'horizontal', size: 'small', leadingIcon: 'true',  counter: 'true',  redDot: 'false' },
  hl: { selected: 'true', orient: 'horizontal', size: 'large', leadingIcon: 'true',  counter: 'true',  redDot: 'false' }
};
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var sel = card.selected === 'true' ? 'true' : 'false';
  var orient = card.orient === 'horizontal' ? '.horizontal' : '.vertical';
  var sizeName = card.size === 'large' ? '.large' : '.small';
  var lines = ['EBTabItem("Label", value: .one)'];
  lines.push('    .selected(' + sel + ')');
  lines.push('    .orientation(' + orient + ')');
  lines.push('    .size(' + sizeName + ')');
  if (card.orient === 'horizontal' && card.leadingIcon === 'true') {
    lines.push('    .leadingIcon(Image("icon"))');
  }
  if (card.orient === 'horizontal' && card.counter === 'true') {
    lines.push('    .counter(0)');
  }
  if (card.redDot === 'true') {
    lines.push('    .showBadge(true)');
  }
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var sel = card.selected === 'true' ? 'true' : 'false';
  var orient = card.orient === 'horizontal' ? 'EBTabOrientation.Horizontal' : 'EBTabOrientation.Vertical';
  var sizeName = card.size === 'large' ? 'EBTabSize.Large' : 'EBTabSize.Small';
  var lines = ['EBTabItem('];
  lines.push('    label = "Label",');
  lines.push('    selected = ' + sel + ',');
  lines.push('    orientation = ' + orient + ',');
  lines.push('    size = ' + sizeName);
  if (card.orient === 'horizontal' && card.leadingIcon === 'true') {
    lines[lines.length - 1] += ',';
    lines.push('    leadingIcon = painterResource(R.drawable.icon)');
  }
  if (card.orient === 'horizontal' && card.counter === 'true') {
    lines[lines.length - 1] += ',';
    lines.push('    counter = 0');
  }
  if (card.redDot === 'true') {
    lines[lines.length - 1] += ',';
    lines.push('    showBadge = true');
  }
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview SVG by cardKey id */
  var previewMap = {
    vs: { previewId: 'ti-preview-vs', cardKey: 'ti-spec-vs' },
    vl: { previewId: 'ti-preview-vl', cardKey: 'ti-spec-vl' },
    hs: { previewId: 'ti-preview-hs', cardKey: 'ti-spec-hs' },
    hl: { previewId: 'ti-preview-hl', cardKey: 'ti-spec-hl' }
  };

  var active = card.selected === 'true' ? 'yes' : 'no';
  var opts = {
    active: active,
    orient: card.orient,
    size: card.size,
    leadicon: card.leadingIcon === 'true' ? 'yes' : 'no',
    counter: card.counter === 'true' ? 'yes' : 'no',
    dot: card.redDot === 'true' ? 'yes' : 'no'
  };

  /* Update spec-card-preview wrapper inside the card */
  var cardEl = document.getElementById('spec-card-' + cardStyle.replace(/^/, ''));
  /* Use cardKey from data: 'ti-spec-{cardStyle}' */
  var fullCardEl = document.getElementById('spec-card-ti-spec-' + cardStyle);
  if (fullCardEl) {
    var preview = fullCardEl.querySelector('.spec-card-preview');
    if (preview) preview.innerHTML = _tiBuildSvg(opts);
  }

  /* Update Properties row — data-sp="${cardStyle}-${prop}" */
  var spEl = document.querySelector('[data-sp="' + cardStyle + '-' + prop + '"]');
  if (spEl) {
    var displayMap = {
      selected:    { 'true': 'Active', 'false': 'Inactive' },
      leadingIcon: { 'true': 'true',   'false': 'false' },
      counter:     { 'true': 'true',   'false': 'false' },
      redDot:      { 'true': 'true',   'false': 'false' }
    };
    var hexEl = spEl.querySelector('.spec-prop-hex');
    var displayValue = (displayMap[prop] && displayMap[prop][value]) || value;
    if (hexEl) hexEl.textContent = displayValue;
    else spEl.textContent = displayValue;
  }

  /* Colors section is server-rendered from tab-item.ts; Plan A's
     `_patchSpecCardRows` (assessment.js) handles selected:true/false
     overrides. Demo no longer rebuilds it. */

  /* Update DEV code — locate via `[data-code-content="${cardStyle}"]`.
     Always run, even when DEV view is hidden. Use highlightSyntax. */
  var codeEl = document.querySelector('[data-code-content="' + cardStyle + '"]');
  if (codeEl) {
    var lang = codeEl.getAttribute('data-lang') || 'swift';
    var raw = getSnippet(cardStyle, lang, card);
    codeEl.setAttribute('data-final', raw);
    codeEl.textContent = raw;
    if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
  }
}

function _tiInit() {
  updateTabItemDemo();
  _tiInitSpecCards();
  /* Initialize each spec card so preview, properties, and DEV code reflect current state */
  ['vs', 'vl', 'hs', 'hl'].forEach(function(k) {
    var card = _specCards[k];
    ['selected', 'leadingIcon', 'counter', 'redDot'].forEach(function(p) {
      if (card[p] !== undefined) updateSpecCard(k, p, card[p]);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _tiInit);
} else {
  _tiInit();
}

document.addEventListener('astro:page-load', _tiInit);
