import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, TestModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}