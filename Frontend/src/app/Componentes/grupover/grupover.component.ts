import { Component, OnInit } from '@angular/core';
import {GrupoVerService} from '../../services/grupover.service';
import { ActivatedRoute } from '@angular/router';
//modelo
import { tablagrupos } from '../../models/tablagrupos';

@Component({
  selector: 'app-grupover',
  templateUrl: './grupover.component.html',
  styleUrls: ['./grupover.component.css']
})
export class GrupoVerComponent implements OnInit {
  tablagrupos: tablagrupos = {
    Descripcion: null,
    Grupo_ID: null,
    Nombre: null,
    URL: null,
  }
  

  grupos : any = [ ];
  reponse : any = [ ];
  
  constructor(private grupoverServices : GrupoVerService, private rutaActiva : ActivatedRoute ) { }

  ngOnInit(): void {
    const params = this.rutaActiva.snapshot.params;
    if (params.Grupo_ID) {
      this.grupoverServices.retornartablagrupos(params.Grupo_ID).subscribe(
          res => {
            console.log(res);
            this.tablagrupos = res[0];

          },
          err => console.log(err)
        )
    }
  }
}
