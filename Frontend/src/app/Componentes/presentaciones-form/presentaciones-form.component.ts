import { Component, OnInit } from '@angular/core';
import { PresentacionesService } from 'src/app/services/presentaciones.service';
import {presentacion,Doc_presentacion} from '../../models/presentaciones';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-presentaciones-form',
  templateUrl: './presentaciones-form.component.html',
  styleUrls: ['./presentaciones-form.component.css']
})
export class PresentacionesFormComponent implements OnInit {
  //variables
  edit:boolean=false;
  proyecto_id=1;
  documentos:Array<File>;
  presentacion:presentacion={
    Presentacion_ID:null,
    Titulo:'',
    Fecha:'',
    Lugar:'',
    Presentador:'',
    Descripcion:'',
    Proyecto_Proy_ID:null
  }
  Ultima_presentacion:any;
  //constructor
  constructor(private presen:PresentacionesService,private router: Router,private activatedRoute: ActivatedRoute,private http:HttpClient) { }
  ngOnInit(): void {
    //si es que existe parametro es por que estamos en udpdate
    const params = this.activatedRoute.snapshot.params;
    if (params.id && params.id!=0) {
      this.presen.getPresentacion(params.id)
        .subscribe(
          res => {
            this.presentacion= res[0];
            console.log(this.presentacion)

            this.edit = true;
            console.log(this.edit);
          },
          err => console.log(err)
        )
    }
  }
  ActualizarPresentacion(){
    delete this.presentacion.Proyecto_Proy_ID;
    this.presen.updatePresentacion(this.presentacion)
      .subscribe(
        res => {
          console.log('Presentacion actualizado con exito')
         console.log(res);
          //actualizar imagenes y/o docuemntos
          this.guardarRutasDoc();
          this.subirDoc();
          this.router.navigate(['presentaciones']);
        },
        err => console.error(err)
      )

  }
  onFileChange(e){
    //cargo los archivos al arreglo documentos
    if(e.target.files.length!=0){
    console.log("Files change",e);
    this.documentos=e.target.files;
    }
  }
  subirDoc(){
    let formDoc= new FormData();
    //con esto se reccorre el arreglo de doc que se quieren subir
    for (let doc of this.documentos){
      formDoc.append("documents",doc,doc.name);
    }
    console.log(formDoc);
    this.http.post<any>('http://localhost:3000/viajes/multi/doc',formDoc).subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err)
    );
  }
  savePresentacion(){
    if(this.presentacion.Lugar!=''){
      delete this.presentacion.Presentacion_ID;
      this.presentacion.Proyecto_Proy_ID=this.proyecto_id;
      console.log(this.presentacion);
      this.presen.postPresentacion(this.presentacion)
      .subscribe(
        res => {
          console.log('viaje registrado con exito')
          this.Ultima_presentacion=res;
          console.log(this.Ultima_presentacion);
          this.guardarRutasDoc();
          this.subirDoc();
          this.router.navigate(['/presentaciones']);
        },
        err => console.error(err)
      )
    }else{
      console.log("parametros nulos")
      this.router.navigate(['/presentaciones']);
    }
  }
  guardarRutasDoc(){
    //con esto tengo el id del ultimo viaje creado y tambien tengo el id del proyecto
    //luego 
    var inserRutaDoc:Doc_presentacion={
      URL:'',
      Presentacion_Presentacion_ID:null,
      Presentacion_Proyecto_Proy_ID:this.proyecto_id,
      Nombre:''
    };
    if(this.edit){
      inserRutaDoc.Presentacion_Presentacion_ID=this.presentacion.Presentacion_ID;
    }else{
      inserRutaDoc.Presentacion_Presentacion_ID=this.Ultima_presentacion[0].Presentacion_ID;
    }

    for (let doc of this.documentos){
      inserRutaDoc.Nombre=doc.name;
      inserRutaDoc.URL='http://localhost:3000/download/'+doc.name;
      console.log(inserRutaDoc);
      debugger
      this.presen.postDoc(inserRutaDoc)
      .subscribe(
        res => {
          console.log(`se a agregado la ruta de ${inserRutaDoc.Nombre} correctamente a la bd!`);
          console.log(res);
        },
        err => console.error(err)
      )
    }
  }
}
