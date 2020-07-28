import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//modelos
import { tablagrupos } from '../models/tablagrupos';
import { grupomiembros } from '../models/grupomiembros';



@Injectable({
  providedIn: 'root'
})
export class GrupoCrearService {
  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) {
  }

  retornartablagrupos(algo: tablagrupos ){
    return this.http.post(`${this.API_URI}/grupos/crear`,algo)
  }
  asociar(algo: grupomiembros){
    console.log(algo);
    return this.http.post(`${this.API_URI}/grupos/grupo/miembros/agregar/`,algo)
  }


}
