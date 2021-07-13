import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { DroideDTO } from 'projects/game/src/app/core/models/droide.dto';
import { ApplicationState } from 'projects/game/src/app/reducers';
import { loadDroides } from '../../store/actions/droide.actions';
import { lesDroidesVivants, tousLesDroides } from '../../store/selectors/droide.selectors';

@Component({
  selector: 'game-droide-list',
  templateUrl: './droide-list.component.html',
  styleUrls: ['./droide-list.component.css']
})
export class DroideListComponent implements OnInit {
  lesDroides: DroideDTO[] = [];

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit(): void {
    this.store.pipe(
      select(lesDroidesVivants),
    ).subscribe(items =>
      this.lesDroides = items
    );

    //this.store.dispatch(loadDroides());
  }

  addDroide() {
    this.store.dispatch(loadDroides());

  }

}
