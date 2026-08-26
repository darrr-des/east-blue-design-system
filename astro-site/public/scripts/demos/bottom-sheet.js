/* Bottom Sheet — live preview + spec cards.
 * Matches node 5304:32717 (2026 Working File):
 *   TitleAlignment   = Left | Center
 *   FooterOrientation = Vertical | Horizontal
 *   Subtitle         = None | Supporting | Description
 * Center is a control-free layout: it carries no Leading-Slot and no
 * Trailing-Slot, and takes the Description subtitle only.
 * Wired to the Astro SpecCard demo-panel (`updateSpecCard(demoKey, prop, value)`).
 */

var _BS_TITLE = '<div style="font-family:\'Proxima Soft\',sans-serif;font-weight:700;font-size:14px;color:#0A2757;line-height:1.2;">Title here of the header...</div>';
var _BS_PREAMBLE = '<div style="font-size:10px;color:#90A8D0;font-weight:700;margin-bottom:3px;">Preamble here...</div>';

function _bsSubtitleBlock(subtitle, center) {
  if (subtitle === 'none') return '';
  var align = center ? 'text-align:center;' : '';
  if (subtitle === 'supporting') {
    return '<div style="padding:0 18px 14px;' + align + '">' +
      '<div style="font-family:\'BarkAda\',serif;font-weight:600;font-size:11px;color:#6780A9;line-height:1.4;">Supporting text</div>' +
    '</div>';
  }
  return '<div style="padding:0 18px 14px;' + align + '">' +
    '<div style="font-family:\'BarkAda\',serif;font-weight:500;font-size:11px;color:#445C85;line-height:1.5;">This area is designated for descriptions...</div>' +
  '</div>';
}

function _bsContentBlock(content) {
  if (content === 'list') {
    return '<div style="padding:0 18px 16px;">' +
      '<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid #E5EBF4;font-size:11px;color:#0A2757;"><span style="width:14px;height:14px;border-radius:50%;border:1.5px solid #C2C6CF;"></span>Driver\'s License</div>' +
      '<div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid #E5EBF4;font-size:11px;color:#0A2757;"><span style="width:14px;height:14px;border-radius:50%;border:1.5px solid #005CE5;background:#005CE5;"></span>Passport</div>' +
      '<div style="display:flex;align-items:center;gap:10px;padding:10px 0;font-size:11px;color:#0A2757;"><span style="width:14px;height:14px;border-radius:50%;border:1.5px solid #C2C6CF;"></span>UMID</div>' +
    '</div>';
  }
  if (content === 'form') {
    return '<div style="padding:0 18px 16px;display:flex;flex-direction:column;gap:8px;">' +
      '<div><div style="font-size:9px;color:#90A8D0;font-weight:700;margin-bottom:3px;">FULL NAME</div><div style="height:26px;border:1px solid #C2C6CF;border-radius:4px;padding:0 8px;display:flex;align-items:center;font-size:10px;color:#0A2757;">Juan Dela Cruz</div></div>' +
      '<div><div style="font-size:9px;color:#90A8D0;font-weight:700;margin-bottom:3px;">MOBILE NUMBER</div><div style="height:26px;border:1px solid #C2C6CF;border-radius:4px;padding:0 8px;display:flex;align-items:center;font-size:10px;color:#0A2757;">+63 9XX XXX XXXX</div></div>' +
    '</div>';
  }
  return '<div style="padding:0 18px 6px;"><div style="height:34px;border:1px dashed #C2CFE5;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:9px;color:#90A8D0;font-weight:700;letter-spacing:.4px;">Content-Slot</div></div>';
}

function _bsFooterBlock(footer) {
  var primary = '<div style="flex:1;height:28px;background:#005CE5;border-radius:99px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:11px;font-weight:700;">Label</div>';
  var secondary = '<div style="flex:1;height:28px;border:1px solid #005CE5;border-radius:99px;display:flex;align-items:center;justify-content:center;color:#005CE5;font-size:11px;font-weight:700;">Label</div>';
  if (footer === 'horizontal') {
    return '<div style="padding:4px 18px 20px;display:flex;flex-direction:row;gap:8px;">' + secondary + primary + '</div>';
  }
  return '<div style="padding:4px 18px 20px;display:flex;flex-direction:column;gap:8px;">' + primary + secondary + '</div>';
}

function _bottomSheetCardMarkup(opts) {
  var center   = (opts.align === 'center');
  var subtitle = opts.subtitle || (center ? 'description' : 'description');
  var footer   = opts.footer || 'vertical';
  var content  = opts.content || 'text';

  var handleBlock = '<div style="width:32px;height:4px;background:#C2CFE5;border-radius:99px;margin:8px auto 0;"></div>';

  var headerBlock;
  if (center) {
    /* Center carries no Leading-Slot and no Trailing-Slot. */
    headerBlock =
      '<div style="padding:16px 18px 8px;text-align:center;">' +
        _BS_PREAMBLE + _BS_TITLE +
      '</div>';
  } else {
    headerBlock =
      '<div style="display:flex;align-items:flex-start;gap:8px;padding:16px 48px 8px 18px;position:relative;">' +
        '<div style="width:24px;height:24px;border-radius:50%;background:#C2CFE5;flex-shrink:0;margin-top:2px;"></div>' +
        '<div style="flex:1;">' + _BS_PREAMBLE + _BS_TITLE + '</div>' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" style="position:absolute;right:18px;top:18px;opacity:0.8;"><path d="M6 6l12 12M18 6L6 18" stroke="#6780A9" stroke-width="2" stroke-linecap="round"/></svg>' +
      '</div>';
  }

  return (
    '<div style="background:#fff;border-top-left-radius:12px;border-top-right-radius:12px;width:240px;overflow:hidden;box-shadow:0 -2px 10px rgba(2,14,34,0.08);">' +
      handleBlock + headerBlock +
      _bsSubtitleBlock(subtitle, center) +
      _bsContentBlock(content) +
      _bsFooterBlock(footer) +
    '</div>'
  );
}

