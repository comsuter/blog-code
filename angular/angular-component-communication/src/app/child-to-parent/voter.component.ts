import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  template: `
    <h4>{{voterName}}</h4>
    <button type="button" (click)="vote(true)"  [disabled]="didVote">동의</button>
    <button type="button" (click)="vote(false)" [disabled]="didVote">비동의</button>
  `
})
export class VoterComponent {
  @Input() voterName: string = '';
  @Output() voted = new EventEmitter<boolean>();
  didVote: boolean = false;

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
