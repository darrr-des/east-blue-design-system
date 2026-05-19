/* Toggle - Segmented Control — sized 1:1 to Figma node 27:30929.
 *   Control: 336 × 40, border-radius 6, 2 segments × 168 × 40
 *   Selected:    bg #005CE5, label #FFFFFF
 *   Unselected:  bg #FFFFFF, border 1.5px #005CE5, label #005CE5
 *   Label:       Proxima Soft Bold · 16 / 16 · +0.25
 */

function _tscSegment(label, isSelected, position) {
  /* position = 'left' | 'right'. Only the OUTSIDE corners are rounded so
     the two segments meet flush at the seam (no inner radius gap). */
  var radius = position === 'left' ? '6px 0 0 6px' : '0 6px 6px 0';
  return '<div style="' +
    'box-sizing:border-box;width:168px;height:40px;' +
    'display:flex;align-items:center;justify-content:center;' +
    'font-family:\'Proxima Soft\', system-ui, sans-serif;' +
    'font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;' +
    'background:' + (isSelected ? '#005CE5' : '#FFFFFF') + ';' +
    'color:'      + (isSelected ? '#FFFFFF' : '#005CE5') + ';' +
    /* Both segments carry a 1.5px brand-blue border. On the selected segment
       the border colour matches the bg so it reads as borderless visually,
       but it keeps geometry identical so the inner seam stays 1.5px (not 3). */
    'border:1.5px solid #005CE5;' +
    'border-radius:' + radius + ';' +
  '">' + label + '</div>';
}

function _tscBuild(selected) {
  /* Two 168×40 segments sit flush. Right segment overlaps the seam by
     -1.5px so the two borders collapse into a single 1.5px line. */
  return '<div style="display:flex;width:336px;height:40px;">' +
    _tscSegment('Option 1', selected === 'first',  'left') +
    '<div style="margin-left:-1.5px;">' +
      _tscSegment('Option 2', selected === 'second', 'right') +
    '</div>' +
  '</div>';
}

/* Apply contrasting bg directly on the preview frames (Overview demo +
   Style spec card) so the white unselected segment stays visible. */
function _tscApplyPreviewBg() {
  var demoEl = document.getElementById('tsc-demo-preview');
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
var _tscDemo = { selected: 'first' };

function updateToggleSegmentedControlDemo() {
  var el = document.getElementById('tsc-demo-preview');
  if (el) el.innerHTML = _tscBuild(_tscDemo.selected);
}

/* ── Spec card state ────────────────────────────────────────────── */
var _specCards = {
  'default': { selected: 'first' }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  var idx = card.selected === 'first' ? '0' : '1';
  return 'EBSegmentedControl(\n    segments: ["Option 1", "Option 2"],\n    selectedIndex: .constant(' + idx + ')\n)';
}

function buildComposeSnippet(cardKey, card) {
  var idx = card.selected === 'first' ? '0' : '1';
  return 'EBSegmentedControl(\n    segments = listOf("Option 1", "Option 2"),\n    selectedIndex = ' + idx + ',\n    onSelectionChange = { }\n)';
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
    if (previewEl) previewEl.innerHTML = _tscBuild(card.selected);
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

function _tscInit() {
  _tscApplyPreviewBg();
  updateToggleSegmentedControlDemo();
  updateSpecCard('default', 'selected', _specCards['default'].selected);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _tscInit);
else _tscInit();
document.addEventListener('astro:page-load', _tscInit);
