import { Component, OnInit } from '@angular/core';
import { AplicacionActivaService } from '../../services/aplicacion-activa.service';

@Component({
  selector: 'app-broadcast-aplicaciones',
  templateUrl: './broadcast-aplicaciones.component.html',
  styleUrls: ['./broadcast-aplicaciones.component.css']
})
export class BroadcastAplicacionesComponent implements OnInit {

  nuevoMensaje: false;

  mensaje = {
    mensaje: '',
    formato: '',
    version: ''
  };

  mensajes: {
    mensaje: string;
    formato: string;
    version: string;
  }[];

  constructor(private aaService: AplicacionActivaService) {
  }

  onCancel() {
    this.nuevoMensaje = false;
    this.mensaje.mensaje = '';
    this.mensaje.formato = '';
    this.mensaje.version = '';
  }

  onSave() {
    this.mensajes.push({...this.mensaje});
    this.nuevoMensaje = false;
    this.mensaje.mensaje = '';
    this.mensaje.formato = '';
    this.mensaje.version = '';
  }

  ngOnInit() {
    this.mensajes = this.aaService.aplicacion.panelRelacionados.broadcast;
  }

}
