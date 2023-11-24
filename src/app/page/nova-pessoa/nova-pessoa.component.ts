import { Component } from '@angular/core';
import { PessoaService } from 'src/app/model/pessoa.service';
import { Pessoa } from 'src/app/model/pessoa';
import { NgForm } from '@angular/forms';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-pessoa',
  templateUrl: './nova-pessoa.component.html',
  styleUrls: ['./nova-pessoa.component.css']
})
export class NovaPessoaComponent {
  dados:Pessoa={
    id:0,
    nome:'',
    descricao:'',
    valor:'',
    quantidade:''
  }

  constructor(private service:PessoaService, private router:Router) { }



  enviarForm(form:NgForm){
  const pessoa: Pessoa = form.value;
  this.service.addNew(pessoa).subscribe(
    (response:any)=>{
  
      alert ("Nova pessoa cadrastrada");
      this.router.navigate(['/pessoa']);
    },
    (error:any)=>{
      console.log('erro ao cadastrar',error);
    }
  )
  }
}

/*import { Component } from '@angular/core';
import { PessoaService } from 'src/app/model/pessoa.service';
import { Pessoa } from 'src/app/model/pessoa';
import { NgForm } from '@angular/forms';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';


import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-pessoa',
  templateUrl: './nova-pessoa.component.html',
  styleUrls: ['./nova-pessoa.component.css']
})
export class NovaPessoaComponent {

  registrar : FormGroup;

  dados:Pessoa={
    id:'',
    nome:'',
    idade:'',
    email:''
  }

  constructor(private service:PessoaService, private router:Router, private formBuilder:FormBuilder) { 

    this.registrar = new FormGroup({});

   }

   ngOnInit () {

    this.registrar = this.formBuilder.group({
      // Agora vamos declarar cada variavel de cada campo label que temos no HTML desse component.

      nome : ['' , Validators.required],
      idade : ['' , Validators.required],

      // Setivermos mais de uma condição, abrimos outros casal de ' [] ' dentro do casal principal.
      email : ['' , [Validators.required , Validators.email]], // Validação específica para o Email. 

    })

  }
  
  // onSubmit -> Impirme na tela e dá a mensagem de erro.
  enviarForm() {

    if (this.registrar.valid) {
      
      console.log(this.registrar.value);

    } else {
      
      alert("Preencha todos os campos corretamente");

    }

  }


  enviarForm(form:NgForm){
  const pessoa: Pessoa = form.value;
  this.service.addNew(pessoa).subscribe(
    (response:any)=>{
  
      alert ("Nova pessoa cadrastrada");
      this.router.navigate(['/']);
    },
    (error:any)=>{
      console.log('erro ao cadastrar',error);
    }
  )
  }

  

}*/

