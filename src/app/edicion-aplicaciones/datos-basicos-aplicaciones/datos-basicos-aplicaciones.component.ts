import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AplicacionActivaService } from '../services/aplicacion-activa.service';
import { AplicacionesService } from '../../services/aplicaciones.service';
import { Aplicacion } from '../../modelo/aplicaciones.model';



@Component({
  selector: 'app-datos-basicos-aplicaciones',
  templateUrl: './datos-basicos-aplicaciones.component.html',
  styleUrls: ['./datos-basicos-aplicaciones.component.css']
})
export class DatosBasicosAplicacionesComponent implements OnInit {

  edicion = false;
  datos;

  constructor(private aaService: AplicacionActivaService,
              private _apsService: AplicacionesService,
              private _router: Router,
              private _http: HttpClient) { }

  ngOnInit() {
    this.datos = this.aaService.aplicacion.datosGenerales;
    if (this.aaService.aplicacion.id) {
      this.edicion = true;
    }
  }

  onGrabarAplicacion() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    this._http.post<Aplicacion>('http://localhost:8080/aplicaciones', this.aaService.aplicacion, httpOptions)
      .subscribe(aplicacion => {
        this.aaService.aplicacion = aplicacion;
          this._apsService.añadirAplicacion(this.aaService.aplicacion);
        this._router.navigate(['/admin', 'panel']);
      });
  }
}
