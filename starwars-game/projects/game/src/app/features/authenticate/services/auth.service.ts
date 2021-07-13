import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { api } from '../../../../environments/api';
import { AuthenticateDTO } from '../../../core/models/authenticate.dto';
import { UserDTO } from '../../../core/models/user.dto';

export declare type ResultJwtApi = {
  access_token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user !: UserDTO;

  constructor(private httpClient: HttpClient) { }

  /**
   * Request api to log user and get jwt token
   * @param user data to log user
   * @returns
   */
  login(user: AuthenticateDTO): Observable<UserDTO> {
    return this.httpClient.post<ResultJwtApi>(api.authentication.url, user).pipe(
      map(item => {
        return {
          surname: '',
          email: user.email,
          token: item.access_token
        };
      }),
      tap(item => this.user = item)
    );
  }

  get isConnected(): boolean {
    return !! this.user && this.user.token != '';
  }
}
