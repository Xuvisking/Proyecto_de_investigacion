import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { viaje, fotos_viaje, doc_viaje } from '../models/viajes';

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
  updateViaje(viaje:viaje){
    return this.http.put(`${this.API_URI}/viajes/update`,viaje);
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
  postDoc(doc:doc_viaje){
    return this.http.post(`${this.API_URI}/viaje/multi/doc/create`,doc);
  }
  getDocumentos(documento:string){
    return this.http.get(`${this.API_URI}/download/${documento}`);
  }
  getListadoDocumentos(id_viaje:string){
    return this.http.get(`${this.API_URI}/viaje/multi/doc/${id_viaje}`);
  }
  getImagenes(id_viaje:string){
    return this.http.get(`${this.API_URI}/viajes/multi/${id_viaje}`);
  }
  getUltimoViaje(id_proyecto:number):Observable<any>{
    return this.http.get(`${this.API_URI}/ultimo/viaje/:id_proyecto${id_proyecto}`);
  }
  deleteViaje(viaje_id:number){
    return this.http.delete(`${this.API_URI}/viajes/delete/${viaje_id}`);
  }

}
