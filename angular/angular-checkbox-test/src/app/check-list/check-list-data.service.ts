import { EventEmitter, Injectable } from '@angular/core';
import { CheckItemModel } from './check-item';

@Injectable({
  providedIn: 'root'
})
export class CheckListDataService {

  private checkList: CheckItemModel[] = [];
  changeCntState: EventEmitter<any> = new EventEmitter<any>();

  initList(totalCnt: number) {
    for (let i = 0; i < totalCnt; i++) {
      const checkItem = this.getNewCheckItem(i+1);
      this.checkList.push(checkItem);
    }
    return this.checkList;
  }

  // 항목 증감
  changeTotalCntByOperation(operation: string) {
    if (operation === '+') {
      const totalCnt = this.checkList.length
      const newItem = this.getNewCheckItem(totalCnt + 1);
      this.checkList.push(newItem);
    } else if (operation === '-') {
      this.checkList.pop();
    }

    this.changeCntState.emit();
  }

  // 체크 설정
  checkItem(checkItem: CheckItemModel) {
    this.checkList[checkItem.idx-1] = checkItem;

    this.changeCntState.emit();
  }

  // 체크 해제
  unCheckItem(idx: number) {
    this.checkList[idx-1].isChecked = false;

    this.changeCntState.emit();
  }

  // 그래프 퍼센트 계산
  getCheckedItemRatioText() {
    const curCnt = this.checkList.filter(i => i.isChecked).length;
    const totalCnt = this.checkList.length;
    const roundedRatio = Math.round((curCnt / totalCnt) * 100);
    return `${roundedRatio}%`;
  }

  // 새로운 체크박스 생성
  private getNewCheckItem(idx: number) {
    return { idx: idx, content: this.getCheckListMsg(idx), isChecked: false };
  }

  // 새로운 체크박스명 생성
  private getCheckListMsg(idx: number): string {
    return `체크박스 ${idx}`;
  }
}
