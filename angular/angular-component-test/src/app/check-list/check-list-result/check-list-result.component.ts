import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckItem } from '../check-item';

@Component({
  selector: 'app-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrl: './check-list-result.component.css'
})
export class CheckListResultComponent {
  _checkedCnt: number = 0;
  _checkedData: CheckItem[] = [];
  @Output() onSelectedToRemoveItem = new EventEmitter<number>();

  constructor() {
    this._checkedData = [];
  }

  @Input()
  set checkItem(curItemEvent: CheckItem) {
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

  onRemove(idx: number) {
    this.onSelectedToRemoveItem.emit(this._checkedData[idx].idx);
    this._checkedData = this._checkedData.filter((val, _idx) => _idx !== idx);
    this._checkedCnt = this._checkedData.length;
  }
}
