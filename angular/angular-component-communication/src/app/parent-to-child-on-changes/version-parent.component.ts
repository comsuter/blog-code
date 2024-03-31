import { Component } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  template: `
    <h2>소스코드 버전</h2>
    <button type="button" (click)="newMajor()">새로운 major 버전</button>
    <button type="button" (click)="newMinor()">새로운 minor 버전</button>
    <app-version-child [major]="major" [minor]="minor"></app-version-child>
  `
})
export class VersionParentComponent {
  major = 1;
  minor = 23;

  newMinor() {
    this.minor++;
  }

  newMajor() {
    this.major++;
    this.minor = 0;
  }
}
