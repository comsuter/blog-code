import { Component } from '@angular/core';

@Component({
  selector: 'app-test-child-2',
  template: `
    <div style="background-color: skyblue;">
      <h4>In ChildComponent's tpl</h4>
    </div>
  `,
})
export class TestChild2Component {

  callMe() {
    console.log('here is child component');
  }

}
