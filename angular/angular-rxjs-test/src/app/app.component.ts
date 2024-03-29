import { Component } from '@angular/core';
import { map, of, filter, pipe, Observable, catchError} from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  template: '',
})
export class AppComponent {

  /////////////////////////////////////////////////////////////////
  // map 연산자로 제곱
  // nums = of(1, 2, 3);
  // squares = this.nums
  // .pipe(
  //   map(num => num * num)
  // )
  // .subscribe(value => console.log(value));


  /////////////////////////////////////////////////////////////////
  // filter 연산자로 홀수만 거르고, map 연산자로 제곱
  // squareOdd = of(1, 2, 3, 4, 5)
  // .pipe(
  //   filter(num => num % 2 === 1), // 홀수
  //   map(num => num * num)
  // )
  // .subscribe(x => console.log(x));

  /////////////////////////////////////////////////////////////////
  // filter 연산자로 홀수만 거르고, map 연산자로 제곱 (별도 함수로 추출)
  // nums = of(1, 2, 3, 4, 5);
  //
  // squareOddVals = pipe(
  //   filter((n: number) => n % 2 === 1),
  //   map(n => n * n)
  // );
  //
  // // filter()와 map()을 실행하는 옵저버블을 생성합니다.
  // squareOdd = this.squareOddVals(this.nums)
  // .subscribe(x => console.log(x));


  /////////////////////////////////////////////////////////////////
  // 에러 처리 (catchError 연산자 활용)
  apiData = ajax('/api/data').pipe(
    map((res: any) => {
      if (!res?.response) {
        throw new Error('Value expected!');
      }
      return res.response;
    }),
    catchError(() => of([]))
  )
  .subscribe({
    next(x) { debugger; console.log('data: ', x); },
    // next(x: T) { console.log('data: ', x); },
    error() { debugger; console.log('errors already caught... will not run'); }
  });
}
