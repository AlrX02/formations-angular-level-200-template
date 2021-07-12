import { createSelector } from "@ngrx/store";
import { ApplicationState } from "projects/game/src/app/reducers";
import { DroideState } from "..";

const etatDeBase = (state: ApplicationState) => state.droides;

export const tousLesDroides = createSelector(etatDeBase, (droideState: DroideState) => droideState.items);
export const lesDroidesVivants = createSelector(tousLesDroides, items => items.filter(item => item.xp > 0));
