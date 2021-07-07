import { Component, OnInit } from '@angular/core';
import { WeaponService } from '../services/weapon.service';

@Component({
  selector: 'game-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})
export class WeaponListComponent implements OnInit {
  items: { id: number, label: string }[] = [];

  constructor(private service: WeaponService) { }

  ngOnInit(): void {
    // this.service.getAll().subscribe(data => this.items = data);
    this.service.getOne(1).subscribe();
  }

}
