import { Component, OnInit} from '@angular/core';
import {ViajesService} from '../../services/viajes.service';
@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.sass']
})
export class ViajesComponent implements OnInit {
  imagenes:any=["http://localhost:3000/5d0427599bd5f.jpeg","http://localhost:3000/5d0427599bd5f.jpeg","http://localhost:3000/5d0427599bd5f.jpeg","http://localhost:3000/5d0427599bd5f.jpeg","http://localhost:3000/5d0427599bd5f.jpeg"];
  viajes: any=[];
  constructor(private viaje:ViajesService) { }
  

  ngOnInit(): void {
    this.viaje.getViajesID(1).subscribe(
      res=>{
        this.viajes=res;
        console.log(this.viajes)
      },
      err=>console.log(err)
    )

  }
}
