webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(76);
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
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.iniciarJuego = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/home/miguel/Documentos/proyecto1/solonode/src/pages/menu/menu.html"*/'<ion-content padding>\n    <div>Titulo Sorprendente</div>\n    <div class="muestra">\n      <div class="boton_personalizado" (click)=\'iniciarJuego()\'>Iniciar Operaciones</div>\n      <div class="boton_personalizado">Instrucciones</div>\n      <div class="boton_personalizado">Acerca de...</div>\n      <div class="boton_personalizado">Salir</div>\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/miguel/Documentos/proyecto1/solonode/src/pages/menu/menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/menu/menu.module": [
		265,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(214);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sumas_sumas__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_resultados_resultados__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__ = __webpack_require__(101);
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
            __WEBPACK_IMPORTED_MODULE_7__pages_sumas_sumas__["a" /* SumasPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_resultados_resultados__["a" /* ResultadosPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* MenuPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_sumas_sumas__["a" /* SumasPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_resultados_resultados__["a" /* ResultadosPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* MenuPage */]
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

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sumas_sumas__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_resultados_resultados__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__ = __webpack_require__(101);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */];
        this.sumaPage = __WEBPACK_IMPORTED_MODULE_4__pages_sumas_sumas__["a" /* SumasPage */];
        this.resultadoPage = __WEBPACK_IMPORTED_MODULE_5__pages_resultados_resultados__["a" /* ResultadosPage */];
        this.menuPage = __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */];
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sumas_sumas__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(238);
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
        this.openMenu();
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
        selector: 'page-home',template:/*ion-inline-start:"/home/miguel/Documentos/proyecto1/solonode/src/pages/home/home.html"*/'<ion-content id="content">\n<nav class="nav">\n  <div class="burger" (click)=\'openMenu()\'>\n    <div class="burger__patty"></div>\n  </div>\n\n  <ul class="nav__list">\n    <li class="nav__item">\n      <a class="nav__link c-blue" (click)=\'goToSection(1)\'><i class="fa fa-plus-square"></i></a>\n    </li>\n    <li class="nav__item">\n      <a  class="nav__link c-yellow scrolly" (click)=\'goToSection(2)\'><i class="fa fa-bolt"></i></a>\n    </li>\n    <li class="nav__item">\n      <a  class="nav__link c-red" (click)=\'goToSection(3)\'><i class="fa fa-music"></i></a>\n    </li>\n    <li class="nav__item">\n      <a  class="nav__link c-green" (click)=\'goToSection(4)\'><i class="fa fa-paper-plane"></i></a>\n    </li>\n  </ul>\n</nav>\n\n<section class="panel b-blue" id="1">\n  <article class="panel__wrapper">\n    <div class="panel__content panel__content--active">\n      <h1 class="panel__headline"><i class="fa fa-plus-square"></i>&nbsp;Sumas</h1>\n      <div class="panel__block"></div>\n      <p (click)="goToSumas()">Una suma (del latín summa) es el agregado de cosas. El término hace referencia a la acción y efecto de sumar o añadir.</p>\n    </div>\n  </article>\n</section>\n<section class="panel b-yellow" id="2">\n  <article class="panel__wrapper">\n    <div class="panel__content panel__content--active">\n      <h1 class="panel__headline"><i class="fa fa-bolt"></i>&nbsp;Lightning</h1>\n      <div class="panel__block"></div>\n      <p>Paleo authentic mlkshk taxidermy, vinyl meditation lomo drinking vinegar sartorial raw denim Thundercats bitters selvage listicle. Keffiyeh Williamsburg gastropub McSweeney\'s.</p>\n    </div>\n  </article>\n</section>\n<section class="panel b-red" id="3">\n  <article class="panel__wrapper">\n    <div class="panel__content panel__content--active">\n      <h1 class="panel__headline"><i class="fa fa-music"></i>&nbsp;Music</h1>\n      <div class="panel__block"></div>\n      <p>Beard sriracha kitsch literally, taxidermy normcore aesthetic wayfarers salvia keffiyeh farm-to-table sartorial gluten-free mlkshk. Selvage normcore 3 wolf moon, umami Kickstarter artisan meggings cardigan drinking vinegar bicycle rights.</p>\n    </div>\n  </article>\n</section>\n<section class="panel b-green" id="4">\n  <article class="panel__wrapper">\n    <div class="panel__content panel__content--active">\n      <h1 class="panel__headline"><i class="fa fa-paper-plane"></i>&nbsp;Paper Planes</h1>\n      <div class="panel__block"></div>\n      <p>90\'s wayfarers lomo you probably haven\'t heard of them trust fund banh mi. Flannel Shoreditch dreamcatcher, quinoa flexitarian Banksy pickled post-ironic lo-fi. Photo booth asymmetrical tousled letterpress.</p>\n    </div>\n  </article>\n</section>\n<a href="http://ettrics.com/code/vertical-layout-navigation/" class="logo" target="_blank">\n <img class="logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/45226/ettrics-logo.svg" alt="" /> \n</a>\n</ion-content>'/*ion-inline-end:"/home/miguel/Documentos/proyecto1/solonode/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SumasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resultados_resultados__ = __webpack_require__(78);
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
        this.maximo = 9;
        this.inicio = 0;
        this.correcto = 0;
        this.incorrecto = 0;
        this.tiempo_inicial = new Date();
        this.tiempo_final = new Date();
    }
    SumasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SumasPage');
    };
    SumasPage.prototype.iniciarValores = function () {
        var resultado = this.i1 + this.i2;
        var rand_resul1 = resultado + 8;
        var rand_resul2 = resultado - 8;
        console.log("rand_resul2 " + rand_resul2);
        console.log("rand_resul1 " + rand_resul1);
        if (resultado < 8) {
            rand_resul1 = 12;
            rand_resul2 = 4;
        }
        if (resultado < 4) {
            rand_resul1 = 16;
            rand_resul2 = 2;
        }
        var caso = this.getRandomInt(1, 4);
        console.log("caso: " + caso);
        switch (caso) {
            case 1:
                this.a = this.getRandomInt(resultado, rand_resul1);
                this.b = this.getRandomInt(rand_resul2, resultado);
                this.c = this.getRandomInt(resultado, rand_resul1);
                this.d = this.getRandomInt(rand_resul2, resultado);
                this.e = this.getRandomInt(resultado, rand_resul1);
                this.f = this.getRandomInt(rand_resul2, resultado);
                break;
            case 2:
                this.a = this.getRandomInt(rand_resul2, resultado);
                this.b = this.getRandomInt(resultado, rand_resul1);
                this.c = this.getRandomInt(rand_resul2, resultado);
                this.d = this.getRandomInt(resultado, rand_resul1);
                this.e = this.getRandomInt(rand_resul2, resultado);
                this.f = this.getRandomInt(resultado, rand_resul1);
                break;
            case 3:
                this.a = this.getRandomInt(rand_resul2, resultado);
                this.b = this.getRandomInt(rand_resul2, resultado);
                this.c = this.getRandomInt(resultado, rand_resul1);
                this.d = this.getRandomInt(resultado, rand_resul1);
                this.e = this.getRandomInt(rand_resul2, resultado);
                this.f = this.getRandomInt(resultado, rand_resul1);
                break;
            case 4:
                this.a = this.getRandomInt(rand_resul2, resultado);
                this.b = this.getRandomInt(resultado, rand_resul1);
                this.c = this.getRandomInt(rand_resul2, resultado);
                this.d = this.getRandomInt(rand_resul2, resultado);
                this.e = this.getRandomInt(resultado, rand_resul1);
                this.f = this.getRandomInt(resultado, rand_resul1);
                break;
            default:
                this.a = this.getRandomInt(resultado, rand_resul1);
                this.b = this.getRandomInt(resultado, rand_resul1);
                this.c = this.getRandomInt(rand_resul2, resultado);
                this.d = this.getRandomInt(resultado, rand_resul1);
                this.e = this.getRandomInt(rand_resul2, resultado);
                this.f = this.getRandomInt(rand_resul2, resultado);
        }
        var iguales = this.verifyDiference();
        if (iguales) {
            this.iniciarValores();
        }
        var hayResultado = this.isResultInAnswers();
        if (!hayResultado) {
            this.agregaResultado();
        }
    };
    SumasPage.prototype.isResultInAnswers = function () {
        var resultado = this.i1 + this.i2;
        if (resultado == this.a) {
            return true;
        }
        else if (resultado == this.b) {
            return true;
        }
        else if (resultado == this.c) {
            return true;
        }
        else if (resultado == this.d) {
            return true;
        }
        else if (resultado == this.e) {
            return true;
        }
        else if (resultado == this.f) {
            return true;
        }
        else {
            return false;
        }
    };
    SumasPage.prototype.agregaResultado = function () {
        var caso = this.getRandomInt(1, 6);
        switch (caso) {
            case 1:
                this.a = this.i1 + this.i2;
                break;
            case 2:
                this.b = this.i1 + this.i2;
                break;
            case 3:
                this.c = this.i1 + this.i2;
                break;
            case 4:
                this.d = this.i1 + this.i2;
                break;
            case 5:
                this.e = this.i1 + this.i2;
                break;
            case 6:
                this.f = this.i1 + this.i2;
                break;
            default:
        }
    };
    /**
   * Returns a random integer between min (inclusive) and max (inclusive)
   * Using Math.round() will give you a non-uniform distribution!
   */
    SumasPage.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    SumasPage.prototype.verifyDiference = function () {
        if (this.a == this.b || this.a == this.c || this.a == this.d || this.a == this.e || this.a == this.f) {
            return true;
        }
        else if (this.b == this.c || this.b == this.d || this.b == this.e || this.b == this.f) {
            return true;
        }
        else if (this.c == this.d || this.c == this.e || this.c == this.f) {
            return true;
        }
        else if (this.d == this.e || this.d == this.f) {
            return true;
        }
        else if (this.e == this.f) {
            return true;
        }
        else {
            return false;
        }
    };
    SumasPage.prototype.resultado = function (result) {
        console.log("resultado: " + result);
        var respuesta = this.i1 + this.i2;
        if (result == respuesta) {
            this.correcto += 1;
        }
        else {
            this.incorrecto += 1;
        }
        this.inicio += 1;
        if (this.inicio <= this.maximo) {
            this.ngOnInit();
        }
        else {
            this.tiempo_final = new Date();
            var cronometro = (this.tiempo_final.getTime() - this.tiempo_inicial.getTime()) / 1000;
            var datos = {
                "correcto": this.correcto,
                "incorrecto": this.incorrecto,
                "tiempo": cronometro
            };
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__resultados_resultados__["a" /* ResultadosPage */], datos);
        }
    };
    SumasPage.prototype.ngOnInit = function () {
        this.i1 = Math.floor((Math.random() * 10) + 3);
        this.i2 = Math.floor((Math.random() * 20) + 10);
        this.iniciarValores();
        this.tiempo_inicial = new Date();
    };
    ;
    return SumasPage;
}());
SumasPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sumas',template:/*ion-inline-start:"/home/miguel/Documentos/proyecto1/solonode/src/pages/sumas/sumas.html"*/'\n\n\n<ion-content padding class="suma">\n  <div class="pregunta-section">\n      {{i1}}+{{i2}}=\n  </div>\n  <div class="resultados">\n      <div class="seccion" style="text-align: center; display: inline-flex; padding-left: 10px; padding-right: 10px;">\n        <div id="01" class="pad" (click)="resultado(a)"> \n          <p>{{a}}</p>\n        </div>  \n        <div id="02" class="pad" (click)="resultado(b)">\n          <p>{{b}}</p>\n        </div> \n        <div id="03" class="pad" (click)="resultado(c)">\n          <p>{{c}}</p>\n        </div>\n      </div> \n      <div class="seccion">\n        <div id="04" class="pad" (click)="resultado(d)">\n          <p>{{d}}</p>\n        </div> \n        <div id="05" class="pad" (click)="resultado(e)">\n          <p>{{e}}</p>\n        </div> \n        <div id="06" class="pad" (click)="resultado(f)">\n          <p>{{f}}</p>\n        </div> \n      </div> \n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/miguel/Documentos/proyecto1/solonode/src/pages/sumas/sumas.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SumasPage);

