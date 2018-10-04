import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Contacto } from '../contactos/contacto.model';
import * as fromReducers from '../contactos/contacto.reducer';
import { State } from '../reducers';

@Component({
  selector: 'app-panel-estructura',
  templateUrl: './panel-estructura.component.html',
  styleUrls: ['./panel-estructura.component.css']
})
export class PanelEstructuraComponent implements OnInit {

  contactos$: Observable<Contacto[]>;

  constructor(private _store: Store<fromReducers.State>) { }

  ngOnInit() {
    this.contactos$ = this._store.pipe(select(fromReducers.selectAll));
  }

}
