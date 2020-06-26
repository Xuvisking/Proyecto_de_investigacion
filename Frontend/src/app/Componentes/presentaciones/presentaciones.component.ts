import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-presentaciones',
  templateUrl: './presentaciones.component.html',
  styleUrls: ['./presentaciones.component.css']
})
export class PresentacionesComponent implements OnInit {
  public isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }

}
