import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';

import { UserListService } from './user-list/user-list.service';
import { UserDetailService } from './user-list/user-detail/user-detail.service';
import { ApiGatewayService } from './api-gateway.service';

import { API_URL_TOKEN, API_VER_TOKEN } from './app.tokens';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserListService,
    UserDetailService,
    ApiGatewayService,
    { provide: API_URL_TOKEN, useValue: '/api' },
    { provide: API_VER_TOKEN, useValue: 'v1' }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
