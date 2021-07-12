import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1/c1.component';
import { TestService } from '../../services/test.service';



@NgModule({
  declarations: [
    C1Component
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TestService
  ],
  exports: [
    C1Component
  ]
})
export class M1Module { }
