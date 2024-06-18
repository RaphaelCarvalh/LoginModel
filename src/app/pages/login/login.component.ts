import { Component } from '@angular/core';
import { AuthserviceService } from 'src/app/services/shared/authservice.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public usuario: Usuario = new Usuario();

  constructor(public  authService : AuthserviceService) { }
  
  ngOnit(){}

  fazerLogin() {
    console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  
}
}
