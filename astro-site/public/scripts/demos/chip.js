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

/* Expose for shared utilities — `switchCodeTab` reads this when the
   user clicks SwiftUI / Compose so it can rebuild the snippet. */
var _specCards = _chipSpec;
window._specCards = _specCards;

var _chipDemo = { style: 'filled', leading: 'avatar', trailing: 'close' };

/* Spec-card Colors section is server-rendered from chip.ts; Plan A's
   `_patchSpecCardRows` (assessment.js) handles per-style updates when a
   row declares `variants`. Demo no longer rebuilds it. */

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

  var padL = isDropdown ? '16px' : (leading !== 'none' ? '6px' : '16px');
  var padR = isDropdown ? '14px' : '16px';

  var html = '<div style="display:inline-flex;align-items:center;height:36px;padding:0 ' + padR + ' 0 ' + padL + ';background:' + bg + ';border:' + border + ';border-radius:99px;box-sizing:border-box;font-family:\'Proxima Soft\', system-ui, sans-serif;font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;">';

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

/* ── Overview live preview — component set 5595:39596 ────────────────
 * Read off the Playground bundle, which is generated from that set.
 *
 *   pill        height 32, radius 99, padding-left 4 with a leading icon
 *               else 14, padding-right 14, gap 4 before the content row
 *   ContentRow  gap 8 between Label, Value and the trailing chevron
 *   LeadingIcon 24 x 24 — the ⤷ Leading-Icon swap's default
 *               "icon-placeholder", a #D7E0EF circle
 *   Label/Value Proxima Soft 700 16/16, letter-spacing 0.25
 *   TrailingIcon 16 x 16 Chevron Down
 *
 * The 2px Default border is painted as an inset shadow: Figma keeps the
 * stroke out of layout, so a CSS border would shrink the 32px box.
 *
 * State drives every colour (tokens named for the handoff):
 *   Default   no fill · border/color-border #D7E0EF · text/color-text-weaker
 *   Pressed   bg/color-bg-primary #005CE5 · text/color-text-inverse
 *   Disabled  bg/color-bg-inverse-weaker #EEF2F9 · text/color-text-disabled
 */
var CHIP_STATE = {
  'default':  { bg: 'transparent', ring: '#D7E0EF', label: '#6780A9', value: '#005CE5', chevron: '#7E96BE', chevronOpacity: 1 },
  'pressed':  { bg: '#005CE5',     ring: null,      label: '#FFFFFF', value: '#FFFFFF', chevron: '#F6F9FD', chevronOpacity: 0.72 },
  'disabled': { bg: '#EEF2F9',     ring: null,      label: '#C2CFE5', value: '#9BC5FD', chevron: '#C2CFE5', chevronOpacity: 1 }
};

function _chipOn(v) { return v === true || v === 'true' || v === 'True'; }

