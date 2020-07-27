import { Component, OnInit ,Input, HostBinding } from '@angular/core';
import { DocumentosService } from 'src/app/services/documentos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.sass']
})
export class DocumentosComponent implements OnInit {

  Proy_ID = null;
  Documentacion : any=[];
  Documentacionaux : any=[];
  bool:boolean=true;
  trustedDashboardUrl : SafeUrl;
  pagina: number = 1;
  url:any;
  gestion:boolean=true;
  ruta:any;

  constructor(private docserv: DocumentosService, private router: Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.Proy_ID = params.id
      this.getDocumentacion()
    }
  }

  borrarDocumento(id:number) {
    this.docserv.deleteDocumento(id)
      .subscribe(
        res => {
          console.log(res);
          this.getDocumentacion();
        },
        err => console.error(err)
      )
  }

  getDocumentacion(){
    this.docserv.getDocumentosProyecto(this.Proy_ID).subscribe(
      res=>{
        this.Documentacion = res;
        console.log(this.Documentacion);
        },
      err=>console.log(err)
    )
  }

  mostrarDocumento(id:string){
    this.bool=false;
    for (let docaux of this.Documentacion){
      if(docaux.Doc_ID == id){
        this.Documentacionaux=docaux;
        console.log(this.Documentacionaux.Doc_ID);
      }
    }
    this.docserv.getDocURL(this.Documentacionaux.Doc_ID).subscribe(
      res=>{
        this.url=res;
      },
      err=>console.log(err)
    );
  }

  enrutar(){
    this.router.navigate(['/proyecto/documentos/crear']);
  }

  update(){
    var striy = new String('/proyecto/documentos/update/')
    this.ruta = striy.concat(this.Proy_ID)
    this.router.navigate([this.ruta]);
  }

}
