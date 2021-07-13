import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticateRoutingModule } from './authenticate-routing.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticateRoutingModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthenticateModule { }
