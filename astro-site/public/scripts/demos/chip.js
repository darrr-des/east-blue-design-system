/* Auto-extracted from assessment-src/components/chip.html.
 * Powers the live-preview dropdowns/toggles for the chip component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs chip
 */
/* ── Chip Component JS ────────────────────────────────────────────── */
var _chipSpec = {
  filled:   { style: 'filled',  leading: 'avatar', trailing: 'close' },
  light:    { style: 'light',   leading: 'none',   trailing: 'none' },
  outline:  { style: 'outline', leading: 'none',   trailing: 'none' },
  dropdown: { style: 'light',   leading: 'none',   trailing: 'chevron', selectedValue: true }
};

var _chipDemo = { style: 'filled', leading: 'avatar', trailing: 'close' };

function _chipBuildHtml(opts) {
  var style = opts.style || 'filled';
  var leading = opts.leading || 'none';
  var trailing = opts.trailing || 'none';
  var label = opts.label || 'Label';
  var selectedValue = opts.selectedValue;

  var isDropdown = trailing === 'chevron';
  var bg, border, labelColor, iconColor, valueColor;
  if (style === 'filled') {
    bg = '#005CE5'; border = 'none'; labelColor = '#FFFFFF'; iconColor = '#F6F9FDB8';
  } else if (style === 'outline') {
    bg = '#FFFFFF'; border = '2px solid #D7E0EF'; labelColor = '#6780A9'; iconColor = '#7E96BE';
  } else {
    bg = '#EEF2F9'; border = 'none'; labelColor = '#6780A9'; iconColor = '#7E96BE';
  }
  valueColor = '#005CE5';

  var padL = isDropdown ? '16px' : (leading !== 'none' ? '4px' : '14px');
  var padR = isDropdown ? '12px' : '14px';

  var html = '<div style="display:inline-flex;align-items:center;height:32px;padding:0 ' + padR + ' 0 ' + padL + ';background:' + bg + ';border:' + border + ';border-radius:99px;box-sizing:border-box;font-family:\'Proxima Soft\', system-ui, sans-serif;font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;">';

  // Leading
  if (leading === 'avatar') {
    html += '<div style="width:24px;height:24px;border-radius:50%;background:#C2C6CF;flex-shrink:0;margin-right:4px;"></div>';
  } else if (leading === 'icon') {
    html += '<div style="width:24px;height:24px;border-radius:4px;background:' + iconColor + ';opacity:.65;flex-shrink:0;margin-right:4px;"></div>';
  }

  // Label
  html += '<span style="color:' + labelColor + ';white-space:nowrap;">' + label + '</span>';

  // Selected value (dropdown only)
  if (isDropdown && selectedValue) {
    html += '<span style="margin-left:8px;color:' + valueColor + ';white-space:nowrap;">Conservative first</span>';
  }

  // Trailing
  if (trailing === 'close') {
    html += '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" style="margin-left:8px;flex-shrink:0;"><path d="M4 4l8 8M12 4l-8 8" stroke="' + labelColor + '" stroke-width="1.6" stroke-linecap="round"/></svg>';
  } else if (trailing === 'chevron') {
    html += '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="margin-left:4px;flex-shrink:0;"><path d="M7 10l5 5 5-5" stroke="' + valueColor + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  html += '</div>';
  return html;
}

/* Overview — live demo */
function updateChipDemo() {
  _chipDemo.style = document.getElementById('chip-demo-style').value;
  _chipDemo.leading = document.getElementById('chip-demo-leading').value;
  _chipDemo.trailing = document.getElementById('chip-demo-trailing').value;
  var el = document.getElementById('chip-demo-preview');
  if (el) el.innerHTML = _chipBuildHtml(Object.assign({ label: 'Filter Name' }, _chipDemo));
}

/* Style — per-spec-card live preview + readout */
function updateChipSpecCard(card, prop, val) {
  var state = _chipSpec[card];
  if (!state) return;
  if (prop === 'selectedValue') state.selectedValue = !!val;
  else state[prop] = val;

  // Update readout
  var readout = document.querySelector('[data-sp="chip-' + card + '-' + prop + '"]');
  if (readout) readout.textContent = String(val);

  // Re-render preview
  var target = document.getElementById('spec-chip-' + card + '-preview');
  if (target) {
    var labels = { filled: 'Filter Name', light: 'Category', outline: 'Category', dropdown: 'Sort by' };
    target.innerHTML = _chipBuildHtml(Object.assign({ label: labels[card] }, state));
  }
}

/* SwiftUI / Compose tab toggle within DEV view */
function switchChipCodeTab(tabBtn, lang, cardKey) {
  var block = tabBtn.closest('.spec-card-code');
  if (!block) return;
  block.querySelectorAll('.spec-code-tab').forEach(function(t) { t.classList.remove('active'); });
  tabBtn.classList.add('active');
  block.querySelectorAll('.spec-code-block').forEach(function(pre) {
    pre.style.display = pre.getAttribute('data-lang') === lang ? '' : 'none';
  });
}

/* DES/DEV toggle */
function toggleChipSpecMode(cardKey, toggleEl) {
  var labels = toggleEl.querySelectorAll('.spec-mode-label');
  var isDes = labels[0].classList.contains('active');
  labels[0].classList.toggle('active', !isDes);
  labels[1].classList.toggle('active', isDes);
  var desEl = document.querySelector('[data-view="' + cardKey + '-des"]');
  var devEl = document.querySelector('[data-view="' + cardKey + '-dev"]');
  if (desEl) desEl.style.display = isDes ? 'none' : '';
  if (devEl) devEl.style.display = isDes ? '' : 'none';
}

function _chipInitSpecCards() {
  Object.keys(_chipSpec).forEach(function(card) {
    var labels = { filled: 'Filter Name', light: 'Category', outline: 'Category', dropdown: 'Sort by' };
    var target = document.getElementById('spec-chip-' + card + '-preview');
    if (target) target.innerHTML = _chipBuildHtml(Object.assign({ label: labels[card] }, _chipSpec[card]));
  });
}

function _chipInit() {
  updateChipDemo();
  _chipInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _chipInit);
else _chipInit();
