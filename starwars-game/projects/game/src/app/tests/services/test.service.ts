import { Injectable } from '@angular/core';

let id = 0;

@Injectable()
export class TestService {


  constructor() {
    console.info('je suis construis', id);
    id ++;
  }
}
