import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export declare type Profile = { name: string, surname: string };

@Injectable()
export class ProfileService {

  constructor() { }

//  save(): Observable<{ name: string, surname: string }> {
  save(monProfile: Profile): Observable<Profile> {
    // return of({ name: 'dela', surname: 'cyrilla' });
    //return this.httpClient.post('url', monProfile);
    //return of(monProfile);
     throw new Error('Not implemented exception');
  }
}

// const monProfile : Profile = {
//   name: '',
//   surname: ''
// }
