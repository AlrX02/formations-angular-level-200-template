import { createReducer } from "@ngrx/store";
import { TrooperDto } from "projects/game/src/app/core/models/trooper.dto";

export interface TroopersState {
   items: TrooperDto[];
}

const initialState: TroopersState = {
  items: []
}

export const trooperReducer = createReducer<TroopersState>(
  initialState
);
