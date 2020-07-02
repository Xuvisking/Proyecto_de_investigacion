import { Component, OnInit } from '@angular/core';
import {GrupoListMiembrosService} from '../../services/grupolistmiembros';
import { ActivatedRoute } from '@angular/router';
//modelo
import { tablagrupos } from '../../models/tablagrupos';
import { tablauser } from '../../models/tablauser'


@Component({
  selector: 'app-grupolistmiembros',
  templateUrl: './grupolistmiembros.component.html',
  styleUrls: ['./grupolistmiembros.component.css']
})
export class GrupoListMiembrosComponent implements OnInit {
  tablauser : tablauser = {
    Usuario: null,
    Descripcion : null,
  }
  bool:boolean = true;
  grupos : any = [ ];
  users : any = [ ];
  reponse : any = [ ];
  
  constructor(private grupolistmiembrosServices : GrupoListMiembrosService, private rutaActiva : ActivatedRoute ) { }

  ngOnInit(): void {
    const params = this.rutaActiva.snapshot.params;
    if (params.Grupo_ID) {
      this.grupolistmiembrosServices.retornarmiembroslist(params.Grupo_ID).subscribe(
          res => {
            console.log(res);
            this.users = res;
            console.log(this.users);
          },
          err => console.log(err)
        )
    }
  }
}
