import type { ComponentData } from '../types';
import { accordion } from './accordion';
import { actionListCounter } from './action-list-counter';
import { actionListDescription } from './action-list-description';
import { actionList } from './action-list';
import { adCarousel } from './ad-carousel';
import { adSpace } from './ad-space';
import { alert } from './alert';
import { amountTextField } from './amount-text-field';
import { avatarGroup } from './avatar-group';
import { avatar } from './avatar';
import { badge } from './badge';
import { banner } from './banner';
import { bottomSheet } from './bottom-sheet';
import { button } from './button';
import { callout } from './callout';
import { carouselCard } from './carousel-card';
import { carouselItem } from './carousel-item';
import { chatField } from './chat-field';
import { checkbox } from './checkbox';
import { chip } from './chip';
import { counter } from './counter';
import { countdownPromo } from './countdown-promo';
import { countdownUnit } from './countdown-unit';
import { countdown } from './countdown';
import { datePickerCalendar } from './date-picker-calendar';
import { datePickerHeaderTrigger } from './date-picker-header-trigger';
import { datePickerHeader } from './date-picker-header';
import { datePickerCell } from './date-picker-cell';
import { datePickerGroup } from './date-picker-group';
import { datePickerItem } from './date-picker-item';
import { datePicker } from './date-picker';
import { dropdownItemGroup } from './dropdown-item-group';
import { dropdownItem } from './dropdown-item';
import { dropdown } from './dropdown';
import { emptyState } from './empty-state';
import { footer } from './footer';
import { genericCard } from './generic-card';
import { genericTransactionCard } from './generic-transaction-card';
import { headerCentered } from './header-centered';
import { headerTransaction } from './header-transaction';
import { headerWithLogo } from './header-with-logo';
import { header } from './header';
import { horizontalVoucher } from './horizontal-voucher';
import { inlineMessage } from './inline-message';
import { inlineText } from './inline-text';
import { inputField } from './input-field';
import { labeledField } from './labeled-field';
import { listItemAsset } from './list-item-asset';
import { listItem } from './list-item';
import { list } from './list';
import { menuGrid } from './menu-grid';
import { modal } from './modal';
import { monthYearPickerItem } from './month-year-picker-item';
import { onboardingTooltip } from './onboarding-tooltip';
import { overlay } from './overlay';
import { progressBar } from './progress-bar';
import { radioButtonWithLabel } from './radio-button-with-label';
import { radioButton } from './radio-button';
import { recipientField } from './recipient-field';
import { searchField } from './search-field';
import { segmentedControlButton } from './segmented-control-button';
import { segmentedControlGroup } from './segmented-control-group';
import { selectField } from './select-field';
import { serviceItem } from './service-item';
import { slider } from './slider';
import { stepperBullet } from './stepper-bullet';
import { stepperCircular } from './stepper-circular';
import { stepperDash } from './stepper-dash';
import { subtextMessage } from './subtext-message';
import { tabItem } from './tab-item';
import { tableScheduling } from './table-scheduling';
import { tableTransaction } from './table-transaction';
import { table } from './table';
import { tabs } from './tabs';
import { termsConditionsAccordion } from './terms-conditions-accordion';
import { textArea } from './text-area';
import { titleBar } from './title-bar';
import { toastWithButton } from './toast-with-button';
import { toast } from './toast';
import { toggleSegmentedControl } from './toggle-segmented-control';
import { toggleWithLabel } from './toggle-with-label';
import { toggle } from './toggle';
import { tooltip } from './tooltip';
import { tooltipBlurred } from './tooltip-blurred';
import { tooltipV2 } from './tooltip-v2';
import { uploadFile } from './upload-file';
import { verticalVoucher } from './vertical-voucher';
import { viewOnlyField } from './view-only-field';
import { visualPopup } from './visual-popup';
import { voucher } from './voucher';
import { voucherAsset } from './voucher-asset';
import { voucherCardHorizontal } from './voucher-card-horizontal';
import { voucherDetails } from './voucher-details';

