import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameDto } from '../../../core/models/game.dto';

export declare type ResultApi = {
    state: string,
    items: GameDto[]
}

@Injectable()
export class GameService {

  constructor(private httpClient: HttpClient) { }

  getAll(nbItems: number = 100): Observable<GameDto[]> {
    return this.httpClient.get<ResultApi>(api.games.url + '?max=' + nbItems).pipe(
      map(item => [...item.items])
    );
  }
}
