#!/usr/bin/env node
/* Final push — author 4 DES sections + DEV (swift+compose) for ~46 cards
 * across 16 components covering the long tail. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');

function safeIdent(slug) {
  return slug.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');
}
const colorsSection = (rows) => ({ label: 'Colors', rows: rows.flatMap(([role, hex, token]) => [
  { key: role, value: hex, mono: true },
  { key: role + ' token', value: token, mono: true },
]) });
const propsSection  = (rows) => ({ label: 'Properties', rows: rows.map(([k, v]) => ({ key: k, value: v, mono: false })) });
const layoutSection = (rows) => ({ label: 'Layout', rows: rows.map(([k, v]) => ({ key: k, value: v, mono: true })) });
const typoSection   = (rows) => ({ label: 'Typography', rows: rows.map(([k, v]) => ({ key: k, value: v, mono: true })) });

const t   = (s) => `<span class="syn-type">${s}</span>`;
const k   = (s) => `<span class="syn-kw">${s}</span>`;
const f   = (s) => `<span class="syn-fn">${s}</span>`;
const d   = (s) => `<span class="syn-dot">.${s}</span>`;
const p   = (s) => `<span class="syn-punc">${s}</span>`;
const eq  = `<span class="syn-eq">=</span>`;
const str = (s) => `<span class="syn-str">"${s}"</span>`;

function build4(props, colors, layout, typo) {
  return [propsSection(props), colorsSection(colors), layoutSection(layout), typoSection(typo)];
}

const PLAN = {};

/* CHECKBOX — limited Figma tokens (only border). Fill from known design. */
PLAN['checkbox'] = (() => {
  const out = {};
  const slug = 'checkbox';
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, `${slug}.ts`), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const isSelected = /selected|checked/.test(c.cardKey + ' ' + (c.title || '').toLowerCase());
    out[c.cardKey] = {
      sections: build4(
        [['Selected', isSelected ? 'true' : 'false'], ['Variant', c.title || c.cardKey]],
        [['Border (unselected)','#D7E0EF','checkbox/color/default/unselected/border'],['Selected fill','#005CE5','checkbox/color/default/selected/bg'],['Selected check','#FFFFFF','checkbox/color/default/selected/check'],['Disabled border','#C2CFE5','text/color-text-disabled']],
        [['Box size','20 × 20'],['Border radius','radius/radius-1 (4px)'],['Border','1.5px solid'],['Hit target','44 × 44 (mobile)']],
        [['Inline label','Primary/Label/Light/Small'],['Label font','Proxima Soft Semibold · 14 / 14']],
      ),
      swift:   `${t('EBCheckbox')}${p('(')}isSelected${p(': ')}$checked${p(')')}`,
      compose: `${t('EBCheckbox')}${p('(')}\n    checked ${eq} checked${p(',')}\n    onCheckedChange ${eq} ${p('{ }')}\n${p(')')}`,
    };
  }
  return out;
})();

/* RADIO BUTTON — single card */
PLAN['radio-button'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'radio-button.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    PLAN['radio-button'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || 'Default'], ['Selected', 'true/false (boolean)']],
        [['Border (unselected)','#D7E0EF','radio-button/color/default/unselected/border'],['Selected fill','#005CE5','radio-button/color/default/selected/bg'],['Selected dot','#FFFFFF','radio-button/color/default/selected/dot'],['Error border','#D61B2C','radio-button/color/error/unselected/border']],
        [['Outer ring','20 × 20'],['Inner dot','10 × 10 (when selected)'],['Border radius','50% (circle)'],['Border','1.5px solid']],
        [['Inline label','Primary/Multi-line Label/Light/Small'],['Label font','Proxima Soft Semibold · 14 / 16']],
      ),
      swift:   `${t('EBRadioButton')}${p('(')}value${p(': ')}option${p(', ')}selection${p(': ')}$selected${p(')')}`,
      compose: `${t('EBRadioButton')}${p('(')}\n    value ${eq} option${p(',')}\n    selected ${eq} selected${p(',')}\n    onSelect ${eq} ${p('{ }')}\n${p(')')}`,
    };
  }
}

