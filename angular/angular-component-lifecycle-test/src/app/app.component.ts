import { Component } from '@angular/core';
import { TempData } from './ng-on-changes/temp-data.model';

@Component({
  selector: 'app-root',
  template: `
    <h2>1. OnInIt 테스트</h2>
    <button type="button" (click)="toggle = !toggle">버튼</button>
    <app-ng-on-init *ngIf="toggle" [exContent]="sampleContent"></app-ng-on-init>


    <h2>2. OnChanges 테스트</h2>
    myNum: <input type="number" [(ngModel)]="numVal" /> <br>
    myStr: <input type="text" [(ngModel)]="strVal" /> <br>
    temp.id: <input type="number" [(ngModel)]="temp.id" /> <br>
    temp.content: <input type="text" [(ngModel)]="temp.content" /> <br>
    <app-ng-on-changes [myNum]="numVal" [myStr]="strVal" [tempData]="temp"></app-ng-on-changes>
  `,
})
export class AppComponent {
  toggle: boolean = false;
  sampleContent: string = "OnInIt 테스트";


  numVal: number = 0;
  strVal: string = 'OnChanges 테스트';
  temp: TempData = new TempData(10, 'sample data');
}
