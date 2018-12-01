import { Component } from '@angular/core';
/*import { ModalController } from 'ionic-angular';  模态窗口*/
import { MinePage } from '../mine/mine';
import { OpenlessonPage } from '../openlesson/openlesson';
import { MessagePage } from '../message/message';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MessagePage;
  tab2Root = OpenlessonPage;
  tab3Root = MinePage;
  
  constructor() {}
   

}
