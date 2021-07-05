import { Component, OnInit } from '@angular/core';
import { superLogger } from 'projects/game-spa/src/environments/logger';
import { LoggerService } from '../../../shared/services/logger.service';
import { ProfileService } from '../services/profile.service';

/*
**/
@Component({
  selector: 'starwars-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  // providers: [
  //   ProfileService
  // ]
})
export class ProfileComponent implements OnInit {


  constructor(private service: ProfileService, private logger: LoggerService) { }

  /**
   *
   */
  ngOnInit(): void {
    this.logger.log('hello');
    superLogger.log('hello');
  }

}
