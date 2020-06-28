import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { form_proyecto , user_and_proy_id} from "../../models/generarproyecto";

import { GenerarproyectoService } from "../../services/generarproyecto.service";

@Component({
  selector: 'app-generarproyecto',
  templateUrl: './generarproyecto.component.html',
  styleUrls: ['./generarproyecto.component.sass']
})
export class GenerarproyectoComponent implements OnInit {

  jpandproy: user_and_proy_id = {
    users_User_ID: null,
    Proyecto_Proy_ID: null,
  }

  send_form_proy: form_proyecto = {
    Nombre: null,
    Descripcion: null,
    Estado: "En curso"
  }

  constructor(private generarproyecto: GenerarproyectoService, private router:Router) { }

  ngOnInit(): void {
    this.jpandproy.users_User_ID = Number(localStorage.getItem("User_ID"))
  }

  enviarformulario(): void{
    this.generarproyecto.sendform(this.send_form_proy).subscribe(
      res => {
        this.jpandproy.Proyecto_Proy_ID = res[0].Proy_ID;
        console.log(res);
        this.generarproyecto.setjp(this.jpandproy).subscribe(
          res => {
            console.log(res);
            alert("Proyecto creado con exito!")
            this.router.navigate(['/home']);
          },
          err => console.log(err)
        )
      },
      err => console.log(err)
    )
  } 

}
