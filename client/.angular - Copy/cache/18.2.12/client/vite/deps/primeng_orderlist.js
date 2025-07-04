import {
  AngleDoubleDownIcon,
  AngleDoubleUpIcon,
  CdkDrag,
  CdkDropList,
  DragDropModule,
  moveItemInArray
} from "./chunk-RH6QJURE.js";
import {
  AngleUpIcon
} from "./chunk-ZH36QACK.js";
import {
  AngleDownIcon
} from "./chunk-WX7TRYDZ.js";
import {
  SearchIcon
} from "./chunk-CIGUBAZO.js";
import {
  ButtonDirective,
  ButtonModule
} from "./chunk-OC76CL5M.js";
import "./chunk-6UXN3PD2.js";
import {
  Ripple,
  RippleModule
} from "./chunk-FIGTEET5.js";
import "./chunk-FKFTTW6J.js";
import "./chunk-WAUJQY35.js";
import {
  FilterService,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule
} from "./chunk-ANVCH7ZM.js";
import {
  ObjectUtils,
  UniqueComponentId
} from "./chunk-KH4B3Y5Q.js";
import {
  DomHandler
} from "./chunk-BUGEQH7Q.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-JLS4HPJ6.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
  ViewEncapsulation$1,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-AA4EXHC7.js";
import "./chunk-4MWRP73S.js";

