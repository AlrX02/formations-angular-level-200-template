import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './services/profile.service';
import { GamesComponent } from './games/games.component';



@NgModule({
  declarations: [
    ProfileComponent,
    GamesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProfileService
  ],
  exports: [
    ProfileComponent
  ]
})
export class PlayerModule { }
