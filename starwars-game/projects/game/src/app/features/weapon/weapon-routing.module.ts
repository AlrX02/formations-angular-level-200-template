import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeaponCreateComponent } from './weapon-create/weapon-create.component';
import { WeaponListComponent } from './weapon-list/weapon-list.component';

const routes: Routes = [
  {
    path: '',
    component: WeaponListComponent
  },
  {
    path: 'create',
    component: WeaponCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeaponRoutingModule { }
