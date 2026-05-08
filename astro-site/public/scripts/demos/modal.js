/* Auto-extracted from assessment-src/components/modal.html.
 * Powers the live-preview dropdowns/toggles for the modal component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs modal
 */
/* ── Modal JS ───────────────────────────────────────────────────── */
/* Renders miniature phone-like previews of the Modal variants using
   inline HTML so the dimmed scrim + centered card are visible.        */

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
    if (type === 'with-icon') {
      cta = (cta === '2-horizontal' || cta === '2-vertical') ? '2-vertical' : '1-vertical';
    } else if (type === 'transaction-v1' || type === 'transaction-v2') {
      cta = '1';
    } else if (type === 'default' && cta === '1-vertical') {
      cta = '1';
    }
    fallbackNote = '<div style="margin-top:8px;font-size:11px;color:var(--muted,#6780A9);font-style:italic;text-align:center;">(showing nearest shipped combo)</div>';
  }

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
        '<div style="font-family:\'BarkAda\', system-ui, sans-serif;font-weight:500;font-size:11px;color:#6780A9;line-height:1.45;">Add description here.<br>Add description here.</div>' +
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
      '<div style="padding:14px;">' +
        '<div style="width:60%;height:8px;background:#D9E2EC;border-radius:3px;margin-bottom:10px;"></div>' +
        '<div style="width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;"></div>' +
        '<div style="width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;"></div>' +
        '<div style="width:100%;height:32px;background:#E5EBF4;border-radius:6px;margin-bottom:8px;"></div>' +
      '</div>' +
      (showScrim ? '<div style="position:absolute;inset:0;background:#020E22;opacity:0.56;"></div>' : '') +
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

/* ── Modal Spec Cards ─────────────────────────────────────────────── */
var _modalSpecCards = {
  'default': { type: 'default', cta: '1' },
  'icon':    { type: 'with-icon', cta: '2-vertical' },
  'txn':     { type: 'transaction-v2', cta: '1' }
};

var _specCards = _modalSpecCards;
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var t = card.type;
  var cta = card.cta;
  if (t === 'default') {
    return 'EBModal("Put the title here")\n    .ebDescription("Add description here.")\n    .ebPrimaryAction("Label", action: { })';
  }
  if (t === 'with-icon') {
    var s = 'EBModal("Put the title here")\n    .ebDescription("Add description here.")\n    .ebIcon(Image(systemName: "checkmark.circle"))\n    .ebPrimaryAction("Label", action: { })';
    if (cta === '2-vertical' || cta === '2-horizontal') s += '\n    .ebSecondaryAction("Label", action: { })';
    return s;
  }
  return 'EBModal("Put the title here")\n    .ebStyle(.transaction)\n    .ebTransactionRows(rows)\n    .ebReferenceNumber("165A25912345")\n    .ebPrimaryAction("Label", action: { })';
}

function buildComposeSnippet(type, card) {
  var t = card.type;
  var cta = card.cta;
  if (t === 'default') {
    return 'EBModal(\n    title = "Put the title here",\n    description = "Add description here.",\n    primaryAction = EBModalAction("Label") { }\n)';
  }
  if (t === 'with-icon') {
    var s = 'EBModal(\n    title = "Put the title here",\n    description = "Add description here.",\n    icon = { Icon(Icons.Filled.CheckCircle, null) },\n    primaryAction = EBModalAction("Label") { }';
    if (cta === '2-vertical' || cta === '2-horizontal') s += ',\n    secondaryAction = EBModalAction("Label") { }';
    s += '\n)';
    return s;
  }
  return 'EBModal(\n    title = "Put the title here",\n    style = EBModalStyle.Transaction,\n    rows = transactionDetails,\n    referenceNumber = "165A25912345",\n    primaryAction = EBModalAction("Label") { }\n)';
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function _modalPropDisplay(prop, value) {
  if (prop === 'type') {
    if (value === 'with-icon') return 'with icon';
    if (value === 'transaction-v1') return 'transaction_v1';
    if (value === 'transaction-v2') return 'transaction_v2';
    return value;
  }
  if (prop === 'cta') {
    if (value === '1-vertical') return '1 - vertical';
    if (value === '2-horizontal') return '2 - horizontal';
    if (value === '2-vertical') return '2 - vertical';
    return value;
  }
  return value;
}

function updateSpecCard(cardStyle, prop, value) {
  var card = _modalSpecCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview — find by id */
  var previewIds = {
    'default': 'modal-spec-preview-default',
    'icon':    'modal-spec-preview-icon',
    'txn':     'modal-spec-preview-txn'
  };
  var previewEl = document.getElementById(previewIds[cardStyle]);
  if (previewEl) previewEl.innerHTML = _modalCardMarkup({ type: card.type, cta: card.cta });

  /* Update Properties readouts via [data-sp] */
  var spType = document.querySelector('[data-sp="' + cardStyle + '-type"]');
  if (spType) spType.textContent = _modalPropDisplay('type', card.type);
  var spCta = document.querySelector('[data-sp="' + cardStyle + '-cta"]');
  if (spCta) spCta.textContent = _modalPropDisplay('cta', card.cta);

  /* Update DEV code via [data-code-content] */
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

function _modalInit() {
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

(function(){
  document.addEventListener('astro:page-load', _modalInit);
})();
