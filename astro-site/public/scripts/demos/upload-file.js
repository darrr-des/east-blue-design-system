/* Auto-extracted from assessment-src/components/upload-file.html.
 * Powers the live-preview dropdowns/toggles for the upload-file component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs upload-file
 */
/* ── Upload File JS ───────────────────────────────────────────────── */
var _ufDemo = { state: 'default', hasLabel: 'no' };

function _ufBuildSvg(opts) {
  var hasLabel = opts.hasLabel === 'yes';
  var state = opts.state;
  var w = 304;
  var inputH = state === 'uploading' ? 91 : 72;
  var subtextH = 18;
  var labelH = hasLabel ? 22 : 0;
  var h = labelH + inputH + 8 + subtextH;

  var borderColor = state === 'error' ? '#D61B2C' : '#E5EBF4';
  var subtextColor = state === 'error' ? '#D61B2C' : '#6780A9';
  var subtextText = state === 'error' ? 'Maximum file size: 20MB' : 'Accepted format: JPEG, PNG, or PDF, Up to 3 MB';

  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" xmlns="http://www.w3.org/2000/svg">';
  var y = 0;

  if (hasLabel) {
    s += '<text x="2" y="14" fill="#0A2757" font-size="14" font-weight="600" font-family="\'HeyMeow Rnd\', system-ui">Label</text>';
    y = labelH;
  }

  // Input field
  s += '<rect x="1" y="' + (y + 1) + '" width="' + (w - 2) + '" height="' + (inputH - 2) + '" rx="6" fill="#FFFFFF" stroke="' + borderColor + '" stroke-width="2"/>';

  if (state === 'thumbnail') {
    // Thumbnail + name + trash
    s += '<rect x="16" y="' + (y + 10) + '" width="52" height="52" rx="4" fill="#0057E4" opacity=".08"/>';
    s += '<text x="76" y="' + (y + 42) + '" fill="#005CE5" font-size="18" font-weight="600" font-family="\'HeyMeow Rnd\', system-ui">New_GCash_Fi…</text>';
    s += '<text x="235" y="' + (y + 42) + '" fill="#005CE5" font-size="18" font-weight="600" font-family="\'HeyMeow Rnd\', system-ui">.jpeg</text>';
    // Trash icon
    s += '<path d="M273 ' + (y + 30) + ' h16 M276 ' + (y + 30) + ' v-3 a2 2 0 012-2 h4 a2 2 0 012 2 v3 M277 ' + (y + 30) + ' v12 a2 2 0 002 2 h6 a2 2 0 002-2 v-12" stroke="#6780A9" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
  } else if (state === 'uploading') {
    // Paperclip + name + progress
    var innerY = y + 12;
    s += '<path d="M22 ' + (innerY + 10) + ' v6 a4 4 0 008 0 v-8 a6 6 0 00-12 0 v8" stroke="#6780A9" stroke-width="1.4" fill="none" stroke-linecap="round"/>';
    s += '<text x="38" y="' + (innerY + 20) + '" fill="#005CE5" font-size="18" font-weight="600" font-family="\'HeyMeow Rnd\', system-ui">GCash_File.png</text>';
    // Progress bar
    var pY = innerY + 44;
    s += '<rect x="22" y="' + pY + '" width="230" height="5" rx="2.5" fill="#E5EBF4"/>';
    s += '<rect x="22" y="' + pY + '" width="46" height="5" rx="2.5" fill="#005CE5"/>';
    s += '<text x="264" y="' + (pY + 4) + '" fill="#0A2757" font-size="10" font-weight="600" font-family="\'BarkAda\', system-ui" text-anchor="end">20%</text>';
  } else {
    // Default / Uploaded / Error: paperclip + text + optional trash
    var midY = y + inputH / 2;
    s += '<path d="M22 ' + (midY - 2) + ' v6 a4 4 0 008 0 v-8 a6 6 0 00-12 0 v8" stroke="' + (state === 'error' ? '#6780A9' : '#6780A9') + '" stroke-width="1.4" fill="none" stroke-linecap="round"/>';
    var nameText = state === 'uploaded' ? 'GCash_File.png' : 'Attach file / photo';
    s += '<text x="38" y="' + (midY + 6) + '" fill="#005CE5" font-size="18" font-weight="600" font-family="\'HeyMeow Rnd\', system-ui">' + nameText + '</text>';
    if (state === 'uploaded') {
      s += '<path d="M273 ' + (midY - 6) + ' h16 M276 ' + (midY - 6) + ' v-3 a2 2 0 012-2 h4 a2 2 0 012 2 v3 M277 ' + (midY - 6) + ' v12 a2 2 0 002 2 h6 a2 2 0 002-2 v-12" stroke="#6780A9" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>';
    }
  }

  // Subtext
  var subY = y + inputH + 16;
  s += '<text x="2" y="' + subY + '" fill="' + subtextColor + '" font-size="12" font-weight="600" font-family="\'BarkAda\', system-ui">' + subtextText + '</text>';

  s += '</svg>';
  return s;
}

function updateUploadFileDemo() {
  _ufDemo.state = document.getElementById('uf-demo-state').value;
  _ufDemo.hasLabel = document.getElementById('uf-demo-label').value;
  var el = document.getElementById('uf-demo-preview');
  if (el) el.innerHTML = _ufBuildSvg(_ufDemo);
}

function _ufInitSpecCards() {
  var cards = [
    ['uf-preview-default', 'default'],
    ['uf-preview-uploading', 'uploading'],
    ['uf-preview-uploaded', 'uploaded'],
    ['uf-preview-thumbnail', 'thumbnail'],
    ['uf-preview-error', 'error']
  ];
  cards.forEach(function(c) {
    var el = document.getElementById(c[0]);
    if (el) el.innerHTML = _ufBuildSvg({ state: c[1], hasLabel: 'no' });
  });
}

function _ufInit() {
  updateUploadFileDemo();
  _ufInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ufInit);
else _ufInit();
