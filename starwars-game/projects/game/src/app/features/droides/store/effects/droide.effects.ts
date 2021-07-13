import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DroideService } from "../../services/droide.service";
import { requestToLoadDroides, updateListOfDroides } from '../actions/droide.actions';
import { concatMap, map } from 'rxjs/operators';
import { DroideDTO } from "projects/game/src/app/core/models/droide.dto";

@Injectable()
export class DroidesEffect {
  constructor(private actions$: Actions, private service: DroideService) {}

  loadDroides$ = createEffect(() => this.actions$.pipe(
    ofType(requestToLoadDroides),
    concatMap(action => this.service.getAll()),
    map((droides: DroideDTO[]) => updateListOfDroides({ droides: droides}))
  ));
}
