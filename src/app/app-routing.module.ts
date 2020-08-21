import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsistenciaComponent } from './components/laboratorio/asistencia/asistencia.component';
import { CrearActividadComponent } from './components/laboratorista/crear-actividad/crear-actividad.component';
import { ActividadesComponent } from './components/laboratorista/actividades/actividades.component';
import { HomeComponent } from './components/shared/home/home.component';


const routes: Routes = [
  { path: '',   redirectTo: 'home', pathMatch: 'full' },

  // HOME
  { path: 'home', component: HomeComponent},

  // Laboratorio
  { path: 'asistencias', component: AsistenciaComponent },

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

