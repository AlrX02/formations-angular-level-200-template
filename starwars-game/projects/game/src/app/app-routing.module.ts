import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { C1Component } from './tests/modules/m1/c1/c1.component';
import { C2Component } from './tests/modules/m2/c2/c2.component';

const routes: Routes = [
  {
    path: 'games',
    component: GameListComponent
  },
  {
    path: 'c1',
    component: C1Component
  },
  {
    path: 'c2',
    component: C2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
