/* Auto-extracted from assessment-src/components/bottom-sheet.html.
 * Powers the live-preview dropdowns/toggles for the bottom-sheet component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs bottom-sheet
 */
/* ── Bottom Sheet JS ──────────────────────────────────────────────── */
/* Renders miniature phone-like previews of the Bottom Sheet using
   inline HTML. Shows the current Figma schema (alignment, CTAs)
   plus proposed-but-not-in-Figma controls (detent, drag handle,
   scrim, content shape) so the user can visualise the restructure. */

function _bottomSheetCardMarkup(opts) {
  var align   = opts.align || 'left';
  var pre     = opts.preamble !== 'no';
  var desc    = opts.desc !== 'no';
  var cta     = opts.cta || '2';
  var handle  = opts.handle !== 'no';
  var content = opts.content || 'text';

  var handleBlock = handle
    ? '<div style="width:32px;height:4px;background:#C2C6CF;border-radius:2px;margin:8px auto 0;"></div>'
    : '';

  var headerBlock = '';
  if (align === 'left') {
    headerBlock =
      '<div style="display:flex;align-items:flex-start;gap:8px;padding:16px 48px 8px 18px;position:relative;">' +
        '<div style="width:24px;height:24px;border-radius:50%;background:#C2C6CF;flex-shrink:0;margin-top:2px;"></div>' +
        '<div style="flex:1;">' +
          (pre ? '<div style="font-size:10px;color:#90A8D0;font-weight:700;margin-bottom:3px;">Preamble here...</div>' : '') +
          '<div style="font-family:\'Proxima Soft\',sans-serif;font-weight:700;font-size:14px;color:#0A2757;line-height:1.2;">Title here of the header...</div>' +
        '</div>' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="position:absolute;right:18px;top:18px;opacity:0.8;"><path d="M6 6l12 12M18 6L6 18" stroke="#6780A9" stroke-width="2" stroke-linecap="round"/></svg>' +
      '</div>';
  } else {
    headerBlock =
      '<div style="padding:16px 18px 8px 18px;text-align:center;">' +
        '<div style="height:4px;background:linear-gradient(90deg,#005CE5 60%,#E5EBF4 60%);border-radius:2px;margin-bottom:10px;"></div>' +
        (pre ? '<div style="font-size:10px;color:#90A8D0;font-weight:700;margin-bottom:3px;">Preamble here...</div>' : '') +
        '<div style="font-family:\'Proxima Soft\',sans-serif;font-weight:700;font-size:14px;color:#0A2757;line-height:1.2;">Title here of the header...</div>' +
      '</div>';
  }

  // Content region — currently decorative, but we preview the proposed
  // slot compositions so the user can imagine the restructure.
  var contentBlock = '';
  var alignCenter = (align === 'center');
  if (content === 'text') {
    contentBlock =
      '<div style="padding:0 18px 20px;' + (alignCenter ? 'text-align:center;' : '') + '">' +
        (desc ? '<div style="font-family:\'BarkAda\',serif;font-style:italic;font-size:11px;color:#445C85;line-height:1.5;">This area is designated for descriptions...</div>' : '') +
      '</div>';
  } else if (content === 'list') {
    contentBlock =
      '<div style="padding:0 18px 16px;">' +
        '<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid #E5EBF4;font-size:11px;color:#0A2757;"><span style="width:14px;height:14px;border-radius:50%;border:1.5px solid #C2C6CF;"></span>Driver\'s License</div>' +
        '<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid #E5EBF4;font-size:11px;color:#0A2757;"><span style="width:14px;height:14px;border-radius:50%;border:1.5px solid #005CE5;background:#005CE5;"></span>Passport</div>' +
        '<div style="display:flex;align-items:center;gap:10px;padding:10px 0;font-size:11px;color:#0A2757;"><span style="width:14px;height:14px;border-radius:50%;border:1.5px solid #C2C6CF;"></span>UMID</div>' +
      '</div>';
  } else if (content === 'form') {
    contentBlock =
      '<div style="padding:0 18px 16px;display:flex;flex-direction:column;gap:8px;">' +
        '<div><div style="font-size:9px;color:#90A8D0;font-weight:700;margin-bottom:3px;">FULL NAME</div><div style="height:26px;border:1px solid #C2C6CF;border-radius:4px;padding:0 8px;display:flex;align-items:center;font-size:10px;color:#0A2757;">Juan Dela Cruz</div></div>' +
        '<div><div style="font-size:9px;color:#90A8D0;font-weight:700;margin-bottom:3px;">MOBILE NUMBER</div><div style="height:26px;border:1px solid #C2C6CF;border-radius:4px;padding:0 8px;display:flex;align-items:center;font-size:10px;color:#0A2757;">+63 9XX XXX XXXX</div></div>' +
      '</div>';
  }

  var ctaBlock = '';
  if (cta === '2') {
    ctaBlock =
      '<div style="padding:4px 18px 20px;display:flex;flex-direction:column;gap:8px;">' +
        '<div style="height:28px;background:#005CE5;border-radius:99px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">Label</div>' +
        '<div style="height:22px;display:flex;align-items:center;justify-content:center;color:#005CE5;font-size:11px;font-weight:700;">Label</div>' +
      '</div>';
  } else if (cta === '1') {
    ctaBlock =
      '<div style="padding:4px 18px 20px;">' +
        '<div style="height:28px;background:#005CE5;border-radius:99px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">Label</div>' +
      '</div>';
  } else {
    ctaBlock = '<div style="height:8px;"></div>';
  }

  return (
    '<div style="background:#fff;border-top-left-radius:12px;border-top-right-radius:12px;width:240px;overflow:hidden;box-shadow:0 -2px 10px rgba(2,14,34,0.08);">' +
      handleBlock +
      headerBlock +
      contentBlock +
      ctaBlock +
    '</div>'
  );
}

