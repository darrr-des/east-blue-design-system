/* Auto-extracted from assessment-src/components/alert.html.
 * Powers the live-preview dropdowns/toggles for the alert component page.
 * Re-extract via: node astro-site/scripts/extract-demos.mjs alert
 */
/* ── Alert JS ───────────────────────────────────────────────────── */
/* Pixel-accurate replica of node 18444:2012 variants.
   Two layouts (banner / card) distinguished by the fullWidth axis.
   Content (title + description) is editable via demo-panel inputs;
   all 5 property dropdowns flip the preview live.                   */

function _alertIconRightSvg(type) {
  // 32×32 vector glyph per semantic type. currentColor from CSS var.
  var fill = 'var(--alert-icon)';
  if (type === 'information') {
    return '<svg class="eb-preview-alert__icon-right" viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
      '<circle cx="16" cy="16" r="13" stroke="' + fill + '" stroke-width="2" fill="none"/>' +
      '<circle cx="16" cy="10" r="1.6" fill="' + fill + '"/>' +
      '<rect x="14.5" y="13.5" width="3" height="10" rx="1" fill="' + fill + '"/>' +
    '</svg>';
  }
  if (type === 'warning') {
    return '<svg class="eb-preview-alert__icon-right" viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
      '<path d="M16 5 L29 27 L3 27 Z" stroke="' + fill + '" stroke-width="2" fill="none" stroke-linejoin="round"/>' +
      '<rect x="14.8" y="13" width="2.4" height="7" rx="1" fill="' + fill + '"/>' +
      '<circle cx="16" cy="23" r="1.4" fill="' + fill + '"/>' +
    '</svg>';
  }
  if (type === 'error') {
    return '<svg class="eb-preview-alert__icon-right" viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
      '<circle cx="16" cy="16" r="13" stroke="' + fill + '" stroke-width="2" fill="none"/>' +
      '<rect x="14.8" y="8" width="2.4" height="11" rx="1" fill="' + fill + '"/>' +
      '<circle cx="16" cy="22.5" r="1.5" fill="' + fill + '"/>' +
    '</svg>';
  }
  if (type === 'success') {
    return '<svg class="eb-preview-alert__icon-right" viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
      '<circle cx="16" cy="16" r="13" stroke="' + fill + '" stroke-width="2" fill="none"/>' +
      '<path d="M10 16.5 L14.5 21 L23 12.5" stroke="' + fill + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
    '</svg>';
  }
  // neutral — a generic dot
  return '<svg class="eb-preview-alert__icon-right" viewBox="0 0 32 32" fill="none" aria-hidden="true">' +
    '<circle cx="16" cy="16" r="13" stroke="' + fill + '" stroke-width="2" fill="none"/>' +
  '</svg>';
}

function _alertChevronSvg() {
  return '<svg class="eb-preview-alert__action-chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
  '</svg>';
}

function _alertRender(opts) {
  var type       = opts.type || 'information';
  var isBanner   = (opts.fullWidth !== 'no');
  var leftIcon   = opts.leftIcon === 'yes';
  var rightIcon  = opts.rightIcon === 'yes';
  var showDesc   = opts.showDesc !== 'no';
  var title      = opts.title || '\u00A0';
  var desc       = opts.desc || '';

  var styleClass = isBanner ? 'eb-preview-alert--banner' : 'eb-preview-alert--card';
  var colorClass = 'eb-preview-alert--' + type;

  var html = '<div class="eb-preview eb-preview-alert ' + styleClass + ' ' + colorClass + '">';

  // Left-icon slot — today a placeholder circle
  if (leftIcon && isBanner) {
    html += '<div class="eb-preview-alert__icon-left" aria-hidden="true"></div>';
  }

  html += '<div class="eb-preview-alert__content">';
  html += '<p class="eb-preview-alert__title">' + _alertEscape(title) + '</p>';
  if (showDesc && desc) {
    html += '<p class="eb-preview-alert__desc">' + _alertEscape(desc) + '</p>';
  }
  // Card variant always ships the Learn More action per Figma
  if (!isBanner) {
    html += '<span class="eb-preview-alert__action">Learn More' + _alertChevronSvg() + '</span>';
  }
  html += '</div>';

  // Right-icon slot — semantic glyph. Banner + card both support it.
  if (rightIcon) {
    html += _alertIconRightSvg(type);
  }

  html += '</div>';
  return html;
}

