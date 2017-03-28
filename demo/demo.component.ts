import { templateSourceUrl } from '@angular/compiler/src/compile_metadata';
import { Component } from '@angular/core';

@Component({
  selector: 'tst-demo-app',
  // template: '<tst-hello-world></tst-hello-world>'
  templateUrl: './demo.component.html'
})
export class DemoComponent {}
