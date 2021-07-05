import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './services/profile.service';
import { GamesComponent } from './games/games.component';
import { Profile } from '../../models/profile';
import { Observable, of } from 'rxjs';
import { environment } from 'projects/game-spa/src/environments/environment';

const mockService: ProfileService = {
  id: 1,
  save(profile: Profile): Observable<Profile>  {
    return of(profile);
  }
}

class FakeProfileService extends ProfileService {
  save(profile: Profile): Observable<Profile>  {
    return of(profile);
  }
}

@NgModule({
  declarations: [
    ProfileComponent,
    GamesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: ProfileService, useFactory: () => { environment.production ? ProfileService : FakeProfileService }  }
  ],
  exports: [
    ProfileComponent
  ]
})
export class PlayerModule { }
