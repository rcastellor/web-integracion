import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EdicionAplicacionesComponent } from './edicion-aplicaciones/edicion-aplicaciones.component';
import { DatosBasicosAplicacionesComponent } from './edicion-aplicaciones/datos-basicos-aplicaciones/datos-basicos-aplicaciones.component';
import { SectoresAplicacionesComponent } from './edicion-aplicaciones/sectores-aplicaciones/sectores-aplicaciones.component';
import {
  PanelRelacionadosComponent
} from './edicion-aplicaciones/panel-relacionados/panel-relacionados.component';
import {
  PeticionesSincronasAplicacionesComponent
} from './edicion-aplicaciones/panel-relacionados/peticiones-sincronas-aplicaciones/peticiones-sincronas-aplicaciones.component';
import {
  NotificacionesAplicacionesComponent
} from './edicion-aplicaciones/panel-relacionados/notificaciones-aplicaciones/notificaciones-aplicaciones.component';
import {
  BroadcastAplicacionesComponent
} from './edicion-aplicaciones/panel-relacionados/broadcast-aplicaciones/broadcast-aplicaciones.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import {
  ServiciosSincronosAplicacionesComponent
} from './edicion-aplicaciones/panel-relacionados/servicios-sincronos-aplicaciones/servicios-sincronos-aplicaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    EdicionAplicacionesComponent,
    DatosBasicosAplicacionesComponent,
    SectoresAplicacionesComponent,
    PanelRelacionadosComponent,
    PeticionesSincronasAplicacionesComponent,
    NotificacionesAplicacionesComponent,
    BroadcastAplicacionesComponent,
    ServiciosSincronosAplicacionesComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    ClrFormsNextModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