export const componentMap: Record<string, ComponentData> = {
  'accordion': accordion,
  'action-list-counter': actionListCounter,
  'action-list-description': actionListDescription,
  'action-list': actionList,
  'ad-carousel': adCarousel,
  'ad-space': adSpace,
  'alert': alert,
  'amount-text-field': amountTextField,
  'avatar-group': avatarGroup,
  'avatar': avatar,
  'badge': badge,
  'banner': banner,
  'bottom-sheet': bottomSheet,
  'button': button,
  'callout': callout,
  'carousel-card': carouselCard,
  'carousel-item': carouselItem,
  'chat-field': chatField,
  'checkbox': checkbox,
  'chip': chip,
  'counter': counter,
  'countdown-promo': countdownPromo,
  'countdown-unit': countdownUnit,
  'countdown': countdown,
  'date-picker-calendar': datePickerCalendar,
  'date-picker-header-trigger': datePickerHeaderTrigger,
  'date-picker-header': datePickerHeader,
  'date-picker-cell': datePickerCell,
  'date-picker-group': datePickerGroup,
  'date-picker-item': datePickerItem,
  'date-picker': datePicker,
  'dropdown-item-group': dropdownItemGroup,
  'dropdown-item': dropdownItem,
  'dropdown': dropdown,
  'empty-state': emptyState,
  'footer': footer,
  'generic-card': genericCard,
  'generic-transaction-card': genericTransactionCard,
  'header-centered': headerCentered,
  'header-transaction': headerTransaction,
  'header-with-logo': headerWithLogo,
  'header': header,
  'horizontal-voucher': horizontalVoucher,
  'inline-message': inlineMessage,
  'inline-text': inlineText,
  'input-field': inputField,
  'labeled-field': labeledField,
  'list-item-asset': listItemAsset,
  'list-item': listItem,
  'list': list,
  'menu-grid': menuGrid,
  'modal': modal,
  'month-year-picker-item': monthYearPickerItem,
  'onboarding-tooltip': onboardingTooltip,
  'overlay': overlay,
  'progress-bar': progressBar,
  'radio-button-with-label': radioButtonWithLabel,
  'radio-button': radioButton,
  'recipient-field': recipientField,
  'search-field': searchField,
  'segmented-control-button': segmentedControlButton,
  'segmented-control-group': segmentedControlGroup,
  'select-field': selectField,
  'service-item': serviceItem,
  'slider': slider,
  'stepper-bullet': stepperBullet,
  'stepper-circular': stepperCircular,
  'stepper-dash': stepperDash,
  'subtext-message': subtextMessage,
  'tab-item': tabItem,
  'table-scheduling': tableScheduling,
  'table-transaction': tableTransaction,
  'table': table,
  'tabs': tabs,
  'terms-conditions-accordion': termsConditionsAccordion,
  'text-area': textArea,
  'title-bar': titleBar,
  'toast-with-button': toastWithButton,
  'toast': toast,
  'toggle-segmented-control': toggleSegmentedControl,
  'toggle-with-label': toggleWithLabel,
  'toggle': toggle,
  'tooltip': tooltip,
  'tooltip-blurred': tooltipBlurred,
  'tooltip-v2': tooltipV2,
  'upload-file': uploadFile,
  'vertical-voucher': verticalVoucher,
  'view-only-field': viewOnlyField,
  'visual-popup': visualPopup,
  'voucher': voucher,
  'voucher-asset': voucherAsset,
  'voucher-card-horizontal': voucherCardHorizontal,
  'voucher-details': voucherDetails,
};

/**
 * Nav / search manifest — derived from `componentMap` so it can never drift.
 *
 * Previously this was a hand-maintained duplicate of every component's meta,
 * which silently went stale whenever a data file changed (e.g. a component's
 * badges were updated but the sidebar status dot kept the old colour).
 *
 * Consumers read slug / name / node / badges / navGroup / navIconSvg — all of
 * which live on `meta`. Order follows componentMap's insertion order; every
 * consumer sorts for display anyway.
 */
export const componentManifest = Object.values(componentMap).map((c) => c.meta);
