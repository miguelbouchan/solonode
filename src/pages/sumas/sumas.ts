import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the SumasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-sumas',
  templateUrl: 'sumas.html',
})
export class SumasPage {
  valor: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SumasPage');
  }

  iniciarValores() {
    this.valor = [
      { 1: 3 },
      { 2: 4 },
      { 3: 5 },
      { 4: 8 },
      { 5: 6 },
      { 6: 2 }
    ]
  }

  resultado(result) {
    console.log("resultado: " + JSON.stringify(result));
  }

  ngOnInit() {
    this.iniciarValores();
    console.log(this.valor[0][1])
    console.log(this.valor)
  };

}
