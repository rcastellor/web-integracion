import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  opciones: {opcion: string, ruta: string}[];
  hide = true;
  @Output() visible = new EventEmitter<boolean>();

  admin = [
    {opcion: 'Aplicaciones', ruta: '/admin/aplicaciones'},
    {opcion: 'Estructura', ruta: '/admin/estructura'}
  ];

  monitorizacion = [
    {opcion: 'Dashboard', ruta: '/dashboard'}
  ];

  constructor(private _route: ActivatedRoute,
              private _router: Router) {
    this._router.events.subscribe( (event: Event) => {
      if ( event instanceof NavigationEnd ) {
        if (event.urlAfterRedirects.indexOf('/admin') !== -1) {
          this.opciones = this.admin;
        } else if (event.urlAfterRedirects.indexOf('/dashboard') !== -1) {
          this.opciones = this.monitorizacion;
        }
      }
    });
   }

  onHide() {
    this.visible.emit(!this.hide);
    this.hide = !this.hide;
  }

  ngOnInit() {
  }

}
