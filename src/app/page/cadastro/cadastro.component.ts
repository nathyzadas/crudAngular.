import { Component } from '@angular/core';
import { FirebaseloginService } from 'src/app/model/firebaselogin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
email:string='';
senha:string='';
msg:string='';

constructor(private service:FirebaseloginService,private router: Router){}

  registrar(){

    if(this.email && this.senha){

      this.service.cadastro(this.email,this.senha).then(

        result =>{

          console.log('Usuario cadastrado com sucesso: ',result);

          alert("usuario cadastrado com sucesso");

          this.router.navigate(['/']);

        }

      ).catch(

        error =>{

          console.log('Erro ao tentar se cadastrar: ',error);

          this.msg='Erro ao se cadastrar';

        }

      )
      
    }else{

      this.msg='Por favor, preencha todos os campos';

    }

  }

}
