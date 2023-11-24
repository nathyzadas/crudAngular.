import { Component } from '@angular/core';
import { PessoaService } from 'src/app/model/pessoa.service';
import { Pessoa } from 'src/app/model/pessoa';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atualizar-pessoa',
  templateUrl: './atualizar-pessoa.component.html',
  styleUrls: ['./atualizar-pessoa.component.css']
})
export class AtualizarPessoaComponent {
  dados:Pessoa={
    id:0,
    nome:'',
    descricao:'',
    valor:'',
    quantidade:''
}
constructor(private service:PessoaService, 
  private router:Router, private route:ActivatedRoute) { }

ngOnInit(): void {
  const id = this.route.snapshot.paramMap.get('id');
 if(id){
  this.service.getPessoa(id).subscribe(
   (response: Pessoa)=>{
    this.dados = response
   }
  )
 } 
}

atualizar(){
  this.service.updade(this.dados, this.dados.id).subscribe(
 ()=>{
  alert ("Dados atualizados com sucesso"); 
  this.router.navigate(['/pessoa']);
 },
 (error)=>{
  console.log('erro ao atualizar',error);
 }
  )
}
} 
