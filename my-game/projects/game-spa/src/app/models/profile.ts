// export interface IProfile {
//   avatar: string;
//   force: string;
//   weaponType: string;
// }

import { ProfileDto } from "./dtos/profile.dto";

export class Profile {
  avatar !: string;
  force !: string;
  weaponType !: string;

  constructor(profileDto: ProfileDto) {
    Object.assign(this, profileDto);
  }
}


// const monProfile: IProfile = {
//   avatar: 'Luke',
//   force: 'White',
//   weaponType: 'Blaster'
// }

// const monProfile2: Profile = {
//   avatar: 'Luke',
//   force: 'White',
//   weaponType: 'Blaster'
// }

// const monProfile3 = new Profile();
// monProfile3.avatar = '';
// monProfile3.force = '';
// monProfile3.weaponType = '';


// function checkProfile(uneVariable: Profile) {
// }

// checkProfile({
//   avatar: 'Luke',
//   force: 'White',
//   weaponType: 'Blaster'
// });