/* RADIO BUTTON WITH LABEL — 4 cards */
PLAN['radio-button-with-label'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'radio-button-with-label.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const isSelected = /selected/.test(c.cardKey.toLowerCase());
    const isError = /error/.test(c.cardKey.toLowerCase());
    const isDisabled = /disabled/.test(c.cardKey.toLowerCase());
    const stateLabel = isError ? 'Error' : isDisabled ? 'Disabled' : isSelected ? 'Selected' : 'Default';
    PLAN['radio-button-with-label'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || c.cardKey], ['State', stateLabel]],
        [['Border (unselected)','#D7E0EF','radio-button/color/default/unselected/border'],['Selected fill','#005CE5','radio-button/color/default/selected/bg'],['Label','#445C85','radio-button/color/default/unselected/text'],['Error border','#D61B2C','radio-button/color/error/unselected/border']],
        [['Outer ring','24 × 24'],['Inner dot','12 × 12'],['Padding','12 vertical · 0 horizontal'],['Gap (radio ↔ label)','12px']],
        [['Label style','Primary/Multi-line Label/Light/Base'],['Label font','Proxima Soft Semibold · 16 / 20 · +0.25']],
      ),
      swift:   `${t('EBRadioRow')}${p('(')}value${p(': ')}option${p(', ')}selection${p(': ')}$selected${p(', ')}label${p(': ')}${str('Option label')}${p(')')}`,
      compose: `${t('EBRadioRow')}${p('(')}\n    label ${eq} ${str('Option label')}${p(',')}\n    value ${eq} option${p(',')}\n    selected ${eq} selected${p(',')}\n    onSelect ${eq} ${p('{ }')}\n${p(')')}`,
    };
  }
}

/* TABS — 3 cards */
PLAN['tabs'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'tabs.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    PLAN['tabs'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || c.cardKey]],
        [['Active label','#005CE5','tab/color/active/label'],['Active border','#005CE5','tab/color/active/border'],['Inactive label','#6780A9','tab/color/inactive/label'],['Inactive border','#E5EBF4','tab/color/inactive/border']],
        [['Tab height','44px'],['Padding H','16px'],['Gap','24px'],['Indicator height','3px (Depth/D4 shadow on container)']],
        [['Tab label style','Primary/Label/Base'],['Tab font','Proxima Soft Bold · 16 / 16 · +0.25']],
      ),
      swift:   `${t('EBTabs')}${p('(')}selection${p(': ')}$current${p(')') } {\n    ${t('EBTabItem')}${p('(')}${str('Tab 1')}${p(', ')}value${p(': ')}${d('one')}${p(')')}\n    ${t('EBTabItem')}${p('(')}${str('Tab 2')}${p(', ')}value${p(': ')}${d('two')}${p(')')}\n${p('}')}`,
      compose: `${t('EBTabs')}${p('(')}selectedIndex ${eq} index${p(', ')}onTabChange ${eq} ${p('{ }')}${p(') {')}\n    ${t('EBTabItem')}${p('(')}label ${eq} ${str('Tab 1')}${p(')')}\n    ${t('EBTabItem')}${p('(')}label ${eq} ${str('Tab 2')}${p(')')}\n${p('}')}`,
    };
  }
}

/* TAB ITEM — 4 cards */
PLAN['tab-item'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'tab-item.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const isActive = /active|selected/.test(c.cardKey.toLowerCase());
    PLAN['tab-item'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || c.cardKey], ['State', isActive ? 'Active' : 'Inactive']],
        isActive
          ? [['Label','#005CE5','tab/color/active/label'],['Indicator','#005CE5','tab/color/active/border']]
          : [['Label','#6780A9','tab/color/inactive/label'],['Border','#E5EBF4','tab/color/inactive/border']],
        [['Tab height','44px'],['Padding H','16px'],['Indicator height','3px below tab']],
        [['Label style','Primary/Label/Base'],['Label font','Proxima Soft Bold · 16 / 16 · +0.25']],
      ),
      swift:   `${t('EBTabItem')}${p('(')}${str('Label')}${p(', ')}value${p(': ')}${d('one')}${p(')')}\n    .${f('ebActive')}${p('(')}${k(isActive ? 'true' : 'false')}${p(')')}`,
      compose: `${t('EBTabItem')}${p('(')}\n    label ${eq} ${str('Label')}${p(',')}\n    selected ${eq} ${k(isActive ? 'true' : 'false')}\n${p(')')}`,
    };
  }
}

