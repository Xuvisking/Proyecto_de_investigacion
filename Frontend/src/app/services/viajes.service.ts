import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { viaje } from '../models/viajes';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) {

   }
  /* ejemplo de service
   getBuscarPacienteAPI(id:string){//buscar paciente por rut
    return this.http.get(`${this.API_URI}/paciente/${id}`);//son backtick de jav `` alt+parentecis
  }
  */
  getViajesProyecto(id_proyecto:number){
    return this.http.get(`${this.API_URI}/viajes/${id_proyecto}`);
  }

  postViajeProyecto(viajes:viaje){
    return this.http.post(`${this.API_URI}/viajes/create`,viajes);
  }
  subirImagenes(formData){
    return this.http.post(`${this.API_URI}/viajes/multi/img`,formData);
  }
}
