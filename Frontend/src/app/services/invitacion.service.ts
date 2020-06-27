import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { invitaciondepro , add_proyecto } from "../models/invitacion";

@Injectable({
  providedIn: 'root'
})
export class InvitacionService {

  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) {}

  get_datos_invitacion(invitacion: invitaciondepro){
    return this.http.get(`${this.API_URI}/invitacion/getdata/${invitacion.users_User_ID}`);
  }
  aceptar(aceptarinv: add_proyecto){
    return this.http.post(`${this.API_URI}/invitacion/ingresarproyecto/`, aceptarinv);
  }
  rechazar(deleteinv: invitaciondepro){
    return this.http.get(`${this.API_URI}/invitacion/deletedata/${deleteinv.INV_ID}`);
  }
  retornarnameproyecto(nameproy: invitaciondepro){
    return this.http.get(`${this.API_URI}/invitacion/proyectname/${nameproy.Proyecto_Proy_ID}`);
  }
}
