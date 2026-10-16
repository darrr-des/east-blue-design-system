/* Tab Group — Overview live preview + DEV code.
 * Rebuilt from Figma component set 26327:11046 (GCash DS Sticker Sheets v2): a row of Tab Item
 * instances (each Fill), the first selected. Orientation and Size are passed to every item.
 * Panel: Orientation · Size · Tabs Count (4, 3, 2). */

/* ── One Tab Item, drawn from Figma set 26327:10941 ─────────────────────
 * Horizontal: fixed 97 (Medium) / 102 (Large) wide; container padding 0 12, gap 8;
 *   Icon Slot 24 · label (Primary/Label/Base 16/16 Medium, Primary/Label/Large 18/18 Large,
 *   padding 16/16 or 17/15) · counter. Placement=Trailing puts the slot after the label.
 * Vertical: hugs; container padding 12 0; icon-label padding 0 12, gap 12;
 *   Icon Slot 32 above a row of label + counter (gap 8).
 * Bottom stroke 2px, inside the box as in Figma. Figma ships the Icon Slot empty, so it is drawn as space. */
var TAB_COLOR = {
  Default:  { on: '#005CE5', off: '#6780A9' },   /* text/color-text-primary · text/color-text-weaker */
  Hover:    { on: '#2340A9', off: '#6780A9' },   /* text/color-text-primary-hover */
  Disabled: { on: '#C2CFE5', off: '#C2CFE5' }    /* text/color-text-disabled */
};
/* Figma sizes an auto-width text box up to a whole pixel ("Label" is 41, not 40.47). */
function _tabRoundLabels(el) {
  if (!el) return;
  [].forEach.call(el.querySelectorAll('[data-tab-label]'), function (s) { s.style.width = Math.ceil(s.getBoundingClientRect().width) + 'px'; });
}

var TAB_LINE = { on: '#005CE5', hover: '#2340A9', off: '#E5EBF4' };  /* border/color-border-primary(-hover) · border/color-border-weak */

function _tabItem(o) {
  var large = o.Size === 'Large', vert = o.Orientation === 'Vertical', sel = o.isSelected;
  var color = (TAB_COLOR[o.State] || TAB_COLOR.Default)[sel ? 'on' : 'off'];
  var line = sel ? (o.State === 'Hover' ? TAB_LINE.hover : TAB_LINE.on) : TAB_LINE.off;
  var font = "font-family:'Proxima Soft',system-ui;font-weight:700;letter-spacing:0.25px;white-space:nowrap;";
  var label = '<span data-tab-label style="display:inline-block;' + font + 'font-size:' + (large ? 18 : 16) + 'px;line-height:' + (large ? 18 : 16) + 'px;color:' + color + ';">' + o.label + '</span>';
  var counter = o.hasCounter ? '<span style="flex:none;box-sizing:border-box;width:24px;height:24px;border-radius:99px;background:#EEF2F9;display:flex;align-items:center;justify-content:center;' +
      font.replace('letter-spacing:0.25px;', '') + 'font-size:14px;line-height:14px;color:#072592;">0</span>' : '';
  var slot = function (s) { return o.hasIcon ? '<span style="flex:none;width:' + s + 'px;height:' + s + 'px;"></span>' : ''; };
  var dot = o.hasNotificationDot ? '<span style="position:absolute;width:6px;height:6px;border-radius:50%;background:#D61B2C;' +
      (vert ? 'right:' + (large ? 4 : 4) + 'px;top:4px;' : 'right:' + (large ? 4 : 4) + 'px;top:' + (large ? 6 : 4) + 'px;') + '"></span>' : '';
  var h;
  if (vert) {
    h = '<div style="position:relative;display:inline-flex;flex-direction:column;align-items:center;padding:12px 12px;gap:12px;box-shadow:inset 0 -2px 0 ' + line + ';box-sizing:border-box;' + (o.fill ? 'flex:1;' : '') + '">' +
        slot(32) + '<div style="display:flex;align-items:center;gap:8px;height:24px;">' + label + counter + '</div>' + dot + '</div>';
  } else {
    var w = large ? 102 : 97;
    var lab = '<span style="display:flex;align-items:center;padding:' + (large ? '17px 0 15px' : '16px 0') + ';">' + label + '</span>';
    h = '<div style="position:relative;display:inline-flex;justify-content:center;align-items:center;' + (o.fill ? 'flex:1;min-width:' + w + 'px;' : 'width:' + w + 'px;') +
        'box-shadow:inset 0 -2px 0 ' + line + ';box-sizing:border-box;"><div style="display:flex;align-items:center;gap:8px;padding:0 12px;">' +
        (o.Placement === 'Trailing' ? lab + slot(24) : slot(24) + lab) + counter + '</div>' + dot + '</div>';
  }
  return h;
}

var _tbDemo = { Orientation: 'Vertical', Size: 'Medium', count: '4' };
window._tbDemo = _tbDemo;

function _tabsRender(o) {
  var n = parseInt(o.count, 10) || 4, items = '';
  for (var i = 0; i < n; i++) items += _tabItem({ State: 'Default', Orientation: o.Orientation, Size: o.Size, Placement: 'Leading',
    isSelected: i === 0, hasIcon: true, hasCounter: false, hasNotificationDot: false, label: 'Label', fill: true });
  return '<div style="display:inline-flex;align-items:flex-end;">' + items + '</div>';
}

function updateTabsDemo() {
  var g = function (id) { return document.getElementById(id); };
  [['tb-demo-orientation', 'Orientation'], ['tb-demo-size', 'Size'], ['tb-demo-count', 'count']].forEach(function (p) { if (g(p[0])) _tbDemo[p[1]] = g(p[0]).value; });
  var el = g('tb-demo-preview');
  if (el) { el.innerHTML = _tabsRender(_tbDemo); _tabRoundLabels(el); }
}
window.updateTabsDemo = updateTabsDemo;

/* ── DEV code — component API, as on the Code tab ───────────────────── */
function buildSwiftSnippet(c) {
  var n = parseInt(c.count, 10) || 4, items = [];
  for (var i = 0; i < n; i++) items.push('    EBTabItem("Label")');
  return 'EBTabGroup(selection: $selected) {\n' + items.join('\n') + '\n}\n.ebOrientation(.' + c.Orientation.toLowerCase() + ')\n.ebSize(.' + c.Size.toLowerCase() + ')';
}
function buildComposeSnippet(c) {
  var n = parseInt(c.count, 10) || 4, items = [];
  for (var i = 0; i < n; i++) items.push('"Label"');
  return 'EBTabGroup(\n    items = listOf(' + items.join(', ') + '),\n    selectedIndex = selected,\n    onSelect = { selected = it },\n    orientation = EBTabOrientation.' + c.Orientation + ',\n    size = EBTabSize.' + c.Size + '\n)';
}
function getSnippet(cardKey, lang, card) { card = card || _tbDemo; return lang === 'swift' ? buildSwiftSnippet(card) : buildComposeSnippet(card); }
window.getSnippet = getSnippet;

function _tbInit() { updateTabsDemo(); if (document.fonts && document.fonts.ready) document.fonts.ready.then(updateTabsDemo); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tbInit);
else _tbInit();
document.addEventListener('astro:page-load', _tbInit);
