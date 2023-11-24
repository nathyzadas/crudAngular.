import { Component } from '@angular/core';
import { Carrinho } from 'src/app/model/carrinho';
import { CarrinhoService } from 'src/app/model/carrinho.service';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {

  carrinho:Carrinho[] = [];

  constructor(private service: CarrinhoService) {
    this.carrinho = service.getCarinho();
  }
adicionarItem():void{
  const novoItem:Carrinho = {

    id: this.carrinho.length + 1,
    nome: 'Produto' + (this.carrinho.length +1),
    preco: Math.random() * 100,
    quantidade: 1

  }
  
  this.service.addItem(novoItem);
  this.carrinho = this.service.getCarinho();

}
removerItem(item: Carrinho){
  this.service.removeItem(item);
  this.carrinho = this.service.getCarinho();
}
aumentarQuantidade(item: Carrinho){
  item.quantidade++;
  this.service.atualiarQuantidade(item);
  this.carrinho = this.service.getCarinho();
}
limparCarrinho(){
  this.service.limparCarrinho();
  this.carrinho =[];
}
total():number{
  return this.service.getTotal();
}
}
