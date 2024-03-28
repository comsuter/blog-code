import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TestChildComponent } from './test-child/test-child.component';

@Component({
  selector: 'app-test-parent',
  template: `
      <ol>
        <li *ngFor="let num of checkListNums">
          <app-test-child [childState]="parentState"></app-test-child>
        </li>
      </ol>
      <div>
        <button type="button" (click)="checkedAll()">전체 선택</button>
        <button type="button" (click)="unCheckedAll()">전체 해제</button>
      </div>
      `
})
export class TestParentComponent {

  // @Input 테스트
  parentState: string = 'aaa';

  // testChild 변수에는 TestChildComponent의 인스턴스가 바인딩 된다
  @ViewChild(TestChildComponent) testChild!: TestChildComponent;
  @ViewChildren(TestChildComponent) testChildren!: QueryList<TestChildComponent>;
  checkListNums: number[];

  constructor() {
    this.checkListNums = [1, 2, 3];
  }

  checkedAll() {
    // @ViewChild 테스트
    console.log(this.testChild.childState);

    // @ViewChildren 테스트
    this.testChildren.map((comp) => comp.isChecked = true);
  }

  unCheckedAll() {
    // @ViewChild 테스트
    console.log(this.testChild.childState);

    // @ViewChildren 테스트
    this.testChildren.map((comp) => comp.isChecked = false);
  }
}
