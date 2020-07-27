import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//modelos
import { grupomiembros } from '../models/grupomiembros';

@Injectable({
  providedIn: 'root'
})
export class GruposMiembrosService {
  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) { 
  }

  retornargrupomiembros(algo: grupomiembros){
    console.log(algo);
    return this.http.post(`${this.API_URI}/grupos/grupo/miembros/agregar/`,algo)
  }
}

