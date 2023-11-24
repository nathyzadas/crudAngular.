import { Component } from '@angular/core';

import { FirebaseloginService } from 'src/app/model/firebaselogin.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/model/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  email = "";
  senha = "";
  msg = "";

  constructor ( private service : FirebaseloginService , private router : Router , private tokenService: TokenService ) {


  }

  login() {

    if ( this.email && this.senha) {

      this.service.login(this.email, this.senha).then(

        result => {

          console.log('Usuario logado!!!' , result.user);
          this.tokenService.enviartoken(this.email);
          this.router.navigate(['/pessoa'])
      
        }

      ).catch(

        error =>{

          console.log('Erro ao fazer login' , error);
          this.msg ="erro ao fazer login"
        }

      )

    } else {

      console.log('Por favor, preencha todos os campos corretamente')
      this.msg ="Por favor, preencha todos os campos corretamente"
    } 

  }

}