function _alertEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function _alertContextMarkup() {
  // Three realistic in-product examples: payment banner, form warning card,
  // success confirmation banner — all different types/styles.
  return '<div class="eb-preview-stack eb-preview-stack--center eb-preview-stack--gap-lg">' +
    _alertRender({
      type:'information', fullWidth:'no', leftIcon:'no', rightIcon:'yes', showDesc:'yes',
      title:'Your ID is being reviewed',
      desc:'We\'ll notify you within 24 hours. You can continue using GCash normally in the meantime.'
    }) +
    _alertRender({
      type:'warning', fullWidth:'yes', leftIcon:'no', rightIcon:'yes', showDesc:'yes',
      title:'Transaction limit approaching',
      desc:'You\'ve used 80% of this month\'s ₱50,000 transfer limit.'
    }) +
    _alertRender({
      type:'success', fullWidth:'yes', leftIcon:'no', rightIcon:'yes', showDesc:'no',
      title:'Transfer completed successfully',
      desc:''
    }) +
  '</div>';
}

function _alertUpdate() {
  var type      = document.getElementById('alert-ctrl-type');
  var fullWidth = document.getElementById('alert-ctrl-fullwidth');
  var leftIcon  = document.getElementById('alert-ctrl-lefticon');
  var rightIcon = document.getElementById('alert-ctrl-righticon');
  var showDesc  = document.getElementById('alert-ctrl-showdesc');
  var title     = document.getElementById('alert-ctrl-title');
  var desc      = document.getElementById('alert-ctrl-desc');
  var preview   = document.getElementById('alert-demo-preview');
  if (!preview) return;
  preview.innerHTML = _alertRender({
    type:      type ? type.value : 'information',
    fullWidth: fullWidth ? fullWidth.value : 'yes',
    leftIcon:  leftIcon ? leftIcon.value : 'no',
    rightIcon: rightIcon ? rightIcon.value : 'yes',
    showDesc:  showDesc ? showDesc.value : 'yes',
    title:     title ? title.value : 'This is for the title.',
    desc:      desc ? desc.value : 'This is the description. Put the description here.'
  });
}

function _alertInit() {
  var ctx = document.getElementById('alert-context-preview');
  if (ctx) ctx.innerHTML = _alertContextMarkup();
  _alertUpdate();

  // Spec card 1 — Information banner
  var s1 = document.getElementById('alert-spec-1');
  if (s1) s1.innerHTML = _alertRender({
    type:'information', fullWidth:'yes', leftIcon:'no', rightIcon:'yes', showDesc:'yes',
    title:'This is for the title.',
    desc:'This is the description. Put the description here.'
  });

  // Spec card 2 — Information accent card
  var s2 = document.getElementById('alert-spec-2');
  if (s2) s2.innerHTML = _alertRender({
    type:'information', fullWidth:'no', leftIcon:'no', rightIcon:'yes', showDesc:'yes',
    title:'This is for the title.',
    desc:'This is the description. Put the description here. This is the description. Put the description here.'
  });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _alertInit);
else _alertInit();

