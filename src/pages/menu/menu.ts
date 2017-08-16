import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AcercaPage } from '../acerca/acerca'

/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  platform:any = Platform;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform) {
    this.platform = platform;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  iniciarJuego(){
  this.navCtrl.push(HomePage);
  }

  acerca(){
    this.navCtrl.push(AcercaPage);
  }

  salir(){
    console.log("saliendo")
    this.platform.exitApp();
  }


}
