<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit} from '@angular/core';
>>>>>>> c9dee85ef48a3dfa3729f3aa48b78c36931f3027
import {ViajesService} from '../../services/viajes.service';
@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {
  imagenes:any=["http://localhost:3000/5d0427599bd5f.jpeg","http://localhost:3000/5d0427599bd5f.jpeg","http://localhost:3000/5d0427599bd5f.jpeg","http://localhost:3000/5d0427599bd5f.jpeg","http://localhost:3000/5d0427599bd5f.jpeg"];
  viajes: any=[];
  constructor(private viaje:ViajesService) { }
  

  ngOnInit(): void {
<<<<<<< HEAD
    this.viajes.getViajesProyecto(1).subscribe(
=======
    this.viaje.getViajesID(1).subscribe(
>>>>>>> c9dee85ef48a3dfa3729f3aa48b78c36931f3027
      res=>{
        this.viajes=res;
        console.log(this.viajes)
      },
      err=>console.log(err)
    )

  }
}
