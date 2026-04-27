/* Auto-extracted from assessment-src/components/modal.html.
 * Powers the live-preview dropdowns/toggles for the modal component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs modal
 */
/* ── Modal JS ───────────────────────────────────────────────────── */
/* Renders miniature phone-like previews of the Modal variants using
   inline HTML so the dimmed scrim + centered card are visible.
   Uses generic preview classes; no new CSS classes are added.        */

function _modalCardMarkup(opts) {
  var type = opts.type || 'default';
  var cta  = opts.cta  || '1';

  // Resolve closest shipped variant when the picked combo doesn't exist.
  var shipped = {
    'default|1': true,
    'default|2-horizontal': true,
    'default|2-vertical': true,
    'with-icon|1-vertical': true,
    'with-icon|2-vertical': true,
    'transaction-v1|1': true,
    'transaction-v2|1': true
  };
  var key = type + '|' + cta;
  var fallbackNote = '';
  if (!shipped[key]) {
    // Fallback rules: with-icon → force vertical CTAs; transaction → force 1.
    if (type === 'with-icon') {
      cta = (cta === '2-horizontal' || cta === '2-vertical') ? '2-vertical' : '1-vertical';
    } else if (type === 'transaction-v1' || type === 'transaction-v2') {
      cta = '1';
    } else if (type === 'default' && cta === '1-vertical') {
      cta = '1';
    }
    fallbackNote = '<div style="margin-top:8px;font-size:11px;color:var(--muted,#6780A9);font-style:italic;text-align:center;">(showing nearest shipped combo)</div>';
  }

  // --- Body markup by type ---
  var body = '';

  if (type === 'default' || type === 'with-icon') {
    var iconBlock = '';
    if (type === 'with-icon') {
      iconBlock =
        '<div style="width:64px;height:64px;border-radius:50%;background:#C2C6CF;margin:0 auto 12px;"></div>';
    }
    var ctaBlock = '';
    if (cta === '1' || cta === '1-vertical') {
      ctaBlock =
        '<div style="height:28px;background:#005CE5;border-radius:99px;margin-top:14px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">Label</div>';
    } else if (cta === '2-horizontal') {
      ctaBlock =
        '<div style="display:flex;gap:6px;margin-top:14px;">' +
          '<div style="flex:1;height:28px;border:2px solid #005CE5;border-radius:99px;display:flex;align-items:center;justify-content:center;color:#005CE5;font-size:11px;font-weight:700;">Label</div>' +
          '<div style="flex:1;height:28px;background:#005CE5;border-radius:99px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">Label</div>' +
        '</div>';
    } else if (cta === '2-vertical') {
      ctaBlock =
        '<div style="display:flex;flex-direction:column;gap:6px;margin-top:14px;">' +
          '<div style="height:28px;background:#005CE5;border-radius:99px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">Label</div>' +
          '<div style="height:28px;border:2px solid #005CE5;border-radius:99px;display:flex;align-items:center;justify-content:center;color:#005CE5;font-size:11px;font-weight:700;">Label</div>' +
        '</div>';
    }

    body =
      '<div style="background:#fff;border-radius:6px;padding:20px 18px;box-shadow:0 0 4px rgba(232,238,242,0.79);width:220px;text-align:center;">' +
        iconBlock +
        '<div style="font-family:\'Proxima Soft\',sans-serif;font-weight:700;font-size:14px;color:#0A2757;margin-bottom:8px;">Put the title here</div>' +
        '<div style="font-size:11px;color:#6780A9;line-height:1.45;">Add description here.<br>Add description here.</div>' +
        ctaBlock +
      '</div>';
  } else if (type === 'transaction-v1' || type === 'transaction-v2') {
    var outerBg = type === 'transaction-v2' ? '#F6F9FD' : '#fff';
    var rowsHtml = '';
    if (type === 'transaction-v1') {
      rowsHtml =
        '<div style="padding:6px 0;"><div style="font-size:9px;color:#6780A9;margin-bottom:2px;">Label</div><div style="font-size:10px;color:#0A2757;font-weight:600;">Put content here</div></div>' +
        '<div style="padding:6px 0;"><div style="font-size:9px;color:#6780A9;margin-bottom:2px;">Label</div><div style="font-size:10px;color:#0A2757;font-weight:600;">Put content here</div></div>' +
        '<div style="padding:6px 0;"><div style="font-size:9px;color:#6780A9;margin-bottom:2px;">Label</div><div style="font-size:10px;color:#0A2757;font-weight:600;">Put content here</div></div>';
    } else {
      rowsHtml =
        '<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:10px;"><span style="color:#6780A9;">Label</span><span style="color:#0A2757;font-weight:600;">Put content here</span></div>' +
        '<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:10px;"><span style="color:#6780A9;">Label</span><span style="color:#0A2757;font-weight:600;">Put content here</span></div>' +
        '<div style="display:flex;justify-content:space-between;padding:4px 0;font-size:10px;"><span style="color:#6780A9;">Label</span><span style="color:#0A2757;font-weight:600;">Put content here</span></div>';
    }
    body =
      '<div style="background:' + outerBg + ';border-radius:6px;box-shadow:0 0 4px rgba(232,238,242,0.79);width:220px;overflow:hidden;">' +
        '<div style="background:#fff;padding:14px;border-bottom:1px solid #E5EBF4;">' +
          '<div style="font-family:\'Proxima Soft\',sans-serif;font-weight:700;font-size:13px;color:#0A2757;margin-bottom:10px;">Put the title here</div>' +
          '<div style="font-size:10px;color:#0A2757;font-weight:600;line-height:1.45;margin-bottom:6px;">First line of text goes here<br>Second line of text goes here</div>' +
          rowsHtml +
        '</div>' +
        '<div style="background:' + outerBg + ';padding:8px 14px;display:flex;justify-content:space-between;align-items:center;font-size:10px;">' +
          '<span style="color:#6780A9;">Reference Number</span>' +
          '<span style="display:flex;align-items:center;gap:6px;"><span style="color:#0A2757;font-weight:600;">165A25912345</span>' +
          '<svg width="10" height="10" viewBox="0 0 24 24" fill="none"><rect x="8" y="8" width="12" height="12" rx="2" stroke="#005CE5" stroke-width="2"/><path d="M4 16V5a1 1 0 0 1 1-1h11" stroke="#005CE5" stroke-width="2"/></svg></span>' +
        '</div>' +
        '<div style="background:' + outerBg + ';padding:6px 14px 14px;">' +
          '<div style="height:26px;background:#005CE5;border-radius:99px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">Label</div>' +
        '</div>' +
      '</div>';
  }

  return body + fallbackNote;
}

