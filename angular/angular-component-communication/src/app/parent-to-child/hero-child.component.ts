import { Component, Input } from '@angular/core';

import { HeroModel } from './hero';

@Component({
  selector: 'app-hero-child',
  template: `
    <h3>{{hero.name}} 자기소개:</h3>
    <p>저는 {{hero.name}}이고 {{hero.age}}살 입니다, {{masterName}}.</p>
  `
})
export class HeroChildComponent {

  @Input('hero') hero!: HeroModel;
  @Input('master') masterName = '';

}
