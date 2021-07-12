import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  state = new BehaviorSubject<string>('');


  constructor() { }

  update(value: string) {
    this.state.next(value);
  }
}
