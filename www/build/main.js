webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sumas_sumas__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(262);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.mobNavWrpHeight = 0;
    }
    HomePage.prototype.openMenu = function () {
        var parent = document.getElementsByClassName("burger");
        var nav = document.getElementsByClassName("nav__list");
        for (var i = 0; i < parent.length; i++) {
            parent[i].classList.toggle("burger--active");
        }
        for (var j = 0; j < nav.length; j++) {
            nav[j].classList.toggle("nav__list--active");
        }
    };
    ;
    HomePage.prototype.goToSection = function (event) {
        console.log(event);
        var registerDone = document.getElementById(event);
        var registerDoneOffset = registerDone.offsetTop;
        this.slideTo(0, registerDoneOffset, 500);
        //let cont:any =document.getElementById('content');
        //cont.scrollTop(0, registerDoneOffset, 500)
        this.content.scrollTo(0, registerDoneOffset, 500);
    };
    HomePage.prototype.slideTo = function (x, y, time) {
        var bodyWidth = document.getElementsByTagName('body')[0].offsetWidth;
        if (bodyWidth <= 1500) {
            y = y - this.mobNavWrpHeight - 10;
        }
        __WEBPACK_IMPORTED_MODULE_3_jquery__("ion-content").animate({ scrollTop: 300 }, 300);
    };
    HomePage.prototype.goToSumas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sumas_sumas__["a" /* SumasPage */]);
    };
    HomePage.prototype.ngOnInit = function () {
        console.log("entre aqui");
    };
    ;
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/miguel/Documentos/proyecto1/solonode/src/pages/home/home.html"*/'<ion-content id="content">\n<nav class="nav">\n  <div class="burger" (click)=\'openMenu()\'>\n    <div class="burger__patty"></div>\n  </div>\n\n  <ul class="nav__list">\n    <li class="nav__item">\n      <a class="nav__link c-blue" (click)=\'goToSection(1)\'><i class="fa fa-camera-retro"></i></a>\n    </li>\n    <li class="nav__item">\n      <a  class="nav__link c-yellow scrolly" (click)=\'goToSection(2)\'><i class="fa fa-bolt"></i></a>\n    </li>\n    <li class="nav__item">\n      <a  class="nav__link c-red" (click)=\'goToSection(3)\'><i class="fa fa-music"></i></a>\n    </li>\n    <li class="nav__item">\n      <a  class="nav__link c-green" (click)=\'goToSection(4)\'><i class="fa fa-paper-plane"></i></a>\n    </li>\n  </ul>\n</nav>\n\n<section class="panel b-blue" id="1">\n  <article class="panel__wrapper">\n    <div class="panel__content panel__content--active">\n      <h1 class="panel__headline"><i class="fa fa-camera-retro"></i>&nbsp;Cameras</h1>\n      <div class="panel__block"></div>\n      <p (click)="goToSumas()">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea molestias ducimus, eos asperiores, ab officia sint nostrum quia, corporis officiis id praesentium expedita numquam ad non error optio est in.</p>\n    </div>\n  </article>\n</section>\n<section class="panel b-yellow" id="2">\n  <article class="panel__wrapper">\n    <div class="panel__content panel__content--active">\n      <h1 class="panel__headline"><i class="fa fa-bolt"></i>&nbsp;Lightning</h1>\n      <div class="panel__block"></div>\n      <p>Paleo authentic mlkshk taxidermy, vinyl meditation lomo drinking vinegar sartorial raw denim Thundercats bitters selvage listicle. Keffiyeh Williamsburg gastropub McSweeney\'s.</p>\n    </div>\n  </article>\n</section>\n<section class="panel b-red" id="3">\n  <article class="panel__wrapper">\n    <div class="panel__content panel__content--active">\n      <h1 class="panel__headline"><i class="fa fa-music"></i>&nbsp;Music</h1>\n      <div class="panel__block"></div>\n      <p>Beard sriracha kitsch literally, taxidermy normcore aesthetic wayfarers salvia keffiyeh farm-to-table sartorial gluten-free mlkshk. Selvage normcore 3 wolf moon, umami Kickstarter artisan meggings cardigan drinking vinegar bicycle rights.</p>\n    </div>\n  </article>\n</section>\n<section class="panel b-green" id="4">\n  <article class="panel__wrapper">\n    <div class="panel__content panel__content--active">\n      <h1 class="panel__headline"><i class="fa fa-paper-plane"></i>&nbsp;Paper Planes</h1>\n      <div class="panel__block"></div>\n      <p>90\'s wayfarers lomo you probably haven\'t heard of them trust fund banh mi. Flannel Shoreditch dreamcatcher, quinoa flexitarian Banksy pickled post-ironic lo-fi. Photo booth asymmetrical tousled letterpress.</p>\n    </div>\n  </article>\n</section>\n<a href="http://ettrics.com/code/vertical-layout-navigation/" class="logo" target="_blank">\n <img class="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg" alt="" /> \n</a>\n</ion-content>'/*ion-inline-end:"/home/miguel/Documentos/proyecto1/solonode/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sumas_sumas__ = __webpack_require__(98);
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
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_sumas_sumas__["a" /* SumasPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_sumas_sumas__["a" /* SumasPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sumas_sumas__ = __webpack_require__(98);
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
        this.sumaPage = __WEBPACK_IMPORTED_MODULE_5__pages_sumas_sumas__["a" /* SumasPage */];
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SumasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SumasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SumasPage = (function () {
    function SumasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.valor = [];
    }
    SumasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SumasPage');
    };
    SumasPage.prototype.iniciarValores = function () {
        this.valor = [
            { 1: 3 },
            { 2: 4 },
            { 3: 5 },
            { 4: 8 },
            { 5: 6 },
            { 6: 2 }
        ];
    };
    SumasPage.prototype.resultado = function (result) {
        console.log("resultado: " + JSON.stringify(result));
    };
    SumasPage.prototype.ngOnInit = function () {
        this.iniciarValores();
        console.log(this.valor[0][1]);
        console.log(this.valor);
    };
    ;
    return SumasPage;
}());
SumasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sumas',template:/*ion-inline-start:"/home/miguel/Documentos/proyecto1/solonode/src/pages/sumas/sumas.html"*/'<!--\n  Generated template for the SumasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar style="display:none">\n    <ion-title>sumas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n      2+2\n  </div>\n  <div class="resultados">\n      <div class="seccion">\n        <div id="01" (click)="resultado($event)"> \n          <p>{{valor[0][1]}}</p>\n        </div>  \n        <div id="02" (click)="resultado($event)">\n          <p>{{valor[1][2]}}</p>\n        </div> \n        <div id="03" (click)="resultado($event)">\n          <p>{{valor[2][3]}}</p>\n        </div>\n      </div> \n      <div class="seccion" >\n        <div id="04" (click)="resultado($event)">\n          <p>{{valor[3][4]}}</p>\n        </div> \n        <div id="05" (click)="resultado($event)">\n          <p>{{valor[4][5]}}</p>\n        </div> \n        <div id="06" (click)="resultado($event)">\n          <p>{{valor[5][6]}}</p>\n        </div> \n      </div> \n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/miguel/Documentos/proyecto1/solonode/src/pages/sumas/sumas.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
], SumasPage);

var _a, _b;
//# sourceMappingURL=sumas.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map