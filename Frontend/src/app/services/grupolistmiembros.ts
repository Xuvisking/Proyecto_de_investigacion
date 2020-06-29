import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//modelos
import { tablagrupos } from '../models/tablagrupos';
import { grupomiembros } from '../models/grupomiembros';


@Injectable({
  providedIn: 'root'
})
export class GrupoListMiembrosService {
  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) {
  }

  retornarmiembroslist(id:number){
    return this.http.get(`${this.API_URI}/grupo/miembros/${id}`)
  }
}