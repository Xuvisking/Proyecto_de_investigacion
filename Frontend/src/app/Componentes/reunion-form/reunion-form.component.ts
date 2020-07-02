import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { reunion, Doc_reunion, participante} from 'src/app/models/reuniones';
import {ReunionesService} from '../../services/reuniones.service'

@Component({
  selector: 'app-reunion-form',
  templateUrl: './reunion-form.component.html',
  styleUrls: ['./reunion-form.component.sass']
})
export class ReunionFormComponent implements OnInit {
  //variables aux
  aux=0;
  participantes:any=[];
  colaboradores:any=[];
  Seleccion:string='';
  edit:boolean=false;
  proyecto_id=1;
  documentos:Array<File>;
  reunion:reunion={
    Reunion_ID:null,
    Titulo:'',
    Fecha:'',
    Lugar:'',
    Descripcion:'',
    Proyecto_Proy_ID:null
  }
  Ultima_reunion:any;
  constructor(  private reunionServi:ReunionesService,private router: Router,private activatedRoute: ActivatedRoute,private http:HttpClient) { }
  opcionSeleccionado: string  = '0'; // Iniciamos
  verSeleccion: string        = '';
  
  ngOnInit(): void {
    console.log(this.documentos)
    //si es que existe parametro es por que estamos en udpdate
    const params = this.activatedRoute.snapshot.params;
    if (params.id && params.id!=0) {
      this.reunionServi.getReunion(params.id)
        .subscribe(
          res => {
            this.reunion= res[0];
            console.log(this.reunion)
            this.edit = true;
            console.log(this.edit);
            this.reunionServi.getParticipante(this.reunion.Reunion_ID).subscribe(
              res=>{
                this.participantes=res;
                console.log('participantes',res)
              },
                err=>console.log(err)
            );
          },
          err => console.log(err)
        );
    }
    this.reunionServi.getColaboradores(this.proyecto_id).subscribe(
      res=>{
        this.colaboradores=res;
        console.log('colaboradores',res)
      },
        err=>console.log(err)
    );

    
  }
  anadirParticipante(){
    this.participantes.push(this.colaboradores[Number(this.verSeleccion)-1]);
    console.log(this.participantes)
  }
  capturar() {
    this.verSeleccion = this.opcionSeleccionado;
    console.log(this.verSeleccion)
  }
  ActualizarReunion(){
    delete this.reunion.Proyecto_Proy_ID;
    this.reunionServi.updateReunion(this.reunion)
      .subscribe(
        res => {
          console.log('reunion actualizado con exito')
         console.log(res);
          this.guardarRutasDoc();
          this.subirDoc();
          //actualizar imagenes y/o docuemntos
          this.router.navigate(['reuniones']);
        },
        err => console.error(err)
      )
      var pari:participante={
        Reunion_Reunion_ID:this.reunion.Reunion_ID,
        Reunion_Proyecto_Proy_ID:this.proyecto_id,
        users_User_ID:null
      }
      //Guardar participantes
        if(this.participantes[0].User_ID){
          for(let i of this.participantes){
          pari.users_User_ID=i.User_ID;
          this.reunionServi.postParticipante(pari).subscribe(
            res => {
              console.log(`se a agregado participante correctamente`);
            },
            err => console.error(err)
          )
         }
        }
  }
  onFileChange(e){
    //cargo los archivos al arreglo documentos
    this.aux=this.aux+1;
    if(e.target.files.length!=0){
    console.log("Files change",e);
    this.documentos=e.target.files;
    console.log(this.documentos);
    }
  }
  subirDoc(){
    let formDoc= new FormData();
    //con esto se reccorre el arreglo de doc que se quieren subir
    if(this.aux!=0){
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
  saveReunion(){
    if(this.reunion.Lugar!='' && this.reunion.Titulo!='' && this.reunion.Descripcion!='' && this.reunion.Fecha!=''){
      delete this.reunion.Reunion_ID;
      this.reunion.Proyecto_Proy_ID=this.proyecto_id;
      console.log(this.reunion);
      this.reunionServi.postReunion(this.reunion)
      .subscribe(
        res => {
          console.log('viaje registrado con exito')
          this.Ultima_reunion=res;
          console.log(this.Ultima_reunion[0].Reunion_ID);
          var pari:participante={
            Reunion_Reunion_ID:this.Ultima_reunion[0].Reunion_ID,
            Reunion_Proyecto_Proy_ID:this.proyecto_id,
            users_User_ID:null
          }
          this.guardarRutasDoc();
          this.subirDoc();
          //Guardar participantes
          if(this.participantes[0].User_ID){
            console.log('estoy en participantes')
            for(let i of this.participantes){
            console.log(i);
            pari.users_User_ID=i.User_ID;
            this.reunionServi.postParticipante(pari).subscribe(
              res => {
                console.log(`se a agregado participante correctamente`);
              },
              err => console.error(err)
            )
            }
          }
          this.router.navigate(['/reuniones']);
        },
        err => console.error(err)
      )
    }else{
      console.log("parametros nulos")
      this.router.navigate(['/reuniones']);
    }
  }
  guardarRutasDoc(){
    //con esto tengo el id del ultimo viaje creado y tambien tengo el id del proyecto
    //luego 
    var inserRutaDoc:Doc_reunion={
      URL:'',
      Reunion_Reunion_ID:null,
      Reunion_Proyecto_Proy_ID:this.proyecto_id,
      Nombre:''
    };
    if(this.edit){
      inserRutaDoc.Reunion_Reunion_ID=this.reunion.Reunion_ID;
    }else{
      inserRutaDoc.Reunion_Reunion_ID=this.Ultima_reunion[0].Reunion_ID;
    }
    if(this.aux!=0){
      for (let doc of this.documentos){
            inserRutaDoc.Nombre=doc.name;
            inserRutaDoc.URL='http://localhost:3000/download/'+doc.name;
            console.log(inserRutaDoc);
            this.reunionServi.postDoc(inserRutaDoc)
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

}
