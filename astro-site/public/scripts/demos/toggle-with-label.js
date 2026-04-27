/* Auto-extracted from assessment-src/components/toggle-with-label.html.
 * Powers the live-preview dropdowns/toggles for the toggle-with-label component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs toggle-with-label
 */
/* ── Toggle - With Label JS ─────────────────────────────────────── */
/* Live Preview is interactive:
   • Click/key-activate the toggle to flip it (mirrors the inner
     Toggle's Figma variant swap).
   • Label + description are editable via text inputs in the panel.
   • Disabled blocks toggle interaction (matches inner Toggle).
   • Error state shows red message; underlying Toggle stays default
     since Figma's Toggle doesn't ship an Error variant today.        */

function _twlToggle(selected, state, interactive) {
  var classes = ['eb-preview','eb-preview-toggle','eb-preview-toggle--medium',
                 selected === 'true' ? 'eb-preview-toggle--on' : 'eb-preview-toggle--off'];
  if (state === 'disabled') classes.push('eb-preview-toggle--disabled');
  if (interactive && state !== 'disabled') classes.push('eb-preview-toggle--interactive');

  var attrs = 'role="switch" aria-checked="' + selected + '"';
  attrs += ' tabindex="' + (state === 'disabled' ? '-1' : '0') + '"';
  if (state === 'disabled') attrs += ' aria-disabled="true"';
  if (interactive && state !== 'disabled') {
    attrs += ' onclick="event.stopPropagation();_twlFlip();"';
    attrs += ' onkeydown="if(event.key===\' \'||event.key===\'Enter\'){event.preventDefault();_twlFlip();}"';
  }
  return '<span class="' + classes.join(' ') + '" ' + attrs + '>' +
    '<span class="eb-preview-toggle__knob"></span>' +
  '</span>';
}

function _twlFlip() {
  var sel = document.getElementById('toggle-with-label-ctrl-selected');
  if (!sel) return;
  sel.value = (sel.value === 'true') ? 'false' : 'true';
  _toggleWithLabelUpdate();
}

function _twlRender(opts) {
  var label     = (opts.label !== undefined) ? opts.label : 'Push notifications';
  // Desc: explicit empty string = no description row. Legacy "yes"/"no"
  // support kept for the In-Context stack below.
  var desc;
  if (opts.desc === 'yes')      desc = 'Get alerts when money moves';
  else if (opts.desc === 'no')  desc = '';
  else                          desc = opts.desc || '';

  var placement   = opts.placement || 'trailing';
  var selected    = opts.selected  || 'true';
  var required    = opts.required === 'yes';
  var helper      = opts.helper    || 'none';
  var state       = opts.state     || 'default';
  var interactive = opts.interactive !== false;

  var labels = '<div class="eb-preview-setting-row__labels">' +
    '<div class="eb-preview-setting-row__label"><span>' + (label || '\u00A0') + '</span>' +
    (required ? '<span class="eb-preview-setting-row__required">*</span>' : '') +
    '</div>' +
    (desc ? '<div class="eb-preview-setting-row__desc">' + desc + '</div>' : '') +
  '</div>';
  var toggleEl = _twlToggle(selected, state, interactive);

  var rowClass = 'eb-preview eb-preview-setting-row' + (placement === 'leading' ? ' eb-preview-setting-row--leading' : '');
  var row = '<div class="' + rowClass + '">' + labels + toggleEl + '</div>';

  var footer = '';
  if (helper === 'helper') {
    footer = '<div class="eb-preview-setting-helper">Helper text goes here.</div>';
  } else if (helper === 'error') {
    footer = '<div class="eb-preview-setting-helper eb-preview-setting-helper--error">You must accept to continue.</div>';
  }

  return row + footer;
}

function _twlContextMarkup() {
  // Realistic "Notification settings" form — grouped by section,
  // multiple toggle-with-label rows, matching how this component is
  // actually used in product.
  var row = function (opts) {
    return _twlRender({
      label:       opts.label,
      desc:        opts.desc || '',
      selected:    opts.on ? 'true' : 'false',
      placement:   'trailing',
      state:       opts.state || 'default',
      interactive: false
    });
  };

  return '<div class="eb-preview eb-preview-form-card">' +
    '<div class="eb-preview-form-card__header">' +
      '<p class="eb-preview-form-card__title">Notification settings</p>' +
      '<p class="eb-preview-form-card__subtitle">Choose how GCash keeps you informed.</p>' +
    '</div>' +
    '<div class="eb-preview-form-card__section">' +
      '<p class="eb-preview-form-card__section-title">Account activity</p>' +
      '<div class="eb-preview-form-card__rows">' +
        row({label:'Push notifications',  desc:'Get alerts when money moves', on:true}) +
        row({label:'Email alerts',        desc:'Daily summary and receipts',  on:false}) +
        row({label:'SMS notifications',   desc:'',                            on:false}) +
      '</div>' +
    '</div>' +
    '<div class="eb-preview-form-card__section">' +
      '<p class="eb-preview-form-card__section-title">Security</p>' +
      '<div class="eb-preview-form-card__rows">' +
        row({label:'Biometric login',           desc:'Use Face ID to sign in',             on:true}) +
        row({label:'Two-factor authentication', desc:'Extra verification on new devices',  on:true}) +
        row({label:'Quick balance on lock',     desc:'Requires biometric login',           on:false, state:'disabled'}) +
      '</div>' +
    '</div>' +
  '</div>';
}

function _toggleWithLabelUpdate() {
  var label     = document.getElementById('toggle-with-label-ctrl-label');
  var desc      = document.getElementById('toggle-with-label-ctrl-desc');
  var placement = document.getElementById('toggle-with-label-ctrl-placement');
  var selected  = document.getElementById('toggle-with-label-ctrl-selected');
  var required  = document.getElementById('toggle-with-label-ctrl-required');
  var helper    = document.getElementById('toggle-with-label-ctrl-helper');
  var state     = document.getElementById('toggle-with-label-ctrl-state');
  var preview   = document.getElementById('toggle-with-label-demo-preview');
  if (!preview) return;
  preview.innerHTML = _twlRender({
    label:       label ? label.value : 'Push notifications',
    desc:        desc ? desc.value : '',
    placement:   placement ? placement.value : 'trailing',
    selected:    selected ? selected.value : 'true',
    required:    required ? required.value : 'no',
    helper:      helper ? helper.value : 'none',
    state:       state ? state.value : 'default',
    interactive: true
  });
}

function _twlInit() {
  var ctx = document.getElementById('toggle-with-label-context-preview');
  if (ctx) ctx.innerHTML = _twlContextMarkup();
  _toggleWithLabelUpdate();

  var today = document.getElementById('toggle-with-label-spec-today');
  if (today) today.innerHTML =
    '<div class="eb-preview eb-preview-setting-row">' +
      '<div class="eb-preview-setting-row__labels">' +
        '<div class="eb-preview-setting-row__label">Label</div>' +
      '</div>' +
      _twlToggle('true','default', false) +
    '</div>';

  var trailing = document.getElementById('toggle-with-label-spec-trailing');
  if (trailing) trailing.innerHTML = _twlRender({label:'Push notifications', desc:'yes', placement:'trailing', selected:'true', interactive:false});

  var leading = document.getElementById('toggle-with-label-spec-leading');
  if (leading) leading.innerHTML = _twlRender({label:'Remember me', desc:'', placement:'leading', selected:'false', interactive:false});
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _twlInit);
else _twlInit();