function _bottomSheetStageMarkup(opts) {
  var scrim  = opts.scrim !== 'no';
  var detent = opts.detent || 'medium';
  var card   = _bottomSheetCardMarkup(opts);

  // Determine sheet vertical position based on detent.
  var sheetOffset = (detent === 'large') ? '32px' : '110px';

  return (
    '<div style="position:relative;width:280px;height:360px;margin:0 auto;background:#F6F9FD;border-radius:18px;overflow:hidden;border:1px solid #E5EBF4;">' +
      // Fake app content behind
      '<div style="padding:14px;">' +
        '<div style="width:60%;height:8px;background:#D9E2EC;border-radius:3px;margin-bottom:10px;"></div>' +
        '<div style="width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;"></div>' +
        '<div style="width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;"></div>' +
        '<div style="width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;"></div>' +
      '</div>' +
      // Scrim
      (scrim ? '<div style="position:absolute;inset:0;background:#020E22;opacity:0.56;"></div>' : '') +
      // Bottom sheet anchored to bottom
      '<div style="position:absolute;left:50%;transform:translateX(-50%);bottom:0;top:' + sheetOffset + ';display:flex;align-items:flex-start;justify-content:center;">' +
        card +
      '</div>' +
    '</div>'
  );
}

function _bottomSheetUpdate() {
  var align    = document.getElementById('bottom-sheet-ctrl-align');
  var preamble = document.getElementById('bottom-sheet-ctrl-preamble');
  var descEl   = document.getElementById('bottom-sheet-ctrl-desc');
  var ctaEl    = document.getElementById('bottom-sheet-ctrl-cta');
  var detentEl = document.getElementById('bottom-sheet-ctrl-detent');
  var handleEl = document.getElementById('bottom-sheet-ctrl-handle');
  var scrimEl  = document.getElementById('bottom-sheet-ctrl-scrim');
  var contEl   = document.getElementById('bottom-sheet-ctrl-content');
  var preview  = document.getElementById('bottom-sheet-demo-preview');
  if (!preview) return;
  preview.innerHTML = _bottomSheetStageMarkup({
    align:    align    ? align.value    : 'left',
    preamble: preamble ? preamble.value : 'yes',
    desc:     descEl   ? descEl.value   : 'yes',
    cta:      ctaEl    ? ctaEl.value    : '2',
    detent:   detentEl ? detentEl.value : 'medium',
    handle:   handleEl ? handleEl.value : 'yes',
    scrim:    scrimEl  ? scrimEl.value  : 'yes',
    content:  contEl   ? contEl.value   : 'text'
  });
}

