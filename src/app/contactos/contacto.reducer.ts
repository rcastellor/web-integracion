import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Contacto } from './contacto.model';
import { ContactoActions, ContactoActionTypes } from './contacto.actions';

export interface State extends EntityState<Contacto> {
}

export const adapter: EntityAdapter<Contacto> = createEntityAdapter<Contacto>();

export const initialState: State = adapter.getInitialState({
});

export function contactoReducer(
  state = initialState,
  action: ContactoActions
): State {
  switch (action.type) {
    case ContactoActionTypes.AddContacto: {
      return adapter.addOne(action.payload.contacto, state);
    }

    case ContactoActionTypes.UpsertContacto: {
      return adapter.upsertOne(action.payload.contacto, state);
    }

    case ContactoActionTypes.AddContactos: {
      return adapter.addMany(action.payload.contactos, state);
    }

    case ContactoActionTypes.UpsertContactos: {
      return adapter.upsertMany(action.payload.contactos, state);
    }

    case ContactoActionTypes.UpdateContacto: {
      return adapter.updateOne(action.payload.contacto, state);
    }

    case ContactoActionTypes.UpdateContactos: {
      return adapter.updateMany(action.payload.contactos, state);
    }

    case ContactoActionTypes.DeleteContacto: {
      return adapter.removeOne(action.payload.id, state);
    }

    case ContactoActionTypes.DeleteContactos: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case ContactoActionTypes.LoadContactos: {
      return adapter.addAll(action.payload.contactos, state);
    }

    case ContactoActionTypes.ClearContactos: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
