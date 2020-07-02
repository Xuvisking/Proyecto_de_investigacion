import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//modelos
import { tablagrupos } from '../models/tablagrupos';


@Injectable({
  providedIn: 'root'
})
export class GrupoVerService {
  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) {
  }

  retornartablagrupos(id:number){
    return this.http.get(`${this.API_URI}/grupos/grupo/${id}`)
  }
}