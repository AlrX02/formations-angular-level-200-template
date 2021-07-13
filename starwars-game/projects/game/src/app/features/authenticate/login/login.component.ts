import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticateDTO } from '../../../core/models/authenticate.dto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'game-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: AuthenticateDTO = { email: '', password: ''};

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  clickToLogin() {
    // this.service.login(this.user)
    // .pipe(
    //   catchError(err => of({ error: true }))
    // )
    // .subscribe(item => {
    //   console.info(item);
    // });

    this.service
    .login(this.user)
    .subscribe(
      item => {
        this.router.navigate(['games']);
      },
      error => console.info('err ?', error),
      () => console.info('c\'est fini')
    );
  }

}
