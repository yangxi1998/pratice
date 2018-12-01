var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { APage } from '../pages/a/a';
import { BPage } from '../pages/b/b';
import { ZhucePage } from '../pages/zhuce/zhuce';
import { ComponentsModule } from '../components/components.module';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                AboutPage,
                ContactPage,
                HomePage,
                TabsPage,
                APage,
                BPage,
                ZhucePage
            ],
            imports: [
                BrowserModule,
                ComponentsModule,
                IonicModule.forRoot(MyApp, {
                    tabsPlacement: 'bottom',
                    platforms: {
                        ios: {
                            backButtonText: '',
                            tabsHideOnSubPages: 'true' /*不会显示子页面的选项卡*/
                        }
                    }
                })
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                AboutPage,
                ContactPage,
                HomePage,
                TabsPage,
                APage,
                BPage,
                ZhucePage
            ],
            providers: [
                StatusBar,
                SplashScreen,
                { provide: ErrorHandler, useClass: IonicErrorHandler }
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map