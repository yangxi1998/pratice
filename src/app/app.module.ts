import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import{HttpClientModule} from '@angular/common/http';/*手动引入*/

import { MinePage } from '../pages/mine/mine';
import { LoginPage } from '../pages/login/login';
import { Camera } from '@ionic-native/camera';
import { DingdanPage } from '../pages/dingdan/dingdan';
import { OpenlessonPage } from '../pages/openlesson/openlesson';  //公开课
import { AffirmPage } from '../pages/affirm/affirm';
import { MessagePage } from '../pages/message/message';
import { AboutPage } from '../pages/about/about';
import { TalkPage } from '../pages/talk/talk';


@NgModule({
  declarations: [
    AboutPage,
    MyApp,
    TabsPage,
    MinePage,
   LoginPage,
  DingdanPage,
OpenlessonPage,
MessagePage,
AffirmPage,
TalkPage
],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,/*引入组件模块*/
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'bottom',
      platforms: {
        ios: {
          backButtonText:'', /*要通过导航栏中的后退按钮图标显示的文本。官网-配置*/
          tabsHideOnSubPages:'true' /*不会显示子页面的选项卡*/
        }
      }
    }, )
  ],
  bootstrap: [IonicApp],
  entryComponents: [ 
    AboutPage,                               /*上面的组件在entry中也要声明*/
    MyApp,
    TabsPage,
    LoginPage,
    MinePage, 
    LoginPage,
    DingdanPage,
    OpenlessonPage,
    AffirmPage,
    MessagePage,
    TalkPage
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  
}
