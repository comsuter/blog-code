import { Component } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-lv',
  template: `
    <h3>카운트다운 (local variable를 이용한 방법)</h3>
    <button type="button" (click)="timer.start()">시작</button>
    <button type="button" (click)="timer.stop()">멈춤</button>
    <div class="seconds">{{timer.seconds}}</div>
    <app-countdown-timer #timer></app-countdown-timer>
  `,
  styles: `.seconds { background-color: black; color: red; font-size: 3em; margin: 0.3em 0; text-align: center; width: 1.5em; }`
})
export class CountdownLocalVarParentComponent {

  // 원래 부모 컴포넌트는 자식 컴포넌트의 seconds 프로퍼티나 start, stop 메소드에 직접 접근할 수 없습니다.
  // 하지만 <app-countdown-timer>를 템플릿 지역 변수 #timer로 선언하면 이 변수를 사용해서 자식 컴포넌트에 접근할 수 있습니다.
  // 이 템플릿 지역 변수는 자식 컴포넌트 자체를 가리키며,
  // 템플릿 지역 변수를 선언한 후에는 부모 컴포넌트의 템플릿에서 자식 컴포넌트의 프로퍼티나 메소드에 자유롭게 접근할 수 있습니다.
}
