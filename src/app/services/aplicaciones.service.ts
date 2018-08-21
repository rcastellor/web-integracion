import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ListaAplicacion } from '../modelo/aplicaciones.model';

@Injectable({
  providedIn: 'root'
})
export class AplicacionesService {

  constructor() { }

  obtenAplicaciones(): Observable<ListaAplicacion[]> {
    return of([
      {
        id: 1,
        abreviatura: 'HIS',
        aplicacion: 'Sistema Información Hospitalaria'
      }, {
        id: 2,
        abreviatura: 'BDU',
        aplicacion: 'Base de datos de usuarios'
      }, {
        id: 3,
        abreviatura: 'EMPI',
        aplicacion: 'Base de datos de usuarios'
      }, {
        id: 4,
        abreviatura: 'RIS',
        aplicacion: 'Sistema Radiología'
      }, {
        id: 5,
        abreviatura: 'HCE',
        aplicacion: 'Historia clinica electronica'
      }, {
        id: 6,
        abreviatura: 'PACS',
        aplicacion: 'Repositorio imagen clinica'
      }, {
        id: 7,
        abreviatura: 'MODULAB',
        aplicacion: 'Base de datos de usuarios'
      }]);
  }
}
