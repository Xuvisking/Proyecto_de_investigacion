import { Component, OnInit,HostBinding } from '@angular/core';
import { viaje } from 'src/app/models/viajes';
import {EventosService} from '../../services/eventos.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viajes-from',
  templateUrl: './viajes-from.component.html',
  styleUrls: ['./viajes-from.component.sass']
})
export class ViajesFromComponent implements OnInit {

  viaje: viaje={
    Fecha_Ini:new Date(),
    Fecha_Fin:new Date(),
    motivo: '',
    lugar: '',
    Proyecto_Proy_ID:'1',

  }
  constructor(private eventos:EventosService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveViaje(){
    console.log(this.viaje);
    this.eventos.postViajeProyecto(this.viaje)
      .subscribe(
        res => {
          console.log(res);
        },
        err => console.error(err)
      )
  }
}
