import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/shared/home/home.component';

import { RegistroComponent } from './components/laboratorio/registro/registro.component';
import { AsistenciaComponent } from './components/laboratorio/asistencia/asistencia.component';

import { CrearActividadComponent } from './components/laboratorista/crear-actividad/crear-actividad.component';
import { ActividadesComponent } from './components/laboratorista/actividades/actividades.component';
import { MaestrosComponent } from './components/maestros/maestros/maestros.component';


const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },

  // HOME
  { path: 'home', component: HomeComponent},

  // Laboratorio
  { path: 'asistencias', component: AsistenciaComponent },
  { path: 'asistencia-registro', component: RegistroComponent },

  // Maestros
  { path: 'maestros', component: MaestrosComponent },

  // Laboratorista
  { path: 'actividades', component: ActividadesComponent },
  { path: 'actividades-crear', component: CrearActividadComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

