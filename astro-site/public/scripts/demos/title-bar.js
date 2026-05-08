/* Auto-extracted from assessment-src/components/title-bar.html.
 * Powers the live-preview dropdowns/toggles for the title-bar component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs title-bar
 */
/* ── Title Bar Component JS ──────────────────────────────────────────── */

/* ── HTML-based preview builder ────────────────────────────────────── */
function _tbBuildHtml(opts) {
  var leadIcon = opts.leadingIcon === 'yes';
  var trailIcon = opts.trailingIcon === 'yes';
  var leadCtrl = opts.leadingControl === 'yes';
  var subtext = opts.subtext === 'yes';
  var titleBlock = opts.titleBlock === 'yes';

  var bg = '#1972F9';
  var w = 360;

  /* Heights */
  var statusH = 44;
  var titleRowH = subtext ? 56 : 40;
  var blockH = titleBlock ? 72 : 0;

  var h = '';
  h += '<div style="width:' + w + 'px;max-width:100%;background:' + bg + ';border-radius:4px;overflow:hidden;font-family:Proxima Soft,system-ui,sans-serif;color:#FFF;">';

  /* ── Status bar ── */
  h += '<div style="height:' + statusH + 'px;display:flex;align-items:flex-end;padding:0 20px 8px;justify-content:space-between;font-size:12px;font-weight:600;">';
  h += '<span>9:41</span>';
  h += '<span style="display:flex;gap:4px;align-items:center;">';
  h += '<svg width="16" height="12" viewBox="0 0 16 12"><rect x="0" y="8" width="3" height="4" rx="0.5" fill="#FFF"/><rect x="4" y="5" width="3" height="7" rx="0.5" fill="#FFF"/><rect x="8" y="2" width="3" height="10" rx="0.5" fill="#FFF"/><rect x="12" y="0" width="3" height="12" rx="0.5" fill="#FFF"/></svg>';
  h += '<svg width="14" height="12" viewBox="0 0 14 12"><path d="M7 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="#FFF" transform="translate(0,-2)"/><path d="M3.5 7.5C4.8 6.2 5.9 5.5 7 5.5s2.2.7 3.5 2" stroke="#FFF" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M1 4.5C3 2.5 5 1.5 7 1.5s4 1 6 3" stroke="#FFF" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>';
  h += '<svg width="22" height="12" viewBox="0 0 22 12"><rect x="0" y="1" width="19" height="10" rx="2" stroke="#FFF" stroke-width="1" fill="none"/><rect x="2" y="3" width="15" height="6" rx="1" fill="#FFF"/><rect x="20" y="4" width="2" height="4" rx="0.5" fill="#FFF"/></svg>';
  h += '</span>';
  h += '</div>';

  /* ── Title row ──
     Title is absolutely positioned so it stays visually centered in the bar
     regardless of whether leading/trailing icons are present. */
  h += '<div style="display:flex;align-items:' + (subtext ? 'flex-start' : 'center') + ';padding:12px 20px;position:relative;min-height:' + (titleRowH - 24) + 'px;">';

  if (leadIcon) {
    h += '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;margin-right:12px;' + (subtext ? 'margin-top:2px;' : '') + '"><path d="M15 18l-6-6 6-6" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  h += '<div style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);text-align:center;pointer-events:none;width:max-content;max-width:60%;">';
  h += '<div style="font-size:16px;font-weight:600;letter-spacing:0.25px;line-height:16px;">Title</div>';
  if (subtext) {
    h += '<div style="font-size:12px;font-weight:600;letter-spacing:0.5px;line-height:12px;opacity:0.8;margin-top:6px;">m.gcash.com</div>';
  }
  h += '</div>';

  /* Spacer flex item so the trailing element sits on the right edge */
  h += '<div style="flex:1;"></div>';

  if (trailIcon && !leadCtrl) {
    h += '<div style="width:24px;height:24px;border-radius:12px;border:2px solid rgba(255,255,255,0.6);flex-shrink:0;margin-left:12px;' + (subtext ? 'margin-top:2px;' : '') + '"></div>';
  } else if (leadCtrl) {
    h += '<span style="font-size:14px;font-weight:600;letter-spacing:0.25px;flex-shrink:0;margin-left:12px;' + (subtext ? 'margin-top:2px;' : '') + '">Done</span>';
  }

  h += '</div>';

  if (titleBlock) {
    h += '<div style="height:' + blockH + 'px;padding:0 24px;display:flex;align-items:center;">';
    h += '<div style="font-size:26px;font-weight:600;letter-spacing:0.85px;line-height:31px;">Header</div>';
    h += '</div>';
  }

  h += '</div>';
  return h;
}

