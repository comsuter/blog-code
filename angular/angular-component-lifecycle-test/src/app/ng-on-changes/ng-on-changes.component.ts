import { Component, Input, SimpleChanges } from '@angular/core';
import { TempData } from './temp-data.model';

@Component({
  selector: 'app-ng-on-changes',
  template: `
    <h4>OnChanges 에서 Prop Input Bind Component</h4>
    <p>myNum: {{myNum}}</p>
    <p>myStr: {{myStr}}</p>
    <p>tempData.content</p>
  `,
})
export class NgOnChangesComponent {
  @Input() myNum: number = 0;
  @Input() myStr: string = '';
  @Input() tempData!: TempData;

  ngOnChanges(changes: SimpleChanges) {
    if(changes['myNum'] && !changes['myNum'].isFirstChange()) {
      // exteranl API call or more preprocessing...
    }

    for (let propName in changes) {
      let change = changes[propName];
      console.dir(change);

      if (change.isFirstChange()) {
        console.log(`최초 감지(first change): ${propName}`);
      } else {
        console.log(`이전(prev): ${change.previousValue}, 현재(cur): ${change.currentValue}`);
      }
    }
  }
}