// node_modules/primeng/fesm2022/primeng-orderlist.mjs
var _c0 = ["listelement"];
var _c1 = ["filter"];
var _c2 = (a0, a1, a2) => ({
  "p-orderlist p-component": true,
  "p-orderlist-striped": a0,
  "p-orderlist-controls-left": a1,
  "p-orderlist-controls-right": a2
});
var _c3 = (a0) => ({
  options: a0
});
var _c4 = (a0, a1, a2) => ({
  "p-highlight": a0,
  "p-disabled": a1,
  "p-focus": a2
});
var _c5 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function OrderList_AngleUpIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleUpIcon");
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "moveupicon");
  }
}
function OrderList_4_ng_template_0_Template(rf, ctx) {
}
function OrderList_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_AngleDoubleUpIcon_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDoubleUpIcon");
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "movetopicon");
  }
}
function OrderList_7_ng_template_0_Template(rf, ctx) {
}
function OrderList_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_7_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_AngleDownIcon_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDownIcon");
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "movedownicon");
  }
}
function OrderList_10_ng_template_0_Template(rf, ctx) {
}
function OrderList_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_10_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_AngleDoubleDownIcon_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDoubleDownIcon");
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "movebottomicon");
  }
}
function OrderList_13_ng_template_0_Template(rf, ctx) {
}
function OrderList_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_13_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 15);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.header);
  }
}
function OrderList_div_15_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderList_div_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 13);
    ɵɵtemplate(1, OrderList_div_15_div_1_Template, 2, 1, "div", 14)(2, OrderList_div_15_ng_container_2_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "header");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate);
  }
}
function OrderList_div_16_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderList_div_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderList_div_16_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 18);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.filterTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, ctx_r1.filterOptions));
  }
}
function OrderList_div_16_ng_template_2_SearchIcon_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "SearchIcon", 23);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-orderlist-filter-icon");
    ɵɵattribute("data-pc-section", "filterIcon");
  }
}
function OrderList_div_16_ng_template_2_span_4_1_ng_template_0_Template(rf, ctx) {
}
function OrderList_div_16_ng_template_2_span_4_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_div_16_ng_template_2_span_4_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function OrderList_div_16_ng_template_2_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 24);
    ɵɵtemplate(1, OrderList_div_16_ng_template_2_span_4_1_Template, 1, 0, null, 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵattribute("data-pc-section", "filterIcon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.filterIconTemplate);
  }
}
function OrderList_div_16_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 19)(1, "input", 20, 2);
    ɵɵlistener("keyup", function OrderList_div_16_ng_template_2_Template_input_keyup_1_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onFilterKeyup($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(3, OrderList_div_16_ng_template_2_SearchIcon_3_Template, 1, 2, "SearchIcon", 21)(4, OrderList_div_16_ng_template_2_span_4_Template, 2, 2, "span", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "filter");
    ɵɵadvance();
    ɵɵproperty("disabled", ctx_r1.disabled);
    ɵɵattribute("placeholder", ctx_r1.filterPlaceholder)("aria-label", ctx_r1.ariaFilterLabel);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r1.filterIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.filterIconTemplate);
  }
}
function OrderList_div_16_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 16);
    ɵɵtemplate(1, OrderList_div_16_ng_container_1_Template, 2, 4, "ng-container", 17)(2, OrderList_div_16_ng_template_2_Template, 5, 6, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const builtInFilterElement_r4 = ɵɵreference(3);
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "filterContainer");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.filterTemplate)("ngIfElse", builtInFilterElement_r4);
  }
}
function OrderList_ng_template_19_li_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderList_ng_template_19_li_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 26);
    ɵɵlistener("click", function OrderList_ng_template_19_li_0_Template_li_click_0_listener($event) {
      ɵɵrestoreView(_r5);
      const ctx_r5 = ɵɵnextContext();
      const item_r7 = ctx_r5.$implicit;
      const i_r8 = ctx_r5.index;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event, item_r7, i_r8, ctx_r1.id + "_" + i_r8));
    })("touchend", function OrderList_ng_template_19_li_0_Template_li_touchend_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onItemTouchEnd());
    })("mousedown", function OrderList_ng_template_19_li_0_Template_li_mousedown_0_listener() {
      ɵɵrestoreView(_r5);
      const i_r8 = ɵɵnextContext().index;
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onOptionMouseDown(i_r8));
    });
    ɵɵtemplate(1, OrderList_ng_template_19_li_0_ng_container_1_Template, 1, 0, "ng-container", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    const item_r7 = ctx_r5.$implicit;
    const i_r8 = ctx_r5.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.id + "_" + i_r8)("ngClass", ɵɵpureFunction3(10, _c4, ctx_r1.isSelected(item_r7), ctx_r1.disabled, ctx_r1.id + "_" + i_r8 === ctx_r1.focusedOptionId()))("cdkDragData", item_r7)("cdkDragDisabled", !ctx_r1.dragdrop);
    ɵɵattribute("aria-selected", ctx_r1.isSelected(item_r7))("data-pc-section", "item")("data-p-highlight", ctx_r1.isSelected(item_r7))("data-p-focused", ctx_r1.id + "_" + i_r8 === ctx_r1.focusedOptionId());
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction2(14, _c5, item_r7, i_r8));
  }
}
function OrderList_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, OrderList_ng_template_19_li_0_Template, 2, 17, "li", 25);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r1.isItemVisible(item_r7));
  }
}
function OrderList_ng_container_20_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderList_ng_container_20_li_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 28);
    ɵɵtemplate(1, OrderList_ng_container_20_li_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "emptyMessage");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.emptyMessageTemplate);
  }
}
function OrderList_ng_container_20_li_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function OrderList_ng_container_20_li_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 28);
    ɵɵtemplate(1, OrderList_ng_container_20_li_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵattribute("data-pc-section", "emptyMessage");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.emptyFilterMessageTemplate);
  }
}
function OrderList_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, OrderList_ng_container_20_li_1_Template, 2, 2, "li", 27)(2, OrderList_ng_container_20_li_2_Template, 2, 2, "li", 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.filterValue || !ctx_r1.emptyFilterMessageTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.filterValue);
  }
}
var OrderList = class _OrderList {
  document;
  platformId;
  renderer;
  el;
  cd;
  filterService;
  config;
  /**
   * Text for the caption.
   * @group Props
   */
  header;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Specifies one or more IDs in the DOM that labels the input field.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Inline style of the list element.
   * @group Props
   */
  listStyle;
  /**
   * A boolean value that indicates whether the component should be responsive.
   * @group Props
   */
  responsive;
  /**
   * When specified displays an input field to filter the items on keyup and decides which fields to search against.
   * @group Props
   */
  filterBy;
  /**
   * Placeholder of the filter input.
   * @group Props
   */
  filterPlaceholder;
  /**
   * Locale to use in filtering. The default locale is the host environment's current locale.
   * @group Props
   */
  filterLocale;
  /**
   * When true metaKey needs to be pressed to select or unselect an item and when set to false selection of each item can be toggled individually. On touch enabled devices, metaKeySelection is turned off automatically.
   * @group Props
   */
  metaKeySelection = false;
  /**
   * Whether to enable dragdrop based reordering.
   * @group Props
   */
  dragdrop = false;
  /**
   * Defines the location of the buttons with respect to the list.
   * @group Props
   */
  controlsPosition = "left";
  /**
   * Defines a string that labels the filter input.
   * @group Props
   */
  ariaFilterLabel;
  /**
   * Defines how the items are filtered.
   * @group Props
   */
  filterMatchMode = "contains";
  /**
   * Indicates the width of the screen at which the component should change its behavior.
   * @group Props
   */
  breakpoint = "960px";
  /**
   * Whether to displays rows with alternating colors.
   * @group Props
   */
  stripedRows;
  /**
   * When present, it specifies that the component should be disabled.
   * @group Props
   */
  disabled = false;
  /**
   * Function to optimize the dom operations by delegating to ngForTrackBy, default algorithm checks for object identity.
   * @group Props
   */
  trackBy = (index, item) => item;
  /**
   * A list of values that are currently selected.
   * @group Props
   */
  set selection(val) {
    this.d_selection = val;
  }
  get selection() {
    return this.d_selection;
  }
  /**
   * Array of values to be displayed in the component.
   * It represents the data source for the list of items.
   * @group Props
   */
  set value(val) {
    this._value = val;
    if (this.filterValue) {
      this.filter();
    }
  }
  get value() {
    return this._value;
  }
  /**
   * Callback to invoke on selection change.
   * @param {*} any - selection instance.
   * @group Emits
   */
  selectionChange = new EventEmitter();
  /**
   * Callback to invoke when list is reordered.
   * @param {*} any - list instance.
   * @group Emits
   */
  onReorder = new EventEmitter();
  /**
   * Callback to invoke when selection changes.
   * @param {OrderListSelectionChangeEvent} event - Custom change event.
   * @group Emits
   */
  onSelectionChange = new EventEmitter();
  /**
   * Callback to invoke when filtering occurs.
   * @param {OrderListFilterEvent} event - Custom filter event.
   * @group Emits
   */
  onFilterEvent = new EventEmitter();
  /**
   * Callback to invoke when the list is focused
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the list is blurred
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  listViewChild;
  filterViewChild;
  templates;
  itemTemplate;
  headerTemplate;
  emptyMessageTemplate;
  emptyFilterMessageTemplate;
  filterTemplate;
  get moveUpAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveUp : void 0;
  }
  get moveTopAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveTop : void 0;
  }
  get moveDownAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveDown : void 0;
  }
  get moveBottomAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.moveBottom : void 0;
  }
  moveUpIconTemplate;
  moveTopIconTemplate;
  moveDownIconTemplate;
  moveBottomIconTemplate;
  filterIconTemplate;
  filterOptions;
  d_selection = [];
  movedUp;
  movedDown;
  itemTouched;
  styleElement;
  id = UniqueComponentId();
  focused = false;
  focusedOptionIndex = -1;
  focusedOption;
  filterValue;
  visibleOptions;
  _value;
  constructor(document, platformId, renderer, el, cd, filterService, config) {
    this.document = document;
    this.platformId = platformId;
    this.renderer = renderer;
    this.el = el;
    this.cd = cd;
    this.filterService = filterService;
    this.config = config;
  }
  ngOnInit() {
    if (this.responsive) {
      this.createStyle();
    }
    if (this.filterBy) {
      this.filterOptions = {
        filter: (value) => this.onFilterKeyup(value),
        reset: () => this.resetFilter()
      };
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "empty":
          this.emptyMessageTemplate = item.template;
          break;
        case "emptyfilter":
          this.emptyFilterMessageTemplate = item.template;
          break;
        case "filter":
          this.filterTemplate = item.template;
          break;
        case "header":
          this.headerTemplate = item.template;
          break;
        case "moveupicon":
          this.moveUpIconTemplate = item.template;
          break;
        case "movetopicon":
          this.moveTopIconTemplate = item.template;
          break;
        case "movedownicon":
          this.moveDownIconTemplate = item.template;
          break;
        case "movebottomicon":
          this.moveBottomIconTemplate = item.template;
          break;
        case "filtericon":
          this.filterIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  ngAfterViewChecked() {
    if (this.movedUp || this.movedDown) {
      let listItems = DomHandler.find(this.listViewChild?.nativeElement, "li.p-highlight");
      let listItem;
      if (listItems.length > 0) {
        if (this.movedUp) listItem = listItems[0];
        else listItem = listItems[listItems.length - 1];
        DomHandler.scrollInView(this.listViewChild?.nativeElement, listItem);
      }
      this.movedUp = false;
      this.movedDown = false;
    }
  }
  onItemClick(event, item, index, selectedId) {
    this.itemTouched = false;
    let focusedIndex = index ? index : ObjectUtils.findIndexInList(this.focusedOption, this.value);
    let selectedIndex = ObjectUtils.findIndexInList(item, this.d_selection);
    let selected = selectedIndex !== -1;
    let metaSelection = this.itemTouched ? false : this.metaKeySelection;
    if (selectedId) {
      this.focusedOptionIndex = selectedId;
    }
    if (metaSelection) {
      let metaKey = event.metaKey || event.ctrlKey;
      if (selected && metaKey) {
        this.d_selection = this.d_selection.filter((val, focusedIndex2) => focusedIndex2 !== selectedIndex);
      } else {
        this.d_selection = metaKey ? this.d_selection ? [...this.d_selection] : [] : [];
        ObjectUtils.insertIntoOrderedArray(item, focusedIndex, this.d_selection, this.value);
      }
    } else {
      if (selected) {
        this.d_selection = this.d_selection.filter((val, focusedIndex2) => focusedIndex2 !== selectedIndex);
      } else {
        this.d_selection = this.d_selection ? [...this.d_selection] : [];
        ObjectUtils.insertIntoOrderedArray(item, focusedIndex, this.d_selection, this.value);
      }
    }
    this.selectionChange.emit(this.d_selection);
    this.onSelectionChange.emit({
      originalEvent: event,
      value: this.d_selection
    });
  }
  onFilterKeyup(event) {
    this.filterValue = event.target.value.trim().toLocaleLowerCase(this.filterLocale);
    this.filter();
    this.onFilterEvent.emit({
      originalEvent: event,
      value: this.visibleOptions
    });
  }
  filter() {
    let searchFields = this.filterBy.split(",");
    this.visibleOptions = this.filterService.filter(this.value, searchFields, this.filterValue, this.filterMatchMode, this.filterLocale);
  }
  /**
   * Callback to invoke on filter reset.
   * @group Method
   */
  resetFilter() {
    this.filterValue = null;
    this.filterViewChild && (this.filterViewChild.nativeElement.value = "");
  }
  isItemVisible(item) {
    if (this.filterValue && this.filterValue.trim().length) {
      for (let i = 0; i < this.visibleOptions.length; i++) {
        if (item == this.visibleOptions[i]) {
          return true;
        }
      }
    } else {
      return true;
    }
  }
  onItemTouchEnd() {
    this.itemTouched = true;
  }
  isSelected(item) {
    return ObjectUtils.findIndexInList(item, this.d_selection) !== -1;
  }
  isEmpty() {
    return this.filterValue ? !this.visibleOptions || this.visibleOptions.length === 0 : !this.value || this.value.length === 0;
  }
  moveUp() {
    if (this.selection) {
      for (let i = 0; i < this.selection.length; i++) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, this.value);
        if (selectedItemIndex != 0 && this.value instanceof Array) {
          let movedItem = this.value[selectedItemIndex];
          let temp = this.value[selectedItemIndex - 1];
          this.value[selectedItemIndex - 1] = movedItem;
          this.value[selectedItemIndex] = temp;
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.movedUp = true;
      this.onReorder.emit(this.selection);
    }
  }
  moveTop() {
    if (this.selection) {
      for (let i = this.selection.length - 1; i >= 0; i--) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, this.value);
        if (selectedItemIndex != 0 && this.value instanceof Array) {
          let movedItem = this.value.splice(selectedItemIndex, 1)[0];
          this.value.unshift(movedItem);
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.onReorder.emit(this.selection);
      this.listViewChild.nativeElement.scrollTop = 0;
    }
  }
  moveDown() {
    if (this.selection) {
      for (let i = this.selection.length - 1; i >= 0; i--) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, this.value);
        if (this.value instanceof Array && selectedItemIndex != this.value.length - 1) {
          let movedItem = this.value[selectedItemIndex];
          let temp = this.value[selectedItemIndex + 1];
          this.value[selectedItemIndex + 1] = movedItem;
          this.value[selectedItemIndex] = temp;
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.movedDown = true;
      this.onReorder.emit(this.selection);
    }
  }
  moveBottom() {
    if (this.selection) {
      for (let i = 0; i < this.selection.length; i++) {
        let selectedItem = this.selection[i];
        let selectedItemIndex = ObjectUtils.findIndexInList(selectedItem, this.value);
        if (this.value instanceof Array && selectedItemIndex != this.value.length - 1) {
          let movedItem = this.value.splice(selectedItemIndex, 1)[0];
          this.value.push(movedItem);
        } else {
          break;
        }
      }
      if (this.dragdrop && this.filterValue) this.filter();
      this.onReorder.emit(this.selection);
      this.listViewChild.nativeElement.scrollTop = this.listViewChild?.nativeElement.scrollHeight;
    }
  }
  onDrop(event) {
    let previousIndex = event.previousIndex;
    let currentIndex = event.currentIndex;
    if (previousIndex !== currentIndex) {
      if (this.visibleOptions) {
        if (this.filterValue) {
          previousIndex = ObjectUtils.findIndexInList(event.item.data, this.value);
          currentIndex = ObjectUtils.findIndexInList(this.visibleOptions[currentIndex], this.value);
        }
        moveItemInArray(this.visibleOptions, event.previousIndex, event.currentIndex);
      }
      moveItemInArray(this.value, previousIndex, currentIndex);
      this.changeFocusedOptionIndex(currentIndex);
      this.onReorder.emit([event.item.data]);
    }
  }
  onListFocus(event) {
    const focusableEl = DomHandler.findSingle(this.listViewChild.nativeElement, '[data-p-highlight="true"]') || DomHandler.findSingle(this.listViewChild.nativeElement, '[data-pc-section="item"]');
    if (focusableEl) {
      const findIndex = ObjectUtils.findIndexInList(focusableEl, this.listViewChild.nativeElement.children);
      this.focused = true;
      const index = this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : focusableEl ? findIndex : -1;
      this.changeFocusedOptionIndex(index);
    }
    this.onFocus.emit(event);
  }
  onListBlur(event) {
    this.focused = false;
    this.focusedOption = null;
    this.focusedOptionIndex = -1;
    this.onBlur.emit(event);
  }
  onItemKeydown(event) {
    const targetTagName = event.target.tagName.toLowerCase();
    if (targetTagName == "input") {
      return;
    }
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "KeyA":
        if (event.ctrlKey) {
          this.d_selection = [...this.value];
          this.selectionChange.emit(this.d_selection);
        }
      default:
        break;
    }
  }
  onOptionMouseDown(index) {
    this.focused = true;
    this.focusedOptionIndex = index;
  }
  onArrowDownKey(event) {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex);
    this.changeFocusedOptionIndex(optionIndex);
    if (event.shiftKey) {
      this.onEnterKey(event);
    }
    event.preventDefault();
  }
  onArrowUpKey(event) {
    const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex);
    this.changeFocusedOptionIndex(optionIndex);
    if (event.shiftKey) {
      this.onEnterKey(event);
    }
    event.preventDefault();
  }
  onHomeKey(event) {
    if (event.ctrlKey && event.shiftKey) {
      let visibleOptions = this.getVisibleOptions();
      let focusedIndex = ObjectUtils.findIndexInList(this.focusedOption, visibleOptions);
      this.d_selection = [...this.value].slice(0, focusedIndex + 1);
      this.selectionChange.emit(this.d_selection);
    } else {
      this.changeFocusedOptionIndex(0);
    }
    event.preventDefault();
  }
  onEndKey(event) {
    if (event.ctrlKey && event.shiftKey) {
      let visibleOptions = this.getVisibleOptions();
      let focusedIndex = ObjectUtils.findIndexInList(this.focusedOption, visibleOptions);
      this.d_selection = [...this.value].slice(focusedIndex, visibleOptions.length - 1);
      this.selectionChange.emit(this.d_selection);
    } else {
      this.changeFocusedOptionIndex(DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="item"]').length - 1);
    }
    event.preventDefault();
  }
  onEnterKey(event) {
    this.onItemClick(event, this.focusedOption);
    event.preventDefault();
  }
  onSpaceKey(event) {
    event.preventDefault();
    if (event.shiftKey && this.selection && this.selection.length > 0) {
      let visibleOptions = this.getVisibleOptions();
      let lastSelectedIndex = this.getLatestSelectedVisibleOptionIndex(visibleOptions);
      if (lastSelectedIndex !== -1) {
        let focusedIndex = ObjectUtils.findIndexInList(this.focusedOption, visibleOptions);
        this.d_selection = [...visibleOptions.slice(Math.min(lastSelectedIndex, focusedIndex), Math.max(lastSelectedIndex, focusedIndex) + 1)];
        this.selectionChange.emit(this.d_selection);
        this.onSelectionChange.emit({
          originalEvent: event,
          value: this.d_selection
        });
        return;
      }
    }
    this.onEnterKey(event);
  }
  findNextOptionIndex(index) {
    const items = DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="item"]');
    const matchedOptionIndex = [...items].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  }
  findPrevOptionIndex(index) {
    const items = DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="item"]');
    const matchedOptionIndex = [...items].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  }
  getLatestSelectedVisibleOptionIndex(visibleOptions) {
    const latestSelectedItem = [...this.d_selection].reverse().find((item) => visibleOptions.includes(item));
    return latestSelectedItem !== void 0 ? visibleOptions.indexOf(latestSelectedItem) : -1;
  }
  getVisibleOptions() {
    return this.visibleOptions && this.visibleOptions.length > 0 ? this.visibleOptions : this.value && this.value.length > 0 ? this.value : null;
  }
  getFocusedOption(index) {
    if (index === -1) return null;
    return this.visibleOptions && this.visibleOptions.length ? this.visibleOptions[index] : this.value && this.value.length ? this.value[index] : null;
  }
  changeFocusedOptionIndex(index) {
    const items = DomHandler.find(this.listViewChild.nativeElement, '[data-pc-section="item"]');
    let order = index >= items.length ? items.length - 1 : index < 0 ? 0 : index;
    this.focusedOptionIndex = items[order] ? items[order].getAttribute("id") : -1;
    this.focusedOption = this.getFocusedOption(order);
    this.scrollInView(this.focusedOptionIndex);
  }
  scrollInView(id) {
    const element = DomHandler.findSingle(this.listViewChild.nativeElement, `[data-pc-section="item"][id="${id}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  findNextItem(item) {
    let nextItem = item.nextElementSibling;
    if (nextItem) return !DomHandler.hasClass(nextItem, "p-orderlist-item") || DomHandler.isHidden(nextItem) ? this.findNextItem(nextItem) : nextItem;
    else return null;
  }
  findPrevItem(item) {
    let prevItem = item.previousElementSibling;
    if (prevItem) return !DomHandler.hasClass(prevItem, "p-orderlist-item") || DomHandler.isHidden(prevItem) ? this.findPrevItem(prevItem) : prevItem;
    else return null;
  }
  moveDisabled() {
    if (this.disabled || !this.selection.length) {
      return true;
    }
  }
  focusedOptionId() {
    return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
  }
  createStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.styleElement) {
        this.renderer.setAttribute(this.el.nativeElement.children[0], this.id, "");
        this.styleElement = this.renderer.createElement("style");
        this.renderer.setAttribute(this.styleElement, "type", "text/css");
        DomHandler.setAttribute(this.styleElement, "nonce", this.config?.csp()?.nonce);
        this.renderer.appendChild(this.document.head, this.styleElement);
        let innerHTML = `
                    @media screen and (max-width: ${this.breakpoint}) {
                        .p-orderlist[${this.id}] {
                            flex-direction: column;
                        }

                        .p-orderlist[${this.id}] .p-orderlist-controls {
                            padding: var(--content-padding);
                            flex-direction: row;
                        }

                        .p-orderlist[${this.id}] .p-orderlist-controls .p-button {
                            margin-right: var(--inline-spacing);
                            margin-bottom: 0;
                        }

                        .p-orderlist[${this.id}] .p-orderlist-controls .p-button:last-child {
                            margin-right: 0;
                        }
                    }
                `;
        this.renderer.setProperty(this.styleElement, "innerHTML", innerHTML);
      }
    }
  }
  destroyStyle() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.styleElement) {
        this.renderer.removeChild(this.document, this.styleElement);
        this.styleElement = null;
        ``;
      }
    }
  }
  ngOnDestroy() {
    this.destroyStyle();
  }
  static ɵfac = function OrderList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderList)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(FilterService), ɵɵdirectiveInject(PrimeNGConfig));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _OrderList,
    selectors: [["p-orderList"]],
    contentQueries: function OrderList_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function OrderList_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.filterViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      header: "header",
      style: "style",
      styleClass: "styleClass",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      listStyle: "listStyle",
      responsive: [2, "responsive", "responsive", booleanAttribute],
      filterBy: "filterBy",
      filterPlaceholder: "filterPlaceholder",
      filterLocale: "filterLocale",
      metaKeySelection: [2, "metaKeySelection", "metaKeySelection", booleanAttribute],
      dragdrop: [2, "dragdrop", "dragdrop", booleanAttribute],
      controlsPosition: "controlsPosition",
      ariaFilterLabel: "ariaFilterLabel",
      filterMatchMode: "filterMatchMode",
      breakpoint: "breakpoint",
      stripedRows: [2, "stripedRows", "stripedRows", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      trackBy: "trackBy",
      selection: "selection",
      value: "value"
    },
    outputs: {
      selectionChange: "selectionChange",
      onReorder: "onReorder",
      onSelectionChange: "onSelectionChange",
      onFilterEvent: "onFilterEvent",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [ɵɵInputTransformsFeature],
    decls: 21,
    vars: 43,
    consts: [["listelement", ""], ["builtInFilterElement", ""], ["filter", ""], [3, "ngClass", "ngStyle"], [1, "p-orderlist-controls"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-icon-only", 3, "click", "disabled"], [4, "ngIf"], [4, "ngTemplateOutlet"], [1, "p-orderlist-list-container"], ["class", "p-orderlist-header", 4, "ngIf"], ["class", "p-orderlist-filter-container", 4, "ngIf"], ["cdkDropList", "", "role", "listbox", "aria-multiselectable", "true", 1, "p-orderlist-list", 3, "cdkDropListDropped", "focus", "blur", "keydown", "id", "ngStyle", "tabindex"], ["ngFor", "", 3, "ngForTrackBy", "ngForOf"], [1, "p-orderlist-header"], ["class", "p-orderlist-title", 4, "ngIf"], [1, "p-orderlist-title"], [1, "p-orderlist-filter-container"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-orderlist-filter"], ["type", "text", "role", "textbox", 1, "p-orderlist-filter-input", "p-inputtext", "p-component", 3, "keyup", "disabled"], [3, "styleClass", 4, "ngIf"], ["class", "p-orderlist-filter-icon", 4, "ngIf"], [3, "styleClass"], [1, "p-orderlist-filter-icon"], ["pRipple", "", "cdkDrag", "", "role", "option", "class", "p-orderlist-item", 3, "id", "ngClass", "cdkDragData", "cdkDragDisabled", "click", "touchend", "mousedown", 4, "ngIf"], ["pRipple", "", "cdkDrag", "", "role", "option", 1, "p-orderlist-item", 3, "click", "touchend", "mousedown", "id", "ngClass", "cdkDragData", "cdkDragDisabled"], ["class", "p-orderlist-empty-message", 4, "ngIf"], [1, "p-orderlist-empty-message"]],
    template: function OrderList_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
        ɵɵlistener("click", function OrderList_Template_button_click_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.moveUp());
        });
        ɵɵtemplate(3, OrderList_AngleUpIcon_3_Template, 1, 1, "AngleUpIcon", 6)(4, OrderList_4_Template, 1, 0, null, 7);
        ɵɵelementEnd();
        ɵɵelementStart(5, "button", 5);
        ɵɵlistener("click", function OrderList_Template_button_click_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.moveTop());
        });
        ɵɵtemplate(6, OrderList_AngleDoubleUpIcon_6_Template, 1, 1, "AngleDoubleUpIcon", 6)(7, OrderList_7_Template, 1, 0, null, 7);
        ɵɵelementEnd();
        ɵɵelementStart(8, "button", 5);
        ɵɵlistener("click", function OrderList_Template_button_click_8_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.moveDown());
        });
        ɵɵtemplate(9, OrderList_AngleDownIcon_9_Template, 1, 1, "AngleDownIcon", 6)(10, OrderList_10_Template, 1, 0, null, 7);
        ɵɵelementEnd();
        ɵɵelementStart(11, "button", 5);
        ɵɵlistener("click", function OrderList_Template_button_click_11_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.moveBottom());
        });
        ɵɵtemplate(12, OrderList_AngleDoubleDownIcon_12_Template, 1, 1, "AngleDoubleDownIcon", 6)(13, OrderList_13_Template, 1, 0, null, 7);
        ɵɵelementEnd()();
        ɵɵelementStart(14, "div", 8);
        ɵɵtemplate(15, OrderList_div_15_Template, 3, 3, "div", 9)(16, OrderList_div_16_Template, 4, 3, "div", 10);
        ɵɵelementStart(17, "ul", 11, 0);
        ɵɵlistener("cdkDropListDropped", function OrderList_Template_ul_cdkDropListDropped_17_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onDrop($event));
        })("focus", function OrderList_Template_ul_focus_17_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListFocus($event));
        })("blur", function OrderList_Template_ul_blur_17_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListBlur($event));
        })("keydown", function OrderList_Template_ul_keydown_17_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onItemKeydown($event));
        });
        ɵɵtemplate(19, OrderList_ng_template_19_Template, 1, 1, "ng-template", 12)(20, OrderList_ng_container_20_Template, 3, 2, "ng-container", 6);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ɵɵpureFunction3(39, _c2, ctx.stripedRows, ctx.controlsPosition === "left", ctx.controlsPosition === "right"))("ngStyle", ctx.style);
        ɵɵattribute("data-pc-section", "root");
        ɵɵadvance();
        ɵɵattribute("data-pc-section", "controls");
        ɵɵadvance();
        ɵɵproperty("disabled", ctx.moveDisabled());
        ɵɵattribute("aria-label", ctx.moveUpAriaLabel)("data-pc-section", "moveUpButton");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.moveUpIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.moveUpIconTemplate);
        ɵɵadvance();
        ɵɵproperty("disabled", ctx.moveDisabled());
        ɵɵattribute("aria-label", ctx.moveTopAriaLabel)("data-pc-section", "moveTopButton");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.moveTopIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.moveTopIconTemplate);
        ɵɵadvance();
        ɵɵproperty("disabled", ctx.moveDisabled());
        ɵɵattribute("aria-label", ctx.moveDownAriaLabel)("data-pc-section", "moveDownButton");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.moveDownIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.moveDownIconTemplate);
        ɵɵadvance();
        ɵɵproperty("disabled", ctx.moveDisabled());
        ɵɵattribute("aria-label", ctx.moveBottomAriaLabel)("data-pc-section", "moveBottomButton");
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.moveBottomIconTemplate);
        ɵɵadvance();
        ɵɵproperty("ngTemplateOutlet", ctx.moveBottomIconTemplate);
        ɵɵadvance();
        ɵɵattribute("data-pc-section", "container");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.header || ctx.headerTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.filterBy);
        ɵɵadvance();
        ɵɵproperty("id", ctx.id + "_list")("ngStyle", ctx.listStyle)("tabindex", ctx.tabindex);
        ɵɵattribute("data-pc-section", "list")("aria-activedescendant", ctx.focused ? ctx.focusedOptionId() : void 0)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy);
        ɵɵadvance(2);
        ɵɵproperty("ngForTrackBy", ctx.trackBy)("ngForOf", ctx.value);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.isEmpty() && (ctx.emptyMessageTemplate || ctx.emptyFilterMessageTemplate));
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ButtonDirective, Ripple, CdkDropList, CdkDrag, AngleDoubleDownIcon, AngleDoubleUpIcon, AngleUpIcon, AngleDownIcon, SearchIcon],
    styles: ["@layer primeng{.p-orderlist{display:flex}.p-orderlist-controls{display:flex;flex-direction:column;justify-content:center}.p-orderlist-list-container{flex:1 1 auto}.p-orderlist-list{list-style-type:none;margin:0;padding:0;overflow:auto;min-height:12rem}.p-orderlist-item{display:block;cursor:pointer;overflow:hidden;position:relative}.p-orderlist-item:not(.cdk-drag-disabled){cursor:move}.p-orderlist-item.cdk-drag-placeholder{opacity:0}.p-orderlist-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.p-orderlist.p-state-disabled .p-orderlist-item,.p-orderlist.p-state-disabled .p-button{cursor:default}.p-orderlist.p-state-disabled .p-orderlist-list{overflow:hidden}.p-orderlist-filter{position:relative}.p-orderlist-filter-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-orderlist-filter-input{width:100%}.p-orderlist-controls-right .p-orderlist-controls{order:2}.p-orderlist-controls-right .p-orderlist-list-container{order:1}.p-orderlist-list.cdk-drop-list-dragging .p-orderlist-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderList, [{
    type: Component,
    args: [{
      selector: "p-orderList",
      template: `
        <div
            [ngClass]="{ 'p-orderlist p-component': true, 'p-orderlist-striped': stripedRows, 'p-orderlist-controls-left': controlsPosition === 'left', 'p-orderlist-controls-right': controlsPosition === 'right' }"
            [ngStyle]="style"
            [class]="styleClass"
            [attr.data-pc-section]="'root'"
        >
            <div class="p-orderlist-controls" [attr.data-pc-section]="'controls'">
                <button type="button" [disabled]="moveDisabled()" pButton pRipple class="p-button-icon-only" (click)="moveUp()" [attr.aria-label]="moveUpAriaLabel" [attr.data-pc-section]="'moveUpButton'">
                    <AngleUpIcon *ngIf="!moveUpIconTemplate" [attr.data-pc-section]="'moveupicon'" />
                    <ng-template *ngTemplateOutlet="moveUpIconTemplate"></ng-template>
                </button>
                <button type="button" [disabled]="moveDisabled()" pButton pRipple class="p-button-icon-only" (click)="moveTop()" [attr.aria-label]="moveTopAriaLabel" [attr.data-pc-section]="'moveTopButton'">
                    <AngleDoubleUpIcon *ngIf="!moveTopIconTemplate" [attr.data-pc-section]="'movetopicon'" />
                    <ng-template *ngTemplateOutlet="moveTopIconTemplate"></ng-template>
                </button>
                <button type="button" [disabled]="moveDisabled()" pButton pRipple class="p-button-icon-only" (click)="moveDown()" [attr.aria-label]="moveDownAriaLabel" [attr.data-pc-section]="'moveDownButton'">
                    <AngleDownIcon *ngIf="!moveDownIconTemplate" [attr.data-pc-section]="'movedownicon'" />
                    <ng-template *ngTemplateOutlet="moveDownIconTemplate"></ng-template>
                </button>
                <button type="button" [disabled]="moveDisabled()" pButton pRipple class="p-button-icon-only" (click)="moveBottom()" [attr.aria-label]="moveBottomAriaLabel" [attr.data-pc-section]="'moveBottomButton'">
                    <AngleDoubleDownIcon *ngIf="!moveBottomIconTemplate" [attr.data-pc-section]="'movebottomicon'" />
                    <ng-template *ngTemplateOutlet="moveBottomIconTemplate"></ng-template>
                </button>
            </div>
            <div class="p-orderlist-list-container" [attr.data-pc-section]="'container'">
                <div class="p-orderlist-header" *ngIf="header || headerTemplate" [attr.data-pc-section]="'header'">
                    <div class="p-orderlist-title" *ngIf="!headerTemplate">{{ header }}</div>
                    <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
                </div>
                <div class="p-orderlist-filter-container" *ngIf="filterBy" [attr.data-pc-section]="'filterContainer'">
                    <ng-container *ngIf="filterTemplate; else builtInFilterElement">
                        <ng-container *ngTemplateOutlet="filterTemplate; context: { options: filterOptions }"></ng-container>
                    </ng-container>
                    <ng-template #builtInFilterElement>
                        <div class="p-orderlist-filter" [attr.data-pc-section]="'filter'">
                            <input
                                #filter
                                type="text"
                                role="textbox"
                                (keyup)="onFilterKeyup($event)"
                                [disabled]="disabled"
                                class="p-orderlist-filter-input p-inputtext p-component"
                                [attr.placeholder]="filterPlaceholder"
                                [attr.aria-label]="ariaFilterLabel"
                            />
                            <SearchIcon *ngIf="!filterIconTemplate" [styleClass]="'p-orderlist-filter-icon'" [attr.data-pc-section]="'filterIcon'" />
                            <span class="p-orderlist-filter-icon" *ngIf="filterIconTemplate" [attr.data-pc-section]="'filterIcon'">
                                <ng-template *ngTemplateOutlet="filterIconTemplate"></ng-template>
                            </span>
                        </div>
                    </ng-template>
                </div>
                <ul
                    #listelement
                    [id]="id + '_list'"
                    cdkDropList
                    (cdkDropListDropped)="onDrop($event)"
                    class="p-orderlist-list"
                    [ngStyle]="listStyle"
                    [attr.data-pc-section]="'list'"
                    role="listbox"
                    [tabindex]="tabindex"
                    aria-multiselectable="true"
                    [attr.aria-activedescendant]="focused ? focusedOptionId() : undefined"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    (focus)="onListFocus($event)"
                    (blur)="onListBlur($event)"
                    (keydown)="onItemKeydown($event)"
                >
                    <ng-template ngFor [ngForTrackBy]="trackBy" let-item [ngForOf]="value" let-i="index" let-l="last">
                        <li
                            [id]="id + '_' + i"
                            pRipple
                            cdkDrag
                            role="option"
                            class="p-orderlist-item"
                            [ngClass]="{ 'p-highlight': isSelected(item), 'p-disabled': disabled, 'p-focus': id + '_' + i === focusedOptionId() }"
                            [cdkDragData]="item"
                            [cdkDragDisabled]="!dragdrop"
                            (click)="onItemClick($event, item, i, id + '_' + i)"
                            (touchend)="onItemTouchEnd()"
                            (mousedown)="onOptionMouseDown(i)"
                            *ngIf="isItemVisible(item)"
                            [attr.aria-selected]="isSelected(item)"
                            [attr.data-pc-section]="'item'"
                            [attr.data-p-highlight]="isSelected(item)"
                            [attr.data-p-focused]="id + '_' + i === focusedOptionId()"
                        >
                            <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item, index: i }"></ng-container>
                        </li>
                    </ng-template>
                    <ng-container *ngIf="isEmpty() && (emptyMessageTemplate || emptyFilterMessageTemplate)">
                        <li *ngIf="!filterValue || !emptyFilterMessageTemplate" class="p-orderlist-empty-message" [attr.data-pc-section]="'emptyMessage'">
                            <ng-container *ngTemplateOutlet="emptyMessageTemplate"></ng-container>
                        </li>
                        <li *ngIf="filterValue" class="p-orderlist-empty-message" [attr.data-pc-section]="'emptyMessage'">
                            <ng-container *ngTemplateOutlet="emptyFilterMessageTemplate"></ng-container>
                        </li>
                    </ng-container>
                </ul>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-orderlist{display:flex}.p-orderlist-controls{display:flex;flex-direction:column;justify-content:center}.p-orderlist-list-container{flex:1 1 auto}.p-orderlist-list{list-style-type:none;margin:0;padding:0;overflow:auto;min-height:12rem}.p-orderlist-item{display:block;cursor:pointer;overflow:hidden;position:relative}.p-orderlist-item:not(.cdk-drag-disabled){cursor:move}.p-orderlist-item.cdk-drag-placeholder{opacity:0}.p-orderlist-item.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.p-orderlist.p-state-disabled .p-orderlist-item,.p-orderlist.p-state-disabled .p-button{cursor:default}.p-orderlist.p-state-disabled .p-orderlist-list{overflow:hidden}.p-orderlist-filter{position:relative}.p-orderlist-filter-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-orderlist-filter-input{width:100%}.p-orderlist-controls-right .p-orderlist-controls{order:2}.p-orderlist-controls-right .p-orderlist-list-container{order:1}.p-orderlist-list.cdk-drop-list-dragging .p-orderlist-item:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: FilterService
  }, {
    type: PrimeNGConfig
  }], {
    header: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    listStyle: [{
      type: Input
    }],
    responsive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    filterBy: [{
      type: Input
    }],
    filterPlaceholder: [{
      type: Input
    }],
    filterLocale: [{
      type: Input
    }],
    metaKeySelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    dragdrop: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    controlsPosition: [{
      type: Input
    }],
    ariaFilterLabel: [{
      type: Input
    }],
    filterMatchMode: [{
      type: Input
    }],
    breakpoint: [{
      type: Input
    }],
    stripedRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trackBy: [{
      type: Input
    }],
    selection: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    selectionChange: [{
      type: Output
    }],
    onReorder: [{
      type: Output
    }],
    onSelectionChange: [{
      type: Output
    }],
    onFilterEvent: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["listelement"]
    }],
    filterViewChild: [{
      type: ViewChild,
      args: ["filter"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var OrderListModule = class _OrderListModule {
  static ɵfac = function OrderListModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderListModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _OrderListModule,
    declarations: [OrderList],
    imports: [CommonModule, ButtonModule, SharedModule, RippleModule, DragDropModule, AngleDoubleDownIcon, AngleDoubleUpIcon, AngleUpIcon, AngleDownIcon, SearchIcon],
    exports: [OrderList, SharedModule, DragDropModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, ButtonModule, SharedModule, RippleModule, DragDropModule, AngleDoubleDownIcon, AngleDoubleUpIcon, AngleUpIcon, AngleDownIcon, SearchIcon, SharedModule, DragDropModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderListModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ButtonModule, SharedModule, RippleModule, DragDropModule, AngleDoubleDownIcon, AngleDoubleUpIcon, AngleUpIcon, AngleDownIcon, SearchIcon],
      exports: [OrderList, SharedModule, DragDropModule],
      declarations: [OrderList]
    }]
  }], null, null);
})();
export {
  OrderList,
  OrderListModule
};
//# sourceMappingURL=primeng_orderlist.js.map
