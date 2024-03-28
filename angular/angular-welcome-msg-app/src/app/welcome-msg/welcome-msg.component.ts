import { Component } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrl: './welcome-msg.component.css'
})
export class WelcomeMsgComponent {
  welcomeMsg:string = '';
  userName:string = '';
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;

  constructor(public i18nSupportService: I18nSupportService) { // WelcomeMsgComponent 컴포넌트는 I18nSupportService 서비스에 의존하게 된다.

  }

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if (this.valid) return;
      alert('이름을 입력해 주세요');
    };

    // setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  onChange() {
    this.valid = this.userName.length > 0;
  }

  showWelcomeMsg() {
    if (this.userName == "") {
      alert('이름을 입력해 주세요');
      return;
    }
    this.welcomeMsg = this.i18nSupportService.getWelcomeMsg(this.userName);
  }

}
