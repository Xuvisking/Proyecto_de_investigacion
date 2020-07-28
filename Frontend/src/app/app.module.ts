import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module

import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';


//components
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { LoginComponent } from './Componentes/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ViajesComponent } from './Componentes/viajes/viajes.component';
import { ViajesFromComponent } from './Componentes/viajes-from/viajes-from.component';

//services
import { PresentacionesComponent } from './Componentes/presentaciones/presentaciones.component';
import { PresentacionesFormComponent } from './Componentes/presentaciones-form/presentaciones-form.component';
import { ReportesComponent } from './Componentes/reportes/reportes.component';
import { GrupoMiembrosEliminarComponent } from './Componentes/grupomiembroseliminar/grupomiembroseliminar.component';
import { GetionmiembrosComponent } from './Componentes/getionmiembros/getionmiembros.component';
import { GestionproyectoComponent } from './Componentes/gestionproyecto/gestionproyecto.component';
import { InvitacionComponent } from './Componentes/invitacion/invitacion.component';
import { ReunionesComponent } from './Componentes/reuniones/reuniones.component';
import { ProyectoComponent } from "./Componentes/proyecto/proyecto.component";
import { GenerarproyectoComponent } from './Componentes/generarproyecto/generarproyecto.component';
import { DocumentosComponent } from './Componentes/documentos/documentos.component';
import { DocumentosFormComponent } from './Componentes/documentos-form/documentos-form.component';
import { GrupoMiembroComponent } from './Componentes/gruposmiembros/grupomiembros.component';
import { GrupoEliminarComponent } from './Componentes/gruposeliminar/grupoeliminar.component'
import { GrupoListMiembrosComponent } from './Componentes/grupolistmiembros/grupolistmiembros.component'
import { GrupoCrearComponent } from './Componentes/grupos/grupocrear.component';
import { GrupoVerComponent } from './Componentes/grupover/grupover.component';
import { GruposComponent } from './Componentes/grupos-list/grupos.component';
import { GestionGruposComponent } from './Componentes/gestion-grupos/gestion-grupos.component';

//servicios
import { DocumentosService } from './services/documentos.service';
import { ViajesService } from './services/viajes.service';
import { PresentacionesService } from './services/presentaciones.service';
import { Gestionmiembros } from './services/gestionmiembros.service';
import { gestionproyectoservice } from './services/gestionproyecto.service';
import { ProyectoService } from './services/proyecto.service';
import {ReunionesService} from './services/reuniones.service';
import { ReunionFormComponent } from './Componentes/reunion-form/reunion-form.component';
import { HomeeComponent } from './Componentes/homee/homee.component'
import { GrupoCrearService } from './services/grupocrear.service';
import { GruposMiembrosService } from './services/gruposmiembros.service';
import { GruposService } from './services/grupos.service';
import { GrupoEliminarService } from './services/grupoeliminar.service';
import { GrupoVerService } from './services/grupover.service';
import { GrupoListMiembrosService } from './services/grupolistmiembros'; 
import { GrupoMiembrosEliminarService } from './services/grupomiembroseliminar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    HomeComponent,
    ViajesComponent,
    ViajesFromComponent,
    ReportesComponent,
    ProyectoComponent,
    PresentacionesComponent,
    PresentacionesFormComponent,
    ReportesComponent,
    GetionmiembrosComponent,
    ProyectoComponent,
    GestionproyectoComponent,
    InvitacionComponent,
    ReunionesComponent,
    ReunionFormComponent,
    GenerarproyectoComponent,
    DocumentosComponent,
    DocumentosFormComponent,
    HomeeComponent,
    GrupoMiembrosEliminarComponent,
    GrupoMiembroComponent,
    GrupoEliminarComponent,
    GrupoListMiembrosComponent,
    GrupoCrearComponent,
    GrupoVerComponent,
    GruposComponent,
    GestionGruposComponent  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [
    ViajesService,
    PresentacionesService,
    Gestionmiembros,
    gestionproyectoservice,
    ProyectoService,
    ReunionesService,
    DocumentosService,
    GrupoCrearService,
    GruposMiembrosService,
    GruposService,
    GrupoEliminarService,
    GrupoVerService,
    GrupoListMiembrosService,
    GrupoMiembrosEliminarService
  ],
    
  bootstrap: [AppComponent],
  
})
export class AppModule { }
