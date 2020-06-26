import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresentacionesService {

  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) {
   }
  
  getPresentacionesProyecto(id_proyecto:number){
    return this.http.get(`${this.API_URI}/viajes/${id_proyecto}`);
  }
  subirDocumentos(formData){
    return this.http.post(`${this.API_URI}/presentaciones/doc`,formData);
  }
}
