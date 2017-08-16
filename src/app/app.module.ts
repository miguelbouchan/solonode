import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicPageModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SumasPage } from '../pages/sumas/sumas';
import { ResultadosPage } from '../pages/resultados/resultados';
import { MenuPage } from '../pages/menu/menu';
import { AcercaPage } from '../pages/acerca/acerca';
import { InstruccionesPage } from '../pages/instrucciones/instrucciones';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SumasPage,
    ResultadosPage,
    MenuPage,
    AcercaPage,
    InstruccionesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicPageModule.forChild(HomePage)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SumasPage,
    ResultadosPage,
    MenuPage,
    AcercaPage,
    InstruccionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
