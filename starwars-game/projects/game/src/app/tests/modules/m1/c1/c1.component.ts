import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../services/test.service';

@Component({
  selector: 'game-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private test: TestService) { }

  ngOnInit(): void {
  }

}
