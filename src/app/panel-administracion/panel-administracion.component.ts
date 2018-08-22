import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AplicacionesService } from '../services/aplicaciones.service';
import { ListaAplicacion } from '../modelo/aplicaciones.model';


@Component({
  selector: 'app-panel-administracion',
  templateUrl: './panel-administracion.component.html',
  styleUrls: ['./panel-administracion.component.css']
})
export class PanelAdministracionComponent implements OnInit {

  aplicaciones: ListaAplicacion[];

  constructor( private _appService: AplicacionesService,
              private _router: Router) { }

  ngOnInit() {
    this._appService.obtenAplicaciones().subscribe( aplicaciones => this.aplicaciones = aplicaciones);
  }

  onEliminarAplicacion(aplicacion) {
    this._appService.borrarAplicacion(aplicacion.id);
    for (let i = 0; i < this.aplicaciones.length; i++) {
      if (this.aplicaciones[i].id === aplicacion.id) {
        this.aplicaciones.splice(i, 1);
        return;
      }
    }
  }
  onEditarAplicacion(aplicacion: ListaAplicacion) {
    this._router.navigate(['/admin', 'aplicaciones', aplicacion.id]);
  }
}
