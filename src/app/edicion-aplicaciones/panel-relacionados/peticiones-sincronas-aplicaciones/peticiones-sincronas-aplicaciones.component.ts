import { Component, OnInit } from '@angular/core';
import { AplicacionActivaService } from '../../services/aplicacion-activa.service';

@Component({
  selector: 'app-peticiones-sincronas-aplicaciones',
  templateUrl: './peticiones-sincronas-aplicaciones.component.html',
  styleUrls: ['./peticiones-sincronas-aplicaciones.component.css']
})
export class PeticionesSincronasAplicacionesComponent implements OnInit {

  nuevoServicio = false;

  servicio = {
    servicio: '',
    peticion: '',
    respuesta: '',
    formato: '',
    version: ''
  };

  servicios: {
    servicio: string;
    peticion: string;
    respuesta: string;
    formato: string;
    version: string;
  }[];

  constructor(private aaService: AplicacionActivaService) {
    // this.servicios = [];
    // this.servicios.push(
    //  {servicio: 'Consulta Demograficos HIS', peticion: 'QBP_Q21', respuesta: 'RSP_K21', formato: 'HL7', version: '2.5'});
    // this.servicios.push({servicio: 'Consulta Episodios HIS', peticion: 'QBP_Q21', respuesta: 'RSP_K21', formato: 'HL7', version: '2.5'});
  }

  ngOnInit() {
    this.servicios = this.aaService.aplicacion.panelRelacionados.peticiones;
  }

  onCancel() {
    this.nuevoServicio = false;
    this.servicio.servicio = '';
    this.servicio.formato = '';
    this.servicio.peticion = '';
    this.servicio.respuesta = '';
    this.servicio.version = '';
  }

  onSave() {
    this.servicios.push({...this.servicio});
    this.nuevoServicio = false;
    this.servicio.servicio = '';
    this.servicio.formato = '';
    this.servicio.peticion = '';
    this.servicio.respuesta = '';
    this.servicio.version = '';
  }
}
