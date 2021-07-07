import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'game-weapon-list',
  templateUrl: './weapon-list.component.html',
  styleUrls: ['./weapon-list.component.css']
})
export class WeaponListComponent implements OnInit {
  items: { id: number, label: string }[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
