import { Component, OnInit,HostBinding } from '@angular/core';
<<<<<<< HEAD
import { viaje } from 'src/app/models/viajes';
=======
import { viaje, viaje_id, fotos_viaje } from 'src/app/models/viajes';
>>>>>>> c9dee85ef48a3dfa3729f3aa48b78c36931f3027
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
    Fecha_inicial:'',
    Fecha_final:'',
    motivo: '',
    lugar: '',
    Proyecto_Proy_ID:1,
    Descripcion:''
  }
  proyecto_id=1;
  Ultimo_viaje:any;
  imagenes:Array<File>;
  documentos:Array<File>;

  constructor(private viajes:ViajesService, private router: Router, private activatedRoute: ActivatedRoute,private http:HttpClient) { }
<<<<<<< HEAD
    urlImg="http://localhost:3000/5d0427599bd5f.jpeg";
=======
<<<<<<< HEAD

=======
  urlImg="http://localhost:3000/5d0427599bd5f.jpeg";
>>>>>>> c9dee85ef48a3dfa3729f3aa48b78c36931f3027
>>>>>>> c54e2c49dff5931334ad14a7493aa51fd2e5a020
  ngOnInit(): void {
  }

  onImgChange(e){
    //cargo los archivos al arreglo img
    console.log(e.target.files);
    if(e.target.files.length!=0){
      this.imagenes=e.target.files;
    }
  }

  onFileChange(e){
    //cargo los archivos al arreglo documentos
    console.log("Files change",e)
    this.documentos=e.target.files;
  }

  subirImagenes(){
    if(this.imagenes.length != 0){

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
    }else{
      return "no hay imagenes para agregar!";
    };
    
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
<<<<<<< HEAD
    console.log(this.viaje.Fecha_final);
=======
<<<<<<< HEAD
    console.log(this.viaje);
    this.viajes.postViajeProyecto(this.viaje)
=======
>>>>>>> c54e2c49dff5931334ad14a7493aa51fd2e5a020
    this.viajes.postViajeProyecto(this.viaje)
      .subscribe(
        res => {
          console.log('viaje registrado con exito')
          this.Ultimo_viaje=res;
          this.guardarRutasImg();
          this.subirImagenes();
        },
        err => console.error(err)
      )
      
  }
<<<<<<< HEAD
=======
  Id_ultimo_viaje(){
    this.viajes.getUltimoViaje(1)
>>>>>>> c9dee85ef48a3dfa3729f3aa48b78c36931f3027
      .subscribe(
        res => {
          this.viaje_id=res;
          console.log(res);
          console.log(this.viaje_id)
>>>>>>> c54e2c49dff5931334ad14a7493aa51fd2e5a020

  guardarRutasImg(){
    //con esto tengo el id del ultimo viaje creado y tambien tengo el id del proyecto
    //luego 
    var inserRutaFotos:fotos_viaje={
      URL:'',
      Viaje_Viaje_ID:this.Ultimo_viaje[0].Viaje_ID,
      Viaje_Proyecto_Proy_ID:this.proyecto_id,
      Nombre:''
    };
    for (let img of this.imagenes){
      inserRutaFotos.Nombre=img.name;
      inserRutaFotos.URL='localhost:3000/'+img.name;
      console.log(inserRutaFotos);
      this.viajes.postImg(inserRutaFotos)
      .subscribe(
        res => {
          console.log(`se a agregado la ruta de ${inserRutaFotos.Nombre} correctamente a la bd!`);
          console.log(res);
        },
        err => console.error(err)
      )
    }

  }

}
