import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { LoginComponent } from './Componentes/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';
import { ViajesComponent } from './Componentes/viajes/viajes.component';
import { ViajesFromComponent } from './Componentes/viajes-from/viajes-from.component';

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
    component: ViajesFromComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
