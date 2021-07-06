import { createReducer, on } from "@ngrx/store";
import { TrooperDto } from "projects/game/src/app/core/models/trooper.dto";
import { loadTroopersOnState } from "../actions/troopers.actions";

export interface TroopersState {
   items: TrooperDto[];
}

const initialState: TroopersState = {
  items: [ ]
}

export const trooperReducer = createReducer<TroopersState>(
  initialState,
  on(loadTroopersOnState, (state, action) => {
    const newState: TroopersState = { ... state };
    newState.items.push({
      isAlive: true,
      matricule: '123333',
      xp: 120
    });

    return newState;
  })
);