function _bottomSheetSpecMode(card, mode) {
  var panel = document.querySelector('#panel-bottom-sheet');
  if (!panel) return;
  // Scope toggle buttons to the clicked spec card
  var cardIds = { left: 'bottom-sheet-spec-preview-left', center: 'bottom-sheet-spec-preview-center' };
  var previewId = cardIds[card];
  if (!previewId) return;
  var previewEl = document.getElementById(previewId);
  if (!previewEl) return;

  // Find the two mode-toggle buttons for this card and toggle active state
  var cardEl = previewEl.closest('.spec-card');
  if (cardEl) {
    var btns = cardEl.querySelectorAll('.mode-toggle-btn');
    btns.forEach(function(b) { b.classList.remove('active'); });
    var sel = cardEl.querySelector('.mode-toggle-btn[onclick*="\'' + mode + '\'"]');
    if (sel) sel.classList.add('active');
  }

  if (mode === 'dev') {
    var rows = '';
    if (card === 'left') {
      rows =
        '<div class="dev-spec-row"><span class="dev-spec-key">name</span><span class="dev-spec-val">Bottom Drawer</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">node</span><span class="dev-spec-val">12522:12860</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">alignment</span><span class="dev-spec-val">Left Align</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">size</span><span class="dev-spec-val">360 × 324</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">radius (top)</span><span class="dev-spec-val">8</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">surface.bg</span><span class="dev-spec-val">main/bottom-header/color/bg · #FFFFFF</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">preamble.color</span><span class="dev-spec-val">main/bottom-header/color/preamble · #90A8D0</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">header.color</span><span class="dev-spec-val">main/bottom-header/color/header · #0A2757</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">description.color</span><span class="dev-spec-val">main/bottom-header/color/description · #445C85</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">icon-close.color</span><span class="dev-spec-val">main/bottom-header/color/icon-close · #6780A9</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">icon-close.asset</span><span class="dev-spec-val">raster PNG (Figma CDN) — should be vector</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">cta.primary.bg</span><span class="dev-spec-val">main/button/primary/brand/enabled/bg · #005CE5</span></div>';
    } else {
      rows =
        '<div class="dev-spec-row"><span class="dev-spec-key">name</span><span class="dev-spec-val">Bottom Drawer</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">node</span><span class="dev-spec-val">12817:43834</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">alignment</span><span class="dev-spec-val">Center Align</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">size</span><span class="dev-spec-val">360 × 330</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">radius (top)</span><span class="dev-spec-val">8</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">surface.bg</span><span class="dev-spec-val">main/bottom-header/color/bg · #FFFFFF</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">header-slot</span><span class="dev-spec-val">above-title · ~16 px tall</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">preamble.color</span><span class="dev-spec-val">main/bottom-header/color/preamble · #90A8D0</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">header.color</span><span class="dev-spec-val">main/bottom-header/color/header · #0A2757</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">description.color</span><span class="dev-spec-val">main/bottom-header/color/description · #445C85</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">icon-close</span><span class="dev-spec-val">not present (asymmetry vs Left Align)</span></div>' +
        '<div class="dev-spec-row"><span class="dev-spec-key">cta.primary.bg</span><span class="dev-spec-val">main/button/primary/brand/enabled/bg · #005CE5</span></div>';
    }
    previewEl.innerHTML = '<div class="dev-spec-block">' + rows + '</div>';
  } else {
    previewEl.innerHTML = _bottomSheetCardMarkup({
      align:    (card === 'center' ? 'center' : 'left'),
      preamble: 'yes',
      desc:     'yes',
      cta:      '2',
      handle:   'no',  // Figma component has no handle; DES view reflects the current state
      content:  'text'
    });
  }
}

function _bottomSheetInit() {
  var ctx = document.getElementById('bottom-sheet-context-preview');
  if (ctx) ctx.innerHTML = _bottomSheetStageMarkup({align:'left', preamble:'yes', desc:'yes', cta:'2', detent:'medium', handle:'yes', scrim:'yes', content:'list'});
  _bottomSheetUpdate();
  _bottomSheetSpecMode('left', 'des');
  _bottomSheetSpecMode('center', 'des');
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _bottomSheetInit);
else _bottomSheetInit();
