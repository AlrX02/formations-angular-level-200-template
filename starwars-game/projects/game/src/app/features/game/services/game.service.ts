import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { GameDto } from '../../../core/models/game.dto';

export declare type ResultApi = {
    state: string,
    items: GameDto[]
}

@Injectable()
export class GameService {

  constructor(private httpClient: HttpClient) { }

  getAll(nbItems: number = 100): Observable<GameDto[]> {
    const random = Math.random();

    return this.httpClient.get<ResultApi>(api.games.url + '?max=' + nbItems).pipe(
      tap(item => console.info(random)),
      map(item => [...item.items])
    );
  }
}
