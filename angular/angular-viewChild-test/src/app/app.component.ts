import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

    <!-- @ViewChild -->
    <app-test-parent></app-test-parent>

    <!-- 아래 방법 1 : elementRef-->
    {{elementRef}}<br>

    <!-- 아래 방법 2 : 템플릿 참조 변수-->
    <input type="text" #myInput/><br />
    <input type="text" ref-myInput/><br />
    {{myInput}}<br />
    {{myInputVal}}<br />
    {{myInputList}}<br />

    <!-- 3번 -->
    <ul>
      <li *ngFor="let item of items" #listItems>
        {{item.content}}
      </li>
    </ul>

    <!-- 4번 -->
    <div>
      <input type="text" id="n-1" #keyInput (keyup)="leaveKeyLog($event, keyInput.value)" />
      <div>현재 입력한 값 : {{keyInput.value}}</div>
      <div>모든 입력값  : {{logs | json}}</div>
    </div>
    <div>
      INPUT의 더 많은 속성 보기 <br />
      it: {{keyInput.id}} <br />
      type: {{keyInput.type}} <br/>
      isRequired: {{keyInput.required}} <br/>
      isDisabled: {{keyInput.disabled}} <br/>
      ...
    </div>

    <!-- 5번 @ContetntChild -->
    <div style="background-color:yellow;">
      <h4>In AppComponent's tpl</h4>
      <app-test-parent-2>
        <div style="background-color: red;">
          <h4>In AppComponent's content projected tpl</h4>
        </div>
        <app-test-child-2></app-test-child-2>
      </app-test-parent-2>
   </div>
  `
})
export class AppComponent {

  // 1. 네이티브 DOM 접근하여 템플릿의 모든 DOM을 가져오는 방법
  elementRef: ElementRef

  constructor(ref: ElementRef) {
    this.elementRef = ref;
  }

  // 2. 템플릿의 특정 요소를 가져오는 방법
  @ViewChild('myInput') myInputVal!: ElementRef;
  @ViewChildren('myInput') myInputList!: QueryList<ElementRef>;

  ngAfterViewInit() {
    // 이때 바인딩이 이루어짐
    // constructor나 ngOnInit에서는 템플릿 참조 변수에 접근 불가능함!
  }

  // 3. ngFor와 ViewChildren 사용하는 것이 적절
  items: any[] = [];
  @ViewChildren('listItems') itemElems!: QueryList<ElementRef>


  // 4. 템플릿에서 직접 템플릿 참조 변수를 사용할 때
  logs: string[] = [];

  leaveKeyLog(event: any, val: string) {
    if(event.keyCode === 13) { // 엔터 입력시
      this.logs.push(val);
      event.target.value = '';
    }
  }

}
