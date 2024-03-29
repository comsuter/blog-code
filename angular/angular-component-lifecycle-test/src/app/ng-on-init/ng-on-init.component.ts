import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ng-on-init',
  template: `
    <h4>SampleComponent</h4>
    <p>content: {{exContent}}</p>
  `,
})
export class NgOnInitComponent {
  @Input() exContent: string = '';

  constructor() {
    alert(`constructor 바인딩된 컨텐츠가 있는가? ${this.chkExistence(this.exContent)}`);
  }

  ngOnInit() {
    alert(`ngOnInit 바인딩된 컨텐츠가 있는가? ${this.chkExistence(this.exContent)}`);
  }

  ngOnDestroy() {
    alert('will be destoryed...');
  }

  private chkExistence(val: string) {
    return val !== undefined;
  }
}
