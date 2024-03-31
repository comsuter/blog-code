import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(private httpClient: HttpClient) {
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  // 배송 가격 데이터를 불러오기
  getShippingPrices() {
    return this.httpClient.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
