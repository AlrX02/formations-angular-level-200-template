import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticateDTO } from '../../../core/models/authenticate.dto';
import { UserDTO } from '../../../core/models/user.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user !: UserDTO;

  constructor(private httpClient: HttpClient) { }

  login(user: AuthenticateDTO): Observable<UserDTO> {

  }

  get isConnected(): boolean {
    return !! this.user && this.user.token != '';
  }
}
