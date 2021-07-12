import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Profile, ProfileService } from './services/profile.service';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import { Observable, of } from 'rxjs';
import { environment } from 'projects/game/src/environments/environment';

const unFauxService: ProfileService = {
  save(user: Profile): Observable<Profile> {
    return of(user);
  }
}

@NgModule({
  declarations: [
    ProfileCreateComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ProfileService
    // { provide: ProfileService, useValue: unFauxService }
    //{ provide: ProfileService, useFactory: () => environment.production ? ProfileService : unFauxService }
  ]
})
export class UserModule { }
