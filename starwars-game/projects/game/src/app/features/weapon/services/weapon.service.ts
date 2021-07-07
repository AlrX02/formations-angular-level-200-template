import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export declare type WeaponType = { id: number, label: string };

@Injectable()
export class WeaponService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<WeaponType[]> {
    return this.httpClient.get<WeaponType[]>('urltoto');
  }

  getOne(id: number): Observable<WeaponType> {
    return this.httpClient.get<WeaponType>('urltoto/' + id);
  }
}
