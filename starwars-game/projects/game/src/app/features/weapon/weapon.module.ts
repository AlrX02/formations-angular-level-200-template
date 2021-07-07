import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { WeaponService } from './services/weapon.service';
import { WeaponRoutingModule } from './weapon-routing.module';



@NgModule({
  declarations: [
    WeaponListComponent
  ],
  imports: [
    CommonModule,
    WeaponRoutingModule
  ],
  providers: [
    WeaponService
  ],
  exports: [
    WeaponListComponent
  ]
})
export class WeaponModule { }
