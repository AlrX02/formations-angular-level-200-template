import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticateRoutingModule } from './authenticate-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthenticateModule { }
