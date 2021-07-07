import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { WeaponService } from './services/weapon.service';



@NgModule({
  declarations: [
    WeaponListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    WeaponService
  ],
  exports: [
    WeaponListComponent
  ]
})
export class WeaponModule { }
