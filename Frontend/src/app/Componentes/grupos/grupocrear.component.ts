import { Component, OnInit } from '@angular/core';
import { GrupoCrearService } from '../../services/grupocrear.service'
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

  tablagrupos: tablagrupos = {
    Nombre: null,
    Descripcion: null,
    URL: null,
  }

  constructor(private grupocrearservice: GrupoCrearService , private _route :ActivatedRoute , private router: Router) {
    this.User_ID = this._route.snapshot.paramMap.get('User_ID')
    console.log(this.User_ID);
   }


  ngOnInit(): void {
    console.log("Estoy funcionando!!!!")
    
  }

  CrearGrupo(): void{
    this.grupocrearservice.retornartablagrupos(this.tablagrupos).subscribe(
      res => {
        this.variab = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }



}
