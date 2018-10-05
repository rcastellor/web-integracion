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

  contacto: fromContacto.contactoReducer,
};

export const selectContactoState = createFeatureSelector<fromContacto.State>('contacto');

export const selectAllContactos = createSelector(
  selectContactoState,
  fromContacto.selectAll
);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
