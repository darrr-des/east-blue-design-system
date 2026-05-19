/* Service Item — sized 1:1 to Figma node 20210:2441.
 *   Vertical:    64 × 72 — preamble (top) · 48×48 icon slot · label · description
 *   Horizontal:  120 × 64 — icon left · content right · preamble below
 *   Type=New:    red "New" badge top-right of icon (29 × 12)
 *   Type=Add:    green + circle top-right (12 × 12)
 *   Type=Remove: red − circle top-right (12 × 12)
 *   State=Inactive / Disabled: label dims to #C2CFE5
 */

function _siLabelColor(state) {
  if (state === 'inactive' || state === 'disabled') return '#C2CFE5';
  return '#072592';
}

function _siNewBadge() {
  return '<div style="position:absolute;top:-6px;right:-6px;height:14px;padding:1px 6px;border-radius:7px;background:#E11744;color:#FFFFFF;font-family:\'Proxima Soft\',sans-serif;font-weight:700;font-size:9px;line-height:12px;letter-spacing:0.25px;">New</div>';
}

function _siActionAdd() {
  return '<div style="position:absolute;top:-6px;right:-6px;width:14px;height:14px;border-radius:50%;background:#16A34A;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-family:\'Proxima Soft\',sans-serif;font-weight:700;font-size:11px;line-height:11px;">+</div>';
}

function _siActionRemove() {
  return '<div style="position:absolute;top:-6px;right:-6px;width:14px;height:14px;border-radius:50%;background:#E11744;display:flex;align-items:center;justify-content:center;color:#FFFFFF;font-family:\'Proxima Soft\',sans-serif;font-weight:700;font-size:11px;line-height:1;">–</div>';
}

function _siIconSlot(type) {
  /* 48×48 pill-shaped slot. Includes overlay for New / Add / Remove types. */
  var overlay = '';
  if (type === 'new')    overlay = _siNewBadge();
  if (type === 'add')    overlay = _siActionAdd();
  if (type === 'remove') overlay = _siActionRemove();
  return '<div style="position:relative;width:48px;height:48px;border-radius:99999px;background:#F6F9FD;flex:0 0 48px;">' + overlay + '</div>';
}

function _siLabel(state) {
  return '<div style="font-family:\'Proxima Soft\',sans-serif;font-weight:700;font-size:12px;line-height:12px;letter-spacing:0.5px;color:' + _siLabelColor(state) + ';">Label</div>';
}

function _siVertical(type, state) {
  /* 64 × 72 stack: preamble (12 placeholder) · 6 gap · icon 48×48 · 6 gap · label.
     Gap of 6 verified from Figma — icon bottom y=47, label top y=53. */
  return '<div style="' +
    'width:64px;display:flex;flex-direction:column;align-items:center;gap:6px;' +
    (state === 'disabled' ? 'opacity:0.4;' : '') +
  '">' +
    '<div style="height:12px;"></div>' +
    _siIconSlot(type) +
    _siLabel(state) +
  '</div>';
}

function _siHorizontal(type, state) {
  /* 120 × 64 — icon-left, label-right, preamble below. */
  return '<div style="' +
    'width:120px;display:flex;flex-direction:column;gap:6px;' +
    (state === 'disabled' ? 'opacity:0.4;' : '') +
  '">' +
    '<div style="display:flex;align-items:center;gap:8px;">' +
      _siIconSlot(type) +
      '<div style="flex:1;">' + _siLabel(state) + '</div>' +
    '</div>' +
  '</div>';
}

function _siBuild(opts) {
  var type = opts.type || 'default';
  var state = opts.state || 'default';
  var orientation = opts.orientation || 'vertical';
  if (orientation === 'horizontal') return _siHorizontal(type, state);
  return _siVertical(type, state);
}

/* Apply contrasting bg directly on the preview frames so the F6F9FD icon
   slot is visible. Run on init + after Astro view transitions. */
function _siApplyPreviewBg() {
  var demoEl = document.getElementById('si-demo-preview');
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
var _siDemo = { type: 'default', state: 'default', orientation: 'vertical' };

function updateServiceItemDemo() {
  var el = document.getElementById('si-demo-preview');
  if (el) el.innerHTML = _siBuild(_siDemo);
}

/* ── Spec card state ────────────────────────────────────────────── */
var _specCards = {
  'default': { type: 'default', state: 'default', orientation: 'vertical' }
};
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  var lines = ['EBServiceItem('];
  lines.push('    icon: Image("send"),');
  lines.push('    label: "Label"');
  lines.push(')');
  if (card.orientation === 'horizontal') lines.push('    .ebOrientation(.horizontal)');
  if (card.type === 'new')    lines.push('    .ebBadge(.new)');
  if (card.type === 'add')    lines.push('    .ebAction(.add)');
  if (card.type === 'remove') lines.push('    .ebAction(.remove)');
  if (card.state === 'inactive') lines.push('    .ebState(.inactive)');
  if (card.state === 'disabled') lines.push('    .disabled(true)');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  var lines = ['EBServiceItem('];
  lines.push('    icon = { Icon(Icons.Default.Send, null) },');
  lines.push('    label = "Label",');
  var stateName = card.state === 'inactive' ? 'Inactive' : card.state === 'disabled' ? 'Disabled' : 'Default';
  lines.push('    state = ServiceItemState.' + stateName + ',');
  var orientName = card.orientation === 'horizontal' ? 'Horizontal' : 'Vertical';
  lines.push('    orientation = Orientation.' + orientName);
  if (card.type === 'new')    lines[lines.length - 1] += ',\n    badge = Badge.New';
  if (card.type === 'add')    lines[lines.length - 1] += ',\n    action = Action.Add';
  if (card.type === 'remove') lines[lines.length - 1] += ',\n    action = Action.Remove';
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

  var rootEl = document.getElementById('spec-card-' + cardStyle);
  if (rootEl) {
    var previewEl = rootEl.querySelector('.spec-card-preview');
    if (previewEl) previewEl.innerHTML = _siBuild(card);
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

function _siInit() {
  _siApplyPreviewBg();
  updateServiceItemDemo();
  updateSpecCard('default', 'type', _specCards['default'].type);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _siInit);
else _siInit();
document.addEventListener('astro:page-load', _siInit);
