import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ResultadosPage } from '../resultados/resultados';


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
  i1: any;
  i2: any;

  a: any;
  b: any;
  c: any;
  d: any;
  e: any;
  f: any;

  maximo:any=9;
  inicio:any=0;
  correcto:any=0;
  incorrecto:any=0;
  tiempo_inicial:any=new Date();
  tiempo_final:any=new Date();
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SumasPage');
  }

  iniciarValores() {
    let resultado = this.i1 + this.i2;
    let rand_resul1 = resultado + 8;
    let rand_resul2 = resultado - 8;

    console.log("rand_resul2 " + rand_resul2)
    console.log("rand_resul1 " + rand_resul1)


    if (resultado < 8) {
      rand_resul1 = 12
      rand_resul2 = 4;
    }
    if (resultado < 4) {
      rand_resul1 = 16;
      rand_resul2 = 2;
    }
    let caso = this.getRandomInt(1, 4);
    console.log("caso: " + caso)

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

    let iguales = this.verifyDiference();
    if (iguales) {
      this.iniciarValores();
    }

    let hayResultado = this.isResultInAnswers();
    if (!hayResultado) {
      this.agregaResultado();
    }

  }

  isResultInAnswers() {
    let resultado = this.i1 + this.i2;
    if (resultado == this.a) {
      return true;
    } else if (resultado == this.b) {
      return true;
    } else if (resultado == this.c) {
      return true;
    } else if (resultado == this.d) {
      return true;
    } else if (resultado == this.e) {
      return true;
    } else if (resultado == this.f) {
      return true;
    } else {
      return false;
    }
  }

  agregaResultado() {
    let caso = this.getRandomInt(1, 6);
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
  }

  /**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  verifyDiference() {
    if (this.a == this.b || this.a == this.c || this.a == this.d || this.a == this.e || this.a == this.f) {
      return true;
    } else if (this.b == this.c || this.b == this.d || this.b == this.e || this.b == this.f) {
      return true;
    } else if (this.c == this.d || this.c == this.e || this.c == this.f) {
      return true;
    } else if (this.d == this.e || this.d == this.f) {
      return true;
    } else if (this.e == this.f) {
      return true;
    } else {
      return false;
    }
  }

  resultado(result) {
    console.log("resultado: " + result);
    let respuesta=this.i1+this.i2;
    if(result==respuesta){
      this.correcto+=1;
    } else {
      this.incorrecto+=1;
    }
    this.inicio+=1;
    if(this.inicio<=this.maximo){
      this.ngOnInit();
    } else {
      this.tiempo_final=new Date();
      let cronometro = (this.tiempo_final.getTime() - this.tiempo_inicial.getTime()) / 1000;
      let datos={
        "correcto":this.correcto,
        "incorrecto":this.incorrecto,
        "tiempo":cronometro
      }
      this.navCtrl.push(ResultadosPage, datos);
    }
  }

  ngOnInit() {
    this.i1 = Math.floor((Math.random() * 10) + 3);
    this.i2 = Math.floor((Math.random() * 20) + 10);
    this.iniciarValores();
    this.tiempo_inicial=new Date();
  };

}
