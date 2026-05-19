/* Auto-extracted from assessment-src/components/dropdown-item.html.
 * Powers the live-preview dropdowns/toggles for the dropdown-item component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs dropdown-item
 */
/* ── Dropdown Item Component JS ─────────────────────────────────── */
var _ddiDemo = { type: 'text', selected: 'false' };

function _ddiBuildSvg(type, selected) {
  var isSelected = (selected === 'true' || selected === true);
  var w = 366;
  var h = 50;
  var labelColor = '#0A2757';
  var selectedColor = '#005CE5';
  var disabledLabel = '#C2CFE5';
  var disabledBg = '#F6F9FD';
  var borderColor = '#E5EBF4';
  var badgeBg = '#D61B2C';
  var pesoColorDefault = '#0A2757';
  var pesoColorSelected = '#005CE5';

  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  /* disabled background */
  if (type === 'disabeld') {
    s += '<rect x="0" y="0" width="' + w + '" height="' + h + '" fill="' + disabledBg + '"/>';
  }

  /* bottom divider */
  s += '<line x1="0" y1="' + (h - 0.5) + '" x2="' + w + '" y2="' + (h - 0.5) + '" stroke="' + borderColor + '" stroke-width="1"/>';

  var textColor = isSelected ? selectedColor : labelColor;
  if (type === 'disabeld') textColor = disabledLabel;

  if (type === 'text' || type === 'text with tag' || type === 'disabeld') {
    /* left-aligned label */
    s += '<text x="12" y="31" font-family="Proxima Soft, system-ui" font-size="18" font-weight="600" fill="' + textColor + '">Dropdown Item</text>';
    if (type === 'text with tag') {
      /* trailing badge — 42px wide */
      var bx = w - 16 - 42;
      s += '<rect x="' + bx + '" y="16" width="42" height="18" rx="4" fill="' + badgeBg + '"/>';
      s += '<text x="' + (bx + 21) + '" y="28" font-family="Proxima Soft, system-ui" font-size="12" font-weight="700" fill="#FFFFFF" text-anchor="middle">Label</text>';
    }
  } else if (type === 'amount') {
    var pesoColor = isSelected ? pesoColorSelected : pesoColorDefault;
    /* Peso glyph */
    s += '<text x="12" y="32" font-family="Proxima Soft, system-ui" font-size="18" font-weight="700" fill="' + pesoColor + '">&#8369;</text>';
    s += '<text x="34" y="32" font-family="Proxima Soft, system-ui" font-size="18" font-weight="600" fill="' + textColor + '">X,XXX.XX</text>';
  } else if (type === 'country') {
    /* flag — stylized PH tricolor to stand in for the raster */
    var fx = 12, fy = 17;
    s += '<rect x="' + fx + '" y="' + fy + '" width="25" height="16" rx="2" fill="#FCFCFC" stroke="#E5EBF4" stroke-width="0.5"/>';
    s += '<path d="M' + fx + ' ' + fy + 'h25v8H' + fx + 'z" fill="#0038A8"/>';
    s += '<path d="M' + fx + ' ' + (fy + 8) + 'h25v8H' + fx + 'z" fill="#CE1126"/>';
    s += '<path d="M' + fx + ' ' + fy + 'l10 8-10 8z" fill="#FFFFFF"/>';
    s += '<circle cx="' + (fx + 4) + '" cy="' + (fy + 8) + '" r="1.5" fill="#FCD116"/>';
    /* label */
    s += '<text x="' + (fx + 25 + 8) + '" y="31" font-family="Proxima Soft, system-ui" font-size="18" font-weight="600" fill="' + textColor + '">Philippines +63</text>';
  }

  s += '</svg>';
  return s;
}

function updateDropdownItemDemo() {
  var el = document.getElementById('ddi-demo-preview');
  if (el) el.innerHTML = _ddiBuildSvg(_ddiDemo.type, _ddiDemo.selected);
}

/* ── Spec card state (per-card, drives previews + DEV code) ──────── */
/* demoKey → variant defaults. The dropdown panel can drive each card
   independently; the type/selected dropdowns let the user explore any
   combination on every card. */
var _specCards = {
  'text':     { type: 'text',          selected: 'false' },
  'tag':      { type: 'text with tag', selected: 'false' },
  'amount':   { type: 'amount',        selected: 'false' },
  'country':  { type: 'country',       selected: 'false' },
  'disabled': { type: 'disabeld',      selected: 'false' }
};
window._specCards = _specCards;

/* ── Code snippet builders (called by updateSpecCard + switchCodeTab) ── */
function _ddiSwiftStateDot(card) {
  if (card.type === 'disabeld') return '.disabled';
  if (card.selected === 'true') return '.selected';
  return '.default';
}

function _ddiComposeStateName(card) {
  if (card.type === 'disabeld') return 'Disabled';
  if (card.selected === 'true') return 'Selected';
  return 'Default';
}

function _ddiLabelLiteral(card) {
  if (card.type === 'amount')  return '\"1,000.00\"';
  if (card.type === 'country') return '\"Philippines +63\"';
  return '\"Option label\"';
}

function buildSwiftSnippet(type, card) {
  var lines = [];
  lines.push('EBDropdownItem(' + _ddiLabelLiteral(card) + ')');
  lines.push('    .ebState(' + _ddiSwiftStateDot(card) + ')');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var lines = [];
  lines.push('EBDropdownItem(');
  lines.push('    label = ' + _ddiLabelLiteral(card) + ',');
  lines.push('    state = EBItemState.' + _ddiComposeStateName(card));
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

/* ── updateSpecCard — canonical signature ───────────────────────────── */
function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update the spec-card preview SVG — the renderer wraps `previewHtml`
     in `#spec-card-ddi-spec-{cardStyle} .spec-card-preview`. Re-render
     with the current type+selected so the visual reflects the flipped
     control. */
  var cardWrapper = document.getElementById('spec-card-ddi-spec-' + cardStyle);
  if (cardWrapper) {
    var previewEl = cardWrapper.querySelector('.spec-card-preview');
    if (previewEl) {
      previewEl.innerHTML = _ddiBuildSvg(card.type, card.selected);
    }
  }

  /* Update Properties text — data-sp="${cardStyle}-${prop}" */
  var spType = document.querySelector('[data-sp="' + cardStyle + '-type"]');
  if (spType) spType.textContent = card.type;
  var spSelected = document.querySelector('[data-sp="' + cardStyle + '-selected"]');
  if (spSelected) {
    if (card.type === 'disabeld') spSelected.textContent = 'Disabled';
    else if (card.selected === 'true') spSelected.textContent = 'Selected';
    else spSelected.textContent = 'Default';
  }

  /* Update DEV code — always */
  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
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

function _ddiInitSpecCards() {
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'type', _specCards[k].type);
  });
}

function _ddiInit() {
  updateDropdownItemDemo();
  _ddiInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _ddiInit);
} else {
  _ddiInit();
}
document.addEventListener('astro:page-load', _ddiInit);
