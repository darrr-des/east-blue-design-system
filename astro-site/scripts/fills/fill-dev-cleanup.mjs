#!/usr/bin/env node
/* DEV cleanup — fill swift + compose for the 33 cards across components I
 * previously claimed "100% complete" but only on DES sections. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const DATA_DIR = path.resolve(path.dirname(__filename), '../../src/data/components');

function safeIdent(slug) {
  return slug.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()).replace(/^(\d)/, '_$1');
}

/* Wrap helpers — return HTML strings. Simple, no complex chains. */
const t = (s) => `<span class="syn-type">${s}</span>`;
const k = (s) => `<span class="syn-kw">${s}</span>`;
const f = (s) => `<span class="syn-fn">${s}</span>`;
const d = (s) => `<span class="syn-dot">.${s}</span>`;
const p = (s) => `<span class="syn-punc">${s}</span>`;
const eq = `<span class="syn-eq">=</span>`;
const cmt = (s) => `<span class="syn-cmt">// ${s}</span>`;
const str = (s) => `<span class="syn-str">"${s}"</span>`;

const PLAN = {
  accordion: {
    'acc-spec-collapsed': {
      swift:   `${t('EBAccordion')}${p('(')}${str('Title')}${p(', ')}isExpanded${p(': ')}${d('constant')}${p('(')}${k('false')}${p(')')}${p(') ')}${p('{')}\n    ${t('Text')}${p('(')}${str('Content')}${p(')')}\n${p('}')}`,
      compose: `${t('EBAccordion')}${p('(')}\n    title ${eq} ${str('Title')}${p(',')}\n    expanded ${eq} ${k('false')}${p(',')}\n    onExpandChange ${eq} ${p('{ }')}\n${p(') {')}\n    ${t('Text')}${p('(')}${str('Content')}${p(')')}\n${p('}')}`,
    },
    'acc-spec-expanded': {
      swift:   `${t('EBAccordion')}${p('(')}${str('Title')}${p(', ')}isExpanded${p(': ')}${d('constant')}${p('(')}${k('true')}${p(')')}${p(') ')}${p('{')}\n    ${t('Text')}${p('(')}${str('Body content shown when expanded')}${p(')')}\n${p('}')}`,
      compose: `${t('EBAccordion')}${p('(')}\n    title ${eq} ${str('Title')}${p(',')}\n    expanded ${eq} ${k('true')}${p(',')}\n    onExpandChange ${eq} ${p('{ }')}\n${p(') {')}\n    ${t('Text')}${p('(')}${str('Body content shown when expanded')}${p(')')}\n${p('}')}`,
    },
  },
  modal: {
    'default': {
      swift:   `${t('EBModal')}${p('(')}${str('Put the title here')}${p(')')}\n    .${f('ebDescription')}${p('(')}${str('Add description here.')}${p(')')}\n    .${f('ebPrimaryAction')}${p('(')}${str('Label')}${p(', ')}action${p(': { }')}${p(')')}`,
      compose: `${t('EBModal')}${p('(')}\n    title ${eq} ${str('Put the title here')}${p(',')}\n    description ${eq} ${str('Add description here.')}${p(',')}\n    primaryAction ${eq} ${t('EBModalAction')}${p('(')}${str('Label')}${p(') { }')}\n${p(')')}`,
    },
    'with-icon-node-18507:71773-/-18507:71783': {
      swift:   `${t('EBModal')}${p('(')}${str('Put the title here')}${p(')')}\n    .${f('ebDescription')}${p('(')}${str('Add description here.')}${p(')')}\n    .${f('ebIcon')}${p('(')}${t('Image')}${p('(')}systemName${p(': ')}${str('checkmark.circle')}${p('))')}\n    .${f('ebPrimaryAction')}${p('(')}${str('Label')}${p(', ')}action${p(': { }')}${p(')')}\n    .${f('ebSecondaryAction')}${p('(')}${str('Label')}${p(', ')}action${p(': { }')}${p(')')}`,
      compose: `${t('EBModal')}${p('(')}\n    title ${eq} ${str('Put the title here')}${p(',')}\n    description ${eq} ${str('Add description here.')}${p(',')}\n    icon ${eq} ${p('{ ')}${t('Icon')}${p('(')}${t('Icons')}${p('.')}${d('Filled')}${p('.')}${d('CheckCircle')}${p(', null) }')}${p(',')}\n    primaryAction ${eq} ${t('EBModalAction')}${p('(')}${str('Label')}${p(') { }')}${p(',')}\n    secondaryAction ${eq} ${t('EBModalAction')}${p('(')}${str('Label')}${p(') { }')}\n${p(')')}`,
    },
    'transaction-(v1-·-v2)-node-18507:71706-/-18507:71732': {
      swift:   `${t('EBModal')}${p('(')}${str('Put the title here')}${p(')')}\n    .${f('ebStyle')}${p('(')}${d('transaction')}${p(')')}\n    .${f('ebTransactionRows')}${p('(')}rows${p(')')}\n    .${f('ebReferenceNumber')}${p('(')}${str('165A25912345')}${p(')')}\n    .${f('ebPrimaryAction')}${p('(')}${str('Label')}${p(', ')}action${p(': { }')}${p(')')}`,
      compose: `${t('EBModal')}${p('(')}\n    title ${eq} ${str('Put the title here')}${p(',')}\n    style ${eq} ${t('EBModalStyle')}${p('.')}${d('Transaction')}${p(',')}\n    rows ${eq} transactionDetails${p(',')}\n    referenceNumber ${eq} ${str('165A25912345')}${p(',')}\n    primaryAction ${eq} ${t('EBModalAction')}${p('(')}${str('Label')}${p(') { }')}\n${p(')')}`,
    },
  },
  'bottom-sheet': {
    'left-align': {
      swift:   `${t('EBBottomSheet')}${p('(')}${str('Header')}${p(')')}\n    .${f('ebPreamble')}${p('(')}${str('Preamble')}${p(')')}\n    .${f('ebDescription')}${p('(')}${str('Description body')}${p(')')}\n    .${f('ebAlignment')}${p('(')}${d('leading')}${p(')')}\n    .${f('ebPrimaryAction')}${p('(')}${str('Continue')}${p(', ')}action${p(': { }')}${p(')')}`,
      compose: `${t('EBBottomSheet')}${p('(')}\n    header ${eq} ${str('Header')}${p(',')}\n    preamble ${eq} ${str('Preamble')}${p(',')}\n    description ${eq} ${str('Description body')}${p(',')}\n    alignment ${eq} ${t('EBSheetAlignment')}${p('.')}${d('Leading')}${p(',')}\n    primaryAction ${eq} ${t('EBSheetAction')}${p('(')}${str('Continue')}${p(') { }')}\n${p(')')}`,
    },
    'center-align': {
      swift:   `${t('EBBottomSheet')}${p('(')}${str('Header')}${p(')')}\n    .${f('ebPreamble')}${p('(')}${str('Preamble')}${p(')')}\n    .${f('ebDescription')}${p('(')}${str('Description body')}${p(')')}\n    .${f('ebAlignment')}${p('(')}${d('center')}${p(')')}\n    .${f('ebPrimaryAction')}${p('(')}${str('Continue')}${p(', ')}action${p(': { }')}${p(')')}`,
      compose: `${t('EBBottomSheet')}${p('(')}\n    header ${eq} ${str('Header')}${p(',')}\n    preamble ${eq} ${str('Preamble')}${p(',')}\n    description ${eq} ${str('Description body')}${p(',')}\n    alignment ${eq} ${t('EBSheetAlignment')}${p('.')}${d('Center')}${p(',')}\n    primaryAction ${eq} ${t('EBSheetAction')}${p('(')}${str('Continue')}${p(') { }')}\n${p(')')}`,
    },
  },
  overlay: {
    'default-·-strong': {
      swift:   `${t('EBOverlay')}${p('(')}isPresented${p(': ')}$showSheet${p(')')}\n    .${f('ebStrength')}${p('(')}${d('strong')}${p(') {')}\n    ${cmt('content shown above the scrim')}\n${p('}')}`,
      compose: `${t('EBOverlay')}${p('(')}\n    visible ${eq} showSheet${p(',')}\n    onDismiss ${eq} ${p('{ }')}${p(',')}\n    strength ${eq} ${t('EBOverlayStrength')}${p('.')}${d('Strong')}\n${p(') {')}\n    ${cmt('content shown above the scrim')}\n${p('}')}`,
    },
  },
  counter: {
    'empty-—-with-limit': {
      swift:   `${t('EBCounter')}${p('(')}count${p(': ')}0${p(')')}\n    .${f('ebLimit')}${p('(')}99${p(')')}\n    .${f('ebState')}${p('(')}${d('empty')}${p(')')}`,
      compose: `${t('EBCounter')}${p('(')}\n    count ${eq} 0${p(',')}\n    limit ${eq} 99${p(',')}\n    state ${eq} ${t('EBCounterState')}${p('.')}${d('Empty')}\n${p(')')}`,
    },
    'single-integer-nodes-18482:71326,-18482:71328': {
      swift:   `${t('EBCounter')}${p('(')}count${p(': ')}5${p(')')}`,
      compose: `${t('EBCounter')}${p('(')}count ${eq} 5${p(')')}`,
    },
  },
  footer: {
    'variant-1-·-powered-by-+-disclaimer-+-help-link-(left)': {
      swift:   `${t('EBFooter')}${p('(')}${str('Powered by Fuse')}${p(')')}\n    .${f('ebDisclaimer')}${p('(')}${str('Regulatory disclaimer copy')}${p(')')}\n    .${f('ebHelpLink')}${p('(')}${str('Help center')}${p(', ')}destination${p(': ')}url${p(')')}`,
      compose: `${t('EBFooter')}${p('(')}\n    poweredBy ${eq} ${str('Powered by Fuse')}${p(',')}\n    disclaimer ${eq} ${str('Regulatory disclaimer copy')}${p(',')}\n    helpLink ${eq} ${t('EBFooterLink')}${p('(')}${str('Help center')}${p(', ')}url${p(')')}\n${p(')')}`,
    },
    'variant-7-·-"in-partnership-with"-·-grouped-logos-(center)': {
      swift:   `${t('EBFooter')}${p('(')}${str('In partnership with')}${p(')')}\n    .${f('ebPartnerLogos')}${p('(')}logos${p(')')}\n    .${f('ebAlignment')}${p('(')}${d('center')}${p(')')}`,
      compose: `${t('EBFooter')}${p('(')}\n    title ${eq} ${str('In partnership with')}${p(',')}\n    partnerLogos ${eq} logos${p(',')}\n    alignment ${eq} ${t('EBFooterAlignment')}${p('.')}${d('Center')}\n${p(')')}`,
    },
    'variant-2-·-acknowledgement-disclaimer-+-gcash×partner-(left)': {
      swift:   `${t('EBFooter')}${p('(')}disclaimer${p(': ')}${str('Acknowledgement disclaimer copy')}${p(')')}\n    .${f('ebPartnerLogos')}${p('(')}${p('[')}gcashLogo${p(', ')}partnerLogo${p(']')}${p(')')}\n    .${f('ebAlignment')}${p('(')}${d('leading')}${p(')')}`,
      compose: `${t('EBFooter')}${p('(')}\n    disclaimer ${eq} ${str('Acknowledgement disclaimer copy')}${p(',')}\n    partnerLogos ${eq} logos${p(',')}\n    alignment ${eq} ${t('EBFooterAlignment')}${p('.')}${d('Leading')}\n${p(')')}`,
    },
  },
  header: {
    'title-only-(baseline)': {
      swift:   `${t('EBHeader')}${p('(')}${str('Page title')}${p(')')}`,
      compose: `${t('EBHeader')}${p('(')}title ${eq} ${str('Page title')}${p(')')}`,
    },
    'full-stack-(preamble-+-title-+-description)': {
      swift:   `${t('EBHeader')}${p('(')}${str('Page title')}${p(')')}\n    .${f('ebPreamble')}${p('(')}${str('PREAMBLE')}${p(')')}\n    .${f('ebDescription')}${p('(')}${str('Description body copy')}${p(')')}`,
      compose: `${t('EBHeader')}${p('(')}\n    title ${eq} ${str('Page title')}${p(',')}\n    preamble ${eq} ${str('PREAMBLE')}${p(',')}\n    description ${eq} ${str('Description body copy')}\n${p(')')}`,
    },
  },
  'header-centered': {
    'dark-/-brand-surface': {
      swift:   `${t('EBCenteredHeader')}${p('(')}${str('Page title')}${p(')')}\n    .${f('ebStyle')}${p('(')}${d('brand')}${p(')')}\n    .${f('ebDescription')}${p('(')}${str('Description body copy')}${p(')')}`,
      compose: `${t('EBCenteredHeader')}${p('(')}\n    title ${eq} ${str('Page title')}${p(',')}\n    style ${eq} ${t('EBHeaderStyle')}${p('.')}${d('Brand')}${p(',')}\n    description ${eq} ${str('Description body copy')}\n${p(')')}`,
    },
  },
  'header-transaction': {
    'no-email': {
      swift:   `${t('EBTransactionHeader')}${p('(')}merchantLogo${p(': ')}logo${p(')')}\n    .${f('ebMerchantName')}${p('(')}${str('GCash')}${p(')')}\n    .${f('ebAmount')}${p('(')}${str('PHP 1,500.00')}${p(')')}\n    .${f('ebDate')}${p('(')}date${p(')')}`,
      compose: `${t('EBTransactionHeader')}${p('(')}\n    merchantLogo ${eq} ${p('{ logo }')}${p(',')}\n    merchantName ${eq} ${str('GCash')}${p(',')}\n    amount ${eq} ${str('PHP 1,500.00')}${p(',')}\n    date ${eq} date\n${p(')')}`,
    },
  },
  'header-with-logo': {
    'dark-logo-variant': {
      swift:   `${t('EBLogoHeader')}${p('(')}logo${p(': ')}gcashWordmark${p(')')}\n    .${f('ebActions')}${p('(')}${p('[ ... ]')}${p(')')}`,
      compose: `${t('EBLogoHeader')}${p('(')}\n    logo ${eq} ${p('{ ')}${t('GCashLogo')}${p('() }')}${p(',')}\n    actions ${eq} ${p('{ ... }')}\n${p(')')}`,
    },
  },
  'inline-text': {
    'default-—-label-+-value': {
      swift:   `${t('EBInlineText')}${p('(')}label${p(': ')}${str('Amount')}${p(', ')}value${p(': ')}${str('PHP 1,500.00')}${p(')')}`,
      compose: `${t('EBInlineText')}${p('(')}\n    label ${eq} ${str('Amount')}${p(',')}\n    value ${eq} ${str('PHP 1,500.00')}\n${p(')')}`,
    },
  },
  toast: {
    'default-/-dark-—-with-icon,-large-label': {
      swift:   `${t('EBToast')}${p('(')}${str('Action successful')}${p(')')}\n    .${f('ebStyle')}${p('(')}${d('default')}${p(')')}\n    .${f('ebIcon')}${p('(')}${t('Image')}${p('(')}systemName${p(': ')}${str('checkmark')}${p('))')}`,
      compose: `${t('EBToast')}${p('(')}\n    message ${eq} ${str('Action successful')}${p(',')}\n    style ${eq} ${t('EBToastStyle')}${p('.')}${d('Default')}${p(',')}\n    icon ${eq} ${p('{ ')}${t('Icon')}${p('(')}${t('Icons')}${p('.')}${d('Filled')}${p('.')}${d('Check')}${p(', null) }')}\n${p(')')}`,
    },
    'default-—-no-icon,-small-label': {
      swift:   `${t('EBToast')}${p('(')}${str('Notice')}${p(')')}`,
      compose: `${t('EBToast')}${p('(')}message ${eq} ${str('Notice')}${p(')')}`,
    },
  },
  'toast-with-button': {
    'default-—-with-description': {
      swift:   `${t('EBToast')}${p('(')}${str('Removed from favorites')}${p(')')}\n    .${f('ebDescription')}${p('(')}${str('Tap undo to revert')}${p(')')}\n    .${f('ebAction')}${p('(')}${str('Undo')}${p(', ')}action${p(': { }')}${p(')')}`,
      compose: `${t('EBToast')}${p('(')}\n    message ${eq} ${str('Removed from favorites')}${p(',')}\n    description ${eq} ${str('Tap undo to revert')}${p(',')}\n    action ${eq} ${t('EBToastAction')}${p('(')}${str('Undo')}${p(') { }')}\n${p(')')}`,
    },
    'light-—-no-description': {
      swift:   `${t('EBToast')}${p('(')}${str('Saved')}${p(')')}\n    .${f('ebStyle')}${p('(')}${d('light')}${p(')')}\n    .${f('ebAction')}${p('(')}${str('View')}${p(', ')}action${p(': { }')}${p(')')}`,
      compose: `${t('EBToast')}${p('(')}\n    message ${eq} ${str('Saved')}${p(',')}\n    style ${eq} ${t('EBToastStyle')}${p('.')}${d('Light')}${p(',')}\n    action ${eq} ${t('EBToastAction')}${p('(')}${str('View')}${p(') { }')}\n${p(')')}`,
    },
  },
  toggle: {
    'default-·-off': {
      swift:   `${t('EBToggle')}${p('(')}isOn${p(': ')}$enabled${p(')')}`,
      compose: `${t('EBToggle')}${p('(')}\n    checked ${eq} enabled${p(',')}\n    onCheckedChange ${eq} ${p('{ enabled = it }')}\n${p(')')}`,
    },
  },
  'toggle-with-label': {
    'today-—-single-frame': {
      swift:   `${t('EBToggle')}${p('(')}isOn${p(': ')}$enabled${p(', ')}label${p(': ')}${str('Allow notifications')}${p(')')}`,
      compose: `${t('EBToggle')}${p('(')}\n    label ${eq} ${str('Allow notifications')}${p(',')}\n    checked ${eq} enabled${p(',')}\n    onCheckedChange ${eq} ${p('{ enabled = it }')}\n${p(')')}`,
    },
  },
  'carousel-card': {
    'default': {
      swift:   `${t('EBCarousel')}${p('(')}items${p(': ')}cards${p(') {')} card ${k('in')}\n    ${t('EBCarouselCard')}${p('(')}card${p(')')}\n${p('}')}`,
      compose: `${t('EBCarousel')}${p('(')}items ${eq} cards${p(') {')} card ${p('->')}\n    ${t('EBCarouselCard')}${p('(')}card${p(')')}\n${p('}')}`,
    },
  },
  'carousel-discount-card': {
    'default': {
      swift:   `${t('EBDiscountCard')}${p('(')}discount${p(': ')}item${p(')')}\n    .${f('ebHeroImage')}${p('(')}item.image${p(')')}\n    .${f('ebPercentBadge')}${p('(')}item.percent${p(')')}`,
      compose: `${t('EBDiscountCard')}${p('(')}\n    heroImage ${eq} ${p('{ ')}${t('Image')}${p('(')}item.image${p(', null) }')}${p(',')}\n    percent ${eq} item.percent${p(',')}\n    label ${eq} item.label\n${p(')')}`,
    },
  },
  'generic-card': {
    'default-—-iconsize=64': {
      swift:   `${t('EBCard')}${p('(')}${str('Heading')}${p(')')}\n    .${f('ebDescription')}${p('(')}${str('Description body')}${p(')')}\n    .${f('ebIcon')}${p('(')}${t('Image')}${p('(')}systemName${p(': ')}${str('star.fill')}${p('))')}\n    .${f('ebIconSize')}${p('(')}64${p(')')}\n    .${f('ebBlurb')}${p('(')}${str('Blurb')}${p(')')}`,
      compose: `${t('EBCard')}${p('(')}\n    title ${eq} ${str('Heading')}${p(',')}\n    description ${eq} ${str('Description body')}${p(',')}\n    leadingIcon ${eq} ${p('{ ')}${t('Icon')}${p('(')}${t('Icons')}${p('.')}${d('Filled')}${p('.')}${d('Star')}${p(', null) }')}${p(',')}\n    iconSize ${eq} ${t('EBIconSize')}${p('.')}${d('Size64')}${p(',')}\n    blurb ${eq} ${str('Blurb')}\n${p(')')}`,
    },
  },
  'generic-transaction-card': {
    'default-—-label-+-badge-+-date-+-amount': {
      swift:   `${t('EBTransactionCard')}${p('(')}transaction${p(': ')}item${p(')')}\n    .${f('ebBadge')}${p('(')}${t('EBBadge')}${p('(')}${str('Pending')}${p(', ')}intent${p(': ')}${d('information')}${p('))')}`,
      compose: `${t('EBTransactionCard')}${p('(')}\n    transaction ${eq} item${p(',')}\n    badge ${eq} ${t('EBBadge')}${p('(')}${str('Pending')}${p(', ')}${t('EBBadgeIntent')}${p('.')}${d('Information')}${p(')')}\n${p(')')}`,
    },
  },
  'progress-bar': {
    'determinate-nodes-27:64947-through-27:64985': {
      swift:   `${t('EBProgressBar')}${p('(')}value${p(': ')}0.6${p(')')}`,
      compose: `${t('EBProgressBar')}${p('(')}progress ${eq} 0.6f${p(')')}`,
    },
  },
  'stepper-bullet': {
    'stepper---bullet-canonical-node-27:48287-(5-steps)-·-sibling-frames-27:48235-(3-steps),-27:48254-(4-steps)': {
      swift:   `${t('EBStepper')}${p('(')}currentStep${p(': ')}2${p(')')}\n    .${f('ebTotalSteps')}${p('(')}5${p(')')}\n    .${f('ebStyle')}${p('(')}${d('bullet')}${p(')')}`,
      compose: `${t('EBStepper')}${p('(')}\n    currentStep ${eq} 2${p(',')}\n    totalSteps ${eq} 5${p(',')}\n    style ${eq} ${t('EBStepperStyle')}${p('.')}${d('Bullet')}\n${p(')')}`,
    },
  },
  'stepper-circular': {
    'stepper---circular-canonical-node-27:47768-(10-steps)-·-sibling-frames-27:47819…27:48036': {
      swift:   `${t('EBStepper')}${p('(')}currentStep${p(': ')}4${p(')')}\n    .${f('ebTotalSteps')}${p('(')}10${p(')')}\n    .${f('ebStyle')}${p('(')}${d('circular')}${p(')')}`,
      compose: `${t('EBStepper')}${p('(')}\n    currentStep ${eq} 4${p(',')}\n    totalSteps ${eq} 10${p(',')}\n    style ${eq} ${t('EBStepperStyle')}${p('.')}${d('Circular')}\n${p(')')}`,
    },
  },
  'stepper-dash': {
    'stepper---dash-component-set-18649:5223-·-variants-18649:5224…18649:5323': {
      swift:   `${t('EBStepper')}${p('(')}currentStep${p(': ')}3${p(')')}\n    .${f('ebTotalSteps')}${p('(')}7${p(')')}\n    .${f('ebStyle')}${p('(')}${d('dash')}${p(')')}`,
      compose: `${t('EBStepper')}${p('(')}\n    currentStep ${eq} 3${p(',')}\n    totalSteps ${eq} 7${p(',')}\n    style ${eq} ${t('EBStepperStyle')}${p('.')}${d('Dash')}\n${p(')')}`,
    },
  },
};

let total = 0;
let touched = 0;
for (const [slug, perCard] of Object.entries(PLAN)) {
  const file = path.join(DATA_DIR, `${slug}.ts`);
  if (!fs.existsSync(file)) { console.error(`! ${slug}: file missing`); continue; }
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/= ({[\s\S]*});\s*$/);
  if (!m) { console.error(`! ${slug}: parse failed`); continue; }
  const data = (new Function('return ' + m[1]))();
  let n = 0;
  for (const card of data.style.specCards) {
    const dev = perCard[card.cardKey];
    if (!dev) continue;
    card.swift = dev.swift;
    card.compose = dev.compose;
    n++;
    total++;
  }
  if (n > 0) {
    fs.writeFileSync(file, `import type { ComponentData } from '../types';\n\nexport const ${safeIdent(slug)}: ComponentData = ${JSON.stringify(data, null, 2)};\n`, 'utf8');
    touched++;
    console.log(`✓ ${slug}: ${n} card(s) DEV authored`);
  }
}
console.log(`\nDone. ${total} card(s) across ${touched} components.`);
