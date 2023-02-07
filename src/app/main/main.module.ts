import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { AuthenticationPageComponent } from './authentication-page/authentication-page.component';



@NgModule({
  declarations: [
    LoginPageComponent,
    HomePageComponent,
    RegistrationPageComponent,
    AuthenticationPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
