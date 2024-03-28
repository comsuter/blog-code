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

  // 체크박스 변경시 그래프 출력
  ngOnInit() {
    this.checkListDataService.changeCntState.subscribe(() => this.onPrintGraph());
  }

  // 그래프 출력 서비스 호출
  onPrintGraph() {
    this.graphToggle = false;
    this.checkedRatio = this.checkListDataService.getCheckedItemRatioText();
    setTimeout(() => this.graphToggle = true, 1);
  }
}
