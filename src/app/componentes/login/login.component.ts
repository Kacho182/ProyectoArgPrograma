import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
    isLogginFail = false;
    loginUsuario!: LoginUsuario;
    nombreUsuario!: string;
    password!: string;
    roles: string[] = [];
    errorMsj!: String;


  
  constructor( private tokenService: TokenService, private authService:AuthService, private ruta:Router){

    



    /*this.form=this.formBuilder.group(
      {
        usuario:['', [Validators.required, Validators.email]],
        contraseña:['',[Validators.required, Validators.minLength(8)]],
        deviceInfo:this.formBuilder.group({
          deviceId: [""],
          deviceType:[""],
          notificationToken:[""]
        })
      }
    )*/
  }

  
  ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged = true;
        this.isLogginFail = false;
        this.roles = this.tokenService.getAuthorities();
      }
  }

  


  onlogin(): void {
    console.log("Iniciando sesión...");
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
      this.isLogged = true;
      this.isLogginFail = false;
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.ruta.navigate(['/portfolio'])
    }, err =>{
      this.isLogged = false;
      this.isLogginFail = true;
      if (err && err.error && err.error.mensaje) {
        this.errorMsj = err.error.mensaje;
      } else {
        this.errorMsj = 'Error desconocido';
      }
    })
}
}
