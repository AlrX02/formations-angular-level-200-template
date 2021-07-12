import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C2Component } from './c2/c2.component';
import { TestService } from '../../services/test.service';



@NgModule({
  declarations: [
    C2Component
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TestService
  ],
  exports: [
    C2Component
  ]
})
export class M2Module { }
