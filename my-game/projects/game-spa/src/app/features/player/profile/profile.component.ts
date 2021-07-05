import { Component, OnInit } from '@angular/core';
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


  constructor(private service: ProfileService) { }

  /**
   *
   */
  ngOnInit(): void {
    
  }

}
