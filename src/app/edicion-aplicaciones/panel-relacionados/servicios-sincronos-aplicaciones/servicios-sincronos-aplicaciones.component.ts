import { Component, OnInit } from '@angular/core';
import { AplicacionActivaService } from '../../services/aplicacion-activa.service';
import { ServicioSicrono } from '../../../modelo/servicio.model';

@Component({
  selector: 'app-servicios-sincronos-aplicaciones',
  templateUrl: './servicios-sincronos-aplicaciones.component.html',
  styleUrls: ['./servicios-sincronos-aplicaciones.component.css']
})
export class ServiciosSincronosAplicacionesComponent implements OnInit {

  nuevoServicio = false;

  servicio = new ServicioSicrono();

  servicios: ServicioSicrono[];

  constructor(private aaService: AplicacionActivaService) {
    // this.servicios = [];
    // this.servicios.push(
    //  {servicio: 'Consulta Demograficos HIS', peticion: 'QBP_Q21', respuesta: 'RSP_K21', formato: 'HL7', version: '2.5'});
    // this.servicios.push({servicio: 'Consulta Episodios HIS', peticion: 'QBP_Q21', respuesta: 'RSP_K21', formato: 'HL7', version: '2.5'});
  }

  ngOnInit() {
    this.servicios = this.aaService.aplicacion.panelRelacionados.servicios;
  }

  onCancel() {
    this.nuevoServicio = false;
    this.servicio.servicio = '';
    this.servicio.formato = '';
    this.servicio.peticion = '';
    this.servicio.respuesta = '';
    this.servicio.version = '';
    this.servicio.aplicacion = '';
  }

  onSave() {
    this.servicios.push({...this.servicio});
    this.nuevoServicio = false;
    this.servicio.servicio = '';
    this.servicio.formato = '';
    this.servicio.peticion = '';
    this.servicio.respuesta = '';
    this.servicio.version = '';
    this.servicio.aplicacion = '';
  }

  onEliminar(index: number) {
    this.servicios.splice(index, 1);
  }

}
