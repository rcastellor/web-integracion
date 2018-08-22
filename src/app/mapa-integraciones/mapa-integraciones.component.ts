import { Component, OnInit } from '@angular/core';
import { MapaIntegracionService } from '../services/mapa-integracion.service';

@Component({
  selector: 'app-mapa-integraciones',
  templateUrl: './mapa-integraciones.component.html',
  styleUrls: ['./mapa-integraciones.component.css']
})
export class MapaIntegracionesComponent implements OnInit {

  aplicaciones = [];

  constructor(private mapaService: MapaIntegracionService) { }

  ngOnInit() {
    this.aplicaciones = this.mapaService.obtenAplicacionesPorSector();
  }

}
