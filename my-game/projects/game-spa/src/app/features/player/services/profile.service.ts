import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from '../../../models/profile';

@Injectable()
export class ProfileService {
  id = Math.random();

  constructor() {
    console.info('je me crée', this.id);
  }

  save(profile: Profile): Observable<Profile> {
    throw new Error('Not implemented');
  }
}
