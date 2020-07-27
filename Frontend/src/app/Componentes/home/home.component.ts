import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { documento } from '../../models/home';

import { HomeService } from "../../services/home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  aux: object;
  localusarid: number;
  cantidad_de_proyectos =[];
  datos_de_los_proyectos: any =[];
  bool:boolean=true;

  datosproyectos : documento = {
    "Proy_ID": null,
    "Nombre": null,
    "Descripcion": null,
    "Estado": null
  }

  constructor(private iniciohome:HomeService, private router:Router) { }

  ngOnInit(): void {
    this.localusarid = Number(localStorage.getItem("User_ID"))
    this.iniciohome.retornarproyectos(this.localusarid).subscribe(
      res => {
        this.aux = res;
        console.log(this.aux);
        for (let index = 0; index < Object.keys(this.aux).length; index++) {
          this.iniciohome.retornardatosproyecto(Number(this.aux[index].Proyecto_Proy_ID)).subscribe(
            res => {
              this.datos_de_los_proyectos.push(res[0]);
              console.log(this.datos_de_los_proyectos);
            },
            err => console.log(err)
          )
          
        }
      },
      err => console.log(err)
    )
  }

  entrarGrupos(): void{
    console.log(this.localusarid)
    this.router.navigate([this.localusarid,'grupos' ])
    
  }

}
