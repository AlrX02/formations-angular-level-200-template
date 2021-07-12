import { Component, OnInit } from '@angular/core';
import { TestService } from '../../../services/test.service';

@Component({
  selector: 'game-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css'],
  providers: [
    TestService
  ]
})
export class C2Component implements OnInit {

  constructor(private test: TestService) { }

  ngOnInit(): void {
  }

}
