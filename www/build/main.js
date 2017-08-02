webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, location) {
        this.navCtrl = navCtrl;
        this.location = location;
    }
    HomePage.prototype.openMenu = function () {
        var parent = document.getElementsByClassName("burger");
        var nav = document.getElementsByClassName("nav__list");
        for (var i = 0; i < parent.length; i++) {
            parent[i].classList.toggle("burger--active");
        }
        for (var i = 0; i < nav.length; i++) {
            nav[i].classList.toggle("nav__list--active");
        }
    };
    ;
    // reveal content of first panel by default
    HomePage.prototype.onWindowScroll = function () {
        console.log("se ha dado scroll");
        //we'll do some stuff here when the window is scrolled
    };
    HomePage.prototype.scrollFx = function () {
        var doc = __WEBPACK_IMPORTED_MODULE_3_jquery___default()(document);
        var ds = doc.scrollTop();
        var of = this.vh / 4;
        // if the panel is in the viewport, reveal the content, if not, hide it.location: Location
        var panel = document.getElementsByClassName("panel__content");
        for (var i = 0; i < panel.length; i++) {
            if (panel[i].offsetTop < ds + of) {
                //panel[i].find(".panel__content").addClass("panel__content--active");
            }
            else {
                //panel[i].find(".panel__content").removeClass("panel__content--active");
            }
        }
    };
    ;
    HomePage.prototype.scrolly = function (e) {
        e.preventDefault();
        var target = this.location;
        var $target = __WEBPACK_IMPORTED_MODULE_3_jquery___default()(target);
        __WEBPACK_IMPORTED_MODULE_3_jquery___default()("html, body").stop().animate({
            scrollTop: $target.offset().top
        }, 300, "swing", function () {
            //window.location.hash = target;
        });
    };
    ;
    HomePage.prototype.ngOnInit = function () {
        this.vh = __WEBPACK_IMPORTED_MODULE_3_jquery___default()(window).height();
        var panel = document.getElementsByClassName("panel__content");
        panel[0].classList.add("panel__content--active");
        window.addEventListener("scroll", this.scrollFx, false);
        window.addEventListener("load", this.scrollFx, false);
        //$('a[href^="#"]').on("click", this.scrolly);
    };
    ;
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])("window:scroll", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomePage.prototype, "onWindowScroll", null);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/miguel/Documentos/proyecto1/solonode/src/pages/home/home.html"*/'<nav class="nav">\n  <div class="burger" (click)=\'openMenu()\'>\n    <div class="burger__patty"></div>\n  </div>\n\n  <ul class="nav__list">\n    <li class="nav__item">\n      <a href="#1" class="nav__link c-blue"><i class="fa fa-camera-retro"></i></a>\n    </li>\n    <li class="nav__item">\n      <a href="#2" class="nav__link c-yellow scrolly"><i class="fa fa-bolt"></i></a>\n    </li>\n    <li class="nav__item">\n      <a href="#3" class="nav__link c-red"><i class="fa fa-music"></i></a>\n    </li>\n    <li class="nav__item">\n      <a href="#4" class="nav__link c-green"><i class="fa fa-paper-plane"></i></a>\n    </li>\n  </ul>\n</nav>\n\n<section class="panel b-blue" id="1">\n  <article class="panel__wrapper">\n    <div class="panel__content">\n      <h1 class="panel__headline"><i class="fa fa-camera-retro"></i>&nbsp;Cameras</h1>\n      <div class="panel__block"></div>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea molestias ducimus, eos asperiores, ab officia sint nostrum quia, corporis officiis id praesentium expedita numquam ad non error optio est in.</p>\n    </div>\n  </article>\n</section>\n<section class="panel b-yellow" id="2">\n  <article class="panel__wrapper">\n    <div class="panel__content">\n      <h1 class="panel__headline"><i class="fa fa-bolt"></i>&nbsp;Lightning</h1>\n      <div class="panel__block"></div>\n      <p>Paleo authentic mlkshk taxidermy, vinyl meditation lomo drinking vinegar sartorial raw denim Thundercats bitters selvage listicle. Keffiyeh Williamsburg gastropub McSweeney\'s.</p>\n    </div>\n  </article>\n</section>\n<section class="panel b-red" id="3">\n  <article class="panel__wrapper">\n    <div class="panel__content">\n      <h1 class="panel__headline"><i class="fa fa-music"></i>&nbsp;Music</h1>\n      <div class="panel__block"></div>\n      <p>Beard sriracha kitsch literally, taxidermy normcore aesthetic wayfarers salvia keffiyeh farm-to-table sartorial gluten-free mlkshk. Selvage normcore 3 wolf moon, umami Kickstarter artisan meggings cardigan drinking vinegar bicycle rights.</p>\n    </div>\n  </article>\n</section>\n<section class="panel b-green" id="4">\n  <article class="panel__wrapper">\n    <div class="panel__content">\n      <h1 class="panel__headline"><i class="fa fa-paper-plane"></i>&nbsp;Paper Planes</h1>\n      <div class="panel__block"></div>\n      <p>90\'s wayfarers lomo you probably haven\'t heard of them trust fund banh mi. Flannel Shoreditch dreamcatcher, quinoa flexitarian Banksy pickled post-ironic lo-fi. Photo booth asymmetrical tousled letterpress.</p>\n    </div>\n  </article>\n</section>\n<a href="http://ettrics.com/code/vertical-layout-navigation/" class="logo" target="_blank">\n <img class="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg" alt="" /> \n</a>\n'/*ion-inline-end:"/home/miguel/Documentos/proyecto1/solonode/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* Location */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* PathLocationStrategy */] }]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* Location */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(211);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/miguel/Documentos/proyecto1/solonode/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/miguel/Documentos/proyecto1/solonode/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.js.map