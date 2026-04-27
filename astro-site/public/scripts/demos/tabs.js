/* Auto-extracted from assessment-src/components/tabs.html.
 * Powers the live-preview dropdowns/toggles for the tabs component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs tabs
 */
/* ── Tabs Component JS ────────────────────────────────────────────── */
var _tabsDemo = { count: 4, active: 0 };

function _tabsBuildSvg(count, active) {
  var tabW = 62;
  var tabH = 84;
  var w = count * tabW;
  var h = tabH;
  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h + '" fill="none" xmlns="http://www.w3.org/2000/svg">';
  s += '<rect x="0" y="0" width="' + w + '" height="' + h + '" fill="#FFFFFF"/>';
  for (var i = 0; i < count; i++) {
    var x = i * tabW;
    var isActive = i === active;
    // Icon circle
    s += '<circle cx="' + (x + tabW / 2) + '" cy="28" r="16" fill="#C2C6CF"/>';
    // Label
    s += '<text x="' + (x + tabW / 2) + '" y="60" text-anchor="middle" fill="' + (isActive ? '#005CE5' : '#6780A9') + '" font-size="11" font-weight="700" font-family="\'HeyMeow Rnd\', system-ui">Label</text>';
    // Bottom border
    s += '<rect x="' + x + '" y="' + (h - 2) + '" width="' + tabW + '" height="2" fill="' + (isActive ? '#005CE5' : '#E5EBF4') + '"/>';
  }
  s += '</svg>';
  return s;
}

function updateTabsDemo() {
  var c = parseInt(document.getElementById('tabs-demo-count').value, 10) || 4;
  var a = parseInt(document.getElementById('tabs-demo-active').value, 10) || 0;
  if (a >= c) a = 0;
  _tabsDemo.count = c;
  _tabsDemo.active = a;
  var el = document.getElementById('tabs-demo-preview');
  if (el) el.innerHTML = _tabsBuildSvg(c, a);
}

function _tabsInitSpecCards() {
  [[4, 'tabs-preview-4'], [3, 'tabs-preview-3'], [2, 'tabs-preview-2']].forEach(function(pair) {
    var el = document.getElementById(pair[1]);
    if (el) el.innerHTML = _tabsBuildSvg(pair[0], 0);
  });
}

function _tabsInit() {
  updateTabsDemo();
  _tabsInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _tabsInit);
} else {
  _tabsInit();
}
