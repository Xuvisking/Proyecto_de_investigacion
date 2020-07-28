 import { Component, OnInit } from '@angular/core';
import { GrupoMiembrosEliminarService } from '../../services/grupomiembroseliminar.service'
import { grupomiembros } from '../../models/grupomiembros'
import { Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-grupomiembroseliminar', 
  templateUrl: './grupomiembroseliminar.component.html',
  styleUrls: ['./grupomiembroseliminar.component.css']
})
export class GrupoMiembrosEliminarComponent implements OnInit {
  Grupo_ID : any;
  grupomiembros: grupomiembros = {
    Grupo_Grupo_ID: null,
    users_User_ID: null,
    Admin: null,
  }

  variab: any = [];


  constructor(private grupomiembroseliminarservice: GrupoMiembrosEliminarService,  private _route :ActivatedRoute, private router: Router) {
    this.Grupo_ID = this._route.snapshot.paramMap.get('Grupo_ID')

   }

  ngOnInit(): void {
    console.log("Estoy funcionando!!!!")
    console.log(this.Grupo_ID);
  }

  EliminarMiembro(): void{
    this.grupomiembroseliminarservice.eliminargrupomiembros(this.grupomiembros).subscribe(
      res => {
        this.variab = res;
        alert('Miembro Eliminado')
      },
      err => console.log(err)
    )
  }



}
