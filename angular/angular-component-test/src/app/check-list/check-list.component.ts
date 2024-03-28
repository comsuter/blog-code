import { Component } from '@angular/core';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrl: './check-list.component.css'
})
export class CheckListComponent {

  checkList: string[] = [];
  checkedResult: boolean[] = [];
  checkedResultData: string[] = [];

  constructor() {
    this.checkList = [
      '카리나',
      '차은우',
      '윈터',
      '민지'
    ];
    this.checkList.forEach(() => this.checkedResult.push(false));
  }

  extractCheckedResult() {
    this.checkedResultData = [];
    this.checkedResult.forEach((isChecked, idx) => {
      if (isChecked) {
        this.checkedResultData.push(this.checkList[idx]);
      }
    });
  }

}
