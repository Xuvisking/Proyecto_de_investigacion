import { Component, OnInit } from '@angular/core';
import {ViajesService} from '../../services/viajes.service';
@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {
  
  viajes: any=[];
  constructor(private viaje:ViajesService) { }
  

  ngOnInit(): void {
    this.viajes.getViajesProyecto(1).subscribe(
      res=>{
        this.viajes=res;
        console.log(this.viajes)
      },
      
      err=>console.log(err)
    )

  }

}