function _modalStageMarkup(opts) {
  var showScrim = opts.scrim !== false;
  var card = _modalCardMarkup(opts);

  var stage =
    '<div style="position:relative;width:280px;height:360px;margin:0 auto;background:#F6F9FD;border-radius:18px;overflow:hidden;border:1px solid #E5EBF4;">' +
      // Fake app content behind
      '<div style="padding:14px;">' +
        '<div style="width:60%;height:8px;background:#D9E2EC;border-radius:3px;margin-bottom:10px;"></div>' +
        '<div style="width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;"></div>' +
        '<div style="width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;"></div>' +
        '<div style="width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;"></div>' +
      '</div>' +
      // Scrim
      (showScrim ? '<div style="position:absolute;inset:0;background:#020E22;opacity:0.56;"></div>' : '') +
      // Modal card centered. flex-direction:column so the fallback note
      // (when present) sits BELOW the card instead of pushing it sideways.
      '<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;">' +
        card +
      '</div>' +
    '</div>';

  return stage;
}

function _modalUpdate() {
  var typeEl  = document.getElementById('modal-ctrl-type');
  var ctaEl   = document.getElementById('modal-ctrl-cta');
  var scrimEl = document.getElementById('modal-ctrl-scrim');
  var preview = document.getElementById('modal-demo-preview');
  if (!preview) return;
  preview.innerHTML = _modalStageMarkup({
    type:  typeEl  ? typeEl.value  : 'default',
    cta:   ctaEl   ? ctaEl.value   : '1',
    scrim: !scrimEl || scrimEl.value === 'yes'
  });
}

