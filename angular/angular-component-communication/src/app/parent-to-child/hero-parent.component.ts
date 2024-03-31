import { Component } from '@angular/core';
import { HEROES_DATA } from './hero.data';


@Component({
  selector: 'app-hero-parent',
  template: `
    <h2>{{master}}이 관리하는 히어로 수 : {{heroList.length}}</h2>

    <app-hero-child *ngFor="let hero of heroList"
      [hero]="hero" [master]="master">
    </app-hero-child>
  `
})
export class HeroParentComponent {

  heroList = HEROES_DATA;
  master = '마블';

}
