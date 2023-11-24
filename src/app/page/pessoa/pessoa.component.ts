import { Component } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa';
import { PessoaService } from 'src/app/model/pessoa.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent {
  pessoas: Pessoa[]=[];
  constructor(private service:PessoaService, private router : Router){}
  ngOnInit(){
    this.listarPessoas();
  }
  listarPessoas():void{
    this.service.getPessoas().subscribe(
      pessoas =>{
        this.pessoas=pessoas;
      },
      error =>{
        console.log(error);
      }
    )
  }
  excluir(id:any){
    this.service.excluir(id).subscribe(
      ()=>{
        alert ("pessoa excluidos com sucesso"); 
       
      }
    )
    this.listarPessoas();
  }

  sair() {

    localStorage.removeItem('token');
    localStorage.removeItem('expiracao');
    this.router.navigate(['/']);

  }
}




