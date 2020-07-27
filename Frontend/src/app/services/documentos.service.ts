import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { documento , docc , docup } from '../models/documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) {
   }
  
  getDocumento(id:number){
    return this.http.get(`${this.API_URI}/proyectos/documento/${id}`);
  }
  getDocumentosProyecto(id:number){
    return this.http.get(`${this.API_URI}/proyectos/documentos/${id}`);
  }
  subirDocumento(docc:docc){
    var str1 = new String("http://localhost:3000/")
    docc.URL = str1.concat(docc.Nombre)
    return this.http.post(`${this.API_URI}/proyectos/documentos/crear`,docc);
  }
  deleteDocumento(id:number){
    return this.http.get(`${this.API_URI}/proyectos/documentos/eliminar/${id}`);
  }
  updateDocumento(docup:docup){
    var str1 = new String("http://localhost:3000/")
    docup.URL = str1.concat(docup.Nombre)
    return this.http.post(`${this.API_URI}/proyectos/documentos/update`,docup);
  }
  getDocURL(id:number){
    return this.http.get(`${this.API_URI}/proyectos/documentos/URL/${id}`);
  }
}
