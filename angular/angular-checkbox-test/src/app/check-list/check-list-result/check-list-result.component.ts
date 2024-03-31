import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckItemModel } from '../check-item';

@Component({
  selector: 'app-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrl: './check-list-result.component.css'
})
export class CheckListResultComponent {
  _checkedCnt: number = 0;
  _checkedData: CheckItemModel[] = [];
  @Output() _onSelectedToRemoveItem = new EventEmitter<number>();

  constructor() {
    this._checkedData = [];
  }

  @Input()
  set checkItem(curItemEvent: CheckItemModel) {
    if (!curItemEvent) {
      return;
    }

    if (curItemEvent.isChecked) {
      this._checkedData.push(curItemEvent);
    } else {
      this._checkedData = this._checkedData.filter(val => val.idx !== curItemEvent.idx);
    }
    this._checkedCnt = this._checkedData.length;
  }

  // 체크박스 삭제 버튼 클릭
  onRemove(idx: number) {
    this._onSelectedToRemoveItem.emit(this._checkedData[idx].idx);
    this._checkedData = this._checkedData.filter((val, _idx) => _idx !== idx);
    this._checkedCnt = this._checkedData.length;
  }
}
