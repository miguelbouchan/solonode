import { Component, OnInit, HostListener } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { NavController } from 'ionic-angular';
import $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class HomePage {
  location: Location;
  constructor(public navCtrl: NavController,
  location: Location) {
    this.location = location

  }

  vh:any;

  openMenu() {
    let parent = document.getElementsByClassName("burger");
    let nav = document.getElementsByClassName("nav__list");
    for (var i = 0; i < parent.length; i++) {
      parent[i].classList.toggle("burger--active")
    }
    for (var i = 0; i < nav.length; i++) {
      nav[i].classList.toggle("nav__list--active")
    }
  };

  // reveal content of first panel by default

  @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log("se ha dado scroll")
    //we'll do some stuff here when the window is scrolled
  }

  scrollFx() {
    let doc = $(document);
    var ds = doc.scrollTop();
    var of = this.vh / 4;
    // if the panel is in the viewport, reveal the content, if not, hide it.location: Location
    let panel:any = document.getElementsByClassName("panel__content");
    for (var i = 0; i < panel.length; i++) {
      if (panel[i].offsetTop < ds + of) {
        //panel[i].find(".panel__content").addClass("panel__content--active");
      } else {
        //panel[i].find(".panel__content").removeClass("panel__content--active");
      }
    }
  };

  scrolly(e) {
    e.preventDefault();
    var target = this.location;
    var $target = $(target);

    $("html, body").stop().animate({
      scrollTop: $target.offset().top
    }, 300, "swing", function () {
      //window.location.hash = target;
    });
  };

  ngOnInit() {
    this.vh = $(window).height();

    let panel:any = document.getElementsByClassName("panel__content");
    panel[0].classList.add("panel__content--active");

    window.addEventListener("scroll", this.scrollFx, false);
    window.addEventListener("load", this.scrollFx, false);
    //$('a[href^="#"]').on("click", this.scrolly);
  };




}
