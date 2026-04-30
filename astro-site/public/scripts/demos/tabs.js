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

/* ── Spec card state ──────────────────────────────────────────────── */
var _specCards = {
  'tabs-4': { count: 4, active: 0 },
  'tabs-3': { count: 3, active: 0 },
  'tabs-2': { count: 2, active: 0 }
};
window._specCards = _specCards;

var _tabLabels = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'];

/* ── Code snippet builders ────────────────────────────────────────── */
function buildSwiftSnippet(type, card) {
  var cnt = (card && card.count) || 4;
  var act = (card && card.active) || 0;
  var lines = [];
  lines.push('EBTabs(selection: $current) {');
  for (var i = 0; i < cnt; i++) {
    lines.push('    EBTabItem("' + _tabLabels[i] + '", value: .' + ['one','two','three','four'][i] + ')');
  }
  lines.push('}');
  if (act > 0) lines.push('// .selectedIndex = ' + act);
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var cnt = (card && card.count) || 4;
  var act = (card && card.active) || 0;
  var lines = [];
  lines.push('EBTabs(selectedIndex = ' + act + ', onTabChange = { }) {');
  for (var i = 0; i < cnt; i++) {
    lines.push('    EBTabItem(label = "' + _tabLabels[i] + '")');
  }
  lines.push('}');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

/* ── Spec card update ─────────────────────────────────────────────── */
function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  if (prop === 'active') {
    var idx = parseInt(value, 10);
    if (isNaN(idx)) idx = 0;
    if (idx >= card.count) idx = 0;
    card.active = idx;
  } else {
    card[prop] = value;
  }

  /* Update preview */
  var el = document.getElementById('tabs-preview-' + cardStyle);
  if (el) el.innerHTML = _tabsBuildSvg(card.count, card.active);

  /* Update properties text */
  var spActive = document.querySelector('[data-sp="' + cardStyle + '-active"]');
  if (spActive) spActive.textContent = _tabLabels[card.active] || 'Tab 1';

  /* Update DEV code */
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

function _tabsInitSpecCards() {
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'active', _specCards[k].active);
  });
}

function _tabsInit() {
  if (document.getElementById('tabs-demo-preview')) updateTabsDemo();
  _tabsInitSpecCards();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _tabsInit);
} else {
  _tabsInit();
}
document.addEventListener('astro:page-load', _tabsInit);
