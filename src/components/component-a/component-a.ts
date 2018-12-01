import { Component } from '@angular/core';

/**
 * Generated class for the ComponentAComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'component-a',
  templateUrl: 'component-a.html'
})
export class ComponentAComponent {

  text: string;

  constructor() {
    console.log('Hello ComponentAComponent Component');
    this.text = '';
  }
  get(){
    console.log('component-a组件的方法');
  }

}
