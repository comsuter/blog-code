import { Component } from '@angular/core';
import { CheckItemModel } from './check-item';
import { CheckListDataService } from './check-list-data.service';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrl: './check-list.component.css'
})
export class CheckListComponent {

  INIT_TOTAL_CNT: number = 3;
  checkList: CheckItemModel[] = [];
  newCheckedItem!: CheckItemModel;

  constructor(public checkListDataService: CheckListDataService) {
    this.checkList = this.checkListDataService.initList(this.INIT_TOTAL_CNT);
  }

  // 항목 증감 서비스 호출
  onChangeCnt(operaion: string) {
    this.checkListDataService.changeTotalCntByOperation(operaion);
  }

  // 체크 설정 서비스 호출
  onChecked(isChecked: boolean, checkedItem: CheckItemModel) {
    checkedItem.isChecked = isChecked
    this.newCheckedItem = JSON.parse(JSON.stringify(checkedItem));
    this.checkListDataService.checkItem(checkedItem);
  }

  // 체크 해제 서비스 호출
  unCheckedItem(idx: number) {
    this.checkListDataService.unCheckItem(idx);
  }
}
