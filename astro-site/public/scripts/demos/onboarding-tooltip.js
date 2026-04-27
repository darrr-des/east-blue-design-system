/* Auto-extracted from assessment-src/components/onboarding-tooltip.html.
 * Powers the live-preview dropdowns/toggles for the onboarding-tooltip component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs onboarding-tooltip
 */
/* ── Onboarding - Tooltip JS ────────────────────────────────────
   Renders the fixed-content tooltip (header + description + close)
   with a pointer anchored at top / right / bottom / left.
   Matches Tooltip V2's preview style for visual consistency. */

function _ontEscape(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function _ontPointer(dir) {
  var common = 'position:absolute;width:0;height:0;';
  if (dir === 'top') {
    return '<div style="' + common + 'left:50%;top:-8px;transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #FFFFFF;filter:drop-shadow(0 -1px 0 #E5EBF4);"></div>';
  }
  if (dir === 'bottom') {
    return '<div style="' + common + 'left:50%;bottom:-8px;transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #FFFFFF;filter:drop-shadow(0 1px 0 #E5EBF4);"></div>';
  }
  if (dir === 'left') {
    return '<div style="' + common + 'top:50%;left:-8px;transform:translateY(-50%);border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #FFFFFF;filter:drop-shadow(-1px 0 0 #E5EBF4);"></div>';
  }
  return '<div style="' + common + 'top:50%;right:-8px;transform:translateY(-50%);border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #FFFFFF;filter:drop-shadow(1px 0 0 #E5EBF4);"></div>';
}

function _ontClose() {
  return '<div style="flex-shrink:0;width:18px;height:18px;display:flex;align-items:center;justify-content:center;">' +
    '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="#0A2757" stroke-width="1.6" stroke-linecap="round"/></svg>' +
  '</div>';
}

function _ontRender(opts) {
  var pointer = opts.pointer || 'top';

  var html = '<div style="display:flex;justify-content:center;align-items:center;width:100%;padding:40px 12px;">';
  html += '<div style="position:relative;width:336px;background:#FFFFFF;border:1px solid #E5EBF4;border-radius:6px;padding:16px;box-sizing:border-box;box-shadow:0 0 4px rgba(2,14,34,0.06);">';

  // Pointer
  html += _ontPointer(pointer);

  // Header row (title + close)
  html += '<div style="display:flex;align-items:center;gap:24px;width:100%;">';
  html += '<div style="flex:1 0 0;min-width:0;font-family:\'Proxima Soft\',system-ui;font-size:18px;line-height:23px;font-weight:700;letter-spacing:0.25px;color:#0A2757;">Header</div>';
  html += _ontClose();
  html += '</div>';

  // Description
  html += '<div style="font-family:\'BarkAda\',\'Proxima Soft\',system-ui;font-size:12px;line-height:18px;font-weight:600;color:#6780A9;margin-top:4px;">Description goes here</div>';

  html += '</div>';  // tooltip box
  html += '</div>';  // wrap
  return html;
}

function updateOntDemo() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var el = document.getElementById('ont-demo-preview');
  if (!el) return;
  el.innerHTML = _ontRender({
    pointer: getVal('ont-ctrl-pointer', 'top')
  });
}

function _ontInitSpecCards() {
  var map = [
    ['ont-preview-top',    {pointer:'top'}],
    ['ont-preview-bottom', {pointer:'bottom'}],
    ['ont-preview-left',   {pointer:'left'}],
    ['ont-preview-right',  {pointer:'right'}]
  ];
  map.forEach(function (pair) {
    var el = document.getElementById(pair[0]);
    if (el) el.innerHTML = _ontRender(pair[1]);
  });
}

function _ontInit() {
  updateOntDemo();
  _ontInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ontInit);
else _ontInit();
