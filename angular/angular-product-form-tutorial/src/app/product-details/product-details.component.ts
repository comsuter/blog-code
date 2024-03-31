import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  productInfo: Product | undefined

    // ActivatedRoute 에는 Angular Router가 로드한 개별 컴포넌트에 대한 정보를 담고 있습니다.
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {
  }

  ngOnInit() {

    // 현재 활성화된 라우팅 규칙에 대한 정보를 담고 있습니다.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    this.productInfo = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert(`${product.name} 상품이 카트에 추가됨`);
  }
}