/* ── Live Preview Demo ─────────────────────────────────────────── */
function updateTitleBarDemo() {
  var opts = {
    leadingIcon: document.getElementById('tb-demo-leadingIcon').value,
    trailingIcon: document.getElementById('tb-demo-trailingIcon').value,
    leadingControl: document.getElementById('tb-demo-leadingControl').value,
    subtext: document.getElementById('tb-demo-subtext').value,
    titleBlock: document.getElementById('tb-demo-titleBlock').value
  };
  var el = document.getElementById('tb-demo-preview');
  if (el) el.innerHTML = _tbBuildHtml(opts);
}

/* ── Spec Cards (canonical) ──────────────────────────────────────── */
var _specCards = {
  standard:   { leadingIcon: 'yes', trailingIcon: 'no', leadingControl: 'no', subtext: 'no', titleBlock: 'no' },
  titleblock: { leadingIcon: 'yes', trailingIcon: 'no', leadingControl: 'no', subtext: 'no', titleBlock: 'yes' }
};
window._specCards = _specCards;

function buildSwiftSnippet(type, card) {
  var s = 'EBTitleBar("Title")';
  if (card.leadingIcon === 'yes')    s += '\n    .ebLeadingIcon(Image(systemName: "arrow.left"))';
  if (card.trailingIcon === 'yes')   s += '\n    .ebTrailingIcon(Image(systemName: "ellipsis"))';
  if (card.leadingControl === 'yes') s += '\n    .ebLeadingControl("Done")';
  if (card.subtext === 'yes')        s += '\n    .ebSubtext("m.gcash.com")';
  if (card.titleBlock === 'yes')     s += '\n    .ebTitleBlock("Header")';
  return s;
}

function buildComposeSnippet(type, card) {
  var lines = ['    title = "Title"'];
  if (card.leadingIcon === 'yes')    lines.push('    leadingIcon = { Icon(Icons.Default.ArrowBack, "Back") }');
  if (card.trailingIcon === 'yes')   lines.push('    trailingIcon = { Icon(Icons.Default.MoreVert, "More") }');
  if (card.leadingControl === 'yes') lines.push('    leadingControlText = "Done"');
  if (card.subtext === 'yes')        lines.push('    subtext = "m.gcash.com"');
  if (card.titleBlock === 'yes')     lines.push('    titleBlock = "Header"');
  return 'EBTitleBar(\n' + lines.join(',\n') + '\n)';
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  /* Update preview — titleblock card always has titleBlock=yes */
  var renderOpts = {
    leadingIcon: card.leadingIcon,
    trailingIcon: card.trailingIcon,
    leadingControl: card.leadingControl,
    subtext: card.subtext,
    titleBlock: cardStyle === 'titleblock' ? 'yes' : 'no'
  };
  var previewRoot = document.getElementById('spec-' + cardStyle + '-preview');
  if (previewRoot) previewRoot.innerHTML = _tbBuildHtml(renderOpts);

  /* Update Properties readouts */
  ['leadingIcon', 'trailingIcon', 'leadingControl', 'subtext'].forEach(function(p) {
    var sp = document.querySelector('[data-sp="' + cardStyle + '-' + p + '"]');
    if (sp) sp.textContent = card[p];
  });

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

/* ── Init ──────────────────────────────────────────────────────── */
function _tbInit() {
  if (document.getElementById('tb-demo-preview')) updateTitleBarDemo();
  Object.keys(_specCards).forEach(function(k) {
    updateSpecCard(k, 'leadingIcon', _specCards[k].leadingIcon);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _tbInit);
} else {
  _tbInit();
}

/* Re-init after Astro view-transition swaps */
document.addEventListener('astro:page-load', _tbInit);
