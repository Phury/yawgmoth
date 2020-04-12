function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'yawgmoth';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layouts/default-layout/default-layout.component */
    "./src/app/layouts/default-layout/default-layout.component.ts");
    /* harmony import */


    var _layouts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layouts/navigation/navigation.component */
    "./src/app/layouts/navigation/navigation.component.ts");
    /* harmony import */


    var _pages_deck_list_deck_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/deck-list/deck-list.component */
    "./src/app/pages/deck-list/deck-list.component.ts");
    /* harmony import */


    var _pages_collection_collection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/collection/collection.component */
    "./src/app/pages/collection/collection.component.ts");
    /* harmony import */


    var _pages_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/wish-list/wish-list.component */
    "./src/app/pages/wish-list/wish-list.component.ts");
    /* harmony import */


    var _pages_meta_list_meta_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/meta-list/meta-list.component */
    "./src/app/pages/meta-list/meta-list.component.ts");
    /* harmony import */


    var _components_spinner_card_spinner_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/spinner-card/spinner-card.component */
    "./src/app/components/spinner-card/spinner-card.component.ts");
    /* harmony import */


    var _components_mana_mana_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/mana/mana.component */
    "./src/app/components/mana/mana.component.ts");
    /* harmony import */


    var _components_deck_deck_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/deck/deck.component */
    "./src/app/components/deck/deck.component.ts");
    /* harmony import */


    var _components_deck_card_deck_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/deck-card/deck-card.component */
    "./src/app/components/deck-card/deck-card.component.ts");
    /* harmony import */


    var _components_keyrune_keyrune_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/keyrune/keyrune.component */
    "./src/app/components/keyrune/keyrune.component.ts");
    /* harmony import */


    var _components_deck_tile_deck_tile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/deck-tile/deck-tile.component */
    "./src/app/components/deck-tile/deck-tile.component.ts");
    /* harmony import */


    var _components_card_tile_card_tile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/card-tile/card-tile.component */
    "./src/app/components/card-tile/card-tile.component.ts");
    /* harmony import */


    var _core_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./core/toggle/toggle.component */
    "./src/app/core/toggle/toggle.component.ts");

    var appRoutes = [//{ path: 'decks/:id',      component: HeroDetailComponent },
    {
      path: 'decks',
      component: _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutComponent"],
      data: {
        title: 'Your decks'
      },
      children: [{
        path: '',
        component: _pages_deck_list_deck_list_component__WEBPACK_IMPORTED_MODULE_8__["DeckListComponent"]
      }]
    }, {
      path: 'decks/:id',
      component: _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutComponent"],
      data: {
        title: 'Deck details'
      },
      children: [{
        path: '',
        component: _components_deck_deck_component__WEBPACK_IMPORTED_MODULE_14__["DeckComponent"]
      }]
    }, {
      path: 'collection',
      component: _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutComponent"],
      data: {
        title: 'Your collection'
      },
      children: [{
        path: '',
        component: _pages_collection_collection_component__WEBPACK_IMPORTED_MODULE_9__["CollectionComponent"]
      }]
    }, {
      path: 'wishlist',
      component: _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutComponent"],
      data: {
        title: 'Your wishlist'
      },
      children: [{
        path: '',
        component: _pages_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_10__["WishListComponent"]
      }]
    }, {
      path: 'meta',
      component: _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutComponent"],
      data: {
        title: 'Mtg metagame'
      },
      children: [{
        path: '',
        component: _pages_meta_list_meta_list_component__WEBPACK_IMPORTED_MODULE_11__["MetaListComponent"]
      }]
    }, {
      path: '',
      redirectTo: '/decks',
      pathMatch: 'full'
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_deck_deck_component__WEBPACK_IMPORTED_MODULE_14__["DeckComponent"], _components_spinner_card_spinner_card_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerCardComponent"], _components_mana_mana_component__WEBPACK_IMPORTED_MODULE_13__["ManaComponent"], _pages_deck_list_deck_list_component__WEBPACK_IMPORTED_MODULE_8__["DeckListComponent"], _pages_collection_collection_component__WEBPACK_IMPORTED_MODULE_9__["CollectionComponent"], _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutComponent"], _components_deck_card_deck_card_component__WEBPACK_IMPORTED_MODULE_15__["DeckCardComponent"], _layouts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _components_keyrune_keyrune_component__WEBPACK_IMPORTED_MODULE_16__["KeyruneComponent"], _components_deck_tile_deck_tile_component__WEBPACK_IMPORTED_MODULE_17__["DeckTileComponent"], _components_card_tile_card_tile_component__WEBPACK_IMPORTED_MODULE_18__["CardTileComponent"], _pages_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_10__["WishListComponent"], _pages_meta_list_meta_list_component__WEBPACK_IMPORTED_MODULE_11__["MetaListComponent"], _core_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_19__["ToggleComponent"]],
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], //, { enableTracing: true }),
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_deck_deck_component__WEBPACK_IMPORTED_MODULE_14__["DeckComponent"], _components_spinner_card_spinner_card_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerCardComponent"], _components_mana_mana_component__WEBPACK_IMPORTED_MODULE_13__["ManaComponent"], _pages_deck_list_deck_list_component__WEBPACK_IMPORTED_MODULE_8__["DeckListComponent"], _pages_collection_collection_component__WEBPACK_IMPORTED_MODULE_9__["CollectionComponent"], _layouts_default_layout_default_layout_component__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutComponent"], _components_deck_card_deck_card_component__WEBPACK_IMPORTED_MODULE_15__["DeckCardComponent"], _layouts_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"], _components_keyrune_keyrune_component__WEBPACK_IMPORTED_MODULE_16__["KeyruneComponent"], _components_deck_tile_deck_tile_component__WEBPACK_IMPORTED_MODULE_17__["DeckTileComponent"], _components_card_tile_card_tile_component__WEBPACK_IMPORTED_MODULE_18__["CardTileComponent"], _pages_wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_10__["WishListComponent"], _pages_meta_list_meta_list_component__WEBPACK_IMPORTED_MODULE_11__["MetaListComponent"], _core_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_19__["ToggleComponent"]],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes), _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/card-tile/card-tile.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/card-tile/card-tile.component.ts ***!
    \*************************************************************/

  /*! exports provided: CardTileComponent */

  /***/
  function srcAppComponentsCardTileCardTileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardTileComponent", function () {
      return CardTileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _mana_mana_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../mana/mana.component */
    "./src/app/components/mana/mana.component.ts");

    var CardTileComponent = /*#__PURE__*/function () {
      function CardTileComponent() {
        _classCallCheck(this, CardTileComponent);
      }

      _createClass(CardTileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardTileComponent;
    }();

    CardTileComponent.ɵfac = function CardTileComponent_Factory(t) {
      return new (t || CardTileComponent)();
    };

    CardTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CardTileComponent,
      selectors: [["ygm-card-tile"]],
      inputs: {
        card: "card"
      },
      decls: 13,
      vars: 5,
      consts: [[1, "container", "card-tile-view"], [1, "tile"], [1, "tile-icon"], [1, "example-tile-icon"], [1, "mtg-card", 3, "src"], [1, "tile-content"], [1, "tile-title"], [3, "cost"], [1, "tile-subtitle"], [1, "card-oracle"]],
      template: function CardTileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ygm-mana", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.card.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.card.name, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cost", ctx.card.manaCost);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.typeLine);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.card.oracleText);
        }
      },
      directives: [_mana_mana_component__WEBPACK_IMPORTED_MODULE_1__["ManaComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ygm-card-tile',
          templateUrl: './card-tile.component.html'
        }]
      }], function () {
        return [];
      }, {
        card: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/deck-card/deck-card.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/deck-card/deck-card.component.ts ***!
    \*************************************************************/

  /*! exports provided: DeckCardComponent */

  /***/
  function srcAppComponentsDeckCardDeckCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeckCardComponent", function () {
      return DeckCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_mtg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/mtg.service */
    "./src/app/services/mtg.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/decks", a1];
    };

    function DeckCardComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var card_r24 = ctx.ngIf;

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", card_r24.imgArtUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r23.meta.id))("state", ctx_r23.meta);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.meta.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.meta.format);
      }
    }

    var DeckCardComponent = /*#__PURE__*/function () {
      function DeckCardComponent(mtgService) {
        _classCallCheck(this, DeckCardComponent);

        this.mtgService = mtgService;
      }

      _createClass(DeckCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.previewCard$ = this.mtgService.getCardByName(this.meta.previewCard);
        }
      }]);

      return DeckCardComponent;
    }();

    DeckCardComponent.ɵfac = function DeckCardComponent_Factory(t) {
      return new (t || DeckCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_mtg_service__WEBPACK_IMPORTED_MODULE_1__["MtgService"]));
    };

    DeckCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeckCardComponent,
      selectors: [["ygm-deck-card"]],
      inputs: {
        meta: "meta"
      },
      decls: 2,
      vars: 3,
      consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "card-image"], [1, "img-responsive", 3, "src"], [1, "card-header"], [1, "card-subtitle"], [1, "btn", "btn-success", 3, "routerLink", "state"], [1, "card-action"], [1, "chip"]],
      template: function DeckCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DeckCardComponent_div_0_Template, 10, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.previewCard$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ygm-deck-card',
          templateUrl: './deck-card.component.html'
        }]
      }], function () {
        return [{
          type: _services_mtg_service__WEBPACK_IMPORTED_MODULE_1__["MtgService"]
        }];
      }, {
        meta: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/deck-tile/deck-tile.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/deck-tile/deck-tile.component.ts ***!
    \*************************************************************/

  /*! exports provided: DeckTileComponent */

  /***/
  function srcAppComponentsDeckTileDeckTileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeckTileComponent", function () {
      return DeckTileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_mtg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/mtg.service */
    "./src/app/services/mtg.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/decks", a1];
    };

    function DeckTileComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
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
      }

      if (rf & 2) {
        var card_r28 = ctx.ngIf;

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", card_r28.imgArtUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r27.meta.id))("state", ctx_r27.meta);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.meta.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.meta.format);
      }
    }

    var DeckTileComponent = /*#__PURE__*/function () {
      function DeckTileComponent(mtgService) {
        _classCallCheck(this, DeckTileComponent);

        this.mtgService = mtgService;
      }

      _createClass(DeckTileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.previewCard$ = this.mtgService.getCardByName(this.meta.previewCard);
        }
      }]);

      return DeckTileComponent;
    }();

    DeckTileComponent.ɵfac = function DeckTileComponent_Factory(t) {
      return new (t || DeckTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_mtg_service__WEBPACK_IMPORTED_MODULE_1__["MtgService"]));
    };

    DeckTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeckTileComponent,
      selectors: [["ygm-deck-tile"]],
      inputs: {
        meta: "meta"
      },
      decls: 2,
      vars: 3,
      consts: [["class", "tile", 4, "ngIf"], [1, "tile"], [1, "tile-icon"], [1, "deck-icon"], [3, "src"], [1, "tile-content"], [1, "btn", "btn-success", 3, "routerLink", "state"], [1, "chip"]],
      template: function DeckTileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DeckTileComponent_div_0_Template, 11, 7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.previewCard$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ygm-deck-tile',
          templateUrl: './deck-tile.component.html'
        }]
      }], function () {
        return [{
          type: src_app_services_mtg_service__WEBPACK_IMPORTED_MODULE_1__["MtgService"]
        }];
      }, {
        meta: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/deck/deck.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/deck/deck.component.ts ***!
    \***************************************************/

  /*! exports provided: DeckComponent */

  /***/
  function srcAppComponentsDeckDeckComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeckComponent", function () {
      return DeckComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/logger.service */
    "./src/app/services/logger.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_deck_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/deck.service */
    "./src/app/services/deck.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _mana_mana_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../mana/mana.component */
    "./src/app/components/mana/mana.component.ts");
    /* harmony import */


    var _card_tile_card_tile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../card-tile/card-tile.component */
    "./src/app/components/card-tile/card-tile.component.ts");

    function DeckComponent_div_0_div_6_details_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "details", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "summary", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ygm-mana", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ygm-card-tile", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", card_r21.showContent ? "active" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r21.amount, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", card_r21.name, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cost", card_r21.manaCost);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r21);
      }
    }

    function DeckComponent_div_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeckComponent_div_0_div_6_details_3_Template, 9, 5, "details", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var entry_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](entry_r19.key);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", entry_r19.value);
      }
    }

    function DeckComponent_div_0_details_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "details", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "summary", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ygm-mana", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ygm-card-tile", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", card_r22.showContent ? "active" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r22.amount, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", card_r22.name, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cost", card_r22.manaCost);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r22);
      }
    }

    function DeckComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DeckComponent_div_0_div_6_Template, 4, 2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "sideboard");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DeckComponent_div_0_details_12_Template, 9, 5, "details", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var meta_r16 = ctx.ngIf;

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](meta_r16.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx_r15.mainboardGrouped$)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, ctx_r15.sideboard$));
      }
    }

    var DeckComponent = /*#__PURE__*/function () {
      function DeckComponent(log, route, deckService) {
        _classCallCheck(this, DeckComponent);

        this.log = log;
        this.route = route;
        this.deckService = deckService;
      }

      _createClass(DeckComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

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
          var deckId = this.route.parent.snapshot.url[1].path;
          this.meta$ = this.deckService.findMetadataById(deckId);
          var deck$ = this.meta$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["flatMap"])(function (meta) {
            return _this.deckService.getDeckById(meta.id);
          }));
          this.mainboardGrouped$ = deck$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (deck) {
            return deck.cards.reduce(function (acc, card) {
              if (card.sideboard) {// skip
              } else if (acc.has(card.types[0])) {
                acc.get(card.types[0]).push(card);
              } else {
                acc.set(card.types[0], [card]);
              }

              return acc;
            }, new Map());
          }));
          this.sideboard$ = deck$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (deck) {
            return deck.cards.filter(function (c) {
              return c.sideboard;
            });
          }), //filter(cards => cards.filter(c => c.sideboard)),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (cards) {
            return _this.log.debug(cards);
          }));
        }
      }]);

      return DeckComponent;
    }();

    DeckComponent.ɵfac = function DeckComponent_Factory(t) {
      return new (t || DeckComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_deck_service__WEBPACK_IMPORTED_MODULE_4__["DeckService"]));
    };

    DeckComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeckComponent,
      selectors: [["ygm-deck"]],
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [1, "container"], [1, "columns"], [1, "column", "col-8", "col-sm-12", "lg-list"], [4, "ngFor", "ngForOf"], [1, "column", "col-4", "col-sm-12"], [1, "card-type-title"], ["class", "accordion", 4, "ngFor", "ngForOf"], [1, "accordion"], [1, "accordion-header", 3, "ngClass"], [1, "icon", "icon-photo"], [3, "cost"], [1, "accordion-body"], [3, "card"]],
      template: function DeckComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DeckComponent_div_0_Template, 14, 9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.meta$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _mana_mana_component__WEBPACK_IMPORTED_MODULE_6__["ManaComponent"], _card_tile_card_tile_component__WEBPACK_IMPORTED_MODULE_7__["CardTileComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["KeyValuePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ygm-deck',
          templateUrl: './deck.component.html'
        }]
      }], function () {
        return [{
          type: src_app_services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_deck_service__WEBPACK_IMPORTED_MODULE_4__["DeckService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/keyrune/keyrune.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/keyrune/keyrune.component.ts ***!
    \*********************************************************/

  /*! exports provided: KeyruneComponent */

  /***/
  function srcAppComponentsKeyruneKeyruneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KeyruneComponent", function () {
      return KeyruneComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function KeyruneComponent_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
      }

      if (rf & 2) {
        var symbols_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", symbols_r26);
      }
    }

    var KeyruneComponent = /*#__PURE__*/function () {
      function KeyruneComponent() {
        _classCallCheck(this, KeyruneComponent);
      }

      _createClass(KeyruneComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "keyruneClasses",
        value: function keyruneClasses() {
          return [['ss', 'ss-' + this.symbol.toLowerCase()]];
        }
      }]);

      return KeyruneComponent;
    }();

    KeyruneComponent.ɵfac = function KeyruneComponent_Factory(t) {
      return new (t || KeyruneComponent)();
    };

    KeyruneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: KeyruneComponent,
      selectors: [["ygm-keyrune"]],
      inputs: {
        symbol: "symbol"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "mana"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]],
      template: function KeyruneComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KeyruneComponent_i_1_Template, 1, 1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.keyruneClasses());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyruneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ygm-keyrune',
          templateUrl: './keyrune.component.html'
        }]
      }], function () {
        return [];
      }, {
        symbol: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/mana/mana.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/mana/mana.component.ts ***!
    \***************************************************/

  /*! exports provided: ManaComponent */

  /***/
  function srcAppComponentsManaManaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManaComponent", function () {
      return ManaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManaComponent_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 2);
      }

      if (rf & 2) {
        var symbols_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", symbols_r14);
      }
    }

    var ManaComponent = /*#__PURE__*/function () {
      function ManaComponent() {
        _classCallCheck(this, ManaComponent);
      }

      _createClass(ManaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "manaClasses",
        value: function manaClasses() {
          if (!this.cost) {
            return [[]];
          }

          return this.cost.split(/{(.*?)}/).filter(function (str) {
            return str.trim() != "";
          }).map(function (token) {
            return token.toLowerCase().replace('/', '');
          }).map(function (cost) {
            return ['ms', 'ms-cost', 'ms-' + cost];
          });
        }
      }]);

      return ManaComponent;
    }();

    ManaComponent.ɵfac = function ManaComponent_Factory(t) {
      return new (t || ManaComponent)();
    };

    ManaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ManaComponent,
      selectors: [["ygm-mana"]],
      inputs: {
        cost: "cost"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "mana"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]],
      template: function ManaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ManaComponent_i_1_Template, 1, 1, "i", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.manaClasses());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ygm-mana',
          templateUrl: './mana.component.html'
        }]
      }], function () {
        return [];
      }, {
        cost: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/spinner-card/spinner-card.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/spinner-card/spinner-card.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SpinnerCardComponent */

  /***/
  function srcAppComponentsSpinnerCardSpinnerCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerCardComponent", function () {
      return SpinnerCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SpinnerCardComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var card_r12 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", card_r12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function SpinnerCardComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r11.spinnerCard, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var SpinnerCardComponent = /*#__PURE__*/function () {
      function SpinnerCardComponent() {
        _classCallCheck(this, SpinnerCardComponent);
      }

      _createClass(SpinnerCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.spinnerCard = this.randomSpinner();
        }
      }, {
        key: "randomSpinner",
        value: function randomSpinner() {
          var spinners = ["angel", "embalmed", "exerted", "goat", "knight ally", "soldier", "squirrel", "thopter", "angel"];
          return "assets/tokens/" + spinners[Math.floor(Math.random() * spinners.length)] + ".gif";
        }
      }]);

      return SpinnerCardComponent;
    }();

    SpinnerCardComponent.ɵfac = function SpinnerCardComponent_Factory(t) {
      return new (t || SpinnerCardComponent)();
    };

    SpinnerCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpinnerCardComponent,
      selectors: [["ygm-spinner-card"]],
      inputs: {
        card: "card"
      },
      decls: 4,
      vars: 6,
      consts: [[4, "ngIf"], [1, "mtg-card", 3, "src"]],
      template: function SpinnerCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerCardComponent_div_0_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerCardComponent_div_2_Template, 2, 1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.card));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.card));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ygm-spinner-card',
          templateUrl: './spinner-card.component.html'
        }]
      }], function () {
        return [];
      }, {
        card: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/core/toggle/toggle.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/toggle/toggle.component.ts ***!
    \*************************************************/

  /*! exports provided: ToggleComponent */

  /***/
  function srcAppCoreToggleToggleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToggleComponent", function () {
      return ToggleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ToggleComponent_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleComponent_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r30 = ctx.$implicit;
        var i_r31 = ctx.index;

        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r29.selectedClass(value_r30));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.labels[i_r31], " ");
      }
    }

    var ToggleComponent = /*#__PURE__*/function () {
      function ToggleComponent() {
        _classCallCheck(this, ToggleComponent);

        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ToggleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentValue = this.initialValue;
          this.valueChange.emit(this.currentValue);
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.currentValue = this.currentValue === this.values[0] ? this.values[1] : this.values[0];
          this.valueChange.emit(this.currentValue);
        }
      }, {
        key: "selectedClass",
        value: function selectedClass(selectedValue) {
          return selectedValue === this.currentValue ? ['btn-primary'] : [];
        }
      }]);

      return ToggleComponent;
    }();

    ToggleComponent.ɵfac = function ToggleComponent_Factory(t) {
      return new (t || ToggleComponent)();
    };

    ToggleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ToggleComponent,
      selectors: [["ygm-toggle"]],
      inputs: {
        values: "values",
        labels: "labels",
        initialValue: "initialValue"
      },
      outputs: {
        valueChange: "valueChange"
      },
      decls: 2,
      vars: 1,
      consts: [[1, "btn-group", "btn-group-block"], ["class", "btn btn-sm", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "btn", "btn-sm", 3, "ngClass", "click"]],
      template: function ToggleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToggleComponent_button_1_Template, 2, 2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.values);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ygm-toggle',
          templateUrl: './toggle.component.html'
        }]
      }], function () {
        return [];
      }, {
        values: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        labels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        initialValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/env.ts":
  /*!************************!*\
    !*** ./src/app/env.ts ***!
    \************************/

  /*! exports provided: DEBUG, LOG_LEVEL */

  /***/
  function srcAppEnvTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEBUG", function () {
      return DEBUG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOG_LEVEL", function () {
      return LOG_LEVEL;
    });

    var DEBUG = true;
    var LOG_LEVEL = 'debug';
    /***/
  },

  /***/
  "./src/app/layouts/default-layout/default-layout.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/layouts/default-layout/default-layout.component.ts ***!
    \********************************************************************/

  /*! exports provided: DefaultLayoutComponent */

  /***/
  function srcAppLayoutsDefaultLayoutDefaultLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
      return DefaultLayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../navigation/navigation.component */
    "./src/app/layouts/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var DefaultLayoutComponent = /*#__PURE__*/function () {
      function DefaultLayoutComponent() {
        _classCallCheck(this, DefaultLayoutComponent);
      }

      _createClass(DefaultLayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DefaultLayoutComponent;
    }();

    DefaultLayoutComponent.ɵfac = function DefaultLayoutComponent_Factory(t) {
      return new (t || DefaultLayoutComponent)();
    };

    DefaultLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DefaultLayoutComponent,
      selectors: [["ygm-default-layout"]],
      decls: 10,
      vars: 0,
      consts: [[1, "layout"], [1, "container"]],
      template: function DefaultLayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ygm-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Coded by ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "PH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ygm-default-layout',
          templateUrl: './default-layout.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/navigation/navigation.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/layouts/navigation/navigation.component.ts ***!
    \************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppLayoutsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/decks"];
    };

    var _c1 = function _c1() {
      return ["/collection"];
    };

    var _c2 = function _c2() {
      return ["/wishlist"];
    };

    var _c3 = function _c3() {
      return ["/meta"];
    };

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)();
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["ygm-navigation"]],
      decls: 19,
      vars: 8,
      consts: [[1, "navbar", "fixed", "shadow"], [1, "navbar-section", "logo-section"], [1, "logo"], [1, "dot", "w"], [1, "dot", "u"], [1, "dot", "b"], [1, "dot", "r"], [1, "dot", "g"], [1, "navbar-section", "link-section"], [1, "btn", "btn-link", 3, "routerLink"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Meta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ygm-navigation',
          templateUrl: './navigation.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/model/card.ts":
  /*!*******************************!*\
    !*** ./src/app/model/card.ts ***!
    \*******************************/

  /*! exports provided: CARD_TYPES */

  /***/
  function srcAppModelCardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CARD_TYPES", function () {
      return CARD_TYPES;
    });

    var CARD_TYPES = ['land', 'instant', 'sorcery', 'enchantment', 'creature', 'planeswalker', 'artifact'];
    /***/
  },

  /***/
  "./src/app/pages/collection/collection.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/collection/collection.component.ts ***!
    \**********************************************************/

  /*! exports provided: CollectionComponent */

  /***/
  function srcAppPagesCollectionCollectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectionComponent", function () {
      return CollectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/collection.service */
    "./src/app/services/collection.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_keyrune_keyrune_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/keyrune/keyrune.component */
    "./src/app/components/keyrune/keyrune.component.ts");

    function CollectionComponent_tr_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ygm-keyrune", 8);

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
      }

      if (rf & 2) {
        var item_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.cardName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("symbol", item_r7.set);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.setNumber);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.quantity);
      }
    }

    var CollectionComponent = /*#__PURE__*/function () {
      function CollectionComponent(collectionService) {
        _classCallCheck(this, CollectionComponent);

        this.collectionService = collectionService;
        this.searchFilter$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(CollectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.searchFilter$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
          this.filterdCollection$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([this.collectionService.getCollection(), this.searchFilter$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''))]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                elements = _ref2[0],
                search = _ref2[1];

            return elements //.filter(() => search.length >= 3)
            .filter(function (state) {
              return state.cardName.toLowerCase().startsWith(search.toLowerCase());
            });
          }));
        }
      }]);

      return CollectionComponent;
    }();

    CollectionComponent.ɵfac = function CollectionComponent_Factory(t) {
      return new (t || CollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_3__["CollectionService"]));
    };

    CollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CollectionComponent,
      selectors: [["ygm-collection"]],
      decls: 23,
      vars: 4,
      consts: [[1, "collection-search-view"], [1, "has-icon-right"], ["type", "text", "placeholder", "search", "name", "searchFilter", 1, "form-input", 3, "ngModel", "ngModelChange"], [1, "form-icon", "icon", "icon-search"], [1, "columns", "collection-view"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "icon", "icon-photo"], [3, "symbol"]],
      template: function CollectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CollectionComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.searchFilter = $event;
          })("ngModelChange", function CollectionComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.searchFilter$.next($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "cardname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "set");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "set num");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "price");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "quantity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CollectionComponent_tr_21_Template, 13, 5, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchFilter);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 2, ctx.filterdCollection$));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_keyrune_keyrune_component__WEBPACK_IMPORTED_MODULE_6__["KeyruneComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ygm-collection',
          templateUrl: './collection.component.html'
        }]
      }], function () {
        return [{
          type: src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_3__["CollectionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/deck-list/deck-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/deck-list/deck-list.component.ts ***!
    \********************************************************/

  /*! exports provided: DeckListComponent */

  /***/
  function srcAppPagesDeckListDeckListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeckListComponent", function () {
      return DeckListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_deck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/deck.service */
    "./src/app/services/deck.service.ts");
    /* harmony import */


    var _core_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../core/toggle/toggle.component */
    "./src/app/core/toggle/toggle.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_deck_card_deck_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../components/deck-card/deck-card.component */
    "./src/app/components/deck-card/deck-card.component.ts");
    /* harmony import */


    var _components_deck_tile_deck_tile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/deck-tile/deck-tile.component */
    "./src/app/components/deck-tile/deck-tile.component.ts");

    function DeckListComponent_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ygm-deck-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var meta_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("meta", meta_r3);
      }
    }

    function DeckListComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DeckListComponent_div_3_div_2_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r0.meta$));
      }
    }

    function DeckListComponent_div_4_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ygm-deck-tile", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var meta_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("meta", meta_r5);
      }
    }

    function DeckListComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DeckListComponent_div_4_div_2_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r1.meta$));
      }
    }

    var _c0 = function _c0() {
      return ["cardView", "tileView"];
    };

    var _c1 = function _c1() {
      return ["Card view", "Tile view"];
    };

    var DeckListComponent = /*#__PURE__*/function () {
      function DeckListComponent(deckService) {
        _classCallCheck(this, DeckListComponent);

        this.deckService = deckService;
      }

      _createClass(DeckListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.meta$ = this.deckService.listAllDecks();
        }
      }, {
        key: "toggleView",
        value: function toggleView(evt) {
          this.selectedView = evt;
        }
      }]);

      return DeckListComponent;
    }();

    DeckListComponent.ɵfac = function DeckListComponent_Factory(t) {
      return new (t || DeckListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"]));
    };

    DeckListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DeckListComponent,
      selectors: [["ygm-deck-list"]],
      decls: 5,
      vars: 7,
      consts: [[1, "float-right"], [3, "initialValue", "values", "labels", "valueChange"], [1, "clearfix"], ["class", "container", 4, "ngIf"], ["class", "container grid-lg", 4, "ngIf"], [1, "container"], [1, "columns", "deck-card-view"], ["class", "column col-4 col-sm-12", 4, "ngFor", "ngForOf"], [1, "column", "col-4", "col-sm-12"], [3, "meta"], [1, "container", "grid-lg"], [1, "columns", "deck-tile-view"], ["class", "column col-6 col-sm-12", 4, "ngFor", "ngForOf"], [1, "column", "col-6", "col-sm-12"]],
      template: function DeckListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ygm-toggle", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function DeckListComponent_Template_ygm_toggle_valueChange_1_listener($event) {
            return ctx.toggleView($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DeckListComponent_div_3_Template, 4, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DeckListComponent_div_4_Template, 4, 3, "div", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("initialValue", "tileView")("values", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("labels", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedView === "cardView");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedView === "tileView");
        }
      },
      directives: [_core_toggle_toggle_component__WEBPACK_IMPORTED_MODULE_2__["ToggleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_deck_card_deck_card_component__WEBPACK_IMPORTED_MODULE_4__["DeckCardComponent"], _components_deck_tile_deck_tile_component__WEBPACK_IMPORTED_MODULE_5__["DeckTileComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ygm-deck-list',
          templateUrl: './deck-list.component.html'
        }]
      }], function () {
        return [{
          type: _services_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/meta-list/meta-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/meta-list/meta-list.component.ts ***!
    \********************************************************/

  /*! exports provided: MetaListComponent */

  /***/
  function srcAppPagesMetaListMetaListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetaListComponent", function () {
      return MetaListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MetaListComponent = /*#__PURE__*/function () {
      function MetaListComponent() {
        _classCallCheck(this, MetaListComponent);
      }

      _createClass(MetaListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MetaListComponent;
    }();

    MetaListComponent.ɵfac = function MetaListComponent_Factory(t) {
      return new (t || MetaListComponent)();
    };

    MetaListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MetaListComponent,
      selectors: [["ygm-meta-list"]],
      decls: 2,
      vars: 0,
      template: function MetaListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "meta-list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MetaListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ygm-meta-list',
          templateUrl: './meta-list.component.html'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/wish-list/wish-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/wish-list/wish-list.component.ts ***!
    \********************************************************/

  /*! exports provided: WishListComponent */

  /***/
  function srcAppPagesWishListWishListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WishListComponent", function () {
      return WishListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/deck.service */
    "./src/app/services/deck.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_deck_tile_deck_tile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../components/deck-tile/deck-tile.component */
    "./src/app/components/deck-tile/deck-tile.component.ts");

    function WishListComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ygm-deck-tile", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var meta_r9 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("meta", meta_r9);
      }
    }

    var WishListComponent = /*#__PURE__*/function () {
      function WishListComponent(deckService) {
        _classCallCheck(this, WishListComponent);

        this.deckService = deckService;
      }

      _createClass(WishListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.meta$ = this.deckService.listAllWishDecks();
        }
      }]);

      return WishListComponent;
    }();

    WishListComponent.ɵfac = function WishListComponent_Factory(t) {
      return new (t || WishListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"]));
    };

    WishListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WishListComponent,
      selectors: [["ygm-wish-list"]],
      decls: 4,
      vars: 3,
      consts: [[1, "container", "grid-lg"], [1, "columns", "deck-tile-view"], ["class", "column col-6 col-sm-12", 4, "ngFor", "ngForOf"], [1, "column", "col-6", "col-sm-12"], [3, "meta"]],
      template: function WishListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WishListComponent_div_2_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx.meta$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_deck_tile_deck_tile_component__WEBPACK_IMPORTED_MODULE_3__["DeckTileComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WishListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ygm-wish-list',
          templateUrl: './wish-list.component.html'
        }]
      }], function () {
        return [{
          type: src_app_services_deck_service__WEBPACK_IMPORTED_MODULE_1__["DeckService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/collection.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/collection.service.ts ***!
    \************************************************/

  /*! exports provided: CollectionService */

  /***/
  function srcAppServicesCollectionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectionService", function () {
      return CollectionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _csv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./csv.service */
    "./src/app/services/csv.service.ts");

    var CollectionService = /*#__PURE__*/function () {
      function CollectionService(http, csvService) {
        _classCallCheck(this, CollectionService);

        this.http = http;
        this.csvService = csvService;
      }

      _createClass(CollectionService, [{
        key: "getCollection",
        value: function getCollection() {
          var _this2 = this;

          return this.http.get('assets/purchases.csv', {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (csv) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this2.csvService.parse(csv));
          }));
        }
      }]);

      return CollectionService;
    }();

    CollectionService.ɵfac = function CollectionService_Factory(t) {
      return new (t || CollectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_csv_service__WEBPACK_IMPORTED_MODULE_4__["CsvService"]));
    };

    CollectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CollectionService,
      factory: CollectionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _csv_service__WEBPACK_IMPORTED_MODULE_4__["CsvService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/csv.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/csv.service.ts ***!
    \*****************************************/

  /*! exports provided: CsvService */

  /***/
  function srcAppServicesCsvServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CsvService", function () {
      return CsvService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CsvService = /*#__PURE__*/function () {
      function CsvService() {
        _classCallCheck(this, CsvService);

        this.sperator = /;/; ///\t/;
      }

      _createClass(CsvService, [{
        key: "parse",
        value: function parse(csv) {
          var _this3 = this;

          var csvFull = csv.split(/\r\n|\n/);
          var csvHeader = csvFull[0].split(this.sperator);
          var csvData = csvFull.splice(1);
          return csvData.filter(function (row) {
            return '' !== row;
          }).reduce(function (acc, row) {
            var cells = row.split(_this3.sperator);
            var obj = {};
            csvHeader.forEach(function (el, i) {
              obj[el] = cells[i];
            });
            acc.push(obj);
            return acc;
          }, []);
        }
      }]);

      return CsvService;
    }();

    CsvService.ɵfac = function CsvService_Factory(t) {
      return new (t || CsvService)();
    };

    CsvService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CsvService,
      factory: CsvService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CsvService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/deck.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/deck.service.ts ***!
    \******************************************/

  /*! exports provided: DeckService */

  /***/
  function srcAppServicesDeckServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeckService", function () {
      return DeckService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _mtg_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./mtg.service */
    "./src/app/services/mtg.service.ts");
    /* harmony import */


    var _csv_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./csv.service */
    "./src/app/services/csv.service.ts");

    var DeckService = /*#__PURE__*/function () {
      function DeckService(http, mtgService, csvService) {
        _classCallCheck(this, DeckService);

        this.http = http;
        this.mtgService = mtgService;
        this.csvService = csvService;
      }

      _createClass(DeckService, [{
        key: "listAllDecks",
        value: function listAllDecks() {
          var _this4 = this;

          return this.getCsv('assets/decks.csv').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (csv) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this4.csvService.parse(csv));
          }));
        }
      }, {
        key: "listAllWishDecks",
        value: function listAllWishDecks() {
          var _this5 = this;

          return this.getCsv('assets/wishdecks.csv').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (csv) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_this5.csvService.parse(csv));
          }));
        }
      }, {
        key: "findMetadataById",
        value: function findMetadataById(deckId) {
          return this.listAllDecks().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (meta) {
            return meta;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["find"])(function (meta) {
            return meta.id === deckId;
          }));
        }
      }, {
        key: "getDeckById",
        value: function getDeckById(deckId) {
          var _this6 = this;

          var deckPath = deckId.split('_').join('/');
          return this.http.get("assets/decks/".concat(deckPath, ".txt"), {
            responseType: 'text'
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (deckTxt) {
            var currentSection = 'mainboard';
            var cards$ = deckTxt.split(/\r?\n/).filter(function (str) {
              return str && str.length > 0;
            }).map(function (line) {
              var partial = _this6.parseCardLine(line, currentSection);

              if (partial.section !== currentSection) {
                currentSection = partial.section;
              }

              return partial;
            }).filter(function (partial) {
              return partial.name !== null;
            }).map(function (partial) {
              return _this6.getCard(partial);
            }); // [Observable<Card>]

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(cards$); // Observable<Card[]>
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (o) {
            return o;
          }), // tap(cards => console.log(cards)),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (cards) {
            return {
              name: deckId,
              cards: cards
            };
          }));
        }
      }, {
        key: "getCard",
        value: function getCard(partial) {
          return this.mtgService.getCardByName(partial.name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (card) {
            return Object.assign(Object.assign({}, card), {
              amount: partial.amount,
              sideboard: partial.section.toLowerCase() === 'sideboard'
            });
          }));
        }
      }, {
        key: "parseCardLine",
        value: function parseCardLine(cardLine, sectionName) {
          var tokens = cardLine.split(' ');

          if (tokens[0] === '#') {
            return {
              name: null,
              amount: null,
              section: tokens[1]
            };
          } else {
            return {
              name: tokens.slice(1).join(' '),
              amount: Number(tokens[0]),
              section: sectionName
            };
          }
        }
      }, {
        key: "getCsv",
        value: function getCsv(path) {
          return this.http.get(path, {
            responseType: 'text'
          });
        }
      }]);

      return DeckService;
    }();

    DeckService.ɵfac = function DeckService_Factory(t) {
      return new (t || DeckService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_mtg_service__WEBPACK_IMPORTED_MODULE_4__["MtgService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_csv_service__WEBPACK_IMPORTED_MODULE_5__["CsvService"]));
    };

    DeckService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DeckService,
      factory: DeckService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeckService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _mtg_service__WEBPACK_IMPORTED_MODULE_4__["MtgService"]
        }, {
          type: _csv_service__WEBPACK_IMPORTED_MODULE_5__["CsvService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/logger.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/logger.service.ts ***!
    \********************************************/

  /*! exports provided: LoggerService */

  /***/
  function srcAppServicesLoggerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggerService", function () {
      return LoggerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../env */
    "./src/app/env.ts");

    var LoggerService = /*#__PURE__*/function () {
      function LoggerService() {
        _classCallCheck(this, LoggerService);
      }

      _createClass(LoggerService, [{
        key: "debug",
        value: function debug(message) {
          if (_env__WEBPACK_IMPORTED_MODULE_1__["LOG_LEVEL"] === 'debug') {
            console.log(message);
          }
        }
      }]);

      return LoggerService;
    }();

    LoggerService.ɵfac = function LoggerService_Factory(t) {
      return new (t || LoggerService)();
    };

    LoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoggerService,
      factory: LoggerService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/mtg.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/mtg.service.ts ***!
    \*****************************************/

  /*! exports provided: MtgService */

  /***/
  function srcAppServicesMtgServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MtgService", function () {
      return MtgService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _model_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../model/card */
    "./src/app/model/card.ts");
    /* harmony import */


    var _logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./logger.service */
    "./src/app/services/logger.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MtgService = /*#__PURE__*/function () {
      function MtgService(log, http) {
        _classCallCheck(this, MtgService);

        this.log = log;
        this.http = http;
      }

      _createClass(MtgService, [{
        key: "getCardByName",
        value: function getCardByName(cardName) {
          var _this7 = this;

          return this.http.get("https://api.scryfall.com/cards/named?exact=".concat(cardName)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (mtgCard) {
            return _this7.log.debug(mtgCard);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (mtgCard) {
            return _this7.toModel(mtgCard);
          }));
        }
      }, {
        key: "toModel",
        value: function toModel(mtgCard) {
          var card = {
            externalId: mtgCard['id'],
            name: mtgCard['name'],
            typeLine: mtgCard['type_line'],
            //TODO: superTypes, subTypes
            types: this.parseTypeLine(mtgCard['type_line']),
            oracleText: mtgCard['oracle_text'],
            cmc: mtgCard['cmc'],
            manaCost: mtgCard['mana_cost'],
            rarity: mtgCard['rarity'],
            amount: 1
          };

          if (mtgCard['image_uris']) {
            //small, normal, large, png, art_crop, border_crop
            card.imgUrl = mtgCard['image_uris']['normal'];
            card.imgArtUrl = mtgCard['image_uris']['art_crop'];
          } else {
            // TODO: handle dual face cards
            card.imgUrl = mtgCard['card_faces'][0]['image_uris']['normal'];
            card.imgArtUrl = mtgCard['card_faces'][0]['image_uris']['art_crop'];
          }

          return card;
        }
      }, {
        key: "parseTypeLine",
        value: function parseTypeLine(typeLine) {
          return typeLine.split(' ').reduce(function (acc, type) {
            var val = _model_card__WEBPACK_IMPORTED_MODULE_2__["CARD_TYPES"].find(function (elt) {
              return elt === type.toLowerCase();
            });

            if (val) {
              acc.push(val);
            }

            return acc;
          }, []);
        }
      }]);

      return MtgService;
    }();

    MtgService.ɵfac = function MtgService_Factory(t) {
      return new (t || MtgService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    MtgService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MtgService,
      factory: MtgService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MtgService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\phvdv\dev\yawgmoth\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map