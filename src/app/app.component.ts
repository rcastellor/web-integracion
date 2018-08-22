import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible = false;
  title = 'app';

  sectores = [
    {
      sector: 'Desarrollo',
      apartados: [
        {nombre: 'Balanceador', ruta: 'ruta'},
        {nombre: 'psisid006', ruta: 'ruta'}
      ]
    }, {
      sector: 'Prototipo',
      apartados: [
        {nombre: 'Balanceador', ruta: 'ruta'},
        {nombre: 'psisip100', ruta: 'ruta'},
        {nombre: 'psisip101', ruta: 'ruta'},
        {nombre: 'psisip102', ruta: 'ruta'}
      ]
    }, {
      sector: 'Clínico',
      apartados: [
        {nombre: 'Balanceador', ruta: 'ruta'},
        {nombre: 'mol-rhapsody-201', ruta: 'ruta'},
        {nombre: 'mov-rhapsody-202', ruta: 'ruta'}
      ]
    },
  ];
}
