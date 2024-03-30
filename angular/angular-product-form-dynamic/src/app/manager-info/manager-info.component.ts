import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manager-info',
  templateUrl: './manager-info.component.html',
})
export class ManagerInfoComponent {

  @Input() idx: number = 0;
  @Input() manager: any;
}
