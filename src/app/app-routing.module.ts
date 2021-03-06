import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EdicionAplicacionesComponent } from './edicion-aplicaciones/edicion-aplicaciones.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PanelAdministracionComponent } from './panel-administracion/panel-administracion.component';
import { MapaIntegracionesComponent } from './mapa-integraciones/mapa-integraciones.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'mapa', component: MapaIntegracionesComponent},
  {path: 'admin', children: [
    {path: '', redirectTo: 'panel', pathMatch: 'full' },
    {path: 'panel', component: PanelAdministracionComponent },
    {path: 'aplicaciones', component: EdicionAplicacionesComponent },
    {path: 'aplicaciones/:id', component: EdicionAplicacionesComponent }
  ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
