import { createAction, props } from "@ngrx/store";
import { DroideDTO } from "projects/game/src/app/core/models/droide.dto";

export enum DroideActionsType {
  LoadDroides = '[DROIDES - UI] - Request Load droides',
  LoadedDroides = '[DROIDES - EFFECT] - Load droides in State',
  DeleteDroide = '[DROIDES - UI] - Delete one droide'
}

export const requestToLoadDroides = createAction(DroideActionsType.LoadDroides);
export const updateListOfDroides = createAction(DroideActionsType.LoadedDroides, props<{ droides: DroideDTO[] }>());

export const deleteDroide = createAction(DroideActionsType.DeleteDroide, props<{item: DroideDTO}>());