/* The scrim comes from the platform presentation, not from this component —
   it is drawn here only to show the sheet in situ. */
function _bottomSheetStageMarkup(opts) {
  return (
    '<div style="position:relative;width:280px;height:360px;margin:0 auto;background:#F6F9FD;border-radius:18px;overflow:hidden;border:1px solid #E5EBF4;">' +
      '<div style="padding:14px;">' +
        '<div style="width:60%;height:8px;background:#D9E2EC;border-radius:3px;margin-bottom:10px;"></div>' +
        '<div style="width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;"></div>' +
        '<div style="width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;"></div>' +
      '</div>' +
      '<div style="position:absolute;inset:0;background:#020E22;opacity:0.56;"></div>' +
      '<div style="position:absolute;left:50%;transform:translateX(-50%);bottom:0;top:70px;display:flex;align-items:flex-start;justify-content:center;">' +
        _bottomSheetCardMarkup(opts) +
      '</div>' +
    '</div>'
  );
}

/* ── Live preview (Overview tab) ─────────────────────────────────── */
function _bottomSheetUpdate() {
  var get = function(id, fb) { var el = document.getElementById(id); return el ? el.value : fb; };
  var preview = document.getElementById('bottom-sheet-demo-preview');
  if (!preview) return;

  var align = get('bottom-sheet-ctrl-align', 'left');
  var subtitleEl = document.getElementById('bottom-sheet-ctrl-subtitle');

  /* Center takes the Description subtitle only — mirror the Figma rule. */
  if (subtitleEl) {
    var locked = (align === 'center');
    for (var i = 0; i < subtitleEl.options.length; i++) {
      var o = subtitleEl.options[i];
      if (o.value !== 'description') o.disabled = locked;
    }
    if (locked) subtitleEl.value = 'description';
  }

  preview.innerHTML = _bottomSheetStageMarkup({
    align:    align,
    footer:   get('bottom-sheet-ctrl-footer', 'vertical'),
    subtitle: get('bottom-sheet-ctrl-subtitle', 'description'),
    content:  get('bottom-sheet-ctrl-content', 'text')
  });
}

/* ── Spec cards (Style tab) ──────────────────────────────────────── */
var _bsSpecCards = {
  'left-align':   { align: 'left',   footer: 'vertical', subtitle: 'description' },
  'center-align': { align: 'center', footer: 'vertical', subtitle: 'description' }
};
var _specCards = _bsSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(cardKey, card) {
  var lines = ['EBBottomSheet("Title here of the header...")'];
  lines.push('    .ebTitleAlignment(.' + (card.align === 'center' ? 'center' : 'leading') + ')');
  if (card.subtitle === 'supporting')      lines.push('    .ebSubtitle(.supporting("Supporting text"))');
  else if (card.subtitle === 'description') lines.push('    .ebSubtitle(.description("Description body"))');
  lines.push('    .ebFooterOrientation(.' + (card.footer === 'horizontal' ? 'horizontal' : 'vertical') + ')');
  lines.push('    .ebContent { /* Content-Slot */ }');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, card) {
  var sub = card.subtitle === 'none'
    ? 'EBSubtitle.None'
    : (card.subtitle === 'supporting' ? 'EBSubtitle.Supporting("Supporting text")' : 'EBSubtitle.Description("Description body")');
  return [
    'EBBottomSheet(',
    '    title = "Title here of the header...",',
    '    titleAlignment = EBTitleAlignment.' + (card.align === 'center' ? 'Center' : 'Left') + ',',
    '    subtitle = ' + sub + ',',
    '    footerOrientation = EBFooterOrientation.' + (card.footer === 'horizontal' ? 'Horizontal' : 'Vertical') + ',',
    '    content = { /* Content-Slot */ }',
    ')'
  ].join('\n');
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _bsSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Center is Description-only — keep the card honest. */
  if (card.align === 'center') card.subtitle = 'description';

  var previewEl = document.getElementById('bottom-sheet-spec-preview-' + cardStyle);
  if (previewEl) previewEl.innerHTML = _bottomSheetCardMarkup(card);

  var labelMap = {
    align:    { left: 'Left', center: 'Center' },
    footer:   { vertical: 'Vertical', horizontal: 'Horizontal' },
    subtitle: { none: 'None', supporting: 'Supporting', description: 'Description' }
  };
  Object.keys(card).forEach(function(k) {
    var el = document.querySelector('[data-sp="' + cardStyle + '-' + k + '"]');
    if (!el) return;
    var span = el.querySelector('.spec-prop-hex') || el;
    span.textContent = (labelMap[k] && labelMap[k][card[k]]) || card[k];
  });

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
  if (ctx) ctx.innerHTML = _bottomSheetStageMarkup({align:'left', footer:'vertical', subtitle:'description', content:'list'});
  _bottomSheetUpdate();
  _bsInitSpecCards();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _bottomSheetInit);
else _bottomSheetInit();
document.addEventListener('astro:page-load', _bottomSheetInit);
