import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  template: '<p>{{message}}</p>'
})
export class CountdownTimerComponent implements OnDestroy {
  message = '';
  seconds = 11;

  private clearTimer: VoidFunction | undefined;

  ngOnDestroy() {
    this.clearTimer?.();
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer?.();
    this.message = `${this.seconds} 초에서 멈춤`;
  }

  private countDown() {
    this.clearTimer?.();
    const interval = setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = '종료!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `${this.seconds} 초 남았습니다.`;
      }
    }, 1000);
    this.clearTimer = () => clearInterval(interval);
  }
}
