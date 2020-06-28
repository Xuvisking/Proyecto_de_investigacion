import { Component, OnInit } from '@angular/core';
import { reunion,Doc_reunion} from '../../models/reuniones'
import {ReunionesService} from '../../services/reuniones.service'
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.sass']
})
export class ReportesComponent implements OnInit {

  constructor( ) { }
  ngOnInit(): void {
  };
}

