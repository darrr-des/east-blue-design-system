/* Button (Button_New) — Style tab demo + Overview preview.
 * Built from Figma component set 17104:184842 (GCash DS Sticker Sheets v2).
 *
 * Panel (set 17104:184842):
 *   Style             · Filled, Outline, Text                   (variant)
 *   State             · Default, Pressed, Disabled              (variant)
 *   Size              · Large, Medium, Small, XSmall, Compact   (variant)
 *   Icon Placement    · None, Leading, Trailing, Icon Only      (variant)
 *   Leading Container · instance swap, 80 items                 (slot — no control)
 *   Label             · text, "Button"
 *   Trailing Container· instance swap, 54 items                 (slot — no control)
 * 3 x 3 x 5 x 4 = 180 variants, all built.
 *
 * Appearance (Default / Destructive / White / Subtle) is a Variable Mode on
 * the parent frame, not a variant axis, so it is a separate panel section.
 *
 * Geometry below is read off get_node_info on the Filled/Default row and
 * get_svg on the Outline row; every number is a Figma reading:
 *   Large    50 h · 20/16 pad · 24 icon · 18/18 · 0.25 · stroke 3 · radius 99
 *   Medium   48 h · 16/16 pad · 24 icon · 16/16 · 0.25 · stroke 2 · radius 99
 *   Small    36 h · 12/10 pad · 16 icon · 16/16 · 0.25 · stroke 2 · radius 99999
 *   Compact  28 h ·  8/7  pad · 16 icon · 14/14 · 0.25 · stroke 2 · radius 99999
 *   XSmall   24 h · 10/6  pad · 16 icon · 12/12 · 0.5  · stroke 2 · radius 99999
 * Icon gap is 8 at every size. Icon Only is a square the height of the size.
 */

/* size → [h, padH, padV, icon, fontSize, lineHeight, tracking, stroke,
 *         radius, width of "Button", text style] */
var BTN_SIZE = {
  large:   [50, 20, 16, 24, 18, 18, 0.25, 3, 99,    57, 'Primary/Label/Large'],
  medium:  [48, 16, 16, 24, 16, 16, 0.25, 2, 99,    51, 'Primary/Label/Base'],
  small:   [36, 12, 10, 16, 16, 16, 0.25, 2, 99999, 51, 'Primary/Label/Base'],
  compact: [28,  8,  7, 16, 14, 14, 0.25, 2, 99999, 45, 'Primary/Label/Small'],
  xsmall:  [24, 10,  6, 16, 12, 12, 0.5,  2, 99999, 40, 'Primary/Label/Fine']
};
var BTN_GAP = 8;
var BTN_SLOT = { fill: '#020E22', opacity: 0.24 };

/* Colors: style → appearance → state → { bg, label, border }.
 * Default mode re-read from the nodes this pass; Destructive / White / Subtle
 * carried from the v3 / v4.1 Variable Mode capture. */
var BTN_COLORS = {
  filled: {
    default:     { default: { bg:'#005CE5', label:'#FFFFFF' }, pressed: { bg:'#2340A9', label:'#FFFFFF' }, disabled: { bg:'#9BC5FD', label:'#FFFFFF' } },
    destructive: { default: { bg:'#D81E1E', label:'#FFFFFF' }, pressed: { bg:'#B01818', label:'#FFFFFF' }, disabled: { bg:'#F5A3A3', label:'#FFFFFF' } },
    white:       { default: { bg:'#FFFFFF', label:'#005CE5' }, pressed: { bg:'#EEF2F9', label:'#2340A9' }, disabled: { bg:'#F5F7FA', label:'#9BC5FD' } },
    subtle:      { default: { bg:'#E5F1FF', label:'#005CE5' }, pressed: { bg:'#D2E5FF', label:'#2340A9' }, disabled: { bg:'#EEF5FF', label:'#9BC5FD' } }
  },
  outline: {
    default:     { default: { border:'#005CE5', label:'#005CE5' }, pressed: { border:'#2340A9', label:'#2340A9' }, disabled: { border:'#9BC5FD', label:'#9BC5FD' } },
    destructive: { default: { border:'#D81E1E', label:'#D81E1E' }, pressed: { border:'#B01818', label:'#B01818' }, disabled: { border:'#F5A3A3', label:'#F5A3A3' } },
    white:       { default: { border:'#005CE5', label:'#005CE5' }, pressed: { border:'#2340A9', label:'#2340A9' }, disabled: { border:'#9BC5FD', label:'#9BC5FD' } },
    subtle:      { default: { border:'#005CE5', label:'#005CE5' }, pressed: { border:'#2340A9', label:'#2340A9' }, disabled: { border:'#9BC5FD', label:'#9BC5FD' } }
  },
  text: {
    default:     { default: { label:'#005CE5' }, pressed: { label:'#2340A9' }, disabled: { label:'#9BC5FD' } },
    destructive: { default: { label:'#D81E1E' }, pressed: { label:'#B01818' }, disabled: { label:'#F5A3A3' } },
    white:       { default: { label:'#005CE5' }, pressed: { label:'#2340A9' }, disabled: { label:'#9BC5FD' } },
    subtle:      { default: { label:'#005CE5' }, pressed: { label:'#2340A9' }, disabled: { label:'#9BC5FD' } }
  }
};

