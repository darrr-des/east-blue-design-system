/* Bottom Sheet — live preview + spec cards.
 * Wired to the Astro SpecCard demo-panel (`updateSpecCard(demoKey, prop, value)`).
 * Re-extract via: node astro-site/scripts/extract-demos.mjs bottom-sheet
 */

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
  var sheetOffset = (detent === 'large') ? '32px' : '110px';

  return (
    '<div style="position:relative;width:280px;height:360px;margin:0 auto;background:#F6F9FD;border-radius:18px;overflow:hidden;border:1px solid #E5EBF4;">' +
      '<div style="padding:14px;">' +
        '<div style="width:60%;height:8px;background:#D9E2EC;border-radius:3px;margin-bottom:10px;"></div>' +
        '<div style="width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;"></div>' +
        '<div style="width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;"></div>' +
        '<div style="width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;"></div>' +
      '</div>' +
      (scrim ? '<div style="position:absolute;inset:0;background:#020E22;opacity:0.56;"></div>' : '') +
      '<div style="position:absolute;left:50%;transform:translateX(-50%);bottom:0;top:' + sheetOffset + ';display:flex;align-items:flex-start;justify-content:center;">' +
        card +
      '</div>' +
    '</div>'
  );
}

/* ── Live preview (Overview tab) ─────────────────────────────────── */
function _bottomSheetUpdate() {
  var get = function(id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  var preview = document.getElementById('bottom-sheet-demo-preview');
  if (!preview) return;
  preview.innerHTML = _bottomSheetStageMarkup({
    align:    get('bottom-sheet-ctrl-align', 'left'),
    preamble: get('bottom-sheet-ctrl-preamble', 'yes'),
    desc:     get('bottom-sheet-ctrl-desc', 'yes'),
    cta:      get('bottom-sheet-ctrl-cta', '2'),
    detent:   get('bottom-sheet-ctrl-detent', 'medium'),
    handle:   get('bottom-sheet-ctrl-handle', 'yes'),
    scrim:    get('bottom-sheet-ctrl-scrim', 'yes'),
    content:  get('bottom-sheet-ctrl-content', 'text')
  });
}

/* ── Spec cards (Style tab) ──────────────────────────────────────── */
var _bsSpecCards = {
  'left-align':   { align: 'left',   preamble: 'yes', desc: 'yes', cta: '2' },
  'center-align': { align: 'center', preamble: 'yes', desc: 'yes', cta: '2' }
};
var _specCards = _bsSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  var lines = ['EBBottomSheet("Header")'];
  if (card.preamble === 'yes') lines.push('    .ebPreamble("Preamble")');
  if (card.desc === 'yes')     lines.push('    .ebDescription("Description body")');
  lines.push('    .ebAlignment(.' + (card.align === 'center' ? 'center' : 'leading') + ')');
  if (card.cta === '2') {
    lines.push('    .ebPrimaryAction("Continue") { }');
    lines.push('    .ebSecondaryAction("Cancel") { }');
  } else if (card.cta === '1') {
    lines.push('    .ebPrimaryAction("Continue") { }');
  }
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  var lines = ['EBBottomSheet('];
  lines.push('    header = "Header",');
  if (card.preamble === 'yes') lines.push('    preamble = "Preamble",');
  if (card.desc === 'yes')     lines.push('    description = "Description body",');
  lines.push('    alignment = EBSheetAlignment.' + (card.align === 'center' ? 'Center' : 'Leading') + ',');
  if (card.cta === '2') {
    lines.push('    primaryAction = EBSheetAction("Continue") { },');
    lines.push('    secondaryAction = EBSheetAction("Cancel") { }');
  } else if (card.cta === '1') {
    lines.push('    primaryAction = EBSheetAction("Continue") { }');
  }
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _bsSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview — `bottom-sheet-spec-preview-{cardStyle}` */
  var previewEl = document.getElementById('bottom-sheet-spec-preview-' + cardStyle);
  if (previewEl) {
    previewEl.innerHTML = _bottomSheetCardMarkup({
      align: card.align, preamble: card.preamble, desc: card.desc,
      cta: card.cta, handle: 'no', content: 'text'
    });
  }

  /* Update Properties readouts — `[data-sp="{cardStyle}-{prop}"]` */
  var labelMap = {
    align:    { left: 'Left Align', center: 'Center Align' },
    preamble: { yes: 'yes', no: 'no' },
    desc:     { yes: 'yes', no: 'no' },
    cta:      { '2': 'Primary + Tertiary', '1': 'Primary Only', '0': 'None' }
  };
  Object.keys(card).forEach(function(k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    var span = el.querySelector('.spec-prop-hex') || el;
    span.textContent = (labelMap[k] && labelMap[k][card[k]]) || card[k];
  });

  /* DEV code update */
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

function _bsInitSpecCards() {
  Object.keys(_bsSpecCards).forEach(function(key) {
    updateSpecCard(key, 'align', _bsSpecCards[key].align);
  });
}

function _bottomSheetInit() {
  var ctx = document.getElementById('bottom-sheet-context-preview');
  if (ctx) ctx.innerHTML = _bottomSheetStageMarkup({align:'left', preamble:'yes', desc:'yes', cta:'2', detent:'medium', handle:'yes', scrim:'yes', content:'list'});
  _bottomSheetUpdate();
  _bsInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _bottomSheetInit);
else _bottomSheetInit();
document.addEventListener('astro:page-load', _bottomSheetInit);

/* Legacy alias — kept so the older inline onclick on Overview-tab card
   doesn't error if any markup still references `_bottomSheetSpecMode`. */
function _bottomSheetSpecMode(card, mode) {
  if (typeof window.toggleSpecMode === 'function') {
    var el = document.querySelector('[data-view="' + card + '-' + (mode === 'dev' ? 'des' : 'dev') + '"]');
    if (el) {
      var toggle = el.parentElement.querySelector('.spec-mode-toggle');
      if (toggle) window.toggleSpecMode(card, toggle);
    }
  }
}
