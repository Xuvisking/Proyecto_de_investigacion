import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { userandjpid } from '../models/IDJPIDuser';
import { userandproyecto , userandproyectoID , userIDnoJP , cambiarprivilegio} from '../models/userandproyeccto';
import { Invproyecto } from '../models/invproyecto';

@Injectable({
  providedIn: 'root'
})
export class Gestionmiembros {
  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) {

  }
  /* ejemplo de service
   getBuscarPacienteAPI(id:string){//buscar paciente por rut
    return this.http.get(`${this.API_URI}/paciente/${id}`);//son backtick de jav `` alt+parentecis
  }
  getGames() {
    return this.http.get(`${this.API_URI}/games`);
  }

  getGame(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }

  saveGame(game: Game) {
    return this.http.post(`${this.API_URI}/games`, game);
  }

  updateGame(id: string|number, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URI}/games/${id}`, updatedGame);
  }

  */
  retornarsiesjp(ids: userandjpid){
    return this.http.post(`${this.API_URI}/mienbros_proyectos/privilegiojp`, ids)
  }
  Get_UserID(username: userandproyecto) {
    return this.http.get(`${this.API_URI}/mienbros_proyectos/getuseridbyemail/${username.Email}`);
  }
  Invmiemb(idsJPUser: Invproyecto) {
    return this.http.post(`${this.API_URI}/mienbros_proyectos/invitarmiembro`,idsJPUser);
  }
  Get_listmemberID(Proyecto_ID: number) {
    return this.http.get(`${this.API_URI}/mienbros_proyectos/memberlist/${Proyecto_ID}`);
  }
  Get_listmemberUsername(username: number) {
    return this.http.get(`${this.API_URI}/mienbros_proyectos/userlist/${username}`);
  }
  Eliminarmember(sen_IDS: userandproyectoID) {
    return this.http.post(`${this.API_URI}/mienbros_proyectos/eliminarmiembro`,sen_IDS);
  }
  Get_listmemberIDnoJP(idnojp: userIDnoJP){
    return this.http.post(`${this.API_URI}/mienbros_proyectos/miembrosnojp`,idnojp);
  }
  cambiarprivilegios(privilegio: cambiarprivilegio){
    return this.http.post(`${this.API_URI}/mienbros_proyectos/cambiarJP`,privilegio);
  }
}