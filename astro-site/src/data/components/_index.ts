import type { ComponentData } from '../types';
import { accordion } from './accordion';
import { actionListCounter } from './action-list-counter';
import { actionListDescription } from './action-list-description';
import { actionList } from './action-list';
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
import { countdown } from './countdown';
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
import { voucherAsset } from './voucher-asset';
import { voucherCardHorizontal } from './voucher-card-horizontal';
import { voucherDetails } from './voucher-details';

export const componentMap: Record<string, ComponentData> = {
  'accordion': accordion,
  'action-list-counter': actionListCounter,
  'action-list-description': actionListDescription,
  'action-list': actionList,
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
  'countdown': countdown,
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
  'voucher-asset': voucherAsset,
  'voucher-card-horizontal': voucherCardHorizontal,
  'voucher-details': voucherDetails,
};

export const componentManifest = [
  {
    "slug": "accordion",
    "name": "Accordion",
    "node": "16870:9288",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      \n      <rect x=\"2\" y=\"2\" width=\"28\" height=\"10\" rx=\"2\" fill=\"#EEF3FB\" stroke=\"#B8CFF8\" stroke-width=\"1\"/>\n      \n      <rect x=\"6\" y=\"6\" width=\"14\" height=\"2\" rx=\"1\" fill=\"#7AAAE0\"/>\n      \n      <path d=\"M23 6.5 L25.5 8 L23 9.5\" stroke=\"#0056D6\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n\n      \n      <rect x=\"2\" y=\"14\" width=\"28\" height=\"16\" rx=\"2\" fill=\"#F4F7FB\" stroke=\"#B8CFF8\" stroke-width=\"1\"/>\n      \n      <rect x=\"6\" y=\"17\" width=\"14\" height=\"2\" rx=\"1\" fill=\"#7AAAE0\"/>\n      \n      <path d=\"M23 19.5 L25.5 18 L23 16.5\" stroke=\"#0056D6\" stroke-width=\"1.2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\" transform=\"rotate(90 24 18)\"/>\n      \n      <rect x=\"6\" y=\"22\" width=\"18\" height=\"1.5\" rx=\"0.75\" fill=\"#C5D5E8\"/>\n      <rect x=\"6\" y=\"25.5\" width=\"13\" height=\"1.5\" rx=\"0.75\" fill=\"#C5D5E8\"/>\n    </svg>"
  },
  {
    "slug": "action-list-counter",
    "name": "Action List - with Counter",
    "node": "18577:14637",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Action List"
  },
  {
    "slug": "action-list-description",
    "name": "Action List - with Description",
    "node": "18577:14604",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Action List"
  },
  {
    "slug": "action-list",
    "name": "Action List",
    "node": "18577:14545",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Action List"
  },
  {
    "slug": "ad-space",
    "name": "Ad Space",
    "node": "18563:9789",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "ready",
        "label": "Ready"
      }
    ],
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"3\" y=\"6\" width=\"26\" height=\"8\" rx=\"1.5\" fill=\"#005CE5\"/>\n      <text x=\"16\" y=\"12\" text-anchor=\"middle\" fill=\"white\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Ad</text>\n      <rect x=\"3\" y=\"17\" width=\"12\" height=\"9\" rx=\"1.5\" fill=\"#E6E1EF\"/>\n      <rect x=\"17\" y=\"17\" width=\"12\" height=\"9\" rx=\"1.5\" fill=\"#EEF2F9\"/>\n    </svg>"
  },
  {
    "slug": "alert",
    "name": "Alert",
    "node": "18444:2012",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ]
  },
  {
    "slug": "amount-text-field",
    "name": "Amount Text Field",
    "node": "152:48122",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Form Elements"
  },
  {
    "slug": "avatar-group",
    "name": "Avatar Group",
    "node": "18276:4554",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Avatar"
  },
  {
    "slug": "avatar",
    "name": "Avatar",
    "node": "17143:4488",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Avatar",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      \n      <circle cx=\"11\" cy=\"12\" r=\"9\" fill=\"#005CE5\" stroke=\"#E5EBF4\" stroke-width=\"1.5\"/>\n      <text x=\"11\" y=\"15\" text-anchor=\"middle\" fill=\"white\" font-size=\"7\" font-weight=\"700\" font-family=\"system-ui\">DM</text>\n      \n      <circle cx=\"23\" cy=\"20\" r=\"6\" fill=\"#F6F9FD\" stroke=\"#E5EBF4\" stroke-width=\"1\"/>\n      <text x=\"23\" y=\"22.5\" text-anchor=\"middle\" fill=\"#2340A9\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">LM</text>\n    </svg>"
  },
  {
    "slug": "badge",
    "name": "Badge",
    "node": "18482:28972",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      \n      <rect x=\"2\" y=\"5\" width=\"28\" height=\"10\" rx=\"5\" fill=\"#005CE5\"/>\n      <text x=\"16\" y=\"12\" text-anchor=\"middle\" fill=\"white\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Label</text>\n      \n      <rect x=\"4\" y=\"19\" width=\"24\" height=\"10\" rx=\"5\" fill=\"#E5F1FF\"/>\n      <text x=\"16\" y=\"26\" text-anchor=\"middle\" fill=\"#005CE5\" font-size=\"5\" font-weight=\"700\" font-family=\"system-ui\">Label</text>\n    </svg>"
  },
  {
    "slug": "banner",
    "name": "Banner",
    "node": "756:82673",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"2\" y=\"8\" width=\"28\" height=\"16\" rx=\"2\" fill=\"#EEF3FB\" stroke=\"#B8CFF8\" stroke-width=\"1\"/>\n      <circle cx=\"8\" cy=\"16\" r=\"4\" fill=\"#005CE5\"/>\n      <rect x=\"14\" y=\"12\" width=\"12\" height=\"2\" rx=\"1\" fill=\"#072592\"/>\n      <rect x=\"14\" y=\"16\" width=\"10\" height=\"1.5\" rx=\"0.75\" fill=\"#6780A9\"/>\n      <rect x=\"14\" y=\"20\" width=\"6\" height=\"1.5\" rx=\"0.75\" fill=\"#005CE5\"/>\n    </svg>"
  },
  {
    "slug": "bottom-sheet",
    "name": "Bottom Sheet",
    "node": "12817:43833",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ]
  },
  {
    "slug": "button",
    "name": "Button",
    "node": "17104:184842",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      \n      <rect x=\"2\" y=\"8\" width=\"28\" height=\"10\" rx=\"5\" fill=\"#005CE5\"/>\n      \n      <rect x=\"9\" y=\"12\" width=\"14\" height=\"2\" rx=\"1\" fill=\"white\" opacity=\"0.9\"/>\n      \n      <rect x=\"2\" y=\"21\" width=\"28\" height=\"8\" rx=\"4\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"1.5\"/>\n      <rect x=\"10\" y=\"24\" width=\"12\" height=\"2\" rx=\"1\" fill=\"#005CE5\" opacity=\"0.8\"/>\n    </svg>"
  },
  {
    "slug": "callout",
    "name": "Callout",
    "node": "23:179895",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ]
  },
  {
    "slug": "carousel-card",
    "name": "Carousel Card",
    "node": "5655:42547",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Carousel"
  },
  {
    "slug": "carousel-item",
    "name": "Carousel Item",
    "node": "5776:37969",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Carousel"
  },
  {
    "slug": "chat-field",
    "name": "Chat Field",
    "node": "23:145915",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Chat"
  },
  {
    "slug": "checkbox",
    "name": "Checkbox",
    "node": "17143:2464",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"4\" y=\"8\" width=\"10\" height=\"10\" rx=\"2\" fill=\"none\" stroke=\"#D7E0EF\" stroke-width=\"1.5\"/>\n      <rect x=\"18\" y=\"8\" width=\"10\" height=\"10\" rx=\"2\" fill=\"#1972F9\"/>\n      <path d=\"M21 13.5 L22.5 15 L25.5 11.5\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>\n      <rect x=\"4\" y=\"22\" width=\"6\" height=\"1.5\" rx=\"0.75\" fill=\"#C5D5E8\"/>\n      <rect x=\"13\" y=\"22\" width=\"8\" height=\"1.5\" rx=\"0.75\" fill=\"#C5D5E8\"/>\n      <rect x=\"24\" y=\"22\" width=\"4\" height=\"1.5\" rx=\"0.75\" fill=\"#C5D5E8\"/>\n    </svg>"
  },
  {
    "slug": "chip",
    "name": "Chip",
    "node": "18336:22243",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ]
  },
  {
    "slug": "counter",
    "name": "Counter",
    "node": "18482:71321",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ]
  },
  {
    "slug": "countdown",
    "name": "Countdown",
    "node": "4076:9090",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ]
  },
  {
    "slug": "date-picker-group",
    "name": "Date Picker - Group",
    "node": "18431:2822",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Date Picker"
  },
  {
    "slug": "date-picker-item",
    "name": "Date Picker - Item",
    "node": "12874:42180",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Date Picker"
  },
  {
    "slug": "date-picker",
    "name": "Date Picker",
    "node": "12879:49826",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Date Picker"
  },
  {
    "slug": "dropdown-item-group",
    "name": "Dropdown Item Group",
    "node": "6383:3446",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "na",
        "label": "Not Applicable"
      }
    ],
    "navGroup": "Dropdown"
  },
  {
    "slug": "dropdown-item",
    "name": "Dropdown Item",
    "node": "18577:13033",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Dropdown"
  },
  {
    "slug": "dropdown",
    "name": "Dropdown",
    "node": "18482:31910",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Dropdown"
  },
  {
    "slug": "empty-state",
    "name": "Empty State",
    "node": "27:169325",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ]
  },
  {
    "slug": "footer",
    "name": "Footer",
    "node": "21:215190",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Header"
  },
  {
    "slug": "generic-card",
    "name": "Generic Card",
    "node": "18482:35806",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Card"
  },
  {
    "slug": "generic-transaction-card",
    "name": "Generic Transaction Card",
    "node": "18482:35753",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Card"
  },
  {
    "slug": "header-centered",
    "name": "Header - Centered",
    "node": "18430:2858",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Header"
  },
  {
    "slug": "header-transaction",
    "name": "Header - Transaction",
    "node": "18430:2897",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Header"
  },
  {
    "slug": "header-with-logo",
    "name": "Header - With Logo",
    "node": "18430:2875",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Header"
  },
  {
    "slug": "header",
    "name": "Header",
    "node": "18430:2919",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Header"
  },
  {
    "slug": "horizontal-voucher",
    "name": "Horizontal Voucher",
    "node": "5121:4533",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Voucher",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"3\" y=\"5\" width=\"26\" height=\"22\" rx=\"2\" fill=\"#FFFFFF\" stroke=\"#C8CDD5\" stroke-width=\"1\"/>\n      <path d=\"M3 5h26a2 2 0 0 1 2 2v7H1V7a2 2 0 0 1 2-2Z\" fill=\"#D63A2F\"/>\n      <rect x=\"24\" y=\"7.5\" width=\"6\" height=\"3\" rx=\"0.6\" fill=\"#1972F9\"/>\n      <text x=\"27\" y=\"9.9\" text-anchor=\"middle\" fill=\"white\" font-size=\"2.2\" font-weight=\"700\" font-family=\"system-ui\">35%</text>\n      <rect x=\"5\" y=\"17\" width=\"4\" height=\"1.6\" rx=\"0.3\" fill=\"#2340A9\"/>\n      <rect x=\"9.5\" y=\"17\" width=\"4\" height=\"1.6\" rx=\"0.3\" fill=\"#D61B2C\"/>\n      <rect x=\"14\" y=\"17\" width=\"3\" height=\"1.6\" rx=\"0.3\" fill=\"#B50707\"/>\n      <rect x=\"17.5\" y=\"17\" width=\"5\" height=\"1.6\" rx=\"0.3\" fill=\"#1972F9\"/>\n      <rect x=\"5\" y=\"20\" width=\"12\" height=\"1.3\" rx=\"0.3\" fill=\"#0A2757\"/>\n      <rect x=\"5\" y=\"22.5\" width=\"5\" height=\"1.3\" rx=\"0.3\" fill=\"#005CE5\"/>\n      <rect x=\"11\" y=\"22.5\" width=\"5\" height=\"1\" rx=\"0.3\" fill=\"#90A8D0\"/>\n      <rect x=\"5\" y=\"24.8\" width=\"14\" height=\"0.9\" rx=\"0.3\" fill=\"#6780A9\"/>\n    </svg>"
  },
  {
    "slug": "inline-message",
    "name": "Inline Message",
    "node": "27:168910",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ]
  },
  {
    "slug": "inline-text",
    "name": "Inline Text",
    "node": "18652:71101",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ]
  },
  {
    "slug": "input-field",
    "name": "Input Field",
    "node": "17758:3687",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Form Elements"
  },
  {
    "slug": "labeled-field",
    "name": "Labeled Field",
    "node": "17758:3713",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Form Elements"
  },
  {
    "slug": "list-item-asset",
    "name": "List Item Asset",
    "node": "18482:34406",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "List"
  },
  {
    "slug": "list-item",
    "name": "List Item",
    "node": "18482:34429",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "List"
  },
  {
    "slug": "list",
    "name": "List",
    "node": "18482:34737",
    "badges": [
      {
        "kind": "remove",
        "label": "Remove"
      },
      {
        "kind": "na",
        "label": "Not Applicable"
      }
    ],
    "navGroup": "List"
  },
  {
    "slug": "menu-grid",
    "name": "Menu Grid",
    "node": "18320:14332",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ]
  },
  {
    "slug": "modal",
    "name": "Modal",
    "node": "18507:71705",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ]
  },
  {
    "slug": "month-year-picker-item",
    "name": "Month and Year Picker - Item",
    "node": "18414:5854",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Date Picker"
  },
  {
    "slug": "onboarding-tooltip",
    "name": "Onboarding - Tooltip",
    "node": "51:17066",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Tooltip"
  },
  {
    "slug": "overlay",
    "name": "Overlay",
    "node": "47:329691",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ]
  },
  {
    "slug": "progress-bar",
    "name": "Progress Bar",
    "node": "18577:13227",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"3\" y=\"14\" width=\"26\" height=\"4\" rx=\"2\" fill=\"#D2E5FF\"/>\n      <rect x=\"3\" y=\"14\" width=\"15\" height=\"4\" rx=\"2\" fill=\"#005CE5\"/>\n    </svg>"
  },
  {
    "slug": "radio-button-with-label",
    "name": "Radio Button with Label",
    "node": "18482:35673",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Radio"
  },
  {
    "slug": "radio-button",
    "name": "Radio Button",
    "node": "18482:35698",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Radio"
  },
  {
    "slug": "recipient-field",
    "name": "Recipient Field",
    "node": "17758:3867",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Form Elements"
  },
  {
    "slug": "search-field",
    "name": "Search Field",
    "node": "18577:14520",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Form Elements"
  },
  {
    "slug": "segmented-control-group",
    "name": "Segmented Control - Group",
    "node": "27:30940",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Toggle"
  },
  {
    "slug": "select-field",
    "name": "Select Field",
    "node": "17758:3786",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Form Elements"
  },
  {
    "slug": "service-item",
    "name": "Service Item",
    "node": "20210:2441",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ]
  },
  {
    "slug": "slider",
    "name": "Slider",
    "node": "3235:60722",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ]
  },
  {
    "slug": "stepper-bullet",
    "name": "Stepper - Bullet",
    "node": "27:48287",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Stepper",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle cx=\"9\" cy=\"16\" r=\"2.5\" fill=\"#005CE5\"/>\n      <circle cx=\"16\" cy=\"16\" r=\"2.5\" fill=\"#D2E5FF\"/>\n      <circle cx=\"23\" cy=\"16\" r=\"2.5\" fill=\"#D2E5FF\"/>\n    </svg>"
  },
  {
    "slug": "stepper-circular",
    "name": "Stepper - Circular",
    "node": "27:47768",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Stepper",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle cx=\"7\" cy=\"16\" r=\"4\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"1.5\"/>\n      <circle cx=\"16\" cy=\"16\" r=\"4\" fill=\"none\" stroke=\"#005CE5\" stroke-width=\"1.5\" stroke-dasharray=\"12 20\"/>\n      <circle cx=\"25\" cy=\"16\" r=\"4\" fill=\"none\" stroke=\"#D2E5FF\" stroke-width=\"1.5\"/>\n    </svg>"
  },
  {
    "slug": "stepper-dash",
    "name": "Stepper - Dash",
    "node": "18649:5223",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Stepper",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"3\" y=\"15\" width=\"6\" height=\"2\" rx=\"1\" fill=\"#005CE5\"/>\n      <rect x=\"11\" y=\"15\" width=\"6\" height=\"2\" rx=\"1\" fill=\"#005CE5\"/>\n      <rect x=\"19\" y=\"15\" width=\"6\" height=\"2\" rx=\"1\" fill=\"#D2E5FF\"/>\n      <rect x=\"27\" y=\"15\" width=\"2\" height=\"2\" rx=\"1\" fill=\"#D2E5FF\"/>\n    </svg>"
  },
  {
    "slug": "subtext-message",
    "name": "Subtext Message",
    "node": "18687:71133",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ]
  },
  {
    "slug": "tab-item",
    "name": "Tab Item",
    "node": "18482:33262",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Tabs"
  },
  {
    "slug": "table-scheduling",
    "name": "Table Scheduling",
    "node": "5868:40468",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Table"
  },
  {
    "slug": "table-transaction",
    "name": "Table Transaction",
    "node": "5896:39727",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Table"
  },
  {
    "slug": "table",
    "name": "Table Row",
    "node": "5734:37611",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Table"
  },
  {
    "slug": "tabs",
    "name": "Tabs",
    "node": "18482:33249",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Tabs"
  },
  {
    "slug": "terms-conditions-accordion",
    "name": "Terms & Conditions Accordion",
    "node": "5119:5447",
    "badges": [
      {
        "kind": "remove",
        "label": "Remove"
      },
      {
        "kind": "na",
        "label": "Not Applicable"
      }
    ],
    "navGroup": "Voucher"
  },
  {
    "slug": "text-area",
    "name": "Text Area",
    "node": "3070:21245",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Form Elements"
  },
  {
    "slug": "title-bar",
    "name": "Title Bar",
    "node": "23:175148",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"2\" y=\"4\" width=\"28\" height=\"10\" rx=\"2\" fill=\"#1972F9\"/>\n      <path d=\"M6 9l2-2 2 2\" stroke=\"#FFF\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\" transform=\"rotate(180 8 9)\"/>\n      <text x=\"16\" y=\"10.5\" text-anchor=\"middle\" fill=\"white\" font-size=\"4\" font-weight=\"600\" font-family=\"system-ui\">Title</text>\n      <circle cx=\"25\" cy=\"9\" r=\"2\" stroke=\"#FFF\" stroke-width=\"0.8\" fill=\"none\"/>\n      <rect x=\"2\" y=\"16\" width=\"28\" height=\"8\" rx=\"2\" fill=\"#1972F9\" opacity=\".5\"/>\n      <text x=\"6\" y=\"21.5\" fill=\"white\" font-size=\"5\" font-weight=\"600\" font-family=\"system-ui\">Header</text>\n    </svg>"
  },
  {
    "slug": "toast-with-button",
    "name": "Toast - With Button",
    "node": "27:53205",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Toast"
  },
  {
    "slug": "toast",
    "name": "Toast",
    "node": "27:53135",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Toast"
  },
  {
    "slug": "toggle-segmented-control",
    "name": "Toggle - Segmented Control",
    "node": "27:30929",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Toggle"
  },
  {
    "slug": "toggle-with-label",
    "name": "Toggle - With Label",
    "node": "18482:36538",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Toggle"
  },
  {
    "slug": "toggle",
    "name": "Toggle",
    "node": "18482:36508",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Toggle"
  },
  {
    "slug": "tooltip",
    "name": "Tooltip",
    "node": "6295:79647",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "ready",
        "label": "Ready"
      }
    ],
    "navGroup": "Tooltip"
  },
  {
    "slug": "tooltip-blurred",
    "name": "Tooltip Blurred and Transparent",
    "node": "49:335349",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Tooltip"
  },
  {
    "slug": "tooltip-v2",
    "name": "Tooltip V2",
    "node": "70:14908",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Tooltip"
  },
  {
    "slug": "upload-file",
    "name": "Upload File",
    "node": "18482:35064",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Form Elements"
  },
  {
    "slug": "vertical-voucher",
    "name": "Vertical Voucher",
    "node": "5119:1635",
    "badges": [
      {
        "kind": "consolidate",
        "label": "Consolidate"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Voucher",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"8\" y=\"3\" width=\"16\" height=\"26\" rx=\"2\" fill=\"#FFFFFF\" stroke=\"#C8CDD5\" stroke-width=\"1\"/>\n      <path d=\"M8 3h16a2 2 0 0 1 2 2v8H6V5a2 2 0 0 1 2-2Z\" fill=\"#E6E1EF\"/>\n      <rect x=\"19\" y=\"7\" width=\"7\" height=\"3.5\" rx=\"0.8\" fill=\"#1972F9\"/>\n      <text x=\"22.5\" y=\"9.8\" text-anchor=\"middle\" fill=\"white\" font-size=\"2.4\" font-weight=\"700\" font-family=\"system-ui\">35%</text>\n      <rect x=\"10\" y=\"15\" width=\"5\" height=\"2\" rx=\"0.5\" fill=\"#2340A9\"/>\n      <rect x=\"16\" y=\"15\" width=\"5\" height=\"2\" rx=\"0.5\" fill=\"#D61B2C\"/>\n      <rect x=\"10\" y=\"19\" width=\"10\" height=\"1.3\" rx=\"0.3\" fill=\"#0A2757\"/>\n      <rect x=\"10\" y=\"21\" width=\"8\" height=\"1\" rx=\"0.3\" fill=\"#445C85\"/>\n      <rect x=\"10\" y=\"24\" width=\"5\" height=\"1.2\" rx=\"0.3\" fill=\"#005CE5\"/>\n    </svg>"
  },
  {
    "slug": "view-only-field",
    "name": "View Only Field",
    "node": "18403:4520",
    "badges": [
      {
        "kind": "keep",
        "label": "Keep"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ],
    "navGroup": "Form Elements"
  },
  {
    "slug": "visual-popup",
    "name": "Visual Popup",
    "node": "18477:23788",
    "badges": [
      {
        "kind": "fix",
        "label": "Fix"
      },
      {
        "kind": "refine",
        "label": "Needs Refinement"
      }
    ]
  },
  {
    "slug": "voucher-asset",
    "name": "Voucher Asset",
    "node": "5119:1664",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Voucher",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M4 10a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4v-3Z\" fill=\"#E6E1EF\"/>\n      <rect x=\"18\" y=\"11\" width=\"9\" height=\"5\" rx=\"1\" fill=\"#1972F9\"/>\n      <text x=\"22.5\" y=\"14.7\" text-anchor=\"middle\" fill=\"white\" font-size=\"3.2\" font-weight=\"700\" font-family=\"system-ui\">35%</text>\n    </svg>"
  },
  {
    "slug": "voucher-card-horizontal",
    "name": "Voucher Card Horizontal",
    "node": "5119:1786",
    "badges": [
      {
        "kind": "restructure",
        "label": "Restructure"
      },
      {
        "kind": "rework",
        "label": "Requires Rework"
      }
    ],
    "navGroup": "Voucher",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"3\" y=\"10\" width=\"26\" height=\"12\" rx=\"1.5\" fill=\"#FFFFFF\" stroke=\"#C8CDD5\" stroke-width=\"1\"/>\n      <path d=\"M21 10h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-6V10Z\" fill=\"#005CE5\"/>\n      <circle cx=\"24.5\" cy=\"16\" r=\"2.2\" stroke=\"#FFFFFF\" stroke-width=\"1\" fill=\"none\"/>\n      <circle cx=\"24.5\" cy=\"16\" r=\"0.7\" fill=\"#FFFFFF\"/>\n      <rect x=\"20.6\" y=\"10\" width=\"0.8\" height=\"12\" fill=\"#E6EAF2\"/>\n      <rect x=\"5\" y=\"12\" width=\"12\" height=\"1.6\" rx=\"0.3\" fill=\"#0A2757\"/>\n      <rect x=\"5\" y=\"15\" width=\"8\" height=\"1.3\" rx=\"0.3\" fill=\"#2340A9\"/>\n      <rect x=\"5\" y=\"18.5\" width=\"10\" height=\"1\" rx=\"0.3\" fill=\"#445C85\"/>\n      <rect x=\"21\" y=\"10.5\" width=\"5\" height=\"2\" rx=\"0.3\" fill=\"#2340A9\"/>\n    </svg>"
  },
  {
    "slug": "voucher-details",
    "name": "Voucher Details",
    "node": "5119:5368",
    "badges": [
      {
        "kind": "product-layer",
        "label": "Product Layer"
      },
      {
        "kind": "na",
        "label": "Not Applicable"
      }
    ],
    "navGroup": "Voucher",
    "navIconSvg": "<svg width=\"36\" height=\"36\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect x=\"5\" y=\"4\" width=\"22\" height=\"24\" rx=\"2\" fill=\"#FFFFFF\" stroke=\"#E5EBF4\" stroke-width=\"1\"/>\n      <circle cx=\"9.5\" cy=\"8.5\" r=\"2\" fill=\"#E5EBF4\"/>\n      <rect x=\"13\" y=\"7\" width=\"9\" height=\"1.6\" rx=\"0.5\" fill=\"#0A2757\"/>\n      <rect x=\"13\" y=\"9.5\" width=\"6\" height=\"1.2\" rx=\"0.5\" fill=\"#90A8D0\"/>\n      <line x1=\"6\" y1=\"12\" x2=\"26\" y2=\"12\" stroke=\"#E5EBF4\" stroke-width=\"0.6\" stroke-dasharray=\"1.2 1.2\"/>\n      <rect x=\"7\" y=\"13.5\" width=\"10\" height=\"2\" rx=\"0.5\" fill=\"#005CE5\"/>\n      <rect x=\"7\" y=\"16.5\" width=\"14\" height=\"1.2\" rx=\"0.5\" fill=\"#445C85\" opacity=\".5\"/>\n      <line x1=\"6\" y1=\"19.5\" x2=\"26\" y2=\"19.5\" stroke=\"#E5EBF4\" stroke-width=\"0.6\" stroke-dasharray=\"1.2 1.2\"/>\n      <rect x=\"7\" y=\"21\" width=\"12\" height=\"1.4\" rx=\"0.5\" fill=\"#0A2757\"/>\n      <path d=\"M23 22l1.5 1.5L26 22\" stroke=\"#005CE5\" stroke-width=\"0.9\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n      <rect x=\"7\" y=\"24\" width=\"16\" height=\"1\" rx=\"0.4\" fill=\"#445C85\" opacity=\".4\"/>\n      <rect x=\"7\" y=\"25.5\" width=\"13\" height=\"1\" rx=\"0.4\" fill=\"#445C85\" opacity=\".4\"/>\n    </svg>"
  }
] as const;
