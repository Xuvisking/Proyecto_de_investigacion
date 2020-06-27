import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "../../services/login.service";
import { loginin, loginuserid } from "../../models/login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  User_ID: string;

  Login: loginin = {
    Email: null,
    Password: null
  }

  constructor(private Loginservices: LoginService, private router:Router) { }

  ngOnInit(): void { }

  Logear(): void{
    this.Loginservices.loginserver(this.Login).subscribe(
      res => {
        if (res === true){
          console.log("contraseña buena")
          this.Loginservices.Get_UserID(this.Login).subscribe(
            res => {
              console.log(res[0].User_ID);
              localStorage.setItem('User_ID', JSON.stringify(res[0].User_ID));
            },
            err => console.log(err)
          )
          this.router.navigate(['home']);
        } else{
          alert("Email o contraseña incorrecta, por favor ingrese nuevamente")
        }
      },
      err => console.log(err)
    )
  }

}
