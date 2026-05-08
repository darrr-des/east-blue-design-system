/* Auto-extracted from assessment-src/components/recipient-field.html.
 * Powers the live-preview dropdowns/toggles for the recipient-field component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs recipient-field
 */
/* ── Recipient Field Component JS ──────────────────────────────────── */
var _rfDemo = { state: 'Default', filled: 'false', showLabel: 'true', trailingIcons: 'true' };

var _rfColors = {
  Default:  { border: '#D7E0EF', bg: '#FFFFFF' },
  Active:   { border: '#005CE5', bg: '#FFFFFF' },
  Error:    { border: '#D61B2C', bg: '#FFFFFF' },
  Disabled: { border: 'none',    bg: '#EEF2F9' }
};
var _rfLabelColors = {
  Default:  '#0A2757',
  Active:   '#0A2757',
  Error:    '#0A2757',
  Disabled: '#90A8D0'
};
var _rfTextColors = {
  Default:  { filled: '#0A2757', empty: '#90A8D0' },
  Active:   { filled: '#0A2757', empty: '#90A8D0' },
  Error:    { filled: '#0A2757', empty: '#90A8D0' },
  Disabled: { filled: '#90A8D0', empty: '#C2CFE5' }
};

function _rfBuildSvg(state, filled, showLabel, trailingIcons) {
  var c = _rfColors[state] || _rfColors.Default;
  var lc = _rfLabelColors[state] || _rfLabelColors.Default;
  var tc = _rfTextColors[state] || _rfTextColors.Default;
  var hasLabel = showLabel !== 'false';
  var hasIcons = trailingIcons !== 'false';
  var textColor = (filled === 'true') ? tc.filled : tc.empty;
  var borderAttr = c.border === 'none' ? '' : ' stroke="' + c.border + '" stroke-width="1.5"';
  var textVal = (filled === 'true') ? '0917 123 4567' : 'Enter number or name';
  var s = '<svg width="366" height="56" viewBox="0 0 366 56" fill="none">';
  s += '<rect x="0.5" y="0.5" width="365" height="55" rx="5.5" fill="' + c.bg + '"' + borderAttr + '/>';
  if (hasLabel) {
    /* label (top line) */
    s += '<text x="12" y="22" font-family="Proxima Soft, system-ui" font-size="12" font-weight="600" fill="' + lc + '" letter-spacing="0.5">Mobile Number</text>';
    /* value/placeholder (bottom line) */
    s += '<text x="12" y="40" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="' + textColor + '" letter-spacing="0.25">' + textVal + '</text>';
  } else {
    /* single-line — value only, vertically centered */
    s += '<text x="12" y="32" font-family="Proxima Soft, system-ui" font-size="14" font-weight="600" fill="' + textColor + '" letter-spacing="0.25">' + textVal + '</text>';
  }
  /* trailing icon placeholders — right padding 12px (matches 12px left) */
  if (hasIcons) {
    s += '<rect x="288" y="12" width="32" height="32" rx="16" fill="#C2C6CF" opacity=".35"/>';
    s += '<rect x="322" y="12" width="32" height="32" rx="16" fill="#C2C6CF" opacity=".35"/>';
  }
  s += '</svg>';
  return s;
}

function updateRecipientFieldDemo() {
  var el = document.getElementById('rf-demo-preview');
  if (el) el.innerHTML = _rfBuildSvg(_rfDemo.state, _rfDemo.filled, _rfDemo.showLabel, _rfDemo.trailingIcons);
}

/* ── Recipient Field Spec Cards ───────────────────────────────────── */
/* Each demoKey starts with a card-specific state. All four axes are
   user-editable through the Properties panel. */
var _rfSpecCards = {
  default:  { state: 'Default',  filled: 'false', showLabel: 'true', trailingIcons: 'true' },
  active:   { state: 'Active',   filled: 'false', showLabel: 'true', trailingIcons: 'true' },
  error:    { state: 'Error',    filled: 'false', showLabel: 'true', trailingIcons: 'true' },
  disabled: { state: 'Disabled', filled: 'false', showLabel: 'true', trailingIcons: 'true' }
};

