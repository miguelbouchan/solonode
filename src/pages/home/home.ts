import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Content } from 'ionic-angular';
import * as $ from 'jquery'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  mobNavWrpHeight: number = 0;

  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController) {
  }


  openMenu() {
    let parent = document.getElementsByClassName("burger");
    let nav = document.getElementsByClassName("nav__list");
    for (var i = 0; i < parent.length; i++) {
      parent[i].classList.toggle("burger--active")
    }
    for (var j = 0; j < nav.length; j++) {
      nav[j].classList.toggle("nav__list--active")
    }
  };

  goToSection(event) {
    console.log(event)
    var registerDone = document.getElementById(event);
    var registerDoneOffset = registerDone.offsetTop;
    this.slideTo(0, registerDoneOffset, 500);

    //let cont:any =document.getElementById('content');
    //cont.scrollTop(0, registerDoneOffset, 500)

    this.content.scrollTo(0, registerDoneOffset, 500);

  }

  slideTo(x, y, time) {
    var bodyWidth = document.getElementsByTagName('body')[0].offsetWidth;
    if (bodyWidth <= 1500) {
      y = y - this.mobNavWrpHeight - 10;
    }
    $("ion-content").animate({ scrollTop: 300 }, 300);
  }


  ngOnInit() {
    console.log("entre aqui")
  };




}
