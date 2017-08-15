import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the ResultadosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {
  ganador: boolean = true;
  incorrecto: any = 4;
  correcto: any = 6;
  tiempo: any = 14;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("navParams: " + JSON.stringify(navParams))
    console.log("correcto: " + navParams.data.incorrecto)
    this.incorrecto = navParams.data.incorrecto;
    this.correcto = navParams.data.correcto;
    let tiempo = navParams.data.tiempo.toString().split(".");
    if(tiempo[1]!=undefined){
    this.tiempo = tiempo[0] + tiempo[1];
    } else {
      this.tiempo =navParams.data.tiempo;
    }
    if(this.correcto<7){
      this.ganador=false;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
  }

  inicio(){
    this.navCtrl.push(MenuPage);
  }

}
