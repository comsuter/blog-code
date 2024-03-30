import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = '상품 등록';
  product: any;
  errorCodes = ['min', 'max', 'required', 'pattern'];
  errors: any[] = [];
  @ViewChild('prodForm') prodForm!: NgForm;

  constructor() {
    this.initProduct();
  }

  ngAfterViewInit() {

    // this.prodForm.statusChanges.filter(s => s === 'INVALID')
    //   .switchMap(() => {
    //     this.errors = [];
    //     return Observable.from(Object.keys(this.prodForm.controls));
    //   })
    //   .subscribe((controlName) => {
    //     this.errorCodes
    //       .filter(code => this.prodForm.hasError(code, [controlName]))
    //       .forEach(code => {
    //         const errorMsg = this.prodForm.getError(code, [controlName]);
    //         this.errors.push({ controlName, code, errorMsg })
    //       });
    //   });

    // this.prodForm.statusChanges.filter(s => s === 'VALID').subscribe(() => this.errors = []);
  }

  // 상품 폼 초기화
  initProduct() {
    this.product = { name: '', price: '', qty: 0, desc: '' };
  }

  // 상품 등록 버튼 클릭
  onSubmit() {
    alert(`${JSON.stringify(this.product)}`);
  }

  // 초기화 버튼 클릭
  onReset() {
    this.initProduct();
  }
}
