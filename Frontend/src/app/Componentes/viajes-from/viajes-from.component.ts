import { Component, OnInit,HostBinding } from '@angular/core';
import { viaje, viaje_id, fotos_viaje } from 'src/app/models/viajes';
import {ViajesService} from '../../services/viajes.service';
import { Router, ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-viajes-from',
  templateUrl: './viajes-from.component.html',
  styleUrls: ['./viajes-from.component.css']
})
export class ViajesFromComponent implements OnInit {

  viaje: viaje={
    Fecha_inicial:new Date(),
    Fecha_final:new Date(),
    motivo: '',
    lugar: '',
    Proyecto_Proy_ID:'1',
    Descripcion:''
  }
  proyecto_id=1;
  viaje_id:viaje_id;
  imagenes:Array<File>;
  documentos:Array<File>;

  constructor(private viajes:ViajesService, private router: Router, private activatedRoute: ActivatedRoute,private http:HttpClient) { }
  urlImg="http://localhost:3000/5d0427599bd5f.jpeg";
  ngOnInit(): void {
  }

  onImgChange(e){
    //cargo los archivos al arreglo img
    console.log("img change",e)
    this.imagenes=e.target.files;
  }

  onFileChange(e){
    //cargo los archivos al arreglo documentos
    console.log("Files change",e)
    this.documentos=e.target.files;
  }

  subirImagenes(){
    console.log(this.imagenes)
    let formImg= new FormData();
    //con esto se reccorre el arreglo de imagenes que se quieren subir
    for (let img of this.imagenes){
      formImg.append("files",img,img.name);
    }
    console.log(formImg);
    this.http.post<any>('http://localhost:3000/viajes/multi/img',formImg).subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err)
    );
  }
  subirDoc(){
    console.log(this.documentos)
    let formDoc= new FormData();
    //con esto se reccorre el arreglo de imagenes que se quieren subir
    for (let doc of this.documentos){
      formDoc.append("documents",doc,doc.name);
    }
    console.log(formDoc);
    this.http.post<any>('http://localhost:3000/viajes/multi/doc',formDoc).subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err)
    );
  }
  saveViaje(){
    this.viajes.postViajeProyecto(this.viaje)
      .subscribe(
        res => {
          console.log('viaje registrado con exito')
        },
        err => console.error(err)
      )
      this.Id_ultimo_viaje();
      this.guardarRutasImg();
      this.subirImagenes();
  }
  Id_ultimo_viaje(){
    this.viajes.getUltimoViaje(1)
      .subscribe(
        res => {
          this.viaje_id=res;
          console.log(res);
          console.log(this.viaje_id)

        },
        err => console.error(err)
      )
  }
  guardarRutasImg(){
    //con esto tengo el id del ultimo viaje creado y tambien tengo el id del proyecto
    //luego 
    var inserRutaFotos:fotos_viaje={
      URL:'localhost:3000/',
      Viaje_Viaje_ID:this.viaje_id.viaje_ID,
      Viaje_Proyecto_Proy_ID:this.proyecto_id,
      Nombre:''
    };
    for (let img of this.imagenes){
      inserRutaFotos.Nombre=img.name;
      inserRutaFotos.URL=inserRutaFotos+img.name;

      this.viajes.postImg(inserRutaFotos)
      .subscribe(
        res => {
          console.log(`se a agregado la ruta de ${inserRutaFotos.Nombre} correctamente a la bd!`)
        },
        err => console.error(err)
      )
    }

  }

}
