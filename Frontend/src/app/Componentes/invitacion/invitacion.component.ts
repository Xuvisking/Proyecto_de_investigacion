import { Component, OnInit } from '@angular/core';
import { InvitacionService } from "../../services/invitacion.service";
import { invitaciondepro, add_proyecto } from "../../models/invitacion";
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.sass']
})
export class InvitacionComponent implements OnInit {

  Name_proy: string;

  invitaciondata: invitaciondepro = {
    INV_ID: null,
    Fecha: null,
    Estado: null,
    Proyecto_Proy_ID: null,
    users_User_ID: null
  }

  add_tabla: add_proyecto = {
    Proyecto_Proy_ID: null,
    users_User_ID: null
  }

  constructor(private invitacion: InvitacionService, private router:Router) { }

  ngOnInit(): void {
    this.invitaciondata.users_User_ID = Number(localStorage.getItem("User_ID")); 
    this.invitacion.get_datos_invitacion(this.invitaciondata).subscribe(
      res => {
        this.invitaciondata.INV_ID = res[0].INV_ID
        this.invitaciondata.Fecha = res[0].Fecha
        this.invitaciondata.Estado = res[0].Estado
        this.invitaciondata.Proyecto_Proy_ID = res[0].Proyecto_Proy_ID
        
        console.log(res)
        this.invitacion.retornarnameproyecto(this.invitaciondata).subscribe(
          res => {
            console.log(res[0])
            this.Name_proy = res[0].Nombre;
            console.log(res)
          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
    console.log(this.Name_proy)
  }

  aceptar_inv(): void{
    this.add_tabla.Proyecto_Proy_ID = this.invitaciondata.Proyecto_Proy_ID
    this.add_tabla.users_User_ID = this.invitaciondata.users_User_ID
    this.invitacion.aceptar(this.add_tabla).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
    this.invitacion.rechazar(this.invitaciondata).subscribe(
      res => {
        console.log(res)
        alert("Invitacion aceptada con exito")
        this.router.navigate(['/home']);
      },
      err => console.log(err)
    )

  }
  rechazar_inv(): void{
    this.invitacion.rechazar(this.invitaciondata).subscribe(
      res => {
        console.log(res)
        alert("Invitacion rechazada con exito")
        this.router.navigate(['/home']);
      },
      err => console.log(err)
    )
  }
}
