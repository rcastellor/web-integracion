import { Injectable } from '@angular/core';
import { AplicacionesService } from './aplicaciones.service';
import { SectorAplicacion } from '../modelo/sector.model';

enum Estado {
  Produccion = 1,
  Pruebas = 2,
  Desplegado = 3,
  Previsto = 4,
  NoAplica = 5
}

class EstadoSectores {
  aplicacion: string;
  pre: Estado;
  central: Estado;
  prototipo: Estado;
  clinico: Estado;
  barbastro: Estado;
  servet: Estado;
  teruel: Estado;
  calatayud: Estado;
  alcaniz: Estado;
  huesca: Estado;
  royo: Estado;
  provincial: Estado;
}

@Injectable({
  providedIn: 'root'
})
export class MapaIntegracionService {

  constructor(private apsService: AplicacionesService) { }

  obtenAplicacionesPorSector(): EstadoSectores[] {

    return this.apsService.aplicaciones.map((app) => {
      const row = new EstadoSectores();
      row.aplicacion = app.datosGenerales.abreviatura;
      for (const sect of app.sectores) {
        switch (sect.sector) {
          case 'PREPRODUCCION':
            row.pre = this.obtenEstado(sect);
            break;
          case 'CENTRAL':
            row.central = this.obtenEstado(sect);
            break;
          case 'PROTOTIPO':
            row.prototipo = this.obtenEstado(sect);
            break;
          case 'CLINICO':
            row.clinico = this.obtenEstado(sect);
            break;
          case 'BARBASTRO':
            row.barbastro = this.obtenEstado(sect);
            break;
          case 'SERVET':
            row.servet = this.obtenEstado(sect);
            break;
          case 'TERUEL':
            row.teruel = this.obtenEstado(sect);
            break;
          case 'CALATAYUD':
            row.calatayud = this.obtenEstado(sect);
            break;
          case 'ALCAÑIZ':
            row.alcaniz = this.obtenEstado(sect);
            break;
          case 'HUESCA':
            row.huesca = this.obtenEstado(sect);
            break;
          case 'ROYO':
            row.royo = this.obtenEstado(sect);
            break;
          case 'PROVINCIAL':
            row.provincial = this.obtenEstado(sect);
            break;
        }
      }
      return row;
    });

  }
  private obtenEstado(sector: SectorAplicacion) {
    if (sector.produccion === true) {
      return Estado.Produccion;
    }
    if (sector.pruebas === true) {
      return Estado.Pruebas;
    }
    if (sector.desplegada === true) {
      return Estado.Desplegado;
    }
    if (sector.previsto === true) {
      return Estado.Previsto;
    }
    return Estado.NoAplica;
  }
}
