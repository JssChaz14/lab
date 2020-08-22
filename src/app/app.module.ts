import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AsistenciaComponent } from './components/laboratorio/asistencia/asistencia.component';
import { RegistroComponent } from './components/laboratorio/registro/registro.component';
import { InvetarioComponent } from './components/laboratorio/invetario/invetario.component';
import { HorarioComponent } from './components/laboratorio/horario/horario.component';
import { AgendarComponent } from './components/laboratorio/agendar/agendar.component';
import { EnlacesComponent } from './components/opciones/enlaces/enlaces.component';
import { AgregarComponent } from './components/practicas/agregar/agregar.component';
import { ConsultarComponent } from './components/practicas/consultar/consultar.component';
import { ModificarComponent } from './components/practicas/modificar/modificar.component';
import { EliminarComponent } from './components/practicas/eliminar/eliminar.component';
import { ListaComponent } from './components/alumnos/lista/lista.component';
import { ActividadesComponent } from './components/laboratorista/actividades/actividades.component';
import { CrearActividadComponent } from './components/laboratorista/crear-actividad/crear-actividad.component';
import { ModificarActividadComponent } from './components/laboratorista/modificar-actividad/modificar-actividad.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './components/shared/home/home.component';
import { MaestrosComponent } from './components/maestros/maestros/maestros.component'

@NgModule({
  declarations: [
    AppComponent,
    AsistenciaComponent,
    RegistroComponent,
    InvetarioComponent,
    HorarioComponent,
    AgendarComponent,
    EnlacesComponent,
    AgregarComponent,
    ConsultarComponent,
    ModificarComponent,
    EliminarComponent,
    ListaComponent,
    ActividadesComponent,
    CrearActividadComponent,
    ModificarActividadComponent,
    HomeComponent,
    MaestrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
