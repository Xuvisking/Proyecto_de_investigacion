import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { presentacion, Doc_presentacion } from '../models/presentaciones';

@Injectable({
  providedIn: 'root'
})
export class PresentacionesService {

  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) {
   }
  getPresentacion(id_presentacion:number){
    return this.http.get(`${this.API_URI}/presentacion/${id_presentacion}`);
  }
  getPresentacionesProyecto(id_proyecto:number){
    return this.http.get(`${this.API_URI}/presentaciones/${id_proyecto}`);
  }
  subirDocumentos(formData){
    return this.http.post(`${this.API_URI}/presentaciones/doc`,formData);
  }
  postDoc(doc:Doc_presentacion){
    return this.http.post(`${this.API_URI}/presentaciones/multi/create`,doc);
  }
  postPresentacion(presenta:presentacion){
    return this.http.post(`${this.API_URI}/presentaciones/create`,presenta);
  }
  getDocumentos(presentacion_id:number){
    return this.http.get(`${this.API_URI}/presentaciones/documentos/${presentacion_id}`);
  }
  deletePresentacion(Presentacion_ID:number){
    return this.http.delete(`${this.API_URI}/presentaciones/delete/${Presentacion_ID}`);
  }
  updatePresentacion(presenta:presentacion){
    return this.http.put(`${this.API_URI}/presentaciones/update`,presenta);
  }
}
