import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AddContacto, UpdateContacto } from '../../contacto.actions';
import { Contacto } from '../../contacto.model';
import * as fromContacto from '../../contacto.reducer';

@Component({
  selector: 'app-formulario-contactos',
  templateUrl: './formulario-contactos.component.html',
  styleUrls: ['./formulario-contactos.component.css']
})
export class FormularioContactosComponent implements OnInit {

  id: number;

  private _subscription: Subscription;

  contactoForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _store: Store<any>,
              private _route: ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._route.params.subscribe(params => {
      if (params['id']) {
        this.id = Number(params['id']);
        this._store.select(s => s.contactos[this.id]).
      } else {
        this.id = -1;
        this.contactoForm = this._formBuilder.group({
          nombre: new FormControl(''),
          apellidos: new FormControl(''),
          emails: this._formBuilder.array([this._formBuilder.control('')]),
          telefonos: this._formBuilder.array([this._formBuilder.group({telefono: '', tipo: ''})]),
          areas: this._formBuilder.array([this._formBuilder.control('')]),
          empresa: new FormControl(''),
          ubicacion: new FormControl(''),
          notas: new FormControl('')
        });
      }
    });
  }

  get emails() {
    return this.contactoForm.get('emails') as FormArray;
  }

  get telefonos() {
    return this.contactoForm.get('telefonos') as FormArray;
  }

  get areas() {
    return this.contactoForm.get('areas') as FormArray;
  }


  nuevoMail(): void {
    this.emails.push(this._formBuilder.control(''));
  }

  nuevoTelefono(): void {
    this.telefonos.push(this._formBuilder.group({telefono: '', tipo: ''}));
  }

  nuevoArea(): void {
    this.areas.push(this._formBuilder.control(''));
  }

  eliminaTelefono(index): void {
    this.telefonos.removeAt(index);
  }

  onSubmit() {
    if (this.id !== -1) {
      this._store.dispatch(new AddContacto({contacto: contacto}));
    } else {
      let contacto: Contacto;
      contacto = {id: this.id, ...this.contactoForm.value};
      this._store.dispatch(new UpdateContacto({contacto: contacto}));
    }
  }
}
