import { Component, OnInit } from '@angular/core';
import {ReunionesService} from '../../services/reuniones.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-reuniones',
  templateUrl: './reuniones.component.html',
  styleUrls: ['./reuniones.component.sass']
})
export class ReunionesComponent implements OnInit {

  constructor( private reunion:ReunionesService,private sanitizer: DomSanitizer) { }

  participantes:any=[];
  gestion:boolean=false;
  //llenar arreglos con documentos
  documentos:any;
  //guarda todos los viajes del proyecto
  reuniones: any=[];
  //guarda en el arreglo el viaje con el id seleccionado
  ReunionAux: any=[];
  //guarda la pos del viaje seleccionado
  reunionID:number;
  //para mostrar o no el listado de viajes
  bool:boolean=true;
  //traer este valor por localStorage o por parametro url
  proyecto_id:number=parseInt(localStorage.getItem("Proy_ID"));
  //confiar en urls
  pagina: number = 1;

  ngOnInit(): void {
    this.getReunionesProyecto();

    };

    mostrarReunion(reunion_id:string){
    this.bool=false;
    for (let reu of this.reuniones){
      if(reu.Reunion_ID == reunion_id){
        this.ReunionAux=reu;
        console.log(this.ReunionAux.Reunion_ID);
      }
    }
    this.reunion.getDocumentos(this.ReunionAux.Reunion_ID).subscribe(
      res=>{
        this.documentos=res;
        this.sanarDoc();
      },
      err=>console.log(err)
    );
    this.reunion.getParticipante(this.ReunionAux.Reunion_ID).subscribe(
      res=>{
        this.participantes=res;
        console.log('participantes',res)
      },
      err=>console.log(err)
    );
  }
  sanarDoc(){
    for(let i in this.documentos){
      //this.ayudante=this.sanador.bypassSecurityTrustResourceUrl(this.documentos[i].URL);
      this.documentos.push(this.sanitizer.bypassSecurityTrustUrl(this.documentos[i].URL));
    }
  }
  volver(){
    this.bool=true;
  }
  getReunionesProyecto(){
    this.reunion.getReunionesProyecto(this.proyecto_id).subscribe(
      res=>{
        this.reuniones=res;
        console.log(this.reuniones);
        },
      err=>console.log(err)
    )
  }
  
  deleteReunion(id:number) {
    this.reunion.deleteReunion(id)
      .subscribe(
        res => {
          console.log(res);
          
        },
        err => console.error(err)
      )
      this.getReunionesProyecto();
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
