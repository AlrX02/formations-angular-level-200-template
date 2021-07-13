import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { DroideDTO } from "../../../core/models/droide.dto";
import { requestToLoadDroides, updateListOfDroides } from "./actions/droide.actions";

export interface DroideState {
  items: DroideDTO[]
}

export const monEtatDroideInitial: DroideState = {
  items: []
}

export const droideReducer = createReducer(
  monEtatDroideInitial,
  on(updateListOfDroides, (state, action) => {
    const itemsClones = [... state.items];

    action.droides.forEach(item => itemsClones.push(item));

    return {
      items: itemsClones
    };
  })
);
