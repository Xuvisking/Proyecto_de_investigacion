import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { LoginComponent } from './Componentes/login/login.component';
import { HomeComponent } from './Componentes/home/home.component';


import { ViajesComponent } from './Componentes/viajes/viajes.component';
import { ViajesFromComponent } from './Componentes/viajes-from/viajes-from.component';
<<<<<<< HEAD
import { PresentacionesComponent } from './Componentes/presentaciones/presentaciones.component';
import { PresentacionesFormComponent } from './Componentes/presentaciones-form/presentaciones-form.component';
=======
import { ReportesComponent } from './Componentes/reportes/reportes.component';

<<<<<<< HEAD
//servicios
=======
>>>>>>> c54e2c49dff5931334ad14a7493aa51fd2e5a020
//services
>>>>>>> c9dee85ef48a3dfa3729f3aa48b78c36931f3027
import { ViajesService } from './services/viajes.service';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    HomeComponent,
    ViajesComponent,
    ViajesFromComponent,
<<<<<<< HEAD
    PresentacionesComponent,
    PresentacionesFormComponent
=======
    ReportesComponent
>>>>>>> c54e2c49dff5931334ad14a7493aa51fd2e5a020
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ViajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
