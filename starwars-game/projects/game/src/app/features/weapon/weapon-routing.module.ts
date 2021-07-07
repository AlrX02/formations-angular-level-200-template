import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponListComponent } from './weapon-list/weapon-list.component';

const routes: Routes = [
  {
    path: '',
    component: WeaponListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeaponRoutingModule { }
