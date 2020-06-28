import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { reunion,Doc_reunion,participante} from '../models/reuniones'

@Injectable({
  providedIn: 'root'
})
export class ReunionesService {

  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) {
   }
   reuniones
  getReunion(id_reunion:number){
    return this.http.get(`${this.API_URI}/reunion/${id_reunion}`);
  }
  getReunionesProyecto(id_proyecto:number){
    return this.http.get(`${this.API_URI}/reuniones/${id_proyecto}`);
  }
  subirDocumentos(formData){
    return this.http.post(`${this.API_URI}/reuniones/doc`,formData);
  }
  postDoc(doc:Doc_reunion){
    return this.http.post(`${this.API_URI}/reuniones/multi/create`,doc);
  }
  postReunion(reu:reunion){
    return this.http.post(`${this.API_URI}/reuniones/create`,reu);
  }
  getDocumentos(reunion_id:number){
    return this.http.get(`${this.API_URI}/reuniones/documentos/${reunion_id}`);
  }
  deleteReunion(reunion_id:number){
    return this.http.delete(`${this.API_URI}/reuniones/delete/${reunion_id}`);
  }
  updateReunion(reu:reunion){
    return this.http.put(`${this.API_URI}/reuniones/update`,reu);
  }
  postParticipante(participante:participante){
    return this.http.post(`${this.API_URI}/reuniones/participante/create`,participante);
  }
  getParticipante(Reunion_ID:number){
    return this.http.get(`${this.API_URI}/reuniones/participantes/${Reunion_ID}`);
  }
  getColaboradores(proy_id:number){
    return this.http.get(`${this.API_URI}/reuniones/participantes/proy/${proy_id}`);
  }
}
