import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SignupComponent } from './modal-login/signup/signup.component';
import { ModalLandingComponent } from './modal-landing/modal-landing.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ModalLandingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
