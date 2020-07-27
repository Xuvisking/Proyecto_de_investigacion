import { Component, OnInit } from '@angular/core';
import { GruposMiembrosService } from '../../services/gruposmiembros.service'
import { grupomiembros } from '../../models/grupomiembros'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-grupomiembros', 
  templateUrl: './grupomiembros.component.html',
  styleUrls: ['./grupomiembros.component.css']
})
export class GrupoMiembroComponent implements OnInit {

  grupomiembros: grupomiembros = {
    Grupo_Grupo_ID: null,
    users_User_ID: null,
    Admin: null,
  }

  variab: any = [];
Grupo_ID : any;

  constructor(private grupomiembrosservice: GruposMiembrosService , private _route :ActivatedRoute) {
    this.Grupo_ID = this._route.snapshot.paramMap.get('Grupo_ID')
    console.log(this.Grupo_ID);
   }

  ngOnInit(): void {
    console.log("Estoy funcionando!!!!")
  }

  AgregarMiembro(): void{
    this.grupomiembrosservice.retornargrupomiembros(this.grupomiembros).subscribe(
      res => {
        this.variab = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }



}
