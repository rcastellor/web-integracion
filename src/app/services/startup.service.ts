import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';

import { State } from '../reducers';
import { Contacto } from '../contactos/contacto.model';
import { LoadContactos } from '../contactos/contacto.actions';
@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(private _http: HttpClient,
              private _store: Store<State>) { }


  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._http.get<{_embedded: {contactos: Contacto[]}}>('http://localhost:8080/contactos')
          .subscribe(contactos => {
            this._store.dispatch(new LoadContactos({contactos: contactos._embedded.contactos}));
            resolve(true);
          });
    });
  }
}
