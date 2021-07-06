import { createAction } from "@ngrx/store";

export enum TrooperActionsType {
  LoadData = '[Troopers] - LOAD DATA',
  AddData = '[Troopers] - ADD NEW TROOPER'
}

export const loadTroopersOnState = createAction(TrooperActionsType.LoadData);
export const addTrooperOnState = createAction(TrooperActionsType.AddData);
