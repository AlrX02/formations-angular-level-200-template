import { Component, OnInit } from '@angular/core';
import { Profile, ProfileService } from '../services/profile.service';

@Component({
  selector: 'game-profile-create',
  templateUrl: './profile-create.component.html',
  styleUrls: ['./profile-create.component.css']
})
export class ProfileCreateComponent implements OnInit {

  constructor(private service: ProfileService) { }

  ngOnInit(): void {
  }

  clickToCreate() {
    const user: Profile = {
      name: 'ah que',
      surname: 'johny'
    };

    this.service.save(user).subscribe(item => console.info(item));
  }

}
