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
  var totalH = statusH + titleRowH + blockH;

  var h = '';
  h += '<div style="width:' + w + 'px;max-width:100%;background:' + bg + ';border-radius:4px;overflow:hidden;font-family:HeyMeow Rnd,system-ui,sans-serif;color:#FFF;">';

  /* ── Status bar ── */
  h += '<div style="height:' + statusH + 'px;display:flex;align-items:flex-end;padding:0 20px 8px;justify-content:space-between;font-size:12px;font-weight:600;">';
  h += '<span>9:41</span>';
  h += '<span style="display:flex;gap:4px;align-items:center;">';
  /* signal bars */
  h += '<svg width="16" height="12" viewBox="0 0 16 12"><rect x="0" y="8" width="3" height="4" rx="0.5" fill="#FFF"/><rect x="4" y="5" width="3" height="7" rx="0.5" fill="#FFF"/><rect x="8" y="2" width="3" height="10" rx="0.5" fill="#FFF"/><rect x="12" y="0" width="3" height="12" rx="0.5" fill="#FFF"/></svg>';
  /* wifi */
  h += '<svg width="14" height="12" viewBox="0 0 14 12"><path d="M7 10.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="#FFF" transform="translate(0,-2)"/><path d="M3.5 7.5C4.8 6.2 5.9 5.5 7 5.5s2.2.7 3.5 2" stroke="#FFF" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M1 4.5C3 2.5 5 1.5 7 1.5s4 1 6 3" stroke="#FFF" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>';
  /* battery */
  h += '<svg width="22" height="12" viewBox="0 0 22 12"><rect x="0" y="1" width="19" height="10" rx="2" stroke="#FFF" stroke-width="1" fill="none"/><rect x="2" y="3" width="15" height="6" rx="1" fill="#FFF"/><rect x="20" y="4" width="2" height="4" rx="0.5" fill="#FFF"/></svg>';
  h += '</span>';
  h += '</div>';

  /* ── Title row ── */
  h += '<div style="display:flex;align-items:' + (subtext ? 'flex-start' : 'center') + ';padding:12px 20px;position:relative;min-height:' + (titleRowH - 24) + 'px;">';

  /* Leading icon */
  if (leadIcon) {
    h += '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;margin-right:12px;' + (subtext ? 'margin-top:2px;' : '') + '"><path d="M15 18l-6-6 6-6" stroke="#FFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  }

  /* Center title area */
  h += '<div style="flex:1;text-align:center;">';
  h += '<div style="font-size:16px;font-weight:600;letter-spacing:0.25px;line-height:16px;">Title</div>';
  if (subtext) {
    h += '<div style="font-size:12px;font-weight:600;letter-spacing:0.5px;line-height:12px;opacity:0.8;margin-top:6px;">m.gcash.com</div>';
  }
  h += '</div>';

  /* Trailing icon or leading control */
  if (trailIcon && !leadCtrl) {
    h += '<div style="width:24px;height:24px;border-radius:12px;border:2px solid rgba(255,255,255,0.6);flex-shrink:0;margin-left:12px;' + (subtext ? 'margin-top:2px;' : '') + '"></div>';
  } else if (leadCtrl) {
    h += '<span style="font-size:14px;font-weight:600;letter-spacing:0.25px;flex-shrink:0;margin-left:12px;' + (subtext ? 'margin-top:2px;' : '') + '">Done</span>';
  }

  h += '</div>';

  /* ── Title block ── */
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

/* ── Spec Card State ──────────────────────────────────────────── */
var _tbSpecCards = {
  'standard': { leadingIcon: 'yes', trailingIcon: 'no', leadingControl: 'no', subtext: 'no', titleBlock: 'no' },
  'titleblock': { leadingIcon: 'yes', trailingIcon: 'no', leadingControl: 'no', subtext: 'no', titleBlock: 'yes' }
};

function updateTbSpecCard(cardType, prop, value) {
  var card = _tbSpecCards[cardType];
  if (!card) return;
  card[prop] = value;

  /* Update preview */
  var previewEl = document.getElementById('tb-spec-' + cardType + '-preview');
  if (previewEl) previewEl.innerHTML = _tbBuildHtml(card);

  /* Update property labels */
  var props = ['leadingIcon', 'trailingIcon', 'leadingControl', 'subtext'];
  props.forEach(function(p) {
    var sp = document.querySelector('[data-sp="tb-' + cardType + '-' + p + '"]');
    if (sp) sp.textContent = card[p];
  });

  /* Update colors section */
  var colorsEl = document.getElementById('tb-spec-' + cardType + '-colors');
  if (colorsEl) {
    var ch = '<div class="spec-detail-label">Colors</div><div class="spec-props">';
    ch += '<div class="spec-prop"><span class="spec-prop-key">Background</span><span class="spec-prop-val mono"><span class="spec-swatch" style="background:#1972F9"></span> #1972F9<span class="spec-token-name">main/title-bar/color/bg</span></span></div>';
    ch += '<div class="spec-prop"><span class="spec-prop-key">Title</span><span class="spec-prop-val mono"><span class="spec-swatch" style="background:#FFFFFF;border:1px solid #E2E4E9"></span> #FFFFFF<span class="spec-token-name">main/title-bar/color/label-title</span></span></div>';
    if (card.subtext === 'yes') {
      ch += '<div class="spec-prop"><span class="spec-prop-key">Subtext</span><span class="spec-prop-val mono"><span class="spec-swatch" style="background:rgba(246,249,253,0.8);border:1px solid #E2E4E9"></span> #F6F9FDCC<span class="spec-token-name">main/title-bar/color/label-url</span></span></div>';
    }
    if (card.leadingIcon === 'yes' || card.trailingIcon === 'yes') {
      ch += '<div class="spec-prop"><span class="spec-prop-key">Icon</span><span class="spec-prop-val mono"><span class="spec-swatch" style="background:#FFFFFF;border:1px solid #E2E4E9"></span> #FFFFFF<span class="spec-token-name">main/title-bar/color/icon</span></span></div>';
    }
    if (card.leadingControl === 'yes') {
      ch += '<div class="spec-prop"><span class="spec-prop-key">CTA text</span><span class="spec-prop-val mono"><span class="spec-swatch" style="background:#FFFFFF;border:1px solid #E2E4E9"></span> #FFFFFF<span class="spec-token-name">main/title-bar/color/label-cta</span></span></div>';
    }
    if (card.titleBlock === 'yes') {
      ch += '<div class="spec-prop"><span class="spec-prop-key">Header</span><span class="spec-prop-val mono"><span class="spec-swatch" style="background:#FFFFFF;border:1px solid #E2E4E9"></span> #FFFFFF<span class="spec-token-name">main/title-bar/color/label-header</span></span></div>';
    }
    ch += '</div>';
    colorsEl.innerHTML = ch;
  }

  /* Update layout section */
  var layoutEl = document.getElementById('tb-spec-' + cardType + '-layout');
  if (layoutEl) {
    var hasSubtext = card.subtext === 'yes';
    var hasTB = card.titleBlock === 'yes';
    var titleRowH = hasSubtext ? 56 : 40;
    var totalH = 44 + titleRowH + (hasTB ? 72 : 0);

    var lh = '<div class="spec-detail-label">Layout</div><div class="spec-props">';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Total height</span><span class="spec-prop-val mono">~' + totalH + 'px</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Status bar</span><span class="spec-prop-val mono">44px</span></div>';
    lh += '<div class="spec-prop"><span class="spec-prop-key">Title row padding</span><span class="spec-prop-val mono">12px V / 20px H</span></div>';
    if (card.leadingIcon === 'yes') {
      lh += '<div class="spec-prop"><span class="spec-prop-key">Leading icon</span><span class="spec-prop-val mono">24 x 24</span></div>';
    }
    if (card.trailingIcon === 'yes') {
      lh += '<div class="spec-prop"><span class="spec-prop-key">Trailing icon</span><span class="spec-prop-val mono">24 x 24</span></div>';
    }
    if (hasTB) {
      lh += '<div class="spec-prop"><span class="spec-prop-key">Title block height</span><span class="spec-prop-val mono">72px</span></div>';
      lh += '<div class="spec-prop"><span class="spec-prop-key">Title block padding H</span><span class="spec-prop-val mono">24px</span></div>';
    }
    lh += '</div>';
    layoutEl.innerHTML = lh;
  }

  /* Update typography section */
  var typoEl = document.getElementById('tb-spec-' + cardType + '-typo');
  if (typoEl) {
    var th = '<div class="spec-detail-label">Typography</div><div class="spec-props">';
    th += '<div class="spec-prop"><span class="spec-prop-key">Title</span><span class="spec-prop-val mono">Primary/Label/Light/Base -- HeyMeow Rnd Semibold 16px</span></div>';
    if (card.subtext === 'yes') {
      th += '<div class="spec-prop"><span class="spec-prop-key">Subtext</span><span class="spec-prop-val mono">Primary/Label/Light/Fine -- HeyMeow Rnd Semibold 12px</span></div>';
    }
    if (card.leadingControl === 'yes') {
      th += '<div class="spec-prop"><span class="spec-prop-key">CTA</span><span class="spec-prop-val mono">Primary/Label/Light/Small -- HeyMeow Rnd Semibold 14px</span></div>';
    }
    if (card.titleBlock === 'yes') {
      th += '<div class="spec-prop"><span class="spec-prop-key">Header</span><span class="spec-prop-val mono">Primary/Headlines/Light/Area -- HeyMeow Rnd Semibold 26px</span></div>';
    }
    th += '</div>';
    typoEl.innerHTML = th;
  }

  /* Update DEV code snippet */
  var codeEl = document.getElementById('tb-code-' + cardType);
  if (codeEl) {
    var activeTab = codeEl.closest('.spec-card-code');
    if (activeTab) {
      var activeLangBtn = activeTab.querySelector('.spec-code-tab.active');
      var lang = (activeLangBtn && activeLangBtn.textContent.indexOf('COMPOSE') !== -1) ? 'compose' : 'swift';
      var raw = _getTbSnippet(cardType, lang);
      codeEl.setAttribute('data-final', raw);
      codeEl.textContent = raw;
      if (typeof highlightSyntax === 'function') highlightSyntax(codeEl);
    }
  }
}

function _getTbSnippet(cardType, lang) {
  var card = _tbSpecCards[cardType];
  if (!card) return '';

  if (lang === 'swift') {
    var s = 'EBTitleBar("Title")';
    if (card.leadingIcon === 'yes') s += '\n    .ebLeadingIcon(Image(systemName: "arrow.left"))';
    if (card.trailingIcon === 'yes') s += '\n    .ebTrailingIcon(Image(systemName: "ellipsis"))';
    if (card.leadingControl === 'yes') s += '\n    .ebLeadingControl("Done")';
    if (card.subtext === 'yes') s += '\n    .ebSubtext("m.gcash.com")';
    if (card.titleBlock === 'yes') s += '\n    .ebTitleBlock("Header")';
    return s;
  } else {
    var lines = ['EBTitleBar('];
    lines.push('    title = "Title"');
    var params = [];
    if (card.leadingIcon === 'yes') params.push('    leadingIcon = { Icon(Icons.Default.ArrowBack, "Back") }');
    if (card.trailingIcon === 'yes') params.push('    trailingIcon = { Icon(Icons.Default.MoreVert, "More") }');
    if (card.leadingControl === 'yes') params.push('    leadingControlText = "Done"');
    if (card.subtext === 'yes') params.push('    subtext = "m.gcash.com"');
    if (card.titleBlock === 'yes') params.push('    titleBlock = "Header"');
    var all = ['    title = "Title"'].concat(params);
    return 'EBTitleBar(\n' + all.join(',\n') + '\n)';
  }
}

function switchTbCodeTab(tabBtn, lang, cardType) {
  var parent = tabBtn.parentElement;
  parent.querySelectorAll('.spec-code-tab').forEach(function(t) { t.classList.remove('active'); });
  tabBtn.classList.add('active');
  var codeEl = document.getElementById('tb-code-' + cardType);
  if (codeEl) {
    var raw = _getTbSnippet(cardType, lang);
    codeEl.setAttribute('data-final', raw);
    codeEl.textContent = raw;
    if (typeof highlightSyntax === 'function') highlightSyntax(codeEl);
  }
}

function toggleTbSpecMode(type, toggleEl) {
  var labels = toggleEl.querySelectorAll('.spec-mode-label');
  var isDes = labels[0].classList.contains('active');
  labels[0].classList.toggle('active', !isDes);
  labels[1].classList.toggle('active', isDes);
  var desView = document.querySelector('[data-view="' + type + '-des"]');
  var devView = document.querySelector('[data-view="' + type + '-dev"]');
  if (isDes) {
    if (desView) desView.style.display = 'none';
    if (devView) {
      devView.style.display = '';
      var shortType = type.replace('tb-', '');
      var codeEl = devView.querySelector('code');
      if (codeEl) {
        var activeTab = devView.querySelector('.spec-code-tab.active');
        var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
        var raw = _getTbSnippet(shortType, lang);
        codeEl.setAttribute('data-final', raw);
        codeEl.textContent = raw;
        if (typeof highlightSyntax === 'function') highlightSyntax(codeEl);
      }
    }
  } else {
    if (devView) devView.style.display = 'none';
    if (desView) desView.style.display = '';
  }
}

/* ── Init ──────────────────────────────────────────────────────── */
function _tbInit() {
  updateTitleBarDemo();
  ['standard', 'titleblock'].forEach(function(ct) {
    updateTbSpecCard(ct, 'leadingIcon', _tbSpecCards[ct].leadingIcon);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', _tbInit);
} else {
  _tbInit();
}
