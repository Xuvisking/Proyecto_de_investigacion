import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProyectoService } from '../../services/proyecto.service';
import { proyectobd } from '../../models/proyectobd';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.sass']
})

export class ProyectoComponent implements OnInit {

  @HostBinding('class') clases = 'row';

  response: any = [];

  datos: proyectobd = {
    Descripcion: null,
    Estado: null,
    Nombre: null,
    Proy_ID: null,
  }

  edit: boolean = false;
  boolPresentacion:boolean=false;
  boolViajes:boolean=false;
  i:number=0;
  j:number=0;
  constructor(private ProyectoData : ProyectoService,  private router: Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.ProyectoData.getProyecto(params.id).subscribe(
          res => {
            console.log(res);
            this.datos = res;
            localStorage.setItem('Proy_ID', JSON.stringify(res[0].Proy_ID));
            console.log(this.datos[0].Proy_ID);
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }
  mostrarPresentacion(){
    this.i=this.i+1;
    if (this.i%2==1){
      this.boolPresentacion=true;
    }else{
      this.boolPresentacion=false;
    }
  }
  mostrarViaje(){
    this.j=this.j+1;
    if (this.j%2==1){
      this.boolViajes=true;
    }else{
      this.boolViajes=false;
    }

  }
}
