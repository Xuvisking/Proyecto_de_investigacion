import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { form_proyecto , user_and_proy_id } from "../models/generarproyecto";

@Injectable({
  providedIn: 'root'
})
export class GenerarproyectoService {

  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) { }

  sendform(form: form_proyecto){
    return this.http.post(`${this.API_URI}/proyecto/generarproy`, form)
  }
  setjp(proyjp:user_and_proy_id){
    return this.http.post(`${this.API_URI}/proyecto/vincularJPproy`, proyjp)
  }
}
