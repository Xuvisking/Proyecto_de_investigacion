import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
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
}
