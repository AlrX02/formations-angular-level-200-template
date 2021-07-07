import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';

const routes: Routes = [
  {
    path: 'games',
    component: GameListComponent
  },
  {
    path: 'weapons',
    loadChildren: () => import('./features/weapon/weapon.module').then(item => item.WeaponModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