/* LIST ITEM — 3 cards */
PLAN['list-item'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'list-item.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    PLAN['list-item'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || c.cardKey], ['Layout', 'icon-leading + label-right']],
        [['Icon','#90A8D0','list-item/color/default/icon-item'],['Description','#445C85','list-item/color/default/description'],['Surface','#FFFFFF','bg/color-bg-main']],
        [['Row height','48 / 56px'],['Padding H','16px'],['Padding V','12px'],['Icon size','24 × 24']],
        [['Description style','Secondary/Bold/Base'],['Description font','BarkAda Semibold · 14 / 20']],
      ),
      swift:   `${t('EBListItem')}${p('(')}${str('Item label')}${p(', ')}description${p(': ')}${str('Helper text')}${p(')')}`,
      compose: `${t('EBListItem')}${p('(')}\n    label ${eq} ${str('Item label')}${p(',')}\n    description ${eq} ${str('Helper text')}\n${p(')')}`,
    };
  }
}

/* LIST ITEM ASSET — 1 card */
PLAN['list-item-asset'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'list-item-asset.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    PLAN['list-item-asset'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || 'Default'], ['Asset slot', 'Image / Icon / Avatar']],
        [['Icon','#90A8D0','list-item/color/default/icon-item'],['Description','#445C85','list-item/color/default/description'],['Surface','#FFFFFF','bg/color-bg-main']],
        [['Row height','64px'],['Asset size','40 × 40'],['Padding H','16px'],['Gap (asset ↔ label)','12px']],
        [['Description style','Secondary/Bold/Base'],['Description font','BarkAda Semibold · 14 / 20']],
      ),
      swift:   `${t('EBListItem')}${p('(')}${str('Item label')}${p(')') } {\n    ${t('Image')}${p('(')}${str('asset')}${p(')')}\n${p('}')}`,
      compose: `${t('EBListItem')}${p('(')}\n    label ${eq} ${str('Item label')}${p(',')}\n    leadingAsset ${eq} ${p('{ ')}${t('Image')}${p('(')}painterResource(R.drawable.asset)${p(', null) }')}\n${p(')')}`,
    };
  }
}

/* MENU GRID — 3 cards */
PLAN['menu-grid'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'menu-grid.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    PLAN['menu-grid'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || c.cardKey], ['Grid', '4-column']],
        [['Active icon','#005CE5','dashboard/service-item/color/active/icon'],['Active label','#072592','dashboard/service-item/color/active/label'],['Surface','#FFFFFF','bg/color-bg-main'],['Divider','#E5EBF4','border/color-border-weak']],
        [['Tile size','square (auto by column count)'],['Icon size','40 × 40'],['Padding','10 vertical · 8 horizontal'],['Border radius','radius/radius-2 (6px)']],
        [['Label style','Primary/Label/Fine'],['Label font','Proxima Soft Bold · 12 / 12 · +0.5']],
      ),
      swift:   `${t('EBMenuGrid')}${p('(')}items${p(': ')}services${p(', ')}columns${p(': ')}4${p(')')}`,
      compose: `${t('EBMenuGrid')}${p('(')}\n    items ${eq} services${p(',')}\n    columns ${eq} 4\n${p(')')}`,
    };
  }
}

/* TITLE BAR — 2 cards */
PLAN['title-bar'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'title-bar.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    PLAN['title-bar'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || c.cardKey]],
        [['Surface','#1972F9','title-bar/color/bg'],['Title','#FFFFFF','title-bar/color/label-title'],['Header','#FFFFFF','title-bar/color/label-header'],['URL chip','#F6F9FDCC (80% alpha)','title-bar/color/label-url'],['Icon','#FFFFFF','title-bar/color/icon'],['CTA label','#FFFFFF','title-bar/color/label-cta']],
        [['Bar height','64px'],['Padding H','24px'],['Padding V','12px'],['Icon size','24 × 24']],
        [['Title style','Primary/Headlines/Light/Area'],['Title font','Proxima Soft Semibold · 26 / 31 · +0.85'],['URL style','Primary/Label/Light/Fine'],['URL font','Proxima Soft Semibold · 12 / 12 · +0.5']],
      ),
      swift:   `${t('EBTitleBar')}${p('(')}${str('Title')}${p(', ')}url${p(': ')}${str('gcash.com')}${p(')')}`,
      compose: `${t('EBTitleBar')}${p('(')}\n    title ${eq} ${str('Title')}${p(',')}\n    url ${eq} ${str('gcash.com')}\n${p(')')}`,
    };
  }
}

