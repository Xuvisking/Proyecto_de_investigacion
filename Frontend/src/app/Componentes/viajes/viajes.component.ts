import { Component, OnInit } from '@angular/core';
import {EventosService} from '../../services/eventos.service';
@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.sass']
})
export class ViajesComponent implements OnInit {
  
  viajes: any=[];
  constructor(private eventos:EventosService) { }
  

  ngOnInit(): void {
    this.eventos.getViajesProyecto(1).subscribe(
      res=>{
        this.viajes=res;
        console.log(this.viajes)
      },
      
      err=>console.log(err)
    )

  }

}
