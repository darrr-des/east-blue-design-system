/* Auto-extracted from assessment-src/components/list-item.html.
 * Powers the live-preview dropdowns/toggles for the list-item component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs list-item
 */
/* ── List Item JS ─────────────────────────────────────────────────── */
var _liDemo = { level: 1, asset: 'bullet' };

function _liBuildMarker16(variant) {
  var v = '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">';
  switch (variant) {
    case 'check': v += '<path d="M3 8l3 3 7-7" stroke="#90A8D0" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'; break;
    case 'check-positive': v += '<path d="M3 8l3 3 7-7" stroke="#27C990" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>'; break;
    case 'pending': v += '<circle cx="8" cy="8" r="6.5" fill="none" stroke="#90A8D0" stroke-width="1.5"/><path d="M8 4v4l2.5 1.5" stroke="#90A8D0" stroke-width="1.5" stroke-linecap="round" fill="none"/>'; break;
    case 'pending-notice': v += '<circle cx="8" cy="8" r="6.5" fill="none" stroke="#CA970C" stroke-width="1.5"/><path d="M8 4v4l2.5 1.5" stroke="#CA970C" stroke-width="1.5" stroke-linecap="round" fill="none"/>'; break;
    case 'numbered': v += '<rect x="0" y="2" width="16" height="12" rx="6" fill="#EEF2F9"/><text x="8" y="11" text-anchor="middle" fill="#90A8D0" font-size="9" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui">1.</text>'; break;
    case 'custom': v += '<rect x="1" y="1" width="14" height="14" rx="2" fill="none" stroke="#ADBDDC" stroke-width="1" stroke-dasharray="2 2"/>'; break;
    default: v += '<circle cx="8" cy="8" r="2.5" fill="#90A8D0"/>';
  }
  v += '</svg>';
  return v;
}

function _liBuildRow(level, assetVariant) {
  var indent = level === 2 ? 16 : level === 3 ? 32 : 0;
  var body = 'List body with level-' + level + ' style';
  var w = 310;
  var s = '<div style="display:flex;gap:8px;align-items:flex-start;padding-left:' + indent + 'px;max-width:' + w + 'px;">';
  s += '<div style="padding-top:2px;">' + _liBuildMarker16(assetVariant) + '</div>';
  s += '<div style="color:#445C85;font-family:\'BarkAda\', system-ui;font-weight:600;font-size:14px;line-height:20px;">' + body + '</div>';
  s += '</div>';
  return s;
}

function updateListItemDemo() {
  _liDemo.level = parseInt(document.getElementById('li-demo-level').value, 10);
  _liDemo.asset = document.getElementById('li-demo-asset').value;
  var el = document.getElementById('li-demo-preview');
  if (el) el.innerHTML = _liBuildRow(_liDemo.level, _liDemo.asset);
}

function _liInitSpecCards() {
  [1, 2, 3].forEach(function(lv) {
    var el = document.getElementById('li-preview-' + lv);
    if (el) el.innerHTML = _liBuildRow(lv, 'bullet');
  });
}

function _liInit() {
  updateListItemDemo();
  _liInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _liInit);
else _liInit();