/* Expose for shared utilities — `switchCodeTab` reads this when the
   user clicks SwiftUI / Compose so it can rebuild the snippet. */
var _specCards = _rfSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var stateMap = { Default: '.default', Active: '.active', Error: '.error', Disabled: '.disabled' };
  var st = stateMap[card.state] || '.default';
  var lines = [];
  lines.push('EBRecipientField(recipient: selectedRecipient)');
  if (card.showLabel === 'false') lines.push('    .ebLabel(nil)');
  if (card.trailingIcons === 'true') {
    lines.push('    .ebTrailingIcons([');
    lines.push('        Image(systemName: "person.crop.circle"),');
    lines.push('        Image(systemName: "qrcode.viewfinder")');
    lines.push('    ])');
  }
  lines.push('    .ebState(' + st + ')');
  lines.push('    .isFilled(' + card.filled + ')');
  if (card.state === 'Disabled') lines.push('    .disabled(true)');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var stateMap = { Default: 'Default', Active: 'Active', Error: 'Error', Disabled: 'Disabled' };
  var st = stateMap[card.state] || 'Default';
  var lines = [];
  lines.push('EBRecipientField(');
  lines.push('    recipient = selectedRecipient,');
  if (card.showLabel === 'false') {
    lines.push('    label = null,');
  } else {
    lines.push('    label = "Mobile Number",');
  }
  if (card.trailingIcons === 'true') {
    lines.push('    trailingIcons = {');
    lines.push('        IconButton(onClick = onContactsClick) {');
    lines.push('            Icon(Icons.Default.Person, "Contacts")');
    lines.push('        }');
    lines.push('        IconButton(onClick = onScanClick) {');
    lines.push('            Icon(Icons.Default.QrCode, "Scan QR")');
    lines.push('        }');
    lines.push('    },');
  }
  lines.push('    state = EBFieldState.' + st + ',');
  lines.push('    isFilled = ' + (card.filled === 'true' ? 'true' : 'false') + (card.state === 'Disabled' ? ',' : ''));
  if (card.state === 'Disabled') lines.push('    enabled = false');
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _rfSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview SVG — find the <svg> inside the card's preview pane */
  var cardEl = document.getElementById('spec-card-rf-spec-' + cardStyle);
  if (cardEl) {
    var preview = cardEl.querySelector('.spec-card-preview');
    if (preview) preview.innerHTML = _rfBuildSvg(card.state, card.filled, card.showLabel, card.trailingIcons);
  }

  /* Update Properties readouts — data-sp="${cardStyle}-${prop}" for each axis */
  ['state', 'filled', 'showLabel', 'trailingIcons'].forEach(function (p) {
    var spEl = document.querySelector('[data-sp="' + cardStyle + '-' + p + '"]');
    if (spEl) spEl.textContent = card[p];
  });

  /* Update DEV code — locate via [data-code-content="${cardStyle}"]. Always
     rebuild even when DEV view is hidden. */
  var codeEl = document.querySelector('[data-code-content="' + cardStyle + '"]');
  if (codeEl) {
    var activeTab = null;
    var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
    if (devView) activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var code = getSnippet(cardStyle, lang, card);
    codeEl.setAttribute('data-final', code);
    codeEl.setAttribute('data-lang', lang);
    codeEl.textContent = code;
    if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
  }
}
window.updateSpecCard = updateSpecCard;

function _rfInitSpecCards() {
  Object.keys(_rfSpecCards).forEach(function (k) {
    /* Re-render preview + code by toggling the same value. */
    updateSpecCard(k, 'filled', _rfSpecCards[k].filled);
  });
}

function _rfInit() {
  updateRecipientFieldDemo();
  _rfInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _rfInit);
} else {
  _rfInit();
}

/* ── Re-init after Astro view-transition swaps ─────────────── */
document.addEventListener('astro:page-load', _rfInit);
