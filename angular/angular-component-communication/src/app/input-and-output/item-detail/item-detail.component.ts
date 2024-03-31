import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {

  @Input() childItem = '';

  // 자식 컴포넌트에서 입력 프로퍼티를 필수로 받기
  // @Input({required: true}) item_required_byDetail = '';

  // 자식 컴포넌트에서 입력 프로퍼티 값을 변환해야 할 때
  // @Input({transform: booleanAttribute}) itemAvailability!: boolean;

  @Output() childEvent = new EventEmitter<string>();

  addNewItem_byDetail(value: string) {
    this.childEvent.emit(value);
  }
}
