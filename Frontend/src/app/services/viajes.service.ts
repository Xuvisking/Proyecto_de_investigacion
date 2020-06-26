import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { viaje, fotos_viaje } from '../models/viajes';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {

  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) {
   }
  
  getViajesProyecto(id_proyecto:number){
    return this.http.get(`${this.API_URI}/viajes/${id_proyecto}`);
  }
  getViajesID(id_viaje:number){
    return this.http.get(`${this.API_URI}/viaje/${id_viaje}`);
  }
  postViajeProyecto(viaje:viaje){
    return this.http.post(`${this.API_URI}/viajes/create`,viaje);
  }
  subirImagenes(formData){
    return this.http.post(`${this.API_URI}/viajes/multi/img`,formData);
  }
  subirDocumentos(formData){
    return this.http.post(`${this.API_URI}/viajes/multi/doc`,formData);
  }
  postImg(img:fotos_viaje){
    return this.http.post(`${this.API_URI}/viaje/multi/create`,img);
  }
  getDocumentos(documento:string){
    return this.http.get(`${this.API_URI}/download/${documento}`);
  }
  getUltimoViaje(id_proyecto:number):Observable<any>{
    return this.http.get(`${this.API_URI}/ultimo/viaje/:id_proyecto${id_proyecto}`);
  }

}
