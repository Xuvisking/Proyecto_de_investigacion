import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { LoginComponent } from './Componentes/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ViajesComponent } from './Componentes/viajes/viajes.component';
import { ViajesFromComponent } from './Componentes/viajes-from/viajes-from.component';
import { PresentacionesFormComponent } from './Componentes/presentaciones-form/presentaciones-form.component';
import { PresentacionesComponent } from './Componentes/presentaciones/presentaciones.component';
import { GetionmiembrosComponent } from './Componentes/getionmiembros/getionmiembros.component';
import { ProyectoComponent } from "./Componentes/proyecto/proyecto.component";
import { GestionproyectoComponent } from './Componentes/gestionproyecto/gestionproyecto.component';
import { InvitacionComponent } from './Componentes/invitacion/invitacion.component';
import { GenerarproyectoComponent } from './Componentes/generarproyecto/generarproyecto.component';
import { DocumentosComponent } from './Componentes/documentos/documentos.component';
import { DocumentosFormComponent } from './Componentes/documentos-form/documentos-form.component';

const routes: Routes = [
  { path:"",
    component: InicioComponent
  },
  {
    path:"login",
    component: LoginComponent
  },  
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"viajes",
    component: ViajesComponent
  },
  {
    path:"viajes/create",
    component:ViajesFromComponent
  },
  {
    path:"presentaciones/create",
    component:PresentacionesFormComponent
  },
  {
    path:"presentaciones",
    component:PresentacionesComponent
  },
  {
    path:"viajes/update/:id",
    component:ViajesFromComponent
  },
  {
    path:"presentaciones/update/:id",
    component:PresentacionesFormComponent
  },
  { path:"proyecto/miembros/gestion",
    component:GetionmiembrosComponent
  },
  {
    path:"proyecto",
    component:HomeComponent
  },
  {
    path:"proyecto/:id",
    component:ProyectoComponent
  },
  {
    path:"proyecto/gestion/:id",
    component:GestionproyectoComponent
  },
  {
    path:"usuario/invitacion",
    component:InvitacionComponent
  },
  {
    path:"proyecto/generar/proyectos",
    component:GenerarproyectoComponent
  },
  {
    path:"proyecto/documentos/crear",
    component:DocumentosFormComponent
  },
  {
    path:"proyecto/documentos/update/:id",
    component:DocumentosFormComponent
  },
  {
    path:"proyecto/documentos",
    component:DocumentosComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
