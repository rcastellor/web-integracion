import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Contacto } from './contacto.model';

export enum ContactoActionTypes {
  LoadContactos = '[Contacto] Load Contactos',
  AddContacto = '[Contacto] Add Contacto',
  UpsertContacto = '[Contacto] Upsert Contacto',
  AddContactos = '[Contacto] Add Contactos',
  UpsertContactos = '[Contacto] Upsert Contactos',
  UpdateContacto = '[Contacto] Update Contacto',
  UpdateContactos = '[Contacto] Update Contactos',
  DeleteContacto = '[Contacto] Delete Contacto',
  DeleteContactos = '[Contacto] Delete Contactos',
  ClearContactos = '[Contacto] Clear Contactos'
}

export class LoadContactos implements Action {
  readonly type = ContactoActionTypes.LoadContactos;

  constructor(public payload: { contactos: Contacto[] }) {}
}

export class AddContacto implements Action {
  readonly type = ContactoActionTypes.AddContacto;

  constructor(public payload: { contacto: Contacto }) {}
}

export class UpsertContacto implements Action {
  readonly type = ContactoActionTypes.UpsertContacto;

  constructor(public payload: { contacto: Contacto }) {}
}

export class AddContactos implements Action {
  readonly type = ContactoActionTypes.AddContactos;

  constructor(public payload: { contactos: Contacto[] }) {}
}

export class UpsertContactos implements Action {
  readonly type = ContactoActionTypes.UpsertContactos;

  constructor(public payload: { contactos: Contacto[] }) {}
}

export class UpdateContacto implements Action {
  readonly type = ContactoActionTypes.UpdateContacto;

  constructor(public payload: { contacto: Update<Contacto> }) {}
}

export class UpdateContactos implements Action {
  readonly type = ContactoActionTypes.UpdateContactos;

  constructor(public payload: { contactos: Update<Contacto>[] }) {}
}

export class DeleteContacto implements Action {
  readonly type = ContactoActionTypes.DeleteContacto;

  constructor(public payload: { id: string }) {}
}

export class DeleteContactos implements Action {
  readonly type = ContactoActionTypes.DeleteContactos;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearContactos implements Action {
  readonly type = ContactoActionTypes.ClearContactos;
}

export type ContactoActions =
 LoadContactos
 | AddContacto
 | UpsertContacto
 | AddContactos
 | UpsertContactos
 | UpdateContacto
 | UpdateContactos
 | DeleteContacto
 | DeleteContactos
 | ClearContactos;
