import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddContacto } from '../../contacto.actions';

@Component({
  selector: 'app-formulario-contactos',
  templateUrl: './formulario-contactos.component.html',
  styleUrls: ['./formulario-contactos.component.css']
})
export class FormularioContactosComponent implements OnInit {


  contactoForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _store: Store<any>) { }

  ngOnInit() {
    this.contactoForm = this._formBuilder.group({
        nombre: new FormControl(''),
        apellidos: new FormControl(''),
        emails: this._formBuilder.array([this._formBuilder.control('')]),
        telefonos: this._formBuilder.array([this._formBuilder.control('')]),
        areas: this._formBuilder.array([this._formBuilder.control('')]),
        empresa: new FormControl('')
      }
    );
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
    this.telefonos.push(this._formBuilder.control(''));
  }

  nuevoArea(): void {
    this.areas.push(this._formBuilder.control(''));
  }

  onSubmit() {
    let id = {id: '1', ...this.contactoForm.value};
    console.log(id);
    this._store.dispatch(new AddContacto(id));
  }
}
