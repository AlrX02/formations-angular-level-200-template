import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from 'projects/game/src/environments/api';
import { Observable } from 'rxjs';
import { DroideDTO } from '../../../core/models/droide.dto';

@Injectable({
  providedIn: 'root'
})
export class DroideService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<DroideDTO[]> {
    return this.httpClient.get<DroideDTO[]>(api.droides.url);
  }
}
