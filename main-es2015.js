(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'yawgmoth';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/default-layout/default-layout.component */ "./src/app/layouts/default-layout/default-layout.component.ts");
/* harmony import */ var _layouts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/navigation/navigation.component */ "./src/app/layouts/navigation/navigation.component.ts");
/* harmony import */ var _pages_deck_list_deck_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/deck-list/deck-list.component */ "./src/app/pages/deck-list/deck-list.component.ts");
/* harmony import */ var _pages_collection_collection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/collection/collection.component */ "./src/app/pages/collection/collection.component.ts");
/* harmony import */ var _pages_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/wish-list/wish-list.component */ "./src/app/pages/wish-list/wish-list.component.ts");
/* harmony import */ var _pages_meta_list_meta_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/meta-list/meta-list.component */ "./src/app/pages/meta-list/meta-list.component.ts");
/* harmony import */ var _components_spinner_card_spinner_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/spinner-card/spinner-card.component */ "./src/app/components/spinner-card/spinner-card.component.ts");
/* harmony import */ var _components_mana_mana_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/mana/mana.component */ "./src/app/components/mana/mana.component.ts");
/* harmony import */ var _components_deck_deck_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/deck/deck.component */ "./src/app/components/deck/deck.component.ts");
/* harmony import */ var _components_deck_card_deck_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/deck-card/deck-card.component */ "./src/app/components/deck-card/deck-card.component.ts");
/* harmony import */ var _components_keyrune_keyrune_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/keyrune/keyrune.component */ "./src/app/components/keyrune/keyrune.component.ts");
/* harmony import */ var _components_deck_tile_deck_tile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/deck-tile/deck-tile.component */ "./src/app/components/deck-tile/deck-tile.component.ts");
/* harmony import */ var _components_card_tile_card_tile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/card-tile/card-tile.component */ "./src/app/components/card-tile/card-tile.component.ts");
/* harmony import */ var _core_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/toggle/toggle.component */ "./src/app/core/toggle/toggle.component.ts");
/* harmony import */ var _pages_compare_compare_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/compare/compare.component */ "./src/app/pages/compare/compare.component.ts");
/* harmony import */ var _core_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/dropdown/dropdown.component */ "./src/app/core/dropdown/dropdown.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/card-table/card-table.component */ "./src/app/components/card-table/card-table.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");
/* harmony import */ var _layouts_pull_out_menu_pull_out_menu_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./layouts/pull-out-menu/pull-out-menu.component */ "./src/app/layouts/pull-out-menu/pull-out-menu.component.ts");




























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_22__["appRouting"]),
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_deck_deck_component__WEBPACK_IMPORTED_MODULE_14__["DeckComponent"],
        _components_spinner_card_spinner_card_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerCardComponent"],
        _components_mana_mana_component__WEBPACK_IMPORTED_MODULE_13__["ManaComponent"],
        _pages_deck_list_deck_list_component__WEBPACK_IMPORTED_MODULE_8__["DeckListComponent"],
        _pages_collection_collection_component__WEBPACK_IMPORTED_MODULE_9__["CollectionComponent"],
        _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutComponent"],
        _components_deck_card_deck_card_component__WEBPACK_IMPORTED_MODULE_15__["DeckCardComponent"],
        _layouts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
        _components_keyrune_keyrune_component__WEBPACK_IMPORTED_MODULE_16__["KeyruneComponent"],
        _components_deck_tile_deck_tile_component__WEBPACK_IMPORTED_MODULE_17__["DeckTileComponent"],
        _components_card_tile_card_tile_component__WEBPACK_IMPORTED_MODULE_18__["CardTileComponent"],
        _pages_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_10__["WishListComponent"],
        _pages_meta_list_meta_list_component__WEBPACK_IMPORTED_MODULE_11__["MetaListComponent"],
        _core_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_19__["ToggleComponent"],
        _pages_compare_compare_component__WEBPACK_IMPORTED_MODULE_20__["CompareComponent"],
        _core_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_21__["DropdownComponent"],
        _components_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_23__["CardTableComponent"],
        _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__["SettingsComponent"],
        _layouts_pull_out_menu_pull_out_menu_component__WEBPACK_IMPORTED_MODULE_25__["PullOutMenuComponent"]], imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], //, { enableTracing: true }),
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_deck_deck_component__WEBPACK_IMPORTED_MODULE_14__["DeckComponent"],
                    _components_spinner_card_spinner_card_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerCardComponent"],
                    _components_mana_mana_component__WEBPACK_IMPORTED_MODULE_13__["ManaComponent"],
                    _pages_deck_list_deck_list_component__WEBPACK_IMPORTED_MODULE_8__["DeckListComponent"],
                    _pages_collection_collection_component__WEBPACK_IMPORTED_MODULE_9__["CollectionComponent"],
                    _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutComponent"],
                    _components_deck_card_deck_card_component__WEBPACK_IMPORTED_MODULE_15__["DeckCardComponent"],
                    _layouts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                    _components_keyrune_keyrune_component__WEBPACK_IMPORTED_MODULE_16__["KeyruneComponent"],
                    _components_deck_tile_deck_tile_component__WEBPACK_IMPORTED_MODULE_17__["DeckTileComponent"],
                    _components_card_tile_card_tile_component__WEBPACK_IMPORTED_MODULE_18__["CardTileComponent"],
                    _pages_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_10__["WishListComponent"],
                    _pages_meta_list_meta_list_component__WEBPACK_IMPORTED_MODULE_11__["MetaListComponent"],
                    _core_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_19__["ToggleComponent"],
                    _pages_compare_compare_component__WEBPACK_IMPORTED_MODULE_20__["CompareComponent"],
                    _core_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_21__["DropdownComponent"],
                    _components_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_23__["CardTableComponent"],
                    _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_24__["SettingsComponent"],
                    _layouts_pull_out_menu_pull_out_menu_component__WEBPACK_IMPORTED_MODULE_25__["PullOutMenuComponent"]
                ],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_22__["appRouting"]),
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: appRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouting", function() { return appRouting; });
/* harmony import */ var _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/default-layout/default-layout.component */ "./src/app/layouts/default-layout/default-layout.component.ts");
/* harmony import */ var _pages_deck_list_deck_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/deck-list/deck-list.component */ "./src/app/pages/deck-list/deck-list.component.ts");
/* harmony import */ var _components_deck_deck_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/deck/deck.component */ "./src/app/components/deck/deck.component.ts");
/* harmony import */ var _pages_collection_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/collection/collection.component */ "./src/app/pages/collection/collection.component.ts");
/* harmony import */ var _pages_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/wish-list/wish-list.component */ "./src/app/pages/wish-list/wish-list.component.ts");
/* harmony import */ var _pages_meta_list_meta_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/meta-list/meta-list.component */ "./src/app/pages/meta-list/meta-list.component.ts");
/* harmony import */ var _pages_compare_compare_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/compare/compare.component */ "./src/app/pages/compare/compare.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/settings/settings.component */ "./src/app/pages/settings/settings.component.ts");








const appRouting = [
    // { path: 'decks/:id',      component: HeroDetailComponent },
    {
        path: 'decks',
        component: _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"],
        data: { title: 'Your decks' },
        children: [
            { path: '', component: _pages_deck_list_deck_list_component__WEBPACK_IMPORTED_MODULE_1__["DeckListComponent"] },
        ]
    },
    {
        path: 'decks/:id',
        component: _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"],
        data: { title: 'Deck details' },
        children: [
            { path: '', component: _components_deck_deck_component__WEBPACK_IMPORTED_MODULE_2__["DeckComponent"] },
        ]
    },
    {
        path: 'collection',
        component: _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"],
        data: { title: 'Your cards' },
        children: [
            { path: '', component: _pages_collection_collection_component__WEBPACK_IMPORTED_MODULE_3__["CollectionComponent"] },
        ]
    },
    {
        path: 'wishlist',
        component: _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"],
        data: { title: 'Your wishlist' },
        children: [
            { path: '', component: _pages_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_4__["WishListComponent"] },
        ]
    },
    {
        path: 'settings',
        component: _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"],
        data: { title: 'User settings' },
        children: [
            { path: '', component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"] },
        ]
    },
    {
        path: 'meta',
        component: _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"],
        data: { title: 'Mtg metagame' },
        children: [
            { path: '', component: _pages_meta_list_meta_list_component__WEBPACK_IMPORTED_MODULE_5__["MetaListComponent"] },
        ]
    },
    {
        path: 'compare/:id',
        component: _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"],
        data: { title: 'Compare decks' },
        children: [
            { path: '', component: _pages_compare_compare_component__WEBPACK_IMPORTED_MODULE_6__["CompareComponent"] },
        ]
    },
    { path: 'compare', redirectTo: 'compare/', pathMatch: 'full' },
    {
        path: '',
        redirectTo: '/decks',
        pathMatch: 'full'
    },
];


/***/ }),

