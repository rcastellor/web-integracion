import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AplicacionActivaService } from './services/aplicacion-activa.service';


@Component({
  selector: 'app-edicion-aplicaciones',
  templateUrl: './edicion-aplicaciones.component.html',
  styleUrls: ['./edicion-aplicaciones.component.css']
})
export class EdicionAplicacionesComponent implements OnInit {

  constructor(private _aaService: AplicacionActivaService,
              private _aRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this._aRoute.params['id']) {
      this._aaService.reset();
    }
    this._aRoute.params.subscribe( (params) => {
      if (params['id']) {
        this._aaService.load(Number(params['id']));
      }
    });
  }

}
