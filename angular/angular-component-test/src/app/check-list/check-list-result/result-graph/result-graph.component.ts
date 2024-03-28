import { Component } from '@angular/core';
import { CheckListDataService } from '../../check-list-data.service';

@Component({
  selector: 'app-result-graph',
  templateUrl: './result-graph.component.html',
  styleUrl: './result-graph.component.css'
})
export class ResultGraphComponent {
  checkedRatio: string = '0%';
  graphToggle:boolean = true;

  constructor(public checkListDataService: CheckListDataService) { }

  onPrintGraph() {
    this.graphToggle = false;
    this.checkedRatio = this.checkListDataService.getCheckedItemRatioText();
    setTimeout(() => this.graphToggle = true, 1);
  }
}
