import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { DroideDTO } from "../../../core/models/droide.dto";
import { loadDroides } from "./actions/droide.actions";

export interface DroideState {
  items: DroideDTO[]
}

export const monEtatDroideInitial: DroideState = {
  items: []
}

export const droideReducer = createReducer(
  monEtatDroideInitial,
  on(loadDroides, (state, action) => {
    const nouveauxItems = [...state.items];

    nouveauxItems.push({
      id: 1,
      matricule: '14566',
      xp: 100
    });

    return {
      items: nouveauxItems
    };
  })
);