function _modalSpecMode(card, mode) {
  var wrap = document.querySelector('#panel-modal');
  if (!wrap) return;
  // Scope the toggle buttons to the clicked card
  var header = null;
  var cardIds = {
    'default': 'modal-spec-preview-default',
    'icon':    'modal-spec-preview-icon',
    'txn':     'modal-spec-preview-txn'
  };
  var previewEl = document.getElementById(cardIds[card]);
  if (!previewEl) return;
  // Update active state on buttons inside the same spec-card
  var specCard = previewEl.closest('.spec-card');
  if (specCard) {
    var btns = specCard.querySelectorAll('.mode-toggle-btn');
    btns.forEach(function(b) { b.classList.remove('active'); });
    var sel = specCard.querySelector('.mode-toggle-btn[onclick*="\'' + mode + '\'"]');
    if (sel) sel.classList.add('active');
  }

  if (mode === 'dev') {
    var devSpec = '';
    if (card === 'default') {
      devSpec =
        '<div class="dev-spec-block">' +
          '<div class="dev-spec-row"><span class="dev-spec-key">name</span><span class="dev-spec-val">Modal · default</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">node</span><span class="dev-spec-val">18507:71792</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">width</span><span class="dev-spec-val">320</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">radius</span><span class="dev-spec-val">6 (radius/radius-2)</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">surface.bg</span><span class="dev-spec-val">main/modal-popup/color/bg · #FFFFFF</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">title.color</span><span class="dev-spec-val">main/modal-popup/color/label · #0A2757</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">desc.color</span><span class="dev-spec-val">main/modal-popup/color/label-primary · #6780A9</span></div>' +
        '</div>';
    } else if (card === 'icon') {
      devSpec =
        '<div class="dev-spec-block">' +
          '<div class="dev-spec-row"><span class="dev-spec-key">name</span><span class="dev-spec-val">Modal · with icon</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">nodes</span><span class="dev-spec-val">18507:71773 / 18507:71783</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">icon.size</span><span class="dev-spec-val">92 × 92</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">icon.placeholder</span><span class="dev-spec-val">#C2C6CF (hardcoded — should be Slot)</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">cta.gap</span><span class="dev-spec-val">8 (vertical)</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">title.color</span><span class="dev-spec-val">main/modal-popup/color/label</span></div>' +
        '</div>';
    } else {
      devSpec =
        '<div class="dev-spec-block">' +
          '<div class="dev-spec-row"><span class="dev-spec-key">name</span><span class="dev-spec-val">Modal · transaction v1 / v2</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">nodes</span><span class="dev-spec-val">18507:71706 / 18507:71732</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">content.bg</span><span class="dev-spec-val">main/modal-popup/color/bg · #FFFFFF</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">footer.bg</span><span class="dev-spec-val">main/modal-popup/color/bg-subtle · #F6F9FD</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">divider</span><span class="dev-spec-val">main/modal-popup/color/border · #E5EBF4</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">copy.icon.color</span><span class="dev-spec-val">main/modal-popup/color/icon-copy · #005CE5</span></div>' +
          '<div class="dev-spec-row"><span class="dev-spec-key">copy.icon.asset</span><span class="dev-spec-val">Raster PNG (shape_half, shape_full) — should be vector</span></div>' +
        '</div>';
    }
    previewEl.innerHTML = devSpec;
  } else {
    var opts = {};
    if (card === 'default')  opts = { type: 'default', cta: '1' };
    if (card === 'icon')     opts = { type: 'with-icon', cta: '2-vertical' };
    if (card === 'txn')      opts = { type: 'transaction-v2', cta: '1' };
    previewEl.innerHTML = _modalCardMarkup(opts);
  }
}

function _modalInit() {
  /* In Context preview is filled by the layout's standard ctx-placeholder
   * (set in modal.ts inContextHtml). We don't render anything into
   * #modal-context-preview from JS — the placeholder stays until real
   * GCash screen captures are provided by the design team. */
  _modalUpdate();

  var d = document.getElementById('modal-spec-preview-default');
  if (d) d.innerHTML = _modalCardMarkup({ type: 'default', cta: '1' });
  var i = document.getElementById('modal-spec-preview-icon');
  if (i) i.innerHTML = _modalCardMarkup({ type: 'with-icon', cta: '2-vertical' });
  var t = document.getElementById('modal-spec-preview-txn');
  if (t) t.innerHTML = _modalCardMarkup({ type: 'transaction-v2', cta: '1' });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _modalInit);
else _modalInit();
