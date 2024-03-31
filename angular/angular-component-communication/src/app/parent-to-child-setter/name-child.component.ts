import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  template: '띄어쓰기 제거된 : {{getName}}<br />'
})
export class NameChildComponent {

  private _name = '';

  @Input()
  get getName(): string {
    // 2. get
    return this._name;
  }

  set getName(name: string) {
    // 1. setter
    this._name = (name && name.trim()) || '<no name set>';
  }


}