function _chipChevron(c) {
  return '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style="display:block;flex:none;">' +
    '<path d="M4.5 6.5L8 10L11.5 6.5" stroke="' + c.chevron + '" stroke-opacity="' + c.chevronOpacity +
    '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

function _chipRender(opts) {
  var o = opts || {};
  var c = CHIP_STATE[(o.state || 'default')] || CHIP_STATE['default'];
  var lead = _chipOn(o.hasLeadingIcon), trail = _chipOn(o.hasTrailingIcon), val = _chipOn(o.hasValue);
  var type = "font-family:'Proxima Soft',system-ui,sans-serif;font-weight:700;font-size:16px;line-height:16px;letter-spacing:0.25px;white-space:nowrap;";

  var h = '<div style="display:inline-flex;align-items:center;box-sizing:border-box;height:32px;' +
    'padding:0 14px 0 ' + (lead ? 4 : 14) + 'px;gap:4px;border-radius:99px;background:' + c.bg + ';' +
    (c.ring ? 'box-shadow:inset 0 0 0 2px ' + c.ring + ';' : '') + '">';

  if (lead) h += '<div style="width:24px;height:24px;border-radius:50%;background:#D7E0EF;flex:none;"></div>';

  h += '<div style="display:flex;align-items:center;gap:8px;">';
  h += '<span style="' + type + 'color:' + c.label + ';">Label</span>';
  if (val) h += '<span style="' + type + 'color:' + c.value + ';">Value</span>';
  if (trail) h += _chipChevron(c);
  h += '</div></div>';
  return h;
}

/* Overview — live demo. Figma's four variant properties, in the set's order. */
function updateChipDemo() {
  var el = document.getElementById('chip-demo-preview');
  if (!el) return;
  var get = function (id, fb) { var n = document.getElementById(id); return n ? n.value : fb; };
  el.innerHTML = _chipRender({
    hasValue:        get('chip-ctrl-hasvalue', 'False'),
    state:           get('chip-ctrl-state', 'default'),
    hasLeadingIcon:  get('chip-ctrl-hasleadingicon', 'True'),
    hasTrailingIcon: get('chip-ctrl-hastrailingicon', 'True')
  });
}

/* Style — per-spec-card live preview + readout */
function updateSpecCard(card, prop, val) {
  var state = _chipSpec[card];
  if (!state) return;
  if (prop === 'selectedValue') state.selectedValue = !!val;
  else state[prop] = val;

  // Properties readout — data-sp="${demoKey}-${prop}"
  var readout = document.querySelector('[data-sp="' + card + '-' + prop + '"]');
  if (readout) readout.textContent = String(val);

  // Re-render preview (existing id `spec-chip-${card}-preview` lives in
  // the data file's previewHtml)
  var target = document.getElementById('spec-chip-' + card + '-preview');
  if (target) {
    var labels = { filled: 'Filter Name', light: 'Category', outline: 'Category', dropdown: 'Sort by' };
    target.innerHTML = _chipBuildHtml(Object.assign({ label: labels[card] }, state));
  }

  // Colors section is now server-rendered from chip.ts (SSR source of
  // truth). Plan A's `_patchSpecCardRows` patches per-style values when
  // a row declares `variants` in the data file.

  // DEV code — `[data-code-content="${demoKey}"]`. Always update.
  var devView = document.querySelector('[data-view="' + card + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + card + '"]');
    if (codeEl) {
      var code = getSnippet(card, lang, state);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}

/* ── Code snippet builders ───────────────────────────────────────── */
function buildSwiftSnippet(type, card) {
  var styleCap = (card.style || 'filled');
  var labels = { filled: 'Filter Name', light: 'Category', outline: 'Category', dropdown: 'Sort by' };
  var label = labels[type] || 'Filter';
  var lines = [];
  if (type === 'dropdown') {
    lines.push('EBChip("' + label + '",');
    lines.push('    selectedValue: "Conservative first",');
    lines.push('    trailing: .chevron,');
    lines.push('    action: { /* open dropdown */ })');
    lines.push('.ebStyle(.' + styleCap + ')');
  } else if (type === 'filled') {
    lines.push('EBChip("' + label + '",');
    if ((card.leading || 'none') === 'avatar') lines.push('    leading: .avatar(EBAvatar(initials: "DM")),');
    else if ((card.leading || 'none') === 'icon') lines.push('    leading: .icon(Image(systemName: "tag")),');
    if ((card.trailing || 'none') !== 'none') lines.push('    trailing: .' + (card.trailing || 'close') + ',');
    lines.push('    onRemove: { /* remove */ })');
    lines.push('.ebStyle(.' + styleCap + ')');
  } else {
    lines.push('EBChip("' + label + '")');
    lines.push('    .ebStyle(.' + styleCap + ')');
  }
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var styleCap = (card.style || 'filled').charAt(0).toUpperCase() + (card.style || 'filled').slice(1);
  var labels = { filled: 'Filter Name', light: 'Category', outline: 'Category', dropdown: 'Sort by' };
  var label = labels[type] || 'Filter';
  var lines = [];
  lines.push('EBChip(');
  lines.push('    label = "' + label + '",');
  lines.push('    style = EBChipStyle.' + styleCap + ',');
  if (type === 'dropdown') {
    lines.push('    selectedValue = "Conservative first",');
    lines.push('    trailing = EBChipTrailing.Chevron,');
    lines.push('    onClick = { /* open dropdown */ }');
  } else {
    if ((card.leading || 'none') === 'avatar') lines.push('    leading = { EBAvatar(initials = "DM") },');
    else if ((card.leading || 'none') === 'icon') lines.push('    leading = { Icon(Icons.Filled.Tag, null) },');
    var tr = card.trailing || 'none';
    if (tr !== 'none') {
      lines.push('    trailing = EBChipTrailing.' + (tr.charAt(0).toUpperCase() + tr.slice(1)) + ',');
      if (tr === 'close') lines.push('    onRemove = { /* remove */ }');
    }
  }
  // strip trailing comma on last meaningful line
  var last = lines[lines.length - 1];
  if (last.charAt(last.length - 1) === ',') lines[lines.length - 1] = last.slice(0, -1);
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

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
