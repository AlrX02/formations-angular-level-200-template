import { createAction } from "@ngrx/store";

export enum DroideActionsType {
  LoadDroides = '[DROIDES - UI] - Load droides',
  DeleteDroide = '[DROIDES - UI] - Delete one droide'
}

export const loadDroides = createAction(DroideActionsType.LoadDroides);
export const deleteDroide = createAction(DroideActionsType.DeleteDroide);
