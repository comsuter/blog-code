import { Component } from '@angular/core';

@Component({
  selector: 'app-name-parent',
  template: `
    <h2>마블이 관리하는 히어로 수 : {{nameList.length}} names</h2>

    <app-name-child *ngFor="let name of nameList" [getName]="name">
    </app-name-child>
  `
})
export class NameParentComponent {
  nameList = ['스파이더맨', '   ', '  토르  '];
}
