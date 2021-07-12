import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'game-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private test:TestService) { }

  ngOnInit(): void {
  }

}
