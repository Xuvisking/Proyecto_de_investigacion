import { Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/services/documentos.service';
import { documento, docup, docc } from '../../models/documento';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documentos-form',
  templateUrl: './documentos-form.component.html',
  styleUrls: ['./documentos-form.component.sass']
})

export class DocumentosFormComponent implements OnInit {
  auxiliar:boolean=false;
  Proy_ID:number;
  gestion:boolean = true;

  documento:documento={
    Doc_ID:null,
    Nombre:'',
    Descripcion:'',
    Proy_ID:null,
    URL: ''
  }

  docup:docup={
    Nombre: '',
    Descripcion: '',
    URL: '',
    Doc_ID:null
  }

  docc:docc={
    Nombre: '',
    Descripcion: '',
    Proy_ID: null,
    URL: ''
  }

  constructor(private Docu:DocumentosService , private router: Router,private activatedRoute: ActivatedRoute,private http:HttpClient) { }


  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id && params.id!=0) {
      this.Docu.getDocumento(params.id).subscribe(
          res => {
            this.documento= res[0];
            this.Proy_ID = this.documento.Proy_ID
            console.log(this.documento)
            this.auxiliar = true;
            console.log(this.auxiliar);
          },
          err => console.log(err)
        )
    }
    else{
      this.Proy_ID = Number(localStorage.getItem("Proy_ID"));
      this.docc.Proy_ID = Number(localStorage.getItem("Proy_ID"));
    }
  }

  ActualizarDocumentacion(){
    this.docup.Nombre=this.documento.Nombre
    this.docup.Descripcion=this.documento.Descripcion
    this.docup.Doc_ID=this.documento.Doc_ID
    this.Docu.updateDocumento(this.docup).subscribe(
      res => {
        console.log('Documento actualizado con exito')
        console.log(res);
        var strx = new String ('/proyecto/')
        this.router.navigate([strx.concat(localStorage.getItem("Proy_ID"))]);
      },
      err => console.error(err)
    )
  }

  NewDocumento(){
    this.docc.Nombre=this.documento.Nombre
    this.docc.Descripcion=this.documento.Descripcion
    this.Docu.subirDocumento(this.docc).subscribe(
      res => {
        console.log('Documento registrado con exito')
        console.log(res)
        var strx = new String ('/proyecto/')
        this.router.navigate([strx.concat(localStorage.getItem("Proy_ID"))]);
      },
      err => console.error(err)
    )
  }

  delDocumento(){
    this.Docu.deleteDocumento(this.documento.Doc_ID).subscribe(
      res => {
        console.log('Documento eliminado con exito')
        console.log(res)
        var strx = new String ('/proyecto/')
        this.router.navigate([strx.concat(localStorage.getItem("Proy_ID"))]);
      },
      err => console.error(err)
    )
  }
}
