import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AplicacionActivaService } from '../services/aplicacion-activa.service';
import { AplicacionesService } from '../../services/aplicaciones.service';


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
              private _router: Router) { }

  ngOnInit() {
    this.datos = this.aaService.aplicacion.datosGenerales;
    if (this.aaService.aplicacion.id) {
      this.edicion = true;
    }
  }

  onGrabarAplicacion() {
    if (this.edicion === false) {
      this._apsService.añadirAplicacion(this.aaService.aplicacion);
    }
    this._router.navigate(['/admin', 'panel']);
  }
}
