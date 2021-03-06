var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log(this.slides.getActiveIndex());
    };
    AboutPage.prototype.change = function () {
        console.log(this.slides.getActiveIndex());
    };
    __decorate([
        ViewChild(Slides),
        __metadata("design:type", Slides)
    ], AboutPage.prototype, "slides", void 0);
    AboutPage = __decorate([
        Component({
            selector: 'page-about',
            templateUrl: 'about.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], AboutPage);
    return AboutPage;
}());
export { AboutPage };
//# sourceMappingURL=about.js.map