/***/ "./src/app/components/card-table/card-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/card-table/card-table.component.ts ***!
  \***************************************************************/
/*! exports provided: CardTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTableComponent", function() { return CardTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _keyrune_keyrune_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../keyrune/keyrune.component */ "./src/app/components/keyrune/keyrune.component.ts");







function CardTableComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CardTableComponent_div_0_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r81.searchFilter = $event; })("keyup.enter", function CardTableComponent_div_0_Template_input_keyup_enter_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82); const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r83.searchFilter$.next($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r79.searchFilter);
} }
function CardTableComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ygm-keyrune", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r84.cardName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("symbol", item_r84.set);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r84.setNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r84.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r84.quantity);
} }
class CardTableComponent {
    constructor() {
        this.searchable = true;
        this.searchFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.searchFilter$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        this.filterdCards$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.cards$,
            this.searchFilter$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])('')),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([elements, search]) => elements.filter(state => state.cardName.toLowerCase().startsWith(search.toLowerCase()))));
    }
}
CardTableComponent.ɵfac = function CardTableComponent_Factory(t) { return new (t || CardTableComponent)(); };
CardTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardTableComponent, selectors: [["ygm-card-table"]], inputs: { searchable: "searchable", cards$: "cards$" }, decls: 19, vars: 4, consts: [["class", "collection-search-view", 4, "ngIf"], [1, "columns", "collection-view"], [1, "table", "table-striped", "table-hover"], [4, "ngFor", "ngForOf"], [1, "collection-search-view"], [1, "has-icon-right"], ["type", "text", "placeholder", "search", "name", "searchFilter", 1, "form-input", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "form-icon", "icon", "icon-search"], [1, "icon", "icon-photo"], [3, "symbol"]], template: function CardTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardTableComponent_div_0_Template, 5, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "cardname");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "set num");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CardTableComponent_tr_17_Template, 13, 5, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 2, ctx.filterdCards$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _keyrune_keyrune_component__WEBPACK_IMPORTED_MODULE_5__["KeyruneComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-card-table',
                templateUrl: './card-table.component.html',
            }]
    }], function () { return []; }, { searchable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cards$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/card-tile/card-tile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/card-tile/card-tile.component.ts ***!
  \*************************************************************/
/*! exports provided: CardTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTileComponent", function() { return CardTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _mana_mana_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mana/mana.component */ "./src/app/components/mana/mana.component.ts");




function CardTileComponent_ng_container_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardTileComponent_ng_container_3_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "rotate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardTileComponent_ng_container_3_div_5_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const face_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](face_r44.oracleText);
} }
function CardTileComponent_ng_container_3_div_5_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const face_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](face_r44.flavorText);
} }
function CardTileComponent_ng_container_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ygm-mana", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardTileComponent_ng_container_3_div_5_p_6_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardTileComponent_ng_container_3_div_5_p_7_Template, 2, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const face_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", face_r44.name, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cost", face_r44.manaCost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](face_r44.typeLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", face_r44.oracleText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", face_r44.flavorText);
} }
function CardTileComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardTileComponent_ng_container_3_div_3_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardTileComponent_ng_container_3_div_5_Template, 8, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r37.card.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r37.showFace == "front" ? "" : "rotate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.card.layout === "split");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.card.faces);
} }
function CardTileComponent_ng_container_4_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r49.card.oracleText);
} }
function CardTileComponent_ng_container_4_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r50.card.flavorText);
} }
function CardTileComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardTileComponent_ng_container_4_p_6_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardTileComponent_ng_container_4_p_7_Template, 2, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r38.card.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r38.card.typeLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r38.card.oracleText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r38.card.flavorText);
} }
function CardTileComponent_ng_container_5_div_8_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const face_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](face_r52.oracleText);
} }
function CardTileComponent_ng_container_5_div_8_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const face_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](face_r52.flavorText);
} }
function CardTileComponent_ng_container_5_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ygm-mana", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardTileComponent_ng_container_5_div_8_p_6_Template, 2, 1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardTileComponent_ng_container_5_div_8_p_7_Template, 2, 1, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const face_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", face_r52.name, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cost", face_r52.manaCost);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](face_r52.typeLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", face_r52.oracleText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", face_r52.flavorText);
} }
function CardTileComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardTileComponent_ng_container_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "transform");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CardTileComponent_ng_container_5_div_8_Template, 8, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r39.card.faces[1].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r39.showFace == "front" ? "" : "visible");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r39.card.faces[0].imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r39.showFace == "front" ? "visible" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r39.card.faces);
} }
class CardTileComponent {
    constructor() {
        this.showFace = 'front';
    }
    ngOnInit() {
    }
    toggle() {
        this.showFace = (this.showFace === 'front' ? 'back' : 'front');
    }
}
CardTileComponent.ɵfac = function CardTileComponent_Factory(t) { return new (t || CardTileComponent)(); };
CardTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardTileComponent, selectors: [["ygm-card-tile"]], inputs: { card: "card" }, decls: 6, vars: 3, consts: [[1, "container", "card-tile-view"], [1, "tile"], [3, "ngSwitch"], [4, "ngSwitchDefault"], [4, "ngSwitchCase"], [1, "tile-icon", "transform"], [1, "mtg-card", 3, "src", "ngClass"], ["class", "text-center actions", 4, "ngIf"], [1, "tile-content"], [4, "ngFor", "ngForOf"], [1, "text-center", "actions"], [1, "btn", "btn-sm", 3, "click"], [1, "tile-title"], [3, "cost"], [1, "tile-subtitle"], ["class", "card-oracle", 4, "ngIf"], ["class", "card-flavor", 4, "ngIf"], [1, "card-oracle"], [1, "card-flavor"], [1, "tile-icon"], [1, "mtg-card", 3, "src"], [1, "mtg-card", "back", 3, "src", "ngClass"], [1, "mtg-card", "front", 3, "src", "ngClass"]], template: function CardTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardTileComponent_ng_container_3_Template, 6, 4, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardTileComponent_ng_container_4_Template, 8, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardTileComponent_ng_container_5_Template, 9, 5, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.card.layout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "transform");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _mana_mana_component__WEBPACK_IMPORTED_MODULE_2__["ManaComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-card-tile',
                templateUrl: './card-tile.component.html',
            }]
    }], function () { return []; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/deck-card/deck-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/deck-card/deck-card.component.ts ***!
  \*************************************************************/
/*! exports provided: DeckCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckCardComponent", function() { return DeckCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_mtg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/mtg.service */ "./src/app/services/mtg.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/decks", a1]; };
function DeckCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r32 = ctx.ngIf;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", card_r32.imgArtUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r31.meta.id))("state", ctx_r31.meta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r31.meta.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r31.meta.format);
} }
class DeckCardComponent {
    constructor(mtgService) {
        this.mtgService = mtgService;
    }
    ngOnInit() {
        this.previewCard$ = this.mtgService.getCardByName(this.meta.previewCard);
    }
}
DeckCardComponent.ɵfac = function DeckCardComponent_Factory(t) { return new (t || DeckCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mtg_service__WEBPACK_IMPORTED_MODULE_1__["MtgService"])); };
DeckCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeckCardComponent, selectors: [["ygm-deck-card"]], inputs: { meta: "meta" }, decls: 2, vars: 3, consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "card-image"], [1, "img-responsive", 3, "src"], [1, "card-header"], [1, "card-subtitle"], [1, "btn", "btn-success", 3, "routerLink", "state"], [1, "card-action"], [1, "chip"]], template: function DeckCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DeckCardComponent_div_0_Template, 10, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.previewCard$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-deck-card',
                templateUrl: './deck-card.component.html',
            }]
    }], function () { return [{ type: _services_mtg_service__WEBPACK_IMPORTED_MODULE_1__["MtgService"] }]; }, { meta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/deck-tile/deck-tile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/deck-tile/deck-tile.component.ts ***!
  \*************************************************************/
/*! exports provided: DeckTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckTileComponent", function() { return DeckTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_mtg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/mtg.service */ "./src/app/services/mtg.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const _c0 = function (a1) { return ["/decks", a1]; };
function DeckTileComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r36 = ctx.ngIf;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", card_r36.imgArtUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r35.meta.id))("state", ctx_r35.meta);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r35.meta.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r35.meta.format);
} }
class DeckTileComponent {
    constructor(mtgService) {
        this.mtgService = mtgService;
    }
    ngOnInit() {
        this.previewCard$ = this.mtgService.getCardByName(this.meta.previewCard);
    }
}
DeckTileComponent.ɵfac = function DeckTileComponent_Factory(t) { return new (t || DeckTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mtg_service__WEBPACK_IMPORTED_MODULE_1__["MtgService"])); };
DeckTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeckTileComponent, selectors: [["ygm-deck-tile"]], inputs: { meta: "meta" }, decls: 2, vars: 3, consts: [["class", "tile", 4, "ngIf"], [1, "tile"], [1, "tile-icon"], [1, "deck-icon"], [3, "src"], [1, "tile-content"], [1, "btn", "btn-success", 3, "routerLink", "state"], [1, "chip"]], template: function DeckTileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DeckTileComponent_div_0_Template, 11, 7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.previewCard$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-deck-tile',
                templateUrl: './deck-tile.component.html',
            }]
    }], function () { return [{ type: src_app_services_mtg_service__WEBPACK_IMPORTED_MODULE_1__["MtgService"] }]; }, { meta: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/deck/deck.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/deck/deck.component.ts ***!
  \***************************************************/
/*! exports provided: DeckComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckComponent", function() { return DeckComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/logger.service */ "./src/app/services/logger.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_deck_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/deck.service */ "./src/app/services/deck.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _card_tile_card_tile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../card-tile/card-tile.component */ "./src/app/components/card-tile/card-tile.component.ts");
/* harmony import */ var _mana_mana_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mana/mana.component */ "./src/app/components/mana/mana.component.ts");









