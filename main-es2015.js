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
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./src/app/env.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_deck_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/deck.service */ "./src/app/services/deck.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_deck_deck_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/deck/deck.component */ "./src/app/components/deck/deck.component.ts");






function AppComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meta_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, meta_r1));
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ygm-deck", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_div_7_div_2_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const meta_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("meta", meta_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.env.DEBUG);
} }
class AppComponent {
    constructor(deckService) {
        this.deckService = deckService;
        this.env = _env__WEBPACK_IMPORTED_MODULE_0__;
        this.title = 'yawgmoth';
    }
    ngOnInit() {
        this.meta$ = this.deckService.list();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_deck_service__WEBPACK_IMPORTED_MODULE_2__["DeckService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 4, consts: [[1, "dot", "w"], [1, "dot", "u"], [1, "dot", "b"], [1, "dot", "r"], [1, "dot", "g"], [4, "ngFor", "ngForOf"], [3, "meta"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_div_7_Template, 3, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, ctx.meta$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_deck_deck_component__WEBPACK_IMPORTED_MODULE_4__["DeckComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
            }]
    }], function () { return [{ type: _services_deck_service__WEBPACK_IMPORTED_MODULE_2__["DeckService"] }]; }, null); })();


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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_deck_deck_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/deck/deck.component */ "./src/app/components/deck/deck.component.ts");
/* harmony import */ var _components_spinner_card_spinner_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/spinner-card/spinner-card.component */ "./src/app/components/spinner-card/spinner-card.component.ts");
/* harmony import */ var _components_mana_mana_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mana/mana.component */ "./src/app/components/mana/mana.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_deck_deck_component__WEBPACK_IMPORTED_MODULE_4__["DeckComponent"],
        _components_spinner_card_spinner_card_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerCardComponent"],
        _components_mana_mana_component__WEBPACK_IMPORTED_MODULE_6__["ManaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_deck_deck_component__WEBPACK_IMPORTED_MODULE_4__["DeckComponent"],
                    _components_spinner_card_spinner_card_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerCardComponent"],
                    _components_mana_mana_component__WEBPACK_IMPORTED_MODULE_6__["ManaComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_deck_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/deck.service */ "./src/app/services/deck.service.ts");
/* harmony import */ var _spinner_card_spinner_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spinner-card/spinner-card.component */ "./src/app/components/spinner-card/spinner-card.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _mana_mana_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mana/mana.component */ "./src/app/components/mana/mana.component.ts");








function DeckComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DeckComponent_li_7_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const card_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.selectedCard$.next(card_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ygm-mana", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r5.amount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cost", card_r5.manaCost);
} }
class DeckComponent {
    constructor(deckService) {
        this.deckService = deckService;
    }
    ngOnInit() {
        this.deck$ = this.deckService.getOne(this.meta.id);
        this.selectedCard$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.deck$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((deck) => deck.cards[0]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(card => this.selectedCard$.next(card)));
    }
}
DeckComponent.ɵfac = function DeckComponent_Factory(t) { return new (t || DeckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_deck_service__WEBPACK_IMPORTED_MODULE_3__["DeckService"])); };
DeckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeckComponent, selectors: [["ygm-deck"]], inputs: { meta: "meta" }, decls: 9, vars: 5, consts: [[1, "row"], [1, "preview"], [3, "card"], [1, "card", "list"], [4, "ngFor", "ngForOf"], [3, "click"], [3, "cost"]], template: function DeckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ygm-spinner-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DeckComponent_li_7_Template, 5, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_2_0 = null;
        const currVal_2 = (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, ctx.deck$)) == null ? null : tmp_2_0.cards;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.meta.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", ctx.selectedCard$);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", currVal_2);
    } }, directives: [_spinner_card_spinner_card_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _mana_mana_component__WEBPACK_IMPORTED_MODULE_6__["ManaComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ygm-deck',
                templateUrl: './deck.component.html',
            }]
    }], function () { return [{ type: _services_deck_service__WEBPACK_IMPORTED_MODULE_3__["DeckService"] }]; }, { meta: [{
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
        return this.cost.split(/{(.*?)}/)
            .filter(str => str.trim() != "")
            .map(token => token.toLowerCase().replace('/', ''))
            .map(cost => ['ms', 'ms-cost', 'ms-' + cost]);
    }
}
ManaComponent.ɵfac = function ManaComponent_Factory(t) { return new (t || ManaComponent)(); };
ManaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManaComponent, selectors: [["ygm-mana"]], inputs: { cost: "cost" }, decls: 2, vars: 1, consts: [[1, "mana"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function ManaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", card_r10.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
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
SpinnerCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerCardComponent, selectors: [["ygm-spinner-card"]], inputs: { card: "card" }, decls: 4, vars: 6, consts: [[4, "ngIf"], [3, "src"]], template: function SpinnerCardComponent_Template(rf, ctx) { if (rf & 1) {
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

/***/ "./src/app/env.ts":
/*!************************!*\
  !*** ./src/app/env.ts ***!
  \************************/
/*! exports provided: DEBUG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEBUG", function() { return DEBUG; });

const DEBUG = true;


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






class DeckService {
    constructor(http, mtgService) {
        this.http = http;
        this.mtgService = mtgService;
    }
    list() {
        return this.http.get('assets/decks.json');
    }
    getOne(deckId) {
        return this.http.get('assets/decks/' + deckId + '.txt', { responseType: 'text' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((deckTxt) => {
            const cards$ = deckTxt.split(/\r?\n/)
                .filter(str => str && str.length > 0)
                .map(line => this.parseCardLine(line))
                .map(proto => this.getCard(proto)); // [Observable<Card>]
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(cards$); // Observable<Card[]>
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(o => o), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(cards => ({ name: deckId, cards: cards })));
    }
    getCard(cardTuple) {
        return this.mtgService.getCardByName(cardTuple.name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(card => (Object.assign(Object.assign({}, card), { amount: cardTuple.amount }))));
    }
    parseCardLine(cardLine) {
        const tokens = cardLine.split(' ');
        const cardName = tokens.slice(1).join(' ');
        const cardAmount = Number(tokens[0]);
        return { name: cardName, amount: cardAmount };
    }
}
DeckService.ɵfac = function DeckService_Factory(t) { return new (t || DeckService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mtg_service__WEBPACK_IMPORTED_MODULE_4__["MtgService"])); };
DeckService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeckService, factory: DeckService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _mtg_service__WEBPACK_IMPORTED_MODULE_4__["MtgService"] }]; }, null); })();


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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class MtgService {
    constructor(http) {
        this.http = http;
    }
    getCardByName(cardName) {
        return this.http.get('https://api.scryfall.com/cards/named?exact=' + cardName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(mtgCard => ({
            externalId: mtgCard['id'],
            name: mtgCard['name'],
            imgUrl: mtgCard['image_uris']['normal'],
            cmc: mtgCard['cmc'],
            manaCost: mtgCard['mana_cost'],
            oracle: mtgCard['oracle_text'],
            rarity: mtgCard['rarity'],
            amount: 1,
        })));
    }
}
MtgService.ɵfac = function MtgService_Factory(t) { return new (t || MtgService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MtgService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MtgService, factory: MtgService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MtgService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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