import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeaponListComponent } from './weapon-list/weapon-list.component';
import { WeaponService } from './services/weapon.service';
import { WeaponRoutingModule } from './weapon-routing.module';
import { WeaponCreateComponent } from './weapon-create/weapon-create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WeaponListComponent,
    WeaponCreateComponent
  ],
  imports: [
    CommonModule,
    WeaponRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    WeaponService
  ],
  exports: [
    WeaponListComponent
  ]
})
export class WeaponModule { }
