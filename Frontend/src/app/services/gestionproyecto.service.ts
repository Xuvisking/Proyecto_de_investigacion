import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { cambionombre } from '../models/cambionombre'
import { cambiodescripcion } from '../models/cambiodescripcion'
import { cambioestado } from '../models/cambioestado'

@Injectable({
  providedIn: 'root'
})
export class gestionproyectoservice {

  API_URI = 'http://localhost:3000';

  constructor(private http:HttpClient) {
  }

  CambiarNombre(cambio2 : cambionombre){
    console.log(cambio2);
    return this.http.post(`${this.API_URI}/proyectos/nombre/cambiar`, cambio2);
  }
  CambiarDescripcion(cambio : cambiodescripcion){
    return this.http.post(`${this.API_URI}/proyectos/descripcion/cambiar`,cambio);
  }
  CambiarEstado(cambio : cambioestado){
    return this.http.post(`${this.API_URI}/proyectos/estado/cambiar`,cambio);
  }

  DeleteProyecto(id : number){
    return this.http.get(`${this.API_URI}/proyectos/eliminar/${id}`);
  }
  
}
