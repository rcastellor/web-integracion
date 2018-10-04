import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromContacto from '../contactos/contacto.reducer';

export interface State {

  contacto: fromContacto.State;
}

export const reducers: ActionReducerMap<State> = {

  contacto: fromContacto.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
