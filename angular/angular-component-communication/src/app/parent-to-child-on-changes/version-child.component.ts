import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-child',
  template: `
    <h3>버전 : {{major}}.{{minor}}</h3>
    <h4>변경 로그 :</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
  `
})
export class VersionChildComponent implements OnChanges {
  @Input() major = 0;
  @Input() minor = 0;
  changeLog: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    const log: string[] = [];

    for (const propName in changes) {
      const changedProp = changes[propName];
      const from = JSON.stringify(changedProp.previousValue);
      const to = JSON.stringify(changedProp.currentValue);

      if (changedProp.isFirstChange()) {
        log.push(`최초 ${propName} 버전은 ${to} 입니다.`);
      } else {
        log.push(`${propName} 버전이 ${from} -> ${to}으로 변경됨`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
