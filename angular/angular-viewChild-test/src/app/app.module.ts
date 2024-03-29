import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TestParentComponent } from './test-parent/test-parent.component';
import { TestChildComponent } from './test-parent/test-child/test-child.component';
import { FormsModule } from '@angular/forms';
import { TestParent2Component } from './test-parent-2/test-parent-2.component';
import { TestChild2Component } from './test-parent-2/test-child-2/test-child-2.component';


@NgModule({
  declarations: [
    AppComponent,
    TestParentComponent,
    TestChildComponent,
    TestParent2Component,
    TestChild2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
