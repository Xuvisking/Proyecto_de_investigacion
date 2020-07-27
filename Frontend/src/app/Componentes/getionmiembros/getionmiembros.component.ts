import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { Gestionmiembros } from '../../services/gestionmiembros.service'
import { userandjpid } from '../../models/IDJPIDuser'
import { userandproyecto , useridandname , userandproyectoID ,userIDnoJP, cambiarprivilegio } from '../../models/userandproyeccto'
import { Invproyecto } from '../../models/invproyecto'

@Component({
  selector: 'app-getionmiembros',
  templateUrl: './getionmiembros.component.html',
  styleUrls: ['./getionmiembros.component.sass']
})
export class GetionmiembrosComponent implements OnInit {

  actualJPID: number;
  actualProyID: number;

  aux: any =[];
  usernamereturn: string;
  response: string; 
  JPandpermiso: any =[];
  userlist: any =[];
  usernojplist: any =[];
  usernamelist: any =[];
  arrayuseridlist: any =[]
  userandusernamelist: useridandname={
    User_ID:null,
    Usuario:null
  }
  usuario: userandjpid = {
    users_User_ID: null,
    Proyecto_Proy_ID: null
  }
  useryproyec: userandproyecto = {
    Proyecto_Proy_ID: null,
    Email: null
  }
  cambiarpriv: cambiarprivilegio = {
    users_User_ID_JP: null,
    users_User_ID: null,
    Proyecto_Proy_ID: null
  }
  useryproyecID: userandproyectoID = {
    users_User_ID: null,
    Proyecto_Proy_ID: null
  }
  useridnojp: userIDnoJP = {
    Proyecto_Proy_ID: null,
    JP: 0
  }
  invtuser:Invproyecto = {
    Fecha: '2020-06-25',
    Estado: 'En espera',
    Proyecto_Proy_ID: null,
    users_User_ID: null
  }

  constructor(private gestionMiembros: Gestionmiembros, private router:Router) { }

  ngOnInit(): void {
    this.actualJPID = Number(localStorage.getItem("User_ID"))
    this.actualProyID = Number(localStorage.getItem("Proy_ID"))
    this.usuario.users_User_ID = this.actualJPID
    this.usuario.Proyecto_Proy_ID = this.actualProyID
    
    this.gestionMiembros.retornarsiesjp(this.usuario).subscribe(
      res => {
        if (res === false){
          alert("No eres Jefe de Proyecto")
          this.router.navigate(['/home']);
        }
      },
      err => console.log(err)
    )
    this.useridnojp.Proyecto_Proy_ID = this.actualProyID
    this.gestionMiembros.Get_listmemberIDnoJP(this.useridnojp).subscribe(
      res => {
        this.usernojplist = res;
        for (let index = 0; index < this.usernojplist.length; index++) {
          this.gestionMiembros.Get_listmemberUsername(this.usernojplist[index].users_User_ID).subscribe(
            res => {
              this.usernamelist.push(res[0]);
              this.aux.push(res[0].Usuario);
              this.gestionMiembros.Get_UserIDbyusername(this.aux[index]).subscribe(
                res => {
                  this.arrayuseridlist.push({"User_ID": res[0].User_ID ,"Usuario":this.aux[index]});
                  console.log(this.arrayuseridlist);
                },
                err => console.log(err)
              )
            },
            err => console.log(err)
          )
          
        } 
      },
      err => console.log(err)
    )
  }

  invitarmiembro(): void{
    this.invtuser.Proyecto_Proy_ID = this.useryproyec.Proyecto_Proy_ID
    this.gestionMiembros.Get_UserID(this.useryproyec).subscribe(
      res => {
        this.invtuser.users_User_ID = res[0].User_ID;
        this.invtuser.Proyecto_Proy_ID = this.actualProyID;
        this.gestionMiembros.Invmiemb(this.invtuser).subscribe(
          res => {
            console.log(res);
            alert("Usuario invitado!")
          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  }

  eliminarmienbro(): void{
    this.useryproyecID.Proyecto_Proy_ID = this.actualProyID;
    this.gestionMiembros.Eliminarmember(this.useryproyecID).subscribe(
      res => {
        console.log(res);
        alert("Usuario eliminado!")
      },
      err => console.log(err)
    )
  }

  cambiarJP(): void{
    if(confirm('Estas seguro de querer cambiar de Jefe de Proyecto?')){
      this.cambiarpriv.users_User_ID_JP=this.actualJPID
      this.cambiarpriv.Proyecto_Proy_ID=this.actualProyID
      console.log(this.cambiarpriv)
      this.gestionMiembros.cambiarprivilegios(this.cambiarpriv).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        err => console.log(err)
      )
    }
  }

}