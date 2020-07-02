 import { Component, OnInit } from '@angular/core';
import { GrupoMiembrosEliminarService } from '../../services/grupomiembroseliminar.service'
import { grupomiembros } from '../../models/grupomiembros'

@Component({
  selector: 'app-grupomiembroseliminar', 
  templateUrl: './grupomiembroseliminar.component.html',
  styleUrls: ['./grupomiembroseliminar.component.css']
})
export class GrupoMiembrosEliminarComponent implements OnInit {

  grupomiembros: grupomiembros = {
    Grupo_Grupo_ID: null,
    users_User_ID: null,
    Admin: null,
  }

  variab: any = [];


  constructor(private grupomiembroseliminarservice: GrupoMiembrosEliminarService) { }

  ngOnInit(): void {
    console.log("Estoy funcionando!!!!")
  }

  EliminarMiembro(): void{
    this.grupomiembroseliminarservice.eliminargrupomiembros(this.grupomiembros).subscribe(
      res => {
        this.variab = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }



}
