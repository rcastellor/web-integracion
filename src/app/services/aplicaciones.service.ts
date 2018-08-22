import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListaAplicacion, Aplicacion } from '../modelo/aplicaciones.model';

@Injectable({
  providedIn: 'root'
})
export class AplicacionesService {

  identificador = 0;

  aplicaciones: Aplicacion[] = [];


  constructor() { }

  añadirAplicacion(aplicacion: Aplicacion) {
    aplicacion.id = ++this.identificador;
    this.aplicaciones.push(aplicacion);
  }

  borrarAplicacion(id: number) {
    for (let i = 0; i < this.aplicaciones.length; i++) {
      if (this.aplicaciones[i].id === id) {
        this.aplicaciones.splice(i, 1);
        return;
      }
    }
  }

  obtenAplicacion(id: number): Aplicacion {
    console.log(this.aplicaciones);
    for (const app of this.aplicaciones) {
      if (app.id === id) {
        return app;
      }
    }
    return null;
  }

  obtenAplicaciones(): Observable<ListaAplicacion[]> {
    const lista = this.aplicaciones.map((app: Aplicacion) => {
      return {id: app.id, abreviatura: app.datosGenerales.abreviatura, aplicacion: app.datosGenerales.descripcion};
    });
    return of(lista);
  }
}
