import { Component, OnInit,HostBinding } from '@angular/core';
import { viaje } from 'src/app/models/viajes';
import {EventosService} from '../../services/eventos.service';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-viajes-from',
  templateUrl: './viajes-from.component.html',
  styleUrls: ['./viajes-from.component.sass']
})
export class ViajesFromComponent implements OnInit {

  viaje: viaje={
    Fecha_Ini:new Date(),
    Fecha_Fin:new Date(),
    motivo: '',
    lugar: '',
    Proyecto_Proy_ID:'1',

  }
  imagenes:Array<File>;

  constructor(private eventos:EventosService, private router: Router, private activatedRoute: ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
  }

  onFileChange(e){
    //cargo los archivos al arreglo img

    //me falta enviarselos a la api y tamo listos perro papa apu
    console.log("Files change",e)
    this.imagenes=e.target.files;
  }
  subirImagenes(){
    console.log(this.imagenes)
    let formImg= new FormData();
    //con esto se reccorre el arreglo de imagenes que se quieren subir
    for (let img of this.imagenes){
      formImg.append("files",img,img.name);
    }
    this.http.post<any>('http://localhost:3000/viajes/multi/img',formImg).subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err)
    );
  }
  saveViaje(){
    console.log(this.viaje);
    this.eventos.postViajeProyecto(this.viaje)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
  }
}
