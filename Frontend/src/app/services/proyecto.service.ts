import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { proyecto } from '../models/proyecto'

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  API_URI = 'http://localhost:3000';

  constructor(private http:HttpClient) {
  }

  getProyecto(id : number){
    return this.http.get(`${this.API_URI}/proyectos/${id}`);
  }

  MostrarNombre(id : number){
    return this.http.get(`${this.API_URI}/proyectos/nombre/${id}`);
  }
}
