import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router'
import { idmiembro } from '../../models/idmiembro'


//import {GestionGruposService} from '../../services/gestion-grupos.service';
@Component({
  selector: 'app-gestion-grupos',
  templateUrl: './gestion-grupos.component.html',
  styleUrls: ['./gestion-grupos.component.sass']
})
export class GestionGruposComponent implements OnInit {
  Grupo_ID : any ;
  idmiembro: idmiembro = {
    User_ID: null
  }

  constructor( private _route :ActivatedRoute, private router: Router) { 
    this.Grupo_ID = this._route.snapshot.paramMap.get('Grupo_ID')
    console.log(this.Grupo_ID);
    console.log('olas')
  }
 
  ngOnInit(): void {

    res  =>{
      this.Grupo_ID = res;
    }


  }
  agregarMiembro(): void{
    this.router.navigate(['miembros','agregar' ])

  }
  eliminarGrupo(): void{
   
    this.router.navigate(['grupos','grupo','eliminar',this.Grupo_ID])

  }
  eliminarMiembro(): void{
   
    this.router.navigate(['grupo','eliminarmiembros'])

  }

  

}
