import { AfterViewInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CountdownTimerComponent } from './countdown-timer.component';

@Component({
  selector: 'app-countdown-parent-vc',
  template: `
    <h3>카운트다운 (ViewChild를 이용한 방법)</h3>
    <button type="button" (click)="start()">시작</button>
    <button type="button" (click)="stop()">멈춤</button>
    <div class="seconds">{{ seconds() }}</div>
    <app-countdown-timer></app-countdown-timer>
  `,
  styles: `.seconds { background-color: black; color: red; font-size: 3em; margin: 0.3em 0; text-align: center; width: 1.5em; }`
})
export class CountdownViewChildParentComponent implements AfterViewInit {

  // 템플릿 지역 변수(localVal)를 사용하는 방식은 부모 컴포넌트의 클래스에서는 사용할 수 없습니다.
  // 컴포넌트의 부모-자식 관계는 컴포넌트가 완전히 생성된 이후에 구성되기 때문입니다.
  // 그래서 부모 컴포넌트의 클래스에서는 자식 컴포넌트의 프로퍼티를 읽거나 메소드를 실행할 수 없습니다.

  // 부모 컴포넌트의 클래스에서 자식 컴포넌트에 접근하려면
  // 자식 컴포넌트에 ViewChild를 사용해서 부모 컴포넌트로 주입(inject) 해야 합니다.
  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    // `seconds()` 메소드는 `CountdownTimerComponent.seconds`에서 다시 구현합니다.
    // 이 때 개발 모드에서 출력하는 단방향 바인딩 검사 에러를 방지하기 위해
    // 한 싸이클 기다려야 합니다.
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
}
