import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { ComponentAComponent } from './component-a/component-a';   /*引入a组件*/
import { BrowserModule } from '@angular/platform-browser';   /*从app.module.ts中复制过来，引入angular？原生指令功能*/ 
import { IonicModule } from 'ionic-angular';   /*从app.module.ts中复制过来，component是一个独立模块，需要手动引入ionic配置*/
@NgModule({
	declarations: [AComponent,
    ComponentAComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(ComponentsModule )
	],
	exports: [AComponent,
    ComponentAComponent]
})
export class ComponentsModule {}