/* style|state|size|placement → node id. All 180 variants of 17104:184842. */
var BTN_NODES = {
  'f|d|L|n':'17104:184843','f|d|L|l':'18163:2250','f|d|L|t':'18163:2268','f|d|L|i':'18164:2286',
  'f|p|L|n':'17104:184846','f|p|L|l':'18163:2256','f|p|L|t':'18163:2274','f|p|L|i':'18164:2291',
  'f|x|L|n':'17104:184849','f|x|L|l':'18163:2262','f|x|L|t':'18163:2280','f|x|L|i':'18164:2296',
  'o|d|L|n':'17104:184852','o|d|L|l':'18164:2355','o|d|L|t':'18164:2373','o|d|L|i':'18164:2455',
  'o|p|L|n':'17104:184858','o|p|L|l':'18164:2361','o|p|L|t':'18164:2379','o|p|L|i':'18164:2450',
  'o|x|L|n':'17104:184864','o|x|L|l':'18164:2367','o|x|L|t':'18164:2385','o|x|L|i':'18164:2445',
  't|d|L|n':'17104:184855','t|d|L|l':'18164:2466','t|d|L|t':'18164:2484','t|d|L|i':'18164:2566',
  't|p|L|n':'17104:184861','t|p|L|l':'18164:2472','t|p|L|t':'18164:2490','t|p|L|i':'18164:2561',
  't|x|L|n':'17104:184867','t|x|L|l':'18164:2478','t|x|L|t':'18164:2496','t|x|L|i':'18164:2556',

  'f|d|M|n':'17437:201','f|d|M|l':'18164:2301','f|d|M|t':'18164:2319','f|d|M|i':'18164:2337',
  'f|p|M|n':'17437:206','f|p|M|l':'18164:2307','f|p|M|t':'18164:2325','f|p|M|i':'18164:2343',
  'f|x|M|n':'17437:211','f|x|M|l':'18164:2313','f|x|M|t':'18164:2331','f|x|M|i':'18164:2349',
  'o|d|M|n':'17437:216','o|d|M|l':'18164:2403','o|d|M|t':'18164:2421','o|d|M|i':'18164:2439',
  'o|p|M|n':'17437:221','o|p|M|l':'18164:2397','o|p|M|t':'18164:2415','o|p|M|i':'18164:2433',
  'o|x|M|n':'17437:226','o|x|M|l':'18164:2391','o|x|M|t':'18164:2409','o|x|M|i':'18164:2427',
  't|d|M|n':'17437:231','t|d|M|l':'18164:2514','t|d|M|t':'18164:2526','t|d|M|i':'18164:2544',
  't|p|M|n':'17437:236','t|p|M|l':'18164:2508','t|p|M|t':'18164:2532','t|p|M|i':'18164:2550',
  't|x|M|n':'17437:241','t|x|M|l':'18164:2502','t|x|M|t':'18164:2520','t|x|M|i':'18164:2538',

  'f|d|S|n':'17437:246','f|d|S|l':'18164:2571','f|d|S|t':'18164:2637','f|d|S|i':'18164:2691',
  'f|p|S|n':'17437:251','f|p|S|l':'18164:2577','f|p|S|t':'18164:2631','f|p|S|i':'18164:2697',
  'f|x|S|n':'17437:256','f|x|S|l':'18164:2583','f|x|S|t':'18164:2625','f|x|S|i':'18164:2679',
  'o|d|S|n':'17437:261','o|d|S|l':'18164:2589','o|d|S|t':'18164:2643','o|d|S|i':'18164:2703',
  'o|p|S|n':'17437:266','o|p|S|l':'18164:2595','o|p|S|t':'18164:2649','o|p|S|i':'18164:2709',
  'o|x|S|n':'17437:271','o|x|S|l':'18164:2601','o|x|S|t':'18164:2655','o|x|S|i':'18164:2685',
  't|d|S|n':'17437:276','t|d|S|l':'18164:2607','t|d|S|t':'18164:2661','t|d|S|i':'18164:2715',
  't|p|S|n':'17437:281','t|p|S|l':'18164:2613','t|p|S|t':'18164:2667','t|p|S|i':'18164:2721',
  't|x|S|n':'17437:286','t|x|S|l':'18164:2619','t|x|S|t':'18164:2673','t|x|S|i':'18164:2727',

  'f|d|C|n':'17671:973','f|d|C|l':'18164:2751','f|d|C|t':'18164:2805','f|d|C|i':'18164:2859',
  'f|p|C|n':'17671:979','f|p|C|l':'18164:2757','f|p|C|t':'18164:2811','f|p|C|i':'18164:2883',
  'f|x|C|n':'17671:985','f|x|C|l':'18164:2763','f|x|C|t':'18164:2823','f|x|C|i':'18164:2877',
  'o|d|C|n':'17671:997','o|d|C|l':'18164:2769','o|d|C|t':'18164:2817','o|d|C|i':'18164:2865',
  'o|p|C|n':'17671:1003','o|p|C|l':'18164:2775','o|p|C|t':'18164:2829','o|p|C|i':'18164:2871',
  'o|x|C|n':'17671:1009','o|x|C|l':'18164:2781','o|x|C|t':'18164:2841','o|x|C|i':'18164:2895',
  't|d|C|n':'17671:1019','t|d|C|l':'18164:2787','t|d|C|t':'18164:2847','t|d|C|i':'18164:2901',
  't|p|C|n':'17671:1025','t|p|C|l':'18164:2793','t|p|C|t':'18164:2835','t|p|C|i':'18164:2889',
  't|x|C|n':'17671:1031','t|x|C|l':'18164:2799','t|x|C|t':'18164:2853','t|x|C|i':'18164:2907',

  'f|d|X|n':'17437:291','f|d|X|l':'18164:2913','f|d|X|t':'18164:2967','f|d|X|i':'18164:3021',
  'f|p|X|n':'17437:296','f|p|X|l':'18164:2919','f|p|X|t':'18164:2979','f|p|X|i':'18164:3033',
  'f|x|X|n':'17437:301','f|x|X|l':'18164:2925','f|x|X|t':'18164:2973','f|x|X|i':'18164:3027',
  'o|d|X|n':'17437:306','o|d|X|l':'18164:2931','o|d|X|t':'18164:2985','o|d|X|i':'18164:3039',
  'o|p|X|n':'17437:311','o|p|X|l':'18164:2937','o|p|X|t':'18164:2997','o|p|X|i':'18164:3051',
  'o|x|X|n':'17437:316','o|x|X|l':'18164:2943','o|x|X|t':'18164:2991','o|x|X|i':'18164:3045',
  't|d|X|n':'17437:321','t|d|X|l':'18164:2949','t|d|X|t':'18164:3003','t|d|X|i':'18164:3063',
  't|p|X|n':'17437:326','t|p|X|l':'18164:2955','t|p|X|t':'18164:3009','t|p|X|i':'18164:3057',
  't|x|X|n':'17437:331','t|x|X|l':'18164:2961','t|x|X|t':'18164:3015','t|x|X|i':'18164:3069'
};
var BTN_SZ_KEY = { large:'L', medium:'M', small:'S', compact:'C', xsmall:'X' };
var BTN_PL_KEY = { none:'n', leading:'l', trailing:'t', icononly:'i' };

