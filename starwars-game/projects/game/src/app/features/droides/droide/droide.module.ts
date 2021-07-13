import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroideListComponent } from './droide-list/droide-list.component';



@NgModule({
  declarations: [
    DroideListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DroideListComponent
  ]
})
export class DroideModule { }
