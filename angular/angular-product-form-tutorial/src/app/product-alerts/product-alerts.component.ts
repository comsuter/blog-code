import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrl: './product-alerts.component.css'
})
export class ProductAlertsComponent {

  // 부모 -> 자식 컴포넌트로 데이터 전달하기
  @Input() childProduct: Product | undefined

  // 자식 -> 부모 컴포넌트로 데이터 전달하기
  @Output() childNotify = new EventEmitter();

}
