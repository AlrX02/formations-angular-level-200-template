import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  id = Math.random();

  constructor() {
    console.info('je me crée', this.id);
  }
}
