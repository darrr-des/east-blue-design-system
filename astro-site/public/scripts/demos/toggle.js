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
  var selected    = opts.selected === 'true' || opts.selected === 'Yes';
  var state       = (opts.state || 'default').toLowerCase();
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

/* ── Spec card state ──────────────────────────────────────────────── */
var _specCards = {
  'default-off':  { state: 'Default',  isActive: 'No' },
  'default-on':   { state: 'Default',  isActive: 'Yes' },
  'disabled-off': { state: 'Disabled', isActive: 'No' },
  'disabled-on':  { state: 'Disabled', isActive: 'Yes' }
};
window._specCards = _specCards;

/* Spec Colors per state/isActive — moved into toggle.ts `variants`
   on the Track and Indicator rows (Plan A). */

/* ── Code snippet builders ────────────────────────────────────────── */
function buildSwiftSnippet(type, card) {
  var on = card && card.isActive === 'Yes';
  var disabled = card && card.state === 'Disabled';
  if (disabled) {
    return 'EBToggle(isOn: .constant(' + (on ? 'true' : 'false') + '))\n    .disabled(true)';
  }
  return 'EBToggle(isOn: .constant(' + (on ? 'true' : 'false') + '))';
}

function buildComposeSnippet(type, card) {
  var on = card && card.isActive === 'Yes';
  var disabled = card && card.state === 'Disabled';
  var lines = [];
  lines.push('EBToggle(');
  lines.push('    checked = ' + (on ? 'true' : 'false') + ',');
  lines.push('    onCheckedChange = { },');
  if (disabled) lines.push('    enabled = false,');
  var last = lines[lines.length - 1];
  if (last.charAt(last.length - 1) === ',') lines[lines.length - 1] = last.slice(0, -1);
  lines.push(')');
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
  card[prop] = value;

  /* Update preview */
  var el = document.getElementById('toggle-spec-' + cardStyle);
  if (el) {
    el.innerHTML = _toggleRender({
      selected:    card.isActive === 'Yes' ? 'true' : 'false',
      state:       card.state.toLowerCase(),
      size:        'medium',
      interactive: false
    });
  }

  /* Update properties text */
  var spState    = document.querySelector('[data-sp="' + cardStyle + '-state"]');
  var spIsActive = document.querySelector('[data-sp="' + cardStyle + '-isActive"]');
  if (spState)    spState.textContent    = card.state;
  if (spIsActive) spIsActive.textContent = card.isActive;

  /* Colors section is server-rendered from toggle.ts; Plan A's
     `_patchSpecCardRows` handles state×isActive overrides. Demo no
     longer rebuilds it. */

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

function _toggleInit() {
  var ctx = document.getElementById('toggle-context-preview');
  if (ctx) ctx.innerHTML = _toggleContextMarkup();
  _toggleUpdate();

  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'state', _specCards[k].state);
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _toggleInit);
else _toggleInit();
document.addEventListener('astro:page-load', _toggleInit);
