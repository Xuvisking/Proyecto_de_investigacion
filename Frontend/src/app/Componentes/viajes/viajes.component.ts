import { Component, OnInit} from '@angular/core';
import {ViajesService} from '../../services/viajes.service';
@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {
  imagenes:any=["http://localhost:3000/alma.jpg","http://localhost:3000/eclipse%20solar.jpg"];
  //guarda todos los viajes del proyecto
  viajes: any=[];
  //guarda en el arreglo el viaje con el id seleccionado
  vjs: any=[];
  //guarda la pos del viaje selcciones
  viajeID:number;
  //para mostrar o no el listado de viajes
  bool:boolean=true;
  //traer este valor por localStorage o por parametro url
  proyecto_id:number=1;
  constructor(private viaje:ViajesService) { }
  

  ngOnInit(): void {
<<<<<<< HEAD
    this.getViajesProyecto();
  }
  mostrarViaje(viaje_id:string){
    this.bool=false;
    for (let viaje of this.viajes){

      if(viaje.Viaje_ID == viaje_id){
        console.log('entre en la condicion :D')
        this.vjs=viaje;
      }
    }
  }
  volver(){
    this.bool=true;
  }
  getViajesProyecto(){
    this.viaje.getViajesProyecto(this.proyecto_id).subscribe(
=======
    this.viaje.getViajesID(1).subscribe(
>>>>>>> 022080ae8db759c4f770bb00af6c235c0530b383
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
}
