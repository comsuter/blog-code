import { Component } from '@angular/core';
import { CheckItem } from './check-item';
import { CheckListDataService } from './check-list-data.service';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrl: './check-list.component.css'
})
export class CheckListComponent {

  INIT_TOTAL_CNT: number = 3;
  checkList: CheckItem[] = [];
  curCheckedItem!: CheckItem;

  constructor(public checkListDataService: CheckListDataService) {
    this.checkList = this.checkListDataService.initList(this.INIT_TOTAL_CNT);
  }

  onChangeCnt(op: string) {
    this.checkListDataService.changeTotalCntByOperation(op);
  }

  onChecked(isChecked: boolean, checkedItem: CheckItem) {
    checkedItem.isChecked = isChecked
    this.curCheckedItem = JSON.parse(JSON.stringify(checkedItem));
    this.checkListDataService.checkItem(checkedItem);
  }

  unCheckedItem(idx: number) {
    this.checkListDataService.unCheckItem(idx);
  }
}
