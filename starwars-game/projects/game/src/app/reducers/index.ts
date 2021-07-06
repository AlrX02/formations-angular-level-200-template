import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { trooperReducer, TroopersState } from '../features/troopers/store/reducers';

export interface ApplicationState {
  'trooper': TroopersState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  'trooper': trooperReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