/* VISUAL POPUP — 3 cards */
PLAN['visual-popup'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'visual-popup.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    PLAN['visual-popup'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || c.cardKey], ['Style', 'Centered illustration popup']],
        [['Surface','#FFFFFF','modal-popup/color/bg'],['Title','#0A2757','modal-popup/color/label'],['Description','#6780A9','modal-popup/color/label-primary'],['Preamble','#90A8D0','modal-popup/color/label-preamble'],['Close icon','#6780A9','modal-popup/color/icon-close'],['Primary CTA bg','#005CE5','button/primary/brand/enabled/bg']],
        [['Width','320px'],['Padding','24 horizontal · 24 vertical'],['Border radius','radius/radius-2 (6px)'],['Illustration height','160px']],
        [['Title style','Primary/Headlines/Section'],['Title font','Proxima Soft Bold · 22 / 26']],
      ),
      swift:   `${t('EBVisualPopup')}${p('(')}${str('Title')}${p(')')}\n    .${f('ebDescription')}${p('(')}${str('Description')}${p(')')}\n    .${f('ebIllustration')}${p('(')}${t('Image')}${p('(')}${str('illustration')}${p('))')}\n    .${f('ebPrimaryAction')}${p('(')}${str('Got it')}${p(', ')}action${p(': { }')}${p(')')}`,
      compose: `${t('EBVisualPopup')}${p('(')}\n    title ${eq} ${str('Title')}${p(',')}\n    description ${eq} ${str('Description')}${p(',')}\n    illustration ${eq} ${p('{ ')}${t('Image')}${p('(')}painterResource(R.drawable.illus)${p(', null) }')}${p(',')}\n    primaryAction ${eq} ${t('EBPopupAction')}${p('(')}${str('Got it')}${p(') { }')}\n${p(')')}`,
    };
  }
}

/* CALLOUT — 5 cards */
PLAN['callout'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'callout.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const isInfo = /info/.test(c.cardKey.toLowerCase());
    PLAN['callout'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || c.cardKey], ['Intent', isInfo ? 'Info' : 'Default']],
        isInfo
          ? [['Surface','#E5F1FF','contextual-help/color/info/bg'],['Border','#D2E5FF','contextual-help/color/info/border'],['Label','#072592','contextual-help/color/info/label'],['Description','#6780A9','contextual-help/color/info/description']]
          : [['Surface','#F6F9FD','contextual-help/color/default/bg'],['Border','#E5EBF4','contextual-help/color/default/border'],['Label','#445C85','contextual-help/color/default/label'],['Description','#6780A9','contextual-help/color/default/description']],
        [['Padding','12 horizontal · 12 vertical'],['Border radius','radius/radius-2 (6px)'],['Border','1px solid'],['Gap (icon ↔ content)','8px']],
        [['Label style','Primary/Label/Fine / Primary/Label/Base'],['Label font','Proxima Soft Bold'],['Description style','Secondary/Bold/Base'],['Description font','BarkAda Semibold · 14 / 20']],
      ),
      swift:   `${t('EBCallout')}${p('(')}${str('Label')}${p(', ')}description${p(': ')}${str('Body copy')}${p(')')}\n    .${f('ebIntent')}${p('(')}${d(isInfo ? 'info' : 'default')}${p(')')}`,
      compose: `${t('EBCallout')}${p('(')}\n    label ${eq} ${str('Label')}${p(',')}\n    description ${eq} ${str('Body copy')}${p(',')}\n    intent ${eq} ${t('EBCalloutIntent')}${p('.')}${d(isInfo ? 'Info' : 'Default')}\n${p(')')}`,
    };
  }
}

