import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MinNumValueValidator, NumberRangeValidator } from './custom-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '상품 등록';
  prodForm: FormGroup;
  managers: FormArray;

  constructor(public fb: FormBuilder) {
    this.managers = this.fb.array([this.buildManagerFormGroup()]);

    this.prodForm = this.fb.group(
      {
        name: ['', Validators.required],
        price: [,
          Validators.compose([
            Validators.required,
            // NumberRangeValidator.min(1000),
            // NumberRangeValidator.max(1000000),
            Validators.pattern('[0-9]\\d*')
          ])
        ],
        qty: [0,
          Validators.compose([
            Validators.required,
            // NumberRangeValidator.min(1),
            // NumberRangeValidator.max(100),
            Validators.pattern('[1-9]\\d*')
          ])
        ],
        desc: ['',
          Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(100)
          ])
        ],
        managers: this.managers
      });
  }

  buildManagerFormGroup() {
    return this.fb.group(
      {
        name: ['', Validators.required],
        phoneNum: ['',
          Validators.compose([
            Validators.required,
            Validators.pattern('010-[0-9]{4}-[0-9]{4}')
          ])
        ]
      });
  }

  addManager() {
    this.managers.push(this.buildManagerFormGroup());
  }

  removeManager() {
    this.managers.removeAt(this.managers.length - 1);
  }

  onSubmit() {
    alert(`${JSON.stringify(this.prodForm.value)}`);
  }
}
