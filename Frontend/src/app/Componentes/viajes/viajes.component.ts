import { Component, OnInit} from '@angular/core';
import {ViajesService} from '../../services/viajes.service';
import {DomSanitizer,SafeUrl} from '@angular/platform-browser';
@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {
  gestion:boolean=false;
  documentos:any=[];
  imagenes:any=[];
  //guarda todos los viajes del proyecto
  viajes: any=[];
  //guarda en el arreglo el viaje con el id seleccionado
  vjs: any=[];
  //para mostrar o no el listado de viajes
  bool:boolean=true;
  //traer este valor por localStorage o por parametro url
  proyecto_id:number=1;
  p: number = 1;
  URLimg:any=[];
  URLdoc:any=[];
  constructor(private viaje:ViajesService, private sanador:DomSanitizer) { }
  

  ngOnInit(): void {
    this.getViajesProyecto();
  }
  mostrarViaje(viaje_id:string){
    this.bool=false;
    for (let via of this.viajes){

      if(via.Viaje_ID == viaje_id){
        console.log('entre en la condicion :D')
        this.vjs=via;
        console.log(this.vjs.Viaje_ID);
        console.log(viaje_id);
        this.viaje.getImagenes(viaje_id).subscribe(
          res=>{
            this.imagenes=res;
            console.log(this.imagenes)
            this.sanarURL();
            },
          err=>console.log(err)
        );
        this.viaje.getListadoDocumentos(viaje_id).subscribe(
          res=>{
            this.documentos=res;
            console.log(this.documentos)
            this.sanarDoc();
            },
          err=>console.log(err)
        )
      }
    }
  }

  sanarURL(){
    for(let i in this.imagenes){
      //this.ayudante=this.sanador.bypassSecurityTrustResourceUrl(this.imagenes[i].URL);
      this.imagenes[i].URL=this.sanador.bypassSecurityTrustUrl(this.imagenes[i].URL);
      
    }console.log(this.imagenes);
  }
  sanarDoc(){
    for(let i in this.documentos){
      //this.ayudante=this.sanador.bypassSecurityTrustResourceUrl(this.documentos[i].URL);
      this.documentos.push(this.sanador.bypassSecurityTrustUrl(this.documentos[i].URL));
    }
  }
  volver(){
    this.bool=true;
  }
  getViajesProyecto(){
    this.viaje.getViajesProyecto(this.proyecto_id).subscribe(
      res=>{
        this.viajes=res;
        console.log(this.viajes)
        },
      err=>console.log(err)
    )
  }
  deleteviaje(id:number) {
    this.viaje.deleteViaje(id)
      .subscribe(
        res => {
          console.log(res);
          this.getViajesProyecto();
        },
        err => console.error(err)
      )
  }
  CambiarGestion(){
    if(this.gestion == false){
      this.gestion=true;
    }
    else{
      this.gestion=false;
    }
    console.log(this.gestion)
  }
}