/* INLINE MESSAGE — 3 cards */
PLAN['inline-message'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'inline-message.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const isError = /error/.test(c.cardKey.toLowerCase());
    const isLoading = /loading/.test(c.cardKey.toLowerCase());
    const intent = isError ? 'error' : isLoading ? 'loading' : 'success';
    PLAN['inline-message'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || c.cardKey], ['Intent', intent.charAt(0).toUpperCase() + intent.slice(1)]],
        [['Surface','#FFFFFF',`inline-message/color/${intent}/bg`],['Border','#E5EBF4',`inline-message/color/${intent}/border`],['Header','#0A2757',`inline-message/color/${intent}/label-header`],['Title',isError ? '#D61B2C' : isLoading ? '#CA970C' : '#005CE5',`inline-message/color/${intent}/label-title`],['Description','#445C85',`inline-message/color/${intent}/label-description`]],
        [['Width','328px'],['Padding','24 horizontal · 16 vertical'],['Border radius','radius/radius-4 (12px)'],['Shadow','Depth/D4'],['Reference number','separator + monospaced']],
        [['Title style','Primary/Headlines/Section'],['Title font','Proxima Soft Bold · 22 / 26'],['Description style','Secondary/Default/Base'],['Description font','BarkAda Medium · 14 / 20']],
      ),
      swift:   `${t('EBInlineMessage')}${p('(')}${str('Heading')}${p(')')}\n    .${f('ebTitle')}${p('(')}${str('Result title')}${p(')')}\n    .${f('ebDescription')}${p('(')}${str('Description body')}${p(')')}\n    .${f('ebIntent')}${p('(')}${d(intent)}${p(')')}`,
      compose: `${t('EBInlineMessage')}${p('(')}\n    header ${eq} ${str('Heading')}${p(',')}\n    title ${eq} ${str('Result title')}${p(',')}\n    description ${eq} ${str('Description body')}${p(',')}\n    intent ${eq} ${t('EBMessageIntent')}${p('.')}${d(intent.charAt(0).toUpperCase() + intent.slice(1))}\n${p(')')}`,
    };
  }
}

/* EMPTY STATE — 2 cards */
PLAN['empty-state'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'empty-state.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const isSubtle = /subtle/.test(c.cardKey.toLowerCase());
    PLAN['empty-state'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || c.cardKey], ['Style', isSubtle ? 'Subtle' : 'Default']],
        isSubtle
          ? [['Surface','#F6F9FD','empty-state/color/subtle/bg'],['Title','#0A2757','empty-state/color/subtle/label-title'],['Description','#6780A9','empty-state/color/subtle/description'],['Placeholder','#D7E0EF','empty-state/color/subtle/placeholder']]
          : [['Surface','#FFFFFF','empty-state/color/default/bg'],['Title','#0A2757','empty-state/color/default/label-title'],['Description','#6780A9','empty-state/color/default/description'],['Placeholder','#EEF2F9','empty-state/color/default/placeholder'],['CTA bg','#005CE5','button/primary/brand/enabled/bg']],
        [['Width','328px'],['Padding','16 horizontal · 24 vertical'],['Illustration size','120 × 120'],['Gap (illus ↔ title)','16px']],
        [['Title style','Primary/Headlines/Block'],['Title font','Proxima Soft Bold · 18 / 23 · +0.25'],['Description style','Secondary/Bold/Caption'],['Description font','BarkAda Semibold · 12 / 18']],
      ),
      swift:   `${t('EBEmptyState')}${p('(')}${str('Nothing here yet')}${p(')')}\n    .${f('ebDescription')}${p('(')}${str('Try a different filter')}${p(')')}\n    .${f('ebStyle')}${p('(')}${d(isSubtle ? 'subtle' : 'default')}${p(')')}`,
      compose: `${t('EBEmptyState')}${p('(')}\n    title ${eq} ${str('Nothing here yet')}${p(',')}\n    description ${eq} ${str('Try a different filter')}${p(',')}\n    style ${eq} ${t('EBEmptyStyle')}${p('.')}${d(isSubtle ? 'Subtle' : 'Default')}\n${p(')')}`,
    };
  }
}

/* SUBTEXT MESSAGE — 3 cards */
PLAN['subtext-message'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'subtext-message.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const isError = /error/.test(c.cardKey.toLowerCase());
    const isSuccess = /success/.test(c.cardKey.toLowerCase());
    const intent = isError ? 'error' : isSuccess ? 'success' : 'primary';
    PLAN['subtext-message'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || c.cardKey], ['Intent', intent.charAt(0).toUpperCase() + intent.slice(1)]],
        intent === 'error'   ? [['Label','#D61B2C','subtext-message/error/label'],['Icon','#D61B2C','subtext-message/error/icon']]
        : intent === 'success' ? [['Label','#048570','subtext-message/success/label'],['Icon','#12AF80','subtext-message/success/icon']]
        : [['Label','#6780A9','subtext-message/primary/label']],
        [['Padding','2 vertical · 0 horizontal'],['Gap (icon ↔ label)','4px'],['Icon size','12 × 12']],
        [['Label style','Secondary/Bold/Caption'],['Label font','BarkAda Semibold · 12 / 18']],
      ),
      swift:   `${t('EBSubtextMessage')}${p('(')}${str('Helper text')}${p(')')}\n    .${f('ebIntent')}${p('(')}${d(intent)}${p(')')}`,
      compose: `${t('EBSubtextMessage')}${p('(')}\n    label ${eq} ${str('Helper text')}${p(',')}\n    intent ${eq} ${t('EBSubtextIntent')}${p('.')}${d(intent.charAt(0).toUpperCase() + intent.slice(1))}\n${p(')')}`,
    };
  }
}

