import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test-child',
  template: `
   {{childState}}
   <label>check me</label><input type="checkbox" [(ngModel)]="isChecked">
  `
})
export class TestChildComponent {

  // @Input 테스트
  @Input() childState: string = 'bbb';

  isChecked: boolean;

  constructor() {
    this.isChecked = false;
  }
}
