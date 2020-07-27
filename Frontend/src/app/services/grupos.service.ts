//modulos
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//modulos 


@Injectable({
  providedIn: 'root'
})
export class GruposService {

  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
//todas las funcionalidades de grupos

   retornarTablaGrupos(algo : number ) {    
     return this.http.get(`${this.API_URI}/${algo}/grupos`);
   }
}

