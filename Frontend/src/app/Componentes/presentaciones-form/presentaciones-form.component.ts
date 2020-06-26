import { Component, OnInit } from '@angular/core';
import { PresentacionesService } from 'src/app/services/presentaciones.service';
import {presentacion} from '../../models/presentaciones';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-presentaciones-form',
  templateUrl: './presentaciones-form.component.html',
  styleUrls: ['./presentaciones-form.component.css']
})
export class PresentacionesFormComponent implements OnInit {

  
  documentos:Array<File>;
  presentacion:presentacion={
    Titulo:'',
    Fecha:'',
    Lugar:'',
    Presentador:'',
    Descripcion:'',
    Proyecto_Proy_ID:null
  }
  constructor(private presen:PresentacionesService,private http:HttpClient) { }
  ngOnInit(): void {
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
}
