/* Auto-extracted from assessment-src/components/upload-file.html.
 * Powers the live-preview dropdowns/toggles for the upload-file component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs upload-file
 */
/* ── Upload File JS ───────────────────────────────────────────────── */
var _ufDemo = { state: 'default', hasLabel: 'no', hasThumbnail: 'false', disabled: 'false' };

function _ufBuildSvg(opts) {
  var hasLabel    = opts.hasLabel === 'yes';
  var hasThumb    = opts.hasThumbnail === 'true';
  var disabled    = opts.disabled === 'true';
  var state       = opts.state;
  /* hasThumbnail is orthogonal — when uploaded + hasThumbnail, render thumbnail layout. */
  var renderState = (state === 'uploaded' && hasThumb) ? 'thumbnail' : state;
  var w = 304;
  var inputH = renderState === 'uploading' ? 91 : 72;
  var subtextH = 18;
  var labelH = hasLabel ? 22 : 0;
  var h = labelH + inputH + 8 + subtextH;

  /* Disabled overlays state colors. */
  var fillColor = disabled ? '#EEF2F9' : '#FFFFFF';
  var borderColor = disabled
    ? '#D7E0EF'
    : (renderState === 'error' ? '#D61B2C' : '#E5EBF4');
  var iconStroke = disabled ? '#C2CFE5' : '#6780A9';
  var nameColor = disabled ? '#C2CFE5' : '#005CE5';
  var subtextColor = disabled
    ? '#C2CFE5'
    : (renderState === 'error' ? '#D61B2C' : '#6780A9');
  var subtextText = disabled
    ? 'Read-only — upload disabled'
    : (renderState === 'error' ? 'Maximum file size: 20MB' : 'Accepted format: JPEG, PNG, or PDF, Up to 3 MB');

  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg">';
  var y = 0;

  if (hasLabel) {
    s += '<text x="2" y="14" fill="' + (disabled ? '#90A8D0' : '#0A2757') + '" font-size="14" font-weight="600" font-family="\'Proxima Soft\', system-ui">Label</text>';
    y = labelH;
  }

  // Input field
  s += '<rect x="1" y="' + (y + 1) + '" width="' + (w - 2) + '" height="' + (inputH - 2) + '" rx="6" fill="' + fillColor + '" stroke="' + borderColor + '" stroke-width="2"/>';

  if (renderState === 'thumbnail') {
    // Thumbnail + name + trash
    s += '<rect x="16" y="' + (y + 10) + '" width="52" height="52" rx="4" fill="#0057E4" opacity="' + (disabled ? '.04' : '.08') + '"/>';
    s += '<text x="76" y="' + (y + 42) + '" fill="' + nameColor + '" font-size="18" font-weight="600" font-family="\'Proxima Soft\', system-ui">New_GCash_Fi…</text>';
    s += '<text x="235" y="' + (y + 42) + '" fill="' + nameColor + '" font-size="18" font-weight="600" font-family="\'Proxima Soft\', system-ui">.jpeg</text>';
    // Trash icon
    s += '<path d="M273 ' + (y + 30) + ' h16 M276 ' + (y + 30) + ' v-3 a2 2 0 012-2 h4 a2 2 0 012 2 v3 M277 ' + (y + 30) + ' v12 a2 2 0 002 2 h6 a2 2 0 002-2 v-12" stroke="' + iconStroke + '" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (renderState === 'uploading') {
    // Paperclip + name + progress
    var innerY = y + 12;
    s += '<path d="M22 ' + (innerY + 10) + ' v6 a4 4 0 008 0 v-8 a6 6 0 00-12 0 v8" stroke="' + iconStroke + '" stroke-width="1.4" fill="none" stroke-linecap="round"/>';
    s += '<text x="38" y="' + (innerY + 20) + '" fill="' + nameColor + '" font-size="18" font-weight="600" font-family="\'Proxima Soft\', system-ui">GCash_File.png</text>';
    // Progress bar
    var pY = innerY + 44;
    s += '<rect x="22" y="' + pY + '" width="230" height="5" rx="2.5" fill="#E5EBF4"/>';
    s += '<rect x="22" y="' + pY + '" width="46" height="5" rx="2.5" fill="' + (disabled ? '#C2CFE5' : '#005CE5') + '"/>';
    s += '<text x="264" y="' + (pY + 4) + '" fill="' + (disabled ? '#90A8D0' : '#0A2757') + '" font-size="10" font-weight="600" font-family="\'BarkAda\', system-ui" text-anchor="end">20%</text>';
  } else {
    // Default / Uploaded / Error: paperclip + text + optional trash
    var midY = y + inputH / 2;
    s += '<path d="M22 ' + (midY - 2) + ' v6 a4 4 0 008 0 v-8 a6 6 0 00-12 0 v8" stroke="' + iconStroke + '" stroke-width="1.4" fill="none" stroke-linecap="round"/>';
    var nameText = renderState === 'uploaded' ? 'GCash_File.png' : 'Attach file / photo';
    s += '<text x="38" y="' + (midY + 6) + '" fill="' + nameColor + '" font-size="18" font-weight="600" font-family="\'Proxima Soft\', system-ui">' + nameText + '</text>';
    if (renderState === 'uploaded') {
      s += '<path d="M273 ' + (midY - 6) + ' h16 M276 ' + (midY - 6) + ' v-3 a2 2 0 012-2 h4 a2 2 0 012 2 v3 M277 ' + (midY - 6) + ' v12 a2 2 0 002 2 h6 a2 2 0 002-2 v-12" stroke="' + iconStroke + '" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
    }
  }

  // Subtext
  var subY = y + inputH + 16;
  s += '<text x="2" y="' + subY + '" fill="' + subtextColor + '" font-size="12" font-weight="600" font-family="\'BarkAda\', system-ui">' + subtextText + '</text>';

  s += '</svg>';
  return s;
}

