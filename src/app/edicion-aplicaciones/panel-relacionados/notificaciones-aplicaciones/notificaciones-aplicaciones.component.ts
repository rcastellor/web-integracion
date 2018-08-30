import { Component, OnInit } from '@angular/core';
import { AplicacionActivaService } from '../../services/aplicacion-activa.service';

@Component({
  selector: 'app-notificaciones-aplicaciones',
  templateUrl: './notificaciones-aplicaciones.component.html',
  styleUrls: ['./notificaciones-aplicaciones.component.css']
})
export class NotificacionesAplicacionesComponent implements OnInit {

  nuevoMensaje: false;

  mensaje = {
    mensaje: '',
    formato: '',
    version: '',
    emisor: ''
  };

  mensajes: {
    mensaje: string;
    formato: string;
    version: string;
    emisor: string;
  }[];

  constructor(private aaService: AplicacionActivaService) {
  }

  onCancel() {
    this.nuevoMensaje = false;
    this.mensaje.mensaje = '';
    this.mensaje.formato = '';
    this.mensaje.version = '';
    this.mensaje.emisor = '';
  }

  onSave() {
    this.mensajes.push({...this.mensaje});
    this.nuevoMensaje = false;
    this.mensaje.mensaje = '';
    this.mensaje.formato = '';
    this.mensaje.version = '';
    this.mensaje.emisor = '';
  }

  ngOnInit() {
    this.mensajes = this.aaService.aplicacion.notificaciones;
  }

  onEliminar(index: number) {
    this.mensajes.splice(index, 1);
  }

}