function _btnNode(c) {
  return BTN_NODES[c.style.charAt(0) + '|' + (c.state === 'disabled' ? 'x' : c.state.charAt(0)) +
    '|' + BTN_SZ_KEY[c.size] + '|' + BTN_PL_KEY[c.iconplacement]] || '—';
}

/* ── Label width ────────────────────────────────────────────────────
 * Figma's width for "Button" is known at every size (BTN_SIZE[9]); any
 * other label is measured on a canvas and scaled by the ratio the known
 * string gives, so the default variant stays pixel-exact. */
var _btnCtx = null;
function _btnMeasure(text, fs) {
  if (!_btnCtx) {
    var cv = document.createElement('canvas');
    _btnCtx = cv.getContext('2d');
  }
  _btnCtx.font = '700 ' + fs + 'px "Proxima Soft", system-ui, sans-serif';
  return _btnCtx.measureText(text).width;
}
function _btnLabelW(text, size) {
  var m = BTN_SIZE[size] || BTN_SIZE.large;
  if (text === 'Button') return m[9];
  var ref = _btnMeasure('Button', m[4]);
  if (!ref) return m[9];
  return Math.max(1, Math.round(_btnMeasure(text, m[4]) * (m[9] / ref)));
}

function _btnEscape(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ── Geometry for the current selection ─────────────────────────────── */
function _btnMetrics(c) {
  var m = BTN_SIZE[c.size] || BTN_SIZE.large;
  var pl = c.iconplacement;
  var iconOnly = pl === 'icononly';
  var hasIcon = pl !== 'none';
  var labelW = iconOnly ? 0 : _btnLabelW(c.label || 'Button', c.size);
  var w = iconOnly ? m[0] : m[1] * 2 + labelW + (hasIcon ? m[3] + BTN_GAP : 0);
  return { m: m, h: m[0], w: w, labelW: labelW, iconOnly: iconOnly, hasIcon: hasIcon };
}

function _btnRender(c) {
  var g = _btnMetrics(c), m = g.m, h = g.h, w = g.w;
  var pal = (BTN_COLORS[c.style] || BTN_COLORS.filled);
  var col = (pal[c.appearance] || pal['default'])[c.state] || (pal['default'] || {})['default'];
  var r = Math.min(m[8], h / 2);
  var s = '<svg width="' + w + '" height="' + h + '" viewBox="0 0 ' + w + ' ' + h +
          '" fill="none" xmlns="http://www.w3.org/2000/svg">';

  if (c.style === 'filled') {
    s += '<rect x="0" y="0" width="' + w + '" height="' + h + '" rx="' + r + '" fill="' + col.bg + '"/>';
  } else if (c.style === 'outline') {
    var sw = m[7];
    s += '<rect x="' + (sw / 2) + '" y="' + (sw / 2) + '" width="' + (w - sw) + '" height="' + (h - sw) +
         '" rx="' + Math.max(0, r - sw / 2) + '" stroke="' + col.border + '" stroke-width="' + sw + '"/>';
  }

  if (g.hasIcon) {
    var ix = g.iconOnly ? (w - m[3]) / 2 : (c.iconplacement === 'leading' ? m[1] : w - m[1] - m[3]);
    s += '<rect x="' + ix + '" y="' + ((h - m[3]) / 2) + '" width="' + m[3] + '" height="' + m[3] +
         '" rx="' + (m[3] / 2) + '" fill="' + BTN_SLOT.fill + '" fill-opacity="' + BTN_SLOT.opacity + '"/>';
  }

  if (!g.iconOnly) {
    var lx = m[1] + (c.iconplacement === 'leading' ? m[3] + BTN_GAP : 0);
    s += '<text class="btn-preview-label" x="' + lx + '" y="' + (h / 2) + '" font-size="' + m[4] +
         '" font-weight="700" letter-spacing="' + m[6] + '" fill="' + col.label +
         '" dominant-baseline="central">' + _btnEscape(c.label || 'Button') + '</text>';
  }
  return s + '</svg>';
}

/* ── Per-card state — Figma's default variant ──────────────────────── */
var _specCards = {
  main: { style: 'filled', state: 'default', size: 'large', iconplacement: 'none',
          label: 'Button', appearance: 'default' }
};
window._specCards = _specCards;

/* ── DEV code ───────────────────────────────────────────────────────── */
function _btnCap(v) { return v.charAt(0).toUpperCase() + v.slice(1); }

function buildSwiftSnippet(cardKey, c) {
  var sizeMap = { large: '.large', medium: '.regular', small: '.small', compact: '.compact', xsmall: '.mini' };
  var styleMap = { filled: '.filled', outline: '.outlined', text: '.textLink' };
  var label = c.label || 'Button';
  var lines = [];
  if (c.iconplacement === 'icononly') {
    lines.push('EBButton(icon: Image(systemName: "heart"), accessibilityLabel: "' + label + '")');
  } else if (c.iconplacement === 'leading') {
    lines.push('EBButton("' + label + '", leadingIcon: Image(systemName: "heart"))');
  } else if (c.iconplacement === 'trailing') {
    lines.push('EBButton("' + label + '", trailingIcon: Image(systemName: "heart"))');
  } else {
    lines.push('EBButton("' + label + '")');
  }
  lines.push('    .ebAppearance(' + styleMap[c.style] + ')');
  lines.push('    .controlSize(' + sizeMap[c.size] + ')');
  if (c.appearance !== 'default') lines.push('    .ebColorScheme(.' + c.appearance + ')');
  if (c.state === 'disabled') lines.push('    .disabled(true)');
  return lines.join('\n');
}

function buildComposeSnippet(cardKey, c) {
  var sizeMap = { large: 'Large', medium: 'Medium', small: 'Small', compact: 'Compact', xsmall: 'XSmall' };
  var comp = c.style === 'outline' ? 'EBOutlinedButton' : c.style === 'text' ? 'EBTextButton' : 'EBButton';
  var label = c.label || 'Button';
  var lines = [comp + '(', '    onClick = { /* action */ },', '    size = EBButtonSize.' + sizeMap[c.size] + ','];
  if (c.iconplacement === 'leading') lines.push('    leadingIcon = { Icon(Icons.Filled.Favorite, null) },');
  else if (c.iconplacement === 'trailing') lines.push('    trailingIcon = { Icon(Icons.Filled.Favorite, null) },');
  else if (c.iconplacement === 'icononly') lines.push('    contentDescription = "' + label + '",');
  if (c.appearance !== 'default') lines.push('    colors = EBButtonDefaults.' + c.appearance + 'Colors(),');
  if (c.state === 'disabled') lines.push('    enabled = false,');
  var last = lines[lines.length - 1];
  if (last.charAt(last.length - 1) === ',') lines[lines.length - 1] = last.slice(0, -1);
  lines.push(') {');
  lines.push(c.iconplacement === 'icononly' ? '    Icon(Icons.Filled.Favorite, null)' : '    Text("' + label + '")');
  lines.push('}');
  return lines.join('\n');
}

function getSnippet(cardKey, lang, card) {
  return lang === 'swift' ? buildSwiftSnippet(cardKey, card) : buildComposeSnippet(cardKey, card);
}
window.getSnippet = getSnippet;

/* ── Control handler ────────────────────────────────────────────────── */
function updateSpecCard(cardStyle, prop, value) {
  var card = _specCards[cardStyle];
  if (!card) return;
  card[prop] = value;

  var host = document.getElementById('button-spec-' + cardStyle);
  if (host) {
    host.innerHTML = _btnRender(card);
    var box = host.closest('.spec-card-preview') || host.parentElement;
    if (box) box.classList.toggle('demo-preview-dark', card.appearance === 'white');
  }

  /* Label control is meaningless when the variant draws no label. */
  var labelInput = document.querySelector('[data-panel-card="' + cardStyle + '"][data-panel-prop="label"] input');
  if (labelInput) {
    var off = card.iconplacement === 'icononly';
    labelInput.disabled = off;
    if (labelInput.parentElement) labelInput.parentElement.classList.toggle('is-disabled', off);
  }

  var g = _btnMetrics(card), m = g.m;
  var pal = (BTN_COLORS[card.style] || BTN_COLORS.filled);
  var col = (pal[card.appearance] || pal['default'])[card.state];

  var cell = function (name) {
    return document.querySelector('[data-sp="' + cardStyle + '-' + name + '"]');
  };
  /* The value cell holds an optional .spec-swatch dot plus .spec-prop-hex —
     write into the hex span so the dot survives. */
  var put = function (name, text) {
    var el = cell(name);
    if (!el) return;
    var hex = el.querySelector('.spec-prop-hex');
    (hex || el).textContent = text;
  };
  var swatch = function (name, hex) {
    var el = cell(name);
    var dot = el && el.querySelector('.spec-swatch');
    if (dot) dot.style.background = hex;
  };
  var show = function (name, on) {
    var el = cell(name);
    var row = el && (el.closest('.spec-prop') || el.parentElement);
    if (row) row.style.display = on ? '' : 'none';
  };

  /* Properties */
  put('style', _btnCap(card.style));
  put('state', _btnCap(card.state));
  put('size', card.size === 'xsmall' ? 'XSmall' : _btnCap(card.size));
  put('iconplacement', card.iconplacement === 'icononly' ? 'Icon Only' : _btnCap(card.iconplacement));
  put('label', card.iconplacement === 'icononly' ? '— (no label layer)' : (card.label || 'Button'));
  put('appearance', _btnCap(card.appearance));
  /* Icon Only draws the Trailing slot at Large and the Leading slot at every
     other size — a naming split in the set, carried here as-is. */
  put('slot', card.iconplacement === 'none' ? '— (empty)'
    : card.iconplacement === 'leading' ? 'Leading Container · 80 items'
    : card.iconplacement === 'trailing' ? 'Trailing Container · 54 items'
    : card.size === 'large' ? 'Trailing Container · 54 items'
    : 'Leading Container · 80 items');
  put('variantNode', _btnNode(card) + ' · ' + g.w + ' × ' + g.h);

  /* Colors — one row per role, tracking the current mode and state.
     Token paths live in the Colors by Appearance Mode table below. */
  show('bg', card.style === 'filled');
  if (card.style === 'filled') { put('bg', col.bg); swatch('bg', col.bg); }
  show('border', card.style === 'outline');
  if (card.style === 'outline') { put('border', col.border); swatch('border', col.border); }
  put('labelColor', col.label);
  swatch('labelColor', col.label);
  put('slotFill', BTN_SLOT.fill + ' @ 24%');
  swatch('slotFill', BTN_SLOT.fill);
  show('slotFill', g.hasIcon);

  /* Layout */
  put('frame', g.w + ' × ' + g.h);
  put('height', String(m[0]));
  put('padH', g.iconOnly ? '— (square)' : String(m[1]));
  put('padV', g.iconOnly ? '— (square)' : String(m[2]));
  put('gap', String(BTN_GAP));
  show('gap', g.hasIcon && !g.iconOnly);
  put('icon', m[3] + ' × ' + m[3]);
  show('icon', g.hasIcon);
  put('radius', String(m[8]));
  put('stroke', m[7] + ' inside');
  show('stroke', card.style === 'outline');

  /* Typography — the DS text style name only; the numbers live in the style. */
  show('textStyle', !g.iconOnly);
  put('textStyle', m[10]);

  var devView = document.querySelector('[data-view="' + cardStyle + '-dev"]');
  if (devView) {
    var activeTab = devView.querySelector('.spec-code-tab.active');
    var lang = activeTab && /swift/i.test(activeTab.textContent) ? 'swift' : 'compose';
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

/* ── Overview tab ───────────────────────────────────────────────────── */
var _demo = { style: 'filled', state: 'default', size: 'large', iconplacement: 'none',
              label: 'Button', appearance: 'default' };

function _applyDemo() {
  var el = document.getElementById('btn-demo-preview');
  if (!el) return;
  el.innerHTML = _btnRender(_demo);
  var box = el.closest('.demo-preview');
  if (box) box.classList.toggle('demo-preview-dark', _demo.appearance === 'white');
}
function setDemoStyle(v) { _demo.style = v; _applyDemo(); }
function setDemoState(v) { _demo.state = v; _applyDemo(); }
function setDemoSize(v) { _demo.size = v; _applyDemo(); }
function setDemoIconPlacement(v) { _demo.iconplacement = v; _applyDemo(); }
function setDemoAppearance(v) { _demo.appearance = v; _applyDemo(); }
function setDemoLabel(v) { _demo.label = v; _applyDemo(); }
/* Legacy control ids from earlier revisions of this page. */
function setDemoIcon(slot, on) { _demo.iconplacement = on ? slot : 'none'; _applyDemo(); }
function setDemoVariant(v) { setDemoAppearance(v === 'brand' ? 'default' : v); }
window.setDemoStyle = setDemoStyle;
window.setDemoState = setDemoState;
window.setDemoSize = setDemoSize;
window.setDemoIconPlacement = setDemoIconPlacement;
window.setDemoAppearance = setDemoAppearance;
window.setDemoLabel = setDemoLabel;

/* ── First paint ────────────────────────────────────────────────────── */
function _btnInit() {
  _applyDemo();
  Object.keys(_specCards).forEach(function (k) {
    updateSpecCard(k, 'size', _specCards[k].size);
  });
}
function initSpecCards() { _btnInit(); }
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', _btnInit);
else _btnInit();
document.addEventListener('astro:page-load', _btnInit);
