import { Component, OnInit } from '@angular/core';
import { GrupoCrearService } from '../../services/grupocrear.service'
import { grupomiembros } from '../../models/grupomiembros'
import { tablagrupos } from '../../models/tablagrupos'
import {ActivatedRoute} from '@angular/router'
import { Router} from '@angular/router';


@Component({
  selector: 'app-grupocrear', 
  templateUrl: './grupocrear.component.html',
  styleUrls: ['./grupocrear.component.css']
})
export class GrupoCrearComponent implements OnInit {
  variab: any = [];
  User_ID: any;
  Grupo_ID : any;

  tablagrupos: tablagrupos = {
    Nombre: null,
    Descripcion: null,
    URL: null,
  }
  grupomiembros: grupomiembros = {
    Grupo_Grupo_ID: null,
    users_User_ID: null,
    Admin: 1,
  }


  constructor(private grupocrearservice: GrupoCrearService , private _route :ActivatedRoute , private router: Router) {
    this.User_ID = this._route.snapshot.paramMap.get('User_ID')
   }


  ngOnInit(): void {
    console.log("Estoy funcionando!!!!")
    console.log(this.User_ID);

  }

  CrearGrupo(): void{
    this.grupocrearservice.retornartablagrupos(this.tablagrupos).subscribe(
      res => {
        this.grupomiembros.Grupo_Grupo_ID = Number(res);
        this.grupomiembros.users_User_ID = this.User_ID;
        this.grupocrearservice.asociar(this.grupomiembros).subscribe(
          res => {
            this.variab = res;
            console.log(this.Grupo_ID);
            alert('Grupo creado')
          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  }



}
