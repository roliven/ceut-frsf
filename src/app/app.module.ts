﻿import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
// used to create fake backend
import {ErrorInterceptor, JwtInterceptor} from './_helpers';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {AlertComponent} from './_components';
import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {RegisterComponent} from '@app/register';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbDropdownModule,
    NgbTooltipModule,
    ReactiveFormsModule,
    // WjInputModule,
    // WjGridModule,
    // WjGridFilterModule,
    routing
  ],
  declarations: [
    AlertComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