//# sourceMappingURL=sumas.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HomePage } from '../home/home';

/**
 * Generated class for the ResultadosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ResultadosPage = (function () {
    function ResultadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ganador = true;
        this.incorrecto = 4;
        this.correcto = 6;
        this.tiempo = 14;
        console.log("navParams: " + JSON.stringify(navParams));
        console.log("correcto: " + navParams.data.incorrecto);
        this.incorrecto = navParams.data.incorrecto;
        this.correcto = navParams.data.correcto;
        var tiempo = navParams.data.tiempo.toString().split(".");
        if (tiempo[1] != undefined) {
            this.tiempo = tiempo[0] + tiempo[1];
        }
        else {
            this.tiempo = navParams.data.tiempo;
        }
        if (this.correcto < 7) {
            this.ganador = false;
        }
    }
    ResultadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultadosPage');
    };
    ResultadosPage.prototype.inicio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */]);
    };
    return ResultadosPage;
}());
ResultadosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-resultados',template:/*ion-inline-start:"/home/miguel/Documentos/proyecto1/solonode/src/pages/resultados/resultados.html"*/'\n\n\n<ion-content padding>\n  <div>\n  <p>  \n  El Resultado de tus datos son:\n  <br>\n    Respuestas Correctas: {{correcto}}\n  <br>\n    Respuestas Incorrectas: {{incorrecto}}\n  <br>\n    Tiempo en realizarlo: {{tiempo}} milisegundos.\n  <br>\n  <br>\n  <span [ngClass]="{\'hide\': !ganador}">Te ganaste un dulde </span>\n  <span [ngClass]="{\'hide\': ganador}">Necesitas practicar mas </span>\n  </div>\n\n   <br>\n  <br>\n\n  <p (click)="inicio()">ir al inicio</p>\n  \n</ion-content>\n'/*ion-inline-end:"/home/miguel/Documentos/proyecto1/solonode/src/pages/resultados/resultados.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
], ResultadosPage);

var _a, _b;
//# sourceMappingURL=resultados.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map