/* ── Alert Spec Card JS (Button-quality interactive spec cards) ─────── */
var _alertTypeColors = {
  information: { bg: '#E5F1FF', title: '#072592', desc: '#072592', icon: '#2340A9', bgToken: 'main/alert/color/information/bg', titleToken: 'main/alert/color/information/label-title', descToken: 'main/alert/color/information/description', iconToken: 'main/alert/color/information/icon' },
  warning:     { bg: '#FFF9EB', title: '#6C5009', desc: '#6C5009', icon: '#966F0B', bgToken: 'main/alert/color/warning/bg', titleToken: 'main/alert/color/warning/label-title', descToken: 'main/alert/color/warning/description', iconToken: 'main/alert/color/warning/icon' },
  error:       { bg: '#FEECEB', title: '#5F1410', desc: '#5F1410', icon: '#B0231C', bgToken: 'main/alert/color/error/bg', titleToken: 'main/alert/color/error/label-title', descToken: 'main/alert/color/error/description', iconToken: 'main/alert/color/error/icon' },
  success:     { bg: '#E4F7ED', title: '#0B3E23', desc: '#0B3E23', icon: '#188A47', bgToken: 'main/alert/color/success/bg', titleToken: 'main/alert/color/success/label-title', descToken: 'main/alert/color/success/description', iconToken: 'main/alert/color/success/icon' },
  neutral:     { bg: '#F4F6FA', title: '#0A2757', desc: '#0A2757', icon: '#6780A9', bgToken: 'main/alert/color/neutral/bg', titleToken: 'main/alert/color/neutral/label-title', descToken: 'main/alert/color/neutral/description', iconToken: 'main/alert/color/neutral/icon' }
};

var _alertSpec = {
  banner: { type: 'information', leftIcon: false, rightIcon: true, description: true },
  card:   { type: 'information' }
};

/* Expose for shared utilities — `switchCodeTab` reads this when the
   user clicks SwiftUI / Compose so it can rebuild the snippet. */
var _specCards = _alertSpec;
window._specCards = _specCards;

/* ── Code snippet builders ───────────────────────────────────────── */
function buildSwiftSnippet(type, card) {
  var t = card.type || 'information';
  var lines = [];
  if (type === 'banner') {
    lines.push('EBAlert(');
    lines.push('    type: .' + t + ',');
    lines.push('    title: "This is for the title.",');
    lines.push('    description: "This is the description."');
    lines.push(')');
    lines.push('.ebStyle(.banner)');
  } else {
    lines.push('EBAlert(');
    lines.push('    type: .' + t + ',');
    lines.push('    title: "This is for the title.",');
    lines.push('    description: "This is the description."');
    lines.push(') {');
    lines.push('    EBTextButton("Learn More") { /* action */ }');
    lines.push('}');
    lines.push('.ebStyle(.card)');
  }
  return lines.join('\n');
}

function buildComposeSnippet(type, card) {
  var t = (card.type || 'information');
  var tCap = t.charAt(0).toUpperCase() + t.slice(1);
  var styleCap = type === 'banner' ? 'Banner' : 'Card';
  var lines = [];
  lines.push('EBAlert(');
  lines.push('    type = EBAlertType.' + tCap + ',');
  lines.push('    style = EBAlertStyle.' + styleCap + ',');
  lines.push('    title = "This is for the title.",');
  lines.push('    description = "This is the description."');
  if (type === 'card') {
    lines[lines.length - 1] += ',';
    lines.push('    action = { EBTextButton("Learn More", onClick = { }) }');
  }
  lines.push(')');
  return lines.join('\n');
}

function getSnippet(type, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(type, card) : buildComposeSnippet(type, card);
}
window.getSnippet = getSnippet;

function _alertBuildBannerPreview(state) {
  var c = _alertTypeColors[state.type] || _alertTypeColors.information;
  var html = '<div style="display:inline-flex;align-items:flex-start;gap:8px;padding:12px 16px;width:360px;box-sizing:border-box;background:' + c.bg + ';border-radius:4px;box-shadow:0 1px 3px rgba(232,238,242,0.79);font-family:\'Proxima Soft\', system-ui, sans-serif;">';
  if (state.leftIcon) {
    html += '<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:' + c.icon + ';opacity:.35;"></div>';
  }
  html += '<div style="flex:1;min-width:0;">';
  html += '<div style="font-weight:700;font-size:16px;line-height:20px;color:' + c.title + ';letter-spacing:0.25px;">This is for the title.</div>';
  if (state.description) {
    html += '<div style="margin-top:4px;font-family:\'BarkAda\', system-ui;font-weight:600;font-size:12px;line-height:18px;color:' + c.desc + ';opacity:.8;">This is the description.</div>';
  }
  html += '</div>';
  if (state.rightIcon) {
    html += '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;"><circle cx="12" cy="12" r="10" stroke="' + c.icon + '" stroke-width="1.6" fill="none"/><path d="M12 16v-5M12 8h.01" stroke="' + c.icon + '" stroke-width="1.6" stroke-linecap="round"/></svg>';
  }
  html += '</div>';
  return html;
}

