/* Auto-extracted from assessment-src/components/toggle.html.
 * Powers the live-preview dropdowns/toggles for the toggle component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs toggle
 */
/* ── Toggle JS ──────────────────────────────────────────────────── */
/* Uses .eb-preview-toggle primitive from styles.css. Interactive —
   clicking the toggle flips isActive, mirroring Figma's variant swap
   between State=Default/isActive=Yes ↔ State=Default/isActive=No.
   Disabled blocks interaction, matching the Figma Disabled variant.  */

function _toggleRender(opts) {
  var selected    = opts.selected === 'true';
  var state       = opts.state || 'default';
  var size        = opts.size || 'medium';
  var interactive = opts.interactive !== false; // default true

  var classes = [
    'eb-preview',
    'eb-preview-toggle',
    'eb-preview-toggle--' + size,
    'eb-preview-toggle--' + (selected ? 'on' : 'off')
  ];
  if (state === 'disabled') classes.push('eb-preview-toggle--disabled');
  if (interactive && state !== 'disabled') classes.push('eb-preview-toggle--interactive');

  var attrs = 'role="switch" aria-checked="' + selected + '"';
  attrs += ' tabindex="' + (state === 'disabled' ? '-1' : '0') + '"';
  if (state === 'disabled') attrs += ' aria-disabled="true"';
  if (interactive && state !== 'disabled') {
    attrs += ' onclick="_toggleFlip()"';
    attrs += ' onkeydown="if(event.key===\' \'||event.key===\'Enter\'){event.preventDefault();_toggleFlip();}"';
  }

  return '<span class="' + classes.join(' ') + '" ' + attrs + '>' +
    '<span class="eb-preview-toggle__knob"></span>' +
  '</span>';
}

function _toggleFlip() {
  var sel = document.getElementById('toggle-ctrl-selected');
  if (!sel) return;
  sel.value = (sel.value === 'true') ? 'false' : 'true';
  _toggleUpdate();
}

function _toggleSettingRow(label, selected) {
  return '<div class="eb-preview eb-preview-setting-row">' +
    '<div class="eb-preview-setting-row__labels">' +
      '<div class="eb-preview-setting-row__label">' + label + '</div>' +
    '</div>' +
    _toggleRender({selected: selected ? 'true' : 'false', state:'default', size:'medium', interactive:false}) +
  '</div>';
}

function _toggleContextMarkup() {
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-sm">' +
    _toggleSettingRow('Push notifications', true) +
    _toggleSettingRow('Reduce motion', false) +
    _toggleSettingRow('Biometric login', true) +
  '</div>';
}

function _toggleUpdate() {
  var selected = document.getElementById('toggle-ctrl-selected');
  var state    = document.getElementById('toggle-ctrl-state');
  var size     = document.getElementById('toggle-ctrl-size');
  var preview  = document.getElementById('toggle-demo-preview');
  if (!preview) return;
  preview.innerHTML = _toggleRender({
    selected:    selected ? selected.value : 'true',
    state:       state ? state.value : 'default',
    size:        size ? size.value : 'medium',
    interactive: true
  });
}

function _toggleInit() {
  var ctx = document.getElementById('toggle-context-preview');
  if (ctx) ctx.innerHTML = _toggleContextMarkup();
  _toggleUpdate();
  var cards = [
    { id: 'toggle-spec-1', opts: {selected:'false', state:'default',  size:'medium', interactive:false} },
    { id: 'toggle-spec-2', opts: {selected:'true',  state:'default',  size:'medium', interactive:false} },
    { id: 'toggle-spec-3', opts: {selected:'false', state:'disabled', size:'medium', interactive:false} },
    { id: 'toggle-spec-4', opts: {selected:'true',  state:'disabled', size:'medium', interactive:false} }
  ];
  cards.forEach(function(c) {
    var el = document.getElementById(c.id);
    if (el) el.innerHTML = _toggleRender(c.opts);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _toggleInit);
else _toggleInit();
