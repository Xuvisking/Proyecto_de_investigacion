import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { loginin } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) {}

  loginserver(login: loginin){
    return this.http.post(`${this.API_URI}/login/loginin`, login)
  }
  Get_UserID(user_id: loginin) {
    return this.http.get(`${this.API_URI}/mienbros_proyectos/getuseridbyemail/${user_id.Email}`);
  }

}
