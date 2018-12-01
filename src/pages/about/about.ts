import { Component, /*ViewChild*/ } from '@angular/core';
import { NavController, /*Slides*/ } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
 /* @ViewChild(Slides) slides: Slides;  slides变量的名字  幻灯片*/
  constructor(public navCtrl: NavController) {
    
  }
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  arr=['客厅','卧室','餐厅','厨房','门厅'];
}
 