import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Contacto } from '../contactos/contacto.model';
import * as fromReducers from '../contactos/contacto.reducer';
import { State, selectAllContactos} from '../reducers';
import { DeleteContacto } from '../contactos/contacto.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel-estructura',
  templateUrl: './panel-estructura.component.html',
  styleUrls: ['./panel-estructura.component.css']
})
export class PanelEstructuraComponent implements OnInit {

  contactos$: Observable<Contacto[]>;

  constructor(private _store: Store<State>,
              private _router: Router) { }

  ngOnInit() {
    this.contactos$ = this._store.pipe(select(selectAllContactos));
  }

  onEliminarContacto(contacto: Contacto) {
    this._store.dispatch(new DeleteContacto({id: contacto.id}));
  }

  onEditarContacto(contacto: Contacto) {
    this._router.navigate(['/admin', 'contactos', contacto.id]);
  }
}