function _alertBuildCardPreview(state) {
  var c = _alertTypeColors[state.type] || _alertTypeColors.information;
  var html = '<div style="width:328px;box-sizing:border-box;background:#FFFFFF;border-radius:6px;border-left:6px solid ' + c.icon + ';padding:16px;box-shadow:0 1px 3px rgba(115,129,154,0.1);font-family:\'Proxima Soft\', system-ui, sans-serif;">';
  html += '<div style="display:flex;align-items:flex-start;gap:8px;">';
  html += '<div style="flex:1;min-width:0;">';
  html += '<div style="font-weight:700;font-size:18px;line-height:23px;color:' + c.title + ';letter-spacing:0.25px;">This is for the title.</div>';
  html += '<div style="margin-top:4px;font-family:\'BarkAda\', system-ui;font-weight:600;font-size:12px;line-height:18px;color:' + c.desc + ';opacity:.8;">This is the description. Put the description here.</div>';
  html += '</div>';
  html += '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;"><circle cx="12" cy="12" r="10" stroke="' + c.icon + '" stroke-width="1.6" fill="none"/><path d="M12 16v-5M12 8h.01" stroke="' + c.icon + '" stroke-width="1.6" stroke-linecap="round"/></svg>';
  html += '</div>';
  html += '<div style="margin-top:8px;display:inline-flex;align-items:center;gap:4px;font-weight:700;font-size:14px;color:' + c.icon + ';">Learn More <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3l5 5-5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
  html += '</div>';
  return html;
}

function _alertBuildColorProps(card) {
  var c = _alertTypeColors[card.type] || _alertTypeColors.information;
  var _sw = function(hex){ return '<span class="spec-swatch" style="background:'+hex+';'+ (hex.indexOf('FF') !== -1 ? 'border:1px solid #E5EBF4' : '') +'"></span> '; };
  var html = '';
  html += '<div class="spec-prop"><span class="spec-prop-key">Background</span><span class="spec-prop-val mono">' + _sw(c.bg) + c.bg + '</span></div>';
  html += '<div class="spec-prop"><span class="spec-prop-key">Title</span><span class="spec-prop-val mono">' + _sw(c.title) + c.title + '</span></div>';
  html += '<div class="spec-prop"><span class="spec-prop-key">Description</span><span class="spec-prop-val mono">' + _sw(c.desc) + c.desc + ' @ 80%</span></div>';
  html += '<div class="spec-prop"><span class="spec-prop-key">Icon / accent</span><span class="spec-prop-val mono">' + _sw(c.icon) + c.icon + '</span></div>';
  html += '<div class="spec-prop"><span class="spec-prop-key">Bg token</span><span class="spec-prop-val mono">' + c.bgToken + '</span></div>';
  html += '<div class="spec-prop"><span class="spec-prop-key">Title token</span><span class="spec-prop-val mono">' + c.titleToken + '</span></div>';
  html += '<div class="spec-prop"><span class="spec-prop-key">Description token</span><span class="spec-prop-val mono">' + c.descToken + '</span></div>';
  html += '<div class="spec-prop"><span class="spec-prop-key">Icon token</span><span class="spec-prop-val mono">' + c.iconToken + '</span></div>';
  return html;
}

function _renderAlertSpecCard(card) {
  var state = _alertSpec[card];
  if (!state) return;
  // Update preview
  var preview = document.getElementById('spec-alert-' + card + '-preview');
  if (preview) {
    preview.innerHTML = card === 'banner' ? _alertBuildBannerPreview(state) : _alertBuildCardPreview(state);
  }
  // Update colors section
  var colorsEl = document.getElementById('spec-alert-' + card + '-colors');
  if (colorsEl) colorsEl.innerHTML = _alertBuildColorProps(state);
}

