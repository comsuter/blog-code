import { Component } from '@angular/core';

import { MissionService } from './mission.service';

@Component({
  selector: 'app-mission-control',
  template: `
    <h2>미션</h2>
    <button type="button" (click)="announce()">미션 알림</button>

    <app-astronaut
      *ngFor="let name of names"
      [astronaut]="name">
    </app-astronaut>

    <h3>히스토리</h3>
    <ul>
      <li *ngFor="let event of history">{{event}}</li>
    </ul>
  `,
  providers: [MissionService]
})
export class MissionControlComponent {
  names = ['카리나', '차은우', '민지'];
  history: string[] = [];
  missions = ['밥먹기', '팬싸인회 가기', '전시회 참여'];
  nextMission = 0;

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(
      astronaut => {
        this.history.push(`${astronaut} : 미션 완료함`);
      });
  }

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`미션 "${mission}" 이 공지되었습니다.`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }
}
