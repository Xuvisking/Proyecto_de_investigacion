import { Component, OnInit } from '@angular/core';
import { PresentacionesService } from 'src/app/services/presentaciones.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-presentaciones',
  templateUrl: './presentaciones.component.html',
  styleUrls: ['./presentaciones.component.css']
})
export class PresentacionesComponent implements OnInit {
  //llenar arreglos con documentos
  documentos:any;
  //guarda todos los viajes del proyecto
  presentaciones: any=[];
  //guarda en el arreglo el viaje con el id seleccionado
  PresentacionAux: any=[];
  //guarda la pos del viaje seleccionado
  viajeID:number;
  //para mostrar o no el listado de viajes
  bool:boolean=true;
  //traer este valor por localStorage o por parametro url
  proyecto_id:number=1;
  //confiar en urls
  trustedDashboardUrl : SafeUrl;
  constructor(private present:PresentacionesService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getPresentacionesProyecto();

    };

  mostrarPresentacion(presentacion_id:string){
    this.bool=false;
    for (let presentacion of this.presentaciones){
      if(presentacion.Presentacion_ID == presentacion_id){
        this.PresentacionAux=presentacion;
        console.log(this.PresentacionAux.Presentacion_ID);
      }
    }
    this.present.getDocumentos(this.PresentacionAux.Presentacion_ID).subscribe(
      res=>{
        this.documentos=res;
      },
      err=>console.log(err)
    );
  }
  volver(){
    this.bool=true;
  }
  getPresentacionesProyecto(){
    this.present.getPresentacionesProyecto(this.proyecto_id).subscribe(
      res=>{
        this.presentaciones=res;
        console.log(this.presentaciones);
        },
      err=>console.log(err)
    )
  }
  
  deletePresentacion(id:number) {
    this.present.deletePresentacion(id)
      .subscribe(
        res => {
          console.log(res);
          this.getPresentacionesProyecto();
        },
        err => console.error(err)
      )
  }

}
