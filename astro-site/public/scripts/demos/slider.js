/* Slider — sized 1:1 to Figma node 3235:60722.
 *   Control:  366 × 28
 *   Track:    366 × 10, bg #D2E5FF, radius 99 (centered vertically)
 *   Fill:     value × 10, bg #005CE5, radius 99
 *   Knob:     16 × 16 circle, bg #FFFFFF, border 1 px #E5EBF4
 *   Tooltip:  28 × 22 pill above knob, bg #005CE5, white text, radius 4
 *             + 4 px downward arrow
 *
 * Fill width per 10% step (from Figma's 11 variants):
 *   0   = 7,    10 = 37,   20 = 74,   30 = 110,  40 = 147,  50 = 183,
 *   60  = 220,  70 = 256,  80 = 293,  90 = 329,  100 = 358
 */

function _slFillWidth(value) {
  /* Linear-interpolate between the Figma stops so values like 73 still
     render at a sensible width. Min 7 (knob alone), max 358. */
  var stops = [7, 37, 74, 110, 147, 183, 220, 256, 293, 329, 358];
  if (value <= 0)   return stops[0];
  if (value >= 100) return stops[10];
  var idx = Math.floor(value / 10);
  var frac = (value - idx * 10) / 10;
  return Math.round(stops[idx] + (stops[idx + 1] - stops[idx]) * frac);
}

function _slBuild(value) {
  var v = (typeof value === 'number') ? value : parseInt(value, 10) || 0;
  if (v < 0) v = 0;
  if (v > 100) v = 100;
  var fillW = _slFillWidth(v);
  /* Knob is centered on the right edge of the fill (offset −8 from fill right
     so the 16-wide knob centers on the fill end). The tooltip arrow points
     to the knob's center; the tooltip body floats 4 px above the track top. */
  var knobCenter = fillW;   // fill starts at left edge of track
  var knobLeft   = knobCenter - 8;
  var tooltipLeft = knobCenter - 14;  // tooltip 28 wide, centered on knob
  return '<div style="position:relative;width:366px;height:28px;font-family:\'Proxima Soft\',sans-serif;">' +
    /* Tooltip (label + arrow) — sits above the track */
    '<div style="position:absolute;left:' + tooltipLeft + 'px;top:-18px;width:28px;height:26px;">' +
      '<div style="width:28px;height:22px;background:#005CE5;border-radius:4px;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-weight:700;font-size:12px;line-height:12px;letter-spacing:0.25px;">' +
        v + '%' +
      '</div>' +
      '<svg width="28" height="4" viewBox="0 0 28 4" style="display:block;" fill="none">' +
        '<path d="M11 0h6l-3 4z" fill="#005CE5"/>' +
      '</svg>' +
    '</div>' +
    /* Track (BG) — centered vertically in the 28-tall row */
    '<div style="position:absolute;left:0;top:9px;width:366px;height:10px;background:#D2E5FF;border-radius:99px;"></div>' +
    /* Fill */
    '<div style="position:absolute;left:0;top:9px;width:' + fillW + 'px;height:10px;background:#005CE5;border-radius:99px;"></div>' +
    /* Knob */
    '<div style="position:absolute;left:' + knobLeft + 'px;top:6px;width:16px;height:16px;border-radius:50%;background:#FFFFFF;border:1px solid #E5EBF4;box-shadow:0 1px 2px rgba(2,14,34,0.10);"></div>' +
  '</div>';
}

/* ── Overview live preview ─────────────────────────────────────── */
var _slDemo = { value: 50 };

function updateSliderDemo() {
  var el = document.getElementById('sl-demo-preview');
  if (el) el.innerHTML = _slBuild(_slDemo.value);
}

/* ── Spec card state ────────────────────────────────────────────── */
var _specCards = {
  'default': { value: 50 }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  return 'EBSlider(\n    value: .constant(' + card.value + '),\n    in: 0...100\n)\n    .ebTooltip(.onDrag)';
}

function buildComposeSnippet(cardKey, card) {
  return 'EBSlider(\n    value = ' + card.value + 'f,\n    onValueChange = { },\n    valueRange = 0f..100f,\n    tooltip = SliderTooltip.OnDrag\n)';
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = (prop === 'value') ? parseInt(value, 10) : value;

  var rootEl = document.getElementById('spec-card-' + cardStyle);
  if (rootEl) {
    var previewEl = rootEl.querySelector('.spec-card-preview');
    if (previewEl) previewEl.innerHTML = _slBuild(card.value);
  }

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

function _slInit() {
  updateSliderDemo();
  updateSpecCard('default', 'value', _specCards['default'].value);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _slInit);
else _slInit();
document.addEventListener('astro:page-load', _slInit);