function DeckComponent_div_0_div_10_details_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0) { return { card: a0 }; };
function DeckComponent_div_0_div_10_details_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "details", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeckComponent_div_0_div_10_details_3_ng_container_1_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, card_r21));
} }
function DeckComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeckComponent_div_0_div_10_details_3_Template, 2, 4, "details", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r19.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", entry_r19.value);
} }
function DeckComponent_div_0_details_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function DeckComponent_div_0_details_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "details", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DeckComponent_div_0_details_16_ng_container_1_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r14)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, card_r23));
} }
const _c1 = function (a1) { return ["/compare", a1]; };
function DeckComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "compare");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DeckComponent_div_0_div_10_Template, 4, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " sideboard ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DeckComponent_div_0_details_16_Template, 2, 4, "details", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meta_r16 = ctx.ngIf;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meta_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, meta_r16.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 7, ctx_r13.mainboardGrouped$), ctx_r13.groupingOrder));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 9, ctx_r13.sideboard$));
} }
function DeckComponent_ng_template_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ygm-mana", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().card;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", card_r25.faces[0].name, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cost", card_r25.faces[0].manaCost);
} }
function DeckComponent_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ygm-mana", 20);
} if (rf & 2) {
    const card_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().card;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", card_r25.name, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cost", card_r25.manaCost);
} }
function DeckComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "summary", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeckComponent_ng_template_2_ng_container_3_Template, 4, 2, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DeckComponent_ng_template_2_ng_template_4_Template, 3, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "ygm-card-tile", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r25 = ctx.card;
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r25.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r25.faces)("ngIfElse", _r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r25);
} }
const CARD_TYPE_GROUPES = ['creature', 'planeswalker', 'instant', 'sorcery', 'artifact', 'enchantment', 'land'];
class DeckComponent {
    constructor(log, route, deckService) {
        this.log = log;
        this.route = route;
        this.deckService = deckService;
        this.groupingOrder = (a, b) => {
            const indexOfA = CARD_TYPE_GROUPES.indexOf(a.key);
            const indexOfB = CARD_TYPE_GROUPES.indexOf(b.key);
            return indexOfB > indexOfA ? -1 : (indexOfA > indexOfB ? 1 : 0);
        };
    }
    ngOnInit() {
        /*
        TODO: get meta from state first
        this.meta$ = this.route.paramMap.pipe(
          map(() => window.history.state),
          catchError(error => {
            const deckId = this.route.parent.snapshot.url[1].path;
            return this.deckService.getOne(deckId);
          })
        );
        */
        const deckId = this.route.parent.snapshot.url[1].path;
        this.meta$ = this.deckService.findMetadataById(deckId);
        const deck$ = this.meta$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(meta => this.deckService.getDeckById(meta.id)));
        this.mainboardGrouped$ = deck$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(deck => deck.cards.reduce((acc, card) => {
            if (card.sideboard) {
                // skip
            }
            else if (acc.has(card.types[0])) {
                acc.get(card.types[0]).push(card);
            }
            else {
                acc.set(card.types[0], [card]);
            }
            return acc;
        }, this.cardMap())));
        this.sideboard$ = deck$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(deck => deck.cards.filter(c => c.sideboard)));
    }
    cardMap() {
        return new Map();
    }
}
DeckComponent.ɵfac = function DeckComponent_Factory(t) { return new (t || DeckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_deck_service__WEBPACK_IMPORTED_MODULE_4__["DeckService"])); };
DeckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeckComponent, selectors: [["ygm-deck"]], decls: 4, vars: 3, consts: [[4, "ngIf"], ["cardDetail", ""], [1, "float-right"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "clearfix"], [1, "container"], [1, "columns"], [1, "column", "col-8", "col-sm-12", "lg-list"], [4, "ngFor", "ngForOf"], [1, "column", "col-4", "col-sm-12"], [1, "card-type-title"], ["class", "accordion", 4, "ngFor", "ngForOf"], [1, "accordion"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "accordion-header"], [1, "icon", "icon-photo"], [4, "ngIf", "ngIfElse"], ["normal", ""], [1, "accordion-body"], [3, "card"], [3, "cost"]], template: function DeckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DeckComponent_div_0_Template, 18, 13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DeckComponent_ng_template_2_Template, 8, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.meta$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"], _card_tile_card_tile_component__WEBPACK_IMPORTED_MODULE_6__["CardTileComponent"], _mana_mana_component__WEBPACK_IMPORTED_MODULE_7__["ManaComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-deck',
                templateUrl: './deck.component.html',
            }]
    }], function () { return [{ type: src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_deck_service__WEBPACK_IMPORTED_MODULE_4__["DeckService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/keyrune/keyrune.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/keyrune/keyrune.component.ts ***!
  \*********************************************************/
/*! exports provided: KeyruneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyruneComponent", function() { return KeyruneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function KeyruneComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
} if (rf & 2) {
    const symbols_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", symbols_r34);
} }
class KeyruneComponent {
    constructor() { }
    ngOnInit() {
    }
    keyruneClasses() {
        return [['ss', 'ss-' + this.symbol.toLowerCase()]];
    }
}
KeyruneComponent.ɵfac = function KeyruneComponent_Factory(t) { return new (t || KeyruneComponent)(); };
KeyruneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KeyruneComponent, selectors: [["ygm-keyrune"]], inputs: { symbol: "symbol" }, decls: 2, vars: 1, consts: [[1, "mana"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function KeyruneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KeyruneComponent_i_1_Template, 1, 1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.keyruneClasses());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyruneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-keyrune',
                templateUrl: './keyrune.component.html',
            }]
    }], function () { return []; }, { symbol: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/mana/mana.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/mana/mana.component.ts ***!
  \***************************************************/
/*! exports provided: ManaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManaComponent", function() { return ManaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ManaComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
} if (rf & 2) {
    const symbols_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", symbols_r12);
} }
class ManaComponent {
    constructor() { }
    ngOnInit() {
    }
    manaClasses() {
        if (!this.cost) {
            return [[]];
        }
        return this.cost.split(/{(.*?)}/)
            .filter(str => str.trim() !== '')
            .map(token => token.toLowerCase().replace('/', ''))
            .map(cost => ['ms', 'ms-cost', 'ms-' + cost]);
    }
}
ManaComponent.ɵfac = function ManaComponent_Factory(t) { return new (t || ManaComponent)(); };
ManaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManaComponent, selectors: [["ygm-mana"]], inputs: { cost: "cost" }, decls: 2, vars: 1, consts: [[1, "mana"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function ManaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManaComponent_i_1_Template, 1, 1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.manaClasses());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-mana',
                templateUrl: './mana.component.html',
            }]
    }], function () { return []; }, { cost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/spinner-card/spinner-card.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/spinner-card/spinner-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: SpinnerCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerCardComponent", function() { return SpinnerCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function SpinnerCardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r10 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", card_r10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SpinnerCardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r9.spinnerCard, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class SpinnerCardComponent {
    constructor() { }
    ngOnInit() {
        this.spinnerCard = this.randomSpinner();
    }
    randomSpinner() {
        const spinners = ["angel", "embalmed", "exerted", "goat", "knight ally", "soldier", "squirrel", "thopter", "angel"];
        return "assets/tokens/" + spinners[Math.floor(Math.random() * spinners.length)] + ".gif";
    }
}
SpinnerCardComponent.ɵfac = function SpinnerCardComponent_Factory(t) { return new (t || SpinnerCardComponent)(); };
SpinnerCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerCardComponent, selectors: [["ygm-spinner-card"]], inputs: { card: "card" }, decls: 4, vars: 6, consts: [[4, "ngIf"], [1, "mtg-card", 3, "src"]], template: function SpinnerCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerCardComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerCardComponent_div_2_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.card));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.card));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-spinner-card',
                templateUrl: './spinner-card.component.html',
            }]
    }], function () { return []; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/dropdown/dropdown.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/dropdown/dropdown.component.ts ***!
  \*****************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function DropdownComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropdownComponent_li_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r78); const item_r76 = ctx.$implicit; const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.select(item_r76); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r76.label);
} }
class DropdownComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.select(this.initialValue);
    }
    select(evt) {
        this.active = evt;
        this.onValueChanged();
    }
    onValueChanged() {
        this.valueChange.emit(this.active.value);
    }
}
DropdownComponent.ɵfac = function DropdownComponent_Factory(t) { return new (t || DropdownComponent)(); };
DropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropdownComponent, selectors: [["ygm-dropdown"]], inputs: { initialValue: "initialValue", selectValues: "selectValues" }, outputs: { valueChange: "valueChange" }, decls: 7, vars: 2, consts: [[1, "dropdown"], [1, "btn-group"], ["tabindex", "0", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "icon", "icon-caret"], [1, "menu"], ["class", "menu-item", 4, "ngFor", "ngForOf"], [1, "menu-item"], [3, "routerLink", "click"]], template: function DropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DropdownComponent_li_6_Template, 3, 1, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.active == null ? null : ctx.active.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectValues);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-dropdown',
                templateUrl: './dropdown.component.html',
            }]
    }], function () { return []; }, { initialValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectValues: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/toggle/toggle.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/toggle/toggle.component.ts ***!
  \*************************************************/
/*! exports provided: ToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleComponent", function() { return ToggleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ToggleComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r62); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r60 = ctx.$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r59.selectedClass(item_r60));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r60.label, " ");
} }
class ToggleComponent {
    constructor() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.active = this.initialValue;
        this.onValueChanged();
    }
    onValueChanged() {
        this.valueChange.emit(this.active.value);
    }
    toggle() {
        this.active = (this.active === this.values[0] ? this.values[1] : this.values[0]);
        this.onValueChanged();
    }
    selectedClass(selectedItem) {
        return selectedItem.value === this.active.value ? ['btn-primary'] : [];
    }
}
ToggleComponent.ɵfac = function ToggleComponent_Factory(t) { return new (t || ToggleComponent)(); };
ToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToggleComponent, selectors: [["ygm-toggle"]], inputs: { values: "values", initialValue: "initialValue" }, outputs: { valueChange: "valueChange" }, decls: 2, vars: 1, consts: [[1, "btn-group", "btn-group-block"], ["class", "btn btn-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", 3, "ngClass", "click"]], template: function ToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToggleComponent_button_1_Template, 2, 2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.values);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-toggle',
                templateUrl: './toggle.component.html',
            }]
    }], function () { return []; }, { values: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], initialValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/env.ts":
/*!************************!*\
  !*** ./src/app/env.ts ***!
  \************************/
/*! exports provided: DEBUG, LOG_LEVEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG", function() { return DEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_LEVEL", function() { return LOG_LEVEL; });

const DEBUG = true;
const LOG_LEVEL = 'debug';


/***/ }),

/***/ "./src/app/layouts/default-layout/default-layout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layouts/default-layout/default-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pull_out_menu_pull_out_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pull-out-menu/pull-out-menu.component */ "./src/app/layouts/pull-out-menu/pull-out-menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class DefaultLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
}
DefaultLayoutComponent.ɵfac = function DefaultLayoutComponent_Factory(t) { return new (t || DefaultLayoutComponent)(); };
DefaultLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultLayoutComponent, selectors: [["ygm-default-layout"]], decls: 12, vars: 0, consts: [[1, "layout"], [1, "container", "app-content"]], template: function DefaultLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Yawgmoth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ygm-pull-out-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Coded by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "PH");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_pull_out_menu_pull_out_menu_component__WEBPACK_IMPORTED_MODULE_1__["PullOutMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-default-layout',
                templateUrl: './default-layout.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layouts/navigation/navigation.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layouts/navigation/navigation.component.ts ***!
  \************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/decks"]; };
const _c1 = function () { return ["/collection"]; };
const _c2 = function () { return ["/wishlist"]; };
const _c3 = function () { return ["/settings"]; };
class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["ygm-navigation"]], decls: 19, vars: 8, consts: [[1, "navbar", "fixed", "shadow"], [1, "navbar-section", "logo-section"], [1, "logo"], [1, "dot", "w"], [1, "dot", "u"], [1, "dot", "b"], [1, "dot", "r"], [1, "dot", "g"], [1, "navbar-section", "link-section"], [1, "btn", "btn-link", 3, "routerLink"], [1, "icon", "icon-people"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Yawgmoth");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "My decks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-navigation',
                templateUrl: './navigation.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layouts/pull-out-menu/pull-out-menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layouts/pull-out-menu/pull-out-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: PullOutMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PullOutMenuComponent", function() { return PullOutMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/decks"]; };
const _c1 = function () { return ["/collection"]; };
const _c2 = function () { return ["/wishlist"]; };
class PullOutMenuComponent {
    constructor() {
        this.status = false;
    }
    ngOnInit() {
    }
    toggleMenu() {
        this.status = !this.status;
    }
}
PullOutMenuComponent.ɵfac = function PullOutMenuComponent_Factory(t) { return new (t || PullOutMenuComponent)(); };
PullOutMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PullOutMenuComponent, selectors: [["ygm-pull-out-menu"]], decls: 17, vars: 8, consts: [[1, "device"], [1, "container"], ["id", "burger", 1, "open-main-nav", 3, "ngClass", "click"], [1, "burger"], [1, "burger-text"], ["id", "main-nav", 1, "main-nav", 3, "ngClass", "click"], [3, "routerLink", "click"]], template: function PullOutMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PullOutMenuComponent_Template_button_click_2_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PullOutMenuComponent_Template_nav_click_6_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PullOutMenuComponent_Template_a_click_9_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My decks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PullOutMenuComponent_Template_a_click_12_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Collection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PullOutMenuComponent_Template_a_click_15_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Wishlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status ? "is-open" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.status ? "is-open" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".main-nav[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    text-align: center;\r\n    background: #FFF;\r\n    opacity: 0;\r\n    z-index: -1;\r\n    visibility: hidden;\r\n    transition: all .375s;\r\n}\r\n.main-nav.is-open[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    background: transparent;\r\n    z-index: 100;\r\n    visibility: visible;\r\n}\r\n\r\n.main-nav[_ngcontent-%COMP%]::before {\r\n\t content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: -15px;\r\n    background: #32b643;\r\n    transform-origin: 0 0;\r\n    transform: skew(-14deg) translateX(-120%);\r\n    transition: all .275s .1s;\r\n}\r\n.main-nav.is-open[_ngcontent-%COMP%]::before {\r\n    transform: skew(-14deg) translateX(0);\r\n}\r\n\r\n.main-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n    flex-direction: column;\r\n    height: 93%; \r\n    align-items: flex-end;\r\n    justify-content: center;\r\n    transform: translateX(-18%) skew(-16deg);\r\n}\r\n.main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin: .5rem 0;\r\n    text-align: right;\r\n    transform: skew(16deg);\r\n}\r\n\r\n.main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    opacity: 0;\r\n    transform: translateY(-10px);\r\n}\r\n.main-nav.is-open[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n}\r\n.main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   a[_ngcontent-%COMP%] {\r\n\ttransition: transform 275ms 175ms\r\n}\r\n.main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%] {\r\n\ttransition: transform 275ms 225ms\r\n}\r\n.main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%] {\r\n\ttransition: transform 275ms 275ms\r\n}\r\n.main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%] {\r\n\ttransition: transform 275ms 325ms\r\n}\r\n.main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%] {\r\n\ttransition: transform 275ms 375ms\r\n}\r\n\r\n.main-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .main-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tlist-style: none;\r\n\tpadding: 0;\r\n}\r\n.main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n    padding: 0.3rem;\r\n    font-size: 1.5rem;\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n}\r\n.main-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .main-nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n    background: #b632ad;\r\n}\r\n\r\n.open-main-nav[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\ttop: 15px;\r\n\tpadding-top: 20px;\r\n\tleft: 15px;\r\n\tz-index: 1000;\r\n\tbackground: none;\r\n\tborder: 0;\r\n\tcursor: pointer;\r\n}\r\n.open-main-nav[_ngcontent-%COMP%]:focus {\r\n\toutline: none;\r\n}\r\n.burger[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tdisplay: block;\r\n\twidth: 28px;\r\n\theight: 4px;\r\n\tmargin: 0 auto;\r\n    background: #5755d9;\r\n\ttransition: all .275s;\r\n}\r\n.burger[_ngcontent-%COMP%]:after, .burger[_ngcontent-%COMP%]:before {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\theight: 100%;\r\n\tbackground: #5755d9;\r\n\ttransition: all .275s;\r\n}\r\n.burger[_ngcontent-%COMP%]:after {\r\n\ttransform: translateY(-12px);\r\n}\r\n.burger[_ngcontent-%COMP%]:before {\r\n\ttransform: translateY(-16px);\r\n}\r\n.burger-text[_ngcontent-%COMP%] {\r\n    color: #5755d9;\r\n}\r\n\r\n.is-open[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%] {\r\n\ttransform: skew(5deg) translateY(-8px) rotate(-45deg);\r\n    background: #fff;\r\n}\r\n.is-open[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]:before {\r\n\ttransform: translateY(0px) skew(-10deg) rotate(75deg);\r\n    background: #fff;\r\n}\r\n.is-open[_ngcontent-%COMP%]   .burger[_ngcontent-%COMP%]:after {\r\n\ttransform: translateY(-12px) translateX(10px) skew(-20deg);\r\n    opacity: 0;\r\n    background: #fff;\r\n}\r\n.is-open[_ngcontent-%COMP%]   .burger-text[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9wdWxsLW91dC1tZW51L3B1bGwtb3V0LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQkFBMkI7QUFDM0I7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixPQUFPO0lBQ1AsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxXQUFXO0lBQ1Qsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLHlDQUF5QztJQUN6Qyx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHFDQUFxQztBQUN6QztBQUVBLGlDQUFpQztBQUNqQztJQUNJLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsV0FBVyxFQUFFLG9EQUFvRDtJQUNqRSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLHdDQUF3QztBQUM1QztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCO0FBRUEsK0JBQStCO0FBQy9CO0lBQ0ksVUFBVTtJQUNWLDRCQUE0QjtBQUNoQztBQUVBO0lBQ0ksVUFBVTtJQUNWLHdCQUF3QjtBQUM1QjtBQUVBO0NBQ0M7QUFDRDtBQUNBO0NBQ0M7QUFDRDtBQUNBO0NBQ0M7QUFDRDtBQUNBO0NBQ0M7QUFDRDtBQUNBO0NBQ0M7QUFDRDtBQUdBLGVBQWU7QUFDZjs7Q0FFQyxnQkFBZ0I7Q0FDaEIsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxjQUFjO0lBQ1gsZUFBZTtJQUNmLGlCQUFpQjtDQUNwQixXQUFXO0NBQ1gscUJBQXFCO0FBQ3RCO0FBQ0E7O0lBRUksbUJBQW1CO0FBQ3ZCO0FBRUEsb0VBQW9FO0FBQ3BFO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsU0FBUztDQUNULGVBQWU7QUFDaEI7QUFDQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0NBQ0Msa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsV0FBVztDQUNYLGNBQWM7SUFDWCxtQkFBbUI7Q0FDdEIscUJBQXFCO0FBQ3RCO0FBRUE7O0NBRUMsV0FBVztDQUNYLGNBQWM7Q0FDZCxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0MsNEJBQTRCO0FBQzdCO0FBRUE7Q0FDQyw0QkFBNEI7QUFDN0I7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFFQSxzQkFBc0I7QUFDdEI7Q0FDQyxxREFBcUQ7SUFDbEQsZ0JBQWdCO0FBQ3BCO0FBRUE7Q0FDQyxxREFBcUQ7SUFDbEQsZ0JBQWdCO0FBQ3BCO0FBRUE7Q0FDQywwREFBMEQ7SUFDdkQsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0cy9wdWxsLW91dC1tZW51L3B1bGwtb3V0LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1haW4gbWVudSBwb3NpdGlvbm5pbmcgKi9cclxuLm1haW4tbmF2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjM3NXM7XHJcbn1cclxuXHJcbi5tYWluLW5hdi5pcy1vcGVuIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi8qIFllbGxvdyBiYW5kIGVmZmVjdCAqL1xyXG4ubWFpbi1uYXY6OmJlZm9yZSB7XHJcblx0IGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAtMTVweDtcclxuICAgIGJhY2tncm91bmQ6ICMzMmI2NDM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXcoLTE0ZGVnKSB0cmFuc2xhdGVYKC0xMjAlKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMjc1cyAuMXM7XHJcbn1cclxuXHJcbi5tYWluLW5hdi5pcy1vcGVuOjpiZWZvcmUge1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KC0xNGRlZykgdHJhbnNsYXRlWCgwKTtcclxufVxyXG5cclxuLyogU2tld2luZyBlZmZlY3Qgb24gbWVudSBsaW5rcyAqL1xyXG4ubWFpbi1uYXYgdWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiA5MyU7IC8qIFNob3VsZCBiZSAxMDAlLCBidXQgd2UgaGF2ZSBhIG5vdGljZSBtZXNzYWdlIDpEICovXHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTglKSBza2V3KC0xNmRlZyk7XHJcbn1cclxuXHJcbi5tYWluLW5hdiBsaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogLjVyZW0gMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgdHJhbnNmb3JtOiBza2V3KDE2ZGVnKTtcclxufVxyXG5cclxuLyogQXBwYXJpdGlvbiBlZmZlY3Qgb24gbGlua3MgKi9cclxuLm1haW4tbmF2IGEge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbn1cclxuXHJcbi5tYWluLW5hdi5pcy1vcGVuIGEge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLm1haW4tbmF2IGxpOm50aC1jaGlsZCgxKSBhIHtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjc1bXMgMTc1bXNcclxufVxyXG4ubWFpbi1uYXYgbGk6bnRoLWNoaWxkKDIpIGEge1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNzVtcyAyMjVtc1xyXG59XHJcbi5tYWluLW5hdiBsaTpudGgtY2hpbGQoMykgYSB7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDI3NW1zIDI3NW1zXHJcbn1cclxuLm1haW4tbmF2IGxpOm50aC1jaGlsZCg0KSBhIHtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjc1bXMgMzI1bXNcclxufVxyXG4ubWFpbi1uYXYgbGk6bnRoLWNoaWxkKDUpIGEge1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNzVtcyAzNzVtc1xyXG59XHJcblxyXG5cclxuLyogRGVjb3JhdGlvbiAqL1xyXG4ubWFpbi1uYXYgdWwsXHJcbi5tYWluLW5hdiBsaSB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHRwYWRkaW5nOiAwO1xyXG59XHJcbi5tYWluLW5hdiBhIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDAuM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ubWFpbi1uYXYgYTpob3ZlcixcclxuLm1haW4tbmF2IGEuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNiNjMyYWQ7XHJcbn1cclxuXHJcbi8qIEJ1cmdlciBTdHlsZTogQHNlZTogaHR0cHM6Ly9jb2RlcGVuLmlvL0NyZWF0aXZlSnVpei9mdWxsL29NWk5YeSAqL1xyXG4ub3Blbi1tYWluLW5hdiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMTVweDtcclxuXHRwYWRkaW5nLXRvcDogMjBweDtcclxuXHRsZWZ0OiAxNXB4O1xyXG5cdHotaW5kZXg6IDEwMDA7XHJcblx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRib3JkZXI6IDA7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5vcGVuLW1haW4tbmF2OmZvY3VzIHtcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idXJnZXIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMjhweDtcclxuXHRoZWlnaHQ6IDRweDtcclxuXHRtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICM1NzU1ZDk7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4yNzVzO1xyXG59XHJcblxyXG4uYnVyZ2VyOmFmdGVyLFxyXG4uYnVyZ2VyOmJlZm9yZSB7XHJcblx0Y29udGVudDogJyc7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6ICM1NzU1ZDk7XHJcblx0dHJhbnNpdGlvbjogYWxsIC4yNzVzO1xyXG59XHJcblxyXG4uYnVyZ2VyOmFmdGVyIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEycHgpO1xyXG59XHJcblxyXG4uYnVyZ2VyOmJlZm9yZSB7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNnB4KTtcclxufVxyXG5cclxuLmJ1cmdlci10ZXh0IHtcclxuICAgIGNvbG9yOiAjNTc1NWQ5O1xyXG59XHJcblxyXG4vKiBUb2dnbGUgU3RhdGUgcGFydCAqL1xyXG4uaXMtb3BlbiAuYnVyZ2VyIHtcclxuXHR0cmFuc2Zvcm06IHNrZXcoNWRlZykgdHJhbnNsYXRlWSgtOHB4KSByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5pcy1vcGVuIC5idXJnZXI6YmVmb3JlIHtcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBza2V3KC0xMGRlZykgcm90YXRlKDc1ZGVnKTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5pcy1vcGVuIC5idXJnZXI6YWZ0ZXIge1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCkgdHJhbnNsYXRlWCgxMHB4KSBza2V3KC0yMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmlzLW9wZW4gLmJ1cmdlci10ZXh0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PullOutMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-pull-out-menu',
                templateUrl: './pull-out-menu.component.html',
                styleUrls: ['./pull-out-menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/model/card.ts":
/*!*******************************!*\
  !*** ./src/app/model/card.ts ***!
  \*******************************/
/*! exports provided: CARD_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARD_TYPES", function() { return CARD_TYPES; });
const CARD_TYPES = ['land', 'instant', 'sorcery', 'enchantment', 'creature', 'planeswalker', 'artifact'];


/***/ }),

/***/ "./src/app/pages/collection/collection.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/collection/collection.component.ts ***!
  \**********************************************************/
/*! exports provided: CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/collection.service */ "./src/app/services/collection.service.ts");
/* harmony import */ var _components_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card-table/card-table.component */ "./src/app/components/card-table/card-table.component.ts");




