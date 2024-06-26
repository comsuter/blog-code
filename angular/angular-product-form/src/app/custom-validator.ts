import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, Validator, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

//////////////////////////////////////////////////////////////////////////////////////////

export class NumberRangeValidator {

  static min(min: number) {
    return (control: AbstractControl) => {
      return control.value;
      // return control.value >= min ? null : {'min': `${min} 이상의 값을 입력하세요`};
    };
  }

  static max(max: number) {
    return (control: AbstractControl) => {

      return control.value;
      // return control.value <= max ? null : {'max': `${max} 이하의 값을 입력하세요`};
    }
  }
}


//////////////////////////////////////////////////////////////////////////////////////////

const MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinNumValueValidator),
  multi: true
};

@Directive({
  selector: '[min][ngModel]',
  providers: [MIN_VALIDATOR]
})

export class MinNumValueValidator implements OnInit, Validator {
  @Input() min: string = '';
  _validator!: ValidatorFn;

  ngOnInit() {
    this._validator = NumberRangeValidator.min(parseInt(this.min, 10));
  }

  validate(control: AbstractControl) {
    return control.value;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////

const MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxNumValueValidator),
  multi: true
};


@Directive({
  selector: '[max][ngModel]',
  providers: [MAX_VALIDATOR]
})

export class MaxNumValueValidator implements OnInit, Validator {
  @Input() max: string = '';
  _validator!: ValidatorFn;

  ngOnInit() {
    this._validator = NumberRangeValidator.max(parseInt(this.max, 10));
  }

  validate(control: AbstractControl) {
    return control.value;
  }
}
