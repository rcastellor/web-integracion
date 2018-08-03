import { Component, OnInit } from '@angular/core';
import { AplicacionActivaService } from './services/aplicacion-activa.service';

@Component({
  selector: 'app-edicion-aplicaciones',
  templateUrl: './edicion-aplicaciones.component.html',
  styleUrls: ['./edicion-aplicaciones.component.css']
})
export class EdicionAplicacionesComponent implements OnInit {

  constructor(private aaService: AplicacionActivaService) { }

  ngOnInit() {
    this.aaService.load();
  }

}