class CollectionComponent {
    constructor(collectionService) {
        this.collectionService = collectionService;
    }
    ngOnInit() {
        this.collection$ = this.collectionService.getCollection();
    }
}
CollectionComponent.ɵfac = function CollectionComponent_Factory(t) { return new (t || CollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_1__["CollectionService"])); };
CollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollectionComponent, selectors: [["ygm-collection"]], decls: 1, vars: 1, consts: [[3, "cards$"]], template: function CollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ygm-card-table", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards$", ctx.collection$);
    } }, directives: [_components_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_2__["CardTableComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-collection',
                templateUrl: './collection.component.html',
            }]
    }], function () { return [{ type: src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_1__["CollectionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/compare/compare.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/compare/compare.component.ts ***!
  \****************************************************/
/*! exports provided: CompareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareComponent", function() { return CompareComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/deck.service */ "./src/app/services/deck.service.ts");
/* harmony import */ var src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/collection.service */ "./src/app/services/collection.service.ts");
/* harmony import */ var src_app_services_compare_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/compare.service */ "./src/app/services/compare.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/dropdown/dropdown.component */ "./src/app/core/dropdown/dropdown.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function CompareComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", card_r69 == null ? null : card_r69.amount, " ", card_r69 == null ? null : card_r69.name, " ");
} }
function CompareComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompareComponent_div_8_div_1_Template, 2, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cards_r67 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cards_r67);
} }
function CompareComponent_div_10_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", card_r72.owned - card_r72.required, " ", card_r72.name, " ");
} }
function CompareComponent_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompareComponent_div_10_ng_container_1_div_1_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", card_r72.owned - card_r72.required < 0);
} }
function CompareComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CompareComponent_div_10_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const compare_r70 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", compare_r70);
} }
function CompareComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "No deck selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select a deck to compare with your collection.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { value: "source", label: "Select" }; };
class CompareComponent {
    constructor(deckService, collectionService, compareService, route) {
        this.deckService = deckService;
        this.collectionService = collectionService;
        this.compareService = compareService;
        this.route = route;
        this.selectedSource$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        this.sources$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.deckService.listAllDecks(),
            this.deckService.listAllWishDecks(),
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([owned, wished]) => owned.concat(wished)), 
        // tap(decks => console.log(decks)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(decks => decks.map(deck => ({ value: deck.id, label: deck.id.split('_').join('/') }))));
        this.source$ = this.selectedSource$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(next => this.deckService.getDeckById(next)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(deck$ => deck$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(deck => deck.cards.concat(deck.sideboard)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(cards => cards.filter(card => card != null)))));
        this.difference$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([
            this.source$,
            this.collectionService.getCollection()
        ]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([cards, collection]) => this.compareService.diff(cards, collection)));
        const deckId = this.route.parent.snapshot.url[1].path;
        if (deckId) {
            console.log(deckId);
            this.selectedSource$.next(deckId);
        }
    }
}
CompareComponent.ɵfac = function CompareComponent_Factory(t) { return new (t || CompareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_3__["DeckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_4__["CollectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_compare_service__WEBPACK_IMPORTED_MODULE_5__["CompareService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
CompareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompareComponent, selectors: [["ygm-compare"]], decls: 14, vars: 12, consts: [[1, "columns"], [1, "column", "col-6"], [3, "initialValue", "selectValues", "valueChange"], [1, "spacer"], [1, "container"], ["class", "column col-6", 4, "ngIf", "ngIfElse"], ["class", "column col-6", 4, "ngIf"], ["empty", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "empty", "column", "col-12"], [1, "empty-icon"], [1, "icon", "icon-copy"], [1, "empty-title", "h5"], [1, "empty-subtitle"]], template: function CompareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ygm-dropdown", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function CompareComponent_Template_ygm_dropdown_valueChange_2_listener($event) { return ctx.selectedSource$.next($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CompareComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CompareComponent_div_10_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CompareComponent_ng_template_12_Template, 7, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialValue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0))("selectValues", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, ctx.sources$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, ctx.source$))("ngIfElse", _r65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, ctx.difference$));
    } }, directives: [_core_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["DropdownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompareComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-compare',
                templateUrl: './compare.component.html',
            }]
    }], function () { return [{ type: src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_3__["DeckService"] }, { type: src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_4__["CollectionService"] }, { type: src_app_services_compare_service__WEBPACK_IMPORTED_MODULE_5__["CompareService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/deck-list/deck-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/deck-list/deck-list.component.ts ***!
  \********************************************************/
/*! exports provided: DeckListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckListComponent", function() { return DeckListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_deck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/deck.service */ "./src/app/services/deck.service.ts");
/* harmony import */ var _core_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/toggle/toggle.component */ "./src/app/core/toggle/toggle.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_deck_card_deck_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/deck-card/deck-card.component */ "./src/app/components/deck-card/deck-card.component.ts");
/* harmony import */ var _components_deck_tile_deck_tile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/deck-tile/deck-tile.component */ "./src/app/components/deck-tile/deck-tile.component.ts");







function DeckListComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ygm-deck-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meta_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("meta", meta_r3);
} }
function DeckListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DeckListComponent_div_3_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.meta$));
} }
function DeckListComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ygm-deck-tile", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meta_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("meta", meta_r5);
} }
function DeckListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DeckListComponent_div_4_div_2_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r1.meta$));
} }
class DeckListComponent {
    constructor(deckService) {
        this.deckService = deckService;
        this.viewModes = [{
                value: 'cardView',
                label: 'Card View',
            },
            {
                value: 'tileView',
                label: 'Tile View',
            }];
    }
    ngOnInit() {
        this.meta$ = this.deckService.listAllDecks();
    }
    toggleView(evt) {
        this.selectedView = evt;
    }
}
DeckListComponent.ɵfac = function DeckListComponent_Factory(t) { return new (t || DeckListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"])); };
DeckListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeckListComponent, selectors: [["ygm-deck-list"]], decls: 5, vars: 4, consts: [[1, "float-right"], [3, "initialValue", "values", "valueChange"], [1, "clearfix"], ["class", "container", 4, "ngIf"], ["class", "container grid-lg", 4, "ngIf"], [1, "container"], [1, "columns", "deck-card-view"], ["class", "column col-4 col-sm-12", 4, "ngFor", "ngForOf"], [1, "column", "col-4", "col-sm-12"], [3, "meta"], [1, "container", "grid-lg"], [1, "columns", "deck-tile-view"], ["class", "column col-6 col-sm-12", 4, "ngFor", "ngForOf"], [1, "column", "col-6", "col-sm-12"]], template: function DeckListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ygm-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DeckListComponent_Template_ygm_toggle_valueChange_1_listener($event) { return ctx.toggleView($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeckListComponent_div_3_Template, 4, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DeckListComponent_div_4_Template, 4, 3, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialValue", ctx.viewModes[0])("values", ctx.viewModes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedView === "cardView");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedView === "tileView");
    } }, directives: [_core_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__["ToggleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_deck_card_deck_card_component__WEBPACK_IMPORTED_MODULE_4__["DeckCardComponent"], _components_deck_tile_deck_tile_component__WEBPACK_IMPORTED_MODULE_5__["DeckTileComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-deck-list',
                templateUrl: './deck-list.component.html',
            }]
    }], function () { return [{ type: _services_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/meta-list/meta-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/meta-list/meta-list.component.ts ***!
  \********************************************************/
/*! exports provided: MetaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaListComponent", function() { return MetaListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MetaListComponent {
    constructor() { }
    ngOnInit() {
    }
}
MetaListComponent.ɵfac = function MetaListComponent_Factory(t) { return new (t || MetaListComponent)(); };
MetaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MetaListComponent, selectors: [["ygm-meta-list"]], decls: 2, vars: 0, template: function MetaListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "meta-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetaListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-meta-list',
                templateUrl: './meta-list.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/toggle/toggle.component */ "./src/app/core/toggle/toggle.component.ts");



class Settings {
    constructor() {
        this.display = {
            viewModes: [{
                    value: 'cardView',
                    label: 'Card View',
                },
                {
                    value: 'tileView',
                    label: 'Tile View',
                }],
            selectedView: 'cardView'
        };
        this.connectors = [
            {
                connectorName: 'MonogoDB connector',
                connectorDescription: 'Connect to a mongo database (your settings are kept in local storage)',
                dbuser: '',
                dbpassword: '',
                dbhost: '',
                database: ''
            }
        ];
    }
    toggleDisplay(evt) {
        this.display.selectedView = evt;
    }
}
class SettingsComponent {
    constructor() {
        this.settings = new Settings();
    }
    ngOnInit() {
    }
}
SettingsComponent.ɵfac = function SettingsComponent_Factory(t) { return new (t || SettingsComponent)(); };
SettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SettingsComponent, selectors: [["ygm-settings"]], decls: 23, vars: 2, consts: [[1, "container"], [1, "columns"], [1, "column", "col-3", "col-md-12"], [1, "menu"], ["data-content", "Settings", 1, "divider"], [1, "menu-item"], ["href", "#"], [1, "column", "col-9", "col-md-12"], [1, "card-title", "h5"], [1, "column", "col-sm-10"], [1, "column", "col-sm-2"], [3, "initialValue", "values", "valueChange"]], template: function SettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Display ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Connectors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Deck list display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "You can select to display your deck listings in tile mode or card mode.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ygm-toggle", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SettingsComponent_Template_ygm_toggle_valueChange_22_listener($event) { return ctx.settings.toggleDisplay($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialValue", ctx.settings.display.viewModes[0])("values", ctx.settings.display.viewModes);
    } }, directives: [_core_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_1__["ToggleComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-settings',
                templateUrl: './settings.component.html',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/wish-list/wish-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/wish-list/wish-list.component.ts ***!
  \********************************************************/
/*! exports provided: WishListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListComponent", function() { return WishListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/deck.service */ "./src/app/services/deck.service.ts");
/* harmony import */ var src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/collection.service */ "./src/app/services/collection.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/card-table/card-table.component */ "./src/app/components/card-table/card-table.component.ts");
/* harmony import */ var _components_deck_tile_deck_tile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/deck-tile/deck-tile.component */ "./src/app/components/deck-tile/deck-tile.component.ts");







function WishListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ygm-deck-tile", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meta_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("meta", meta_r7);
} }
class WishListComponent {
    constructor(deckService, collectionService) {
        this.deckService = deckService;
        this.collectionService = collectionService;
    }
    ngOnInit() {
        this.meta$ = this.deckService.listAllWishDecks();
        this.wishCards$ = this.collectionService.getWishCards();
    }
}
WishListComponent.ɵfac = function WishListComponent_Factory(t) { return new (t || WishListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"])); };
WishListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WishListComponent, selectors: [["ygm-wish-list"]], decls: 11, vars: 5, consts: [[1, "container", "grid-lg"], [1, "container"], [1, "columns", "deck-tile-view"], ["class", "column col-6 col-sm-12", 4, "ngFor", "ngForOf"], [3, "cards$", "searchable"], [1, "column", "col-6", "col-sm-12"], [3, "meta"]], template: function WishListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Decks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WishListComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ygm-card-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 3, ctx.meta$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cards$", ctx.wishCards$)("searchable", false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_card_table_card_table_component__WEBPACK_IMPORTED_MODULE_4__["CardTableComponent"], _components_deck_tile_deck_tile_component__WEBPACK_IMPORTED_MODULE_5__["DeckTileComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WishListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-wish-list',
                templateUrl: './wish-list.component.html',
            }]
    }], function () { return [{ type: src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"] }, { type: src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_2__["CollectionService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/collection.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/collection.service.ts ***!
  \************************************************/
/*! exports provided: CollectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionService", function() { return CollectionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _csv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./csv.service */ "./src/app/services/csv.service.ts");






class CollectionService {
    constructor(http, csvService) {
        this.http = http;
        this.csvService = csvService;
    }
    getCollection() {
        return this.http.get('assets/purchases.csv', { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(csv => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.csvService.parse(csv))));
    }
    getWishCards() {
        return this.http.get('assets/wishcards.csv', { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(csv => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.csvService.parse(csv))));
    }
}
CollectionService.ɵfac = function CollectionService_Factory(t) { return new (t || CollectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_csv_service__WEBPACK_IMPORTED_MODULE_4__["CsvService"])); };
CollectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CollectionService, factory: CollectionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _csv_service__WEBPACK_IMPORTED_MODULE_4__["CsvService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/compare.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/compare.service.ts ***!
  \*********************************************/
/*! exports provided: CompareService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareService", function() { return CompareService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CompareService {
    constructor() { }
    diff(cards, collection) {
        // console.log(cards);
        return (cards || []).reduce((acc, card) => {
            const inCollection = this.findAllMatchingCards(card.name, collection);
            // console.log(inCollection);
            if (!inCollection) {
                acc.push({
                    name: card.name,
                    owned: 0,
                    required: card.amount,
                });
            }
            else {
                acc.push({
                    name: card.name,
                    owned: inCollection.quantity,
                    required: card.amount,
                });
            }
            return acc;
        }, []);
    }
    findAllMatchingCards(cardName, collection) {
        return collection
            .filter(elt => elt.cardName === cardName)
            .reduce((withAmount, item) => {
            withAmount.quantity += item.quantity;
            return withAmount;
        }, { name: cardName, quantity: 0 });
    }
}
CompareService.ɵfac = function CompareService_Factory(t) { return new (t || CompareService)(); };
CompareService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompareService, factory: CompareService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompareService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/csv.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/csv.service.ts ***!
  \*****************************************/
/*! exports provided: CsvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvService", function() { return CsvService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CsvService {
    constructor() {
        this.sperator = /;/; ///\t/;
    }
    parse(csv) {
        const csvFull = csv.split(/\r\n|\n/);
        const csvHeader = csvFull[0].split(this.sperator);
        const csvData = csvFull.splice(1);
        return csvData.filter(row => '' !== row).reduce((acc, row) => {
            const cells = row.split(this.sperator);
            const obj = {};
            csvHeader.forEach((el, i) => {
                obj[el] = cells[i];
            });
            acc.push(obj);
            return acc;
        }, []);
    }
}
CsvService.ɵfac = function CsvService_Factory(t) { return new (t || CsvService)(); };
CsvService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CsvService, factory: CsvService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsvService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/deck.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/deck.service.ts ***!
  \******************************************/
/*! exports provided: DeckService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeckService", function() { return DeckService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _mtg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mtg.service */ "./src/app/services/mtg.service.ts");
/* harmony import */ var _csv_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./csv.service */ "./src/app/services/csv.service.ts");







