/* Auto-extracted from assessment-src/components/date-picker-item.html.
 * Powers the live-preview dropdowns/toggles for the date-picker-item component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs date-picker-item
 */
/* ── Date Picker - Item Component JS ──────────────────────────────── */
var _dpiDemo = { type: 'Default', state: 'Enabled' };

function _dpiBuildCell(type, state) {
  /*
    Render a single 32×32 cell matching the Figma variant.
    - Default: white bg, primary label (#0A2757) or disabled (#C2CFE5)
    - Today: 1.5px ring + colored label (enabled/disabled)
    - Selected: solid blue fill, white bold label
    - Range (Middle): weakest-info bg, bold blue label, with overflow strips
    - Prev/Next: dim label
  */
  var bg = '#FFFFFF';
  var border = 'none';
  var color = '#0A2757';
  var fontWeight = '600';
  var radius = '30px';
  var label = '1';

  if (type === 'Default' && state === 'Disabled') {
    color = '#C2CFE5';
  } else if (type === 'Today' && state === 'Enabled') {
    border = '1.5px solid #005CE5';
    color = '#005CE5';
  } else if (type === 'Today' && state === 'Disabled') {
    border = '1.5px solid #9BC5FD';
    color = '#9BC5FD';
  } else if (type === 'Selected') {
    bg = '#005CE5';
    color = '#FFFFFF';
    fontWeight = '700';
  } else if (type === 'Range (Middle)') {
    bg = '#E5F1FF';
    color = '#005CE5';
    fontWeight = '700';
    radius = '0';
  } else if (type === 'Prev/Next') {
    color = '#C2CFE5';
  }

  /* Range variant: add strip overflow on both sides so it reads as continuous */
  var rangeStrips = '';
  if (type === 'Range (Middle)' && state === 'Enabled') {
    rangeStrips = ''
      + '<div style="position:absolute;left:-9px;top:0;width:9px;height:32px;background:#E5F1FF;"></div>'
      + '<div style="position:absolute;right:-11px;top:0;width:11px;height:32px;background:#E5F1FF;"></div>';
  }

  /* Invalid-combination notice for missing Disabled variants */
  if (state === 'Disabled' && (type === 'Selected' || type === 'Range (Middle)' || type === 'Prev/Next')) {
    return ''
      + '<div style="padding:18px 22px;border:1px dashed #9BC5FD;border-radius:8px;background:#F5F9FF;color:#0A2757;max-width:320px;text-align:center;">'
      +   '<div style="font-weight:700;font-size:13px;margin-bottom:6px;">Variant not published</div>'
      +   '<div style="font-size:12px;line-height:1.4;color:#3C4A5C;">' + type + ' · Disabled does not exist in the Figma source. Only Default and Today have a Disabled form. See Open Issue C5.</div>'
      + '</div>';
  }

  return ''
    + '<div style="position:relative;display:inline-block;font-family:\'Proxima Soft\', system-ui, sans-serif;">'
    +   rangeStrips
    +   '<div style="position:relative;width:32px;height:32px;box-sizing:border-box;background:' + bg + ';border:' + border + ';border-radius:' + radius + ';display:flex;align-items:center;justify-content:center;color:' + color + ';font-weight:' + fontWeight + ';font-size:14px;line-height:1;letter-spacing:.25px;">'
    +     label
    +   '</div>'
    + '</div>';
}

function _dpiFramedCell(type, state) {
  /* Wrap the cell in a neutral backdrop so tiny cells are visible in the demo panel. */
  return ''
    + '<div style="display:flex;align-items:center;justify-content:center;padding:40px;background:#F4F6FA;border-radius:8px;min-height:120px;">'
    +   _dpiBuildCell(type, state)
    + '</div>';
}

function updateDatePickerItemDemo() {
  var demo = document.getElementById('dpi-demo-preview');
  if (demo) demo.innerHTML = _dpiFramedCell(_dpiDemo.type, _dpiDemo.state);
}

/* ── Spec card state — single dynamic card ─────────────────────────── */
var _specCards = {
  'default': { type: 'Default', state: 'Enabled' }
};
window._specCards = _specCards;

/* ── Code snippet builders (called by updateSpecCard + switchCodeTab) ── */
function _dpiSwiftStateDot(type) {
  if (type === 'Today')          return '.today';
  if (type === 'Selected')       return '.selected';
  if (type === 'Range (Middle)') return '.inRange';
  if (type === 'Prev/Next')      return '.adjacent';
  return '.default';
}

function _dpiComposeStateName(type) {
  if (type === 'Today')          return 'Today';
  if (type === 'Selected')       return 'Selected';
  if (type === 'Range (Middle)') return 'InRange';
  if (type === 'Prev/Next')      return 'Adjacent';
  return 'Default';
}

function buildSwiftSnippet(type, card) {
  var lines = [];
  lines.push('EBDayCell(date)');
  lines.push('    .ebState(' + _dpiSwiftStateDot(card.type) + ')');
  if (card.state === 'Disabled') {
    lines.push('    .disabled(true)');
  }
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var lines = [];
  lines.push('EBDayCell(');
  lines.push('    date = date,');
  if (card.state === 'Disabled') {
    lines.push('    state = EBDayState.' + _dpiComposeStateName(card.type) + ',');
    lines.push('    enabled = false');
  } else {
    lines.push('    state = EBDayState.' + _dpiComposeStateName(card.type));
  }
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

  /* Update preview inside the spec card root */
  var rootEl = document.getElementById('spec-card-' + cardStyle);
  if (rootEl) {
    var previewEl = rootEl.querySelector('.spec-card-preview');
    if (previewEl) previewEl.innerHTML = _dpiFramedCell(card.type, card.state);
  }

  /* Update Properties text — data-sp="${cardStyle}-${prop}" */
  var spType = document.querySelector('[data-sp="' + cardStyle + '-type"]');
  if (spType) spType.textContent = card.type;
  var spState = document.querySelector('[data-sp="' + cardStyle + '-state"]');
  if (spState) spState.textContent = card.state;

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

function _dpiInitSpecCards() {
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'type', _specCards[k].type);
  });
}

function _dpiInit() {
  updateDatePickerItemDemo();
  _dpiInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _dpiInit);
} else {
  _dpiInit();
}
document.addEventListener('astro:page-load', _dpiInit);
