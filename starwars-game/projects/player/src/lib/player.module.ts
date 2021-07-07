import { NgModule } from '@angular/core';
import { MovePlayerDirective } from './directives/move.directive';
import { PlayerComponent } from './player.component';



@NgModule({
  declarations: [
    PlayerComponent,
    MovePlayerDirective
  ],
  imports: [
  ],
  exports: [
    PlayerComponent
  ]
})
export class PlayerModule { }