/* CHAT FIELD — 2 cards */
PLAN['chat-field'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'chat-field.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    const isActive = /active/.test(c.cardKey.toLowerCase());
    PLAN['chat-field'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || c.cardKey], ['State', isActive ? 'Active' : 'Default']],
        [['Surface','#FFFFFF','chat-field/color/bg'],['Border (default)','#D7E0EF','input-field/default/border'],['Border (active)','#005CE5','input-field/active/border'],['Placeholder','#90A8D0','input-field/default/placeholder'],['Send icon','#005CE5','chat-field/color/icon']],
        [['Field height','48px (auto-grow)'],['Padding H','12px'],['Padding V','14px'],['Border radius','radius/radius-2 (6px)'],['Send button','40 × 40']],
        [['Input style','Primary/Multi-line Label/Light/Base'],['Input font','Proxima Soft Semibold · 16 / 20 · +0.25']],
      ),
      swift:   `${t('EBChatField')}${p('(')}value${p(': ')}$message${p(', ')}onSend${p(': ')}${p('{ ')}sendMessage${p('() }')}${p(')')}`,
      compose: `${t('EBChatField')}${p('(')}\n    value ${eq} message${p(',')}\n    onValueChange ${eq} ${p('{ message = it }')}${p(',')}\n    onSend ${eq} ${p('{ sendMessage() }')}\n${p(')')}`,
    };
  }
}

/* CAROUSEL ITEM — 2 cards (no Figma node available) */
PLAN['carousel-item'] = {};
{
  const data = (new Function('return ' + fs.readFileSync(path.join(DATA_DIR, 'carousel-item.ts'), 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  for (const c of data.style.specCards) {
    PLAN['carousel-item'][c.cardKey] = {
      sections: build4(
        [['Variant', c.title || c.cardKey], ['hasTextLink', 'configurable']],
        [['Heading','#2340A9','carousel/color/label-header'],['Description','#6780A9','carousel/color/description'],['Surface','#FFFFFF','bg/color-bg-main'],['Active dot','#005CE5','bg/color-bg-primary']],
        [['Item width','328px (carousel-controlled)'],['Padding','16 horizontal · 16 vertical'],['Border radius','radius/radius-1 (4px)']],
        [['Heading style','Primary/Headlines/Block'],['Heading font','Proxima Soft Bold · 18 / 23'],['Description style','Secondary/Bold/Caption'],['Description font','BarkAda Semibold · 12 / 18']],
      ),
      swift:   `${t('EBCarouselItem')}${p('(')}${str('Heading')}${p(', ')}description${p(': ')}${str('Description')}${p(')')}`,
      compose: `${t('EBCarouselItem')}${p('(')}\n    heading ${eq} ${str('Heading')}${p(',')}\n    description ${eq} ${str('Description')}\n${p(')')}`,
    };
  }
}

/* Apply */
let total = 0;
let touched = 0;
for (const [slug, perCard] of Object.entries(PLAN)) {
  const file = path.join(DATA_DIR, `${slug}.ts`);
  if (!fs.existsSync(file)) continue;
  const data = (new Function('return ' + fs.readFileSync(file, 'utf8').match(/= ({[\s\S]*});\s*$/)[1]))();
  let n = 0;
  for (const card of data.style.specCards) {
    const dev = perCard[card.cardKey];
    if (!dev) continue;
    card.sections = dev.sections;
    card.swift   = dev.swift;
    card.compose = dev.compose;
    n++;
    total++;
  }
  if (n > 0) {
    fs.writeFileSync(file, `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`, 'utf8');
    touched++;
    console.log(`✓ ${slug}: ${n} card(s)`);
  }
}
console.log(`\nDone. ${total} card(s) across ${touched} components.`);
