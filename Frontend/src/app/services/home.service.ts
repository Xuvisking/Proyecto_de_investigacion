import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { documento } from '../models/home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  retornarproyectos(user_id: number){
    return this.http.get(`${this.API_URI}/home/retornarproy/${user_id}`);
  }
  retornardatosproyecto(proy_id: number){
    return this.http.get(`${this.API_URI}/home/retornarproydata/${proy_id}`);
  }
}
