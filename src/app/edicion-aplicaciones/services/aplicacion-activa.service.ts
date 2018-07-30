import { Injectable } from '@angular/core';
import { SectorAplicacion } from '../../modelo/sector.model';

@Injectable({
  providedIn: 'root'
})
export class AplicacionActivaService {
  aplicacion: {
    datosGenerales: {
      aplicacion: string;
      abreviatura: string;
      descripcion: string;
    };
    sectores: SectorAplicacion[];
    panelRelacionados: {
      notificaciones: any[];
      broadcast: any[];
      peticiones: any[];
      servicios: any[];
    }
  };

  constructor() {
    this.load();
  }

  load() {
    this.aplicacion = {
      datosGenerales: {
        aplicacion: 'Sistema Información Hospitalaria',
        abreviatura: 'HIS',
        descripcion: 'Sistema de información hospitalaria corporativo del proveedor HP'
      },
      sectores: [
        { sector: 'PREPRODUCCION', produccion: false, pruebas: false, desplegada: true, previsto: true },
        { sector: 'CENTRAL', produccion: false, pruebas: false, desplegada: true, previsto: true },
        { sector: 'PROTOTIPO', produccion: false, pruebas: false, desplegada: true, previsto: true },
        { sector: 'CLINICO', produccion: true, pruebas: false, desplegada: true, previsto: true },
        { sector: 'BARBASTRO', produccion: true, pruebas: false, desplegada: true, previsto: true },
        { sector: 'SERVET', produccion: true, pruebas: false, desplegada: true, previsto: true },
        { sector: 'TERUEL', produccion: true, pruebas: false, desplegada: true, previsto: true },
        { sector: 'CALATAYUD', produccion: true, pruebas: false, desplegada: true, previsto: true },
        { sector: 'ALCAÑIZ', produccion: true, pruebas: false, desplegada: true, previsto: true },
        { sector: 'HUESCA', produccion: true, pruebas: false, desplegada: true, previsto: true },
        { sector: 'ROYO', produccion: true, pruebas: false, desplegada: true, previsto: true },
        { sector: 'PROVINCIAL', produccion: true, pruebas: false, desplegada: true, previsto: true }
      ],
      panelRelacionados: {
        notificaciones: [],
        broadcast: [],
        peticiones: [],
        servicios: []
      }
    };
  }
}
