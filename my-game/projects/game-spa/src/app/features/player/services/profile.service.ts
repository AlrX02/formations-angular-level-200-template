import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../../../models/profile';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from 'projects/game-spa/src/environments/urls';

@Injectable()
export class ProfileService {
  id = Math.random();

  constructor(private httpClient: HttpClient) {
    console.info('je me crée', this.id);
  }

  save(profile: Profile): Observable<Profile> {
    return this.httpClient.post<Profile>(apiUrls.profile, profile);
  }
}
