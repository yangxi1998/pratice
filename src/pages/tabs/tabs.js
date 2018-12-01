var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { APage } from '../a/a';
import { BPage } from '../b/b';
var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = HomePage;
        this.tab2Root = AboutPage;
        this.tab3Root = ContactPage;
        this.tab4Root = APage; /*当创建新的页面时，可以用懒加载形式，原有的前四个页面不要用*/
        this.tab5Root = BPage; /*tab5Root ='BPage';不用再根模块中进行配置，和在此页面中引入BPage，只需加引号，'BPage'如果报错重启serve，懒加载形式，目前不使用懒加载模式（创建页面时，根模块不会像angular一样进行页面配置，因为默认支持懒加载形式）*/
    }
    TabsPage = __decorate([
        Component({
            templateUrl: 'tabs.html'
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map