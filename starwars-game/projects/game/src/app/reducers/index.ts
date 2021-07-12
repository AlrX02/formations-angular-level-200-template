import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { droideReducer, DroideState } from '../features/droides/store';

export interface ApplicationState {
  'droides': DroideState
}

export const reducers: ActionReducerMap<ApplicationState> = {
  'droides': droideReducer
};


export const metaReducers: MetaReducer<ApplicationState>[] = !environment.production ? [] : [];