class DeckService {
    constructor(http, mtgService, csvService) {
        this.http = http;
        this.mtgService = mtgService;
        this.csvService = csvService;
    }
    listAllDecks() {
        return this.getCsv('assets/decks.csv').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(csv => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.csvService.parse(csv))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    }
    listAllWishDecks() {
        return this.getCsv('assets/wishdecks.csv').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(csv => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.csvService.parse(csv))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    }
    findMetadataById(deckId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.listAllDecks(), this.listAllWishDecks()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(meta => meta), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["find"])(meta => meta.id === deckId));
    }
    getDeckById(deckId) {
        const deckPath = deckId.split('_').join('/');
        return this.http.get(`assets/decks/${deckPath}.txt`, { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((deckTxt) => {
            let currentSection = 'mainboard';
            const cards$ = deckTxt.split(/\r?\n/)
                .filter(str => str && str.length > 0)
                .map(line => {
                const partial = this.parseCardLine(line, currentSection);
                if (partial.section !== currentSection) {
                    currentSection = partial.section;
                }
                return partial;
            })
                .filter(partial => partial.name !== null)
                .map(partial => this.getCard(partial)); // [Observable<Card>]
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(cards$); // Observable<Card[]>
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(o => o), 
        // tap(cards => console.log(cards)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(cards => ({ name: deckId, cards: cards })));
    }
    getCard(partial) {
        return this.mtgService.getCardByName(partial.name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(card => (Object.assign(Object.assign({}, card), { amount: partial.amount, sideboard: partial.section.toLowerCase() === 'sideboard' }))));
    }
    parseCardLine(cardLine, sectionName) {
        const tokens = cardLine.split(' ');
        if (tokens[0] === '#') {
            return { name: null, amount: null, section: tokens[1] };
        }
        else {
            return { name: tokens.slice(1).join(' '), amount: Number(tokens[0]), section: sectionName };
        }
    }
    getCsv(path) {
        return this.http.get(path, { responseType: 'text' });
    }
}
DeckService.ɵfac = function DeckService_Factory(t) { return new (t || DeckService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mtg_service__WEBPACK_IMPORTED_MODULE_4__["MtgService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_csv_service__WEBPACK_IMPORTED_MODULE_5__["CsvService"])); };
DeckService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeckService, factory: DeckService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _mtg_service__WEBPACK_IMPORTED_MODULE_4__["MtgService"] }, { type: _csv_service__WEBPACK_IMPORTED_MODULE_5__["CsvService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/logger.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/logger.service.ts ***!
  \********************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../env */ "./src/app/env.ts");



class LoggerService {
    constructor() { }
    debug(message, ...dispVars) {
        if (_env__WEBPACK_IMPORTED_MODULE_1__["LOG_LEVEL"] === 'debug') {
            // this.eLog((typeof message) === 'string' ? message : JSON.stringify(message), dispVars);
            console.log(message);
        }
    }
    /**
     * eLog - displays calling line number & message & dumps vars as pretty json string
     * @param {string} msg - string to display in log message
     * @param {any} dispVars - any number of variables (ellipsis , aka Rest parameters) to dump
     * {@link https://github.com/evanw/node-source-map-support usable by typescript node-source-map-support module}
     * {@link https://github.com/mozilla/source-map/ Mozilla source-map library & project}
     * {@link http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/ good introduction to sourcemaps}
     */
    eLog(msg, ...dispVars) {
        /**
         * go one line back for the caller
         * @type {string}
         */
        let stackLine = (new Error).stack.split("\n")[2];
        /**
         * retrieve the file basename & positional data, after the last `/` to the `)`
         */
        // 
        let caller_line = stackLine.slice(stackLine.lastIndexOf('/'), stackLine.lastIndexOf(')'));
        /**
         *  test for no `/` ; if there is no `/` then use filename without a prefixed path
         */
        if (caller_line.length == 0) {
            caller_line = stackLine.slice(stackLine.lastIndexOf('('), stackLine.lastIndexOf(')'));
        }
        // 
        /**
         * filename_base - parse out the file basename; remove first `/` char and go to `:`
         */
        let filename_base = caller_line.slice(0 + 1, caller_line.indexOf(':'));
        /**
         * line_no - parse out the line number ; remove first `:` char and go to 2nd `:`
         */
        let line_no = caller_line.slice(caller_line.indexOf(':') + 1, caller_line.lastIndexOf(':'));
        /**
         * line_pos - line positional - from the last `:` to the end of the string
         */
        let line_pos = caller_line.slice(caller_line.lastIndexOf(':') + 1);
        console.log(`eLog called by ${filename_base} on line# ${line_no} @ char# ${line_pos} said:\n${msg}`);
        // print out the input variables as pretty JSON strings
        dispVars.forEach(value => {
            console.log(JSON.stringify(value, null, 2));
        });
    }
}
LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(); };
LoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/mtg.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/mtg.service.ts ***!
  \*****************************************/
/*! exports provided: MtgService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MtgService", function() { return MtgService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _model_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/card */ "./src/app/model/card.ts");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logger.service */ "./src/app/services/logger.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class MtgService {
    constructor(log, http) {
        this.log = log;
        this.http = http;
    }
    getCardByName(cardName) {
        return this.http.get(`https://api.scryfall.com/cards/named?exact=${cardName}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(mtgCard => this.log.debug(mtgCard, this)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(mtgCard => this.toCard(mtgCard)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            // TODO: handle display of erroneous card
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ name: cardName, amount: 0, types: [] });
        }));
    }
    toCard(mtgCard) {
        const card = {
            externalId: mtgCard['id'],
            name: mtgCard['name'],
            typeLine: mtgCard['type_line'],
            //TODO: superTypes, subTypes
            types: this.parseTypeLine(mtgCard['type_line']),
            oracleText: mtgCard['oracle_text'],
            flavorText: mtgCard['flavor_text'],
            cmc: mtgCard['cmc'],
            manaCost: mtgCard['mana_cost'],
            rarity: mtgCard['rarity'],
            layout: mtgCard['layout'],
            amount: 1,
        };
        if (mtgCard['card_faces']) {
            card.faces = [
                this.toCardFace(mtgCard['card_faces'][0]),
                this.toCardFace(mtgCard['card_faces'][1]),
            ];
        }
        if (mtgCard['image_uris']) {
            //small, normal, large, png, art_crop, border_crop
            card.imgUrl = mtgCard['image_uris']['normal'];
            card.imgArtUrl = mtgCard['image_uris']['art_crop'];
        }
        return card;
    }
    toCardFace(mtgCardFace) {
        const cardFace = {
            name: mtgCardFace['name'],
            typeLine: mtgCardFace['type_line'],
            types: this.parseTypeLine(mtgCardFace['type_line']),
            oracleText: mtgCardFace['oracle_text'],
            flavorText: mtgCardFace['flavor_text'],
            manaCost: mtgCardFace['mana_cost'],
        };
        if (mtgCardFace['image_uris']) {
            cardFace.imgUrl = mtgCardFace['image_uris']['normal'];
        }
        return cardFace;
    }
    parseTypeLine(typeLine) {
        return typeLine.split(' ').reduce((acc, type) => {
            const val = _model_card__WEBPACK_IMPORTED_MODULE_3__["CARD_TYPES"].find(elt => elt === type.toLowerCase());
            if (val) {
                acc.push(val);
            }
            return acc;
        }, []);
    }
}
MtgService.ɵfac = function MtgService_Factory(t) { return new (t || MtgService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
MtgService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MtgService, factory: MtgService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MtgService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\phvdv\dev\yawgmoth\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map