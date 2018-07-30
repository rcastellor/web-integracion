import { Component, OnInit } from '@angular/core';
import { AplicacionActivaService } from '../services/aplicacion-activa.service';

@Component({
  selector: 'app-datos-basicos-aplicaciones',
  templateUrl: './datos-basicos-aplicaciones.component.html',
  styleUrls: ['./datos-basicos-aplicaciones.component.css']
})
export class DatosBasicosAplicacionesComponent implements OnInit {

  datos;

  constructor(private aaService: AplicacionActivaService) { }

  ngOnInit() {
    this.datos = this.aaService.aplicacion.datosGenerales;
  }

}
