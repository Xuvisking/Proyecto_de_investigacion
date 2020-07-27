import { Component, OnInit } from '@angular/core';
import {GruposService} from '../../services/grupos.service';
import { Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  User_ID : any;
  Grupo_ID: any;
  grupos : any = [ ]
  //tablaGrupos: tablaGrupos = {
    //nombre: null,                 //?:obligatorio 
    //descripcion: null, 
    //url:null 
  //}
  
  constructor(private gruposServices : GruposService, private router: Router , private _route :ActivatedRoute) { 
    this.User_ID = this._route.snapshot.paramMap.get('User_ID')
    this.Grupo_ID = this._route.snapshot.paramMap.get('grupo.Grupo_ID')
    console.log(this.grupos.Grupo_ID);
    console.log('ppp');

  }

  ngOnInit(): void {
    this.User_ID = this._route.snapshot.paramMap.get('User_ID')
    console.log('111');
    console.log(this.User_ID);

    this.gruposServices.retornarTablaGrupos(this.User_ID).subscribe(
      res => {
        this.grupos = res;
        console.log(res)
      },
      err => console.error(err)
      
    )

  }
  opcionesGrupos( id : number): void{
    console.log(id)
    this.router.navigate(['grupos','gestion' , id]) }

    crearGrupo(): void{
      this.router.navigate([+localStorage.getItem("User_ID"),'grupos','crear' ]);
  
    }
    informacionGrupo( id : number ): void{
      this.router.navigate([ 'grupos','grupo', id]);
  
    }
    verMiembroGrupo (id : number) : void{
      console.log(id);
      this.router.navigate([ 'grupo','miembros', id]);
  
    }
}
