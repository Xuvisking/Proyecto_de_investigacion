import { Component, OnInit,  Input , HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { gestionproyectoservice } from '../../services/gestionproyecto.service';
import { cambionombre } from '../../models/cambionombre';
import { cambiodescripcion } from '../../models/cambiodescripcion';
import { cambioestado } from '../../models/cambioestado';

import { userandjpid } from '../../models/IDJPIDuser'
import { Gestionmiembros } from '../../services/gestionmiembros.service'

@Component({
  selector: 'app-gestionproyecto',
  templateUrl: './gestionproyecto.component.html',
  styleUrls: ['./gestionproyecto.component.sass']
})
export class GestionproyectoComponent implements OnInit {

  actualJPID: number;
  actualProyID: number;
  usuario: userandjpid = {
    users_User_ID: null,
    Proyecto_Proy_ID: null
  }

  response: any = [];
  Proy_ID : number;
  cnombre: cambionombre = {
    Nombre : null,
    Proy_ID : this.Proy_ID,
  }
  cdescripcion: cambiodescripcion = {
    Descripcion : null,
    Proy_ID : this.Proy_ID,
  } 
  cestado: cambioestado = {
    Estado : null,
    Proy_ID : this.Proy_ID,
    
  }
  edit: boolean = false;

  constructor(private gestionMiembros: Gestionmiembros, private ProyectoCambio : gestionproyectoservice, private router: Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.Proy_ID = params.id;
      this.edit = true;
    }
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
  }

  ModificarNombre(): void{
    this.cnombre.Proy_ID = Number(this.Proy_ID)
    this.cnombre.Nombre = this.cnombre.Nombre.toString()
    console.log(this.cnombre)
    this.ProyectoCambio.CambiarNombre(this.cnombre).subscribe(res => console.log(res),req => console.log(req))
    alert("Nombre modificado")
  }

  ModificarDescripcion(): void{
    this.cdescripcion.Proy_ID = Number(this.Proy_ID)
    this.cdescripcion.Descripcion = this.cdescripcion.Descripcion.toString()
    console.log(this.cdescripcion)
    this.ProyectoCambio.CambiarDescripcion(this.cdescripcion).subscribe(res => console.log(res),req => console.log(req))
    alert("Descripcion modificada")
  }
  
  ModificarEstado(): void{
    this.cestado.Proy_ID = Number(this.Proy_ID)
    this.cestado.Estado = this.cestado.Estado.toString()
    console.log(this.cestado)
    this.ProyectoCambio.CambiarEstado(this.cestado).subscribe(res => console.log(res),req => console.log(req))
    alert("Estado modificado")
  }
  EliminarProyecto(): void{
    if(confirm('Estas seguro de eliminar el proyecto?')){
      this.ProyectoCambio.DeleteProyecto(this.Proy_ID).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        req => console.log(req))  
    }
  }
}

