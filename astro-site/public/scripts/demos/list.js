/* Auto-extracted from assessment-src/components/list.html.
 * Powers the live-preview dropdowns/toggles for the list component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs list
 */
/* ── List JS ──────────────────────────────────────────────────────── */
function _listBuildPreview() {
  var rows = [
    { level: 1, text: 'List body with level-1 style' },
    { level: 1, text: 'List body with level-1 style' },
    { level: 2, text: 'List body with level-2 style' },
    { level: 3, text: 'List body with level-3 style' },
    { level: 1, text: 'List body with level-1 style' },
    { level: 1, text: 'List body with level-1 style' },
    { level: 1, text: 'List body with level-1 style' }
  ];
  var s = '<div style="display:flex;flex-direction:column;gap:8px;max-width:310px;">';
  rows.forEach(function(r) {
    var indent = r.level === 2 ? 16 : r.level === 3 ? 32 : 0;
    s += '<div style="display:flex;gap:8px;align-items:flex-start;padding-left:' + indent + 'px;">';
    s += '<div style="padding-top:2px;"><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="2.5" fill="#90A8D0"/></svg></div>';
    s += '<div style="color:#445C85;font-family:\'BarkAda\', system-ui;font-weight:600;font-size:14px;line-height:20px;">' + r.text + '</div>';
    s += '</div>';
  });
  s += '</div>';
  return s;
}

function _listInit() {
  var el = document.getElementById('list-demo-preview');
  if (el) el.innerHTML = _listBuildPreview();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _listInit);
else _listInit();
