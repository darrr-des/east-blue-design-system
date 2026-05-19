/* Segmented Control - Group — sized 1:1 to Figma node 27:30940.
 *   Width 366, height varies:  64 (base) / 86 (+ subtext) / 104 (+ avatars) / 118 (both)
 *   Label:    Proxima Soft Semibold · 16 / 16 · +0.25, color #0A2757
 *   Control:  Toggle Segmented Control 366 × 40 (segments evenly split)
 *   Subtext:  See Subtext Message component (rendered here at #6780A9, 14/22)
 *   Avatars:  32 px tall small avatars, gap 4 between
 */

function _scgSegment(label, isSelected, width, position) {
  /* Only the OUTSIDE corners are rounded — left segment rounds left, right
     segment rounds right. Inner edges meet flush, no doubled radius gap. */
  var radius = position === 'left' ? '6px 0 0 6px' : '0 6px 6px 0';
  return '<div style="' +
    'box-sizing:border-box;width:' + width + 'px;height:40px;' +
    'display:flex;align-items:center;justify-content:center;' +
    'font-family:\'Proxima Soft\', system-ui, sans-serif;' +
    'font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;' +
    'background:' + (isSelected ? '#005CE5' : '#FFFFFF') + ';' +
    'color:'      + (isSelected ? '#FFFFFF' : '#005CE5') + ';' +
    'border:1.5px solid #005CE5;' +
    'border-radius:' + radius + ';' +
  '">' + label + '</div>';
}

function _scgControl(selected) {
  /* Inside the group the Toggle is full-width 366 with two 183-wide segments.
     Right segment overlaps the seam by -1.5px so the two borders collapse. */
  var segW = 183;
  return '<div style="display:flex;width:366px;height:40px;">' +
    _scgSegment('Option 1', selected === 'first',  segW, 'left') +
    '<div style="margin-left:-1.5px;">' +
      _scgSegment('Option 2', selected === 'second', segW, 'right') +
    '</div>' +
  '</div>';
}

function _scgAvatar(initials, isSelected) {
  /* Small avatar: 32 px circle. Selected: filled brand-blue + white initials.
     Unselected: light grey-blue fill + brand-blue initials + 1.5 px brand border. */
  var bg     = isSelected ? '#005CE5' : '#F6F9FD';
  var border = isSelected ? 'transparent' : '#005CE5';
  var color  = isSelected ? '#FFFFFF' : '#005CE5';
  return '<div style="' +
    'box-sizing:border-box;width:32px;height:32px;' +
    'border-radius:50%;background:' + bg + ';' +
    (border === 'transparent' ? '' : 'border:1.5px solid ' + border + ';') +
    'display:flex;align-items:center;justify-content:center;' +
    'font-family:\'Proxima Soft\', system-ui, sans-serif;font-weight:700;' +
    'font-size:11px;line-height:11px;color:' + color + ';' +
  '">' + initials + '</div>';
}

function _scgBuild(opts) {
  var selected = opts.selected || 'first';
  var hasSubtext = opts.subtext === 'yes';
  var hasAvatars = opts.avatars === 'yes';

  var s = '<div style="width:366px;display:flex;flex-direction:column;gap:8px;font-family:\'Proxima Soft\', system-ui, sans-serif;">';

  /* Label */
  s += '<div style="font-weight:600;font-size:16px;line-height:16px;letter-spacing:0.25px;color:#0A2757;">Label</div>';

  /* Toggle Segmented Control */
  s += _scgControl(selected);

  /* Subtext */
  if (hasSubtext) {
    s += '<div style="font-family:\'BarkAda\', system-ui, sans-serif;font-weight:500;font-size:14px;line-height:22px;color:#6780A9;">Use this space for your subtext.</div>';
  }

  /* Small Avatar group — 3 avatars, gap 4 */
  if (hasAvatars) {
    s += '<div style="display:flex;gap:4px;">' +
      _scgAvatar('DM', true) +
      _scgAvatar('LM', false) +
      _scgAvatar('LM', false) +
    '</div>';
  }

  s += '</div>';
  return s;
}

/* Apply contrasting bg directly on the preview frames so the white
   unselected segment stays visible against the dotted preview bg. */
function _scgApplyPreviewBg() {
  var demoEl = document.getElementById('scg-demo-preview');
  if (demoEl) {
    demoEl.style.background = '#E5EBF4';
    demoEl.style.backgroundImage = 'none';
  }
  var specCardEl = document.getElementById('spec-card-default');
  if (specCardEl) {
    var previewEl = specCardEl.querySelector('.spec-card-preview');
    if (previewEl) {
      previewEl.style.background = '#E5EBF4';
      previewEl.style.backgroundImage = 'none';
    }
  }
}

/* ── Overview live preview ─────────────────────────────────────── */
var _scgDemo = { selected: 'first', subtext: 'no', avatars: 'no' };

function updateSegmentedControlGroupDemo() {
  var el = document.getElementById('scg-demo-preview');
  if (el) el.innerHTML = _scgBuild(_scgDemo);
}

/* ── Spec card state ────────────────────────────────────────────── */
var _specCards = {
  'default': { selected: 'first', subtext: 'no', avatars: 'no' }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  var idx = card.selected === 'first' ? '0' : '1';
  var lines = ['EBSegmentedControlGroup('];
  lines.push('    label: "Label",');
  lines.push('    segments: ["Option 1", "Option 2"],');
  lines.push('    selectedIndex: .constant(' + idx + ')');
  if (card.subtext === 'yes') lines[lines.length - 1] += ',';
  if (card.subtext === 'yes') lines.push('    subtext: "Use this space for your subtext."');
  if (card.avatars === 'yes' && card.subtext !== 'yes') lines[lines.length - 1] += ',';
  if (card.avatars === 'yes' && card.subtext === 'yes') lines[lines.length - 1] += ',';
  if (card.avatars === 'yes') lines.push('    avatars: recentContacts');
  lines.push(')');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  var idx = card.selected === 'first' ? '0' : '1';
  var lines = ['EBSegmentedControlGroup('];
  lines.push('    label = "Label",');
  lines.push('    segments = listOf("Option 1", "Option 2"),');
  lines.push('    selectedIndex = ' + idx + ',');
  if (card.subtext === 'yes') lines.push('    subtext = "Use this space for your subtext.",');
  if (card.avatars === 'yes') lines.push('    avatars = recentContacts,');
  lines.push('    onSelectionChange = { }');
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Re-render preview inside the spec card root */
  var rootEl = document.getElementById('spec-card-' + cardStyle);
  if (rootEl) {
    var previewEl = rootEl.querySelector('.spec-card-preview');
    if (previewEl) previewEl.innerHTML = _scgBuild(card);
  }

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
window.updateSpecCard = updateSpecCard;

function _scgInit() {
  _scgApplyPreviewBg();
  updateSegmentedControlGroupDemo();
  updateSpecCard('default', 'selected', _specCards['default'].selected);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _scgInit);
else _scgInit();
document.addEventListener('astro:page-load', _scgInit);
