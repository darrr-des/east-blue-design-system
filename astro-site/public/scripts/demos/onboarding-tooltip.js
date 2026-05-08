/* Auto-extracted from assessment-src/components/onboarding-tooltip.html.
 * Powers the live-preview dropdowns/toggles for the onboarding-tooltip component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs onboarding-tooltip
 */
/* ── Onboarding - Tooltip JS ────────────────────────────────────
   Renders the fixed-content tooltip (header + description + close)
   with a pointer anchored at top / right / bottom / left, with
   optional header / description / close. */

function _ontPointer(dir) {
  var common = 'position:absolute;width:0;height:0;';
  if (dir === 'top') {
    return '<div style="' + common + 'left:50%;top:-8px;transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #FFFFFF;filter:drop-shadow(0 -1px 0 #E5EBF4);"></div>';
  }
  if (dir === 'bottom') {
    return '<div style="' + common + 'left:50%;bottom:-8px;transform:translateX(-50%);border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #FFFFFF;filter:drop-shadow(0 1px 0 #E5EBF4);"></div>';
  }
  if (dir === 'left') {
    return '<div style="' + common + 'top:50%;left:-8px;transform:translateY(-50%);border-top:8px solid transparent;border-bottom:8px solid transparent;border-right:8px solid #FFFFFF;filter:drop-shadow(-1px 0 0 #E5EBF4);"></div>';
  }
  return '<div style="' + common + 'top:50%;right:-8px;transform:translateY(-50%);border-top:8px solid transparent;border-bottom:8px solid transparent;border-left:8px solid #FFFFFF;filter:drop-shadow(1px 0 0 #E5EBF4);"></div>';
}

function _ontClose() {
  return '<div style="flex-shrink:0;width:18px;height:18px;display:flex;align-items:center;justify-content:center;">' +
    '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="#0A2757" stroke-width="1.6" stroke-linecap="round"/></svg>' +
  '</div>';
}

function _ontBody(opts) {
  var pointer = opts.pointer || 'top';
  var hasHeader = opts.header !== 'false';
  var hasDesc   = opts.description !== 'false';
  var hasClose  = opts.close !== 'false';

  var html = '<div style="position:relative;width:336px;background:#FFFFFF;border:1px solid #E5EBF4;border-radius:6px;padding:16px;box-sizing:border-box;box-shadow:0 0 4px rgba(2,14,34,0.06);">';
  html += _ontPointer(pointer);

  // Header row (title + close)
  if (hasHeader || hasClose) {
    html += '<div style="display:flex;align-items:center;gap:24px;width:100%;">';
    if (hasHeader) {
      html += '<div style="flex:1 0 0;min-width:0;font-family:\'Proxima Soft\',system-ui;font-size:18px;line-height:23px;font-weight:700;letter-spacing:0.25px;color:#0A2757;">Header</div>';
    } else {
      html += '<div style="flex:1 0 0;min-width:0;"></div>';
    }
    if (hasClose) html += _ontClose();
    html += '</div>';
  }

  if (hasDesc) {
    var marginTop = (hasHeader || hasClose) ? 4 : 0;
    html += '<div style="font-family:\'BarkAda\',\'Proxima Soft\',system-ui;font-size:12px;line-height:18px;font-weight:600;color:#6780A9;margin-top:' + marginTop + 'px;">Description goes here</div>';
  }

  html += '</div>';
  return html;
}

function _ontRender(opts) {
  return '<div style="display:flex;justify-content:center;align-items:center;width:100%;padding:40px 12px;">' +
    _ontBody(opts) +
  '</div>';
}

function _ontRenderInner(opts) {
  return _ontBody(opts);
}

function updateOntDemo() {
  var getVal = function (id, fallback) { var el = document.getElementById(id); return el ? el.value : fallback; };
  var el = document.getElementById('ont-demo-preview');
  if (!el) return;
  el.innerHTML = _ontRender({
    pointer: getVal('ont-ctrl-pointer', 'top'),
    header: 'true',
    description: 'true',
    close: 'true'
  });
}

/* ── Spec cards ─────────────────────────────────────────────────────── */
var _specCards = {
  'top':    { pointer: 'top',    header: 'true', description: 'true', close: 'true' },
  'bottom': { pointer: 'bottom', header: 'true', description: 'true', close: 'true' },
  'left':   { pointer: 'left',   header: 'true', description: 'true', close: 'true' },
  'right':  { pointer: 'right',  header: 'true', description: 'true', close: 'true' }
};
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var p = card.pointer || 'top';
  var lines = ['EBOnboardingTooltip("' + (card.header === 'true' ? 'Heading' : '') + '")'];
  if (card.description === 'true') lines.push('    .ebDescription("Onboarding hint")');
  lines.push('    .ebPointer(.' + p + ')');
  if (card.close === 'true') lines.push('    .ebOnDismiss({ })');
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var p = (card.pointer || 'top');
  var P = p.charAt(0).toUpperCase() + p.slice(1);
  var lines = ['EBOnboardingTooltip('];
  lines.push('    title = ' + (card.header === 'true' ? '"Heading"' : 'null') + ',');
  lines.push('    description = ' + (card.description === 'true' ? '"Onboarding hint"' : 'null') + ',');
  lines.push('    pointer = EBPointer.' + P + ',');
  lines.push('    onDismiss = ' + (card.close === 'true' ? '{ }' : 'null'));
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview — replace inner content of `ont-spec-${cardStyle}-preview` */
  var previewEl = document.getElementById('ont-spec-' + cardStyle + '-preview');
  if (previewEl) {
    previewEl.innerHTML = _ontRenderInner({
      pointer: card.pointer,
      header: card.header,
      description: card.description,
      close: card.close
    });
  }

  /* Update Properties text — data-sp="${cardStyle}-${prop}" for each tracked prop */
  ['pointer', 'header', 'description', 'close'].forEach(function (p) {
    var spEl = document.querySelector('[data-sp="' + cardStyle + '-' + p + '"]');
    if (!spEl) return;
    var hex = spEl.querySelector('.spec-prop-hex');
    if (hex) hex.textContent = card[p];
    else spEl.textContent = card[p];
  });

  /* Update DEV code — locate via `[data-code-content="${cardStyle}"]`. */
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

function _ontSyncSelects() {
  /* For each card, sync its dropdowns to the card's actual values
     (since defaultValue in DemoControlSection is shared across cards).
     Locate the spec-card via its DES data-view, then walk up. */
  Object.keys(_specCards).forEach(function (key) {
    var anchor = document.querySelector('[data-view="' + key + '-des"]');
    if (!anchor) return;
    var card$ = anchor.closest('.spec-card');
    if (!card$) return;
    var card = _specCards[key];
    var rows = card$.querySelectorAll('.demo-figma-panel .demo-panel-row');
    rows.forEach(function (row) {
      var label = row.querySelector('.demo-panel-label');
      var sel   = row.querySelector('select');
      if (!label || !sel) return;
      var prop = label.textContent.trim();
      var v = card[prop];
      if (v == null) return;
      for (var i = 0; i < sel.options.length; i++) {
        if (sel.options[i].value === v) { sel.selectedIndex = i; break; }
      }
    });
  });
}

function _ontInit() {
  updateOntDemo();
  Object.keys(_specCards).forEach(function(k) {
    updateSpecCard(k, 'pointer', _specCards[k].pointer);
  });
  _ontSyncSelects();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _ontInit);
else _ontInit();

document.addEventListener('astro:page-load', _ontInit);
