import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-check-list-result',
  templateUrl: './check-list-result.component.html',
  styleUrl: './check-list-result.component.css'
})
export class CheckListResultComponent {
  _checkedCnt: number = 0;
  _checkedData: any[] = [];
  @Output() onSelectedToRemoveItem = new EventEmitter<number>();

  @Input()
  set checkedResult(checkedResult: string[]) {
    if (!checkedResult) {
      return;
    }

    this._checkedData = checkedResult;
    this._checkedCnt = this._checkedData.length;
  }

  onRemove(idx: any) {

    this.onSelectedToRemoveItem.emit(this._checkedData[idx]);
    this._checkedData = this._checkedData.filter((val, _idx) => _idx !== idx);
  }
}
