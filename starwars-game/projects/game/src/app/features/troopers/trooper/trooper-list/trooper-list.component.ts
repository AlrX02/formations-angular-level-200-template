import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { TrooperDto } from 'projects/game/src/app/core/models/trooper.dto';
import { ApplicationState } from 'projects/game/src/app/reducers';
import { loadTroopersOnState } from '../../store/actions/troopers.actions';
import { selectAllAliveTroopersQuery, selectAllTroopersQuery } from '../../store/queries/troopers.selectors';

@Component({
  selector: 'game-trooper-list',
  templateUrl: './trooper-list.component.html',
  styleUrls: ['./trooper-list.component.css']
})
export class TrooperListComponent implements OnInit {
  troopers: TrooperDto[] = [];

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.store.pipe(
      select(selectAllAliveTroopersQuery)
    ).subscribe(items => this.troopers = items);

    //this.store.dispatch(loadTroopersOnState());
  }

  clickToLoad() {
    this.store.dispatch(loadTroopersOnState());
  }

}
