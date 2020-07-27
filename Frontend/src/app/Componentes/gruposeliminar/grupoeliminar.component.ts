import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GrupoEliminarService } from '../../services/grupoeliminar.service';
import { GrupoVerService } from '../../services/grupover.service';
import { tablagrupos } from '../../models/tablagrupos';

@Component({
  selector: 'app-grupoeliminar', 
  templateUrl: './grupoeliminar.component.html',
  styleUrls: ['./grupoeliminar.component.css']
})
export class GrupoEliminarComponent implements OnInit {
  tablagrupos: tablagrupos = {
    Grupo_ID: null,
    Nombre: null,
    Descripcion: null,
    URL: null,
  }
  grupo : { Grupo_ID : any};
  variab: any = [];
  reponse : any = [];

  constructor(private grupoverservice: GrupoVerService ,private grupoeliminarservice: GrupoEliminarService, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.rutaActiva.snapshot.params;
    if (params.Grupo_ID) {
      this.grupoverservice.retornartablagrupos(params.Grupo_ID).subscribe(
          res => {
            console.log(res);
            this.tablagrupos = res[0];
          
          },
          err => console.log(err)
        )
    }
  }

  EliminarGrupo(): void{
    this.grupoeliminarservice.retornartablagrupos(this.tablagrupos.Grupo_ID).subscribe(
      res => {
        this.variab = res;
        console.log(res);
        alert('Grupo eliminado')
      },
      err => console.log(err)
    )
  }



}