function updateAlertSpecCard(card, prop, val) {
  return updateSpecCard(card, prop, val);
}

function updateSpecCard(card, prop, val) {
  var state = _alertSpec[card];
  if (!state) return;
  state[prop] = val;

  // Update Properties readout (data-sp matches `${demoKey}-${prop}`)
  var readout = document.querySelector('[data-sp="' + card + '-' + prop + '"]');
  if (readout) {
    var display = (typeof val === 'string') ? val.charAt(0).toUpperCase() + val.slice(1) : String(val);
    readout.textContent = display;
  }

  // Re-render preview
  _renderAlertSpecCard(card);

  // Update Colors section (id `spec-${card}-colors`)
  var c = _alertTypeColors[state.type] || _alertTypeColors.information;
  var colorsEl = document.getElementById('spec-' + card + '-colors');
  if (colorsEl) {
    var rows;
    if (card === 'banner') {
      rows = [
        ['Background',     c.bg,    c.bgToken],
        ['Title',          c.title, c.titleToken],
        ['Description',    c.desc,  c.descToken],
        ['Icon / accent',  c.icon,  c.iconToken]
      ];
    } else {
      rows = [
        ['Surface',        '#FFFFFF', 'surface/default'],
        ['Border accent',  c.icon,    c.iconToken],
        ['Title',          c.title,   c.titleToken],
        ['Description',    c.desc,    c.descToken],
        ['Action link',    '#005CE5', 'alert/color/info/label-link']
      ];
    }
    var h = '<div class="spec-detail-label">Colors</div><div class="spec-props">';
    rows.forEach(function(r) {
      var border = (r[1] === '#FFFFFF') ? 'border:1px solid #E5EBF4' : '';
      h += '<div class="spec-prop has-token"><span class="spec-prop-key">' + r[0] + '</span>'
         + '<span class="spec-prop-val mono"><span class="spec-swatch" style="background:' + r[1] + ';' + border + '"></span> ' + r[1] + '</span>'
         + '<span class="spec-token-name">' + r[2] + '</span></div>';
    });
    h += '</div>';
    colorsEl.innerHTML = h;
  }

  // DEV code update (always — even when DEV view hidden)
  var devView = document.querySelector('[data-view="' + card + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && activeTab.textContent.toLowerCase().indexOf('swift') !== -1 ? 'swift' : 'compose';
    var codeEl = devView.querySelector('[data-code-content="' + card + '"]');
    if (codeEl) {
      var code = getSnippet(card, lang, state);
      codeEl.setAttribute('data-final', code);
      codeEl.setAttribute('data-lang', lang);
      codeEl.textContent = code;
      if (typeof window.highlightSyntax === 'function') window.highlightSyntax(codeEl);
    }
  }
}

function toggleAlertSpecMode(cardKey, toggleEl) {
  var labels = toggleEl.querySelectorAll('.spec-mode-label');
  var isDes = labels[0].classList.contains('active');
  labels[0].classList.toggle('active', !isDes);
  labels[1].classList.toggle('active', isDes);
  var desEl = document.querySelector('[data-view="' + cardKey + '-des"]');
  var devEl = document.querySelector('[data-view="' + cardKey + '-dev"]');
  if (desEl) desEl.style.display = isDes ? 'none' : '';
  if (devEl) devEl.style.display = isDes ? '' : 'none';
}

function switchAlertCodeTab(tabBtn, lang, cardKey) {
  var block = tabBtn.closest('.spec-card-code');
  if (!block) return;
  block.querySelectorAll('.spec-code-tab').forEach(function(t) { t.classList.remove('active'); });
  tabBtn.classList.add('active');
  block.querySelectorAll('.spec-code-block').forEach(function(pre) {
    pre.style.display = pre.getAttribute('data-lang') === lang ? '' : 'none';
  });
}

function _alertInitSpecCards() {
  updateSpecCard('banner', 'type', _alertSpec.banner.type);
  updateSpecCard('card', 'type', _alertSpec.card.type);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _alertInitSpecCards);
else _alertInitSpecCards();
document.addEventListener('astro:page-load', _alertInitSpecCards);
