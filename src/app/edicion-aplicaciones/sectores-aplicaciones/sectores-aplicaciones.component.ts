import { Component, OnInit } from '@angular/core';
import { AplicacionActivaService } from '../services/aplicacion-activa.service';

@Component({
  selector: 'app-sectores-aplicaciones',
  templateUrl: './sectores-aplicaciones.component.html',
  styleUrls: ['./sectores-aplicaciones.component.css']
})
export class SectoresAplicacionesComponent implements OnInit {

  sectores: {
    sector: string;
    produccion: boolean;
    pruebas: boolean;
    desplegada: boolean;
    previsto: boolean;
  }[];

  constructor(private aaService: AplicacionActivaService) {
  }

  ngOnInit() {
    this.sectores = this.aaService.aplicacion.sectores;
  }

}
