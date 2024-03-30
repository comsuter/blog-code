import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagerInfoComponent } from './manager-info/manager-info.component';
import { MaxNumValueValidator, MinNumValueValidator } from './custom-validator';

@NgModule({
  declarations: [
    AppComponent,
    MinNumValueValidator,
    MaxNumValueValidator,
    ManagerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // 반응형 폼 모듈 추가
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
