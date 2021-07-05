import { Injectable } from '@angular/core';
import { environment } from 'projects/game-spa/src/environments/environment';

export class FakeLogger implements LoggerService {
  log(obj: any) {
  }
}

@Injectable({
  providedIn: 'root',
  useFactory: () => environment.production ? LoggerService : FakeLogger
})
export class LoggerService {

  constructor() { }

  log(obj: any) {
    console.log(obj);
  }
}
