import { createSelector } from "@ngrx/store";
import { ApplicationState } from "projects/game/src/app/reducers";

export const baseState = (applicationState: ApplicationState) => applicationState.trooper;

export const selectAllTroopersQuery = createSelector(baseState, state => state.items);
export const selectAllAliveTroopersQuery = createSelector(selectAllTroopersQuery,
                                                         items => items.filter(item => item.isAlive));