function updateUploadFileDemo() {
  var stateEl = document.getElementById('uf-demo-state');
  var labelEl = document.getElementById('uf-demo-label');
  if (stateEl) _ufDemo.state    = stateEl.value;
  if (labelEl) _ufDemo.hasLabel = labelEl.value;
  var el = document.getElementById('uf-demo-preview');
  if (el) el.innerHTML = _ufBuildSvg(_ufDemo);
}

/* ── Upload File Spec Cards ───────────────────────────────────────── */
var _ufSpecCards = {
  'default':   { state: 'default',   hasLabel: 'no', hasThumbnail: 'false', disabled: 'false' },
  'uploading': { state: 'uploading', hasLabel: 'no', hasThumbnail: 'false', disabled: 'false' },
  'uploaded':  { state: 'uploaded',  hasLabel: 'no', hasThumbnail: 'false', disabled: 'false' },
  'thumbnail': { state: 'uploaded',  hasLabel: 'no', hasThumbnail: 'true',  disabled: 'false' },
  'error':     { state: 'error',     hasLabel: 'no', hasThumbnail: 'false', disabled: 'false' }
};

/* Expose for shared utilities — `switchCodeTab` reads this. */
var _specCards = _ufSpecCards;
window._specCards = _specCards;

function _ufStateName(state, hasThumb, lang) {
  /* Map to native enum names. hasThumbnail is orthogonal in native API. */
  var s = state;
  if (lang === 'swift') {
    if (s === 'default')        return '.default';
    if (s === 'uploading')      return '.uploading';
    if (s === 'uploaded')       return '.uploaded';
    if (s === 'thumbnail')      return '.uploaded';
    return '.error';
  }
  if (s === 'default')        return 'Default';
  if (s === 'uploading')      return 'Uploading';
  if (s === 'uploaded')       return 'Uploaded';
  if (s === 'thumbnail')      return 'Uploaded';
  return 'Error';
}

function buildSwiftSnippet(type, card) {
  var stateName = _ufStateName(card.state, card.hasThumbnail === 'true', 'swift');
  var labelArg  = card.hasLabel === 'yes' ? '"Attach file"' : 'nil';
  var s = 'EBUploadFile(label: ' + labelArg + ', selection: $file)';
  s += '\n    .ebState(' + stateName + ')';
  if (card.hasThumbnail === 'true') s += '\n    .hasThumbnail(true)';
  if (card.disabled === 'true')     s += '\n    .disabled(true)';
  return s;
}

function buildComposeSnippet(type, card) {
  var stateName = _ufStateName(card.state, card.hasThumbnail === 'true', 'compose');
  var labelArg  = card.hasLabel === 'yes' ? '"Attach file"' : 'null';
  var lines = ['EBUploadFile('];
  lines.push('    label = ' + labelArg + ',');
  lines.push('    file = file,');
  lines.push('    onFileChange = { },');
  var trailing = (card.hasThumbnail === 'true' || card.disabled === 'true');
  lines.push('    state = EBFieldState.' + stateName + (trailing ? ',' : ''));
  if (card.hasThumbnail === 'true') {
    lines.push('    hasThumbnail = true' + (card.disabled === 'true' ? ',' : ''));
  }
  if (card.disabled === 'true') {
    lines.push('    enabled = false');
  }
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _ufSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update SVG preview — locate by id `uf-preview-${cardStyle}` */
  var previewEl = document.getElementById('uf-preview-' + cardStyle);
  if (previewEl) previewEl.innerHTML = _ufBuildSvg(card);

  /* Update Properties readouts via [data-sp="${cardStyle}-${prop}"] */
  ['state', 'hasLabel', 'hasThumbnail', 'disabled'].forEach(function(p) {
    var spEl = document.querySelector('[data-sp="' + cardStyle + '-' + p + '"]');
    if (spEl) spEl.textContent = card[p];
  });

  /* Update DEV code — locate via [data-code-content="${cardStyle}"]. */
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

function _ufInitSpecCards() {
  Object.keys(_ufSpecCards).forEach(function(key) {
    var el = document.getElementById('uf-preview-' + key);
    if (el) el.innerHTML = _ufBuildSvg(_ufSpecCards[key]);
  });
}

function _ufInit() {
  updateUploadFileDemo();
  _ufInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ufInit);
else _ufInit();

/* ── Re-init after Astro view-transition swaps ─────────────── */
(function(){
  document.addEventListener('astro:page-load', _ufInit);
})();
