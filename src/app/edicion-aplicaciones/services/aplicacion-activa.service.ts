import { Injectable } from '@angular/core';
import { Aplicacion } from '../../modelo/aplicaciones.model';
import { AplicacionesService } from '../../services/aplicaciones.service';

@Injectable({
  providedIn: 'root'
})
export class AplicacionActivaService {
  aplicacion: Aplicacion;

  constructor(private _apsService: AplicacionesService) {
  }

  reset() {
    this.aplicacion = {
      datosGenerales: {
        aplicacion: '',
        abreviatura: '',
        descripcion: ''
      },
      sectores: [
        { sector: 'PREPRODUCCION', produccion: false, pruebas: false, desplegada: false, previsto: false },
        { sector: 'CENTRAL', produccion: false, pruebas: false, desplegada: false, previsto: false },
        { sector: 'PROTOTIPO', produccion: false, pruebas: false, desplegada: false, previsto: false },
        { sector: 'CLINICO', produccion: false, pruebas: false, desplegada: false, previsto: false },
        { sector: 'BARBASTRO', produccion: false, pruebas: false, desplegada: false, previsto: false },
        { sector: 'SERVET', produccion: false, pruebas: false, desplegada: false, previsto: false },
        { sector: 'TERUEL', produccion: false, pruebas: false, desplegada: false, previsto: false },
        { sector: 'CALATAYUD', produccion: false, pruebas: false, desplegada: false, previsto: false },
        { sector: 'ALCAÑIZ', produccion: false, pruebas: false, desplegada: false, previsto: false },
        { sector: 'HUESCA', produccion: false, pruebas: false, desplegada: false, previsto: false },
        { sector: 'ROYO', produccion: false, pruebas: false, desplegada: false, previsto: false },
        { sector: 'PROVINCIAL', produccion: false, pruebas: false, desplegada: false, previsto: false }
      ],
      notificaciones: [],
      broadcast: [],
      peticiones: [],
      servicios: []
    };
  }

  load(id: number) {
    this.aplicacion = this._apsService.obtenAplicacion(id);
  }
}
