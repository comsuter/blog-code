import { Component, ContentChild, ViewChild } from '@angular/core';
import { TestChild2Component } from './test-child-2/test-child-2.component';

@Component({
  selector: 'app-test-parent-2',
  template: `
   <div style="background-color: grey;">
      <h4>In ParentComponent's tpl</h4>
      <ng-content></ng-content>
   </div>
  `,
})
export class TestParent2Component {
  @ContentChild(TestChild2Component) childCmp!: TestChild2Component;
  @ViewChild(TestChild2Component) childCmp2!: TestChild2Component;

  constructor() { }

  // @ContentChild로 바인딩 된 속성은 ngAfterContentInit 메서드 시점부터 접근 가능
  ngAfterContentInit() {
    if(this.childCmp) {
      this.childCmp.callMe();
    } else {
      console.log('[ngAfterContentInit] not found childCmp');
    }
  }

  // @ViewChild로 바인딩 된 속성은 ngAfterViewInit 메서드 시점부터 접근 가능
  ngAfterViewInit() {
    if(this.childCmp2) {
      this.childCmp2.callMe();
    } else {
      console.log('[ngAfterViewInit] not found childCmp2');
    }
  }
}
