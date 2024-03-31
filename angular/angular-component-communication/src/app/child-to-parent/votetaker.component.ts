import { Component } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  template: `
    <h2>인류가 우주에 거주하는 것은 어때?</h2>
    <h3>동의한 사람 : {{agreed}}, 비동의한 사람 : {{disagreed}}</h3>

    <app-voter *ngFor="let voter of voters"
      [voterName]="voter" (voted)="onVoted($event)">
    </app-voter>
  `
})
export class VoteTakerComponent {
  agreed = 0;
  disagreed = 0;
  voters = ['스파이더맨', '아이언맨', '토르'];

  onVoted(agreed: boolean) {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }
}
