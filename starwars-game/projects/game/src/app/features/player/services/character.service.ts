import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(page: number): Observable<any> {
    return this.http.get(`https://swapi.dev/api/people/?page=${page}`).pipe(map(initialResult => {
      let tmp = initialResult as any;

      let res: any[] = [];
      tmp.results.forEach((element: any) => {
        res.push({
          surname: element.name,
          colorEye: element.eye_color,
          gender: element.gender
        })
      });

      return res;
    }));
  }
}
